Definitions and uses
--------------------

\index{function definition}

Pulling together the code fragments from the previous section, the whole
program looks like this:

\VerbatimInput{../code3/lyrics.py}

This program contains two function definitions: ``print_lyrics`` and
``repeat_lyrics``. Function definitions get executed just like other
statements, but the effect is to create function objects. The statements
inside the function do not get executed until the function is called,
and the function definition generates no output.

\index{use before def}

As you might expect, you have to create a function before you can
execute it. In other words, the function definition has to be executed
before the first time it is called.

**Exercise 2: Move the last line of this program to the top, so the
function call appears before the definitions. Run the program and see
what error message you get.**

**Exercise 3: Move the function call back to the bottom and move the
definition of ``print_lyrics`` after the definition of ``repeat_lyrics``.
What happens when you run this program?**
