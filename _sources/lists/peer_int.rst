Peer Instruction: Lists Multiple Choice Questions
-----------------------------------------------------------------------------

.. mchoice:: dz-lecture_14_4
   :author: Dan Zingaro
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

   What does the following code print?

   .. code-block:: python

      lst = ['abc', 'def', 'ghi']
      lst[1] = 'wxyz'
      print(len(lst))

.. mchoice:: dz-lecture_14_6
   :author: Dan Zingaro
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

   What is the value of ``a`` after this code runs?

   .. code-block:: python

      a = [2, 4, 6, 8]
      a.remove(4)
      a.pop(2)

.. mchoice:: dz-lecture_14_7
   :author: Dan Zingaro
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

   What is the value of ``a`` after this code runs?

   .. code-block:: python

      a = [2, 4, 6, 8]
      a.pop(2)
      a.remove(4)

.. mchoice:: dz-lecture_15_4
   :author: Dan Zingaro
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

   What is the value of the list ``a`` after the code below runs?

   .. code-block:: python

      a = [[1, 2, 3], [4, 5]]
      b = a[:]
      b.append(8)

.. mchoice:: dz-lecture_15_8
   :author: Dan Zingaro
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

   Which list is produced by this code?

   .. code-block:: python

      list(range(2, 7, 3))

.. mchoice:: dz-lecture_15_9
   :author: Dan Zingaro
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

   Which list is produced by this code?

   .. code-block:: python

      list(range(4, 9, 4))

.. mchoice:: dz-lecture_15_10
   :author: Dan Zingaro
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

   What does the following code print?

   .. code-block:: python

      lst = [3, 6, 9]
      sum = 0
      counter = 0
      while counter < len(lst):
         sum += counter
         counter += 2
      print(sum)

.. mchoice:: dz-lecture_30_4
   :practice: T
   :author: Dan Zingaro
   :answer_a: 8
   :answer_b: 9
   :answer_c: 10
   :answer_d: 12
   :answer_e: 20
   :correct: d
   :feedback_a: Try again. The only contiguous portion of the list that has the greatest sum is [8, -6, 10], summing up tp 12.
   :feedback_b: Try again. The only contiguous portion of the list that has the greatest sum is [8, -6, 10], summing up tp 12.
   :feedback_c: Try again. The only contiguous portion of the list that has the greatest sum is [8, -6, 10], summing up tp 12.
   :feedback_d: Correct! The only contiguous portion of the list that has the greatest sum is [8, -6, 10], summing up tp 12.
   :feedback_e: Try again. The only contiguous portion of the list that has the greatest sum is [8, -6, 10], summing up tp 12.

   What is the maximum segment sum in this list?

   .. code-block:: python

      [2, -5, 8, -6, 10]

.. mchoice:: dz-lecture_30_5
   :practice: T
   :author: Dan Zingaro
   :answer_a: 3
   :answer_b: 8
   :answer_c: 10
   :answer_d: 12
   :answer_e: 15
   :correct: c
   :feedback_a: Try again. The only contiguous portion of the list that has the greatest sum is [10], summing up tp 10.
   :feedback_b: Try again. The only contiguous portion of the list that has the greatest sum is [10], summing up tp 10.
   :feedback_c: Correct! The only contiguous portion of the list that has the greatest sum is [10], summing up tp 10.
   :feedback_d: Try again. The only contiguous portion of the list that has the greatest sum is [10], summing up tp 10.
   :feedback_e: Try again. The only contiguous portion of the list that has the greatest sum is [10], summing up tp 10.

   What is the maximum segment sum in this list?

   .. code-block:: python

      [2, -5, 8, -6, 10]

