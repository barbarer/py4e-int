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
