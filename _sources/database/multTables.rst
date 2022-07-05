Programming with multiple tables
--------------------------------
.. index::
    pair: Database; Constraints

We will now redo the Twitter spider program using two tables, the
primary keys, and the key references as described above. Here is the
code for the new version of the program:

.. code-block::

    import json
    import sqlite3
    import twitter_info
    import tweepy
    import os

    # Set up OAuth2 for access to twitter
    auth = tweepy.OAuth2BearerHandler(twitter_info.bearer_token)
    api = tweepy.API(auth, wait_on_rate_limit=True)

    # set up the database tables
    dir = os.path.dirname(__file__) + os.sep
    conn = sqlite3.connect(dir + 'friends.db')
    cur = conn.cursor()
    cur.execute('''CREATE TABLE IF NOT EXISTS People
               (id INTEGER PRIMARY KEY, name TEXT UNIQUE, retrieved INTEGER)''')
    cur.execute('''CREATE TABLE IF NOT EXISTS Follows
               (from_id INTEGER, to_id INTEGER, UNIQUE(from_id, to_id))''')

    # Loop till the user enters quit
    while True:
        acct = input('Enter a Twitter screen name, or hit enter, or type quit: ')
        if (acct == 'quit'): break # user entered quit, so stop
        if (len(acct) < 1): # user hit enter, pick someone to visit

            # select a screen name that hasn't been visited yet
            cur.execute('SELECT id, name FROM People WHERE retrieved = 0 LIMIT 1')
            try:
                (id, acct) = cur.fetchone()
            except:
                print('No unretrieved Twitter accounts found')
                continue

        # See if the screen name (acct) is in the database
        cur.execute('SELECT id FROM People WHERE name = ? LIMIT 1',
                   (acct, ))
        try:
            # it is so get the key (id)
            id = cur.fetchone()[0]
        except:
            # not there so add it
            cur.execute('''INSERT OR IGNORE INTO People
                       (name, retrieved) VALUES (?, 0)''', (acct, ))
            conn.commit()
            if cur.rowcount != 1:
                print('Error inserting account:', acct)
                continue
            id = cur.lastrowid

        print('Retrieving account', acct)

        try:
            idList = api.get_friend_ids(screen_name=acct)

        except Exception as err:
            print('Failed to Retrieve', err)
            break

        # Update the database to show that we have retrieved
        cur.execute('UPDATE People SET retrieved=1 WHERE name = ?', (acct, ))

        # loop through the idList
        countnew = 0
        countold = 0
        highest = min(len(idList), 5) # in case have less than 5 friends
        for i in range(highest):
            currId = idList[i]
            friend = api.get_user(user_id=currId)
            screenName = friend.screen_name

            # get the key for this screen name
            cur.execute('SELECT id FROM People WHERE name = ? LIMIT 1',
                       (screenName, ))

            # if found it then add one to count old
            try:
                friend_id = cur.fetchone()[0]
                countold = countold + 1

            # if didn't find it insert it
            except:
                cur.execute('''INSERT OR IGNORE INTO People (name, retrieved)
                            VALUES (?, 0)''', (screenName, ))
                conn.commit()
                if cur.rowcount != 1:
                    print('Error inserting account:', screenName)
                    continue
                friend_id = cur.lastrowid
                countnew = countnew + 1
            cur.execute('''INSERT OR IGNORE INTO Follows (from_id, to_id)
                        VALUES (?, ?)''', (id, friend_id))
        print('New accounts=', countnew, ' revisited=', countold)
        conn.commit()
    cur.close()


This program is starting to get a bit complicated, but it illustrates
the patterns that we need to use when we are using integer keys to link
tables. The basic patterns are:


* Create tables with primary keys and constraints.

* When we have a logical key for a person (i.e., account name) and we need the
  ``id`` value for the person, depending on whether or not the person is already
  in the ``People`` table we either need to: (1) look up the person in the ``People``
  table and retrieve the ``id`` value for the person or (2) add the person to the
  ``People`` table and get the ``id`` value for the newly added row.

* Insert the row that captures the "follows" relationship.

We will cover each of these in turn.

Constraints in database tables
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

As we design our table structures, we can tell the database system that
we would like it to enforce a few rules on us. These rules help us from
making mistakes and introducing incorrect data into out tables. When we
create our tables:

.. code-block:: python

    cur.execute('''CREATE TABLE IF NOT EXISTS People
        (id INTEGER PRIMARY KEY, name TEXT UNIQUE, retrieved INTEGER)''')
    cur.execute('''CREATE TABLE IF NOT EXISTS Follows
        (from_id INTEGER, to_id INTEGER, UNIQUE(from_id, to_id))''')

We indicate that the ``name`` column in the ``People``
table must be ``UNIQUE``. We also indicate that the combination
of the two numbers in each row of the ``Follows`` table must be
unique. These constraints keep us from making mistakes such as adding
the same relationship more than once.

We can take advantage of these constraints in the following code:

.. code-block:: python

    cur.execute('''INSERT OR IGNORE INTO People (name, retrieved)
        VALUES ( ?, 0)''', ( friend, ) )

We add the ``OR IGNORE`` clause to our ``INSERT``
statement to indicate that if this particular ``INSERT`` would
cause a violation of the "``name`` must be unique" rule, the
database system is allowed to ignore the ``INSERT``. We are
using the database constraint as a safety net to make sure we don't
inadvertently do something incorrect.

