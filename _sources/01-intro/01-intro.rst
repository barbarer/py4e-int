
Terminology: Interpreter and compiler
-------------------------------------

Python is a *high-level* language intended to be
relatively straightforward for humans to read and write and for
computers to read and process. Other high-level languages include Java,
C++, PHP, Ruby, Basic, Perl, JavaScript, and many more. The actual
hardware inside the Central Processing Unit (CPU) does not understand
any of these high-level languages.

The CPU understands a language we call *machine
language*. Machine language is very simple and frankly very
tiresome to write because it is represented all in zeros and ones:

.. code-block::

   001010001110100100101010000001111
   11100110000011101010010101101101
   ...


Machine language seems quite simple on the surface, given that there are
only zeros and ones, but its syntax is even more complex and far more
intricate than Python. So very few programmers ever write machine
language. Instead we build various translators to allow programmers to
write in high-level languages like Python or JavaScript and these
translators convert the programs to machine language for actual
execution by the CPU.

Since machine language is tied to the computer hardware, machine
language is not *portable* across different types of
hardware. Programs written in high-level languages can be moved between
different computers by using a different interpreter on the new machine
or recompiling the code to create a machine language version of the
program for the new machine.

These programming language translators fall into two general categories:
(1) interpreters and (2) compilers.

An *interpreter* reads the source code of the program as
written by the programmer, parses the source code, and interprets the
instructions on the fly. Python is an interpreter and when we are
running Python interactively, we can type a line of Python (a sentence)
and Python processes it immediately and is ready for us to type another
line of Python.

Some of the lines of Python tell Python that you want it to remember
some value for later. We need to pick a name for that value to be
remembered and we can use that symbolic name to retrieve the value
later. We use the term *variable* to refer to the labels
we use to refer to this stored data.

.. code-block:: python

   >>> x = 6
   >>> print(x)
   6
   >>> y = x * 7
   >>> print(y)
   42
   >>>


In this example, we ask Python to remember the value six and use the
label *x* so we can retrieve the value later. We verify
that Python has actually remembered the value using
*print*. Then we ask Python to retrieve
*x* and multiply it by seven and put the newly computed
value in *y*. Then we ask Python to print out the value
currently in *y*.

Even though we are typing these commands into Python one line at a time,
Python is treating them as an ordered sequence of statements with later
statements able to retrieve data created in earlier statements. We are
writing our first simple paragraph with four sentences in a logical and
meaningful order.

It is the nature of an *interpreter* to be able to have
an interactive conversation as shown above. A *compiler*
needs to be handed the entire program in a file, and then it runs a
process to translate the high-level source code into machine language
and then the compiler puts the resulting machine language into a file
for later execution.

If you have a Windows system, often these executable machine language
programs have a suffix of ".exe" or ".dll" which stand for "executable"
and "dynamic link library" respectively. In Linux and Macintosh, there
is no suffix that uniquely marks a file as executable.

If you were to open an executable file in a text editor, it would look
completely crazy and be unreadable:

