Write Code Questions
---------------------
#.
    .. tabbed:: cndtnl-exercise-five

        .. tab:: Question

            Fix the errors in the code, and change it to use only **one** if statement. The code should print
            "The number is 5" when the number is 5, and should print "The number is NOT 5" when it is not.

            .. activecode::  cndtnl-wc-fiveq
                :nocodelens:

                x = 5
                if x == 5:
                print("The number is 5")
                if x != 5:
                print("The number is NOT 5")


        .. tab:: Answer

            .. activecode:: cndtnl-wc-fivea
                :optional:

                x = 5
                if x == 5:
                    print("The number is 5")
                else:
                    print("The number is NOT 5")

#.
    .. activecode::  cndtnl-wc-hiq

        Complete the conditional below so the word "Hi" is printed if x does not
        equal 3 and "Hello" is printed otherwise.

        ~~~~
        x = 4
        if x

#.
    .. tabbed:: cndtnl-exercise-pay

        .. tab:: Question

            Complete the pay computation to give the employee 1.5 times the hourly rate for hours worked
            above 40 hours, if the regular pay rate is $10 an hour. Then set ``grossPay`` equal to the
            amount an employee would be paid for working 45 hours.

            .. activecode::  cndtnl-wc-payq
                :nocodelens:

                hours = 45
                rate = 10
                overtimeRate =  #your code here
                grossPay = 0
                if hours  #your code here
                    grossPay = hours * rate
                else:
                    overTime =  #your code here
                    grossPay =  #your code here
                print(grossPay)

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(grossPay, 475.0)

                myTests().main()


        .. tab:: Answer

            .. activecode:: cndtnl-wc-paya
                :optional:

                #initializing variables
                hours = 45
                rate = 10
                overtimeRate = rate * 1.5
                grossPay = 0

                #starting if statement to see if hours are within regular pay
                if hours <= 40:
                    #if within 40 hours, pay will be hours * rate
                    grossPay = hours * rate
                #else statement if hours are greater than 40
                else:
                    #creating a variable for overtime hours
                    overTime = hours % 40
                    #pay will equal the regular rate for 40 hours, plus the overtime rate for the extra hours
                    grossPay = (rate * 40) + (overTime * overtimeRate)
                print(grossPay)

#.

    .. activecode::  cndtnl-wc-pay2q

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

        ~~~~



#.
    .. tabbed:: cndtnl-exercise-distance

        .. tab:: Question

            Write the code to calculate and print the cost of a 14 mile cab ride. If the distance traveled
            is less than or equal to 12 miles the cost is $2.00 a mile, and if the distance traveled is more
            than 12 miles the cost is $1.50 a mile. Assign the final cost to the variable ``total``.

            .. activecode::  cndtnl-wc-distanceq
                :nocodelens:

                distance = 14

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(total, 21.0)

                myTests().main()


        .. tab:: Answer

          .. activecode::  cndtnl-wc-distancea
              :optional:
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

#.
    .. activecode::  cndtnl-wc-scoreq

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

        ~~~~

#.
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
              :optional:
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


#.
    .. activecode::  cndtnl-wc-walletq

        Write a procedure that takes 2 ints, total price, and amount in wallet. Print "You have enough
        money" if the difference between the wallet and price is 0 or greater; otherwise,
        print "Get more money".

        ~~~~



#.
    .. tabbed:: cndtnl-exercise-leapYear

        .. tab:: Question

            3 criteria must be taken into account to identify leap years:

            - The year is evenly divisible by 4;

            - If the year can be evenly divided by 100, it is NOT a leap year, unless;

            - The year is also evenly divisible by 400. Then it is a leap year.

            Write a program that takes a year as a parameter and sets ``leapYear`` equal to ``True`` if the year is a
            leap year, ``False`` otherwise. (use a few different years to test your work)

            .. activecode::  cndtnl-wc-leapYearq
                :nocodelens:



        .. tab:: Answer

            .. activecode:: cndtnl-wc-leapYeara
                :optional:

                year = 1900 #TEST WITH ANY YEAR
                # Initializing leapYear to False since most years are not leap years
                leapYear = False

                # Use modulus to see if the year is divisible by 4
                if year % 4 == 0:
                    # If divisible by 4, use modulus to see if divisible by 100
                    if year % 100 == 0:
                        # if divisible by 4 and 100, use modulus to see if divisible by 400
                        if year % 400 == 0:
                            # if divisible by 4, 100, and 400 it is a leap year
                            leapYear = True
                    else: # if divisible by 4 and not 100 it is a leap year
                        leapYear = True
                print(leapYear)
                ''' Since leapYear started as False, we do not need to reset it to False
                    for the instances that the year is not a leap year '''

                # ANOTHER OPTION
                year = 1900
                leapYear = False
                if year % 400 == 0:
                    leapYear = True
                elif year % 4 == 0 and year % 100 != 0:
                    leapYear = True
                print(leapYear)

#.
    .. activecode::  cndtnl-wc-evenq

        Write a program that takes an integer and sets ``isEven`` to ``True`` if the argument
        is an **even number** and ``False`` if it is **odd**. (the mod operator could be useful!

        ~~~~

        def is_even(n):
            # your code here
