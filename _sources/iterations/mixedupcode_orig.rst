Mixed-up code Questions
-----------------------

.. parsonsprob:: itr_countup_str_muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the function, ``countup_str(start)``, to return a string with the numbers from ``1`` to ``end``.  For example, ``countup_str(5)`` would return ``"12345"``.
   -----
   def countup_str(end):
   =====
       out = ""
   =====
       for i in range(1, end + 1):
   =====
       for i in range(1, end): #paired
   =====
           out = out + str(i)
   =====
           out = out + i #paired
   =====
       return out

.. activecode::  itr_countup_str_ac
    :practice: T
    :autograde: unittest

    Write the function, ``countup_str(start)``, to return a string with the numbers from ``1`` to ``end``.  For example, ``countup_str(5)`` would return ``"12345"``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(countup_str(5),"12345", 'countup_str(5)')
            self.assertEqual(countup_str(0),"", 'countup_str(0)')
            self.assertEqual(countup_str(1),"1", 'countup_str(3)')
            self.assertEqual(countup_str(3),"123", 'countup_str(6)')
            self.assertEqual(countup_str(9),"123456789", 'countup_str(9)')


    myTests().main()

.. parsonsprob:: itr_reverse_muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the function, ``reverse(s)``, to return a string with the characters in the string ``s`` reversed.  For example, ``reverse("Hello")`` would return ``"olleH"``.
   -----
   def reverse(s):
   =====
       out = ""
   =====
       for i in range(len(s) - 1, -1, -1):
   =====
       for i in range(len(s), -1, -1): #paired
   =====
           out = out + s[i]
   =====
           out = s[i] + out #paired
   =====
       return out

.. activecode::  itr_reverse_ac
    :practice: T
    :autograde: unittest

    Write the function, ``reverse(s)``, to return a string with the characters in the string ``s`` reversed.  For example, ``reverse("Hello")`` would return ``"olleH"``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(reverse("Hello"),"olleH", 'reverse("Hello")')
            self.assertEqual(reverse("Wrong"),"gnorW", 'reverse("Wrong")')
            self.assertEqual(reverse("a"),"a", 'reverse("a")')
            self.assertEqual(reverse("ab"),"ba", 'reverse("ab")')
            self.assertEqual(reverse("12"),"21", 'reverse("12")')

    myTests().main()


.. parsonsprob:: itr_countdown_str_muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the function, ``countdown_str(start)``, to return a string with the numbers from ``start`` to ``0``.  For example, ``countdown_str(5)`` would return ``"543210"``.
   -----
   def countdown_str(start):
   =====
       out = ""
   =====
       for i in range(start, -1, -1):
   =====
       for i in range(start, 0, -1): #paired
   =====
           out = out + str(i)
   =====
           out = out + i #paired
   =====
       return out

.. activecode::  itr_countdown_str_ac
    :practice: T
    :autograde: unittest

    Write the function, ``countdown_str(start)``, to return a string with the numbers from ``start`` to ``0``.  For example, ``countdown_str(5)`` would return ``"543210"``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(countdown_str(5),"543210", 'countdown_str(5)')
            self.assertEqual(countdown_str(0),"0", 'countdown_str(0)')
            self.assertEqual(countdown_str(3),"3210", 'countdown_str(3)')
            self.assertEqual(countdown_str(6),"6543210", 'countdown_str(6)')
            self.assertEqual(countdown_str(9),"9876543210", 'countdown_str(9)')


    myTests().main()

.. parsonsprob:: itr_odd_sum_muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the function, ``odd_sum(start, increment, end)``, to return the sum of all of the odd numbers between  ``start`` (inclusive) and ``end`` (exclusive) using a range with ``increment``. For example, if ``start`` is 1, ``increment`` is 2, and ``end`` is 6, the returned sum
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


.. activecode::  itr_odd_sum_ac_v2
    :practice: T
    :autograde: unittest

    Write the function, ``odd_sum(start, increment, end)``, to return the sum of all of the odd numbers between  ``start`` (inclusive) and ``end`` (exclusive) using a range with ``increment``. For example, if ``start`` is 1, ``increment`` is 2, and ``end`` is 6, the returned sum
    should be (1 + 3 + 5) which is 9.
    ~~~~
    def odd_sum(start, increment, end):
        sum = 0
        # write code here
    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(odd_sum(1, 2, 5), 4, 'odd_sum(1, 2, 5)')
            self.assertEqual(odd_sum(1, 2, 30), 225, 'odd_sum(1, 2, 30)')
            self.assertEqual(odd_sum(2, 3, 100), 1650, 'odd_sum(2, 3, 100)')
            self.assertEqual(odd_sum(-1, 4, 30), 104, 'odd_sum(-1, 4, 30)')

    myTests().main()



.. parsonsprob:: itr_sum_of_range_muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the function, ``sum_of_range(start, end)``, to return the sum of all numbers between the ``start`` and ``end`` inclusive. For example, if ``start`` is 0 and ``end`` is 5, the returned sum should be (0 + 1 + 2 + 3 + 4 + 5) which is 15.
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


.. activecode::  itr_sum_of_range_ac
    :practice: T
    :autograde: unittest

    Write the function, ``sum_of_range(start, end)``, to return the sum of all numbers between the ``start`` and ``end`` inclusive. For example, if ``start`` is 0 and ``end`` is 5, the returned sum should be (0 + 1 + 2 + 3 + 4 + 5) which is 15.
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

