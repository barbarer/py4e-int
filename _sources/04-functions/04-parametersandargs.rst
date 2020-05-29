Parameters and arguments
------------------------

Some of the built-in functions we have seen require arguments. For
example, when you call ``math.sin`` you pass a number as an
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

This function works with any value that can be printed.

.. codelens:: codelens491
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
an argument for ``print_twice``\ :

.. codelens:: codelens492
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

.. codelens:: codelens493
    :showoutput:

  def print_twice(bruce):
    print(bruce)
    print(bruce)

  michael = 'Eric, the half a bee.'
  print_twice(michael)

The name of the variable we pass as an argument (\ ``michael``\ )
has nothing to do with the name of the parameter (\ ``bruce``\ ).
It doesn't matter what the value was called back home (in the caller);
here in ``print_twice``\ , we call everybody ``bruce``.

.. fillintheblank:: 04fill9_1

    Inside the function, the arguments are assigned to variables called ___________.

    - :(?:p|P)(?:a|A)(?:r|R)(?:a|A)(?:m|M)(?:e|E)(?:t|T)(?:E|e)(?:r|R)(?:s|S): Correct!
      :.*: Try again!

.. mchoice:: 04question9_1
   :answer_a: 67 (on the same line)
   :answer_b: 6 7 (on two separate lines)
   :answer_c: 6 9 (on two separate lines)
   :answer_d: 69 (on the same line)
   :correct: b
   :feedback_a: In Python, you do not need to specify a new line like in some other languages. The print statements themselves just need to be on two separate lines.
   :feedback_b: Correct!
   :feedback_c: The value of "hi" does not change outside of the function unless specified.
   :feedback_d: In Python, you do not need to specify a new line like in some other languages. The print statements themselves just need to be on two separate lines.

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

.. parsonsprob:: question9_1

   Construct a block of code with four function, defined in this order: printName, printGrade, printAttendance, printStudentInfo.
   -----
   def printName(name):
   =====
    print("Name: " + name)
   =====
   def printGrade(gpa):
   =====
    print("GPA: " + gpa)
   =====
   def printAttendance(daysAbsent):
   =====
    print("Days absent: " + daysAbsent)
   =====
   def printStudentInfo(stuName, stuGpa, stuDaysAbsent):
   =====
    printName(stuName)
    printGrade(stuGpa)
    printAttendance(stuDaysAbsent)
   =====
   printStudentInfo("John", 3.6, 2)
   printStudentInfo("Ben", 3.2, 4)
