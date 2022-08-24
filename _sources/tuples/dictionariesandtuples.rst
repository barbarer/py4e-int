Dictionaries and Tuples
-----------------------

.. index::
   single: Item Method
   single: Key-Value Pairs

Dictionaries have a method called ``items`` that returns a list
of tuples, where each tuple is a key-value pair. (Technically, it returns
a "view object," but using it as the parameter in Python's ``list()``
constructor converts it into a list.)

.. activecode:: dictionariesandtuples_exercise_1
   :nocodelens:

   d = {'a':10, 'b':1, 'c':22}
   t = list(d.items())
   print(t)


.. mchoice:: question10_4_1
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: Incorrect! Look closely at the second line. Notice anything missing? Try again.
   :feedback_b: Correct! Parentheses are required when calling the items() method.

   True or false? The following code will correctly output the items of the dictionary t.

   .. code-block:: python

      name_dictionary = {'Bob': 5, 'Melissa': 3, 'John': 7, 'Kim': 5}
      t = list(name_dictionary.items)
      print(t)

As you should expect from a dictionary, the items are in no particular order.
However, since a list of tuples is a list, and tuples are comparable,
we can sort the list of tuples. Converting a dictionary to a list of
tuples is a way for us to output the contents of a dictionary sorted by
key:

.. activecode:: dictionariesandtuples_exercise_2
   :nocodelens:

   d = {'b':1, 'a': 10, 'c':22}
   t = list(d.items())
   print(t) #should print [('b', 1), ('a', 10), ('c', 22)]
   t.sort()
   print(t) #should print [('a', 10), ('b', 1), ('c', 22)]


(If you need a reminder, the ``sort`` method sorts a list in alphabetical order.)

The resulting list is sorted in ascending alphabetical order by the key value.

.. mchoice:: question10_4_2
   :practice: T
   :answer_a: In ascending order by the keys' first letter.
   :answer_b: In descending order by each key's value.
   :answer_c: In descending order by the keys' first letter.
   :answer_d: In ascending order by each key's value.
   :correct: a
   :feedback_a: Correct! This is the way that the sort() method sorts lists of tuples.
   :feedback_b: Incorrect! The sort() method doesn't consider the keys' values at all. Try again.
   :feedback_c: Incorrect! The default way that the sort() method sorts is in ascending order. Try again.
   :feedback_d: Incorrect! The sort() method doesn't consider the keys' values at all. Try again.

   How will the list below be sorted (if there is any order at all)?

   .. code-block:: python

      grocery_dict = {'apple': 5, 'pineapple': 3, 'chicken': 8, 'kiwi': 7}
      grocery_list = list(grocery_dict.items())
      grocery_list.sort()

The ``sort`` method also has an optional parameter, ``reverse``, whose value can
tell ``sort`` to sort in descending order.

.. activecode:: dictionariesandtuples_exercise_3
   :nocodelens:

   grocery_dict = {'apple': 5, 'pineapple': 3, 'chicken': 8, 'kiwi': 7}
   grocery_list = list(grocery_dict.items())
   grocery_list.sort(reverse=True)
   print(grocery_list) #should print [('pineapple', 3), ('kiwi', 7), ('chicken', 8), ('apple', 5)]


.. activecode:: question10_4_3_v2
   :nocodelens:
   :practice: T

   Write code that will transform dictionary d into a list of tuples, called tup_list, sorted by the keys in descending order.
   ~~~~
   d = {'a': 10, 'b': 2, 'c': 27, 'd': 15, 'e': 30, 'f': 3}

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(tup_list, [('f', 3), ('e', 30), ('d', 15), ('c', 27), ('b', 2), ('a', 10)], "Checking to make sure the list was sorted correctly.")
           self.assertEqual(len(tup_list), 6, "Checking to make sure no values were added or deleted.")

   myTests().main()
