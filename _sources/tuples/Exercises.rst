Multiple Choice Questions
--------------------------

.. mchoice:: TupleExquestion10_1
   :practice: T
   :answer_a: val = aTuple[1:2][1]
   :answer_b: val = aTuple[2][1]
   :answer_c: val = aTuple[1:2](1)
   :answer_d: val = aTuple[1][1]
   :correct: d
   :feedback_a: Incorrect! Running this code would result in an error. Try again.
   :feedback_b: Incorrect! This would access the value 15. Try again.
   :feedback_c: Incorrect! Running this code would result in an error. Try again.
   :feedback_d: Correct! This first goes to the second item in the tuple, then grabs the second item from the list, which is 20.

   Which of the following would complete ``val =`` to set ``val`` to 20 by slicing ``aTuple``.

   .. code-block:: python

       aTuple = ("Orange", (10, 20, 30), (5, 15, 25))
       val =

.. mchoice:: TupleExquestion10_2
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Correct! You can create tuples using tuple packing which requires no parentheses.
   :feedback_b: Incorrect! Parentheses are not always necessary. Try again.

   True or False? A python tuple can be created without using any parentheses.


.. mchoice:: TupleExquestion10_3
   :practice: T
   :answer_a: list
   :answer_b: tuple
   :answer_c: array
   :answer_d: str
   :correct: d
   :feedback_a: Incorrect! A list would use []. Try again.
   :feedback_b: Incorrect! To create a tuple with a single item, there must be a comma after the first item. Try again.
   :feedback_c: Incorrect! Arrays do not exist in Python. Try again.
   :feedback_d: Correct! To create a tuple with a single item, there must be a comma after the first item.

   What type will be printed when the following code executes?

   .. code-block:: python

       aTuple = ("Orange")
       print type(aTuple)

.. mchoice:: TupleExquestion10_4
   :practice: T
   :answer_a: ("Yellow", 20, "Red")
   :answer_b: Yellow
   :answer_c: 20
   :answer_d: Red
   :correct: b
   :feedback_a: Incorrect! Hint: think about how tuple assignment works. Try again.
   :feedback_b: Correct! Tuple assignment makes the first value of the tuple equal to a.
   :feedback_c: Incorrect! Hint: think about how tuple assignment works. Try again.
   :feedback_d: Incorrect! Hint: think about how tuple assignment works. Try again.

   What will the following code return?

   .. code-block:: python

      def practice(tup):
          a, b, c = tup
          return a
      aTuple = "Yellow", 20, "Red"
      practice(aTuple)

.. mchoice:: TupleExquestion10_5
   :practice: T
   :answer_a: Nothing, it will cause an error.
   :answer_b: (100, 800, 200, 300, 400, 500)
   :answer_c: (800, 100, 200, 300, 400, 500)
   :answer_d: (100, 200, 800, 300, 400, 500)
   :correct: a
   :feedback_a: Correct! A tuple is immutable, therefore you cannot change its values.
   :feedback_b: Incorrect! Remember, tuples are immutable. Try again.
   :feedback_c: Incorrect! Remember, tuples are immutable. Try again.
   :feedback_d: Incorrect! Remember, tuples are immutable. Try again.

   What will the following code return?

   .. code-block:: python

      def tuple_indexing(tup):
          tup[1] = 800
          return tup

      aTuple = (100, 200, 300, 400, 500)
      print(tuple_indexing(aTuple))

.. mchoice:: TupleExquestion10_6
   :practice: T
   :answer_a: i, ii
   :answer_b: ii, iv
   :answer_c: i, iv
   :answer_d: i, iii
   :correct: d
   :feedback_a: Incorrect! ii will cause an error because the highest index in tupl1 is 4. Try again.
   :feedback_b: Incorrect! ii will cause an error because the highest index in tupl1 is 4. Try again.
   :feedback_c: Incorrect! i will output all items besides the last, whereas iv will output all items besides the first. Try again.
   :feedback_d: Correct! These two options will both output all the items in the tuple except for the last one.

   Which of the following options will produce the same output?

   .. code-block:: python

          tupl1 = (5, 3, 1, 9, 0)
          # options i, ii, iii, or iv


      i) print(tup1[:-1])
      ii) print(tup1[0:5])
      iii) print(tupl1[0:4])
      iv) print(tupl1[-4:])

