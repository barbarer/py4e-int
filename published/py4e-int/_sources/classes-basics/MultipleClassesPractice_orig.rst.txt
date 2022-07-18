

.. index:: class; multiple


Multiple Classes Practice
=============================

.. activecode:: mult_class_track_and_album_len_ac
   :autograde: unittest

   Given a ``Song`` class that has object attributes of ``name`` and ``length`` as shown below, finish a ``Album`` class with an ``__init__`` method that takes a name and list of ``Song`` objects.  Then write a ``length`` method in the ``Album`` class that returns the total length for the album based on the length of the songs in the album.  Given the objects created below it should print 242.
   ~~~~
   class Song:

       def __init__(self, name, length):
           self.name = name
           self.length = length

       def __str__(self):
           return f"{self.name}: {self.length}"

   class Album:

   s1 = Song("Something", 120)
   s2 = Song("Here Comes the Sun", 122)
   a1 = Album("Abbey Road", [s1, s2])
   print(a1.length())

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           s1 = Song("Something", 120)
           s2 = Song("Here Comes the Sun", 122)
           a1 = Album("Abbey Road", [s1, s2])
           self.assertEqual(a1.length(), 242)

   myTests().main()


.. parsonsprob:: mult_class_track_and_album_len_pp
  :numbered: left
  :practice: T
  :adaptive:

  Given a ``Song`` class that has object attributes of ``name`` and ``length``, create an ``Album`` class with an ``__init__`` method that takes a name and list of ``Song`` objects.  Then create a ``length`` method in the ``Album`` class that returns the total length for the album based on the length of the songs in the album.
  -----
  class Album
  =====
       def __init__(self, name, songs):
  =====
           self.name = name
           self.songs = songs
  =====
       def length(self):
  =====
       def length(): #paired
  =====
           total = 0
  =====
           for song in self.songs:
  =====
           for song in songs: #paired
  =====
               total += song.length
  =====
               total += song #paired
  =====
           return total

.. activecode:: mult_class_point_and_line_practice_ac
   :autograde: unittest

   Given a ``Point`` class below with a ``distance`` object method that takes another point and returns the distance between the two points, create a ``Line`` class with an ``__init__`` method that takes two points.  Also write the ``length`` method in the ``Line`` class to return the length of the line (hint: use the ``distance`` method in the ``Point`` class).
   ~~~~
   import math
   class Point:

       def __init__(self, initX, initY):
           """ Create a new point at the given coordinates. """
           self.x = initX
           self.y = initY

       def __str__(self):
           return f"x = {self.x}, y = {self.y}"

       def distance(self, other):
           mx = (self.x - other.x) ** 2
           my = (self.y - other.y) ** 2
           return math.sqrt(mx + my)

   class Line:

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           point1 = Point(0,0)
           point2 = Point(10,5)
           point3 = Point(5,10)
           point4 = Point(20,10)
           l1 = Line(point1, point2)
           l2 = Line(point3, point4)

           self.assertAlmostEqual(l1.length(), 11.18, 2, "l1.length")
           self.assertAlmostEqual(l2.length(), 15.0, 1, "l2.length()")

   myTests().main()


.. parsonsprob:: mult_class_point_and_line_practice_pp
  :numbered: left
  :practice: T
  :adaptive:

  Given a ``Point`` class that has a ``distance`` object method that takes another point and returns the distance between the two points, create a ``Line`` class with an ``__init__`` method that takes two points.  Also write the ``length`` method in the ``Line`` class to return the length of the line (hint: use the ``distance`` method in the ``Point`` class).
  -----
  class Line:
  =====
      def __init__(self, p1, p2):
  =====
      def __init__(p1, p2): #paired
  =====
          self.p1 = p1
          self.p2 = p2
  =====
      def length(self):
  =====
      def length(): #paired
  =====
          return self.p1.distance(self.p2)
  =====
          return p1.distance(p2) #paired

