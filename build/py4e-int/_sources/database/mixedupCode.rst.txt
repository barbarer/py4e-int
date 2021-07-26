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

    The following program inserts 2 tracks into the table, commits that change,
    prints the track data, deletes a track if it meets a certain condition,
    and commits that change. Remember to make a connection to the
    database and create the cursor, first! Drag the blocks of statements from the
    left column to the right column and put them in the right order.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('music.sqlite')
    =====
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

    The following program inserts 2 dogs into the table, commits that change,
    prints them, then deletes a dog if it meets a certain condition, and
    commits that change. Remember
    to make a connection to the database and create the cursor, first! Drag
    the blocks of statements from the left column to the right column and put
    them in the right order.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('pets.sqlite')
    =====
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

    This program simply opens the database and selects all pants and shirts
    with the same fabric and prints them. Watch out for extra blocks!
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('clothes.sqlite')
    =====
    cur = conn.cursor()
    =====
    cur = conn.cursor #paired
    =====
    cur.execute('''SELECT * FROM Pants JOIN Shirts
                ON Pants.fabric = Shirts.fabric''')
    =====
    cur.execute('''SELECT * FROM Pants JOIN Shirts
                ON Pants.fabric == Shirts.fabric''') #paired
    =====
    for row in cur:
    =====
    for row in conn: #paired
    =====
        print(row)
    =====
    cur.close()

.. parsonsprob:: db-mixed8
    :practice: T
    :adaptive:
    :numbered: left

    This program simply opens the database and selects all of the Cupcakes and
    Cakes where the Cupcake icing and Cake frosting are chocolate.
    It will then print the rows.  Watch out for extra blocks!
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('desserts.sqlite')
    =====
    cur = conn.cursor()
    =====
    cur = cursor() #paired
    =====
    cur.execute('''SELECT * FROM Cupcakes JOIN Cakes
                ON Cupcakes.icing = Cakes.frosting
                WHERE Cupcakes.icing = "chocolate"''')
    =====
    cur.execute('''SELECT * FROM Cupcakes JOIN Cakes
                   ON Cake.icing = Cupcake.frosting
                   WHERE Cupcakes.icing = "chocolate"''') #paired
    =====
    for row in cur:
    =====
      print(row)
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
    conn = sql.connect('lunch.sqlite') #paired
    =====
    cur = conn.cursor()
    =====
    cur.execute('SELECT * FROM Tacos')
    =====
    cur.exectute('SELECT Tacos FROM lunch') #paired
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
    cur.close #paired
