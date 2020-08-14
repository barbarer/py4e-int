Comparing Tuples
----------------

.. index::
   single: Tuple Comparison
   single: DSU Pattern
   single: Decorate
   single: Sort
   single: Undecorate

The comparison operators work with tuples and other sequences. Python
starts by comparing the first element from each sequence. If they are
equal, it goes on to the next element, and so on, until it finds
elements that differ. Subsequent elements are not considered (even if
they are really big).

.. code-block:: python

   (0, 1, 2) < (0, 3, 4)
   >>> True
   (0, 1, 2000000) < (0, 3, 4)
   >>> True

.. mchoice:: question10_2_1
   :practice: T
   :answer_a: True
   :answer_b: False
   :answer_c: An error message will occur
   :correct: a
   :feedback_a: Correct! The comparison operator will look up to the first pair of elements that differ from each other. In this case it is the first element, so all preceding elements are ignored.
   :feedback_b: Try again!
   :feedback_c: Try again!

   What is returned when the following code is run?

   .. code-block:: python

      (5, 7, 3) < (7, 4, 2)

The ``sort`` function works the same way. It sorts primarily by
first element, but in the case of a tie, it sorts by second element, and
so on.

This feature lends itself to a pattern called *DSU* for:

Decorate
:   a sequence by building a list of tuples with one or more sort keys preceding the elements from the sequence

Sort
:   the list of tuples using the Python built-in ``sort``

Undecorate
:   by extracting the sorted elements of the sequence

.. dragndrop:: question10_2_2
   :feedback: Look above for the definitions.
   :match_1: Decorate|||A sequence by building a list of tuples with one or more sort keys preceding the elements from the sequence.
   :match_2: Sort|||The list of tuples using the Python built-in sort.
   :match_3: Undecorate|||By extracting the sorted elements of the sequence.

   Match the terms with their definitions.


For example, suppose you have a list of words and you want to sort them
from longest to shortest:

.. activecode:: comparingtuples_exercise_1
   :nocodelens:

   txt = 'but soft what light in yonder window breaks'
   words = txt.split()
   t = []
   for word in words:
       t.append((len(word), word))

   t.sort(reverse = True)

   res = []
   for length, word in t:
       res.append(word)

   print(res)

The first loop builds a list of tuples, where each tuple is a word
preceded by its length.

``sort`` compares the first element, length, first, and only
considers the second element to break ties. The keyword argument
``reverse=True`` tells ``sort`` to go in decreasing
order.


The second loop traverses the list of tuples and builds a list of words
in descending order of length. The four-character words are sorted in
*reverse* alphabetical order, so "what" appears before
"soft" in the following list.

The output of the program is as follows:

.. code-block::

   ['yonder', 'window', 'breaks', 'light', 'what', 'soft', 'but', 'in']


Of course the line loses much of its poetic impact when turned into a
Python list and sorted in descending word length order.

.. parsonsprob:: question10_2_3
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code to create a list containing tuples of each word from word_list paired with their lengths. Then sort the words by length from highest to lowest.
   -----
   word_list = ['pen', 'skyscraper', 'post', 'computer', 'apple', 'Hollywood']
   =====
   tup_list = []
   =====
   for word in word_list:
   =====
   for word in tup_list: #distractor
   =====
    tup = word, len(word)
   =====
    tup_list.append(tup)
   =====
    word_list.append(tup) #distractor
   =====
   tup_list.sort(key = lambda x: x[1], reverse = True)
   =====
   tup_list.sort(x[1], reverse = True) #distractor
