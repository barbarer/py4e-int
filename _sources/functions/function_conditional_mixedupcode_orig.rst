Functions and Conditionals Mixed-Up Code Questions
---------------------------------------------------

.. parsonsprob:: funct_conditional_mixedupcode_1
    :adaptive:
    :numbered: left
    :practice: T

    Create a function called ``get_grade`` that takes in a parameter ``percentage`` and returns a string variable called ``letter_grade``.  
    If the ``percentage`` is greater than 100, return ``"You can't get over 100."``. Otherwise, it should return ``'A'`` if the score is greater than or equal to 90, 
    ``'B'`` if greater than or equal to 80, ``'C'`` if greater than or equal to 70, ``'D'`` if greater than or equal to 60, and otherwise ``'E'``. 
    For example, ``get_grade(90)`` should return ``'A'``.
    -----
    def get_grade(percentage):
    =====
    def get_grade(percentage) #paired
    =====
        if percentage > 100:
    =====
            return "You can't get over 100."
    =====
            return 'You can't get over 100.' #paired
    =====
        elif percentage <= 100 and percentage >= 90:
    =====
            letter_grade = 'A'
    =====
            letter_grade == 'A' #paired
    =====
        elif percentage >= 80:
    =====
            letter_grade = 'B'
    =====
        elif percentage >= 70:
    =====
            letter_grade = 'C'
    =====
        elif percentage >= 60:
    =====
            letter_grade = 'D'
    =====
        else:
            letter_grade = 'E'
    =====
        return letter_grade


.. activecode:: funct_conditional_mixedupcode_1_ac
    :practice: T
    :autograde: unittest

    Write a function called ``get_grade`` that takes in a parameter ``percentage`` and returns a string variable called ``letter_grade``.  
    If the ``percentage`` is greater than 100, return ``"You can't get over 100."``. Otherwise, it should return ``'A'`` if the score is greater than or equal to 90, 
    ``'B'`` if greater than or equal to 80, ``'C'`` if greater than or equal to 70, ``'D'`` if greater than or equal to 60, and otherwise ``'E'``. 
    For example, ``get_grade(90)`` should return ``'A'``.
    ~~~~
    def get_grade(percentage):
        # write code here

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(get_grade(101),"You can't get over 100.","get_grade(101)")
            self.assertEqual(get_grade(100),"A","get_grade(100)")
            self.assertEqual(get_grade(95),"A","get_grade(95)")
            self.assertEqual(get_grade(90),"A","get_grade(90)")
            self.assertEqual(get_grade(89),"B","get_grade(89)")
            self.assertEqual(get_grade(80),"B","get_grade(80)")
            self.assertEqual(get_grade(79),"C","get_grade(79)")
            self.assertEqual(get_grade(70),"C","get_grade(70)")
            self.assertEqual(get_grade(69),"D","get_grade(69)")
            self.assertEqual(get_grade(60),"D","get_grade(60)")
            self.assertEqual(get_grade(59),"E","get_grade(59)")

    myTests().main()


.. parsonsprob:: funct_conditional_mixedupcode_2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``even_or_odd`` that takes in a parameter ``num``. If ``num`` is odd, return ``"This is odd."``, and if ``num`` is even, return ``"This is even." ``.
    For example, ``even_or_odd(-65)`` should return ``"This is odd."``. Note: For this function, ``num`` is solely an integer.
    -----
    def even_or_odd(num):
    =====
    Def even_or_odd(num): #paired
    =====
        if num % 2 == 0:
    =====
        if num % 2 = 1: #paired
    =====
        if num % 2 = 0: #paired
    =====
            return "This is even."
    =====
        else:
    =====
            return "This is odd."


.. activecode:: funct_conditional_mixedupcode_2_ac
    :practice: T
    :autograde: unittest

    Write a function called ``even_or_odd`` that takes in a parameter ``num``. If ``num`` is odd, return ``"This is odd."``, and if ``num`` is even, return ``"This is even." ``.
    For example, ``even_or_odd(-65)`` should return ``"This is odd."``. Note: For this function, ``num`` is solely an integer.
    ~~~~
    def even_or_odd(num):
        # write code here

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(even_or_odd(100),"This is even.","even_or_odd(100)")
            self.assertEqual(even_or_odd(58),"This is even.","even_or_odd(58)")
            self.assertEqual(even_or_odd(1002),"This is even.","even_or_odd(1002)")
            self.assertEqual(even_or_odd(199994),"This is even.","even_or_odd(199994)")
            self.assertEqual(even_or_odd(0),"This is even.","even_or_odd(0)")
            self.assertEqual(even_or_odd(6),"This is even.","even_or_odd(6)")
            self.assertEqual(even_or_odd(79),"This is odd.","even_or_odd(79)")
            self.assertEqual(even_or_odd(-65),"This is odd.","even_or_odd(-65)")
            self.assertEqual(even_or_odd(-43.0),"This is odd.","even_or_odd(-43.0)")

    myTests().main()


