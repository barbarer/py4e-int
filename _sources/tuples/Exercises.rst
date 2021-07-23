Multiple Choice Questions
--------------------------

.. mchoice:: TupleExquestion10_1
   :practice: T
   :answer_a: return aTuple[1:2][1]
   :answer_b: return aTuple[2][1]
   :answer_c: return aTuple[1:2](1)
   :answer_d: return aTuple[1][1]
   :correct: d
   :feedback_a: Incorrect! Running this code would result in an error. Try again.
   :feedback_b: Incorrect! This would access the value 15. Try again.
   :feedback_c: Incorrect! Running this code would result in an error. Try again.
   :feedback_d: Correct! This first goes to the second item in the tuple, then grabs the second item from the list, which is 20.

   Choose the correct way to make the function ``practice_with_slicing`` return the value 20.

   .. code-block:: python

      def practice_with_slicing():
          aTuple = ("Orange", [10, 20, 30], (5, 15, 25))
          # return statement

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

   What is the type of the following ``aTuple``?

   .. code-block:: python

      def practice_with_var_types():
          aTuple = ("Orange")
          return type(aTuple)

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

   What is the output of the following code?

   .. code-block:: python

      def practice_with_var_assignment():
          aTuple = "Yellow", 20, "Red"
          a, b, c = aTuple
          return a

.. mchoice:: TupleExquestion10_5
   :practice: T
   :answer_a: TypeError
   :answer_b: (100, 800, 200, 300, 400, 500)
   :answer_c: (800, 100, 200, 300, 400, 500)
   :answer_d: (100, 200, 800, 300, 400, 500)
   :correct: a
   :feedback_a: Correct! A tuple is immutable, therefore you cannot change its values.
   :feedback_b: Incorrect! Remember, tuples are immutable. Try again.
   :feedback_c: Incorrect! Remember, tuples are immutable. Try again.
   :feedback_d: Incorrect! Remember, tuples are immutable. Try again.

   What is returned when the following code is run?

   .. code-block:: python

      def tuple_indexing():
          aTuple = (100, 200, 300, 400, 500)
          aTuple[1] = 800
          return aTuple

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

   Which of the following two Python codes will produce the same output?

   .. code-block:: python

      def practice_with_slicing():
          tupl1 = (5, 3, 1, 9, 0)
          # options i, ii, iii, or iv


      i) return tup1[:-1]
      ii) return tup1[0:5]
      iii) return tupl1[0:4]
      iv) return tupl1[-4:]

.. mchoice:: TupleExquestion10_7
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: Incorrect! When the first numbers in both tuples are equal, the comparison operator will move on to the next pair of numbers. Try again.
   :feedback_b: Correct! The compiler will look at the first pair of different numbers, then decide whether it is true or false depending on that pair.

   What is returned when the following code is run?

   .. code-block:: python

      def tuple_comparison():
          return (66, 4, 17, 4) < (66, 4, 16, 5)

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

   What is returned when the following code is run?

   .. code-block:: python

      def slice_practice():
          a = (1, 2, 3, 4)
          return a[1:-1]


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
   :correct: c
   :feedback_a: Incorrect! This would be printed if in line 3 we called print(x) instead. Try again.
   :feedback_b: Incorrect! Hint: think about how tuple assignment works and apply that knowledge to lists. Try again.
   :feedback_c: Correct! y is associated with the last value of tuple m.

   What is returned when the following code is run?

   .. code-block:: python

      def tuple_assignment_practice():
          m = ('have', 'fun')
          m = list(m)
          x, y = m
          return y
