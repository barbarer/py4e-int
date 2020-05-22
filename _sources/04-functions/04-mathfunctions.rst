Math functions
--------------

Python has a ``math`` module that provides most of the familiar
mathematical functions. Before we can use the module, we have to import
it:

.. code-block:: python

   >>> import math


This statement creates a *module object* named math. If
you print the module object, you get some information about it:

.. activecode:: 04section4_1
   :coach:

   import math
   print(math)

The module object contains the functions and variables defined in the
module. To access one of the functions, you have to specify the name of
the module and the name of the function, separated by a dot (also known
as a period). This format is called *dot notation*.


.. activecode:: 04section4_2
   :coach:

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
functions (\ ``cos``\ , ``tan``\ , etc.) take arguments in
radians. To convert from degrees to radians, divide by 360 and multiply
by 2\pi:

.. activecode:: 04section4_3
   :coach:

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


.. activecode:: 04section4_4
   :coach:

   import math

   result = math.sqrt(2) / 2.0
   print(result)

.. mchoice:: 04question4_1
   :answer_a: import math
   :answer_b: include math
   :answer_c: add math
   :answer_d: None. You can always use the math module.
   :correct: a
   :feedback_a: Correct!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Try again!

   Which statement allows you to use the math module in Python?

.. mchoice:: 04question4_2
   :answer_a: log
   :answer_b: module object
   :answer_c: dot notation
   :answer_d: function notation
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct!
   :feedback_d: Try again!

   To access a function in a module, we must use...


.. fillintheblank:: 04fill4_1

    When we use the "import math" statement, a __________ called math is created.

    - :(?:m|M)(?:o|O)(?:d|D)(?:u|U)(?:l|L)(?:e|E)\s(?:o|O)(?:b|B)(?:j|J)(?:e|E)(?:c|C)(?:t|T): Correct!
      :.*: Try again!



.. codelens:: codelens_question_line_24
    :question: What will print?
    :breakline: 3
    :feedback: Num is a floating-point number.
    :correct: 1.0

    import math
    num = 2.0
    result = math.sqrt(4) / num
    print(result)
