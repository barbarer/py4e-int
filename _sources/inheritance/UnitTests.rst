Unit Tests
============

Now that you have learned about classes and inheritance we can explain
how to write your own unit tests.

Testing your Code
------------------

How do you test that your program worked?  You may put in print statements about what you expect
the output to be and compare that to what you actually get to see if your code is correct.

In fact in test-driven development you should write test cases **before** you
start writing any code. That way you will know when your code works.

.. activecode:: ut_example_test_total_even
    :caption: Testing your a function

    Run the code below to see what it prints.
    ~~~~
    # Return the total of the even numbers in a list of numbers called nums
    def total_even(nums):
        total = 0
        for num in nums:
            if num % 2 == 0:
                total += num
        return total

    # Test cases for total_even
    def test():
        print(f"Testing total_even([1, 2]) should return 2 and returns {total_even([1, 2])}")
        print(f"Testing total_even([1, 3]) should return 0 and returns {total_even([1, 3])}")
        print(f"Testing total_even([2, 6]) should return 8 and returns {total_even([2, 6])}")
        print(f"Testing total_even([2, 3, 4]) should return 6 and returns {total_even([2, 3, 4])}")
        print(f"Testing total_even([]) should return 0 and returns {total_even([])}")
        print(f"Testing total_even([1]) should return 0 and returns {total_even([1])}")
        print(f"Testing total_even([2]) should return 2 and returns {total_even([2])}")

    # function call
    test()

This type of test is better than just printing out actual output because
then you have to think about what the correct value should be.  It lets you
quickly compare the expected value and the actual value.  However, you have
to visually compare the two.

Creating Test Cases
---------------------
What types of tests should you create?  You should create tests that check
that the function works for a variety of normal input.  You should also think about how
to handle unusual input such as checking that ``total_even`` works even for an empty list or
a list with only one item.

Understanding Unit Tests
-------------------------

.. index:: unit tests

Another way to test your code is to write unit tests. You have already been
using hidden unit tests in this ebook to check your code as shown below.  You
probably quickly realized that you wanted all the tests to "pass" which is
highlighted in green. This gives you an even quicker visual indication that your code
is working than having to compare the expected output to the actual.

.. activecode:: ut-ex-perimeterq
    :autograde: unittest

    Fix 4 errors below so that the following code runs and returns the perimeter of a rectangle.
    ~~~~
    def recPerimeter(length, width)
    perimeter = 2 * (length + width)
        Return recPerimeter

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(recPerimeter(10, 20),60,"Tested recPerimeter on inputs 10 and 20")
            self.assertEqual(recPerimeter(1, 2),6,"Tested recPerimeter on inputs 1 and 2")
            self.assertEqual(recPerimeter(23.2, 12.3),71,"Tested recPerimeter on inputs 23.2 and 12.3")
            self.assertEqual(recPerimeter(3.0, 2),10.0,"Tested recPerimeter on inputs 3.0 and 2")

    myTests().main()

Let's look at the unit tests that were hidden.

.. activecode:: ut-ex-perimeterq-with-unit-test-vis
    :autograde: unittest

    Run the code below to see the unit tests again. However, now the unit tests are visible.
    ~~~~
    def recPerimeter(length, width):
        perimeter = 2 * (length + width)
        return perimeter

    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(recPerimeter(10, 20),60,"Tested recPerimeter on inputs 10 and 20")
            self.assertEqual(recPerimeter(1, 2),6,"Tested recPerimeter on inputs 1 and 2")
            self.assertEqual(recPerimeter(23.2, 12.3),71,"Tested recPerimeter on inputs 23.2 and 12.3")
            self.assertEqual(recPerimeter(3.0, 2),10.0,"Tested recPerimeter on inputs 3.0 and 2")

    myTests().main()


Look at the unit tests above and answer the questions below.

.. fillintheblank:: ut_fitb_test_class

    What is the class that is defined in the unit test code?

    - :myTests: This defines the class myTests
      :.*: What is the name after the class keyword?

.. fillintheblank:: ut_fitb_test_parent

    What class does the defined class inherit from?

    - :TestCaseGui: The parent is TestCaseGui
      :.*: What is the name in the () after the class name?

