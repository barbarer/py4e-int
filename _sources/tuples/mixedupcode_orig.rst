Mixed-Up Code Questions
------------------------

.. parsonsprob:: tup_mixedupcode_1
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``length_word`` that takes in a parameter, ``txt`` which returns a list of tuples, ``tup_list``,
    where the first element is the length of each word in ``txt`` and the second is the word itself. Sort the list in terms of word
    length from longest to shortest. For example, ``length_word("hi bye")`` would return ``[(3, 'bye'), (2, 'hi')]``. Note: there
    is one block that won't be used in the solution!
    -----
    def length_word(txt):
    =====
        words = txt.split()
    =====
        t = []
    =====
        for word in words.split(): #paired
    =====
        for word in words:
    =====
            t.append((len(word), word))
    =====
            t.append(len(word)) #paired
    =====
        t.sort(reverse = True)
    =====
        t.sort(reverse = False) #paired
    =====
        return t

.. activecode:: tup_mixedupcode_1_ac
    :practice: T
    :autograde: unittest

    Write a function called ``length_word`` that takes in a parameter, ``txt`` which returns a list of tuples, ``tup_list``,
    where the first element is the length of each word in ``txt`` and the second is the word itself. Sort the list in terms of word
    length from longest to shortest. For example, ``length_word("hi bye")`` would return ``[(3, 'bye'), (2, 'hi')]``. Note: there
    is one block that won't be used in the solution!
    ~~~~
    def length_word(txt):
        # write code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(length_word('but soft what light in yonder window breaks'), [(6, 'yonder'), (6, 'window'), (6, 'breaks'), (5, 'light'), (4, 'what'), (4, 'soft'), (3, 'but'), (2, 'in')], "length_word('but soft what light in yonder window breaks')")
            self.assertEqual(length_word('hi bye'), [(3, 'bye'), (2, 'hi')], "length_word('hi bye')")
            self.assertEqual(length_word('Hello'), [(5, 'Hello')], "length_word('Hello')")

    myTests().main()

.. parsonsprob:: tup_mixedupcode_2
    :practice: T
    :numbered: left
    :adaptive:

    Create a function called ``tuple_word_len`` that takes in one parameter, ``word_list``.
    Then create and return a list called ``tup_list`` that contains tuples of each word from ``word_list`` paired with their
    lengths. Then sort the words by length from highest to lowest.  For example, ``tuple_word_len(['hi', 'bye'])``
    would return ``[('bye', 3), ('hi', 2)]``.
    -----
    def tuple_word_len(word_list):
    =====
        tup_list = []
    =====
        for word in word_list:
    =====
        for word in tup_list: #paired
    =====
            tup = word, len(word)
    =====
            tup_list.append(tup)
    =====
            word_list.append(tup) #paired
    =====
        tup_list.sort(key = lambda x: x[1], reverse = True)
    =====
        return tup_list

.. activecode:: tup_mixedupcode_2_ac
    :practice: T
    :autograde: unittest

    Write a function called ``tuple_word_len`` that takes in one parameter, ``word_list``.
    Then create and return a list called ``tup_list`` that contains tuples of each word from ``word_list`` paired with their
    lengths. Then sort the words by length from highest to lowest.  For example, ``tuple_word_len(['hi', 'bye'])``
    would return ``[('bye', 3), ('hi', 2)]``.
    ~~~~
    def tuple_word_len(word_list):
        # write code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(tuple_word_len(['hi', 'bye']), [('bye', 3), ('hi', 2)],"tuple_word_len(['hi', 'bye'])")
            self.assertEqual(tuple_word_len(['but', 'soft', 'what', 'light', 'in', 'yonder', 'window', 'breaks']), [('yonder', 6), ('window', 6), ('breaks', 6), ('light', 5), ('soft', 4), ('what', 4), ('but', 3), ('in', 2)],"tuple_word_len(['but', 'soft', 'what', 'light', 'in', 'yonder', 'window', 'breaks'])")
            self.assertEqual(tuple_word_len(['Hello']), [('Hello', 5)],"tuple_word_len(['Hello'])")

    myTests().main()

.. parsonsprob:: tup_mixedupcode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``swap_values`` that takes in one tuple as a parameter, ``t``, that has at least 5 values.
    Swap the second and fourth indices of tuple ``t`` with one another, and return that value. For example,
    ``swap_values(('Apple', 'Banana', 'Grapefruit', 'Pear', 'Peach'))`` would return ``('Apple', 'Pear', 'Grapefruit', 'Banana', 'Peach')``.
    -----
    def swap_values(t):
    =====
        a, b, c, d, e = t
    =====
        a, b, c, d = t #paired
    =====
        t = a, d, c, b, e
    =====
        t = a, c, b, e, d #paired
    =====
        return t

