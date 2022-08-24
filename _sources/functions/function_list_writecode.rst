Functions and Lists Write Code Questions
-----------------------------------------
#.
    .. tabbed:: funct_list_writecode1

        .. tab:: Question

            .. activecode:: funct_list_writecode1q
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

                Write a function called ``average_of_num_list`` that takes in a parameter ``num_list`` and returns the average of all the numbers in num_list.
                For example, ``average_of_num_list([0, 20.8, 80, 5])`` would return ``26.45``.
                ~~~~
                def average_of_num_list(num_list):
                    return sum(num_list) / len(num_list)


#.

    .. activecode:: funct_list_writecode2q
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



#.
    .. tabbed:: funct_list_writecode3

        .. tab:: Question

            .. activecode:: funct_list_writecode3q
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

                Write a function called ``remove_min_value`` that takes in a parameter ``num_list`` and returns a ``num_list`` without the
                minimum value from ``num_list``. For example, ``remove_min_value([20, 4, 1203, 7482, 3])`` would return ``[20, 4, 1203, 7482]``.
                ~~~~
                def remove_min_value(num_list):
                    num_list.remove(min(num_list))
                    return num_list


#.

    .. activecode:: funct_list_writecode4q
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



#.
   .. tabbed:: funct_list_writecode5

        .. tab:: Question

            .. activecode:: funct_list_writecode5q
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

                Write a function called ``remove_indices_after_first_max_value`` that takes in a parameter ``num_list`` and
                returns a ``new_num_list`` with values up to the max value of the list. For example, ``remove_indices_after_first_max_value([200, 10, 5, 200])``
                would return ``[5, 10, 5, 200]``.
                ~~~~
                def remove_indices_after_first_max_value(num_list):
                    index_value = num_list.index(max(num_list)) + 1
                    new_num_list = num_list[:index_value]
                    return new_num_list


#.

    .. activecode:: funct_list_writecode6q
        :autograde: unittest

        Write a function called ``transform_and_combine`` that takes in two parameters, ``list_one``, which must have at least one element, and ``list_two``.
        Remove the last element from ``list_one``, then reverse the list. Sort ``list_two``, then extend ``list_two`` with ``list_one``, and return ``list_two``.
        Hint: Use list methods (e.g., pop, sort, append, reverse, and extend). For example, ``transform_and_combine([5, 20, 3, 15, 200, 0, 17], ['Hello', 'Bye', 'How are you?'])``
        would return ``['Bye', 'Hello', 'How are you?', 0, 200, 15, 3, 20, 5]``.

        ~~~~
        def transform_and_combine(list_one, list_two):
            # write code here

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(transform_and_combine([5, 20, 3, 15, 200, 0, 17], ['Hello', 'Bye', 'How are you?']),['Bye', 'Hello', 'How are you?', 0, 200, 15, 3, 20, 5],"transform_and_combine([5, 20, 3, 15, 200, 0, 17], ['Hello', 'Bye', 'How are you?'])")
                self.assertEqual(transform_and_combine(['Susan', 'Sara', 'Sammy', 'Sarah'], ['Hello', 'Bye', 'How are you?']),['Bye', 'Hello', 'How are you?', 'Sammy', 'Sara', 'Susan'],"transform_and_combine(['Susan', 'Sara', 'Sammy', 'Sarah'], ['Hello', 'Bye', 'How are you?'])")
                self.assertEqual(transform_and_combine([5, 13, 0, -201, 200, 10, 5, 200], [200, 10, 5, 200]),[5, 10, 200, 200, 5, 10, 200, -201, 0, 13, 5],"transform_and_combine([5, 13, 0, -201, 200, 10, 5, 200], [200, 10, 5, 200])")
                self.assertEqual(transform_and_combine([1], [4]),[4],"transform_and_combine([1], [4]")
                self.assertEqual(transform_and_combine([1], []),[],"transform_and_combine([1], []")



        myTests().main()