.. parsonsprob:: funct_conditional_mixedupcode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``which_quadrant`` that takes in parameters ``x`` and ``y`` and returns its corresponding quadrants in increasing order 
    ("Quadrant 1", "Quadrant 2", etc.). Refer to https://en.wikipedia.org/wiki/Quadrant_(plane_geometry) for quadrants on a coordinate 
    plane if needed. If coordinate is on the x or y axis, return ``"It's not in a quadrant."``. For example, ``which_quadrant(1, 100)`` 
    should return ``"Quadrant 1"``.
    -----
    def which_quadrant(x, y):
    =====
        if (x > 0) and (y > 0):
    =====
        if (x >= 0) and (y >= 0): #paired
    =====
            return "Quadrant 1"
    =====
        elif (x < 0) and (y > 0):
    =====
        elif (x <= 0) and (y >= 0): #paired
    =====
            return "Quadrant 2"
    =====
        elif (x < 0) and (y < 0):
    =====
        elif (x <= 0) and (y <= 0): #paired
    =====
            return "Quadrant 3"
    =====
        elif (x > 0) and (y < 0):
    =====
        elif (x >= 0) and (y <= 0): #paired
    =====
            return "Quadrant 4"
    =====
        else:
    =====
            return "It's not in a quadrant."
    =====
            return 'It's not in a quadrant.' #paired


.. activecode:: funct_conditional_mixedupcode_3_ac
    :practice: T
    :autograde: unittest

    Write a function called ``which_quadrant`` that takes in parameters ``x`` and ``y`` and returns its corresponding quadrants 
    ("Quadrant 1", "Quadrant 2", etc.). Refer to https://en.wikipedia.org/wiki/Quadrant_(plane_geometry) for quadrants on a coordinate 
    plane if needed. If coordinate is on the x or y axis, return ``"It's not in a quadrant."``. For example, ``which_quadrant(1, 100)`` 
    should return ``"Quadrant 1"``.
    ~~~~
    def which_quadrant(x, y):
        # write code here

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(which_quadrant(0, 0),"It's not in a quadrant.","which_quadrant(0, 0)")
            self.assertEqual(which_quadrant(0, 15),"It's not in a quadrant.","which_quadrant(0, 15)")
            self.assertEqual(which_quadrant(-200, 0),"It's not in a quadrant.","which_quadrant(-200, 0)")
            self.assertEqual(which_quadrant(11, 0),"It's not in a quadrant.","which_quadrant(11, 0)")
            self.assertEqual(which_quadrant(0, 10),"It's not in a quadrant.","which_quadrant(0, 10)")
            self.assertEqual(which_quadrant(1, 100),"Quadrant 1","which_quadrant(1, 100)")
            self.assertEqual(which_quadrant(-5, 20),"Quadrant 2","which_quadrant(-5, 20)")
            self.assertEqual(which_quadrant(-100, -85),"Quadrant 3","which_quadrant(-100, -85)")
            self.assertEqual(which_quadrant(2020.4, -4.5),"Quadrant 4","which_quadrant(2020.4, -4.5)")

    myTests().main()


.. parsonsprob:: funct_conditional_mixedupcode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``axis_or_origin`` that takes in parameters ``x`` and ``y``. If both coordinates aren't 0, 
    return ``"This coordinate is not on an axis. It's in a quadrant."``. If both coordinates are 0, return ``"This coordinate is the origin."``. 
    Lastly, if the coordinate isn't in a quadrant and isn't the origin, determine if the coordinate is on the x or y axis by returning
    ``"This coordinate is on the (y-axis or x-axis)."``. Refer to https://www.math.net/x-and-y-axis for information on axes if needed. 
    For example, ``axis_or_origin(500, 0)`` should return ``"This coordinate is on the x-axis."``.
    -----
    def axis_or_origin(x, y):
    =====
        if (x != 0) and (y != 0):
    =====
        if (x != 0) && (y != 0): #paired
    =====
        if (x != 0) or (y != 0): #paired
    =====
            return "This coordinate is not on an axis. It's in a quadrant."
    =====
        elif (x == 0) and (y == 0):
    =====
            return "This coordinate is the origin."
    =====
        elif x == 0:
    =====
        if x == 0: #paired
    =====
        elif x = 0: #paired
    =====
            return "This coordinate is on the y-axis."
    =====
        else:
    =====
            return "This coordinate is on the x-axis."