.. activecode:: mult_class_point_and_triangle_practice_ac
   :autograde: unittest

   Given a ``Point`` class below with a ``distance`` object method that takes another point and returns the distance between the two points, create a ``Triangle`` class with an ``__init__`` method that takes three points.  Also write the ``perimeter`` method in the ``Triangle`` class to return the sum of the lengths of the sides of the triangle. Use the ``distance`` method in the ``Point`` class to calculate the distance between two points.
   ~~~~
   import math
   class Point:

       def __init__(self, initX, initY):
           """ Create a new point at the given coordinates. """
           self.x = initX
           self.y = initY

       def distanceFromOrigin(self):
           return ((self.x ** 2) + (self.y ** 2)) ** 0.5

       def __str__(self):
           return f"x = {self.x}, y = {self.y}"

       def halfway(self, target):
           mx = (self.x + target.x) / 2
           my = (self.y + target.y) / 2
           return Point(mx, my)

       def distance(self, other):
           mx = (self.x - other.x) ** 2
           my = (self.y - other.y) ** 2
           return math.sqrt(mx + my)

   class Triangle:

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           point1 = Point(0,0)
           point2 = Point(10,5)
           point3 = Point(5,10)
           point4 = Point(20,10)
           t1 = Triangle(point1, point2, point3)
           t2 = Triangle(point1, point4, point3)

           self.assertAlmostEqual(t1.perimeter(), 29.43, 2, "t1.perimeter()")
           self.assertAlmostEqual(t2.perimeter(), 48.54, 2, "t2.perimeter()")

   myTests().main()


.. parsonsprob:: mult_class_point_and_triangle_practice_pp
  :numbered: left
  :practice: T
  :adaptive:

  Given a ``Point`` class that has a ``distance`` object method that takes another point and returns the distance between the two points, create a ``Triangle`` class with an ``__init__`` method that takes three points.  Also write the ``perimeter`` method in the ``Triangle`` class to return the sum of the lengths of the sides of the triangle. Use the ``distance`` method in the ``Point`` class to calculate the distance between two points.
  -----
  class Triangle:
  =====
       def __init__(self, p1, p2, p3):
  =====
       def __init__(p1, p2, p3): #paired
  =====
           self.p1 = p1
           self.p2 = p2
           self.p3 = p3
  =====
       def perimeter(self):
  =====
       def perimeter(): #paired
  =====
           total = self.p1.distance(self.p2)
  =====
           total = distance(self.p1, self.p2) #paired
  =====
           total += self.p2.distance(self.p3)
           total += self.p3.distance(self.p1)
  =====
           total += distance(self.p2, self.p3) #paired
           total += distance(self.p3, self.p1)
  =====
           return total


.. activecode:: mult_class_item_order_line_order_practice_ac
   :autograde: unittest

   Given the ``Item`` and ``OrderLine`` classes shown below, write an ``Order`` class with an ``__init__`` method that takes a list of ``OrderLine`` objects and a ``total`` method that returns the total for the order.
   ~~~~
   class Item:

       def __init__(self, name, price):
           self.name = name
           self.price = price

       def __str__(self):
           return f"{self.name}: {self.price}"

   class OrderLine:

       def __init__(self, item, quantity):
           self.item = item
           self.quantity = quantity

       def total(self):
           return self.item.price * self.quantity

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           i1 = Item("Burger", 6.99)
           i2 = Item("Fries", 2.99)
           i3 = Item("Coke", 1.99)
           ol1 = OrderLine(i1,2)
           ol2 = OrderLine(i2,3)
           ol3 = OrderLine(i3,1)
           o1 = Order([ol1, ol2, ol3])
           self.assertAlmostEqual(o1.total(), 24.94, 2, "o1.total()")


   myTests().main()


