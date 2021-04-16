Structured Query Language summary
---------------------------------
.. index::
    single: SQL
    pair: SQL; SELECT

So far, we have been using the Structured Query Language in our Python
examples and have covered many of the basics of the SQL commands. In
this section, we look at the SQL language in particular and give an
overview of SQL syntax.

Since there are so many different database vendors, the Structured Query
Language (SQL) was standardized so we could communicate in a portable
manner to database systems from multiple vendors.

A relational database is made up of tables, rows, and columns. The
columns generally have a type such as text, numeric, or date data. When
we create a table, we indicate the names and types of the columns:

.. code-block:: {.sql}

    CREATE TABLE Tracks (title TEXT, plays INTEGER)

To insert a row into a table, we use the SQL ``INSERT``
command:

.. code-block:: {.sql}

    INSERT INTO Tracks (title, plays) VALUES ('My Way', 15)

The ``INSERT`` statement specifies the table name, then a list
of the fields/columns that you would like to set in the new row, and
then the keyword ``VALUES`` and a list of corresponding values
for each of the fields.

The SQL ``SELECT`` command is used to retrieve rows and columns
from a database. The ``SELECT`` statement lets you specify
which columns you would like to retrieve as well as a ``WHERE``
clause to select which rows you would like to see. It also allows an
optional ``ORDER BY`` clause to control the sorting of the
returned rows.

.. code-block:: {.sql}

    SELECT * FROM Tracks WHERE title = 'My Way'

.. fillintheblank:: dbSQL_fill
    :practice: T
    :casei:

    What is the SQL command that is used to add new data to a table?

    - :INSERT: INSERT is used to add a new row of values to a table.
      :.*: Try again!

Using ``*`` indicates that you want the database to return all of the
columns for each row that matches the ``WHERE`` clause.

.. note::

   Note, unlike in Python, in a SQL ``WHERE`` clause we use a single equal sign to indicate a test for equality rather than a double equal sign.

Other logical operations allowed in a ``WHERE``
   clause include ``<``, ``>``, ``<=``, ``>=``, ``!=``, as well as ``AND``
   and ``OR`` and parentheses to build your logical expressions.

.. fillintheblank:: dbSQL_fill2
    :practice: T

    What is the symbol that is used to return all information for a row that matches a WHERE statement?

    - :\*: * indicates that you want the database to return all of the columns for each row that matches the WHERE clause.
      :.*: Try again!

You can request that the returned rows be sorted by one of the fields as
follows:

.. code-block:: {.sql}

    SELECT title,plays FROM Tracks ORDER BY title

To remove a row, you need a ``WHERE`` clause on an SQL
``DELETE`` statement. The ``WHERE`` clause determines
which rows are to be deleted:

.. code-block:: {.sql}

    DELETE FROM Tracks WHERE title = 'My Way'

It is possible to ``UPDATE`` a column or columns within one or
more rows in a table using the SQL ``UPDATE`` statement as
follows:

.. code-block:: {.sql}

    UPDATE Tracks SET plays = 16 WHERE title = 'My Way'

The ``UPDATE`` statement specifies a table and then a list of
fields and values to change after the ``SET`` keyword and then
an optional ``WHERE`` clause to select the rows that are to be
updated. A single ``UPDATE`` statement will change all of the
rows that match the ``WHERE`` clause. If a ``WHERE``
clause is not specified, it performs the ``UPDATE`` on all of
the rows in the table.

These four basic SQL commands (INSERT, SELECT, UPDATE, and DELETE) allow
the four basic operations needed to create and maintain data.

.. dragndrop:: db_SQLcommands_defs_dd
    :practice: T
    :feedback: Check above to see what each command does.
    :match_1: INSERT||| Tries to add a new row of information to a table
    :match_2: SELECT||| Tries to get information from a database
    :match_3: UPDATE||| Tries to change information in a database
    :match_4: DELETE||| Tries to remove information from a database

    Match each SQL command with what it does.
