Mixed-Up Code Exercises
------------------------

.. parsonsprob:: obj_mixedupcode_1
    :numbered: left
    :practice: T
    :adaptive:

    Create a ``Dog`` class and define the ``__init__`` method
    that has one parameter, ``name``. Then define the ``getName`` method, which returns the
    ``name`` when the method is called.
    -----
    class Dog:
    =====
    class Dog #paired
    =====
        def __init__(self, name):
    =====
        def __init__(name): #paired
    =====
            self.name = name
    =====
            name = self.name #paired
    =====
        def getName(self):
    =====
            return self.name
    =====
            return name #paired


.. activecode:: obj_mixedupcode_1_ac
    :autograde: unittest

    Write a ``Dog`` class and define the ``__init__`` method that has one parameter, ``name``. Then define the
    ``getName`` method, which returns the ``name`` when the method is called.
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Bill = Dog("Bill")
            self.Dot = Dog("Dot")
            self.Spot = Dog("Spot")
            self.Lovey = Dog("Lovey")
            self.Brownie = Dog("Brownie")

        def testOne(self):
            self.assertEqual(self.Bill.getName(), "Bill" ,"self.Bill.getName()")
            self.assertEqual(self.Dot.getName(), "Dot" ,"self.Dot.getName()")
            self.assertEqual(self.Spot.getName(), "Spot" ,"self.Spot.getName()")
            self.assertEqual(self.Lovey.getName(), "Lovey" ,"self.Lovey.getName()")
            self.assertEqual(self.Brownie.getName(), "Brownie" ,"self.Brownie.getName()")

    myTests().main()

.. parsonsprob:: obj_mixedupcode_2_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a class named ``Dog``. Define the ``__init__`` method with two parameters, ``name`` and ``age``.
    Also create the method ``updateAge``, that increases the ``age`` by 1 and returns ``age``.
    -----
    class Dog:
    =====
    class Dog #paired
    =====
        def __init__(self, name, age):
    =====
        def __init__(name, age): #paired
    =====
            self.name = name
            self.age = age
    =====
            name = self.name #paired
            age = self.age
    =====
        def updateAge(self):
    =====
        def updateAge(age): #paired
    =====
            self.age += 1
    =====
            return self.age



.. activecode:: obj_mixedupcode_2_v2_ac
    :autograde: unittest

    Write a class named ``Dog``. Define the ``__init__`` method with two parameters, ``name`` and ``age``.
    Also create the method ``updateAge``, that increases the ``age`` by 1 and returns ``age``.
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Lark = Dog("Lark", 10)
            self.Bill = Dog("Bill", 10)
            self.Tom = Dog("Tom", 22)
            self.James = Dog("James", 18)
            self.Terry = Dog("Terry", 29)
            self.Tina = Dog("Tina", 17)

        def testOne(self):
            self.assertEqual(self.Lark.updateAge(), 11 ,"self.Lark.updateAge()")
            self.assertEqual(self.Bill.updateAge(), 11 ,"self.Bill.updateAge()")
            self.assertEqual(self.Tom.updateAge(), 23 ,"self.Tom.updateAge()")
            self.assertEqual(self.James.updateAge(), 19 ,"self.James.updateAge()")
            self.assertEqual(self.Terry.updateAge(), 30 ,"self.Terry.updateAge()")
            self.assertEqual(self.Tina.updateAge(), 18 ,"self.Tina.updateAge()")

    myTests().main()


.. parsonsprob:: obj_mixedupcode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create the class ``Cat``. Define the ``__init__`` method, it has two parameters,
    ``name`` and ``age``. Next define the the ``__str__`` method to return a string with the cat's information:
    ``"Name: name, Age: age"``. Then define the ``make_sound`` method, which should return
    the string ``"Meow"``.
    -----
    class Cat:
    =====
        def __init__(self, name, age):
    =====
            self.name = name
            self.age = age
    =====
        def __str__(self):
    =====
            return f"Name: {self.name}, Age: {self.age}"
    =====
        def make_sound(self):
    =====
        def make_sound(sound): #paired
    =====
            return "Meow"

