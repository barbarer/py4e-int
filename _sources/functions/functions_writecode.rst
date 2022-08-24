Functions Write Code Questions
-------------------------------
#.
    .. tabbed:: funct_writecode1

        .. tab:: Question

            .. activecode:: funct_writecode1q
                :autograde: unittest

                Write a function called ``remainder`` that takes in parameters ``x`` and ``y`` (where ``y`` defaults to 4) and
                returns the remainder of ``x`` divided by ``y``. Ignore cases for when ``x`` is negative or ``y`` is less than or equal to 0.
                For example, ``remainder(5)`` should return ``1``.
                ~~~~

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(remainder(5, 1),0,"remainder(5, 1)")
                        self.assertEqual(remainder(0, 4),0,"remainder(0, 4)")
                        self.assertEqual(remainder(2, 3),2,"remainder(2, 3)")
                        self.assertEqual(remainder(5),1,"remainder(5)")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_writecode1a
                :optional:

                Write a function called ``remainder`` that takes in parameters ``x`` and ``y`` (where ``y`` defaults to 4) and
                returns the remainder of ``x`` divided by ``y``. Ignore cases for when ``x`` is negative or ``y`` is less than or equal to 0.
                For example, ``remainder(5)`` should return ``1``.
                ~~~~
                # Function headers end with a colon (:) and a default value for y
                def remainder(x, y = 4):

                    # Indent four spaces after the header
                    # Use modulus division (%) instead of double slashes (//) to get the remainder
                    z = x % y

                    # Keyword return is lowercase and returns z (the remainder of x divided by y)
                    return z


#.
    .. activecode:: funct_writecode2q
        :autograde: unittest

        Write a function called ``area_of_rect`` that takes in parameters ``width`` and ``length`` and
        returns the area (of the rectangle). For example, ``area_of_rect(5,4)`` should return ``20``.
        ~~~~

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(area_of_rect(1,7),7,"area_of_rect(1,7)")
                self.assertEqual(area_of_rect(5,4),20,"area_of_rect(5,4)")
                self.assertAlmostEqual(area_of_rect(5.4,4.3),23.22,2,"area_of_rect(5.4,4.3)")

        myTests().main()


#.
    .. tabbed:: funct_writecode3

        .. tab:: Question

            .. activecode:: funct_writecode3q
                :autograde: unittest

                Write a function called ``welcome_message`` that takes in a parameter ``name`` and
                returns ``"Hello (name)! We hope that you will enjoy this course. :)"``. For example,
                ``welcome_message('Aurora')`` should return ``"Hello Aurora! We hope that you will enjoy this course. :)"``.
                ~~~~

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(welcome_message('Aurora'),"Hello Aurora! We hope that you will enjoy this course. :)","welcome_message('Aurora')")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_writecode3a
                :optional:

                Write a function called ``welcome_message`` that takes in a parameter ``name`` and
                returns ``"Hello (name)! We hope that you will enjoy this course. :)"``. For example,
                ``welcome_message('Aurora')`` should return ``"Hello Aurora! We hope that you will enjoy this course. :)"``.
                ~~~~
                def welcome_message(name):
                    return "Hello " + name + "! We hope that you will enjoy this course. :)"


#.
    .. activecode:: funct_writecode4q
        :autograde: unittest

        Write a function called ``birthday`` that takes in three parameters (``month``, ``day``, and ``year``) and returns it in the format ``month``/``day``/``year``.
        For example, ``birthday(11, 17, 1990)`` should return ``"11/17/1990"`` and ``birthday(7, 5, 2004)`` should return ``"7/5/2004"``.
        ~~~~

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(birthday(11, 17, 1990),"11/17/1990","birthday(11, 17, 1990)")
                self.assertEqual(birthday(1, 20, 2020),"1/20/2020","birthday(1, 20, 2020)")
                self.assertEqual(birthday(12, 1, 2000),"12/1/2000","birthday(12, 1, 2000)")
                self.assertEqual(birthday(7, 5, 2004),"7/5/2004","birthday(7, 5, 2004)")

        myTests().main()


