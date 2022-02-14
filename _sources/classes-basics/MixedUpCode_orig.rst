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


.. parsonsprob:: Classes_Basic_Student_pp
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``Student`` with an ``__init__`` method that takes a student's name as a string and a list of exam scores as integers. Then create a ``__str__`` method that returns the "name: average exam score" rounded to the nearest integer. For example, ``print(s)`` when ``s = Student("Sarah", [91,92,97])`` would print ``Sarah: 93.0``.
    -----
    class Student:
    =====
      def __init__(self, name, scores):
    =====
      def init(self, name, scores): #paired
    =====
        self.name = name
        self.scores = scores
    =====
        name = self.name
        scores = self.scores #paired
    =====
      def __str__(self):
    =====
        total_scores  = sum(self.scores)
    =====
        total_scores = self.scores.sum() #paired
    =====
        average = round(total_scores / len(self.scores), 0)
    =====
        return f"{self.name}: {average}"


.. activecode:: Classes_Basic_Student_ac
   :autograde: unittest

   Write a class ``Student`` with an ``__init__`` method that takes a student's name as a string and a list of exam scores as integers. Then create a ``__str__`` method that returns the "name: average exam score" rounded to the nearest integer. For example, ``print(s)`` when ``s = Student("Sarah", [91,92,97])`` would print ``Sarah: 93.0``.
   ~~~~
   class Student:
        #write code here

   s = Student("Sarah", [91,92,97])
   print(s)

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           name = "James"
           scores = [92, 80, 76]
           s = Student(name, scores)
           self.assertEqual(s.__str__(), "James: 83.0", "Checking that the Student's average exam score is correct")

   myTests().main()

.. parsonsprob:: Classes_Basic_Encoder_pp
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``Encoder`` with an initializer method that takes in a sentence as a string. Then create a string method that returns "string: length of sentence". Lastly, create a consonants method that returns the sentence without vowels, all lowercase. For example, ``print(e)`` when ``e = Encoder("I love Python")`` would print ``I love Python: 13`` and ``print(e.consonants())`` would print `` lv pythn``.
    -----
    class Encoder:
    =====
    Class Encoder:  #paired
    =====
      def __init__(self, sentence):
    =====
        self.sentence = sentence
    =====
      def __str__(self):
    =====
        return f"{self.sentence}: {len(self.sentence)}"
    =====
        return self.sentence + ": " + len(self.sentence) #paired
    =====
      def consonants(self):
    =====
      def consonants(): #paired
    =====
        no_vowels = ""
    =====
        for char in self.sentence:
    =====
        for char in sentence: #paired
    =====
          char = char.lower()
    =====
          if char not in ["a", "e", "i", "o", "u"]:
    =====
            no_vowels += char
    =====
        return no_vowels

.. activecode:: Classes_Basic_Encoder_ac
   :autograde: unittest

   Write a class ``Encoder`` with an initializer method that takes in a sentence as a string. Then create a string method that returns "string: length of sentence". Lastly, create a consonants method that returns the sentence without vowels, all lowercase. For example, ``print(e)`` when ``e = Encoder("I love Python")`` would print ``I love Python: 13`` and ``print(e.consonants())`` would print `` lv pythn``.
   ~~~~
   class Encoder:
        #write code here

   e = Encoder("I love Python")
   print(e)
   print(e.consonants())

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           sentence1 = "Hello world!"
           c1 = Encoder(sentence1)
           sentence2 = "Abraham Lincoln was the 16th President of the United States."
           c2 = Encoder(sentence2)
           self.assertEqual(c1.consonants(), "hll wrld!", "Checking that all vowels have been removed from sentence and all chars converted to lowercase")
           self.assertEqual(c2.consonants(), "brhm lncln ws th 16th prsdnt f th ntd stts.", "Checking that all vowels have been removed from sentence and all chars converted to lowercase")

   myTests().main()

.. parsonsprob:: Classes_Basic_CharFrequency_pp
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``CharFrequency`` with an initializer method that takes in a sentence as a string. Then create a string method that returns "The most common character in the sentence is x." In the case of tiebreakers, return the character that comes last in alphabetical order.
    For example, ``print(c)`` when ``c = CharFreequency("I love Python")`` would print ``The most common character in the sentence is o.``
    -----
    class CharFrequency:
    =====
      def __init__(self, sentence):
    =====
        self.sentence = sentence
    =====
      def __str__(self):
    =====
        most_common = {}
    =====
        sentence = self.sentence.replace(" ", "")
    =====
        for char in sentence:
    =====
          most_common[char] = most_common.get(char, 0) + 1
    =====
        sorted_list = sorted(most_common.items(), key = lambda k: (k[1], k[0]), reverse = True)
    =====
        return "The most common character in the sentence is " + str(sorted_list[0][0]) + "."


.. activecode:: Classes_Basic_CharFrequency_ac
   :autograde: unittest

   Write a class ``CharFrequency`` with an initializer method that takes in a sentence as a string. Then create a string method that returns "The most common character in the sentence is x." In the case of tiebreakers, return the character that comes last in alphabetical order. For example, ``print(c)`` when ``c = CharFreequency("I love Python")`` would print ``The most common character in the sentence is o.``
   ~~~~
   class CharFrequency:
        #write code here


   c = CharFrequency("I love Python")
   print(c)

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           sentence1 = "My dog likes to play fetch."
           m1 = CharFrequency(sentence1)
           sentence2 = "5 times 5 equals 25."
           m2 = CharFrequency(sentence2)
           self.assertEqual(m1.__str__(), "The most common character in the sentence is y.", "Checking that the most common char is returned")
           self.assertEqual(m2.__str__(), "The most common character in the sentence is 5.", "Checking that the most common char is returned")

   myTests().main()

