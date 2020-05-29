Adding new functions
--------------------

So far, we have only been using the functions that come with Python, but
it is also possible to add new functions. A *function
definition* specifies the name of a new function and the
sequence of statements that execute when the function is called. Once we
define a function, we can reuse the function over and over throughout
our program.

Here is an example:

.. code-block:: python

   def print_lyrics():
       print("I'm a lumberjack, and I'm okay.")
       print('I sleep all night and I work all day.')


``def`` is a keyword that indicates that this is a function
definition. The name of the function is ``print_lyrics``. The rules for
function names are the same as for variable names: letters, numbers and
some punctuation marks are legal, but the first character can't be a
number. You can't use a keyword as the name of a function, and you
should avoid having a variable and a function with the same name.

The empty parentheses after the name indicate that this function doesn't
take any arguments. Later we will build functions that take arguments as
their inputs.


The first line of the function definition is called the
*header*\ ; the rest is called the *body*.
The header has to end with a colon and the body has to be indented. By
convention, the indentation is always four spaces. The body can contain
any number of statements.


If you type a function definition in interactive mode, the interpreter
prints ellipses (\ *...*\ ) to let you know that the definition isn't
complete:

.. code-block:: python

   >>> def print_lyrics():
   ...     print("I'm a lumberjack, and I'm okay.")
   ...     print('I sleep all night and I work all day.')
   ...


To end the function, you have to enter an empty line (this is not
necessary in a script).

Defining a function creates a variable with the same name.

.. activecode:: 04section6_1
   :coach:
   :caption: This example demonstrates that the value of print_lyrics is a function object, which has type "function".

   def print_lyrics():
       print("I'm a lumberjack, and I'm okay.")
       print('I sleep all night and I work all day.')

   print(print_lyrics)
   print(type(print_lyrics))


The value of ``print_lyrics`` is a *function object*\ , which
has type "function".

The syntax for calling the new function is the same as for built-in
functions:

.. activecode:: 04section6_2
   :coach:
   :caption: An example of calling a function that is not built-in.

   def print_lyrics():
      print("I'm a lumberjack, and I'm okay.")
      print('I sleep all night and I work all day.')

   print_lyrics()



Once you have defined a function, you can use it inside another
function. For example, to repeat the previous refrain, we could write a
function called ``repeat_lyrics``\ :

.. activecode:: 04section6_3
   :coach:
   :caption: An example of using a user-defined function inside of another user-defined function.

   def print_lyrics():
      print("I'm a lumberjack, and I'm okay.")
      print('I sleep all night and I work all day.')

   def repeat_lyrics():
       print_lyrics()
       print_lyrics()

   repeat_lyrics()



And then call ``repeat_lyrics``\ :

.. code-block:: python

   >>> repeat_lyrics()
   I'm a lumberjack, and I'm okay.
   I sleep all night and I work all day.
   I'm a lumberjack, and I'm okay.
   I sleep all night and I work all day.


But that's not really how the song goes.

.. mchoice:: 04question6_1
   :answer_a: It lets you know whether a function is self-defined or included in a Python module.
   :answer_b: It means that the function does not return anything.
   :answer_c: It lets you know that nothing will print.
   :answer_d: It indicates that a function doesn't take any arguments.
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct!

   What does it means when there are empty parentheses after a function name?

.. mchoice:: 04question6_2
   :answer_a: body; header
   :answer_b: title; body
   :answer_c: header; body
   :answer_d: initialization; body
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct!
   :feedback_d: Try again!

   What is the first line of a function definition called? What is every line after the first line called?

.. mchoice:: 04question6_3
   :answer_a: The value of printWeather is a function object, which has type "function".
   :answer_b: The value of printWeather is a definition object, which has type "def".
   :answer_c: The value of printWeather is a def object, which has type "def".
   :answer_d: The value of printWeather is a function object, which has type "funct".
   :correct: a
   :feedback_a: Correct!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Try again!

   Consider the code below. Which statement is true?

   .. code-block:: python

    def printWeather():
      print("It is sunny!")

.. parsonsprob:: question6_1

   Construct a block of code that correctly creates a function called "printMenu", then call the function.
   -----
   def printMenu():
   =====
   def printMenu() #distractor
   =====
   definition printMenu(): #distractor
   =====
    print("Pizza, $5")
    print("Hamburger, $6")
    print("Soda, $1")
   =====
    print(Pizza, $5) #distractor
    print(Hamburger, $6)
    print(Soda, $1)
   =====
   printMenu()
   =====
   printMenu(): #distractor

.. parsonsprob:: question6_2

   Construct a block of code that correctly creates a function called "printPrice", then call the function within another function, called "printReceipt". Then call "printReceipt" outside of the functions. "printPrice" should print out three prices. "printReceipt" should call "printPrice".
   -----
   def printPrice():
   =====
   def printPrice() #distractor
   =====
   definition printPrice(): #distractor
   =====
    print("Pencils, $1")
    print("Pens, $2")
    print("Notebook, $1")
   =====
    print(Pencils, $1) #distractor
    print(Pens, $2)
    print(Notebook, $1)
   =====
   def printReceipt():
   =====
   def printReceipt() #distractor
   =====
   definition printReceipt(): #distractor
   =====
    print("Here is your receipt: ")
    printPrice()
    print("Thanks for shopping!")
   =====
    print(Here is your receipt: ) #distractor
    printPrice():
    print(Thanks for shopping!)
   =====
   printReceipt()
   =====
   printReceipt(): #distractor
