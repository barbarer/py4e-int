Logical operators
-----------------
.. index::
    pair: Logical; Operator
    pair: And; Operator
    pair: Not; Operator
    pair: Or; Operator


There are three *logical operators*: ``and``,
``or``, and ``not``. The semantics (meaning) of these
operators is similar to their meaning in English. For example,

``x > 0 and x < 10`` is true only if ``x`` is greater than 0 *and* less than 10.

``n%2 == 0 or n%3 == 0`` is true if *either* of the conditions
is true, that is, if the number is divisible by 2 *or* 3.

Finally, the ``not`` operator negates a boolean expression, so
``not (x > y)`` is true if ``x > y`` is false; that
is, if ``x`` is less than or equal to ``y``.

Strictly speaking, the operands of the logical operators should be
boolean expressions, but Python is not very strict. Any nonzero number
is interpreted as "true."

.. activecode:: strOperators

    print(17 and True)


This flexibility can be useful, but there are some subtleties to it that
might be confusing. You might want to avoid it until you are sure you
know what you are doing.


.. mchoice:: cndtnl-log-mc-between
    :practice: T
    :answer_a: x &gt; 0 and &lt; 5
    :answer_b: x &gt; 0 or x &lt; 5
    :answer_c: x &gt; 0 and x &lt; 5
    :correct: c
    :feedback_a: Try again. Each comparison must be between exactly two values.  In this case the right-hand expression &lt; 5 lacks a value on its left.
    :feedback_b: Try agian. Although this is legal Python syntax, the expression is incorrect.  It will evaluate to true for all numbers that are either greater than 0 or less than 5.  Because all numbers are either greater than 0 or less than 5, this expression will always be True.
    :feedback_c: Correct! With an and keyword both expressions must be true so the number must be greater than 0 an less than 5 for this expression to be true. Although most other programming languages do not allow this mathematical syntax, in Python, you could also write 0 &lt; x &lt; 5.

    What is a correct Python expression for checking to see if a number stored in a variable x is between 0 and 5?

.. mchoice:: cndtnl-log-mc-and
    :practice: T
    :answer_a: x &lt; 0 or x &gt; 25
    :answer_b: x &gt; 0 or x &lt; 5
    :answer_c: x &gt; 0 and x &lt; 5
    :correct: b
    :feedback_a: Neither value is less than 0 or greater than 25.
    :feedback_b: This is true when x is greater than 0 or less than 5. Both 7 and 24 are greater than 0.
    :feedback_c: This is true when the number is both greater than 0 and less than 5.

    Which of the following is true for both 7 and 24?

.. mchoice:: cndtnl-log-mc-True
    :practice: T
    :answer_a: not(5 &gt; 71)
    :answer_b: not(5 &lt; 71)
    :answer_c: not(5 != 71)
    :correct: a
    :feedback_a: Correct! 5 &gt; 71 is False, so not(False) is True.
    :feedback_b: Try again. 5 &lt; 7 is True, so not(True) is False.
    :feedback_c: Try again. 5 != 71 is True, so not(True) is False.

    Which of the following is True?
