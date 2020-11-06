Write Code Questions - INCOMPLETE
----------------------------------

.. activecode:: db_select_bike_number__dur_where_bike_ac1
   :language: sql
   :autograde: unittest
   :dburl: https://runestone.academy/runestone/books/published/overview/_static/bikeshare.db

   Given a database of bike share information with a table called ``trip_data``
   and columns of ``duration`` and ``bike_number`` fix the SELECT statement to
   retrieve the bike number and duration for bike_number "W00837".
   ~~~~
   SELECT bike, duration IN trip_data WHERE bike == "W00837"
   ====
   assert 0,0 == W00837
   assert 0,1 == 1577
   assert 2,0 == W00837
   assert 2,1 == 110
   assert 4,0 == W00837
   assert 4,1 == 3398
   assert 8,0 == W00837
   assert 8,1 == 1836
   assert 14,0 == W00837
   assert 14,1 == 492

.. activecode:: db_select_bike_number_dur_where_dur_ac1
   :language: sql
   :autograde: unittest
   :dburl: https://runestone.academy/runestone/books/published/overview/_static/bikeshare.db

   Given a database of bike share information with a table called ``trip_data``
   and columns of ``duration`` and ``bike_number`` write a SELECT statement below that
   retrieves the ``bike_number`` and ``duration`` for all of the rentals that had a
   ``duration`` of more than 85,000.
   ~~~~


   ====
   assert 0,0 == W00837
   assert 0,1 == 85168
   assert 2,0 == W00930
   assert 2,1 == 85666
   assert 4,0 == W00202
   assert 4,1 == 85102
   assert 8,0 == W00076
   assert 8,1 == 85194