.. activecode:: funct_conditional_mixedupcode_4_ac
    :practice: T
    :autograde: unittest

    Write a function called ``axis_or_origin`` that takes in parameters ``x`` and ``y``. If both coordinates aren't 0, 
    return ``"This coordinate is not on an axis. It's in a quadrant."``. If both coordinates are 0, return ``"This coordinate is the origin."``. 
    Lastly, if the coordinate isn't in a quadrant and isn't the origin, determine if the coordinate is on the x or y axis by returning
    ``"This coordinate is on the (y-axis or x-axis)."``. Refer to https://www.math.net/x-and-y-axis for information on axes if needed. 
    For example, ``axis_or_origin(500, 0)`` should return ``"This coordinate is on the x-axis."``.
    ~~~~
    def axis_or_origin(x, y):
        # write code here

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(axis_or_origin(-5, 20),"This coordinate is not on an axis. It's in a quadrant.","axis_or_origin(-5, 20)")
            self.assertEqual(axis_or_origin(5, 20.5),"This coordinate is not on an axis. It's in a quadrant.","axis_or_origin(5, 20.5)")
            self.assertEqual(axis_or_origin(-400, -101),"This coordinate is not on an axis. It's in a quadrant.","axis_or_origin(-400, -101)")
            self.assertEqual(axis_or_origin(10004, -40.3),"This coordinate is not on an axis. It's in a quadrant.","axis_or_origin(10004, -40.3)")
            self.assertEqual(axis_or_origin(0, 0),"This coordinate is the origin.","axis_or_origin(0, 0)")
            self.assertEqual(axis_or_origin(0, -200),"This coordinate is on the y-axis.","axis_or_origin(0, -200)")
            self.assertEqual(axis_or_origin(500, 0),"This coordinate is on the x-axis.","axis_or_origin(500, 0)")

    myTests().main()



.. parsonsprob:: funct_conditional_mixedupcode_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``num_to_day`` that takes in a parameter ``num``. If ``num`` is between 1-5 inclusive, 
    create a nested conditional statement that returns ``"This is a weekday, and it's (insert day here)."``, 1 being Monday through 5 being Friday.
    If ``num`` is 6 or 7, create a nested conditional statement that returns ``"It is the weekend, and it's (insert day here)."``, 
    6 being Saturday and 7 being Sunday. If none of the other conditions have been met, return ``"The number does not correspond to a day of the week."``. 
    For example, ``num_to_day(1)`` should return ``"This is a weekday, and it's Monday."``.
    -----
    def num_to_day(num):
    =====
        if (num >= 1) and (num <= 5):
    =====
        if (num > 1) and (num < 5): #paired
    =====
            if num == 1:
    =====
                return "This is a weekday, and it's Monday."
    =====
            elif num == 2:
    =====
                return "This is a weekday, and it's Tuesday."
    =====
            elif num == 3:
    =====
                return "This is a weekday, and it's Wednesday."
    =====
            elif num == 4:
    =====
                return "This is a weekday, and it's Thursday."
    =====
            else:
    =====
                return "This is a weekday, and it's Friday."
    =====
        elif (num > 5) and (num <= 7): 
    =====
        elif num <= 7: #paired
    =====
        elif (num > 5) or (num <= 7): #paired
    =====
        elif (num >= 5) or (num <= 7): #paired
    =====
            if num == 6:
    =====
                return "It is the weekend, and it's Saturday."
    =====
            else:
    =====            
                return "It is the weekend, and it's Sunday."
    =====
        else:
    =====
            return "The number does not correspond to a day of the week."


.. activecode:: funct_conditional_mixedupcode_5_ac
    :practice: T
    :autograde: unittest

    Write a function called ``num_to_day`` that takes in a parameter ``num``. If ``num`` is between 1-5 inclusive, 
    create a nested conditional statement that returns ``"This is a weekday, and it's (insert day here)."``, 1 being Monday through 5 being Friday.
    If ``num`` is 6 or 7, create a nested conditional statement that returns ``"It is the weekend, and it's (insert day here)."``, 
    6 being Saturday and 7 being Sunday. If none of the other conditions have been met, return ``"The number does not correspond to a day of the week."``. 
    For example, ``num_to_day(1)`` should return ``"This is a weekday, and it's Monday."``.
    ~~~~
    def num_to_day(num):
        # write code here

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(num_to_day(-1),"The number does not correspond to a day of the week.","num_to_day(-1)")
            self.assertEqual(num_to_day(0),"The number does not correspond to a day of the week.","num_to_day(0)")
            self.assertEqual(num_to_day(1),"This is a weekday, and it's Monday.","num_to_day(1)")
            self.assertEqual(num_to_day(2),"This is a weekday, and it's Tuesday.","num_to_day(2)")
            self.assertEqual(num_to_day(3),"This is a weekday, and it's Wednesday.","num_to_day(3)")
            self.assertEqual(num_to_day(4),"This is a weekday, and it's Thursday.","num_to_day(4)")
            self.assertEqual(num_to_day(5),"This is a weekday, and it's Friday.","num_to_day(5)")
            self.assertEqual(num_to_day(6),"It is the weekend, and it's Saturday.","num_to_day(6)")
            self.assertEqual(num_to_day(7),"It is the weekend, and it's Sunday.","num_to_day(7)")
            self.assertEqual(num_to_day(8),"The number does not correspond to a day of the week.","num_to_day(8)")
            self.assertEqual(num_to_day(-100),"The number does not correspond to a day of the week.","num_to_day(-100)")
            self.assertEqual(num_to_day(1001),"The number does not correspond to a day of the week.","num_to_day(1001)")

    myTests().main()