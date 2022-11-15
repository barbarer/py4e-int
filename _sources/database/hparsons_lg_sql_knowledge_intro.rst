Introduction to AND, UPDATE, and JOIN
--------------------------------------

First, let's spend 8 minutes to learn about ``AND``, ``UPDATE``, and ``JOIN`` in SQL!

AND Keyword
==================================================

.. activecode:: hparsons_lg_sql_intro_and
    :language: sql

    Here are Alice's bookkeeping entries in the table ``bookkeeping``:

    .. image:: https://i.ibb.co/yYZ9tyY/intro-bookkeeping.png

    Sometimes we want to select data with multiple constraints, and that can be done using ``AND``.

    note: When you run the code, there will be several execution results.
    Please only refer to the **last** execution result that displays the entries.

    ~~~~
    DROP TABLE IF EXISTS bookkeeping;
    create table "bookkeeping" ("date" DATE, "category" TEXT, "item" TEXT, "price" FLOAT);
    INSERT INTO bookkeeping (date,category,item,price) VALUES
        ('2022-10-27', 'electronics', 'keyboard', '98.8'),
        ('2022-10-30', 'food_drink', 'boba', '5.2'),
        ('2022-11-06', 'food_drink', 'ramen', '15'),
        ('2022-11-09', 'food_drink', 'boba', '5.5');
    ^^^^
    -- The following statement selects the "date", "item", and "price" of entries
    -- that are in the "food_drink" "category", and "price" is over 10.
    SELECT date, item, price FROM bookkeeping WHERE category = "food_drink" AND price > 10


UPDATE Keyword
==================================================

.. activecode:: hparsons_lg_sql_intro_update
    :language: sql

    Here is a similar table for ``bookkeeping``:

    .. image:: https://i.ibb.co/yYZ9tyY/intro-bookkeeping.png

    Sometimes we want to update certain records.

    note: When you run the code, there will be several execution results.
    Please only refer to the **last** execution result that displays the table.

    ~~~~
    DROP TABLE IF EXISTS bookkeeping;
    create table "bookkeeping" ("date" DATE, "category" TEXT, "item" TEXT, "price" FLOAT);
    INSERT INTO bookkeeping (date,category,item,price) VALUES
        ('2022-10-27', 'electronics', 'keyboard', '98.8'),
        ('2022-10-30', 'food_drink', 'boba', '5.2'),
        ('2022-11-06', 'food_drink', 'ramen', '15'),
        ('2022-11-09', 'food_drink', 'boba', '5.5');
    ^^^^
    -- The following statement updates the entry which "item" is "keyboard",
    -- and sets its price to 100.
    UPDATE bookkeeping SET price = 100 WHERE item = "keyboard";


    -- The following statement updates all entries which "item" are "boba",
    -- and add 2 to their current price.
    UPDATE bookkeeping SET price = price + 2 WHERE item = "boba";

    -- The following line selects all data to display the change.
    SELECT * FROM bookkeeping


JOIN Keyword
==================================================

.. activecode:: hparsons_lg_sql_intro_join
    :language: sql

    Consider as a publishing company, we have two tables: ``authors`` and ``books``:

    .. image:: https://i.ibb.co/98D76Dh/intro-join.png

    Sometimes we want to merge the information from different tables.

    note: When you run the code, there will be several execution results.
    Please only refer to the display of the entries.

    ~~~~
    DROP TABLE IF EXISTS authors;
    create table "authors" ("id" INTEGER, "name" TEXT, "nationality" TEXT);
    INSERT INTO authors (id,name,nationality) VALUES
        ('37', 'Ellen Writer', 'Americans'),
        ('15', 'Mu Li', 'Chinese'),
        ('24', 'Frank Schmidt', 'Germans');
    DROP TABLE IF EXISTS books;
    create table "books" ("id" INTEGER, "title" TEXT, "author_id" INTEGER);
    INSERT INTO books (id,title,author_id) VALUES
        ('1', 'Introduction to Python', '37'),
        ('2', 'European Fairy Tales', '24'),
        ('3', 'Healthy Food at Home', '15'),
        ('4', 'Modern AI Applications', '37');
    ^^^^
    -- The following statement will join information of the two tables by matching the "author_id"
    -- column of the "books" table and the "id" column of the "authors" table.
    SELECT books.title, authors.name, authors.nationality FROM books JOIN authors ON books.author_id = authors.id


What to do next
============================

.. raw:: html

    <p>Click on the following link to go the practice problems: <a id="hparsons_lg_sql_practice"><font size="+2">Practice Problems</font></a></p>
    <p>By the way, this time you will always get the same type of practice even if you navigate back and forth =)</p>

    <script type="text/javascript">

      function getCookie(cname) {
         let name = cname + "=";
         let decodedCookie = decodeURIComponent(document.cookie);
         let ca = decodedCookie.split(';');
         for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
               c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
               return c.substring(name.length, c.length);
            }
         }
         return "";
      }

      function setCookie(cname, cvalue) {
         document.cookie = cname + "=" + cvalue + ";";
      }

      window.onload = function() {

         a = document.getElementById("hparsons_lg_sql_practice")

         // get prev set cookie
         var EXP_COOKIE = 'hparsons_lg_sql_221115'
         var cond = getCookie(EXP_COOKIE);

         // if no prev set cookie: generate random condition and set cookie
         if (cond != 'wr' && cond != 'hp') {
            var v = Math.floor(Math.random() * 2);
            if (v < 1) {
                cond = 'wr';
            } else {
                cond = 'hp';
            }
            setCookie(EXP_COOKIE, cond);
         }

         if (cond == 'wr') {
            a.href = "hparsons_lg_sql_practice_W.html"
         } else if (cond == 'hp') {
            a.href = "hparsons_lg_sql_practice_H.html"
         }
      };
    </script>
