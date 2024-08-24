Homework: Creating Functions from Sample Input and Output
------------------------------------------------------------

In this homework you will be given some input and output and will determine how the function transforms the input 
into the output.  Then you can either generate code using generative AI like Chat GPT or write
the code yourself. 

.. note::

   If you work in a group of two to three people, only one member of the group should fill in the answers on this page.  You will be able to share your answers with the other group members at the bottom of the page.


Function 1
===========

Function1 takes a list of numbers and outputs a number as shown below:

 .. code-block:: python

        Input                             Output
        function1([10, 80, 100])           90.0
        function1([50, 70, 90])            80.0
        function1([2, 4, 6, 8])            6.0


To check that you understand what the function is doing please enter the expected output for the following input:

.. fillintheblank:: function1_test1 

    What is the expected output from ``function1([20, 80])``?

    - :80|80\.0|eighty: Correct
      :.*: Look at the examples above.  How is the result different from just an average?

.. fillintheblank:: function1_test2 

    What is the expected output from ``function1([0, 100, 80])``?

    - :90|90\.0|ninety: Correct
      :.*:  Look at the examples above.  How is the result different from just an average?

.. shortanswer:: fuction1_sa

   Paste the prompt that you used to generate the code or write a description of what this code does.


.. activecode:: function1_ac

    Write the function ``function1(nums)`` that takes a list of numbers and outputs a number as shown below:

    .. code-block:: python

       Input                             Output
       function1([10, 80, 100])           90.0
       function1([50, 70, 90])            80.0
       function1([2, 4, 6, 8])            6.0
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(function1([10, 80, 100]), 90.0, 2, "function1([10, 80, 100])")
            self.assertAlmostEqual(function1([50, 70, 90]), 80.0, 2, "function1([50, 70, 90])")
            self.assertAlmostEqual(function1([2, 4, 6, 8]), 6.0, 2, "function1([2, 4, 6, 8])")
            self.assertAlmostEqual(function1([20, 80]), 80.0, 2, "function1([20, 80])")
            self.assertAlmostEqual(function1([0, 100, 80]), 90.0, 2, "function1([0, 100, 80])")
     
    myTests().main()

Function 2
===========

Function 2 takes a list of numbers and outputs a number as shown below:

 .. code-block:: python

        Input                             Output
        function2([1, 3, 5, 4])             3
        function2([2, 4, 6])                0
        function2([1, 2, 3, 5])             3


To check that you understand what the function is doing please enter the expected output for the following input:

.. fillintheblank:: function2_test1 

    What is the expected output from ``function2([1, 2])``?

    - :1|one: Correct
      :.*: Look at the examples above.  What do the numbers 1, 3, and 5 have in common? 

.. fillintheblank:: function2_test2 

    What is the expected output from ``function2([0, 1, 3])``?

    - :2|two: Correct
      :.*: Look at the examples above.  What do the numbers 1, 3, and 5 have in common? 

.. shortanswer:: fuction2_sa

   Paste the prompt that you used to generate the code or write a description of what this code does.


.. activecode:: function2_ac

    Write the function ``function2(nums)`` that takes a list of numbers and outputs a number as shown below:

    .. code-block:: python

       Input                             Output
       function2([1, 3, 5, 4])             3
       function2([2, 4, 6])                0
       function2([1, 2, 3, 5])             3
    ~~~~
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(function2([1, 3, 5, 4]), 3, "function2([1, 3, 5, 4])")
            self.assertEqual(function2([2, 4, 6]), 0, "function2([2, 4, 6])")
            self.assertEqual(function2([1, 2, 3, 5]), 3, "function2([1, 2, 3, 5])")
            self.assertEqual(function2([1, 2]), 1, "function2([1, 2])")
            self.assertEqual(function2([0, 1, 3]), 2, "function2([0, 1, 3])")
     
    myTests().main()


Function 3
===========

Function 3 takes a number and returns a string as shown below:

 .. code-block:: python

        Input                             Output
        function3(7)                      "child"
        function3(8)                      "tween"
        function3(12)                     "tween"
        function3(13)                     "teen"
        function3(17)                     "teen"
        function3(20)                     "adult"


To check that you understand what the function is doing please enter the expected output for the following input:

.. fillintheblank:: function3_test1 

    What is the expected output from ``function3(3)``?

    - :"?child"?: Correct
      :.*: Look at the examples above.  What category do you think the input should be in?

.. fillintheblank:: function3_test2 

    What is the expected output from ``function3(30)``?

    - :"?adult"?: Correct
      :.*: Look at the examples above.  What category do you think the input should be in?

.. shortanswer:: fuction3_sa

   Paste the prompt that you used to generate the code or write a description of what this code does.


