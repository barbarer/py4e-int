What is a database?
-------------------
.. index::
    single: Database
    pair: Database; Indexes
    single: SQL

A *database* is a file that is organized for storing
data. Most databases are organized like a dictionary in the sense that
they map from keys to values. The biggest difference is that the
database is on disk (or other permanent storage), so it persists after
the program ends. Because a database is stored on permanent storage, it
can store far more data than a dictionary, which is limited to the size
of the memory in the computer.

Like a dictionary, database software is designed to keep the inserting
and accessing of data very fast, even for large amounts of data.
Database software maintains its performance by building
*indexes* as data is added to the database to allow the
computer to jump quickly to a particular entry.

There are many different database systems which are used for a wide
variety of purposes including: Oracle, MySQL, Microsoft SQL Server,
PostgreSQL, and SQLite. We focus on SQLite in this book because it is a
very common database and is already built into Python. SQLite is
designed to be *embedded* into other applications to provide database
support within the application. For example, the Firefox browser also
uses the SQLite database internally as do many other products.

http://sqlite.org/

SQLite is well suited to some of the data manipulation problems that we
see in Informatics such as the Twitter spidering application that we
describe in this chapter.

.. mchoice:: db_MC_what
    :practice: T
    :answer_a: Another name for a dictionary
    :answer_b: A list of lists
    :answer_c: A file containing dictionaries
    :answer_d: A file that is organized for storing data
    :correct: d
    :feedback_a: A database keeps it data after the program ends, while a dictionary only exists while a program is running.
    :feedback_b: That's a tuple!
    :feedback_c: While databases can have dictionaries as their stored data, it is not a requirement.
    :feedback_d: A database is a file organized for storing data!

    What is a database?

.. fillintheblank:: db_fill_what
    :practice: T
    :casei:

    Database software uses _________ to keep track of data as it is added and allow the computer to
    jump to a particular entry.

    - :indexes|indices: Much like dictionaries, databases use indexes to locate and keep track of data as it is inserted.
      :.*: Try again! Databases function similarly to dictionaries in this way!

.. mchoice:: db_MC_what_dbSystem
    :answer_a: MySQL
    :answer_b: SQLite
    :answer_c: Oracle
    :answer_d: PostgreSQL
    :correct: b
    :feedback_a: We are using a database system that uses Structured Query Language based syntax, but not MySQL.
    :feedback_b: SQLite is designed to be embedded into other applications, so we're focusing on it in this book.
    :feedback_c: Oracle is commonly used for running online transaction processing, data warehousing and mixed database workloads - not really what we're focusing on here.
    :feedback_d: We are using a database system that uses Structured Query Language based syntax, but not PostgreSQL.

    Which database system are we using in this book?
