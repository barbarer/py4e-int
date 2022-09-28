Peer Instruction: Variable Multiple Choice Questions
---------------------------------------------------------
.. mchoice:: ctp-reviewtest1-14_review_11
   :author: Cynthia Taylor
   :practice: T
   :answer_a: Ints only have 2 decimal places
   :answer_b: Ints don't have any decimals
   :answer_c: It's easier to multiply ints
   :answer_d: Funsies
   :answer_e: I don't know
   :correct: b
   :feedback_a: Try again. Ints do not have any decimal places.
   :feedback_b: Correct! Because ints do not have any decimal places,therefore by multipling it with 100, the two decimal places can be transformed into ones and tens place.
   :feedback_c: Try again. Try to consider why we multiply the number by 100. Becausen we want the two decimal places to be transformed into ones and tens place.
   :feedback_d: Try again. Good point but we want the funsies?
   :feedback_e: Try again. Try to consider why we multiply the number by 100. Because ints do not have any decimal places,therefore by multipling it with 100, the two decimal places can be transformed into ones and tens place.

   Recall that when we wanted to cut off all but two decimal places of a float, we multiplied it by 100, cast it as a integer, and then divided it by 100 using float division. Why did we cast it as an int?

.. mchoice:: dz-lecture_2_5
   :author: Dan Zingaro
   :practice: T
   :answer_a: Yes
   :answer_b: No, because it contains an infinite number of steps
   :answer_c: No, because it never halts
   :answer_d: No, because step 3 is not well-defined
   :correct: c
   :feedback_a: Try again. Step 3 ends with returning to step 1. It never ends. But an algorithm must halt.
   :feedback_b: Try again. B is incorrect because there are three steps.
   :feedback_c: Correct! Because step 3 ends with returning to step 1. It never ends.
   :feedback_d: Try again. It is true that there are problems with step 3. But it is because step 3 makes it never halt.

   Is the following an algorithm?

   .. code-block:: python

      Step 1: write down the number 0
      Step 2: add 3
      Step 3: return to step 1


.. mchoice:: dz-lecture_2_8
   :author: Dan Zingaro
   :practice: T
   :answer_a: Nothing. They are both 1
   :answer_b: Nothing. They might be of different types, but types don't matter in programming
   :answer_c: 1 is an integer and 1.0 is a string, because of the character
   :answer_d: 1 is an integer and 1.0 is a floating-point number
   :answer_e: 1.0 is an integer and 1 is a floating-point number
   :correct: d
   :feedback_a: Try again. 1 and 1.0 represent different types in programming.
   :feedback_b: Try again. 1 and 1.0 are different types. And types are very important in programming.
   :feedback_c: Try again. 1 is an integer but 1.0 is not a string. It has a decimal place, so 1.0 is a float.
   :feedback_d: Correct! 1 and 1.0 represent different types in programming. And 1.0 with a decimal place is a float.
   :feedback_e: Try again. An integer does not have any decimal place but a float does.

   What is the difference between the literals 1 and 1.0?

.. mchoice:: dz-lecture_2_12
   :author: Dan Zingaro
   :practice: T
   :answer_a: 39
   :answer_b: 22
   :answer_c: 35
   :answer_d: 20
   :answer_e: 18
   :correct: a
   :feedback_a: Correct! + operator adds x and 2 together, and x equals to 37. Therefore, y equals to the sum of 37 and 2.
   :feedback_b: Try again. + operator adds x and 2 together, and x equals to 37. Therefore, y equals to the sum of 37 and 2. Integers are immutable in Python. The later changes in x do not affect the value of y.
   :feedback_c: Try again. + operator adds x and 2 together, and x equals to 37. Therefore, y equals to the sum of 37 and 2.
   :feedback_d: Try again. + operator adds x and 2 together, and x equals to 37. Therefore, y equals to the sum of 37 and 2. Integers are immutable in Python. The later changes in x do not affect the value of y.
   :feedback_e: Try again. + operator adds x and 2 together, and x equals to 37. Therefore, y equals to the sum of 37 and 2. Integers are immutable in Python. The later changes in x do not affect the value of y.

   What is the value of ``y`` after this code runs?

   .. code-block:: python

      x = 37
      y = x + 2
      x = 20

