Introduction
-----------------------------------------------------


1. A Book Class
======================================================

.. activecode:: class_book_ac1_v2_fl
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

.. fillintheblank:: class_fitb_book_class_name_fl

    What is the name of this class?

    - :Book: Good job!  The class name follows the class keyword.
      :book: The class name is usually upper case.
      :.*: The class name is after the keyword class and before the :

.. fillintheblank:: class_fitb_book_init_fl

    What is the name of the method that is called when the object is created?

    - :__init__: Good job!  The __init__ method is called when an object is created.
      :init: Almost.  The method name includes underscores.
      :.*: This method initializes the object's attributes

.. fillintheblank:: class_fitb_book_str_fl

    What is the name of the method that is called when the object is printed?

    - :__str__: Good job!  This method is called when you print an object of a class.
      :str: Not quite, the name of the method includes underscores.
      :.*: This method returns a string with the values of the attributes


.. fillintheblank:: class_fitb_attribute_num_fl

    How many attributes does an object of the Book class have?

    - :2|two|Two|TWO: Good Job!  The attributes are initialized in the __init__ method (also known as the constructor).
      :.*: Attributes are initialized in the __init__ method


.. clickablearea:: class_ca_book_method_names_fl
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

.. fillintheblank:: class_fitb_first_parameter_fl

    What is the name of the first parameter in all of the methods?

    - :self: Good job!
      :.*: The parameters are in () after the method name

2. Create More Book Objects
======================================================

.. activecode:: class_book_ac2_v2_fl
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

3. Add a Method to a Class
======================================================

.. activecode:: class_person_init_ac1_fl
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


4. An Introduction To Our System
================================
Please read the following and watch the videos.

**Write Code with Pop-Up Mixed-up Code**

In this study, you may see a write-code problem that allows you to pop-up the equivalent mixed-up code problem. 

You can use this problem to help you solve the write code problem.  

To pop-up the mixed-up code problem, click on the drop down near the top of problem.

See the video below for an example.

.. youtube:: zz4ATp31_vk
    :optional:
    :divid: fl-ps-toggle-cls
    :width: 650
    :height: 415
    :align: center

**Solve Mixed-up Code**

If you see a problem like the one below, you will need to put the mixed-up code in the correct order on the right side. You may need to indent the blocks as well.  

There may also be extra blocks that are not needed in a correct solution. You can leave on the left side. 

Click the "Check" button to check your solution.

See the video below for an example.

.. youtube:: Rf7oWHlo-e0
    :divid: fl-ps-parsons1-cls
    :optional:
    :width: 650
    :height: 415
    :align: center

The mixed-up code problems have a "Help me" button at the bottom of the problem. 

Once you have checked at least three incorrect solutions you can click the button for help.  

It will remove an incorrect code block, if you used one in your solution, or combine two blocks into one if there are more than three blocks left.

See the video below for an example.

.. youtube:: QejZ7u642IU
    :divid: fl-ps-parsons2-cls
    :optional:
    :width: 650
    :height: 415
    :align: center

What to do next
================

.. raw:: html

    <p>Click to finish a survey about your perceptions of your own abilities to complete learning tasks: <b><a href="se-presurvey-cls.html">Survey</a></b></p>

