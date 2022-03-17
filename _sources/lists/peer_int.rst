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

.. mchoice:: dz-lecture_15_4
   :practice: T
   :answer_a: [[1, 2, 3], [4, 5]] (unchanged)
   :answer_b: [[1, 2, 3], [4, 5], 8]
   :answer_c: [[1, 2, 3], [4, 5, 8]]
   :answer_d: [[1, 2, 3], [4, 5], [8]]
   :correct: a
   :feedback_a: Correct! [:] makes a shallow copy of the array. b.append(8) allows to modify the copy without damaging the original.
   :feedback_b: Try again. [:] makes a shallow copy of the array a. Therefore, b.append(8) allows to modify the copy without damaging the original array a.
   :feedback_c: Try again. [:] makes a shallow copy of the array a. Therefore, b.append(8) allows to modify the copy without damaging the original array a.
   :feedback_d: Try again. [:] makes a shallow copy of the array a. Therefore, b.append(8) allows to modify the copy without damaging the original array a.
  
   .. code-block:: python

      a = [[1, 2, 3], [4, 5]]
      b = a[:]
      If we then do: b.append(8) what is the list referred to by a?

.. mchoice:: dz-lecture_15_8
   :practice: T
   :answer_a: [2, 5, 8]
   :answer_b: [2, 5]
   :answer_c: [2, 5, 7]
   :answer_d: [2, 3, 4, 5, 6, 7]
   :correct: b
   :feedback_a: Try again. range(2, 7, 3) creates a sequence of numbers from 2 to 7, but increment by 3. Therefore, 8 is not included.
   :feedback_b: Correct. range(2, 7, 3) creates a sequence of numbers from 2 to 7, but increment by 3. 
   :feedback_c: Try again. range(2, 7, 3) creates a sequence of numbers from 2 to 7, but increment by 3. Therefore, 7 is not included.
   :feedback_d: Try again. range(2, 7, 3) creates a sequence of numbers from 2 to 7, but increment by 3. Therefore, 3, 4, 6 and 7 are not included.
  
   .. code-block:: python

      What is the list produced by this code?
      list(range(2, 7, 3))

.. mchoice:: dz-lecture_15_9
   :practice: T
   :answer_a: [4, 8]
   :answer_b: [4, 8, 12]
   :answer_c: [4, 8, 9]
   :answer_d: [4, 5, 6, 7, 8, 9]
   :correct: a
   :feedback_a: Correct! range(4, 9, 4) creates a sequence of numbers from 4 to 9, but increment by 4. 
   :feedback_b: Try again. range(4, 9, 4) creates a sequence of numbers from 4 to 9, but increment by 4. Therefore, 12 is not included.
   :feedback_c: Try again. range(4, 9, 4) creates a sequence of numbers from 4 to 9, but increment by 4. Therefore, 9 is not included.
   :feedback_d: Try again. range(4, 9, 4) creates a sequence of numbers from 4 to 9, but increment by 4. Therefore, 5, 6, 7 and 9 are not included.
  
   .. code-block:: python

      What is the list produced by this code?
      list(range(4, 9, 4))

.. mchoice:: dz-lecture_15_10
   :practice: T
   :answer_a: 18
   :answer_b: 6
   :answer_c: 2
   :answer_d: 9
   :answer_e: None of the above
   :correct: c
   :feedback_a: Try again. Since len(lst) = 3, when counter = 4, the loop stops. Because sum += counter comes before counter += 2, sum = 2.
   :feedback_b: Try again. Since len(lst) = 3, when counter = 4, the loop stops. Because sum += counter comes before counter += 2, sum = 2. 
   :feedback_c: Correct! Since len(lst) = 3, when counter = 4, the loop stops. Because sum += counter comes before counter += 2, sum = 2.
   :feedback_d: Try again. Since len(lst) = 3, when counter = 4, the loop stops. Because sum += counter comes before counter += 2, sum = 2.
   :feedback_e: Try again. Try to think about what is the value of counter when the loop stops.

  
   .. code-block:: python

      lst = [3, 6, 9]
      sum = 0
      counter = 0
      while counter < len(lst):
         sum += counter
         counter += 2
      print(sum)