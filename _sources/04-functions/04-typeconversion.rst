Type conversion functions
-------------------------

Python also provides built-in functions that convert values from one
type to another. The ``int`` function takes any value and
converts it to an integer, if it can, or complains otherwise:


.. activecode:: 04section3_1
   :coach:

   print(int('32'))
   print(int('Hello'))


.. mchoice:: 04question3_1
   :answer_a: When converting a letters to an int, we must remove the quotation marks.
   :answer_b: The int function is expecting a value that can be converted to an integer.
   :answer_c: We cannot print and call a function in the same line.
   :correct: b
   :feedback_a: This would only work if Hello was a variable name with a value of the correct type. For example, hello = '32'.
   :feedback_b: Correct!
   :feedback_c: This is actually possible! It worked with the first line.

   Why do we get an error in the above code block? Take a look at the error message for hints.


``int`` can convert floating-point values to integers, but it
doesn't round off; it chops off the fraction part:

.. activecode:: 04section3_2
   :coach:

   print(int(3.99999))
   print(int(-2.3))


``float`` converts integers and strings to floating-point
numbers:

.. activecode:: 04section3_3
   :coach:

   print(float(32))
   print(float('3.14159'))


Finally, ``str`` converts its argument to a string:

.. activecode:: 04section3_4
   :coach:

   print(str(32))
   print(str(3.14159))


.. fillintheblank:: 04fill3

    The _______ function takes any value and converts it to floating-point numbers.

    - :float: Correct!
      :.*: Try again!

.. mchoice:: 04question3_2
   :answer_a: 23
   :answer_b: 24
   :answer_c: 2
   :answer_d: 23.8
   :correct: a
   :feedback_a: Correct!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Try again!

   Consider the code below. What prints?

   .. code-block:: python

    print(int(23.865))

.. mchoice:: 04question3_3
   :answer_a: 24.0
   :answer_b: 2.3
   :answer_c: 23.0
   :answer_d: 23
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct!
   :feedback_d: Try again!

   Consider the code below. What prints?

   .. code-block:: python

    print(float(23))
