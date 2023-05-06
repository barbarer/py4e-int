More SELECT Keywords
---------------------------------

So far we have covered selecting the data from all fields from a table, from
just one specified field, and from a list of fields.

.. dragndrop:: db_SQL_three_types_of_select
    :practice: T
    :feedback: Refer to previous SELECT examples.
    :match_1: SELECT * FROM Tracks||| Returns the data from all fields (columns) from the Tracks table
    :match_2: SELECT title FROM Tracks||| Returns the data from just the title field (column) from the Tracks table
    :match_3: SELECT title, length FROM Tracks||| Returns the data from the title and length fields from the Tracks table

    Match each SQL statement with what it does.

.. index::
    pair: SQL; SELECT COUNT

There are other keywords that you can use with SELECT.  Run the following to see what they do.

.. activecode:: db_bike_sel_count
   :language: sql
   :autograde: unittest
   :dburl: /_static/bikeshare.db

   Run the following to see what COUNT and LIMIT do.
   ~~~~
   SELECT bike_number, duration FROM trip_data LIMIT 5;
   SELECT COUNT(bike_number) FROM trip_data;

.. activecode:: db_bike_max_count
   :language: sql
   :autograde: unittest
   :dburl: /_static/bikeshare.db 

   Run the following to see what MAX does
   ~~~~
   SELECT bike_number FROM trip_data LIMIT 10;
   SELECT MAX(bike_number) FROM trip_data;

.. activecode:: db_bike_order_by
   :language: sql
   :autograde: unittest
   :dburl: /_static/bikeshare.db

   Run the following to see what ORDER BY does
   ~~~~
   SELECT * FROM trip_data ORDER BY bike_number LIMIT 20

.. activecode:: db_bike_order_by_desc
   :language: sql
   :autograde: unittest
   :dburl: /_static/bikeshare.db 

   Run the following to see what ORDER BY does
   ~~~~
   SELECT * FROM trip_data ORDER BY bike_number DESC LIMIT 15

.. dragndrop:: db_SQL_sel_more
    :practice: T
    :feedback: Check above to see what each command does.
    :match_1: LIMIT n||| Limits the number of items returns to n.
    :match_2: Count(field)||| Returns the number of items in the specified field (column).
    :match_3: Max(field)||| Returns the maximum value in a field (column).
    :match_4: ORDER BY field||| Returns the data sorted in ascending order by the specified field.
    :match_5: ORDER BY field DESC||| Returns the data sorted in descending order by the specified field.

    Match each SQL option to what it does


.. activecode:: db_test_more_select_ac
   :language: sql
   :autograde: unittest
   :dburl: /_static/bikeshare.db 

   Given a database of bike share information write a SELECT statement to
   retrieve the ``bike_number`` and ``duration`` from table ``trip_data`` but
   order the data by ``bike_number`` in descending order and limit the number of items returned to 5.
   ~~~~

   ====
   assert 0,0 == w01117
   assert 0,1 == 225
   assert 1,0 == w01117
   assert 1,1 == 626
   assert 2,0 == w01117
   assert 2,1 == 288
   assert 3,0 == w01117
   assert 3,1 == 559
   assert 4,0 == w01117
   assert 4,1 == 980

What happens if you try to limit the number of items returned before you specify how to sort the data in the SQL above?
