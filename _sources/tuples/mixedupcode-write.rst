Write Code for Mixed-Up Code Questions
----------------------------------------

.. activecode:: mixedupcode_question10_1_write
   :autograde: unittest

   Finish the code below to create a list of tuples, ``tup_list``, where the first element is the length of each word in ``txt`` and the second is the word itself. Sort the list in terms of word length from longest to shortest. For example, if ``txt="hi bye"`` then ``tup_list`` would be ``[(3, 'bye'), (2, 'hi')]`` after this code executes.
   ~~~~
   txt = 'but soft what light in yonder window breaks'

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(len(tup_list), 8, 'len(tup_list)')
           self.assertEqual(type(tup_list[0][0]), int, 'Type of first item is int')
           self.assertEqual(tup_list[0][0], 6, 'tup_list[0][0]'')
           self.assertEqual(tup_list[0][1], 'yonder', 'tup_list[0][1]')
           self.assertEqual(tup_list[1][0], 6, 'tup_list[1][0]')
           self.assertEqual(tup_list[1][1], 'window', 'tup_list[1][1]')
           self.assertEqual(tup_list[3][0], 5, 'tup_list[3][0]')
           self.assertEqual(tup_list[3][1], 'light', 'tup_list[3][1]')
           self.assertEqual(tup_list[-1][0], 2, 'tup_list[-1][0]')
           self.assertEqual(tup_list[-1][1], 'in', 'tup_list[-1][1]')

   myTests().main()


.. activecode:: mixedupcode_question10_2_write
   :autograde: unittest

   Finish the code below to to create a list, ``tup_list`` containing tuples of each word from ``word_list`` paired with their lengths. Then sort the words by length from highest to lowest.  For example, if ``word_list = ['hi', 'bye']`` then ``tup_list`` would be ``[('bye', 3), ('hi', 2)]``
   ~~~~
   word_list = ['pen', 'skyscraper', 'post', 'computer', 'apple', 'Hollywood']

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(len(tup_list), 6, 'len(tup_list)')
           self.assertEqual(type(tup_list[0][1]), int, 'Type of second item is int')
           self.assertEqual(tup_list[0][0], 'skyscraper', 'tup_list[0][0]')
           self.assertEqual(tup_list[0][1], 10, 'tup_list[0][1]')
           self.assertEqual(tup_list[1][0], 'Hollywood', 'tup_list[1][0]')
           self.assertEqual(tup_list[1][1], 9, 'tup_list[1][1]')
           self.assertEqual(tup_list[3][0], 'apple', 'tup_list[3][0]')
           self.assertEqual(tup_list[3][1], 5, 'tup_list[3][1]')
           self.assertEqual(tup_list[-1][0],'pen', 'tup_list[-1][0]')
           self.assertEqual(tup_list[-1][1], 3, 'tup_list[-1][1]')

   myTests().main()
