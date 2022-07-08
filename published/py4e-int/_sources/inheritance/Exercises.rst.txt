Multiple Choice Questions
---------------------------

.. mchoice:: Exercises_inheritance_mc1
   :practice: T
   :answer_a: A person can work. A person can work. An employee works. A person eats food.
   :answer_b: A person can work. An employee works. A person eats food.
   :answer_c: The code won't compile.
   :answer_d: A person can work. An employee works. A person eats food. A person eats food.
   :answer_e: A person can work. A person can work. An employee works. A person eats food. A person eats food.
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct! Since Employee inherited from Person, the food method works for the Employee class as well.
   :feedback_e: Try again!

   Given the below code, what would be printed (ignore newlines and spacing between sentences)?

   .. code-block:: python

    class Person:
        def work(self):
            print("A person can work.")

        def food(self):
            print("A person eats food.")

    class Employee(Person):
        def work(self):
            print("An employee works.")

    p1 = Person()
    p2 = Employee()
    p1.work()
    p2.work()
    p1.food()
    p2.food()


.. mchoice:: Exercises_inheritance_mc2
   :practice: T
   :answer_a: A person can work. None. A person eats food. None.
   :answer_b: A person can work. A person can work. A person eats food. A person eats food.
   :answer_c: The code won't compile.
   :answer_d: A person can work. A person eats food.
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! Since Employee inherited from Person, the methods work and food work for Employee as well.
   :feedback_c: Try again!
   :feedback_d: Try again!

   Given the below code, what would be printed (ignore newlines and spacing between sentences)?

   .. code-block:: python

      class Person:
         def work(self):
            print("A person can work.")

         def food(self):
            print("A person eats food.")

      class Employee(Person):
         pass

      p1 = Person()
      p2 = Employee()
      p1.work()
      p2.work()
      p1.food()
      p2.food()


.. mchoice:: Exercises_inheritance_mc3
   :practice: T
   :answer_a: A person can work. I can work. A person eats food. I can eat.
   :answer_b: A person can work. None. I can work. A person eats food. None. I can eat.
   :answer_c: The code won't compile.
   :answer_d: A person can work. A person can work. I can work. A person eats food. A person eats food. I can eat.
   :correct: d
   :feedback_a: Try again! There are 2 sentences missing: "A person can work." and "A person eats food.".
   :feedback_b: Try again! Using super().method in the child class Employee method inherits the method (print statements, in this case) from the parent class Person.
   :feedback_c: Try again! The code compiles.
   :feedback_d: Correct! Using super() reduces code duplication, and the child class method can duplicate the functionality of the parent class method.

   Given the below code, what would be printed (ignore newlines and spacing between sentences)?

   .. code-block:: python

      class Person:
         def work(self):
            print("A person can work.")

         def food(self):
            print("A person eats food.")

      class Employee(Person):
         def work(self):
            super().work()
            print("I can work.")

         def food(self):
            super().food()
            print("I can eat.")

      p1 = Person()
      p2 = Employee()
      p1.work()
      p2.work()
      p1.food()
      p2.food()


.. mchoice:: Exercises_inheritance_mc4
   :practice: T
   :answer_a: Keyboard inherits from Computer.
   :answer_b: Student inherits from Person.
   :answer_c: Encyclopedia inherits from Book.
   :answer_d: Person inherits House.
   :correct: b, c
   :feedback_a: Try again! Keyboard isn't a type of Computer, so inheritance can't be used.
   :feedback_b: Correct! Student is a type of Person, so inheritance can be used.
   :feedback_c: Correct! Encyclopedia is a type of Book, so inheritance can be used.
   :feedback_d: Try again! Person isn't a type of House, so inheritance can't be used.

   For which of the following can inheritance be used?


.. mchoice:: Exercises_inheritance_mc5
   :practice: T
   :answer_a: Yes, a class can only inherit from another class if it is a type of the class.
   :answer_b: No, a class can inherit from another class if they're associated.
   :answer_c: Yes and no. A class can inherit from another class if they're associated or if it is a type of the class.
   :correct: a
   :feedback_a: Correct! A class can only inherit from another class if it is a type of the class. For example, an encyclopedia is a type of book.
   :feedback_b: Try again!
   :feedback_c: Try again!

   Can a class only inherit from another class if it is a type of the class?


.. mchoice:: Exercises_inheritance_mc6
   :practice: T
   :answer_a: A (class) has a (class).
   :answer_b: A (class) can be substituted with (another class).
   :answer_c: A (class) can be associated with (another class).
   :answer_d: A (class) is a type of (other class).
   :answer_e: A (class) is a specialization of (other class).
   :correct: b, d, e
   :feedback_a: Try again! Classes that are associated can't use inheritance.
   :feedback_b: Correct! Classes that can be substituted can use inheritance.
   :feedback_c: Try again! Classes that are associated can't use inheritance.
   :feedback_d: Correct! Classes that can be substituted can use inheritance.
   :feedback_e: Correct! Classes that can be substituted can use inheritance.

   What phrases represent inheritance?


