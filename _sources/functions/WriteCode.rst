Write Code Questions
--------------------
#.
    .. tabbed:: funct-ex-perimeter

        .. tab:: Question

            .. activecode:: funct-ex-perimeterq
                :practice: T
                :autograde: unittest

                Fix the 4 errors so the following code runs and returns the perimeter of a rectangle. For example, ``recPerimeter(10, 20)`` should return ``60``.
                ~~~~
                def recPerimeter(length, width)
                perimeter = 2 * (length + width)
                    Return recPerimeter

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(recPerimeter(10, 20),60,"recPerimeter(10, 20)")
                        self.assertEqual(recPerimeter(1, 2),6,"recPerimeter(1, 2)")
                        self.assertEqual(recPerimeter(23.2, 12.3),71,"recPerimeter(23.2, 12.3)")
                        self.assertEqual(recPerimeter(3.0, 2),10.0,"recPerimeter(3.0, 2)")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct-ex-perimetera
                :optional:

                Fix the 4 errors so the following code runs and returns the perimeter of a rectangle. For example, ``recPerimeter(10, 20)`` should return ``60``.
                ~~~~
                # Function headers end with a colon (:)
                def recPerimeter(length, width):

                    # Indent four spaces after the header
                    perimeter = 2 * (length + width)

                    # Keyword return is lowercase
                    # Return the variable, not the function name
                    return perimeter

#.
    .. activecode:: funct_ex_squareq
        :practice: T
        :autograde: unittest

        Fix the 5 errors so the following code runs and returns the area of a square. For example, ``squareArea(10)`` should return ``100``.
        ~~~~
        Def squareArea(sideLength)
            area = length * length
            return squareArea


        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(squareArea(10),100,"squareArea(10)")
                self.assertEqual(squareArea(23),529,"squareArea(23)")

        myTests().main()

#.
    .. tabbed:: funct_ex_triangle

        .. tab:: Question

            .. activecode:: funct_ex_triangleq
                :practice: T
                :autograde: unittest

                Change the code so that ``areaTriangle`` takes parameters for the base and height of a triangle
                and computes its area. Then, write code to call the function and print the result. For example, ``areaTriangle(12,45)`` should return ``270``.
                ~~~~
                def areaTriangle():
                    base = 5
                    height = 4
                    return (5 * 4) / 2

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(areaTriangle(12,45),270,"areaTriangle(12,45)")
                        self.assertEqual(areaTriangle(5,4),10,"areaTriangle(5,4)")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_ex_trianglea
                :optional:

                Change the code so that ``areaTriangle`` takes parameters for the base and height of a triangle
                and computes its area. Then, write code to call the function and print the result. For example, ``areaTriangle(12,45)`` should return ``270``.
                ~~~~
                # Give function base and height arguments
                def areaTriangle(base, height):
                    # Set area variable to the formula using arguments
                    area = (base * height) / 2
                    # Return the calculated area
                    return area
                # Call the function with arguments
                print(areaTriangle(2, 6))

#.
    .. activecode:: funct_ex_tripq
        :practice: T
        :autograde: unittest

        Change the code below to create a function ``tripCost`` that calculates the cost of a trip.
        It should take the ``miles``, ``milesPerGallon``, and ``pricePerGallon`` as parameters and
        should return the cost of the trip. For example, ``tripCost(100, 25, 2.24)`` should return ``8.96``.
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
                self.assertAlmostEqual(tripCost(100, 25, 2.24),8.96,2,"tripCost(100, 25, 2.24)")
                self.assertAlmostEqual(tripCost(250, 20, 3.01),37.625,3,"tripCost(250, 20, 3.01)")

        myTests().main()



#.
    .. tabbed:: funct_ex_name

        .. tab:: Question

            .. activecode:: funct_ex_nameq
                :practice: T
                :autograde: unittest

                Fix the errors on line 2 so the function ``nameAndAge`` returns 
                the string "My name is ``nameString`` and I am ``ageInt`` years old." For example, ``nameAndAge("John", 18)`` should return 
                ``"My name is John and I am 18 years old."``
                ~~~~
                def nameAndAge(nameString, ageInt):
                    return(My name is "nameString" and I am + "str(ageInt)" + years old.)

                print(nameAndAge("John", 18))

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(nameAndAge("John", 18),"My name is John and I am 18 years old.","nameAndAge('John', 18)")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_ex_namea
                :optional:

                Fix the errors on line 2 so the function ``nameAndAge`` returns 
                the string "My name is ``nameString`` and I am ``ageInt`` years old." For example, ``nameAndAge("John", 18)`` should return 
                ``"My name is John and I am 18 years old."``
                ~~~~
                def nameAndAge(nameString, ageInt):
                    # Use quotes around strings, keep variables outside of quotes
                    # Include spacing so variables are not connected to words
                    return("My name is " + nameString + " and I am " + str(ageInt) + " years old.")

                print(nameAndAge("John", 18))

