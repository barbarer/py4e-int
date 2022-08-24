Short-circuit evaluation of logical expressions
-----------------------------------------------
.. index::
    single: Short Circuit
    single: Guardian Pattern
    single: Guard

When Python is processing a logical expression such as ``x >= 2 and
(x/y) > 2``, it evaluates the expression from left to right.
Because of the definition of ``and``, if ``x`` is less
than 2, the expression ``x >= 2`` is ``False`` and so
the whole expression is ``False`` regardless of whether
``(x/y) > 2`` evaluates to ``True`` or
``False``.

When Python detects that there is nothing to be gained by evaluating the
rest of a logical expression, it stops its evaluation and does not do
the computations in the rest of the logical expression. When the
evaluation of a logical expression stops because the overall value is
already known, it is called *short-circuiting* the
evaluation.

While this may seem like a fine point, the short-circuit behavior leads
to a clever technique called the *guardian pattern*.
Consider the following code sequence in the Python interpreter:

.. activecode:: cndtnlShortCircuit
    :caption: Errors from multiple conditionals

    x = 6
    y = 2
    print(x >= 2 and (x/y) > 2)

    x = 1
    y = 0
    print(x >= 2 and (x/y) > 2)

    x = 6
    y = 0
    print(x >= 2 and (x/y) > 2)


The third calculation failed because Python was evaluating
``(x/y)`` and ``y`` was zero, which causes a runtime
error. But the second example did *not* fail because the first part of
the expression ``x >= 2`` evaluated to ``False`` so
the ``(x/y)`` was not ever executed due to the
*short-circuit* rule and there was no error.

We can construct the logical expression to strategically place a
*guard* evaluation just before the evaluation that might
cause an error as follows:

.. activecode:: cndtnlGuardian
    :caption: Using a guardian pattern with conditionals

    x = 1
    y = 0
    print(x >= 2 and y != 0 and (x/y) > 2)

    x = 1
    y = 0
    print(x >= 2 and y != 0 and (x/y) > 2)

    x = 6
    y = 0
    print(x >= 2 and (x/y) > 2 and y != 0)


In the first logical expression, ``x >= 2`` is
``False`` so the evaluation stops at the ``and``.

In the second logical expression, ``x >= 2`` is ``True``
but ``y != 0`` is ``False`` so we never reach
``(x/y)``.

In the third logical expression, the ``y != 0`` is *after* the
``(x/y)`` calculation so the expression fails with an error.

In the second expression, we say that ``y != 0`` acts as a
*guard* to insure that we only execute ``(x/y)``
if ``y`` is non-zero.

.. mchoice:: cndtnl-sc-mc-guard
    :practice: T
    :answer_a: x >= 2
    :answer_b: y != 0
    :answer_c: (x/y) > 2
    :answer_d: and
    :correct: b
    :feedback_a: Try again. This element is making sure x matches a condition.
    :feedback_b: This element is a guard, making sure the code does not try to divide by 0.
    :feedback_c: Try again. This element is making sure x/y matches a condition.
    :feedback_d: Try again. This is a logical operator for the boolean expression.

    Which of the following is a *guard* for the code below?

    ::

      x >= 2 and y != 0 and (x/y) > 2

.. fillintheblank:: cndtnl-sc-fitb-guard
    :practice: T

    True or False? The guard should be placed before an expression is evaluated.

    - :[Tt]rue: A guard is used to avoid runtime errors.
      :[Ff]alse: Try again! A guard is used to avoid runtime errors.
      :.*: Try again!

.. dragndrop:: cndtnl-sc-dnd-terms
    :practice: T
    :feedback: What is the purpose of each term?
    :match_1: guardian pattern|||A logical expression with additional comparisons to take advantage
              of the short circuit behavior.
    :match_2: short circuit|||When Python is part-way through evaluating a logical expression and stops
              the evaluation because Python knows the final value for the expression without needing to
              evaluate the rest of the expression.
    :match_3: guard||| A comparison put in place to cause short circuit behavior and avoid a runtime error.

    Match each term with its meaning.
