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
