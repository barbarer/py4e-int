Conditional execution
---------------------
.. index::
    pair: Conditional; Statement
    pair: If; Statement
    single: Conditional Executions
    single: Condition
    pair: Compound; Statement
    pair: Pass; Statement
    single: Pair

In order to write useful programs, we almost always need the ability to
check conditions and change the behavior of the program accordingly.
*Conditional statements* give us this ability. The
simplest form is the ``if`` statement:

.. codelens:: cndtnlPositive

    x = 2
    if x > 0 :
        print('x is positive')
    print('All done.')


The boolean expression after the ``if`` statement is called the
*condition*. We end the ``if`` statement with a
colon character (:) and the line(s) after the if statement are indented.

.. figure:: ../images/if.svg
    :alt: If Logic



If the logical condition is true, then the indented statement gets
executed. If the logical condition is false, the indented statement is
skipped.

``if`` statements have the same structure as function
definitions or ``for`` loops [We will learn about functions in Chapter 4 and loops in Chapter 5.].
The statement consists of a
header line that ends with the colon character (:) followed by an
indented block. Statements like this are called *compound
statements* because they stretch across more than one line.

There is no limit on the number of statements that can appear in the
body, but there must be at least one. Occasionally, it is useful to have
a body with no statements (usually as a place holder for code you haven't
written yet). In that case, you can use the ``pass`` statement,
which does nothing.

.. codelens:: cndtnlNegative

    x = -3
    if x < 0 :
        pass # need to handle negative values!
    print('All done.')


If you enter an ``if`` statement in the Python interpreter, the
prompt will change from three chevrons to three dots to indicate you are
in the middle of a block of statements, as shown below:

.. code-block:: python

    >>> x = 3
    >>> if x < 10:
    ...    print('Small')
    ...
    Small
    >>>


When using the Python interpreter, you must leave a blank line at the end of a
block, otherwise Python will return an error:

.. code-block:: python

    >>> x = 3
    >>> if x < 10:
    ...    print('Small')
    ... print('Done')
      File "<stdin>", line 3
        print('Done')
           ^
    SyntaxError: invalid syntax


A blank line at the end of a block of statements is not necessary when writing
and executing a script, but it may improve readability of your code.

.. mchoice:: cndtnl-cndex-mc-if1
    :practice: T
    :answer_a: line 3
    :answer_b: line 4
    :correct: b
    :feedback_a: Line 3 will only execute when x is less than 3.
    :feedback_b: Execution continues at the next statement beyond the block following the <code>if</code> when the logical expression is false.

    Given the code below, what line executes after line 2 executes?

    ::

      x = 4
      if x < 3:
          print ("x is less than 3")
      print ("All done")

.. mchoice:: cndtnl-cndex-mc-and
    :practice: T
    :answer_a: 1 to 10
    :answer_b: 0 to 9
    :answer_c: 1 to 9
    :answer_d: all values of x
    :correct: c
    :feedback_a: Try again. This would be true if the second expression was x <= 10.
    :feedback_b: Try again. This would be true if the first logical expression was x >= 0.
    :feedback_c: The "condition true" will only be printed when x is greater than 0 and less than 10 so this is the range from 1 to 9.
    :feedback_d: Try again. This would be true if the conditional was x > 0 <b>or</b> x < 10.

    Given the code below, what describes the values of x that will cause the code to print "condition true"?

    ::

        if x > 0 and x < 10:
            print ("condition true")
        print ("All done")

.. mchoice:: cndtnl-cndex-mc-or
    :practice: T
    :answer_a: all values of x
    :answer_b: 1 to 9
    :answer_c: 0 to 9
    :answer_d: 1 to 10
    :correct: a
    :feedback_a: This will be true if x is greater than 0 <b>or</b> less than 10.  This covers all possible values of x.
    :feedback_b: Try again. This would be true if the logical expressions were joined with and instead of or.
    :feedback_c: Try again. This would be true if the logical expressions were jointed with and instead of or and if the first logical expression was x >= 0.
    :feedback_d: Try again. This would be true if the logical expressions were jointed with and instead of or and if the first logical expression was x >= 0 and the second expression was <= 10.

    Given the code below, what describes the values of x that will cause the code to print "condition true"?

    ::

        if x > 0 or x < 10:
            print ("condition true")
        print ("All done")
