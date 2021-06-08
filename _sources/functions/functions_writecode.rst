Functions Write Code Questions
-------------------------------
#.
    .. tabbed:: funct_writecode1

        .. tab:: Question

            .. activecode:: funct_writecode1q
                :practice: T
                :autograde: unittest

                Fix the 5 errors in following code for the function ``remainder`` so that it takes in two numbers as parameters (x and y), 
                where x is required but y is optional and defaults to 4. The function should return the remainder of x divided by y.  
                ~~~~
                def remainder(x, y)
                z = x // y
                    Return x

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(remainder(5, 1),0,"Tested remainder on inputs 5 and 1")
                        self.assertEqual(remainder(0, 4),0,"Tested remainder on inputs 0 and 4")
                        self.assertEqual(remainder(5),1,"Tested remainder on input 5 with default y = 4")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_writecode1a
                :optional:

                # Function headers end with a colon (:) and a default value for y
                def remainder(x, y = 4):

                    # Indent four spaces after the header
                    # Use modulus division (%) instead of double slashes (//) to get the remainder
                    z = x % y

                    # Keyword return is lowercase and returns z (the remainder of x divided by y)
                    return z


#.
    .. tabbed:: funct_writecode2

        .. tab:: Question

            .. activecode:: funct_writecode2q
                :practice: T
                :autograde: unittest

                Create a function called area_of_rectangle that takes in parameters width and length and 
                returns the area (of the rectangle).
                ~~~~
                def area_of_rectangle(width, length):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(area_of_rectangle(1,7),7,"Tested area_of_rectangle on inputs 1 and 7")
                        self.assertEqual(area_of_rectangle(5,4),20,"Tested area_of_rectangle on inputs 5 and 4")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_writecode2a
                :optional:

                def area_of_rectangle(width, length):
                    area = width * length
                    return area


#.
    .. tabbed:: funct_writecode3

        .. tab:: Question

            .. activecode:: funct_writecode3q
                :practice: T
                :autograde: unittest

                Create a function with a function name welcome_message that takes in a parameter name and 
                returns "Hello (name)! We hope that you will enjoy this course. :)".
                ~~~~
                def welcome_message(name):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(welcome_message('Aurora'),"Hello Aurora! We hope that you will enjoy this course. :)","Checks if the returned strings are equal.")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_writecode3a
                :optional:

                def welcome_message(name):
                    return "Hello " + name + "! We hope that you will enjoy this course. :)"


#.
    .. tabbed:: funct_writecode4

        .. tab:: Question

            .. activecode:: funct_writecode4q
                :practice: T
                :autograde: unittest

                Create a function called birthday that takes in three parameters (month, day, and year) and returns it in the format MM/DD/YYYY. 
                ~~~~
                def birthday(month, day, year):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(birthday(5, 17, 1990),"5/17/1990")
                        self.assertEqual(birthday(1, 20, 2020),"1/20/2020")
                        self.assertEqual(birthday(12, 1, 2000),"12/1/2000")
                        self.assertEqual(birthday(7, 5, 2004),"7/5/2004")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_writecode4a
                :optional:

                def birthday(month, day, year):
                    return str(month) + "/" + str(day) + "/" + str(year)


#.
   .. tabbed:: funct_writecode5

        .. tab:: Question

            .. activecode:: funct_writecode5q
                :practice: T
                :autograde: unittest

                Write a function ``address`` which combines 3 different string address parameters (city, state, and pin) to print a user's address. 
                After every address input, add a comma and a space (e.g., final string = "address1, address2, address3").
                ~~~~
                def address(city, state, pin):
                    # your code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(len(address("Seattle", "WA", "98105").split(",")),3,"Tested input: address('Seattle', 'WA', '98105')")
                        self.assertEqual(address("Seattle", "WA", "98105"),"Seattle, WA, 98105","Tested input: address('Seattle', 'WA', '98105')")
                        self.assertEqual(address("Ann Arbor", "MI", "48105"),"Ann Arbor, MI, 48105","Tested input: address('Ann Arbor', 'MI', '48105')")
                        self.assertEqual(address("Los Angeles", "CA", "90005"),"Los Angeles, CA, 90005","Tested input: address('Los Angeles', 'CA', '90005')")


                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_writecode5a
                :optional:

                def address(city, state, pin):
                    user_address = city + ", " + state + ", " + pin
                    return user_address


#.
   .. tabbed:: funct_writecode6

        .. tab:: Question

            .. activecode:: funct_writecode6q
                :practice: T
                :autograde: unittest

                Write a function ``squareArea`` which takes the length of a side of a square and calculates its area.
                It returns a string with this format: "The total area of the square with length 10 is 100.".
                ~~~~
                def squareArea(length):
                    # your code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(squareArea(10),"The total area of the square with length 10 is 100.","Tested input: squareArea(10)")
                        self.assertEqual(squareArea(5),"The total area of the square with length 5 is 25.","Tested input: squareArea(10)")


                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_writecode6a
                :optional:

                def squareArea(length):
                    total_area = length * length
                    answer = "The total area of the square with length " + str(length) + " is " + str(total_area) + "."
                    return answer


#.
   .. tabbed:: funct_writecode7

        .. tab:: Question

            .. activecode:: funct_writecode7q
                :practice: T
                :autograde: unittest

                Write three functions called addNumbers, subtractNumbers, and calculate. 
                The functon addNumbers should pass in two numbers as parameters and return the value of adding them together, 
                while subtractNumbers should also take in two numbers and return the value of the first number minus the second number.
                Lastly, define a function called calculate which passes in three numbers (a, b and c). 
                The function should call addNumbers and subtractNumbers to add a and b and subtract c. 
                ~~~~
                def addNumbers(x, y):
                    # your code here

                def subtractNumbers(x, y):
                    # your code here

                def calculate(a, b, c):
                    # your code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(addNumbers(2,3),5,"Tested addNumbers on inputs 2 and 3")
                        self.assertEqual(subtractNumbers(6,5),1,"Tested subtractNumbers on inputs 6 and 5")
                        self.assertEqual(subtractNumbers(3,5),-2,"Tested subtractNumbers on inputs 3 and 5")
                        self.assertEqual(calculate(2,3,4),1,"Tested calculate on inputs 2, 3, and 4")
                        self.assertEqual(calculate(1.0, 0.0, 3.5),-2.5,"Tested calculate on inputs 1.0, 0.0, and 3.5")


                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_writecode7a
                :optional:

                def addNumbers(x, y):
                    
                    # Return the value of adding x and y together
                    return x + y

                def subtractNumbers(x, y):
                    # Return the value of subtracting y from x
                    return x - y

                def calculate(a, b, c):

                    # Call addNumbers, passing in a and b as parameters, and set the answer equal to the variable result
                    result = addNumbers(a, b)
                    # Call subtractNumbers on the result of the addition and c, the un
                    finalResult = subtractNumbers(result, c)
                    # Returns the finalResult
                    return finalResult