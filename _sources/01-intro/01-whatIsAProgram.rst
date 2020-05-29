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

This is a good example of how Python and the Python language are acting
as an intermediary between you (the end user) and me (the programmer).
Python is a way for us to exchange useful instruction sequences (i.e.,
programs) in a common language that can be used by anyone who installs
Python on their computer. So neither of us are talking *to
Python*\ , instead we are communicating with each other
*through* Python.
