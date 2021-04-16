Mixed-Up Code Questions
------------------------

.. parsonsprob:: mixedupcode_question10_1
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code below to create a list of tuples, ``tup_list``, where the first element is the length of each word in ``txt`` and the second is the word itself. Sort the list in terms of word length from longest to shortest. For example, if ``txt="hi bye"``, ``tup_list`` would be ``[(3, 'bye'), (2, 'hi')]`` after this code executes. Note: there is one block that won't be used in the solution!
   -----
   txt = 'but soft what light in yonder window breaks'
   words = txt.split()
   t = []
   =====
   for word in words.split(): #distractor
   =====
   for word in words:
   =====
       t.append((len(word), word))
   =====
       t.append(len(word)) #paired
   =====
   t.sort(reverse = True)
   =====
   t.sort(reverse = False) #paired

.. parsonsprob:: mixedupcode_question10_2
   :numbered: left
   :adaptive:

   Reorder the blocks of code to create a list, ``tup_list``, containing tuples of each word from ``word_list`` paired with their lengths. Then sort the words by length from highest to lowest.  For example, if ``word_list = ['hi', 'bye']`` then ``tup_list`` would be ``[('bye', 3), ('hi', 2)]`` Note: there are two blocks that won't be used in the solution!
   -----
   word_list = ['pen', 'skyscraper', 'post', 'computer', 'apple', 'Hollywood']
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


.. parsonsprob:: mixedupcode_question10_3
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that swaps the second and fourth values of tuple t with one another.
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

   Reorder the blocks of code to transform the dictionary 'd' into a list of tuples called tup_list, and sort it by the dictionary's keys in ascending order.
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

.. parsonsprob:: mixedupcode_question10_5
   :numbered: left
   :adaptive:
   :practice: T

   Construct a block of code that uses tuples to keep track of the word count in the file 'heineken.txt'. Then print out the 10 most frequently occurring words from the file.
   -----
   word_counter = {}
   with open("heineken.txt", "r") as filename:
   =====
       lines = filename.readlines()
   =====
   	   for line in lines.split():
   =====
   	   for line in line.split(): #paired
   =====
   		     for word in line:
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

   Construct a block of code to add the key-value pairs of dictionary d to a list and then print them.
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


.. parsonsprob:: mixedupcode_question10_7
   :numbered: left
   :practice: T
   :adaptive:

   Reorder the code blocks to put the words in the mbox-short.txt file into a dictionary, where the keys are words and the values are their lengths. Then, print a list of the dictionary's key-value pairs in alphabetical order.
   -----
   dict = {}
   with open(mbox-short.txt) as filename:
   =====
   	lines = filename.readlines()
   =====
   	for line in lines.split():
   =====
   		for word in line:
   =====
   			dict[word] = dict.get(word, len(word))
   =====
   			dict[word] = dict.get(word, 0) + len(word) #paired
   =====
   	dict = sorted(dict.items())
   =====
   	dict.sort() #paired
   =====
   	print(dict)

.. parsonsprob:: mixedupcode_question10_8
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that takes the longest item in each tuple, and adds it to the list 'longest_words'.
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

   Construct a block of code that capitalizes every item in tuple 'tup'. Note: there are four blocks that won't be used in the solution!
   -----
   tup = ('wolverine', 'Ann Arbor', 'Winter', 'Fall', 'michigan')
   =====
   tup[0] = 'Wolverine' #distractor
   =====
   tup[4] = 'Michigan' #distractor
   =====
   tup = ('Wolverine',) + tup[1:4] + ('Michigan',)
   =====
   tup = ('Wolverine') + tup[1:4] + ('Michigan') #distractor
   =====
   tup = ('Wolverine',) + tup[1:3] + ('Michigan',) #distractor
   =====
   print(tup)

.. parsonsprob:: mixedupcode_question10_10
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code to transform the grocery_dictionary into a list of tuples, then sort the list by the dictionary's values in ascending order.
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
