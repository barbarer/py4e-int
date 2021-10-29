The Most Common Words
----------------------


Coming back to our running example of the text from *Romeo and Juliet*
Act 2, Scene 2, we can write a program using last section's technique to
print the ten most common words in the text as follows:

.. activecode:: most_common_words_sort
   :language: python3
   :datafile: romeo-full.txt

   import string

   # Count the words in the file
   with open("romeo-full.txt", "r") as fhand:
       lines = fhand.readlines()
   counts = {}
   table = str.maketrans("", "", string.punctuation)
   for line in lines:
       line = line.translate(table)
       for word in line.split():
           if word not in counts.keys():
               counts[word] = 1
           else:
               counts[word] += 1

   # Sort the dictionary by value
   sorted_counts = sorted(counts.items(), key = lambda t: t[1], reverse = True)

   # print the top ten
   for t in sorted_counts[:10]:
       print(t)

The first part of the program reads the file and creates/fills in the
dictionary that maps each word to the amount of times it appears in the document.
For this program, instead of simply printing out counts and
ending the program, we construct a list of ``(val, key)``
tuples and then sort the list in reverse order.

Since the value is first, it will be used for the comparisons. If there
is more than one tuple with the same value, it will look at the second
element (the key), so tuples whose values are equal will be further
sorted in reverse alphabetical order of the key.

At the end, we write a nice ``for`` loop which does a multiple
assignment iteration and prints out the ten most common words by
iterating through a slice of the list (\ ``lst[:10]``\ ).

Now, the output finally looks like what we want for our word frequency
analysis.

.. code-block::

   61 i
   42 and
   40 romeo
   34 to
   34 the
   32 thou
   32 juliet
   30 that
   29 my
   24 thee


The fact that this complex data parsing and analysis can be done with an
easy-to-understand Python program is one reason why Python is a
good choice as a language for exploring information.

.. mchoice:: question10_6_1
   :practice: T
   :answer_a: lst[1:5]
   :answer_b: lst[:5]
   :answer_c: lst[0:4]
   :answer_d: lst[:4]
   :correct: b
   :feedback_a: Incorrect! Remember, list indices start at 0, not 1. Try again.
   :feedback_b: Correct! This line of code slices list lst from its first value to its fifth value.
   :feedback_c: Incorrect! The slice operator stops at the index before the value after the colon. Try again.
   :feedback_d: Incorrect! The slice operator stops at the index before the value after the colon. Try again.

   Which of the following correctly uses the slice operator to grab the first 5 items of a list 'lst'? Select all that apply.


.. mchoice:: question10_6_2
   :practice: T
   :answer_a: First city name (alphabetically), then temperature (lowest to highest)
   :answer_b: First temperature (highest to lowest), then city name(alphabetically)
   :answer_c: First city name (alphabetically), then temperature (highest to lowest)
   :answer_d: First temperature (lowest to highest), then city name (alphabetically)
   :answer_e: An error will occur
   :correct: e
   :feedback_a: Incorrect! Remember, some methods can only be used on specific data types. Try again.
   :feedback_b: Incorrect! Remember, some methods can only be used on specific data types. Try again.
   :feedback_c: Incorrect! Remember, some methods can only be used on specific data types. Try again.
   :feedback_d: Incorrect! Remember, some methods can only be used on specific data types. Try again.
   :feedback_e: Correct! The sort() method cannot be used on dictionaries. Instead, add the data from the dictionary to a list first.

   How will the following code be sorted once this code is run?

   .. code-block:: python

      weather = {'Reykjavik': 60, 'Buenos Aires': 55, 'Cairo': 96, 'Berlin': 89, 'Caloocan': 78}
      sorted_weather = weather.sort()

.. parsonsprob:: question10_6_3_v2
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that uses tuples to keep track of the word count in the file 'heineken.txt'. Then, print out the 10 most frequently appearing words preceded by how many times they appear.
   -----
   counter = {}
   list_of_tuples = []
   =====
   with open("heineken.txt", "r") as filename:
   =====
       lines = filename.readlines()
   =====
   for line in lines:
   =====
       for word in line.split():
   =====
   		 for word in lines.split(): #paired
   =====
   		     counter[word] = counter.get(word, 0) + 1
   =====
   sorted_counts = sorted(counter.items(), key = lambda t: t[1], reverse = True)
   =====
   sorted_counts = sorted(counter.items(), key = lambda t: t[1]) #paired
   =====
   for t in sorted_counts[:10]:
   =====
       print(t)
