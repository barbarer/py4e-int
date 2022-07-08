.. activecode:: sqlTEST
    :language: sql
    :autograde: unittest
    :dburl: ../bikeshare.db

    select bike_number, max(duration)
    from trip_data
    group by bike_number
    order by max(duration) desc
    limit 4;

    ====
    assert 0,0 == W00379
    assert 0,1 == 86355
    assert 2,1 == 86336
