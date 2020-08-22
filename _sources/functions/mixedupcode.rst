Mixed-up Code Questions
-----------------------

.. parsonsprob:: functEx1muc
    :adaptive:
    :numbered: left
    :practice: T

    Use a built-in function to print out the length of sentence_a. Watch out for extra code blocks.
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
    print("length_sentence_a") #distractor


.. parsonsprob:: functEx2muc
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called bmi that takes height and weight as parameters. It should return BMImetric.
    Watch your indentation.
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

    Create two functions. The first is called square, which returns a number squared. The second is called
    sum_of_squares, which returns the sum of the squares of three numbers. Watch your indentation.
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

    Create a function called add_odd, which will add up the odd numbers from 1
    (inclusive) to num (inclusive). The function should return the_sum. For
    example, add_odd(3) returns 4 since 1 + 3 = 4.
    Watch out for extra pieces of code and indentation!
    -----
    def add_odd(num):
    =====
        the_sum = 0
    =====
        the_sum = 1     #paired
    =====
        for counter in range(num + 1):
    =====
        for counter in range(num): #paired
    =====
            if counter % 2 == 1:
    =====
            if counter % 2 == 0: #paired
    =====
                the_sum += counter
    =====
        return the_sum

.. parsonsprob:: functEx5muc
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called addByThree, which will add three to the total
    num times. The function should return the total. for
    example, addByThree(2) returns 6 (3 + 3) and addByThree(3) returns 9
    (3 + 3 + 3). Watch out for
    extra pieces of code and indentation!
    -----
    def addByThree(num):
    =====
        total = 0
    =====
        total = 1     #paired
    =====
        for counter in range(num):
    =====
        for counter in range(thesum): #paired
    =====
            total = total + 3
    =====
            total = total + three #paired
    =====
        return total

.. parsonsprob:: functEx6muc
    :numbered: left
    :practice: T
    :adaptive:

    Create the function get_avg_drop_lowest to return the average of a list
    of numbers, but drop the lowest value. However,
    if the list only has one value then return that.  For example, get_avg_drop_lowest([90]) returns 90 and
    get_avg_drop_lowest([90, 10]) also returns 90.
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

    Put the code blocks in order below to return the middle characters from the passed string. If the
    string has less than 3 characters then return the passed string. If the string has an odd length then
    return the middle character. If the string has an even length return the two middle characters. For
    example, get_middle(‘abc’) returns ‘b’ and get_middle(‘abcd’) returns ‘bc’. Watch out for extra code
    blocks and indentation!
    -----
    def get_middle(str):
    =====
    Def get_middle(str): #paired
    =====
        num_chars = len(str)
    =====
        mid = num_chars // 2
    =====
        mid = num_chars / 2 #paired
    =====
        if num_chars < 3:
    =====
            return str
    =====
        elif num_chars % 2 == 1:
    =====
        elif num_chars % 2 == 1 #paired
    =====
            return str[mid]
    =====
        else:
    =====
            return str[mid-1:mid+1]
    =====
            return str[mid:mid+2] #paired

.. parsonsprob:: functEx8muc
    :numbered: left
    :practice: T
    :adaptive:

    You are driving a little too fast, and a police officer stops you. Place
    the code blocks to
    compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
    2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and
    80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is
    your birthday -- on that day, your speed can be 5 higher in all cases.
    There are two extra code blocks and lots of
    indentation to watch out for!
    -----
    def caught_speeding(speed, is_birthday):
    =====
        if is_birthday is True:
    =====
            if speed <= 65:
    =====
            if speed < 65: #distractor
    =====
                return 0
    =====
            elif speed <= 85:
    =====
                return 1
    =====
                Return 1 #distractor
    =====
            else:
    =====
                return 2
    =====
        else:
    =====
            if speed <= 60:
    =====
                return 0
    =====
            elif speed <= 80:
    =====
                return 1
    =====
            else:
    =====
                return 2


.. parsonsprob:: functEx9muc
   :numbered: left
   :adaptive:

   Place the code blocks below to return 'too low' if the guess is less
   than the passed target, 'correct' if they are equal, and 'too high' if the guess
   is greater than the passed target.  For example, check_guess(5,7) returns
   'too low', check_guess(7,7) returns 'correct', and check_guess(9,7) returns
   'too high'. There are three extra blocks that are not needed in a correct solution.
   -----
   def check_guess(guess, target):
   =====
   def check_guess(guess, target: #paired
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
           return 'correct #paired
   =====
       else:
   =====
           return 'too high'

.. parsonsprob:: functEx10muc
   :numbered: left
   :adaptive:

   Put the code blocks below in order to solve the following problem.  There are
   two extra blocks that are not needed in a correct solution.
   Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a
   boolean indicating if we are on vacation, return a string of the form "7:00"
   indicating when the alarm clock should ring. If we are on vacation and it is
   a weekend (0 - Saturday or 6 - Sunday) it should return "off" and otherwise return
   "10:00". If we are not on vacation and it is a weekend it should return
   "10:00" and otherwise "7:00"
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

    The following code should create two functions. First create a function called square_it, which
    squares the parameter n and returns the result. Then, create a function called cube_it which cubes
    the parameter n and returns the result. Then ask the user to input a number. Lastly, print out
    the user's input squared and then cubed. Watch out for extra code blocks and indentation! There
    are lots of extra code blocks to look out for, and keep indentation in mind!
    -----
    def square_it(n):
    =====
    def square_it(n) #distractor
    =====
        return n * n
    =====
        return n * 2 #distractor
    =====
    def cube_it(n):
    =====
    def cube_it(n) #distractor
    =====
        return n*n*n
    =====
        return n*n*3 #distractor
    =====
    a_num = int(input("Please enter a number"))
    =====
    a_num = int(input(Please enter a number)) #distractor
    =====
    a_num = str(input("Please enter a number")) #distractor
    =====
    print(square_it(anum))
    =====
    print(square_it("anum")) #distractor
    =====
    print(cube_it(anum))
    =====
    print(cube_it("anum")) #distractor

.. parsonsprob:: functEx12muc
    :numbered: left
    :practice: T
    :adaptive:

    The following code creates three functions that calculate geometric equations. First create a function
    called distance, which finds and returns the distance between two coordinates, using the distance formula
    where d = √((x_2-x_1)²+(y_2-y_1)²). Then, create a function called area, which returns the area of a
    circle given the radius, using the formula A = πr². Finally, create a function called area2, which uses
    the previous two functions to return the area of a given circle. Remember that ** is exponent notation
    in Python and watch your indentation!
    -----
    def distance(x1, y1, x2, y2):
    =====
        dx = x2 - x1
        dy = y2 - y1
    =====
        dsquared = dx**2 + dy**2
    =====
        result = dsquared**0.5
    =====
        return result
    =====
    def area(radius):
    =====
        b = 3.14159 * radius**2
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
