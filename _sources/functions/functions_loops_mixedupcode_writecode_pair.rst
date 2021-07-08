Functions and Loops Mixed-Up Code Questions to Write Code
-----------------------------------------------------------------

.. activecode:: funct_loops_muc_to_writecode1q
   :practice: T
   :autograde: unittest

   Create a function called ``nums_one_to_ten_list`` that uses a for loop to create and return a list with numbers 1 to 10.
   ~~~~
   def nums_one_to_ten_list():
       # write code here

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(nums_one_to_ten_list(),[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],"Tested creates list with nums 1 through 10")

   myTests().main()


.. activecode:: funct_loops_muc_to_writecode2q
   :practice: T
   :autograde: unittest

   Create a function ``count_by_5_to_20_list`` that uses a for loop to create and return a list with numbers 5, 10, 15, and 20.
   ~~~~
   def count_by_5_to_20_list():
       # write code here

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(count_by_5_to_20_list(),[5, 10, 15, 20],"Tested creates list with nums 5, 10, 15, 20")

   myTests().main()


.. activecode:: funct_loops_muc_to_writecode3q
   :practice: T
   :autograde: unittest

   Create a function called ``countdown_to_go`` that initializes a parameter ``seconds`` to 3 and 
   counts down to 1 while printing out the numbers and then prints 'Go!'.
   ~~~~
   # write code here



.. activecode:: funct_loops_muc_to_writecode4q
   :practice: T
   :autograde: unittest

   Create a function ``add_odds_floor_division_all_else`` that takes in a parameter ``num_list``. 
   It loops through the ``num_list``, and if the number in ``num_list`` is odd, it gets added to ``result``. 
   Otherwise, it gets divided from the ``result``, having the ``result`` be the floor value. In the end, the ``result`` is returned.
   For example, ``add_odds_floor_division_all_else([-3, -5, -2, -9, 7.5, 10001, -5.3])`` would return -1887.0.
   ~~~~
   # write code here

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(add_odds_floor_division_all_else([3, 5, 10, 8, 20, 15]),15,"Tested on [3, 5, 10, 8, 20, 15]")
           self.assertEqual(add_odds_floor_division_all_else([3, 5, 2, 9, 7, 10, 2, 1, 15]),17,"Tested on [3, 5, 2, 9, 7, 10, 2, 1, 15]")
           self.assertEqual(add_odds_floor_division_all_else([-3, -5, -2, -9, 7.5, 10001, -5.3]),-1887.0,"Tested on [-3, -5, -2, -9, 7.5, 10001, -5.3]")

   myTests().main()



.. activecode:: funct_loops_muc_to_writecode5q
   :practice: T
   :autograde: unittest

   Create a function ``strings_with_chars_less_than_len_of_list`` that takes in a ``strings_list`` 
   and returns a sorted new list with strings that are shorter in length than the original list.
   For example, ``strings_with_chars_less_than_len_of_list(['hello', 'bye', 'me', 'mississippi', 'miss'])`` would return ['bye', 'me', 'miss'].
   ~~~~
   # write code here

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(strings_with_chars_less_than_len_of_list(['hello', 'bye', 'me', 'mississippi', 'miss']),['bye', 'me', 'miss'],"Tested on ['hello', 'bye', 'me', 'mississippi', 'miss']")

   myTests().main()
