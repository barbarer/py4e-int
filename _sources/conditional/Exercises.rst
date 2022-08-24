Multiple Choice Questions
---------------------------

.. mchoice:: cndtnl-ex-mc-bool
    :practice: T
    :answer_a: True
    :answer_b: 3 == 4
    :answer_c: 3 + 4
    :answer_d: 3 + 4 == 7
    :correct: c
    :feedback_a: Try again. True and False are both Boolean literals.
    :feedback_b: Try again. The comparison between two numbers via == results in either True or False (in this case False),  both Boolean values.
    :feedback_c: 3 + 4 evaluates to 7, which is a number, not a Boolean value.
    :feedback_d: Try again. 3 + 4 evaluates to 7.  7 == 7 then evaluates to True, which is a Boolean value.

    Which of the following is **not** a boolean expression?

.. mchoice:: cndtnl-ex-mc-operators
    :practice: T
    :answer_a: ((5*3) &gt; 10) and ((4+6) == 11)
    :answer_b: (5*(3 &gt; 10)) and (4 + (6 == 11))
    :answer_c: ((((5*3) &gt; 10) and 4)+6) == 11
    :answer_d: ((5*3) &gt; (10 and (4+6))) == 11
    :correct: a
    :feedback_a: Yes, * and + have higher precedence, followed by &gt; and ==, and then the keyword &quot;and&quot;
    :feedback_b: Arithmetic operators (*, +) have higher precedence than comparison operators (&gt;, ==)
    :feedback_c: This grouping assumes Python simply evaluates from left to right, which is incorrect.
    :feedback_d: This grouping assumes that &quot;and&quot; has a higher precedence than ==, which is not true.

    Which of the following properly expresses the precedence of operators (using parentheses) in the following expression: 5*3 > 10 and 4+6==11

.. mchoice:: cndtnl-ex-mc-output
    :practice: T
    :answer_a: Output a
    :answer_b: Output b
    :answer_c: Output c
    :answer_d: Output d
    :correct: c
    :feedback_a: Although TRUE is printed after the if-else statement completes, both blocks within the if-else statement print something too.  In this case, Python would have had to have skipped both blocks in the if-else statement, which it never would do.
    :feedback_b: Because there is a TRUE printed after the if-else statement ends, Python will always print TRUE as the last statement.
    :feedback_c: Python will print FALSE from within the else-block (because 5+4 does not equal 10), and then print TRUE after the if-else statement completes.
    :feedback_d: To print these three lines, Python would have to execute both blocks in the if-else statement, which it can never do.

    What does the following code print?

    .. code-block:: python

      if 4 + 5 == 10:
          print("TRUE")
      else:
          print("FALSE")
      print("TRUE")

    ::

      a. TRUE

      b.
        TRUE
        FALSE

      c.
        FALSE
        TRUE
      d.
        TRUE
        FALSE
        TRUE

.. mchoice:: cndtnl-ex-mc-negative
    :practice: T
    :answer_a: Output a
    :answer_b: Output b
    :answer_c: Output c
    :answer_d: It will cause an error because every if statement must have an else statement.
    :correct: b
    :feedback_a: Because -10 is less than 0, Python will execute the body of the if-statement here.
    :feedback_b: Python executes the body of the if-block as well as the statement that follows the if-block.
    :feedback_c: Python will also execute the statement that follows the if-block (because it is not enclosed in an else-block, but rather just a normal statement).
    :feedback_d: It is valid to have an if-block without a corresponding else-block (though you cannot have an else-block without a corresponding if-block).

    What does the following code print?

    .. code-block:: python

      x = -10
      if x < 0:
          print("The negative number ",  x, " is not valid here.")
      print("This is always printed")

    ::

      a.
      This is always printed

      b.
      The negative number -10 is not valid here
      This is always printed

      c.
      The negative number -10 is not valid here

.. mchoice:: cndtnl-ex-mc-chainedNested
    :practice: T
    :answer_a: I only
    :answer_b: II only
    :answer_c: III only
    :answer_d: II and III
    :answer_e: I, II, and III
    :correct: b
    :feedback_a: You can not use a Boolean expression after an else.
    :feedback_b: Yes, II will give the same result.
    :feedback_c: No, III will not give the same result.  The first if statement will be true, but the second will be false, so the else part will execute.
    :feedback_d: No, Although II is correct III will not give the same result.  Try it.
    :feedback_e: No, in I you can not have a Boolean expression after an else.

    Which of I, II, and III below gives the same result as the following nested if?

    .. code-block:: python

      # nested if-else statement
      x = -10
      if x < 0:
          print("The negative number ",  x, " is not valid here.")
      else:
          if x > 0:
              print(x, " is a positive number")
          else:
              print(x, " is 0")


    .. code-block:: python

      I.

      if x < 0:
          print("The negative number ",  x, " is not valid here.")
      else x > 0:
          print(x, " is a positive number")
      else:
          print(x, " is 0")


    .. code-block:: python

      II.

      if x < 0:
          print("The negative number ",  x, " is not valid here.")
      elif x > 0:
         print(x, " is a positive number")
      else:
          print(x, " is 0")

    .. code-block:: python

      III.

      if x < 0:
          print("The negative number ",  x, " is not valid here.")
      if x > 0:
          print(x, " is a positive number")
      else:
          print(x, " is 0")

