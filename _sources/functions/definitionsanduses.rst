Definitions and uses
--------------------
.. index::
    pair: Function; Definition
    single: Use Before Def


Pulling together the code fragments from the previous section, the whole
program looks like this:

.. activecode:: functDef_lyrics
    :coach:
    :caption: Calling a user-defined function being within another user-defined function.

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

If we move the function call above the definition we will get an error.

.. activecode:: functDef_callFirst
   :coach:
   :caption: Calling a function before it is defined.

   repeat_lyrics()

   def print_lyrics():
       print("I'm a lumberjack, and I'm okay.")
       print('I sleep all night and I work all day.')

   def repeat_lyrics():
       print_lyrics()
       print_lyrics()

.. mchoice:: functDef_MC_error
    :practice: T
    :answer_a: SyntaxError
    :answer_b: IndexError
    :answer_c: NameError
    :answer_d: TypeError
    :correct: c
    :feedback_a: Incorrect! A SyntaxError occurs when there is a mistake in your code's syntax. Try again.
    :feedback_b: Incorrect! An IndexError occurs when you try to access an element of a container that doesn't exist. Try again.
    :feedback_c: Correct! This will cause a NameError because the function hasn't been defined yet.
    :feedback_d: Incorrect! A TypeError occurs when a variable of an incorrect type is used in a function argument or operation. Try again.

    What kind of error do you get when you call a function before it is defined?

See what happens if we move the function definitions around so that ``repeat_lyrics`` is defined before
``print_lyrics``.

.. codelens:: functDef_codelens
    :showoutput:

    def repeat_lyrics():
        print_lyrics()
        print_lyrics()

    def print_lyrics():
        print("I'm a lumberjack, and I'm okay.")
        print('I sleep all night and I work all day.')

    repeat_lyrics()

.. mchoice:: functDef_MC_order
    :practice: T
    :answer_a: The lyrics print like normal.
    :answer_b: We get a TypeError.
    :answer_c: We get a NameError.
    :answer_d: The program compiles but nothing prints.
    :correct: a
    :feedback_a: Correct! This doesn't cause an error because both functions are defined before repeat_lyrics is called.
    :feedback_b: Incorrect! This will not cause a TypeError because no invalid data types are used. Try again.
    :feedback_c: Incorrect! This will not cause a NameError because both functions are defined before repeat_lyrics is called. Try again.
    :feedback_d: Incorrect! Something will be printed. Try again.

    Consider the code block below. What happens when you run this program?

    .. code-block:: python

        def repeat_lyrics():
            print_lyrics()
            print_lyrics()

        def print_lyrics():
            print("I'm a lumberjack, and I'm okay.")
            print('I sleep all night and I work all day.')

        repeat_lyrics()

.. parsonsprob:: functDef_PP_flavors
    :adaptive:
    :numbered: left
    :practice: T

    Construct a block of code with two functions. The first function is called printFlavors,
    which lists the available flavors. The second function should print the products and call the
    first function. Finally, call the second function. Watch your indentation! Hint: there is one
    unused code block.
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
