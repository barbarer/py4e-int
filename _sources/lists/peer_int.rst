Peer Instruction: Lists Multiple Choice Questions
-----------------------------------------------------------------------------

.. mchoice:: dz-lecture_14_4
   :practice: T
   :answer_a: 3
   :answer_b: 9
   :answer_c: 10
   :answer_d: 4
   :answer_e: No output; there is an error in the second line
   :correct: a
   :feedback_a: Correct! lst[1] = 'wxyz' replaces the second element with 'wxyz'. But the total numebr of elements still remains 3.
   :feedback_b: Try again. lst[1] = 'wxyz' replaces the second element with 'wxyz'. But the total numebr of elements still remains 3. 
   :feedback_c: Try again. lst[1] = 'wxyz' replaces the second element with 'wxyz'. But the total numebr of elements still remains 3.
   :feedback_d: Try again. lst[1] = 'wxyz' replaces the second element with 'wxyz'. But the total numebr of elements still remains 3.
   :feedback_e: Try again. There is no bug with the second line.
   
   .. code-block:: python

      What is the output of this code?

      lst = ['abc', 'def', 'ghi']
      lst[1] = 'wxyz'
      print(len(lst))
        
.. mchoice:: dz-lecture_14_6
   :practice: T
   :answer_a: [2, 4]
   :answer_b: [6, 8]
   :answer_c: [2, 6]
   :answer_d: [2, 8]
   :answer_e: Nothing. The code produces an error.
   :correct: c
   :feedback_a: Try again. a.remove(4) removes 4 from the list.
   :feedback_b: Try again. a.pop(2) pops out the value at Index 2 and removes it from the list. Therefore, 8 is removed.
   :feedback_c: Correct! a.remove(4) removes 4 and a.pop(2) pops out 8.
   :feedback_d: Try again. a.pop(2) pops out the value at Index 2 and removes it from the list. Therefore, 8 is removed.
   :feedback_e: Try again. The code will not produce an error.
  
   .. code-block:: python

      What is the value of a after this code runs?

      a = [2, 4, 6, 8]
      a.remove(4)
      a.pop(2)

.. mchoice:: dz-lecture_14_7
   :practice: T
   :answer_a: [2, 4]
   :answer_b: [6, 8]
   :answer_c: [2, 6]
   :answer_d: [2, 8]
   :answer_e: Nothing. The code produces an error.
   :correct: d
   :feedback_a: Try again. a.remove(4) removes 4 from the list.
   :feedback_b: Try again. a.pop(2) pops out the value at Index 2 and removes it from the list. Therefore, 6 is removed.
   :feedback_c: Try again. a.pop(2) pops out the value at Index 2 and removes it from the list. Therefore, 6 is removed.
   :feedback_d: Correct! a.pop(2) pops out 6, and a.remove(4) removes 4 from the list.
   :feedback_e: Try again. The code will not produce an error.
  
   .. code-block:: python

      What is the value of a after this code runs?

      a = [2, 4, 6, 8]
      a.pop(2)
      a.remove(4)


