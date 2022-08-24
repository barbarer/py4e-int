Mixed-up Code Questions
-----------------------

.. parsonsprob:: functEx1muc_v2
    :adaptive:
    :numbered: left
    :practice: T

    Create a function ``len_str`` that uses a built-in function to return the number of characters in the passed string ``str``. Then print the result of a call to ``len_str`` passing in the string ``I love Python!``.  It should return 14.
    -----
    def len_str(str):
    =====
    def len_str(str) #paired
    =====
        return len(str)
    =====
        Return len(str) #paired
    =====
    print(len_str("I love Python!"))
    =====
    print(len_str(I love Python!)) #paired


.. activecode:: functEx1muc_v2_ac
    :practice: T
    :autograde: unittest

    Write  a function ``len_str`` that uses a built-in function to return the number of characters in the passed string ``str``. Then print the result of a call to ``len_str`` passing in the string ``I love Python!``.  It should return 14.
    ~~~~


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(len_str(""),0,"len_str('')")
            self.assertEqual(len_str("a"),1,"len_str('a')")
            self.assertEqual(len_str("Hi"),2,"len_str('Hi')")
            self.assertEqual(len_str("I love Python!"),14,"len_str('I love Python!')")

    myTests().main()


.. parsonsprob:: functEx2muc
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``bmi`` that takes ``height`` (in inches) and ``weight`` (in pounds) as parameters. It should calculate the ''bmi'' by squaring the height then dividing the weight by the height squared and then converting to metric by multiplying by 703.
    Watch your indentation!
    -----
    def bmi(height, weight):
    =====
        heightSquared = height * height
    =====
        BMI = weight / heightSquared
    =====
        BMImetric = BMI * 703
    =====
        return BMImetric

.. activecode:: functEx2muc_ac
    :practice: T
    :autograde: unittest

    Write a function called ``bmi`` that takes ``height`` (in inches) and ``weight`` (in pounds) as parameters. It should calculate the ''bmi'' by squaring the height then dividing the weight by the height squared and then converting to metric by multiplying by 703.
    ~~~~
    def bmi(height, weight):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(bmi(60,140),27.33888888888889,1,"bmi(60,140)")
            self.assertAlmostEqual(bmi(72,164),22.23996913580247,1,"bmi(72,164)")
            self.assertAlmostEqual(bmi(32,100),68.65234375,1,"bmi(32,100)")
            self.assertAlmostEqual(bmi(84,230),22.91524943310657,1,"bmi(84,230)")
            self.assertAlmostEqual(bmi(24,89),108.6232638888889,1,"bmi(24,89)")


    myTests().main()


.. parsonsprob:: functEx3muc
    :numbered: left
    :practice: T
    :adaptive:

    Write two functions. The first is ``square(x)``, which returns ``x`` squared. The second function is ``sum_of_squares(x,y,z)``, which returns the sum of the squares of three numbers ``z``, ``y``, and ``z``.  For example, ``square(2)`` should return ``4`` and ``sum_of_squares(2, 4, 6)`` should return 56.
    For example, ``square(2)`` should return ``4`` and ``sum_of_squares(2, 4, 6)`` should return 56.
    -----
    def square(x):
    =====
        y = x * x
    =====
        return y
    =====
    def sum_of_squares(x, y, z):
    =====
        a = square(x)
        b = square(y)
        c = square(z)
    =====
        return a + b + c

.. activecode:: functEx3muc_ac
    :practice: T
    :autograde: unittest

    Write two functions. The first is ``square(x)``, which returns ``x`` squared. The second function is ``sum_of_squares(x,y,z)``, which returns the sum of the squares of three numbers ``z``, ``y``, and ``z``.  For example, ``square(2)`` should return ``4`` and ``sum_of_squares(2, 4, 6)`` should return 56.
    ~~~~
    def square(x):

    def sum_of_squares(x, y, z):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(square(2), 4, "square(2)")
            self.assertEqual(square(-3), 9, "square(-3)")
            self.assertEqual(sum_of_squares(2, 4, 6), 56, "sum_of_squares(2, 4, 6)")

    myTests().main()

