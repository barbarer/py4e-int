Mixed-Up Code Questions
------------------------

.. parsonsprob:: mixedupcode_question9_1
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``letter_dict`` that takes in ``string`` as a parameter and returns a dictionary containing the amount of times letters appear in the given ``string``. 
    For example, ``letter_dict('It is')`` should return ``{'i': 2, 't': 1, 's': 1}``. (Note: Pretend the ``string`` doesn't have any punctuation besides spaces.)
    -----
    def letter_dict(string):
    =====
        d = dict() 
    =====
        d = dictionary() #paired
    =====
        for char in string:
    =====
            if char == ' ':
    =====
            if char = ' ': #paired
    =====
                continue
    =====
                break #paired
    =====
            if char.lower() not in d:
    =====
            if char in d: #paired
    =====
                d[char.lower()] = 1
    =====
            else:
    =====
                d[char.lower()] += 1
    =====
        return d


.. activecode:: mixedupcode_question9_1_ac

   Write a function ``letter_dict`` that takes in ``string`` as a parameter and returns a dictionary containing the amount of times letters appear in the given ``string``. 
   For example, ``letter_dict('It is')`` should return ``{'i': 2, 't': 1, 's': 1}``. (Note: Pretend the ``string`` doesn't have any punctuation besides spaces.)
   ~~~~


   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(letter_dict('It is'),{'i': 2, 't': 1, 's': 1},"letter_dict('It is')")
           self.assertEqual(letter_dict('It isSsSsS'),{'i': 2, 't': 1, 's': 6},"letter_dict('It isSsSsS')")
           self.assertEqual(letter_dict('HELLO'),{'h': 1, 'e': 1, 'l': 2, 'o': 1},"letter_dict('HELLO')")
           self.assertEqual(letter_dict('goodbye'),{'g': 1, 'o': 2, 'd': 1, 'b': 1, 'y': 1, 'e': 1},"letter_dict('goodbye')")
           self.assertEqual(letter_dict(' Nice to meet      YOU   '),{'n': 1, 'i': 1, 'c': 1, 'e': 3, 't': 2, 'o': 2, 'm': 1, 'y': 1, 'u': 1},"letter_dict(' Nice to meet      YOU   ')")

   myTests().main()


.. parsonsprob:: mixedupcode_question9_2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``word_dict`` that takes in ``string`` as a parameter and returns a dictionary containing the amount of times a word appears in the given ``string``. 
    For example, ``word_dict('HELLO heLlo there  ')`` should return ``{'hello': 2, 'there': 1}``. (Note: Pretend the ``string`` doesn't have any punctuation besides spaces.)
    -----
    def word_dict(string):
    =====
        dictionary = {}
    =====
        for word in string.split():
    =====
        for word.lower() in string.split(): #paired
    =====
            dictionary[word.lower()] = dictionary.get(word.lower(), 0) + 1
    =====
            dictionary[word.lower()] = dictionary.get(word.lower(), 0) #paired
    =====
        return dictionary


.. activecode:: mixedupcode_question9_2_ac

   Create a function ``word_dict`` that takes in ``string`` as a parameter and returns a dictionary containing the amount of times a word appears in the given ``string``. 
   For example, ``word_dict('HELLO heLlo there  ')`` should return ``{'hello': 2, 'there': 1}``. (Note: Pretend the ``string`` doesn't have any punctuation besides spaces.)
   ~~~~


   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(word_dict('HELLO heLlo there  '),{'hello': 2, 'there': 1},"word_dict('HELLO heLlo there  ')")
           self.assertEqual(word_dict(' Hello HELLO he helLO hello HE'),{'hello': 4, 'he': 2},"word_dict(' Hello HELLO he helLO hello HE')")
           self.assertEqual(word_dict('There is a rainbow'),{'there': 1, 'is': 1, 'a': 1, 'rainbow': 1},"word_dict('There is a rainbow')")
           self.assertEqual(word_dict('That rainbow is more beautiful than any other rainbow I have seen before'),{'that': 1, 'rainbow': 2, 'is': 1, 'more': 1, 'beautiful': 1, 'than': 1, 'any': 1, 'other': 1, 'i': 1, 'have': 1, 'seen': 1, 'before': 1},"word_dict('That rainbow is more beautiful than any other rainbow I have seen before')")

   myTests().main()


.. parsonsprob:: mixedupcode_question9_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``a_counter`` that takes in ``string`` as a parameter, creates a ``dictionary``, and returns the amount of a's in the given ``string`` using the ``dictionary``. 
    For example, ``a_counter('Alice and Apples')`` should return ``3``. 
    -----
    def a_counter(string):
    =====
        dictionary = {}
    =====
        for char in string:
    =====
        for char in string.split(): #paired
    =====
            dictionary[char.lower()] = dictionary.get(char.lower(), 0) + 1
    =====
            dictionary[char.lower()] = dictionary.get(char.lower(), 0) #paired
    =====
        return dictionary.get('a', 0)
    =====
        return dictionary['a'] #paired

.. activecode:: mixedupcode_question9_3_ac

   Write a function ``a_counter`` that takes in ``string`` as a parameter, creates a ``dictionary``, and returns the amount of a's in the given ``string`` using the ``dictionary``. 
   For example, ``a_counter('Alice and Apples')`` should return ``3``. 
   ~~~~


   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(a_counter('Alice and Apples'),3,"a_counter('Alice and Apples')")
           self.assertEqual(a_counter('Australia is awesome!'),4,"a_counter('Australia is awesome!')")

   myTests().main()


