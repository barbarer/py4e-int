Write Code Questions
--------------------
.. warning:: Be careful not to create infinite loops, as they will cause the page to freeze.


.. tabbed:: itr-ex-countdown

    .. tab:: Question

        .. activecode:: itr-ex-countdownq
            :practice: T
            :autograde: unittest

            Fix the 5 errors in the code below to return a countdown of the numbers from 10 to 0, including 0.
            ~~~~
            def countdown():
                counter = 10
                answer = ""
                while Counter > 0:
                    answer = answer + str(counter) + " "
                    counter = counter + 1
                Return answer
            countDown()

            ====
            from unittest.gui import TestCaseGui
            class myTests(TestCaseGui):
                def testOne(self):
                    output = countdown()
                    self.assertEqual(output,"10 9 8 7 6 5 4 3 2 1 0 ")
            myTests().main()

    .. tab:: Answer

        .. activecode:: itr-ex-countdowna
            :practice: T
            :autograde: unittest

            Fix the 5 errors in the code below to return a countdown of the numbers from 10 to 0, including 0.
            ~~~~
            def countdown():
                counter = 10
                answer = ""

                # Keep running loop until counter equals 0 (use <=)
                # Use correct variable name (counter is lowercase)
                while counter >= 0:
                    answer = answer + str(counter) + " "

                    # Decrement to lower the counter
                    counter = counter - 1

                # Keyword return is lowercase
                return answer

            # Call correct function name (countdown)
            countdown()

            ====
            from unittest.gui import TestCaseGui
            class myTests(TestCaseGui):
                def testOne(self):
                    output = countdown()
                    self.assertEqual(output,"10 9 8 7 6 5 4 3 2 1 0 ")
            myTests().main()


.. activecode:: itr-ex-100Loopq
    :practice: T

    The following code will loop way too many times. Change one line to
    make the loop only have five iterations.
    ~~~~
    x = 5
    while x < 100:
        print(x)
        x = x + 1

.. tabbed:: itr-ex-count

    .. tab:: Question

        .. activecode:: itr-ex-countq
            :practice: T
            :autograde: unittest

            Make 5 changes to the code below to correctly print a count up from -10 to 0, including 0.
            ~~~~
            output = ""
            x = -10
            while x < 0
                x = x - 1
            output = output + str(x) + " "
            print(output

            ====
            from unittest.gui import TestCaseGui
            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(output,"-10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0 ")
            myTests().main()

    .. tab:: Answer

        .. activecode:: itr-ex-counta
            :practice: T
            :autograde: unittest

            Make 5 changes to the code below to correctly print a count up from -10 to 0, including 0.
            ~~~~
            output = ""
            # Start x at -11 so it stays under 0
            x = -11

            # First line of a loop ends with a colon (:)
            while x < 0:

                # Since the iteration variable is negative, increase the count
                x = x + 1

                # Output reassignment is within the loop
                output = output + str(x) + " "
                
            # Close print parentheses
            print(output)

            ====
            from unittest.gui import TestCaseGui
            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(output,"-10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0 ")
            myTests().main()



.. activecode:: itr-ex-allValuesq
    :practice: T
    :autograde: unittest

    Finish lines 1 and 5 so that the following code correctly prints every integer from -5 to -1, including -1.
    ~~~~
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
            self.assertEqual(output,"-5 -4 -3 -2 -1 ")
    myTests().main()


.. tabbed:: itr-ex-six

    .. tab:: Question

        .. activecode:: itr-ex-sixq
            :practice: T
            :autograde: unittest

            Complete the code on lines 4 and 6 so that it prints the number 6.
            ~~~~
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
                    self.assertEqual(x,6)
            myTests().main()

    .. tab:: Answer

        .. activecode:: itr-ex-sixa
            :practice: T
            :autograde: unittest

            Complete the code on lines 4 and 6 so that it prints the number 6.
            ~~~~
            x = 3
            i = 0
            while i < 3:
                # Increase x by 1 for each run of the loop
                x = x + 1
                i = i + 1
            # Print the x variable
            print(x)

            ====
            from unittest.gui import TestCaseGui
            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(x,6)
            myTests().main()


.. selectquestion:: iterations_writecode6
  :fromid: itr-ex-root_ac, itr-ex-root_pp
  :toggle: lock


.. tabbed:: int-ex-inclusive

    .. tab:: Question

        .. activecode:: int-ex-inclusiveq
            :practice: T
            :autograde: unittest

            This function currently takes a start and stop argument and uses a for loop to find the sum of all the numbers between them (inclusive).
            Change the for loop to a while loop while still using the same parameters.
            ~~~~
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
                    self.assertEqual(sumFunc(1, 10),55,"Tested sumFunc on inputs 1 and 10")
                    self.assertEqual(sumFunc(10, 3),0,"Tested sumFunc on inputs 10 and 3")
                    self.assertEqual(sumFunc(-5, 0),-15,"Tested sumFunc on inputs 20 and 50")
                    self.assertEqual(sumFunc(-3, 12),72,"Tested sumFunc on inputs -3 and 12")
            myTests().main()


    .. tab:: Answer

        .. activecode:: int-ex-inclusivea
            :practice: T
            :autograde: unittest

            This function currently takes a start and stop argument and uses a for loop to find the sum of all the numbers between them (inclusive).
            Change the for loop to a while loop while still using the same parameters.
            ~~~~
            def sumFunc(start, stop):
                sum = 0
                # Create an iteration variable, initialized to the start argument
                num = start
                # Use while loop until iteration variable is less than
                # or equal to stop argument
                while num <= stop:
                    # Add number to sum
                    sum = sum + num
                    # Increase iteration variable
                    num += 1
                # Return the sum
                return sum

            print(sumFunc(1,10))

            ====
            from unittest.gui import TestCaseGui
            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(sumFunc(1, 10),55,"Tested sumFunc on inputs 1 and 10")
                    self.assertEqual(sumFunc(10, 3),0,"Tested sumFunc on inputs 10 and 3")
                    self.assertEqual(sumFunc(-5, 0),-15,"Tested sumFunc on inputs 20 and 50")
                    self.assertEqual(sumFunc(-3, 12),72,"Tested sumFunc on inputs -3 and 12")
            myTests().main()



.. activecode::  int-ex-timesq
    :practice: T
    :autograde: unittest

    The program below is supposed to print the times tables from 1 to 3, but
    there are 6 errors.  Fix the errors.
    ~~~~
    for x in range(1, 3):
        for y in range(1, 4)
            print(str(x) + " * " str(y) + " = " x * y)


.. tabbed:: int-ex-timesWhile

    .. tab:: Question

        .. activecode::  int-ex-timesWhileq
            :nocodelens:
            :practice: T

            The following code prints the times tables for 1 to 3 using two for loops.
            Rewrite the program to use a while and a for loop instead.
            ~~~~

            for x in range(1, 4):
                for y in range(1, 11):
                    print(str(x) + " * " + str(y) + " = " + str(x * y))

    .. tab:: Answer

        .. activecode:: int-ex-timesWhileA
            :optional:

            # There are a few different ways this can be done
            # One is shown here

            for x in range(1, 4):
                # Create an iteration variable, starting in the range
                y = 1
                # Use while loop if the iteration variable is less than 11
                while y < 11:
                    # Print the string
                    print(str(x) + " * " + str(y) + " = " + str(x * y))
                    # Increment the iteration variable
                    y = y + 1


.. selectquestion:: iterations_writecode10
  :fromid: int-ex-while_ac, int-ex-while_pp
  :toggle: lock