.. parsonsprob:: functEx4muc_v5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``average(num1, num2)``, which finds the average of two numbers ``num1`` and ``num2``.  For example, ``average(10,4)`` should return ``7.0``.
    Note: there are two extra code blocks, and watch your indentation!
    -----
    def average(num1, num2):
    =====
    def average(num1, num2) #paired
    =====
        sum = num1 + num2
    =====
        sum = sum / 2
    =====
        sum = sum // 2 #paired
    =====
        return sum


.. activecode:: functEx4muc_v5_ac
    :practice: T
    :autograde: unittest

    Write a function called ``average(num1, num2)``, which finds the average of two numbers ``num1`` and ``num2``.  For example, ``average(10,4)`` should return ``7.0``.
    ~~~~
    def average(num1, num2):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(average(32,3),17.5,1, "average(32,3)")
            self.assertAlmostEqual(average(5,20),12.5,1, "average(5,20)")
            self.assertAlmostEqual(average(10,4),7,1, "average(10,4)")
            self.assertAlmostEqual(average(8,120),64,1, "average(8,120)")
            self.assertAlmostEqual(average(3,19),11,1, "average(3,19)")

    myTests().main()

.. parsonsprob:: functEx5muc_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``swapValues(val1, val2)``, which takes two values and swaps them.
    It then returns val1. For example, ``swapValues(8,2)`` should return ``2``.  Note: there is an extra code block, and
    watch your indentation!
    -----
    def swapValues(val1, val2):
    =====
        val1 = val2 #distractor
        val2 = val1
    =====
        temp = val2
    =====
        val2 = val1
    =====
        val1 = temp
    =====
        return val1


.. activecode:: functEx5muc_v2_ac
    :practice: T
    :autograde: unittest

    Write a function called ``swapValues(val1, val2)`` , which takes two values and swaps them. It then returns val1.  For example, ``swapValues(8,2)`` should return ``2``
    ~~~~
    def swapValues(val1, val2):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(swapValues(5,20), 20, "swapValues(5, 20)")
            self.assertEqual(swapValues(8,2), 2, "swapValues(8, 2)")
            self.assertEqual(swapValues(2,8), 8, "swapValues(2, 8)")
            self.assertEqual(swapValues(-1,3), 3, "swapValues(-1, 3)")
            self.assertEqual(swapValues(5,5), 5, "swapValues(5, 5)")

    myTests().main()


.. parsonsprob:: functEx6muc
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``get_avg_drop_lowest(num_list)`` which returns the average of a list of numbers, ignoring the lowest value. However, if the list only contains one value, then return that. For example, ``get_avg_drop_lowest([90])`` returns ``90``, ``get_avg_drop_lowest([90, 10])`` also returns ``90``, and ``get_avg_drop_lowest([90, 10, 0])`` returns ``50``.
    -----
    def get_avg_drop_lowest(num_list):
    =====
    def get_avg_drop_lowest(num_list) #paired
    =====
        total = sum(num_list)
        lowest = min(num_list)
        num = len(num_list)
    =====
        if num == 1:
    =====
        if num = 1: #paired
    =====
            return total
    =====
        else:
    =====
            return (total - lowest) / (num - 1)
    =====
            return (total - lowest) / (num + 1) #paired


.. activecode:: functEx6muc_ac
    :practice: T
    :autograde: unittest

    Write a function called ``get_avg_drop_lowest(num_list)`` which returns the average of a list of numbers, ignoring the lowest value. However, if the list only contains one value, then return that. For example, ``get_avg_drop_lowest([90])`` returns ``90``, ``get_avg_drop_lowest([90, 10])`` also returns ``90``, and ``get_avg_drop_lowest([90, 10, 0])`` returns ``50``.
    ~~~~
    def get_avg_drop_lowest(num_list):


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(get_avg_drop_lowest([40]), 40, "get_avg_drop_lowest([40])")
            self.assertEqual(get_avg_drop_lowest([80,10]), 80, "get_avg_drop_lowest([80,10])")
            self.assertEqual(get_avg_drop_lowest([74,25,6]), 49.5, "get_avg_drop_lowest([74,25,6])")

    myTests().main()

