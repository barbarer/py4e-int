Mixed-Up Code Questions
------------------------

.. parsonsprob:: dictionaries_mixedupcode_question10_1
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


.. activecode:: dictionaries_mixedupcode_question10_1_ac
    :practice: T
    :autograde: unittest

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


.. parsonsprob:: dictionaries_mixedupcode_question10_2
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


.. activecode:: dictionaries_mixedupcode_question10_2_ac
    :practice: T
    :autograde: unittest

    Write a function ``word_dict`` that takes in ``string`` as a parameter and returns a dictionary containing the amount of times a word appears in the given ``string``.
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


.. parsonsprob:: dictionaries_mixedupcode_question10_3
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

.. activecode:: dictionaries_mixedupcode_question10_3_ac
    :practice: T
    :autograde: unittest

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


.. parsonsprob:: dictionaries_mixedupcode_question10_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``sales_tax`` that takes in a ``list_of_costs`` (floating point values) as a parameter and
    returns a dictionary with the original costs as keys and the final costs after the sales tax of 6 percent as values.
    The final costs should be rounded to the hundredths place. For example, ``sales_tax([1.25, 8, 5])`` returns ``{1.25: 1.33, 8: 8.48, 5: 5.3}``.
    -----
    def sales_tax(list_of_costs):
    =====
        final_dictionary = {}
    =====
        final_dictionary = [] #paired
    =====
        for cost in list_of_costs:
    =====
            final_dictionary[cost] = round(cost * 1.06, 2)
    =====
            final_dictionary[cost] = round(cost * 0.06, 2) #paired
    =====
        return final_dictionary


.. activecode:: dictionaries_mixedupcode_question10_4_ac
    :practice: T
    :autograde: unittest

    Write a function called ``sales_tax`` that takes in a ``list_of_costs`` (floating point values) as a parameter and
    returns a dictionary with the original costs as keys and the final costs after the sales tax of 6 percent as values.
    The final costs should be rounded to the hundredths place. For example, ``sales_tax([1.25, 8, 5])`` returns ``{1.25: 1.33, 8: 8.48, 5: 5.3}``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(sales_tax([1.25, 8, 5]),{1.25: 1.33, 8: 8.48, 5: 5.3},"sales_tax([1.25, 8, 5])")
            self.assertEqual(sales_tax([0]),{0: 0.0},"sales_tax([0])")
            self.assertEqual(sales_tax([5]),{5: 5.3},"sales_tax([5])")
            self.assertEqual(sales_tax([18.5, 100, 2000.0]),{18.5: 19.61, 100: 106.0, 2000.0: 2120.0},"sales_tax([18.5, 100, 2000.0])")

    myTests().main()


.. parsonsprob:: dictionaries_mixedupcode_question10_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``discount_and_tax`` that takes in a ``list_of_costs`` (floating point values) and a ``discount`` percentage as parameters and
    returns a dictionary with the original costs as keys and the final costs after applying the ``discount`` (first) and the sales tax of 6 percent (second) as values.
    The final costs should be rounded to the hundredths place. For example, ``discount_and_tax([1.25, 8, 5], 20)`` should return ``{1.25: 1.06, 8: 6.78, 5: 4.24}``.
    -----
    def discount_and_tax(list_of_costs, discount):
    =====
        discount_multiplier = 1 - (discount / 100)
    =====
        discount_multiplier = (discount / 100) #paired
    =====
        dictionary = {}
    =====
        for cost in list_of_costs:
    =====
            dictionary[cost] = round(cost * discount_multiplier * 1.06, 2)
    =====
            dictionary[cost] = round(cost * discount_multiplier * 0.06, 2) #paired
    =====
        return dictionary


.. activecode:: dictionaries_mixedupcode_question10_5_ac
    :practice: T
    :autograde: unittest

    Write a function called ``discount_and_tax`` that takes in a ``list_of_costs`` (floating point values) and a ``discount`` percentage as parameters and
    returns a dictionary with the original costs as keys and the final costs after applying the ``discount`` (first) and the sales tax of 6 percent (second) as values.
    The final costs should be rounded to the hundredths place. For example, ``discount_and_tax([1.25, 8, 5], 20)`` should return ``{1.25: 1.06, 8: 6.78, 5: 4.24}``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(discount_and_tax([1.25, 8, 5], 20),{1.25: 1.06, 8: 6.78, 5: 4.24},"discount_and_tax([1.25, 8, 5], 20)")
            self.assertEqual(discount_and_tax([0], 85),{0: 0.0},"discount_and_tax([0], 85)")
            self.assertEqual(discount_and_tax([5], 15),{5: 4.5},"discount_and_tax([5], 15)")
            self.assertEqual(discount_and_tax([18.5, 100, 2000.0], 1),{18.5: 19.41, 100: 104.94, 2000.0: 2098.8},"discount_and_tax([18.5, 100, 2000.0], 1)")
            self.assertEqual(discount_and_tax([18.5, 100, 2000.0], 99),{18.5: 0.2, 100: 1.06, 2000.0: 21.2},"discount_and_tax([18.5, 100, 2000.0], 99)")

    myTests().main()


