Write Code Questions
---------------------

#.
    .. tabbed:: var-exercise-syntax

        .. tab:: Question



            .. activecode:: var-wc-syntax

                There are 3 syntax errors in the following code. Fix it to print correctly
                without errors. It will print, "Her name is Molly and her favorite food is tuna".
                ~~~~
                food = "tuna'
                name = 'Molly'
                print("Her name is " + name +  and her favorite food is "  food + ".")

        .. tab:: Answer

            .. activecode:: var-wc-syntaxA
                :optional:

                There are 3 syntax errors in the following code. Fix it to print correctly
                without errors. It will print, "Her name is Molly and her favorite food is tuna".
                ~~~~
                # Each set of quotes needs to be matching
                food = 'tuna'
                name = 'Molly'

                # Place full sets of quotes around strings to be printed
                # Include spaces before and after where variables are printed
                # Add + between strings
                print("Her name is " + name + " and her favorite food is " + food + ".")

#.
    .. activecode:: var-wc-fruitq
        :autograde: unittest

        Let's say that apples are $0.40 apiece, and pears are $0.65 apiece.
        Modify the program below to calculate the total cost of 4 apples and 3 pears
        ~~~~
        apples = 4
        pears = 3
        totalCost =
        print(totalCost)

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertAlmostEqual(totalCost,3.55, 2, "totalCost should equal 3.55", 0.2)

        myTests().main()


#.
    .. tabbed:: var-exercise-rhyme

        .. tab:: Question

            .. activecode:: var-wc-rhymeq

               Take the phrase: **twinkle twinkle little star**.
               Store each word in a separate variable, then print out the sentence on
               one line using ``print``.
               ~~~~


        .. tab:: Answer

            .. activecode:: var-wc-rhymeA
                :optional:

                Take the phrase: **twinkle twinkle little star**.
                Store each word in a separate variable, then print out the sentence on
                one line using ``print``.
                ~~~~
                # Set each word to its own variable
                word1 = "twinkle"
                word2 = "little"
                word3 = "star"

                # Print each word in succession
                # Using commas automaticallly inserts spaces
                print(word1, word1, word2, word3)

                #another option is
                #print(word1 + " " + word1 + " " + word2 + " " + word3)


#.
    .. activecode:: var-wc-order
        :autograde: unittest

        Add parentheses to the following code so that the total equals 40.
        ~~~~
        total = 7 + 3 * 6 - 2
        print(total)

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(total,40)

        myTests().main()

#.
    .. tabbed:: var-exercise-time

        .. tab:: Question

            .. activecode:: var-wc-timeq

                Many people keep time using a 24 hour clock (11 is 11am and 23 is 11pm, 0 is midnight).
                If it is currently 13 and you set your alarm to go off in 50 hours, it will be 15 (3pm).
                Write a Python program to solve the general version of the above problem. Ask the user
                for the time now (in hours), and then ask for the number of hours to wait for the alarm.
                Your program should output what the time will be on the clock when the alarm goes off.
                *Using the ``int()`` function and modulus operator ``%`` could come in handy!*
                ~~~~

                current_time =
                waiting_time =


                hours =

                print()

        .. tab:: Answer

            .. activecode:: var-wc-timeA
                :optional:

                Many people keep time using a 24 hour clock (11 is 11am and 23 is 11pm, 0 is midnight).
                If it is currently 13 and you set your alarm to go off in 50 hours, it will be 15 (3pm).
                Write a Python program to solve the general version of the above problem. Ask the user
                for the time now (in hours), and then ask for the number of hours to wait for the alarm.
                Your program should output what the time will be on the clock when the alarm goes off.
                *Using the ``int()`` function and modulus operator ``%`` could come in handy!*
                ~~~~

                #prompt the user for the current time
                current_time_string = input("What is the current time (in hours)?")
                #prompt the user for the time to wait
                waiting_time_string = input("How many hours do you have to wait?")

                #convert the current time and the time to wait to integers
                current_time_int = int(current_time_string)
                waiting_time_int = int(waiting_time_string)

                #combine the two times
                hours = current_time_int + waiting_time_int

                #use the modulus operator to keep the time within 24 hours
                timeofday = hours % 24

                #print the time of day that the alarm will go off
                print(timeofday)


#.
    .. activecode:: var-wc-dog
        :autograde: unittest

        Assume that you have 24 slices of pizza and 7 people that are going to share it.
        There's been some arguments among your friends, so you've decided to only give people whole slices.
        Your pet dog Andy loves pizza. Write a Python expression with the modulus operator that calculates
        how many pizza slices will be left over for your dog after serving just whole slices to 7 people.
        Assign the result of that expression to ``forAndy``.

        ~~~~



        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(forAndy,3)

        myTests().main()

#.
    .. tabbed:: var-exercise-feet

        .. tab:: Question




            .. activecode:: var-wc-feetq

               Write a program that will convert inches to feet from user input.
               Reminder: there are 12 inches in a foot.
               ~~~~


        .. tab:: Answer

            .. activecode:: var-wc-feetA
                :optional:

                Write a program that will convert inches to feet from user input.
                Reminder: there are 12 inches in a foot.
                ~~~~

                #prompt the user for the amount of inches they would like to convert
                inches = input("How many inches would you like to convert?")

                #convert the inches to an integer
                inches_int = int(inches)

                #convert to feet
                feet = inches_int / 12

                #print the amount of feet
                print(feet)

#.
    .. activecode:: var-wc-inch

        Write a program that will convert feet to inches from user input.
        Reminder: there are 12 inches in a foot.

        ~~~~



#.
    .. tabbed:: var-exercise-combine

        .. tab:: Question

            .. activecode::  var-wc-combine

                Combine lines 4 and 5 in the code below to print: "270 is 4.0 hours and 30 minutes.".
                ~~~~
                totalMinutes = 270
                numMinutes = totalMinutes % 60
                numHours = (totalMinutes - numMinutes) / 60
                print(numHours)
                print(numMinutes)

        .. tab:: Answer

            .. activecode::  var-wc-combineA
                :optional:

                Combine lines 4 and 5 in the code below to print: "270 is 4.0 hours and 30 minutes.".
                ~~~~
                totalMinutes = 270
                numMinutes = totalMinutes % 60
                numHours = (totalMinutes - numMinutes) / 60
                # Use + and correctly spaced " " to write the variables out together
                print(str(totalMinutes) + " is " + str(numHours) + " hours and " + str(numMinutes) + " minutes.")

#.

    .. activecode::  var-wc-madlibs

        Write code below to get at least 3 values from the user using the ``input``
        function and output a mad lib (which will use the input to tell a silly story).

        ~~~~
