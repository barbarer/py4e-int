Multiple Assignment with Dictionaries
-------------------------------------

.. index::
   single: Dictionary Traversal

By combining ``items``\ , tuple assignment, and ``for``\ ,
you can make a nice code pattern for traversing the keys and values of a
dictionary in a single loop:

.. code-block:: python

   for key, val in list(d.items()):
       print(val, key)


This loop has two iteration variables because
``items`` returns a list of tuples and ``key, val`` is
a tuple assignment that successively iterates through each of the
key-value pairs in the dictionary.

For each iteration through the loop, both ``key`` and
``value`` are advanced to the next key-value pair in the
dictionary (still in hash order).

The output of this loop is:

.. code-block::

   10 a
   22 c
   1 b


Again, it is in hash key order (i.e., no particular order).

.. mchoice:: question10_5_1
   :practice: T
   :answer_a: [(4, 'd'), (10, 'a'), (15, 'b'), (17, 'c')]
   :answer_b: [('a', 10), ('b', 15), ('c', 17), ('d', 4)]
   :answer_c: There will be no particular order
   :correct: c
   :feedback_a: Incorrect! Remember, key-value pairs aren't in any particular order. Try again.
   :feedback_b: Incorrect! Remember, key-value pairs aren't in any particular order. Try again.
   :feedback_c: Correct! When running this type of iteration, we are left with a hash key order, meaning there is no particular order.

   How will the contents of list "lst" be ordered after the following code is run?

   .. code-block:: python

      d = {'a': 10, 'b': 15, 'c': 17, 'd': 4}
      lst = []
      for key, val in d.items():
          lst.append( (val, key) )
      print(lst)

If we combine these two techniques, we can print out the contents of a
dictionary sorted by the *value* stored in each key-value pair.

To do this, we first make a list of tuples where each tuple is
``(value, key)``. The ``items`` method would give us a
list of ``(key, value)`` tuples, but this time we want to sort
by value, not key. Once we have constructed the list with the value-key
tuples, it is a simple matter to sort the list in reverse order and
print out the new, sorted list.

.. activecode:: multipleassignments_exercise_1
   :nocodelens:

   d = {'a':10, 'b':1, 'c':22}
   lst = list()
   for key, val in d.items():
       lst.append( (val, key) )
   print(lst) #should print [(10, 'a'), (1, 'b'), (22, 'c')]
   lst.sort(reverse=True)
   print(lst) #should print [(22, 'c'), (10, 'a'), (1, 'b')]


By carefully constructing the list of tuples so that the value is the
first element of each tuple and the key is the second element, we can sort
our dictionary contents by value.

.. parsonsprob:: question10_5_2
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code to iterate through the items in dictionary d and print out its key-value pairs.
   -----
   d = {'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10}
   list_for_kv_pairs = []
   =====
   d = {'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10}
   list_for_kv_pairs = list #paired
   =====
   for (key, val) in d.items():
   =====
   for key, val in d.items: #paired
   =====
   	list_for_kv_pairs.append( (key, val) )
   =====
   print(list_for_kv_pairs)


.. activecode:: question10_5_3
   :nocodelens:
   :practice: T

   Write code to create a list called 'lst' and add the key-value pairs of dictionary d to list lst as tuples. Sort list lst by the values in descending order.
   ~~~~
   d = {'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10}

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(lst, [('rat', 10), ('rabbit', 9), ('dragon', 6), ('monkey', 5), ('snake', 3), ('rooster', 2)], "Making sure the list was sorted correctly.")

   myTests().main()