.. mchoice:: dz-lecture_30_9
   :practice: T
   :author: Dan Zingaro
   :answer_a: 1
   :answer_b: 2
   :answer_c: 3
   :answer_d: 4
   :answer_e: 5
   :correct: d
   :feedback_a: Try again. In the first pass of the outer loop, Approach A would start from lower = 0, moving upper from 0 to 4. In this pass, the sum of [0,1,2,3] and [0,1,2,3,4] were computed. During the second pass, Approach A would start from lower = 1, moving upper from 1 to 4. In this pass, the sum of [1,2,3] and [1,2,3,4] were computed. There would be no more computations of 1+2+3 later since lower would move pass 1. Therefore there are 4 computations of 1+2+3 in total.
   :feedback_b: Try again. In the first pass of the outer loop, Approach A would start from lower = 0, moving upper from 0 to 4. In this pass, the sum of [0,1,2,3] and [0,1,2,3,4] were computed. During the second pass, Approach A would start from lower = 1, moving upper from 1 to 4. In this pass, the sum of [1,2,3] and [1,2,3,4] were computed. There would be no more computations of 1+2+3 later since lower would move pass 1. Therefore there are 4 computations of 1+2+3 in total.
   :feedback_c: Try again. In the first pass of the outer loop, Approach A would start from lower = 0, moving upper from 0 to 4. In this pass, the sum of [0,1,2,3] and [0,1,2,3,4] were computed. During the second pass, Approach A would start from lower = 1, moving upper from 1 to 4. In this pass, the sum of [1,2,3] and [1,2,3,4] were computed. There would be no more computations of 1+2+3 later since lower would move pass 1. Therefore there are 4 computations of 1+2+3 in total.
   :feedback_d: Correct. In the first pass of the outer loop, Approach A would start from lower = 0, moving upper from 0 to 4. In this pass, the sum of [0,1,2,3] and [0,1,2,3,4] were computed. During the second pass, Approach A would start from lower = 1, moving upper from 1 to 4. In this pass, the sum of [1,2,3] and [1,2,3,4] were computed. There would be no more computations of 1+2+3 later since lower would move pass 1. Therefore there are 4 computations of 1+2+3 in total.
   :feedback_e: Try again. In the first pass of the outer loop, Approach A would start from lower = 0, moving upper from 0 to 4. In this pass, the sum of [0,1,2,3] and [0,1,2,3,4] were computed. During the second pass, Approach A would start from lower = 1, moving upper from 1 to 4. In this pass, the sum of [1,2,3] and [1,2,3,4] were computed. There would be no more computations of 1+2+3 later since lower would move pass 1. Therefore there are 4 computations of 1+2+3 in total.

   [0, 1, 2, 3, 4]
   How many times does Approach A compute the sum 1 + 2 + 3 in the above list?

   .. code-block:: python

      Approach A:

      def max_segment_sum(L):
         '''(list of int) -> int
         Return maximum segment sum of L.
         '''
         max_so_far = 0
         for lower in range(len(L)):
            for upper in range(lower, len(L)):
               sum = 0
               for i in range(lower, upper+1):
                  sum = sum + L[i]
            max_so_far = max(max_so_far, sum)
         return max_so_far

