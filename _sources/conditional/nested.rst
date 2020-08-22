Nested conditionals
-------------------
.. index::
    single: Nested Conditional

One conditional can also be nested within another. We could have written
the three-branch example like this:

.. codelens:: cndtnlNested

    x = 5
    y = 6
    if x == y:
        print('x and y are equal')
    else:
        if x < y:
            print('x is less than y')
        else:
            print('x is greater than y')
    print('All done.')

.. mchoice:: cndtnl-nest-mc-error
    :practice: T
    :answer_a: No
    :answer_b: Yes
    :correct: a
    :feedback_a: This is a legal nested if-else statement.  The inner if-else statement is contained completely within the body of the outer else-block.
    :feedback_b: This is a legal nested if-else statement.  The inner if-else statement is contained completely within the body of the outer else-block.

    Will the following code cause an error?

    .. code-block:: python

      x = -10
      if x < 0:
          print("The negative number ",  x, " is not valid here.")
      else:
          if x > 0:
              print(x, " is a positive number")
          else:
              print(x," is 0")


The outer conditional contains two branches. The first branch contains a
simple statement. The second branch contains another ``if``
statement, which has two branches of its own. Those two branches are
both simple statements, although they could have been conditional
statements as well.

.. image:: ../images/nested.svg
    :alt: Nested If Statements


Although the indentation of the statements makes the structure apparent,
*nested conditionals* become difficult to read very
quickly. In general, it is a good idea to avoid them when you can.

Logical operators often provide a way to simplify nested conditional
statements. For example, we can rewrite the following code using a
single conditional:

.. activecode:: cndtnlNestedPositive
    :caption: Using a nested conditional

    x = 2
    if 0 < x:
        if x < 10:
            print('x is a positive single-digit number.')


The first ``print`` statement is executed only if we make it past
both conditionals, so we can get the same effect with the
``and`` operator:

.. activecode:: cndtnlNestedAnd
    :caption: Using "and" in place of a nested conditional

    x = 3
    if 0 < x and x < 10:
        print('x is a positive single-digit number.')

.. mchoice:: cndtnl-nest-mc-chain
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

.. mchoice:: cndtnl-nest-mc-elif
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Yes, it is possible to use elif statements within nested if-else statements, just make sure you are keeping track of all the branches.
    :feedback_b: Try again. You can have multiple branches within each branch of an if-else statement.

    True or False? You can use ``elif`` statements within nested if-else statements.
