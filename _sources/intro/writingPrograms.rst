Writing a program
-----------------
.. index::
    single: Script

Typing commands into the Python interpreter is a great way to experiment
with Python's features, but it is not recommended for solving more
complex problems.

When we want to write a program, we use a text editor to write the
Python instructions into a file, which is called a
*script*. By convention, Python scripts have names that
end with ``.py``.

.. fillintheblank:: intro-write-fitb-file
  :practice: T

  A(n) ______ is a file that holds Python instructions.

  - :[Ss]cript: A script is a file that holds Python instructions.
    :[Ff]ile: What is this type of file called?
    :.*: Try again.

To execute the script, you have to tell the Python interpreter the name
of the file. In a command window, you would type
``python hello.py`` as follows:

.. code-block:: bash

   $ cat hello.py
   print('Hello world!')
   $ python hello.py
   Hello world!


The "$" is the operating system prompt, and the "cat hello.py" is
showing us that the file "hello.py" has a one-line Python program to
print a string.

We call the Python interpreter and tell it to read its source code from
the file "hello.py" instead of prompting us for lines of Python code
interactively.

You will notice that there was no need to have *quit()*
at the end of the Python program in the file. When Python is reading
your source code from a file, it knows to stop when it reaches the end
of the file.

.. fillintheblank:: intro-write-fitb-end
  :practice: T

  Files containing Python instructions end with what two letters?

  - :\.?[Pp][Yy]: .py at the end of a file implies that it is a script containing Python instructions.
    :.*: Try again.

.. mchoice:: intro-write-mc-end
  :practice: T
  :answer_a: The file contains a "quit()" statement.
  :answer_b: The program automatically stops at the end of the file.
  :answer_c: The user types $ to start a new program.
  :answer_d: The user quits the program manually.
  :correct: b
  :feedback_a: Try again. You do not need to inlcude a "quit()" statement.
  :feedback_b: Correct! When Python is reading source code from a file, it knows to stop when it reaches the end of the file.
  :feedback_c: Try again. $ is the operating system prompt.
  :feedback_d: Try again.

  How does a Python program stop when reading from a file?
