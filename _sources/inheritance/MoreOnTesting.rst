Group Work on Unit Tests
========================

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Content Learning Objectives**

*After completing this activity, students should be able to:*

* Use assert methods to test code (assertEqual and assertAlmostEqual, assertIsInstance)
* Test code that doesn't return a value

It is important to learn how to write good tests, this is especially true if other people will use your code, but it is also true when it is just for your own use.

Assert methods
---------------

..	index::
    single: assert methods
    single: assertEqual
    single: assertTrue
	  single: assertGreaterEqual
	  single: assertIn
	  single: assertIsInstance
    single: assertAlmostEquals

There are many assert methods that you can use in your tests.  See https://docs.python.org/3/library/unittest.html for the documentation.  You will mostly use
``assertEqual``, but here are a few others that are very useful.

+---------------------------+-------------------------------------------------------------------------------+
| Method                    | What the Method Tests                                                         |
+===========================+===============================================================================+
| assertEqual(a,b)          | a == b                                                                        |
+---------------------------+-------------------------------------------------------------------------------+
| assertTrue(x)             | x == True                                                                     |
+---------------------------+-------------------------------------------------------------------------------+
| assertGreater(a,b)        | a > b                                                                         |
+---------------------------+-------------------------------------------------------------------------------+
| assertGreaterEqual(a,b)   | a >= b                                                                        |
+---------------------------+-------------------------------------------------------------------------------+
| assertIn(a,b)             | a in b                                                                        |
+---------------------------+-------------------------------------------------------------------------------+
| assertIsInstance          | isinstance(a, b)                                                              |
+---------------------------+-------------------------------------------------------------------------------+
| assertAlmostEquals(a,b,p) | round(a-b, p) == 0, the default for p (num places after decimal point) is 7   |
+---------------------------+-------------------------------------------------------------------------------+

.. note ::

   All the assert methods also take an optional message (string) to display as the last parameter.

Writing Unit Tests
-------------------

When you create tests you want to test the usual things as well as edge cases (unusual things).  For example, when working with lists what is the result when the list is empty? When working with numbers be sure to test positive and negative numbers.

Read the description of the function below.  How many test cases do you need to test this function?


.. activecode:: ut_is_descending_ac

    Write a function ``is_descending(nums)`` that returns ``True`` if the numbers in the list ``nums`` are sorted in descending order and ``False`` otherwise. If the list ``nums`` has less than two numbers in it return ``True``.  For example, ``is_descending([3, 2, 1])`` should return ``True``, ``is_descending([1])`` should also return ``True``, and ``is_descending([1,2,3])`` should return ``False``.
    ~~~~
    def is_descending(nums):


    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(is_descending([3,2,1]),True,"is_descending([3,2,1])")
            self.assertEqual(is_descending([1]),True,"is_descending([1])")
            self.assertEqual(is_descending([1,2,3]),False,"is_descending([1,2,3]])")


    myTests().main()


Add a test to the ``testOne`` function above to test when ``nums`` is the empty list.  Add tests to check what happens when all numbers are descending except the first, middle, or last.  Add tests that check that it works for unusual values such as negative numbers or zero.

Read the description of the function below.  How many test cases do you need to test this function?

.. activecode:: ut_temp_category_ac

    Write a function ``temp_cat(value)`` that returns ``"low"`` if ``value`` is < 97, ``normal`` if ``value`` is >= 97 and <= 99, and ``high`` if ``value`` is > 99.  Add more test cases to check the three possible return values (``"low"``, ``"normal"``, and ``"high"``).
    ~~~~
    def temp_cat(value):


    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(temp_cat(96), "low", "temp_cat(96)")


    myTests().main()


Did you check when ``value`` equals 97 and is greater than 97?  Did you check when ``value`` was equal to 99?  What happens if ``value`` is a floating point number like 98.7 or 102.4?


Use ``assertEqual`` if the values you are comparing are integers or strings.  Use ``assertAlmostEqual`` if the values are floating point numbers (especially if they are calculated by the computer).  This method takes the two items to compare, the number of decimal places to compare (the default is 7), and a string describing the test.


.. activecode:: ut_item_and_order_add_total_ac

    Write a ``total`` method in the ``Order`` class to return the total of all of the prices for the items in the order.  Then add a test to ``testTotal`` to test the total of o2.
    ~~~~
    class Item:

        def __init__(self, name, price):
            self.name = name
            self.price = price

        def __str__(self):
            return f"{self.name}: {self.price}"

    class Order:

        def __init__(self, items):
            self.items = items


    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def setUp(self):
            i1 = Item("burger", 4.99)
            i2 = Item("fries", 2.99)
            i3 = Item("drink", 1.99)
            i4 = Item("fruit", 2.50)
            self.o1 = Order([i1, i2, i3])
            self.o2 = Order([i1, i3, i4])

        def testTotal(self):
            self.assertAlmostEqual(self.o1.total(), 9.97, 2, "o1.total()")


    myTests().main()

.. note ::

   Remember that the ``setUp`` method is called before every method of the class ``myTests`` and that the methods are not called in the order they are written.


It is easy to test a function or method that returns a value, but how do you test when no value is returned?  For example, the ``set_price`` method below doesn't return anything, but it should change the price.  You can test that the price changed from the original value as shown below.


.. activecode:: ut_item_set_name_set_price_ac

    Write a ``set_name`` method that changes the current object's name and then add a new method ``test_set_name`` to test ``set_name``.
    ~~~~
    class Item:

        def __init__(self, name, price):
            self.name = name
            self.price = price

        def __str__(self):
            return f"{self.name}: {self.price}"

        def set_price(self, new_price):
            self.price = new_price


    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def setUp(self):
            self.i1 = Item("burger", 4.99)
            self.i2 = Item("fries", 2.99)
            self.i3 = Item("drink", 1.99)
            self.i4 = Item("fruit", 2.50)

        def test_set_price(self):
            self.assertAlmostEqual(self.i1.price,4.99,2,"test i1 price before change")
            self.i1.set_price(5.29)
            self.assertAlmostEqual(self.i1.price,5.29,2,"test i1 price after change")


    myTests().main()


.. note ::

   To test a method or function in a test method be sure to call the method or function.


Testing with inheritance.  If you have asked someone to create a class that inherits from another class you might want to check that they specified the inheritance correctly.  You can use ``assertIsInstance`` to check if an object is an instance of a class.

.. activecode:: inheritance_pet_duck_ac
    :practice: T
    :nocodelens:

    Create a subclass of the ``Animal`` class named ``Duck`` that overrides the inherited ``noise`` method to return ``"Quack"``.  Also create a test to check that the ``noise`` method in ``Duck`` returns the correct string.
    ~~~~
    class Animal:

        def noise(self):
            return "Unknown"



    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            d = Duck()
            a = Animal()
            self.assertEqual(a.noise(), "Unknown", "Testing Pet noise")
            self.assertIsInstance(d, type(a), "Testing Duck inherits from Animal")

    myTests().main()



If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: unit_tests_group_work
   :limit: 3
