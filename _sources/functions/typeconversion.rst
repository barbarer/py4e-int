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
    :caption: The int function takes any value and converts it to an integer, if it can, or complains otherwise.

    print(int('32'))
    print(int('Hello'))


.. mchoice:: functType_MC_error
    :practice: T
    :answer_a: When converting a letters to an int, we must remove the quotation marks.
    :answer_b: The int function is expecting a value that can be converted to an integer.
    :answer_c: We cannot print and call a function in the same line.
    :correct: b
    :feedback_a: This would only work if Hello was a variable name with a value of the correct type. For example, hello = '32'.
    :feedback_b: The int function expects a value that can be converted, strings cannot convert to integers.
    :feedback_c: This is actually possible! It worked with the first line.

    Why would we get an error in the following code block?

    .. code-block:: python

        print(int('32'))
        print(int('Hello'))


``int`` can convert floating-point values to integers, but it
doesn't round off; it chops off the fraction part:

.. activecode:: functType_noFloat
    :coach:
    :caption: int can convert floating-point values to integers, but it doesn't round off; it chops off the fraction part

    print(int(3.99999))
    print(int(-2.3))


``float`` converts integers and strings to floating-point
numbers:

.. activecode:: functType_float
    :coach:
    :caption: ``float`` converts integers and strings to floating-point numbers

    print(float(32))
    print(float('3.14159'))


Finally, ``str`` converts its argument to a string:

.. activecode:: functType_str
    :coach:
    :caption: str converts its argument to a string.

    print(str(32))
    print(str(3.14159))


.. fillintheblank:: functType_fill1
    :practice: T

    The _______ function takes any value and converts it to floating-point numbers.

    - :float: The float function takes any value and converts it to floating point numbers.
      :.*: Try again!

.. mchoice:: functType_MC_int
    :practice: T
    :answer_a: 23
    :answer_b: 24
    :answer_c: 2
    :answer_d: 23.8
    :correct: a
    :feedback_a: The int function will convert the float into a truncated integer.
    :feedback_b: The int function does not round up.
    :feedback_c: The int function does not only take the first digit.
    :feedback_d: The int function does not keep any of the decimal places.

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
    :feedback_a: The float function will not add 1 to an integer.
    :feedback_b: The float function will not split a multi-digit integer.
    :feedback_c: The float function will add ".0" to the end of an integer, turning it into a floating point number.
    :feedback_d: The float function will turn an integer into a floating point number by adding what?

    Consider the code below. What prints?

    .. code-block:: python

        print(float(23))
