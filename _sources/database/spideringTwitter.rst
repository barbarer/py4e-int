Spidering Twitter using a database
----------------------------------
.. index::
    single: Spidering
    single: Tuple

.. note:: Spidering Twitter uses the Tweepy API at https://docs.tweepy.org/en/stable/api.html.
          This requires a developer
          account, which you may or may not be granted. To apply for a developer account
          see the instructions at https://developer.twitter.com/en/support/twitter-api/developer-account.

In this section, we will create a simple spidering program that will go
through Twitter accounts and build a database of them.

One of the problems of any kind of spidering program is that it needs to
be able to be stopped and restarted many times and you do not want to
lose the data that you have retrieved so far. You don't want to always
restart your data retrieval at the very beginning so we want to store
data as we retrieve it so our program can start back up and pick up
where it left off.

.. mchoice:: dbTwitter_MC1_v2
    :practice: T
    :answer_a: Spidering programs need to be stopped and restarted frequently.
    :answer_b: You can lose the data you already gathered.
    :answer_c: Spidering programs cannot be restarted.
    :correct: a
    :feedback_a: One of the problems of any kind of spidering program is that it needs to be able to be stopped and restarted many times and you do not want to lose the data that you have retrieved so far.
    :feedback_b: You won't lose any data if you store the data in a database
    :feedback_c: Spidering programs can be restarted from where they leave off.

    Which of the following is a problem with spidering programs?


We will start by retrieving one person's Twitter friends and their
statuses, looping through the list of friends, and adding each of the
friends to a database to be retrieved in the future. After we process
one person's Twitter friends, we check in our database and retrieve one
of the friends of the friend. We do this over and over, picking an
"unvisited" person, retrieving their friend list, and adding friends we
have not seen to our list for a future visit.

We also track how many times we have seen a particular friend in the
database to get some sense of their "popularity".

By storing our list of known accounts and whether we have retrieved the
account or not, and how popular the account is in a database on the disk
of the computer, we can stop and restart our program as many times as we
like.

.. mchoice:: dbTwitter_MC_tf2_v2
    :practice: T
    :answer_a: Programs using databases may be stopped and restarted, but do not retain the data.
    :answer_b: Spidering programs gather data by looping through data
    :correct: b
    :feedback_a: Spidering programs do retain data by storing it in a database
    :feedback_b: Spidering programs do loop through data

    Which of the following are true?

This program is a bit complex.

Here is the source code for our Twitter spidering application:

.. code-block::

    import json
    import sqlite3
    import twitter_info
    import tweepy
    import os

    # Set up OAuth2 for access to twitter
    auth = tweepy.OAuth2BearerHandler(twitter_info.bearer_token)
    api = tweepy.API(auth, wait_on_rate_limit=True)

    # set up the database
    dir = os.path.dirname(__file__) + os.sep
    conn = sqlite3.connect(dir + 'spider.db')
    cur = conn.cursor()
    cur.execute('''
            CREATE TABLE IF NOT EXISTS Twitter
            (name TEXT, retrieved INTEGER, friends INTEGER)''')

    # loop till the user types quit
    while True:
        acct = input('Enter a Twitter screen name, or hit enter, or type quit: ')
        if (acct == 'quit'): break
        if (len(acct) < 1): # enter so pick someone to visit from the database

            # select a screen name that hasn't been visited yet
            cur.execute('SELECT name FROM Twitter WHERE retrieved = 0 LIMIT 1')
            try:
                acct = cur.fetchone()[0]
            except:
                print('No unretrieved Twitter accounts found')
                continue

        # Fetch friends for this screen name
        print("Fetching friends for screen name: " + acct)
        idList = api.get_friend_ids(screen_name=acct)

        # update the database to show that you have retrieved friends for this one
        cur.execute('UPDATE Twitter SET retrieved=1 WHERE name = ?', (acct, ))

        # loop through 5 ids of the friends (to not get too many at once)
        countnew = 0
        countold = 0
        num = min(5, len(idList)) # in case they do not have as least 5 friends
        for i in range(num):

            # get the current id
            currId = idList[i]
            # print(currId)
            # get the user information for this id
            friend = api.get_user(user_id=currId)
            screenName = friend.screen_name

            # check if we already have this screen name in the database
            cur.execute('SELECT friends FROM Twitter WHERE name = ? LIMIT 1',
                   (screenName, ))
            try:
                # if there update the count
                count = cur.fetchone()[0]
                cur.execute('UPDATE Twitter SET friends = ? WHERE name = ?',
                       (count+1, screenName))
                countold = countold + 1
            except:
                # not there, so insert it
                cur.execute('''INSERT INTO Twitter (name, retrieved, friends)
                           VALUES (?, 0, 1)''', (screenName, ))
                countnew = countnew + 1
        print('New accounts=', countnew, ' revisited=', countold)
        conn.commit()

    cur.close()

