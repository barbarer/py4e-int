Problem Bank for Post Test Problems
-----------------------------------------------------

.. activecode:: hparsons_lg_sql_exe_test_bank_post_select
    :language: sql
    :showlastsql:

    We use SQL to manage a vending machine. Our current table ``goods`` looks like this:

    .. image:: https://i.ibb.co/hWd4CJG/posttest-goods.png
        :width: 600
    
    To help us refill goods that are low in stock, 
    please write a SELECT statement to retrieve the ``name`` and  ``brand`` of all items
    in the table ``goods`` that belongs to ``type`` of "chips" and has a ``quantity`` of
    less than 15.

    note: When you run the code, there will be several execution results.
    Please only refer to the **last** execution result for debugging purposes.

    ~~~~
    DROP TABLE IF EXISTS goods;
    create table "goods" ("id" INTEGER, "name" TEXT, "type" TEXT, "brand" TEXT, "quantity" INTEGER);
    INSERT INTO goods (id,name,type,brand,quantity) VALUES
        (1, 'classic_chips', 'chips', 'lays', 18),
        (2, 'cheese_nachos', 'chips', 'doritos', 9),
        (3, 'sparkling_water', 'drink', 'lacroix', 25),
        (4, 'classic_chips', 'chips', 'ruffles', 5),
        (5, 'choco_nuts', 'protein_bar', 'kind', 7);
    ^^^^
    ====
    assert 0,0 == cheese_nachos
    assert 0,1 == lays
    assert 1,0 == classic_chips
    assert 1,1 == ruffles


.. activecode:: hparsons_lg_sql_exe_test_bank_post_update
    :language: sql
    :showlastsql:

    In the same ``goods`` table:

    .. image:: https://i.ibb.co/hWd4CJG/posttest-goods.png
        :width: 600
    
    We just bought more chips.

    Please write an UPDATE statement that: for all entries which ``type`` column is ``chips``,
    add the ``quantity`` by 10.

    note: When you run the code, there will be several execution results.
    Please only refer to the **last** execution result for debugging purposes.
    ~~~~
    DROP TABLE IF EXISTS goods;
    create table "goods" ("id" INTEGER, "name" TEXT, "type" TEXT, "brand" TEXT, "quantity" INTEGER);
    INSERT INTO goods (id,name,type,brand,quantity) VALUES
        (1, 'classic_chips', 'chips', 'lays', 18),
        (2, 'cheese_nachos', 'chips', 'doritos', 9),
        (3, 'sparkling_water', 'drink', 'lacroix', 25),
        (4, 'classic_chips', 'chips', 'ruffles', 5),
        (5, 'choco_nuts', 'protein_bar', 'kind', 7);
    ^^^^
    -- Write your code BELOW --
    
    
    
    
    -- Write your code ABOVE --
    -- The following lines are for displaying the results.
    -- Please do not modify.
    ;
    SELECT * FROM goods;
    ====
    assert 0,4 == 28
    assert 1,4 == 19
    assert 2,4 == 25
    assert 3,4 == 15
    assert 4,4 == 7

.. activecode:: hparsons_lg_sql_exe_test_bank_post_join
    :language: sql
    :showlastsql:

    Aside from the ``goods`` table:

    .. image:: https://i.ibb.co/hWd4CJG/posttest-goods.png
        :width: 600

    We have another table ``transactions`` that looks like this:

    .. image:: https://i.ibb.co/B4H3WXb/posttest-transactions.png
        :width: 600

    Where the ``goods_id`` in this table refers to the ``id`` in the ``goods`` table above. 

    To provide better service, we want to know when people purchased a type of item and how they paid.

    Please write a statement using SELECT and JOIN to: select the ``type`` from the ``goods`` table
    and ``method`` and ``date`` from the ``transactions`` table, where the ``goods_id`` in the
    ``transactions`` table is the same as the ``id`` in the ``goods`` table.

    note: When you run the code, there will be several execution results.
    Please only refer to the unittest and the **last** execution result for debugging purposes.
    ~~~~
    DROP TABLE IF EXISTS goods;
    create table "goods" ("id" INTEGER, "name" TEXT, "type" TEXT, "brand" TEXT, "quantity" INTEGER);
    INSERT INTO goods (id,name,type,brand,quantity) VALUES
        (1, 'classic_chips', 'chips', 'lays', 18),
        (2, 'cheese_nachos', 'chips', 'doritos', 9),
        (3, 'sparkling_water', 'drink', 'lacroix', 25),
        (4, 'classic_chips', 'chips', 'ruffles', 5),
        (5, 'choco_nuts', 'protein_bar', 'kind', 7);
    DROP TABLE IF EXISTS transactions;
    create table "transactions" ("method" TEXT, "goods_id" INTEGER, "date" DATE);
    INSERT INTO transactions (method,goods_id,date) VALUES
        ('cash', '3', '2022-11-10'),
        ('credit_card', '1', '2022-11-13'),
        ('credit_card', '2', '2022-11-14'),
        ('cash', '5', '2022-11-15');
    ^^^^
    ====
    assert 3,1 == protein_bar
    assert 3,2 == cash

Thank You 🤗
============================
🎉 We appreciate your participation in our study.

If you have questions or feedback, or want to know more, please contact Zihan Wu (ziwu@umich.edu).