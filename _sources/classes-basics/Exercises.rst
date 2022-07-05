Multiple Choice Questions
--------------------------

.. mchoice:: objects_mcq10_1
    :practice: T
    :answer_a: student = Person("Charles")
    :answer_b: person = Person("Charles")
    :answer_c: Charles = Person()
    :answer_d: student = new Person("Charles")
    :correct: d
    :feedback_a: This uses a constructor to initialize object attributes. Try again.
    :feedback_b: This uses a constructor to initialize object attributes. The instance can have a similar name to the class. Try again.
    :feedback_c: This is correct and does not have arguments. Try again.
    :feedback_d: Correct! 'new' is incorrect.

    Which of the following does **not** correctly create an object instance?

.. mchoice:: objects_mcq10_2_v2
    :practice: T
    :answer_a: def __init__(title, author):
    :answer_b: def __init__(self, title, author):
    :answer_c: def __init__():
    :answer_d: def init(self, title, author):
    :correct: b
    :feedback_a: Incorrect! Unless a class method is static, 'self' is needed to represent the current instance. Try again.
    :feedback_b: Correct! The "self" is used to represent an instance of the given class and the parameters will be used to initialize attributes.
    :feedback_c: Incorrect! At minimum, the "self" parameter is needed to represent an instance of the given class. Try again.
    :feedback_d: Incorrect! The method name is __init__. Try again.

    Which of the following is the correct way to define a constuctor (intializer)?

.. mchoice:: objects_mcq10_3
    :practice: T
    :answer_a: 2
    :answer_b: 3
    :answer_c: 6
    :answer_d: 5
    :correct: d
    :feedback_a: Incorrect! This is the number of methods in the Book Class. Try again.
    :feedback_b: Incorrect! How many items are initialized in the __init__ method?
    :feedback_c: Incorrect! We do not count the 'self' as an attribute. Try again.
    :feedback_d: Correct! There are five attributes that are initialized in the __init__ method.

    How many attributes does an object of the Book class have?
    ::

      class Book:

        def __init__(self, title, author, pages, price, age_group):
          self.title = title
          self.author = author
          self.pages = pages
          self.price = price
          self.age_group = age_group

        def __str__(self):
          return "title: " + self.title + " author: " + self.author + " pages: " + self.pages + " price: " + self.price + " age_group: " + self.age_group

.. mchoice:: objects_mcq10_4_v2
    :practice: T
    :answer_a: x
    :answer_b: print(x)
    :answer_c: self.x
    :answer_d: init.x
    :correct: c
    :feedback_a: Incorrect! We need to refer to the current instance of the class. Try again.
    :feedback_b: Incorrect! We do not want print a value. We want to return the attribute value. Try again.
    :feedback_c: Correct! Here 'self' is used to represent the current instance of the class.
    :feedback_d: Incorrect! There is nothing like init.x since we are using the 'self' in the class. Try again.

    What should be in the underlined section in the ``getX`` method of the ``Point`` class?
    ::

      class Point:

        def __init__(self, initX, initY):
          self.x = initX
          self.y = initY

        def getX(self):
          return ______


.. mchoice:: objects_mcq10_5
  :practice: T
  :answer_a: Name: James
  :answer_b: Name: Tony
  :answer_c: Name: James Name: Tony
  :answer_d: person1
  :correct: a
  :feedback_a: Correct! This prints the string returned from the __str__ method.
  :feedback_b: Incorrect! 'Tony' is the 'name' of person2 but we are printing the person1 instance. Try again.
  :feedback_c: Incorrect! It does not print both objects.
  :feedback_d: Incorrect! The output is not the name of the instance. Try again.

  What does the following code output?
  ::

    class Person():

        def __init__(self, name):
          self.name = name

        def __str__(self):
          print("Name: " + self.name)

      person1 = Person("James")
      person2 = Person("Tony")
      print(person1)

.. mchoice:: objects_mcq10_6
    :practice: T
    :answer_a: person1 and person2 are two different instances of the People class.
    :answer_b: The __init__ class is used to create instances and set initial values for its attributes.
    :answer_c: As we are not updating any values, 'self' does not need to be passed to the __str__ method.
    :answer_d: person2 cannot access the 'name' of person1.
    :correct: c
    :feedback_a: Since two different objects were created, this is correct. Try again.
    :feedback_b: __init__ is an optional method in classes that is used to set initial values for objects. Try again.
    :feedback_c: Correct! Here 'self' is used to represent the current instance of the class and the current object must be passed into the __str__ method.
    :feedback_d: Since they are two different instances, they cannot access each other and have different initial values too. Try again.

    Which of the following statements is incorrect about the following code?
    ::

      class Person():

        def __init__(self, name):
          self.name = name

        def __str__(self):
          print("Name: " + self.name)

      person1 = Person("James")
      person2 = Person("Tony")
      print(person1)

.. mchoice:: objects_mcq10_7
    :practice: T
    :answer_a: One of the benefits of object-oriented programming is that it can hide complexity.
    :answer_b: A class defines a number of functions as well as the data that is used by those functions.
    :answer_c: Constructor methods are required to initialize an object and destructor methods are required to destroy the
               object when no longer required.
    :answer_d: The __str__ method is responsible for returning a string representation for an object.
    :correct: c
    :feedback_a: This is true, while using an object, we need to know how to use the object, but not how it works internally. Try again.
    :feedback_b: This is true as a class defines functions as well as data that is used by those functions. Try again.
    :feedback_c: Correct! This is false, a constructor is optional can be used to set initial values for an object and  python automatically
                 destroys any object if its reference count changes to a zero without needing a destructor.
    :feedback_d: This is true, we can print information about an object with the __str__ method. Try again.

    Which of the following statements is **not** true about object-oriented programming?

.. mchoice:: objects_mcq10_8_v2
    :practice: T
    :answer_a: def __str__(title, author):
    :answer_b: def __str__(self):
    :answer_c: def __str__():
    :answer_d: def str(self):
    :correct: b
    :feedback_a: Incorrect! Unless a class method is static, 'self' is used to represent the current instance. Try again.
    :feedback_b: Correct! The "self" is used to represent an instance of the given class.
    :feedback_c: Incorrect! The "self" parameter is needed to represent an instance of the given class. Try again.
    :feedback_d: Incorrect! The method is __str__. Try again.

    Which of the following is the correct way to define the __str__ method which returns a string with the title and author?

.. mchoice:: objects_mcq10_9_v2
    :practice: T
    :answer_a: Class
    :answer_b: object
    :answer_c: class
    :answer_d: instance
    :correct: c
    :feedback_a: Incorrect! Python is case sensitive. It should be class not Class.
    :feedback_b: Incorrect! An object is created by a class. Try again.
    :feedback_c: Correct! The keyword is class.
    :feedback_d: Incorrect! An instance is created from a class. Try again.

    The _________ keyword defines a template for objects of a class.

.. mchoice:: objects_mcq10_10_v2
    :practice: T
    :answer_a: class
    :answer_b: def
    :answer_c: self
    :answer_d: init
    :correct: c
    :feedback_a: Incorrect! The 'class' keyword defines a template for all objects of the class. Try again.
    :feedback_b: Incorrect! The 'def' keyword defines a function. Try again.
    :feedback_c: Correct! While 'self' is not a keyword, the convention is to use it to represent the current object.
    :feedback_d: Incorrect! The 'init' is not a keyword, but the __init__ method is created to initialize object attributes. Try again.

    _________ is by convention used to represent the current instance of a class
    and to access the attributes and methods of the class.
