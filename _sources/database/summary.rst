Summary
-------

This chapter has covered a lot of ground to give you an overview of the
basics of using a database in Python. It is more complicated to write
the code to use a database to store data than Python dictionaries or
flat files so there is little reason to use a database unless your
application truly needs the capabilities of a database. The situations
where a database can be quite useful are: (1) when your application
needs to make many small random updates within a large data set, (2)
when your data is so large it cannot fit in a dictionary and you need to
look up information repeatedly, or (3) when you have a long-running
process that you want to be able to stop and restart and retain the data
from one run to the next.

.. mchoice:: dbSummary_MC_use_v2
    :practice: T
    :answer_a: When your application needs to make many small random updates in a large data set.
    :answer_b: When your data fits in a dictionary.
    :answer_c: When you only use the data once.
    :answer_d: When you have a long-running process that you want to be able to stop and restart and retain the data from one run to the next.
    :correct: a, d
    :feedback_a: It is useful to use a database for very large sets of data, especially if you are making many updates.
    :feedback_b: It is useful to use a database for very large sets of data, especially if you are accessing it frequently.
    :feedback_c: A database is unnecessary if you are only processing it once.
    :feedback_d: It is useful to use a database if you want to retain the run data.

    Which of the following is a situation where a database is useful?


You can build a simple database with a single table to suit many
application needs, but most problems will require several tables and
links/relationships between rows in different tables. When you start
making links between tables, it is important to do some thoughtful
design and follow the rules of database normalization to make the best
use of the database's capabilities. Since the primary motivation for
using a database is that you have a large amount of data to deal with,
it is important to model your data efficiently so your programs run as
fast as possible.

.. mchoice:: dbSummary_MC_tf
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again!
    :feedback_b: Databases can have a single table, but when they use multiple tables, they run fastest when the data is modeled efficiently.

    True or False? Databases need to have multiple tables to run quickly and efficiently.
