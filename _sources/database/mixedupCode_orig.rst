Mixed-Up Code Questions
------------------------
.. datafile:: chinook.db
	:image:
	:fromfile: chinook.db
	:hide:

.. datafile:: bikeshare.db
	:image:
	:fromfile: bikeshare.db
	:hide:

.. parsonsprob:: db-mixed-1
    :practice: T
    :numbered: left
    :adaptive:

    Create a database file 'music.db' and add a table ``Tracks`` with two columns.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('music.db')
    =====
    cur = conn.cursor()
    =====
    cur.execute('DROP TABLE IF EXISTS Tracks')
    =====
    cur.execute('CREATE TABLE Tracks (title TEXT, plays INTEGER)')
    =====
    conn.close()


.. activecode:: db-mixed1_ac
   :autograde: unittest
   :language: python3

   Write code to create a database file 'music.db' and add a table ``Tracks``` with two columns.
   ~~~~

   ====
   import unittest

   class myTests(unittest.TestCase):
       def testOne(self):
           import sqlite3
           conn = sqlite3.connect('music.db')
           cur = conn.cursor()
           cur.execute('SELECT * FROM Tracks LIMIT 0')
           field_names = [i[0] for i in cur.description]
           self.assertEqual(field_names[0], "Title", "test1")
           self.assertEqual(field_names, "Plays", "test2")

   unittest.main()

.. parsonsprob:: db-mixed-2
    :practice: T
    :numbered: left
    :adaptive:

    Create code to connect to the database file 'chinook.db' which contains a table ``albums`` with three columns ``AlbumID``, ``Title``` and ``ArtistID``. Insert 2 tracks into the table. The first track has an albumID of 348, title "Thunderstruck", and ArtistID of 300. The second track has an albumID 349, title "My Way" with 301 ArtistID.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('music.sqlite')
    =====
    cur = conn.cursor()
    =====
    cur.execute('INSERT INTO albums (AlbumID, Title, ArtistID) VALUES (?, ?, ?)', (348, 'Thunderstruck', 300))
    cur.execute('INSERT INTO albums (AlbumID, Title, ArtistID) VALUES (?, ?, ?)', (349, 'My Way', 301))
    =====
    cur.execute('INSERT IN albums (AlbumID, Title, ArtistID) VALUES (?, ?, ?)', (348, 'Thunderstruck', 300))
    cur.execute('INSERT IN albums (AlbumID, Title, ArtistID) VALUES (?, ?, ?)', (349, 'My Way', 301)) #paired
    =====
    conn.commit()
    =====
    cur.close()


