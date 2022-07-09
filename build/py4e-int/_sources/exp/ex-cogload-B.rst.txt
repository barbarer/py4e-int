Questions for Cognitive Load Experiment - B
-----------------------------------------------------

.. activecode:: exp1_q1_write
   :autograde: unittest

   Finish the function ``has22`` below to return ``True`` if there are at least two items in the list ``nums`` that are adjacent and both equal to 2, otherwise return ``False``.  For example, return ``True`` for ``has22([1, 2, 2])`` since there are two adjacent items equal to 2 (at index 1 and 2) and ``False`` for ``has22([2, 1, 2])`` since the 2's are not adjacent.

   ~~~~
   def has22(nums):

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(has22([1, 2, 2]), True, 'has22([1, 2, 2])')
           self.assertEqual(has22([1, 2, 1, 2]), False, 'has22([1, 2, 1, 2])')
           self.assertEqual(has22([2, 1, 2]), False, 'has22([2, 1, 2])')
           self.assertEqual(has22([2, 2, 1]), True, 'has22([2, 2, 1])')
           self.assertEqual(has22([3, 4, 2]), False, 'has22([3, 4, 2])')
           self.assertEqual(has22([2]), False, 'has22([2])')
           self.assertEqual(has22([]), False, 'has22([])')
           self.assertEqual(has22([3, 3, 1]), False, 'has22([3, 3, 1])')
           self.assertEqual(has22([1, 4, 4]), False, 'has22([1, 4, 4])')

   myTests().main()

.. poll:: exp1_q1_write_poll
    :allowcomment:
    :option_1: Very, very low mental effort
    :option_2: Very low mental effort
    :option_3: Low mental effort
    :option_4: Rather low mental effort
    :option_5: Neither low nor high mental effort
    :option_6: Rather high mental effort
    :option_7: High mental effort
    :option_8: Very high mental effort
    :option_9: Very, very high mental effort
    :results: instructor

    In solving the preceding problem I invested:

.. parsonsprob:: Count_Target_In_Range_Order
   :adaptive:
   :numbered: left

   Put the code in order to define ``countInRange`` that returns a count of the number of times that a ``target`` value appears in a list between the ``start`` and ``end`` indices (inclusive).  For example, ``countInRange(1,2,4,[1, 2, 1, 1, 1, 1])`` should return ``3`` since there are three 1's between index 2 and 4 inclusive.
   -----
   def countInRange(target, start, end, numList):
   =====
       count = 0
   =====
       count = 1 #paired
   =====
       for index in range(start, end+1):
   =====
       for index in range(start, end): #paired
   =====
           current = numList[index]
   =====
           current = numList[start] #paired
   =====
           if current == target:
   =====
           if index == target: #paired
   =====
               count = count + 1
   =====
               count++ #paired
   =====
       return count


.. poll:: Count_Target_In_Range_Order_poll
    :allowcomment:
    :option_1: Very, very low mental effort
    :option_2: Very low mental effort
    :option_3: Low mental effort
    :option_4: Rather low mental effort
    :option_5: Neither low nor high mental effort
    :option_6: Rather high mental effort
    :option_7: High mental effort
    :option_8: Very high mental effort
    :option_9: Very, very high mental effort
    :results: instructor

    In solving the preceding problem I invested:

.. activecode:: exp1_q3_write
   :autograde: unittest

   Finish the function ``diffMaxMin`` to return the difference between the largest and smallest value in the passed list of numbers (``nums``). For example, ``diffMaxMin([1,2,3])`` should return 2 since the difference between 3 and 1 is 2.

   ~~~~
   def diffMaxMin(nums):

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(diffMaxMin([1, 2, 3]), 2, 'diffMaxMin([1, 2, 3])')
           self.assertEqual(diffMaxMin([10, 20, 30]), 20, 'diffMaxMin([10, 20, 30])')
           self.assertEqual(diffMaxMin([1, 10]), 9, 'diffMaxMin([1 , 10])')
           self.assertEqual(diffMaxMin([10, 1]), 9, 'diffMaxMin([-10 , 1])')
           self.assertEqual(diffMaxMin([4, 1, 10]), 9, 'diffMaxMin([4, 1 , 10])')
           self.assertEqual(diffMaxMin([4, -10, 1]), 14, 'diffMaxMin([4, -10 , 1])')



   myTests().main()

