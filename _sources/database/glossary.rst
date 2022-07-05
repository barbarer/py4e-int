Glossary
--------
.. glossary::

    Attribute
      One of the values within a tuple. More commonly called a "column" or "field".

    Constraint
      When we tell the database to enforce a rule on a field or a row in a table.
      A common constraint is to insist that there can be no duplicate values in a
      particular field (i.e., all the values must be unique).

    Cursor
      A cursor allows you to execute SQL commands in a database and retrieve data
      from the database. A cursor is similar to a socket or file handle for network
      connections and files, respectively.

    Database Browser
      A piece of software that allows you to directly connect to a database and
      manipulate the database directly without writing a program.

    Foreign Key
      A numeric key that points to the primary key of a row in another table. Foreign
      keys establish relationships between rows stored in different tables.

    Database Index
      Additional data that the database software maintains as rows and inserts into
      a tables to make lookups very fast.

    Logical Key
      A key that the "outside world" uses to look up a particular row. For example
      in a table of user accounts, a person's email address might be a good candidate
      as the logical key for the user's data.

    Normalization
      Designing a data model so that no data is replicated. We store each item of data
      at one place in the database and reference it elsewhere using a foreign key.

    Primary Key
      A numeric key assigned to each row that is used to refer to one row in a table
      from another table. Often the database is configured to automatically assign
      primary keys as rows are inserted.

    Relation
      An area within a database that contains tuples and attributes. More
      typically called a "table".

    Database Tuple
      A single entry in a database table that is a set of attributes. More typically
      called a "row".

.. dragndrop:: db_glossary1
    :feedback: Try again!
    :match_1: Attribute|||One of the values within a tuple.
    :match_2: Cursor||| What allows you to execute SQL commands in a database and retrieve data from the database.
    :match_3: Relation|||An area within a database that contains rows and columns - also called a table.
    :match_4: Tuple|||A single entry in a database table that is a set of columns.

    Match each term to its definition.

.. dragndrop:: db_glossary2
    :feedback: Try again!
    :match_1: Constraint|||When we tell the database to enforce a rule on a field or a row in a table.
    :match_2: Database Browser|||A piece of software that allows you to directly connect to a database and manipulate the database directly without writing a program.
    :match_3: Index|||Additional data that the database software maintains as rows and inserts into a tables to make lookups very fast.
    :match_4: Normalization|||Designing a data model so that no string data is replicated.

    Match each term to its definition.

.. dragndrop:: db_glossary3
    :feedback: Try again!
    :match_1: Foreign Key|||A numeric key that points to the primary key of a row in another table.
    :match_2: Logical Key|||A key that the "outside world" uses to look up a particular row.
    :match_3: Primary Key||| A numeric key assigned to each row that is used to refer to one row in a table from another table.

    Match each term to its definition.
