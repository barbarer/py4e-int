Multiple Choice Questions
--------------------------
.. mchoice:: dbEx_MC1
    :practice: T
    :answer_a: Add a table to the Cats database with the name "Petunia" and breed "American Shorthair".
    :answer_b: Add a row to the Cats table with the name "Petunia" and the breed "American Shorthair".
    :answer_c: Create the table Cats.
    :answer_d: Add a row to the Cats table with the name "American Shorthair" and the breed "Petunia".
    :correct: b
    :feedback_a: Inserts adds a row to a table.
    :feedback_b: This will insert a row in the table Cats with the name "Petunia" and the breed "American Shorthair".
    :feedback_c: This line wouldn't create a new table.
    :feedback_d: Check the order of the columns and values.

    Looking at the code below, what would this line do?

    ::

      INSERT INTO Cats (name, breed) VALUES ('Petunia', 'American Shorthair')

.. mchoice:: dbEx_MC2
    :practice: T
    :answer_a: It will remove the row "Cats".
    :answer_b: It will move "Cats" to the end of the database.
    :answer_c: It will remove the column "Cats".
    :answer_d: It will remove the table "Cats".
    :correct: d
    :feedback_a: "Cats" is not a tuple (row).
    :feedback_b: That's not quite what drop means in SQL.
    :feedback_c: "Cats" is not an attribute (column).
    :feedback_d: "Cats" is a relation (table), so this line will remove it from the database.

    Looking at the code below, what would this line do to the table ``Cats``?

    ::

      cur.execute('DROP TABLE IF EXISTS Cats ')

.. mchoice:: dbEx_MC3
    :practice: T
    :answer_a: IN
    :answer_b: JOIN
    :answer_c: BETWEEN
    :answer_d: SELECT INTO
    :correct: b
    :feedback_a: The IN operator allows you to specify multiple values in a WHERE clause
    :feedback_b: A JOIN clause is used to combine rows from two or more tables, based on a related column between them.
    :feedback_c: The BETWEEN operator selects values within a given range.
    :feedback_d: The SELECT INTO statement copies data from one table into a new table.

    Which SQL keyword is used to combine rows from two tables in a database?

.. mchoice:: dbEx_MC4
    :practice: T
    :answer_a: DELETE FROM Cats WHERE name = 'Ruby'
    :answer_b: DELETE name='Ruby' FROM Cats
    :answer_c: DELETE ROW name='Ruby' FROM Cats
    :answer_d: DELETE FROM Cats WHERE name == 'Ruby'
    :correct: a
    :feedback_a: This tells the program to remove all rows with a name equal to "Ruby" from the "Cats" table.
    :feedback_b: The table should be called first.
    :feedback_c: You do not need to use the command "ROW". It will already delete the data associated with Ruby's entry.
    :feedback_d: You do not use == in SQL

    How can you delete all of the rows where the "name" is "Ruby" in the Cats Table?

.. mchoice:: dbEx_MC5_new
    :practice: T
    :answer_a: UNIQUE
    :answer_b: PRIMARY KEY
    :answer_c: LOGICAL KEY
    :answer_d: NOT NULL
    :correct: c
    :feedback_a: This constraint ensures that all values in a column are different
    :feedback_b: This constraint uniquely identifies each row in a table.
    :feedback_c: This is not a SQL constraint, because it is what *we* use to refer to a row, not the program's identifier.
    :feedback_d: This constraint ensures that a column cannot have a NULL value.

    Which of the following is **not** a SQL constraint?

.. mchoice:: dbEx_MC6_new
    :practice: T
    :answer_a: DELETE
    :answer_b: REMOVE
    :answer_c: COLLAPSE
    :answer_d: DROP
    :correct: a
    :feedback_a: Delete will try to remove data from a database.
    :feedback_b: Not quite.
    :feedback_c: Nope.
    :feedback_d: This is used to delete a table from a database.

    Which command will try to remove data from a table in a database?

.. mchoice:: dbEx_MC7
    :practice: T
    :answer_a: SELECT FROM Breed,Cats
    :answer_b: SELECT Cats FROM Breed
    :answer_c: SELECT Breed FROM Cats
    :answer_d: FROM Cats SELECT Breed
    :correct: c
    :feedback_a: This has all the correct words, but they are quite mixed up. No commas are necessary here!
    :feedback_b: This uses the right order, but the wrong commands.
    :feedback_c: This command is very straight forward! It <i>selects</i> the <i>breed</i> <i>from</i> the table <i>cats</i>
    :feedback_d: This uses the right commands in the wrong order.

    Which is the correct command for a statement that will select data from the Breed column in the Cats table?

.. mchoice:: dbEx_MC8
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: * indicates that you want the database to return all of the columns for each row that matches the WHERE clause.
    :feedback_b: Try again!

    True or False? The following line will select all columns for the name "Bernard" from the table "Cats".

    ::

      SELECT * FROM Cats WHERE name = 'Bernard'

.. mchoice:: dbEx_MC9
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: SQLite takes care to keep two programs from changing the same data at the same time, so make sure you save frequently!
    :feedback_b: Try again!

    True or False? SQLite will **not** let two programs change the same data at the same time.

.. mchoice:: dbEx_MC10
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again!
    :feedback_b: A cursor is used to execute SQL commands in a database and retrieve data from the database, not create one.

    True or False? A cursor is used to create a database.
