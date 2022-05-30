Introduction
-----------------------------------------------------

Please read the following, watch the videos, and try to solve the problems.

Solving Mixed-up Code Problems
==================================

If you see a problem like the one below you will need to put the mixed-up
code in the correct order on the right side. You
may need to indent the blocks as well.  There may also be extra blocks that are not
needed in a correct solution that you can leave on the left side. Click the "Check" button
to check your solution.

See the video below for an example.

.. youtube:: Rf7oWHlo-e0
    :optional:
    :width: 650
    :height: 415
    :align: center

Try to solve the following mixed-up code problem.  This problem doesn't require any indentation.

.. parsonsprob:: intro-simple-parsons-no-indent
   :numbered: left
   :adaptive:
   :practice: T
   :order: 3, 1, 2, 0

   Drag the blocks from the left and put them in the correct order on the right to describe the order the function calls and functions execute.
   -----
   First block
   =====
   Second block
   =====
   Third block

Try to solve the following mixed-up code problem. This problem requires indentation.

.. parsonsprob:: intro-simple-parsons-indent
   :numbered: left
   :adaptive:
   :practice: T
   :order: 3, 1, 2, 0

   Drag the blocks from the left and put them in the correct order on the right to describe the order the function calls and functions execute.
   -----
   First block
   =====
   Second block
   =====
       Third block that needs to be indented

Try to solve the following mixed-up code problem. This problem requires indentation and has extra blocks that are not needed in a correct solution.

.. parsonsprob:: intro-simple-parsons-indent-with-dist
   :numbered: left
   :adaptive:
   :practice: T
   :order: 3, 1, 2, 0

   Drag the blocks from the left and put them in the correct order on the right to describe the order the function calls and functions execute.
   -----
   First block
   =====
   Second block
   =====
   Extra block that isn't needed #paired
   =====
       Third block that needs to be indented

The mixed-up code problems have a "Help me" button at the bottom of the
problem. Once you have checked at least three incorrect solutions you can
click the button for help.  It will remove an incorrect code block, if you used
one in your solution, or combine two blocks into one if there are more
than three blocks left.

See the video below for an example.

.. youtube:: QejZ7u642IU
    :optional:
    :width: 650
    :height: 415
    :align: center

Solving Write Code Problems
==============================

If you see a problem like the one below you will need to write code.  The problem
will often have unit tests that you can run to check that your code is working
correctly.  Click on the "Run" button to compile and run your code.  Look after
the code area for compiler errors and/or unit test results.

See the video below for an example.

.. youtube:: piPz0kh8gMk
    :optional:
    :width: 650
    :height: 415
    :align: center

Try to finish writing the code for the following problem.

.. activecode:: intro-sample-write-code
    :practice: T
    :autograde: unittest

    Write a function called ``double(num)`` that takes a number ``num`` and
    returns the number times 2. For example, ``double(2)`` should return 4.
    Look below the code to check for any compiler errors or the results
    from the test cases.
    ~~~~
    def double(num):
        # write code here

    print(double(2))

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(double(2),4,"double(2)")
            self.assertEqual(double(3),6,"double(3)")
            self.assertEqual(double(-1),-2,"double(-1)")
            self.assertEqual(double(0),0,"double(0)")
            self.assertEqual(double(11),22,"double(11)")

    myTests().main()
