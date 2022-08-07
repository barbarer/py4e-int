Write Code Questions
--------------------
.. warning:: Be careful not to create infinite loops, as they will cause the page to freeze.



.. activecode::  itr-ex-root_ac
    :practice: T

    The code below is supposed to print an estimate of the square root of a number (target). You are given an initial guess of 2.
    However, the indention is wrong on 4 lines. Fix these errors to find the estimate.
    ~~~~
    target = 6
        guess = 2
    guessSquared = guess * guess
    while abs(target-guessSquared) > 0.01:
        closer = target / guess
    guess = (guess + closer) / 2.0
            guessSquared = guess * guess
        print("Square root of", target, "is", guess)


.. parsonsprob:: itr-ex-root_pp
    :practice: T
    :adaptive:
    :numbered: left

    Create code to print an estimate of the square root of a number (target). You are given an initial guess of 2.
    -----
    target = 6
    guess = 2
    =====
    guessSquared = guess * guess
    =====
    while abs(target-guessSquared) > 0.01:
    =====
        closer = target / guess
    =====
        guess = (guess + closer) / 2.0
    =====
        guessSquared = guess * guess
    =====
    print("Square root of", target, "is", guess)



.. activecode:: int-ex-while_ac
    :practice: T
    :autograde: unittest

    Rewrite the following code to use a while loop instead of a for loop to calcultae the value of the ten factorial.
    ~~~~
    product = 1  # Start out with nothing
    numbers = range(1,11)
    for number in numbers:
        product = product * number
    print(product)

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(product, 3628800)

    myTests().main()


.. parsonsprob:: int-ex-while_pp
    :practice: T
    :adaptive:
    :numbered: left

    Using the blocks below, create code to calculate the value of the ten factorial.
    -----
    product = 1
    number = 1
    =====
    while number < 11:
    =====
        product = product * number
    =====
        product = number * number #paired
    =====
        number = number + 1
    =====
    print(product)
