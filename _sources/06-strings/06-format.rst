Format operator
---------------

The *format operator*, ``%`` allows us to
construct strings, replacing parts of the strings with the data stored
in variables. When applied to integers, ``%`` is the modulus
operator. But when the first operand is a string, ``%`` is the
format operator.

The first operand is the *format string*, which contains
one or more *format sequences* that specify how the
second operand is formatted. The result is a string.

For example, the format sequence ``%d`` means that the second operand
should be formatted as an integer ("d" stands for "decimal"):

.. code-block:: python

   >>>camels = 42
   >>>'%d' % camels
   42


The result is the string '42', which is not to be confused with the
integer value 42.

A format sequence can appear anywhere in the string, so you can embed a
value in a sentence:

.. activecode:: str-formatSent
   :caption: Using the format operator with a string.

   camels = 42
   print('I have spotted %d camels.' % camels)


If there is more than one format sequence in the string, the second
argument has to be a tuple [A tuple is a sequence of comma-separated
values inside a pair of parenthesis. We will cover tuples in Chapter 10].
Each format sequence is matched with an
element of the tuple, in order.

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

.. mchoice:: str-format-mc-operator
    :practice: T
    :multiple_answers:
    :answer_a: division
    :answer_b: modulus (remainder)
    :answer_c: format
    :answer_d: conversion
    :correct: b,c
    :feedback_a: Try again! The division operator is /
    :feedback_b: Correct! % can be used to find the remainder.
    :feedback_c: Correct! % can be used to specify how string is formatted.
    :feedback_d: Try again! Conversion uses the int, str, or other functions.

    The % operator is used for which purposes?

.. fillintheblank:: str-format-fitb-d
    :practice: T

    What does the %d operator format?

    - :[Ii]ntegers*: Correct! The %d operator is used for integers.
      :.*: Try again!

.. fillintheblank:: str-format-fitb-g
    :practice: T

    What does the %g operator format?

    - :[Ff]loat(ing point numbers)*: Correct! The %g operator is used for floating point numbers.
      :.*: Try again!

.. fillintheblank:: str-format-fitb-s
    :practice: T

    What does the %s operator format?

    - :[Ss]trings*: Correct! The %s operator is used for strings.
      :.*: Try again!
