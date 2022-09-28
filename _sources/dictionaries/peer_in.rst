Peer Instruction: Dictionaries Multiple Choice Questions
--------------------------------------------------------

.. mchoice:: dz-lecture_18_2
   :author: Dan Zingaro
   :practice: T
   :answer_a: The order in which people finish a race
   :answer_b: The ingredients necessary for a recipe
   :answer_c: The names of world countries and their capital cities
   :answer_d: 50 random integers
   :correct: c
   :feedback_a: Incorrect! A list sorted in increasing order can used for this.
   :feedback_b: Incorrect! A list can be used for listing down the ingredients for a recipe
   :feedback_c: Correct! This requires a key-value pair i.e. country-capital and is thus best suited for dictionary.
   :feedback_d: Incorrect! A list would be more suitable for 50 random integers.

   Which of the following is best suited for a dictionary instead of a list?



.. mchoice:: dz-lecture_18_4
   :author: Dan Zingaro
   :practice: T
   :answer_a: counts.append(0)
   :answer_b: counts.append(1)
   :answer_c: counts.append(kind)
   :answer_d: No code necessary there
   :correct: a
   :feedback_a: Correct! Since a new bird sighting has been appended into "kinds", its count has to be appended to the end of "counts" too. The last two lines irrespective of the if condition increment the corresponding count of a sighting by 1. So, the missing code needs to append 0 to "counts".
   :feedback_b: Incorrect! Since a new bird sighting has been appended into "kinds", its count has to be appended to the end of "counts" too. The last two lines irrespective of the if condition increment the corresponding count of a sighting by 1. So, the missing code needs to append 0 to "counts".
   :feedback_c: Incorrect! Since a new bird sighting has been appended into "kinds", its count has to be appended to the end of "counts" too. The last two lines irrespective of the if condition increment the corresponding count of a sighting by 1. So, the missing code needs to append 0 to "counts".
   :feedback_d: Incorrect! Since a new bird sighting has been appended into "kinds", its count has to be appended to the end of "counts" too. The last two lines irrespective of the if condition increment the corresponding count of a sighting by 1. So, the missing code needs to append 0 to "counts".


   What code should go in place of the missing code?

   .. code-block:: python

      def new_sighting(kinds, counts, sighting):
         '''(list of str, list of int, str) -> NoneType
         Add new sighting to parallel lists kinds and counts.
         '''
         if sighting not in kinds:
            kinds.append(sighting)
            ... missing code
         ind = kinds.index(sighting)
         counts[ind] = counts[ind] + 1



.. mchoice:: dz-lecture_18_8
   :author: Dan Zingaro
   :practice: T
   :answer_a: {3:4, 5:8, 4:9}
   :answer_b: {3:4, 5:8, 4:4}
   :answer_c: {3:4, 5:4, 4:3}
   :answer_d: Error caused by get
   :correct: b
   :feedback_a: Incorrect! Both d[5] =  and d[4] =  adds new keys to the dictionary with values returned by d.get(). d.get(4, 8) = 8 as there exists no key = '4' in dictionary d. d.get(3,9) returns 4 as this value corresponds to key = '3'.
   :feedback_b: Correct! Both d[5] =  and d[4] =  adds new keys to the dictionary with values returned by d.get(). d.get(4, 8) = 8 as there exists no key = '4' in dictionary d. d.get(3,9) returns 4 as this value corresponds to key = '3'.
   :feedback_c: Incorrect! Both d[5] =  and d[4] =  adds new keys to the dictionary with values returned by d.get(). d.get(4, 8) = 8 as there exists no key = '4' in dictionary d. d.get(3,9) returns 4 as this value corresponds to key = '3'.
   :feedback_d: Incorrect! Both d[5] =  and d[4] =  adds new keys to the dictionary with values returned by d.get(). d.get(4, 8) = 8 as there exists no key = '4' in dictionary d. d.get(3,9) returns 4 as this value corresponds to key = '3'.

   What is dictionary d created by the following code?

   .. code-block:: python

      d = {3:4}
      d[5] = d.get(4, 8)
      d[4] = d.get(3, 9)


.. mchoice:: dz-lecture_18_9
   :author: Dan Zingaro
   :practice: T
   :answer_a: {1:5, 2:5, 4:7}
   :answer_b: {1:5, 2:6, 4:7}
   :answer_c: {1:5, 2:1, 4:2}
   :answer_d: Error caused by get
   :correct: a
   :feedback_a: Correct! Both d[2] =  and d[4] =  adds new keys to the dictionary with values returned by d.get(). d.get(1,6) returns 5 as this value corresponds to key = '1'. d.get(3, 7) = 7 as there exists no key = '3' in dictionary d.
   :feedback_b: Incorrect! Both d[2] =  and d[4] =  adds new keys to the dictionary with values returned by d.get(). d.get(1,6) returns 5 as this value corresponds to key = '1'. d.get(3, 7) = 7 as there exists no key = '3' in dictionary d.
   :feedback_c: Incorrect! Both d[2] =  and d[4] =  adds new keys to the dictionary with values returned by d.get(). d.get(1,6) returns 5 as this value corresponds to key = '1'. d.get(3, 7) = 7 as there exists no key = '3' in dictionary d.
   :feedback_d: Incorrect! Both d[2] =  and d[4] =  adds new keys to the dictionary with values returned by d.get(). d.get(1,6) returns 5 as this value corresponds to key = '1'. d.get(3, 7) = 7 as there exists no key = '3' in dictionary d.

   What is dictionary d created by the following code?

   .. code-block:: python

      d = {1:5}
      d[2] = d.get(1, 6)
      d[4] = d.get(3, 7)


