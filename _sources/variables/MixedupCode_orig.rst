Mixed-up Code Questions
-----------------------

.. parsonsprob:: var-mixed-1
   :practice: T
   :numbered: left
   :adaptive:

   Create code that sets the type of the variable ``x`` to another variable called ``x_type`` and then prints it. But, the blocks have been mixed up and include extra blocks that aren't correct.
   -----
   x = 3
   =====
   x_type = typeof(x) #distractor
   =====
   x_type = type(x)
   =====
   print(x_type)
   =====
   print(type(x_type)) #distractor

.. activecode:: var-mixed-ac-1q
    :practice: T
    :autograde: unittest

    Write code that sets the variable ``x`` to a random integer. Then, create another variable called ``x_type`` and set it equal to the type of ``x``. Make sure to use the ``type()`` function.
    ~~~~
    
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(x_type, type(1), "Testing that 'x_type' holds the type of 'x'")
    myTests().main()

.. parsonsprob:: var-mixed-2
   :practice: T
   :numbered: left
   :adaptive:

   Create code that prints the sentence "Carla loves lemons.". But, the blocks have been mixed up and include an extra block that isn't correct.
   -----
   feeling = "loves"
   =====
   print("Carla" + feeling + "lemons.") #distractor
   =====
   print("Carla " + feeling + " lemons.")


.. activecode:: var-mixed-ac-2q
    :practice: T
    :autograde: unittest

    Write code that creates a string variable called ``Carla`` that contains the sentence "Carla loves lemons.". Use the variable ``feeling``.
    ~~~~
    feeling = "loves"
    
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(Carla, "Carla loves lemons.","Testing that the string variable 'Carla' contains the sentence 'Carla loves lemons.'")
    myTests().main()


.. parsonsprob:: var-mixed-hours-3
   :practice: T
   :numbered: left
   :adaptive:

   Create code that asks the user for their hours per week and pay rate,
   then print a statement with their gross pay. But, the blocks have been mixed up and
   include extra blocks that aren't correct.
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
   
.. activecode:: var-mixed-ac-3q
    :practice: T
    :autograde: unittest

    Write code that asks the user for their hours per week and hourly pay rate and store them in the integer variables ``hours`` and ``rate``, respectively. Then create an integer variable called ``gross_pay`` that holds the user's gross pay for that week. Hint: gross pay is equal to the number of hours worked times pay rate.
    ~~~~
    
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(gross_pay, hours*rate,"Testing that the integer variable 'gross_pay' contains the product of the variables 'hours' and 'rate'")
    myTests().main()

.. parsonsprob:: var-mixed-price-4
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   Create code that prints out the price per each shirt given that John purchases two shirts and gets the third for free. Each shirt originally costs $45.
   -----
   price = 45
   =====
   totalCost = price * 2
   =====
   pricePerShirt = totalCost / 3
   =====
   print(pricePerShirt)

.. activecode:: var-mixed-ac-4q
    :practice: T
    :autograde: unittest

    Write code that stores the cost of each shirt in an integer variable named ``pricePerShirt`` if John purchases 2 shirts and gets the third free with each shirt originally costing $45. Use the variable ``price``.
    ~~~~
    price = 45

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(pricePerShirt, 30,"Testing that the integer variable 'pricePerShirt' contains the value 30")
    myTests().main()

.. parsonsprob:: var-mixed-tip-5
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   Create code that prints out the cost per person for a dinner including the tip. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.
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

.. activecode:: var-mixed-ac-5q
    :practice: T
    :autograde: unittest

    Write code that assigns the cost per person for a dinner to the variable ``perPersonCost``. Ask the user for the total bill, the total tip, and the number of people paying, and input these values into the variables ``bill``, ``tip``, and ``numPeople``, respectively. The cost per person will be divided equally.
    ~~~~
    
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(perPersonCost, (bill + tip) / numPeople,"Testing that the variable 'perPersonCost' contains the cost per person for a dinner")
    myTests().main()

