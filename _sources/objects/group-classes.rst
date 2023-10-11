Group Work - Classes, constructors, attributes, and methods
-----------------------------------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.


.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Identify the parts of a class
* Explain what a constructor (initializer) is and what it does
* Explain what the __str__ method does
* Explain the difference(s) between a function and method.
* Create new objects and name them
* Create new methods

Look the code below.  It defines a class.  it also declares *methods* which are functions that are defined inside of a class.
One of the methods is automatically called everytime a new object is created by the class.  One of the methods is automatically
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

    What is the name of the method in the example above that is always called when an object is created?

    - :__init__: Good job!  The __init__ method is always called when an object is created.
      :init: Almost.  The method name includes underscores.
      :.*: This method initializes the object's attributes

.. shortanswer:: class_what_is_init

   Describe in your own words what the ``__init__`` method does.

.. fillintheblank:: class_fitb_book_str

    What is the name of the method that is called when the object is printed?

    - :__str__: Good job!  This method is called when you print an object of a class.
      :str: Not quite, the name of the method includes underscores.
      :.*: This method returns a string with the values of the attributes

.. shortanswer:: class_what_is_str

   Describe in your own words what the ``__str__`` method does.

.. fillintheblank:: class_fitb_attribute_num

    How many attributes does an object of the Book class have?

    - :2|two|Two|TWO: Good Job!  The attributes are initialized in the __init__ method (also known as the constructor).
      :.*: Attributes are initialized in the __init__ method


.. clickablearea:: class_ca_book_method_names
    :practice: T
    :question: Click on all of the method names in the code below.
    :iscode:
    :feedback: Method names are the names of functions that are defined in a class.

    :click-incorrect:class:endclick: :click-incorrect:Book::endclick:
        :click-incorrect:""" Represents a book object """:endclick:

        :click-incorrect:def:endclick: :click-correct:__init__:endclick::click-incorrect:(self, title, author)::endclick:
            :click-incorrect:self.title = title:endclick:
            :click-incorrect:self.author = author:endclick:

        :click-incorrect:def:endclick: :click-correct:__str__:endclick::click-incorrect:(self)::endclick:
            :click-incorrect:return "title: " + self.title + " author: " + self.author:endclick:

        :click-incorrect:def:endclick: :click-correct:get_author:endclick::click-incorrect:(self)::endclick:
            :click-incorrect:return self.author:endclick:

    :click-incorrect:def:endclick: :click-incorrect:main()::endclick:
         :click-incorrect:b2 = Book("A Wrinkle in Time", "M. L'Engle"):endclick:
         :click-incorrect:print(b2):endclick:
         :click-incorrect:b1 = Book("Goodnight Moon", "Margaret Wise Brown"):endclick:
         :click-incorrect:print(b1):endclick:

    :click-incorrect:main():endclick:

.. shortanswer:: class_diff_function_method

   Describe in your own words what is/are the difference(s) between a function and a method.

.. fillintheblank:: class_fitb_first_parameter

    What is the name of the first parameter in all of the methods?

    - :self: Good job!
      :.*: The parameters are in () after the method name

.. parsonsprob:: class-pp-person
   :numbered: left
   :adaptive:
   :order: 2, 3, 4, 0, 1, 6, 5, 8, 7

   Put the code blocks in order below to create a class ``Person`` with a
   constructor (``__init__``) method that takes a first and last name and a
   ``__str__`` method to return a string with the first and last name separated
   with a space.
   -----
   class Person:
   =====
   Class Person: #paired
   =====
       def __init__(self, first, last):
   =====
       def __init__(first, last): #paired
   =====
           self.first = first
           self.last = last
   =====
       def __str__(self):
   =====
       def __str__(): #paired
   =====
           return self.first + " " + self.last
   =====
           return first + " " + last #paired

.. shortanswer:: class_what_is_self

   Describe in your own words what ``self`` means.

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


Add a Method to a Class
======================================================

.. activecode:: class_person_init_ac1
    :caption: A class to represent a Person

    Change the following Person class to add an ``initials`` method that returns
    a string with the first letter in the first name and the first letter in
    the last name in lowercase.
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

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: class_basics_groupsub
   :limit: 3
