Debugging
---------

.. index::
   single: Debugging Tuples
   single: Shape Error

Lists, dictionaries and tuples are known generically as **data
structures**\ . In this chapter, we have started to see **compound**
data structures, like lists of tuples and dictionaries with
tuples as keys and lists as values.

Compound data structures are useful, but they are prone to *shape errors*\ ;
that is, errors caused when a data structure has the wrong type, size, or
composition, or perhaps you write some code and forget the shape of your
data and introduce an error. For example, if you are expecting a list containing
one integer and I just give you an integer that isn't in a list, it won't work.


.. mchoice:: question10_9_1
   :answer_a: Read, retreat, run, ruminate
   :answer_b: Read, google, run, ruminate
   :answer_c: Email your GSI for help
   :correct: a
   :feedback_a: Correct! As shown in Chapter 1, these are the best ways to go about discovering bugs in your code.
   :feedback_b: Incorrect! While Google is very useful for programmers, it's not one of the debugging steps we reviewed in Chapter 1. Try again.
   :feedback_c: Incorrect! While you can always reach out to your GSI with questions, always make sure to first try and find the bug yourself. Try again.

   When an error is present in your code, what should you do to help discover the bug?

.. fillintheblank:: question10_9_2

   A(n) ________ is an error that is caused when a data structure has the wrong type, size, or composition.

   - :[Ss]hape [Ee]rror: Correct! A shape error is more likely to occur when working with compound data structures.
     :.*: Incorrect! If you need a refresher, reread the opening paragraphs of this section. Try again.

.. mchoice:: question10_9_3
   :practice: T
   :answer_a: Lists of tuples
   :answer_b: Lists
   :answer_c: Tuples
   :answer_d: Dictionaries with tuples for keys
   :correct: a, d
   :feedback_a: Correct! Lists of tuples are a type of compound data structure.
   :feedback_b: Incorrect! Lists are a type of data structure, but a list by itself isn't compound. Try again.
   :feedback_c: Incorrect! Tuples are a type of data structure, but a tuple by itself isn't compound. Try again.
   :feedback_d: Correct! A dictionary with tuples for keys is another type of compound data structure.

   Which of the following are examples of compound data structures? (Select all that apply)
