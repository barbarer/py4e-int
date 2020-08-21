Multiple Choice Questions
--------------------------

.. mchoice:: Exercises_question10_1
   :practice: T
   :answer_a: aTuple[1:2][1]
   :answer_b: aTuple[2][1]
   :answer_c: aTuple[1:2](1)
   :answer_d: aTuple[1][1]
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct! This first goes to the second item in the tuple, then grabs the second item from the list, which is 20.

   Choose the correct way to access the value 20 from the following tuple.

   .. code-block:: python

      aTuple = ("Orange", [10, 20, 30], (5, 15, 25))

.. mchoice:: Exercises_question10_2
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Correct! You can create tuples using tuple packing which requires no parentheses.
   :feedback_b: Try again!

   True or False? A python tuple can be created without using any parentheses.


.. mchoice:: Exercises_question10_3
   :practice: T
   :answer_a: list
   :answer_b: tuple
   :answer_c: array
   :answer_d: str
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct! To create a tuple with a single item, there must be a comma after the first item.

   What is the type of the following variable?

   .. code-block:: python

      aTuple = ("Orange")
      print(type(aTuple))

.. mchoice:: Exercises_question10_4
   :practice: T
   :answer_a: ("Yellow", 20, "Red")
   :answer_b: Yellow
   :answer_c: 20
   :answer_d: Red
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! The tuple packing makes the first value of the tuple equal to a.
   :feedback_c: Try again!
   :feedback_d: Try again!

   What is the output of the following code?

   .. code-block:: python

      aTuple = "Yellow", 20, "Red"
      a, b, c = aTuple
      print(a)

.. mchoice:: Exercises_question10_5
   :practice: T
   :answer_a: TypeError
   :answer_b: (100, 800, 200, 300, 400, 500)
   :answer_c: (800, 100, 200, 300, 400, 500)
   :answer_d: (100, 200, 800, 300, 400, 500)
   :correct: a
   :feedback_a: Correct! A tuple is immutable, therefore you cannot change its values.
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Try again!

   What is printed when the following code is run?

   .. code-block:: python

      aTuple = (100, 200, 300, 400, 500)
      aTuple[1] = 800
      print(aTuple)

.. mchoice:: Exercises_question10_6
   :practice: T
   :answer_a: i, ii
   :answer_b: ii, iv
   :answer_c: i, iv
   :answer_d: i, iii
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct! These two options will both output all the items in the tuple except for the last one.

   Which of the following two Python codes will produce the same output?

   .. code-block:: python

      tupl1 = (5, 3, 1, 9, 0)

      i) print(tup1[:-1])
      ii) print(tup1[0:5])
      iii) print(tupl1[0:4])
      iv) print(tupl1[-4:])

.. mchoice:: Exercises_question10_7
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Try again!
   :feedback_b: Correct! The compiler will look at the first pair of different numbers, then decide whether it is true or false depending on that pair.

   What is returned when the following code is run?

   .. code-block:: python

      (66, 4, 17, 4) < (66, 4, 16, 5)

.. mchoice:: Exercises_question10_8
   :practice: T
   :answer_a: Error, tuple slicing doesn't exist
   :answer_b: [2, 3, 4]
   :answer_c: (2, 3, 4)
   :answer_d: (2, 3)
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct! This tuple slicing grabs the second item all the way to the second to last item.

   What is the value of a[1:-1] if it exists?

   .. code-block:: python

      a = (1, 2, 3, 4)


.. mchoice:: Exercises_question10_9
   :practice: T
   :answer_a: KeyError
   :answer_b: TypeError
   :answer_c: Shape Error
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! Shape errors are more likely to occur when working with compound data structures.

   What is the name of an error caused when a data structure has the wrong type, size, or composition?


.. mchoice:: Exercises_question10_10
   :practice: T
   :answer_a: have
   :answer_b: ['have', 'fun']
   :answer_c: fun
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! y is associated with the last value of tuple m.

   What is printed when the following code is written?

   .. code-block:: python

      m = ['have', 'fun']
      x, y = m
      print(y)
