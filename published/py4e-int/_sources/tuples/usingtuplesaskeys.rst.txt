Using Tuples as Keys in Dictionaries
-------------------------------------

.. index::
   single: Tuples as Keys

Because tuples are hashable and lists are not, if we
want to create a composite key to use in a dictionary
we must use a tuple as the key.

We would encounter a composite key if we wanted to create a telephone
directory that maps from last-name, first-name pairs to telephone
numbers. Assuming that we have defined the variables ``last``\ ,
``first``\ , and ``number``\ , we could write a dictionary
assignment statement as follows:

.. code-block:: python

   directory[last, first] = number

.. activecode:: question10_7_1
   :practice: T
   :nocodelens:

   Write code to create a dictionary called 'd1', and in it give the tuple (1, 'a') a value of "tuple".
   ~~~~

   ====
   from unittest.gui import TestCaseGui

   class MyTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(d1[(1, "a")], "tuple", "Checking to make sure the key has the correct value.")

   MyTests().main()

.. mchoice:: question10_7_2
   :practice: T
   :answer_a: Dictionaries
   :answer_b: Tuples
   :answer_c: Strings
   :answer_d: Integers
   :answer_e: Lists
   :correct: b, c, d
   :feedback_a: Incorrect! Dictionaries cannot be the keys of other dictionaries. Try again.
   :feedback_b: Correct! It is fine to use tuples as keys in a dictionary.
   :feedback_c: Correct! Strings are used as keys of dictionaries all the time!
   :feedback_d: Correct! Integers are perfectly acceptable to be keys of dictionaries.
   :feedback_e: Incorrect! Lists cannot be used as the keys of dictionaries. Try again.

   Which of these options can be keys of a dictionary? Select all that apply.


The expression in brackets is a tuple. We could use tuple assignment in
a ``for`` loop to traverse this dictionary.


.. code-block:: python

   for last, first in directory:
       print(first, last, directory[last, first])


This loop traverses the keys in ``directory``\ , which are
tuples. It assigns the elements of each tuple to ``last`` and
``first``\ , then prints the name and corresponding telephone
number.

.. mchoice:: question10_7_3
   :practice: T
   :answer_a: my_dict['Go']
   :answer_b: my_dict['Blue']
   :answer_c: my_dict['Go', 'Blue']
   :answer_d: my_dict[('Go', 'Blue')]
   :correct: c, d
   :feedback_a: Incorrect! You need both values in the tuple for the dictionary to recognize it as the correct key. Try again.
   :feedback_b: Incorrect! You need both values in the tuple for the dictionary to recognize it as the correct key. Try again.
   :feedback_c: Correct! In this case, the parentheses of the tuple are not required in order to properly call its value.
   :feedback_d: Correct! This is one way to grab the value associated with the tuple.

   Which of the following lines of code correctly prints the value associated with ('Go', 'Blue')? Select all that apply.

   .. code-block:: python

      my_dict = {}
      my_dict[('Go', 'Blue')] = True
