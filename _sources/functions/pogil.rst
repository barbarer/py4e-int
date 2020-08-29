POGIL Activity - Functions, Conditionals, and Strings
--------------------------------------------------------

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Recognize a function definition, function header, function body, function name, and function call in a program
* Use if/else statements in a function
* Explain programs that use the same function multiple times

*Process Objectives:*

* Use good test data for programs that include functions
* Write code that includes function definitions and function calls


Functions
===========

.. fillintheblank:: funct_fitb_print_message_first_line

    What is the first line that will be printed when the code below runs?

    - :Hello Programmer!: This will print before the function call to print_message
      :.*: Execution starts in the main method


.. activecode:: func_ac_pogil_print_message
    :caption: An example with several functions

    Run this code to see what it prints.
    ~~~~
    # function definition
    def print_message():
        print("Welcome to Python.")
        print("Learn the power of functions!")
        a = 5 % 2
        print("a: ",a)

    # function definition
    def main():
        print("Hello Programmer!")

        # function call
        print_message()

    # function call
    main()

.. dragndrop:: function_def_dnd
    :practice: T
    :feedback: Read the chapter on functions and try again.
    :match_1: function|||A segment of code that performs a single task
    :match_2: function definition|||All of the code that tells the program what to do when the function is executed.  It includes the header and body.
    :match_3: function header|||The first line of a function definition
    :match_4: function body|||All of the lines in the function after the function header
    :match_5: function call|||The name of the function followed by an argument list in ().
    :match_6: function name|||Follows the def keyword and is before the argument list.

    Drag each term to its definition


.. shortanswer:: func_sa_call_before_define

   Look at the Python code below.  What do you think will happen when you run the following code?

.. activecode:: func_ac_pogil_print_message_main_first
    :caption: example functions with function call first

    Run this code to see what happens when you try to call a function before it is defined.
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

.. parsonsprob:: func_pp_print_name
   :numbered: left
   :adaptive:
   :practice: T

   Drag the blocks from the left and put them in the correct order on the right to define a function <code>print_greeting</code> that asks for your name and prints "Hello Name". Then define a <code>main</code> function that calls <code>print_greeting</code>.  Be sure to also call the <code>main</code> function. Note that you will have to indent the lines that are in the body of each function.  Click the <i>Check Me</i> button to check your solution.</p>
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

.. note::

   Python requires that all statements that are part of the body of a function must be indented.

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


.. clickablearea:: funct_ca_click_body
    :practice: T
    :question: Click on all of the lines of code in the bodies of the functions below.
    :iscode:
    :feedback: The body is all of the lines after the header.

    # function definition
    :click-incorrect:def print_message()::endclick:
        :click-correct:print("Welcome to Python."):endclick:
        :click-correct:print("Learn the power of functions!"):endclick:

    # function definition
    :click-incorrect:def main()::endclick:
        :click-correct:print("Hello Programmer!"):endclick:

        # function call
        :click-correct:print_message():endclick:

    # function call
    :click-incorrect:main():endclick:


.. clickablearea:: funct_ca_click_def
    :practice: T
    :question: Click on all of the lines that define the function print_message
    :iscode:
    :feedback: The header and body make up the function definition.

    # function definition
    :click-correct:def print_message()::endclick:
        :click-correct:print("Welcome to Python."):endclick:
        :click-correct:print("Learn the power of functions!"):endclick:

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


Modify the code below to print the last two lines twice by only adding one line.
That line can't contain the keyword print in it.

.. activecode:: func_ac_pogil_add_line
    :caption: Modify code to print last two lines twice.

    Modify this code to print the last two lines twice.
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

Conditionals and Testing
============================

.. fillintheblank:: funct_fitb_return_temp_first_line

    What is the first line that will be printed when the code below runs?

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
    :practice: T

    What keyword specifies the block of statements to execute if a Boolean condition is false?

    - :else: The keyword else is used to execute a blocks of statements if a Boolean condition is false
      :Else: Most keywords in Python start with a lowercase letter
      :.*: Try again!

.. fillintheblank:: funct_fitb_pogil_if
    :practice: T

    What keyword starts a conditional statement and is the only required keyword in it?

    - :if: The keyword if is used to start a conditional statement and is the only required keyword.
      :If: Most keywords in Python start with a lowercase letter
      :.*: Try again!

