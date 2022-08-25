Write Code Questions
---------------------



.. activecode::  list_writeItemsq_v2_ac
    :autograde: unittest

    Write a function ``item_lister`` that takes in a list of at least three values, ``items``, as a parameter. Set the first value to "First item", set
    the second value to the original first value, and set the third value to its current value plus one (rounded to two decimals). (Note: the third value of ``items``
    will only be numerical.) Then, return the modified list. For example, ``itemLister([2,4,6.222,8])`` would return ``['First item', 2, 7.22, 8]``.
    ~~~~
    def itemLister(items):
        # write code here

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):

            res = itemLister([2,4,6.222,8])
            self.assertEqual(res[0],'First item', "testing first item in list from itemLister([2,4,6.222,8])")
            self.assertEqual(res[1],2, "testing second item in list from itemLister([2,4,6.222,8])")
            self.assertAlmostEqual(res[2],7.22, 2, "testing third item in list from itemLister([2,4,6.222,8])")
            res = itemLister([-2.2,'hi',-2.222])
            self.assertEqual(res[0],'First item', "testing first item in list from itemLister([-2.2,'hi',-2.222])")
            self.assertAlmostEqual(res[1],-2.2,1, "testing second item in list from itemLister([-2.2,'hi',-2.222])")
            self.assertAlmostEqual(res[2],-1.22, 2, "testing third item in list from itemLister([-2.2,'hi',-2.222])")


    myTests().main()


.. parsonsprob:: list_writeItemsq_v2_pp
    :practice: T
    :adaptive:
    :numbered: left

    Create a function ``item_lister`` that takes in a list of at least three values, ``items``, as a parameter. Set the first value to "First item", set
    the second value to the original first value, and set the third value to its current value plus one (rounded to two decimals). (Note: the third value of ``items``
    will only be numerical.) Then, return the modified list. For example, ``itemLister([2,4,6.222,8])`` would return ``['First item', 2, 7.22, 8]``.
    -----
    def itemLister(items):
    =====
        new_list = []
    =====
        new_list.append("First item")
    =====
        new_list.append(items[0])
    =====
        new_list.append(new_list[0]) #paired
    =====
        new_list.append(round(items[2] + 1, 2))
    =====
        for item in items[3:]:
    =====
            new_list.append(item)
    =====
        return new_list





.. activecode:: list_write23_ac
    :autograde: unittest

    Write the function ``change_index3`` that takes in one parameter, ``lst``, and assigns the value at index 3 of ``lst`` to '200' and then returns ``lst``.
    For example, ``change_index3(['hi', 'goodbye', 'python', '106', '506'])`` would return ``['hi', 'goodbye', 'python', '200', '506']`` and
    ``change_index3([1, 2, 0, -5, 4])`` would return ``[1, 2, 0, '200', 4]``.
    ~~~~
    def change_index3(lst):
        # write code here


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(change_index3(['hi', 'goodbye', 'python', '106', '506']), ['hi', 'goodbye', 'python', '200', '506'], "change_index3(['hi', 'goodbye', 'python', '106', '506'])")
            self.assertEqual(change_index3([1, 2, 0, -5, 4]), [1, 2, 0, '200', 4], "change_index3([1, 2, 0, -5, 4])")
            self.assertEqual(change_index3([False, '2', 2.5, '200', -4]), [False, '2', 2.5, '200', -4], "change_index3([False, '2', 2.5, '200', -4]")


    myTests().main()


.. parsonsprob:: list_write23_pp
    :practice: T
    :adaptive:
    :numbered: left

    Create the function ``change_index3`` that takes in one parameter, ``lst``, and assigns the value at index 3 of ``lst`` to '200' and then returns ``lst``.
    For example, ``change_index3(['hi', 'goodbye', 'python', '106', '506'])`` would return ``['hi', 'goodbye', 'python', '200', '506']`` and
    ``change_index3([1, 2, 0, -5, 4])`` would return ``[1, 2, 0, '200', 4]``.
    -----
    def change_index3(lst):
    =====
        lst[3] = '200'
    =====
        lst[3] = 200 #paired
    =====
        return lst





