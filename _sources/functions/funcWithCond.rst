Group Work: Functions and Conditionals
----------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Recognize the keywords used in conditionals in Python (if, elif, else).
* Predict the output from simple and complex conditionals.
* Recognize the keywords used in complex conditionals (and, or, not).

*Process Objectives:*

* Create good test data for functions with conditionals
* Modify code to use complex conditionals


Basic Conditionals and Tests
============================

.. fillintheblank:: funct_fitb_return_temp_first_line

    What is the first thing (first line of text) that will be printed when the code below runs?

    - :Baby, its cold outside!: Since temp < 32 this will print.
      :.*: Which conditional is true when temp < 32?


.. activecode:: func_ac_pogil_return_temp_desc
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

.. fillintheblank:: funct_fitb_pogil_else

    What keyword specifies the block of statements to execute if a Boolean condition is false?

    - :else: The keyword else is used to execute a blocks of statements if a Boolean condition is false
      :Else: Most keywords in Python start with a lowercase letter
      :.*: Try again!

.. fillintheblank:: funct_fitb_pogil_if

    What keyword starts a conditional statement and is the only required keyword in it?

    - :if: The keyword if is used to start a conditional statement and is the only required keyword.
      :If: Most keywords in Python start with a lowercase letter
      :.*: Try again!

.. fillintheblank:: funct_fitb_pogil_elif

    What keyword is used in a conditional statement when you want three of more possible outcomes?

    - :elif: The keyword elif is used to provide more than two possible outcomes to a conditional statement.
      :Elif: Most keywords in Python start with a lowercase letter
      :.*: Try again!


.. activecode:: func_ac_pogil_return_temp_desc_v2
    :caption: Add tests

    Modify the code in the main method below to test all possible return values from get_temp_desc.
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

.. parsonsprob:: funct_pogil_check-guess-Parsons-v2
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

.. activecode:: funct_pogil_get_last_half
   :autograde: unittest
   :nocodelens:


   Finish the function ``last_half(str)`` which
   returns the last half of the characters from the passed string ``str``.
   If ``str`` has less than 2 characters then return the empty string ``""``.
   For example, ``last_half("a")`` returns ``""``, ``last_half("coal")`` returns ``"al"``, and ``last_half("bye") returns ``ye``.
   ~~~~
   def last_half(str):

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(last_half('a'), '', "last_half('a')")
           self.assertEqual(last_half('coal'), 'al', "last_half('coal')")
           self.assertEqual(last_half('bye'), 'ye', "last_half('bye')")
           self.assertEqual(last_half('abcd'), 'cd', "last_half('abcd')")
           self.assertEqual(last_half('12345'), '345', "last_half('12345')")
           self.assertEqual(last_half('123456'), '456', "last_half('123456')")
           self.assertEqual(last_half('ab'), 'b', "last_half('ab')")
           self.assertEqual(last_half(''), '', "last_half('')")


   myTests().main()


.. fillintheblank:: funct_fitb_cond_predict_grade

    What is the first thing that will be printed when the code below runs?

    - :D: Since every if will execute it will print D.
      :.*: Remember that every if will execute.  What is the final value of grade?

.. activecode:: func_ac_fix_grade_code
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


.. fillintheblank:: funct_fitb_cond_grade_num_tests

    How many test cases do you need to check that the code above works as intended?

    - :9: You need to test greater than and equal for each grade from A to D and also test a value less than 60.
      :.*: Remember that you should check that it works correctly if the value is greater than or equal the specified value.


Logical Operators and Complex Conditionals
============================================

The logical operators in Python are ``and``, ``or``, and ``not``. These can be used to create complex conditionals.

.. mchoice:: funt_mc_and
   :practice: T

   Which of the following tests if x is both greater than 10 and less than or equal to 20?

   -   x > 10 and < 20

       -   You have to check that x is greater than 10 and x is less than or equal 20.  You must repeat the x.

   -   x > 10 && x <= 20

       -   Python uses the keyword and, not &&

   -   x > 10 and x <= 20

       +   This will be true when x is greater than 10 and less than or equal 20

   -   x > 10 && x < 20

       -   Python uses the keyword and, not && and this will be true when x is greater than 10 and less than 20


.. mchoice:: funt_mc_or
   :practice: T

   Which of the following returns true if ``have_ride`` is true or ``can_walk`` is true?

   -   have_ride and can_walk

       -   Both must be true for this to be true

   -   have_ride or can_walk

       +   This will return true when one of these is true

   -   have_ride || can_walk

       - Python uses the keyword or, not ||

   -   have_ride OR can_walk

       - Python keywords are all lowercase

.. mchoice:: funt_complex_cond_mc_not
   :practice: T

   Which of the following returns true if ``is_raining`` is false?  Pick all that are correct.

   -   ! is_raining

       -   Python does not use the ! symbol for not

   -   not is_raining

       +   This will return True when is_raining is false.

   -   is_raining

       -   If is_raining is false this will return False.

   -   is_raining == False

       +   This will return True when is_raining is False.


.. activecode:: func_ac_or_complex_cond
    :caption: complex conditional

    Modify this code to use a complex conditional instead.  It should still pass all tests. It should only take four lines of code or less.
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

.. activecode:: func_ac_and_complex_cond
    :caption: complex conditional

    Modify this code to use a complex conditional instead.  It should still pass all tests. It should only take four lines of code or less.
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

.. parsonsprob:: func_pp_pogil_sq_play
   :numbered: left
   :adaptive:
   :practice: T
   :order: 9, 10, 0, 1, 2, 3, 8, 7, 5, 4, 6

   Drag the blocks from the left and put them in the correct order on the right to define a function ``squirrel_play`` that takes a ``temp`` (the temperature) and Boolean ``is_summer`` that indicates if it is summer or not and returns ``True`` if it is summer and the temperature is between 60 and 100 (inclusive).  It also returns ``True`` if it isn't summer and the temperature is between 60 and 90 (inclusive).  Otherwise, it returns ``False``.
   -----
   def squirrel_play(temp, is_summer):
   =====
       if is_summer and temp >= 60 and temp <= 100:
   =====
           return True
   =====
           return true #paired
   =====
       elif not is_summer and temp >= 60 and temp <= 90:
   =====
       else if not is_summer and temp >= 60 and temp <= 90: #paired
   =====
           return True
   =====
       else:
   =====
       else #paired
   =====
           return False
   =====
           return false #paired

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: func_cond_groupsub
   :limit: 4
