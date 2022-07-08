Functions and Loops Mixed-Up Code Questions
--------------------------------------------

.. parsonsprob:: Functions_Loops_MixedUpCode_1
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``nums_x_to_y`` that takes in two integer parameter, ``x`` and ``y`` and uses a for loop to create and
    return a list with numbers ``x`` to ``y``. Note: ignore cases when ``y`` is not larger than ``x``. For example, ``nums_x_to_y(1,10)``
    would return ``[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]``.
    -----
    def nums_x_to_y(x,y):
    =====
    def nums_x_to_y: #paired
    =====
        x_to_y_list = []
    =====
        for num in range(x, y + 1):
    =====
        for num in range(y): #paired
    =====
        for num in range(x, y): #paired
    =====
            x_to_y_list.append(num)
    =====
        return x_to_y_list

.. activecode:: Functions_Loops_MixedUpCode_1_ac
    :practice: T
    :autograde: unittest

    Write a function called ``nums_x_to_y`` that takes in two integer parameter, ``x`` and ``y`` and uses a for loop to create and
    return a list with numbers ``x`` to ``y``. Note: ignore cases when ``y`` is not larger than ``x``. For example, ``nums_x_to_y(1,10)``
    would return ``[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]``.
    ~~~~
    def nums_x_to_y():
        # write code here

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(nums_x_to_y(1,10),[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],"nums_x_to_y(1,10)")
            self.assertEqual(nums_x_to_y(3,4),[3, 4],"nums_x_to_y(3,4)")
            self.assertEqual(nums_x_to_y(2,9),[2, 3, 4, 5, 6, 7, 8, 9],"nums_x_to_y(2,9)")

    myTests().main()

.. parsonsprob:: Functions_Loops_MixedUpCode_2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``count_by_x_to_y`` that takes in two integer parameter, ``x`` and ``y`` and uses a for loop to create and return
    a list with numbers ``x`` to ``y``. Note: ignore cases when ``y`` is not larger than ``x``. Use a for loop to create and return a
    list with numbers up to ``y`` by skip counting by ``x``. For example, ``count_by_x_to_y(5,20)`` should return ``[0, 5, 10, 15, 20]``.
    -----
    def count_by_x_to_y(x,y):
    =====
    def count_by_x_to_y: #paired
    =====
        x_to_y_lst = []
    =====
        for num in range (0, y + 1, x):
    =====
        for num in range (0, y, x+1): #paired
    =====
            x_to_y_lst.append(num)
    =====
            x_to_y_lst += num #paired
    =====
        return x_to_y_lst


.. activecode:: Functions_Loops_MixedUpCode_2_ac
    :practice: T
    :autograde: unittest

    Write a function ``count_by_x_to_y`` that takes in two integer parameter, ``x`` and ``y`` and uses a for loop to create and return
    a list with numbers ``x`` to ``y``. Note: ignore cases when ``y`` is not larger than ``x``. Use a for loop to create and return a
    list with numbers up to ``y`` by skip counting by ``x``. For example, ``count_by_x_to_y(5,20)`` should return ``[0, 5, 10, 15, 20]``.
    ~~~~
    def count_by_x_to_y():
        # write code here

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(count_by_x_to_y(5,20),[0, 5, 10, 15, 20],"count_by_x_to_y(5,20)")
            self.assertEqual(count_by_x_to_y(2,10),[0, 2, 4, 6, 8, 10],"count_by_x_to_y(2,10)")
            self.assertEqual(count_by_x_to_y(1,10),[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],"count_by_x_to_y(1,10)")
            self.assertEqual(count_by_x_to_y(5,6),[0, 5],"count_by_x_to_y(5,6)")

    myTests().main()



.. parsonsprob:: Functions_Loops_MixedUpCode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``countdown`` that takes in one integer parameter ``seconds`` and creates a list of numbers that counts down from
    seconds to 1, and then returns that list. Note: ``seconds`` must be greater than or equal to 1. For example, ``countdown(3)`` would return ``[3, 2, 1]``.
    -----
    def countdown(seconds):
    =====
    def countdown(): #paired
    =====
        countdown_lst = []
    =====
        while seconds > 0:
    =====
            countdown_lst.append(seconds)
    =====
            seconds -= 1
    =====
        return countdown_lst


