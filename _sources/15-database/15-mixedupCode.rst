Mixed-Up Code Questions
------------------------
.. parsonsprob:: db-mixed1
    :practice: T
    :numbered: left
    :adaptive:

    The following program creates a database file "music.sqlite" and a table
    "Tracks" with two columns. Drag the blocks of statements from the left column
    to the right column and put them in the right order.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('music.sqlite')
    =====
    cur = conn.cursor()
    =====
    cur.execute('DROP TABLE IF EXISTS Tracks')
    =====
    cur.execute('CREATE TABLE Tracks (title TEXT, plays INTEGER)')
    =====
    conn.close()

.. parsonsprob:: db-mixed2
    :practice: T
    :numbered: left
    :adaptive:

    The following program inserts 2 tracks into the table, prints them, then deletes
    a track if it meets a certain condition. Remember to make a connection to the
    database and create the cursor, first! Drag the blocks of statements from the
    left column to the right column and put them in the right order.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('music.sqlite')
    ======
    cur = conn.cursor()
    =====
    cur.execute('INSERT INTO Tracks (title, plays) VALUES (?, ?)',
        ('Thunderstruck', 20))
    cur.execute('INSERT INTO Tracks (title, plays) VALUES (?, ?)',
        ('My Way', 15))
    =====
    conn.commit()
    =====
    print('Tracks:')
    cur.execute('SELECT title, plays FROM Tracks')
    for row in cur:
      print(row)
    =====
    cur.execute('DELETE FROM Tracks WHERE plays < 100')
    conn.commit()
    =====
    cur.close()

.. parsonsprob:: db-mixed3
    :practice: T
    :adaptive:
    :numbered: left

    This program simply opens the database and selects all of the columns of all
    of the rows in the table "Twitter", then loops through the rows and prints out
    each row. At the end it will print the total count of rows, before closing the
    cursor. Watch your indentation!
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('spider.sqlite')
    =====
    cur = conn.cursor()
    =====
    cur.execute('SELECT * FROM Twitter')
    =====
    count = 0
    =====
    for row in cur:
    =====
      print(row)
      count = count + 1
    =====
    print(count, 'rows.')
    =====
    cur.close()

.. parsonsprob:: db-mixed4
    :practice: T
    :numbered: left
    :adaptive:

    The following program inserts 2 dogs into the table, prints them, then deletes
    a dog if it meets a certain condition. Remember to make a connection to the
    database and create the cursor, first! Drag the blocks of statements from the
    left column to the right column and put them in the right order.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('pets.sqlite')
    ======
    cur = conn.cursor()
    =====
    cur.execute('INSERT INTO Dogs (name, breed) VALUES (?, ?)',
        ('Penelope', 'Doberman'))
    cur.execute('INSERT INTO Dogs (title, plays) VALUES (?, ?)',
        ('Milo', 'Springer Spaniel'))
    =====
    conn.commit()
    =====
    print('Dogs:')
    cur.execute('SELECT name, breed FROM Dogs')
    for row in cur:
      print(row)
    =====
    cur.execute('DELETE FROM Dogs WHERE breed = "Poodle"')
    conn.commit()
    =====
    cur.close()

.. parsonsprob:: db-mixed5
    :practice: T
    :adaptive:
    :numbered: left

    This program simply opens the database and selects all of the columns of all
    of the rows in the table "Socks", then loops through the rows and prints out
    each row. At the end it will print the total count of rows, before closing the
    cursor. Watch your indentation!
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('clothes.sqlite')
    =====
    cur = conn.cursor()
    =====
    cur.execute('SELECT * FROM Socks')
    =====
    count = 0
    =====
    for row in cur:
    =====
      print(row)
      count = count + 1
    =====
    print(count, 'rows.')
    =====
    cur.close()

