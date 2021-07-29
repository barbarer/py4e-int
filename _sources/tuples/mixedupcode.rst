Mixed-Up Code Questions
------------------------

.. parsonsprob:: mixedupcode_question10_1_v2
   :numbered: left
   :practice: T
   :adaptive:

   Create a function ``create_tup(str)`` that takes a string, ``str``, and returns a list of tuples where the first element is the length of each word in ``str`` and the second is the word itself. Sort the list in terms of word length from longest to shortest. For example, ``create_tup("hi bye")`` would return ``[(3, 'bye'), (2, 'hi')]``.
   -----
   def create_tup(str):
   =====
       words = str.split()
       t_list = []
   =====
       for word in words:
   =====
           t_list.append((len(word), word))
   =====
           t_list.append(len(word)) #paired
   =====
       t_list.sort(reverse = True)
   =====
       t_list.sort(reverse = False) #paired
   =====
       return t_list


.. parsonsprob:: mixedupcode_question10_2_v2
   :numbered: left
   :adaptive:

   Create a function ``create_tup(word_list)`` that takes a list of words, ``word_list``, and returns a list of tuples where the first element is a word from ``str`` and the second is the length of the word. Sort the list in terms of word length from longest to shortest.  For example, if ``create_tup(['hi', 'bye'])`` should return ``[('bye', 3), ('hi', 2)]``.
   -----
   def create_tup(word_list):
   =====
       t_list = []
   =====
       for word in word_list:
   =====
       for word in t_list: #paired
   =====
           tup = word, len(word)
   =====
           t_list.append(tup)
   =====
   	       word_list.append(tup) #paired
   =====
       t_list.sort(key = lambda x: x[1], reverse = True)
   =====
       return t_list


.. parsonsprob:: mixedupcode_question10_3
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that swaps the second and fourth values of tuple ``t`` with one another.
   -----
   t = ('Apple', 'Banana', 'Grapefruit', 'Pear', 'Peach')
   =====
   a, b, c, d, e = t
   =====
   a, b, c, d = t #paired
   =====
   t = a, d, c, b, e
   =====
   t = a, c, b, e, d #paired

.. parsonsprob:: mixedupcode_question10_4
   :numbered: left
   :practice: T
   :adaptive:

   Reorder the blocks of code to transform the dictionary ``d`` into a list of tuples called ``tup_list``, and sort it by the dictionary's keys in ascending order.
   -----
   d = {'a': 10, 'b': 2, 'c': 27, 'd': 15, 'e': 30, 'f': 3}
   =====
   tup_list = list(d.items())
   =====
   tup_list = d.items() #paired
   =====
   tup_list.sort()
   =====
   tup_list.sort(reverse = False) #paired
   =====
   tup_list.sort(key = lambda x: x[1]) #paired

.. parsonsprob:: mixedupcode_question10_5_v2
   :numbered: left
   :adaptive:
   :practice: T

   Construct a block of code that uses tuples to keep track of the word count in the file ``heineken.txt``. Then print out the 10 most frequently occurring words from the file.
   -----
   word_counter = {}
   with open("heineken.txt", "r") as file_h:
   =====
       lines = file_h.readlines()
   =====
   for line in lines:
   =====
       words = line.split()
   =====
       words = lines.split() #paired
   =====
   		     for word in words:
   =====
   			       word_counter[word] = word_counter.get(word, 0) + 1
   =====
   list_of_tuples = list(word_counter.items())
   =====
   list_of_tuples = list(word_counter.items) #paired
   =====
   list_of_tuples.sort(key = lambda x: x[1], reverse = True)
   =====
   for i in range(10):
   =====
       print(list_of_tuples[i][0])

.. parsonsprob:: mixedupcode_question10_6
   :numbered: left
   :adaptive:
   :practice: T

   Construct a block of code to add the key-value pairs of dictionary ``d`` to a list and then print them.
   -----
   d = {'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10}
   list_for_kv_pairs = []
   =====
   for key, val in d.items():
   =====
       list_for_kv_pairs.append((key, val))
   =====
       list_for_kv_pairs.append(key, val) #paired
   =====
   print(list_for_kv_pairs)


.. parsonsprob:: mixedupcode_question10_7_v2
   :numbered: left
   :practice: T
   :adaptive:

   Reorder the code blocks to put the words in the ``mbox-short.txt`` file into a dictionary, where the keys are words and the values are their lengths. Then, print a list of the dictionary's key-value pairs in alphabetical order.
   -----
   dict = {}
   with open(mbox-short.txt) as fhand:
   =====
       lines = fhand.readlines()
   =====
   for line in lines:
   =====
       for word in line.split()
   =====
   		     dict[word] = dict.get(word, len(word))
   =====
   			   dict[word] = dict.get(word, 0) + len(word) #paired
   =====
   print(sorted(dict.items()))
   =====
   print(dict.sort()) #paired

.. parsonsprob:: mixedupcode_question10_8
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that takes the longest item in each tuple, and adds it to the list ``longest_words``.
   -----
   list_of_tuples = [('twice', 'for', 'apples'), ('regular', 'combining'), ('one', 'five', 'twenty', 'twenty-four'), ('tmobile', 'sprint', 'at&t')]
   lst = []
   =====
   for tup in list_of_tuples:
   =====
       longest_word = ''
   =====
   	   longest_word = 0 #paired
   =====
   	   for item in tup:
   =====
   		     if len(item) > len(longest_word):
   =====
   			       longest_word = item
   =====
   			       longest_word = len(item) #paired
   =====
       lst.append(longest_word)

.. parsonsprob:: mixedupcode_question10_9
   :numbered: left
   :adaptive:
   :practice: T

   Construct a block of code that creates a new list with every item in ``tup`` capitalized and then print the list.
   -----
   tup = ('wolverine', 'Ann Arbor', 'michigan')
   t_list = []
   =====
   for item in tup:
   =====
       t_list = t_list.append(item.capitalized())
   =====
       t_list = t_list.add(item.capitalized()) #paired
   =====
   print(t_list)
   =====
   print(tup) #paired



.. parsonsprob:: mixedupcode_question10_10
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code to transform the ``grocery_dictionary`` into a list of tuples, then sort the list by the dictionary's values in ascending order.
   -----
   grocery_dictionary = {'chicken': 5, 'lettuce': 3, 'orange juice': 4, 'bagels': 2.50, 'bacon': 4.25, 'bread': 8}
   =====
   grocery_list = list(grocery_dictionary.items())
   =====
   grocery_list = items(grocery_dictionary) #paired
   =====
   grocery_list.sort(key = lambda x: x[1])
   =====
   grocery_list.sort(key = lambda x: x[1], reverse = True) #paired
