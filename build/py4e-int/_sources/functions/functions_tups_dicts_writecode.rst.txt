Functions, Tuples, and Dictionaries Write Code Questions
---------------------------------------------------------
#.
    .. tabbed:: funct-tups-dicts-writecode1

        .. tab:: Question

            .. activecode:: funct-tups-dicts-writecode1q
                :practice: T
                :autograde: unittest

                Fix the 5 errors in the function ``indexing_with_tuples(tup)`` that takes in a tuple of strings, ``tup``,
                as a parameter and returns a string.  In this case, it should return ``python``.
                ~~~~
                def indexing_with_tuples(tup)
                    return tup[1] + tup[0] + tup[3] + tup[2][5]

                print(indexing_with_tuples(("rhyme", "peppermint", "everyone", "athlete")))

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(indexing_with_tuples(("rhyme", "peppermint", "everyone", "athlete")),"python","indexing_with_tuples(('rhyme', 'peppermint', 'everyone', 'athlete'))")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct-tups-dicts-writecode1a
                :optional:

                def indexing_with_tuples(tup):
                    return tup[1][0] + tup[0][2] + tup[3][1:3] + tup[2][5:7]

                print(indexing_with_tuples(("rhyme", "peppermint", "everyone", "athlete")))

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(indexing_with_tuples(("rhyme", "peppermint", "everyone", "athlete")),"python","indexing_with_tuples(('rhyme', 'peppermint', 'everyone', 'athlete'))")

                myTests().main()

#.
    .. activecode:: funct-tups-dicts-writecode2
        :practice: T
        :autograde: unittest

        Fix 4 errors so the following code runs and returns a dictionary with the first index of the tuples
        as the keys and the second index of the tuples as the values. For example, ``list_of_tups_into_dict([('red', 3), ('blue', 2)])`` should return {'red': 3, 'blue':2}.
        ~~~~
        Def list_of_tups_into_dict(list_of_tups):
            dict = {}
            for tup in list_of_tups:
                dict[tup][0] = tup

            return list_of_tups


        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(list_of_tups_into_dict([('red', 3), ('blue', 2)]), {'red': 3, 'blue':2}, "list_of_tups_into_dict([('red', 3), ('blue', 2)])")
                self.assertEqual(list_of_tups_into_dict([('red', 3)]), {'red': 3}, "list_of_tups_into_dict([('red', 3)])")
                self.assertEqual(list_of_tups_into_dict([("Cindy", "August 10"), ("Brian", "July 20"), ("Lawrence", "January 05")]),{'Cindy': 'August 10', 'Brian': 'July 20', 'Lawrence': 'January 05'},"list_of_tups_into_dict([('Cindy', 'August 10'), ('Brian', 'July 20'), ('Lawrence', 'January 05')])")
                self.assertEqual(list_of_tups_into_dict([(10, (11.0,0.5)), (False, ["hi", "bye", -5])]),{10: (11.0, 0.5), False: ['hi', 'bye', -5]},"list_of_tups_into_dict([(10, (11.0,0.5)), (False, ['hi', 'bye', -5])])")



        myTests().main()

#.
    .. tabbed:: funct-tups-dicts-writecode3

        .. tab:: Question

            .. activecode:: funct-tups-dicts-writecode3q
                :practice: T
                :autograde: unittest

                Write a function ``squared_converter(num_list)`` that takes in a list of numbers, ``num_list``, and returns a dictionary with the numbers as keys
                and their squared value as values.  For example, ``squared_converter([1,2])`` should return ``{1: 1, 2: 4}``.
                ~~~~

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

                def squared_converter(num_list):
                    squared_dict = {}
                    for num in num_list:
                        squared_dict[num] = num * num

                    return squared_dict

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(squared_converter([1,2]),{1: 1, 2: 4},"squared_converter([1,2])")
                        self.assertEqual(squared_converter([1,2,3,4,5]),{1: 1, 2: 4, 3: 9, 4: 16, 5: 25},"squared_converter([1,2,3,4,5])")
                        self.assertEqual(squared_converter([0,2,5,3,5]),{0: 0, 2: 4, 5: 25, 3: 9, 5: 25},"squared_converter([0,2,5,3,5])")
                        self.assertEqual(squared_converter([0,-1,-2,-3,-4,200]),{0: 0, -1: 1, -2: 4, -3: 9, -4: 16, 200: 40000},"squared_converter([0,-1,-2,-3,-4,200])")

                myTests().main()

#.
    .. activecode:: funct-tups-dicts-writecode4
        :practice: T
        :autograde: unittest


        Write a function ``ordered_nums_in_tup(tup)`` that takes a tuple, ``tup``, that contains various items such as strings and numbers and returns a sorted list of the numeric values (type int and float) sorted in ascending order. For example,
        ``ordered_nums_in_tup(("hello", 5, 1))`` should return ``[1, 5]``. Hint: you can use ``isinstance(var, type)`` to check if a variable is of the given type.
        ~~~~

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                tup1 = ("hello", 5, 1)
                self.assertEqual(ordered_nums_in_tup(tup1),[1,5],"ordered_nums_in_tup(('hello', 5, 1))")
                tup2 = (5, "hello", 1)
                self.assertEqual(ordered_nums_in_tup(tup2),[1,5],"ordered_nums_in_tup((5, 'hello', 1))")
                tup3 = ("hello", 14, 11)
                self.assertEqual(ordered_nums_in_tup(tup3),[11,14],"ordered_nums_in_tup(('hello', 14, 11))")
                tup4 = (1.0, "HI", -5.5, "python", -3, 1000, 0)
                self.assertEqual(ordered_nums_in_tup(tup4),[-5.5, -3, 0, 1.0, 1000],"ordered_nums_in_tup((1.0, 'HI', -5.5, 'python', -3, 1000, 0))")

        myTests().main()



#.
    .. tabbed:: funct-tups-dicts-writecode5

        .. tab:: Question

            .. activecode:: funct-tups-dicts-writecode5q
                :practice: T
                :autograde: unittest

                Write a function ``triple_values(num_list)`` that takes in a list of numbers, ``num_list``,
                which adds every number in the list to a dictionary as the key and adds three times the number as the value. Then, change every
                even value (not the keys) in the dictionary to zero.  For example, ``triple_values([1, 2])`` should return ``{1: 3, 2: 0}``.
                ~~~~

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
        :practice: T
        :autograde: unittest


        Write a function ``count_chars(str)`` that takes a string, ``str``, and returns a list of tuples ordered by the number of times each character appears in the string in descending order.  For example, ``count_chars("babby")`` should return ``[('b': 3), ('a':1), ('y': 1)]``.
        ~~~~

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(count_chars("babby"),[('b', 3), ('a', 1), ('y', 1)], 'count_chars("babby")')
                self.assertEqual(count_chars("cheeses"),[('e', 3), ('s', 2), ('c', 1), ('h', 1)], 'count_chars("cheeses")')
                self.assertEqual(count_chars("a"),[('a', 1)], 'count_chars("a")')

        myTests().main()
