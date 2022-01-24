Mixed-Up Code Exercises
------------------------

.. parsonsprob:: Classes_Basic_Airport_pp
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``Airport`` with an ``__init__`` method that takes a ``name`` and ``code`` as strings and initializes these attributes in the current object.
    Then define the ``__str__`` method to return the ``name code``.  For example, ``print(a)`` when ``a = Airport("Detroit", "DTW")`` would print ``Detroit DTW``.
    -----
    class Airport:
    =====
    def Airport: #paired
    =====
      def __init__(self, name, code):
    =====
      def __init__(name, code): #paired
    =====
        self.name = name
        self.code = code
    =====
      def __str__(self):
    =====
      def str(self): #paired
    =====
        return self.name + " " + self.code
    =====
        return name + " " + code #paired

.. activecode:: Classes_Basic_Airport_ac
   :autograde: unittest

   Write a class ``Airport`` with an ``__init__`` method that takes a ``name`` and ``code`` as strings and initializes these attributes in the current object.
   Then define the ``__str__`` method to return the ``name code``.  For example, ``print(a)`` when ``a = Airport("Detroit", "DTW")`` would print ``Detroit DTW``.
   ~~~~

   a = Airport("Detroit", "DTW")
   print(a)

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           a = Airport("Detroit", "DTW")
           self.assertEqual(a.__str__(), "Detroit DTW", "testing __str__ for Detroit")
           a = Airport("Atlanta", "ATL")
           self.assertEqual(a.__str__(), "Atlanta ATL", "testing __str__ for Atlanta")

   myTests().main()


.. parsonsprob:: Classes_Basic_Song_pp
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``Song`` with an ``__init__`` method that takes a ``title`` as a string and ``len`` as a number and initializes these attributes in the current object.
    Then define the ``__str__`` method to return the ``title, len``.  For example, ``print(s)`` when ``s = Song('Respect',150)`` would print "Respect, 150".
    -----
    class Song:
    =====
    Class Song: #paired
    =====
      def __init__(self, title, len):
    =====
      def __init__(title, len): #paired
    =====
        self.title = title
        self.len = len
    =====
      def __str__(self):
    =====
      def __str__(): #paired
    =====
        return self.title + ", " + str(self.len)
    =====
        return title + ", " + len #paired


.. activecode:: Classes_Basic_Song_ac
   :autograde: unittest

   Write a class ``Song`` with an ``__init__`` method that takes a ``title`` as a string and ``len`` as a number and initializes these attributes in the current object.
   Then define the ``__str__`` method to return the ``title, len``.  For example, ``print(s)`` when ``s = Song('Respect',150)`` would print "Respect, 150".
   ~~~~

   s = Song('Respect',150)
   print(s)

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           s = Song('Respect',150)
           self.assertEqual(s.__str__(), "Respect, 150", "testing __str__ with Respect")
           s = Song('Truth Hurts',183)
           self.assertEqual(s.__str__(), "Truth Hurts, 183", "testing __str__ with Truth Hurts")

   myTests().main()


.. parsonsprob:: Classes_Basic_Cat_pp
    :numbered: left
    :practice: T
    :adaptive:

    Create a class Cat with an ``__init__`` method that takes
    ``name`` as a string and ``age`` as a number and initializes these attributes in the current object.  Next create the ``__str__`` method that returns
    "name: name age: age".  For example if ``c = Cat("Fluffy", 3)`` then
    ``print(c)`` should print ``"name: Fluffy age: 3"``.
    Then define the ``make_sound`` method to return ``"Meow"``.
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
        return f"name: {self.name}, age: {self.age}"
    =====
        return f"name: {name}, age: {age}" #paired
    =====
      def make_sound(self):
    =====
      def make_sound(): #paired
    =====
        return "Meow"
    =====
        return self."Meow" #paired

