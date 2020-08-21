Mixed-Up Code Questions
------------------------

.. parsonsprob:: mixedupcode_question10_1
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that sorts the string 'txt' into a list of tuples (first element is the length of the word, the second being the word). Sort the list in terms of word length from longest to shortest.
   -----
   txt = 'but soft what light in yonder window breaks'
   =====
   words = txt.split()
   =====
   t = []
   =====
   for word in words.split(): #distractor
   =====
   for word in words:
   =====
    t.append((len(word), word))
   =====
    t.append(len(word)) #distractor
   =====
   t.sort(reverse = False) #distractor
   =====
   t.sort(reverse = True)

.. parsonsprob:: mixedupcode_question10_2
   :numbered: left
   :adaptive:

   Reorder the blocks of code to create a list containing tuples of each word from word_list paired with their lengths. Then sort the words by length from highest to lowest.
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


.. parsonsprob:: mixedupcode_question10_3
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that swaps the two second and fourth values of tuple t with one another.
   -----
   t = ('Apple', 'Banana', 'Grapefruit', 'Pear', 'Peach')
   =====
   a, b, c, d = t #distractor
   =====
   a, b, c, d, e = t
   =====
   t = a, c, b, e, d #distractor
   =====
   t = a, d, c, b, e

.. parsonsprob:: mixedupcode_question10_4
   :numbered: left
   :practice: T
   :adaptive:

   Reorder the blocks of code to transform the dictionary 'd' into a list of tuples called tup_list, and sort it by the dictionary's values in descending order.
   -----
   d = {'a': 10, 'b': 2, 'c': 27, 'd': 15, 'e': 30, 'f': 3}
   =====
   tup_list = [d.items] #distractor
   =====
   tup_list = list(d.items())
   =====
   d.sort(reverse = True) #distractor
   =====
   tup_list.sort(reverse = True) #distractor
   =====
   tup_list.sort(key = lambda x: x[1], reverse = True)
   =====
   print(tup_list)

.. parsonsprob:: mixedupcode_question10_5
   :numbered: left
   :adaptive:

   Construct a block of code that uses tuples to keep track of the word count in the file 'heineken.txt'. Then print out the 10 most occuring words from the file.
   -----
   with open("heineken.txt", "r") as filename:
   =====
    lines = filename.readlines()
   =====
    word_counter = {}
   =====
    for line in lines.split():
   =====
    for line in line.split(): #distractor
   =====
     for word in line:
   =====
      if word not in word_counter.keys():
   =====
       word_counter[word] = 0
   =====
      word_counter[word] += 1
   =====
    list_of_tuples = list(word_counter.items) #distractor
   =====
    list_of_tuples = list(word_counter.items())
   =====
    list_of_tuples.sort(key = lambda x: (x[1], x[0][0]), reverse = True)
   =====
    print(list_of_tuples[:10])


.. parsonsprob:: mixedupcode_question10_6
   :numbered: left
   :adaptive:

   Construct a block of code to iterate through the items in dictionary d and print out its key-value pairs.
   -----
   d = {'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10}
   =====
   list_for_kv_pairs = []
   =====
   list_for_kv_pairs = list #distractor
   =====
   for (key, val) in d.items():
   =====
   for key, val in d.items: #distractor
   =====
    list_for_kv_pairs.append((key, val))
   =====
    list_for_kv_pairs.append(d.items()) #distractor
   =====
   print(list_for_kv_pairs)


.. parsonsprob:: mixedupcode_question10_7
   :numbered: left
   :practice: T
   :adaptive:

   Reorder the code blocks to put the words in a file into a dictionary, where the key is the word and the value is its length. Then sort this list in alphabetical order.
   -----
   with open(mbox-short.txt) as filename:
   =====
    lines = filename.readlines()
   =====
    dictionary_one = {}
   =====
    dictionary = {} #distractor
   =====
    for line in lines.split():
   =====
     for word in line:
   =====
      if word not in dictionary_one.keys():
   =====
      if word not in dictionary.keys(): #distractor
   =====
       dictionary_one[word] = len(word)
   =====
    dictionary_one.sort(key = lambda x: x[0]) #distractor
   =====
    dictionary_one.sort(key = lambda x: x[0][0])

.. parsonsprob:: mixedupcode_question10_8
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that takes the longest item in each tuple, and adds it to the list 'longest_words'.
   -----
   list_o_tuples = [('twice', 'for', 'apples'), ('regular', 'combining'), ('one', 'five', 'twenty', 'twenty-four'), ('tmobile', 'sprint', 'at&t')]
   =====
   lst = []
   =====
   for tup in list_o_tuples:
   =====
    longest_word = ''
   =====
    longest_word = 0 #distractor
   =====
    for item in tup:
   =====
     if len(item) > len(longest_word):
   =====
      longest_word = item
   =====
     longest_word = len(item) #distractor
   =====
    lst.append(longest_word)

.. parsonsprob:: mixedupcode_question10_9
   :numbered: left
   :adaptive:

   Construct a block of code to capitalize all the words in the given tuple.
   -----
   tup = ('wolverine', 'Ann Arbor', 'Winter', 'Fall', 'michigan')
   =====
   tup[0] = 'Wolverine' #distractor
   =====
   tup[3] = 'Michigan' #distractor
   =====
   tup = ('Wolverine',) + tup[1:4] + ('Michigan',)
   =====
   tup = ('Wolverine') + tup[1:4] + ('Michigan',) #distractor
   =====
   tup = ('Wolverine',) + tup[1:3] + ('Michigan',) #distractor
   =====
   print(tup)

.. parsonsprob:: mixedupcode_question10_10
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code to transform the dictionary into a list of tuples, and sort the list by the dictionary's values in ascending order.
   -----
   grocery_dictionary = {'chicken': 5, 'lettuce': 3, 'orange juice': 4, 'bagels': 2.50, 'bacon': 4.25, 'bread': 8}
   =====
   grocery_list = list(grocery_dictionary.items())
   =====
   grocery_list = list(grocery_dictionary.item()) #distractor
   =====
   grocery_list.sort(key = lambda x: x[1], reverse = True) #distractor
   =====
   grocery_list.sort(key = lambda x: x[1])
