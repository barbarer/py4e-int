Creating a database table
-------------------------
.. index::
    single: SQL
    single: Table
    single: Column
    single: Connect
    single: Cursor
    single: Unicode

Databases require more defined structure than Python lists or
dictionaries [#]_.

When we create a database *table* we must tell the
database in advance the names of each of the *columns* in
the table and the type of data which we are planning to store in each
*column*. When the database software knows the type of
data in each column, it can choose the most efficient way to store and
look up the data based on the type of data.

.. mchoice:: db_MC_tableTF
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Databases require more defined structure than Python lists or dictionaries.
    :feedback_b: Try again!

    True or False? Python dictionaries require less defined structure than databases.

You can look at the various data types supported by SQLite at the
following url:

http://www.sqlite.org/datatypes.html

Defining structure for your data up front may seem inconvenient at the
beginning, but the payoff is fast access to your data even when the
database contains a large amount of data.

The code to create a database file and a table named ``Tracks``
with two columns in the database is as follows:

.. code-block::

    import sqlite3

    conn = sqlite3.connect('music.sqlite')
    cur = conn.cursor()

    cur.execute('DROP TABLE IF EXISTS Tracks')
    cur.execute('CREATE TABLE Tracks (title TEXT, plays INTEGER)')

    conn.close()

The ``connect`` operation makes a "connection" to the database
stored in the file ``music.sqlite3`` in the current directory.
If the file does not exist, it will be created. The reason this is
called a "connection" is that sometimes the database is stored on a
separate "database server" from the server on which we are running our
application. In our simple examples the database will just be a local
file in the same directory as the Python code we are running.

A *cursor* is like a file handle that we can use to
perform operations on the data stored in the database. Calling
``cursor()`` is very similar conceptually to calling
``open()`` when dealing with text files.

.. figure:: ../images/cursor.svg
   :alt: A Database Cursor

.. mchoice:: dbCreate_MC_cursor
    :practice: T
    :answer_a: Socket
    :answer_b: File Handle
    :answer_c: Script
    :answer_d: Module Object
    :correct: b
    :feedback_a: A network socket is a software structure within a network node of a computer network that serves as an endpoint for sending and receiving data across the network.
    :feedback_b: A cursor is like a file handle. Calling cursor() is similar to calling open().
    :feedback_c: A script is a file containing code written in Python.
    :feedback_d: A value created by an import statement that provides access to the data and code defined in a module.

    A cursor that we create to perform operations on the data within the database is very similar to which of the following?

Once we have the cursor, we can begin to execute commands on the
contents of the database using the ``execute()`` method.

.. dragndrop:: db_connection_vs_cursor_dd
    :practice: T
    :feedback: Read the section above to determine what a connection and cursor are used for.
    :match_1: Connection|||Handles establishing communication with the database, which may be on another server.
    :match_2: Cursor|||Handles executing commands on the database such as getting data from the database.

    Match the term to its definition

Database commands are expressed in a special language that has been
standardized across many different database vendors to allow us to learn
a single database language. The database language is called
*Structured Query Language* or *SQL* for
short.

http://en.wikipedia.org/wiki/SQL

.. mchoice:: dbCreate_MC_SQL
    :practice: T
    :answer_a: Structured Query Language
    :answer_b: Simple Query Language
    :answer_c: Synchronized Query Language
    :answer_d: Simple Query Lingua
    :correct: a
    :feedback_a: SQL is the acronym for <b>S</b>tructured <b>Q</b>uery <b>L</b>anguage.
    :feedback_b: Not quite.
    :feedback_c: Try again.
    :feedback_d: Not quite.

    SQL stands for ___________.

In our example, we are executing two SQL commands in our database. As a
convention, we will show the SQL keywords in uppercase and the parts of
the command that we are adding (such as the table and column names) will
be shown in lowercase.

The first SQL command removes the ``Tracks`` table from the
database if it exists. This pattern is simply to allow us to run the
same program to create the ``Tracks`` table over and over again
without causing an error. Note that the ``DROP TABLE`` command
deletes the table and all of its contents from the database (i.e., there
is no "undo").

.. code-block:: python

    cur.execute('DROP TABLE IF EXISTS Tracks ')

The second command creates a table named ``Tracks`` with a text
column named ``title`` and an integer column named
``plays``.

.. code-block:: python

    cur.execute('CREATE TABLE Tracks (title TEXT, plays INTEGER)')

Now that we have created a table named ``Tracks``, we can put
some data into that table using the SQL ``INSERT`` operation.
Again, we begin by making a connection to the database and getting a
``cursor`` object. We can then execute SQL commands using the cursor.

The SQL ``INSERT`` command indicates which table we are using
and then defines a new row by listing the fields we want to include
``(title, plays)`` followed by the ``VALUES`` we want
placed in the new row. We specify the values as question marks ``(?,
?)`` to indicate that the actual values are passed in as a tuple
``( 'My Way', 15 )`` as the second parameter to the
``execute()`` call.

.. code-block::

    import sqlite3

    conn = sqlite3.connect('music.sqlite')
    cur = conn.cursor()

    cur.execute('INSERT INTO Tracks (title, plays) VALUES (?, ?)',
        ('Thunderstruck', 20))
    cur.execute('INSERT INTO Tracks (title, plays) VALUES (?, ?)',
        ('My Way', 15))
    conn.commit()

    print('Tracks:')
    cur.execute('SELECT title, plays FROM Tracks')
    for row in cur:
         print(row)

    cur.execute('DELETE FROM Tracks WHERE plays < 100')
    conn.commit()

    cur.close()

First we ``INSERT`` two rows into our table and use
``commit()`` to force the data to be written to the database
file.

.. figure:: ../images/tracks.svg
   :alt: Rows in a Table

Then we use the ``SELECT`` command to retrieve the rows we just
inserted from the table. On the ``SELECT`` command, we indicate
which columns we would like ``(title, plays)`` and indicate
which table we want to retrieve the data from. After we execute the
``SELECT`` statement, the cursor is something we can loop
through in a ``for`` statement. For efficiency, the cursor does
not read all of the data from the database when we execute the
``SELECT`` statement. Instead, the data is read on demand as we
loop through the rows in the ``for`` statement.

The output of the program is as follows:

.. code-block::

    Tracks:
    ('Thunderstruck', 20)
    ('My Way', 15)

Our ``for`` loop finds two rows, and each row is a Python tuple
with the first value as the ``title`` and the second value as
the number of ``plays``.

.. note:: Note: You may see strings starting with ``u'`` in other books or on the Internet.
          This was an indication in Python 2 that the strings are *Unicode* strings that are capable
          of storing non-Latin character sets. In Python 3, all strings are unicode
          strings by default.

At the very end of the program, we execute an SQL command to
``DELETE`` the rows we have just created so we can run the
program over and over. The ``DELETE`` command shows the use of
a ``WHERE`` clause that allows us to express a selection
criterion so that we can ask the database to apply the command to only
the rows that match the criterion. In this example the criterion happens
to apply to all the rows so we empty the table out so we can run the
program repeatedly. After the ``DELETE`` is performed, we also
call ``commit()`` to force the data to be removed from the
database.

.. parsonsprob:: dbCreate_PP
    :practice: T
    :adaptive:
    :numbered: left

    Put the following code in order to create a cursor, make a table called "Cats" with
    two text columns ("Name" and "Breed"). Then add the rows for Whiskers, Ruby, and Milo in
    the table and commit that change.  Finally select all the rows and print them before closing the cursor.
    -----
    import sqlite3

    conn = sqlite3.connect('pets.sqlite')
    cur = conn.cursor()
    =====
    cur.execute('DROP TABLE IF EXISTS Cats')
    cur.execute('CREATE TABLE Tracks (name TEXT, breed INTEGER)')
    =====
    cur.execute('INSERT INTO Cats (name, breed) VALUES (?, ?)',
        ('Whiskers', 'Ragdoll'))
    cur.execute('INSERT INTO Cats (name, breed) VALUES (?, ?)',
        ('Ruby', 'Persian'))
    cur.execute('INSERT INTO Cats (name, breed) VALUES (?, ?)',
        ('Milo', 'Russian Blue'))
    =====
    conn.commit()
    =====
    print('Cats:')
    cur.execute('SELECT name, breed FROM Cats')
    =====
    for row in cur:
         print(row)
    =====
    cur.close()

.. [#] SQLite actually does allow some flexibility in the type of data stored in a column,
       but we will keep our data types strict in this chapter so the concepts apply equally
       to other database systems such as MySQL
