Getting the length of a string using ``len()``
----------------------------------------------
.. index::
    pair: Function; Len
    single: IndexError
    pair: Index; Negative


``len()`` is a built-in function that returns the number of
characters in a string:

.. activecode:: string-fruit
    :caption: finding the length of a string

    fruit = "banana"
    print(len(fruit))

.. mchoice:: str-len-mc-street
    :practice: T
    :answer_a: 13
    :answer_b: 15
    :answer_c: 10
    :answer_d: 6
    :correct: b
    :feedback_a: Incorrect! Don't forget to include the spaces in the count. Try again.
    :feedback_b: Correct! The len function returns the number of characters in the string, including spaces.
    :feedback_c: Incorrect! This would be true if the len function only returned the number of different characters present, but it includes all characters, including spaces. Try again.
    :feedback_d: Incorrect! This is the length of the word "street", not the length of the string named street. Try again.


    What is printed by the following statements?

    ::

      street = "125 Main Street"
      print(len(street))


To get the last letter of a string, you might be tempted to try
something like this:

.. activecode:: string-last
    :caption: trying to access the last character of a string

    fruit = "banana"
    length = len(fruit)
    last = fruit[length]

The reason for the ``IndexError`` is that there is no letter in
"banana" with the index 6. Since we started counting at
zero, the six letters are numbered 0 to 5. To get the last character,
you have to subtract 1 from ``length``:

.. activecode:: string-len
    :caption: accessing the last character of a string

    fruit = 'banana'
    length = len(fruit)
    last = fruit[length-1]
    print(last)


Alternatively, you can use negative indices, which count backward from
the end of the string. The expression ``fruit[-1]`` yields the
last letter, ``fruit[-2]`` yields the second to last, and so
on.

.. mchoice:: str-len-mc-apple
    :practice: T
    :answer_a: l
    :answer_b: p
    :answer_c: a
    :answer_d: Error, len(s) is 12 and there is no index 12.
    :correct: b
    :feedback_a: Incorrect! Take a look at the index calculation again. Try again.
    :feedback_b: Correct! Yes, len(s) is 12 and 12-5 is 7. Index 7 of s is 'l'.
    :feedback_c: Incorrect! 'a' is at index 6. Try again.
    :feedback_d: Incorrect! You subtract 5 before using the index operator, so there isn't an error. Try again.


    What is printed by the following statements?

    .. code-block:: python

      s = "green apples"
      print(s[len(s)-5])


.. mchoice:: str-len-mc-rocks
    :practice: T
    :answer_a: c
    :answer_b: k
    :answer_c: s
    :answer_d: Error, negative indices are illegal.
    :correct: a
    :feedback_a: Correct! 'c' is three characters from the end of the string.
    :feedback_b: Incorrect! s[-3] means to use the third to last character. Try again.
    :feedback_c: Incorrect! When expressed with a negative index, 's' is at index -1. Try again.
    :feedback_d: Incorrect! Python uses negative indices to count backwards from the end. Try again.


    What is printed by the following statements?

    .. code-block:: python

      s = "python rocks"
      print(s[-3])
