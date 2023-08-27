Group Work: Functions
----------------------------------------

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

*Process Objectives:*

* Modify code that includes function definitions and function calls
* Learn how to properly indent the body of a function
* Predict output from functions.

Print and Function Basics
===============================

Look at the code below and predict what it will print.

.. fillintheblank:: funct_fitb_print_test_first_line_v3

    What is the first thing that will be printed when the code below runs?

    - :Hello!: The main function prints this before it calls the test function.
      :Welcome: Execution starts in the main method, so this won't be the first thing that is printed.
      :.*: Execution starts in the main method

.. fillintheblank:: funct_fitb_print_test_last_line_v3

    What is the last thing that will be printed when the code below runs?

    - :1: Prints the value returned from the function test which is the remainder of 5 divided by 2 which is one.
      :.*: What is the remainder of 5 divided by 2?


Run the Python code below and then answer the following questions.

.. activecode:: func_ac_pogil_print_message_v2
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




.. fillintheblank:: funct_fitb_print_test_value_b

    What is the value of ``b`` when function ``test`` starts executing?

    - :2: Since the value of b was not specified it defaults to 2 (it was set to 2 as a default in the function definition)
      :.*: What is the default value specified for b in the function definition?

.. fillintheblank:: funct_fitb_return
    :practice: T

    What keyword in Python is used to return a value from a function?

    - :return: The return keyword is used to return a value from a function
      :.*: What word starts the last line of the test function?

.. fillintheblank:: funct_fitb_print
    :practice: T

    What built-in function in Python is used to display a value?

    - :print: The print function will display a value in Python.
      :.*: Look at the example Python code above.

Delete the last line of the test function above and run the code again.

.. fillintheblank:: funct_fitb_return_None
    :practice: T

    What value is returned from a function that doesn't have a return keyword?

    - :None: A function without a return still returns the keyword None
      :.*: What is the last thing that is printed when you run the code above after deleting the return from the test function?


Parts of a Function and Function Calls
=========================================

.. clickablearea:: funct_ca_click_headers
    :practice: T
    :question: Click on all of the function headers in the code below.
    :iscode:
    :feedback: The first line in the function definition is the header.

    # function definition
    :click-correct:def print_message()::endclick:
        :click-incorrect:print("Welcome to Python."):endclick:
        :click-incorrect:print("Learn the power of functions!"):endclick:

    # function definition
    :click-correct:def main()::endclick:
        :click-incorrect:print("Hello Programmer!"):endclick:

        # function call
        :click-incorrect:print_message():endclick:

    # function call
    :click-incorrect:main():endclick:

.. clickablearea:: funct_ca_click_names
    :practice: T
    :question: Click on all of the function names in the code below.
    :iscode:
    :feedback: The name of the function is after the def keyword and before the ().

    # function definition
    :click-incorrect:def :endclick::click-correct:print_message:endclick::click-incorrect:()::endclick:
        :click-incorrect:print("Welcome to Python."):endclick:
        :click-incorrect:print("Learn the power of functions!"):endclick:

    # function definition
    :click-incorrect:def :endclick::click-correct:main:endclick:()::endclick:
        :click-incorrect:print("Hello Programmer!"):endclick:

        # function call
        :click-incorrect:print_message():endclick:

    # function call
    :click-incorrect:main():endclick:

.. dragndrop:: function_def_dnd_v3
    :practice: T
    :feedback: Read the chapter on functions and try again.
    :match_1: function definition|||All of the code that tells the program what to do when the function is executed.  It includes the header and body.
    :match_2: function header|||The first line of a function definition
    :match_3: function body|||All of the lines in the function after the function header
    :match_4: function call|||The name of the function followed by an argument list in ().
    :match_5: function name|||Follows the def keyword and is before the list of arguments in ().

    Drag each term to its definition

Writing Function Calls
=========================================

.. activecode:: funct_ac_pogil_add_line
    :caption: Modify the code below to print the last two lines twice

    Modify the code below to print the last two lines twice by only adding one line.  That line can't call the print function.
    ~~~~
    # function definition
    def print_message():
        print("Welcome to Python.")
        print("Learn the power of functions!")

    # function definition
    def main():
        print("Hello Programmer!")

        # function call
        print_message()

    # function call
    main()


.. activecode:: funct_ac_pogil_add_function_call
    :caption: Modify the code to print "Hello Students".

    Modify the code below to print "Hello Students" by adding one line and without calling the print function in that line.
    ~~~~
    # function definition
    def print_message():
        print("Hello Students")

    # function definition
    def main():

        # function call
        print_message()

Function Order
====================


.. shortanswer:: func_sa_call_before_define

   Look at the Python code below.  What do you think will happen when you run the following code?

.. activecode:: func_ac_pogil_print_message_main_first
    :caption: example functions with function call first

    Run the code below to see what happens when you try to call a function before it is defined.
    ~~~~
    # function call
    main()

    # function definition
    def print_message():
        print("Welcome to Python.")
        print("Learn the power of functions!")

    # function definition
    def main():
        print("Hello Programmer!")

        # function call
        print_message()


.. index::
    single: function
    pair: function; definition
    pair: function; header

.. note::

   Python processes the code in a file from left to right and from the
   first line to the last line.
   All functions must be defined before they are called.

.. parsonsprob:: func_pp_print_name_v2
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


Special Characters and Keywords
=================================

.. fillintheblank:: funct_fitb_body_char
    :practice: T

    What character indicates that what follows next is the body of the function?

    - :\:: A : is used to indicate the start of the body of a function.
      :.*: It is the last character on the function header.

.. fillintheblank:: funct_fitb_comment_char
    :practice: T

    What character starts a comment?

    - :#: A # is used to start a comment.
      :.*: Comments explain the code, try again

.. fillintheblank:: funct_fitb_def_fitb
    :practice: T

    What Python keyword is used to start a function definition?

    - :def: Use def to start a function definition.
      :Def: Remember that case matters in Python.  All keywords start with a lower case letter.
      :.*: Try again!

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: func_basics_groupsub
   :limit: 4
