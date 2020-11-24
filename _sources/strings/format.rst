Format operator
---------------
.. index::
    pair: Operator; Format
    single: Format String
    single: Format Sequence
    single: TypeError

The *format operator*, ``%`` allows us to
construct strings, replacing parts of the strings with the data stored
in variables. When applied to integers, ``%`` is the modulus
operator. But when the first operand is a string, ``%`` is the
format operator.

.. mchoice:: str-format-mc-operator
    :practice: T
    :multiple_answers:
    :answer_a: division
    :answer_b: modulus (remainder)
    :answer_c: format
    :answer_d: conversion
    :correct: b,c
    :feedback_a: Incorrect! The division operator is '/'. Try again. 
    :feedback_b: Correct! % can be used to find the remainder.
    :feedback_c: Correct! % can be used to specify how string is formatted.
    :feedback_d: Incorrect! Conversion uses "int", "str", or other functions. Try again. 

    The % operator is used for which purposes? Select all that apply.

The first operand is the *format string*, which contains
one or more *format sequences* that specify how the
second operand is formatted. The result is a string.

For example, the format sequence ``%d`` means that the second operand
should be formatted as an integer ("d" stands for "decimal"):

.. code-block:: python

    >>>camels = 42
    >>>print('%d' % camels)
    42


The result is the string "42", which is not to be confused with the
integer value 42.

A format sequence can appear anywhere in the string, so you can embed a
value in a sentence:

.. activecode:: str-formatSent
    :caption: Using the format operator with a string.

    camels = 42
    print('I have spotted %d camels.' % camels)


If there is more than one format sequence in the string, the second
argument has to be a tuple [A tuple is a sequence of comma-separated
values inside a pair of parentheses. We will cover tuples in Chapter 10].
Each format sequence is matched with an element of the tuple, in order.

The following example uses ``%d`` to format an integer, ``%g`` to format
a floating-point number (don't ask why), and ``%s`` to format a string:

.. activecode:: str-formatMult

    camels = 42
    print('In %d years I have spotted %g %s.' % (3, 0.1, 'camels'))


The number of elements in the tuple must match the number of format
sequences in the string. The types of the elements also must match the
format sequences:

.. code-block:: python

    >>> '%d %d %d' % (1, 2)
    TypeError: not enough arguments for format string
    >>> '%d' % 'dollars'
    TypeError: %d format: a number is required, not str


In the first example, there aren't enough elements; in the second, the
element is the wrong type.

The format operator is powerful, but it can be difficult to use. You can
read more about it at

https://docs.python.org/library/stdtypes.html#printf-style-string-formatting.

.. mchoice:: str-format-mc-d
    :practice: T
    :answer_a: string
    :answer_b: integer
    :answer_c: float
    :correct: b
    :feedback_a: Incorrect! %s formats strings. Try again.
    :feedback_b: Correct! %d formats integers.
    :feedback_c: Incorrect! %g formats floating point numbers. Try again.

    What does the %d operator format?

.. mchoice:: str-format-mc-g
    :practice: T
    :answer_a: string
    :answer_b: integer
    :answer_c: float
    :correct: c
    :feedback_a: Incorrect! %s formats strings. Try again.
    :feedback_b: Incorrect! %d formats integers. Try again.
    :feedback_c: Correct! %g formats floating point numbers.

    What does the %g operator format?

.. mchoice:: str-format-mc-s
    :practice: T
    :answer_a: string
    :answer_b: integer
    :answer_c: float
    :correct: a
    :feedback_a: Correct! %s formats strings.
    :feedback_b: Incorrect! %d formats integers. Try again.
    :feedback_c: Incorrect! %g formats floating point numbers. Try again.

    What does the %s operator format?
