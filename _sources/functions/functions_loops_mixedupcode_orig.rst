Functions and Loops Mixed-Up Code Questions
--------------------------------------------

.. parsonsprob:: Functions_Loops_MixedUpCode_1
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``nums_one_to_ten_list`` that uses a for loop to create and return a list with numbers 1 to 10.
    -----
    def nums_one_to_ten_list():
    =====
    def nums_one_to_ten_list: #paired
    =====
        one_to_ten_list = []
    =====
        for num in range(1,11):
    =====
        for num in range(10): #paired
    =====
        for num in range(1,10): #paired
    =====
            one_to_ten_list.append(num)
    =====
        return one_to_ten_list

.. activecode:: Functions_Loops_MixedUpCode_1_ac
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

.. parsonsprob:: Functions_Loops_MixedUpCode_2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``count_by_5_to_20_list`` that uses a for loop to create and return a list with numbers 5, 10, 15, and 20.
    -----
    def count_by_5_to_20_list():
    =====
    def count_by_5_to_20_list: #paired
    =====
        five_to_twenty_list = []
    =====
        for num in range (5, 21, 5):
    =====
        for num in range (5, 20, 5): #paired
    =====
            five_to_twenty_list.append(num)
    =====
            five_to_twenty_list += num #paired
    =====
        return five_to_twenty_list


.. activecode:: Functions_Loops_MixedUpCode_2_ac
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



.. parsonsprob:: Functions_Loops_MixedUpCode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``countdown_to_go`` that initializes a parameter ``seconds`` to 3 and 
    counts down to 1 while printing out the numbers and then prints 'Go!'.
    -----
    def countdown_to_go(seconds = 3):
    =====
    def countdown_to_go(): #paired
    =====
        while seconds > 0:
    =====
        while seconds = 3: #paired
    =====
            print(seconds)
    =====
            seconds -= 1
    =====
        print('Go!')


.. activecode:: Functions_Loops_MixedUpCode_3_ac
   :practice: T
   :autograde: unittest

   Create a function called ``countdown_to_go`` that initializes a parameter ``seconds`` to 3 and 
   counts down to 1 while printing out the numbers and then prints 'Go!'.
   ~~~~
   # write code here


.. parsonsprob:: Functions_Loops_MixedUpCode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``add_odds_floor_division_all_else`` that takes in a parameter ``num_list``. 
    It loops through the ``num_list``, and if the number in ``num_list`` is odd, it gets added to ``result``. 
    Otherwise, it gets divided from the ``result``, having the ``result`` be the floor value. In the end, the ``result`` is returned.
    For example, ``add_odds_floor_division_all_else([-3, -5, -2, -9, 7.5, 10001, -5.3])`` would return -1887.0.
    -----
    def add_odds_floor_division_all_else(num_list):
    =====
    def add_odds_floor_division_all_else(): #paired
    =====
        result = 0
    =====
        for num in num_list:
    =====
            if num % 2 == 1:
    =====
            if num / 2 == 1: #paired
    =====
                result += num
    =====
            else:
    =====
                result //= num
    =====
                result /= num #paired
    =====
        return result


.. activecode:: Functions_Loops_MixedUpCode_4_ac
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


.. parsonsprob:: Functions_Loops_MixedUpCode_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``strings_with_chars_less_than_len_of_list`` that takes in a ``strings_list`` 
    and returns a sorted new list with strings that are shorter in length than the original list.
    For example, ``strings_with_chars_less_than_len_of_list(['hello', 'bye', 'me', 'mississippi', 'miss'])`` would return ['bye', 'me', 'miss'].
    -----
    def strings_with_chars_less_than_len_of_list(strings_list):
    =====
    def strings_with_chars_less_than_len_of_list(string_list): #paired
    =====
        new_strings_list = []
    =====
        for string in strings_list:
    =====
            if len(string) < len(strings_list):
    =====
            if string < len(strings_list): #paired
    =====
                new_strings_list.append(string)
    =====
            else:
    =====
                continue
    =====
                break #paired
    =====
        return sorted(new_strings_list)
    =====
        return new_strings_list.sort() #paired


.. activecode:: Functions_Loops_MixedUpCode_5_ac
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
