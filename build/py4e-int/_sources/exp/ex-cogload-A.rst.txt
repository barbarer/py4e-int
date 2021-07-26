Questions for Cognitive Load Experiment - A
-----------------------------------------------------

Try to solve the following mixed up code problems. You can use the "Help Me" button
to make the problem easier if you have made at least three attempts to solve the
problem.  After you solve each problem, please answer the poll as well.

.. parsonsprob:: exp1_pp1a
   :adaptive:
   :numbered: left

   Put the blocks in order to define the function ``has22`` to return ``True`` if there are at least two items in the list nums that are adjacent and both equal to 2, otherwise return ``False``. For example, return ``True`` for ``has22([1, 2, 2])`` since there are two adjacent items equal to 2 (at index 1 and 2) and ``False`` for ``has22([2, 1, 2])`` since the 2’s are not adjacent.
   -----
   def has22(nums):
   =====
       for i in range(len(nums)-1):
   =====
       for i in range(len(nums)): #paired
   =====
           if nums[i] == 2 and num[i+1] == 2:
   =====
           if nums[i] == 2 and num[i-1] == 2: #paired
   =====
               return True
   =====
               return true #paired
   =====
       return False

.. poll:: exp1_pp1a_poll
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


.. activecode:: exp1_q2_write
   :autograde: unittest

   Finish the function to define ``countInRange`` that returns a count of the number of times that a ``target`` value appears in a list between the ``start`` and ``end`` indices (inclusive). For example, ``countInRange(1,2,4,[1, 2, 1, 1, 1, 1])`` should return 3 since there are three 1's between index 2 and 4 inclusive.
   ~~~~
   def countInRange(target, start, end, numList):

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(countInRange(2, 0, 2, [1, 2, 2]), 2, 'countInRange(2, 0, 2, [1, 2, 2])')
           self.assertEqual(countInRange(1, 2, 4, [1, 2, 1, 1, 1, 1]), 3, 'countInRange(1, 2, 4, [1, 2, 1, 1, 1, 1])')
           self.assertEqual(countInRange(1, 0, 4, [1, 2, 1, 1, 1, 1]), 4, 'countInRange(1, 0, 4, [1, 2, 1, 1, 1, 1])')
           self.assertEqual(countInRange(2, 1, 2, [1, 2, 2]), 2, 'countInRange(2, 1, 2, [1, 2, 2])')
           self.assertEqual(countInRange(3, 1, 2, [1, 2, 2]), 0, 'countInRange(3, 1, 2, [1, 2, 2])')
           self.assertEqual(countInRange(3, 1, 2, [3, 3, 3, 3]), 2, 'countInRange(3, 1, 2, [3, 3, 3, 3])')


   myTests().main()

.. poll:: exp1_q2_write_poll
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

.. parsonsprob:: exp1_pp3
   :adaptive:
   :numbered: left

   Put the blocks in order to define the function ``diffMaxMin`` to return the difference between the largest and smallest value in the passed list of numbers (``nums``). For example, ``diffMaxMin([1,2,3])`` should return ``2`` since the difference between 3 and 1 is 2.
   -----
   def diffMaxMin(nums):
   =====
   def diffMaxMin(nums) #paired
   =====
       large = max(nums)
       small = min(nums)
   =====
       return large - small
   =====
       return small - large #paired

.. poll:: exp1_pp3_poll
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

.. activecode:: exp1_q4_total_values
   :autograde: unittest

   Finish the function ``total_values`` that takes a dictionary (``dict``) and returns the total of the values in the dictionary. For example, ``total_dict_values({'red': 3, 'blue': 2, 'green’: 20})`` would return 25.

   ~~~~
   def total_values(dict):

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(total_values({'red':2, 'blue':3, 'green':20}),25, "total_values({'red':2, 'blue':3, 'green':20})")
           self.assertEqual(total_values({'a': 3}), 3, "total_values({'a': 3})")
           self.assertEqual(total_values({'a': 3, 'b': -5}), -2, "total_values({'a': 3, 'b': -5})")
           self.assertEqual(total_values({'a': 3, 'b': -3}), 0, "total_values({'a': 3, 'b': -3})")
           self.assertEqual(total_values({}), 0, "total_values({})")

   myTests().main()

.. poll:: exp1_q4_total_values_poll
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

.. parsonsprob:: exp1_q5_pp
   :adaptive:
   :numbered: left

   Put the blocks in order to define the function ``get_names`` that takes a list of dictionaries and returns a list of strings with the names from the dictionaries. The key for the first name is ``first`` and the key for the last name is ``last``. Return a list of the full names (first last) as a string. If the ``first`` or ``last`` key is missing in the dictionary use ``Unknown``.  For example, ``[{'first': 'Ann', 'last': 'Brown'}, {'first': 'Darius'}]`` should return ``['Ann Brown', 'Darius Unknown']``.
   -----
   def get_names(list_of_dict):
   =====
    name_list = []
   =====
    for p_dict in list_of_dict:
   =====
        first = p_dict.get('first', 'Unknown')
        last = p_dict.get('last', 'Unknown')
   =====
        first = p_dict.get('first', None)
        last = p_dict.get('last',  None) #paired
   =====
        name = first + " " + last
   =====
        name = first + last #paired
   =====
        name_list.append(name)
   =====
    return name_list

.. poll:: exp1_q5_pp_poll
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
