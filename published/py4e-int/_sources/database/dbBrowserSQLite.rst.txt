Database Browser for SQLite
---------------------------
.. index::
    single: SQLite
    single: Database Browser

While this chapter will focus on using Python to work with data in
SQLite database files, many operations can be done more conveniently
using software called the *Database Browser for SQLite* which is freely available from:

http://sqlitebrowser.org/

Using the browser you can easily create tables, insert data, edit data,
or run simple SQL queries on the data in the database.

In a sense, the database browser is similar to a text editor when
working with text files. When you want to do one or very few operations
on a text file, you can just open it in a text editor and make the
changes you want. When you have many changes that you need to do to a
text file, often you will write a simple Python program. You will find
the same pattern when working with databases. You will do simple
operations in the database manager and more complex operations will be
most conveniently done in Python.

.. mchoice:: db_MC_browserCap
    :answer_a: Create a table
    :answer_b: Insert data
    :answer_c: Edit data
    :answer_d: Select data
    :correct: a,b,c,d
    :feedback_a: You can create tables
    :feedback_b: You can insert data
    :feedback_c: You can edit data
    :feedback_d: You can select data

    Which of the following can you do with the Database Browser for SQLite?

.. mchoice:: db_MC_browserTF
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again!
    :feedback_b: You will do simple operations in the database manager and more complex operations will be
                 most conveniently done in Python.

    True or False? It is convenient to do **all** changes and operations in a database manager.
