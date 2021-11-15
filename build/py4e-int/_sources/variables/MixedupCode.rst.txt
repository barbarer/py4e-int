Mixed-up Code Questions
-----------------------

.. parsonsprob:: var-mixed-hello-v2
   :practice: T
   :numbered: left
   :adaptive:

   The following program segment should prompt the user for their name, assign a value to ``greeting``, and then say hello using the name.
   But, the blocks have been mixed up and include extra blocks that aren't correct.
   -----
   name = input('What is your name?\n')
   =====
   name = "yourName" #distractor
   =====
   greeting = "Hello "
   =====
   print(greeting + name)
   =====
   print("Hello" name) #distractor

.. parsonsprob:: var-mixed-lemons
   :numbered: left
   :practice: T
   :noindent:

   The following program segment should print the phrase, "Carla loves lemons.".
   But, the blocks have been mixed up and include an extra block that isn't correct.
   -----
   feeling = "loves"
   =====
   print("Carla" + feeling + "lemons.") #distractor
   =====
   print("Carla " + feeling + " lemons.")

.. parsonsprob:: var-mixed-hours
   :practice: T
   :numbered: left
   :adaptive:

   The following program segment should ask the user their hours per week and pay rate,
   then print a statement with their gross pay. But, the blocks have been mixed up and
   includes extra blocks that aren't correct.
   -----
   hours = input('How many hours do you work in a week?')
   =====
   payRate = input('What is your hourly pay?')
   =====
   pay rate = input('What is your hourly pay?') #distractor
   =====
   grossPay = float(hours) * float(payRate)
   =====
   print("Your gross pay is ", grossPay)
   =====
   print("Your gross pay is" grossPay) #distractor

.. parsonsprob:: var-mixed-price
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should print out the cost for each shirt if
   they are to buy 2 and get the third free but were originally $45 each.
   -----
   price = 45
   =====
   totalCost = price * 2
   =====
   pricePerShirt = totalCost / 3
   =====
   print(pricePerShirt)

.. parsonsprob:: var-mixed-tip
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   The following program segment should print out the cost per person for a dinner including the tip.
   But, the blocks have been mixed up and include an extra block that isn't needed in the solution.
   -----
   bill = 89.23
   =====
   tip = bill * 0.20
   =====
   total = bill + tip
   =====
   numPeople = 3
   perPersonCost = total / numPeople
   =====
   print(perPersonCost)
   =====
   print(perpersoncost) #distractor

.. parsonsprob:: var-mixed-switch
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   The following program segment should swap the values of x and y after val1 and val 2 are assigned
   to x and y, respectively. But, the blocks have been mixed up and include an extra block that isn't
   needed in the solution.
   -----
   x = val1
   y = val2
   =====
   temp = x
   =====
   x = y
   =====
   y = temp
   =====
   temp = y #distractor

.. parsonsprob:: var-mixed-discount
  :adaptive:
  :numbered: left
  :practice: T
  :noindent:

  The following program segment should print how much you will have to pay for an item that is 60% off
  the original price of $52.99. But, the blocks have been mixed up and include an extra block that isn't
  needed in the solution.
  -----
  price = 52.99
  discount = 0.6
  =====
  savings = price * discount
  =====
  savings = price / discount #paired
  =====
  finalPrice = price - savings
  =====
  print(finalPrice)
  =====
  finalPrice = price - discount #distractor

.. parsonsprob:: var-mixed-cookies
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   The following program segment should print the phrase, "Baking cookies makes Chris happier than
   anything else.". But, the blocks have been mixed up and include several extra blocks that are not correct.
   -----
   var1 = "cookies"
   =====
   var1 = cookies #distractor
   =====
   var1 = "cookies' #distractor
   =====
   var1 = [cookies] #distractor
   =====
   print("Baking " + var1 + " makes Chris happier than anything else.")

.. parsonsprob:: var-mixed-camp
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   The following program segment should print the phrase, "It takes us 2 hours and 45 minutes to get
   home from camp.". But, the blocks have been mixed up and include an extra block that isn't correct.
   -----
   numHours = 2
   numMinutes = 45.0
   =====
   print("It takes us " + str(numHours) + " hours and " + str(numMinutes) + " minutes to get home from camp.")
   =====
   print("It takes us " + numHours + " hours and " + numMinutes + " minutes to get home from camp.") #paired

.. parsonsprob:: var-mixed-numbers
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   The following program segment should print the phrase, "3 + 300 + 7 = 310.". But, the blocks have been mixed up and include an extra block that isn't correct.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   num1 = 3
   num2 = 300
   num3 = 7
   ans = 310
   =====
   print(str(num1) + " + " + str(num2) + " + " + str(num3) + " = " + str(ans))
   =====
   print(str(num1) + str(num2) + str(num3) = str(ans)) #distractor