.. parsonsprob:: functEx7muc_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``compare(p1, p2)`` which returns whichever is greater of its two parameters. Note:
    there are two unused code blocks.
    -----
    def compare(p1, p2):
    =====
    Def compare(p1, p2): #paired
    =====
        if p1 > p2:
    =====
        if p1 == p2: #paired
    =====
            return p1
    =====
        else:
    =====
            return p2


.. activecode:: functEx7muc_v2_ac
    :practice: T
    :autograde: unittest

    Write a function called ``compare(p1, p2)`` which returns whichever is greater of its two parameters.
    ~~~~
    def compare(p1, p2):


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(compare(20,15), 20, "compare(20,15)")
            self.assertEqual(compare(8,2), 8, "compare(8,2)")
            self.assertEqual(compare(2,8), 8, "compare(2,8)")
            self.assertEqual(compare(-1,1), 1, "compare(-1,1)")
            self.assertEqual(compare(-1,-1), -1, "compare(-1,-1)")

    myTests().main()



.. parsonsprob:: functEx8muc
    :numbered: left
    :practice: T
    :adaptive:

    You are driving a little too fast, and a police officer stops you. Create a function
    called ``caught_speeding(speed, is_birthday)`` which returns the type of ticket the police officer will give you.
    If ``speed`` is 60 or less, the result is ``"no ticket"``. If speed is between 61 and 80 inclusive,
    the result is ``"minor ticket"``. If speed is 81 or more, the result is ``"major ticket"``. All this
    is true, unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
    Note: there are two extra code blocks and lots of indentation to watch out for!
    -----
    def caught_speeding(speed, is_birthday):
    =====
        if is_birthday:
    =====
            if speed <= 65:
    =====
            if speed < 65: #distractor
    =====
                return "no ticket"
    =====
            elif speed <= 85:
    =====
                return "minor ticket"
    =====
                return minor ticket #distractor
    =====
            else:
    =====
                return "major ticket"
    =====
        else:
    =====
            if speed <= 60:
    =====
                return "no ticket"
    =====
            elif speed <= 80:
    =====
                return "minor ticket"
    =====
            else:
    =====
                return "major ticket"


.. activecode:: functEx8muc_ac
    :practice: T
    :autograde: unittest

    You are driving a little too fast, and a police officer stops you. Write a function called ``caught_speeding(speed, is_birthday)`` which returns the type of ticket the police officer will give you. If ``speed`` is 60 or less, the result is ``"no ticket"``. If speed is between 61 and 80 inclusive, the result is ``"minor ticket"``. If speed is 81 or more, the result is ``"major ticket"``. All this is true, unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
    ~~~~
    def caught_speeding(speed, is_birthday):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(caught_speeding(50, False), "no ticket", "caught_speeding(50, False)")
            self.assertEqual(caught_speeding(60, False), "no ticket", "caught_speeding(60, False)")
            self.assertEqual(caught_speeding(65, True), "no ticket", "caught_speeding(65, True)")
            self.assertEqual(caught_speeding(61,False), "minor ticket", "caught_speeding(61,False)")
            self.assertEqual(caught_speeding(73,False), "minor ticket", "caught_speeding(73,False)")
            self.assertEqual(caught_speeding(85,True), "minor ticket", "caught_speeding(85,True)")
            self.assertEqual(caught_speeding(81,False), "major ticket", "caught_speeding(81,False)")
            self.assertEqual(caught_speeding(97,True), "major ticket", "caught_speeding(97,True)")

    myTests().main()

