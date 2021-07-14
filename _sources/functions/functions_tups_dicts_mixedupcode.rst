Functions with Tuples and Dictionaries Mixed-Up Code Questions
--------------------------------------------------------------

.. parsonsprob:: Functions_Tups_Dictionaries_MixedUpCode_1
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``addition_tup`` that takes in parameters ``lst`` and ``num`` and returns a tuple that contains tuples with the first
    value being a number from the ``lst`` and the second value being the number from the ``lst`` plus ``num``.
    -----
    def addition_tup(lst, num):
    =====
        lst_of_tups = []
    =====
        tup_of_tups = () #distractor
    =====
        for i in lst:
    =====
            lst_of_tups.append((i, i + num))
    =====
            lst_of_tups.append(i, (i + num)) #paired
    =====
            tup_of_tups.append((i, i + num)) #paired 
    =====
        return tuple(lst_of_tups)
    =====
        return lst_of_tups #paired
    =====
        return tup_of_tups #paired

.. activecode:: Functions_Tups_Dictionaries_MixedUpCode_writecode_1
   :practice: T
   :autograde: unittest

   Create a function called ``addition_tup`` that takes in parameters ``lst`` and ``num`` and returns a tuple that contains tuples with the first 
   value being a number from the ``lst`` and the second value being the number from the ``lst`` plus ``num``. For example, ``addition_tup([1,2,3], 5)``
   should return ``((1, 6), (2, 7), (3, 8))``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(addition_tup([1,2,3], 5),((1, 6), (2, 7), (3, 8)),"Tested addition_tup with [1,2,3] and 5.")
           self.assertEqual(addition_tup([-1,-2, -3, 0, 5], -5.2)),((-1, -6.2), (-2, -7.2), (-3, -8.2), (0, -5.2), (5, -0.20000000000000018)),"Tested addition_tup with [-1,-2, -3, 0, 5] and -5.2.")
           self.assertEqual(addition_tup([-1,-2.5, -3, 0.5, 5], 0)),((-1, -1), (-2.5, -2.5), (-3, -3), (0.5, 0.5), (5, 5)),"Tested addition_tup with [-1,-2.5, -3, 0.5, 5] and 0.")


   myTests().main()
   

.. parsonsprob:: Functions_Tups_Dictionaries_MixedUpCode_2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``value_greater_than_five`` that takes in ``dictionary`` as a parameter and returns a list of keys that 
    correspond to values in the ``dictionary`` that are greater than 5. 
    -----
    def value_greater_than_five(dictionary):
    =====
        lst = []
    =====
        lst = () #paired
    =====
        for i in dictionary.items():
    =====
        for i in dictionary.keys(): #distractor
    =====
            if i[1] > 5:
    =====
            if i[0] > 5: #paired
    =====
                lst.append(i[0])
    =====
                lst.append(i[1]) #paired
    =====
        return lst

.. activecode:: Functions_Tups_Dictionaries_MixedUpCode_writecode_2
   :practice: T
   :autograde: unittest

   Create a function called ``value_greater_than_five`` that takes in ``dictionary`` as a parameter and returns a list of keys that 
   correspond to values in the ``dictionary`` that are greater than 5. For example, ``value_greater_than_five({'a':1, 'b': 2, 'c':7})`` 
   should return ``['c']``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(value_greater_than_five({'a':1, 'b': 2, 'c':7}),['c'],"Tested value_greater_than_five with {'a':1, 'b': 2, 'c':7}.")
           self.assertEqual(value_greater_than_five({'a':1, 'b': 2, 'c':0}),[],"Tested value_greater_than_five with {'a':1, 'b': 2, 'c':0}.")
           self.assertEqual(value_greater_than_five({7:6, "hi": 6, 10:6}),[7, 'hi', 10],"Tested value_greater_than_five with {7:6, "hi": 6, 10:6}.")
           self.assertEqual(value_greater_than_five({-7:-5, "hi": 5.2, 10.2:5}),['hi'],"Tested value_greater_than_five with {-7:-5, "hi": 5.2, 10.2:5}.")


   myTests().main()        

.. parsonsprob:: Functions_Tups_Dictionaries_MixedUpCode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``dictionary_to_tup_of_tuples`` that takes in ``dictionary`` as a parameter and returns a tuple that contains 
    tuples with the first value being the keys of the ``dictionary`` and the second being the values of the ``dictionary``. 
    -----
    def dictionary_to_tup_of_tuples(dictionary):
    =====
        lst1 = []
    =====
        lst2 = []
    =====
        for item in dictionary.items():
    =====
        for item in dictionary: #distractor
    =====
            lst1.append(item[0])
    =====
            lst2.append(item[1])
    =====
        zipped_lst = zip(lst1,lst2)
    =====
        zipped_lst = zip(lst2,lst1) #paired
    =====
        return tuple(zipped_lst)
    =====
        return zipped_lst #paired