#.
    .. activecode:: funct_ex_gradeq
        :practice: T
        :autograde: unittest

        Rewrite the grade program from the previous chapter using a function called ``computegrade`` 
        that takes a score as its parameter and returns a string representing a grade. If someone 
        enters a string or a score greater than 1, return ``'Bad score'``. For example, ``computegrade(.95)`` should return ``'A'``.

        .. code-block:: python

            Score    Grade
            >= 0.9     A
            >= 0.8     B
            >= 0.7     C
            >= 0.6     D
            < 0.6      F
        ~~~~
        def computegrade(score):
            # your code here

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(computegrade(.95),'A',"computegrade(.95)")
                self.assertEqual(computegrade('perfect'),'Bad score',"computegrade('perfect')")
                self.assertEqual(computegrade(10.0),'Bad score',"computegrade(10.0)")
                self.assertEqual(computegrade(.75),'C',"computegrade(.75)")
                self.assertEqual(computegrade(.5),'F',"computegrade(.5)")

        myTests().main()


#.
    .. tabbed:: funct_ex_sum

        .. tab:: Question

            .. activecode:: funct_ex_sumq
                :practice: T
                :autograde: unittest

                Write a fruitful function ``sumTo(n)`` that returns the sum of all integer numbers up to and 
                including ``n``. For example, ``sumTo(10)`` would compute 1 + 2 + 3 + ... + 10 and return the value ``55``. 
                Use this equation to find this sum: (n * (n + 1)) / 2. For example, ``sumTo(15)`` should return ``120.0``.
                ~~~~
                def sumTo(n):
                    # your code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertAlmostEqual(sumTo(15),120.0,0,"sumTo(15)")
                        self.assertAlmostEqual(sumTo(0),0.0,0,"sumTo(0)")
                        self.assertAlmostEqual(sumTo(25),325.0,0,"sumTo(25)")
                        self.assertAlmostEqual(sumTo(7),28.0,0,"sumTo(7)")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_ex_suma
                :optional:

                Write a fruitful function ``sumTo(n)`` that returns the sum of all integer numbers up to and 
                including ``n``. For example, ``sumTo(10)`` would compute 1 + 2 + 3 + ... + 10 and return the value ``55``. 
                Use this equation to find this sum: (n * (n + 1)) / 2. For example, ``sumTo(15)`` should return ``120.0``.
                ~~~~
                def sumTo(n):
                    # set result variable to given equation
                    result = (n * (n + 1)) / 2
                    # return the variable
                    return result
                    # alternatively, you can accomplish this on one line:
                    # return (n * (n + 1)) / 2

#.
    .. activecode:: funct_ex_addq
        :practice: T
        :autograde: unittest

        Rewrite the function ``sumTo(n)`` that returns the sum of all integer 
        numbers up to and including ``n``. This time, print your answer before you return it. 
        For example, ``sumTo(15)`` should return ``120``.
        ~~~~
        def sumTo(n):
            # your code here

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(sumTo(15),120,"sumTo(15)")
                self.assertEqual(sumTo(0),0,"sumTo(0)")
                self.assertEqual(sumTo(25),325,"sumTo(25)")
                self.assertEqual(sumTo(7),28,"sumTo(7)")

        myTests().main()


#.
   .. tabbed:: funct_ex_circle

        .. tab:: Question

            .. activecode:: funct_ex_circleq
                :practice: T
                :autograde: unittest

                Write a function ``areaOfCircle(r)`` which returns the area of a circle of radius ``r``. 
                Make sure you import the math module in your solution to obtain an accurate value of pi. 
                For example, ``areaOfCircle(31415.926535897932)`` should return ``3100627668.0299816``.
                ~~~~
                def areaOfCircle(r):
                    # your code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertAlmostEqual(areaOfCircle(5.0),78.53981633974483,5,"areaOfCircle(5.0)")
                        self.assertEqual(areaOfCircle(0),0.0,"areaOfCircle(0)")
                        self.assertAlmostEqual(areaOfCircle(31415.926535897932),3100627668.0299816,5,"areaOfCircle(31415.926535897932)")


                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_ex_circlea
                :optional:

                Write a function ``areaOfCircle(r)`` which returns the area of a circle of radius ``r``. 
                Make sure you import the math module in your solution to obtain an accurate value of pi. 
                For example, ``areaOfCircle(31415.926535897932)`` should return ``3100627668.0299816``.
                ~~~~
                # Import the math module
                import math

                def areaOfCircle(r):
                    # Use ** to square r, then multiply by pi
                    a = r**2 * math.pi
                    # Return the area
                    return a

