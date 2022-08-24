Expressions
-----------
.. index::
    single: Expression
    single: Evaluate


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

.. activecode:: var-ac-6-expressions2
    :nocodelens:
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
    :feedback_d: All of the above are correct! An expression is a combination of values, variables, and operators.
    :feedback_e: An expression is a combination of values, variables, and operators.

    Which of the following is an expression?

.. clickablearea:: var-expressions-mc-click
    :practice: T
    :question: Click on the expression(s) that will **not** return a value when typed in an interpreter.
    :iscode:
    :feedback: Try typing these expressions in a python interpreter to see what they do.

    :click-incorrect:12:endclick:
    :click-correct:x = 73:endclick:
    :click-incorrect:x + 12:endclick:
    :click-correct:x += 52:endclick::click-incorrect:    #using += is the same as writing out x = x + 52:endclick:
