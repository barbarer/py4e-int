Exercises
--------------------
.. question:: functions_ex_0

   .. tabbed:: q0

        .. tab:: Question

            .. activecode:: ex_0
               :practice: T
               :autograde: unittest

               Fix the errors so it runs and returns the perimeter of a rectangle.
               ~~~~

               def recPerimeter(length, width)
               perimeter = 2 * (length + width)
               Return recPerimeter

               ====
               from unittest.gui import TestCaseGui
               class myTests(TestCaseGui):

                   def testOne(self):
                       self.assertEqual(recPerimeter(10, 20),60,"Tested recPerimeter on inputs 10 and 20")
                       self.assertEqual(recPerimeter(1, 2),6,"Tested recPerimeter on inputs 1 and 2")
                       self.assertEqual(recPerimeter(23.2, 12.3),71,"Tested recPerimeter on inputs 23.2 and 12.3")
                       self.assertEqual(recPerimeter(3.0, 2),10.0,"Tested recPerimeter on inputs 3.0 and 2")

               myTests().main()


        .. tab:: Answer

            .. activecode:: func_q0_answer

                def recPerimeter(length, width):
                    perimeter = 2 * (length + width)
                    return perimeter


.. question:: functions_ex_01

   .. tabbed:: q01

        .. tab:: Question

            .. activecode:: ex_01
               :practice: T
               :autograde: unittest

               Fix the errors so the code runs and returns the area of a square.
               ~~~~

               Def squareArea(sideLength)
                    area = length * length
                    return squareArea


               ====
               from unittest.gui import TestCaseGui
               class myTests(TestCaseGui):

                   def testOne(self):
                       self.assertEqual(squareArea(10),100,"Tested squareArea on input 10")
                       self.assertEqual(squareArea(23),529,"Tested squareArea on input 23")

               myTests().main()


        .. tab:: Answer

            .. activecode:: func_q01_answer

                def squareArea(sideLength):
                    area = sideLength * sideLength
                    return area

.. question:: functions_ex_02

   .. tabbed:: q02

        .. tab:: Question

            .. activecode:: ex_02
               :practice: T
               :autograde: unittest

               Change the code so the function takes parameters for the base and height of the triangle. Then, write code to call the function and print the result.
               ~~~~

               def areaTriangle():
                base = 5
                height = 4
                return (5 * 4) / 2

               ====
               from unittest.gui import TestCaseGui
               class myTests(TestCaseGui):

                   def testOne(self):
                       self.assertEqual(areaTriangle(12,45),270,"Tested areaTriangle on inputs 12 and 45")
                       self.assertEqual(areaTriangle(5,4),10,"Tested areaTriangle on inputs 5 and 4")

               myTests().main()


        .. tab:: Answer

            .. activecode:: func_q02_answer

                def areaTriangle(base, height):
                    area = (base * height) / 2
                    return area

                print(areaTriangle(2, 6))

.. question:: functions_ex_03

   .. tabbed:: q03

        .. tab:: Question

            .. activecode:: ex_03
               :practice: T
               :autograde: unittest

               Change the code below to create a function that calculates the cost of a trip.  It should take the ``miles``, ``milesPerGallon``, and ``pricePerGallon`` as parameters and should return the cost of the trip.
               ~~~~

               miles = 500
               milesPerGallon = 26
               numGallons = miles / milesPerGallon
               pricePerGallon = 3.45
               total = numGallons * pricePerGallon
               print(total)

               ====
               from unittest.gui import TestCaseGui
               class myTests(TestCaseGui):

                   def testOne(self):
                       self.assertEqual(tripCost(100, 25, 2.24),8.96,"Tested tripCost on inputs 100, 25, and 2.24")
                       self.assertEqual(tripCost(250, 20, 3.01),37.625,"Tested tripCost on inputs 250, 20, and 3.01")

               myTests().main()


        .. tab:: Answer

            .. activecode:: func_q03_answer

                def tripCost(miles, milesPerGallon, pricePerGallon):
                    numGallons = miles / milesPerGallon
                    cost = numGallons * pricePerGallon
                    return cost


.. question:: functions_ex_1

   .. tabbed:: q1

        .. tab:: Question

            .. activecode:: ex_4_1
                :practice: T
                :autograde: unittest

                Fix the errors so it prints "My name is John and I am 18 years old". The ``nameAndAge`` function should return a string.
                ~~~~

                def nameAndAge(nameString, ageInt):
                   return(My name is "nameString" and I am + "str(ageInt)" + years old)

                print(nameAndAge(18, "John"))

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                   def testOne(self):
                      self.assertEqual(nameAndAge("John", 18),"My name is John and I am 18 years old","Checks if the returned strings are equal.")

                myTests().main()


        .. tab:: Answer

            .. activecode:: func_q1_answer

                def nameAndAge(nameString, ageInt):
                    return("My name is "+ nameString + " and I am " + str(ageInt) + " years old")

                print(nameAndAge("John", 18))



.. question:: functions_ex_2

   .. tabbed:: q2

        .. tab:: Question

            .. activecode:: ex_4_2
                :practice: T
                :autograde: unittest

                Write a fruitful function ``sumTo(n)`` that returns the sum of all integer numbers up to and
                including `n`.   So ``sumTo(10)`` would be ``1+2+3...+10`` which would return the value 55.  Use the
                equation  (n * (n + 1)) / 2.
                ~~~~

                def sumTo(n):
                    # your code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertAlmostEqual(sumTo(15),120.0,0,"Tested sumTo on input 15")
                        self.assertAlmostEqual(sumTo(0),0.0,0,"Tested sumTo on input 0")
                        self.assertAlmostEqual(sumTo(25),325.0,0,"Tested sumTo on input 25")
                        self.assertAlmostEqual(sumTo(7),28.0,0,"Tested sumTo on input 7")

                myTests().main()


        .. tab:: Answer

            .. activecode:: func_q2_answer

                def sumTo(n):
                    result = (n * (n + 1)) / 2
                    return result


