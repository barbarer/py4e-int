Conversing with Python
----------------------
.. index::
    single: Interactive Mode

Now that we have a word and a simple sentence that we know in Python, we
need to know how to start a conversation with Python to test our new
language skills.

Before you can converse with Python, you must first install the Python
software on your computer and learn how to start Python on your
computer. That is too much detail for this chapter so I suggest that you
consult `www.py4e.com <http://www.py4e.com>`_ where I have detailed
instructions and screencasts of setting up and starting Python on
Macintosh and Windows systems. At some point, you will be in a terminal
or command window and you will type *python* and the
Python interpreter will start executing in interactive mode and appear
somewhat as follows:

.. code-block:: python

   Python 3.5.1 (v3.5.1:37a07cee5969, Dec  6 2015, 01:54:25)
   [MSC v.1900 64 bit (AMD64)] on win32
   Type "help", "copyright", "credits" or "license" for more
   information.
   >>>


The ``>>>`` prompt is the Python interpreter's way of asking
you, "What do you want me to do next?" Python is ready to have a
conversation with you. All you have to know is how to speak the Python
language.

.. fillintheblank:: intro-convo-fitb-prompt
  :practice: T

  What symbol is the Python interpreter's prompt for "What do you want me to do next?"

  - :>>>: Correct! >>> is the prompt from the Python interpreter.
    :.*: Try again. Open your Python interpreter using the command "python" and see what you are prompted with.


Let's say for example that you did not know even the simplest Python
language words or sentences. You might want to use the standard line
that astronauts use when they land on a faraway planet and try to speak
with the inhabitants of the planet:

.. code-block:: python

   >>> I come in peace, please take me to your leader
   File "<stdin>", line 1
     I come in peace, please take me to your leader
          ^
   SyntaxError: invalid syntax
   >>>


This is not going so well. Unless you think of something quickly, the
inhabitants of the planet are likely to stab you with their spears, put
you on a spit, roast you over a fire, and eat you for dinner.

Luckily you brought a copy of this book on your travels, and you thumb
to this very page and try again:

.. code-block:: python

   >>> print('Hello world!')
   Hello world!


This is looking much better, so you try to communicate some more:

.. code-block:: python

   >>> print('You must be the legendary god that comes from the sky')
   You must be the legendary god that comes from the sky
   >>> print('We have been waiting for you for a long time')
   We have been waiting for you for a long time
   >>> print('Our legend says you will be very tasty with mustard')
   Our legend says you will be very tasty with mustard
   >>> print 'We will have a feast tonight unless you say
   File "<stdin>", line 1
     print 'We will have a feast tonight unless you say
                                                      ^
   SyntaxError: Missing parentheses in call to 'print'
   >>>


The conversation was going so well for a while and then you made the
tiniest mistake using the Python language and Python brought the spears
back out.

.. mchoice:: intro-convo-mc-print
  :practice: T
  :answer_a: commas
  :answer_b: brackets
  :answer_c: semicolons
  :answer_d: parentheses
  :correct: d
  :feedback_a: What is needed to complete a print statement?
  :feedback_b: What symbols are needed around the text to print?
  :feedback_c: Try again.
  :feedback_d: Correct! Parentheses are needed around statements that are being printed.

  What is missing from this print statement?

  ::

    print 'We will have a feast tonight unless you say'

At this point, you should also realize that while Python is amazingly
complex and powerful and very picky about the syntax you use to
communicate with it, Python is *not* intelligent. You are
really just having a conversation with yourself, but using proper
syntax.

In a sense, when you use a program written by someone else the
conversation is between you and those other programmers with Python
acting as an intermediary. Python is a way for the creators of programs
to express how the conversation is supposed to proceed. And in just a
few more chapters, you will be one of those programmers using Python to
talk to the users of your program.

Before we leave our first conversation with the Python interpreter, you
should probably know the proper way to say "good-bye" when interacting
with the inhabitants of Planet Python:

.. code-block:: python

   >>> good-bye
   Traceback (most recent call last):
   File "<stdin>", line 1, in <module>
   NameError: name 'good' is not defined
   >>> if you don't mind, I need to leave
   File "<stdin>", line 1
     if you don't mind, I need to leave
              ^
   SyntaxError: invalid syntax
   >>> quit()


You will notice that the error is different for the first two incorrect
attempts. The second error is different because *if* is a
reserved word and Python saw the reserved word and thought we were
trying to say something but got the syntax of the sentence wrong.

The proper way to say "good-bye" to Python is to enter
*quit()* at the interactive chevron ``>>>``
prompt. It would have probably taken you quite a while to guess that
one, so having a book handy probably will turn out to be helpful.


.. fillintheblank:: intro-convo-fitb-quit
  :practice: T

  What do you type to leave the Python interpreter?

  - :quit(\(\))*: Correct!
    :.*: Try again.
