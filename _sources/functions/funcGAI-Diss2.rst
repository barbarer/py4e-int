Discussion: Creating Functions from Sample Input and Output
------------------------------------------------------------

In this discussion you will be given some input and output for a function and will determine how the 
function transforms the input 
into the output.  Look at the output.  How does it relate to the input? What is the function doing to the input 
to get the output?

Once you think you know what the funciton is supposed to do, you can either generate the correct code using a 
generative AI tool like ChatGPT (https://umgpt.umich.edu/) or write
the code yourself. 

If you use ChatGPT, check the code that ChatGPT generates.  Is it using things you have learned in this class so far? If not, 
tell it to use the things we have covered, like for loops, conditionals, and lists.  

Even if you write your own code, describe what the function does in enough detail so that ChatGPT can generate the correct answer and test that it does.

.. note::

   If you work in a group of two to three people, only one member of the group should fill in the answers on this page.  You will be able to share your answers with the other group members at the bottom of the page.


Function 1
===========

Function1 takes a list of numbers and outputs a number as shown below:

 .. code-block:: python

        Input                             Output
        function1([10, 80, 100])           72.5
        function1([70, 90, 50])            75.0
        function1([2, 4, 6, 8])            7.2


To check that you understand what the function is doing please enter the expected output for the following input:

.. fillintheblank:: f1_d1_test1 

    What is the expected output from ``function1([80, 20])``?

    - :60|60\.0|sixty: Correct
      :.*: Look at the examples above.  How is the result different from just an average?

.. fillintheblank:: f1_d1_test2 

    What is the expected output from ``function1([0, 100, 80])``?

    - :70|70\.0|seventy: Correct
      :.*:  Look at the examples above.  How is the result different from just an average?

.. shortanswer:: f1_d1_sa

   Paste the prompt that you used to generate the code or write a description of what this code does. 
   If you write the code yourself be sure to test your description with ChatGPT to make sure it generates
   the correct code. 


.. activecode:: f1_d1_ac

    Write the function ``function1(nums)`` that takes a list of numbers and outputs a number as shown below:

    .. code-block:: python

       Input                             Output
       function1([10, 80, 100])           72.5
       function1([70, 90, 50])            75.0
       function1([2, 4, 6, 8])            7.2
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(function1([10, 80, 100]), 72.5, 2, "function1([10, 80, 100])")
            self.assertAlmostEqual(function1([70, 90, 50]), 75.0, 2, "function1([70, 90, 50])")
            self.assertAlmostEqual(function1([2, 4, 6, 8]), 5.6, 2, "function1([2, 4, 6, 8])")
            self.assertAlmostEqual(function1([80, 20]), 60.0, 2, "function1([80, 20])")
            self.assertAlmostEqual(function1([0, 100, 80]), 70.0, 2, "function1([0, 100, 80])")
            self.assertAlmostEqual(function1([10, 80, 10]), 45.0 , 2, "function1([10, 80, 10])")
            self.assertAlmostEqual(function1([85, 10, 70]), 62.5, 2, "function1([85, 10, 70])")
            self.assertAlmostEqual(function1([10, 90]), 63.33, 2, "function1([10, 90])")
            self.assertAlmostEqual(function1([70, 40, 10, 90]), 60.0, 2, "function1([70, 40, 10, 90])")
            self.assertAlmostEqual(function1([75, 45, 85, 55]), 69.0, 2, "function1([75, 45, 85, 55])")

     
    myTests().main()

Function 2
===========

Function 2 takes a list of numbers and outputs a number as shown below:

 .. code-block:: python

        Input                             Output
        function2([1, 4])                   1
        function2([2, 4, 6])                0
        function2([4, 1, 6, 13])            14


To check that you understand what the function is doing please enter the expected output for the following input:

.. fillintheblank:: f2_d2_test1 

    What is the expected output from ``function2([1, 2])``?

    - :1|one: Correct
      :.*: Look at the examples above.  What do the numbers 1 and 13 have in common?  How does the output relate to those numbers?

.. fillintheblank:: f2_d2_test2 

    What is the expected output from ``function2([3, 1, 0])``?

    - :4|four: Correct
      :.*: Look at the examples above.  What do the numbers 1 and 13 have in common?  How does the output relate to those numbers?

.. shortanswer:: f2_d2_sa

   Paste the prompt that you used to generate the code or write a description of what this code does.


.. activecode:: f2_d2_ac

    Write the function ``function2(nums)`` that takes a list of numbers and outputs a number as shown below:

    .. code-block:: python

       Input                             Output
       function2([1, 4])                   1
       function2([2, 4, 6])                0
       function2([4, 1, 6, 13])            14
    ~~~~
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(function2([1, 4]), 1, "function2([1, 4])")
            self.assertEqual(function2([2, 4, 6]), 0, "function2([2, 4, 6])")
            self.assertEqual(function2([ 4, 1, 6, 13]), 14, "function2([ 4, 1, 6, 13])")
            self.assertEqual(function2([1, 2]), 1, "function2([1, 2])")
            self.assertEqual(function2([3, 1, 0]), 4, "function2([3, 1, 0])")
            self.assertEqual(function2([-3, -1, -5]), -9, "function2([-3, -1, -5])")
            self.assertEqual(function2([12]), 0, "function2([12])")
            self.assertEqual(function2([11]), 11, "function2([11])")
            self.assertEqual(function2([3, -8, 12, 16, 18]), 3, "function2([3, -8, 12, 16, 18])")
            self.assertEqual(function2([13, 4, 17]), 30, "function2([13, 4, 17])")



     
    myTests().main()


Function 3
===========

Function 3 takes a number and returns a string as shown below:

 .. code-block:: python

        Input                             Output
        function3(25)                       1
        function3(26)                       2
        function3(50)                       2
        function3(51)                       3
        function3(75)                       3
        function3(76)                       4


To check that you understand what the function is doing please enter the expected output for the following input:

.. fillintheblank:: f3_d2_test1 

    What is the expected output from ``function3(19)``?

    - :1: Correct
      :.*: Look at the examples above.  What category do you think the input should be in?

.. fillintheblank:: f3_d2_test2 

    What is the expected output from ``function3(30)``?

    - :2: Correct
      :.*: Look at the examples above.  What category do you think the input should be in?

.. shortanswer:: f3_d2_sa

   Paste the prompt that you used to generate the code or write a description of what this code does.


.. activecode:: f3_d2_ac

    Write the function ``function3(num)`` that takes a number and returns a string as shown below:

    .. code-block:: python

        Input                             Output
        function3(25)                       1
        function3(26)                       2
        function3(50)                       2
        function3(51)                       3
        function3(75)                       3
        function3(76)                       4


    ~~~~
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(function3(25), 1, "function3(25)")
            self.assertEqual(function3(26), 2, "function3(26)")
            self.assertEqual(function3(50), 2, "function3(50)")
            self.assertEqual(function3(51), 3, "function3(51)")
            self.assertEqual(function3(75), 3, "function3(75)")
            self.assertEqual(function3(76), 4, "function3(76)")
            self.assertEqual(function3(19), 1, "function3(19)")
            self.assertEqual(function3(30), 2, "function3(30)")
            self.assertEqual(function3(60), 3, "function3(60)")
            self.assertEqual(function3(88), 4, "function3(88)")
     
    myTests().main()

Function 4
===========

Function 4 takes a list of numbers and outputs a list of numbers as shown below:

 .. code-block:: python

        Input                                  Output
        function4([1, 3, -2, 5])            [1, 3]
        function4([-8, 2, 4, -1])           [2, 4]
        function4([0, 3, 5])                [3]


To check that you understand what the function is doing please enter the expected output for the following input:

.. fillintheblank:: f4_d2_test1 

    What is the expected output from ``function4([5, 2])``?

    - :\[2\]|\[2\]: Correct
      :.*: Look at the examples above.  What is removed from the list?

.. fillintheblank:: f4_d2_test2 

    What is the expected output from ``function4([-5, 1, 3])``?

    - :\[1, 3\]|\[1,3\]: Correct
      :.*: Look at the examples above.   What is removed from the list

.. shortanswer:: f4_d2_sa

   Paste the prompt that you used to generate the code or write a description of what this code does.


.. activecode:: f4_d2_ac

    Write the function ``function4(nums)`` takes a list of numbers, ``nums``, and outputs a list of numbers as shown below:

    .. code-block:: python

        Input                             Output
        function4([1, 3, -2, 5])            [1, 3]
        function4([-8, 2, 4, -1])           [2, 4]
        function4([0, 3, 5])                [3]

    ~~~~
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(function4([1, 3, -2, 5]), [1, 3], "function4([1, 3, -2, 5])")
            self.assertEqual(function4([-8, 2, 4, -1]), [2, 4], "function4([-8, 2, 4, -1])")
            self.assertEqual(function4([0, 3, 5]), [3], "function4([0, 3, 5])")
            self.assertEqual(function4([1, 2]), [1, 2], "function4([1, 2])")
            self.assertEqual(function4([-5, 1, 3]), [1, 3], "function4([-5, 1, 3])")
            self.assertEqual(function4([0, 0, 0]), [], "function4([0, 0, 0])")
            self.assertEqual(function4([-13]), [], "function4([-13])")
            self.assertEqual(function4([7, 5, 3, 1]), [3, 1], "function4([7, 5, 3, 1])")
            self.assertEqual(function4([33, -23]), [], "function4([33, -23])")
            self.assertEqual(function4([1, 2, 3, 4, 5]), [1, 2, 3, 4], "function4([1, 2, 3, 4, 5])")
     
     
    myTests().main()


