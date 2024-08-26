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
        function1([70, 50, 90])            80.0
        function1([2, 4, 6, 8])            6.0


To check that you understand what the function is doing please enter the expected output for the following input:

.. fillintheblank:: function1_test1 

    What is the expected output from ``function1([80, 20])``?

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
       function1([70, 50, 90])            80.0
       function1([2, 4, 6, 8])            6.0
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(function1([10, 80, 100]), 90.0, 2, "function1([10, 80, 100])")
            self.assertAlmostEqual(function1([70, 50, 90]), 80.0, 2, "function1([70, 50, 90])")
            self.assertAlmostEqual(function1([2, 4, 6, 8]), 6.0, 2, "function1([2, 4, 6, 8])")
            self.assertAlmostEqual(function1([80, 20]), 80.0, 2, "function1([80, 20])")
            self.assertAlmostEqual(function1([0, 100, 80]), 90.0, 2, "function1([0, 100, 80])")
            self.assertAlmostEqual(function1([10, 80, 10]), 45.0, 2, "function1([10, 80, 10])")
            self.assertAlmostEqual(function1([85, 10, 70]), 77.5, 2, "function1([85, 10, 70])")
            self.assertAlmostEqual(function1([10, 90]), 90.0, 2, "function1([10, 90])")
            self.assertAlmostEqual(function1([70, 40, 10, 90]), 66.67, 2, "function1([70, 40, 10, 90])")
            self.assertAlmostEqual(function1([75, 45, 85, 55]), 71.67, 2, "function1([75, 45, 85, 55])")

     
    myTests().main()

Function 2
===========

Function 2 takes a list of numbers and outputs a number as shown below:

 .. code-block:: python

        Input                             Output
        function2([1, 3, 5, 4])             1
        function2([2, 4, 6])                3
        function2([4, 1, 6, 13])            2


To check that you understand what the function is doing please enter the expected output for the following input:

.. fillintheblank:: function2_test1 

    What is the expected output from ``function2([1, 2])``?

    - :1|one: Correct
      :.*: Look at the examples above.  What do the numbers 2, 4, and 6 have in common? 

.. fillintheblank:: function2_test2 

    What is the expected output from ``function2([3, 1, 0])``?

    - :1|one: Correct
      :.*: Look at the examples above.  What do the numbers 2, 4, and 6 have in common? 

.. shortanswer:: fuction2_sa

   Paste the prompt that you used to generate the code or write a description of what this code does.


.. activecode:: function2_ac

    Write the function ``function2(nums)`` that takes a list of numbers and outputs a number as shown below:

    .. code-block:: python

       Input                             Output
       function2([1, 3, 5, 4])             1
       function2([2, 4, 6])                3
       function2([4, 1, 6, 13])            2
    ~~~~
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(function2([1, 3, 5, 4]), 1, "function2([1, 3, 5, 4])")
            self.assertEqual(function2([2, 4, 6]), 3, "function2([2, 4, 6])")
            self.assertEqual(function2([ 4, 1, 6, 13]), 2, "function2([ 4, 1, 6, 13])")
            self.assertEqual(function2([1, 2]), 1, "function2([1, 2])")
            self.assertEqual(function2([3, 1, 0]), 1, "function2([3, 1, 0])")
            self.assertEqual(function2([-3, -1, -5]), 0, "function2([-3, -1, -5])")
            self.assertEqual(function2([12]), 1, "function2([12])")
            self.assertEqual(function2([11]), 0, "function2([11])")
            self.assertEqual(function2([3, -8, 12, 16, 18]), 4, "function2([3, -8, 12, 16, 18])")
            self.assertEqual(function2([13, 4, 17]), 1, "function2([13, 4, 17])")



     
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

    What is the expected output from ``function3(19)``?

    - :"?teen"?: Correct
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
            self.assertEqual(function3(19), "teen", "function3(19)")
            self.assertEqual(function3(30), "adult", "function3(30)")
            self.assertEqual(function3(10), "tween", "function3(10)")
            self.assertEqual(function3(15), "teen", "function3(15)")
     
    myTests().main()

