Functions with Tuples and Dictionaries Mixed-Up Code Questions
---------------------------------------------------------------

.. parsonsprob:: Functions_Tups_Dictionaries_MixedUpCode_1_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``addition_tup`` that takes in parameters ``lst`` and ``num`` and returns a tuple that contains tuples with the first
    value being a number from the ``lst`` and the second value being the number from the ``lst`` plus ``num``. Round each value within the tuple to two decimal places.
    For example, ``addition_tup([1,2,3], 5)`` should return ``((1, 6), (2, 7), (3, 8))`` and ``addition_tup([-1,-2, -3, 0, 5], -5.2)`` should return 
    ``((-1, -6.2), (-2, -7.2), (-3, -8.2), (0, -5.2), (5, -0.2))``.
    -----
    def addition_tup(lst, num):
    =====
        lst_of_tups = []
    =====
        tup_of_tups = () #paired
    =====
        for i in lst:
    =====
            lst_of_tups.append((round(i,2), round(i + num,2)))
    =====
            lst_of_tups.append(round(i,2), round(i + num,2))) #paired
    =====
        return tuple(lst_of_tups)
    =====
        return lst_of_tups #paired

.. activecode:: Functions_Tups_Dictionaries_MixedUpCode_1_v2_ac
    :practice: T
    :autograde: unittest

    Write a function called ``addition_tup`` that takes in parameters ``lst`` and ``num`` and returns a list that contains tuples with the first
    value being a number from the ``lst`` and the second value being the number from the ``lst`` plus ``num``. Round each value within the tuple to two decimal places.
    For example, ``addition_tup([1,2,3], 5)`` should return ``((1, 6), (2, 7), (3, 8))`` and ``addition_tup([-1,-2, -3, 0, 5], -5.2)`` should return 
    ``((-1, -6.2), (-2, -7.2), (-3, -8.2), (0, -5.2), (5, -0.2))``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(addition_tup([1,2,3], 5),((1, 6), (2, 7), (3, 8)),"addition_tup([1,2,3], 5)")
            self.assertEqual(addition_tup([-1,-2, -3, 0, 5], -5.2),((-1, -6.2), (-2, -7.2), (-3, -8.2), (0, -5.2), (5, -0.2)),"addition_tup([-1,-2, -3, 0, 5], -5.2)")
            self.assertEqual(addition_tup([-1,-2.5, -3, 0.5, 5], 0),((-1, -1), (-2.5, -2.5), (-3, -3), (0.5, 0.5), (5, 5)),"addition_tup([-1,-2.5, -3, 0.5, 5], 0)")


    myTests().main()


.. parsonsprob:: Functions_Tups_Dictionaries_MixedUpCode_2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``greater_than_five`` that takes in ``dictionary`` as a parameter and returns a list of keys that
    correspond to values in the ``dictionary`` that are greater than 5.  For example, ``greater_than_five({'a':1, 'b': 2, 'c':7})``
    should return ``['c']``.
    -----
    def greater_than_five(dictionary):
    =====
        lst = []
    =====
        lst = () #paired
    =====
        for i in dictionary.items():
    =====
        for i in dictionary.keys(): #paired
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

.. activecode:: Functions_Tups_Dictionaries_MixedUpCode_2_ac
    :practice: T
    :autograde: unittest

    Write a function called ``greater_than_five`` that takes in ``dictionary`` as a parameter and returns a list of keys that
    correspond to values in the ``dictionary`` that are greater than 5. For example, ``greater_than_five({'a':1, 'b': 2, 'c':7})``
    should return ``['c']``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(greater_than_five({'a':1, 'b': 2, 'c':7}),['c'],"greater_than_five({'a':1, 'b': 2, 'c':7})")
            self.assertEqual(greater_than_five({'a':1, 'b': 2, 'c':0}),[],"greater_than_five({'a':1, 'b': 2, 'c':0})")
            self.assertEqual(greater_than_five({7:6, "hi":6, 10:6}),[7, 'hi', 10],"greater_than_five({7:6, 'hi': 6, 10:6})")
            self.assertEqual(greater_than_five({-7:-5, "hi":5.2, 10:5}),['hi'],"greater_than_five({-7:-5, 'hi': 5.2, 10:5})")


    myTests().main()

.. parsonsprob:: Functions_Tups_Dictionaries_MixedUpCode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``dict_to_tup_of_tuples`` that takes in ``dictionary`` as a parameter and returns a tuple that contains
    tuples with the first value being the keys of the ``dictionary`` and the second being the values of the ``dictionary``.  For example,
    ``dict_to_tup_of_tuples({'a':1, 'b': 2, 'c':7})`` would return ``(('a', 1), ('b', 2), ('c', 7))``.
    -----
    def dict_to_tup_of_tuples(dictionary):
    =====
        lst1 = []
    =====
        lst2 = []
    =====
        for item in dictionary.items():
    =====
        for item in dictionary: #paired
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