#.
    .. activecode:: funct_avg_drop_lowest
       :autograde: unittest
       :nocodelens:

       Finish the function to return the average of three numbers, but drop the lowest value.
       For example, ``get_avg_drop_lowest(100, 10, 0)`` returns ``55``
       and ``get_avg_drop_lowest(4, 3, 10)`` returns ``7``.
       ~~~~
       def get_avg_drop_lowest(num1, num2, num3):

       ====
       from unittest.gui import TestCaseGui

       class myTests(TestCaseGui):

           def testOne(self):
               self.assertEqual(get_avg_drop_lowest(100, 10, 0), 55, "get_avg_drop_lowest(100, 10, 0)")
               self.assertEqual(get_avg_drop_lowest(4, 3, 10), 7, "get_avg_drop_lowest(4, 3, 10)")
               self.assertEqual(get_avg_drop_lowest(20, -20, 20), 20, "get_avg_drop_lowest(20, -20, 20)")
               self.assertEqual(get_avg_drop_lowest(0, 0, 0), 0, "get_avg_drop_lowest(0, 0, 0)")
               self.assertAlmostEqual(get_avg_drop_lowest(75, 83, 90), 86.5, 1, "get_avg_drop_lowest(75, 83, 90)")

       myTests().main()

#.

    .. tabbed:: funct_ex_speeding

        .. tab:: Question

            .. activecode:: funct_ex_speedingq
                :autograde: unittest
                :nocodelens:

                You are driving a little too fast, and a police officer stops you. Write code to 
                compute the kind of ticket you'll receive, encoded as an int value: 0 = no ticket, 1 = 
                small ticket, and 2 = big ticket. If ``speed`` is 60 or less, return ``0``. If ``speed`` 
                is between 61 and 80 inclusive, return ``1``. If ``speed`` is 81 or more, return ``2``. 
                If it is your birthday, your speed can be 5 higher in all cases. For example, ``caught_speeding(60,False)`` should return ``0``.
                ~~~~
                def caught_speeding(speed, is_birthday):

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(caught_speeding(60,False), 0, "caught_speeding(60,False)")
                        self.assertEqual(caught_speeding(65,False), 1, "caught_speeding(65,False)")
                        self.assertEqual(caught_speeding(65,True), 0, "caught_speeding(65,True)")
                        self.assertEqual(caught_speeding(80,False), 1, "caught_speeding(80,False)")
                        self.assertEqual(caught_speeding(85,False), 2, "caught_speeding(85,False)")
                        self.assertEqual(caught_speeding(85,True), 1, "caught_speeding(85,True)")
                        self.assertEqual(caught_speeding(70,False), 1, "caught_speeding(70,False)")
                        self.assertEqual(caught_speeding(75,False), 1, "caught_speeding(75,False)")
                        self.assertEqual(caught_speeding(75,True), 1, "caught_speeding(75,True)")
                        self.assertEqual(caught_speeding(40, False), 0, "caught_speeding(40, False)")
                        self.assertEqual(caught_speeding(40, True), 0, "caught_speeding(40, True)")
                        self.assertEqual(caught_speeding(90, False), 2, "caught_speeding(90, False)")

                myTests().main()

        .. tab:: Answer

            .. activecode:: funct_ex_speedinga
                :optional:

                You are driving a little too fast, and a police officer stops you. Write code to 
                compute the kind of ticket you'll receive, encoded as an int value: 0 = no ticket, 1 = 
                small ticket, and 2 = big ticket. If ``speed`` is 60 or less, return ``0``. If ``speed`` 
                is between 61 and 80 inclusive, return ``1``. If ``speed`` is 81 or more, return ``2``. 
                If it is your birthday, your speed can be 5 higher in all cases. For example, ``caught_speeding(60,False)`` should return ``0``.
                ~~~~
                def caught_speeding(speed, is_birthday):
                    if is_birthday:
                        if speed <= 65:
                            return 0
                        elif speed <= 85:
                            return 1
                        else:
                            return 2
                    else:
                        if speed <= 60:
                            return 0
                        elif speed <= 80:
                            return 1
                        else:
                            return 2


