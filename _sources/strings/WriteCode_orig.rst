Write Code Questions
--------------------


.. activecode::  str-ex-hiacq
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

.. parsonsprob:: str-ex-hiansw
    :adaptive:
    :numbered: left
    :practice: T

    Fix line 2 so that it prints "Hi" instead of "hi".
    -----
    s1 = "hi"
    =====
    s1 = s1.capitalize()
    =====
    s1.capitalize() #paired
    =====
    print(s1)


.. activecode::  str-ex-meowacq
    :autograde: unittest

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


.. parsonsprob:: str-ex-meowansw
    :adaptive:
    :numbered: left
    :practice: T

    Fix the code so that only "meow" is printed.
    -----
    sentence = "The cat goes meow."
    =====
    s2 = sentence[13:17]
    =====
    s2 = [16:13]sentence
    =====
    print(s2)


.. activecode::  str-ex-eggsacq
    :autograde: unittest

    Write code to evaluate the length of the string "I like green eggs"
    and print it. Save the string as s1. It should print "The length is 17".
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(s1,"The length is 17")

    myTests().main()



.. parsonsprob:: str-ex-eggsansw
    :adaptive:
    :numbered: left
    :practice: T

    Write code to evaluate the length of the string "I like green eggs"
    and print it. It should print "The length is 17".
    -----
    sentence = 'I like green eggs'
    =====
    print('The length is ' + str(len(sentence)))
    =====
    print("The length is " + len(sentence)) #paired


.. activecode::  str-ex-countacq
    :autograde: unittest

    Create a function named ``count`` that accepts a string and a letter
    as arguments, then returns the count of that letter in the string.
    For example, if the function call was ``count("banana", "a")`` it would
    return ``3``. *Hint: use the* ``count`` *method.*
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


.. parsonsprob:: str-ex-countansw
    :adaptive:
    :numbered: left
    :practice: T

    Create a function named ``count`` that accepts a string and a letter
    as arguments, then returns the count of that letter in the string.
    For example, if the function call was ``count("banana", "a")`` it would
    return ``3``. *Hint: use the* ``count`` *method.*
    -----
    def count(str, letter):
    =====
    def count(str, letter) #paired
    =====
        return str.count(letter)
    =====
        return count(letter) #paired




.. activecode::  str-ex-floatacq
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


.. parsonsprob:: str-ex-floatansw
    :adaptive:
    :numbered: left
    :practice: T

    Take the following Python code that stores this string: ``string = "X-DSPAM-Confidence: 0.8475"``.
    Use ``find`` and string slicing to extract the portion of the string after the colon character
    and then use the ``float`` function to convert the extracted string into a floating point number called ``num``.
    -----
    string = "X-DSPAM-Confidence: 0.8475"
    =====
    colonpos = string.find(':')
    =====
    digit = string[colonpos + 1:]
    =====
    digit = string[colonpos:] #paired
    =====
    num = float(digit)
    =====
    num = int(digit) #paired


.. activecode::  str-ex-ducksacq

    In Robert McCloskey's book *Make Way for Ducklings*, the names of the ducklings are
    Jack, Kack, Lack, Mack, Nack, Ouack, Pack, and Quack.
    The following loop tries to output these names in order.
    Of course, that's not quite right because Ouack and Quack are misspelled.
    Can you fix it?
    ~~~~
    prefixes = "JKLMNOPQ"
    suffix = "ack"

    for letter in prefixes:
        print(letter + suffix)

.. parsonsprob:: str-ex-ducksansw
    :adaptive:
    :numbered: left
    :practice: T

    In Robert McCloskey's book *Make Way for Ducklings*, the names of the ducklings are
    Jack, Kack, Lack, Mack, Nack, Ouack, Pack, and Quack.
    The following loop tries to output these names in order.
    Of course, that's not quite right because Ouack and Quack are misspelled.
    Can you fix it?
    -----
    prefixes = "JKLMNOPQ"
    suffix = "ack"
    =====
    for letter in prefixes:
    =====
        if letter == 'O' or letter == 'Q':
            print(letter + "u" + suffix)
    =====
        if letter = 'o' or letter = 'Q': #paired
            print(letter + "u" + suffix)
    =====
        else:
            print(letter + suffix)


.. activecode:: str-ex-digitsacq
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


.. parsonsprob:: str-ex-digitsansw
    :adaptive:
    :numbered: left
    :practice: T

    Write a function ``numDigits`` that will return the number of digits in an integer ``n``.
    -----
    def numDigits(n):
    =====
    def numDigits(n) #paired
    =====
        n_str = str(n)
    =====
        return len(n_str)
    =====
        return len(n) #paired
    =====


.. activecode::  str-ex-nameacq
    :autograde: unittest

    Write code to print out the statement "Hi my name is Bob and I am 2" using only string methods
    or string slicing. You must get every part of the new string from the given strings, not by using
    string literals.
    Name the final string ``statement``.
    ~~~~
    s1 = "hi"
    s2 = "My name is Bob, and he and I love to eat ham."

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(statement,"Hi my name is Bob and I am 2")

    myTests().main()

.. parsonsprob:: str-ex-nameansw
    :adaptive:
    :numbered: left
    :practice: T

    Write code to print out the statement "Hi my name is Bob and I am 2" using only string methods
    or string slicing. You must get every part of the new string from the given strings, not by using
    string literals.
    Name the final string ``statement``.
    -----
    s1 = "hi"
    s2 = "My name is Bob, and he and I love to eat ham."
    =====
    statement = s1.capitalize() + s2[2:3] + s2.lower()[0:3] + s2[3:14] + s2[22:29] + s2[4:6] + s2[2:3] + str(len(s1))
    =====
    statement = s1.capitalize() + s2[7:8] + s2[5:6] + s2[1:2] + s2[3:15] + s2[22:29] + s2[4:6] + s2[2:3] + str(len(s1)) #paired
    =====
    print(statement)


.. activecode::  str-ex-nameInputacq

    Write a program that asks a user for their name and from the input
    prints the first letter of their name in lowercase.
    ~~~~


.. parsonsprob:: str-ex-nameInputansw
    :adaptive:
    :numbered: left
    :practice: T

    Write a program that asks a user for their name and from the input
    prints the first letter of their name in lowercase.
    -----
    prompt = "What is your name?"
    =====
    name = input(prompt)
    =====
    first = name[0]
    =====
    lowerFirst = first.lower()
    =====
    first.lower() #paired
    =====
    print(lowerFirst)
    =====
    print(first) #paired

.. activecode::  str-ex-loweracq

    Write a program that asks for user input and prints their
    input in all lowercase, as well as the length of their string.
    ~~~~

.. parsonsprob:: str-ex-loweransw
    :adaptive:
    :numbered: left
    :practice: T

    Write a program that asks for user input and prints their
    input in all lowercase, as well as the length of their string.
    -----
    user_input = input("Enter a string: ")
    =====
    print(user_input.lower() + " " + str(len(user_input)))
    =====
    print(user_input.lower() + " " + len(user_input)) #paired