.. mchoice:: Exercises_inheritance_mc7_v2
   :practice: T
   :answer_a: parent().method
   :answer_b: parent.method
   :answer_c: super().method
   :answer_d: super.method
   :correct: c
   :feedback_a: Do not use parent.
   :feedback_b: Do not use parent. Do use ().
   :feedback_c: Correct! Use super().method to call parent class methods.
   :feedback_d: You need the ()

   How do you call a method in a parent class?


.. mchoice:: Exercises_inheritance_mc8
   :practice: T
   :answer_a: Book.__init__(self)
   :answer_b: Dictionary.__init__(self)
   :answer_c: super().__init__()
   :answer_d: Book.super().__init__(self)
   :answer_e: Book.__init__(Dictionary)
   :correct: a, c
   :feedback_a: Correct! Using ParentClass.method is one way to invoke a method in the ParentClass to the ChildClass.
   :feedback_b: Try again!
   :feedback_c: Correct! Using super().method is one way to invoke a method in the ParentClass to the ChildClass.
   :feedback_d: Try again!
   :feedback_e: Try again!

   If Dictionary is a subclass of Book, what line of code is needed to invoke the __init__ method in Book to Dictionary?


.. mchoice:: Exercises_inheritance_mc9
   :practice: T
   :answer_a: True
   :answer_b: False
   :answer_c: The code won't compile.
   :answer_d: None
   :correct: a
   :feedback_a: Correct! p2 is assigned to an Employee object, and the Employee object inherits from Person. Therefore, p2 is an instance of Person.
   :feedback_b: Try again!
   :feedback_c: Try again! The code compiles even with the pass statements.
   :feedback_d: Try again! Printing isinstance() will print either True or False if it compiles.

   What will be printed?

   .. code-block:: python

      class Person:
         pass

      class Employee(Person):
         pass

      p2 = Employee()
      print(isinstance(p2, Person))


.. mchoice:: Exercises_inheritance_mc10
   :practice: T
   :answer_a: Inheritance is a key idea of Object-oriented programming (OOP).
   :answer_b: The child class is also called a subclass or a derived class.
   :answer_c: Private members of a class can be inherited.
   :answer_d: Protected members of a class can be inherited.
   :correct: c
   :feedback_a: Try again! This statement about inheritance is correct.
   :feedback_b: Try again! This statement about inheritance is correct.
   :feedback_c: Correct! This statement about inheritance is incorrect. Private members of a class can't be inherited.
   :feedback_d: Try again! This statement about inheritance is correct.

   Which statement about inheritance is incorrect?


.. mchoice:: unittest_mcq_test_item__1
    :practice: T
    :answer_a: I
    :answer_b: II
    :answer_c: III
    :answer_d: IV
    :correct: c
    :feedback_a: All methods take self (the current object).
    :feedback_b: The test_create method takes self and you must use self to access i1 and i2.
    :feedback_c: Correct!  Remember to pass in self to methods and use self when accessing attributes.
    :feedback_d: The setUp method takes self and you must use self in the setUp so other methods will still have access.

    Given that there is an ``Item`` class with a name and price with a ``__str__`` method that returns ``"name: price"``, which of the following is correct?

    ``I``

    ::

       class TestItem(unittest.TestCase):

           def setUp():
               i1 = Item("Coke", 2.99)
               i2 = Item("Burger", 6.99)

           def test_str_item():
               self.assertEqual(i1.__str__(), "Coke: 2.99")
               self.assertEqual(i2.__str__(), "Burger: 6.99")


    ``II``

    ::

       class TestItem(unittest.TestCase):

           def setUp(self):
               self.i1 = Item("Coke", 2.99)
               self.i2 = Item("Burger", 6.99)

           def test_str_item():
               self.assertEqual(i1.__str__(), "Coke: 2.99")
               self.assertEqual(i2.__str__(), "Burger: 6.99")

    ``III``

    ::

       class TestItem(unittest.TestCase):

           def setUp(self):
               self.i1 = Item("Coke", 2.99)
               self.i2 = Item("Burger", 6.99)

           def test_str_item(self):
               self.assertEqual(self.i1.__str__(), "Coke: 2.99")
               self.assertEqual(self.i2.__str__(), "Burger: 6.99")


    ``IV``

    ::

       class TestItem(unittest.TestCase):

           def setUp():
               i1 = Item("Coke", 2.99)
               i2 = Item("Burger", 6.99)

           def test_str_item(self):
               self.assertEqual(self.i1.__str__(), "Coke: 2.99")
               self.assertEqual(self.i2.__str__(), "Burger: 6.99")



