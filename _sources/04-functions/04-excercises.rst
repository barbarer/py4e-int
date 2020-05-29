Exercises
---------

.. mchoice:: 04questionex_1
   :answer_a: It is slang that means "the following code is really cool"
   :answer_b: It indicates the start of a function
   :answer_c: It indicates that the following indented section of code is to be stored for later
   :answer_d: b and c are both true
   :answer_e: None of the above
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct!
   :feedback_e: Try again!

   What is the purpose of the "def" keyword in Python?

.. mchoice:: 04questionex_2
   :answer_a: Zap ABC jane fred jane
   :answer_b: Zap ABC Zap
   :answer_c: ABC Zap jane
   :answer_d: ABC Zap ABC
   :answer_e: Zap Zap Zap
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct!
   :feedback_e: Try again!

   What will the following Python program print out? (Given that each word is on its own line)

   .. code-block:: python

      def fred():
         print("Zap")

      def jane():
         print("ABC")

      jane()
      fred()
      jane()

.. mchoice:: 04questionex_3
   :answer_a: value
   :answer_b: Second
   :answer_c: parameter
   :answer_d: First
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct!
   :feedback_c: Try again!
   :feedback_d: Try again!

   What value is printed when the following code is executed?

   .. code-block:: python

      name = "John Smith"
      def myFunction(parameter):
        value = "First"
        value = parameter
        print (value)

      myFunction("Second")

.. mchoice:: 04questionex_4
   :answer_a: definition
   :answer_b: procedure
   :answer_c: turtle
   :answer_d: function
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct!

   A named sequence of statements that returns a result is known as which of the following?

.. mchoice:: 04questionex_5
   :practice: T
   :answer_a: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
   :answer_b: 1, 2, 3, 5, 6, 7, 9, 10, 11
   :answer_c: 9, 10, 11, 1, 2, 3, 5, 6, 7
   :answer_d: 9, 10, 5, 6, 1, 2, 3, 6, 7, 10, 11
   :answer_e: 1, 5, 9, 10, 5, 6, 1, 2, 3, 6, 7, 10, 11
   :correct: e
   :feedback_a: Although Python typically processes lines in order from top to bottom, function definitions and calls are an exception to this rule.
   :feedback_b: Although Python typically processes lines in order from top to bottom, function definitions and calls are an exception to this rule.  Although this order skips blank lines, it still lists the lines of code in order.
   :feedback_c: This is close, in that Python will not execute the functions until after they are called, but there are two problems here.  First, Python does not know which lines are function definitions until it processes them, so it must at least process the function headers before skipping over the functions. Section, notice that line 10 involves a function call.  Python must execute the function square before moving on to line 11.
   :feedback_d: This is close, in that Python will not execute the functions until after they are called, but there is one problem here.  Python does not know which lines are function definitions until it processes them, so it must at least process the function headers before skipping over the functions.
   :feedback_e: Python starts at line 1, notices that it is a function definition and skips over all of the lines in the function definition until it finds a line that it no longer included in the function (line 5).  It then notices line 5 is also a function definition and again skips over the function body to line 9.  On line 10 it notices it has a function to execute, so it goes back and executes that function.  Notice that that function includes another function call. It returns from the function call and completes the assignment in line 6. Then it returns the result of line 7 and completes the assignment in line 10.  Finally, it will go to line 11 after the function square and the assignment are complete.

   Consider the following Python code. Note that line numbers are included on the left.

   .. code-block:: python
      :linenos:

      def pow(b, p):
          y = b ** p
          return y

      def square(x):
          a = pow(x, 2)
          return a

      n = 5
      result = square(n)
      print(result)

   Which of the following best reflects the order in which these lines of code are processed in Python?

.. mchoice:: 04questionex_6
   :practice: T
   :answer_a: 25
   :answer_b: 5
   :answer_c: 125
   :answer_d: 32
   :correct: a
   :feedback_a: The function square returns the square of its input (via a call to pow)
   :feedback_b: What is printed is the output of the square function.  5 is the input to the square function.
   :feedback_c: Notice that pow is called from within square with a base (b) of 5 and a power (p) of two.
   :feedback_d: Notice that pow is called from within square with a base (b) of 5 and a power (p) of two.

   Consider the following Python code. Note that line numbers are included on the left.

   .. code-block:: python
      :linenos:

      def pow(b, p):
          y = b ** p
          return y

      def square(x):
          a = pow(x, 2)
          return a

      n = 5
      result = square(n)
      print(result)

.. parsonsprob:: 04questionex_9

   Put the code blocks in order below to return the middle characters from the passed string. There are four extra code blocks that are not needed in a correct solution. If the string has less than 3 characters then return the passed string. If the string has an odd length then return the middle character. If the string has an even length return the two middle characters. For example, get_middle(‘abc’) returns ‘b’ and get_middle(‘abcd’) returns ‘bc’.
   -----
   def get_avg_drop_lowest(num_list):
   =====
   def get_avg_drop_lowest(num_list) #paired
   =====
    total = sum(num_list)
    lowest = min(num_list)
    num = len(num_list)
   =====
      if num == 1:
   =====
      if num = 1: #paired
   =====
        return total
   =====
      else:
   =====
        return (total - lowest) / (num - 1)
   =====
        return (total - lowest) / (num - 1) #paired

.. parsonsprob:: 04questionex_7

   Put the code blocks in order below to return the middle characters from the passed string. There are four extra code blocks that are not needed in a correct solution. If the string has less than 3 characters then return the passed string. If the string has an odd length then return the middle character. If the string has an even length return the two middle characters. For example, get_middle(‘abc’) returns ‘b’ and get_middle(‘abcd’) returns ‘bc’.
   -----
   def get_middle(str):
   =====
   Def get_middle(str): #distractor
   =====
    num_chars = len(str)
   =====
    mid = num_chars // 2
   =====
    mid = num_chars / 2 #distractor
   =====
    if num_chars < 3:
   =====
     return str
   =====
    elif num_chars % 2 == 1:
   =====
    elif num_chars % 2 == 1
   =====
      return str[mid]
   =====
    else:
   =====
      return str[mid-1:mid+1]
   =====
      return str[mid:mid+2]

.. parsonsprob:: 04questionex_8

   Put the code blocks in order below to return the middle characters from the passed string. There are four extra code blocks that are not needed in a correct solution. If the string has less than 3 characters then return the passed string. If the string has an odd length then return the middle character. If the string has an even length return the two middle characters. For example, get_middle(‘abc’) returns ‘b’ and get_middle(‘abcd’) returns ‘bc’.
   -----
   def caught_speeding(speed, is_birthday):
   =====
    if is_birthday:
   =====
      if speed <= 65:
   =====
      if speed < 65: #distractor
   =====
        return 0
   =====
      elif speed <= 85:
   =====
        return 1
   =====
        Return 1 #distractor
   =====
    else:
   =====
      if speed <= 60:
   =====
        return 0
   =====
      elif speed <= 80:
   =====
        return 1
   =====
      else:
   =====
        return 2
