Mixed-up Code Questions
-----------------------

.. parsonsprob:: var-mixed-1
   :practice: T
   :numbered: left
   :adaptive:

   Create code that first sets the variable ``x`` to 3, then sets the variable ``y`` to the string "hello", and then sets the variable ``z`` to the string "Python". Then set ``x_type``, ``y_type``, and ``z_type`` to the types of each of these variables. For example, x_type = int. The blocks have been mixed up and include extra blocks that aren't correct.
   -----
   x = 3
   =====
   y = "hello"
   =====
   y = hello #paired
   =====
   z = "Python"
   =====
   z = Python #paired
   =====
   x_type = type(x)
   y_type = type(y)
   z_type = type(z)
   =====
   x_type = x.type() #paired
   y_type = y.type()
   z_type = z.type()


.. activecode:: var-mixed-ac-1q
    :practice: T
    :autograde: unittest

    Write code that sets the variable ``x`` to 3, the variable ``y`` to the string "hello", and the variable ``z`` to the string "Python". Then set ``x_type``, ``y_type``, and ``z_type`` to the types of each of these variables. For example, x_type = int.
    ~~~~
    
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(x, 3, "Testing that 'x' contains 3")
            self.assertEqual(y, "hello", "Testing that 'y' contains 'hello'")
            self.assertEqual(z, "Python", "Testing that 'z' contains 'Python'")
            self.assertEqual(x_type, type(1), "Testing that 'x_type' holds the type of 'x'")
            self.assertEqual(y_type, type("hello"), "Testing that 'y_type' holds the type of 'y'")
            self.assertEqual(z_type, type("hello"), "Testing that 'z_type' holds the type of 'z'")
    myTests().main()

.. parsonsprob:: var-mixed-2
   :practice: T
   :numbered: left
   :adaptive:

   Create code that sets ``Carla`` to the sentence "Carla ate 4 apples.". The blocks have been mixed up and include extra blocks that aren't correct.
   -----
   number = 4
   fruit = "apples"
   =====
   number = 4 #paired
   fruit = " apples"
   =====
   Carla = "Carla ate " + str(number) + " " + fruit + "."
   =====
   Carla = "Carla ate" + string(number) + fruit + "." #paired


.. activecode:: var-mixed-ac-2q
    :practice: T
    :autograde: unittest

    Write code that sets ``Carla`` to the the sentence "Carla ate 4 apples.". Use the variables ``number`` and ``fruit``.
    ~~~~
    number = 4
    fruit = "apples"
    
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(Carla, "Carla ate 4 apples.","Testing that 'Carla' contains the sentence 'Carla ate 4 apples.'")
    myTests().main()


.. parsonsprob:: var-mixed-hours-3
   :practice: T
   :numbered: left
   :adaptive:

   Create code that calculates John's gross pay for a certain week and inputs it into ``grossPay`` given that he worked 45 hours that week, earned 10 dollars per hour, and recieved a 5 percent bonus of his salary that week. The blocks have been mixed up and include extra blocks that aren't correct.
   -----
   hours = 45
   payRate = 10
   =====
   hours = 45 #paired
   pay rate = 10
   =====
   grossPay = hours * payRate
   =====
   grossPay = hours * pay rate #paired
   =====
   grossPay += .05 * grossPay
   =====
   grossPay += 1.05 * grossPay #paired


.. activecode:: var-mixed-ac-3q
    :practice: T
    :autograde: unittest

    Write code that calculates John's gross pay for a certain week and inputs it into ``grossPay`` given that he worked 45 hours that week, earned 10 dollars per hour, and recieved a 5 percent bonus of his salary that week. Hint: gross pay is equal to the number of hours worked times pay rate.
    ~~~~
    

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(grossPay, 1.05 * (45 * 10),"Testing that 'grossPay' contains the correct value")
    myTests().main()


.. parsonsprob:: var-mixed-price-4
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   Create code that stores the cost of each shirt in the variable ``pricePerShirt`` if John purchases 2 shirts and gets the third free with each shirt originally costing $45. The blocks have been mixed up and include an extra block that isn't correct.
   -----
   price = 45
   =====
   totalCost = price * 2
   =====
   totalCost = price * 3 #paired
   =====
   pricePerShirt = totalCost / 3


.. activecode:: var-mixed-ac-4q
    :practice: T
    :autograde: unittest

    Write code that stores the cost of each shirt in the variable ``pricePerShirt`` if John purchases 2 shirts and gets the third free with each shirt originally costing $45. Use the variable ``price``.
    ~~~~
    price = 45

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(pricePerShirt, 30,"Testing that 'pricePerShirt' contains the value 30")
    myTests().main()


.. parsonsprob:: var-mixed-tip-5
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   Create code that assigns the cost per person for a dinner to ``perPersonCost``. ``tip`` is a percentage of the bill. The blocks have been mixed up and include an extra block that isn't needed in the solution.
   -----
   bill = 45
   tip = 19
   =====
   tip = (tip / 100) * bill
   =====
   tip = ((1 - tip) / 100) * bill #paired
   =====
   total = bill + tip
   =====
   numPeople = 3
   perPersonCost = total / numPeople


