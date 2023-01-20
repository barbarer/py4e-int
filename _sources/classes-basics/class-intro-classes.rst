Creating Classes
-----------------------------------------------------------------

Look the code below.  It defines a class.  it also declares *methods* which are
functions that are defined inside of a class.
One of the methods, ``__init__``, is automatically called when a new object is
created by the class.  One of the methods, ``__str__``, is automatically
called when you print an object of the class.

A Book Class
======================================================

.. activecode:: class_exp_book_ac1_v2
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

.. activecode:: class_exp_person_ac2
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

.. activecode:: class_exp_person_init_ac1
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

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            p1 = Person("Barbara", "Ericson")
            self.assertEqual(p1.initials(),'be',"testing initials for Barbara Ericson")
            p2 = Person("Enoch", "Obe")
            self.assertEqual(p2.initials(),"eo", "testing initials for Enoch Obe")

    myTests().main()

Feedback
==================================

.. shortanswer:: class-exp-intro-classes-ps-sa

   Please provide feedback here. Please share any comments, problems, or suggestions.

What to do next
============================

.. raw:: html

    <p>Click on the following link to go the practice problems: <a id="class-practice"><font size="+2">Practice Problems</font></a></p>

.. raw:: html

    <script type="text/javascript" >

      window.history.pushState(null, null, window.location.href);
      window.onpopstate = function () {
        window.history.go(1);
      }

      window.onload = function() {

        a = document.getElementById("class-practice")

        // randomly pick one of two relative urls
        var v = Math.floor(Math.random() * 9) + 1;
        if (v % 2 == 0)
        {
              a.href = "class-pwd.html"
        }
        else
        {
               a.href = "class-pnd.html"
        }

        };
    </script>
