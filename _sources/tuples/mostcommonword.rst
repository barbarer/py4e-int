The Most Common Words
----------------------


Coming back to our running example of the text from *Romeo and Juliet*
Act 2, Scene 2, we can augment our program to use this technique to
print the ten most common words in the text as follows:


The first part of the program which reads the file and computes the
dictionary that maps each word to the count of words in the document is
unchanged. But instead of simply printing out ``counts`` and
ending the program, we construct a list of ``(val, key)``
tuples and then sort the list in reverse order.

Since the value is first, it will be used for the comparisons. If there
is more than one tuple with the same value, it will look at the second
element (the key), so tuples where the value is the same will be further
sorted by the alphabetical order of the key.

At the end we write a nice ``for`` loop which does a multiple
assignment iteration and prints out the ten most common words by
iterating through a slice of the list (\ ``lst[:10]``\ ).

So now the output finally looks like what we want for our word frequency
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
easy-to-understand 19-line Python program is one reason why Python is a
good choice as a language for exploring information.

.. mchoice:: question10_6_1
   :practice: T
   :answer_a: l[1:5]
   :answer_b: l[:5]
   :answer_c: l[0:4]
   :answer_d: l[:4]
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! This line of code slices list l from its first value to its tenth value.
   :feedback_c: Try again!
   :feedback_d: Try again!

   Which of the following correctly uses the slice operator to grab the first 5 items of a list 'l'? Select all that apply.


.. mchoice:: question10_6_2
   :practice: T
   :answer_a: first city name (alphabetically), then temperature (lowest to highest)
   :answer_b: first temperature (highest to lowest), then city name(alphabetically)
   :answer_c: first city name (alphabetically), then temperature (highest to lowest)
   :answer_d: first temperature (lowest to highest), then city name (alphabetically)
   :correct: a
   :feedback_a: Correct! First we sort alphabetically by city name, then by temperature from lowest to highest.
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Try again!

   How will the following code be sorted once this code is run?

   .. code-block:: python

      weather = {'Reykjavik': {'temp': 60, 'condition': 'rainy'}, 'Buenos Aires': {'temp': 55, 'condition': 'cloudy'}, 'Cairo' : {'temp': 96, 'condition': 'sunny'}, 'Berlin' : {'temp': 89, 'condition': 'sunny'}, 'Caloocan' : {'temp': 78, 'condition': 'sunny'}}
      sorted_weather = weather.sort(key = lambda x: (x, weather[x]['temp']))

.. parsonsprob:: question10_6_3
   :numbered: left
   :practice: T
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
