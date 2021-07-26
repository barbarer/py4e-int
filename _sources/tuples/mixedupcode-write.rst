Write Code for Mixed-Up Code Questions
----------------------------------------

.. activecode:: mixedupcode_question10_1_v2_ac
   :autograde: unittest

   Write a function ``create_tup(str)`` that takes a string, ``str``, and returns a list of tuples where the first element is the length of each word in ``str`` and the second is the word itself. Sort the list in terms of word length from longest to shortest. For example, ``create_tup("hi bye")`` would return ``[(3, 'bye'), (2, 'hi')]``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(create_tup("hi bye"),[(3, 'bye'), (2, 'hi')],'create_tup("hi bye")')
           self.assertEqual(create_tup("Run away"),[(4, 'away'), (3, 'Run')],'create_tup("Run away")')
           self.assertEqual(create_tup("When I win"),[(4, 'When'), (3, 'win'), (1, 'I')],'create_tup("When I win")')
           self.assertEqual(create_tup("Shall I compare thee"),[(7, 'compare'), (5, 'Shall'), (4, 'thee'), (1, 'I')],'create_tup("Shall I compare thee")')

   myTests().main()


.. activecode:: mixedupcode_question10_2_v2_ac
   :autograde: unittest

   Create a function ``create_tup(word_list)`` that takes a list of words, ``word_list``, and returns a list of tuples where the first element is a word from ``str`` and the second is the length of the word. Sort the list in terms of word length from longest to shortest.  For example, if ``create_tup(['hi', 'bye'])`` should return ``[('bye', 3), ('hi', 2)]``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(create_tup(["hi", "bye"]),[('bye', 3), ('hi', 2)],'create_tup(["hi", "bye"])')
           self.assertEqual(create_tup(["Run", "away"]),[('away', 4), ('Run', 3)],'create_tup(["Run", "away"])')
           self.assertEqual(create_tup(["When", "I", "win"]),[('When', 4), ('win', 3), ('I', 1)],'create_tup(["When", "I", "win"])')
           self.assertEqual(create_tup(["Shall", "I", "compare", "thee"]),[('compare', 7), ('Shall', 5), ('thee', 4), ('I', 1)],'create_tup(["Shall", "I", "compare", "thee"])')


   myTests().main()
