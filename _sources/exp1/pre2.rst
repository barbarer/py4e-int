Pretest Problem 2
-------------------

Try to solve the following fix code problem.  You have five minutes to try to
solve it.  It is okay if you can't solve it, you will earn credit for trying to
solve it.

Click on the "Start" button to show the problem.  

.. timed:: pre-exa-2
   :timelimit: 5

   .. activecode:: adjacentTwos_fix_timed
      :autograde: unittest
      :nocodelens:

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

.. poll:: adjacentTwos_fix_timed_poll
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