.. parsonsprob:: dictionaries_mixedupcode_question10_6
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``create_dictionary`` that takes in ``keys_list`` and ``values_list`` as parameters
    and returns a dictionary with the ``keys_list`` as keys and the ``values_list`` as values. Assume ``keys_list`` and ``values_list`` are the same length, and
    they only contain numbers and strings. For example, ``create_dictionary(['one', 'two', 'three'], [1, 2, 3])`` should return ``{'one': 1, 'two': 2, 'three': 3}``.
    -----
    def create_dictionary(keys_list, values_list):
    =====
        combination = {}
    =====
        for i in range(len(keys_list)):
    =====
        for i in len(keys_list): #paired
    =====
            combination[keys_list[i]] = values_list[i]
    =====
            combination[keys_list[i]] = combination[values_list[i]] #paired
    =====
        return combination

.. activecode:: dictionaries_mixedupcode_question10_6_ac
    :practice: T
    :autograde: unittest

    Write a function called ``create_dictionary`` that takes in ``keys_list`` and ``values_list`` as parameters
    and returns a dictionary with the ``keys_list`` as keys and the ``values_list`` as values. Assume ``keys_list`` and ``values_list`` are the same length, and
    they only contain numbers and strings. For example, ``create_dictionary(['one', 'two', 'three'], [1, 2, 3])`` should return ``{'one': 1, 'two': 2, 'three': 3}``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(create_dictionary(['one', 'two', 'three'], [1, 2, 3]),{'one': 1, 'two': 2, 'three': 3},"create_dictionary(['one', 'two', 'three'], [1, 2, 3])")
            self.assertEqual(create_dictionary(['one', 2.5, 'three', 4], [1, 'two and a half', 3, 'four']),{'one': 1, 2.5: 'two and a half', 'three': 3, 4: 'four'},"create_dictionary(['one', 2.5, 'three', 4], [1, 'two and a half', 3, 'four'])")
            self.assertEqual(create_dictionary(['me'], ['I']),{'me': 'I'},"create_dictionary(['me'], ['I'])")

    myTests().main()


.. parsonsprob:: dictionaries_mixedupcode_question10_7
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``lowest_value_keys`` that takes in ``dictionary`` as a parameter and returns a list of the keys containing the lowest value of all the keys in the dictionary.
    Assume all values of the ``dictionary`` are integers or floats. For example, ``lowest_value_keys({'pizza': 11, 'fruits': 0, 'toys': 0, 'rice bags': 1.9, 'ice': 1.8})`` should return ``['fruits', 'toys']``.
    -----
    def lowest_value_keys(dictionary):
    =====
        keys_list = []
    =====
        minimum = min(dictionary.values())
    =====
        minimum = min(dictionary) #paired
    =====
        minimum = minimum(dictionary) #paired
    =====
        for key, value in dictionary.items():
    =====
        for value in dictionary.values(): #paired
    =====
        for key in dictionary.keys(): #paired
    =====
            if value == minimum:
    =====
                keys_list.append(key)
    =====
        return keys_list