.. activecode:: tup_mixedupcode_3_ac
    :practice: T
    :autograde: unittest

    Write a function called ``swap_values`` that takes in one tuple as a parameter, ``t``, that has at least 5 values.
    Swap the second and fourth indices of tuple ``t`` with one another, and return that value. For example,
    ``swap_values(('Apple', 'Banana', 'Grapefruit', 'Pear', 'Peach'))`` would return ``('Apple', 'Pear', 'Grapefruit', 'Banana', 'Peach')``.
    ~~~~
    def swap_values(t):
        # write code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(swap_values(('Apple', 'Banana', 'Grapefruit', 'Pear', 'Peach')), ('Apple', 'Pear', 'Grapefruit', 'Banana', 'Peach'), "swap_values(('Apple', 'Banana', 'Grapefruit', 'Pear', 'Peach'))")
            self.assertEqual(swap_values(('Michigan', 'Go', 'Blue', 'Wolverine', 'Ann Arbor')), ('Michigan', 'Wolverine', 'Blue', 'Go', 'Ann Arbor'), "swap_values(('Michigan', 'Go', 'Blue', 'Wolverine', 'Ann Arbor'))")

    myTests().main()

.. parsonsprob:: tup_mixedupcode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``dictionary_to_tup_list`` that takes in a dictionary as a parameter, ``d``. Transform the
    dictionary ``d`` into a list of tuples called ``tup_list``, sort it by the dictionary's keys in ascending order, and return
    the list of tuples. For example, ``dictionary_to_tup_list({1:'a', 2:'b', 3:'c', 4:'d', 5:'e'})``would return
    ``[(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd'), (5, 'e')]``.
    -----
    def dictionary_to_tup_list(d):
    =====
        tup_list = list(d.items())
    =====
        tup_list = d.items() #paired
    =====
        tup_list.sort()
    =====
        tup_list.sort(reverse = False) #paired
    =====
        tup_list.sort(key = lambda x: x[1]) #paired
    =====
        return tup_list

.. activecode:: tup_mixedupcode_4_ac
    :practice: T
    :autograde: unittest

    Write a function called ``dictionary_to_tup_list`` that takes in a dictionary as a parameter, ``d``. Transform the
    dictionary ``d`` into a list of tuples called ``tup_list``, sort it by the dictionary's keys in ascending order, and return
    the list of tuples. For example, ``dictionary_to_tup_list({1:'a', 2:'b', 3:'c', 4:'d', 5:'e'})``would return
    ``[(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd'), (5, 'e')]``.
    ~~~~
    def dictionary_to_tup_list(d):
        # write code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(dictionary_to_tup_list({1:'a', 2:'b', 3:'c', 4:'d', 5:'e'}), [(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd'), (5, 'e')], "dictionary_to_tup_list({1:'a', 2:'b', 3:'c', 4:'d', 5:'e'})")
            self.assertEqual(dictionary_to_tup_list({'a':1,'b':2, 'c':3,'d':4,'e':5}), [('a', 1), ('b', 2), ('c', 3), ('d', 4), ('e', 5)], "dictionary_to_tup_list({'a':1,'b':2, 'c':3,'d':4,'e':5})")

    myTests().main()

.. parsonsprob:: tup_mixedupcode_5
    :numbered: left
    :adaptive:
    :practice: T

    Create a function called ``count_strs`` that takes in a tuple, ``tup``, as a parameter and counts the amount of strings in the list. For example,
    ``count_strs((1, 2, "hi"))`` should return ``1.``
    -----
    def count_strs(tup):
    =====
    Def count_strs(lst) #paired
    =====
        count = 0
    =====
        for item in tup:
    =====
            if isinstance(item,str):
    =====
            if item.isinstance(str): #paired
    =====
                count += 1
    =====
                count += item #paired
    =====
        return count


.. activecode:: tup_mixedupcode_5_ac
    :practice: T
    :autograde: unittest

    Write a function called ``count_strs`` that takes in a tuple, ``tup``, as a parameter and counts the amount of strings in the list. For example,
    ``count_strs((1, 2, "hi"))`` should return ``1.``
    ~~~~
    def count_strs(tup):
        #write code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(count_strs((1, 2, 'hi')), 1, "count_strs((1, 2, 'hi'))")
            self.assertEqual(count_strs(('1', 2, 'hi')), 2, "count_strs(('1', 2, 'hi'))")
            self.assertEqual(count_strs((1, 2)), 0, "count_strs((1, 2))")


    myTests().main()

.. parsonsprob:: tup_mixedupcode_6
    :numbered: left
    :adaptive:
    :practice: T

    Create a function called ``dict_to_list`` that takes in a dictionary parameter, ``d``, and adds the key-value pairs of dictionary ``d`` to a list and
    returns that list. For example, ``dict_to_list({'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10})`` would return
    ``[('monkey', 5), ('snake', 3), ('rabbit', 9), ('dragon', 6), ('rooster', 2), ('rat', 10)]``.
    -----
    def dict_to_list(d):
    =====
        list_kv_pairs = []
    =====
        for key, val in d.items():
    =====
            list_kv_pairs.append((key, val))
    =====
            list_kv_pairs.append(key, val) #paired
    =====
        return list_kv_pairs

.. activecode:: tup_mixedupcode_6_ac
    :practice: T
    :autograde: unittest

    Write a function called ``dict_to_list`` that takes in a dictionary parameter, ``d``, and adds the key-value pairs of dictionary ``d`` to a list and
    returns that list. For example, ``dict_to_list({'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10})`` would return
    ``[('monkey', 5), ('snake', 3), ('rabbit', 9), ('dragon', 6), ('rooster', 2), ('rat', 10)]``.
    ~~~~
    def dict_to_list(d):
        #write code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(dict_to_list({'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10}), [('monkey', 5), ('snake', 3), ('rabbit', 9), ('dragon', 6), ('rooster', 2), ('rat', 10)], "dict_to_list({'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10})")
            self.assertEqual(dict_to_list({'twice' : -8.9, 'apples': 7.2, 'for': -2}), [('twice', -8.9), ('apples', 7.2), ('for', -2)], "dict_to_list({'twice' : -8.9, 'apples': 7.2, 'for': -2})")
            self.assertEqual(dict_to_list({'twice' : 'twice', 'apples': 'apples', 'for': 'for'}), [('twice', 'twice'), ('apples', 'apples'), ('for', 'for')], "dict_to_list({'twice' : 'twice', 'apples': 'apples', 'for': 'for'})")
            self.assertEqual(dict_to_list({'twice' : 'twice', 'twice' : 'twice'}), [('twice', 'twice')], "dict_to_list({'twice' : 'twice', 'twice' : 'twice'})")
            self.assertEqual(dict_to_list({'twice' : 0, 'apples': 0, 'for': 0}), [('twice', 0), ('apples', 0), ('for', 0)], "dict_to_list({'twice' : 0, 'apples': 0, 'for': 0})")
            self.assertEqual(dict_to_list({}), [], "dict_to_list({})")

    myTests().main()

.. parsonsprob:: tup_mixedupcode_7
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``alphabetical_dict_list`` that takes in one dictionary parameter, ``d``, and creates a list of tuples with the first value of each tuple
    as the word as the key and the second value of each tuple as the length of the word. Return a list of the dictionary's key-value pairs in alphabetical order.
    For example, ``alphabetical_dict_list({'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10})`` should return ``[('dragon', 6), ('monkey', 6), ('rabbit', 6), ('rat', 3), ('rooster', 7), ('snake', 5)]``.
    -----
    def alphabetical_dict_list(d):
    =====
        new_dict = {}
    =====
        for i in d:
    =====
            new_dict[i] = new_dict.get(i, len(i))
    =====
    		new_dict.append(i, len(i)) #paired
    =====
    	new_dict = sorted(new_dict.items())
    =====
        sort(new_dict.items()) #paired
    =====
        return new_dict

.. activecode:: tup_mixedupcode_7_ac
    :practice: T
    :autograde: unittest

    Write a function called ``alphabetical_dict_list`` that takes in one dictionary parameter, ``d``, and creates a list of tuples with the first value of each tuple
    as the word as the key and the second value of each tuple as the length of the word. Return a list of the dictionary's key-value pairs in alphabetical order. For
    example, ``alphabetical_dict_list({'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10})`` should return ``[('dragon', 6), ('monkey', 6), ('rabbit', 6), ('rat', 3), ('rooster', 7), ('snake', 5)]``.
    ~~~~
    def alphabetical_dict_list(d):
        #write code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(alphabetical_dict_list({'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10}), [('dragon', 6), ('monkey', 6), ('rabbit', 6), ('rat', 3), ('rooster', 7), ('snake', 5)], "alphabetical_dict_list({'monkey': 5, 'snake': 3, 'rabbit': 9, 'dragon': 6, 'rooster': 2, 'rat': 10})")
            self.assertEqual(alphabetical_dict_list({'twice' : -8.9, 'apples': 7.2, 'for': -2}), [('apples', 6), ('for', 3), ('twice', 5)], "alphabetical_dict_list({'twice' : -8.9, 'apples': 7.2, 'for': -2})")
            self.assertEqual(alphabetical_dict_list({'twice' : 'twice', 'apples': 'apples', 'for': 'for'}), [('apples', 6), ('for', 3), ('twice', 5)], "alphabetical_dict_list({'twice' : 'twice', 'apples': 'apples', 'for': 'for'})")
            self.assertEqual(alphabetical_dict_list({'twice' : 0, 'apples': 0, 'for': 0}), [('apples', 6), ('for', 3), ('twice', 5)], "alphabetical_dict_list({'twice' : 0, 'apples': 0, 'for': 0})")
            self.assertEqual(alphabetical_dict_list({'hi': 'bye', 'Run': 'When', 'Win': 'compare'}), [('Run', 3), ('Win', 3), ('hi', 2)], "alphabetical_dict_list({'hi': 'bye', 'Run': 'When', 'Win': 'compare'})")

    myTests().main()

.. parsonsprob:: tup_mixedupcode_8
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``longest_word_lst`` that takes in a list of tuples, ``list_tup``, as a parameter and adds the longest word in each tuple and adds it to a list. Return this
    list. For example, ``longest_word_lst([('twice', 'for', 'apples'), ('regular', 'combining'), ('one', 'five', 'twenty', 'twenty-four'), ('tmobile', 'sprint', 'at&t')])``
    should return``['apples', 'combining', 'twenty-four', 'tmobile']``.
    -----
    def longest_word_lst(lst_tup):
    =====
        lst = []
    =====
        for tup in lst_tup:
    =====
            longest_word = ''
    =====
            for item in tup:
    =====
                if len(item) > len(longest_word):
    =====
                    longest_word = item
    =====
            lst.append(longest_word)
    =====
        return lst

.. activecode:: tup_mixedupcode_8_ac
    :practice: T
    :autograde: unittest

    Write a function called ``longest_word_lst`` that takes in a list of tuples, ``list_tup``, as a parameter and adds the longest word in each tuple and adds it to a list. Return this
    list. For example, ``longest_word_lst([('twice', 'for', 'apples'), ('regular', 'combining'), ('one', 'five', 'twenty', 'twenty-four'), ('tmobile', 'sprint', 'at&t')])``
    should return ``['apples', 'combining', 'twenty-four', 'tmobile']``.
    ~~~~
    def longest_word_lst(lst_tup):
        #write code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(longest_word_lst([('twice', 'for', 'apples'), ('regular', 'combining'), ('one', 'five', 'twenty', 'twenty-four'), ('tmobile', 'sprint', 'at&t')]), ['apples', 'combining', 'twenty-four', 'tmobile'], "longest_word_lst([('twice', 'for', 'apples'), ('regular', 'combining'), ('one', 'five', 'twenty', 'twenty-four'), ('tmobile', 'sprint', 'at&t')])")
            self.assertEqual(longest_word_lst([(),()]), ['', ''], "longest_word_lst([(),()])")
            self.assertEqual(longest_word_lst([('twice', 'twice'),('rabbit','dragon','rooster')]), ['twice', 'rooster'], "longest_word_lst([('twice', 'twice'),('rabbit','dragon','rooster')])")
            self.assertEqual(longest_word_lst((('2','22'), ('1'))), ['22', '1'], "longest_word_lst((('2','22'), ('1')))")
            self.assertEqual(longest_word_lst((('2 0 2 0 2','22'), ('1'))), ['2 0 2 0 2', '1'], "longest_word_lst((('2 0 2 0 2','22'), ('1')))")

    myTests().main()

.. parsonsprob:: tup_mixedupcode_9
    :numbered: left
    :adaptive:
    :practice: T

    Create a function called ``cap`` that takes in a list of tuples, ``lst_tup``, as a parameter, that creates a new list with every item in ``lst_tup``
    capitalized and then return the list. Note: Each tuple must have at least two items. For example, ``cap([('twice', 'for', 'apples'), ('regular', 'combining'), ('one', 'five', 'twenty', 'twenty-four'), ('tmobile', 'sprint', 'at&t')])``
    would return ``['Twice', 'For', 'Apples', 'Regular', 'Combining', 'One', 'Five', 'Twenty', 'Twenty-four', 'Tmobile', 'Sprint', 'At&t']``.
    -----
    def cap(lst_tup):
    =====
        t_list = []
    =====
        for item in lst_tup:
    =====
            for word in item:
    =====
            for word in lst_tup: #paired
    =====
                t_list.append(word.capitalize())
    =====
                t_list = t_list.add(item.capitalized()) #paired
    =====
        return t_list


.. activecode:: tup_mixedupcode_9_ac
    :practice: T
    :autograde: unittest

    Write a function called ``cap`` that takes in a list of tuples, ``lst_tup``, as a parameter, that creates a new list with every item in ``lst_tup``
    capitalized and then return the list. Note: Each tuple must have at least two items. For example, ``cap([('twice', 'for', 'apples'), ('regular', 'combining'), ('one', 'five', 'twenty', 'twenty-four'), ('tmobile', 'sprint', 'at&t')])``
    would return ``['Twice', 'For', 'Apples', 'Regular', 'Combining', 'One', 'Five', 'Twenty', 'Twenty-four', 'Tmobile', 'Sprint', 'At&t']``.
    ~~~~
    def cap(lst_tup):
        #write code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(cap([('twice', 'for', 'apples'), ('regular', 'combining'), ('one', 'five', 'twenty', 'twenty-four'), ('tmobile', 'sprint', 'at&t')]), ['Twice', 'For', 'Apples', 'Regular', 'Combining', 'One', 'Five', 'Twenty', 'Twenty-four', 'Tmobile', 'Sprint', 'At&t'], "cap([('twice', 'for', 'apples'), ('regular', 'combining'), ('one', 'five', 'twenty', 'twenty-four'), ('tmobile', 'sprint', 'at&t')])")
            self.assertEqual(cap([('twice', 'twice'),('rabbit','dragon','rooster')]), ['Twice', 'Twice', 'Rabbit', 'Dragon', 'Rooster'], "cap([('twice', 'twice'),('rabbit','dragon','rooster')])")
            self.assertEqual(cap([('twice', 'twice')]), ['Twice', 'Twice'], "cap([('twice', 'twice')])")

    myTests().main()

.. parsonsprob:: tup_mixedupcode_10
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``grocery`` that takes in a dictionary, ``d``, changes ``d`` into a list of tuples, and then sorts the list by the dictionary's values in ascending order.
    For example, ``grocery({'chicken': 5, 'lettuce': 3, 'orange juice': 4, 'bagels': 2.50, 'bacon': 4.25, 'bread': 8})`` should return ``[('bagels', 2.5), ('lettuce', 3), ('orange juice', 4), ('bacon', 4.25), ('chicken', 5), ('bread', 8)]``.
    -----
    def grocery(d):
    =====
        grocery_list = list(d.items())
    =====
        grocery_list = items(d) #paired
    =====
        grocery_list.sort(key = lambda x: x[1])
    =====
        grocery_list.sort(key = lambda x: x[1], reverse = True) #paired
    =====
        return grocery_list

.. activecode:: tup_mixedupcode_10_ac
    :practice: T
    :autograde: unittest

    Write a function called ``grocery`` that takes in a dictionary, ``d``, and changes ``d`` into a list of tuples, then sort the list by the dictionary's values in ascending order. Note: values must be positive.
    For example, ``grocery({'chicken': 5, 'lettuce': 3, 'orange juice': 4, 'bagels': 2.50, 'bacon': 4.25, 'bread': 8})`` should return ``[('bagels', 2.5), ('lettuce', 3), ('orange juice', 4), ('bacon', 4.25), ('chicken', 5), ('bread', 8)]``.
    ~~~~
    def grocery(d):
        #write code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(grocery({'chicken': 5, 'lettuce': 3, 'orange juice': 4, 'bagels': 2.50, 'bacon': 4.25, 'bread': 8}), [('bagels', 2.5), ('lettuce', 3), ('orange juice', 4), ('bacon', 4.25), ('chicken', 5), ('bread', 8)], "grocery({'chicken': 5, 'lettuce': 3, 'orange juice': 4, 'bagels': 2.50, 'bacon': 4.25, 'bread': 8})")
            self.assertEqual(grocery({'eggs': 5}), [('eggs', 5)], "grocery({'eggs': 5})")
            self.assertEqual(grocery({'soup': 5, 'peanut butter': 3, 'orange juice': 4.1, 'bagels': 2.50, 'bacon': 4.25, 'bread': 8}), [('bagels', 2.5), ('peanut butter', 3), ('orange juice', 4.1), ('bacon', 4.25), ('soup', 5), ('bread', 8)], "grocery({'soup': 5, 'peanut butter': 3, 'orange juice': 4.1, 'bagels': 2.50, 'bacon': 4.25, 'bread': 8})")

    myTests().main()