.. mchoice:: cndtnl-ex-mc-ifs
    :practice: T
    :answer_a: x will always equal 0 after this code executes for any value of x
    :answer_b: if x is greater than 2, the value in x will be doubled after this code executes
    :answer_c: if x is greater than 2, x will equal 0 after this code executes
    :correct: c
    :feedback_a: If x was set to 1 originally, then it would still equal 1.
    :feedback_b: What happens in the original when x is greater than 2?
    :feedback_c: If x is greater than 2, it will be set to 0.

    Which of the following is true about the code below?

    ::

      x = 3
      if (x > 2):
          x = x * 2;
      if (x > 4):
          x = 0;
      print(x)

.. mchoice:: cndtnl-ex-mc-weight
    :practice: T
    :answer_a: $3.45
    :answer_b: $3.11
    :answer_c: $3.105
    :answer_d: $3.10
    :correct: c
    :feedback_a: This would be the answer without the 10% discount for buying 10 or more items
    :feedback_b: Python doesn't automatically round up
    :feedback_c: This is the actual result.  But, can you pay $3.105?
    :feedback_d: Python doesn't automatically change $3.105 to $3.10.

    What is the total for 12 items that weigh 3 pounds?

    ::

      weight = 0.5
      numItems = 5
      if weight < 1:
          price = 1.45
      if weight >= 1:
          price = 1.15
      total = weight * price
      if numItems >= 10:
          total = total * 0.9
      print(weight)
      print(price)
      print(total)

.. mchoice:: cndtnl-ex-mc-tf
    :practice: T
    :answer_a: I
    :answer_b: II
    :answer_c: I and II
    :answer_d: II and III
    :correct: b
    :feedback_a: Incorrect. This evaluates to False - a statement cannot be True AND False.
    :feedback_b: The statement can be either True or False which evaluates to True.
    :feedback_c: Incorrect. I evaluates to False.
    :feedback_d: Incorrect. III evaluates to False because a statement cannot be False AND True.

    Which of the following will evaluate to true?

       | I. True AND False
       | II. False or True
       | III. False AND (True or False)

.. mchoice:: cndtnl-ex-mc-equal_v2
    :practice: T
    :answer_a: (num1 == num2)
    :answer_b: (num1 == num2) or (num1 > 0)
    :answer_c: (num1 == num2) and (num1 < 0)
    :answer_d: (num1 == num2) and (num1 > 0)
    :correct: d
    :feedback_a: Incorrect. The two variables can be equal to each other and still be negative integers.
    :feedback_b: Incorrect. This is true if the two numbers are equal or num1 is greater than 0.
    :feedback_c: Incorrect. The two variables would both be negative in this case.
    :feedback_d: If num1 is equal to num2 and num1 is greater than 0, then both values must be positive.

    Given two variables, ``num1`` and ``num2``, which of the following would mean that both ``num1`` and ``num2`` are
    positive integers?

.. mchoice:: cndtnl-ex-mc-true
    :practice: T
    :answer_a: float
    :answer_b: string
    :answer_c: boolean
    :answer_d: integer
    :correct: c
    :feedback_a: Try again! True is not a float.
    :feedback_b: Try again! True is not a string.
    :feedback_c: True is a boolean value.
    :feedback_d: Try again! True is not an integer.

    ``True`` is what type of variable?

.. mchoice:: cndtnl-ex-mc-not-equal-test
    :practice: T
    :answer_a: True
    :answer_b: False
    :answer_c: 0
    :answer_d: 3
    :answer_e: Syntax error
    :correct: b
    :feedback_a: This would be true if a was not equal to 3, but it is.
    :feedback_b: A is equal to three so this statement is false.
    :feedback_c: Some languages use 0 for false, but Python will print False.
    :feedback_d: This does not set b to the value of a.
    :feedback_e: This code is legal.

    What is the output from the following code?

    ::

      a = 3
      b = (a != 3)
      print(b)

.. mchoice:: cndtnl-ex-mc-which-for-or
    :practice: T
    :answer_a: a == b == 5
    :answer_b: a = b or a = 5
    :answer_c: a == b or a == 5
    :answer_d: a = b and a = 5
    :answer_e: a == b and a = 5
    :correct: c
    :feedback_a: You can not join conditionals in this way.
    :feedback_b: You must use == to test for equality.
    :feedback_c: This will be true if a is equal to b or a is equal to 5.
    :feedback_d: You must use == to test for equality.
    :feedback_e: This will only be true when a and b both equal 5.

    Which of the following evaluates to True when ``a`` is equal to ``b`` or when ``a`` is equal to ``5``?
