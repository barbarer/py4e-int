Functions and Lists Write Code Questions
-----------------------------------------
#.
    .. tabbed:: funct_list_writecode1

        .. tab:: Question

            .. activecode:: funct_list_writecode1q
                :practice: T
                :autograde: unittest

                Write a function called ``average_of_num_list`` that takes in a parameter ``num_list`` and returns the average of all the numbers in num_list.
                For example, ``average_of_num_list([0, 20.8, 80, 5])`` would return ``26.45``.
                ~~~~
                def average_of_num_list(num_list):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(average_of_num_list([0]),0,"average_of_num_list([0])")
                        self.assertAlmostEqual(average_of_num_list([0, 20.8, 80, 5]),26.45,2,"average_of_num_list([0, 20.8, 80, 5])")
                        self.assertAlmostEqual(average_of_num_list([0, 15, 13, 14, 7]),9.8,1,"average_of_num_list([0, 15, 13, 14, 7])")
                        self.assertAlmostEqual(average_of_num_list([0, 100, 5, 10]),28.75,2,"average_of_num_list([0, 100, 5, 10])")
                        self.assertAlmostEqual(average_of_num_list([0, 25, 40, -20, -100]),-11.0,1,"average_of_num_list([0, 25, 40, -20, -100])")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_list_writecode1a
                :optional:

                def average_of_num_list(num_list):
                    return sum(num_list) / len(num_list)


#.
    .. tabbed:: funct_list_writecode2

        .. tab:: Question

            .. activecode:: funct_list_writecode2q
                :practice: T
                :autograde: unittest

                Write a function called ``names`` that takes in a parameter ``name_list`` and returns an alphabetically sorted ``name_list``.
                For example, ``names(['Susan', 'Sara', 'Sammy', 'Sarah'])`` would return ``['Sammy', 'Sara', 'Sarah', 'Susan']``.
                ~~~~
                def names(name_list):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(names(['Sally', 'Jimmy', 'Peter', 'Tinkerbell']),['Jimmy', 'Peter', 'Sally', 'Tinkerbell'],"names(['Sally', 'Jimmy', 'Peter', 'Tinkerbell'])")
                        self.assertEqual(names(['Timmy']),['Timmy'],"names(['Timmy'])")
                        self.assertEqual(names(['Susan', 'Sara', 'Sammy', 'Sarah']),['Sammy', 'Sara', 'Sarah', 'Susan'],"names(['Susan', 'Sara', 'Sammy', 'Sarah'])")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_list_writecode2a
                :optional:

                def names(name_list):
                    name_list.sort()
                    return name_list


#.
    .. tabbed:: funct_list_writecode3

        .. tab:: Question

            .. activecode:: funct_list_writecode3q
                :practice: T
                :autograde: unittest

                Write a function called ``remove_min_value`` that takes in a parameter ``num_list`` and returns a ``num_list`` without the 
                minimum value from ``num_list``. For example, ``remove_min_value([20, 4, 1203, 7482, 3])`` would return ``[20, 4, 1203, 7482]``.
                ~~~~
                def remove_min_value(num_list):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(remove_min_value([20, 4, 1203, 7482, 3]),[20, 4, 1203, 7482],"remove_min_value([20, 4, 1203, 7482, 3])")
                        self.assertEqual(remove_min_value([3]),[],"remove_min_value([3])")
                        self.assertEqual(remove_min_value([3, 0, 100]),[3, 100],"remove_min_value([3, 0, 100])")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_list_writecode3a
                :optional:

                def remove_min_value(num_list):
                    num_list.remove(min(num_list))
                    return num_list


