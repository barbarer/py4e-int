Summary
-------

This chapter has covered a lot of ground to give you an overview of the
basics of using a database in Python. It is more complicated to write
the code to use a database to store data than Python dictionaries or
flat files so there is little reason to use a database unless your
application truly needs the capabilities of a database. The situations
where a database can be quite useful are: (1) when your application
needs to make small many random updates within a large data set, (2)
when your data is so large it cannot fit in a dictionary and you need to
look up information repeatedly, or (3) when you have a long-running
process that you want to be able to stop and restart and retain the data
from one run to the next.

You can build a simple database with a single table to suit many
application needs, but most problems will require several tables and
links/relationships between rows in different tables. When you start
making links between tables, it is important to do some thoughtful
design and follow the rules of database normalization to make the best
use of the database's capabilities. Since the primary motivation for
using a database is that you have a large amount of data to deal with,
it is important to model your data efficiently so your programs run as
fast as possible.
