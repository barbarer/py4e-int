Parameters and arguments
------------------------
.. index::
    pair: Parameter; Function
    single: Parameter
    pair: Function; Argument
    pair: Parentheses; Parameters In
    single: Composition
    single: Argument


Some of the built-in functions we have seen require arguments. For
example, when you call ``math.sin``, you pass a number as an
argument. Some functions take more than one argument:
``math.pow`` takes two, the base and the exponent.

Inside the function, the arguments are assigned to variables called
*parameters*. Here is an example of a user-defined
function that takes an argument:

.. code-block:: python

    def print_twice(bruce):
        print(bruce)
        print(bruce)


This function assigns the argument to a parameter named
``bruce``. When the function is called, it prints the value of
the parameter (whatever it is) twice.

.. fillintheblank:: functParam_fill1
    :practice: T

    Inside the function, the arguments are assigned to variables called ___________.

    - :[Pp]arameters*: Inside the function, the arguments are assigned to variables called parameters.
      :.*: Incorrect! Reread the beginning of this section and try again.

This function works with any value that can be printed.

.. codelens:: functParam_codelens1
    :showoutput:

    import math

    def print_twice(bruce):
        print(bruce)
        print(bruce)

    print_twice('Spam')
    print_twice(17)
    print_twice(math.pi)


The same rules of composition that apply to built-in functions also
apply to user-defined functions, so we can use any kind of expression as
an argument for ``print_twice``:

.. codelens:: functParam_codelens2
    :showoutput:

    import math

    def print_twice(bruce):
        print(bruce)
        print(bruce)

    print_twice('Spam '*4)
    print_twice(math.cos(math.pi))


The argument is evaluated before the function is called, so in the
examples the expressions ``'Spam '*4`` and ``math.cos(math.pi)``
are only evaluated once.

You can also use a variable as an argument:

.. codelens:: functParam_codelens3

    def print_twice(bruce):
        print(bruce)
        print(bruce)

    michael = 'Python is cool.'
    print_twice(michael)

The name of the variable we pass as an argument (``michael``)
has nothing to do with the name of the parameter (``bruce``).
It doesn't matter what the value was called back home (in the caller);
here in ``print_twice``, we call everybody ``bruce``.

.. mchoice:: functParam_MC_add
    :practice: T
    :answer_a: 67 (on the same line)
    :answer_b: 67 (on two separate lines)
    :answer_c: 69 (on two separate lines)
    :answer_d: 69 (on the same line)
    :correct: b
    :feedback_a: Incorrect! In Python, each print statement automatically adds a new line after printing whatever is inside the print statement. Try again.
    :feedback_b: Correct! Even though the variable "hi" was changed in the functions, its value outside the functions remains the same, and print statements automatically add a new line.
    :feedback_c: Incorrect! Even though the variable "hi" was changed in the functions, its value outside the functions remains the same unless specified. Try again.
    :feedback_d: Incorrect! In Python, each print statement automatically adds a new line after printing whatever is inside the print statement. Try again.

    Consider the code block below. What prints?

    .. code-block:: python

        def add_two(num):
            num = num + 2
            print(num)

        def add_three(nums):
            nums = nums + 3
            print(nums)

        hi = 4
        add_two(hi)
        add_three(hi)

.. parsonsprob:: functParam_PP_four
    :adaptive:
    :numbered: left
    :practice: T

    Construct a block of code with four functions, defined in this order: printName, printGPA,
    printAttendance, printStudentInfo. printStudentInfo should call the other three functions
    which will print all of the student's information. Be mindful of indentation!
    -----
    def printName(name):
    =====
        print("Name: " + name)
    =====
    def printGPA(gpa):
    =====
        print("GPA: " + gpa)
    =====
    def printAttendance(daysAbsent):
    =====
        print("Days absent: " + daysAbsent)
    =====
    def printStudentInfo(stuName, stuGPA, stuDaysAbsent):
    =====
        printName(stuName)
        printGPA(stuGPA)
        printAttendance(stuDaysAbsent)
    =====
    printStudentInfo("John", 3.6, 2)
    printStudentInfo("Ben", 3.2, 4)