.. activecode:: var-mixed-ac-5q
    :practice: T
    :autograde: unittest

    Write code that assigns the cost per person for a dinner to ``perPersonCost``. The bill is 45 dollars and the tip is 19 percent of the bill. The cost per person will be divided equally.
    ~~~~
    bill = 45

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(perPersonCost, (45 + 0.19 * (45)) / 3,"Testing that 'perPersonCost' contains the correct value")
    myTests().main()


.. parsonsprob:: var-mixed-switch-6
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   Create code that swaps the values of ``x`` and ``y``. The blocks have been mixed up and include an extra block that isn't
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
   temp = y #paired


.. activecode:: var-mixed-switch-ac-6q
    :practice: T
    :autograde: unittest

    Write code that swaps the values of ``x`` and ``y`` using a temporary variable.
    ~~~~
    x = 2
    y = 4
    
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(y, 2,"Testing that 'y' holds 2")
            self.assertEqual(x, 4,"Testing that 'x' holds 4")
    myTests().main()


.. parsonsprob:: var-mixed-discount-7
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:
   
   Create code that assigns the final price you will have to pay for an item that is 60% off the original price of $52.99 to ``finalPrice``. The blocks have been mixed up and include extra blocks that aren't needed in the solution.
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
   finalPrice = price - discount #paired


.. activecode:: var-mixed-discount-ac-7q
    :practice: T
    :autograde: unittest

    Write code that assigns the final price you will have to pay for an item that is 60% off the original price of $52.99 to ``finalPrice``.
    ~~~~
    
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(finalPrice, 21.196,"Testing that 'finalPrice' holds the correct value")
    myTests().main()


.. parsonsprob:: var-mixed-cookies-8
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   Create code that sets ``cookies`` to the sentence "Chris likes baking cookies more than anything.". The blocks have been mixed up and include extra blocks that aren't correct.
   -----
   var1 = "Chris likes baking "
   =====
   var2 = " more " + "than anything."
   =====
   var2 = " more than " + " anything." #paired
   =====
   cookies = var1 + "cookies" + var2
   =====
   cookies = var1 + cookies + var2 #paired


.. activecode:: var-mixed-cookies-ac-8q
    :practice: T
    :autograde: unittest

    Write code that sets ``cookies`` to the sentence "Chris likes baking cookies more than anything.". Use the variables ``var1`` and ``var2``.
    ~~~~
    var1 = "Chris likes baking "
    var2 = " more " + "than anything."

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(cookies, "Chris likes baking cookies more than anything.","Testing that 'cookies' contains the sentence 'Chris likes baking cookies more than anything.'")
    myTests().main()


.. parsonsprob:: var-mixed-camp-9
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   Create code that sets ``var`` to the sentence "It takes us 165 minutes to get
   home from camp.". Then append the sentence "165 minutes is also 2 hours and 45 minutes." to the variable. The blocks have been mixed up and include extra blocks that aren't correct.
   -----
   numHours = 2
   numMinutes = 45   
   =====
   var = "It takes us " + str(numHours * 60 + 45) + " minutes to get home from camp. "
   =====
   var = "It takes us " + (numHours * 60) + 45 + " minutes to get home from camp. " #paired
   =====
   var += "165 minutes is also " + str(numHours) + " hours and " + str(numMinutes) + "."
   =====
   var += "165 minutes is also " + string(numHours) + " hours and " + string(numMinutes) + "." #paired


.. activecode:: var-mixed-camp-ac-9q
    :practice: T
    :autograde: unittest

    Write code that sets ``var`` to the sentence "It takes us 165 minutes to get home from camp.". Then append the sentence "165 minutes is also 2 hours and 45 minutes." to the variable. Use the variables ``numHours`` and ``numMinutes``.
    ~~~~
    numHours = 2
    numMinutes = 45

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(var, "It takes us 165 minutes to get home from camp. 165 minutes is also 2 hours and 45 minutes.","Testing that 'var' contains the sentence 'It takes us 165 minutes to get home from camp. 165 minutes is also 2 hours and 45 minutes.'")
    myTests().main()


.. parsonsprob:: var-mixed-numbers-10
   :adaptive:
   :numbered: left
   :practice: T
   :noindent:

   Create code that sets ``num_quarters`` to the maximum number of quarters you can provide as change if your friend owed you 17.42 dollars but gave you 20 dollars. The blocks have been mixed up and include an extra block that isn't correct.
   -----
   money_recieved = 20
   money_owed = 17.42
   =====
   change = 20 - 17.42
   =====
   num_quarters = change // 0.25
   =====
   num_quarters = change / int(0.25) #paired


.. activecode:: var-mixed-numbers-ac-10q
    :practice: T
    :autograde: unittest

    Write code that sets ``num_quarters`` to the maximum number of quarters you can provide as change if your friend owed you 17.42 dollars but gave you 20 dollars.
    ~~~~


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(num_quarters, 10,"Testing that 'num_quarters' contains 10")
    myTests().main()