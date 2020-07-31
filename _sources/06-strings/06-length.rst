Getting the length of a string using ``len``
----------------------------------------------
.. index::
    pair: Function; Len
    single: IndexError
    pair: Index; Negative


``len`` is a built-in function that returns the number of
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
   :correct: b
   :feedback_a: Don't forget to include the spaces in the count.
   :feedback_b: The len function returns the number of elements in the string including spaces.
   :feedback_c: This would be true if the len function only returned the number of alphabetic characters, but it includes all including spaces.


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
   :feedback_a: Take a look at the index calculation again, len(s)-5.
   :feedback_b: Yes, len(s) is 12 and 12-5 is 7.  Use 7 as index and remember to start counting with 0.
   :feedback_c: a is at index 6
   :feedback_d: You subtract 5 before using the index operator so it will work.


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
   :feedback_a: Yes, 3 characters from the end.
   :feedback_b: Count backward 3 characters.
   :feedback_c: When expressed with a negative index the last character s is at index -1.
   :feedback_d: Python does use negative indices to count backward from the end.


   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(s[-3])