.. activecode:: db-mixed2_ac
   :autograde: unittest
   :language: python3

   Write code to connect to the database file 'chinook.db' which contains a table ``albums`` with three columns ``AlbumID``, ``Title``` and ``ArtistID``. Insert 2 tracks into the table. The first track has an albumID of 348, title "Thunderstruck", and ArtistID of 300. The second track has an albumID 349, title "My Way" with 301 ArtistID.
   ~~~~
   ====
   import unittest

   class myTests(unittest.TestCase):
       def testOne(self):
           import sqlite3
           conn = sqlite3.connect('chinook.db')
           cur = conn.cursor()
           cur.execute('SELECT AlbumID, Title, ArtistID FROM albums WHERE ArtistID >= 300')
           self.assertEqual(cur[0], "Thunderstruck", "test1")
           self.assertEqual(cur[0], "Thunderstruck", "test2")

   unittest.main()

.. parsonsprob:: db-mixed-3
    :practice: T
    :adaptive:
    :numbered: left

    Create code to connect to a database file 'bikeshare.db'. Then selects all of the rows in the table ``bikeshare_stations``.
    Set the variable ``count_rows`` to the total number of rows returned from the query, before closing the cursor.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('bikeshare.db')
    =====
    cur = conn.cursor()
    =====
    cur.execute('SELECT * FROM bikeshare_stations')
    =====
    count_rows = cur.rowcount
    =====
    cur.close()


.. activecode:: db-mixed3_ac
   :autograde: unittest
   :language: python3

   Write code to connect to a database file 'bikeshare.db'. Then selects all of the rows in the table ``bikeshare_stations``.
   Set the variable ``count_rows`` to the total number of rows returned from the query, before closing the cursor.
   ~~~~
   ====
   import unittest

   class myTests(unittest.TestCase):
       def testOne(self):
           self.assertEqual(count_rows, 144, "test1")

   unittest.main()


.. parsonsprob:: db-mixed-4
    :practice: T
    :numbered: left
    :adaptive:

    Create a connection to the database 'pets.sqlite' and add a table ``Dogs`` with two columns, ``name`` and ``breed``. Insert 2 dogs into the table. The first dog is named Penelope and is a Doberman. The second dog is named Milo and is a Springer Spaniel. Commit the change, then select the name(s) of the dogs of breed Springer Spaniel.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('pets.sqlite')
    =====
    cur = sqlite3.cursor('pets.sqlite') #paired
    =====
    cur = conn.cursor()
    =====
    cur.execute('DROP TABLE IF EXISTS Dogs')
    =====
    cur.execute('CREATE TABLE Dogs (name TEXT, breed TEXT)')
    =====
    cur.execute('INSERT INTO Dogs (name, breed) VALUES (?, ?)', ('Penelope', 'Doberman'))
    cur.execute('INSERT INTO Dogs (name, breed) VALUES (?, ?)', ('Milo', 'Springer Spaniel'))
    =====
    conn.commit()
    =====
    cur.execute('SELECT name FROM Dogs WHERE breed = "Springer Spaniel"')
    =====
    cur.close()

.. activecode:: db-mixed4-ac
    :practice: T
    :nocodelens:
    :language: python3
    :autograde: unittest

    Write code to create a connection to the database 'pets.sqlite' and add a table ``Dogs`` with two columns, ``name`` and ``breed``. Insert 2 dogs into the table. The first dog is named Penelope and is a Doberman. The second dog is named Milo and is a Springer Spaniel. Commit the change, then select the name(s) of the dogs of breed Springer Spaniel.
    ~~~~

    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):
			import sqlite3
			conn = sqlite3.connect('pets.sqlite')
			cur = conn.cursor()
			cur.execute('SELECT name FROM Dogs WHERE breed = "Springer Spaniel"')
			name = cur.fetchall()[0]
			self.assertEqual(name, 'Milo', 'Testing that the SELECT statement extracted all dog names with breed Springer Spaniel')
			cur.execute('SELECT * from Dogs')
			rows = len(cur.fetchall())
			self.assertEqual(rows, 2, 'Checking the new data was correctly added to the database')

    unittest.main()


.. parsonsprob:: db-mixed-5
    :practice: T
    :adaptive:
    :numbered: left

    Create code to connect to a database file 'bikeshare.db'. Then only selects the rows in the table ``bikeshare_stations`` that have a ``status`` of closed.
    Set the variable ``count_rows`` to the total number of rows returned from the query, before closing the cursor.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('bikeshare.db')
    =====
    cur = conn.cursor()
    =====
    cur.execute('SELECT * FROM Socks WHERE status = "closed"')
    =====
    cur.execute('SELECT all_rows FROM Socks WHERE status = "closed"') #paired
    =====
    count_rows = cur.rowcount
    =====
    cur.close()


.. activecode:: db-mixed5_ac
   :autograde: unittest
   :language: python3

   Write code to connect to a database file 'bikeshare.db'. Then only selects the rows in the table ``bikeshare_stations``` that have a ``status`` of closed.
   Set the variable ``count_rows`` to the total number of rows returned from the query, before closing the cursor.
   ~~~~
   ====
   import unittest

   class myTests(unittest.TestCase):
       def testOne(self):
           self.assertEqual(count_rows, 6, "test1")

   unittest.main()


.. parsonsprob:: db-mixed-6
    :practice: T
    :adaptive:
    :numbered: left

    Create a connection to the 'chinook.db' database. Select rows ``LastName`` and ``FirstName``` in the table ``customers`` in alphabetical order by ``LastName``. Set the variable count_rows to the total number of rows returned from the query, before closing the cursor.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('chinook.db')
    =====
    conn = sql.connect('chinook.db') #paired
    =====
    cur = conn.cursor()
    =====
    cur.execute('SELECT LastName, FirstName FROM customers ORDER BY LastName ASC')
    =====
    cur.exectute('SELECT LastName, FirstName FROM customers ORDER BY LastName DESC') #paired
    =====
    count_rows = cur.rowcount
    =====
    cur.close()

.. activecode:: db-mixed6-ac
    :practice: T
    :nocodelens:
    :language: python3
    :autograde: unittest

    Write code to create a connection to the 'chinook.db' database. Select rows ``LastName`` and ``FirstName``` in the table ``customers`` in alphabetical order by ``LastName``. Set the variable count_rows to the total number of rows returned from the query, before closing the cursor.
    ~~~~

    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):
            self.assertEqual(count_rows, 59, 'Testing that all rows were selected from the query')
    unittest.main()


