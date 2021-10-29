Mixed-up code Questions
-----------------------

.. parsonsprob:: ch5ex1muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the function, ``list_to_5(n)``, so that while the integer ``n`` is less than ``5``, add ``n`` to a list to return and increment ``n`` by ``1``.
   Then return the list. For example, if ``n`` is 0, then the function should return ``[0, 1, 2, 3, 4]``.
   -----
   def list_to_5(n):
   =====
       list = []
   =====
       while n < 5:
   =====
       while n > 5: #paired
   =====
           list.append(n)
   =====
           n += 1
   =====
       return list

.. activecode::  ch5ex1muc-ac

    Write the function, ``list_to_5(n)``, so that while the integer ``n`` is less than 5, add ``n`` to a list to return and increment ``n`` by ``1``.
    Then return the list. For example, if ``n`` is 0, then the function should return ``[0, 1, 2, 3, 4]``.
    ~~~~
    def list_to_5(n):
        # write code here

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(list_to_5(2), [2, 3, 4], 'list_to_5(2)')
            self.assertEqual(list_to_5(6), [], 'list_to_5(6)')
            self.assertEqual(list_to_5(4), [4], 'list_to_5(4)')

    myTests().main()


.. parsonsprob:: ch5ex2muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the function, ``numbers(accum)``, so that ``accum``, with ``accum`` being any integer less than 6, increases its
   value by 2. Then, return ``accum``. For example, if ``accum`` is 0, the function should increase its value by 2 and return 6.
   -----
   def numbers(accum):
   =====
       while accum < 6:
   =====
       while accum < 7: #paired
   =====
           accum = accum + 2
   =====
       return accum



.. activecode::  ch5ex2muc-ac

    Write the function, ``numbers(accum)``, so that ``accum``, with ``accum`` being any integer less than 6, increases its
    value by 2. Then, return ``accum``. For example, if ``accum`` is 0, the function should increase its value by 2 and return 6.
    ~~~~
    def numbers(accum):
        # write code here

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(numbers(4), 6, 'numbers(4)')
            self.assertEqual(numbers(6), 6, 'numbers(6)')
            self.assertEqual(numbers(7), 7, 'numbers(7)')
            self.assertEqual(numbers(0), 6, 'numbers(0)')

    myTests().main()


.. parsonsprob:: ch5ex3muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the following function, ``skipCount(start, increment, stop)``, so that ``start`` is increased by ``increment`` until it hits
   ``stop`` with ``start`` being the starting integer, ``increment`` being the number the integers are incrementing by, and ``stop`` being the ending integer.
   Then return an integer for the last number. For example, if ``start`` is 0, ``increment`` is 2, and ``stop`` is 8, the function should increase by 2 and
   then return 8.
   -----
   def skipCount(start, increment, stop):
   =====
       counter = start
   =====
       while counter < stop:
   =====
           counter += increment
   =====
       return counter


.. activecode::  ch5ex3muc-ac

    Write the following function, ``skipCount(start, increment, stop)``, so that ``start`` is increased by ``increment`` until it hits
    ``stop`` with ``start`` being the starting integer, ``increment`` being the number the integers are incrementing by, and ``stop`` being the ending integer.
    Then return an integer for the last number. For example, if ``start`` is 0, ``increment`` is 2, and ``stop`` is 8, the function should increase by 2 and
    then return 8.
    ~~~~
    def skipCount(start, increment, stop):
        counter = start

        # write code here

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(skipCount(0,2,8), 8, 'skipCount(0,2,8)')
            self.assertEqual(skipCount(0,2,9), 8, 'skipCount(0,2,9)')
            self.assertEqual(skipCount(0,2,7), 6, 'skipCount(0,2,7)')

    myTests().main()


.. parsonsprob:: ch5ex4muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the following function, ``loopMe(first, second)``, to infinitely loop using the variables ``first`` and ``second`` with one being greater
   than the other and then return a boolean, 'True'. For example, if ``first`` is 4 and ``second`` is 3, then the function should infintely loop
   and return 'True'.
   -----
   def loopMe(first, second):
   =====
       while first > second:
   =====
       while first == second: #paired
   =====
           return True
   =====
   loopMe(7, 4)
   =====
   loopMe(1, 3) #paired