.. activecode:: ut-ex-compare-valuep-ac
    :autograde: unittest

    Run the code below to see what the unit tests do and then add another test to
    test the result when x is higher than y.
    ~~~~
    def checkValue(x, y):
        if x < y:
            return "lower"
        elif x == y:
            return "equal"
        else:
            return "higher"

    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def test_checkValue(self):
            self.assertEqual(checkValue(3, 5), "lower", 'checkValue(3, 5)')
            self.assertEqual(checkValue(5, 5), "equal", 'checkValue(5, 5)')

    myTests().main()

.. note::

   Unit tests in this ebook must include the line ``from unittest.gui import TestCaseGui``
   and inherit from ``TestCaseGui``.  Outside of this
   ebook you should include the line ``import unittest`` and inherit from ``unittest.TestCase``.

Unit tests inherit from a class that includes several methods. As you can see
from the code above one of the methods is ``assertEqual`` which returns the result of ``a == b``.

.. dragndrop:: ut_method_def_dnd
    :practice: T
    :feedback: Read this page and try again.
    :match_1: assertTrue(x)||| x == True
    :match_2: assertIn(a, b)|||a in b
    :match_3: assertIsInstance(a, b)|||isinstance(a, b)
    :match_4: assertEqual(a, b)|||a == b
    :match_5: assertNotEqual(a, b)|||a != b
    :match_6: assertFalse(x)||| x == False

    Drag each method to what it returns.

.. note::

   All of the assert methods can take a third parameter which is a string that explains what was tested.

Writing Unit Tests
-----------------------

To write a unit test you need to do the following.

#. Import the library (``from unittest.gui import TestCaseGui`` in this ebook and ``import unittest`` elsewhere)

#. Create a class that inherits from the correct class (``TestCaseGui`` in this ebook and ``unittest.TestCase`` elsewhere )

#. Optionally create a ``setup`` method which is called before *every* test method is run

#. Create one or more methods that start with ``test`` to test different things in your code

   * Test one or more results using ``assert`` methods such as ``self.assertEqual``

#. Optionally create a ``tearDown`` method which is called after *every* test method is run

#. Run the tests using ``*ClassName*.main()`` in the ebook and otherwise ``unittest.main()``

.. activecode:: ut-ex-car-class-unit-tests
    :autograde: unittest

    Fix the code below to run and notice the test results.
    ~~~~
    class Car:

        def __init__(self, make, model, color):
            self.make = make
            model = model
            self.color = color

        def __str__(self)
            return f"make: {self.make}, model: {self.model}, color: {self.color}"

        def set_color(self, new_color):
            self.color = new_color

    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def setUp():
            self.c1 = Car("Ford", "Volt", "blue")
            self.c2 = Car("Toyota", "Prius", "red")

        def testInitAndStr(self):
            self.assertEqual(c1.__str__(), 'make: Ford, model: Volt, color: blue', "Testing __init__ and __str__ method on c1")
            self.assertEqual(self.c2.__str__(), 'make: Toyota, model: Prius, color: red', "Testing __init__ and __str__ method on c1")

        def testSetColor(self):
            # try to set the color
            self.c1.set_color("white")

            # check that it changed to the new color
            self.assertEqual(self.c1.color, "white", "Testing set color on c1")

    myTests().main()

Modify the code above to add a method in the ``Car`` class to set (change) the model name and add a test method to test that the new method works.


.. parsonsprob:: ut-pp-test-lower
   :adaptive:
   :numbered: left

   Put the code in order to create tests for a Person class initials method that returns the first letter
   from the first name followed by the first letter of the last name. The Person class initializer
   takes the person's first name and last name.  First define a ``setUp`` method to
   create two Person objects and then define the ``test_initials`` method.
   -----
   import unittest
   =====
   class TestPerson(unittest.TestCase):
   =====
   class TestPerson(TestCase): #paired
   =====
       def setUp(self):
   =====
       def setUp(): #paired
   =====
           self.p1 = Person("Lionel", "Roberts")
   =====
           self.p2 = Person("Kayla", "Wig")
   =====
           p2 = Person("Kayla", "Wig") #paired
   =====
       def test_initials(self):
   =====
           self.assertEqual(self.p1.initials(), "LR", "p1.initials()")
           self.assertEqual(self.p2.initials(), "KW", "p2.initials()")