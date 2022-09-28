Peer Instruction: Tuples Multiple Choice Questions
--------------------------------------------------

.. mchoice:: dz-lecture_16_4
   :author: Dan Zingaro
   :practice: T
   :answer_a: It never fails
   :answer_b: It fails when the list is empty
   :answer_c: It fails when the value is not found in the list
   :answer_d: Both B and C will fail
   :correct: d
   :feedback_a: Incorrect! Because 'num = lst[i]' goes out of range when the list is empty or the value is not found in the list
   :feedback_b: Incorrect! Because 'num = lst[i]' goes out of range when the list is empty or the value is not found in the list
   :feedback_c: Incorrect! Because 'num = lst[i]' goes out of range when the list is empty or the value is not found in the list
   :feedback_d: Correct! Because 'num = lst[i]' goes out of range when the list is empty or the value is not found in the list

   In what situation does the below code fail?

   .. code-block::

      def find(lst, value):
         '''(list, value) -> int
         Return the first occurrence of value in lst.
         If value is not found, return -1.
         >>> find([20, 40, 60], 40)
         1
         '''
         i = 0
         num = lst[i]
         while num != value:
            i = i + 1
            num = lst[i]
         if i < len(lst):
            return i
         else: return -1


.. mchoice:: dz-lecture_16_6
   :author: Dan Zingaro
   :practice: T
   :answer_a: is_ok([[1, 2], [2, 3]], [1, 2, 3])
   :answer_b: is_ok([[1, 2], [4]], [1, 2, 3])
   :answer_c: is_ok([], [1, 2, 3])
   :answer_d: is_ok([[1, 2], [4]], [1, 2, 3, 4])
   :answer_e: None will return True
   :correct: e
   :feedback_a: Incorrect! Because 2 is in two different groups- [1, 2] and [2, 3]
   :feedback_b: Incorrect! Because 3 is not in the group_list and 4 is not the class_list
   :feedback_c: Incorrect! Because there's no group list at all
   :feedback_d: Incorrect! Because 3 has not be assigned to any group
   :feedback_e: Correct! Because there's no option where the group list has assigned every student to exactly one group

   To represent groups of students, we can use a nested list. For example, in the following list, students 1, 3, and 4 are together in a group, and student 2 is working alone: [[1, 3, 4], [2]]. In the following code, which call would return True?

   .. code-block::

      def is_ok(group_list, class_list):
         '''(list of list of int, list of int) -> bool
         Return True iff every student in class_list is in exactly
         one group according to group_list.
         '''