.. activecode::  ch5ex4muc-ac

    Write the following function, ``loopMe(first, second)``, to infinitely loop using the variables ``first`` and ``second`` with one being greater
    than the other and then return a boolean, 'True'. For example, if ``first`` is 4 and ``second`` is 3, then the function should infintely loop
    and return 'True'.
    ~~~~
    def loopMe(first,second):
        # write code here

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(loopMe(4,3), 'True', 'loopMe(4,3)')

    myTests().main()


.. parsonsprob:: ch5ex5muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the following function, ``calculation(numbers)``, to return a float of the average of the list of numbers by taking a list ``numbers``,
   summing the numbers, and then dividing the sum by the length of the list, using a for loop. For example, if ``numbers`` is [90, 94, 85, 78, 87, 98], then the
   function should return the float 88.66666666666667.
   -----
   def calculation(numbers):
   =====
       sum = 0
   =====
       for number in numbers:
   =====
           sum = sum + number
   =====
           sum = sum - number #paired
   =====
       return sum/len(numbers)

.. activecode::  ch5ex5muc-ac

    Write the following function, ``calculation(numbers)``, to return a float of the average of the list of numbers by taking a list ``numbers``,
    summing the numbers, and then dividing the sum by the length of the list, using a for loop. For example, if ``numbers`` is [90, 94, 85, 78, 87, 98], then the
    function should return the float 88.66666666666667.
    ~~~~
    def calculation(numbers):
        sum = 0
        # write code here

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertAlmostEqual(calculation([90, 94, 85, 78, 87, 98]), 88.66666666666667, 2, 'calculation([90, 94, 85, 78, 87, 98])')
            self.assertAlmostEqual(calculation([65, 69, 84, 99, 88, 98]), 83.8333333333333, 2, 'calculation([65, 69, 84, 99, 88, 98])')

    myTests().main()


.. parsonsprob:: ch5ex6muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the following function, ``sum_of_range(start, end)``, to return an integer for the sum of all numbers between two numbers of your choosing using by using the
   variables ``start`` followed by ``end``. For example, if ``start`` is 0 and ``end`` is 5, the returned sum should be (0 + 1 + 2 + 3 + 4 + 5) which is 15.
   -----
   def sum_of_range(start, end):
   =====
       sum = 0
   =====
       for number in range(start, end):
   =====
           sum = sum + number
   =====
           sum = sum + numbers #paired
   =====
       return(sum)


.. activecode::  ch5ex6muc-ac

    Write the following function, ``sum_of_range(start, end)``, to return an integer for the sum of all numbers between two numbers of your choosing using by using the
    variables ``start`` followed by ``end``. For example, if ``start`` is 0 and ``end`` is 5, the returned sum should be (0 + 1 + 2 + 3 + 4 + 5) which is 15.
    ~~~~
    def sum_of_range(start, end):

        # write code here
    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(sum_of_range(0,5), 15, 'sum_of_range(0,5)')
            self.assertEqual(sum_of_range(2,5), 14, 'sum_of_range(2,5)')
            self.assertEqual(sum_of_range(0,31), 465, 'sum_of_range(0,31)')
            self.assertEqual(sum_of_range(0,20), 190, 'sum_of_range(0,20)')
            self.assertEqual(sum_of_range(0,101), 5050, 'sum_of_range(0,101)')

    myTests().main()


.. parsonsprob:: ch5ex7muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the following function, ``odd_sum(start, increment, end)``, to return the sum of all odd numbers between two numbers of your choosing
   using the variables ``start``, ``increment``, and ``end``. For example, if ``start`` is 1, ``increment`` is 2, and ``end`` is 6, the returned sum
   should be (1 + 3 + 5) which is 9.
   -----
   def odd_sum(start, increment, end):
   =====
       sum = 0
   =====
       for number in range(start, end, increment):
   =====
       for numbers in range(start, increment, end): #paired
   =====
           sum = sum + number
   =====
       return sum


