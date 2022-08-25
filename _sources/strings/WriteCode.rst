Write-code questions
-----------------------

.. tabbed:: str-ex-hi

    .. tab:: Question

        .. activecode::  str-ex-hiq
            :autograde: unittest

            Fix line 2 so that it prints "Hi" instead of "hi".
            ~~~~
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

        The ``capitalize()`` method returns a new string; it doesn't modify the original because strings are immutable. As a result, you need to assign the value of s1.capitalize() to s1.

        .. activecode::  str-ex-hiA
            :optional:

            Fix line 2 so that it prints "Hi" instead of "hi".
            ~~~~
            s1 = "hi"
            s1 = s1.capitalize()
            print(s1)


.. selectquestion:: str-writecode-2
   :fromid: str-ex-meowacq, str-ex-meowansw
   :toggle: lock



.. tabbed:: str-ex-eggs

    .. tab:: Question

        .. activecode::  str-ex-eggsq

            Write code to evaluate the length of the string "I like green eggs"
            and print it. It should print "The length is 17".
            ~~~~

    .. tab:: Answer

        You can use the ``len()`` method to find the length of a string.

        .. activecode::  str-ex-eggsa
            :optional:

            Write code to evaluate the length of the string "I like green eggs"
            and print it. It should print "The length is 17".
            ~~~~
            sentence = 'I like green eggs'
            print('The length is ' + str(len(sentence)))



.. selectquestion:: str-writecode-4
   :fromid: str-ex-countacq, str-ex-countansw
   :toggle: lock


.. tabbed:: str-ex-float

   .. tab:: Question

       .. activecode::  str-ex-floatq
           :autograde: unittest

           Take the following Python code that stores this string: ``string = "X-DSPAM-Confidence: 0.8475"``.
           Use ``find`` and string slicing to extract the portion of the string after the colon character
           and then use the ``float`` function to convert the extracted string into a floating point number called ``num``.
           ~~~~
           string = "X-DSPAM-Confidence: 0.8475"


           ====
           from unittest.gui import TestCaseGui
           class myTests(TestCaseGui):

               def testOne(self):
                   self.assertEqual(num,0.8475)

           myTests().main()

   .. tab:: Answer

       The ``float()`` function ignores whitespace, so you can begin the slice at the space character after the colon or at the 0 -- your choice!

       .. activecode:: str-ex-floatA
           :optional:

           Take the following Python code that stores this string: ``string = "X-DSPAM-Confidence: 0.8475"``.
           Use ``find`` and string slicing to extract the portion of the string after the colon character
           and then use the ``float`` function to convert the extracted string into a floating point number called ``num``.
           ~~~~
           string = "X-DSPAM-Confidence: 0.8475"
           colonpos = string.find(':')
           digit = string[colonpos + 1:]
           num = float(digit)


.. selectquestion:: str-writecode-6
   :fromid: str-ex-ducksacq, str-ex-ducksansw
   :toggle: lock




.. tabbed:: str-ex-digits

   .. tab:: Question

       .. activecode:: str-ex-digitsq
           :practice: T
           :autograde: unittest

           Write a function ``numDigits`` that will return the number of digits in an integer ``n``.
           ~~~~
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

       Convert the integer to a string, then use the ``len()`` method.

       .. activecode:: str_ex-digitsa
           :optional:

           Write a function ``numDigits`` that will return the number of digits in an integer ``n``.
           ~~~~
           def numDigits(n):
               n_str = str(n)
               return len(n_str)

           # Check the function
           print(numDigits(50))
           print(numDigits(20000))
           print(numDigits(1))



.. selectquestion:: str-writecode-8
   :fromid: str-ex-nameacq, str-ex-nameansw
   :toggle: lock


.. tabbed:: str-ex-nameInput

   .. tab:: Question

       .. activecode::  str-ex-nameInputq

           Write a program that asks a user for their name and from the input
           prints the first letter of their name in lowercase.
           ~~~~

   .. tab:: Answer

       Use the ``input()`` function to get the user's input, then use indexing and the ``lower()`` method to print the first letter of their name in lowercase.

       .. activecode:: str-ex-nameInputa
           :optional:

           Write a program that asks a user for their name and from the input
           prints the first letter of their name in lowercase.
           ~~~~
           prompt = "What is your name?"
           name = input(prompt)
           first = name[0]
           lowerFirst = first.lower()
           print(lowerFirst)


.. selectquestion:: str-writecode-10
   :fromid: str-ex-loweracq, str-ex-loweransw
   :toggle: lock