.. activecode:: Functions_Tups_Dictionaries_MixedUpCode_writecode_3
   :practice: T
   :autograde: unittest

   Create a function called ``dictionary_to_tup_of_tuples`` that takes in ``dictionary`` as a parameter and returns a tuple that contains 
   tuples with the first value being the keys of the ``dictionary`` and the second being the values of the ``dictionary``. For example,
   ``dictionary_to_tup_of_tuples({'a':1, 'b': 2, 'c':7})`` would return ``(('a', 1), ('b', 2), ('c', 7))``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(dictionary_to_tup_of_tuples({'a':1, 'b': 2, 'c':7}),(('a', 1), ('b', 2), ('c', 7)),"Tested dictionary_to_tup_of_tuples with {'a':1, 'b': 2, 'c':7}.")
           self.assertEqual(dictionary_to_tup_of_tuples({'hi':0, 'b': 2.2, 'c':-7}),(('hi', 0), ('b', 2.2), ('c', -7)),"Tested dictionary_to_tup_of_tuples with {'hi':0, 'b': 2.2, 'c':-7}.")
           self.assertEqual(dictionary_to_tup_of_tuples({2:1, -4: 2, 3.2:7}),((2, 1), (-4, 2), (3.2, 7)),"Tested dictionary_to_tup_of_tuples with {2:1, -4: 2, 3.2:7}.")

   myTests().main()

.. parsonsprob:: Functions_Tups_Dictionaries_MixedUpCode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``swap_keys_values`` that takes in ``dictionary`` as a parameter and returns ``swapped_dictionary`` that
    swaps the keys and values of the passed in ``dictionary``.
    -----
    def swap_keys_values(dictionary):
    =====
        swapped_dictionary = {}
    =====
        for item in dictionary.items():
    =====
        for item in dictionary(): #distractor
    =====
            swapped_dictionary[item[1]] = item[0]
    =====
            swapped_dictionary[item[0]] = item[1] #paired
    =====
            swapped_dictionary[item[1]].append(item[0]) #paired
    =====
        return swapped_dictionary

.. activecode:: Functions_Tups_Dictionaries_MixedUpCode_writecode_4
   :practice: T
   :autograde: unittest

   Create a function called ``swap_keys_values`` that takes in ``dictionary`` as a parameter and returns ``swapped_dictionary`` that 
   swaps the keys and values of the passed in ``dictionary``. For example, ``swap_keys_values({'a':1, 'b': 2, 'c':7})`` would return
   ``{1: 'a', 2: 'b', 7: 'c'}``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(swap_keys_values({'a':1, 'b': 2, 'c':7}),{1: 'a', 2: 'b', 7: 'c'},"Tested swap_keys_values with {'a':1, 'b': 2, 'c':7}.")
           self.assertEqual(swap_keys_values({'hi':0, 'b': 2.2, 'c':-7}),{0: 'hi', 2.2: 'b', -7: 'c'},"Tested swap_keys_values with {'hi':0, 'b': 2.2, 'c':-7}.")
           self.assertEqual(swap_keys_values({2:1, -4: 2, 3.2:7}),{1: 2, 2: -4, 7: 3.2},"Tested swap_keys_values with {2:1, -4: 2, 3.2:7}.")

   myTests().main()

.. parsonsprob:: Functions_Tups_Dictionaries_MixedUpCode_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``at_least_one_common_value_in_tups`` that takes in two tuples, ``tup1`` and ``tup2``, as parameters and 
    returns ``True`` if any of the values in both tuples match and ``False`` otherwise. (Note: Disregard position of values.)
    -----
    def at_least_one_common_value_in_tups(tup1, tup2):
    =====
        for value in tup1:
    =====
        if tup1 == tup2: #distractor
    =====
            if value in tup2:
    =====
            for value2 in tup2: #distractor
    =====
                return True
    =====
        return False

.. activecode:: Functions_Tups_Dictionaries_MixedUpCode_writecode_5
   :practice: T
   :autograde: unittest

   Create a function called ``at_least_one_common_value_in_tups`` that takes in two tuples, ``tup1`` and ``tup2``, as parameters and 
   returns ``True`` if any of the values in both tuples match and ``False`` otherwise. (Note: Disregard position of values.) For example,
   ``at_least_one_common_value_in_tups((1,2,3),(6,4,5))`` should return ``False``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(at_least_one_common_value_in_tups((1,2,3),(6,4,5)),False,"Tested at_least_one_common_value_in_tups inputs (1,2,3) and (6,4,5).")
           self.assertEqual(at_least_one_common_value_in_tups((0,0,0),(0,0,0)),True,"Tested at_least_one_common_value_in_tups inputs (0,0,0) and (0,0,0).")
           self.assertEqual(at_least_one_common_value_in_tups((-1,0,2),(5,10.2,0)),True,"Tested at_least_one_common_value_in_tups inputs (-1,0,2) and (5,10.2,0).")
           self.assertEqual(at_least_one_common_value_in_tups((1,2,3.2),(3.2,4,5)),True,"Tested at_least_one_common_value_in_tups inputs (1,2,3.2) and (3.2,4,5).")

   myTests().main()        
