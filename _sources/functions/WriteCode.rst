Write Code Questions
--------------------
#.
    .. tabbed:: funct-ex-perimeter

        .. tab:: Question

            .. activecode:: funct-ex-perimeterq
                :practice: T
                :autograde: unittest

                Fix the 4 errors so the following code runs and returns the perimeter of a rectangle.
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

            .. activecode:: funct-ex-perimetera
                :optional:

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

        Fix the 5 errors so the following code runs and returns the area of a square.
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

#.
    .. tabbed:: funct_ex_triangle

        .. tab:: Question

            .. activecode:: funct_ex_triangleq
                :practice: T
                :autograde: unittest

                Change the code so the function takes parameters for the base and height of the triangle.
                Then, write code to call the function and print the result.
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

            .. activecode:: funct_ex_trianglea
                :optional:

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
        should return the cost of the trip.
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



#.
    .. tabbed:: funct_ex_name

        .. tab:: Question

            .. activecode:: funct_ex_nameq
                :practice: T
                :autograde: unittest

                Fix the errors on line 2 so the function ``nameAndAge`` returns
                the string "My name is **name** and I am **age** years old." The function
                call below should print "My name is John and I am 18 years old."
                ~~~~
                def nameAndAge(nameString, ageInt):
                    return(My name is "nameString" and I am + "str(ageInt)" + years old.)

                print(nameAndAge("John", 18))

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(nameAndAge("John", 18),"My name is John and I am 18 years old.","Checks if the returned strings are equal.")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_ex_namea
                :optional:

                def nameAndAge(nameString, ageInt):
                    # Use quotes around strings, keep variables outside of quotes
                    # Include spacing so variables are not connected to words
                    return("My name is "+ nameString + " and I am " + str(ageInt) + " years old")

                print(nameAndAge("John", 18))

#.
    .. activecode:: funct_ex_gradeq
        :practice: T
        :autograde: unittest

        Rewrite the grade program from the previous chapter using a function called ``computegrade``
        that takes a score as its parameter and returns a grade as a string. If someone enters an
        invalid score, return 'Bad score'.

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

#.
    .. tabbed:: funct_ex_sum

        .. tab:: Question

            .. activecode:: funct_ex_sumq
                :practice: T
                :autograde: unittest

                Write a fruitful function ``sumTo(n)`` that returns the sum of all integer numbers up to and
                including `n`. So ``sumTo(10)`` would be ``1+2+3...+10`` which would return the value 55.
                Use the equation  (n * (n + 1)) / 2.
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

            .. activecode:: funct_ex_suma
                :optional:

                def sumTo(n):
                    # Set result variable to given equation
                    result = (n * (n + 1)) / 2
                    # return the variable
                    return result

#.
    .. activecode:: funct_ex_addq
        :practice: T
        :autograde: unittest

        Rewrite the function ``sumTo(n)`` that returns the sum of all integer
        numbers up to and including `n`. This time use the accumulator pattern.
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


#.
   .. tabbed:: funct_ex_circle

        .. tab:: Question

            .. activecode:: funct_ex_circleq
                :practice: T
                :autograde: unittest

                Write a function ``areaOfCircle(r)``` which returns the area of a circle of radius `r`.
                Make sure you import the math module in your solution.
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

            .. activecode:: funct_ex_circlea
                :optional:

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

       Finish the function to return the average of a list of numbers, but drop the lowest value. However,
       if the list only has one value then return that.  For example, get_avg_drop_lowest([90]) returns 90 and
       get_avg_drop_lowest([90, 10]) also returns 90.
       ~~~~
       def get_avg_drop_lowest(num_list):

       ====
       from unittest.gui import TestCaseGui

       class myTests(TestCaseGui):

           def testOne(self):
               self.assertEqual(get_avg_drop_lowest([90]), 90, "get_avg_drop_lowest([90])")
               self.assertEqual(get_avg_drop_lowest([90, 10]), 90, "get_avg_drop_lowest([90, 10])")
               self.assertEqual(get_avg_drop_lowest([20, -20, 20]), 20, "get_avg_drop_lowest([20, -20, 20])")
               self.assertEqual(get_avg_drop_lowest([70, 80, 100]), 90, "get_avg_drop_lowest([70, 80, 100])")
               self.assertEqual(get_avg_drop_lowest([75, 83, 90]), 86.5, "get_avg_drop_lowest([75, 83, 90])")

       myTests().main()

#.
    .. activecode:: funct_get_middle
       :autograde: unittest
       :nocodelens:

       Finish the function below to return the middle characters from the passed string.
       If the string has less than 3 characters then return the passed string.
       If the string has an odd length then return the middle character.  If the string has an even
       length return the two middle characters.  For example, get_middle('abc') returns
       'b' and get_middle('abcd') returns 'bc'.
       ~~~~
       def get_middle(str):

       ====
       from unittest.gui import TestCaseGui

       class myTests(TestCaseGui):

           def testOne(self):
               self.assertEqual(get_middle('abc'), 'b', "get_middle('abc')")
               self.assertEqual(get_middle('abcd'), 'bc', "get_middle('abcd')")
               self.assertEqual(get_middle('12345'), '3', "get_middle('12345')")
               self.assertEqual(get_middle('123456'), '34', "get_middle('123456')")
               self.assertEqual(get_middle('ab'), 'ab', "get_middle('ab')")
               self.assertEqual(get_middle('a'), 'a', "get_middle('a')")
               self.assertEqual(get_middle(''), '', "get_middle('')")


       myTests().main()

#.
    .. activecode:: funct_speeding
       :autograde: unittest
       :nocodelens:


       You are driving a little too fast, and a police officer stops you. Write code to
       compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
       2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and
       80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is
       your birthday -- on that day, your speed can be 5 higher in all cases.
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


#.
    .. activecode:: funct_check_guess
       :autograde: unittest
       :nocodelens:

       Finish the function below to return 'too low' if the guess is less than the passed
       target, 'correct' if they are equal, and 'too high' if the guess is greater than the
       passed target.  For example, check_guess(5,7) returns 'too low',
       check_guess(7,7) returns 'correct', and check_guess(9,7) returns 'too high'.
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
    .. activecode:: funct_ex_weekq
        :practice: T
        :autograde: unittest

        Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a
        boolean indicating if we are on vacation, return a string of the form "7:00"
        indicating when the alarm clock should ring. If we are on vacation and it is
        a weekend (0 - Saturday or 6 - Sunday) it should return "off" and otherwise return
        "10:00". If we are not on vacation and it is a weekend it should return
        "10:00" and otherwise "7:00"
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