#.
   .. tabbed:: funct_writecode5

        .. tab:: Question

            .. activecode:: funct_writecode5q
                :autograde: unittest

                Write a function called ``address`` that combines 3 different string address parameters (``city``, ``state``, and ``zip``) and returns a user's address.
                After the ``city`` and ``state`` inputs, add a comma and a space. For example, ``address('Seattle', 'WA', '98105')`` should return ``"Seattle, WA, 98105"``.
                ~~~~

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(len(address('Seattle', 'WA', '98105').split(',')),3,"len(address('Seattle', 'WA', '98105').split(','))")
                        self.assertEqual(address('Seattle', 'WA', '98105'),"Seattle, WA, 98105","address('Seattle', 'WA', '98105')")
                        self.assertEqual(address('Ann Arbor', 'MI', '48105'),"Ann Arbor, MI, 48105","address('Ann Arbor', 'MI', '48105')")
                        self.assertEqual(address('Los Angeles', 'CA', '90005'),"Los Angeles, CA, 90005","address('Los Angeles', 'CA', '90005')")


                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_writecode5a
                :optional:

                Write a function called ``address`` that combines 3 different string address parameters (``city``, ``state``, and ``zip``) and returns a user's address.
                After the ``city`` and ``state`` inputs, add a comma and a space. For example, ``address('Seattle', 'WA', '98105')`` should return ``"Seattle, WA, 98105"``.
                ~~~~
                def address(city, state, zip):
                    user_address = city + ", " + state + ", " + zip
                    return user_address


#.
    .. activecode:: funct_writecode6q
        :autograde: unittest

        Write a function called ``squareArea`` that takes in a parameter ``length`` and calculates the area of the square.
        It returns a string with this format: "The total area of the square with length (length) is (area).". For example,
        ``squareArea(10)`` would return ``"The total area of the square with length 10 is 100."``.
        ~~~~

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(squareArea(10),"The total area of the square with length 10 is 100.","squareArea(10)")
                self.assertEqual(squareArea(5),"The total area of the square with length 5 is 25.","squareArea(5)")
                self.assertEqual(squareArea(4.5),"The total area of the square with length 4.5 is 20.25.","squareArea(4.5)")


        myTests().main()



#.
   .. tabbed:: funct_writecode7

        .. tab:: Question

            .. activecode:: funct_writecode7q
                :autograde: unittest

                Write three functions called ``addNumbers``, ``subtractNumbers``, and ``calculate``.
                The function ``addNumbers`` should take two numbers (``x`` and ``y``) as parameters and return the value of adding them together,
                while ``subtractNumbers`` should also take two numbers (``x`` and ``y``) and return the value of ``x`` minus ``y``.
                Lastly, define a function called ``calculate`` that takes three numbers (``a``, ``b``, and ``c``) and uses
                ``addNumbers`` and ``subtractNumbers`` to add ``a`` and ``b`` and subtract ``c``. The value should be returned. For example,
                ``calculate(2,3,4)`` should return ``1``.
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
                        self.assertEqual(addNumbers(2,3),5,"addNumbers(2,3)")
                        self.assertEqual(subtractNumbers(6,5),1,"subtractNumbers(6,5)")
                        self.assertEqual(subtractNumbers(3,5),-2,"subtractNumbers(3,5)")
                        self.assertEqual(calculate(2,3,4),1,"calculate(2,3,4)")
                        self.assertAlmostEqual(calculate(1.0, 0.0, 3.5),-2.5,1,"calculate(1.0, 0.0, 3.5)")
                        self.assertEqual(calculate(-10, -9, -3),-16,"calculate(-10, -9, -3)")
                        self.assertAlmostEqual(calculate(-10, -7.3, 3),-20.3,1,"calculate(-10, -7.3, 3)")
                        self.assertAlmostEqual(calculate(10, -7.3, -3),5.7,1,"calculate(10, -7.3, -3)")
                        self.assertAlmostEqual(calculate(-10.1, 5.2, -5),0.1,1,"calculate(-10.1, 5.2, -5)")
                        self.assertAlmostEqual(calculate(10.6, -7.3, 3.8),-0.5,1,"calculate(10.6, -7.3, 3.8)")
                        self.assertAlmostEqual(calculate(-9.8, 7.3, 3),-5.5,1,"calculate(-9.8, 7.3, 3)")
                        self.assertAlmostEqual(calculate(8, 7.3, -0.2),15.5,1,"calculate(8, 7.3, -0.2)")
                        self.assertAlmostEqual(calculate(10.5, 7.3, 0.2),17.6,1,"calculate(10.5, 7.3, 0.2)")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_writecode7a
                :optional:

                Write three functions called ``addNumbers``, ``subtractNumbers``, and ``calculate``.
                The function ``addNumbers`` should take two numbers (``x`` and ``y``) as parameters and return the value of adding them together,
                while ``subtractNumbers`` should also take two numbers (``x`` and ``y``) and return the value of ``x`` minus ``y``.
                Lastly, define a function called ``calculate`` that takes three numbers (``a``, ``b``, and ``c``) and uses
                ``addNumbers`` and ``subtractNumbers`` to add ``a`` and ``b`` and subtract ``c``. The value should be returned. For example,
                ``calculate(2,3,4)`` should return ``1``.
                ~~~~
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
