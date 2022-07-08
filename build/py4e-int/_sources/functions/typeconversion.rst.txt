Type conversion functions
-------------------------
.. index::
    pair: Conversion; Type
    pair: Function; Int
    pair: Function; Float
    pair: Function; String

Python also provides built-in functions that convert values from one
type to another. The ``int`` function takes any value and
converts it to an integer, if it can, or complains otherwise:


.. activecode:: functType_int
    :coach:
    :caption: Using int for string conversion.

    print(int('32'))
    print(int('Hello'))


.. mchoice:: functType_MC_error
    :practice: T
    :answer_a: When converting a string to an int, we must remove the quotation marks.
    :answer_b: The int function is expecting a value that can be converted to an integer.
    :answer_c: We cannot print and call a function in the same line.
    :correct: b
    :feedback_a: Incorrect! This would only work if Hello was a variable name with a value of the correct type. For example, Hello = '32'. Try again.
    :feedback_b: Correct! The int function expects a value that can be converted and strings cannot be converted to integers.
    :feedback_c: Incorrect! This is actually possible — it worked with the first line. Try again.

    Why would we get an error in the following code block?

    .. code-block:: python

        print(int('32'))
        print(int('Hello'))


``int`` can convert floating-point values to integers, but it
doesn't round them — it chops off the fraction part (this is called "truncating"):

.. activecode:: functType_noFloat
    :coach:
    :caption: Using int on floating-point values.

    print(int(3.99999))
    print(int(-2.3))


``float`` converts integers and strings to floating-point
numbers:

.. activecode:: functType_float
    :coach:
    :caption: Using float on integers and strings.

    print(float(32))
    print(float('3.14159'))


Finally, ``str`` converts its argument to a string:

.. activecode:: functType_str
    :coach:
    :caption: Using str on numbers.

    print(str(32))
    print(str(3.14159))


.. fillintheblank:: functType_fill1
    :practice: T

    The _______ function takes any value and converts it to a floating-point number.

    - :float: Correct! The float function takes any value and converts it to a floating point number.
      :.*: Incorrect! The function has an intuitive name. Try again.

.. mchoice:: functType_MC_int
    :practice: T
    :answer_a: 23
    :answer_b: 24
    :answer_c: 2
    :answer_d: 23.8
    :correct: a
    :feedback_a: Correct! The int function will truncate the float when it converts it to an integer.
    :feedback_b: Incorrect! The int function doesn't round up. Try again.
    :feedback_c: Incorrect! The int function doesn't only convert the first digit. Try again.
    :feedback_d: Incorrect! The int function doesn't keep any of the decimal places. Try again.

    Consider the code below. What prints?

    .. code-block:: python

        print(int(23.865))

.. mchoice:: functType_MC_float
    :practice: T
    :answer_a: 24.0
    :answer_b: 2.3
    :answer_c: 23.0
    :answer_d: 23
    :correct: c
    :feedback_a: Incorrect! The float function will be the same value as the integer. Try again.
    :feedback_b: Incorrect! The float function will not split a multi-digit integer. Try again.
    :feedback_c: The float function will add ".0" to the end of an integer, turning it into a floating point number.
    :feedback_d: Incorrect! Floating point numbers have a decimal point in them. Try again.

    Consider the code below. What prints?

    .. code-block:: python

        print(float(23))
