Built-in functions
------------------

Python provides a number of important built-in functions that we can use
without needing to provide the function definition. The creators of
Python wrote a set of functions to solve common problems and included
them in Python for us to use.

The ``max`` and ``min`` functions give us the largest
and smallest values in a list, respectively:

.. activecode:: functBuiltin_MaxMin
    :coach:
    :caption: The max and min functions give us the largest and smallest values in a list, respectively

    maximum = max('Hello world')
    print(maximum)
    minimum = min('Hello world')
    print(minimum)


.. mchoice:: functBuiltin_MC_min
    :practice: T
    :answer_a: There is no minimum character because there are no numbers in this string.
    :answer_b: We named the variable a reserved keyword (minimum).
    :answer_c: The minimum character is a space. It prints but we just can't tell.
    :answer_d: 'Hello world' needs to be put in double quotes.
    :correct: c
    :feedback_a: Try again! There is a minimum character.
    :feedback_b: Minimum is not a reserved keyword.
    :feedback_c: The minimum character is a space, we cannot see it because the character was printed without quotes.
    :feedback_d: Strings can be in either single quotes ('') or double quotes ("").

    We see that w prints as the maximum character. How come it looks like the minimum does not print?

    .. code-block:: python

        maximum = max('Hello world')
        print(maximum)
        minimum = min('Hello world')
        print(minimum)

The ``max`` function tells us the "largest character" in the
string (which turns out to be the letter "w") and the ``min``
function shows us the smallest character (which turns out to be a
space).

Another very common built-in function is the ``len`` function
which tells us how many items are in its argument. If the argument to
``len`` is a string, it returns the number of characters in the
string.

.. activecode:: functBuiltin_len
    :coach:
    :caption: The len function tells us how many items are in its argument.

    length_x = len('Hello world')
    print(length_x)


These functions are not limited to looking at strings. They can operate
on any set of values, as we will see in later chapters.

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
    :feedback_a: Spaces and punctuation characters count in the length!
    :feedback_b: Punctuation characters count in the length!
    :feedback_c: Spaces count in the length!
    :feedback_d: 13 is the length of all characters in the string.

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
    :feedback_a: This is a reserved keyword because it is a built-in function in Python.
    :feedback_b: This is a reserved keyword because it is a built-in function in Python.
    :feedback_c: built_in is a valid variable name because it is not a built-in Python function.
    :feedback_d: This is a reserved keyword because it is a built-in function in Python.

    Which of the following would work as a variable name?