Similarly, the following code ensures that we don't add the exact same
``Follows`` relationship twice.

.. code-block:: python

    cur.execute('''INSERT OR IGNORE INTO Follows
        (from_id, to_id) VALUES (?, ?)''', (id, friend_id) )

Again, we simply tell the database to ignore our attempted
``INSERT`` if it would violate the uniqueness constraint that
we specified for the ``Follows`` rows.

.. mchoice:: dbMult_MC_tf1
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: By using the command "OR IGNORE" you can instruct SQL to skip a command if it invalidates a constraint.
    :feedback_b: Try again!

    True or False? You can instruct SQL to ignore a command.

Retrieve and/or insert a record
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When we prompt the user for a Twitter account, if the account exists, we
must look up its ``id`` value. If the account does not yet
exist in the ``People`` table, we must insert the record and
get the ``id`` value from the inserted row.

This is a very common pattern and is done twice in the program above.
This code shows how we look up the ``id`` for a friend's
account when we have extracted a ``screen_name`` from a ``user``
node in the retrieved Twitter JSON.

Since over time it will be increasingly likely that the account will
already be in the database, we first check to see if the
``People`` record exists using a ``SELECT`` statement.

If all goes well [#]_ inside
the ``try`` section, we retrieve
the record using ``fetchone()`` and then retrieve the first
(and only) element of the returned tuple and store it in ``friend_id``.

If the ``SELECT`` fails, the ``fetchone()[0]`` code
will fail and control will transfer into the ``except``
section.

.. code-block:: python

        friend = api.get_user(user_id=currId)
        screenName = friend.screen_name

        # get the key for this screen name
        cur.execute('SELECT id FROM People WHERE name = ? LIMIT 1',
                    (screenName, ))

        # if found it then add one to count old
        try:
            friend_id = cur.fetchone()[0]
            countold = countold + 1

        # if didn't find it insert it
        except:
            cur.execute('''INSERT OR IGNORE INTO People (name, retrieved)
                        VALUES (?, 0)''', (screenName, ))
            conn.commit()
            if cur.rowcount != 1:
                print('Error inserting account:', screenName)
                continue
            friend_id = cur.lastrowid
            countnew = countnew + 1

If we end up in the ``except`` code, it simply means that the
row was not found, so we must insert the row. We use ``INSERT OR
IGNORE`` just to avoid errors and then call ``conn.commit()``
to force the database to really be updated. After the write is done, we
can check the ``cur.rowcount`` to see how many rows were
affected. Since we are attempting to insert a single row, if the number
of affected rows is something other than 1, it is an error.

If the ``INSERT`` is successful, we can look at
``cur.lastrowid`` to find out what value the database assigned
to the ``id`` column in our newly created row.

.. mchoice:: dbMult_MC_tf2
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again!
    :feedback_b: Before adding new data to a table, you should check if it already exists or use INSERT OR IGNORE.

    True or False? SQL will automatically check if something already exists in your data.

Storing the friend relationship
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Once we know the key value for both the Twitter user and the friend in
the JSON, it is a simple matter to insert the two numbers into the
``Follows`` table with the following code:

.. code-block:: python

   cur.execute('''INSERT OR IGNORE INTO Follows (from_id, to_id)
                  VALUES (?, ?)''', (id, friend_id))

Notice that we let the database take care of keeping us from
"double-inserting" a relationship by creating the table with a
uniqueness constraint and then adding ``OR IGNORE`` to our
``INSERT`` statement.

Here is a sample execution of this program:

.. code-block::

    Enter a Twitter screen name, or hit enter, or type quit: drchuck
    Retrieving account drchuck
    New accounts= 5  revisited= 0
    Enter a Twitter screen name, or hit enter, or type quit:
    Retrieving account ravenmaster1
    New accounts= 5  revisited= 0
    Enter a Twitter screen name, or hit enter, or type quit:
    Retrieving account BrentSeverance
    New accounts= 4  revisited= 1
    Enter a Twitter screen name, or hit enter, or type quit: quit

We started with the ``drchuck`` account and then let the
program automatically use the next two accounts to retrieve and add to
our database.

The following is the first few rows in the ``People`` and
``Follows`` tables after this run is completed:

.. code-block::

    People:
    People:
    (1, 'drchuck', 1)
    (2, 'ravenmaster1', 1)
    (3, 'BrentSeverance', 1)
    (4, 'prairycat', 0)
    (5, 'lionelrobertjr', 0)
    ...
    15 rows.
    Follows:
    (1, 2)
    (1, 3)
    (1, 4)
    (1, 5)
    (1, 6)
    ...
    15 rows.

You can see the ``id``, ``name``, and
``visited`` fields in the ``People`` table and you see
the numbers of both ends of the relationship in the ``Follows``
table. In the ``People`` table, we can see that the first three
people have been visited and their data has been retrieved. The data in
the ``Follows`` table indicates that ``drchuck`` (user
1) is a friend to all of the people shown in the first five rows. This
makes sense because the first data we retrieved and stored was the
Twitter friends of ``drchuck``. If you were to print more rows
from the ``Follows`` table, you would see the friends of users
2 and 3 as well.

.. [#] In general, when a sentence starts with "if all goes well" you will find that
       the code needs to use try/except.
