Mixed up code
--------------

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

    The following code should create the function get_avg_drop_lowest, that takes a list of numbers as its
    parameter. The function will calculate the sum of the numbers, identify the smallest number, and the
    amount of numbers in the list; then return the average of the list, dropping the lowest number if the
    list has multiple numbers. Watch out for extra pieces of code and indentation!
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

.. parsonsprob:: functEx5muc
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
    Def get_middle(str): #distractor
    =====
        num_chars = len(str)
    =====
        mid = num_chars // 2
    =====
        mid = num_chars / 2 #distractor
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

.. parsonsprob:: functEx6muc
    :numbered: left
    :practice: T
    :adaptive:

    The following code creates the function caught_speeding, which calculates the ticket you get if
    you are caught speeding. If you are driving 60 mph or under you do not get a ticket and the function
    returns 0, if you are driving between 61 and 80 mph, you get a ticket and the function returns 1. If you
    are driving more than 80 mph, you get a larger ticket and the function returns 2. Luckily, if it is your
    birthday, you can drive 5 mph above the speed limit. There are two extra code blocks and lots of
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

.. parsonsprob:: functEx7muc
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called addByThree, which will add three to the total for each number within the range of
    the parameter (num) starting from 0. The function should return the total. Watch out for
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
        for counter in range(thesum): #distractor
    =====
            total = total + 3
    =====
            total = total + three #distractor
    =====
        return total

.. parsonsprob:: functEx8muc
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called add_odd, which will add up odd numbers within the range of the parameter (num)
    starting from 1. The function should return thesum. Watch out for extra pieces of code and indentation!
    -----
    def add_odd(num):
    =====
        thesum = 0
        oddnumber = 1
    =====
        thesum = 1     #paired
        oddnumber = 1
    =====
        for counter in range(num):
    =====
        for counter in range(thesum): #distractor
    =====
            thesum = thesum + oddnumber
            oddnumber = oddnumber + 2
    =====
            thesum = thesum + oddnumber #distractor
            oddnumber = oddnumber + 1
    =====
        return thesum

.. parsonsprob:: functEx9muc
    :numbered: left
    :practice: T
    :adaptive:

    The following code should create two functions. First create a function called squareit, which
    squares the parameter n and returns the result. Then, create a function called cubeit which cubes
    the parameter n and returns the result. Then ask the user to input a number. Lastly, print out
    the user's input squared and then cubed. Watch out for extra code blocks and indentation! There
    are lots of extra code blocks to look out for, and keep indentation in mind!
    -----
    def squareit(n):
    =====
    def squareit(n) #distractor
    =====
        return n * n
    =====
        return n * 2 #distractor
    =====
    def cubeit(n):
    =====
    def cubeit(n) #distractor
    =====
        return n*n*n
    =====
        return n*n*3 #distractor
    =====
    anum = int(input("Please enter a number"))
    =====
    anum = int(input(Please enter a number)) #distractor
    =====
    anum = str(input("Please enter a number")) #distractor
    =====
    print(squareit(anum))
    =====
    print(squareit("anum")) #distractor
    =====
    print(cubeit(anum))
    =====
    print(cubeit("anum")) #distractor

.. parsonsprob:: functEx10muc
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
