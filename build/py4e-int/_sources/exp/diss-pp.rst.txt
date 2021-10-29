=====================
Experiment 1 2021
=====================

Thank you for participating in this experiment!  Please try to answer each
question below to the best of your ability.  Start with pretest problems 1 and 2 and
then do the practice and then do the posttest problems 1 and 2.

Pretest Problem 1
-------------------

Try to solve the following fix code problem.  You have five minutes to try to
solve it.  It is okay if you can't solve it, you will earn credit for trying to
solve it.

Click on the "Start" button to show the problem.

.. timed:: pre-exa-1-pp
   :timelimit: 5

   .. activecode:: remove_duplicates_fix_timed-pp
      :autograde: unittest

      Fix the code below to remove all adjacent duplicate values in the passed list. For example, ``removeDups([5, 5, 1])`` returns ``[5, 1]`` and ``removeDups([1, 1, 2, 2, 3, 3, 3, 5, 6, 5, 6])`` returns ``[1, 2, 3, 5, 6, 5, 6]``.
      ~~~~
      def removeDups(a_list):
          prev = a_list[0]
          index = 0
          while index < len(a_list) - 1:
              if a_list[index] = prev:
                  a_list.pop(index)
              else:
                  prev = a_list[index]
              index -= 1
              return a_list

      print(removeDups([5, 5, 1]))
      print(removeDups([1, 1, 2, 2, 3, 3, 3, 5, 6, 5, 6]))
      ====
      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

          def testOne(self):
              self.assertEqual(removeDups([5, 5, 1]), [5, 1], 'removeDups([5, 5, 1)]')
              self.assertEqual(removeDups([1, 1, 2, 2, 3, 3, 3, 5, 6, 5, 6]), [1, 2, 3, 5, 6, 5, 6], 'removeDups([1, 1, 2, 2, 3, 3, 3, 5, 6, 5, 6])')
              self.assertEqual(removeDups([1, 2, 3, 3]), [1, 2, 3], 'removeDups([1, 2, 3, 3)]')
              self.assertEqual(removeDups([5, 3, 1]), [5, 3, 1], 'removeDups([5, 3, 1)]')
              self.assertEqual(removeDups([5, 5, 5]), [5], 'removeDups([5, 5, 5)]')
              self.assertEqual(removeDups([5, 1, 1]), [5, 1], 'removeDups([5, 1, 1)]')
              self.assertEqual(removeDups([5, 1, 5]), [5, 1, 5], 'removeDups([5, 1, 5)]')
              self.assertEqual(removeDups([2, 3, 4, 3]), [2, 3, 4, 3], 'removeDups([2, 3, 4, 3)]')
              self.assertEqual(removeDups([2, 2]), [2], 'removeDups([2, 2)]')
              self.assertEqual(removeDups([2]), [2], 'removeDups([2]')

      myTests().main()

Click on the "Finish Exam" button shown before the question when you are done with the above question
and then answer the poll below.

.. poll:: remove_duplicates_fix_timed_poll-pp
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


Pretest Problem 2
-------------------

Try to solve the following fix code problem.  You have five minutes to try to
solve it.  It is okay if you can't solve it, you will earn credit for trying to
solve it.

Click on the "Start" button to show the problem.

