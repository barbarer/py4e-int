Parsons Practice Problems
-----------------------------------------------------

Please answer
the following problems to the best of your ability without any
outside help. You can stop working on a problem after you worked
on it for about five minutes without solving it.

Problems
==============

.. parsonsprob:: class-tog-Classes_Basic_Song_pp
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

.. parsonsprob:: class-tog-Classes_Basic_Cat_pp
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


.. parsonsprob:: class-tog-Classes_Basic_Account_pp
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

.. parsonsprob:: class-tog-Classes_Basic_FortuneTeller_pp
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
