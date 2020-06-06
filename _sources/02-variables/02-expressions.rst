Expressions
-----------

An *expression* is a combination of values, variables,
and operators. A value all by itself is considered an expression, and so
is a variable, so the following are all legal expressions (assuming that
the variable ``x`` has been assigned a value):

.. code-block:: python

   17
   x
   x + 17


If you type an expression in interactive mode, the interpreter
*evaluates* it and displays the result:

.. activecode:: 02-ac-6-expressions2
  :caption: Evaluating expressions

  1 + 1
  print(1+1)


But in a script, an expression all by itself doesn't do anything! This
is a common source of confusion for beginners.

Type the following statements in the Python interpreter to
see what they do:

.. code-block:: python

   5
   x = 5
   x + 1

.. mchoice:: var-expressions-mc-print
   :practice: T
   :answer_a: 4
   :answer_b: 8
   :answer_c: 2
   :answer_d: 0
   :correct: a
   :feedback_a: Correct! This code prints the result of 2 * 2.
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Try again!

   What will be printed after the following code executes?

   ::

      result = 2 * 2
      print(result)

.. mchoice:: var-expressions-mc-expression
   :practice: T
   :answer_a: 5
   :answer_b: x = 5
   :answer_c: x + 1
   :answer_d: all of the above
   :answer_e: none of the above
   :correct: d
   :feedback_a: An expression is a combination of values, variables, and operators.
   :feedback_b: An expression is a combination of values, variables, and operators.
   :feedback_c: An expression is a combination of values, variables, and operators.
   :feedback_d: Correct!
   :feedback_e: An expression is a combination of values, variables, and operators.

   Which of the following is an expression?

.. clickablearea:: var-expressions-mc-click
  :practice: T
  :question: Click on the expression that will **not** return a value on its own.
  :iscode:
  :feedback: Try typing these expressions in a python interpreter to see what they do.

  :click-incorrect:12:endclick:
  :click-correct:x = 73:endclick:
  :click-incorrect:x + 12:endclick:
  :click-correct:x += 52:endclick::click-incorrect:    #using += is the same as writing out x = x + 52:endclick:
