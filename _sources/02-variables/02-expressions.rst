Expressions
-----------

An *expression* is a combination of values, variables,
and operators. A value all by itself is considered an expression, and so
is a variable, so the following are all legal expressions (assuming that
the variable ``x`` has been assigned a value):

.. activecode:: 02-ac-6-expressions1

   17
   x
   x + 17


If you type an expression in interactive mode, the interpreter
*evaluates* it and displays the result:

.. activecode:: 02-ac-6-expressions2

   1 + 1
   return(1+1)


But in a script, an expression all by itself doesn't do anything! This
is a common source of confusion for beginners.

**Exercise 1: Type the following statements in the Python interpreter to
see what they do:**

.. activecode:: 02-ac-6-expressions3

   5
   x = 5
   x + 1

.. fillintheblank:: 02-fitb-1-multiply

    What will be printed when you click on the Run button in the code below?

    - :^4$: Correct. 2 times 2 = 4
      :.*: Try running the program below.

.. activecode:: Expression_Mult
   :tour_1: "Line-by-line Tour"; 1: ex1-line1; 2: ex1-line2;
   :nocodelens:

   result = 2 * 2
   print(result)
