Dictionaries and tuples
-----------------------

Dictionaries have a method called ``items`` that returns a list
of tuples, where each tuple is a key-value pair:

.. activecode:: dictionariesandtuples_exercise_1
   :nocodelens:

   d = {'a':10, 'b':1, 'c':22}
   t = list(d.items())
   print(t)


As you should expect from a dictionary, the items are in no particular
order.

.. mchoice:: question10_4_1
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! Parentheses are required when calling the .items() method.

   True or false? The following code will correctly output the items of the dictionary t.

   .. code-block:: python

      name_dictionary = {'Bob': 5, 'Melissa': 3, 'John': 7, 'Kim': 5}
      t = list(name_dictionary.items)
      print(t)

However, since the list of tuples is a list, and tuples are comparable,
we can now sort the list of tuples. Converting a dictionary to a list of
tuples is a way for us to output the contents of a dictionary sorted by
key:

.. activecode:: dictionariesandtuples_exercise_2
   :nocodelens:

   d = {'b':1, 'a': 10, 'c':22}
   t = list(d.items())
   print(t) #should print [('b', 1), ('a', 10), ('c', 22)]
   t.sort()
   print(t) #should print [('a', 10), ('b', 1), ('c', 22)]


The new list is sorted in ascending alphabetical order by the key value.

.. mchoice:: question10_4_2
   :practice: T
   :answer_a: It will be sorted in ascending order by the keys' first letter
   :answer_b: By descending order of each key's value
   :answer_c: It will be sorted in descending order by the keys' first letter
   :answer_d: By ascending order of each key's value
   :correct: a
   :feedback_a: Correct! The .sort() method has two optional parameters, one for the key and one for the reverse method.
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Try again!

   How will the list below be sorted (if there is any order at all)?

   .. code-block:: python

      grocery_list = {'apples': 5, 'chicken': 8, 'pineapple': 3, 'kiwi': 7}
      grocery_list.sort()


.. activecode:: question10_4_3
   :nocodelens:
   :practice: T

   Write code that will transform dictionary d into a list of tuples, called tup_list, sorted by the values in descending order.
   ~~~~
   d = {'a': 10, 'b': 2, 'c': 27, 'd': 15, 'e': 30, 'f': 3}

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(tup_list, [('e', 30), ('c', 27), ('d', 15), ('a', 10), ('f', 3), ('b', 2)], "To help, make sure to use the .items() method!")
           self.assertEqual(len(tup_list), 6, "Test to make sure no values were added or deleted.")

   myTests().main()
