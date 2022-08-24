Dictionaries and Files
----------------------

.. index::
   single: Nested Loops

One of the common uses of a dictionary is to count the occurrence of
words in a file with some written text. Let's start with a very simple
file of words taken from the text of *Romeo and Juliet*.

For the first set of examples, we will use a shortened and simplified
version of the text with no punctuation. Later we will work with the
text of the scene with punctuation included.

.. code-block::

   But soft what light through yonder window breaks
   It is the east and Juliet is the sun
   Arise fair sun and kill the envious moon
   Who is already sick and pale with grief



We will write a Python program to read through the lines of the file,
break each line into a list of words, and then loop through each of the
words in the line and count each word using a dictionary.

.. activecode:: dictionariesandfiles_example_1
   :available_files: romeo.txt

   fname = input('Enter the file name: ')
   try:
       fhand = open(fname)
   except:
       print('File cannot be opened:', fname)
       exit()

   counts = dict()
   for line in fhand:
       words = line.split()
       for word in words:
           if word not in counts:
               counts[word] = 1
           else:
               counts[word] += 1

   print(counts)

You will see that we have two ``for`` loops. The outer loop is
reading the lines of the file and the inner loop is iterating through
each of the words on that particular line. This is an example of a
pattern called *nested loops* because one of the loops is
the *outer* loop and the other loop is the *inner* loop.

Because the inner loop executes all of its iterations each time the
outer loop makes a single iteration, we think of the inner loop as
iterating "more quickly" and the outer loop as iterating more slowly.


The combination of the two nested loops ensures that we will count every
word on every line of the input file.

.. fillintheblank:: question9_3_1
   :practice: T

   A(n) _________ is a pattern consisting of two for loops, where one of the loops is the outer loop and the other is the inner loop.

   - :[Nn]ested [Ll]oop: Correct! A nested loop contains two for loops where the inner loop executes all its iterations every time the outer loop completes one loop.
     :.*: Try again!


In our ``else`` statement, we use the more compact alternative for incrementing a variable. ``counts[word] += 1`` is equivalent to ``counts[word] = counts[word] + 1``. Either method can be used to change the value of a variable by any desired amount. Similar alternatives exist for ``-=``\ , ``*=``\ , and ``/=``.

.. mchoice:: question9_3_2
   :practice: T
   :answer_a: counts[word] = counts[word] + 1
   :answer_b: counts[word] += 1
   :answer_c: None of these options increments the key's value by 1
   :answer_d: Both a and b increment the key's value by 1
   :correct: d
   :feedback_a: Almost...try again!
   :feedback_b: Almost...try again!
   :feedback_c: Try again! Remember you can increment by either adding 1 or doing += 1.
   :feedback_d: Correct! Both of these methods are correct ways to increment a key's value by 1.

   Which of these answers (if any) will increment a key's value in the dictionary counts by 1?

When we run the program, we see a raw dump of all of the counts in
unsorted hash order. (the *romeo.txt* file is available at
`www.py4e.com/code3/romeo.txt <http://www.py4e.com/code3/romeo.txt>`_\ )

.. code-block::

   python count1.py
   Enter the file name: romeo.txt
   {'and': 3, 'envious': 1, 'already': 1, 'fair': 1,
   'is': 3, 'through': 1, 'pale': 1, 'yonder': 1,
   'what': 1, 'sun': 2, 'Who': 1, 'But': 1, 'moon': 1,
   'window': 1, 'sick': 1, 'east': 1, 'breaks': 1,
   'grief': 1, 'with': 1, 'light': 1, 'It': 1, 'Arise': 1,
   'kill': 1, 'the': 3, 'soft': 1, 'Juliet': 1}


It is a bit inconvenient to look through the dictionary to find the most
common words and their counts, so we need to add some more Python code
to get us the output that will be more helpful.

.. parsonsprob:: question9_3_3
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code to read through the lines of a file, break each line into a list of words, and then loop through each of the words in the line and count each word using a dictionary.
   -----
   file_to_read = "textfile.txt"
   =====
   with open(file_to_read, "r") as filename:
   =====
   with open(file_to_read, "w") as filename: #distractor
   =====
    lines = filename.readlines()
   =====
    word_count = {}
   =====
    word_count = dictionary() #distractor
   =====
    for line in lines:
   =====
    for word in lines.split() #distractor
   =====
     for word in lines.split():
   =====
      if word not in word_count.keys():
   =====
       word_count[word] = 0
   =====
      counts[word] += 1
   =====
   print(word_count)
