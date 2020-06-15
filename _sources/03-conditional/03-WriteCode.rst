Writing code problems
---------------------

.. tabbed:: cndtnl-exercise-five

    .. tab:: Question

        Fix the errors in the code, and change it, so there's only 1 if statement. The code should print
        "The number is 5" when the number is 5, and should print "The number is NOT 5" when it is not.

        .. activecode::  cndtnl-wc-fiveq
            :nocodelens:

            x = 5
            if x == 5:
            print("The number is 5")
            if x != 5:
            print("The number is NOT 5")


    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: cndtnlFiveDisc

.. tabbed:: cndtnl-exercise-pay

        .. tab:: Question

            Write a pay computation to give the employee 1.5 times the hourly rate for hours worked
            above 40 hours, if the regular pay rate is $10 an hour.

            .. activecode::  cndtnl-wc-payq
                :nocodelens:


        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: cndtnlPayDisc

.. tabbed:: cndtnl-exercise-pay2

        .. tab:: Question

            Rewrite your pay program using ``try`` and ``except`` so that your program handles non-numeric
            input gracefully by printing a message and exiting the program. The following shows two
            executions of the program:

            .. code-block::

                Enter Hours: 20
                Enter Rate: nine
                Error, please enter numeric input


            .. code-block::

                Enter Hours: forty
                Error, please enter numeric input

            .. activecode::  cndtnl-wc-pay2q
                :nocodelens:


        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: cndtnlPay2Disc

.. tabbed:: cndtnl-exercise-distance

        .. tab:: Question

           Write the code to calculate and print the cost of a 14 mile cab ride. If the distance traveled
           is less than or equal to 12 miles the cost is $2.00 a mile, and if the distance traveled is more
           than 12 miles the cost is $1.50 a mile.

           .. activecode::  cndtnl-wc-distanceq
               :nocodelens:

        .. tab:: Answer

          .. activecode::  cndtnl-wc-distancea
              :nocodelens:

              distance = 14
              # SET CONDITIONS
              if distance <= 12:
                  rate = 2.00
              if distance > 12:
                  rate = 1.50
              # CALCULATE TRIP COST
              total = distance * rate
              print("Total cost of trip: " + str(total))

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: cndtnlDistanceDisc

.. tabbed:: cndtnl-exercise-score

        .. tab:: Question

            Write a program to prompt for a score between 0.0 and 1.0. If the score is out of range,
            print an error message. If the score is between 0.0 and 1.0, print a grade using the
            following table:

            .. code-block::

                Score   Grade
               >= 0.9     A
               >= 0.8     B
               >= 0.7     C
               >= 0.6     D
                < 0.6     F


            .. code-block::

               Enter score: 0.95
               A

            .. activecode::  cndtnl-wc-scoreq
                :nocodelens:


        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: cndtnlScoreDisc


.. tabbed:: cndtnl-exercise-weight

        .. tab:: Question

           Fix the example such that the cost of frozen yogurt is 0 if you pour exactly 1 lb. in your cup.

           .. activecode::  cndtnl-wc-weightq
               :nocodelens:

               weight = 0.5
               if weight < 1:
                   price = 1.45
               if weight > 1:
                   price = 1.15
               total = weight * price
               print(weight)
               print(price)
               print(total)


        .. tab:: Answer

          .. activecode::  cndtnl-wc-weighta
              :nocodelens:

              weight = 0.5
              if weight < 1:
                price = 1.45
              if weight == 1:
                price = 0
              if weight > 1:
                price = 1.15
              total = weight * price
              print(weight)
              print(price)
              print(total)

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: cndtnlWeightDisc

.. tabbed:: cndtnl-exercise-wallet

    .. tab:: Question

        Write a procedure that takes 2 ints, total price, and amount in wallet. Print "You have enough
        money" if the difference between the wallet and price is 0 or greater; otherwise,
        print "Get more money"

        .. activecode::  cndtnl-wc-walletq
            :nocodelens:


    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: cndtnlWalletDisc

.. tabbed:: cndtnl-exercise-even

        .. tab:: Question

           Write a function called ``is_even(n)`` that takes an integer as an argument
           and returns ``True`` if the argument is an **even number** and ``False`` if
           it is **odd**.

           .. activecode::  cndtnl-wc-evenq
               :nocodelens:

               def is_even(n):
                   # your code here

               ====

               from unittest.gui import TestCaseGui

               class myTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(is_even(10),True,"Tested is_even on input of 10")
                        self.assertEqual(is_even(5),False,"Tested is_even on input of 5")
                        self.assertEqual(is_even(1),False,"Tested is_even on input of 1")
                        self.assertEqual(is_even(0),True,"Tested is_even on input of 0")

               myTests().main()


        .. tab:: Answer

          .. activecode::  cndtnl-wc-evena
              :nocodelens:

              from test import testEqual

                def is_even(n):
                    if n % 2 == 0:
                        return True
                    else:
                        return False

                testEqual(is_even(10), True)
                testEqual(is_even(5), False)
                testEqual(is_even(1), False)
                testEqual(is_even(0), True)

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: cndtnlEvenDisc

.. tabbed:: cndtnl-exercise-hi

    .. tab:: Question

        Complete and finish the code on lines 1 and 4 so that the code prints "Hi".

        .. activecode::  cndtnl-wc-hiq
            :nocodelens:

            x =
            if not x != 3:
                print("Hi")

                print("Hello")

    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: cndtnlHiDisc

.. tabbed:: cndtnl-exercise-leapYear

    .. tab:: Question

        3 criteria must be taken into account to identify leap years:

        - The year is evenly divisible by 4;

        - If the year can be evenly divided by 100, it is NOT a leap year, unless;

        - The year is also evenly divisible by 400. Then it is a leap year.

        Write a function that takes a year as a parameter and returns ``True`` if the year is a
        leap year, ``False`` otherwise.

        .. activecode::  cndtnl-wc-leapYearq
            :nocodelens:

            def is_even(n):
                # your code here

            ====
            from unittest.gui import TestCaseGui

            class myTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(is_even(10),True,"Tested is_even on input of 10")
                    self.assertEqual(is_even(5),False,"Tested is_even on input of 5")
                    self.assertEqual(is_even(1),False,"Tested is_even on input of 1")
                    self.assertEqual(is_even(0),True,"Tested is_even on input of 0")

            myTests().main()

    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: cndtnlLeapYearDisc
