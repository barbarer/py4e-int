Adding new functions
--------------------
.. index::
    single: Function
    pair: Function; Definition
    pair: Def; Keyword
    single: Argument
    pair: Parentheses; Empty
    single: Header
    single: Body
    single: Indentation
    single: Colon
    single: Ellipses
    pair: Function; Object


So far, we have only been using the functions that come with Python, but
it is also possible to add new functions. A *function definition* specifies
the name of a new function and the sequence of statements that execute when
the function is called. Once we define a function, we can reuse the function
over and over throughout our program.

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

.. mchoice:: functAdd_MC_empty
    :practice: T
    :answer_a: It lets you know whether a function is self-defined or included in a Python module.
    :answer_b: It means that the function does not return anything.
    :answer_c: It lets you know that nothing will print.
    :answer_d: It indicates that a function doesn't take any arguments.
    :correct: d
    :feedback_a: Incorrect! You can find all built-in functions with a quick search. Try again.
    :feedback_b: Incorrect! Return statements indicate what a function returns. Try again.
    :feedback_c: Incorrect! A print statement indicates if a function prints something. Try again.
    :feedback_d: Correct! Empty parentheses indicate that the function doesn't take any arguments.

    What does it means when there are empty parentheses after a function name?

The first line of the function definition is called the *header*; the rest
is called the *body*. The header has to end with a colon and the body has
to be indented. By convention, the indentation is always four spaces. The
body can contain any number of statements.

.. mchoice:: functAdd_MC_firstLine
    :practice: T
    :answer_a: body; header
    :answer_b: title; body
    :answer_c: header; body
    :answer_d: initialization; body
    :correct: c
    :feedback_a: Incorrect! The order is off. Where does a header typically go? Try again.
    :feedback_b: Incorrect! Body is correct, but title is not. Try again.
    :feedback_c: Correct! The header is the first line of a function definition and the rest is the body.
    :feedback_d: Incorrect! We initialize variables, but functions are defined. Try again.

    What is the first line of a function definition called? What is every line after the first line called?

If you type a function definition in interactive mode, the interpreter
prints ellipses (...) to let you know that the definition isn't
complete:

.. code-block:: python

   >>> def print_lyrics():
   ...     print("I'm a lumberjack, and I'm okay.")
   ...     print('I sleep all night and I work all day.')
   ...


To end the function, you have to enter an empty line (this is not
necessary in a script).

Defining a function creates a variable with the same name.

.. activecode:: functAdd_lyrics
    :coach:
    :caption: Function definitions creats function objects, which have type "function".

    def print_lyrics():
        print("I'm a lumberjack, and I'm okay.")
        print('I sleep all night and I work all day.')

    print(print_lyrics)
    print(type(print_lyrics))


The value of ``print_lyrics`` is a *function object*, which
has type "function".

.. mchoice:: functAdd_MC_weather
    :practice: T
    :answer_a: The value of printWeather is a function object, which has type "function".
    :answer_b: The value of printWeather is a definition object, which has type "def".
    :answer_c: The value of printWeather is a def object, which has type "def".
    :answer_d: The value of printWeather is a function object, which has type "funct".
    :correct: a
    :feedback_a: Correct! The value of printWeather is a function object, meaning it has the type "function".
    :feedback_b: Incorrect! The codeblock shows a function definition, but that is not the object/type of printWeather. Try again.
    :feedback_c: Incorrect! Function definitions use the ``def`` keyword, but that is not the object/type of printWeather. Try again.
    :feedback_d: Incorrect! The value of printWeather is a function object, but its type is not "funct". Try again.

    Consider the code below. Which statement is true?

    .. code-block:: python

        def printWeather():
            print("It is sunny!")

The syntax for calling the new function is the same as for built-in
functions:

.. activecode:: functAdd_call
    :coach:
    :caption: Calling a function that is not built-in.

    def print_lyrics():
        print("I'm a lumberjack, and I'm okay.")
        print('I sleep all night and I work all day.')

    print_lyrics()


Once you have defined a function, you can use it inside another
function. For example, to repeat the previous refrain, we could write a
function called ``repeat_lyrics`` and then call that function:

.. activecode:: functAdd_repeat
    :coach:
    :caption: Using a user-defined function inside of another user-defined function.

    def print_lyrics():
        print("I'm a lumberjack, and I'm okay.")
        print('I sleep all night and I work all day.')

    def repeat_lyrics():
        print_lyrics()
        print_lyrics()

    repeat_lyrics()

But that's not really how the song goes.

.. parsonsprob:: functAdd_PP_menu
    :adaptive:
    :numbered: left
    :practice: T

    Construct a block of code that correctly creates a function called "printMenu"
    that prints the menu and prices, then call the function. Watch your indentation!
    -----
    def printMenu():
    =====
    def printMenu() #paired
    =====
    definition printMenu(): #paired
    =====
        print("Pizza, $5")
        print("Hamburger, $6")
        print("Soda, $1")
    =====
        print(Pizza, $5) #paired
        print(Hamburger, $6)
        print(Soda, $1)
    =====
    printMenu()
    =====
    printMenu(): #paired

.. parsonsprob:: functAdd_PP_price
    :adaptive:
    :numbered: left
    :practice: T

    The following code should define the function printPrice, that prints items and their prices,
    and define a second function printReceipt, that uses  printPrice to print a receipt. Then,
    the code should call printReceipt. Watch your indentation!
    -----
    def printPrice():
    =====
    def printPrice() #paired
    =====
    definition printPrice(): #paired
    =====
        print("Pencils, $1")
        print("Pens, $2")
        print("Notebook, $1")
    =====
        print(Pencils, $1) #paired
        print(Pens, $2)
        print(Notebook, $1)
    =====
    def printReceipt():
    =====
        print("Here is your receipt: ")
        printPrice()
        print("Thanks for shopping!")
    =====
        print(Here is your receipt: ) #paired
        printPrice():
        print(Thanks for shopping!)
    =====
    printReceipt()
    =====
    printReceipt(): #paired
