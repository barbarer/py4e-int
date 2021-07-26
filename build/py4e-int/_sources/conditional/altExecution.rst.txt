Alternative execution
---------------------
.. index::
    single: Alternative Execution
    pair: Keyword; Else
    single: Branch

A second form of the ``if`` statement is *alternative
execution*, in which there are two possibilities and the
condition determines which one gets executed. The syntax looks like
this:

.. codelens:: cndtnlMod

    x = 8
    if x % 2 == 0 :
        print('x is even')
    else :
        print('x is odd')
    print('All done.')


If the remainder when ``x`` is divided by 2 is 0, then we know
that ``x`` is even, and the program displays a message to that
effect. If the condition is false, the second set of statements is
executed.

.. image:: ../images/if-else.svg
    :alt: If-Then-Else Logic



Since the condition must either be true or false, exactly one of the
alternatives will be executed. The alternatives are called *branches*,
because they are branches in the flow of execution.

.. mchoice:: cndtnl-altex-mc-print
    :practice: T
    :answer_a: TRUE
    :answer_b: FALSE
    :answer_c: TRUE on one line and FALSE on the next
    :answer_d: Nothing will be printed
    :correct: b
    :feedback_a: TRUE is printed by the if-block, which only executes if the conditional (in this case, 4+5 == 10) is true.  In this case 5+4 is not equal to 10.
    :feedback_b: Since 4+5==10 evaluates to False, Python will skip over the if block and execute the statement in the else block.
    :feedback_c: Python would never print both TRUE and FALSE because it will only execute one of the if-block or the else-block, but not both.
    :feedback_d: Python will always execute either the if-block (if the condition is true) or the else-block (if the condition is false).  It would never skip over both blocks.

    What does the following code print?

    .. code-block:: python

      if 4 + 5 == 10:
          print("TRUE")
      else:
          print("FALSE")

.. mchoice:: cndtnl-altex-mc-negative
    :practice: T
    :answer_a: Output a
    :answer_b: Output b
    :answer_c: Output c
    :answer_d: It will cause an error because every if must have an else clause.
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


.. mchoice:: cndtnl-altex-mc-error
    :practice: T
    :answer_a: No
    :answer_b: Yes
    :correct: b
    :feedback_a: Every else-block must have exactly one corresponding if-block.  If you want to chain if-else statements together, you must use the else if construct, described in the chained conditionals section.
    :feedback_b: This will cause an error because the second else-block is not attached to a corresponding if-block.

    Will the following code cause an error?

    .. code-block:: python

      x = -10
      if x < 0:
          print("The negative number ",  x, " is not valid here.")
      else:
          print(x, " is a positive number")
      else:
          print("This is always printed")

.. parsonsprob:: cndtnl-altex-pp-even
    :practice: T
    :adaptive:
    :numbered: left

    The following program should print out "x is even" if the remainder of x divided by 2 is 0 and "x is odd"
    otherwise, but the code is mixed up. Be sure to indent correctly!
    -----
    x = 92
    =====
    if x % 2 == 0:
    =====
        print("x is even")
    =====
    else:
    =====
        print("x is odd")
