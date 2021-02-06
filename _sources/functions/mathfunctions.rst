Math functions
--------------
.. index::
    pair: Math; Function
    pair: Module; Object
    single: Dot Notation
    single: Pi
    pair: Log; Function
    single: Radian
    pair: Trigonometric; Function
    pair: Sine; Function
    pair: Sqrt; Function



Python has a ``math`` module that provides most of the familiar
mathematical functions. Before we can use the module, we have to import
it:

.. code-block:: python

    >>> import math


This statement creates a *module object* named math. If
you print the module object, you get some information about it:

.. activecode:: functMath_module
    :coach:
    :caption: The math module object

    import math
    print(math)

The module object contains the functions and variables defined in the
module. To access one of the functions, you have to specify the name of
the module and the name of the function, separated by a dot (also known
as a period). This format is called *dot notation*.


.. activecode:: functMath_logSin
    :coach:
    :caption: This example demonstrates the use of the math module's log and sin functions.

    import math

    signal_power = 10
    noise_power = 10
    ratio = signal_power / noise_power
    decibels = 10 * math.log10(ratio)
    print(decibels)

    radians = 0.7
    height = math.sin(radians)
    print(height)


The first example computes the logarithm base 10 of the signal-to-noise
ratio. The math module also provides a function called ``log``
that computes logarithms base e.

The second example finds the sine of ``radians``. The name of
the variable is a hint that ``sin`` and the other trigonometric
functions (``cos``, ``tan``, etc.) take arguments in
radians. To convert from degrees to radians, divide by 360 and multiply
by 2\pi:

.. activecode:: functMath_sinPi
    :coach:
    :caption: This example demonstrates the use of the math module's sin and pi functions.

    import math

    degrees = 45
    radians = degrees / 360.0 * 2 * math.pi
    result = math.sin(radians)
    print(result)


The expression ``math.pi`` gets the variable ``pi``
from the math module. The value of this variable is an approximation of
pi, accurate to about 15 digits.

If you know your trigonometry, you can check the previous result by
comparing it to the square root of two divided by two:


.. activecode:: functMath_sqrt
    :coach:
    :caption: An example of the use of the math module's sqrt function.

    import math

    result = math.sqrt(2) / 2.0
    print(result)

.. mchoice:: functMath_MC_statement
    :practice: T
    :answer_a: import math
    :answer_b: include math
    :answer_c: add math
    :answer_d: None. You can always use the math module.
    :correct: a
    :feedback_a: Correct! import math allows you to use the math module by creating the "math" module object.
    :feedback_b: Incorrect! include works similarly to import, but it's not what we're using. Try again.
    :feedback_c: Incorrect! add will not import the math module. Try again.
    :feedback_d: Incorrect! Something needs to be done to allow the math module to be used. Try again.

    Which statement allows you to use the math module in Python?

.. mchoice:: functMath_MC_access
    :practice: T
    :answer_a: log
    :answer_b: quotation marks or single quotes
    :answer_c: dot notation
    :answer_d: function notation
    :correct: c
    :feedback_a: Incorrect! log is a function within the math module. Try again.
    :feedback_b: Incorrect! You need these to create a string. Try again.
    :feedback_c: Correct! Dot notation allows us to access a function in a module.
    :feedback_d: Incorrect! Function notation is the way a function is written. Try again.

    To access a function in a module, we must use...


.. fillintheblank:: functMath_fill1

    When we use the "import math" statement, a __________ called math is created.

    - :[Mm]odule [Oo]bject: A module object is created when we import math.
      :.*: Incorrect! What type of object is created? Try again.



.. codelens:: functMath_codelens1
    :question: What will print?
    :breakline: 3
    :feedback: num is a floating-point number, so result will be too.
    :correct: 1.0

    import math
    num = 2.0
    result = math.sqrt(4) / num
    print(result)
