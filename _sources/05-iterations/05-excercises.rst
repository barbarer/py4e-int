Exercises
---------
.. question:: ch8ex1t

    .. tabbed:: ch8ex1t

        .. tab:: Question

            Fix the 5 syntax errors in the code below to print a countdown of the numbers from 10 to 0.

            .. activecode:: ch8ex1q
                :practice: T
                :autograde: unittest

                def countdown():
                    counter = 10
                    while Counter > 0:
                        Print(counter)
                        counter = Counter + 1

                countdown()

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

            .. activecode:: ch8ex1q_answer

                def countdown():
                    counter = 10
                    while counter >= 0:
                        print(counter)
                        counter = counter - 1

                countdown()


        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: teachercsp_ch8ex1q


.. question:: ch8ex2t

    .. tabbed:: ch8ex2t

        .. tab:: Question

            The following code will loop infinitely. Make one change that will make it loop only 5 times.

            .. activecode::  ch8ex2q
                :practice: T
                :autograde: unittest

                x = 5
                while x > 0:
                    print(x)
                    x = x + 1

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

            .. activecode:: ch8ex2t_answer

                x = 5
                while x > 0:
                    print(x)
                    x = x - 1

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch8ex2q


.. question:: ch8ex3t

    .. tabbed:: ch8ex3t

        .. tab:: Question

           Make 5 changes to the code below to correctly print a count up from -10 to 0.

           .. activecode::  ch8ex3q
                :practice: T
                :autograde: unittest

                output = ""
                x = -10
                while x < 0
                    x = x - 1
                output = output + str(x) + " "
                print(output)

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

            .. activecode:: ch8ex3q_answer

                output = ""
                x = -11
                while x < 0:
                    x = x + 1
                    output = output + str(x) + " "
                print(output)



        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch8ex3q


.. question:: ch8ex4t

    .. tabbed:: ch8ex4t

        .. tab:: Question

           Finish lines 1 and 5 so that the following code correct prints all the values from -5 to -1.

           .. activecode::  ch8ex4q
                :practice: T
                :autograde: unittest

                output =
                x = -5
                while x < 0:
                    output = output + str(x) + " "
                    x =
                print(output)

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

            .. activecode:: ch8ex4q_answer

                output = ""
                x = -5
                while x < 0:
                    output = output + str(x) + " "
                    x = x + 1
                print(output)



        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: teachercsp_ch8ex4q


.. question:: ch8ex5t

    .. tabbed:: ch8ex5t

        .. tab:: Question

            Complete the code on lines 4 and 6 so that it prints the number 6.

            .. activecode::  ch8ex5q
                :practice: T
                :autograde: unittest

                x = 3
                i = 0
                while i < 3:
                    x =
                    i = i + 1
                print()

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

            .. activecode:: ch8ex5q_answer

                x = 3
                i = 0
                while i < 3:
                    x = x + 1
                    i = i + 1
                print(x)


        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch8ex5q


.. question:: ch8ex6t

    .. tabbed:: ch8ex6t

        .. tab:: Question

           The code below is supposed to print an estimate of the square root.  But, the indention is wrong on 4 lines.  Fix it.

           .. activecode::  ch8ex7q
                :practice: T
                :autograde: unittest

                target = 6
                    guess = 2
                guessSquared = guess * guess
                while abs(target-guessSquared) > 0.01:
                    closer = target / guess
                guess = (guess + closer) / 2.0
                        guessSquared = guess * guess
                    print("Square root of", target,"is", guess)

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

            .. activecode:: ch8ex7q_answer

                target = 6
                guess = 2
                guessSquared = guess * guess
                while abs(target-guessSquared) > 0.01:
                    closer = target / guess
                    guess = (guess + closer) / 2.0
                    guessSquared = guess * guess
                    print("Square root of", target,"is", guess)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch8ex7q


.. question:: ch8ex8t

    .. tabbed:: ch8ex8t

        .. tab:: Question

            The function currently takes a start and stop argument and uses a for loop to find the sum of all the numbers between them (inclusive). Change the for loop to a while loop while still using the parameters.

            .. activecode::  ch8ex8q
                :practice: T
                :autograde: unittest

                def sumFunc(start, stop):
                    sum = 0
                    for num in range(start, stop + 1):
                        sum = sum + num
                    return sum

                print(sumFunc(1,10))

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

            .. activecode:: ch8ex8q_answer

                target = 6
                guess = 2
                guessSquared = guess * guess
                while abs(target-guessSquared) > 0.01:
                    closer = target / guess
                    guess = (guess + closer) / 2.0
                    guessSquared = guess * guess
                    print("Square root of", target,"is", guess)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch8ex8q


.. question:: ch8ex9t

    .. tabbed:: ch8ex9t

        .. tab:: Question

           The program below is supposed to print the times tables for 1 to 3, but there are 5 errors.  Fix the errors.

           .. activecode::  ch8ex9q
                :practice: T
                :autograde: unittest

                for x in range(1,3):
                    for y in range(1,10)
                        print(str(x) + " * " str(y) + " = " x*y)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch8ex9q

    .. tabbed:: ch8ex9t

        .. tab:: Question

           Rewrite the code that prints the times tables for 1 to 3 using a while loop and a for loop instead of two for loops.

            .. activecode::  ch8ex10q
                :nocodelens:

                for x in range(1,4):
                     for y in range(1,11):
                         print(str(x) + " * " + str(y) + " = " + str(x*y))

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch8ex10q


.. question:: ch8ex10t

    .. tabbed:: ch8ex10t

        .. tab:: Question

           Rewrite the following code to use a while loop instead of a for loop.

           .. activecode::  ch8ex11q
                :practice: T
                :autograde: unittest

                product = 1  # Start out with nothing
                numbers = range(1,11)
                for number in numbers:
                    product = product * number
                print(product)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch8ex11q
