Debugging
---------
.. index::
    single: Debugging
    single: Database Browser

One common pattern when you are developing a Python program to connect
to an SQLite database will be to run a Python program and check the
results using the Database Browser for SQLite. The browser allows you to
quickly check to see if your program is working properly.

.. mchoice:: dbDebug_MC_tf
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: It is common to connect a Python program to an SQLite database, while using the Database Browser for SQLite at the same time.
    :feedback_b: Try again!

    True or False? You can connect multiple programs to a SQLite database.

You must be careful because SQLite takes care to keep two programs from
changing the same data at the same time. For example, if you open a
database in the browser and make a change to the database and have not
yet pressed the "save" button in the browser, the browser "locks" the
database file and keeps any other program from accessing the file. In
particular, your Python program will not be able to access the file if
it is locked.

.. mchoice:: dbDebug_MC_tf2
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again!
    :feedback_b: SQLite takes care to keep two programs from changing the same data at the same time, so make sure you save frequently!

    True or False? SQLite will allow two programs change the same data at the same time.

So a solution is to make sure to either close the database browser or
use the *File* menu to close the database in the browser
before you attempt to access the database from Python to avoid the
problem of your Python code failing because the database is locked.

.. mchoice:: dbDebug_MC_tf3
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again!
    :feedback_b: SQLite will lock a database if it has been changed and not yet saved in a program, and you have tried to access it in another program.

    True or False? SQLite will lock a database if it has been changed and saved in a program.
