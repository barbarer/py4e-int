Functions with Tuples and Dictionaries Write Code Questions
------------------------------------------------------------
#.
    .. tabbed:: funct-tups-dicts-writecode1

        .. tab:: Question

            .. activecode:: funct-tups-dicts-writecode1q
                :autograde: unittest

                Write a function called ``index_tup`` that takes in a tuple of strings, ``tup_strings``, as a parameter and returns a string consisting of the characters at the
                zeroth index from the first string, the first index from the second string, the second index from the third string, etc. Add on to the string until the length
                of the current word is less than or equal to the current index. For example, ``index_tup(("peppermint", "athlete", "business", "everyone", "rhyme", "athlete"))``
                should return ``ptsret``.
                ~~~~
                def index_tup(tup):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(index_tup(('peppermint', 'athlete', 'business', 'everyone', 'rhyme', 'athlete')),'ptsret',"index_tup(('peppermint', 'athlete', 'business', 'everyone', 'rhyme', 'athlete'))")
                        self.assertEqual(index_tup(('p', 'a')),'p',"index_tup(('p', 'a'))")
                        self.assertEqual(index_tup(('Business', 'Food', 'Science', 'Women’s', 'Women’s', 'Women’s')),'Boien’',"index_tup(('Business', 'Food', 'Science', 'Women’s', 'Women’s', 'Women’s'))")


                myTests().main()


        .. tab:: Answer

            .. activecode:: funct-tups-dicts-writecode1a
                :optional:

                Write a function called ``index_tup`` that takes in a tuple of strings, ``tup_strings``, as a parameter and returns a string consisting of the characters at the
                zeroth index from the first string, the first index from the second string, the second index from the third string, etc. Add on to the string until the length
                of the current word is less than or equal to the current index. For example, ``index_tup(("peppermint", "athlete", "business", "everyone", "rhyme", "athlete"))``
                should return ``ptsret``.
                ~~~~

                def index_tup(tup):
                    str1 = ''
                    index = 0
                    for word in tup:
                        if len(word) > index:
                            str1 += ((word[index]))
                            index += 1
                        else:
                            return str1
                    return str1

#.
    .. activecode:: funct-tups-dicts-writecode2
        :autograde: unittest

        Write a function called ``list_tups_into_dict`` that takes in a list of tuples, ``list_of_tups`` as a parameter and returns a dictionary with the first
        index of the tuples as the keys and the second index of the tuples as the values. For example, ``list_tups_into_dict([('red', 3), ('blue', 2)])`` should return ``{'red': 3, 'blue':2}``.
        ~~~~
        def list_tups_into_dict(list_of_tups):
            # write code here


        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(list_tups_into_dict([('red', 3), ('blue', 2)]), {'red': 3, 'blue':2}, "list_tups_into_dict([('red', 3), ('blue', 2)])")
                self.assertEqual(list_tups_into_dict([('red', 3)]), {'red': 3}, "list_tups_into_dict([('red', 3)])")
                self.assertEqual(list_tups_into_dict([("Cindy", "August 10"), ("Brian", "July 20"), ("Lawrence", "January 05")]),{'Cindy': 'August 10', 'Brian': 'July 20', 'Lawrence': 'January 05'},"list_tups_into_dict([('Cindy', 'August 10'), ('Brian', 'July 20'), ('Lawrence', 'January 05')])")
                self.assertEqual(list_tups_into_dict([(10, (11.0,0.5)), (False, ["hi", "bye", -5])]),{10: (11.0, 0.5), False: ['hi', 'bye', -5]},"list_tups_into_dict([(10, (11.0,0.5)), (False, ['hi', 'bye', -5])])")



        myTests().main()

#.
    .. tabbed:: funct-tups-dicts-writecode3

        .. tab:: Question

            .. activecode:: funct-tups-dicts-writecode3q
                :autograde: unittest

                Write a function ``squared_converter`` that takes in a list of numbers, ``num_list``, and returns a dictionary with the numbers as keys
                and their squared value as values.  For example, ``squared_converter([1,2])`` should return ``{1: 1, 2: 4}``.
                ~~~~
                def squared_converter(num_list):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(squared_converter([1,2]),{1: 1, 2: 4},"squared_converter([1,2])")
                        self.assertEqual(squared_converter([1,2,3,4,5]),{1: 1, 2: 4, 3: 9, 4: 16, 5: 25},"squared_converter([1,2,3,4,5])")
                        self.assertEqual(squared_converter([0,2,5,3,5]),{0: 0, 2: 4, 5: 25, 3: 9, 5: 25},"squared_converter([0,2,5,3,5])")
                        self.assertEqual(squared_converter([0,-1,-2,-3,-4,200]),{0: 0, -1: 1, -2: 4, -3: 9, -4: 16, 200: 40000},"squared_converter([0,-1,-2,-3,-4,200])")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct-tups-dicts-writecode3a
                :optional:

                Write a function ``squared_converter`` that takes in a list of numbers, ``num_list``, and returns a dictionary with the numbers as keys
                and their squared value as values.  For example, ``squared_converter([1,2])`` should return ``{1: 1, 2: 4}``.
                ~~~~
                def squared_converter(num_list):
                    squared_dict = {}
                    for num in num_list:
                        squared_dict[num] = num * num

                    return squared_dict

