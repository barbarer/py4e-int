Database concepts
-----------------
.. index::
    single: Row
    single: Table
    single: Column
    single: Tuple
    single: Relation
    single: Attribute

When you first look at a database it looks like a spreadsheet with
multiple sheets. The primary data structures in a database are:
*tables*, *rows*, and *columns*.

.. figure:: ../images/relational.svg
   :alt: Relational Databases

In technical descriptions of relational databases the concepts of table,
row, and column are more formally referred to as *relation*, *tuple*, and
*attribute*, respectively. We will use the less formal terms in this chapter.

.. dragndrop:: db_dnd_concepts
    :practice: T
    :feedback: Think about what the terms on the left could mean outside of databases
               and how they could relate to the terms on the right.
    :match_1: Attribute|||Column
    :match_2: Tuple|||Row
    :match_3: Relation|||Table

    Match each data structure used in databases to its formal counterpart.
