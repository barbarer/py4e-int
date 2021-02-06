Built-in functions
------------------
.. index::
    pair: Built-in; Function

Python provides a number of important built-in functions that we can use
without needing to provide the function definition. The creators of
Python wrote a set of functions to solve common problems and included
them in Python for us to use.

The ``max`` and ``min`` functions give us the largest
and smallest values in a list, respectively:

.. activecode:: functBuiltin_MaxMin
    :coach:
    :caption: The max and min functions give us the largest and smallest values in a list, respectively

    maximum = max(1, 0, -2, 4, 3)
    print(maximum)
    minimum = min(1, 0, -2, 4, 3)
    print(minimum)


The ``max`` function gives us the value 4 because it is the largest value
in the list. The ``min`` function, inversely, give us the value -2 because
it is the smallest value in the list.


.. mchoice:: functBuiltin_MC_min
    :practice: T
    :answer_a: 5
    :answer_b: fish
    :answer_c: True
    :answer_d: There is an error
    :correct: d
    :feedback_a: Incorrect! You cannot use the max function to compare different data types. Try again.
    :feedback_b: Incorrect! You cannot use the max function to compare different data types. Try again.
    :feedback_c: Incorrect! You cannot use the max function to compare different data types. Try again.
    :feedback_d: Correct! This code causes a TypeError because the max function cannot be used to compare different data types.

    What will be printed as the output of this code?

    .. code-block:: python

        maximum = max(5, 'fish', True)
        print(maximum)


Another very common built-in function is the ``len`` function,
which tells us how many items are in its argument. If the argument to
``len`` is a string, it returns the number of characters in the string.


.. activecode:: functBuiltin_len
    :coach:
    :caption: The len function tells us how many items are in its argument.

    length_x = len('Hello world')
    print(length_x)


These functions can operate on any set of values, as we will see in
later chapters.

You should treat the names of built-in functions as reserved words
(i.e., avoid using "max" as a variable name).


.. codelens:: functBuiltin_codelens_line2
    :question: What is the next line that will execute after the line with the red arrow executes?
    :breakline: 3
    :feedback: Remember what the len function does.
    :correct: line

    city_name = "Detroit"
    num = 10
    if len(city_name) > num:
      print("Long city name")
    else:
      print("Short city name")


.. mchoice:: functBuiltin_MC_len
    :practice: T
    :answer_a: 10
    :answer_b: 11
    :answer_c: 12
    :answer_d: 13
    :correct: d
    :feedback_a: Incorrect! Spaces and punctuation characters count in the length. Try again.
    :feedback_b: Incorrect! Punctuation characters count in the length. Try again.
    :feedback_c: Incorrect! Spaces count in the length. Try again.
    :feedback_d: Correct! 13 is the length of all characters in the string, including spaces and punctuation.

    Consider the code block below. What prints?

    .. code-block:: python

        sentence_a = "Hello, world!"
        length_sentence_a = len(sentence_a)
        print(length_sentence_a)


.. mchoice:: functBuiltin_MC_name
    :practice: T
    :answer_a: max
    :answer_b: min
    :answer_c: built_in
    :answer_d: len
    :correct: c
    :feedback_a: Incorrect! This is a reserved keyword because it is a built-in function in Python. Try again.
    :feedback_b: Incorrect! This is a reserved keyword because it is a built-in function in Python. Try again.
    :feedback_c: Correct! built_in is a valid variable name because it is not a built-in Python function.
    :feedback_d: Incorrect! This is a reserved keyword because it is a built-in function in Python. Try again.

    Which of the following would work as a variable name?
