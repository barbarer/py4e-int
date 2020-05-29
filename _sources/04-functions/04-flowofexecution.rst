Flow of execution
-----------------

In order to ensure that a function is defined before its first use, you
have to know the order in which statements are executed, which is called
the *flow of execution*.

Execution always begins at the first statement of the program.
Statements are executed one at a time, in order from top to bottom.

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

.. codelens:: codelens481
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

.. fillintheblank:: 04fill8_1

    The order in which statements are executed is called the __________________.

    - :(?:f|F)(?:l|L)(?:o|O)(?:w|W)\s(?:o|O)(?:F|f)\s(?:e|E)(?:x|X)(?:e|E)(?:c|C)(?:u|U)(?:t|T)(?:i|I)(?:o|O)(?:n|N): Correct!
      :.*: Try again!

.. mchoice:: 04question8_1
   :answer_a: The line where the first function is called.
   :answer_b: The first statement of the program.
   :answer_c: The first function declaration.
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct!
   :feedback_c: Try again!

   Where does the execution of a program always begin?

.. mchoice:: 04question8_2
   :answer_a: ...don't always want to read from top to bottom
   :answer_b: ...should follow the flow of execution.
   :answer_c: Both a and b
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct!

   When you read a program, you...
