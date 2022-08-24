Functions with Loops Multiple Choice Questions
-----------------------------------------------

.. mchoice:: functions_with_loops_mc1
    :practice: T
    :answer_a: 1
    :answer_b: 2
    :answer_c: 3
    :answer_d: 4
    :answer_e: 5
    :correct: c
    :feedback_a: Try again! This function uses modulus to find the amount of odd numbers in the list that is passed in.
    :feedback_b: Try again! This function uses modulus to find the amount of odd numbers in the list that is passed in.
    :feedback_c: Correct!
    :feedback_d: Try again! This function uses modulus to find the amount of odd numbers in the list that is passed in.
    :feedback_e: Try again! This function uses modulus to find the amount of odd numbers in the list that is passed in.

    Given the code below, what would the function print?

    .. code-block:: python

      def countodd(lst):
         num_of_odd = 0
            for item in lst:
               if item % 2 == 1:
                  num_of_odd += 1

         return num_of_odd

      print(countodd([1,2,3,4,5]))


.. mchoice:: functions_with_loops_mc2
   :practice: T
   :answer_a: 50
   :answer_b: 25
   :answer_c: 5
   :answer_d: 6
   :answer_e: 2
   :correct: d
   :feedback_a: Try again! This function will divide the number that is passed in by two until it reaches one.
   :feedback_b: Try again! This function will divide the number that is passed in by two until it reaches one.
   :feedback_c: Try again! This function will divide the number that is passed in by two until it reaches one.
   :feedback_d: Correct!
   :feedback_e: Try again! This function will divide the number that is passed in by two until it reaches one.

   After how many iterations will this code execute the ``break``?

   .. code-block:: python

      def divide_by_two_until_one(num):
         count = 0
         while (True):
            num = num/2
            count = count + 1
            if (num <= 1):
               break
         return count

      print(divide_by_two_until_one(50))


.. mchoice:: functions_with_loops_mc3
   :practice: T
   :answer_a: x = 5, y = 6, z = 11
   :answer_b: x = 1, y = 5, z = 6
   :answer_c: x = 1, y = 3, z = 10
   :answer_d: x = -2, y = 1, z = -1
   :answer_e: x = 50, y = 41, z = 94
   :correct: a, b, d
   :feedback_a: Correct!
   :feedback_b: Correct!
   :feedback_c: Try again! The value of z should be 4 in order to return "True".
   :feedback_d: Correct!
   :feedback_e: Try again! The value of z should be 91 in order to return "True".

   Which of the following values for ``x``, ``y``, and ``z`` would result in the function returning "True"?

   .. code-block:: python

      def addition(x,y,z):
         if (x + y) == z:
            return "True"
         else:
            return "False"


.. mchoice:: functions_with_loops_mc4
   :practice: T
   :answer_a: 3
   :answer_b: 4
   :answer_c: 0
   :answer_d: 5
   :correct: b
   :feedback_a: Try again! The in range function has an inclusive end value.
   :feedback_b: Correct!
   :feedback_c: Try again! The in range function has an inclusive end value.
   :feedback_d: Try again! The in range function has an inclusive end value.

   How many times would ``"Hello world!"`` print?

   .. code-block:: python

      for i in range(4):
         print("Hello world!")


.. mchoice:: functions_with_loops_mc5
   :practice: T
   :answer_a: It prints 19 times and it skip counts by the current value in lst2.
   :answer_b: It prints 20 times and it skip counts by the current value in lst1.
   :answer_c: It prints 19 times and it skip counts by the current value in lst1.
   :answer_d: It prints 20 times and it skip counts by the current value in lst2.
   :correct: d
   :feedback_a: Try again! For loops include the last element.
   :feedback_b: Try again! This code counts by the second list.
   :feedback_c: Try again! For loops include the last element and count by the second list.
   :feedback_d: Correct!

   How many times does the following code print and in what pattern?

   .. code-block:: python

      lst1 = [1, 3, 5, 7]
      lst2 = [2, 4, 6, 8, 10]

      for x in lst1:
         for y in lst2:
            print(x * y)