.. mchoice:: TupleExquestion10_7
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: Incorrect! When the first numbers in both tuples are equal, the comparison operator will move on to the next pair of numbers. Try again.
   :feedback_b: Correct! The compiler will look at the first pair of different numbers, then decide whether it is true or false depending on that pair.

   What is returned when the following code is run?

   .. code-block:: python

      def tuple_comparison(tup1, tup2):
          return tup1 < tup2

      tup1 = (66, 4, 17, 4)
      tup2 = (66, 4, 16, 5)
      tuple_comarison(tup1, tup2)

.. mchoice:: TupleExquestion10_8
   :practice: T
   :answer_a: Error, tuple slicing doesn't exist
   :answer_b: [2, 3, 4]
   :answer_c: (2, 3, 4)
   :answer_d: (2, 3)
   :correct: d
   :feedback_a: Incorrect! Tuple slicing does exist. Try again.
   :feedback_b: Incorrect! The output will be in the form of a tuple. Try again.
   :feedback_c: Incorrect! The value of -1 means to stop after the second to last item. Try again.
   :feedback_d: Correct! This tuple slicing grabs the second item all the way to the second to last item.

   What is printed when the following code is run?

   .. code-block:: python

          a = (1, 2, 3, 4)
          print(a[1:-1])


.. mchoice:: TupleExquestion10_9
   :practice: T
   :answer_a: KeyError
   :answer_b: TypeError
   :answer_c: Shape Error
   :correct: c
   :feedback_a: Incorrect! A KeyError is raised when you try to access a dictionary with a key that doesn't yet exist. Try again.
   :feedback_b: Incorrect! A TypeError is raised when you attempt to call a function or use an operator on something of the incorrect type. Try again.
   :feedback_c: Correct! Shape errors are more likely to occur when working with compound data structures.

   What is the name of an error caused when a data structure has the wrong type, size, or composition?


.. mchoice:: TupleExquestion10_10
   :practice: T
   :answer_a: have
   :answer_b: ['have', 'fun']
   :answer_c: fun
   :answer_d: ('have', 'fun')
   :correct: c
   :feedback_a: Incorrect! This would be printed if in line 3 we called print(x) instead. Try again.
   :feedback_b: Incorrect! Hint: think about how tuple assignment works and apply that knowledge to lists. Try again.
   :feedback_c: Correct! y is associated with the last value of tuple m.
   :feedback_d: Incorrect! This is the original tuple, but the function returns the second element of the tuple.

   What is printed when the following code is run?

   .. code-block:: python

      def practice(m):
          m = list(m)
          x, y = m
          return y

      m = ('have', 'fun')
      print(practice(m))

.. mchoice:: TupleExquestion10_11
   :practice: T
   :answer_a: ['2', '3', '30', '8']
   :answer_b: ['2', '3', '8', '30']
   :answer_c:  ['30', '8', '3', '2']
   :answer_d: ['8', '30', '3', '2']
   :correct: a
   :feedback_a: This returns a list with the strings sorted in ascending order.
   :feedback_b: Incorrect, this would be the right order for numbers, but not for strings.
   :feedback_c: This would be correct if it was sorting numbers in descending order.
   :feedback_d: This would be correct if it was sorting in descending order.

   What is printed when the following code is run?

   .. code-block:: python

      tup = ('30', '3', '2', '8')
      print(sorted(tup))

.. mchoice:: TupleExquestion10_12
   :practice: T
   :answer_a: ['2', '3', '30', '8']
   :answer_b: ['2', '3', '8', '30']
   :answer_c:  ['30', '8', '3', '2']
   :answer_d: ['8', '30', '3', '2']
   :correct: d
   :feedback_a: This would be true if it sorted the strings in ascending order.
   :feedback_b: This would be correct if if was sorting numbers in ascending order.
   :feedback_c: This would be correct if it was sorting numbers in descending order.
   :feedback_d: It sorts the strings in descending order.

   What is printed when the following code is run?

   .. code-block:: python

      tup = ('30', '3', '2', '8')
      print(sorted(tup), reverse = True)

.. mchoice:: TupleExquestion10_13
   :practice: T
   :answer_a: [2, 3, 30, 8]
   :answer_b: [2, 3, 8, 30]
   :answer_c:  [30, 8, 3, 2]
   :answer_d: [8, 30, 3, 2]
   :correct: c
   :feedback_a: This would be true if the values were strings and it sorted in ascending order.
   :feedback_b: This would be correct if the values were sorted in ascending order.
   :feedback_c: It sorts the numbers in descending order.
   :feedback_d: This would be correcdt if the values were strings.

   What is printed when the following code is run?

   .. code-block:: python

      tup = (30, 3, 2, 8)
      print(sorted(tup), reverse = True)
