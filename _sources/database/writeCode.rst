Write Code Questions
-----------------------
#.

   .. activecode:: db_select_bike_number__dur_where_bike_ac1
      :language: sql
      :autograde: unittest
      :dburl: https://runestone.academy/runestone/books/published/overview/_static/bikeshare.db

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

   .. activecode:: db_select_bike_number_dur_where_dur_ac1
      :language: sql
      :autograde: unittest
      :dburl: https://runestone.academy/runestone/books/published/overview/_static/bikeshare.db

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

   .. activecode:: db_select_start_station_limit_5_ac1
      :language: sql
      :autograde: unittest
      :dburl: https://runestone.academy/runestone/books/published/overview/_static/bikeshare.db

      Given a database of bike share information write a SELECT statement below that
      retrieves the ``bike_number``, ``duration``, and ``start_date`` for all of
      the rentals from ``start_station`` 31105 and limit the results to 5.
      ~~~~

      ====
      assert 0,0 == W01066
      assert 0,1 == 392
      assert 0,2 == 2011-11-29 07:25:16.000000
      assert 2,0 == W00462
      assert 2,1 == 430
      assert 4,0 == W01066
      assert 4,1 == 1210
      assert 5,0 == W00208
      assert 5,1 == 422

#.

   .. activecode:: db_select_start_station_order_by_bike_num_ac1
      :language: sql
      :autograde: unittest
      :dburl: https://runestone.academy/runestone/books/published/overview/_static/bikeshare.db

      Given a database of bike share information write a SELECT statement below that
      retrieves the ``bike_number`` and ``member_type``, for all of
      the rentals from ``end_station`` 31200 and limit the results to 5.
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

   .. activecode:: db_select_bike_number_dur_where_dur_orderby_ac1
      :language: sql
      :autograde: unittest
      :dburl: https://runestone.academy/runestone/books/published/overview/_static/bikeshare.db

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