.. activecode:: Functions_Loops_MixedUpCode_3_ac
    :practice: T
    :autograde: unittest

    Write a function called ``countdown`` that takes in one integer parameter ``seconds`` and creates a list of numbers that counts down from
    seconds to 1, and then returns that list. Note: ``seconds`` must be greater than or equal to 1. For example, ``countdown(3)`` would return ``[3, 2, 1]``.
    ~~~~
    # write code here

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(countdown(3),[3, 2, 1],"countdown(3)")
            self.assertEqual(countdown(11),[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],"countdown(11)")
            self.assertEqual(countdown(4),[4, 3, 2, 1],"countdown(4)")

    myTests().main()


.. parsonsprob:: Functions_Loops_MixedUpCode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``add_odds_or_floor_division`` that takes in a parameter ``num_list`` and loops through the ``num_list``.
    If the number in ``num_list`` is odd, it gets added to ``result``. Otherwise, it gets divided from the ``result``, having the ``result`` be the floor value.
    Then, return ``result``. For example, ``add_odds_or_floor_division([-3, -5, -2, -9, 7.5, 10001, -5.3])`` would return -1887.0.
    -----
    def add_odds_or_floor_division(num_list):
    =====
    def add_odds_or_floor_division(): #paired
    =====
        result = 0
    =====
        for num in num_list:
    =====
            if num % 2 == 1:
    =====
            if num / 2 == 1: #paired
    =====
                result += num
    =====
            else:
    =====
                result //= num
    =====
                result /= num #paired
    =====
        return result


.. activecode:: Functions_Loops_MixedUpCode_4_ac
    :practice: T
    :autograde: unittest

    Write a function ``add_odds_or_floor_division`` that takes in a parameter ``num_list`` and loops through the ``num_list``.
    If the number in ``num_list`` is odd, it gets added to ``result``. Otherwise, it gets divided from the ``result``, having the ``result`` be the floor value.
    Then, return ``result``. For example, ``add_odds_or_floor_division([-3, -5, -2, -9, 7.5, 10001, -5.3])`` would return -1887.0.
    ~~~~
    # write code here

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(add_odds_or_floor_division([3, 5, 10, 8, 20, 15]),15,"add_odds_or_floor_division([3, 5, 10, 8, 20, 15])")
            self.assertEqual(add_odds_or_floor_division([3, 5, 2, 9, 7, 10, 2, 1, 15]),17,"add_odds_or_floor_division([3, 5, 2, 9, 7, 10, 2, 1, 15])")
            self.assertAlmostEqual(add_odds_or_floor_division([-3, -5, -2, -9, 7.5, 10001, -5.3]),-1887.0,1,"add_odds_or_floor_division([-3, -5, -2, -9, 7.5, 10001, -5.3])")

    myTests().main()


.. parsonsprob:: Functions_Loops_MixedUpCode_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``strings_chars_less_than_len`` that takes in a ``strings_list``
    and returns a sorted new list with strings that are shorter in length than the original list.
    For example, ``strings_chars_less_than_len(['hello', 'bye', 'me', 'mississippi', 'miss'])`` would return ['bye', 'me', 'miss'].
    -----
    def strings_chars_less_than_len(strings_list):
    =====
    Def strings_chars_less_than_len(string_list): #paired
    =====
        new_strings_list = []
    =====
        for string in strings_list:
    =====
            if len(string) < len(strings_list):
    =====
            if string < len(strings_list): #paired
    =====
                new_strings_list.append(string)
    =====
            else:
    =====
                continue
    =====
                break #paired
    =====
        return sorted(new_strings_list)
    =====
        return new_strings_list.sort() #paired


.. activecode:: Functions_Loops_MixedUpCode_5_ac
    :practice: T
    :autograde: unittest

    Create a function ``strings_chars_less_than_len`` that takes in a ``strings_list``
    and returns a sorted new list with strings that are shorter in length than the original list.
    For example, ``strings_chars_less_than_len(['hello', 'bye', 'me', 'mississippi', 'miss'])`` would return ['bye', 'me', 'miss'].
    ~~~~
    # write code here

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(strings_chars_less_than_len(['hello', 'bye', 'me', 'mississippi', 'miss']),['bye', 'me', 'miss'],"strings_chars_less_than_len(['hello', 'bye', 'me', 'mississippi', 'miss'])")
            self.assertEqual(strings_chars_less_than_len(['hi', 'bye', 'Run', 'When', 'Win', 'compare', 'python']),['Run', 'When', 'Win', 'bye', 'hi', 'python'],"strings_chars_less_than_len(['hi', 'bye', 'Run', 'When', 'Win', 'compare', 'python'])")


    myTests().main()


