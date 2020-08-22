Debugging
---------
.. index::
    single: Debugging
    single: Traceback
    single: Whitespace

The traceback Python displays when an error occurs contains a lot of
information, but it can be overwhelming. The most useful parts are
usually:


*
  What kind of error it was, and

*
  Where it occurred.

Syntax errors are usually easy to find, but there are a few gotchas.
Whitespace errors can be tricky because spaces and tabs are invisible
and we are used to ignoring them.

.. code-block:: python

    >>> x = 5
    >>>  y = 6
      File "<stdin>", line 1
        y = 6
        ^
    IndentationError: unexpected indent


In this example, the problem is that the second line is indented by one
space. But the error message points to ``y``\ , which is
misleading. In general, error messages indicate where the problem was
discovered, but the actual error might be earlier in the code, sometimes
on a previous line.

In general, error messages tell you where the problem was discovered,
but that is often not where it was caused.

.. activeCode:: Price_If_Broken
    :caption: Using multiple if statements

    weight = 0.5
    if weight < 1:
        price = 1.45
    if weight > 1:
        price = 1.15
    total = weight * price
    print(weight)
    print(price)
    print(total)

Try different values for weight in the above code and then answer the question below:

.. fillintheblank:: cndtnl-debug-fitb-weight

    What value for weight will result in an error complaining that price is not defined?

    - :^1$|1\.[0]*$: The code checks for numbers greater or less than 1, but not 1 itself.
      :.*: Which value is not tested currently?

.. mchoice:: cndtnl-debug-mc-error
    :practice: T
    :answer_a: x ** z
    :answer_b: y + 12
    :answer_c: x + y / z
    :answer_d: z % 3
    :correct: c
    :feedback_a: Try again. ** is the exponent operator. With the values given, this evaluates to 1.
    :feedback_b: Try again. With the values given, this evaluates to 24.
    :feedback_c: Dividing by z (0) will cause an error.
    :feedback_d: Try again. With the values given, this evaluates to 0.

    Which of the following will cause an error if x = 2, y = 12, and z = 0?

.. mchoice:: cndtnl-debug-mc-error2
    :practice: T
    :answer_a: x >= 2 and y != 0 and (x/y) > 2
    :answer_b: x >= 2 and y != 0 and (x/y) > 2
    :answer_c: x >= 2 and (x/y) > 2 and y != 0
    :correct: c
    :feedback_a: Try again. This will evaluate to False because y = 0.
    :feedback_b: Try again. This will evaluate to False because y = 0.
    :feedback_c: Since y = 0, x/y will cause en erorr. The gaurd (y != 0) should be placed before that expression.

    Which of the following will cause an error if x = 6 and y = 0?