.. fillintheblank:: funct_fitb_pogil_elif
    :practice: T

    What keyword is used in a conditional statement when you want three of more possible outcomes?

    - :elif: The keyword elif is used to provide more than two possible outcomes to a conditional statement.
      :Elif: Most keywords in Python start with a lowercase letter
      :.*: Try again!


.. activecode:: func_ac_pogil_return_temp_desc_v2
    :caption: Add tests

    Modify the code in the main method below to test all possible return values.
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



Logical Operators
=====================

The logical operators in Python are and, or, and not. These can be used to create complex conditionals.

.. mchoice:: funt_mc_and
   :practice: T

   Which of the following tests if x is both greater than 10 and less than or equal to 20?

   -   x > 10 and < 20

       -   What are you checking is less than 20?

   -   x > 10 && x <= 20

       -   Python uses the keyword and, not &&

   -   x > 10 and x <= 20

       +   This will be true when x is greater than 10 and less than or equal 20

   -   x > 10 and x < 20

       -   This will be true when x is greater than 10 and less than 20


.. mchoice:: funt_mc_or
   :practice: T

   Which of the following returns true if have_ride is true or can_walk is true?

   -   have_ride and can_walk

       -   Both must be true for this to be true

   -   have_ride or can_walk

       +   This will return true when one of these is true

   -   have_ride || can_walk

       - Python uses the keyword or, not ||

   -   have_ride OR can_walk

       - Python keywords are all lowercase

.. activecode:: func_ac_or_complex_cond
    :caption: complex conditional

    Modify this code to use a complex conditional instead.  It should still pass all tests. It should only take four lines of code.
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

    Modify this code to use a complex conditional instead.  It should still pass all tests. It should only take four lines of code.
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

Strings and Slices
====================

.. fillintheblank:: funct_fitb_pogil_initials

    What will be printed when the code below runs?

    - :Ss: It prints the first letter of the first name and last letter of the last name.
      :.*: String indices start with 0 and -1 is the index of the last letter in a string.

.. activecode:: func_ac_pogil_initials
    :caption: get_initials

    Run this code to see what it prints.
    ~~~~
    # function definition
    def get_initials(first, last):
        return first[0] + last[-1]

    # function definition
    def main():
        print(get_initials("Simona","Jacobs"))

    # function call
    main()


.. note::

   Use [index] to get a character from a string.  The first character in a string is at index 0 and the last is at the length of the string minus 1 (also know as index -1 in Python).

.. fillintheblank:: funct_fitb_pogil_short_name

    What is the last thing that will be printed when the code below runs?

    - :Sibs: The last thing it prints are the first two letters of the first name and the last two letters of the last name.
      :.*: A slice starts with the first number and ends before the second.  If the second is left off it goes to the end of the string. The last character in a string is at index -1.

.. activecode:: func_ac_pogil_short_name
    :caption: get_short_name

    Run this code to see what it prints.
    ~~~~
    # function definition
    def get_short_name(first, last):
        print(len(first))
        print(len(last))
        return first[:2] + last[-2:]

    # function definition
    def main():
        print(get_short_name("Simona","Jacobs"))

    # function call
    main()


.. note::

   Use a slice [start:end] to get a slice (substring) from a string. It will return a new string starting at the start index and including all the characters up to the end index - 1.


.. fillintheblank:: funct_fitb_start_slice_def
    :practice: T

    What index will the slice (substring) start with if the start index isn't specified?

    - :0: A slice starts at index 0 if the start isn't specified.
      :.*: Look at the code above and try again.

.. mchoice:: funt_mc_end_slice
   :practice: T

   What index is the default end index if it isn't specified in a slice?

   -   0

       -   This is the default start index

   -   -1 (the index of the last character)

       -   Since a slice does not include the index at the end this would stop at the second to last character in the string

   -  the length of the string

      +   The slice returns a string with all the characters from the start to the end minus one.  That is the same as the length of the string minus one.


.. fillintheblank:: funct_fitb_len_string
    :practice: T

    What built-in function tells you the number of characters in a string?

    - :len: The len function takes a string and returns the number of characters in it.
      :.*: Read about built-in functions.