.. parsonsprob:: itr_count_vowels_muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the function, ``count_vowels(s)``, to return a count of the vowels (aeiou) in the string ``s``.   For example, ``count_vowels("careful")`` would return ``3``.
   -----
   def count_vowels(s):
   =====
       count = 0
       vowels = "aeiou"
   =====
       for ch in s:
   =====
           if ch in vowels:
   =====
           if s in vowels: #paired
   =====
               count += 1
   =====
       return count
   =====
       return Count #paired

.. activecode::  itr_count_vowels_ac
    :practice: T
    :autograde: unittest

    Write the function, ``count_vowels(s)``, to return a count of the vowels (aeiou) in the string ``s``.   For example, ``count_vowels("careful")`` would return ``3``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(count_vowels("careful"), 3, 'count_vowels("careful")')
            self.assertEqual(count_vowels("my"), 0, 'count_vowels("my")')
            self.assertEqual(count_vowels("ear"), 2, 'count_vowels("ear")')
            self.assertEqual(count_vowels("sue"), 2, 'count_vowels("sue")')
            self.assertEqual(count_vowels("a"), 1, 'count_vowels("a")')



    myTests().main()

.. parsonsprob:: itr_copy_till_gt_value_muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the function, ``copy_till_gt_value(s,value)``, to return a copy of the string ``s`` with all the digits in the string until it finds a digit greater than the passed ``value``.  For example,
   ``copy_till_gt_value("1357", 5)`` would return "135".
   -----
   def copy_till_gt_value(s, value):
   =====
       out = ""
       i = 0
       while i < len(s):
   =====
           ch = s[i]
   =====
           ch = s(i) #paired
   =====
           int_ch = int(ch)
   =====
           int_ch = integer(ch) #paired
   =====
           if int_ch > value:
   =====
           if int_ch >= value: #paired
   =====
               return out
   =====
           out += ch
   =====
           i += 1
   =====
       return out



.. activecode::  itr_copy_till_gt_value_ac
    :practice: T
    :autograde: unittest

    Write the function, ``copy_till_gt_value(s,value)``, to return a copy of the string ``s`` with all the digits in the string until it finds a digit greater than the passed ``value``.  For example,
    ``copy_till_gt_value("1357", 5)`` would return "135".
    ~~~~


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(copy_till_gt_value("1357",5),"135", 'copy_till_gt_value("1357",5)')
            self.assertEqual(copy_till_gt_value("1357",4),"13", 'copy_till_gt_value("1357",4)')
            self.assertEqual(copy_till_gt_value("1357",3),"13", 'copy_till_gt_value("1357",3)')
            self.assertEqual(copy_till_gt_value("1357",8),"1357", 'copy_till_gt_value("1357",8)')
            self.assertEqual(copy_till_gt_value("1357",0),"", 'copy_till_gt_value("1357",0)')

    myTests().main()

.. parsonsprob:: itr_count_last2_muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the function, ``count_last2(s)``, to return a count of the number of times the last two characters appears in the string ``s``. If there are less than 2 characters in ``s`` return 0. For example, ``count_last2("hixxhi")`` returns 2, ``count_last2("axxxaaxx")`` returns 3, and ``count_last2('x')`` returns 0.
   -----
   def count_last2(s):
   =====
       if  len(s) < 2:
   =====
           return 0
   =====
       count = 0
       last2 = s[-2:]
   =====
       for i in range(len(s)):
   =====
           curr = s[i:i+2]
   =====
           curr = s[i:i+1] #paired
   =====
           if curr == last2
   =====
           if curr = last2 #paired
   =====
               count += 1
   =====
       return count

.. activecode::  itr_count_last2_ac
    :practice: T
    :autograde: unittest

    Write the function, ``count_last2(s)``, to return a count of the number of times the last two characters appears in the string ``s``.  If there are less than 2 characters in ``s`` return 0. For example, ``count_last2("hixxhi")`` returns 2, ``count_last2("axxxaaxx")`` returns 3, and ``count_last2('x')`` returns 0.
    ~~~~


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(count_last2("axxxaaxx"), 3, 'count_last2("axxxaaxx")')
            self.assertEqual(count_last2("hixxhi"), 2, 'count_last2("hixxhi")')
            self.assertEqual(count_last2("axx"), 1, 'count_last2("axx")')
            self.assertEqual(count_last2("xxx"), 2, 'count_last2("xxx")')
            self.assertEqual(count_last2("x"), 0, 'count_last2("x")')
            self.assertEqual(count_last2("xaxxaxaaxx"), 2, 'count_last2("xaxxaxaaxx")')


    myTests().main()


.. parsonsprob:: itr_list_to_5_muc
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

.. activecode::  itr_list_to_5_ac
    :practice: T
    :autograde: unittest

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






.. parsonsprob:: itr_water_quality_muc
   :numbered: left
   :practice: T
   :adaptive:

   Create the function, ``water_quality(pHvalues)``, to return a float for the average pH of water samples in the list
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

.. activecode::  itr_water_quality_ac
    :practice: T
    :autograde: unittest

    Write the function, ``water_quality(pHvalues)``, to return a float for the average pH of water samples in the list
    ``pHvalues``. For example, if ``pHvalues`` is [7.0, 8.2, 6.7, 7.5, 8.0, 7.2], then the function should return 7.433333333333334.
    ~~~~

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertAlmostEqual(water_quality([7.0, 8.2, 6.7, 7.5, 8.0, 7.2]), 7.433333333333334, 2, 'water_quality([7.0, 8.2, 6.7, 7.5, 8.0, 7.2], 6)')
            self.assertAlmostEqual(water_quality([7, 8, 6, 7, 8, 7]), 7.166666666667, 2, 'water_quality([7, 8, 6, 7, 8, 7])')


    myTests().main()
