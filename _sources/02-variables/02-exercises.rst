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

Let's say that apples are $0.40 apiece, and pears are $0.65 apiece.  Modify the program below to calculate the total cost.

.. activecode:: 02-ac-complete

   apples = 4
   pears = 3
   totalCost =
   print(totalCost)
