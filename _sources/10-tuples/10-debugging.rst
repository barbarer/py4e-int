Debugging
---------

.. index::
   single: Debugging Tuples
   single: Shape Error

Lists, dictionaries and tuples are known generically as *data
structures*\ ; in this chapter we are starting to see compound
data structures, like lists of tuples, and dictionaries that contain
tuples as keys and lists as values. Compound data structures are useful,
but they are prone to what I call *shape errors*\ ; that
is, errors caused when a data structure has the wrong type, size, or
composition, or perhaps you write some code and forget the shape of your
data and introduce an error. For example, if you are expecting a list with one integer and I give you a plain old integer (not in a list), it won't work.


.. mchoice:: question10_9_1
   :practice: T
   :answer_a: Reading, retreating, running, ruminating
   :answer_b: Reading, google, running, ruminating
   :answer_c: Email your GSI for help
   :correct: a
   :feedback_a: Correct! As shown in Chapter 1, these are the best ways to go about discovering bugs in your code.
   :feedback_b: Try again!
   :feedback_c: Try again! While you can always reach out to your GSI with questions, always make sure to first try and find the bug yourself.

   When an error is present in your code, what four actions should you take to discover the bug?

.. fillintheblank:: question10_9_2
   :practice: T

   A(n) ________ is an error that is caused when a data structure has the wrong type, size, or composition.

   - :[Ss]hape [Ee]rror: Correct! A shape error is likely to occur when working with compound data structures.
     :.*: Try again!

.. mchoice:: question10_9_3
   :practice: T
   :answer_a: Lists of tuples
   :answer_b: Lists
   :answer_c: Tuples
   :answer_d: Dictionaries with tuples as keys
   :correct: a, d
   :feedback_a: Correct! Lists of tuples are a type of compound data structure.
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct! A dictionary with tuples for keys are another type of compound data structure.

   Which of the following are examples of Compound Data Structures? (Select all that apply)