.. activecode:: obj_mixedupcode_3_ac
    :autograde: unittest

    Write the class ``Cat``. Define the ``__init__`` method, it has two parameters,
    ``name`` and ``age``. Next define the the ``__str__`` method to return a string with the cat's information:
    ``"Name: name, Age: age"``. Then define the ``make_sound`` method, which should return
    the string ``"Meow"``.

    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Lucky = Cat("Lucky", 10)
            self.Jack = Cat("Jack", 10)
            self.Chip = Cat("Chip", 22)
            self.Tink = Cat("Tink", 18)
            self.Pinky = Cat("Pinky", 29)


        def testOne(self):
            self.assertEqual(self.Lucky.__str__(), "Name: Lucky, Age: 10" ,"self.Lucky.__str__()")
            self.assertEqual(self.Lucky.make_sound(), "Meow", 'self.Lucky.make_sound()')
            self.assertEqual(self.Jack.__str__(), "Name: Jack, Age: 10" ,"self.Jack.__str__()")
            self.assertEqual(self.Jack.make_sound(), "Meow", 'self.Jack.make_sound()')
            self.assertEqual(self.Chip.__str__(), "Name: Chip, Age: 22" ,"self.Chip.__str__()")
            self.assertEqual(self.Tink.__str__(), "Name: Tink, Age: 18" ,"self.Tink.__str__()")
            self.assertEqual(self.Pinky.__str__(), "Name: Pinky, Age: 29" ,"self.Pinky.__str__()")
    myTests().main()


.. parsonsprob:: obj_mixedupcode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a class named ``Book`` that has an ``__init__`` method with the parameters ``title``
    and ``author``.  Then create a ``__str__`` method that returns ``"Title: title, Author: author"``.
    -----
    class Book:
    =====
    Class Book: #paired
    =====
        def __init__(self, title, author):
    =====
            self.title = title
            self.author = author
    =====
            title = self.title #paired
            author = self.author
    =====
        def __str__(self):
    =====
            a = self.author
            t = self.title
            return f"Title: {t}, Author: {a}"



.. activecode:: obj_mixedupcode_4_ac
    :autograde: unittest

    Write a class named ``Book`` that has an ``__init__`` method with two parameters, title
    and author.  Then create a ``__str__`` method that returns ``"Title: title, Author: author"``.
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.newbook = Book("The Odyssey", "Homer")
            self.newbook2 = Book("The Fault in Our Stars", "John Green")


        def testOne(self):
            self.assertEqual(self.newbook.title, "The Odyssey", "Testing title")
            self.assertEqual(self.newbook.author, "Homer", "Testing author")
            self.assertEqual(self.newbook2.title, "The Fault in Our Stars", "Testing title")
            self.assertEqual(self.newbook2.author, "John Green", "Testing author")
            self.assertEqual(self.newbook.__str__(), "Title: The Odyssey, Author: Homer", "Testing the __str__ method")

    myTests().main()

.. parsonsprob:: obj_mixedupcode_5_v3
    :numbered: left
    :practice: T
    :adaptive:

    Create a class named ``Dog`` with the ``__init__`` method taking ``name`` as its parameter
    and setting ``self.tricks`` to an empty list.  Then create a ``__str__`` method that returns a string
    with ``"Name: name"``.  Then create a method, ``updateTricks``, that adds
    a new trick to the list.
    -----
    class Dog:
    =====
        def __init__(self, name):
    =====
        def __init__(name): #paired
    =====
            self.name = name
            self.tricks = []
    =====
            this.name = name #paired
            this.tricks = []
    =====
        def __str__(self):
    =====
            return f'Name: {self.name}'
    =====
        def updateTricks(self, trick):
    =====
            self.tricks.append(trick)
    =====
            self.tricks.append(self.trick) #paired

.. activecode:: obj_mixedupcode_5_v3_ac
    :autograde: unittest

    Write a class named ``Dog`` with the ``__init__`` method taking ``name`` as its parameter
    and setting ``self.tricks`` to an empty list.   Then create a ``__str__`` method that returns a string
    with ``"Name: name"``. Then create a method, ``updateTricks``, that adds
    a new trick to the list.
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Spot = Dog("Spot")
            self.Jack = Dog("Jack")
            self.Chip = Dog("Chip")
            self.Tink = Dog("Tink")
            self.Pinky = Dog("Pinky")


        def testOne(self):
            self.assertEqual(self.Spot.__str__(), "Name: Spot" ,"self.Spot.__str__()")
            self.Spot.updateTricks("jump")
            self.assertEqual(self.Spot.tricks, ['jump'], "Testing self.Spot.tricks after add 'jump'")
            self.Spot.updateTricks("sit")
            self.assertEqual(self.Spot.tricks, ['jump', 'sit'], "Testing self.Spot.trick after add 'sit'")

    myTests().main()


.. parsonsprob:: obj_mixedupcode_6
    :numbered: left
    :practice: T
    :adaptive:

    Create a class named ``Square`` with the ``__init__`` method taking the length, ``len``, with a default of ``10`` if it is not specified.  Then create a ``__str__`` method that returns a string
    with ``"Length: length"``.  Then create an ``area`` method that returns the area (``length`` times ``length``).
    -----
    class Square:
    =====
    def Square: #paired
    =====
        def __init__(self, len = 10):
    =====
        def __init__(len = 10): #paired
    =====
            self.len = len
    =====
        def __str__(self):
    =====
            return f'Length: {self.len}'
    =====
            return f'Length: {len}' #paired
    =====
        def area(self):
    =====
        def __area__(self): #paired
    =====
            return self.len * self.len
    =====
            return len * len #paired