#.
    .. activecode:: funct_check_guess
       :autograde: unittest
       :nocodelens:

       Write the ``check_guess`` function below which computes if a guess is too low, too high, or correct.
       Return ``'too low'`` if ``guess`` is less than ``target``, ``'correct'`` if they are equal, and
       ``'too high'`` if ``guess`` is greater than ``target``.  For example, ``check_guess(5, 7)`` returns
       ``'too low'``, ``check_guess(7, 7)`` returns ``'correct'``, and ``check_guess(9, 7)`` returns ``'too high'``.
       ~~~~
       def check_guess(guess, target):

       ====
       from unittest.gui import TestCaseGui

       class myTests(TestCaseGui):

           def testOne(self):
               self.assertEqual(check_guess(5, 7), 'too low', "check_guess(5, 7)")
               self.assertEqual(check_guess(7, 7), 'correct', "check_guess(7, 7)")
               self.assertEqual(check_guess(9, 7), 'too high', "check_guess(9, 7)")
               self.assertEqual(check_guess(3, 9), 'too low', "check_guess(3, 9)")
               self.assertEqual(check_guess(3, 3), 'correct', "check_guess(3, 3)")
               self.assertEqual(check_guess(20, 9), 'too high', "check_guess(20, 9)")
               self.assertEqual(check_guess(-5, 7), 'too low', "check_guess(-5, 7)")


       myTests().main()



#.
    .. tabbed:: funct_ex_alarm

        .. tab:: Question

            .. activecode:: funct_ex_alarmq
                :practice: T
                :autograde: unittest

                Write a function called ``alarm_clock`` that has parameters ``day`` and ``vacation``. Given a ``day`` of the week encoded as 0 = Sun, 1 = Mon, 2 = Tue, ... 6 = Sat and a 
                boolean indicating if we are on ``vacation``, return a string indicating when the 
                alarm clock should ring. If we are on ``vacation`` and it is a weekend (0 = Saturday 
                or 6 = Sunday), it should return ``"off"``, and otherwise return ``"10:00"``. If 
                we are not on ``vacation`` and it is a weekend, it should return ``"10:00"``, and 
                otherwise return ``"7:00"``. For example, ``alarm_clock(1, False)`` should return ``'7:00'``.
                ~~~~
                def alarm_clock(day, vacation):
                    # your code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(alarm_clock(1, False),'7:00',"alarm_clock(1, False)")
                        self.assertEqual(alarm_clock(5, False),'7:00',"alarm_clock(5, False)")
                        self.assertEqual(alarm_clock(0, False),'10:00',"alarm_clock(0, False)")
                        self.assertEqual(alarm_clock(6, False),'10:00',"alarm_clock(6, False)")
                        self.assertEqual(alarm_clock(0, True),'off',"alarm_clock(0, True)")
                        self.assertEqual(alarm_clock(6, True),'off',"alarm_clock(6, True)")
                        self.assertEqual(alarm_clock(1, True),'10:00',"alarm_clock(1, True)")

                myTests().main()

        .. tab:: Answer

            .. activecode:: funct_ex_alarma
                :optional:

                Write a function called ``alarm_clock`` that has parameters ``day`` and ``vacation``. Given a ``day`` of the week encoded as 0 = Sun, 1 = Mon, 2 = Tue, ... 6 = Sat and a 
                boolean indicating if we are on ``vacation``, return a string indicating when the 
                alarm clock should ring. If we are on ``vacation`` and it is a weekend (0 = Saturday 
                or 6 = Sunday), it should return ``"off"``, and otherwise return ``"10:00"``. If 
                we are not on ``vacation`` and it is a weekend, it should return ``"10:00"``, and 
                otherwise return ``"7:00"``. For example, ``alarm_clock(1, False)`` should return ``'7:00'``.
                ~~~~
                def alarm_clock(day, vacation):
                    if vacation:
                        if (day == 0 or day == 6):
                            return 'off'
                        else:
                            return '10:00'
                    else:
                        if not vacation and (day == 0 or day == 6):
                            return '10:00'
                        else:
                            return '7:00'
    


