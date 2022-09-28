Peer Instruction: Functions Multiple Choice Questions
-----------------------------------------------------

.. mchoice:: ctp-functions-08_Functions_07
   :author: Cynthia Taylor
   :practice: T
   :answer_a: Raaarrr I'm a bear
   :answer_b: Eeek a bear!
   :answer_c: Both
   :answer_d: Neither
   :answer_e: I don't know
   :correct: a
   :feedback_a: Correct! The function "foo()" has been called in the last line. So, the print statement under it will be executed.
   :feedback_b: Incorrect! The function "foo()" has been called in the last line and NOT "bar()". So, the print statement under "foo()" will be executed and returned.
   :feedback_c: Incorrect! The function "foo()" has been called in the last line and NOT "bar()". So, the print statement under "foo()" will be executed and returned.
   :feedback_d: Incorrect! The function "foo()" has been called in the last line and NOT "bar()". So, the print statement under "foo()" will be executed and returned.
   :feedback_e: Incorrect! The function "foo()" has been called in the last line and NOT "bar()". So, the print statement under "foo()" will be executed and returned.

   What does the following code print?

   .. code-block:: python

      def foo():
	      print("Raaarrr I'm a bear")

      def bar():
	      print("Eeek a bear!")

      foo()


.. mchoice:: ctp-functions-08_Functions_10
   :author: Cynthia Taylor
   :practice: T
   :answer_a: 0
   :answer_b: 8
   :answer_c: 20
   :answer_d: Error, because a cannot be assigned in two places
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! Change in the values of a function's arguments doesn't change the assigned value of a variable. Try replacing "first(a)" with "first(x)" in function definition.
   :feedback_b: Incorrect! Change in the values of a function's arguments doesn't change the assigned value of a variable. Try replacing "first(a)" with "first(x)" in function definition.
   :feedback_c: Correct! Change in the values of a function's arguments doesn't change the assigned value of a variable.
   :feedback_d: Incorrect! Change in the value of a function's arguments doesn't change the assigned value of a variable. Try replacing "first(a)" with "first(x)" in function definition.
   :feedback_e: Incorrect! Change in the values of a function's arguments doesn't change the assigned value of a variable. Try replacing "first(a)" with "first(x)" in function definition.

   What does the following code print?

   .. code-block:: python

      def first(a):
         a=8

      a = 20
      first(a)
      print(a)


.. mchoice:: ctp-functions-08_Functions_13
   :author: Cynthia Taylor
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

   What does the following code print?

   .. code-block:: python

      def calculate(w, x, y):
         a=x
         b=w+1
         return a + b + 3

      print(calculate(3, 2, 0))


.. mchoice:: ctp-functions-08_Functions_14
   :author: Cynthia Taylor
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

   Which sets ``x`` to the value 5?

   .. code-block:: python

      def f1():
         return 5

      def f2():
         print(5)

      def f3():
         return print(5)


.. mchoice:: ctp-functions-08_Functions_15
   :author: Cynthia Taylor
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

   Which of the following are true about this code?

   .. code-block:: python

      def add_one(x):
      return x + 1

      x = 2
      x = x + add_one(x)


.. mchoice:: ctp-functions-08_Functions_16
   :author: Cynthia Taylor
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

   What does the following code print?

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

.. mchoice:: dz-lecture_6_4
   :author: Dan Zingaro
   :practice: T
   :answer_a: Example
   :answer_b: Type contract
   :answer_c: Header
   :answer_d: Description
   :answer_e: Body
   :correct: a
   :feedback_a: Correct! The function returns a boolean but the example returns an integer.
   :feedback_b: Incorrect! The name and type of parameters have been clearly defined. Option A is the answer becauase the function returns a boolean but the example returns an integer.
   :feedback_c: Incorrect! The syntax of function's header is correct. Option A is the answer becauase the function returns a boolean but the example returns an integer.
   :feedback_d: Incorrect! The function has been clearly descibed. Option A is the answer becauase the function returns a boolean but the example returns an integer.
   :feedback_e: Incorrect! The body of the function has been defined accurately. Option A is the answer becauase the function returns a boolean but the example returns an integer.

   One of the components of this function is inconsistent with the rest. Which is it?

   .. code-block:: python

      def sum_eleven(num1, num2, num3):
         '''(int, int, int) -> bool
         Return True iff num1, num2, and num3 sum to 11.
         >>>sum_eleven (4, 5, 2)
         11
         '''
         return num1 + num2 + num3 == 11


.. mchoice:: dz-lecture_6_5
   :author: Dan Zingaro
   :practice: T
   :answer_a: Example
   :answer_b: Type contract
   :answer_c: Header
   :answer_d: Description
   :answer_e: Body
   :correct: b
   :feedback_a: Incorrect! The example has been correctly defined. Option B is right because the function returns an integer but the type of contract indicates bool.
   :feedback_b: Correct! Option B is right because the function returns an integer but the type of contract indicates bool.
   :feedback_c: Incorrect! The syntax of function's header is correct. Option B is right because the function returns an integer but the type of contract indicates bool.
   :feedback_d: Incorrect! The function has been clearly descibed. Option B is right because the function returns an integer but the type of contract indicates bool.
   :feedback_e: Incorrect! The body of the function has been defined accurately. Option B is right because the function returns an integer but the type of contract indicates bool.

   One of the components of this function is inconsistent with the rest. Which is it?

   .. code-block:: python

      def rightmost_digit(a):
         '''(int) -> bool
         Return the rightmost digit of a.
         >>>rightmost_digit (14)
         4
         '''
         return a % 10


.. mchoice:: dz-lecture_6_8
   :author: Dan Zingaro
   :practice: T
   :answer_a: >>> num_pizzas(1, 2, 3)   2
   :answer_b: >>> num_pizzas(1, 2, 3)   1
   :answer_c: >>> num_pizzas(1, 2, 3)   9
   :answer_d: >>> num_pizzas(1, 2, 3)   6
   :correct: a
   :feedback_a: Correct! The group will need atleast 11 slices. Since each pizza has 8 slices, the group would need atleast 2 pizzas.
   :feedback_b: Incorrect! The group will need atleast 11 slices. Since each pizza has 8 slices, the group would need atleast 2 pizzas.
   :feedback_c: Incorrect! The group will need atleast 11 slices. Since each pizza has 8 slices, the group would need atleast 2 pizzas.
   :feedback_d: Incorrect! The group will need atleast 11 slices. Since each pizza has 8 slices, the group would need atleast 2 pizzas.

   At a pizzeria, adults order two slices, boys order three slices, and girls order one slice. Each pizza has eight slices. Write a function that takes three parameters representing the number of adults, boys, and girls, and returns the required number of pizzas. Which example is correct?
