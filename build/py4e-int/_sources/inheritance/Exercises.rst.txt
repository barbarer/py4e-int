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