.. mchoice:: unittest_mcq_test_car_2
    :practice: T
    :answer_a: I
    :answer_b: II
    :answer_c: III
    :answer_d: IV
    :correct: d
    :feedback_a: All methods take self (the current object).
    :feedback_b: The assertEqual methods need to be called on self (the current object).
    :feedback_c: All methods take self (the current object).
    :feedback_d: Correct! All methods take self and you must call assertEqual on self and use self for accessing attributes.

    Given that there is an ``Car`` class with attributes of ``make`` and ``color``, which of the following is correct?

    ``I``

    ::

      class TestCar(unittest.TestCase):

          def setUp():
               c1 = Car("Ford", "blue")
               c2 = Car("Toyota", "red")

           def test_create_car():
               assertEqual(c1.make, "Ford")
               assertEqual(c1.color, "blue")
               assertEqual(c2.make, "Toyota")
               assertEqual(c2.color, "red")


    ``II``

    ::

      class TestCar(unittest.TestCase):

          def setUp(self):
              self.c1 = Car("Ford", "blue")
              self.c2 = Car("Toyota", "red")

          def test_create_car(self):
              assertEqual(self.c1.make, "Ford")
              assertEqual(self.c1.color, "blue")
              assertEqual(self.c2.make, "Toyota")
              assertEqual(self.c2.color, "red")

    ``III``

    ::

      class TestCar(unittest.TestCase):

          def setUp(self):
              self.c1 = Car("Ford", "blue")
              self.c2 = Car("Toyota", "red")

          def test_create_car():
              self.assertEqual(self.c1.make, "Ford")
              self.assertEqual(self.c1.color, "blue")
              self.assertEqual(self.c2.make, "Toyota")
              self.assertEqual(self.c2.color, "red")


    ``IV``

    ::

      class TestCar(unittest.TestCase):

          def setUp(self):
              self.c1 = Car("Ford", "blue")
              self.c2 = Car("Toyota", "red")

          def test_create_car(self):
              self.assertEqual(self.c1.make, "Ford")
              self.assertEqual(self.c1.color, "blue")
              self.assertEqual(self.c2.make, "Toyota")
              self.assertEqual(self.c2.color, "red")



.. mchoice:: unittest_mcq_test_car_set_color_3
    :practice: T
    :answer_a: I
    :answer_b: II
    :answer_c: III
    :answer_d: IV
    :correct: c
    :feedback_a: All methods take self (the current object).
    :feedback_b: Check the original and changed color on each car object.
    :feedback_c: Correct!
    :feedback_d: Check the original and changed color on each car object.

    Given that there is an ``Car`` class with attributes of ``make`` and ``color`` and a method ``set_color`` which changes the color, which of the following is correct?

    ``I``

    ::

      class TestCar(unittest.TestCase):

          def setUp():
               c1 = Car("Ford", "blue")
               c2 = Car("Toyota", "red")

           def test_change_color():
               assertEqual(c1.color, "blue")
               c1.set_color("yellow")
               assertEqual(c1.color, "yellow")
               assertEqual(c2.color, "red")
               c2.set_color("blue")
               assertEqual(c2.color, "blue")


    ``II``

    ::

      class TestCar(unittest.TestCase):

          def setUp(self):
               self.c1 = Car("Ford", "blue")
               self.c2 = Car("Toyota", "red")

           def test_change_color(self):
               self.assertEqual(self.c1.color, "yellow")
               self.c1.set_color("yellow")
               self.assertEqual(self.c1.color, "blue")
               self.assertEqual(self.c2.color, "red")
               self.c2.set_color("blue")
               self.assertEqual(self.c2.color, "blue")

    ``III``

    ::

      class TestCar(unittest.TestCase):

          def setUp(self):
               self.c1 = Car("Ford", "blue")
               self.c2 = Car("Toyota", "red")

           def test_change_color(self):
               self.assertEqual(self.c1.color, "blue")
               self.c1.set_color("yellow")
               self.assertEqual(self.c1.color, "yellow")
               self.assertEqual(self.c2.color, "red")
               self.c2.set_color("blue")
               self.assertEqual(self.c2.color, "blue")


    ``IV``

    ::

      class TestCar(unittest.TestCase):

          def setUp(self):
               self.c1 = Car("Ford", "blue")
               self.c2 = Car("Toyota", "red")

           def test_change_color(self):
               self.assertEqual(self.c1.color, "blue")
               self.c1.set_color("yellow")
               self.assertEqual(self.c1.color, "yellow")
               self.assertEqual(self.c2.color, "blue")
               self.c2.set_color("blue")
               self.assertEqual(self.c2.color, "red")


