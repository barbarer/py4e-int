Mixed-Up Code Questions
------------------------
.. parsonsprob:: db-mixed1
    :practice: T
    :numbered: left
    :adaptive:

    Create a database file "music.sqlite" and a table "Tracks" with two columns.  
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

    Create a database file "music.sqlite". Then, insert 2 tracks into the table, commit that change,
    print the track data, delete a track if it meets a certain condition,
    and commit that change. Remember to make a connection to the
    database and create the cursor, first!
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('music.sqlite')
    =====
    cur = conn.cursor()
    =====
    cur.execute('INSERT INTO Tracks (title, plays) VALUES (?, ?)', ('Thunderstruck', 20))
    cur.execute('INSERT INTO Tracks (title, plays) VALUES (?, ?)', ('My Way', 15))
    =====
    cur.execute('INSERT IN Tracks (title, plays) VALUE (?, ?)', ('Thunderstruck', 20))
    cur.execute('INSERT IN Tracks (title, plays) VALUE (?, ?)', ('My Way', 15)) #paired
    =====
    conn.commit()
    =====
    print('Tracks:')
    =====
    cur.execute('SELECT title, plays FROM Tracks')
    =====
    cur.execute('FROM Tracks SELECT title, plays') #paired
    =====
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

    Create a database file "spider.sqlite". Then selects all of the rows in the table "Twitter".
    Then loop through the rows and prints out each row. At the end it will print the total 
    count of rows, before closing the cursor.
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
    count = 1 #paired
    =====
    for row in cur:
    =====
      print(row)
      count = count + 1
    =====
    print(count, 'rows.')
    =====
    print('rows.') #paired
    =====
    cur.close()

.. parsonsprob:: db-mixed4
    :practice: T
    :numbered: left
    :adaptive:

    Create a database 'pets.sqlite' with a table 'Dogs'. Insert 2 dogs into the table, commit that change,
    print them, then delete a dog if it meets a certain condition, and commit that change. 
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('pets.sqlite')
    =====
    cur = sqlite3.cursor('pets.sqlite') #distractor
    =====
    cur = conn.cursor()
    =====
    cur.execute('INSERT INTO Dogs (name, breed) VALUES (?, ?)', ('Penelope', 'Doberman'))
    cur.execute('INSERT INTO Dogs (title, plays) VALUES (?, ?)', ('Milo', 'Springer Spaniel'))
    =====
    conn.commit()
    =====
    print('Dogs:')
    =====
    cur.execute('SELECT name, breed FROM Dogs')
    =====
    for row in cur:
      print(row)
    =====
    cur.close()

.. parsonsprob:: db-mixed5
    :practice: T
    :adaptive:
    :numbered: left

    Create a 'clothes.sqlite' database and select all of the rows in the table "Socks". Then, loop through the rows, print out each row and print out the total number of rows.
    Then, delete all green socks from the table. 
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('clothes.sqlite')
    =====
    cur = conn.cursor()
    =====
    cur.execute('SELECT * FROM Socks')
    =====
    cur.execute('SELECT all_rows FROM Socks') #paired
    =====
    count = 0
    =====
    for row in cur:
    =====
      print(row)
      count = count + 1
    =====
    print(f"The table 'Socks' has {count} rows")
    =====
    cur.execute('DELETE * FROM Socks WHERE color = "Green"')
    conn.commit()
    =====
    cur.close()

.. parsonsprob:: db-mixed6
    :practice: T
    :adaptive:
    :numbered: left

    Create a lunch database. Select row 'Size' in the table "Tacos" in descending order by 'Price', then get and print out the total number of rows.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('lunch.sqlite')
    =====
    conn = sql.connect('lunch.sqlite') #paired
    =====
    cur = conn.cursor()
    =====
    cur.execute('SELECT Size FROM Tacos ORDER BY Price DESC')
    =====
    cur.exectute('SELECT Tacos FROM Size ORDER BY DESC Price') #paired
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
    cur.close()
    

.. parsonsprob:: db-mixed7
    :practice: T
    :adaptive:
    :numbered: left

    Create a database "pets.sqlite". Join tables 'Dogs' and 'Cats', then select all rows on column 'name' for both tables, where the name is 'Spot'.
    At the end it will print the total count of rows, before closing the cursor.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('pets.sqlite')
    cur = conn.cursor()
    =====
    cur.execute('''SELECT * FROM Dogs JOIN Cats ON Dogs.name = Cats.name WHERE Dogs.name = "Spot"''')
    =====
    cur.execute('''SELECT * FROM Dogs, Cats ON Dogs.name == Cats.name WHERE Dogs.name = "Spot"''') #paired
    =====
    cur.close()

.. parsonsprob:: db-mixed8
    :practice: T
    :adaptive:
    :numbered: left

    Crreate a database "clothes.sqlite". Simply open the database and join tables pants and shirts 
    and select all pants and shirts with the same fabric, then print them.
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

.. parsonsprob:: db-mixed9
    :practice: T
    :adaptive:
    :numbered: left

    Create a database 'desserts.sqlite'. Simply open the database and select all of the Cupcakes and
    Cakes where the Cupcake icing and Cake frosting are chocolate. Then, print the rows.
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
    						ON icing.Cake = frosting.Cupcake
                WHERE icing.Cupcakes = "chocolate"''') #paired
    =====
    for row in cur:
    =====
      print(row)
    =====
    cur.close()