Function 4
===========

Function 4 takes a list of numbers and outputs a list of numbers as shown below:

 .. code-block:: python

        Input                                  Output
        function4([1, 3, -2, 5])            [1, 3, 0, 5]
        function4([-8, 2, 4, -1])           [0, 2, 4, 0]
        function4([0, 3, 5])                [0, 3, 5]


To check that you understand what the function is doing please enter the expected output for the following input:

.. fillintheblank:: function4_test1 

    What is the expected output from ``function4([1, 2])``?

    - :\[1, 2\]|\[1,2\]: Correct
      :.*: Look at the examples above.  How does the list change?

.. fillintheblank:: function4_test2 

    What is the expected output from ``function4([-5, 1, 3])``?

    - :\[0, 1, 3\]|\[0,1,3\]: Correct
      :.*: Look at the examples above.   How does the list change? 

.. shortanswer:: fuction4_sa

   Paste the prompt that you used to generate the code or write a description of what this code does.


.. activecode:: function4_ac

    Write the function ``function4(nums)``  and takes a list of numbers and outputs a list of numbers as shown below:

    .. code-block:: python

        Input                             Output
        function4([1, 3, -2, 5])            [1, 3, 0, 5]
        function4([-8, 2, 4, -1])           [0, 2, 4, 0]
        function4([0, 3, 5])                [0, 3, 5]

    ~~~~
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(function4([1, 3, -2, 5]), [1, 3, 0, 5], "function4([1, 3, -2, 5])")
            self.assertEqual(function4([-8, 2, 4, -1]), [0, 2, 4, 0], "function4([-8, 2, 4, -1])")
            self.assertEqual(function4([0, 3, 5]), [0, 3, 5], "function4([0, 3, 5])")
            self.assertEqual(function4([1, 2]), [1, 2], "function4([1, 2])")
            self.assertEqual(function4([-5, 1, 3]), [0, 1, 3], "function4([-5, 1, 3])")
            self.assertEqual(function4([0, 0, 0]), [0, 0, 0], "function4([0, 0, 0])")
            self.assertEqual(function4([-13]), [0], "function4([-13])")
            self.assertEqual(function4([7, 5, 3, 1]), [7, 5, 3, 1], "function4([7, 5, 3, 1])")
            self.assertEqual(function4([33, -23]), [33, 0], "function4([33, -23])")
            self.assertEqual(function4([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], "function4([1, 2, 3, 4, 5])")
     
     
    myTests().main()



Extra Credit
==============

Function 5 takes a string and returns a string as shown below:

 .. code-block:: python

        Input                             Output
        function5("Walk This Way")        "Wathwa"
        function5("run away")             "Ruaw"
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
        function5("Walk This Way")        "Wathwa"
        function5("run away")             "Ruaw"
        function5("I love puppies")       "Ilopu"
    ~~~~
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(function5("Walk This Way"), "Wathwa" , "function4('Walk This Way')")
            self.assertEqual(function5("run away"), "Ruaw", "function4('run away')")
            self.assertEqual(function5("I love puppies"), "Ilopu", "function4('I love puppies')")
            self.assertEqual(function5("It was a fish"), "Itwaafi", "function4('It was a fish')")
            self.assertEqual(function5("Trust Me"), "Trme", "function4('Trust Me')")
            self.assertEqual(function5("I am a fish"), "Iamafi", "function4('I am a fish')")
            self.assertEqual(function5("over and under"), "Ovanun", "function4('over and under')")
            self.assertEqual(function5("Where am I"), "Whami", "function4('Where am I')")
            self.assertEqual(function5("I am an old fish"), "Iamanolfi", "function4('I am an old fish')")
            self.assertEqual(function5("with love"), "Wilo", "function4('with love')")
    
    myTests().main()

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: funcGAI-hw1-group
   :limit: 3