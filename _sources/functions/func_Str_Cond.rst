Group Work: Functions, Strings, and Conditionals
---------------------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Learn how to display a value in Python using print.
* Match terms for functions to their definitiions.
* Recognize common symbols (:, #), operators (+, -, /), and keywords (def, return) in Python.
* Recognize strings.
* Use string indices.
* Understand how slice works for both positive and negative indices.
* Use input and convert between strings and numbers.
* Recognize common string methods.
* Recognize the keywords used in conditionals in Python (if, elif, else).
* Predict the output from simple and complex conditionals.
* Recognize the keywords used in complex conditionals (and, or, not).

*Process Objectives:*

* Learn how to properly indent the body of a function
* Predict the output from code.
* Modify code to produce the correct output.
* Create good test data for functions with conditionals
* Modify code to use complex conditionals

Function Example
==================

.. fillintheblank:: fsc_fitb_print_test_first_line_v3

    What is the first thing that will be printed when the code below runs?

    - :Hello!: The main function prints this before it calls the test function.
      :Welcome: Execution starts in the main method, so this won't be the first thing that is printed.
      :.*: Execution starts in the main method

Run the Python code below and then answer the following questions.

.. activecode:: fsc_ac_pogil_print_message_v2
    :caption: An example with several functions

    Run the code below to see what it prints and then use it to answer the following questions.
    ~~~~
    # function definition
    def test(a, b = 2):
        print("Welcome")
        print("Learn the power of functions!")
        print(a + b)
        print(a - b)
        print(a * b)
        print(a / b)
        print(a // b)
        a = 5 % 2
        return a

    # function definition
    def main():
        print("Hello!")

        # function call
        print(test(3))

    # function call
    main()

.. note::

   You do not declare the type of a variable in Python. Python requires that all statements that are part of the body of a function must be indented. Use four spaces to indent.

.. fillintheblank:: fsc_fitb_print_test_value_b

    What is the value of ``b`` when function ``test`` starts executing?

    - :2: Since the value of b was not specified it defaults to 2 (it was set to 2 as a default in the function definition)
      :.*: What is the default value specified for b in the function definition?

Delete the last line of the test function above and run the code again.

.. fillintheblank:: fsc_fitb_return_None
    :practice: T

    What value is returned from a function that doesn't have a return keyword?

    - :None: A function without a return still returns the keyword None
      :.*: What is the last thing that is printed when you run the code above after deleting the return from the test function?

.. parsonsprob:: fsc_pp_print_name_v2
   :numbered: left
   :adaptive:
   :practice: T
   :order: 6, 7, 2, 1, 0, 8, 3, 4, 5

   Drag the blocks from the left and put them in the correct order on the right to define a function ``print_greeting`` that asks for your name and prints "Hello Name". Then define a ``main`` function that calls ``print_greeting``.  Be sure to also call the ``main`` function. Note that you will have to indent the lines that are in the body of each function.  Click the *Check* button to check your solution.
   -----
   def print_greeting():
   =====
   def print_greeting() #paired
   =====
       name = input("What is your name?")
   =====
       print("Hello " + name)
   =====
   def main():
   =====
   Def main(): #paired
   =====
       print_greeting()
   =====
       print_greeting #paired
   =====
   main()

String Definition
==================

A **string** is a sequence of characters enclosed in quotes.  In Python you can use pairs of single
or double quotes to enclose a string like in ``"hello"`` or ``'hello'``. This is especially useful when a string includes a single quote ``"they're"``.  You can even use tripe quotes when
a string covers more than one line. 

String Indices
==================

.. fillintheblank:: fsc_fitb_pogil_initials_v2

    What is the last thing that will be printed when the code below runs?

    - :Jk: It prints the first letter of the first name and last letter of the last name.
      :.*: String indices start with 0 and -1 is the index of the last letter in a string.

.. activecode:: fsc_ac_pogil_initials_v2
    :caption: get_initials

    Run the code below to see what it prints.  Then fix it to pass the given test.  It should return a string with the
    first character of the first name and first character of the last name.
    ~~~~
    # function definition
    def get_initials(first, last):
        return first[0] + last[-1]

    # function definition
    def main():
        print(type("Hello"))
        print(type('Class'))
        print(type(42))

        print(get_initials("J'Quan",'Alik'))


    # function call
    main()

    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(get_initials("J'Quan",'Alik'),"JA",'''get_initials("J'Quan",'Alik')''')

    myTests().main()



.. note::

   Use [index] to get a character from a string.  The first character in a string is at index 0 and the last is at the length of the string minus 1 (also know as index -1 in Python).  

Fix the function ``get_initials`` above to return a string with the first letter of the first name followed by the first letter of the last name.

String Slices
==================

.. fillintheblank:: fsc_fitb_pogil_short_name

    What is the last thing that will be printed when the code below runs?

    - :Sibs: The last thing it prints are the first two letters of the first name and the last two letters of the last name.
      :.*: A slice starts with the first number and ends before the second.  If the second is left off it goes to the end of the string. The last character in a string is at index -1.

.. activecode:: fsc_ac_pogil_short_name
    :caption: get_short_name

    Run the code below to see what it prints.
    ~~~~
    # function definition
    def get_short_name(first, last):
        print(len(first))
        print(len(last))
        return first[:2] + last[-2:]

    # function definition
    def main():
        print(get_short_name('Simona',"Jacobs"))

    # function call
    main()


.. note::

   Use the slice ``[start:end]`` operator to get a slice (substring) from a string. It will return a new string starting at the start and including all the characters up to just before the end (end - 1).
   If ``start`` is missing the default is 0 and if ``end`` is missing the default value is the length of the string.

.. fillintheblank:: fsc_fitb_three_char_slice

    Use the slice operator to return the first three characters from the variable ``dna``?

    - :dna\[0\:3\]|\[:3\]: This will return a new string with the characters from index 0 to 2.
      :.*: Look at the note above and try again.


Basic Conditionals and Tests
============================

.. fillintheblank:: fsc_fitb_return_temp_first_line

    What is the first thing (first line of text) that will be printed when the code below runs?

    - :Baby, its cold outside!: Since temp < 32 this will print.
      :.*: Which conditional is true when temp < 32?


.. activecode:: fsc_ac_pogil_return_temp_desc
    :caption: get_temp_desc

    Run this code to see what it prints.
    ~~~~
    # function definition
    def get_temp_desc(temp):
        if temp < 32:
            return "Baby, its cold outside!"
        elif temp < 70:
            return "Wear a coat"
        elif temp < 80:
            return "Feels great!"
        else:
            return "Too hot to handle!"

    # function definition
    def main():
        print(get_temp_desc(20))
        print(get_temp_desc(85))

    # function call
    main()

.. fillintheblank:: fsc_fitb_pogil_elif

    What keyword is used in a conditional statement when you want three of more possible outcomes?

    - :elif: The keyword elif is used to provide more than two possible outcomes to a conditional statement.
      :Elif: Most keywords in Python start with a lowercase letter
      :.*: Try again!


.. activecode:: fsc_ac_pogil_return_temp_desc_v2
    :caption: Add tests

    Modify the code in the main method below to test all possible return values from get_temp_desc.
    ~~~~
    # function definition
    def get_temp_desc(temp):
        if temp < 32:
            return "Baby, its cold outside!  The temp is " + str(temp)
        elif temp < 70:
            return "Wear a coat. The temp is " + str(temp)
        elif temp < 80:
            return "Feels great! The temp is " + str(temp)
        else:
            return "Too hot to handle! The temp is " + str(temp)

    # function definition
    def main():
        print(get_temp_desc(20))
        print(get_temp_desc(85))

    # function call
    main()

.. note::

   You must first convert a number to a string using ``str(nun)`` if you want to add it to a string using ``+``.

.. parsonsprob:: fsc_pogil_check-guess-Parsons-v2
   :numbered: left
   :adaptive:
   :order: 5, 6, 7, 3, 4, 8, 9, 0, 2, 1

   Put the blocks in order to define the function ``check_guess`` which will return ``'too low'`` if the guess is less
   than the passed target, ``'correct'`` if they are equal, and ``'too high'`` if the guess
   is greater than the passed target.  For example, ``check_guess(5,7)`` returns
   ``'too low'``, ``check_guess(7,7)`` returns ``'correct'``, and ``check_guess(9,7)`` returns
   ``'too high'``. There are three extra blocks that are not needed in a correct solution.
   -----
   def check_guess(guess, target):
   =====
       if guess < target:
   =====
       if guess < target #paired
   =====
           return 'too low'
   =====
           return "too low' #paired
   =====
       elif guess == target:
   =====
       elif guess = target: #paired
   =====
           return 'correct'
   =====
       else:
   =====
           return 'too high'


.. fillintheblank:: fsc_fitb_cond_predict_grade

    What is the first thing that will be printed when the code below runs?

    - :D: Since every if will execute it will print D.
      :.*: Remember that every if will execute.  What is the final value of grade?

.. activecode:: fsc_ac_fix_grade_code
    :caption: Letter grade from score

    Run this code to see what it prints.  The modify it to work correctly.  Next,
    add code to the main function to test each possible letter grade.  It
    should return A if the score is
    greater than or equal 90, B if greater than or equal 80, C if greater
    than or equal 70, D if greater than or equal 60, and otherwise E.
    ~~~~
    # function definition
    def get_grade(score):
        grade = None
        if score > 90:
            grade = 'A'
        if score > 80:
            grade = 'B'
        if score > 70:
            grade = 'C'
        if score > 60:
            grade = 'D'
        else:
            grade = 'E'
        return grade

    def main():
        print(get_grade(95))

    main()


.. fillintheblank:: fsc_fitb_cond_grade_num_tests

    How many test cases do you need to check that the code above works as intended?

    - :9: You need to test greater than and equal for each grade from A to D and also test a value less than 60.
      :.*: Remember that you should check that it works correctly if the value is greater than or equal the specified value.


Logical Operators and Complex Conditionals
============================================

The logical operators in Python are ``and``, ``or``, and ``not``. These can be used to create complex conditionals.

.. activecode:: fsc_ac_and_complex_cond
    :caption: complex conditional with and

    Modify this code to use a complex conditional instead.  
    It should still pass all tests. It should only take four lines of code or less.
    ~~~~
    # function definition
    def test(a):
        if a > 0:
            if a <= 10:
                return True
        return False

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(test(5),True,"test(5)")
            self.assertEqual(test(0),False,"test(0)")
            self.assertEqual(test(1),True,"test(1)")
            self.assertEqual(test(-5),False,"test(-5)")
            self.assertEqual(test(11),False,"test(11)")
            self.assertEqual(test(10),True,"test(10)")
            self.assertEqual(test(9),True,"test(9)")

    myTests().main()

.. activecode::fsc_ac_or_complex_cond
    :caption: complex conditional with or

    Modify this code to use a complex conditional instead.  It should still pass all tests. 
    It should only take four lines of code or less.
    ~~~~
    # function definition
    def either6(a,b):
        if a == 6:
            return True
        if b == 6:
            return True
        return False

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(either6(5,2),False,"either6(5,2)")
            self.assertEqual(either6(6,3),True, "either6(6,3)")
            self.assertEqual(either6(3,6),True, "either6(3,6)")
            self.assertEqual(either6(3,-6),False, "either6(3,6)")

    myTests().main()


If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: fsc_basics_groupsub
   :limit: 6

