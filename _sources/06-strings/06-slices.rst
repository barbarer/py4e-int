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

.. shortanswer:: str-slice-sa-fruit
    :practice: T

    Given that ``fruit`` is a string, what does ``fruit[:]`` mean?

.. mchoice:: str-slice-mc-hello
   :practice: T
   :answer_a: 4
   :answer_b: 5
   :answer_c: 6
   :answer_d: Error, the for statement cannot use slice.
   :correct: b
   :feedback_a: Slice returns a sequence that can be iterated over.
   :feedback_b: Yes, The blank is part of the sequence returned by slice
   :feedback_c: Check the result of s[3:8].  It does not include the item at index 8.
   :feedback_d: Slice returns a sequence.


   How many times is the word HELLO printed by the following statements?

   .. code-block:: python

      s = "pomegranate"
      for ch in s[3:8]:
          print("HELLO")

.. mchoice:: str-slice-mc-end
   :practice: T
   :answer_a: This is the end
   :answer_b: This
   :answer_c: his
   :correct: c
   :feedback_a: This would be true if we were printing the value of str and we hand't changed it on line 2.
   :feedback_b: This would be true if the first position was 1 and the substring included the character at the end position, but the first character in a string is at position 0 and the substring won't include the character at the last position.
   :feedback_c: This will return a string that starts at position 1 and ends at position 3.

   What will be printed when the following executes?

   ::

     str = "This is the end"
     str = str[1:4]
     print(str)

.. mchoice:: test_question8_5_1
   :practice: T
   :answer_a: python
   :answer_b: rocks
   :answer_c: hon r
   :answer_d: Error, you cannot have two numbers inside the [ ].
   :correct: c
   :feedback_a: That would be s[0:6].
   :feedback_b: That would be s[7:].
   :feedback_c: Yes, start with the character at index 3 and go up to but not include the character at index 8.
   :feedback_d: This is called slicing, not indexing.  It requires a start and an end.


   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(s[3:8])