Our database is stored in the file ``spider.db`` and it
has one table named ``Twitter``. Each row in the
``Twitter`` table has a column for the account name, whether we
have retrieved the friends of this account, and how many times this
account has been "friended".

In the main loop of the program, we tell the user to enter a Twitter
account name, hit enter, or type "quit" to exit the program. If the user enters a Twitter
account name, we retrieve the list of friends for that user and
add up to five friends to the database if the friend is not already in the
database. If the
friend is already in the list, we add 1 to the ``friends``
field in the row in the database.

If the user presses enter, we look in the database for the next Twitter
account that we have not yet retrieved, retrieve the friends for that account, add them to the database or update them, and
increase their ``friends`` count.

Once we retrieve the list of friends, we loop through all
of the ``user`` items in the returned JSON and retrieve the
``screen_name`` for each user. Then we use the ``SELECT``
statement to see if we already have stored this particular ``screen_name``
in the database and retrieve the friend count (``friends``) if
the record exists.

.. code-block:: python

    # loop through 5 ids of the friends (to not get too many at once)
    countnew = 0
    countold = 0
    num = min(5, len(idList)) # in case they do not have as least 5 friends
    for i in range(num):

        # get the current id
        currId = idList[i]
        # print(currId)
        # get the user information for this id
        friend = api.get_user(user_id=currId)
        screenName = friend.screen_name

        # check if we already have this screen name in the database
        cur.execute('SELECT friends FROM Twitter WHERE name = ? LIMIT 1',
                   (screenName, ))
        try:
            # if there update the count
            count = cur.fetchone()[0]
            cur.execute('UPDATE Twitter SET friends = ? WHERE name = ?',
                       (count+1, screenName))
            countold = countold + 1
        except:
            # not there, so insert it
            cur.execute('''INSERT INTO Twitter (name, retrieved, friends)
                           VALUES (?, 0, 1)''', (screenName, ))
            countnew = countnew + 1
    print('New accounts=', countnew, ' revisited=', countold)
    conn.commit()

Once the cursor executes the ``SELECT`` statement, we must
retrieve the rows. We could do this with a ``for`` statement,
but since we are only retrieving one row (``LIMIT 1``), we can
use the ``fetchone()`` method to fetch the first (and only) row
that is the result of the ``SELECT`` operation. Since
``fetchone()`` returns the row as a *tuple*
(even though there is only one field), we take the first value from the
tuple using to get the current friend count into the variable
``count``.

If this retrieval is successful, we use the SQL ``UPDATE``
statement with a ``WHERE`` clause to add 1 to the
``friends`` column for the row that matches the friend's
account. Notice that there are two placeholders (i.e., question marks)
in the SQL, and the second parameter to the ``execute()`` is a
two-element tuple that holds the values to be substituted into the SQL
in place of the question marks.

If the code in the ``try`` block fails, it is probably because
no record matched the ``WHERE name = ?`` clause on the SELECT
statement. So in the ``except`` block, we use the SQL
``INSERT`` statement to add the friend's ``screen_name`` to the
table with an indication that we have not yet retrieved the
``screen_name`` and set the friend count to zero.

So the first time the program runs and we enter a Twitter account, the
program runs as follows:

.. code-block::

    Enter a Twitter screen name, or hit enter, or type quit: drchuck
    Fetching friends for screen name: drchuck
    New accounts= 5  revisited= 0
    Enter a Twitter screen name, or hit enter, or type quit: quit

Since this is the first time we have run the program, the database is
empty and we create the database in the file ``spider.db``
and add a table named ``Twitter`` to the database. Then we
retrieve five friends and add them all to the database since the
database is empty.

At this point, we might want to write a simple database dumper to take a
look at what is in our ``spider.db`` file:

