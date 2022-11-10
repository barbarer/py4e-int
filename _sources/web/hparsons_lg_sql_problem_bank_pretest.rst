Problem Bank for Pre Test Problems
-----------------------------------------------------

.. activecode:: hparsons_lg_sql_test_bank_pre_select
    :language: sql

    We use SQL to manage the equipment in a gym. Our current table ``equipment`` looks like this:

    .. image:: https://i.ibb.co/zbxr8M6/pretest-equipment.png
    
    To help us refill some sport equipments that are low in stock, 
    please write a SELECT statement to retrieve the ``name`` and  ``brand`` of all items 
    in the table ``equipment`` that belongs to ``sport`` category of "table_tennis" and
    has a ``quantity`` of less than 10.

    note: When you run the code, there will be several execution results.
    Please only refer to the unittest and the **last** execution result for debugging purposes.

    ~~~~
    DROP TABLE IF EXISTS equipment;
    create table "equipment" ("id" INTEGER, "name" TEXT, "sport" TEXT, "brand" TEXT, "quantity" INTEGER);
    INSERT INTO equipment (id,name,sport,brand,quantity) VALUES
        ('1', 'table_tennis_ball', 'table_tennis', 'stiga', '24'),
        ('2', 'table_tennis_racket', 'table_tennis', 'stiga', '6'),
        ('3', 'volleyball', 'volleyball', 'wilson', '10'),
        ('4', 'table_tennis_ball', 'table_tennis', 'dhs', '5'),
        ('5', 'basketball', 'basketball', 'nike', '7');
    ^^^^
    ====
    assert 0,0 == table_tennis_racket
    assert 0,1 == stiga
    assert 1,0 == table_tennis_ball
    assert 1,1 == dhs


.. activecode:: hparsons_lg_sql_test_bank_pre_update
    :language: sql

    In the same ``equipment`` table:

    .. image:: https://i.ibb.co/zbxr8M6/pretest-equipment.png

    We just bought more equipment for table tennis.

    Please write an UPDATE statement that: for all entries which ``sport`` column is ``table_tennis``,
    add the ``quantity`` by 5.

    note: When you run the code, there will be several execution results.
    Please only refer to the unittest and the **last** execution result for debugging purposes.
    ~~~~
    DROP TABLE IF EXISTS equipment;
    create table "equipment" ("id" INTEGER, "name" TEXT, "sport" TEXT, "brand" TEXT, "quantity" INTEGER);
    INSERT INTO equipment (id,name,sport,brand,quantity) VALUES
        ('1', 'table_tennis_ball', 'table_tennis', 'stiga', '24'),
        ('2', 'table_tennis_racket', 'table_tennis', 'stiga', '6'),
        ('3', 'volleyball', 'volleyball', 'wilson', '10'),
        ('4', 'table_tennis_ball', 'table_tennis', 'dhs', '5'),
        ('5', 'basketball', 'basketball', 'nike', '7');
    ^^^^
    -- Write your code here:

    -- The following line separates with your code and selects all data for testing. Please do not modify.
    ;
    SELECT * FROM equipment
    ====
    assert 0,4 == 29
    assert 1,4 == 11
    assert 2,4 == 10
    assert 3,4 == 10
    assert 4,4 == 7

.. activecode:: hparsons_lg_sql_test_bank_pre_join
    :language: sql

    Aside from the ``equipment`` table:

    .. image:: https://i.ibb.co/zbxr8M6/pretest-equipment.png


    As students can rent items from the gym, we have another table ``rental``:

    .. image:: https://i.ibb.co/7WNs12N/pretest-rental.png

    Where the ``equipment_id`` in this table refers to the ``id`` in the ``equipment`` table above.
    To provide sports-related recommendations for people, we want to know when each individual
    played a certain sport.

    Please write a statement using SELECT and JOIN to: select the ``sport`` from the ``equipment``
    table and ``name`` and ``date`` from the ``rental`` table, where the ``equipment_id`` in the
    ``rental`` table is the same as the ``id`` in the ``equipment`` table.

    note: When you run the code, there will be several execution results.
    Please only refer to the unittest and the **last** execution result for debugging purposes.

    ~~~~
    DROP TABLE IF EXISTS equipment;
    create table "equipment" ("id" INTEGER, "name" TEXT, "sport" TEXT, "brand" TEXT, "quantity" INTEGER);
    INSERT INTO equipment (id,name,sport,brand,quantity) VALUES
        ('1', 'table_tennis_ball', 'table_tennis', 'stiga', '24'),
        ('2', 'table_tennis_racket', 'table_tennis', 'stiga', '6'),
        ('3', 'volleyball', 'volleyball', 'wilson', '10'),
        ('4', 'table_tennis_ball', 'table_tennis', 'dhs', '5'),
        ('5', 'basketball', 'basketball', 'nike', '7');
    DROP TABLE IF EXISTS rental;
    create table "rental" ("name" TEXT, "equipment_id" INTEGER, "date" DATE);
    INSERT INTO rental (name,equipment_id,date) VALUES
        ('Alex', '2', '2022-11-06'),
        ('Blake', '1', '2022-11-06'),
        ('Charlie', '3', '2022-11-08'),
        ('Dale', '5', '2022-11-09');
    ^^^^
    ====
    assert 2,1 == Charlie
    assert 3,1 == Dale
