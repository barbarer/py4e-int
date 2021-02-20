Mixed-up Code Questions
-----------------------

.. parsonsprob:: functEx1muc
    :adaptive:
    :numbered: left
    :practice: T

    Use a built-in function to print out the length of ``sentence_a``. Note: there are three extra code blocks.
    -----
    sentence_a = "I love Python!"
    =====
    sentence_a = I love Python! #distractor
    =====
    length_sentence_a = len(sentence_a)
    =====
    length_sentence_a = length(sentence_a) #distractor
    =====
    print(length_sentence_a)
    =====
    print(sentence_a) #distractor


.. parsonsprob:: functEx2muc
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``bmi`` that takes ``height`` and ``weight`` as parameters. It should return ``BMImetric``.
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

.. parsonsprob:: functEx3muc
    :numbered: left
    :practice: T
    :adaptive:

    Create two functions. The first is called ``square``, which returns a number squared. The second is called
    ``sum_of_squares``, which returns the sum of the squares of three numbers. Watch your indentation!
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

.. parsonsprob:: functEx4muc
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``average``, which finds the average of two numbers.
    Note: there are two extra code blocks, and watch your indentation!
    -----
    def average(num1, num2):
    =====
    def average(num): #distractor
    =====
        sum = num1 + num2
    =====
        sum = sum / 2
    =====
        sum = num1 + num2 / 2 #distractor
    =====
        return sum

.. parsonsprob:: functEx5muc
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``swapValues``, which takes two values and swaps them.
    It then prints both new values. Note: there are two extra code blocks, and
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
        print(val1)
        print(val2)
    =====
        return (val1, val2) #distractor

.. parsonsprob:: functEx6muc
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``get_avg_drop_lowest`` which returns the average of a list
    of numbers, ignoring the lowest value. However, if the list only contains one value,
    then return that. For example, ``get_avg_drop_lowest([90])`` returns ``90``,
    ``get_avg_drop_lowest([90, 10])`` also returns ``90``, and ``get_avg_drop_lowest([90, 10, 0])``
    returns ``50``. Watch your indentation!
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

.. parsonsprob:: functEx7muc
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``compare`` which returns whichever is greater of
    its two parameters. If they are equal, it returns ``param2``. Note:
    there are two unused code blocks.
    -----
    def compare(param1, param2):
    =====
    Def compare(param1, param2): #distractor
    =====
        if param1 > param2:
    =====
            return param1
    =====
        if param1 == param2: #distractor
    =====
        else:
    =====
            return param2

.. parsonsprob:: functEx8muc
    :numbered: left
    :practice: T
    :adaptive:

    You are driving a little too fast, and a police officer stops you. Create a function
    called ``caught_speeding`` which returns the type of ticket the police officer will give you.
    If ``speed`` is 60 or less, the result is ``"no ticket"``. If speed is between 61 and 80 inclusive,
    the result is ``"minor ticket"``. If speed is 81 or more, the result is ``"major ticket"``. All this
    is true, unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
    Note: there are two extra code blocks and lots of indentation to watch out for!
    -----
    def caught_speeding(speed, is_birthday):
    =====
        if is_birthday is True:
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


.. parsonsprob:: functEx9muc
   :numbered: left
   :adaptive:
   :practice: T


   Create a ``check_guess`` function which computes if a guess is too low, too high, or correct.
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

.. parsonsprob:: functEx10muc
   :numbered: left
   :adaptive:
   :practice: T

   Put the code blocks below in order to solve the following problem.
   Given a day of the week encoded as 0 = Sun, 1 = Mon, 2 = Tue, ...6 = Sat, and a
   boolean indicating if we are on vacation, return a string indicating when the alarm
   clock should ring. If we are on vacation and it is a weekend (0 = Saturday or 6 =
   Sunday), it should return ``"off"``, and otherwise return ``"10:00"``. If we are not
   on vacation and it is a weekend, it should return ``"10:00"``, and otherwise return
   ``"7:00"``. Note: there are two extra code blocks, and watch your indentation!
   -----
   def alarm_clock(day, vacation):
   =====
   def alarm_clock(day, vacation)  #paired
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



.. parsonsprob:: functEx11muc
    :numbered: left
    :practice: T
    :adaptive:

    The following code should create two functions. First create a function called ``square_it`` which
    squares the parameter ``n`` and returns the result. Then, create a function called ``cube_it`` which cubes
    the parameter ``n`` and returns the result. Finally, ask the user to input a number and print out
    the user's input squared and then cubed. Watch out for extra code blocks and indentation! Note: there
    are four extra code blocks, and watch your indentation!
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
    =====
    a_num = int(input("Please enter a number"))
    =====
    print(square_it(anum))
    =====
    print(square_it("anum")) #distractor
    =====
    print(cube_it(anum))

.. parsonsprob:: functEx12muc
    :numbered: left
    :practice: T
    :adaptive:

    The following code creates three functions that use Python's math module to calculate geometric equations.
    First, create a function called ``distance`` which finds and returns the distance between two coordinates using
    the distance formula: d = √((x_2 - x_1)² + (y_2 - y_1)²). Then, create a function called ``area`` which returns
    the area of a circle given its radius using the formula: A = πr². Finally, create a function called ``area2``
    which uses the ``distance`` function to find the radius and the ``area`` function to find the circle's area.
    Watch your indentation!
    -----
    import math
    =====
    def distance(x1, y1, x2, y2):
    =====
        dx = x2 - x1
        dy = y2 - y1
    =====
        dsquared = math.pow(dx, 2) + math.pow(dy, 2)
    =====
        result = math.sqrt(dsquared)
    =====
        return result
    =====
    def area(radius):
    =====
        b = math.pi * math.pow(radius, 2)
    =====
        return b
    =====
    def area2(xc, yc, xp, yp):
    =====
        radius = distance(xc, yc, xp, yp)
    =====
        result2 = area(radius)
    =====
        return result2
