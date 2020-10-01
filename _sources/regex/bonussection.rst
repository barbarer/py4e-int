Bonus section for Unix / Linux users
------------------------------------

.. index::
   single: Grep

Support for searching files using regular expressions was built into the
Unix operating system since the 1960s and it is available in nearly all
programming languages in one form or another.


As a matter of fact, there is a command-line program built into Unix
called *grep* (Generalized Regular Expression Parser)
that does pretty much the same as the ``search()`` examples in
this chapter. So if you have a Macintosh or Linux system, you can try
the following commands in your command-line window.

.. code-block:: {.bash}

   $ grep '^From:' mbox-short.txt
   From: stephen.marquard@uct.ac.za
   From: louis@media.berkeley.edu
   From: zqian@umich.edu
   From: rjlowe@iupui.edu


This tells ``grep`` to show you lines that start with the
string "From:" in the file *mbox-short.txt*. If you
experiment with the ``grep`` command a bit and read the
documentation for ``grep``\ , you will find some subtle
differences between the regular expression support in Python and the
regular expression support in ``grep``. As an example,
``grep`` does not support the non-blank character
``\S`` so you will need to use the slightly more complex set
notation ``[^ ]``\ , which simply means match a character that is anything
other than a space.

.. mchoice:: question11_7_1
    :multiple_answers:
    :practice: T
    :answer_a: $ grep '\$[0-9.]+' mbox-short.txt
    :answer_b: $ grep '\$[0-9]+'
    :answer_c: $ grep '\$[/d.]+' mbox-short.txt
    :answer_d: $ grep '$[0-9.]+' mbox-short.txt
    :correct: a,c
    :feedback_a: Correct! This is the correct way to use grep to find prices in a file.
    :feedback_b: Make sure to include the file!
    :feedback_c: Correct! This uses the /d regex character to find prices in mbox-short.txt.
    :feedback_d: You're missing a character. 

    Which option(s) properly uses the grep command-line to search for prices? Select all that apply.