.. activecode:: obj_mixedupcode_6_ac
    :autograde: unittest

    Write a class named ``Square`` with the ``__init__`` method taking the length, ``len``, with a default of ``10`` if it is not specified.  Then create a ``__str__`` method that returns a string
    with ``"Length: length"``.  Then create an ``area`` method that returns the area (``length`` times ``length``).
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):


        def testOne(self):
            s1 = Square()
            self.assertEqual(s1.len, 10, "Testing the default length")
            self.assertEqual(s1.area(), 100, "Testing s1.area() with length 10")
            s2 = Square(5)
            self.assertEqual(s2.area(), 25, "Testing s2.area() with length 5")
            s3 = Square(8)
            self.assertEqual(s3.area(), 64, "Testing s3.area() with length 8")
            self.assertEqual(s1.__str__(), "Length: 10", "Testing s1 __str__ method")

    myTests().main()

.. parsonsprob:: obj_mixedupcode_7_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a class named ``Rectangle`` with the ``__init__`` method taking a ``length``, and ``width``.  Then create a ``__str__`` method that returns a string
    with ``"l: length, w: width"``.  Then create an ``area`` method that returns the area (``length`` times ``width``).
    -----
    class Rectangle:
    =====
    Class Rectangle: #paired
    =====
        def __init__(self, length, width):
    =====
        def __init__(Length, width): #paired
    =====
            self.length = length
            self.width = width
    =====
        def __str__(self):
    =====
            return f'l: {self.length}, w: {self.width}'
    =====
            return f'l: {len}, w: {width}' #paired
    =====
        def area(self):
    =====
        def __area__(self): #paired
    =====
            return self.length * self.width
    =====
            return length * width #paired

.. activecode:: obj_mixedupcode_7_v2_ac
    :autograde: unittest

    Create a class named ``Rectangle`` with the ``__init__`` method taking a ``length``, and ``width``.  Then create a ``__str__`` method that returns a string
    with ``"l: length, w: width"``.  Then create an ``area`` method that returns the area (``length`` times ``width``).
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):


        def testOne(self):
            r1 = Rectangle(10,5)
            self.assertEqual(r1.length, 10, "Testing that length is 10")
            self.assertEqual(r1.width, 5, "Testing that width is 5")
            self.assertEqual(r1.area(), 50, "Testing area with a length of 10 and width of 5")
            self.assertEqual(r1.__str__(), "l: 10, w: 5", "Testing __str__")
            r1 = Rectangle(2,3)
            self.assertEqual(r1.length, 2, "Testing that length is 2")
            self.assertEqual(r1.width, 3, "Testing that width is 3")
            self.assertEqual(r1.area(), 6, "Testing area with a length of 2 and width of 3")
            self.assertEqual(r1.__str__(), "l: 2, w: 3", "Testing __str__")


    myTests().main()

.. parsonsprob:: obj_mixedupcode_8
    :numbered: left
    :practice: T
    :adaptive:

    Given a class ``Point`` with a method ``distance_from_point(point)``, create a class named ``Triangle`` with the ``__init__`` method taking three ``Point`` objects and creating an attribute ``points``.
    Then create an ``base`` method that returns length of the longest side.
    The length of a side is the distance between two points.  For example, ``t = Triangle(Point(0,0), Point(1,0), Point(0,2))`` would return ``2.23`` from ``base``.
    -----
    class Triangle:
    =====
        def __init__(self, p1, p2, p3):
    =====
            self.points = [p1, p2, p3]
    =====
        def base(self):
    =====
            dist = []
    =====
            for i in range(len(self.points)):
    =====
            for i in range(len(points)): #paired
    =====
                curr = self.points[i]
    =====
                prev = self.points[i-1]
    =====
                d = curr.distance_from_point(prev)
    =====
                dist.append(d)
    =====
                self.dist.append(d) #paired
    =====
            return max(dist)

.. activecode:: obj_mixedupcode_8_ac
    :autograde: unittest

    Given a class ``Point`` with a method ``distance_from_point(point)``, write a class named ``Triangle`` with the ``__init__`` method taking three ``Point`` objects and creating an attribute ``points``.
    Then create an ``base`` method that returns length of the longest side.
    The length of a side is the distance between two points.  For example, ``t = Triangle(Point(0,0), Point(1,0), Point(0,2))`` would return ``2.23`` from ``base``.
    ~~~~

    ====

    import math
    from unittest.gui import TestCaseGui

    class Point:
        def __init__(self, x, y):
            self.x = x
            self.y = y

        def __str__(self):
            return f"({self.y}, {self.y})"

        def distance_from_point(self, p):
            return math.sqrt((p.x - self.x) ** 2 + (p.y - self.y) ** 2)

    class myTests(TestCaseGui):

        def testOne(self):
            t1 = Triangle(Point(0,0), Point(1,0), Point(0,2))
            self.assertAlmostEqual(t1.base(), 2.23, 1, "Testing base of 2.2")
            t1 = Triangle(Point(0,0), Point(1,0), Point(0,3))
            self.assertAlmostEqual(t1.base(), 3.16, 1, "Testing base of 3.1")
            t1 = Triangle(Point(-3,-3), Point(0,0), Point(0,3))
            self.assertAlmostEqual(t1.base(), 6.70, 1, "Testing base of 6.7")
    myTests().main()