.. activecode:: list_write5_ac
    :autograde: unittest

    Write a function ``countWords`` that takes in a list, ``lst``, as a parameter, and returns the amount of words that have a length of 5.
    For example, ``countWords(['hello', 'hi', 'good morning', 'three', 'kitty']`` should return ``3``.
    ~~~~
    def countWords(lst):
        # write code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(countWords(['hello', 'hi', 'good morning', 'three', 'kitty']),3,"countWords(['hello', 'hi', 'good morning', 'three', 'kitty'])")
            self.assertEqual(countWords(['two', 'three', 'four', 'five', 'six', 'seven']),2,"countWords(['two', 'three', 'four', 'five', 'six', 'seven'])")
            self.assertEqual(countWords(['these', 'those', 'there']),3,"countWords(['these', 'those', 'there'])")
            self.assertEqual(countWords(['the', 'an', 'a']),0,"countWords(['the', 'an', 'a'])")


    myTests().main()


.. parsonsprob:: list_write5_pp
    :practice: T
    :adaptive:
    :numbered: left

    Create a function ``countWords`` that takes in a list, ``lst``, as a parameter, and returns the amount of words that have a length of 5.
    For example, ``countWords(['hello', 'hi', 'good morning', 'three', 'kitty']`` should return ``3``.
    -----
    def countWords(lst):
    =====
        count = 0
    =====
        for item in lst:
    =====
        for item in lst[]: #paired
    =====
            if len(item) == 5:
    =====
                count += 1
    =====
        return count




.. activecode::  list_writeReverse_ac
    :autograde: unittest

    Write a function ``reverse`` that takes in one parameter, ``lst``, and returns the reverse of a passed list.
    For example, ``reverse[1,2,3]`` should return ``[3, 2, 1]``.
    ~~~~
    def reverse(lst):
        # write code here
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
              self.assertEqual(reverse([1,2,3,4,5]),[5,4,3,2,1],"reverse([1,2,3,4,5])")
              self.assertEqual(reverse([1,3,5,7,9]),[9,7,5,3,1],"reverse([1,3,5,7,9])")
              self.assertEqual(reverse([2,4,6,7,9]),[9,7,6,4,2],"reverse([2,4,6,7,9])")


    myTests().main()


.. parsonsprob:: list_writeReverse_pp
    :practice: T
    :adaptive:
    :numbered: left

    Create a function ``reverse`` that takes in one parameter, ``lst``, and returns the reverse of a passed list.
    For example, ``reverse[1,2,3]`` should return ``[3, 2, 1]``.
    -----
    def reverse(lst):
    =====
        lst.reverse()
    =====
        return lst.reverse() #paired
    =====
        return lst





.. activecode::  list_sortByLen_ac
    :autograde: unittest

    Write a function ``sort_by_length`` that takes in one parameter, a list of strings, ``lst``, and returns the list sorted
    by the length of the strings. For example, ``sort_by_length(["hello", "hi", "hey", "greetings"])`` would return ``['hi', 'hey', 'hello', 'greetings']``.
    ~~~~
    def sort_by_length(lst):
        # write code here

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
              self.assertEqual(sort_by_length(['hello', 'hi', 'hey', 'greetings']),['hi', 'hey', 'hello', 'greetings'],"sort_by_length(['hello', 'hi', 'hey', 'greetings'])")
              self.assertEqual(sort_by_length(['hello', 'hello']),['hello', 'hello'],"sort_by_length(['hello', 'hello'])")
              self.assertEqual(sort_by_length(['I', 'have', 'four', 'apples']),['I', 'have', 'four', 'apples'],"sort_by_length(['I', 'have', 'four', 'apples'])")

    myTests().main()


.. parsonsprob:: list_sortByLen_pp
    :practice: T
    :adaptive:
    :numbered: left

    Create a function ``reverse`` that takes in one parameter, ``lst``, and returns the reverse of a passed list.
    For example, ``reverse[1,2,3]`` should return ``[3, 2, 1]``.
    -----
    def sort_by_length(lst):
    =====
        lst.sort(key=len)
    =====
        return lst
