Group Work - Classes, constructors, attributes, and methods
-----------------------------------------------------------------

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Read a class definition
* Learn what a constructor is and what it does
* Learn what the __str__ method does
* Identify class attributes and methods
* Create new objects and name them
* Create new methods

Look the code below.  It defines a class.  it also declares *methods* which are functions that are defined inside of a class.
One of the methods is automatically called when a new object is created by the class.  One of the methods is automatically
called when you print an object of the class.


A Book Class
======================================================

.. activecode:: class_book_ac1_v2
    :caption: A class to represent a book

    Run the following code
    ~~~~
    class Book:
        """ Represents a book object """

        def __init__(self, title, author):
            self.title = title
            self.author = author

        def __str__(self):
            return "title: " + self.title + " author: " + self.author

    def main():
         b2 = Book("A Wrinkle in Time", "M. L'Engle")
         print(b2)
         b2.set_author("Madeleine L'Engle")
         print(b2)
         b1 = Book("Goodnight Moon", "Margaret Wise Brown")
         print(b1)

    main()

Look at the class definition.  It starts with the keyword ``class``.  Then answer the following questions.

.. fillintheblank:: class_fitb_book_class_name

    What is the name of this class?

    - :Book: Good job!  The class name follows the class keyword.
      :book: The class name is usually upper case.
      :.*: The class name is after the keyword class and before the :

.. fillintheblank:: class_fitb_book_init

    What is the name of the method that is called when the object is created?

    - :__init__: Good job!  This is called the constructor, but it actually initializes the object's attributes.
      :init: Almost.  The method name includes underscores.
      :.*: This method initializes the object's attributes

.. fillintheblank:: class_fitb_book_str

    What is the name of the method that is called when the object is printed?

    - :__str__: Good job!  This method is called when you print an object of this class.
      :str: Not quite, the name of the method includes underscores.
      :.*: This method returns a string with the values of the attributes


.. fillintheblank:: class_fitb_attribute_num

    How many attributes does an object of the Book class have?

    - :2|two|Two|TWO: Good Job!  The attributes are initialized in the __init__ method (also known as the constructor).
      :.*: Attributes are initialized in the __init__ method


.. clickablearea:: class_ca_book_method_names
    :practice: T
    :question: Click on all of the method names in the code below.
    :iscode:
    :feedback: The method name in a class is the name of the function.

    :click-incorrect:class:endclick: :click-incorrect:Book::endclick:
        :click-incorrect:""" Represents a book object """:endclick:

        :click-incorrect:def:endclick: :click-correct:__init__:endclick::click-incorrect:(self, title, author)::endclick:
            :click-incorrect:self.title = title:endclick:
            :click-incorrect:self.author = author:endclick:

        :click-incorrect:def:endclick: :click-correct:__str__:endclick::click-incorrect:(self)::endclick:
            :click-incorrect:return "title: " + self.title + " author: " + self.author:endclick:

        :click-incorrect:def:endclick: :click-correct:get_title:endclick::click-incorrect:(self)::endclick:
            :click-incorrect:return self.title:endclick:

        :click-incorrect:def:endclick: :click-correct:get_author:endclick::click-incorrect:(self)::endclick:
            :click-incorrect:return self.get_author:endclick:

        :click-incorrect:def:endclick: :click-correct:set_author:endclick::click-incorrect:(self, author)::endclick:
            :click-incorrect:self.author = author:endclick:

        :click-incorrect:def:endclick: :click-correct:set_title:endclick::click-incorrect:(self, title)::endclick:
            :click-incorrect:self.title = title:endclick:

.. fillintheblank:: class_fitb_first_parameter

    What is the name of the first parameter in all of the methods?

    - :self: Good job!
      :.*: The parameters are in () after the method name


Now look at the main function in the code above and answer the following questions.

.. fillintheblank:: class_fitb_book_num_objs

    How many objects were created in the main function?

    - :2|two|Two|TWO: Two book objects were created.
      :.*: Each call to Book() creates a new object


.. fillintheblank:: class_fitb_book_first_name

    What name was assigned to the first Book object that was created?

    - :b2: The first book object that was created was called b2.
      :.*: Each call to Book() creates a new object and returns it

.. fillintheblank:: class_fitb_book_second_name

    What name was assigned to the second Book object that was created?

    - :b1: The second book object that was created was called b1.
      :.*: Each call to Book() creates a new object and returns it


.. parsonsprob:: class-pp-person
   :numbered: left
   :adaptive:

   Put the code blocks in order below to create a class ``Person`` with a
   constructor (``__init__``) method that takes a first and last name and a
   ``__str__`` method to return a string with the first and last name separated
   with a space.
   -----
   class Person:
   =====
   Class Person: #paired
   =====
       __init__(self, first, last):
   =====
       __init__(first, last): #paired
   =====
           self.first = first
           self.last = last
   =====
       __str__(self):
   =====
       __str__(): #paired
   =====
           return self.first + " " + self.last
   =====
           return first + " " + last #paired

Create More Book Objects
======================================================

.. activecode:: class_book_ac2_v2
    :caption: A class to represent a book

    Change the following main function to create a third book object called b3 with a title of "1984" and author "George Orwell".  Print out the values using the print function in the main.
    ~~~~
    class Book:
        """ Represents a book object """

        def __init__(self, title, author):
            self.title = title
            self.author = author

        def __str__(self):
            return "title: " + self.title + " author: " + self.author

    def main():
        b2 = Book("A Wrinkle in Time", "M. L'Engle")
        print(b2)
        b2.set_author("Madeleine L'Engle")
        print(b2)
        b1 = Book("Goodnight Moon", "Margaret Wise Brown")
        print(b1)

    main()

.. activecode:: class_person_ac2
    :caption: A class to represent a Person

    Change the following main function to add a person object with your first and last name.
    ~~~~
    class Person:
        """ Represents a person object """

        def __init__(self, first, last):
            self.first = first
            self.last = last

        def __str__(self):
            return self.first + " " + self.last

    def main():
        p1 = Person("Barbara", "Ericson")
        print(p1)

    main()


Add Methods to Classes
======================================================

.. activecode:: class_person_init_ac1
    :caption: A class to represent a Person

    Change the following Person class to add an initials method that returns
    a string with the first letter in the first name and the first letter in
    the last name
    ~~~~
    class Person:
        """ Represents a person object """

        def __init__(self, first, last):
            self.first = first
            self.last = last

        def __str__(self):
            return self.first + " " + self.last

    def main():
        p1 = Person("Barbara", "Ericson")
        print(p1)
        print(p1.initials())

    main()