.. parsonsprob:: functEx9muc
    :numbered: left
    :adaptive:
    :practice: T


    Create a ``check_guess(guess, target)`` function which computes if a ``guess`` is too low, too high, or correct compared to the ``target``.
    Return ``'too low'`` if ``guess`` is less than ``target``, ``'correct'`` if they are equal, and
    ``'too high'`` if ``guess`` is greater than ``target``.  For example, ``check_guess(5, 7)`` returns
    ``'too low'``, ``check_guess(7, 7)`` returns ``'correct'``, and ``check_guess(9, 7)`` returns ``'too high'``.
    Note: there are three extra code blocks, and watch your indentation!
    -----
    def check_guess(guess, target):
    =====
    def check_guess(guess), (target): #paired
    =====
        if guess < target:
    =====
            return 'too low'
    =====
            return "too low' #paired
    =====
        elif guess == target:
    =====
            return 'correct'
    =====
            return correct #paired
    =====
        else:
    =====
            return 'too high'

.. activecode:: functEx9muc_ac
    :practice: T
    :autograde: unittest

    Write  a ``check_guess(guess, target)`` function which computes if a ``guess`` is too low, too high, or correct compared to the ``target``.
    Return ``'too low'`` if ``guess`` is less than ``target``, ``'correct'`` if they are equal, and
    ``'too high'`` if ``guess`` is greater than ``target``.  For example, ``check_guess(5, 7)`` returns
    ``'too low'``, ``check_guess(7, 7)`` returns ``'correct'``, and ``check_guess(9, 7)`` returns ``'too high'``.
    ~~~~
    def check_guess(guess, target):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(check_guess(4, 6), 'too low', "check_guess(4,6)")
            self.assertEqual(check_guess(3,3), 'correct', "check_guess(3,3)")
            self.assertEqual(check_guess(7,5), 'too high', "check_guess(7,5)")

    myTests().main()

.. parsonsprob:: functEx10muc
    :numbered: left
    :adaptive:
    :practice: T

    Put the code blocks below to define the function ``alarm_clock``. It will be given a day of the week encoded as 0 = Sun, 1 = Mon, 2 = Tue, ...6 = Sat, and a
    boolean indicating if we are on vacation, and will return a string indicating when the alarm
    clock should ring. If we are on vacation and it is a weekend (0 = Saturday or 6 =
    Sunday), it should return ``"off"``, and otherwise return ``"10:00"``. If we are not
    on vacation and it is a weekend, it should return ``"10:00"``, and otherwise return
    ``"7:00"``. Note: there are two extra code blocks, and watch your indentation!
    -----
    def alarm_clock(day, vacation):
    =====
    def alarm_clock(day, vacation) #paired
    =====
        if vacation:
    =====
            if day == 0 or day == 6:
    =====
            if (day == 0) || (day == 6): #paired
    =====
                return 'off'
    =====
            else:
    =====
                return '10:00'
    =====
        else:
    =====
            if day == 0 or day == 6:
    =====
                return '10:00'
    =====
            else:
    =====
                return '7:00'

.. activecode:: functEx10muc_ac
    :practice: T
    :autograde: unittest

    Write the function ``alarm_clock``. It will be given a day of the week encoded as 0 = Sun, 1 = Mon, 2 = Tue, ...6 = Sat, and a boolean indicating if we are on vacation, and will return a string indicating when the alarm clock should ring. If we are on vacation and it is a weekend (0 = Saturday or 6 = Sunday), it should return ``"off"``, and otherwise return ``"10:00"``. If we are not on vacation and it is a weekend, it should return ``"10:00"``, and otherwise return ``"7:00"``.
    ~~~~
    def alarm_clock(day, vacation):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(alarm_clock(2,False), '7:00', "alarm_clock(2,False)")
            self.assertEqual(alarm_clock(0,True), 'off', "alarm_clock(0,True)")
            self.assertEqual(alarm_clock(6,True), 'off', "alarm_clock(6,True)")
            self.assertEqual(alarm_clock(6,False), '10:00', "alarm_clock(6,False)")
            self.assertEqual(alarm_clock(0,False), '10:00', "alarm_clock(6,False)")
            self.assertEqual(alarm_clock(1,False), '7:00', "alarm_clock(6,False)")
            self.assertEqual(alarm_clock(1,True), '10:00', "alarm_clock(6,False)")
            self.assertEqual(alarm_clock(3,True), '10:00', "alarm_clock(6,False)")
            self.assertEqual(alarm_clock(5,True), '10:00', "alarm_clock(6,False)")



    myTests().main()