.. activecode:: Functions_Tups_Dictionaries_MixedUpCode_3_ac
    :practice: T
    :autograde: unittest

    Write a function called ``dict_to_tup_of_tuples`` that takes in ``dictionary`` as a parameter and returns a tuple that contains
    tuples with the first value being the keys of the ``dictionary`` and the second being the values of the ``dictionary``. For example,
    ``dict_to_tup_of_tuples({'a':1, 'b': 2, 'c':7})`` would return ``(('a', 1), ('b', 2), ('c', 7))``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(dict_to_tup_of_tuples({'a':1, 'b': 2, 'c':7}),(('a', 1), ('b', 2), ('c', 7)),"dict_to_tup_of_tuples({'a':1, 'b': 2, 'c':7})")
            self.assertEqual(dict_to_tup_of_tuples({'hi':0, 'b': 2.2, 'c':-7}),(('hi', 0), ('b', 2.2), ('c', -7)),"dict_to_tup_of_tuples({'hi':0, 'b': 2.2, 'c':-7})")
            self.assertEqual(dict_to_tup_of_tuples({2:1, -4: 2, 3.2:7}),((2, 1), (-4, 2), (3.2, 7)),"dict_to_tup_of_tuples({2:1, -4: 2, 3.2:7})")

    myTests().main()

.. parsonsprob:: Functions_Tups_Dictionaries_MixedUpCode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``swap_keys_values`` that takes in ``dictionary`` as a parameter and returns ``swapped_dictionary`` that
    swaps the keys and values of the passed in ``dictionary``. For example, ``swap_keys_values({'a':1, 'b': 2, 'c':7})`` would return
    ``{1: 'a', 2: 'b', 7: 'c'}``.
    -----
    def swap_keys_values(dictionary):
    =====
        swapped_dictionary = {}
    =====
        for item in dictionary.items():
    =====
        for item in dictionary(): #paired
    =====
            swapped_dictionary[item[1]] = item[0]
    =====
            swapped_dictionary[item[0]] = item[1] #paired
    =====
            swapped_dictionary[item[1]].append(item[0]) #paired
    =====
        return swapped_dictionary

.. activecode:: Functions_Tups_Dictionaries_MixedUpCode_4_ac
    :practice: T
    :autograde: unittest

    Write a function called ``swap_keys_values`` that takes in ``dictionary`` as a parameter and returns ``swapped_dictionary`` that
    swaps the keys and values of the passed in ``dictionary``. For example, ``swap_keys_values({'a':1, 'b': 2, 'c':7})`` would return
    ``{1: 'a', 2: 'b', 7: 'c'}``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(swap_keys_values({'a':1, 'b': 2, 'c':7}),{1: 'a', 2: 'b', 7: 'c'},"swap_keys_values({'a':1, 'b': 2, 'c':7})")
            self.assertEqual(swap_keys_values({'hi':0, 'b': 2.2, 'c':-7}),{0: 'hi', 2.2: 'b', -7: 'c'},"swap_keys_values({'hi':0, 'b': 2.2, 'c':-7})")
            self.assertEqual(swap_keys_values({2:1, -4: 2, 3.2:7}),{1: 2, 2: -4, 7: 3.2},"swap_keys_values({2:1, -4: 2, 3.2:7})")

    myTests().main()

.. parsonsprob:: Functions_Tups_Dictionaries_MixedUpCode_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``common_value_in_tups`` that takes in two tuples, ``tup1`` and ``tup2``, as parameters and
    returns ``True`` if any of the values in both tuples match and ``False`` otherwise. (Note: Disregard position of values.)  For example,
    ``common_value_in_tups((1,2,3),(6,4,5))`` should return ``False``.
    -----
    def common_value_in_tups(tup1, tup2):
    =====
        for value in tup1:
    =====
        if tup1 == tup2: #paired
    =====
            if value in tup2:
    =====
            for value2 in tup2: #paired
    =====
                return True
    =====
        return False

.. activecode:: Functions_Tups_Dictionaries_MixedUpCode_5_ac
    :practice: T
    :autograde: unittest

    Write a function called ``common_value_in_tups`` that takes in two tuples, ``tup1`` and ``tup2``, as parameters and
    returns ``True`` if any of the values in both tuples match and ``False`` otherwise. (Note: Disregard position of values.) For example,
    ``common_value_in_tups((1,2,3),(6,4,5))`` should return ``False``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(common_value_in_tups((1,2,3),(6,4,5)),False,"common_value_in_tups((1,2,3),(6,4,5)")
            self.assertEqual(common_value_in_tups((0,0,0),(0,0,0)),True,"common_value_in_tups((0,0,0),(0,0,0))")
            self.assertEqual(common_value_in_tups((-1,0,2),(5,10.2,0)),True,"common_value_in_tups((-1,0,2),(5,10.2,0))")
            self.assertEqual(common_value_in_tups((1,2,3.2),(3.2,4,5)),True,"common_value_in_tups((1,2,3.2),(3.2,4,5))")

    myTests().main()
