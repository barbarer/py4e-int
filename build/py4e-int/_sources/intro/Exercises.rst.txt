Exercises
---------

.. mchoice:: intro-MC-secondaryMem
    :answer_a: Execute all of the computation and logic of the program
    :answer_b: Retrieve web pages over the Internet
    :answer_c: Store information for the long term, even beyond a power cycle
    :answer_d: Take input from the user
    :correct: c
    :feedback_a: This would be correct if we asked what the CPU does.
    :feedback_b: This would be correct if we asked what the client does.
    :feedback_c: The secondary memory provides long term storage, even if you turn off the computer.
    :feedback_d: The secondary memory does not ask users for input.

    What is the function of the secondary memory in a computer?

.. mchoice:: intro-MC-prog
    :answer_a: A set of instructions for your computer and CPU.
    :answer_b: The process of creating and editing code.
    :answer_c: An event that teaches you to write code.
    :answer_d: A question you ask your computer.
    :correct: a
    :feedback_a: A program holds the instructions that answer the CPU's "What next" question.
    :feedback_b: Programming is the process of creating and editing these instructions.
    :feedback_c: This can be a program, but not the kind we're talking about here.
    :feedback_d: While a program can ask your computer or the user a question, it typically answers the question of "what next" from your CPU.

    When talking about computers and code, which of the following is a program?

.. fillintheblank:: intro-fitb-compilerVsInterpreter

   A __________ is a program that can analyze and execute a program line by line.

   - :[Ii]nterpreter: An interpreter is a program that can analyze and execute a program line by line.
     :[Cc]ompiler: A compiler translates a program into machine language from a file and saves it for later execution.
     :.*: Try again!

.. mchoice:: intro-MC-machineCode
   :answer_a: The Python interpreter
   :answer_b: The keyboard
   :answer_c: A Python source file
   :answer_d: A word processing document
   :correct: a
   :feedback_a: The interpreter translates python source code from a human readable form to machine code
   :feedback_b: The keyboard provides textual input
   :feedback_c: The Python source file contains human readable programs
   :feedback_d: A word processing document contains text

   Which of the following creates or contains "machine code"?

.. mchoice:: intro-MC-whereStored
   :answer_a: Central processing unit
   :answer_b: Main Memory
   :answer_c: Secondary Memory
   :answer_d: Input Devices
   :answer_e: Output Devices
   :correct: b
   :feedback_a: The CPU processses instructions
   :feedback_b: The main memory holds the values of the variables while a program executes
   :feedback_c: Secondary memory provides long-term storage.  You must write out values to secondary memory to store them long-term.
   :feedback_d: Input devices do not store data
   :feedback_e: Ouptut devices do not store data

   Where in the computer is a variable such as "x" stored after the following Python line executes?

   .. code-block:: python

      x = 123

.. mchoice:: intro-MC-printVal
   :answer_a: 43
   :answer_b: 44
   :answer_c: x + 1
   :answer_d: Error because x = x + 1 is not possible mathematically
   :correct: b
   :feedback_a: The value of x was changed.
   :feedback_b: While x was set to 43 originally it was changed to one more than the current value.
   :feedback_c: This would be true if the code was priInput devices do not store data
   :feedback_d: This code sets the value of x to the current value of x plus 1.

   What will the following program print out:

   .. code-block:: python

      x = 43
      x = x + 1
      print(x)

.. mchoice:: intro-MC-replace
   :practice: T
   :answer_a: 1 = a process, 2 = a function
   :answer_b: 1 = translating an entire book, 2 = translating a line at a time
   :answer_c: 1 = software, 2 = hardware
   :answer_d: 1 = object code, 2 = byte code
   :correct: b
   :feedback_a: Compiling is a software process, and running the interpreter is invoking a function, but how is a process different than a function?
   :feedback_b: Compilers take the entire source code and produce object code or the executable and interpreters execute the code line by line.
   :feedback_c: Both compilers and interpreters are software.
   :feedback_d: Compilers can produce object code or byte code depending on the language.  An interpreter produces neither.

   Pick the best replacements for 1 and 2 in the following sentence: When comparing compilers and interpreters, a compiler is like 1 while an interpreter is like 2.


.. fillintheblank:: intro-fitb-explainCPU

    A brain is the human equivalent to what in your computer?

    - :(CPU)|([Cc]entral [Pp]rocessing [Uu]nit): The Central Processing Unit is very similar to a brain for your computer.
      :.*: Try again!

.. fillintheblank:: intro-fitb-keyboard

    A keyboard is an example of an Input or Output device?

    - :[Ii]nput: A keyboard connects to your computer and provides information that your computer reads <b>in</b>.
      :[Oo]utput: Try again!
      :.*: Try again!

.. fillintheblank:: intro-fitb-speaker

    A speaker is an example of an Input or Output device?

    - :[Oo]utput: A speaker connects to your computer, which provides information that the speaker sends <b>out</b>.
      :[Ii]nput: Try again!
      :.*: Try again!

.. fillintheblank:: intro-SA-syntaxError_v2

    The Python interpreter or complier will tell you if your code has a __________ Error.

    - :[Ss]yntax: If your code doesn't follow the "grammar rules" of Python, it will let you know.
      :[Ss]emantic: Try again! Semantic Errors will not trigger an error message.
      :[Ll]ogic: Try again! Logic Errors will not trigger an error message.

.. tabbed:: intro_writeEx

    .. tab:: Question

        Try running the following code.  Can you tell what is wrong with it and fix it?

        .. activecode:: intro-AC-fix
            :nocodelens:

            primt 'Hello world!'

    .. tab:: Answer

        .. activecode:: intro-AC-answer
            :nocodelens:

            # The print function is spelled incorrectly
            # and needs parentheses around its contents
            print('Hello world!')
