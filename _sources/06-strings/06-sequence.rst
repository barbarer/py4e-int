A string is a sequence
----------------------

A string is a *sequence* of characters. You can access
the characters one at a time with the bracket operator:

.. code-block:: python

   >>> fruit = 'banana'
   >>> letter = fruit[1]

The second statement extracts the character at index position 1 from the
``fruit`` variable and assigns it to the ``letter``
variable.

The expression in brackets is called an *index*. The
index indicates which character in the sequence you want (hence the
name).

But you might not get what you expect:

.. activecode:: strCharacters
    :caption: Accessing individual characters of a string

    fruit = 'banana'
    letter = fruit[1]
    print(letter)


For most people, the first letter of "banana" is "b", not
"a". But in Python, the index is an offset from the beginning
of the string, and the offset of the first letter is zero.

.. activecode:: strFirst
    :caption: Accessing first character of a string

    fruit = 'banana'
    letter = fruit[0]
    print(letter)


So "b" is the 0th letter ("zero-th") of "banana",
"a" is the 1th letter ("one-th"), and "n" is the
2th ("two-th") letter.

.. figure:: ../images/string.svg
   :alt: String Indexes

.. mchoice:: str-seq-mc-cheer
    :practice: T
    :answer_a: "o"
    :answer_b: " "
    :answer_c: "B"
    :answer_d: "l"
    :correct: c
    :feedback_a: Remember that in Python, counting starts at zero; so "o" is actually cheer[1].
    :feedback_b: Remember that in Python, counting starts at zero; so " " is actually cheer[2].
    :feedback_c: Correct! In Python, counting starts with zero; so cheer[3] is "B".
    :feedback_d: Remember that in Python, counting starts at zero; so "l" is actually cheer[4].

    What is printed by the following statements?

    ::

        cheer = "Go Blue!"
        print(cheer[3])

You can use any expression, including variables and operators, as an
index, but the value of the index has to be an integer. Otherwise you
get:

.. activecode:: strFloatIndex
    :caption: Using float values to index characters

    fruit = 'banana'
    letter = fruit[1.5]


.. mchoice:: str-seq-mc-error
    :practice: T
    :answer_a: IndexError
    :answer_b: TypeError
    :answer_c: SyntaxError
    :correct: b
    :feedback_a: You will get an IndexError if you try to access a string beyond its range. For example, if string = "hi", calling string[2] would cause an IndexError.
    :feedback_b: A TypeError would occur because the program is expecting an integer as the index, not a float.
    :feedback_c: A SyntaxError is caused when there are issues with the code as it is written, rather than the values it is given.

    The following code would cause what kind of error?

    ::

        fruit = 'papaya'
        letter = fruit[1.5]

.. mchoice:: str-seq-mc-name
    :practice: T
    :answer_a: "s"
    :answer_b: " "
    :answer_c: "Olivia"
    :correct: a
    :feedback_a: Correct! In Python, counting starts with zero; so after the reassignment hello the 12th
                 character from the original string, "s".
    :feedback_b: Remember that in Python, counting starts at zero! And watch out for the reassignment.
    :feedback_c: Remember that in Python, counting starts at zero! And watch out for the reassignment.

    What is printed by the following statements?

    ::

        hello = "Hi my name is Olivia."
        hello = hello[12]
        print(hello)

.. fillintheblank:: str-seq-fitb-index
    :practice: T

    The expression in brackets that indicates which characters you want is called a(n) ______.

    - :[Ii]ndex: Correct! An index is an integer value used to select an item in a sequence, such as a
        character in a string.
      :.*: Try again! This piece selects an item in a sequence.
