Write code problems
--------------------

.. tabbed:: str-ex-hi

    .. tab:: Question

        Fix line 2 so that it prints "Hi" instead of "hi".

        .. activecode::  str-ex-hiq
            :nocodelens:

            s1 = "hi"
            s1.capitalize()
            print(s1)

    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: strHiDisc

.. tabbed:: str-ex-eggs

    .. tab:: Question

        Write the code to evaluate the length of the string "I like green eggs" and print it. It should print "The length is 17".

        .. activecode::  str-ex-eggsq
            :nocodelens:

    .. tab:: Answer

        Create variable to hold the string.

        .. activecode::  str-ex-eggsa
            :nocodelens:

            # DECLARE VARIABLES
            sentence = 'I like green eggs'
            # PRINT RESULT
            print('The length is ' + str(len(sentence)))

    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: strEggsDisc

.. tabbed:: str-ex-count

    .. tab:: Question

        Create a function named ``count`` that accepts a string and a letter as arguments,
        then returns the count of that letter in the string

        .. activecode::  str-ex-countq
            :nocodelens:


    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: strCountDisc

.. tabbed:: str-ex-meow

    .. tab:: Question

        Fix the code so that only "meow" is printed.

        .. activecode::  str-ex-meowq
            :nocodelens:

            sentence = "The cat goes meow."
            s2 = [16:13]sentence
            print(s2)

    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: strMeowDisc

.. tabbed:: str-ex-float

    .. tab:: Question

        Take the following Python code that stores a string: ``str = "X-DSPAM-Confidence: 0.8475"``
        Use ``find`` and string slicing to extract the portion of the string after the colon character
        and then use the ``float`` function to convert the extracted string into a floating point number.

        .. activecode::  str-ex-floatq
            :nocodelens:


    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: strFloatDisc

.. tabbed:: str-ex-digits

    .. tab:: Question

        Write a function that will retirn the number of digits in an integer

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

            def numDigits(n):
                n_str = str(n)
                return len(n_str)


            print(numDigits(50))
            print(numDigits(20000))
            print(numDigits(1))

    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: strDigitsDisc

.. tabbed:: str-ex-ducks

    .. tab:: Question

        In Robert McCloskey's book *Make Way for Ducklings*, the names of the ducklings are
        Jack, Kack, Lack, Mack, Nack, Ouack, Pack, and Quack.
        The following loop tries to output these names in order.
        Of course, that's not quite right because Ouack and Quack are misspelled.
        Can you fix it?

        .. activecode::  str-ex-ducksq
            :nocodelens:

            prefixes = "JKLMNOPQ"
            suffix = "ack"

            for p in prefixes:
                print(p + suffix)

    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: strDucksDisc

.. tabbed:: str-ex-lower

    .. tab:: Question

        Write code that gets user input and print a string that states their input in all lowercase and gives the length of their string.

        .. activecode::  str-ex-lowerq
            :nocodelens:

    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: strLowerDisc

.. tabbed:: str-ex-name

    .. tab:: Question

        Write code to print out the statement "Hi my name is Bob and I am 2" using only string methods or string slicing. You must get every part of the new string from the given strings.

        .. activecode::  str-ex-nameq
            :nocodelens:

            s1 = "hi"
            s2 = "My namesake is Bob, and he and I love to eat ham."

    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: strNameDisc

.. tabbed:: str-ex-nameInput

    .. tab:: Question

        Write code to get the input of a user’s first name, then get only the first letter of their name, and print that letter lowercase.

        .. activecode::  str-ex-nameInputq
            :nocodelens:


    .. tab:: Answer

        .. activecode:: str-ex-nameInputa

            #CREATE PROMPT
            prompt = "What is your name?"
            #GET INPUT
            name = input(prompt)
            #ACCESS FIRST LETTER (INDEX 0)
            first = name[0]
            #MAKE LOWERCASE
            lowerFirst = lower(first)
            #PRINT
            print(lowerFirst)

    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: strNameInputDisc