#.
    .. tabbed:: funct_list_writecode4

        .. tab:: Question

            .. activecode:: funct_list_writecode4q
                :practice: T
                :autograde: unittest

                Write a function called ``range_given_list`` that takes in a parameter ``list_of_nums`` and 
                returns the range (max value - min value) of the values. Try using the sort method and indexing.
                For example ``range_given_list([20, 100, 2000, 15, 3, 12])`` would return ``1997``.
                ~~~~
                def range_given_list(list_of_nums):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(range_given_list([20, 100, 2000, 15, 3, 12]),1997,"range_given_list([20, 100, 2000, 15, 3, 12])")
                        self.assertEqual(range_given_list([20, 100, 2000, 15, 3, 0]),2000,"range_given_list([20, 100, 2000, 15, 3, 0])")
                        self.assertEqual(range_given_list([20, 100, 2000, 15, 3, -12]),2012,"range_given_list([20, 100, 2000, 15, 3, -12])")
                        self.assertEqual(range_given_list([-20, -100, -2000, -15, -3, -12]),1997,"range_given_list([-20, -100, -2000, -15, -3, -12])")
                        self.assertAlmostEqual(range_given_list([20.7, 100.3, 2000.5, 2000.4, 15.7, 3.6, -12.9]),2013.4,1,"range_given_list([20.7, 100.3, 2000.5, 2000.4, 15.7, 3.6, -12.9])")

                myTests().main()

        .. tab:: Answer

            .. activecode:: funct_list_writecode4a
                :optional:

                def range_given_list(list_of_nums):
                    list_of_nums.sort()
                    # Another way to get range_value: range_value = list_of_nums[len(list_of_nums) - 1] - list_of_nums[0]
                    range_value = list_of_nums[-1] - list_of_nums[0]
                    return range_value


#.
   .. tabbed:: funct_list_writecode5

        .. tab:: Question

            .. activecode:: funct_list_writecode5q
                :practice: T
                :autograde: unittest

                Write a function called ``remove_indices_after_first_max_value`` that takes in a parameter ``num_list`` and 
                returns a ``new_num_list`` with values up to the max value of the list. For example, ``remove_indices_after_first_max_value([200, 10, 5, 200])``
                would return ``[5, 10, 5, 200]``.
                ~~~~
                def remove_indices_after_first_max_value(num_list):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(remove_indices_after_first_max_value([200, 10, 5, 200]),[200],"remove_indices_after_first_max_value([200, 10, 5, 200])")
                        self.assertEqual(remove_indices_after_first_max_value([5, 13, 0, -201, 200, 10, 5, 200]),[5, 13, 0, -201, 200],"remove_indices_after_first_max_value([5, 13, 0, -201, 200, 10, 5, 200])")
                        self.assertEqual(remove_indices_after_first_max_value([5.6, 7.9, 11.3, 10, 200.1, 10, 5, 200]),[5.6, 7.9, 11.3, 10, 200.1],"remove_indices_after_first_max_value([5.6, 7.9, 11.3, 10, 200.1, 10, 5, 200])")
                        self.assertEqual(remove_indices_after_first_max_value([100, 10, 5, 200]),[100, 10, 5, 200],"remove_indices_after_first_max_value([100, 10, 5, 200])")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_list_writecode5a
                :optional:

                def remove_indices_after_first_max_value(num_list):
                    index_value = num_list.index(max(num_list)) + 1
                    new_num_list = num_list[:index_value]
                    return new_num_list


#.
   .. tabbed:: funct_list_writecode6

        .. tab:: Question

            .. activecode:: funct_list_writecode6q
                :practice: T
                :autograde: unittest

                Write a function called ``transformed_and_combined_list`` that takes in two parameters, ``list_one`` and ``list_two``.
                Given that ``list_one`` will be ``[5, 20, 3, 15, 200, 0, 17]`` and ``list_two`` will be ``['Hello', 'Bye', 'How are you?']``, 
                how would you would transform them into ``['Bye', 'Hello', 'How are you?', 0, 200, 15, 3, 20, 5]``?
                Hint: Use list methods (e.g., pop, sort, append, reverse, and extend). 
                ~~~~
                def transformed_and_combined_list(list_one, list_two):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(transformed_and_combined_list([5, 20, 3, 15, 200, 0, 17], ['Hello', 'Bye', 'How are you?']),['Bye', 'Hello', 'How are you?', 0, 200, 15, 3, 20, 5],"transformed_and_combined_list([5, 20, 3, 15, 200, 0, 17], ['Hello', 'Bye', 'How are you?'])")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_list_writecode6a
                :optional:

                def transformed_and_combined_list(list_one, list_two):
                    #removes 17 from list_one
                    list_one.pop(-1)
                    #removes 0 from list_one and assigns it to a variable
                    returned_value = list_one.pop(-1)
                    #sorts list_two alphabetically
                    list_two.sort()
                    #adds popped and saved value to list_two
                    list_two.append(returned_value)
                    #reverses the order of list_one
                    list_one.reverse()
                    #adds contents of list_one to the end of list_two
                    list_two.extend(list_one)
                    return list_two