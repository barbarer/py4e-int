Looping and Dictionaries
------------------------

.. index::
   single: Trasversal
   single: Keys Method

If you use a dictionary as the sequence in a ``for`` statement,
it traverses the keys of the dictionary. This loop prints each key and
the corresponding value:

.. code-block:: python

   counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
   for key in counts:
       print(key, counts[key])


Here's what the output looks like:

.. code-block::

   jan 100
   chuck 1
   annie 42


Again, the keys are in no particular order.

We can use this pattern to implement the various loop idioms that we
have described earlier. For example if we wanted to find all the entries
in a dictionary with a value above ten, we could write the following
code:

.. code-block:: python

   counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
   for key in counts:
       if counts[key] > 10 :
           print(key, counts[key])


The ``for`` loop iterates through the *keys* of
the dictionary, so we must use the index operator to retrieve the
corresponding *value* for each key. Here's what the output
looks like:

.. code-block::

   jan 100
   annie 42


We see only the entries with a value above 10.

.. mchoice:: question9_4_1
   :practice: T
   :answer_a: ['NBA Champ', 'Finals MVP', 'MVP', 'All-Star']
   :answer_b: ['NBA Champ', 'Finals MVP', 'MVP', 'All-Star', 'ROTY']
   :answer_c: ['MVP', 'All-Star']
   :correct: b
   :feedback_a: Try again! This list does not inlude all the values that are greater than or equal to one.
   :feedback_b: Correct! This code takes the keys with values greater than or equal to one and puts them into a list. If any of you are wondering, these are some of LeBron James' accolades.
   :feedback_c: Try again! This list does not inlude all the values that are greater than or equal to one.

   What is printed after the following code is run?

   .. code-block:: python

      counts = {'NBA Champ': 3, 'MVP': 4, 'All-Star': 16, 'ROTY': 1, '6MOTY': 0}
      counts['Finals MVP'] = 3
      achievements = []
      for achievement in counts:
          if counts[achievement] >= 1:
              achievements.append(achievement)
      print(achievements)


If you want to print the keys in alphabetical order, you first make a
list of the keys in the dictionary using the ``keys`` method
available in dictionary objects, and then sort that list and loop
through the sorted list, looking up each key and printing out key-value
pairs in sorted order as follows:

.. code-block:: python

   counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
   lst = list(counts.keys())
   print(lst)
   lst.sort()
   for key in lst:
       print(key, counts[key])


Here's what the output looks like:

.. code-block::

   ['jan', 'chuck', 'annie']
   annie 42
   chuck 1
   jan 100

First you see the list of keys in unsorted order that we get from the
``keys`` method. Then we see the key-value pairs in order from
the ``for`` loop.

.. activecode:: question9_4_2
   :practice: T
   :nocodelens:

   Write code to add the keys of dictionary wordCount into a list named MoreThan5 if the keys' value is greater than 5.
   ~~~~
   wordCount = {'so': 7, 'the': 10, 'doctor': 2, 'there': 4, 'code': 10, 'a': 27, 'TI-84': 2, 'therefore': 5}

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(len(MoreThan5), 4, "Testing to make sure the length of the list changed.")

   myTests().main()

.. parsonsprob:: question9_4_3
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that adds the items in a dictionary to a list, where the items' values are greater than or equal to 8, and prints said list.
   -----
   books = {'Percy Jackson': 8, 'Harry Potter': 10, 'The Maze Runner': 10, 'The Hobbit': 7}
   =====
   list_o_books = []
   =====
   list_o_books = {} #distractor
   =====
   for title in books:
   =====
   for title in books #distractor
   =====
    if books[title] > 8: #distractor
   =====
    if books[title] ≥ 8:
   =====
     list_o_books.append(title)
   =====
   print(list_o_books)