.. code-block::

    import sqlite3
    import os

    dir = os.path.dirname(__file__) + os.sep
    conn = sqlite3.connect(dir + 'spider.db')
    cur.execute('SELECT * FROM Twitter')
    count = 0
    for row in cur:
        print(row)
        count = count + 1
    print(count, 'rows.')
    cur.close()

This program simply opens the database and selects all of the columns of
all of the rows in the table ``Twitter``, then loops through
the rows and prints out each row.

If we run this program after the first execution of our Twitter spider
above, its output will be as follows:

.. code-block::

    ('ravenmaster1', 0, 1)
    ('BrentSeverance', 0, 1)
    ('prairycat', 0, 1)
    ('lionelrobertjr', 0, 1)
    ('LockPickingLwyr', 0, 1)
    5 rows.

We see one row for each ``screen_name``, that we have not retrieved the
data for that ``screen_name``, and everyone in the database has one
friend.

Now our database reflects the retrieval of the friends of our first
Twitter account (*drchuck*). We can run the program again
and tell it to retrieve the friends of the next "unprocessed" account by
simply pressing enter instead of a Twitter account as follows:

.. code-block::

    Enter a Twitter account, or quit:
    Enter a Twitter screen name, or hit enter, or type quit:
    Fetching friends for screen name: ravenmaster1
    New accounts= 5  revisited= 0
    Enter a Twitter screen name, or hit enter, or type quit:
    Fetching friends for screen name: BrentSeverance
    New accounts= 4  revisited= 1
    Enter a Twitter screen name, or hit enter, or type quit: quit

Since we pressed enter (i.e., we did not specify a Twitter account), the
following code is executed:

.. code-block:: python

    if (len(acct) < 1): # enter so pick someone to visit from the database

       # select a screen name that hasn't been visited yet
       cur.execute('SELECT name FROM Twitter WHERE retrieved = 0 LIMIT 1')
       try:
           acct = cur.fetchone()[0]
       except:
           print('No unretrieved Twitter accounts found')
           continue

We use the SQL ``SELECT`` statement to retrieve the name of the
first (``LIMIT 1``) user who still has their "have we retrieved
this user" value set to zero. We also use the ``fetchone()[0]``
pattern within a try/except block to either extract a ``screen_name`` from
the retrieved data or put out an error message and loop back up.

If we successfully retrieved an unprocessed ``screen_name``, we retrieve
their data as follows:

.. code-block:: python

    # Fetch friends for this screen name
    print("Fetching friends for screen name: " + acct)
    idList = api.get_friend_ids(screen_name=acct)

    # update the database to show that you have retrieved friends for this one
    cur.execute('UPDATE Twitter SET retrieved=1 WHERE name = ?', (acct, ))


Once we retrieve the data successfully, we use the ``UPDATE``
statement to set the ``retrieved`` column to 1 to indicate that
we have completed the retrieval of the friends of this account. This
keeps us from retrieving the same data over and over and keeps us
progressing forward through the network of Twitter friends.

If we run the friend program and press enter twice to retrieve the next
unvisited friend's friends, then run the dumping program, it will give
us the following output:

.. code-block::

    ('ravenmaster1', 1, 1)
    ('BrentSeverance', 1, 1)
    ('prairycat', 0, 2)
    ('lionelrobertjr', 0, 1)
    ('LockPickingLwyr', 0, 1)
    ('myldn', 0, 1)
    ('DickieDover', 0, 1)
    ('Ukraine', 0, 1)
    ('AlisonMoyet', 0, 1)
    ('PhilipPullman', 0, 1)
    ('botimer', 0, 1)
    ('nessimonstar', 0, 1)
    ('educause', 0, 1)
    ('lindafeng', 0, 1)
    14 rows.

We can see that we have properly recorded that we have visited
``ravenmaster1`` and ``BrentSeverance``. Also the accounts
``prairycat`` already has two followers.
Since we now have retrieved the friends of three people
(``drchuck``, ``ravenmaster1``, and
``BrentSeverance``) our table has 14 rows of friends to retrieve.

Each time we run the program and press enter it will pick the next
unvisited account (e.g., the next account will be ``prairycat``),
retrieve their friends, mark them as retrieved, and for each of the
friends of ``prairycat`` either add them to the end of the database or
update their friend count if they are already in the database.

Since the program's data is all stored on disk in a database, the
spidering activity can be suspended and resumed as many times as you
like with no loss of data.