.. poll:: exp1_q3_write_poll
    :allowcomment:
    :option_1: Very, very low mental effort
    :option_2: Very low mental effort
    :option_3: Low mental effort
    :option_4: Rather low mental effort
    :option_5: Neither low nor high mental effort
    :option_6: Rather high mental effort
    :option_7: High mental effort
    :option_8: Very high mental effort
    :option_9: Very, very high mental effort
    :results: instructor

    In solving the preceding problem I invested:


.. parsonsprob:: Total_Dict_Values_PP
   :adaptive:
   :numbered: left

   Put the code in order to define ``total_values`` that takes a dictionary (``dict``) and returns the total of the values in the dictionary.  For example, ``total_values({'red': 3, 'blue': 2, 'green': 20})`` would return ``25``.
   -----
   def total_values(dict):
   =====
   def total_values(): #paired
   =====
       total = 0
   =====
       for key in dict:
   =====
       for key in dict #paired
   =====
           total += dict[key]
   =====
           total += key #paired
   =====
       return total

.. poll:: Total_Dict_Values_PP_poll
    :allowcomment:
    :option_1: Very, very low mental effort
    :option_2: Very low mental effort
    :option_3: Low mental effort
    :option_4: Rather low mental effort
    :option_5: Neither low nor high mental effort
    :option_6: Rather high mental effort
    :option_7: High mental effort
    :option_8: Very high mental effort
    :option_9: Very, very high mental effort
    :results: instructor

    In solving the preceding problem I invested:

.. activecode:: exp1_q5_write
   :autograde: unittest

   Finish the function ``get_names`` that takes a list of dictionaries and returns a list of strings with the names from the dictionaries.  The key for the first name is 'first' and the key for the last name is 'last'.  Return a list of the full names (first last) as a string.  If the 'first' or 'last' key is missing in the dictionary use 'Unknown'.  For example, ``[{'first': 'Ann', 'last': 'Brown'}, {'first': 'Darius'}]`` should return ``['Ann Brown', 'Darius Unknown']``..

   ~~~~
   def get_names(d_list):

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           d1 = {'first': 'Tsi', 'last': 'Choi'}
           d2 = {'first': 'Joy', 'last': 'Ali'}
           d3 = {'first': 'Jose', 'last': 'Capo'}
           d4 = {'first': 'Malik'}
           d5 = {'last': 'Owens'}
           d_l1 = [d1, d2]
           d_l2 = [d3]
           d_l3 = [d4]
           d_l4 = [d5]
           self.assertEqual(get_names(d_l1), ['Tsi Choi', 'Joy Ali'], "get_names([{'first': 'Tsi', 'last': 'Choi'}, {'first': 'Joy', 'last': 'Ali'}])")
           self.assertEqual(get_names(d_l2), ['Jose Capo'], "get_names([{'first': 'Jose', 'last': 'Capo'}])")
           self.assertEqual(get_names(d_l3), ['Malik Unknown'], "get_names([{'first': 'Malik'}])")
           self.assertEqual(get_names(d_l4), ['Unknown Owens'], "get_names([{'last': 'Owens'}])")


   myTests().main()


.. poll:: exp1_q5_write_poll
    :allowcomment:
    :option_1: Very, very low mental effort
    :option_2: Very low mental effort
    :option_3: Low mental effort
    :option_4: Rather low mental effort
    :option_5: Neither low nor high mental effort
    :option_6: Rather high mental effort
    :option_7: High mental effort
    :option_8: Very high mental effort
    :option_9: Very, very high mental effort
    :results: instructor

    In solving the preceding problem I invested:
