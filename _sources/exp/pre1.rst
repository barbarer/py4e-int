Pretest Problem 1
-------------------

Try to solve the following fix code problem.  You have five minutes to try to
solve it.  It is okay if you can't solve it, you will earn credit for trying to
solve it.

Click on the "Start" button to show the problem.

.. timed:: pre-exa-1
   :timelimit: 5

   .. activecode:: remove_duplicates_fix_timed
      :autograde: unittest
      :nocodelens:

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

.. poll:: remove_duplicates_fix_timed_poll
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
