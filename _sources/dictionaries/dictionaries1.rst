
Dictionaries
============

.. index::
   single: Dictionary
   single: Key
   single: Index
   single: Key-Value Pair
   single: KeyError
   single: Len function
   single: In operator
   single: Values operator
   single: Hash Table

A *dictionary* is like a list, but more general. In a
list, the index positions have to be integers; in a dictionary, the
indices can be (almost) any type.

You can think of a dictionary as a mapping between a set of indices
(which are called *keys*\ ) and a set of values. Each key
maps to a value. The association of a key and a value is called a
*key-value pair* or sometimes an *item*.

As an example, we'll build a dictionary that maps from English to
Spanish words, so the keys and the values are all strings.

The function ``dict`` creates a new dictionary with no items.
Because ``dict`` is the name of a built-in function, you should
avoid using it as a variable name.


.. activecode:: dict_print_new_dict

   d1 = dict()
   print(d1)
   d2 = {}
   print(d2)

The curly brackets, ``{}``\ , represent an empty dictionary. To add items to
the dictionary, you can use square brackets:

.. code-block:: python

   >>> eng2sp['one'] = 'uno'

.. activecode:: dict_example1
   :nocodelens:

   Write code that adds the key 'two' with a value of 'dos' to the dictionary eng2sp.
   ~~~~
   eng2sp = {'one':'uno'}

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(eng2sp['two'], 'dos', "Testing if the key 'two' maps to 'dos'.")

   myTests().main()

This line creates an item that maps from the key ``'one'`` to
the value "uno". If we print the dictionary again, we see a key-value
pair with a colon between the key and value:

.. code-block:: python

   eng2sp = {'one':'uno'}
   print(eng2sp)
   {'one':'uno'}

This output format is also an input format. For example, you can create
a new dictionary with three items.  But if you print ``eng2sp``\ , you might be surprised:

.. activecode:: Dict_example2

   eng2sp = {'one': 'uno', 'two': 'dos', 'three': 'tres'}
   print(eng2sp)


The order of the key-value pairs is not the same. In fact, if you type
the same example on your computer, you might get a different result. In
general, the order of items in a dictionary is unpredictable.

But that's not a problem because the elements of a dictionary are never
indexed with integer indices. Instead, you use the keys to look up the
corresponding values:

.. code-block:: python

   >>> print(eng2sp['two'])
   'dos'


The key ``'two'`` always maps to the value "dos" so the order
of the items doesn't matter.

If the key isn't in the dictionary, you get an exception:

.. code-block:: python

   >>> print(eng2sp['four'])
   KeyError: 'four'


The ``len`` function works on dictionaries; it returns the
number of key-value pairs:

.. code-block:: python

   >>> len(eng2sp)
   3


The ``in`` operator works on dictionaries; it tells you whether
something appears as a *key* in the dictionary (appearing as a value is
not good enough).

.. code-block:: python

   >>> 'one' in eng2sp
   True
   >>> 'uno' in eng2sp
   False

.. mchoice:: question9_1_2
  :practice: T
  :answer_a: True
  :answer_b: False
  :correct: b
  :feedback_a: Try again! Remember that the in operator returns true if the value is a key in the dictionary.
  :feedback_b: Correct! 'Water' is a value in the dictionary, therefore the in operator will not be able to determine if this is in the dictionary.

  What is printed after the following code is run?

  .. code-block:: python

     pokemon_name_n_type = {'Squirtle': 'Water', 'Charmander': 'Fire', 'Bulbasaur' : 'Grass'}
     print('Water' in pokemon_name_n_type)


To see whether something appears as a value in a dictionary, you can use
the method ``values``\ , which returns the values as a list, and
then use the ``in`` operator:

.. code-block:: python

   >>> vals = list(eng2sp.values())
   >>> 'uno' in vals
   True


The ``in`` operator uses different algorithms for lists and
dictionaries. For lists, it uses a linear search algorithm. As the list
gets longer, the search time gets longer in direct proportion to the
length of the list. For dictionaries, Python uses an algorithm called a
*hash table* that has a remarkable property: the
``in`` operator takes about the same amount of time no matter
how many items there are in a dictionary. I won't explain why hash
functions are so magical, but you can read more about it at
`wikipedia.org/wiki/Hash_table <https://wikipedia.org/wiki/Hash_table>`_.


.. mchoice:: question9_1_3
   :practice: T
   :answer_a: 1
   :answer_b: 4
   :answer_c: 5
   :correct: c
   :feedback_a: Try again! This is only the original amount of apples (1), but it must be increased by the amount of bananas (4)
   :feedback_b: Try again! This is only the amount of bananas (4), but we must add this to the number of apples (1).
   :feedback_c: Correct! The original amount of apples (1) is increased by the amount of bananas (4) to result in 5 apples.

   What is the value of fruits['apples'] when the code finishes running?

   .. code-block:: python

      fruits = {'apples': 1, 'bananas': 4, 'pears': 17, 'oranges': 14}
      fruits['apples'] += fruits['bananas']