.. activecode:: Classes_Basic_Cat_ac
   :autograde: unittest

   Write a class Cat with an ``__init__`` method that takes
   ``name`` as a string and ``age`` as a number and initializes these attributes in the current object.  Next create the ``__str__`` method that returns
   "name: name, age: age".  For example if ``c = Cat("Fluffy", 3)`` then
   ``print(c)`` should print ``"name: Fluffy, age: 3"``.
   Then define the ``make_sound`` method to return ``"Meow"``.
   ~~~~

   c = Cat("Fluffy", 3)
   print(c)
   print(c.make_sound())

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           c = Cat("Fluffy", 3)
           self.assertEqual(c.__str__(), "name: Fluffy, age: 3", "testing __str__ on Fluffy")
           self.assertEqual(c.make_sound(), "Meow", "testing make_sound with Fluffy")
           d = Cat("Spike", 2)
           self.assertEqual(d.__str__(), "name: Spike, age: 2", "testing __str__ on Spike")
           self.assertEqual(d.make_sound(), "Meow", "testing make_sound with Spike")

   myTests().main()


.. parsonsprob:: Classes_Basic_Account_pp
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``Account`` with an ``__init__`` method that takes ``id`` and ``balance`` as numbers. Then create a ``__str__`` method that returns "id, balance". Next create a ``deposit`` method takes ``amount`` as a number and adds that to the ``balance``.  For example,
    if ``a = Account(32, 100)`` and ``a.deposit(50)`` is executed, ``print(a)`` should print "32, 150".
    -----
    =====
    class Account:
    =====
        def __init__(self, id, balance):
    =====
        def __init__(self, id, balance) #paired
    =====
            self.id = id
            self.balance = balance
    =====
        def __str__(self):
    =====
            return f"{self.id}, {self.balance}"
    =====
            return f"{id}, {balance}" #paired
    =====
        def deposit(self, amount):
    =====
            self.balance += amount
    =====
            self.balance += self.amount #paired

.. activecode:: Classes_Basic_Account_ac
   :autograde: unittest

   Create a class ``Account`` with an ``__init__`` method that takes ``id`` and ``balance`` as numbers. Then create a ``__str__`` method that returns "id, balance". Next create a ``deposit`` method takes ``amount`` as a number and adds that to the ``balance``.  For example,
   if ``a = Account(32, 100)`` and ``a.deposit(50)`` is executed, ``print(a)`` should print "32, 150".
   ~~~~

   a = Account(32, 100)
   a.deposit(50)
   print(a)

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           a = Account(32, 100)
           self.assertEqual(a.__str__(), "32, 100", "testing __str__ on a")
           a.deposit(50)
           self.assertEqual(a.__str__(), "32, 150", "testing __str__ on a after deposit")
           b = Account(2, 225.50)
           self.assertEqual(b.__str__(), "2, 225.5", "testing __str__ on b")
           b.deposit(50.25)
           self.assertEqual(b.__str__(), "2, 275.75", "testing __str__ on b after deposit")

   myTests().main()

.. parsonsprob:: Classes_Basic_FortuneTeller_pp
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``FortuneTeller`` with an ``__init__`` method that takes a list of fortunes as strings and saves that as an attribute.  Then create a ``tell_fortune`` method that returns one of the fortunes in the list at random.
    -----
    import random
    =====
    class FortuneTeller:
    =====
        def __init__(self, fortunes):
    =====
            self.fortunes = fortunes
    =====
        def tell_fortune(self):
    =====
        def tell_fortune(): #paired
    =====
            last = len(self.fortunes) - 1
    =====
            last = len(self.fortunes) #paired
    =====
            index = random.randint(0, last)
    =====
            return self.fortunes[index]
    =====
            return fortunes[index] #paired

.. activecode:: Classes_Basic_FortuneTeller_ac
   :autograde: unittest

   Write a class ``FortuneTeller`` with an ``__init__`` method that takes a list of fortunes as strings and saves that as an attribute.  Then create a ``tell_fortune`` method that returns one of the fortunes in the list at random.
   ~~~~

   f = FortuneTeller(["You will get an A", "You will have a great day", "You will fall", "You will laugh"])
   for i in range(5):
        print(f.tell_fortune())

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           l = ["You will get an A", "You will have a great day", "You will fall", "You will laugh"]
           f = FortuneTeller(l)
           for i in range(5):
               s = f.tell_fortune()
               self.assertIn(s, l, "checking that the fortune in is the list")

   myTests().main()
