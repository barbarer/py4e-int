Comments
--------
.. index::
    single: comment


As programs get bigger and more complicated, they get more difficult to
read. Formal languages are dense, and it is often difficult to look at a
piece of code and figure out what it is doing, or why.

For this reason, it is a good idea to add notes to your programs to
explain in natural language what the program is doing. These notes are
called *comments*, and in Python they start with the ``#``
symbol:

.. code-block:: python

    # compute the percentage of the hour that has elapsed
    percentage = (minute * 100) / 60


In this case, the comment appears on a line by itself. You can also put
comments at the end of a line:

.. code-block:: python

    percentage = (minute * 100) / 60     # percentage of an hour


Everything from the ``#`` to the end of the line is ignored; it
has no effect on the program.

Comments are most useful when they document non-obvious features of the
code. It is reasonable to assume that the reader can figure out *what*
the code does; it is much more useful to explain *why*.

.. mchoice:: var-comments-mc-use
    :practice: T
    :answer_a: To add notes to code.
    :answer_b: To assign names to variables.
    :answer_c: To run code.
    :answer_d: To keep track of how many times a loop has iterated.
    :correct: a
    :feedback_a: Comments are used to add notes to code.
    :feedback_b: Comments are not read by the program when code is running, so variable assignments should not be commented out.
    :feedback_c: Try again! Comments do not run the code.
    :feedback_d: Try again! Please do not keep track of iterations in a comment!

    What are comments used for?

This comment is redundant with the code and useless:

.. code-block:: python

    v = 5     # assign 5 to v


This comment contains useful information that is not in the code:

.. code-block:: python

    v = 5     # velocity in meters/second.


Good variable names can reduce the need for comments, but long names can
make complex expressions hard to read, so there is a trade-off.

.. fillintheblank:: var-comments-fitb-symbol
    :practice: T

    What is the symbol for a single line of comments?

    - :#: Yes, # is used to start a single line of comments.
      :.*: Try again! Remember that three sets of quotation marks are used for multi-line comments.


.. mchoice:: var-comments-mc-false
    :practice: T
    :answer_a: Comments start with the symbol #
    :answer_b: Comments document the non-obvious features of the code.
    :answer_c: Comments function like any other line of code.
    :answer_d: Comments cause the rest of the line to be ignored.
    :correct: c
    :feedback_a: Try again! This is true! Which of the options is not?
    :feedback_b: Try again! This is true! Which of the options is not?
    :feedback_c: Comments are ignored and have no effect on the program.
    :feedback_d: Try again! This is true! Which of the options is not?

    Which of the following is **not** true about comments?

.. mchoice:: var-comments-mc-print
    :practice: T
    :answer_a: Milo is this many years old: 12
    :answer_b: Milois this many years old:12
    :answer_c: Milo + is this many years old: + 12
    :answer_d: Nothing will print.
    :correct: d
    :feedback_a: Try again! Remember that # is the symbol for comments.
    :feedback_b: Try again! Remember that # is the symbol for comments.
    :feedback_c: Try again! Remember that # is the symbol for comments.
    :feedback_d: The print statement is commented out, so this code only assigns values to each variable.

    What will be printed after the following code executes?

    ::

      name = "Milo"
      age = 12
      sentence = " is this many years old: "
      #print(name + statement + age)