.. activecode:: dictionaries_mixedupcode_question10_7_ac
    :practice: T
    :autograde: unittest

    Write a function called ``lowest_value_keys`` that takes in ``dictionary`` as a parameter and returns a list of the keys containing the lowest value of all the keys in the dictionary.
    Assume all values of the ``dictionary`` are integers or floats. For example, ``lowest_value_keys({'pizza': 11, 'fruits': 0, 'toys': 0, 'rice bags': 1.9, 'ice': 1.8})`` should return ``['fruits', 'toys']``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(lowest_value_keys({'pizza': 5, 'fruits': 20, 'toys': 3, 'rice bags': 2}),['rice bags'],"lowest_value_keys({'pizza': 5, 'fruits': 20, 'toys': 3, 'rice bags': 2})")
            self.assertEqual(lowest_value_keys({'pizza': 5, 'fruits': 20, 'toys': 3, 'rice bags': 1.9, 'ice': 1.8}),['ice'],"lowest_value_keys({'pizza': 5, 'fruits': 20, 'toys': 3, 'rice bags': 1.9, 'ice': 1.8})")
            self.assertEqual(lowest_value_keys({'pizza': 0, 'fruits': 20, 'toys': 3, 'rice bags': 1.9, 'ice': 1.8}),['pizza'],"lowest_value_keys({'pizza': 0, 'fruits': 20, 'toys': 3, 'rice bags': 1.9, 'ice': 1.8})")
            self.assertEqual(lowest_value_keys({'pizza': 11, 'fruits': 0, 'toys': 0, 'rice bags': 1.9, 'ice': 1.8}),['fruits', 'toys'],"lowest_value_keys({'pizza': 11, 'fruits': 0, 'toys': 0, 'rice bags': 1.9, 'ice': 1.8})")
            self.assertEqual(lowest_value_keys({'pizza': 100}),['pizza'],"lowest_value_keys({'pizza': 100})")
            self.assertEqual(lowest_value_keys({'pizza': 100, 'pizza2': 100, 'pizza3': 100}),['pizza', 'pizza2', 'pizza3'],"lowest_value_keys({'pizza': 100, 'pizza2': 100, 'pizza3': 100})")

    myTests().main()


.. parsonsprob:: dictionaries_mixedupcode_question10_8
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``duplicated_data`` that takes in ``dictionary1`` and ``dictionary2`` as parameters and returns a dictionary with key-value pairs that are
    in both dictionaries. For example, ``duplicated_data({'Ten': 10, 'Twenty' : 20, 'Thirty' : 30}, {'Ten': 10, 'Twenty' : 20})`` should return ``{'Ten': 10, 'Twenty': 20}``.
    -----
    def duplicated_data(dictionary1, dictionary2):
    =====
        dict = {}
    =====
        for key, value in dictionary1.items():
    =====
        for key, value in dictionary2: #paired
    =====
        for key, value in dictionary2.items(): #paired
    =====
            if dictionary2.get(key) == value:
    =====
            if dictionary2[key] == value: #paired
    =====
                dict[key] = value
    =====
        return dict


.. activecode:: dictionaries_mixedupcode_question10_8_ac
    :practice: T
    :autograde: unittest

    Write a function called ``duplicated_data`` that takes in ``dictionary1`` and ``dictionary2`` as parameters and returns a dictionary with key-value pairs that are
    in both dictionaries. For example, ``duplicated_data({'Ten': 10, 'Twenty' : 20, 'Thirty' : 30}, {'Ten': 10, 'Twenty' : 20})`` should return ``{'Ten': 10, 'Twenty': 20}``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(duplicated_data({'Ten': 10, 'Twenty' : 20, 'Thirty' : 30}, {'Ten': 10, 'Twenty' : 20, 'Thirty' : 30}),{'Ten': 10, 'Twenty': 20, 'Thirty': 30},"duplicated_data({'Ten': 10, 'Twenty' : 20, 'Thirty' : 30}, {'Ten': 10, 'Twenty' : 20, 'Thirty' : 30})")
            self.assertEqual(duplicated_data({'Ten': 10, 'Twenty' : 20, 'Thirty' : 30}, {'Ten': 10, 'Twenty' : 20}),{'Ten': 10, 'Twenty': 20},"duplicated_data({'Ten': 10, 'Twenty' : 20, 'Thirty' : 30}, {'Ten': 10, 'Twenty' : 20})")
            self.assertEqual(duplicated_data({'Ten': 10, 'Twenty' : 20, 'Thirty' : 30}, {'Five': 5, 'Six' : 6}),{},"duplicated_data({'Ten': 10, 'Twenty' : 20, 'Thirty' : 30}, {'Five': 5, 'Six' : 6})")
            self.assertEqual(duplicated_data({'Ten': 10, 'Twenty' : 20, 'Five' : 'Five'}, {'Five': 'Five', 'Six' : 'Six'}),{'Five': 'Five'},"duplicated_data({'Ten': 10, 'Twenty' : 20, 'Five' : 'Five'}, {'Five': 'Five', 'Six' : 'Six'})")

    myTests().main()