#.
    .. activecode:: funct-tups-dicts-writecode4
        :autograde: unittest

        Write a function ``ordered_nums_tup()`` that takes a tuple, ``tup``, that contains various items such as strings and numbers and returns a sorted list of the numeric values (type int and float) sorted in ascending order. For example,
        ``ordered_nums_tup(("hello", 5, 1))`` should return ``[1, 5]``. Hint: you can use ``isinstance(var, type)`` to check if a variable is of the given type.
        ~~~~
        def ordered_nums_tup(tup):
            # write code here
        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(ordered_nums_tup(("hello", 5, 1)),[1,5],"ordered_nums_tup(('hello', 5, 1))")
                self.assertEqual(ordered_nums_tup((5, "hello", 1)),[1,5],"ordered_nums_tup((5, 'hello', 1))")
                self.assertEqual(ordered_nums_tup(("hello", 14, 11)),[11,14],"ordered_nums_tup(('hello', 14, 11))")
                self.assertEqual(ordered_nums_tup((1.0, "HI", -5.5, "python", -3, 1000, 0)),[-5.5, -3, 0, 1.0, 1000],"ordered_nums_tup((1.0, 'HI', -5.5, 'python', -3, 1000, 0))")

        myTests().main()



#.
    .. tabbed:: funct-tups-dicts-writecode5

        .. tab:: Question

            .. activecode:: funct-tups-dicts-writecode5q
                :autograde: unittest

                Write a function ``triple_values`` that takes in a list of numbers, ``num_list``,
                which adds every number in the list to a dictionary as the key and adds three times the number as the value. Then, change every
                even value (not the keys) in the dictionary to zero.  For example, ``triple_values([1, 2])`` should return ``{1: 3, 2: 0}``.
                ~~~~
                def triple_values(num_list)

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(triple_values([1, 2]), {1: 3, 2: 0}, "triple_values([1, 2])")
                        self.assertEqual(triple_values([1,2,3.5,4.0,5,6]),{1: 3, 2: 0, 3.5: 10.5, 4.0: 0, 5: 15, 6: 0},"triple_values([1,2,3.5,4.0,5,6])")
                        self.assertEqual(triple_values([0,2,15,-2,11,12]),{0: 0, 2: 0, 15: 45, -2: 0, 11: 33, 12: 0},"triple_values([0,2,15,-2,11,12])")


                myTests().main()


        .. tab:: Answer

            .. activecode:: funct-tups-dicts-writecode5a
                :optional:
                :autograde: unittest

                Write a function ``triple_values`` that takes in a list of numbers, ``num_list``,
                which adds every number in the list to a dictionary as the key and adds three times the number as the value. Then, change every
                even value (not the keys) in the dictionary to zero.  For example, ``triple_values([1, 2])`` should return ``{1: 3, 2: 0}``.
                ~~~~
                def triple_values(num_list):
                    triple_values_dict = {}

                    for num in num_list:
                        triple_values_dict[num] = num * 3

                    for key, value in triple_values_dict.items():
                        if (value % 2) == 0:
                            triple_values_dict[key] = 0

                    return triple_values_dict

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(triple_values([1, 2]), {1: 3, 2: 0}, "triple_values([1, 2])")
                        self.assertEqual(triple_values([1,2,3.5,4.0,5,6]),{1: 3, 2: 0, 3.5: 10.5, 4.0: 0, 5: 15, 6: 0},"triple_values([1,2,3.5,4.0,5,6])")
                        self.assertEqual(triple_values([0,2,15,-2,11,12]),{0: 0, 2: 0, 15: 45, -2: 0, 11: 33, 12: 0},"triple_values([0,2,15,-2,11,12])")


                myTests().main()



#.
    .. activecode:: funct-tups-dicts-writecode6
        :autograde: unittest

        Write a function ``count_chars`` that takes a string, ``str1``, and returns a list of tuples ordered by the number of times each character appears in the string in descending order.  For example, ``count_chars("babby")`` should return ``[('b': 3), ('a':1), ('y': 1)]``.
        ~~~~

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(count_chars("babby"),[('b', 3), ('a', 1), ('y', 1)], 'count_chars("babby")')
                self.assertEqual(count_chars("cheeses"),[('e', 3), ('s', 2), ('c', 1), ('h', 1)], 'count_chars("cheeses")')
                self.assertEqual(count_chars("a"),[('a', 1)], 'count_chars("a")')

        myTests().main()
