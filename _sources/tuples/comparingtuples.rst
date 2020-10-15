Comparing Tuples
----------------

.. index::
   single: Tuple Comparison
   single: DSU Pattern
   single: Decorate
   single: Sort
   single: Undecorate

The comparison operators can be used with tuples and other sequences. Python
starts by comparing the first element from each sequence. If they are
equal, it compares the next element of each, and so on, until it finds
elements that differ. Subsequent elements are not considered (even if
they're really big).

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
   :feedback_a: Correct! The comparison operator looks at the first pair of elements that differ from each other. In this case, it is the first elements, so all following elements are ignored.
   :feedback_b: Incorrect! Remember, the comparison operator starts by comparing just the first element of the two tuples, and only moves on if they're equal. Try again.
   :feedback_c: Incorrect! The comparison operator works fine with tuples. Try again.

   What is returned when the following code is run?

   .. code-block:: python

      (5, 7, 3) < (7, 4, 2)


``sort()`` is a list method that can be helpful when managing a list of tuples. When sorting, it compares the
first element of each tuple, but in the case of a tie, it compares their second elements, and
so on.

Combining these tools leads to a very common, and widely applicable sorting process called *DSU*.
*DSU* is short for:

**Decorate** a sequence by building a list of tuples with one or more sort metrics preceding the elements from the sequence.

**Sort** the list of tuples using Python's built-in ``sort`` method.

**Undecorate** by extracting the sorted elements of the sequence.

.. dragndrop:: question10_2_2
   :feedback: Something's wrong! Look up for the definitions.
   :match_1: Decorate|||A sequence by building a list of tuples with one or more sort metrics preceding the elements from the sequence.
   :match_2: Sort|||The list of tuples using the Python built-in sort.
   :match_3: Undecorate|||By extracting the sorted elements of the sequence.

   Match the steps of DSU with their definitions.


For example, suppose you have a list of words and you want to sort them
from longest to shortest:

.. activecode:: comparingtuples_exercise_1
   :nocodelens:

   txt = 'but soft what light in yonder window breaks'
   words = txt.split()
   tupleList = []
   for word in words:
       tupleList.append((len(word), word))

   tupleList.sort(reverse = True)

   sortedWordsList = []
   for length, word in tupleList:
       sortedWordsList.append(word)

   print(sortedWordsList)

Let's walk through the *DSU* process:

The first loop **decorates** by building a list of tuples, where each tuple is a word
preceded by its length.

``sort`` **sorts** by comparing the first element of each tuple (length) first. It only
considers the second element, alphabetical order, to break ties. The keyword argument
``reverse=True`` tells ``sort`` to go in decreasing
order, meaning that longer words will be first in the sorted list and that if two words are 
the same length, the one that comes last in alphabetical order will appear before the other.

Finally, the second loop **undecorates** by traversing the list of tuples and adding the sorted words to a list.


The output of the program is as follows:

.. code-block::

   ['yonder', 'window', 'breaks', 'light', 'what', 'soft', 'but', 'in']


Of course, the line loses much of its poetic impact when turned into a
Python list and sorted in descending word length order.

.. parsonsprob:: question10_2_3
   :numbered: left
   :practice: T
   :adaptive:

   Move the code blocks around to create a program that sorts the words in word_list by length from longest to shortest and adds them to sorted_word_list. Hint: remember DSU!
   -----
   word_list = ['pen', 'skyscraper', 'post', 'computer', 'apple', 'Hollywood']
   tup_list = []
   sorted_word_list = []
   =====
   for word in word_list:
   =====
      tup = len(word), word
   =====
      tup_list.append(tup)
   =====
   tup_list.sort(reverse = True)
   =====
   tup_list.sort() #paired
   =====
   for length, word in tup_list:
   =====
      sorted_word_list.append(word)