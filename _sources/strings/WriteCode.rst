Write Code Questions
--------------------
#.
    .. tabbed:: str-ex-hi

        .. tab:: Question

            Fix line 2 so that it prints "Hi" instead of "hi".

            .. activecode::  str-ex-hiq
                :nocodelens:

                s1 = "hi"
                s1.capitalize()
                print(s1)

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(s1,"Hi")

                myTests().main()

        .. tab:: Answer

            .. activecode::  str-ex-hiA
                :nocodelens:
                :optional:

                s1 = "hi"
                # Reassign s1 to the capitalization method
                s1 = s1.capitalize()
                print(s1)

#.
    .. activecode::  str-ex-meowq
        :nocodelens:

        Fix the code so that only "meow" is printed.
        ~~~~
        sentence = "The cat goes meow."
        s2 = [16:13]sentence
        print(s2)

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(s2,"meow")

        myTests().main()

#.
    .. tabbed:: str-ex-eggs

        .. tab:: Question

            Write the code to evaluate the length of the string "I like green eggs"
            and print it. It should print "The length is 17".

            .. activecode::  str-ex-eggsq
                :nocodelens:


        .. tab:: Answer

            .. activecode::  str-ex-eggsa
                :optional:
                :nocodelens:

                # Declare variables
                sentence = 'I like green eggs'
                # Print result
                print('The length is ' + str(len(sentence)))


#.
    .. activecode::  str-ex-countq
        :nocodelens:

        Create a function named ``count`` that accepts a string and a letter
        as arguments, then returns the count of that letter in the string.
        For example, if the function call was count("banana", "a") it would
        return 3.
        ~~~~

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(count('banana','a'),3,"Tested 'a' in 'banana'")
                self.assertEqual(count('pineapple','s'),0,"Tested 's' in 'pineapple'")
                self.assertEqual(count('pepperoni pizza','p'),4,"Tested 'p' in 'pepperoni pizza'")
                self.assertEqual(count('racecar','r'),2,"Tested 'r' in 'racecar'")

        myTests().main()


#.
    .. tabbed:: str-ex-float

        .. tab:: Question

            Take the following Python code that stores a string: ``string = "X-DSPAM-Confidence: 0.8475"``
            Use ``find`` and string slicing to extract the portion of the string after the colon character
            and then use the ``float`` function to convert the extracted string into a floating point number called ``num``.

            .. activecode::  str-ex-floatq
                :nocodelens:

                string = "X-DSPAM-Confidence: 0.8475"


                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(num,0.8475)

                myTests().main()

        .. tab:: Answer

            .. activecode:: str-ex-floatA
                :optional:

                string = "X-DSPAM-Confidence: 0.8475"
                # Create variable where colon is in string
                colon = string.find(':')
                # Print variable to check the value
                print(colon)
                # Create variable for everything past the colon
                digit = string[(colon+1):]
                # Print the variable to check the value
                print(digit)
                # Convert digit variable to float
                # Assign num variable to the float
                num = float(digit)


#.
    .. activecode::  str-ex-ducksq
        :nocodelens:

        In Robert McCloskey's book *Make Way for Ducklings*, the names of the ducklings are
        Jack, Kack, Lack, Mack, Nack, Ouack, Pack, and Quack.
        The following loop tries to output these names in order.
        Of course, that's not quite right because Ouack and Quack are misspelled.
        Can you fix it?
        ~~~~
        prefixes = "JKLMNOPQ"
        suffix = "ack"

        for p in prefixes:
            print(p + suffix)

#.
    .. tabbed:: str-ex-digits

        .. tab:: Question

            Write a function that will return the number of digits in an integer

            .. activecode:: str-ex-digitsq
                :practice: T
                :autograde: unittest

                def numDigits(n):
                    # your code here

                ====

                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(numDigits(2),1,"Tested numDigits on input of 2")
                        self.assertEqual(numDigits(55),2,"Tested numDigits on input of 55")
                        self.assertEqual(numDigits(1352),4,"Tested numDigits on input of 1352")
                        self.assertEqual(numDigits(444),3,"Tested numDigits on input of 444")



                myTests().main()


        .. tab:: Answer

            .. activecode:: str_ex-digitsa
                :optional:

                def numDigits(n):
                    # Convert numeric argument to string and assign to variable
                    n_str = str(n)
                    # Return the length of that string
                    return len(n_str)

                # Check the function
                print(numDigits(50))
                print(numDigits(20000))
                print(numDigits(1))


#.
    .. activecode::  str-ex-nameq
        :nocodelens:

        Write code to print out the statement "Hi my name is Bob and I am 2" using only string methods
        or string slicing. You must get every part of the new string from the given strings.
        Name the final string ``statement``.
        ~~~~
        s1 = "hi"
        s2 = "My namesake is Bob, and he and I love to eat ham."

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(statement,"Hi my name is Bob and I am 2")

        myTests().main()


#.
    .. tabbed:: str-ex-nameInput

        .. tab:: Question

            Write a program that asks a user for their name and from the input
            prints the first letter of their name in lowercase.

            .. activecode::  str-ex-nameInputq
                :nocodelens:


        .. tab:: Answer

            .. activecode:: str-ex-nameInputa
                :optional:

                # Create prompt
                prompt = "What is your name?"
                # Get input
                name = input(prompt)
                # Access first letter (index 0)
                first = name[0]
                #MAKE LOWERCASE
                lowerFirst = lower(first)
                # Print
                print(lowerFirst)

#.
    .. activecode::  str-ex-lowerq
        :nocodelens:

        Write a program that gets user input and print a string that states their
        input in all lowercase and gives the length of their string.
        ~~~~
