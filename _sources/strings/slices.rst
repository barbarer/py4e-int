String slices
-------------
.. index::
    pair: Slice; Operator
    pair: String; Slice
    pair: Index; Slice
    single: Quotation Mark
    pair: Copy; Slice

A segment of a string is called a *slice*. Selecting a
slice is similar to selecting a character:

.. activecode:: str-slice
    :caption: Taking slices of strings

    s = 'Monty Python'
    print(s[0:5])
    print(s[6:12])


The operator returns the part of the string from the "n-th" character
to the "m-th" character, including the first but excluding the last.

If you omit the first index (before the colon), the slice starts at the
beginning of the string. If you omit the second index, the slice goes to
the end of the string:

.. activecode:: str-colonSlices
    :caption: Taking slices of strings using one index

    fruit = 'orange'
    print(fruit[:3])
    print(fruit[3:])

If the first index is greater than or equal to the second the result is
an *empty string*, represented by two quotation marks:

.. activecode:: str-emptyString
    :caption: Creating an empty string from a slice

    fruit = 'orange'
    print(fruit[3:3])

An empty string contains no characters and has length 0, but other than
that, it is the same as any other string.

.. fillintheblank:: str-slice-fitb-fruit
    :practice: T

    Given that ``fruit`` is a string, how many characters does ``fruit[:]`` select?

    - :([Aa]ll)|5|([Ff]ive): [:] Correct! It selects the entire string.
      :.*: Incorrect! It could be helpful to run this in an activecode block. Try again.

.. mchoice:: str-slice-mc-hello
    :practice: T
    :answer_a: 4
    :answer_b: 5
    :answer_c: 6
    :answer_d: Error, the for statement cannot use string slices.
    :correct: b
    :feedback_a: Incorrect! Slicing includes the first index but excludes the last. Try again.
    :feedback_b: Correct! s[3:8] is "egran", which is five characters long, so "HELLO" is printed five times.
    :feedback_c: Incorrect! Slicing includes the first index but excludes the last. Try again.
    :feedback_d: Incorrect! Slicing returns a sequence that can be iterated over with a for loop. Try again.


    How many times is the word HELLO printed by the following statements?

    .. code-block:: python

      s = "pomegranate"
      for ch in s[3:8]:
          print("HELLO")

.. mchoice:: str-slice-mc-end
    :practice: T
    :answer_a: Python is cool
    :answer_b: Pyt
    :answer_c: yth
    :answer_d: ytho
    :correct: c
    :feedback_a: Incorrect! The string slicing on line 2 takes out part of the original str. Try again.
    :feedback_b: Incorrect! Indices in Python start at 0. Try again.
    :feedback_c: Correct! str[1:4] starts with the character at index 1 and ends after the character at index 3.
    :feedback_d: Incorrect! The slice operator includes the first index and excludes the last. Try again.

    What will be printed when the following executes?

    ::

      str = "Python is cool"
      str = str[1:4]
      print(str)

.. mchoice:: str-slice-mc-38
    :answer_a: python
    :answer_b: rocks
    :answer_c: hon r
    :answer_d: Error, you cannot have two numbers inside the [].
    :correct: c
    :feedback_a: Incorrect! That would be s[0:6]. Try again.
    :feedback_b: Incorrect! That would be s[7:]. Try again.
    :feedback_c: Correct! The space is considered a character.
    :feedback_d: Incorrect! String slicing requires a starting index and an ending index. Try again.


    What is printed by the following statements?

    .. code-block:: python

      s = "python rocks"
      print(s[3:8])
