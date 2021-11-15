The building blocks of programs
-------------------------------
.. index::
    single: Input
    single: Sequential Execution
    single: Output
    single: Conditional Execution
    single: Repeated Execution
    single: Reuse

In the next few chapters, we will learn more about the vocabulary,
sentence structure, paragraph structure, and story structure of Python.
We will learn about the powerful capabilities of Python and how to
compose those capabilities together to create useful programs.

There are some low-level conceptual patterns that we use to construct
programs. These constructs are not just for Python programs, they are
part of every programming language from machine language up to the
high-level languages.

* input
    Get data from the "outside world". This might be reading data from a
    file, or even some kind of sensor like a microphone or GPS. In our
    initial programs, our input will come from the user typing data on
    the keyboard.

* output
    Display the results of the program on a screen or store them in a
    file or perhaps write them to a device like a speaker to play music
    or speak text.

* sequential execution
    Perform statements one after another in the order they are
    encountered in the script.

* conditional execution
    Check for certain conditions and then execute or skip a sequence of
    statements.

* repeated execution
    Perform some set of statements repeatedly, usually with some
    variation.

* reuse
    Write a set of instructions once and give them a name and then reuse
    those instructions as needed throughout your program.

It sounds almost too simple to be true, and of course it is never so
simple. It is like saying that walking is simply "putting one foot in
front of the other". The "art" of writing a program is composing and
weaving these basic elements together many times over to produce
something that is useful to its users.

The word counting program from the previous section directly uses all of these patterns
except for one.

.. fillintheblank:: intro-bb-fitb-CDout
  :practice: T

  When writing content to a CD, the CD is an example of ________.

  - :[Oo]utput: A CD displays the results of a program when the disc is played.
    :[Ii]nput: Not quite. Is the CD being read from or written to?
    :.*: Try again.

.. fillintheblank:: intro-bb-fitb-CDin
  :practice: T

  When reading content from a CD, the CD is an example of ________.

  - :[Ii]nput: A CD holds information that the program reads.
    :[Oo]utput: Not quite. Is the CD being read from or written to?
    :.*: Try again.

.. dragndrop:: intro-bb-dbd-terms
  :practice: T
  :match_1: Input|||Getting data from outside the computer.
  :match_2: Output|||Displaying or producing the results of the program.
  :match_3: Sequential Execution|||Performing statements one after another in the order they are encountered.
  :match_4: Conditional Execution|||Checking for certain conditions, then executing or skipping a sequence of statements.
  :match_5: Repeated Execution|||Performing some set of statements multiple times, typically with some variation.
  :match_6: Reuse|||writing a set of instructions once, giving them a name, and calling those instructions as needed in the program.

  Match each pattern with what it means for a program.
