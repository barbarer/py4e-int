Peer Instruction: Functions Multiple Choice Questions
-----------------------------------------------------

.. mchoice:: ctp-functions-08_Functions_07
   :practice: T
   :answer_a: Raaarrr I’m a bear
   :answer_b: Eeek a bear!
   :answer_c: Both
   :answer_d: Neither
   :answer_e: I don’t know
   :correct: a
   :feedback_a: Correct! The function "foo()" has been called in the last line. So, the print statement under it will be executed.
   :feedback_b: Incorrect! The function "foo()" has been called in the last line and NOT "bar()". So, the print statement under "foo()" will be executed and returned.
   :feedback_c: Incorrect! The function "foo()" has been called in the last line and NOT "bar()". So, the print statement under "foo()" will be executed and returned.
   :feedback_d: Incorrect! The function "foo()" has been called in the last line and NOT "bar()". So, the print statement under "foo()" will be executed and returned.
   :feedback_e: Incorrect! The function "foo()" has been called in the last line and NOT "bar()". So, the print statement under "foo()" will be executed and returned.
      
   This code will print:

   .. code-block:: python

      def foo():
	      print(“Raaarrr I’m a bear”)

      def bar():
	      print(“Eeek a bear!”)

      foo()


.. mchoice:: ctp-functions-08_Functions_10
   :practice: T
   :answer_a: 0
   :answer_b: 8
   :answer_c: 20
   :answer_d: Error, because a cannot be assigned in two places 
   :answer_e: I don’t know
   :correct: c
   :feedback_a: Incorrect! Change in the values of a function's arguments doesn't change the assigned value of a variable. Try replacing "first(a)" with "first(x)" in function definition.
   :feedback_b: Incorrect! Change in the values of a function's arguments doesn't change the assigned value of a variable. Try replacing "first(a)" with "first(x)" in function definition.
   :feedback_c: Correct! Change in the values of a function's arguments doesn't change the assigned value of a variable.
   :feedback_d: Incorrect! Change in the value of a function's arguments doesn't change the assigned value of a variable. Try replacing "first(a)" with "first(x)" in function definition.
   :feedback_e: Incorrect! Change in the values of a function's arguments doesn't change the assigned value of a variable. Try replacing "first(a)" with "first(x)" in function definition.
     
   What will the output be?

   .. code-block:: python

      def first(a):
         a=8

      a = 20
      first(a)
      print(a)


.. mchoice:: ctp-functions-08_Functions_13
   :practice: T
   :answer_a: 5
   :answer_b: 9
   :answer_c: 0
   :answer_d: 3
   :answer_e: I don't know
   :correct: b
   :feedback_a: Incorrect! Here, a=x=2 and b= 3+1 = 4. So, a + b + 3 = 2 + 4 + 3 = 9.
   :feedback_b: Correct! Here, a=x=2 and b= 3+1 = 4. So, a + b + 3 = 2 + 4 + 3 = 9.
   :feedback_c: Incorrect! Here, a=x=2 and b= 3+1 = 4. So, a + b + 3 = 2 + 4 + 3 = 9.
   :feedback_d: Incorrect! Here, a=x=2 and b= 3+1 = 4. So, a + b + 3 = 2 + 4 + 3 = 9.
   :feedback_e: Incorrect! Here, a=x=2 and b= 3+1 = 4. So, a + b + 3 = 2 + 4 + 3 = 9.

   What will the output be?

   .. code-block:: python

      def calculate(w, x, y):
         a=x
         b=w+1
         return a + b + 3

      print(calculate(3, 2, 0))


.. mchoice:: ctp-functions-08_Functions_14
   :practice: T
   :answer_a: x = f1()
   :answer_b: x = f2()
   :answer_c: x = f3()
   :answer_d: All of the above
   :answer_e: I don't know
   :correct: a
   :feedback_a: Correct! Only function "f1()" has a return statement.
   :feedback_b: Incorrect! Only function "f1()" has a return statement.
   :feedback_c: Incorrect! Only function "f1()" has a return statement.
   :feedback_d: Incorrect! Only function "f1()" has a return statement.
   :feedback_e: Incorrect! Only function "f1()" has a return statement.

   Which assigns x to 5?   

   .. code-block:: python

      def f1():
         return 5

      def f2():
         print(5)

      def f3():
         return print(5)


.. mchoice:: ctp-functions-08_Functions_15
   :practice: T
   :answer_a: No bugs. The code is fine.
   :answer_b: The function body is not indented.
   :answer_c: We use x as both a parameter and a variable, but we are not allowed to do that 
   :answer_d: B and C
   :answer_e: I don't know
   :correct: b
   :feedback_a: Incorrect! Body of the function is not indented.
   :feedback_b: Correct! Function body should be indented in Python.
   :feedback_c: Incorrect! x can be defined as both a parameter and variable in Python.
   :feedback_d: Incorrect! Function body should be indented in Python. x can be defined as both a parameter and variable in Python.
   :feedback_e: Incorrect! Body of the function is not indented.

   What are the bugs in the following code?

   .. code-block:: python

      def add_one(x):
      return x + 1

      x = 2
      x = x + add_one(x)


.. mchoice:: ctp-functions-08_Functions_16
   :practice: T
   :answer_a: 8, 8
   :answer_b: 15, 15
   :answer_c: 8, 15 
   :answer_d: 15, 8
   :answer_e: I don't know
   :correct: d
   :feedback_a: Incorrect! Here, odd(4, 2) will return 15 (y = y + 1 = 5 and x = x + 1 = 3) and print(x*y) in main() will return 8. The output of odd() will be printed first as it is initialized first.
   :feedback_b: Incorrect! Here, odd(4, 2) will return 15 (y = y + 1 = 5 and x = x + 1 = 3) and print(x*y) in main() will return 8. The output of odd() will be printed first as it is initialized first.
   :feedback_c: Incorrect! Here, odd(4, 2) will return 15 (y = y + 1 = 5 and x = x + 1 = 3) and print(x*y) in main() will return 8. The output of odd() will be printed first as it is initialized first.
   :feedback_d: Correct! Here, odd(4, 2) will return 15 (y = y + 1 = 5 and x = x + 1 = 3) and print(x*y) in main() will return 8. The output of odd() will be printed first as it is initialized first.
   :feedback_e: Incorrect! Here, odd(4, 2) will return 15 (y = y + 1 = 5 and x = x + 1 = 3) and print(x*y) in main() will return 8. The output of odd() will be printed first as it is initialized first.

   What will the output be?

   .. code-block:: python

      def odd(y,x):
         y = y +1
         x = x + 1
         print(x*y)

      def main():
         x = 2
         y = 4
         odd(x,y)
         print(x*y)