.. parsonsprob:: Classes_Basic_Loan_pp
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``Loan`` with an initializer method that takes in an integer loan_amt, a float interest_rate and integer years. Then create a string method that returns "Your loan is ''loan_amt'' for ''years'' years at an interest rate of ''interest_rate''." Create another method called total_payment that calculates the total amount of loan payment based on the interest rate and number of years. Use the formula (loan_amt * (1 + interest_rate/100) ^ years). Also round your total payment to two decimal places. We're assuming that you are paying on an annual basis. For example, ``print(l)`` when ``l = Loan(10000, 5, 10)`` would print ``Your loan is $10000 for 10 years at an interest rate of 5%.`` and ``print(l.total_payment())`` would print ``16288.95`` as a float.
    -----
    class Loan:
    =====
      def __init__(self, loan_amt, interest_rate, years):
    =====
        self.loan_amt = loan_amt
        self.interest_rate = interest_rate
        self.years = years
    =====
      def __str__(self):
    =====
        return f"Your loan is ${self.loan_amt} for {self.years} years at an interest rate of {self.interest_rate}%."
    =====
        return f"Your loan is $(self.loan_amt) for (self.years) years at an interest rate of (self.interest_rate)%." #paired
    =====
      def total_payment(self):
    =====
        total = self.loan_amt * (1 + self.interest_rate/100) ** self.years
    =====
        total = loan_amt * (1 + interest_rate/100) ** years  #paired
    =====
        return float('{:.2f}'.format(total))

.. activecode:: Classes_Basic_Loan_ac
   :autograde: unittest

   Write a class ``Loan`` with an initializer method that takes in an integer loan_amt, a float interest_rate and integer years. Then write a string method that returns "Your loan is ''loan_amt'' for ''years'' years at an interest rate of ''interest_rate''." Write another method called total_payment that calculates the total amount of loan payment based on the interest rate and number of years. Use the formula (loan_amt * (1 + interest_rate/100) ^ years). Also round your total payment to two decimal places. We're assuming that you are paying on an annual basis. For example, ``print(l)`` when ``l = Loan(10000, 5, 10)`` would print ``Your loan is $10000 for 10 years at an interest rate of 5%.`` and ``print(l.total_payment())`` would print ``16288.95`` as a float.
   ~~~~
   class Loan:
        #write code here

   l = Loan(10000, 5, 10)
   print(l)
   print(l.total_payment())

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           loan_amt = 10000
           interest_rate = 5
           years = 10
           l1 = Loan(10000, 5, 10)
           l2 = Loan(10000, 2.5, 15)
           self.assertEqual(l1.total_payment(), 16288.95, "Checking the total_payment method")
           self.assertEqual(l2.total_payment(), 14482.98, "Checking the total_payment method")
           self.assertEqual(l1.__str__(), "Your loan is $10000 for 10 years at an interest rate of 5%.", "Checking the string method")

   myTests().main()

.. parsonsprob:: Classes_Basic_Cart1_pp
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``Cart`` that takes in a dictionary price_dict with keys as product names and values as the product price. The initializer method also creates a new empty list called cart_list that will contain tuples in the format (item, quantity). The class also has an add_item and a calculate_total method. The add_item method will take in an item and quantity you wish to purchase and append those to the cart. The calculate_total method should calculate and return the total amount of your purchase for all of the items in your cart. For example, when ``c = Cart({“Notebook”: 1.99, “Pen”: 2.50, “Paper”: 1.00})`` and a user wants to purchase 3 pens by calling c.add_item("Pen", 3), then print(c.calculate_total) would print ``7.50`` as a float.
    -----
    class Cart:
    =====
      def __init__(self, price_dict):
    =====
        self.price_dict = price_dict
        self.cart_list = []
    =====
        self.price_dict = price_dict #paired
        self.cart_list = cart_list
    =====
      def add_item(self, item, quantity):
    =====
        self.cart_list.append((item, quantity))
    =====
        self.cart_list.append(item, quantity) #paired
    =====
      def calculate_total(self):
    =====
        total = 0
    =====
        for item, quantity in self.cart_list:
    =====
          total += quantity * self.price_dict[item]
    =====
        return float('{:.2f}'.format(total))



.. activecode:: Classes_Basic_Cart1_ac
   :autograde: unittest

   Create a class ``Cart`` that takes in a dictionary price_dict with keys as product names and values as the product price. The initializer method also creates a new empty list called cart_list that will contain tuples in the format (item, quantity). The class also has an add_item and a calculate_total method. The add_item method will take in an item and quantity you wish to purchase and append those to the cart. The calculate_total method should calculate and return the total amount of your purchase for all of the items in your cart. For example, when ``c = Cart({“Notebook”: 1.99, “Pen”: 2.50, “Paper”: 1.00})`` and a user wants to purchase 3 pens by calling c.add_item("Pen", 3), then print(c.calculate_total) would print ``7.50`` as a float.
   ~~~~
   class Cart:
        #write code here

   c = Cart({"Notebook": 1.99, "Pen": 2.50, "Paper": 1.00})
   c.add_item("Pen", 3)
   print(c.calculate_total())

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           c = Cart({"Banana": 0.19, "Apple": 1.79, "Blueberries": 3.99, "Strawberries": 4.98})
           c.add_item("Banana", 5)
           c.add_item("Strawberries", 1)
           self.assertEqual(c.cart_list, [('Banana', 5), ('Strawberries', 1)], "Checking that all items were added to the cart")
           self.assertEqual(c.calculate_total(), 5.93, "Checking calculate_total method")

   myTests().main()
