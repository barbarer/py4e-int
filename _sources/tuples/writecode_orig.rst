Write Code Questions
---------------------


.. activecode:: tup_writecode2
    :practice: T
    :autograde: unittest

    Write a function called ``check_third_element`` that takes in a list of tuples, ``lst_tups`` as a parameter. Tuples must have at least 3 items.
    Return a new list that contains the third element of each tuple. For example, ``check_third_element([(1,2.2,3.3),(-1,-2,-3),(0,0,0)])``
    would return ``[3.3, -3, 0]``.
    ~~~~
    def check_third_element(lst_tups):
        # write code here

    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(check_third_element([(1,2.2,3.3),(-1,-2,-3),(0,0,0)]), [3.3, -3, 0], "check_third_element([(1,2.2,3.3),(-1,-2,-3),(0,0,0)])")
            self.assertEqual(check_third_element([(1,2,3),(1,2,3),(1,2,3),(1,2,3)]), [3, 3, 3, 3], "check_third_element([(1,2,3),(1,2,3),(1,2,3),(1,2,3)])")
            self.assertEqual(check_third_element([('hi','hello','how are you'),('bye','goodbye','farewell')]), ['how are you', 'farewell'], "check_third_element([('hi','hello','how are you'),('bye','goodbye','farewell')])")



    MyTests().main()


.. parsonsprob:: tup_writecode2_pp
    :practice: T
    :adaptive:
    :numbered: left

    Create a function called ``check_third_element`` that takes in a list of tuples, ``lst_tups`` as a parameter. Tuples must have at least 3 items.
    Return a new list that contains the third element of each tuple. For example, ``check_third_element([(1,2.2,3.3),(-1,-2,-3),(0,0,0)])``
    would return ``[3.3, -3, 0]``.
    -----
    def check_third_element(lst_tups):
    =====
        new_lst = []
    =====
        for item in lst_tups:
    =====
            new_lst.append(item[2])
    =====
            new_lst.append(item[3]) #paired
    =====
        return new_lst



.. activecode:: tup_writecode4
    :practice: T
    :autograde: unittest

    Write a function called ``interchange_values`` that takes in a tuple with two values as a parameter, ``t`` and returns a tuple which interchanges the values of ``t``.
    For example, ``interchange_values(("LeBron", "James"))`` would return ``("James", "LeBron")``.
    ~~~~
    def interchange_values(t):
        # write code here

    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(interchange_values(('LeBron', 'James')), ('James', 'LeBron'), "interchange_values(('LeBron', 'James'))")
            self.assertEqual(interchange_values(('Hi', 'Hello')), ('Hello', 'Hi'), "interchange_values(('Hi', 'Hello'))")
            self.assertEqual(interchange_values((1, 2)), (2, 1), "interchange_values((1, 2))")
            self.assertEqual(interchange_values((True, False)), (False, True), "interchange_values((True, False))")

    MyTests().main()


.. parsonsprob:: tup_writecode4_pp
    :practice: T
    :adaptive:
    :numbered: left

    Create a function called ``interchange_values`` that takes in a tuple with two values as a parameter, ``t`` and returns a tuple which interchanges the values of ``t``.
    For example, ``interchange_values(("LeBron", "James"))`` would return ``("James", "LeBron")``.
    -----
    def interchange_values(t):
    =====
        lst = list(t)
    =====
        lst = t.list() #paired
    =====
        new_t = (lst[1], lst[0])
    =====
        return new_t






.. activecode:: tup_writecode6
    :practice: T
    :autograde: unittest

    Write a function called ``my_data`` that takes in an integer, ``int_value`` as a parameter. Return tuple that contains one elements,
    the integer in the parameter. For example, ``my_data(99)`` would return ``(99,)``.
    ~~~~
    def my_data(int_value):
        # write code here

    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(my_data(99), (99,), "my_data(99)")
            self.assertEqual(my_data(0), (0,), "my_data(0)")
            self.assertEqual(my_data(-1), (-1,), "my_data(-1)")

    MyTests().main()


.. parsonsprob:: tup_writecode6_pp
    :practice: T
    :adaptive:
    :numbered: left

    Create a function called ``my_data`` that takes in an integer, ``int_value`` as a parameter. Return tuple that contains one elements,
    the integer in the parameter. For example, ``my_data(99)`` would return ``(99,)``.
    -----
    def my_data(int_value):
    =====
        t = (int_value, )
    =====
        t = (int_value) #paired
    =====
        return t



.. activecode:: tup_writecode8
    :practice: T
    :autograde: unittest

    Write a function called ``info`` with the following required parameters: name, age, birth_year, year_in_college, and hometown. The
    function should return a tuple that contains all the passed information. For example, ``info('Troy', 24, 1996, 'Sophomore', 'Ann Arbor')``
    should return ``('Troy', 24, 1996, 'Sophomore', 'Ann Arbor')``.
    ~~~~
    def info(name, age, birth_year, year_in_college, hometown):
        # write code here

    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(info('Troy', 24, 1996, 'Sophomore', 'Ann Arbor'), ('Troy', 24, 1996, 'Sophomore', 'Ann Arbor'), "Testing that the function correctly outputs the tuple.")
            self.assertEqual(info('Jane', 18, 2002, 'Freshman', 'Manhattan'), ('Jane', 18, 2002, 'Freshman', 'Manhattan'), "Testing that the function correctly outputs the tuple.")

    MyTests().main()


.. parsonsprob:: tup_writecode8_pp
    :practice: T
    :adaptive:
    :numbered: left

    Create a function called ``info`` with the following required parameters: name, age, birth_year, year_in_college, and hometown. The
    function should return a tuple that contains all the passed information. For example, ``info('Troy', 24, 1996, 'Sophomore', 'Ann Arbor')``
    should return ``('Troy', 24, 1996, 'Sophomore', 'Ann Arbor')``.
    -----
    def info(name, age, birth_year, year_in_college, hometown):
    =====
        tup = (name, age, birth_year, year_in_college, hometown)
    =====
        tup = [name, age, birth_year, year_in_college, hometown] #paired
    =====
        return tup





.. activecode:: tup_writecode10
    :autograde: unittest
    :practice: T

    Write a function ``tuplize()`` that accepts two inputs and returns a tuple containing those inputs in order.
    For example, ``tuplize('Stephen', 'Curry')`` would return ``('Stephen', 'Curry')``.
    ~~~~
    def tuplize(val1, val2):
        # write code here
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(tuplize('Stephen', 'Curry'), ('Stephen', 'Curry'), "Testing that the function creates the correct tuple.")
            self.assertEqual(tuplize(1, 2), (1, 2), "Testing that the function creates the correct tuple.")

    MyTests().main()


.. parsonsprob:: tup_writecode10_pp
    :practice: T
    :adaptive:
    :numbered: left

    Create a function ``tuplize()`` that accepts two inputs and returns a tuple containing those inputs in order.
    For example, ``tuplize('Stephen', 'Curry')`` would return ``('Stephen', 'Curry')``.
    -----
    def tuplize(val1, val2):
    =====
        tup = (val1, val2)
    =====
        tup = (val1[0], val2[0]) #paired
    =====
        return tup
