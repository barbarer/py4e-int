Exercises
---------

.. parsonsprob:: 02-par-1-welcome

   Prompt the user for their name and welcome them. (There are two extra code blocks)
   -----
   name = input('What is your name?\n')
   name = "yourName" #paired
   greeting = "Hello "
   print(greeting + name)
   print(greeting name) #paired
   print("Hello" name) #paired


.. parsonsprob:: 02-par-2-hours

    Prompt the user for their hours and rate per hour to compute gross pay.
    -----
    hours = input('How many hours do you work in a week?')
    payRate = input('What is your hourly pay?')
    pay rate = input('What is your hourly pay?') #paired
    grossPay = hours * payRate
    print("Your gross pay is " + grossPay)
    print("Your gross pay is" grossPay) #paired


.. dragndrop:: 02-dnd-3-types
    :feedback: Try running these commands in your terminal window.
    :match_1: (width//2)|||8, integer
    :match_2: (width/2.0)|||8.5, float
    :match_3: (height/3)|||4.0, float
    :match_4: (1 + 2 * 5)|||11, integer

    Assume that width = 17 and height = 12.0. For each of the following expressions, match them up with the value of
    the expression and the type (of the value of the expression).

.. activecode:: check-guess
   :autograde: unittest
   :nocodelens:

   Complete the program which uses string operations to convert a Celsius temperature to Fahrenheit and returns the
   temperature in Fahrenheit. The conversion formula is F = (C*9/5)+32. For example, an input of 5 should return 41.
   ~~~~
   def c_to_f(temperature):
      celsius = temperature
      fahrenheit =
      return()



   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

   def testOne(self):
      self.assertEqual(c_to_f(5), 41, "Correct! c_to_f(5, 41)")
      self.assertEqual(c_to_f(7), 12.6,"too low, make sure you are adding 32. c_to_f(7, 12.6)")
      self.assertEqual(c_to_f(0), 32, "Correct! c_to_f(0, 32)")
      self.assertEqual(c_to_f(35), 51.44444444444444, "too low, make sure you are multiplying by (9/5). c_to_f(35, 51.44444444444444)")


    myTests().main()
