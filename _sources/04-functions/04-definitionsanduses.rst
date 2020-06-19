Definitions and uses
--------------------

Pulling together the code fragments from the previous section, the whole
program looks like this:

.. activecode:: 04section7_1
   :coach:
   :caption: An example of a user-defined function being called within another user-defined function.

   def print_lyrics():
      print("I'm a lumberjack, and I'm okay.")
      print('I sleep all night and I work all day.')

   def repeat_lyrics():
       print_lyrics()
       print_lyrics()

   repeat_lyrics()


This program contains two function definitions: ``print_lyrics`` and
``repeat_lyrics``. Function definitions get executed just like other
statements, but the effect is to create function objects. The statements
inside the function do not get executed until the function is called,
and the function definition generates no output.

As you might expect, you have to create a function before you can
execute it. In other words, the function definition has to be executed
before the first time it is called.

.. codelens:: codelens461
    :showoutput:

   def print_lyrics():
      print("I'm a lumberjack, and I'm okay.")
      print('I sleep all night and I work all day.')

   def repeat_lyrics():
       print_lyrics()
       print_lyrics()

   repeat_lyrics()


**Move the last line of this program to the top, so the
function call appears before the definitions. Run the program and see
what error message you get.**

.. activecode:: 04section7_2
   :coach:
   :caption: Move the last line of this program to the top, so the function call appears before the definitions. Run the program and see what error message you get.

   def print_lyrics():
      print("I'm a lumberjack, and I'm okay.")
      print('I sleep all night and I work all day.')

   def repeat_lyrics():
       print_lyrics()
       print_lyrics()

   repeat_lyrics()

.. mchoice:: 04question7_1
   :answer_a: SyntaxError
   :answer_b: IndexError
   :answer_c: NameError
   :answer_d: TypeError
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct!
   :feedback_d: Try again!

   What kind of error do you get when you call a function before it is defined?


**Move the function call back to the bottom and move the
definition of ``print_lyrics`` after the definition of ``repeat_lyrics``.
What happens when you run this program?**

.. activecode:: 04section7_3
   :coach:
   :caption: Move the function call back to the bottom and move the definition of print_lyrics after the definition of ``repeat_lyrics``. What happens when you run this program?

   def print_lyrics():
      print("I'm a lumberjack, and I'm okay.")
      print('I sleep all night and I work all day.')

   def repeat_lyrics():
       print_lyrics()
       print_lyrics()

   repeat_lyrics()

.. mchoice:: 04question7_2
   :answer_a: The lyrics print like normal.
   :answer_b: We get a TypeError.
   :answer_c: We get a NameError.
   :answer_d: The program compiles but nothing prints.
   :correct: a
   :feedback_a: Correct!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Try again!

   Consider the code block below. What happens when you run this program?

   .. code-block:: python

    def repeat_lyrics():
      print_lyrics()
      print_lyrics()

    def print_lyrics():
      print("I'm a lumberjack, and I'm okay.")
      print('I sleep all night and I work all day.')

    repeat_lyrics()

.. parsonsprob:: question7_1

   Construct a block of code with two functions. The first function is called "printFlavors". The second function should call the first function. Finally. call the second function.
   -----
   def printFlavors():
   =====
    print("Vanilla")
    print("Chocolate")
    print("Strawberry")
   =====
   def printProducts():
   =====
    print("Ice cream")
    print("Milkshake")
    print("Frozen yogurt")
    print("************")
    print("Flavors:")
    printFlavors()
   =====
    print("Ice cream")  #distractor
    print("Milkshake")
    print("Frozen yogurt")
    print("************")
    print("Flavors:")
    print(printFlavors())
   =====
   printProducts()
