Functions and Lists Mixed-Up Code Questions
--------------------------------------------

.. parsonsprob:: functions_lists_mixedupcode_1
    :adaptive:
    :numbered: left
    :practice: T

    Create a function called ``second_half`` that takes in ``lst`` as a parameter and returns the second half of ``lst``.
    For example, ``second_half([1])`` should return ``[1]``, ``second_half([1, 2, 3])`` should return ``[2, 3]``, and ``second_half([1, 2, 3, 4])``
    should return ``[3, 4]``.
    -----
    def second_half(lst):
    =====
        return lst[(len(lst) // 2):]
    =====
        return lst[(len(lst) / 2):] #paired
    =====
        return lst[(len(lst) / 2):-1] #paired
    =====
        return lst[(len(lst) // 2):(len(lst) - 1)] #paired
    =====
        return lst[(len(lst) % 2):len(lst)] #paired


.. activecode:: functions_lists_mixedupcode_1_ac
   :practice: T
   :autograde: unittest

   Write a function called ``second_half`` that takes in ``lst`` as a parameter and returns the second half of ``lst``.
   For example, ``second_half([1])`` should return ``[1]``, ``second_half([1, 2, 3])`` should return ``[2, 3]``, and ``second_half([1, 2, 3, 4])``
   should return ``[3, 4]``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(second_half([1, 2, 3]),[2, 3],"second_half([1, 2, 3])")
           self.assertEqual(second_half([1]),[1],"second_half([1])")
           self.assertEqual(second_half([1, 2, 3, 4]),[3, 4],"second_half([1, 2, 3, 4])")
           self.assertEqual(second_half(['hello', 'many', False, True, 2, 3, 'happy']),[True, 2, 3, 'happy'],"second_half(['hello', 'many', False, True, 2, 3, 'happy'])")


   myTests().main()


.. parsonsprob:: functions_lists_mixedupcode_2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``sum_of_split_num`` that takes in ``str_num_with_hyphens`` as a parameter and returns the sum of the integers that
    are split up by hyphens. For example, ``sum_of_split_num('978-876-4908')`` should return ``6762`` because 978 + 876 + 4908 = 6762.
    (Note: Integers are 0 or greater.)
    -----
    def sum_of_split_num(str_num_with_hyphens):
    =====
        num_without_hyphens = str_num_with_hyphens.split('-')
    =====
        num_without_hyphens = str_num_with_hyphens.split() #paired
    =====
        map_object_to_ints = map(int, num_without_hyphens)
    =====
        lst_of_ints = list(map_object_to_ints)
    =====
        return sum(lst_of_ints)
    =====
        return sum(lst_of_ints) / 2 #paired
    =====
        return lst_of_ints.sum() #paired


.. activecode:: functions_lists_mixedupcode_2_ac
   :practice: T
   :autograde: unittest

   Write a function called ``sum_of_split_num`` that takes in ``str_num_with_hyphens`` as a parameter and returns the sum of the integers that
   are split up by hyphens. For example, ``sum_of_split_num('978-876-4908')`` should return ``6762`` because 978 + 876 + 4908 = 6762. (Note: Integers
   are 0 or greater.)
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(sum_of_split_num('978-876-4908'),6762,"sum_of_split_num('978-876-4908')")
           self.assertEqual(sum_of_split_num('000-05746-28736'),34482,"sum_of_split_num('000-05746-28736')")


   myTests().main()


.. parsonsprob:: functions_lists_mixedupcode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``sort_descending`` that takes in ``lst_of_nums`` as a parameter and returns ``lst_of_nums`` in descending order.
    For example, ``sort_descending([100, 2000, -50])`` should return ``[2000, 100, -50]``.
    -----
    def sort_descending(lst_of_nums):
    =====
        lst_of_nums.sort(reverse=True)
    =====
        lst_of_nums.sort(reverse=False) #paired
    =====
        lst_of_nums.sort() #paired
    =====
        lst_of_nums = lst_of_nums.sort(reverse=True) #paired
    =====
        return lst_of_nums
    =====
        return sorted(lst_of_nums, reverse=False) #paired
    =====
        return sorted(lst_of_nums) #paired
    =====
        return lst_of_nums.sort(reverse=True) #paired


.. activecode:: functions_lists_mixedupcode_3_ac
   :practice: T
   :autograde: unittest

   Write a function called ``sort_descending`` that takes in ``lst_of_nums`` as a parameter and returns ``lst_of_nums`` in descending order.
   For example, ``sort_descending([100, 2000, -50])`` should return ``[2000, 100, -50]``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(sort_descending([100, 2000, -50]),[2000, 100, -50],"sort_descending([100, 2000, -50])")
           self.assertEqual(sort_descending([83, 0, -2000]),[83, 0, -2000],"sort_descending([83, 0, -2000])")
           self.assertEqual(sort_descending([-83]),[-83],"sort_descending([-83])")


   myTests().main()


.. parsonsprob:: functions_lists_mixedupcode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``extend_two_lists_sort`` that takes in ``lst1`` and ``lst2`` as parameters, sorts lst1 and then lst2, and extends ``lst1`` with ``lst2``.
    For example, ``extend_two_lists_sort(['string', 'hello'], ['my', 'goodness'])`` should return ``['hello', 'string', 'goodness', 'my']``.
    -----
    def extend_two_lists_sort(lst1, lst2):
    =====
        lst1.sort()
    =====
        sorted(lst1) #paired
    =====
        lst2.sort()
    =====
        sorted(lst2) #paired
    =====
        lst1.extend(lst2)
    =====
        lst1.append(lst2) #paired
    =====
        return lst1
    =====
        return lst1.extend(lst2) #paired
    =====
        return lst1.extend(lst2).sort() #paired
    =====
        return sorted(lst1.extend(lst2)) #paired


.. activecode:: functions_lists_mixedupcode_4_ac
   :practice: T
   :autograde: unittest

   Write a function called ``extend_two_lists_sort`` that takes in ``lst1`` and ``lst2`` as parameters, sorts both lists, and extends ``lst1`` with ``lst2``.
   For example, ``extend_two_lists_sort(['string', 'hello'], ['my', 'goodness'])`` should return ``['hello', 'string', 'goodness', 'my']``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(extend_two_lists_sort(['string', 'hello'], ['my', 'goodness']),['hello', 'string', 'goodness', 'my'],"extend_two_lists_sort(['string', 'hello'], ['my', 'goodness'])")
           self.assertEqual(extend_two_lists_sort([1, -5, 0], ['my', 'hello']),[-5, 0, 1, 'hello', 'my'],"extend_two_lists_sort([1, -5, 0], ['my', 'hello'])")
           self.assertEqual(extend_two_lists_sort([1, -5, 0], [8000, -23, -1, 0]),[-5, 0, 1, -23, -1, 0, 8000],"extend_two_lists_sort([1, -5, 0], [8000, -23, -1, 0])")

   myTests().main()


.. parsonsprob:: functions_lists_mixedupcode_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``sort_and_get_median_num`` that takes in ``lst_of_nums`` as a parameter, sorts ``lst_of_nums``, and returns the median
    of ``lst_of_nums``. For example, ``sort_and_get_median_num([200, -5, 0, 75, 80, 60])`` should return ``67.5``, and
    ``sort_and_get_median_num([200, -5, 0, 75, 80])`` should return ``75``.
    -----
    def sort_and_get_median_num(lst_of_nums):
    =====
        lst_of_nums.sort()
    =====
        if len(lst_of_nums) % 2 == 1:
    =====
            return lst_of_nums[len(lst_of_nums) // 2]
    =====
            return lst_of_nums[len(lst_of_nums) / 2] #paired
    =====
        else:
    =====
            sum_of_middle_two_nums = sum(lst_of_nums[len(lst_of_nums) // 2 - 1: len(lst_of_nums) // 2 + 1])
    =====
            sum_of_middle_two_nums = sum(lst_of_nums[len(lst_of_nums) // 2: len(lst_of_nums) // 2 + 2]) #paired
    =====
            sum_of_middle_two_nums = sum(lst_of_nums[len(lst_of_nums) // 2 - 2: len(lst_of_nums) // 2]) #paired
    =====
            sum_of_middle_two_nums = sum(lst_of_nums[len(lst_of_nums) / 2 - 1: len(lst_of_nums) / 2 + 1]) #paired
    =====
            mean_of_two_nums = sum_of_middle_two_nums / 2
    =====
            mean_of_two_nums = sum_of_middle_two_nums // 2 #paired
    =====
            return mean_of_two_nums


.. activecode:: functions_lists_mixedupcode_5_ac
   :practice: T
   :autograde: unittest

   Write a function called ``sort_and_get_median_num`` that takes in ``lst_of_nums`` as a parameter, sorts ``lst_of_nums``, and returns the median of ``lst_of_nums``.
   For example, ``sort_and_get_median_num([200, -5, 0, 75, 80, 60])`` should return ``67.5``, and ``sort_and_get_median_num([200, -5, 0, 75, 80])`` should return ``75``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(sort_and_get_median_num([200, -5, 0, 75, 80]),75,"sort_and_get_median_num([200, -5, 0, 75, 80])")
           self.assertEqual(sort_and_get_median_num([200, -5, 0, 75, 80, 60]),67.5,"sort_and_get_median_num([200, -5, 0, 75, 80, 60])")
           self.assertEqual(sort_and_get_median_num([200]),200,"sort_and_get_median_num([200])")
           self.assertEqual(sort_and_get_median_num([200, -5]),97.5,"sort_and_get_median_num([200, -5])")


   myTests().main()