.. parsonsprob:: dictionaries_mixedupcode_question10_9
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``total_price`` that takes in ``quantity_dict`` and ``price_dict`` and returns the total cost of all items.
    Assume keys in both dictionaries are the same, and the values in ``quantity_dict`` are integers.
    For example, ``total_price({'fries': 7, 'hot dogs': 9, 'soda': 9}, {'fries': 1.5, 'hot dogs': 1, 'soda': 1.1})`` should return ``29.4``.
    -----
    def total_price(quantity_dict, price_dict):
    =====
        total_price = 0
    =====
        for key in quantity_dict.keys():
    =====
        for value in quantity_dict.values(): #paired
    =====
            total_price += quantity_dict.get(key) * price_dict.get(key)
    =====
            total_price += quantity_dict[key] + price_dict[key] #paired
    =====
        return total_price


.. activecode:: dictionaries_mixedupcode_question10_9_ac
    :practice: T
    :autograde: unittest

    Write a function called ``total_price`` that takes in ``quantity_dict`` and ``price_dict`` and returns the total cost of all items.
    Assume keys in both dictionaries are the same, and the values in ``quantity_dict`` are integers.
    For example, ``total_price({'fries': 7, 'hot dogs': 9, 'soda': 9}, {'fries': 1.5, 'hot dogs': 1, 'soda': 1.1})`` should return ``29.4``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(total_price({'fries': 7, 'hot dogs': 9, 'soda': 9}, {'fries': 1.5, 'hot dogs': 1, 'soda': 1.1}),29.4,1,"total_price({'fries': 7, 'hot dogs': 9, 'soda': 9}, {'fries': 1.5, 'hot dogs': 1, 'soda': 1.1})")
            self.assertAlmostEqual(total_price({'fries': 0, 'hot dogs': 48, 'soda': 3}, {'fries': 1.13, 'hot dogs': 3, 'soda': 3.97}),155.91,2,"total_price({'fries': 0, 'hot dogs': 48, 'soda': 3}, {'fries': 1.13, 'hot dogs': 3, 'soda': 3.97})")
            self.assertAlmostEqual(total_price({'pizza': 5}, {'pizza': 2.50}),12.5,1,"total_price({'pizza': 5}, {'pizza': 2.50})")

    myTests().main()


.. parsonsprob:: dictionaries_mixedupcode_question10_10
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``scale_recipe`` that takes in ``quantity_dict`` and ``scale_factor`` as parameters and
    returns a dictionary with ``quantity_dict`` scaled by the ``scale_factor``.
    For example, ``scale_recipe({'fries': 7, 'hot dogs': 9, 'soda': 8}, 4)`` should return ``{'fries': 28, 'hot dogs': 36, 'soda': 32}``.
    -----
    def scale_recipe(quantity_dict, scale_factor):
    =====
        for key in quantity_dict.keys():
    =====
            quantity_dict[key] = quantity_dict.get(key) * scale_factor
    =====
            quantity_dict[key] = quantity_dict.get(key) / scale_factor #paired
    =====
        return quantity_dict

.. activecode:: dictionaries_mixedupcode_question10_10_ac
    :practice: T
    :autograde: unittest

    Create a function called ``scale_recipe`` that takes in ``quantity_dict`` and ``scale_factor`` as parameters and
    returns a dictionary with ``quantity_dict`` scaled by the ``scale_factor``.
    For example, ``scale_recipe({'fries': 7, 'hot dogs': 9, 'soda': 8}, 4)`` should return ``{'fries': 28, 'hot dogs': 36, 'soda': 32}``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(scale_recipe({'fries': 7, 'hot dogs': 9, 'soda': 8}, 4),{'fries': 28, 'hot dogs': 36, 'soda': 32},"scale_recipe({'fries': 7, 'hot dogs': 9, 'soda': 8}, 4)")
            self.assertEqual(scale_recipe({'fries': 7, 'hot dogs': 9, 'soda': 8}, 0.5),{'fries': 3.5, 'hot dogs': 4.5, 'soda': 4.0},"scale_recipe({'fries': 7, 'hot dogs': 9, 'soda': 8}, 0.5)")
            self.assertEqual(scale_recipe({'brownie mix': 1, 'oil': 1/3, 'egg': 1, 'water': 1/3}, 4),{'brownie mix': 4, 'oil': 1.3333333333333333, 'egg': 4, 'water': 1.3333333333333333},"scale_recipe({'brownie mix': 1, 'oil': 1/3, 'egg': 1, 'water': 1/3}, 4)")

    myTests().main()
