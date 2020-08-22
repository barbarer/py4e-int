Sequences: strings, lists, and tuples - Oh My!
----------------------------------------------

I have focused on lists of tuples, but almost all of the examples in
this chapter also work with lists of lists, tuples of tuples, and tuples
of lists. To avoid enumerating the possible combinations, it is
sometimes easier to talk about sequences of sequences.

In many contexts, the different kinds of sequences (strings, lists, and
tuples) can be used interchangeably. So how and why do you choose one
over the others?


To start with the obvious, strings are more limited than other sequences
because the elements have to be characters. They are also immutable. If
you need the ability to change the characters in a string (as opposed to
creating a new string), you might want to use a list of characters
instead.

Lists are more common than tuples, mostly because they are mutable. But
there are a few cases where you might prefer tuples:

In some contexts, like a ``return`` statement, it is syntactically simpler to create a tuple than a list. In other contexts, you might prefer a list.

If you want to use a sequence as a dictionary key, you have to use an immutable type like a tuple or string.

If you are passing a sequence as an argument to a function, using tuples reduces the potential for unexpected behavior due to aliasing.

.. fillintheblank:: question10_8_1
   :practice: T

   When using a sequence as a dictionary key, it is best to use a ______ because it is immutable.

   - :[Tt]uple: Correct! A tuple is perfect for this scenario. One could also use a string.
     :.*: Try again!

Because tuples are immutable, they don't provide methods like
``sort`` and ``reverse``\ , which modify existing lists.
However Python provides the built-in functions ``sorted`` and
``reversed``\ , which take any sequence as a parameter and return
a new sequence with the same elements in a different order.

.. mchoice:: question10_8_2
   :practice: T
   :answer_a: Tuples
   :answer_b: Strings
   :answer_c: Lists
   :answer_d: Dictionaries
   :correct: c, d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! Lists are mutable, meaning you can do more with them which is why they are more appealing to use.
   :feedback_d: Correct! Dictionaries are also mutable, making them easier to use than immutable objects.

   Which of the following objects are mutable? Select all that apply.

.. mchoice:: question10_8_3
   :practice: T
   :answer_a: Iterable
   :answer_b: Key
   :answer_c: lambda
   :answer_d: Reverse
   :correct: b, d
   :feedback_a: Try again! The iterable is necessary to use sorted(). It is not optional.
   :feedback_b: Correct! The key can be used to sort the iterable in a specific manner, but is not required to use this function.
   :feedback_c: Try again!
   :feedback_d: Correct! Reverse is an optional parameter that, when set true, will sort the iterable in reverse (descending) order.


   Which of the following are the optional parameters for the sorted() function?