.. mchoice:: dz-lecture_30_10
   :practice: T
   :author: Dan Zingaro
   :answer_a: 1
   :answer_b: 2
   :answer_c: 3
   :answer_d: 4
   :answer_e: 5
   :correct: c
   :feedback_a: Try again. In the first pass of the outer loop, Approach A would start from lower = 0, moving upper from 0 to 4. In this pass, the sum of [0,1,2], [0,1,2,3] and [0,1,2,3,4] were computed. There would be no more computations of 0+1+2 since lower would move pass 0. Therefore there would be 3 times.
   :feedback_b: Try again. In the first pass of the outer loop, Approach A would start from lower = 0, moving upper from 0 to 4. In this pass, the sum of [0,1,2], [0,1,2,3] and [0,1,2,3,4] were computed. There would be no more computations of 0+1+2 since lower would move pass 0. Therefore there would be 3 times.
   :feedback_c: Correct. In the first pass of the outer loop, Approach A would start from lower = 0, moving upper from 0 to 4. In this pass, the sum of [0,1,2], [0,1,2,3] and [0,1,2,3,4] were computed. There would be no more computations of 0+1+2 since lower would move pass 0. Therefore there would be 3 times.
   :feedback_d: Try again. In the first pass of the outer loop, Approach A would start from lower = 0, moving upper from 0 to 4. In this pass, the sum of [0,1,2], [0,1,2,3] and [0,1,2,3,4] were computed. There would be no more computations of 0+1+2 since lower would move pass 0. Therefore there would be 3 times.
   :feedback_e: Try again. In the first pass of the outer loop, Approach A would start from lower = 0, moving upper from 0 to 4. In this pass, the sum of [0,1,2], [0,1,2,3] and [0,1,2,3,4] were computed. There would be no more computations of 0+1+2 since lower would move pass 0. Therefore there would be 3 times.

   [0, 1, 2, 3, 4]
   How many times does Approach A compute the sum 0 + 1 + 2 in the above list?

   .. code-block:: python

      Approach A:

      def max_segment_sum(L):
         '''(list of int) -> int
         Return maximum segment sum of L.
         '''
         max_so_far = 0
         for lower in range(len(L)):
            for upper in range(lower, len(L)):
               sum = 0
               for i in range(lower, upper+1):
                  sum = sum + L[i]
            max_so_far = max(max_so_far, sum)
         return max_so_far

.. mchoice:: dz-lecture_32_2
   :practice: T
   :author: Dan Zingaro
   :answer_a: Displaying the top fiction sales on Amazon
   :answer_b: Putting a list of words in alphabetical order
   :answer_c: Printing the average GPA of 100 students
   :answer_d: Two of the above
   :answer_e: All of the above
   :correct: d
   :feedback_a: Try Again. In this senerio sorting is useful because ranking the sales needs sorting the numbers. Is there other case you find useful?
   :feedback_b: Try Again. In this senerio sorting is useful because ranking the words needs sorting the strings. Is there other case you find useful?
   :feedback_c: Try Again. Avergaing a set is permutation invariant, so there is no need to sort.
   :feedback_d: Correct. Both A and B needs sorting.
   :feedback_e: Try Again. In case C, avergaing a set is permutation invariant, so there is no need to sort.

   For which of the following is a sort useful?

.. mchoice:: dz-lecture_32_8
   :practice: T
   :author: Dan Zingaro
   :answer_a: Once a value is placed in the sorted part, it will never move again
   :answer_b: All values in the sorted part are always less than or equal to all values in the unsorted part
   :answer_c: Both of the above are true
   :answer_d: None of the above is true
   :correct: d
   :feedback_a: Try Again. This is false because the sorted part may expect another value that is smaller than the leftmost value of the sorted part. So the elements in the sorted part may still need to swap.
   :feedback_b: Try Again. This is false because the sorted part may expect another value that is smaller than the leftmost value of the sorted part. So the elements in the sorted part may still need to swap.
   :feedback_c: Try Again. None of A and B are correct.
   :feedback_d: Correct. None of A and B are correct.

   Which of the following is true of insertion sort?