.. activecode:: function3_ac

    Write the function ``function3(num)`` that takes a number and returns a string as shown below:

    .. code-block:: python

        Input                             Output
        function3(7)                      "child"
        function3(8)                      "tween"
        function3(12)                     "tween"
        function3(13)                     "teen"
        function3(17)                     "teen"
        function3(20)                     "adult"


    ~~~~
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(function3(7),"child" , "function3(7)")
            self.assertEqual(function3(8), "tween", "function3(8)")
            self.assertEqual(function3(12), "tween", "function3(12)")
            self.assertEqual(function3(13), "teen", "function3(13)")
            self.assertEqual(function3(17), "teen", "function3(17)")
            self.assertEqual(function3(20), "adult", "function3(20)")
            self.assertEqual(function3(3), "child", "function3(3)")
            self.assertEqual(function3(30), "adult", "function3(30)")
            self.assertEqual(function3(10), "tween", "function3(10)")
            self.assertEqual(function3(15), "teen", "function3(15)")
     
    myTests().main()

Function 4
===========

Function 4 takes a list of numbers and outputs a list of numbers as shown below:

 .. code-block:: python

        Input                             Output
        function4([1, 3, -2, 5])            [1, 3, 0, 5]
        function4([0, 2, 4, -3])            [0, 2, 4, 0]
        function4([1, 3, 5)                 [1, 3, 5]


To check that you understand what the function is doing please enter the expected output for the following input:

.. fillintheblank:: function4_test1 

    What is the expected output from ``function4([1, 2])``?

    - :\[1, 2\]|one: Correct
      :.*: Look at the examples above.  How does the list change?

.. fillintheblank:: function4_test2 

    What is the expected output from ``function4([-5, 1, 3])``?

    - :\[0, 1, 3\]|two: Correct
      :.*: Look at the examples above.   How does the list change? 

.. shortanswer:: fuction4_sa

   Paste the prompt that you used to generate the code or write a description of what this code does.


.. activecode:: function4_ac

    Write the function ``function4(nums)``  and takes a list of numbers and outputs a list of numbers as shown below:

    .. code-block:: python

        Input                             Output
        function4([1, 3, -2, 5])            [1, 3, 0, 5]
        function4([0, 2, 4, -3])            [0, 2, 4, 0]
        function4([1, 3, 5)                 [1, 3, 5]

    ~~~~
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(function4([1, 3, -2, 5]), [1, 3, 0, 5], "function4([1, 3, -2, 5])")
            self.assertEqual(function4([0, 2, 4, -3]), [0, 2, 4, 0], "function4([0, 2, 4, -3])")
            self.assertEqual(function4([1, 3, 5]), [1, 3, 5], "function4([1, 3, 5])")
            self.assertEqual(function4([1, 2]), [1, 2], "function4([1, 2])")
            self.assertEqual(function4([-5, 1, 3]), [0, 1, 3], "function4([-5, 1, 3])")
     
     
    myTests().main()



Extra Credit
==============

Function 5 takes a string and returns a string as shown below:

 .. code-block:: python

        Input                             Output
        function5("Walk this way")        "Wathwa"
        function5("Run Away")             "Ruaw"
        function5("I love puppies")       "Ilopu"


To check that you understand what the function is doing please enter the expected output for the following input:

.. fillintheblank:: function5_test1 

    What is the expected output from ``function5("It was a fish")``?

    - :"?Itwaafi"?: Correct
      :.*: Look at the examples above.  How does it transform each string?

.. fillintheblank:: function5_test2 

    What is the expected output from ``function5("Trust Me")``?

    - :"?Trme"?: Correct
      :.*: Look at the examples above.  How does it transform each string?

.. shortanswer:: fuction5_sa

   Paste the prompt that you used to generate the code or write a description of what this code does.


.. activecode:: function5_ac

    Write the function ``function5(str)`` that takes a string and returns a string as shown below:

    .. code-block:: python


        Input                             Output
        function5("Walk this way")        "Wathwa"
        function5("Run Away")             "Ruaw"
        function5("I love puppies")       "Ilopu"
    ~~~~
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(function5("Walk this way"), "Wathwa" , "function4('Walk this way')")
            self.assertEqual(function5_ac("Run Away"), "Ruaw", "function4('Run Away')")
            self.assertEqual(function5("I love puppies"), "Ilopu", "function4('I love puppies')")
            self.assertEqual(function5("A long time ago"), "Alotiag", "function4('A long time ago')")
            self.assertEqual(function5("Trust Me"), "Trme", "function4('Trust Me')")
     
    myTests().main()

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: funcGAI-hw1-group
   :limit: 3