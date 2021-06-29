Mixed-Up Code Questions
------------------------

.. parsonsprob:: mixedupcode_question9_1
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that prints a dictionary containing the amount of times a letter appears in the given string.
   -----
   phrase = "Explore the NEW Wolverine Access"
   =====
   d = dictionary() #distractor
   =====
   d = dict()
   =====
   for word in phrase:
   =====
   for word in d: #distractor
   =====
    for letter in word.lower():
   =====
     if letter in d: #distractor
   =====
     if letter not in d:
   =====
      d[letter] = 1
   =====
     else:
   =====
      d[letter] += 1
   =====
   print(d)

.. parsonsprob:: mixedupcode_question9_2
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that prints a dictionary containing the amount of times a word appears in the given string.
   -----
   phrase = "Explore the NEW Wolverine Access"
   =====
   word_count = {}
   =====
   dictionary = dict() #distractor
   =====
   for word in phrase.split():
   =====
   for word in phrase: #distractor
   =====
    if word not in word_count:
   =====
    if word not in dictionary: #distractor
   =====
     word_count[word] = 0
   =====
    word_count[word] = 1 #distractor
   =====
    word_count[word] += 1
   =====
   print(word_count)


.. parsonsprob:: mixedupcode_question9_3
   :numbered: left
   :practice: T
   :adaptive:

   Rearrange the code blocks to make the code print out the amount of a's in the given phrase.
   -----
   phrase = "Alice in Wonderland"
   =====
   letter_counter = {}
   =====
   for character in phrase:
   =====
   for character in phrase.split(): #distractor
   =====
    if character not in letter_counter.keys():
   =====
    if character not in keys(letter_counter): #distractor
   =====
     letter_counter[character] = 0
   =====
    letter_counter[character] += 1
   =====
   print(letter_counter['a'])
   =====
   print(letter_counter[a]) #distractor


.. parsonsprob:: mixedupcode_question9_4
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that correctly reads in a file, and counts the amount of times each word appears in the file.
   -----
   with open(words.txt, "r") as filename: #distractor
   =====
   with open("words.txt", "r") as filename:
   =====
    word_counter = {}
   =====
    lines = filename.read() #distractor
   =====
    lines = filename.readlines()
   =====
    for line in lines:
   =====
     for word in line.split():
   =====
     for word in line: #distractor
   =====
      if word not in word_counter.keys();
   =====
       word_counter[word] = 0
   =====
      word_counter[word] += 1

.. parsonsprob:: mixedupcode_question9_5
   :numbered: left
   :practice: T
   :adaptive:

   Place the code in the correct order so that the dictionary and key-value pairs are initialized/updated correctly.
   -----
   temp_dictionary = dictionary() #distractor
   =====
   temp_dictionary = dict()
   =====
   temp_dictionary['barbell'] = 5
   =====
   temp_dictionary = 'barbell' #distractor
   =====
   temp_dictionary['pull-up'] = 15
   =====
   temp_dictionary = 'pull-up'[15] #distractor
   =====
   temp_dictionary['barbell'] += 10
   =====
   temp_dictionary['push-up'] += 10 #distractor
   =====
   temp_dictionary['pull-up'] *= 2


.. parsonsprob:: mixedupcode_question9_6
   :numbered: left
   :practice: T
   :adaptive:

   Construct a code block to transform the lists 'keys' and 'values' into one dictionary. Make sure to print the dictionary once the loop terminates.
   -----
   keys = ['Ten', 'Twenty', 'Thirty']
   =====
   values = [10, 20, 30]
   =====
   combination = dict()
   =====
   for i in range(len(keys)):
   =====
   for i in keys(): #distractor
   =====
    if keys[i] not in combination.keys():
   =====
    if keys[0] not in combination.keys(): #distractor
   =====
     combination[keys[i]] = values[i]
   =====
     combination[keys] = values #distractor
   =====
   print(combination)


.. parsonsprob:: mixedupcode_question9_7
   :numbered: left
   :practice: T
   :adaptive:

   Rearrange the code blocks so the code prints the key containing the lowest value of all the keys in the dictionary.
   -----
   sampleDict = {'Physics': 82, 'Math', : 65, 'History': 75}
   =====
   sampleDict['English'] = 66
   =====
   sampleDict['Ceramics'] = 90
   =====
   sampleDict['History'] = 64
   =====
   minimum_value = 0 #distractor
   =====
   minimum_value = sampleDict[sampleDict.keys()[0]]
   =====
   for key in sampleDict.keys():
   =====
   for key in sampleDict.keys: #distractor
   =====
    if sampleDict[key] <= minimum_value:
   =====
     minimum_value = sampleDict[key]
   =====
   print(minimum_value)

.. parsonsprob:: mixedupcode_question9_8
   :numbered: left
   :practice: T
   :adaptive:

   Construct a code block to combine the key-value pairs of two dictionaries into one dictionary.
   -----
   dict1 = {'Ten': 10, 'Twenty' : 20, 'Thirty' : 30}
   =====
   dict2 = {'Thirty' : 30, 'Fourty' : 40, 'Fifty' : 50}
   =====
   dict3 = {}
   =====
   dict3 = [] #distractor
   =====
   for key in dict1.keys():
   =====
    if key not in dict3.keys():
   =====
     dict3[key] = dict1[key]
   =====
   for key in dict2.keys():
   =====
    if key in dict3.keys():
   =====
     dict3[key] += dict2[key]
   =====
     dict3[key] += dict2[value] #distractor
   =====
    else:
   =====
     dict3[key] = dict2[key]



.. parsonsprob:: mixedupcode_question9_9
   :numbered: left
   :practice: T
   :adaptive:

   Rearrange the following code blocks to figure out how much the items in grocery_dict will cost. Print the final total at the end of the code.
   -----
   grocery_dict = {'apples': 17, 'oranges': 3, 'pears': 10, 'cucumbers': 5, 'avocados': 15}
   =====
   price_dict = {'apples' : 1.5, 'oranges': 1.25, 'pears': 1.5, 'cucumbers' : 2, 'avocados': 2}
   =====
   total_price = 0
   =====
   total_price = "" #distractor
   =====
   for item in grocery_dict:
   =====
    price_of_item = price_dict[item] * grocery_dict[item]
   =====
    price_of_item = price_dict[item] + grocery_dict[item] #distractor
   =====
    total_price += price_of_item
   =====
   print(price_of_item) #distractor
   =====
   print(total_price)

.. parsonsprob:: mixedupcode_question9_10
   :numbered: left
   :practice: T
   :adaptive:

   Place the code in the correct order so it properly counts the amount of characters in a sentence using the .get() method.
   -----
   sentence = "The quick brown fox jumped over the lazy dog"
   =====
   characters = {}
   =====
   characters = dictionary() #distractor
   =====
   for character in sentence:
   =====
   for character in sentence.split(): #distractor
   =====
    characters[character] = characters.get(character, 0) + 1
   =====
    characters[character] = characters.get(character, 1) #distractor
   =====
   print(characters)
