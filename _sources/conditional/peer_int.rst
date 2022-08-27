Peer Instruction: Exception Multiple Choice Questions
---------------------------------------------------------

.. mchoice:: ctp-Stringlists-10_Exceptions_06
    :author: Cynthia Taylor
    :practice: T
    :answer_a: int, int, int
    :answer_b: int, float, boolean
    :answer_c: int, float, int
    :answer_d: float, real, boolean
    :answer_e: I don’t know
    :correct: b
    :feedback_a: Try again. A float is a number with a fractional part and a boolean is a true or false value of an expression.
    :feedback_b: Correct! 3 + 4 evaluates to 7, which is a whole number. 3.1415 has a fracional part, and 7 < 3 is the false value of an expression.
    :feedback_c: Try again. 7 < 3 here represents the false value of an expression.
    :feedback_d: Try again. 3 + 4 evaluates to 7, which is a whole number, and 3.1415 has a fracional part.
    :feedback_e: Try again. 3 + 4 evaluates to 7, which is a whole number. 3.1415 has a fracional part, and 7 < 3 is the false value of an expression.

    Select the correct type for each variable

    .. code-block:: python

      a = 7 + 3
      b = 3.1415
      c = 7 < 3


.. mchoice:: ctp-Stringlists-10_Exceptions_07
    :author: Cynthia Taylor
    :practice: T
    :answer_a: int
    :answer_b: function
    :answer_c: real
    :answer_d: This will cause an error
    :answer_e: I don’t know
    :correct: a
    :feedback_a: Correct! add(5,1) outputs 6, which is a whole number. And type() returns class type of the object.
    :feedback_b: Try again. add(5,1) = 5 + 1 = 6. And type() returns class type of the object.
    :feedback_c: Try again. add(5,1) = 5 + 1 = 6. And type() returns class type of the object.
    :feedback_d: Try again. add(5,1) generates a new number. And type() returns class type of the object while print() prints the result out.
    :feedback_e: Try again. add(5,1) = 5 + 1 = 6. And type() returns class type of the object while print() prints the result out.

    What type will this print?

    .. code-block:: python

      def add(x, y):
          z = x + y
          return z
      print(type(add(5,1)))

.. mchoice:: ctp-Stringlists-10_Exceptions_slide_9
    :author: Cynthia Taylor
    :practice: T
    :answer_a:
    :answer_b:
    :answer_c:
    :answer_d: None of the above
    :answer_e: I don't know
    :correct: c
    :feedback_a: Try again. i*i multiplies i with i rather than output value.
    :feedback_b: Try again. str(i) is a string type and it cannot get multiplied by another string.
    :feedback_c: Correct! str(i)*i will multiply i in the string type for i times.
    :feedback_d: Try again. str(i) can change i into a string type. Multiply str(i) and i will have the value of i for i times.
    :feedback_e: Try again. str(i) can change i into a string type. Multiply str(i) and i will have the value of i for i times.


    Which code will print the value of ``i``, ``i`` times?

    .. code-block:: python

        A.
        i = 5
        print(i*i)

        B.
        i = 5
        print(str(i)*str(i))

        C.
        i = 5
        print(str(i)*i)



.. mchoice:: ctp-Stringlists-10_Exceptions_12
    :author: Cynthia Taylor
    :practice: T
    :answer_a: "Math is lame"
    :answer_b: "Algebraic!"
    :answer_c: Nothing, this will cause an error
    :answer_d: I don’t know
    :correct: b
    :feedback_a: Try again. Because  x = 1/0 causes an error. Once the error appears, it will be detected by Exceptions. And the program will jump to Exception execution.
    :feedback_b: Correct! Because x=1/10 causes an error which is detected by Exceptions.
    :feedback_c: Try again. Yes, this will cause an error. But the error will be detected by Exceptions. So the program will not stop.
    :feedback_d: Try again. Because  x = 1/0 can cause an error. Once the error appears, it will be detected by Exceptions. And the program will jump to Exception execution.

    What does the following code print?

    .. code-block:: python

      try:
	        x = 1/0
	        print("Math is lame!")
      except Exception as e:
	        print("Algebraic!")

.. mchoice:: ctp-reviewtest1-14_review_03
    :author: Cynthia Taylor
    :practice: T
    :answer_a:
    :answer_b:
    :answer_c:
    :answer_d:
    :answer_e: I don't know
    :correct: b
    :feedback_a: Try again. You can get a right result if grade is 98. But if there is any grade under 90, the result will always be 'You got a B!' since the second condition can always be satisfied.
    :feedback_b: Correct! If the condition for if is False , it checks the condition of the next elif block and so on. If previous condition is satisfied, the body of elif will not be executed.
    :feedback_c: Try again. This will cause a syntax error because there is no If leading the whole block.
    :feedback_d: Try again. You can get a right result but grade < 90 in elif (grade >= 80) and (grade < 90) is redundant because elif block will be executed only if if block is not satisfied.
    :feedback_e: Try again. There are three different conditions and output: grade > 90 --> 'You got an A!'; 80 <= grade < 90 --> 'You got a B!'; grade < 80 --> 'You got something else'. Considering to use the 'if...elif...else' structure to distinguish these conditions.

    Which of the following rewrites this code using Elif?

      .. sourcecode:: python

          grade = 98
          if grade > = 90:
              print('You got an A!)
          if grade > = 80 and grade < 90:
              print('You got a B!')
          if grade < 80:
              print ('You got something else')


    ::

      A.

          grade = 98
          if (grade >= 90):
              print('You got an A!')
          elif (grade < 90):
          	  print('You got a B!')
          elif (grade >= 80):
          	  print('You got a B!')
          elif (grade < 80):
          	  print ('You got something else')


      B.

          grade = 98
          if (grade >= 90):
          	  print('You got an A!')
          elif (grade >= 80):
          	  print('You got a B!')
          else:
          	  print ('You got something else')


      C.

          grade = 98
          elif (grade >= 90):
          	  print('You got an A!')
          elif (grade >= 80):
          	  print('You got a B!')
          elif (grade < 80):
          	  print ('You got something else')


      D.

          grade = 98
          if (grade >= 90):
          	  print('You got an A!')
          elif (grade >= 80) and (grade < 90):
          	  print('You got a B!')
          else:
          	  print ('You got something else')
