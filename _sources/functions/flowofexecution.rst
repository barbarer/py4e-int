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

    The order in which statements are executed is called the __________________.

    - :[Ff]low [Oo]f [Ee]xecution: Correct! The flow of execution is the order in which statements are executed.
      :.*: Incorrect! Hint: it's the name of this section. Try again.

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

So what's the moral of the story? When you read a program, you don't
always want to read strictly from top to bottom. Sometimes, it makes more sense if
you follow the flow of execution and read functions as they are called.

.. mchoice:: functFlow_MC_begin
    :answer_a: The line where the first function is called.
    :answer_b: The first statement of the program.
    :answer_c: The first function declaration.
    :correct: b
    :feedback_a: Incorrect! The flow of execution begins at the very top of the program. Try again.
    :feedback_b: The execution of a program begins at the first statement of the program.
    :feedback_c: Incorrect! The flow of execution begins at the very top of the program. Try again.

    Where does the execution of a program always begin?

.. mchoice:: functFlow_MC_read
    :answer_a: ...don't always want to read from top to bottom
    :answer_b: ...should follow the flow of execution.
    :answer_c: Both a and b
    :correct: c
    :feedback_a: Incorrect! This is important, but so is B. Try again.
    :feedback_b: Incorrect! This is important, but so is A. Try again.
    :feedback_c: Correct! It is important to start reading from the beginning, but also to follow the flow of execution as it continues.

    When you read a program, you...