.. parsonsprob:: db-mixed-7
    :practice: T
    :adaptive:
    :numbered: left

    Create code to connect to a database file 'chinook.db'. Join tables ``albums`` and ``artists``. Then, select the artist ``Name`` where ``ArtistID``` is 90.
    Set the variable ``count_rows`` to the total number of rows returned from the query, before closing the cursor.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('chinook.db')
    cur = conn.cursor()
    =====
    cur.execute('''SELECT Name FROM albums JOIN artists ON albums.ArtistID = artists.ArtistID WHERE artists.ArtistID = 90''')
    =====
    cur.execute('''SELECT * FROM albums, artists ON albums.ArtistID = artists.ArtistID WHERE albums.ArtistID = 90''') #paired
    =====
    count_rows = cur.rowcount
    =====
    cur.close()


.. activecode:: db-mixed7_ac
   :autograde: unittest
   :language: python3

   Write code to connect to a database file 'chinook.db'. Join tables ``albums`` and ``artists``. Then, select the artist ``Name`` where ``ArtistID``` is 90.
   Set the variable ``count_rows`` to the total number of rows returned from the query, before closing the cursor.
   ~~~~
   ====
   import unittest

   class myTests(unittest.TestCase):
       def testOne(self):
           self.assertEqual(count_rows, 21, "test1")

   unittest.main()


.. parsonsprob:: db-mixed-8
    :practice: T
    :adaptive:
    :numbered: left

    Create a connection to the 'chinook.db' database. Then, join tables 'albums' and 'artists' on 'artistId'. Then, set the variables ``title`` and ``artist`` equal to the title name and artist name in row 185.
    -----
    import sqlite3
    conn = sqlite3.connect('chinook.db')
    cur = conn.cursor()
    =====
    cur.execute('SELECT * FROM albums JOIN artists ON albums.artistId = artists.artistId')
    =====
    cur.execute('SELECT * FROM albums JOIN artists ON artistId.albums = artistId.artists') #paired
    =====
    rows = cur.fetchall()
    =====
    title = rows[184][1]
    artist = rows[184][4]
    =====
    cur.close()

.. activecode:: db-mixed8-ac
    :practice: T
    :nocodelens:
    :language: python3
    :autograde: unittest

    Write code to connect to the 'chinook.db' database. Then, join tables 'albums' and 'artists' on 'artistId'. Then, set the variables ``title`` and ``artist`` equal to the title name and artist name in row 185.
    ~~~~

    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):
            self.assertEqual(title, 'Greatest Hits 1', 'Testing that row 185 has the correct title')
            self.assertEqual(artist, 'Queen', 'Testing that row 185 has the correct artist')

    unittest.main()


.. parsonsprob:: db-mixed-9
    :practice: T
    :adaptive:
    :numbered: left

    Create code to connect to a database file 'chinook.db'. Select the name of all rows of data where the genre Name is 'Pop' and MediaTypeID is 1. In order to do this, first join tables ``tracks`` and ``genres``.
    Set the variable ``count_rows`` to the total number of rows returned from the query, before closing the cursor.
    -----
    import sqlite3
    =====
    conn = sqlite3.connect('chinook.db')
    =====
    cur = conn.cursor()
    =====
    cur = cursor() #paired
    =====
    cur.execute('''SELECT Name FROM tracks JOIN genres ON tracks.GenreID = genres.GenreID WHERE genres.Name = "Pop" AND tracks.MediaTypeID = 1''')
    =====
    cur.execute('''SELECT * FROM tracks JOIN genres ON tracks.GenreID = genres.GenreID WHERE genres.Name = "Pop", tracks.MediaTypeID = 1''') #paired
    =====
    count_rows = cur.rowcount
    =====
    cur.close()


.. activecode:: db-mixed9_ac
   :autograde: unittest
   :language: python3

   Create code to connect to a database file 'chinook.db'. Select the name of all rows of data where the genre Name is 'Pop' and MediaTypeID is 1. In order to do this, first join tables ``tracks`` and ``genres``.
   Set the variable ``count_rows`` to the total number of rows returned from the query, before closing the cursor.
   ~~~~
   ====
   import unittest

   class myTests(unittest.TestCase):
       def testOne(self):
           self.assertEqual(count_rows, 14, "test1")

   unittest.main()
