Write Code Questions
-----------------------
#.

   .. activecode:: db_writecode_bike1
      :language: sql
      :autograde: unittest
      :dburl: /_static/bikeshare.db 

      Given a database of bike share information fix the SELECT statement to
      retrieve the ``bike_number`` and ``duration`` from table ``trip_data`` for
      ``bike_number`` "W00837".
      ~~~~
      SELECT bike, duration IN trip_data WHERE bike = W00837
      ====
      assert 0,0 == W00837
      assert 0,1 == 1577
      assert 1,0 == W00837
      assert 1,1 == 110
      assert 3,0 == W00837
      assert 3,1 == 3398
      assert 7,0 == W00837
      assert 7,1 == 1836
      assert 13,0 == W00837
      assert 13,1 == 492

#.

   .. activecode:: db_writecode_bike2
      :language: sql
      :autograde: unittest
      :dburl: /_static/bikeshare.db 

      Given a database of bike share information write a SELECT statement below that
      retrieves the ``bike_number`` and ``duration`` from table ``trip_data`` for
      all of the rentals that had a ``duration`` of more than 85,000.
      ~~~~


      ====
      assert 0,0 == W00837
      assert 0,1 == 85168
      assert 1,0 == W00930
      assert 1,1 == 85666
      assert 3,0 == W00202
      assert 3,1 == 85102
      assert 7,0 == W00076
      assert 7,1 == 85194

#.

   .. activecode:: db_writecode_bike3
      :language: sql
      :autograde: unittest
      :dburl: /_static/bikeshare.db 

      Given a database of bike share information write a SELECT statement below that
      retrieves the ``bike_number``, ``duration``, and ``start_date`` from table ``trip_data`` for all of
      the rentals from ``start_station`` 31105 and limit the results to 5.
      ~~~~

      ====
      assert 0,0 == W01066
      assert 0,1 == 392
      assert 0,2 == 2011-11-29 07:25:16.000000
      assert 2,0 == W01102
      assert 2,1 == 1063
      assert 3,0 == W01066
      assert 3,1 == 1210
      assert 4,0 == W00208
      assert 4,1 == 422

#.

   .. activecode:: db_writecode_bike4
      :language: sql
      :autograde: unittest
      :dburl: /_static/bikeshare.db

      Given a database of bike share information write a SELECT statement below that
      retrieves the ``bike_number`` and ``member_type`` for all of
      the rentals from table ``trip_data`` where ``end_station`` 31200 and limit the results to 5.
      ~~~~

      ====
      assert 0,0 == W00058
      assert 0,1 == Member
      assert 1,0 == W00395
      assert 1,1 == Casual
      assert 3,0 == W00540
      assert 3,1 == Member
      assert 4,0 == W00543
      assert 4,1 == Member

#.

   .. activecode:: db_writecode_bike5
      :language: sql
      :autograde: unittest
      :dburl: /_static/bikeshare.db

      Given a database of bike share information write a SELECT statement below that
      retrieves the ``bike_number`` and ``duration`` from table ``trip_data`` for
      all of the rentals that had a ``duration`` of more than 85,000 and order
      them by ``duration`` descending.
      ~~~~


      ====
      assert 0,1 == 85679
      assert 1,0 == W00930
      assert 1,1 == 85666
      assert 3,0 == W00743
      assert 3,1 == 85318
      assert 7,0 == W00202
      assert 7,1 == 85102

#.

   .. activecode:: db_writecode_bike6
      :language: sql
      :autograde: unittest
      :dburl: /_static/bikeshare.db

      Given a database of bike share information write a SELECT statement to
      retrieve all the rows from tables ``trip_data`` and ``bikeshare_stations``
      where the ``start_station`` in ``trip_data`` is the same as the ``station_id`` in ``bikeshare_stations``.
      Limit the results to 5 rows.
      ~~~~

      ====
      assert 0,0 == 513639
      assert 0,4 == 31104
      assert 0,6 == W00058
      assert 1,0 == 718494
      assert 1,1 == 1978
      assert 4,0 == 578726
      assert 4,1 == 1008
      assert 4,11 == open


#.

   .. activecode:: db_writecode_bike7
      :language: sql
      :autograde: unittest
      :dburl: /_static/bikeshare.db

      Given a database of bike share information write a SELECT statement to
      retrieve the ``duration`` and ``bike_number`` from ``trip_data`` and the ``name`` from ``bikeshare_stations``
      where the ``start_station`` in ``trip_data`` is the same as the ``station_id`` in ``bikeshare_stations``.
      Limit the results to 5 rows.
      ~~~~

      ====
      assert 0,0 == 332
      assert 0,1 == W00058
      assert 1,0 == 1978
      assert 1,1 == W00775
      assert 4,0 == 1008
      assert 4,1 == W00392
      assert 4,2 == 14th St & Spring Rd NW

#.

   .. activecode:: db_writecode_bike8
      :language: sql
      :autograde: unittest
      :dburl: /_static/bikeshare.db 

      Given a database of bike share information write a SELECT statement to
      retrieve the ``duration`` and ``bike_number`` from ``trip_data`` and the ``name``, ``latitude``, and ``longitude`` from ``bikeshare_stations``
      where the ``start_station`` in ``trip_data`` is the same as the ``station_id`` in ``bikeshare_stations``.
      Limit the results to 5 rows.
      ~~~~

      ====
      assert 0,0 == 332
      assert 0,1 == W00058
      assert 0,3 == 38.9226377090252
      assert 1,0 == 1978
      assert 1,1 == W00775
      assert 4,0 == 1008
      assert 4,1 == W00392
      assert 4,4 == -77.0327126210449

#.

   .. activecode:: db_writecode_bike9
      :language: sql
      :autograde: unittest
      :dburl: /_static/bikeshare.db 

      Given a database of bike share information write a SELECT statement to
      retrieve the ``bike_number``, ``start_date``, and ``end_date`` from ``trip_data`` and the ``station_id`` and ``name`` from ``bikeshare_stations``
      where the ``start_station`` in ``trip_data`` is the same as the ``station_id`` in ``bikeshare_stations``
      and where the ``station_id`` equals 31101.  Limit the results to 5 rows.
      ~~~~

      ====
      assert 0,0 == W00013
      assert 0,3 == 31101
      assert 1,0 == W00719
      assert 1,3 == 31101
      assert 4,0 == W00821
      assert 4,3 == 31101

#.

   .. activecode:: db_writecode_bike10
      :language: sql
      :autograde: unittest
      :dburl: /_static/bikeshare.db

      Given a database of bike share information write a SELECT statement to
      retrieve the ``bike_number``, ``start_date``, and ``end_date`` from ``trip_data`` and the ``station_id`` and ``name`` from ``bikeshare_stations``
      where the ``start_station`` in ``trip_data`` is the same as the ``station_id`` in ``bikeshare_stations``
      and where the ``member_type`` equals "Casual".  Limit the results to 5 rows.
      ~~~~

      ====
      assert 0,0 == W00775
      assert 0,3 == 31230
      assert 1,0 == W00204
      assert 1,3 == 31604
      assert 4,0 == W00568
      assert 4,3 == 31216
