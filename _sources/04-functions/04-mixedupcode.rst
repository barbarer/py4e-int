Mixed up code
--------------

.. parsonsprob:: ch4ex0muc
   :numbered: left
   :practice: T
   :adaptive:

   Use a built-in function to print out the length of sentence_a.
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


.. parsonsprob:: ch4ex1muc
   :numbered: left
   :practice: T
   :adaptive:

   Create a function called bmi that takes height and weight as parameters. It should return BMImetric.
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

.. parsonsprob:: ch4ex2muc
   :numbered: left
   :practice: T
   :adaptive:

   Create two functions. The first is called square, which returns a number squared. The second is called sum_of_squares, which returns the sum of the squares of three numbers.
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

.. parsonsprob:: ch4ex3muc
   :numbered: left
   :practice: T
   :adaptive:

   Put the code blocks in order below to return the middle characters from the passed string. There are four extra code blocks that are not needed in a correct solution. If the string has less than 3 characters then return the passed string. If the string has an odd length then return the middle character. If the string has an even length return the two middle characters. For example, get_middle(‘abc’) returns ‘b’ and get_middle(‘abcd’) returns ‘bc’.
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

.. parsonsprob:: ch4ex4muc
   :numbered: left
   :practice: T
   :adaptive:

   Put the code blocks in order below to return the middle characters from the passed string. There are four extra code blocks that are not needed in a correct solution. If the string has less than 3 characters then return the passed string. If the string has an odd length then return the middle character. If the string has an even length return the two middle characters. For example, get_middle(‘abc’) returns ‘b’ and get_middle(‘abcd’) returns ‘bc’.
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
    elif num_chars % 2 == 1
   =====
      return str[mid]
   =====
    else:
   =====
      return str[mid-1:mid+1]
   =====
      return str[mid:mid+2]

.. parsonsprob:: ch4ex5muc
   :numbered: left
   :practice: T
   :adaptive:

   Put the code blocks in order below to return the middle characters from the passed string. There are four extra code blocks that are not needed in a correct solution. If the string has less than 3 characters then return the passed string. If the string has an odd length then return the middle character. If the string has an even length return the two middle characters. For example, get_middle(‘abc’) returns ‘b’ and get_middle(‘abcd’) returns ‘bc’.
   -----
   def caught_speeding(speed, is_birthday):
   =====
    if is_birthday:
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

.. parsonsprob:: ch4ex6muc
   :numbered: left
   :practice: T
   :adaptive:

   Create a function called add_odd, which will add up the first num odd numbers where num is the parameter. The function should return thesum.
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

.. parsonsprob:: ch4ex7muc
   :numbered: left
   :practice: T
   :adaptive:

   Create a function called add_odd, which will add up the first num odd numbers where num is the parameter. The function should return thesum.
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

.. parsonsprob:: ch4ex8muc
   :numbered: left
   :practice: T
   :adaptive:

   First create a function called square_it, which squares the parameter n and returns the result. Then, create a function called cubeit which cubes the parameter n and returns the result. Then ask the user to input a number. Lastly, print out the user's input squared and then cubed.
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

.. parsonsprob:: ch4ex9muc
   :numbered: left
   :practice: T
   :adaptive:

   First create a function called distance, which finds and returns the distance between two coordinates. Then, create a function called area, which returns the area of a circle given the radius. Finally, create a function called area2, which uses the previous two functions to return the area of a given circle.
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
