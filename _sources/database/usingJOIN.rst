Using JOIN to retrieve data
---------------------------
.. index::
    pair: SQL; JOIN
    pair: SQL; SELECT

Now that we have followed the rules of database normalization and have
data separated into two tables, linked together using primary and
foreign keys, we need to be able to build a ``SELECT`` that
reassembles the data across the tables.

SQL uses the ``JOIN`` clause to reconnect these tables. In the
``JOIN`` clause you specify the fields that are used to
reconnect the rows between the tables.

The following is an example of a ``SELECT`` with a
``JOIN`` clause:

.. code-block:: {.sql}

   SELECT * FROM Follows JOIN People
       ON Follows.from_id = People.id WHERE People.id = 1

The ``JOIN`` clause indicates that the fields we are selecting
come from the ``Follows`` and ``People`` tables. The
``ON`` clause indicates how the two tables are to be joined:
Take the rows from ``Follows`` and append the row from
``People`` where the field ``from_id`` in ``Follows`` is
the same the ``id`` value in the ``People`` table.

.. fillintheblank:: dbJoin_fill1
    :casei:
    :practice: T

    Which SQL clause can be used to return data from two tables?

    - :join: JOIN returns data from two tables based on rows selected to join them on.
      :.*: Try again!


.. fillintheblank:: dbJoin_on_fill1
    :casei:
    :practice: T

    Fill in the blank in the following: SELECT * FROM Follows JOIN People |blank| Follows.from_id = People.id LIMIT 5

    - :on: Use ON to specify what column to join the data on.
      :.*: Try again!

**Connecting Tables Using JOIN**

The result of the JOIN is to create extra-long "metarows" which have
both the fields from ``People`` and the matching fields from
``Follows``. Where there is more than one match between the
``id`` field from ``People`` and the ``from_id`` from
``People``, then JOIN creates a metarow for *each* of the
matching pairs of rows, duplicating data as needed.

.. mchoice:: dbJoin_MC_metarow
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again!
    :feedback_b: A metarow includes all data in the matching fields, regardless of how many matches there are.

    True or False? A "metarow" only contains the first set of matching data.


The following code demonstrates the data that we will have in the
database after the multi-table Twitter spider program (above) has been
run several times.

.. code-block::

    import sqlite3
    import os

    dir = os.path.dirname(__file__) + os.sep
    conn = sqlite3.connect(dir + 'friends.db')
    cur = conn.cursor()

    cur.execute('SELECT * FROM People')
    count = 0
    print('People:')
    for row in cur:
        if count < 5: print(row)
        count = count + 1
    print(count, 'rows.')

    cur.execute('SELECT * FROM Follows')
    count = 0
    print('Follows:')
    for row in cur:
        if count < 5: print(row)
        count = count + 1
    print(count, 'rows.')

    cur.execute('''SELECT * FROM Follows JOIN People
                ON Follows.to_id = People.id
                WHERE Follows.from_id = 2''')
    count = 0
    print('Connections for id=2:')
    for row in cur:
        if count < 5: print(row)
        count = count + 1
    print(count, 'rows.')

    cur.close()

In this program, we first dump out the ``People`` and
``Follows`` and then dump out a subset of the data in the
tables joined together.

Here is the output of the program:

.. code-block::

   python twjoin.py
   People:
   (1, 'drchuck', 1)
   (2, 'ravenmaster1', 1)
   (3, 'BrentSeverance', 1)
   (4, 'prairycat', 0)
   (5, 'lionelrobertjr', 0)
   15 rows.
   Follows:
   (1, 2)
   (1, 3)
   (1, 4)
   (1, 5)
   (1, 6)
   15 rows.
   Connections for id=2:
   (2, 7, 7, 'myldn', 0)
   (2, 8, 8, 'DickieDover', 0)
   (2, 9, 9, 'Ukraine', 0)
   (2, 10, 10, 'AlisonMoyet', 0)
   (2, 11, 11, 'PhilipPullman', 0)
   5 rows.

You see the columns from the ``People`` and
``Follows`` tables and the last set of rows is the result of
the ``SELECT`` with the ``JOIN`` clause.

In the last select, we are looking for accounts that are friends of
"ravenmaster1" (i.e., ``People.id=2``).

In each of the "metarows" in the last select, the first two columns are
from the ``Follows`` table followed by columns three through
five from the ``People`` table. You can also see that the
second column (``Follows.to_id``) matches the third column
(``People.id``) in each of the joined-up "metarows".

.. mchoice:: dbJoin_MC_titles
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: You can absolutely join two tables on columns that have different names. For example, you can join on Follows.to_id = People.id
    :feedback_b: Try again!

    True or False? When using JOIN on two tables, you can join on columns that have different names.

You can use ``table_name.field_name`` to specify the column that you want from each table.


.. activecode:: db_select_bike_join_ex1
   :language: sql
   :autograde: unittest
   :dburl: /_static/bikeshare.db

   The following code will select the ``bike_number`` from ``trip_data``
   and ``name`` from ``bikeshare_stations``
   where the ``start_station`` in ``trip_data`` is the same as the ``station_id`` in ``bikeshare_stations``.
   It will also limit the results to 5 rows.
   ~~~~
   SELECT trip_data.bike_number, bikeshare_stations.name
   FROM trip_data JOIN bikeshare_stations
   ON trip_data.start_station = bikeshare_stations.station_id
   LIMIT 5
   ====
   assert 0,0 == W00058
   assert 1,0 == W00775
   assert 4,0 == W00392
   assert 3,1 == 3rd & H St NE

You can also add a ``WHERE`` clause.

.. activecode:: db_select_bike_join_with_where_ex1
   :language: sql
   :autograde: unittest
   :dburl: /_static/bikeshare.db

   The following code will select the ``bike_number`` and ``duration`` from ``trip_data``
   and ``name`` from ``bikeshare_stations``
   where the ``start_station`` in ``trip_data`` is the same as the ``station_id`` in ``bikeshare_stations``
   and where the duration is greater than 85,000.
   ~~~~
   SELECT trip_data.bike_number, trip_data.duration, bikeshare_stations.name
   FROM trip_data JOIN bikeshare_stations
   ON trip_data.start_station = bikeshare_stations.station_id
   WHERE trip_data.duration > 85000
   ====
   assert 0,0 == W00837
   assert 0,1 == 85168
   assert 1,0 == W00930
   assert 3,0 == W00202
   assert 3,1 == 85102
   assert 3,2 == 14th & G St NW