.. mchoice:: unittest_mcq_test_car_set_model_4
    :practice: T
    :answer_a: I
    :answer_b: II
    :answer_c: III
    :answer_d: IV
    :correct: d
    :feedback_a: All methods take self (the current object).
    :feedback_b: All methods take self (the current object).
    :feedback_c: Are the test cases correct?  What was the original make and changed make for each?
    :feedback_d: Correct!

    Given that there is an ``Car`` class with attributes of ``make`` and ``color`` and a method ``set_make`` which changes the make, which of the following is correct?

    ``I``

    ::

      class TestCar(unittest.TestCase):

          def setUp():
               c1 = Car("Ford", "blue")
               c2 = Car("Toyota", "red")

           def test_change_make():
               assertEqual(c1.make, "Ford"")
               c1.set_make("Toyota")
               assertEqual(c1.make, "Toyota")
               assertEqual(c2.make, "Toyota")
               c2.set_make("Ford")
               assertEqual(c2.make, "Ford")


    ``II``

    ::

      class TestCar(unittest.TestCase):

          def setUp(self):
               self.c1 = Car("Ford", "blue")
               self.c2 = Car("Toyota", "red")

           def test_change_make():
               self.assertEqual(self.c1.make, "Toyota")
               self.c1.set_make("Ford")
               self.assertEqual(self.c1.make, "Ford")
               self.assertEqual(self.c2.make, "Ford")
               self.c2.set_make("Toyota")
               self.assertEqual(self.c2.make, "Toyota")

    ``III``

    ::

      class TestCar(unittest.TestCase):

          def setUp(self):
               self.c1 = Car("Ford", "blue")
               self.c2 = Car("Toyota", "red")

           def test_change_make(self):
               self.assertEqual(c1.make, "Toyota")
               self.c1.set_make("Ford")
               self.assertEqual(c1.make, "Ford")
               self.assertEqual(c2.make, "Ford")
               self.c2.set_make("Toyota")
               self.assertEqual(c2.make, "Toyota")


    ``IV``

    ::

      class TestCar(unittest.TestCase):

          def setUp(self):
               self.c1 = Car("Ford", "blue")
               self.c2 = Car("Toyota", "red")

           def test_change_make(self):
               self.assertEqual(self.c1.make, "Ford"")
               self.c1.set_make("Toyota")
               self.assertEqual(self.c1.make, "Toyota")
               self.assertEqual(self.c2.make, "Toyota")
               self.c2.set_make("Ford")
               self.assertEqual(self.c2.make, "Ford")


.. mchoice:: unittest_mcq_test_order_price__5
    :practice: T
    :answer_a: I
    :answer_b: II
    :answer_c: III
    :answer_d: IV
    :correct: a
    :feedback_a: Correct!
    :feedback_b: Is 9.99 correct?
    :feedback_c: The method total returns a number, not a string.
    :feedback_d: Is 8.98 correct?

    Given that there is an ``Item`` class with a ``name`` and ``price`` and an ``Order`` class that takes a list of ``Item`` objects and has a ``total`` method which returns the total price for all items, which of the following is correct?

    ``I``

    ::

       class TestItem(unittest.TestCase):

           def setUp(self):
               i1 = Item("Coke", 2.99)
               i2 = Item("Burger", 6.99)
               self.o1 = Order([i1, i2])

           def test_create_order_total(self):
               self.assertAlmostEqual(self.o1.total(), 9.98, 2)


    ``II``

    ::

       class TestItem(unittest.TestCase):

           def setUp(self):
               i1 = Item("Coke", 2.99)
               i2 = Item("Burger", 6.99)
               self.o1 = Order([i1, i2])

           def test_create_order_total(self):
               self.assertAlmostEqual(self.o1.total(), 9.99, 2)



    ``III``

    ::

       class TestItem(unittest.TestCase):

           def setUp(self):
               i1 = Item("Coke", 2.99)
               i2 = Item("Burger", 6.99)
               self.o1 = Order([i1, i2])

           def test_create_order_total(self):
               self.assertAlmostEqual(self.o1.total(), "8.98", 2)


    ``IV``

    ::

       class TestItem(unittest.TestCase):
       class TestItem(unittest.TestCase):

           def setUp(self):
               i1 = Item("Coke", 2.99)
               i2 = Item("Burger", 6.99)
               self.o1 = Order([i1, i2])

           def test_create_order_total(self):
               self.assertAlmostEqual(self.o1.total(), 8.98, 2)
