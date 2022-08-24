Operators and operands
----------------------
.. index::
    single: Operators
    pair: Operator; Arithmetic
    single: Operand
    single: Expression
    single: Python 3.0
    single: Python 2.0
    pair: Floating-point; Division

*Operators* are special symbols that represent
computations like addition and multiplication. The values the operator
is applied to are called *operands*.

The operators ``+``\ , ``-``\ , ``*``\ , ``/``\ , and
``**`` perform addition, subtraction, multiplication, division,
and exponentiation, as in the following examples:

.. activecode:: var-ac-6-print-operators
    :nocodelens:
    :caption: Examples of mathematical operations

    print(20+32)
    print(75-1)
    print(5**2)
    print((5+9)*(15-7))


There was a change in the division operator between Python 2.x
and Python 3.x.  In Python 3.x, the result of this division is a
floating point result:


.. activecode:: var-ac-6-print-vars2
    :caption: Floating point division in Python

    minute = 59
    print(minute/60)


The division operator in Python 2.0 would divide two integers and
truncate the result to an integer:

.. code-block:: python

    >>> minute = 59
    >>> minute/60
    0


To obtain the same answer in Python 3.0 use floored ( ``//`` integer) division.

.. activecode:: var-ac-6-print-vars3
    :caption: Floored division in Python

    minute = 59
    print(minute//60)

In Python 3.0 integer division functions much more as you would expect
if you entered the expression on a calculator.

.. mchoice:: var-operator-mc-division
    :practice: T
    :answer_a: 0
    :answer_b: 1
    :answer_c: 0.75
    :answer_d: 0.25
    :correct: c
    :feedback_a: If the two values are both integers (whole numbers) you will normally get an integer (whole number) result in older Python environments.  But, this book is using Python 3 so you get a decimal result.
    :feedback_b: This would be correct if the result was rounded up before the values after the decimal point were thrown away, but it does not do this.
    :feedback_c: While this isn't the what older Pyton development environments would return, in this book we are using Python 3 so it returns a decimal result.
    :feedback_d: This would be correct if it was <code>1 / 4</code>, <code>1.0 / 4</code>, or <code>1 / 4.0</code>

    What is the result of ``3 / 4``?


.. fillintheblank:: var-operator-fitb-symbol
    :practice: T

    What operator (*symbol*) would you use to truncate division in Python 3.0?

    - ://: // is the operator for floored division in Python.
      :/: Not quite, remember the difference between divison (/) and floored division.
      :.*: Make sure you are looking at the symbols for division!


.. dragndrop:: var-operator-dnd-operations
    :practice: T
    :feedback: Try assigning values to these variables and testing out the espressions in your python interpreter.
    :match_1: x + y|||addition
    :match_2: x - y|||subtraction
    :match_3: x * y|||multiplication
    :match_4: x / y|||division
    :match_5: x % y|||remainder (modulus)
    :match_6: x // y|||floored division
    :match_7: x ** y|||exponentiation

    Match each expression with the operation it performs.