.. mchoice:: dz-lecture_33_4
   :practice: T
   :author: Dan Zingaro
   :answer_a: [8, 20, 30, 40, 16, 94, 10, 22]
   :answer_b: [10, 16, 20, 30, 40, 94, 8, 22]
   :answer_c: [10, 16, 30, 40, 20, 94, 8, 22]
   :answer_d: [8, 10, 20, 30, 40, 16, 94, 22]
   :answer_e: [10, 20, 30, 40, 8, 94, 16, 22]
   :correct: b
   :feedback_a: Try Again. After the third pass the sorted part is [10, 20, 30, 40], and the unsorted part is [16, 94, 8, 22]. The next value in the unsorted part is 16 and the algorithm will place 16 in the correct position in the sorted part. Thus, the sorted part becomes [10, 16, 20, 30, 40] and the rest is [94, 8, 22]. So the whole list is [10, 16, 20, 30, 40, 94, 8, 22].
   :feedback_b: Correct. After the third pass the sorted part is [10, 20, 30, 40], and the unsorted part is [16, 94, 8, 22]. The next value in the unsorted part is 16 and the algorithm will place 16 in the correct position in the sorted part. Thus, the sorted part becomes [10, 16, 20, 30, 40] and the rest is [94, 8, 22]. So the whole list is [10, 16, 20, 30, 40, 94, 8, 22].
   :feedback_c: Try Again. After the third pass the sorted part is [10, 20, 30, 40], and the unsorted part is [16, 94, 8, 22]. The next value in the unsorted part is 16 and the algorithm will place 16 in the correct position in the sorted part. Thus, the sorted part becomes [10, 16, 20, 30, 40] and the rest is [94, 8, 22]. So the whole list is [10, 16, 20, 30, 40, 94, 8, 22].
   :feedback_d: Try Again. After the third pass the sorted part is [10, 20, 30, 40], and the unsorted part is [16, 94, 8, 22]. The next value in the unsorted part is 16 and the algorithm will place 16 in the correct position in the sorted part. Thus, the sorted part becomes [10, 16, 20, 30, 40] and the rest is [94, 8, 22]. So the whole list is [10, 16, 20, 30, 40, 94, 8, 22].
   :feedback_e: Try Again. After the third pass the sorted part is [10, 20, 30, 40], and the unsorted part is [16, 94, 8, 22]. The next value in the unsorted part is 16 and the algorithm will place 16 in the correct position in the sorted part. Thus, the sorted part becomes [10, 16, 20, 30, 40] and the rest is [94, 8, 22]. So the whole list is [10, 16, 20, 30, 40, 94, 8, 22].

   The list below reflects the state of the list after 3 passes of insertion sort. What will be in the list after the next (fourth) pass?

   .. code-block:: python

      [10, 20, 30, 40, 16, 94, 8, 22]


.. mchoice:: dz-lecture_33_5
   :practice: T
   :author: Dan Zingaro
   :answer_a: [5, 7, 14, 16, 19, 2, 32, 9]
   :answer_b: [5, 7, 14, 19, 2, 16, 32, 9]
   :answer_c: [5, 7, 16, 19, 14, 2, 32, 9]
   :answer_d: [2, 5, 7, 14, 19, 16, 32, 9]
   :answer_e: [2, 7, 14, 19, 16, 5, 32, 9]
   :correct: a
   :feedback_a: Correct. After the third pass the sorted part is [5, 7, 14, 19], and the unsorted part is [16, 2, 32, 9]. The next value in the unsorted part is 16 and the algorithm will place 16 in the correct position in the sorted part. Thus, the sorted part becomes [5, 7, 14, 16, 19] and the rest is [2, 32, 9]. So the whole list is [5, 7, 14, 16, 19, 2, 32, 9].
   :feedback_b: Try Again. After the third pass the sorted part is [5, 7, 14, 19], and the unsorted part is [16, 2, 32, 9]. The next value in the unsorted part is 16 and the algorithm will place 16 in the correct position in the sorted part. Thus, the sorted part becomes [5, 7, 14, 16, 19] and the rest is [2, 32, 9]. So the whole list is [5, 7, 14, 16, 19, 2, 32, 9].
   :feedback_c: Try Again. After the third pass the sorted part is [5, 7, 14, 19], and the unsorted part is [16, 2, 32, 9]. The next value in the unsorted part is 16 and the algorithm will place 16 in the correct position in the sorted part. Thus, the sorted part becomes [5, 7, 14, 16, 19] and the rest is [2, 32, 9]. So the whole list is [5, 7, 14, 16, 19, 2, 32, 9].
   :feedback_d: Try Again. After the third pass the sorted part is [5, 7, 14, 19], and the unsorted part is [16, 2, 32, 9]. The next value in the unsorted part is 16 and the algorithm will place 16 in the correct position in the sorted part. Thus, the sorted part becomes [5, 7, 14, 16, 19] and the rest is [2, 32, 9]. So the whole list is [5, 7, 14, 16, 19, 2, 32, 9].
   :feedback_e: Try Again. After the third pass the sorted part is [5, 7, 14, 19], and the unsorted part is [16, 2, 32, 9]. The next value in the unsorted part is 16 and the algorithm will place 16 in the correct position in the sorted part. Thus, the sorted part becomes [5, 7, 14, 16, 19] and the rest is [2, 32, 9]. So the whole list is [5, 7, 14, 16, 19, 2, 32, 9].

   The list below reflects the state of the list after 3 passes of insertion sort. What will be in the list after the next (fourth) pass?

   .. code-block:: python

      [5, 7, 14, 19, 16, 2, 32, 9]


