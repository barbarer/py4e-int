Functions, Tuples, and Dictionaries Write Code Questions
---------------------------------------------------------
#.
    .. tabbed:: funct-tups-dicts-writecode1

        .. tab:: Question

            .. activecode:: funct-tups-dicts-writecode1q
                :practice: T
                :autograde: unittest

                Fix the 5 errors in the function called indexing_with_tuples that takes in a tuple of strings  
                as a parameter and returns the word "python". 
                ~~~~
                def indexing_with_tuples(tup)
                    return tup[1] + tup[0] + tup[3] + tup[2][5]
                
                print(indexing_with_tuples(("rhyme", "peppermint", "everyone", "athlete")))
                
                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(indexing_with_tuples(("rhyme", "peppermint", "everyone", "athlete")),"python","Tested indexing_with_tuples on inputs ('rhyme', 'peppermint', 'everyone', 'athlete')")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct-tups-dicts-writecode1a
                :optional:

                def indexing_with_tuples(tup):
                    return tup[1][0] + tup[0][2] + tup[3][1:3] + tup[2][5:7]
                
                print(indexing_with_tuples(("rhyme", "peppermint", "everyone", "athlete")))

#.
    .. activecode:: funct-tups-dicts-writecode2
        :practice: T
        :autograde: unittest

        Fix the 4 errors so the following code runs and returns a dictionary with the first index of the tuples
        as the keys and the second index of the tuples as the values.
        ~~~~
        Def list_of_tups_into_dict(list_of_tups):
            first_index_second_index_dict = {}
            for tup in list_of_tups:
                first_index_second_index_dict[tup][0] = tup

            return list_of_tups


        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(list_of_tups_into_dict([("Cindy", "August 10"), ("Brian", "July 20"), ("Lawrence", "January 05")]),{'Cindy': 'August 10', 'Brian': 'July 20', 'Lawrence': 'January 05'},"Tested list_of_tups_into_dict on [('Cindy', 'August 10'), ('Brian', 'July 20'), ('Lawrence', 'January 05')]")
                self.assertEqual(list_of_tups_into_dict([(10, (11.0,0.5)), (False, ["hi", "bye", -5])]),{10: (11.0, 0.5), False: ['hi', 'bye', -5]},"Tested list_of_tups_into_dict on [(10, (11.0,0.5)), (False, ['hi', 'bye', -5])]")



        myTests().main()

#.
    .. tabbed:: funct-tups-dicts-writecode3

        .. tab:: Question

            .. activecode:: funct-tups-dicts-writecode3q
                :practice: T
                :autograde: unittest

                Create a function called squared_converter that takes in a list of numbers and returns a dictionary with the numbers as keys 
                and their squared value as values.
                ~~~~
                def squared_converter(num_list):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(squared_converter([1,2,3,4,5]),{1: 1, 2: 4, 3: 9, 4: 16, 5: 25},"Tested squared_converter on [1,2,3,4,5]")
                        self.assertEqual(squared_converter([0,2,5,3,5]),{0: 0, 2: 4, 5: 25, 3: 9, 5: 25},"Tested squared_converter on [0,2,5,3,5]")
                        self.assertEqual(squared_converter([0,-1,-2,-3,-4,200]),{0: 0, -1: 1, -2: 4, -3: 9, -4: 16, 200: 40000},"Tested squared_converter on [0,-1,-2,-3,-4,200]")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct-tups-dicts-writecode3a
                :optional:

                def squared_converter(num_list):
                    squared_dict = {}
                    for num in num_list:
                        squared_dict[num] = num * num
        
                    return squared_dict

#.
    .. activecode:: funct-tups-dicts-writecode4
        :practice: T
        :autograde: unittest

        
        Create a function called ordered_nums_in_tup that takes a tuple that contains various data types 
        as a parameter and returns a sorted tuple of the numeric values (type int and float). 
        (Hint: create a list of numbers and convert it into a sorted tuple.)
        ~~~~
        def ordered_nums_in_tup(tup):
            # write code here

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(ordered_nums_in_tup((True, "hello", 14, False, 11)),(11,14),"Tested ordered_nums_in_tup on (True, 'hello', 14, False, 11)")
                self.assertEqual(ordered_nums_in_tup((False, 1.0, "HI", -5.5, "python", -3, 1000, 0)),(-5.5, -3, 0, 1.0, 1000),"Tested ordered_nums_in_tup on (False, 1.0, 'HI', -5.5, 'python', -3, 1000, 0)")

        myTests().main()



#.
    .. tabbed:: funct-tups-dicts-writecode5

        .. tab:: Question

            .. activecode:: funct-tups-dicts-writecode5q
                :practice: T
                :autograde: unittest
                
                Create a function called triple_values that takes in a list of numbers called num_list
                which triples every value in the list and adds it to a dictionary. Then, change every 
                even value (not the keys) in the dictionary to zero.
                ~~~~
                def triple_values(num_list):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(triple_values([1,2,3.5,4.0,5,6]),{1: 3, 2: 0, 3.5: 10.5, 4.0: 0, 5: 15, 6: 0},"Tests triple_values on [1,2,3.5,4.0,5,6]")
                        self.assertEqual(triple_values([0,2,15,-2,11,12]),{0: 0, 2: 0, 15: 45, -2: 0, 11: 33, 12: 0},"Tests triple_values on [0,2,15,-2,11,12]")


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