.. parsonsprob:: var-mixed-switch-6
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   Create code that swaps the values of x and y after val1 and val 2 are assigned
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

.. activecode:: var-mixed-switch-ac-6q
    :practice: T
    :autograde: unittest

    Write code that swaps the values of ``x`` and ``y``. Use a temporary variable.
    ~~~~
    x = 2
    y = 4
    
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(y, 2,"Testing that the variable 'y' holds the original value of 'x'")
            self.assertEqual(x, 4,"Testing that the variable 'x' holds the original value of 'y'")
    myTests().main()

.. parsonsprob:: var-mixed-discount-7
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:
   
   Create code that prints out how much you will have to pay for an item that is 60% off
   the original price of $52.99. But, the blocks have been mixed up and include extra blocks that aren't needed in the solution.
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

.. activecode:: var-mixed-discount-ac-7q
    :practice: T
    :autograde: unittest

    Write code that assigns the final price you will have to pay for an item that is 60% off the original price of $52.99 to the variable ``finalPrice``.
    ~~~~
    
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(finalPrice, 21.196,"Testing that the variable 'finalPrice' holds the correct value")
    myTests().main()

.. parsonsprob:: var-mixed-cookies-8
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   Create code that prints the sentence, "Baking cookies makes Chris happier than
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

.. activecode:: var-mixed-cookies-ac-8q
    :practice: T
    :autograde: unittest

    Write code that creates a string variable called ``Chris_cookies`` that contains the sentence "Baking cookies makes Chris happier than anything else.". Use the variable ``var1``.
    ~~~~
    var1 = "cookies"

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(Chris_cookies, "Baking cookies makes Chris happier than anything else.","Testing that the variable 'Chris_cookies' contains the sentence 'Baking cookies makes Chris happier than anything else.'")
    myTests().main()

.. parsonsprob:: var-mixed-camp-9
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   Create code that prints the sentence "It takes us 2 hours and 45 minutes to get
   home from camp.". But, the blocks have been mixed up and include an extra block that isn't correct.
   -----
   numHours = 2
   numMinutes = 45
   =====
   print("It takes us " + str(numHours) + " hours and " + str(numMinutes) + " minutes to get home from camp.")
   =====
   print("It takes us " + numHours + " hours and " + numMinutes + " minutes to get home from camp.") #paired

.. activecode:: var-mixed-camp-ac-9q
    :practice: T
    :autograde: unittest

    Write code that creates a string variable called ``var`` that contains the sentence "It takes us 2 hours and 45 minutes to get home from camp.". Use the variables ``numHours`` and ``numMinutes``.
    ~~~~
    numHours = 2
    numMinutes = 45

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(var, "It takes us 2 hours and 45 minutes to get home from camp.","Testing that the variable 'var' contains the sentence 'It takes us 2 hours and 45 minutes to get home from camp.'")
    myTests().main()

.. parsonsprob:: var-mixed-numbers-10
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   Create code that prints the phrase, "3 + 300 + 7 = 310.". But, the blocks have been mixed up and include an extra block that isn't correct.
   -----
   num1 = 3
   num2 = 300
   num3 = 7
   ans = 310
   =====
   print(str(num1) + " + " + str(num2) + " + " + str(num3) + " = " + str(ans))
   =====
   print(str(num1) + str(num2) + str(num3) = str(ans)) #distractor

.. activecode:: var-mixed-numbers-ac-10q
    :practice: T
    :autograde: unittest

    Write code that creates a string variable called ``var1`` that contains the phrase "3 + 300 + 7 = 310.". Use the variables ``num1``, ``num2``, ``num3``, and ``ans``.
    ~~~~
    num1 = 3
    num2 = 300
    num3 = 7
    ans = 310

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(var1, "3 + 300 + 7 = 310.","Testing that the variable 'var1' contains the phrase '3 + 300 + 7 = 310.'")
    myTests().main()