.. mchoice:: dz-lecture_19_2
   :author: Dan Zingaro
   :practice: T
   :answer_a: List elements cannot be mutable, but dictionary values can be mutable
   :answer_b: Assigning to an index that does not exist in a list is an error, but assigning a value to a key that does not exist in a dictionary is not
   :answer_c: A list can contain a dictionary as one of its elements, but a dictionary cannot contain a list as one of its values
   :answer_d: There is a dict constructor that creates a dictionary from a suitable object, but there is no list constructor that similarly creates lists
   :correct: b
   :feedback_a: Incorrect!
   :feedback_b: Correct!
   :feedback_c: Incorrect!
   :feedback_d: Incorrect!

   Which of the following is a difference between lists and dictionaries?


.. mchoice:: dz-lecture_19_6
   :author: Dan Zingaro
   :practice: T
   :answer_a: {4:1, 5:[2,4]}
   :answer_b: {4:[1], 5:[4,2]}
   :answer_c: {4:[1], 5:[2,4]}
   :answer_d: Two of the above are equally good
   :answer_e: All of the above are equally good
   :correct: d
   :feedback_a: Incorrect! Options A and C are equally good as 4:1 can also be represented as 4:[1].
   :feedback_b: Incorrect! Options A and C are equally good. 5:[4,2] is not correct as dictionaries are ordered and 2 appears before 4.
   :feedback_c: Incorrect! Options A and C are equally good as 4:1 can also be represented as 4:[1].
   :feedback_d: Correct! Options A and C are equally good as 4:1 can also be represented as 4:[1].
   :feedback_e: Incorrect! Options A and C are equally good. 5:[4,2] is not correct as dictionaries are ordered and 2 appears before 4.

   What is the best inversion of this dictionary?

   .. code-block:: python

      {1:4, 2:5, 4:5}


.. mchoice:: dz-lecture_19_7
   :author: Dan Zingaro
   :practice: T
   :answer_a: December
   :answer_b: July
   :answer_c: Both July and December are equally covered
   :correct: b
   :feedback_a: Incorrect! July has the most number of days when someone has a birthday i.e. 3. December has just 1 such day.
   :feedback_b: Correct! July has the most number of days when someone has a birthday i.e. 3. December has just 1 such day.
   :feedback_c: Incorrect! July has the most number of days when someone has a birthday i.e. 3. December has just 1 such day.

   Here is a birthday month dictionary. Which month has the most coverage I.e., the month with the most days on which someone has a birthday?

   .. code-block:: python

      {"December" : {24 : ["Dan", "Joe", "Steph"]},
       "July" : {17 : ["Angelo"],
                16 : ["Chris"],
                1 : ["Canada"]
                }
      }


.. mchoice:: dz-lecture_19_8
   :author: Dan Zingaro
   :practice: T
   :answer_a: December
   :answer_b: July
   :answer_c: Both July and December are equally covered
   :correct: c
   :feedback_a: Incorrect! July and December are equally covered i.e. 2 days.
   :feedback_b: Incorrect! July and December are equally covered i.e. 2 days.
   :feedback_c: Correct! July and December are equally covered i.e. 2 days.

   Here is a birthday month dictionary. Which month has the most coverage I.e., the month with the most days on which someone has a birthday?

   .. code-block:: python

      {"December" : {24 : ["Dan", "Joe"], 23 : ["Steph"]},
      "July" : {17 : ["Angelo"], 16 : ["Chris"]}}


.. mchoice:: dz-lecture_20_3
   :author: Dan Zingaro
   :practice: T
   :answer_a: {'':'this', 'this':'is', 'is':'this', 'this':'was'}
   :answer_b: {'':['this'], 'this':['is', 'was'], 'is':['this']}
   :answer_c: {'':['this'], 'this':['is', 'was'], 'is':['was']}
   :answer_d: {'':'this', 'this':'is', 'is':'this'}
   :correct: b
   :feedback_a: Incorrect! Keys in a dictionary must be unique.
   :feedback_b: Correct! 'this' is followed by either of 'is' and 'was' and 'is' could be followed by a 'this'.
   :feedback_c: Incorrect! 'this' is followed by either of 'is' and 'was' but 'is' cannot be followed by a 'was'.
   :feedback_d: Incorrect! No 'was' in this dictionary.

   What is the dictionary that should be created for the text: this is this was


.. mchoice:: dz-lecture_20_4
   :author: Dan Zingaro
   :practice: T
   :answer_a: {'':'this', 'this':'is', 'is':'was', 'was':'this'}
   :answer_b: {'':['this'], 'this':['is', 'was'], 'is':['was']}
   :answer_c: {'':['this'], 'this':['is'], 'is':['was'], 'was':['this']}
   :answer_d: {'':['this'], 'is':['was'], 'was':['this']}
   :correct: c
   :feedback_a: Incorrect! It's better to use a list for the words (values) which can follow a particular word (keys)
   :feedback_b: Incorrect! 'this' is not immediately followed by 'was'
   :feedback_c: Correct! 'this' is be followed by 'is' which is then followed by 'was' which is then finally followed by 'this'.
   :feedback_d: Incorrect! No 'this' key in this dictionary.

   What is the dictionary that should be created for the text: this is was this