.. parsonsprob:: mult_class_item_order_line_order_practice_pp
  :numbered: left
  :practice: T
  :adaptive:

  Given an ``Item`` class with object attributes of ``name`` and ``price`` and an ``OrderLine`` class with an object method ``total`` that returns the total for the ``OrderLine`` object (the item's price times the quantity), create an ``Order`` class with an ``__init__`` method that takes a list of ``OrderLine`` objects and a ``total`` method that returns the total for the order.
  -----
  class Order:
  =====
       def __init__(self, orderLines):
  =====
           self.orderLines = orderLines
  =====
           orderLines = self.orderLines #paired
  =====
       def total(self):
  =====
       def total(): #paired
  =====
           sum = 0
  =====
           for orderLine in self.orderLines:
  =====
           for self.orderLine in self.orderLines: #paired
  =====
               sum += orderLine.total()
  =====
               sum += orderLine.total #paired
  =====
           return sum

.. activecode:: mult_class_card_and_deck_practice_ac
   :autograde: unittest

   Write a ``shuffle`` method in the ``Deck`` class that splits the list of cards in half and creates a new list of cards with a card from the first list followed by a card from the second list.  For example, if the list of cards was {a, b, c, d, e, f} it would reset the list to {a, d, b, e, c, f}.  If the list of cards was {a, b, c, d, e} it would reset the list to {a, c, b, d, e}.
   ~~~~
   class Card:

       suit_names = ["Clubs", "Diamonds", "Hearts", "Spades"]
       rank_names = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9",  "10", "Jack", "Queen", "King"]

       def __init__(self, suit=0, rank = 0):
           self.suit = suit
           self.rank = rank

       def __str__(self):
           return Card.rank_names[self.rank] + " of " + Card.suit_names[self.suit]

   class Deck:

       def __init__(self):
           self.card_list = []
           for i in range(len(Card.suit_names)):
               for j in range(len(Card.rank_names)):
                   self.card_list.append(Card(i, j))

       def __str__(self):
           output = ""
           for card in self.card_list:
               output += card.__str__() + ", "
           return output

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           d = Deck()
           d.shuffle()
           self.assertEqual(d.card_list[0].__str__(), "Ace of Clubs","testing d.card_list[0]")
           self.assertEqual(d.card_list[1].__str__(), "Ace of Hearts","testing d.card_list[1]")
           self.assertEqual(d.card_list[2].__str__(), "2 of Clubs","testing d.card_list[2]")
           self.assertEqual(d.card_list[3].__str__(), "2 of Hearts","testing d.card_list[3]")
           self.assertEqual(len(d.card_list), 52, "testing number of cards")
           d = Deck()
           d.card_list = d.card_list[0:5]
           d.shuffle()
           self.assertEqual(d.card_list[0].__str__(), "Ace of Clubs","testing d.card_list[0]")
           self.assertEqual(d.card_list[1].__str__(), "3 of Clubs","testing d.card_list[1]")
           self.assertEqual(d.card_list[2].__str__(), "2 of Clubs","testing d.card_list[2]")
           self.assertEqual(d.card_list[3].__str__(), "4 of Clubs","testing d.card_list[3]")
           self.assertEqual(d.card_list[4].__str__(), "5 of Clubs","testing d.card_list[4]")
           self.assertEqual(len(d.card_list), 5, "testing number of cards")


   myTests().main()

.. parsonsprob:: mult_class_card_and_deck_practice_pp
  :numbered: left
  :practice: T
  :adaptive:

  Create a ``shuffle`` method for the ``Deck`` class that splits the list of cards in half and creates a new list of cards with a card from the first list followed by a card from the second list.  For example, if the list of cards was {a, b, c, d, e, f} it would reset the list to {a, d, b, e, c, f}.  If the list of cards was {a, b, c, d, e} it would reset the list to {a, c, b, d, e}.
  -----
  def shuffle(self):
  =====
  def shuffle(): #paired
  =====
        mid = len(self.card_list) // 2
  =====
        mid = len(self.card_list) / 2 #paired
  =====
        l1 = self.card_list[:mid]
        l2 = self.card_list[mid:]
        l3 = []
  =====
        for i in range(len(l1)):
  =====
        for i in range(l1): #paired
  =====
            l3.append(l1[i])
  =====
            l3.append(l2[i])
  =====
        if len(l2) > len(l1):
  =====
        if len(l1) > len(l2): #paired
  =====
            l3.append(l2[-1])
  =====
        self.card_list = l3
  =====
        self.card_list = self.l3 #paired