.. code-block::

   ^?ELF^A^A^A^@^@^@^@^@^@^@^@^@^B^@^C^@^A^@^@^@\xa0\x82
   ^D^H4^@^@^@\x90^]^@^@^@^@^@^@4^@ ^@^G^@(^@$^@!^@^F^@
   ^@^@4^@^@^@4\x80^D^H4\x80^D^H\xe0^@^@^@\xe0^@^@^@^E
   ^@^@^@^D^@^@^@^C^@^@^@^T^A^@^@^T\x81^D^H^T\x81^D^H^S
   ^@^@^@^S^@^@^@^D^@^@^@^A^@^@^@^A\^D^HQVhT\x83^D^H\xe8
   ....


It is not easy to read or write machine language, so it is nice that we
have *interpreters* and *compilers* that
allow us to write in high-level languages like Python or C.

Now at this point in our discussion of compilers and interpreters, you
should be wondering a bit about the Python interpreter itself. What
language is it written in? Is it written in a compiled language? When we
type "python", what exactly is happening?

The Python interpreter is written in a high-level language called "C".
You can look at the actual source code for the Python interpreter by
going to `www.python.org <http://www.python.org>`_ and working your way to their
source code. So Python is a program itself and it is compiled into
machine code. When you installed Python on your computer (or the vendor
installed it), you copied a machine-code copy of the translated Python
program onto your system. In Windows, the executable machine code for
Python itself is likely in a file with a name like:

.. code-block::

   C:\Python35\python.exe


That is more than you really need to know to be a Python programmer, but
sometimes it pays to answer those little nagging questions right at the
beginning.

Writing a program
-----------------

Typing commands into the Python interpreter is a great way to experiment
with Python's features, but it is not recommended for solving more
complex problems.

When we want to write a program, we use a text editor to write the
Python instructions into a file, which is called a
*script*. By convention, Python scripts have names that
end with ``.py``.

\index{script}

To execute the script, you have to tell the Python interpreter the name
of the file. In a command window, you would type
``python hello.py`` as follows:

.. code-block:: bash

   $ cat hello.py
   print('Hello world!')
   $ python hello.py
   Hello world!


The "\$" is the operating system prompt, and the "cat hello.py" is
showing us that the file "hello.py" has a one-line Python program to
print a string.

We call the Python interpreter and tell it to read its source code from
the file "hello.py" instead of prompting us for lines of Python code
interactively.

You will notice that there was no need to have *quit()*
at the end of the Python program in the file. When Python is reading
your source code from a file, it knows to stop when it reaches the end
of the file.

What is a program?
------------------

The definition of a *program* at its most basic is a
sequence of Python statements that have been crafted to do something.
Even our simple *hello.py* script is a program. It is a
one-line program and is not particularly useful, but in the strictest
definition, it is a Python program.

It might be easiest to understand what a program is by thinking about a
problem that a program might be built to solve, and then looking at a
program that would solve that problem.

Lets say you are doing Social Computing research on Facebook posts and
you are interested in the most frequently used word in a series of
posts. You could print out the stream of Facebook posts and pore over
the text looking for the most common word, but that would take a long
time and be very mistake prone. You would be smart to write a Python
program to handle the task quickly and accurately so you can spend the
weekend doing something fun.

For example, look at the following text about a clown and a car. Look at
the text and figure out the most common word and how many times it
occurs.

.. code-block::

   the clown ran after the car and the car ran into the tent
   and the tent fell down on the clown and the car


Then imagine that you are doing this task looking at millions of lines
of text. Frankly it would be quicker for you to learn Python and write a
Python program to count the words than it would be to manually scan the
words.

The even better news is that I already came up with a simple program to
find the most common word in a text file. I wrote it, tested it, and now
I am giving it to you to use so you can save some time.

\VerbatimInput{../code3/words.py}
\begin{trinketfiles}
../code3/words.txt
\end{trinketfiles}

You don't even need to know Python to use this program. You will need to
get through Chapter 10 of this book to fully understand the awesome
Python techniques that were used to make the program. You are the end
user, you simply use the program and marvel at its cleverness and how it
saved you so much manual effort. You simply type the code into a file
called *words.py* and run it or you download the source
code from http://www.py4e.com/code3/ and run it.

\index{program}

This is a good example of how Python and the Python language are acting
as an intermediary between you (the end user) and me (the programmer).
Python is a way for us to exchange useful instruction sequences (i.e.,
programs) in a common language that can be used by anyone who installs
Python on their computer. So neither of us are talking *to
Python*\ , instead we are communicating with each other
*through* Python.

The building blocks of programs
-------------------------------

In the next few chapters, we will learn more about the vocabulary,
sentence structure, paragraph structure, and story structure of Python.
We will learn about the powerful capabilities of Python and how to
compose those capabilities together to create useful programs.

There are some low-level conceptual patterns that we use to construct
programs. These constructs are not just for Python programs, they are
part of every programming language from machine language up to the
high-level languages.

input
:   Get data from the "outside world". This might be reading data from a
    file, or even some kind of sensor like a microphone or GPS. In our
    initial programs, our input will come from the user typing data on
    the keyboard.

output
:   Display the results of the program on a screen or store them in a
    file or perhaps write them to a device like a speaker to play music
    or speak text.

sequential execution
:   Perform statements one after another in the order they are
    encountered in the script.

conditional execution
:   Check for certain conditions and then execute or skip a sequence of
    statements.

repeated execution
:   Perform some set of statements repeatedly, usually with some
    variation.

reuse
:   Write a set of instructions once and give them a name and then reuse
    those instructions as needed throughout your program.

It sounds almost too simple to be true, and of course it is never so
simple. It is like saying that walking is simply "putting one foot in
front of the other". The "art" of writing a program is composing and
weaving these basic elements together many times over to produce
something that is useful to its users.

The word counting program above directly uses all of these patterns
except for one.

What could possibly go wrong?
-----------------------------

As we saw in our earliest conversations with Python, we must communicate
very precisely when we write Python code. The smallest deviation or
mistake will cause Python to give up looking at your program.

Beginning programmers often take the fact that Python leaves no room for
errors as evidence that Python is mean, hateful, and cruel. While Python
seems to like everyone else, Python knows them personally and holds a
grudge against them. Because of this grudge, Python takes our perfectly
written programs and rejects them as "unfit" just to torment us.

.. code-block:: python

   >>> primt 'Hello world!'
   File "<stdin>", line 1
     primt 'Hello world!'
                        ^
   SyntaxError: invalid syntax
   >>> primt ('Hello world')
   Traceback (most recent call last):
   File "<stdin>", line 1, in <module>
   NameError: name 'primt' is not defined

   >>> I hate you Python!
   File "<stdin>", line 1
     I hate you Python!
          ^
   SyntaxError: invalid syntax
   >>> if you come out of there, I would teach you a lesson
   File "<stdin>", line 1
     if you come out of there, I would teach you a lesson
               ^
   SyntaxError: invalid syntax
   >>>


There is little to be gained by arguing with Python. It is just a tool.
It has no emotions and it is happy and ready to serve you whenever you
need it. Its error messages sound harsh, but they are just Python's call
for help. It has looked at what you typed, and it simply cannot
understand what you have entered.

Python is much more like a dog, loving you unconditionally, having a few
key words that it understands, looking you with a sweet look on its face
(\ ``>>>``\ ), and waiting for you to say something it
understands. When Python says "SyntaxError: invalid syntax", it is
simply wagging its tail and saying, "You seemed to say something but I
just don't understand what you meant, but please keep talking to me
(\ ``>>>``\ )."

As your programs become increasingly sophisticated, you will encounter
three general types of errors:

Syntax errors
:   These are the first errors you will make and the easiest to fix. A
    syntax error means that you have violated the "grammar" rules of
    Python. Python does its best to point right at the line and
    character where it noticed it was confused. The only tricky bit of
    syntax errors is that sometimes the mistake that needs fixing is
    actually earlier in the program than where Python
    *noticed* it was confused. So the line and character
    that Python indicates in a syntax error may just be a starting point
    for your investigation.

Logic errors
:   A logic error is when your program has good syntax but there is a
    mistake in the order of the statements or perhaps a mistake in how
    the statements relate to one another. A good example of a logic
    error might be, "take a drink from your water bottle, put it in your
    backpack, walk to the library, and then put the top back on the
    bottle."

Semantic errors
:   A semantic error is when your description of the steps to take is
    syntactically perfect and in the right order, but there is simply a
    mistake in the program. The program is perfectly correct but it does
    not do what you *intended* for it to do. A simple
    example would be if you were giving a person directions to a
    restaurant and said, "...when you reach the intersection with the
    gas station, turn left and go one mile and the restaurant is a red
    building on your left." Your friend is very late and calls you to
    tell you that they are on a farm and walking around behind a barn,
    with no sign of a restaurant. Then you say "did you turn left or
    right at the gas station?" and they say, "I followed your directions
    perfectly, I have them written down, it says turn left and go one
    mile at the gas station." Then you say, "I am very sorry, because
    while my instructions were syntactically correct, they sadly
    contained a small but undetected semantic error.".

Again in all three types of errors, Python is merely trying its hardest
to do exactly what you have asked.

Debugging
---------

\index{debugging}

When you Python spits out an error or even when it gives you a result that is different from what you had intended, then begins the hunt for the cause of the error. Debugging is the process of finding the cause of the error in your code. When you are debugging a program, and especially if you are working on a hard bug, there are four things to try:

reading
:   Examine your code, read it back to yourself, and check that it says
    what you meant to say.

running
:   Experiment by making changes and running different versions. Often
    if you display the right thing at the right place in the program,
    the problem becomes obvious, but sometimes you have to spend some
    time to build scaffolding.

ruminating
:   Take some time to think! What kind of error is it: syntax, runtime,
    semantic? What information can you get from the error messages, or
    from the output of the program? What kind of error could cause the
    problem you're seeing? What did you change last, before the problem
    appeared?

retreating
:   At some point, the best thing to do is back off, undoing recent
    changes, until you get back to a program that works and that you
    understand. Then you can start rebuilding.

Beginning programmers sometimes get stuck on one of these activities and
forget the others.  Finding a hard bug requires reading, running, ruminating, and sometimes retreating. If you get stuck on one of these activities, try the others. Each activity comes with its own failure mode.

\index{typographical error}

For example, reading your code might help if the problem is a
typographical error, but not if the problem is a conceptual
misunderstanding. If you don't understand what your program does, you
can read it 100 times and never see the error, because the error is in
your head.

\index{experimental debugging}

Running experiments can help, especially if you run small, simple tests.
But if you run experiments without thinking or reading your code, you
might fall into a pattern I call "random walk programming", which is the
process of making random changes until the program does the right thing.
Needless to say, random walk programming can take a long time.

\index{random walk programming}
\index{development plan!random walk programming}

You have to take time to think. Debugging is like an experimental
science. You should have at least one hypothesis about what the problem
is. If there are two or more possibilities, try to think of a test that
would eliminate one of them.

Taking a break helps with the thinking. So does talking. If you explain
the problem to someone else (or even to yourself), you will sometimes
find the answer before you finish asking the question.

But even the best debugging techniques will fail if there are too many
errors, or if the code you are trying to fix is too big and complicated.
Sometimes the best option is to retreat, simplifying the program until
you get to something that works and that you understand.

Beginning programmers are often reluctant to retreat because they can't
stand to delete a line of code (even if it's wrong). If it makes you
feel better, copy your program into another file before you start
stripping it down. Then you can paste the pieces back in a little bit at
a time.

The learning journey
--------------------

As you progress through the rest of the book, don't be afraid if the
concepts don't seem to fit together well the first time. When you were
learning to speak, it was not a problem for your first few years that
you just made cute gurgling noises. And it was OK if it took six months
for you to move from simple vocabulary to simple sentences and took 5-6
more years to move from sentences to paragraphs, and a few more years to
be able to write an interesting complete short story on your own.

We want you to learn Python much more rapidly, so we teach it all at the
same time over the next few chapters. But it is like learning a new
language that takes time to absorb and understand before it feels
natural. That leads to some confusion as we visit and revisit topics to
try to get you to see the big picture while we are defining the tiny
fragments that make up that big picture. While the book is written
linearly, and if you are taking a course it will progress in a linear
fashion, don't hesitate to be very nonlinear in how you approach the
material. Look forwards and backwards and read with a light touch. By
skimming more advanced material without fully understanding the details,
you can get a better understanding of the "why?" of programming. By
reviewing previous material and even redoing earlier exercises, you will
realize that you actually learned a lot of material even if the material
you are currently staring at seems a bit impenetrable.

Usually when you are learning your first programming language, there are
a few wonderful "Ah Hah!" moments where you can look up from pounding
away at some rock with a hammer and chisel and step away and see that
you are indeed building a beautiful sculpture.

If something seems particularly hard, there is usually no value in
staying up all night and staring at it. Take a break, take a nap, have a
snack, explain what you are having a problem with to someone (or perhaps
your dog), and then come back to it with fresh eyes. I assure you that
once you learn the programming concepts in the book you will look back
and see that it was all really easy and elegant and it simply took you a
bit of time to absorb it.

Glossary
--------

bug
:   An error in a program.
\index{bug}

central processing unit
:   The heart of any computer. It is what runs the software that we
    write; also called "CPU" or "the processor".
\index{central processing unit}
\index{CPU}

compile
:   To translate a program written in a high-level language into a
    low-level language all at once, in preparation for later execution.
\index{compile}

high-level language
:   A programming language like Python that is designed to be easy for
    humans to read and write.
\index{high-level language}

interactive mode
:   A way of using the Python interpreter by typing commands and
    expressions at the prompt.
\index{interactive mode}

interpret
:   To execute a program in a high-level language by translating it one
    line at a time.
\index{interpret}

low-level language
:   A programming language that is designed to be easy for a computer to
    execute; also called "machine code" or "assembly language".
\index{low-level language}

machine code
:   The lowest-level language for software, which is the language that
    is directly executed by the central processing unit (CPU).
\index{machine code}

main memory
:   Stores programs and data. Main memory loses its information when the
    power is turned off.
\index{main memory}

parse
:   To examine a program and analyze the syntactic structure.
\index{parse}

portability
:   A property of a program that can run on more than one kind of
    computer.
\index{portability}

print function
:   An instruction that causes the Python interpreter to display a value
    on the screen.
\index{print function}
\index{function!print}

problem solving
:   The process of formulating a problem, finding a solution, and
    expressing the solution.
\index{problem solving}

program
:   A set of instructions that specifies a computation.
\index{program}

prompt
:   When a program displays a message and pauses for the user to type
    some input to the program.
\index{prompt}

secondary memory
:   Stores programs and data and retains its information even when the
    power is turned off. Generally slower than main memory. Examples of
    secondary memory include disk drives and flash memory in USB sticks.
\index{secondary memory}

semantics
:   The meaning of a program.
\index{semantics}

semantic error
:   An error in a program that makes it do something other than what the
    programmer intended.
\index{semantic error}

source code
:   A program in a high-level language.
\index{source code}

Exercises
---------

.. mchoice:: 01-intro-m-secondaryMem
   :answer_a: Execute all of the computation and logic of the program
   :answer_b: Retrieve web pages over the Internet
   :answer_c: Store information for the long term, even beyond a power cycle
   :answer_d: Take input from the user
   :correct: c
   :feedback_a: This would be correct if we asked what the CPU does.
   :feedback_b: This woulc be correct if we asked what the client does.
   :feedback_c: The secondary memory provides long term storage, even if you turn off the computer.
   :feedback_d: The secondary memory does not ask users for input.


   What is the function of the secondary memory in a computer?

.. shortanswer:: 01-intro-s-prog

   What is a program?

.. shortanswer:: 01-intro-s-compilerVsInterpreter

   What is the difference between a compiler and an interpreter?

.. mchoice:: 01-intro-m-machineCode
   :answer_a: The Python interpreter
   :answer_b: The keyboard
   :answer_c: Python source file
   :answer_d: A word processing document
   :correct: a
   :feedback_a: The interpreter translates python source code from a human readable form to machine code
   :feedback_b: The keyboard provides textual input
   :feedback_c: The Python source file contains human readable programs
   :feedback_d: A word processing document contains text

   Which of the following contains "machine code"?


Try running the following code.  Can you tell what is wrong with it and fix it?

.. activecode:: 01-intro-a-fix-hello

   primt 'Hello world!'

.. mchoice:: 01-intro-m-whereStored
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

.. mchoice:: 01-intro-m-printVal
   :answer_a: 43
   :answer_b: 44
   :answer_c: x + 1
   :answer_d: Error because x = x + 1 is not possible mathematically
   :correct: b
   :feedback_a: The value of x was changed.
   :feedback_b: While x was set to 43 originally it was changed to one more than the current value.
   :feedback_c: This would be true if the code was priInput devices do not store data
   :feedback_d: This code sets the value of x to the current value of x plus 1.

   What will the following program print out:**

   .. code-block:: python

      x = 43
      x = x + 1
      print(x)

.. shortanswer:: 01-intro-s-explainCPU

   What is the human equivalent to a Central Processing Unit?

.. shortanswer:: 01-intro-s-MainMemory

   What is the human equivalent to Main Memory?


.. shortanswer:: 01-intro-s-SecMemory

   What is the human equivalent to Secondary Memory?

.. shortanswer:: 01-intro-s-Input

   What is the human equivalent to an Input Device?

.. shortanswer:: 01-intro-s-Input

   What is the human equivalent to an Output Device?

.. shortanswer:: 01-intro-s-syntaxError

   How do you fix a "Syntax Error"?
