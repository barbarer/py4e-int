Boolean expressions
-------------------
.. index::
    single: Boolean Expression
    pair: Boolean; Expression
    single: Logical Operator
    pair: Logical; Operator
    pair: Special Value; True
    pair: Special Value; False
    single: Bool Type
    single: True
    single: False
    pair: Comparison; Operator


A *boolean expression* is an expression that is either
true or false. The following examples use the operator ``==``,
which compares two operands and produces ``True`` if they are
equal and ``False`` otherwise:

.. activecode:: cond_boolean_equal
    :caption: Printing boolean expressions.

    print(5 == 5)
    print(5 == 6)

``True`` and ``False`` are special values that belong
to the class ``bool``; they are not strings:

.. activecode:: cond_boolean_types
    :caption: Type of Boolean values

    print(type(True))
    print(type(False))


The ``==`` operator is one of the *comparison
operators*; the others are:

.. code-block:: python

    x != y               # x is not equal to y
    x > y                # x is greater than y
    x < y                # x is less than y
    x >= y               # x is greater than or equal to y
    x <= y               # x is less than or equal to y
    x is y               # x is the same as y
    x is not y           # x is not the same as y


Although these operations are probably familiar to you, the Python
symbols are different from the mathematical symbols for the same
operations. A common error is to use a single equal sign
(``=``) instead of a double equal sign (``==``).
Remember that ``=`` is an assignment operator and
``==`` is a comparison operator. There is no such thing as
``=<`` or ``=>``.

.. mchoice:: cndtnl-bool-mc-expression
    :practice: T
    :multiple_answers:
    :answer_a: True
    :answer_b: 3 == 4
    :answer_c: 3 + 4
    :answer_d: 3 + 4 == 7
    :answer_e: &quot;False&quot;
    :correct: a,b,d
    :feedback_a: True and False are both Boolean literals.
    :feedback_b: The comparison between two numbers via == results in either True or False (in this case False),  both Boolean values.
    :feedback_c: 3 + 4 evaluates to 7, which is a number, not a Boolean value.
    :feedback_d: 3 + 4 evaluates to 7.  7 == 7 then evaluates to True, which is a Boolean value.
    :feedback_e: With the double quotes surrounding it, False is interpreted as a string, not a Boolean value.
                 If the quotes had not been included, False alone is in fact a Boolean value.

    Which of the following is a Boolean expression?  Select all that apply.

.. mchoice:: cndtnl-bool-mc-same
    :practice: T
    :answer_a: x = y
    :answer_b: x != y
    :answer_c: x == y
    :answer_d: x is y
    :answer_e: x is not y
    :correct: d
    :feedback_a: Try again. This reassigns the value of y to x.
    :feedback_b: Try again. This means that x is not equal to y.
    :feedback_c: Try again. This means that x and y have the same value, but it does not mean they are the same object.
    :feedback_d: This means that x and y are the same object, not just the same value.
    :feedback_e: Try again. This means that x and y are not the same object. This can be true if x and y have the same value, but are stored in different objects.

    Which of the following comparison operators is used to check if x and y are the same object?

.. mchoice:: cndtnl-bool-mc-true
    :practice: T
    :multiple_answers:
    :answer_a: >
    :answer_b: <=
    :answer_c: True
    :answer_d: !=
    :answer_e: is not
    :correct: a,d,e
    :feedback_a: 783 > 206 is True.
    :feedback_b: Try again. 783 <= 206 is False.
    :feedback_c: Try again.
    :feedback_d: Correct! 783 != 206 is True.
    :feedback_e: Correct! 783 is not 206 is True.

    What operator makes ``783 ___ 206`` true? Select all that apply.