.. mchoice:: functions_with_loops_mc6
   :practice: T
   :answer_a: i: 0 j: 0, i: 1 j: 1,
   :answer_b: i: 0 j: 0, i: 1 j: 1, i: 2 j: 2,
   :answer_c: i: 1 j: 1, i: 1 j: 2, i: 2: j: 1, i:2: j:2,
   :answer_d: i: 0 j: 0, i: 0 j: 1, i: 1: j: 0, i:1: j:1,
   :correct: d
   :feedback_a: The inner loop will loop twice for each value of i.
   :feedback_b: The values of i and j will range from 0 to 1.
   :feedback_c: The values of i and j will range from 0 to 1.
   :feedback_d: Correct! The values of i and j range from 0 to 1 and the inner loop executes twice each time i changes.

   What does the following code print?

   .. code-block:: python

      out = ""
      for i in range(2):
          for j in range(2):
              out += "i: " + str(i) + " j:" + str(j) + ", "
      print(out)


.. mchoice:: functions_with_loops_mc7
   :practice: T
   :answer_a: [4, 6]
   :answer_b: [4, 5, 5, 6]
   :answer_c: [1, 2, 3, 4]
   :answer_d: [13, 14, 23, 24]
   :correct: b
   :feedback_a: This would be true if there was a single loop using an index to loop though both lists
   :feedback_b: It adds l1[0] and l2[0], then l1[0] and l2[1], then l1[1] and l2[0], then l1[1] and l2[1].
   :feedback_c: This would be true if the two loops were one after the other instead of nested and it just added the value in each list
   :feedback_d: The + adds the numbers together, it does not concatenate them.

   What does the following code print?

   .. code-block:: python

      l1 = [1, 2]
      l2 = [3, 4]
      out = []
      for val1 in l1:
          for val2 in l2:
              out.append(val1 + val2)
      print(out)


.. mchoice:: functions_with_loops_mc8
   :practice: T
   :answer_a: [5, 7]
   :answer_b: [5, 6, 7, 6, 7, 8]
   :answer_c: [5, 6, 6, 7, 7, 8]
   :answer_d: [14, 15, 24, 25, 34, 35]
   :correct: c
   :feedback_a: This would be true if there was a single loop using an index to loop though both lists but only to the length of the smallest.
   :feedback_b: This would be true if it looped through l2 and then l1 in the inner loop.
   :feedback_c: For every value in l1 it loops through all the values in l2.
   :feedback_d: The + adds the numbers together, it does not concatenate them.

   What does the following code print?

   .. code-block:: python

      l1 = [1, 2, 3]
      l2 = [4, 5]
      out = []
      for val1 in l1:
          for val2 in l2:
              out.append(val1 + val2)
      print(out)


.. mchoice:: functions_with_loops_mc9
   :practice: T
   :answer_a: [5, 7]
   :answer_b: [5, 6, 7, 6, 7, 8]
   :answer_c: [5, 6, 6, 7, 7, 8]
   :answer_d: [41, 42, 43, 51, 52, 53]
   :correct: b
   :feedback_a: This would be true if there was a single loop using an index to loop though both lists but only to the length of the smallest.
   :feedback_b: For every value in l2 it loops through all the values in l1.
   :feedback_c: This would be true if looped through l1 and then l2 in the inner loop.
   :feedback_d: The + adds the numbers together, it does not concatenate them.

   What does the following code print?

   .. code-block:: python

      l1 = [1, 2, 3]
      l2 = [4, 5]
      out = []
      for val1 in l2:
          for val2 in l1:
              out.append(val1 + val2)
      print(out)


.. mchoice:: functions_with_loops_mc10
   :practice: T
   :answer_a: [5, 7]
   :answer_b: [5, 6, 7, 6, 7, 8]
   :answer_c: [5, 6, 6, 7, 7, 8]
   :answer_d: ['14', '15', '24', '25', '34', 35']
   :correct: d
   :feedback_a: This would be true if there was a single loop using an index to loop though both lists but only to the length of the smallest and the items were numbers.
   :feedback_b: This would be true if it looped through l2 and then l1 in the inner loop and the list items were numbers.
   :feedback_c: This would be true if it looped through l1 and then l2 in the inner loop and the list items were numbers.
   :feedback_d: Since the list items are strings the + will concatenate the values.

   What does the following code print?

   .. code-block:: python

      l1 = ['1', '2', '3']
      l2 = ['4', '5']
      out = []
      for val1 in l1:
          for val2 in l2:
              out.append(val1 + val2)
      print(out)