.. parsonsprob:: functEx11muc
    :numbered: left
    :practice: T
    :adaptive:

    First create a function called ``square_it`` which
    squares the parameter ``n`` and returns the result. Then, create a function called ``cube_it`` which cubes
    the parameter ``n`` and returns the result. Note : there are three extra code blocks, and watch your indentation!
    -----
    def square_it(n):
    =====
        return n * n
    =====
        return n * 2 #distractor
    =====
    def cube_it(n):
    =====
    def cube_it(n) #distractor
    =====
        return n * n * n
    =====
        return n * n * 3 #distractor



.. activecode:: functEx11muc_ac
    :practice: T
    :autograde: unittest

    First write a function called  ``square_it`` which squares the parameter ``n`` and returns the result. Then, write a function called ``cube_it`` which cubes the parameter ``n`` and returns the result.
    ~~~~


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(square_it(4),16, "square_it(4)")
            self.assertEqual(square_it(2),4, "square_it(2)")
            self.assertEqual(cube_it(5),125, "cube_it(5)")
            self.assertEqual(cube_it(3),27, "cube_it(3)")



    myTests().main()




.. parsonsprob:: functEx12muc_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``distance`` which returns the distance between two coordinates using
    the distance formula: d = √((x_2 - x_1)² + (y_2 - y_1)²).  Use two functions in Python's math module (``math.pow``, ``math.sqrt``).
    The function ``math.pow(a,b)`` returns ``a`` raised to the ``b`` power.  The function ``math.sqrt(a)`` returns the square root of ``a``.
    -----
    import math
    =====
    def distance(x1, y1, x2, y2):
    =====
    def distance(x1, y1, x2, y2) #paired
    =====
        dx = x2 - x1
        dy = y2 - y1
    =====
        dsquared = math.pow(dx, 2) + math.pow(dy, 2)
    =====
        dsquared = math.pow(2, dx) + math.pow(2, dy) #paired
    =====
        result = math.sqrt(dsquared)
    =====
        result = math.square_root(dsquared) #paired
    =====
        return result



.. activecode:: functEx12muc_v2_ac
    :practice: T
    :autograde: unittest

    Write a function called ``distance`` which returns the distance between two coordinates using
    the distance formula: d = √((x_2 - x_1)² + (y_2 - y_1)²).  Use two functions in Python's math module (``math.pow``, ``math.sqrt``).
    The function ``math.pow(a,b)`` returns ``a`` raised to the ``b`` power.  The function ``math.sqrt(a)`` returns the square root of ``a``.
    ~~~~
    import math

    def distance(x1, y1, x2, y2):


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(distance(1,1,2,2), 1.4142135624, 1, "distance(1, 1, 2, 2)")
            self.assertAlmostEqual(distance(3,2,0,0), 3.6055, 1, "distance(3, 2, 0, 0)")
            self.assertAlmostEqual(distance(3,2,-1,-1), 5.0, 1, "distance(3, 2, -1, -1)")
            self.assertAlmostEqual(distance(30,20,-1,-1), 37.44, 1, "distance(30, 20, -1, -1)")
            self.assertAlmostEqual(distance(2,5,3,2), 3.162, 1, "distance(2, 5, 3, 2)")


    myTests().main()