.. timed:: pre-exa-2-pp
   :timelimit: 5

   .. activecode:: adjacentTwos_fix_timed-pp
      :autograde: unittest

      Fix the function ``adjacentTwos`` below to return True if there are at least two adjacent 2's in list ``nums``, otherwise return False.  For example, return ``True`` for ``adjacentTwos([1, 2, 2])`` since there are two adjacent items equal to 2 (at index 1 and 2) and ``False`` for ``adjacentTwos([2, 1, 2])`` since the 2's are not adjacent.

      ~~~~
      def adjacentTwos(nums):
          i = 1
          while i < nums:
              if nums[i] = 2 and nums[i - 2] == 2:
                 return true
              i += 1
              return False

      print(adjacentTwos([1, 2, 2]))
      print(adjacentTwos([2, 1, 2]))
      ====
      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

          def testOne(self):
              self.assertEqual(adjacentTwos([1, 2, 2]), True, "adjacentTwos([1, 2, 2])")
              self.assertEqual(adjacentTwos([1, 2, 1, 2]), False, "adjacentTwos([1, 2, 1, 2])")
              self.assertEqual(adjacentTwos([2, 1, 2]), False, "adjacentTwos([2, 1, 2])")
              self.assertEqual(adjacentTwos([2, 2, 1]), True, "adjacentTwos[2, 2, 1])")
              self.assertEqual(adjacentTwos([3, 4, 2]), False, "adjacentTwos([3, 4, 2])")
              self.assertEqual(adjacentTwos([2]), False, "adjacentTwos([2])")
              self.assertEqual(adjacentTwos([]), False, "adjacentTwos([])")
              self.assertEqual(adjacentTwos([2, 3, 4, 2]), False, "adjacentTwos([[2, 3, 4, 2]])")
              self.assertEqual(adjacentTwos([4, 2, 2, 'fish', 'fish']), True, "adjacentTwos([4, 2, 2, 4, 4]")
              self.assertEqual(adjacentTwos([2, 3, 3, 2]), False, "adjacentTwos([2, 3, 3, 2])")

      myTests().main()

Click on the "Finish Exam" button shown before the question when you are done with the above question
and then answer the poll below.

.. poll:: adjacentTwos_fix_timed_poll-pp
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

Practice
-------------------------

Try to solve the following mixed up code problems. You can use the "Help Me" button
to make the problem easier if you have made at least three attempts to solve the
problem.  After you solve each problem, please answer the poll as well.

.. selectquestion:: sum13_selq-pp
   :ab: disPPEx1
   :fromid: sum13_nd_pp_exA, sum13_w6d_pp_exB

.. poll:: sum13_pp_poll-pp
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

.. selectquestion:: list_mult_selq-pp
   :ab: disPPEx1
   :fromid: list_multiples_pp_exA, list_multiples_w3d_pp_exB

.. poll:: list_multiples_pp_poll-pp
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

.. selectquestion:: ibeforee_selq-pp
   :ab: disPPEx1
   :fromid: ibeforee_pp_exA, ibeforee_pp_wd_exB

.. poll:: ibeforee_pp_poll-pp
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

.. selectquestion:: remove_target_selq-pp
   :ab: disPPEx1
   :fromid: removetarget_pp_v2_exA, remove_target_pp_wd_exB

.. poll:: removetarget_pp_v2_poll-pp
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

Posttest Problem 1
-------------------

Try to solve the following fix code problem.  You have five minutes to try to
solve it.  It is okay if you can't solve it, you will earn credit for trying to
solve it.

Click on the "Start" button to show the problem.

.. timed:: post-exa-1-pp
   :timelimit: 5

   .. activecode:: removeExtras_fix_timed-pp
      :autograde: unittest

      Fix the code below to remove all adjacent duplicate values in the passed list. For example, ``removeExtras([3, 3, 1])`` returns ``[3, 1]`` and ``removeExtras([7, 7, 8, 8, 9, 9, 9, 10, 9, 10, 11])`` returns ``[7, 8, 9, 10, 9, 10, 11]``.
      ~~~~
      def removeExtras(a_list):
          prev = a_list[0]
          index = 0
          while index > len(a_list) - 1:
              if a_list[index] = prev:
                  a_list.pop(index)
              else:
                  prev = a_list[index]
              index -= 1
              return a_list

      print(removeExtras([3, 3, 1]))
      print(removeExtras([7, 7, 8, 8, 9, 9, 9, 10, 9, 10, 11]))
      ====
      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

          def testOne(self):
              self.assertEqual(removeExtras([5, 5, 1]), [5, 1], 'removeExtras([5, 5, 1)]')
              self.assertEqual(removeExtras([1, 1, 2, 2, 3, 3, 3, 5, 6, 5, 6]), [1, 2, 3, 5, 6, 5, 6], 'removeExtras([1, 1, 2, 2, 3, 3, 3, 5, 6, 5, 6])')
              self.assertEqual(removeExtras([1, 2, 3, 3]), [1, 2, 3], 'removeExtras([1, 2, 3, 3)]')
              self.assertEqual(removeExtras([5, 3, 1]), [5, 3, 1], 'removeExtras([5, 3, 1)]')
              self.assertEqual(removeExtras([5, 5, 5]), [5], 'removeExtras([5, 5, 5)]')
              self.assertEqual(removeExtras([5, 1, 1]), [5, 1], 'removeExtras([5, 1, 1)]')
              self.assertEqual(removeExtras([5, 1, 5]), [5, 1, 5], 'removeExtras([5, 1, 5)]')
              self.assertEqual(removeExtras([2, 3, 4, 3]), [2, 3, 4, 3], 'removeExtras([2, 3, 4, 3)]')
              self.assertEqual(removeExtras([2, 2]), [2], 'removeExtras([2, 2)]')
              self.assertEqual(removeExtras([2]), [2], 'removeExtras([2]')

      myTests().main()