.. mchoice:: dz-lecture_2_13
   :author: Dan Zingaro
   :practice: T
   :answer_a: 39
   :answer_b: 22
   :answer_c: 35
   :answer_d: 20
   :answer_e: 18
   :correct: c
   :feedback_a: Try again. - operator means x substracts 2, and x equals to 37. Therefore, y equals to the 35.
   :feedback_b: Try again. - operator means x substracts 2, and x equals to 37. Therefore, y equals to the 35. Integers are immutable in Python. The later changes in x do not affect the value of y.
   :feedback_c: Correct! - operator means x substracts 2, and x equals to 37. Therefore, y equals to the 35.
   :feedback_d: Try again. - operator means x substracts 2, and x equals to 37. Therefore, y equals to the 35. Integers are immutable in Python. The later changes in x do not affect the value of y.
   :feedback_e: Try again. - operator means x substracts 2, and x equals to 37. Therefore, y equals to the 35. Integers are immutable in Python. The later changes in x do not affect the value of y.

   What is the value of ``y`` after this code runs?

   .. code-block:: python

      x = 37
      y = x - 2
      x = 20

.. mchoice:: dz-lecture_4_3
   :author: Dan Zingaro
   :practice: T
   :answer_a: True
   :answer_b: False
   :answer_c: 3
   :answer_d: Syntax error
   :correct: b
   :feedback_a: Try again. != means not equal. Because a equals to 3, it returns bool value False. Therefore, b = False.
   :feedback_b: Correct! != means not equal. Because a equals to 3, it returns bool value False. Therefore, b = False.
   :feedback_c: Try again. != means not equal. Because a equals to 3, it returns bool value False. Therefore, b = False.
   :feedback_d: Try again. != means not equal. Because a equals to 3, it returns bool value False. Therefore, b = False.

   What does the following code print?

   .. code-block:: python

      a = 3
      b = (a != 3)
      print(b)

.. mchoice:: dz-lecture_4_4
   :author: Dan Zingaro
   :practice: T
   :answer_a: True
   :answer_b: False
   :answer_c: 3
   :answer_d: Syntax error
   :correct: a
   :feedback_a: Correct! == tests for equality. Because a equals to 3, it returns bool value True. Therefore, b = True.
   :feedback_b: Try again. == tests for equality. Because a equals to 3, it returns bool value True. Therefore, b = True.
   :feedback_c: Try again. == tests for equality. Because a equals to 3, it returns bool value True. Therefore, b = True.
   :feedback_d: Try again. == tests for equality. Because a equals to 3, it returns bool value True. Therefore, b = True.

   What does the following code print?

   .. code-block:: python

      a = 3
      b = (a == 3)
      print(b)


.. mchoice:: dz-lecture_4_6
   :author: Dan Zingaro
   :practice: T
   :answer_a: a == b == 5
   :answer_b: a == b or a == 5
   :answer_c: a == b and a == 5
   :answer_d: a == (b == 5)
   :correct: b
   :feedback_a: Try again. The expression here means a and b are equal to 5.
   :feedback_b: Correct! or produces True exactly when at least one of its operands is True.
   :feedback_c: Try again. And produces True exactly when both of its operands are True. The expression here evaluates to true when both of the two conditions are true.
   :feedback_d: Try again. b == 5 returns a bool value. The expression here evaluates to true when b equals to 5 and a equals to bool value True.

   I would like an expression that evaluates to True exactly when at least one of the following two conditions is true: (1) ``a`` and ``b`` are equal, (2) when ``a`` has value 5. Which of these expressions does that?


.. mchoice:: dz-lecture_4_7
   :author: Dan Zingaro
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Correct! not a returns false. False and b returns False. or produces True exactly when at least one of its operands is True. Therefore, the final result returns True.
   :feedback_b: Try again. not a returns false because 'not' is a Logical operator in Python that will return True if the expression is False. And produces True exactly when both of its operands are True. So False and b returns False. or produces True exactly when at least one of its operands is True. Therefore, the final result returns True.

   What is the value of the last expression? (Remember that ``not`` has the highest precedence, then ``and``, then ``or``.)

   .. code-block:: python

      a = True
      b = False
      c = True
      not a and b or c

.. mchoice:: dz-lecture_4_9
   :author: Dan Zingaro
   :practice: T
   :answer_a: (a // 10) % 10
   :answer_b: (a % 100) // 10
   :answer_c: (a % 10) // 10
   :answer_d: More than one of the above
   :answer_e: None of the above
   :correct: d
   :feedback_a: Try again. A is correct but b is also right. a % 100 returns the middle and right digit of a. // 10 returns the middle digit.
   :feedback_b: Try again. B is correct but a is also right. a // 10 returns the left and middle digit of a. % 10 returns the middle digit.
   :feedback_c: Try again. C cannot return the middle digit. a % 10 returns the right digit of a. // 10 still gets the right digit.
   :feedback_d: Correct! Both A and B are correct!
   :feedback_e: Try again. A and B are both correct! In the option A, a % 100 returns the middle and right digit of a. // 10 returns the middle digit. In the option B, a // 10 returns the left and middle digit of a. % 10 returns the middle digit.

   Assume that a refers to a three-digit integer. Which of the following evaluates to the middle digit of ``a``? (For example, if a referred to value 456, we want an expression with value 5.)
