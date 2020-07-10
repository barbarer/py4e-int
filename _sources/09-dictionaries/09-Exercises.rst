Exercises
---------

.. mchoice:: Exercises_question9_1
  :practice: T
  :answer_a: fruit['grapes']
  :answer_b: fruit['grapes'] = 15
  :answer_c: insert 'grapes' in fruit
  :correct: b
  :feedback_a: Try again!
  :feedback_b: Correct! This line inserts 'grapes' as a key in the dictionary fruits with  a value of 15
  :feedback_c: Try again!

  Which line of code correctly initializes 'grapes' into the fruits dictionary?

  .. code-block:: python

     fruits = {'apples': 1, 'bananas': 4, 'pears': 17, 'oranges': 14}

.. mchoice:: Exercises_question9_2
   :practice: T
   :answer_a: ['Janice', 'John']
   :answer_b: ['Janice', 'Emily', 'Eleanor']
   :answer_c: ['John']
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! John is the only key that has a value greater than 5.

   What prints when the following code is run?

   .. code-block:: python

      names = {'Janice': 5, 'Emily': 3, 'John': 7, 'Eleanor': 2}
      list_o_names = []
      for name in names:
          if names[name] > 5:
              list_o_names.append(name)
      print(list_o_names)

.. mchoice:: Exercises_question9_3
   :practice: T
   :answer_a: ['Emily', 'John', 'Erik']
   :answer_b: ['Janice', 'Emily', 'John']
   :answer_c: ['Janice', 'John', 'Erik']
   :correct: a
   :feedback_a: Correct! Erik is initialized to 22, and Emily is updated to 13, therefore these two entries are added to the list found in the prior question.
   :feedback_b: Try again!
   :feedback_c: Try again!

   What does the following code print now that it has been updated?

   .. code-block:: python

      names = {'Janice': 5, 'Emily': 3, 'John': 7, 'Eleanor': 2}
      list_o_names = []

      names['Emily'] += 10
      names['Erik'] = 22

      for name in names:
          if names[name] > 5:
              list_o_names.append(name)
      print(list_o_names)

.. mchoice:: Exercises_question9_4
   :practice: T
   :answer_a: 5
   :answer_b: 10
   :answer_c: 9
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! There are 9 letters in phrase that appear more than two times.

   What is the value of counter after the code is run to completion?

   .. code-block:: python

      phrase = "Cheese in Philadelphia is extraordinary according to Erik"

      counter = 0
      letters = {}
      for word in phrase.split():
          for letter in word:
              letter = letter.lower()
              if letter not in letters.keys():
                  letters[letter] = 0
              letters[letter] += 1
      for key in letters.keys():
          if letters[key] > 2:
              counter += 1

.. mchoice:: Exercises_question9_5
   :practice: T
   :answer_a: fruits.get(apples)
   :answer_b: fruits.get('apples', 0)
   :answer_c: fruits.get('apple')
   :answer_d: fruits.get(apples, 0)
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! This correctly grabs the key as a string, and also includes a default value in case the key is not present in the dictionary.
   :feedback_c: Try again!
   :feedback_d: Try again!

   Which line of code correctly grabs the value of the key 'apples'?

   .. code-block:: python

      fruits = {'bananas': 7, 'apples': 4, 'grapes': 19, 'pears': 4}

.. mchoice:: Exercises_question9_6
   :practice: T
   :answer_a: 2
   :answer_b: 0
   :answer_c: 6
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! The .get() function grabs the value 2, and then 4 gets added to it to get 6.

   What value is printed once the code is run?

   .. code-block:: python

      word = 'brontosaurus'
      diction = {}
      for letter in word:
          if letter not in diction.keys():
              diction[letter] = 0
          diction[letter] += 1
     print(diction.get('o', 0) + 4)


.. mchoice:: Exercises_question9_7
   :practice: T
   :answer_a: jan, chuck, annie
   :answer_b: chuck, annie, jan
   :answer_c: annie, chuck, jan
   :correct: a, b, c
   :feedback_a: Correct! When written like this, they keys will not come out in any particular order. If you want them ordered, you have to use the sort function.
   :feedback_b: Correct! When written like this, they keys will not come out in any particular order. If you want them ordered, you have to use the sort function.
   :feedback_c: Correct! When written like this, they keys will not come out in any particular order. If you want them ordered, you have to use the sort function.

   What order do the keys print in after the following code is run? (Select all that apply)

   .. code-block:: python

      counts = {'chuck' : 1, 'annie' : 42, 'jan' : 100}
      for key in counts:
          print(key, counts[key])

.. mchoice:: Exercises_question9_8
   :practice: T
   :answer_a: import String
   :answer_b: import string
   :answer_c: import string module
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! This is the correct way to initialize the string module
   :feedback_c: Try again!

   Which of the following is the correct way to initialize the string module?


.. mchoice:: Exercises_question9_9
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! These are two different words distinguished by the capital letter.

   True or false? Python treats the words "Exciting" and "exciting" as the same word.

.. mchoice:: Exercises_question9_10
   :practice: T
   :answer_a: line.translate(str.maketrans(fromstr, tostr, deletestr))
   :answer_b: line.translate(fromstr, tostr, deletestr)
   :answer_c: line.translate(str.translate(fromstr, tostr, deletestr))
   :correct: a
   :feedback_a: Correct! In order to use .translate(), you have to map the translationusing the .maketrans() method.
   :feedback_b: Try again!
   :feedback_c: Try again!

   Which line of code correctly uses the .translate() method?
