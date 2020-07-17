Flow of execution
-----------------
.. index::
    single: Flow of Execution
    single: Definition


In order to ensure that a function is defined before its first use, you
have to know the order in which statements are executed, which is called
the *flow of execution*.

Execution always begins at the first statement of the program.
Statements are executed one at a time, in order from top to bottom.

.. fillintheblank:: functFlow_Fill1
    :practice: T

    The order in which statements are executed is called the __________________.

    - :[Ff]low [Oo]f [Ee]xecution: The flow of execution is the order in which statements are executed.
      :.*: Try again!

Function *definitions* do not alter the flow of execution of the
program, but remember that statements inside the function are not
executed until the function is called.

A function call is like a detour in the flow of execution. Instead of
going to the next statement, the flow jumps to the body of the function,
executes all the statements there, and then comes back to pick up where
it left off.

That sounds simple enough, until you remember that one function can call
another. While in the middle of one function, the program might have to
execute the statements in another function. But while executing that new
function, the program might have to execute yet another function!

Observe below, where one function calls another function, which calls another.

.. codelens:: functFlow_codelens
    :showoutput:

    def firstPrint():
        print("First")
        secondPrint()

    def secondPrint():
        print("Second")
        thirdPrint()

    def thirdPrint():
        print("Third")

    firstPrint()

Fortunately, Python is good at keeping track of where it is, so each
time a function completes, the program picks up where it left off in the
function that called it. When it gets to the end of the program, it
terminates.

What's the moral of this sordid tale? When you read a program, you don't
always want to read from top to bottom. Sometimes it makes more sense if
you follow the flow of execution.

.. mchoice:: functFlow_MC_begin
    :practice: T
    :answer_a: The line where the first function is called.
    :answer_b: The first statement of the program.
    :answer_c: The first function declaration.
    :correct: b
    :feedback_a: A function needs to be defined before it is called.
    :feedback_b: The execution of a program begins at the first statement of the program.
    :feedback_c: The program begins executing at the top of the program.

    Where does the execution of a program always begin?

.. mchoice:: functFlow_MC_read
    :answer_a: ...don't always want to read from top to bottom
    :answer_b: ...should follow the flow of execution.
    :answer_c: Both a and b
    :correct: c
    :feedback_a: This is important.
    :feedback_b: This is important.
    :feedback_c: It is important to start reading from the beginning, but to follow the flow of execution as it continues.

    When you read a program, you...