.. mchoice:: dz-lecture_33_11
   :practice: T
   :author: Dan Zingaro
   :answer_a: Once a value is placed in the sorted part, it will never move again
   :answer_b: There is never a value in the sorted part that is smaller than some value in the unsorted part
   :answer_c: Both of the above are true
   :answer_d: None of the above is true
   :correct: c
   :feedback_a: Try Again. This is correct because in every pass, the greatest value of the unsorted pass will be moved to the sorted part. Therefore, the sorted part in the right of the array contains sorted elements that are greater than every elements in the unsorted part. Therefore, the sorted part will not expect any elements to affect it.
   :feedback_b: Try Again. This is correct because in every pass, the greatest value of the unsorted pass will be moved to the sorted part. Therefore, the sorted part in the right of the array contains sorted elements that are greater than every elements in the unsorted part. Therefore, the sorted part will not expect any elements to affect it.
   :feedback_c: Correct. All of A and B are correct.
   :feedback_d: Try Again. None of A and B are correct.

   Which of the following is true of bubble sort?

.. mchoice:: dz-lecture_34_2
   :practice: T
   :author: Dan Zingaro
   :answer_a: [5, 0, 9, 6, 4, 2, 8]
   :answer_b: [5, 9, 0, 4, 6, 2, 8]
   :answer_c: [5, 0, 9, 4, 6, 8, 2]
   :answer_d: [5, 0, 4, 6, 8, 2, 9]
   :correct: d
   :feedback_a: Try Again. During the first pass, the list becomes [-, 5, 9, -, 0, 4, 6, 8, 2], and then [5, -, 9, 0, -, 4, 6, 8, 2], and then [5, 0, -, 9, 4, -, 6, 8, 2], and then [5, 0, 4, -, 9, 6, -, 8, 2], and then [5, 0, 4, 6, -, 9, 8, -, 2], and then [5, 0, 4, 6, 8, -, 9, 2, -], and then [5, 0, 4, 6, 8, 2, 9]
   :feedback_b: Try Again. During the first pass, the list becomes [- , 5, 9, -, 0, 4, 6, 8, 2], and then [5, -, 9, 0, -, 4, 6, 8, 2], and then [5, 0, -, 9, 4, -, 6, 8, 2], and then [5, 0, 4, -, 9, 6, -, 8, 2], and then [5, 0, 4, 6, -, 9, 8, -, 2], and then [5, 0, 4, 6, 8, -, 9, 2, -], and then [5, 0, 4, 6, 8, 2, 9]
   :feedback_c: Try Again. During the first pass, the list becomes [-, 5, 9, -, 0, 4, 6, 8, 2], and then [5, -, 9, 0, -, 4, 6, 8, 2], and then [5, 0, -, 9, 4, -, 6, 8, 2], and then [5, 0, 4, -, 9, 6, -, 8, 2], and then [5, 0, 4, 6, -, 9, 8, -, 2], and then [5, 0, 4, 6, 8, -, 9, 2, -], and then [5, 0, 4, 6, 8, 2, 9]
   :feedback_d: Correct. During the first pass, the list becomes [-, 5, 9, -, 0, 4, 6, 8, 2], and then [5, -, 9, 0, -, 4, 6, 8, 2], and then [5, 0, -, 9, 4, -, 6, 8, 2], and then [5, 0, 4, -, 9, 6, -, 8, 2], and then [5, 0, 4, 6, -, 9, 8, -, 2], and then [5, 0, 4, 6, 8, -, 9, 2, -], and then [5, 0, 4, 6, 8, 2, 9]

   Which of the following matches the contents of the list after one pass of bubble sort?

   .. code-block:: python

      [5, 9, 0, 4, 6, 8, 2]


