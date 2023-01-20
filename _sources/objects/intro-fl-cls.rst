Knowledge Review
-----------------------------------------------------------------

Look the code below.  It defines a class.  it also declares *methods* which are
functions that are defined inside of a class.
One of the methods, ``__init__``, is automatically called when a new object is
created by the class.  One of the methods, ``__str__``, is automatically
called when you print an object of the class.

A Book Class
======================================================

.. activecode:: class_tog_book_ac1_v2_fl
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


Creating More Objects
======================================================

Once you have defined a class you can use it to create many objects.

.. activecode:: class_tog_person_ac2_fl
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

You can add a new method to a class by adding a new function inside the class.  For example, you can add the ``initials``
method to the Person class.  The function must take an object of the
class to work with that by convention we call ``self``. The name of the function
doesn't need to have any underscores in it.

.. activecode:: class_tog_person_init_ac1_fl
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

Feedback
==================================

.. shortanswer:: class-tog-intro-sa-fl

   Please provide feedback here. Please share any comments, problems, or suggestions.

What to do next
============================

.. raw:: html

    <h4>Click to see an introduction about our system 👉 <b><a href="system-fl-cls.html">System Introduction</a></b></h4>
