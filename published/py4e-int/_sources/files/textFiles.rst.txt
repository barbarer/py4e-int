Text files and lines
--------------------
.. index::
    single: Newline
    single: Text File

A text file can be thought of as a sequence of lines, much like a Python
string can be thought of as a sequence of characters. For example, this
is a sample of a text file which records mail activity from various
individuals in an open source project development team:

.. code-block::

   From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008
   Return-Path: <postmaster@collab.sakaiproject.org>
   Date: Sat, 5 Jan 2008 09:12:18 -0500
   To: source@collab.sakaiproject.org
   From: stephen.marquard@uct.ac.za
   Subject: [sakai] svn commit: r39772 - content/branches/
   Details: http://source.sakaiproject.org/viewsvn/?view=rev&rev=39772
   ...


The entire file of mail interactions is available from

`www.py4e.com/code3/mbox.txt <http://www.py4e.com/code3/mbox.txt>`_

and a shortened version of the file is available from

`www.py4e.com/code3/mbox-short.txt <http://www.py4e.com/code3/mbox-short.txt>`_

These files are in a standard format for a file containing multiple mail
messages. The lines which start with "From " separate the messages and
the lines which start with "From:" are part of the messages. For more
information about the mbox format, see
https://en.wikipedia.org/wiki/Mbox.

To break the file into lines, there is a special character that
represents the "end of the line" called the *newline*
character.

In Python, we represent the *newline* character as a
backslash-n in string constants. Even though this looks like two
characters, it is actually a single character. When we look at the
variable by entering "stuff" in the interpreter, it shows us the ``\n`` in
the string, but when we use ``print`` to show the string, we
see the string broken into two lines by the newline character.

.. activecode:: fileNewLine

    stuff = 'Hello World!'
    print(stuff)
    stuff = 'Hello\nWorld!'
    print(stuff)
    stuff = 'X\nY'
    print(stuff)
    len(stuff)

You can also see that the length of the string ``X\nY`` is *three*
characters because the newline character is a single character.

So when we look at the lines in a file, we need to remember that there
is a special invisible character called the newline at the end of each
line that marks the end of the line.

So the newline character separates the characters in the file into
lines.

.. fillintheblank:: file-text-fitb-lines
    :practice: T
    :casei:

    A(n) |blank| character separates characters of a file into lines.

    - :newline: The newline character separates the characters in the file into lines.
      :.*: Try again.

.. mchoice:: file-text-mc-char
    :practice: T
    :answer_a: 0
    :answer_b: 1
    :answer_c: 2
    :answer_d: As many as it takes to finish the line.
    :correct: b
    :feedback_a: A newline does count as some number of characters.
    :feedback_b: Despite being two characters when written, a newline character is only counted as one character.
    :feedback_c: Despite being two characters when written, a newline character is only counted as one character.
    :feedback_d: There is a definite character count for a newline character that is not dependent on the other characters in a line.

    How many characters is ``\n`` (the newline character) counted as?