.. parsonsprob:: Functions_Loops_MixedUpCode_6
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``print_lists(nums1, nums2)`` that takes two lists of numbers with the same length, ``nums1`` and ``nums2``,
    and returns a list of strings in the form: "Num1: num1, Num2: num2" for each pair of items in the two lists.
    For example, ``print_lists([3, 2], [8, 4])`` would return ``["Num1: 3, Num2: 8", "Num1: 2, Num2: 4"]``.
    -----
    def print_lists(nums1, nums2):
    =====
        out_list = []
    =====
        for i in range(len(nums1)):
    =====
        for i in range(nums1): #paired
    =====
        for val1 in nums1:
            for val2 in nums2: #paired
    =====
            val1 = nums1[i]
            val2 = nums2[i]
    =====
            out = "Num1: " + str(val1) + ", Num2: " + str(val2)
    =====
            out = "Num1: " + val1 + ", Num2: " + val2 #paired
    =====
            out_list.append(out)
    =====
        return out_list

.. activecode:: Functions_Loops_MixedUpCode_6_ac
    :practice: T
    :autograde: unittest

    Write a function ``print_lists(nums1, nums2)`` that takes two lists of numbers with the same length, ``nums1`` and ``nums2``,
    and returns a list of strings in the form: "Num1: num1, Num2: num2" for each pair of items in the two lists.
    For example, ``print_lists([3, 2], [8, 4])`` would return ``["Num1: 3, Num2: 8", "Num1: 2, Num2: 4"]``.
    ~~~~
    # write code here

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(print_lists([3, 2], [8, 4]),["Num1: 3, Num2: 8", "Num1: 2, Num2: 4"],"print_lists([3, 2], [8, 4])")
            self.assertEqual(print_lists([1], [2]),["Num1: 1, Num2: 2"],"print_lists([1], [2])")
            self.assertEqual(print_lists([3, 2, 1], [9, 8, 7]),["Num1: 3, Num2: 9", "Num1: 2, Num2: 8", "Num1: 1, Num2: 7"],"print_lists([3, 2, 1], [9, 8, 7])")


    myTests().main()

.. parsonsprob:: Functions_Loops_MixedUpCode_7
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``sum_lists(nums1, nums2)`` that takes two lists of numbers with the same length, ``nums1`` and ``nums2``,
    and returns a list of the totals of the two numbers for each pair of items in the two lists.
    For example, ``sum_lists([3, 2], [8, 4])`` would return ``[11, 6]``.
    -----
    def sum_lists(nums1, nums2):
    =====
        out_list = []
    =====
        for i in range(len(nums1)):
    =====
        for i in range(nums1): #paired
    =====
        for val1 in nums1:
            for val2 in nums2: #paired
    =====
            val1 = nums1[i]
            val2 = nums2[i]
    =====
            total = val1 + val2
    =====
            out_list.append(total)
    =====
            out_list += total #paired
    =====
        return out_list

.. activecode:: Functions_Loops_MixedUpCode_7_ac
    :practice: T
    :autograde: unittest

    Write a function ``sum_lists(nums1, nums2)`` that takes two lists of numbers with the same length, ``nums1`` and ``nums2``,
    and returns a list of the totals of the two numbers for each pair of items in the two lists.
    For example, ``sum_lists([3, 2], [8, 4])`` would return ``[11, 6]``.
    ~~~~
    # write code here

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(sum_lists([3, 2], [8, 4]),[11, 6],"sum_lists([3, 2]")
            self.assertEqual(sum_lists([1], [2]),[3],"sum_lists([1], [2])")
            self.assertEqual(sum_lists([3, 2, 1], [9, 8, 7]),[12, 10, 8],"sum_lists([3, 2, 1], [9, 8, 7])")


    myTests().main()
