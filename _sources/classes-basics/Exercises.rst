Multiple Choice Questions
--------------------------

.. mchoice:: objects_mcq10_1
    :practice: T
    :answer_a: student = Person("Charles")
    :answer_b: person = Person("Charles")
    :answer_c: Charles = Person()
    :answer_d: student = new Person("Charles")
    :correct: d
    :feedback_a: This uses the constructor function to create an object with arguments. Try again.
    :feedback_b: The instance can have a similar name to the class. This uses the constructor function to create an object with arguments. Try again.
    :feedback_c: This is correct and does not have arguments. Try again.
    :feedback_d: Correct! 'New' is not required.

    Which of the following does **not** create an object instance?

.. mchoice:: objects_mcq10_2
    :practice: T
    :answer_a: def __init__(title, author):
    :answer_b: def __init__(self, title, author):
    :answer_c: def __init__():
    :answer_d: __init__(self, title, author):
    :correct: b
    :feedback_a: Incorrect! Unless a class method is static, 'self' is explicitly used to represent current instance. Try again.
    :feedback_b: Correct! The "self" is used to represent an instance of the given class and the parameters will be used to initialize variables.
    :feedback_c: Incorrect! At minimum, the "self" parameter is needed to represent an instance of the given class. Try again.
    :feedback_d: Incorrect! The reserved word "def" is necessary to define a method. Try again.

    Which of the following is the correct way to define an initializer method?

.. mchoice:: objects_mcq10_3
    :practice: T
    :answer_a: 2
    :answer_b: 6
    :answer_c: 5
    :correct: c
    :feedback_a: Incorrect! This si the number of methods in the Book Class. Try again.
    :feedback_b: Incorrect! We do not count the 'self' as an attribute. Try again.
    :feedback_c: Correct! There are five attributes that are initialized for any instance of the class.

    How many attributes does an object of the Book class have??
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

.. mchoice:: objects_mcq10_4
    :practice: T
    :answer_a: x, y
    :answer_b: print(x), print(y)
    :answer_c: self.x, self.y
    :answer_d: init.x, init.y
    :correct: c
    :feedback_a: Incorrect! We need to represent the instance of the class. Try again.
    :feedback_b: Incorrect! We do not want to return a printed value. We want to return the value of the instance of the class. Try again.
    :feedback_c: Correct! Here 'self' is used to represent the current instance of the class.
    :feedback_d: Incorrect! There is nothing like init.x since we are using the 'self' in the class. Try again.

    What should be the answer for the blank spaces in getX and getY methods of Point class?
    ::

      class Point:

        def __init__(self, initX, initY):
          self.x = initX
          self.y = initY

        def getX(self):
          return ______

        def getY(self):
          return ______

.. mchoice:: objects_mcq10_5
  :practice: T
  :answer_a: Name: James
  :answer_b: Name: Tony
  :answer_c: Name: James Name: Tony
  :answer_d: person1
  :correct: a
  :feedback_a: Correct! This prints the 'name' of the person1 instance.
  :feedback_b: Incorrect! 'Tony' is the 'name' of person2 but we are calling the person1 instance. Try again.
  :feedback_c: Incorrect! Person1 and person2 are two different instances. Try again.
  :feedback_d: Incorrect! The output is not the name of the instance. Try again.

  What is the output of the following code?
  ::

    class Person():

        def __init__(self, name):
          self.name = name

        def printName(self):
          print("Name: " + self.name)

      person1 = Person("James")
      person2 = Person("Tony")
      person1.printName()

.. mchoice:: objects_mcq10_6
    :practice: T
    :answer_a: person1 and person2 are two different instances of the People class.
    :answer_b: The __init__ class is used to create instances and set initial values for its attributes.
    :answer_c: As we are not updating any values, 'self' is not needed in def namePrint(self):
    :answer_d: person2 cannot access the 'name' of person1.
    :correct: c
    :feedback_a: Since two different objects were created, this is correct. Try again.
    :feedback_b: __init__ is an optional method in classes that is used to set initial values for objects. Try again.
    :feedback_c: Correct! Here 'self' is used to represent the current instance of the class.
    :feedback_d: Since they are two different instances, they cannot access each other and have different initial values too. Try again.

    Which of the following statements is incorrect about the following code?
    ::

      class Person():

        def __init__(self, name):
          self.name = name

        def printName(self):
          print("Name: " + self.name)

      person1 = Person("James")
      person2 = Person("Tony")
      person1.printName()

.. mchoice:: objects_mcq10_7
    :practice: T
    :answer_a: One of the benefits of object-oriented programming is that it can hide complexity.
    :answer_b: An object class contains a number of functions as well as the data that is used by those functions.
    :answer_c: Constructor methods are required to initialize an object and destructor methods are required to destroy the
               object when no longer required.
    :answer_d: The __str__ method is responsible for returning a string representation for a class.
    :correct: c
    :feedback_a: This is true, while using an object, we need to know how to use the object class but not how it works internally. Try again.
    :feedback_b: This is true as an object can contain a number of functions as well as data that is used by those functions. Try again.
    :feedback_c: Correct! This is false, a constructor is optional can be used to set initial values for an object and  python automatically
                 destroys any object if its reference count changes to a zero without needing a destructor.
    :feedback_d: This is true, we can print a class object by initializing the __str__ method. Try again.

    Which of the following statements is **not** true about object-oriented programming?

.. mchoice:: objects_mcq10_8
    :practice: T
    :answer_a: def __str__(title, author):
    :answer_b: def __str__(self):
    :answer_c: def __str__():
    :answer_d: __str__(self):
    :correct: b
    :feedback_a: Incorrect! Unless a class method is static, 'self' is explicitly used to represent current instance. Try again.
    :feedback_b: Correct! The "self" is used to represent an instance of the given class.
    :feedback_c: Incorrect! The "self" parameter is needed to represent an instance of the given class. Try again.
    :feedback_d: Incorrect! The reserved word "def" is necessary to define a method. Try again.

    Which of the following is the correct way to define an initializer method?

.. mchoice:: objects_mcq10_9
    :practice: T
    :answer_a: Class
    :answer_b: object
    :answer_c: class
    :answer_d: instance
    :correct: a
    :feedback_a: Correct! The class keyword defines an object but does not create the object.
    :feedback_b: Incorrect! An object is created using this template. Try again.
    :feedback_c: Incorrect! The keyword is case-sensitive. Try again.
    :feedback_d: Incorrect! An instance is a single occurrence of an object created when the object is initialized. Try again.

    The _________ keyword defines a template indicating what data and code will
    be contained in each object of type.

.. mchoice:: objects_mcq10_10
    :practice: T
    :answer_a: class
    :answer_b: def
    :answer_c: self
    :answer_d: init
    :correct: c
    :feedback_a: Incorrect! The 'class' is a keyword that defines the template of an object. Try again.
    :feedback_b: Incorrect! The 'def' is used to define a function. Try again.
    :feedback_c: Correct! The 'self' is not a keyword but a convention that is used for this purpose.
    :feedback_d: Incorrect! The 'init' not a convention, but the __init__ method is created to initialize class variables. Try again.

    _________ is a convention that is used to represent the instance of a class
    and to access the attributes and methods of the class.