.. question:: functions_ex_3

   .. tabbed:: q3

        .. tab:: Question

            .. activecode:: ex_4_3
                :practice: T
                :autograde: unittest

                Write a function `areaOfCircle(r)` which returns the area of a circle of radius `r`.  Make sure you use the math module in your solution.
                ~~~~

                def areaOfCircle(r):
                    # your code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertAlmostEqual(areaOfCircle(5.0),78.53981633974483,5,"Tested input: areaOfCircle(5.0)")
                        self.assertEqual(areaOfCircle(5.0),78.53981633974483,"Tested input: areaOfCircle(5.0)")
                        self.assertEqual(areaOfCircle(0),0.0,"Tested input: areaOfCircle(0)")
                        self.assertAlmostEqual(areaOfCircle(31415.926535897932),3100627668.0299816,5,"Tested input: areaOfCircle(31415.926535897932)")


                myTests().main()


        .. tab:: Answer

            .. activecode:: func_q3_answer

                import math

                def areaOfCircle(r):
                   a = r**2 * math.pi
                   return a

.. question:: functions_ex_4

   .. tabbed:: q4

        .. tab:: Question

            .. activecode:: ex_4_4
                :practice: T
                :autograde: unittest

                Rewrite the grade program from the previous chapter using a function called ``computegrade`` that takes a score as its parameter and returns a grade as a string. If someone enters an invalid score, return 'Bad score'.

                .. code-block:: python

                   Score    Grade
                   >= 0.9     A
                   >= 0.8     B
                   >= 0.7     C
                   >= 0.6     D
                   < 0.6      F
                ~~~~

                def computegrade(r):
                    # your code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(computegrade(.95),'A',"Tested input: computegrade(.95)")
                        self.assertEqual(computegrade('perfect'),'Bad score',"computegrade('perfect')")
                        self.assertEqual(computegrade(10.0),'Bad score',"Tested input: computegrade(10.0)")
                        self.assertEqual(computegrade(.75),'C',"Tested input: computegrade(.75)")
                        self.assertEqual(computegrade(.5),'F',"Tested input: computegrade(.5)")


                myTests().main()


        .. tab:: Answer

            .. activecode:: func_q4_answer

                def computegrade(r):
                    if ((type(r) == float) and r < 1.0):
                        if (r >= .9):
                            return('A')
                        elif (r >= .8):
                            return('B')
                        elif (r >= .7):
                            return('C')
                        elif (r >= .6):
                            return('D')
                        elif (r < .6):
                            return('F')
                        else:
                            return('Bad score')
                    return('Bad score')

.. question:: functions_ex_5

   .. tabbed:: q5

        .. tab:: Question

            .. activecode:: ex_5_13
               :practice: T
               :autograde: unittest

               Rewrite the function ``sumTo(n)`` that returns the sum of all integer numbers up to and
               including `n`.   This time use the accumulator pattern.
               ~~~~

               def sumTo(n):
                   # your code here

               ====
               from unittest.gui import TestCaseGui
               class myTests(TestCaseGui):

                   def testOne(self):
                       self.assertEqual(sumTo(15),120,"Tested sumTo on input 15")
                       self.assertEqual(sumTo(0),0,"Tested sumTo on input 0")
                       self.assertEqual(sumTo(25),325,"Tested sumTo on input 25")
                       self.assertEqual(sumTo(7),28,"Tested sumTo on input 7")

               myTests().main()


        .. tab:: Answer

            .. activecode:: func_q13_answer

                def sumTo(n):
                    sum = 0
                    for i in range(1,n+1):
                        sum = sum + i
                    return sum

.. question:: functions_ex_6

   .. tabbed:: q6

        .. tab:: Question

            .. activecode:: ex_6_13
               :practice: T
               :autograde: unittest

               Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, …6=Sat, and a boolean indicating if we are on vacation, return a string of the form “7:00” indicating when the alarm clock should ring. Weekdays, the alarm should be “7:00” and on the weekend it should be “10:00”. Unless we are on vacation – then on weekdays it should be “10:00” and weekends it should be “off”.
               ~~~~

               def alarm_clock(day, vacation):
                   # your code here

               ====
               from unittest.gui import TestCaseGui
               class myTests(TestCaseGui):

                   def testOne(self):
                       self.assertEqual(alarm_clock(1, False),'7:00',"Tested alarm_clock on input 1 and False")
                       self.assertEqual(alarm_clock(5, False),'7:00',"Tested alarm_clock on input 5 and False")
                       self.assertEqual(alarm_clock(0, False),'10:00',"Tested alarm_clock on input 0 and False")
                       self.assertEqual(alarm_clock(6, False),'10:00',"Tested alarm_clock on input 6 and False")
                       self.assertEqual(alarm_clock(0, True),'off',"Tested alarm_clock on input 0 and True")
                       self.assertEqual(alarm_clock(6, True),'off',"Tested alarm_clock on input 6 and True")
                       self.assertEqual(alarm_clock(1, True),'10:00',"Tested alarm_clock on input 1 and True")

               myTests().main()


        .. tab:: Answer

            .. activecode:: func_q6_answer

                def alarm_clock(day, vacation):
                    if (vacation):
                        if (day > 0 and day < 6):
                            return "10:00"
                        else:
                            return "off"
                    else:
                        if (day > 0 and day < 6):
                            return "7:00"
                        else:
                            return "10:00"