Click on the "Finish Exam" button shown before the question when you are done with the above question
and then answer the poll below.

.. poll:: removeExtras_fix_timed_poll-pp
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

Posttest Problem 2
-------------------

Try to solve the following fix code problem.  You have five minutes to try to
solve it.  It is okay if you can't solve it, you will earn credit for trying to
solve it.

Click on the "Start" button to show the problem.

.. timed:: post-exa-2-pp
   :timelimit: 5

   .. activecode:: find_extras_fix_timed-pp
      :autograde: unittest

      Fix the function ``two_cats`` below to return True if there are at least two adjacent "cat" strings in list ``pets``, otherwise return False.  For example, return ``True`` for ``two_cats(['dog', 'cat', 'cat'])`` since there are two adjacent items equal to 'cat' (at index 1 and 2) and ``False`` for ``two_cats(['cat', 'dog', 'cat'])`` since the 'cat' strings are not adjacent.

      ~~~~
      def two_cats(pets):
          i = 1
          while i < pets:
              if pets[i] = 'cat' and pets[i - 2] == 'cat':
                  return true
              i += 1
              return False

      print(two_cats(['dog', 'cat', 'cat']))
      print(two_cats(['cat', 'dog', 'cat']))
      ====
      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

          def testOne(self):
              self.assertEqual(two_cats(['dog', 'cat', 'cat']), True, "two_cats(['dog', 'cat', 'cat'])")
              self.assertEqual(two_cats(['dog', 'cat', 'dog', 'cat']), False, "two_cats(['dog', 'cat', 'dog', 'cat'])")
              self.assertEqual(two_cats(['cat', 'dog', 'cat']), False, "two_cats(['cat', 'dog', 'cat'])")
              self.assertEqual(two_cats(['cat', 'cat', 'dog']), True, "two_cats['cat', 'cat', 'dog'])")
              self.assertEqual(two_cats(['bird', 'fish', 'cat']), False, "two_cats(['bird', 'fish', 'cat'])")
              self.assertEqual(two_cats(['cat']), False, "two_cats(['cat'])")
              self.assertEqual(two_cats([]), False, "two_cats([])")
              self.assertEqual(two_cats(['cat', 'bird', 'fish', 'cat']), False, "two_cats([['cat', 'bird', 'fish', 'cat']])")
              self.assertEqual(two_cats(['fish', 'cat', 'cat', 'fish', 'fish']), True, "two_cats(['fish', 'cat', 'cat', 'fish', 'fish']")
              self.assertEqual(two_cats(['cat', 'bird', 'bird', 'cat']), False, "two_cats(['cat', 'bird', 'bird', 'cat'])")

      myTests().main()

Click on the "Finish Exam" button shown before the question when you are done with the above question
and then answer the poll below.

.. poll:: find_extras_fix_timed_poll-pp
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