.. parsonsprob:: obj_mixedupcode_9
    :numbered: left
    :practice: T
    :adaptive:

    Create a class named ``PickItem`` with the ``__init__`` method taking a list of items.
    Then create an ``pick`` method that returns one of the items at random.  You can use the ``random`` module's ``choice`` method for this.  Next create ``add(item)`` that adds the item to the list of items.
    -----
    import random
    class PickItem:
    =====
        def __init__(self, item_list):
    =====
        def __init__(item_list): #paired
    =====
            self.item_list = item_list
    =====
        def pick(self):
    =====
            return random.choice(self.item_list)
    =====
            return random.choice(item_list) #paired
    =====
        def add(self,item):
    =====
        def add(item): #paired
    =====
            self.item_list.append(item)
    =====
            self.item_list.append(self.item) #paired

.. activecode:: obj_mixedupcode_9_ac
    :autograde: unittest

    Create a class named ``PickItem`` with the ``__init__`` method taking a list of items.
    Then create an ``pick`` method that returns one of the items at random.  You can use the ``random`` module's ``choice`` method for this.  Next create ``add(item)`` that adds the item to the list of items.
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            l = ['red', 'green', 'blue']
            p = PickItem(l)
            self.assertEqual(p.item_list, l, "Testing item list")
            self.assertIn(p.pick(), l, "Testing pick")
            p.add('yellow')
            self.assertIn('yellow', p.item_list, "Testing add yellow")
            l = [1, 2, 3]
            p = PickItem(l)
            self.assertEqual(p.item_list, l, "Testing item list")
            self.assertIn(p.pick(), l, "Testing pick")
            p.add(4)
            self.assertIn(4, p.item_list, "Testing add 4")

    myTests().main()

.. parsonsprob:: obj_mixedupcode_10
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``Dice`` with an ``__init__`` method that takes the number of sides, ``num_sides``.  Use a default of 6 if ``num_sides`` isn't passed in. Also set an attribute ``history`` to an empty list in the ``__init__`` method.
    Then create a ``__str__`` method that returns ``"Dice with num_sides sides"`` when ``num_sides`` is the number of sides.
    Next create an ``roll`` method that picks a random value from one to the number of sides, adds the value to the end of the ``history`` list, and returns it.
    You can use the ``random`` module's ``randint(start,end)`` method to return a random number from start to end inclusvie.
    -----
    import random
    =====
    class Dice:
    =====
        def __init__(self, num_sides = 6):
    =====
        def __init__(self, num_sides): #paired
    =====
            self.num_sides = num_sides
            self.history = []
    =====
        def __str__(self):
    =====
            return f"Dice with {self.num_sides} sides"
    =====
        def roll(self):
    =====
            value = random.randint(1, self.num_sides)
            self.history.append(value)
    =====
            return value

.. activecode:: obj_mixedupcode_10_ac
    :autograde: unittest

    Write a class ``Dice`` with an ``__init__`` method that takes the number of sides, ``num_sides``.  Use a default of 6 if ``num_sides`` isn't passed in. Also set an attribute ``history`` to an empty list in the ``__init__`` method.
    Then create a ``__str__`` method that returns ``"Dice with num_sides sides"`` when ``num_sides`` is the number of sides.
    Next create an ``roll`` method that picks a random value from one to the number of sides, adds the value to the end of the ``history`` list, and returns it.
    You can use the ``random`` module's ``randint(start,end)`` method to return a random number from start to end inclusvie.
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            d = Dice(4)
            values = [1, 2, 3, 4]
            self.assertIn(d.roll(), values, "Testing roll value with 4 sides")
            x = d.roll()
            self.assertEqual(len(d.history), 2, "Testing history length")
            self.assertEqual(d.history[-1], x, "Testing save last roll")
            self.assertEqual(d.__str__(), "Dice with 4 sides", "Testing __str__ with 4 sides")
            d = Dice()
            values = [1, 2, 3, 4, 5, 6]
            self.assertIn(d.roll(), values, "Testing roll values with 6 sides")
            self.assertEqual(d.__str__(), "Dice with 6 sides", "Testing __str__ with 6 sides")

    myTests().main()