.. parsonsprob:: db-mixed6
    :practice: T
    :adaptive:
    :numbered: left

    This program simply opens the database and selects all of the columns of all
    of the rows in the table "Dogs" and in the table "Cats", then loops through
    the rows and prints out the first 5 rows. It then joins the two tables on the
    pet name where the name is "Spot". At the end it will print the total count of
    rows, before closing the cursor.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('pets.sqlite')
    cur = conn.cursor()
    =====
    cur.execute('SELECT * FROM Dogs')
    count = 0
    print('Dogs:')
    for row in cur:
      if count < 5: print(row)
      count = count + 1
    print(count, 'rows.')
    =====
    cur.execute('SELECT * FROM Cats')
    count = 0
    print('Cats:')
    for row in cur:
      if count < 5: print(row)
      count = count + 1
    print(count, 'rows.')
    =====
    cur.execute('''SELECT * FROM Dogs JOIN Cats
                ON Dogs.name = Cats.name
                 WHERE Dogs.name = "Spot"''')
    count = 0
    print('Connections for name="Spot":')
    for row in cur:
      if count < 5: print(row)
      count = count + 1
    print(count, 'rows.')
    =====
    cur.close()

.. parsonsprob:: db-mixed7
    :practice: T
    :adaptive:
    :numbered: left

    This program simply opens the database and selects all of the columns of all
    of the rows in the table "Pants" and in the table "Shirts". It then joins the
    two tables on the column "fabric". Watch out for extra blocks!
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('clothes.sqlite')
    =====
    cur = conn.cursor #distractor
    =====
    cur = conn.cursor()
    =====
    cur.execute('SELECT * FROM Pants')
    =====
    cur.execute('SELECT all FROM Pants') #distractor
    =====
    cur.execute('SELECT * FROM Shirts')
    =====
    cur.execute('SELECT * FROM Shirts') #distractor
    =====
    cur.execute('''SELECT * FROM Pants JOIN Shirts
                ON Pants.fabric = Shirts.fabric''')
    =====
    cur.close()

.. parsonsprob:: db-mixed8
    :practice: T
    :adaptive:
    :numbered: left

    This program simply opens the database and selects all of the columns of all
    of the rows in the table "Cupcakes" and in the table "Cakes". It then joins the
    two tables on the columns "icing" and "frosting", where the topping is chocolate.
    It will then print the first 5 rows featuring a chocolate topping, then list
    the total number of rows after the join. Watch out for extra blocks!
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('desserts.sqlite')
    =====
    cur = conn.cursor( #distractor
    =====
    cur = conn.cursor()
    =====
    cur.execute('SELECT * FROM Cupcakes')
    =====
    cur.execute('SELECT all FROM Cupcakes') #distractor
    =====
    cur.execute('SELECT * FROM Cakes')
    =====
    cur.execute('SELECT * FROM Cakes') #distractor
    =====
    cur.execute('''SELECT * FROM Cupcakes JOIN Cakes
                ON Cupcakes.icing = Cakes.frosting
                WHERE Cupcakes.icing = "chocolate"''')
    =====
    count = 0
    print('Connections for icing="chocolate":')
    for row in cur:
      if count < 5: print(row)
      count = count + 1
    print(count, 'rows.')
    =====
    cur.close()

.. parsonsprob:: db-mixed9
    :practice: T
    :adaptive:
    :numbered: left

    This program opens the lunch database and selects all of the columns of all
    of the rows in the table "Tacos", then loops through the rows and counts them.
    At the end it will print the total number of rows, before closing the
    cursor. Watch out for extra blocks and your indentation!
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('lunch.sqlite')
    =====
    conn = sql.connect('lunch.sqlite') #distractor
    =====
    cur = conn.cursor()
    =====
    cur.execute('SELECT * FROM Tacos')
    =====
    cur.exectute('SELECT Tacos FROM lunch') #distractor
    =====
    count = 0
    =====
    for row in cur:
    =====
      count = count + 1
    =====
    print(count, 'rows.')
    =====
    cur.close()
    =====
    cur.close #distractor

.. parsonsprob:: db-mixed10
    :practice: T
    :adaptive:
    :numbered: left

    This program opens the clothes database and inserts a chambray smock into the
    "dress" table. At the end it will print the total count of rows, before closing
    the cursor. Watch out for extra blocks and your indentation!
    -----
    import sqlite3
    conn = sqlite3.connect('clothes.sqlite')
    cur = conn.cursor()
    =====
    cur.execute('INSERT INTO Dresses (style, fabric) VALUES (?, ?)',
        ('smock', 'chambray'))
    =====
    conn.commit()
    =====
    count = 0
    =====
    for row in cur:
    =====
    for row in cur #distractor
    =====
        print(row)
        count = count + 1
    =====
    print(count, 'rows.')
    =====
    print(row, 'rows.') #distractor
    =====
    cur.close()