.. mchoice:: dz-lecture_34_3
   :practice: T
   :author: Dan Zingaro
   :answer_a: [2, 1, 7, 15, 9, 1, 10]
   :answer_b: [2, 1, 7, 10, 9, 1, 15]
   :answer_c: [2, 1, 10, 7, 15, 9, 1]
   :answer_d: [2, 1, 10, 7, 15, 1, 9]
   :correct: B
   :feedback_a: Try Again. During the first pass, the list becomes [-,2,10,-,1,7,15,9,1], and then [2,-,10,1,-,7,15,9,1], and then [2,1,-,10,7,-,15,9,1], and then [2,1,7,-,10,15,-,9,1], and then [2,1,7,10,-,15,9,-,1], and then [2,1,7,10,9,-,15,1,-], and then [2,1,7,10,9,1,15]
   :feedback_b: Try Again. During the first pass, the list becomes [-,2,10,-,1,7,15,9,1], and then [2,-,10,1,-,7,15,9,1], and then [2,1,-,10,7,-,15,9,1], and then [2,1,7,-,10,15,-,9,1], and then [2,1,7,10,-,15,9,-,1], and then [2,1,7,10,9,-,15,1,-], and then [2,1,7,10,9,1,15]
   :feedback_c: Try Again. During the first pass, the list becomes [-,2,10,-,1,7,15,9,1], and then [2,-,10,1,-,7,15,9,1], and then [2,1,-,10,7,-,15,9,1], and then [2,1,7,-,10,15,-,9,1], and then [2,1,7,10,-,15,9,-,1], and then [2,1,7,10,9,-,15,1,-], and then [2,1,7,10,9,1,15]
   :feedback_d: Correct. During the first pass, the list becomes [-,2,10,-,1,7,15,9,1], and then [2,-,10,1,-,7,15,9,1], and then [2,1,-,10,7,-,15,9,1], and then [2,1,7,-,10,15,-,9,1], and then [2,1,7,10,-,15,9,-,1], and then [2,1,7,10,9,-,15,1,-], and then [2,1,7,10,9,1,15]

   Which of the following matches the contents of the list after one pass of bubble sort?

   .. code-block:: python

      [2, 10, 1, 7, 15, 9, 1]


.. mchoice:: dz-lecture_34_5
   :practice: T
   :author: Dan Zingaro
   :answer_a: Selection
   :answer_b: Insertion
   :answer_c: Bubble
   :correct: B
   :feedback_a: Try Again. During the first pass, selection sort would find the min value of the entire list, which is 2 in this case, and then swap with the first index, so after the first round it would be [2, 9, 0, 4, 6, 8, 5]
   :feedback_b: Correct. During each pass i, the ith value of the list is inserted into the left sorted part of the list.
   :feedback_c: Try Again. Bubble sort places the sorted part on the right part after each round, but the lists in the question has left part sorted.

   Which sort produces the following values on each pass?

   .. code-block:: python

      [5, 9, 0, 4, 6, 8, 2]
      [5, 9, 0, 4, 6, 8, 2]
      [5, 9, 0, 4, 6, 8, 2]
      [0, 5, 9, 4, 6, 8, 2]
      [0, 4, 5, 9, 6, 8, 2]
      [0, 4, 5, 6, 9, 8, 2]
      [0, 4, 5, 6, 8, 9, 2]
      [0, 2, 4, 5, 6, 8, 9]