.. activecode::  ch5ex7muc-ac

    Write the following function, ``odd_sum(start, increment, end)``, to return the sum of all odd numbers between two numbers of your choosing
    using the variables ``start``, ``increment``, and ``end``. For example, if ``start`` is 1, ``increment`` is 2, and ``end`` is 5, the returned sum
    should be (1 + 3 + 5) which is 9
    ~~~~
    def odd_sum(start, increment, end):
        sum = 0
        # write code here
    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(odd_sum(1, 2, 5), 9, 'odd_sum(1, 2, 5)')
            self.assertEqual(odd_sum(1, 2, 30), 225, 'odd_sum(1, 2, 30)')
            self.assertEqual(odd_sum(2, 3, 100), 1650, 'odd_sum(2, 3, 100)')
            self.assertEqual(odd_sum(-1, 4, 30), 104, 'odd_sum(-1, 4, 30)')

    myTests().main()


.. parsonsprob:: ch5ex8muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the following function, ``multiple_three(num)``, to return the sum of every multiple of 3 between 3 and and a number of your choosing using ``num`` and
   return an integer for the sum. For example, if ``num`` is 37, the function should return ``234``.
   -----
   def multiple_three(num):
   =====
       sum = 0
       numbers = range(3, num, 3)
   =====
       for number in numbers:
   =====
           sum = sum + number
   =====
           sum = sum - number #paired
   =====
       return sum

.. activecode::  ch5ex8muc-ac

    Write the following function, ``multiple_three(num)``, to return the sum of every multiple of 3 between 3 and and a number of your choosing using ``num`` and
    return an integer for the sum. For example, if ``num`` is 37, the function should return ``234``.
    ~~~~
    def multiple_three(num):
        sum = 0
        # write code here
    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(multiple_three(37), 234, 'multiple_three(37)')
            self.assertEqual(multiple_three(101), 1683, 'multiple_three(101)')
            self.assertEqual(multiple_three(19), 63, 'multiple_three(19)')

    myTests().main()

.. parsonsprob:: ch5ex9muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the following function, ``water_quality(pHvalues)``, to return a float for the average pH of water samples by using a list
   ``pHvalues``. For example, if ``pHvalues`` is [7.0, 8.2, 6.7, 7.5, 8.0, 7.2], then the function should return 7.433333333333334.
   -----
   def water_quality(pHvalues):
   =====
       total = 0
   =====
       for number in pHvalues:
   =====
           total = total + number
   =====
           total = total * number #paired
   =====
       average = total / len(pHvalues)
   =====
       return average

.. activecode::  ch5ex9muc-ac

    Write the following function, ``water_quality(pHvalues)``, to return a float for the average pH of water samples by using a list
    ``pHvalues``. For example, if ``pHvalues`` is [7.0, 8.2, 6.7, 7.5, 8.0, 7.2], then the function should return 7.433333333333334.
    ~~~~
    def water_quality(pHvalues):
        total = 0
        # write code here
    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertAlmostEqual(water_quality([7.0, 8.2, 6.7, 7.5, 8.0, 7.2]), 7.433333333333334, 2, 'water_quality([7.0, 8.2, 6.7, 7.5, 8.0, 7.2], 6)')
            self.assertAlmostEqual(water_quality([7, 8, 6, 7, 8, 7]), 7.166666666667, 2, 'water_quality([7, 8, 6, 7, 8, 7])')


    myTests().main()


.. parsonsprob:: ch5ex10muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the following function, ``countdown(counter)``, to start with a number of your choosing using the variable
   ``counter``, decrement it, and then return the last number. For example, if ``counter`` is 5, then the function
   should countdown from 5 and return 0.
   -----
   def countdown(counter):
   =====
       while counter > 0:
   =====
           counter = counter - 1
   =====
           counter = counter + 1 #paired
   =====
       return counter


.. activecode::  ch5ex10muc-ac

    Write the following function, ``countdown(counter)``, to start with a number of your choosing using the variable
    ``counter``, decrement it, and then return the last number. For example, if ``counter`` is 5, then the function
    should countdown from 5 and return 0.
    ~~~~
    def countdown(counter):
        # write code here
    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(countdown(5), 0, 'countdown(5)')
            self.assertEqual(countdown(3), 0, 'countdown(3)')
            self.assertEqual(countdown(7), 0, 'countdown(7)')

    myTests().main()
