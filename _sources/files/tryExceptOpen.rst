Using ``try, except,`` and ``open``
------------------------------------
.. index::
    pair: Quality; Assurance
    pair: Statement; Try
    pair: Open; Statement
    pair: IOError; Exception
    single: Pythonic


I told you not to peek. This is your last chance.

What if our user types something that is not a file name?

.. code-block::

    python search6.py
    Enter the file name: missing.txt
    Traceback (most recent call last):
      File "search6.py", line 2, in <module>
        fhand = open(fname)
    FileNotFoundError: [Errno 2] No such file or directory: 'missing.txt'

    python search6.py
    Enter the file name: na na boo boo
    Traceback (most recent call last):
      File "search6.py", line 2, in <module>
        fhand = open(fname)
    FileNotFoundError: [Errno 2] No such file or directory: 'na na boo boo'


Do not laugh. Users will eventually do every possible thing they can do
to break your programs, either on purpose or with malicious intent. As a
matter of fact, an important part of any software development team is a
person or group called *Quality Assurance* (or QA for
short) whose very job it is to do the craziest things possible in an
attempt to break the software that the programmer has created.

The QA team is responsible for finding the flaws in programs before we
have delivered the program to the end users who may be purchasing the
software or paying our salary to write the software. So the QA team is
the programmer's best friend.

.. mchoice:: file-try-mc-qa

    Which of the following is something that the Quality Assurance (QT) team does (pick all that apply)?

    - Try to break the software.

      + The quality assurance team tries to break the software, so the developers can fix it.

    - Find flaws in programs.

      + The quality assurance team tries to find flaws in the software, so the users don't run into them.

    - Purchase software.

      - The quality assurance team does not purchase software.


So now that we see the flaw in the program, we can elegantly fix it
using the ``try``/``except`` structure. We need to
assume that the ``open`` call might fail and add recovery code
when the ``open`` fails as follows (creating a new file *search7.py*):

.. code-block:: fileInputTry

    fname = input('Enter the file name: ')
    try:
        fhand = open(fname)
    except:
        print('File cannot be opened:', fname)
        exit()
    count = 0
    for line in fhand:
        if line.startswith('Subject:'):
            count = count + 1
    fhand.close()
    print('There were', count, 'subject lines in', fname)

The ``exit`` function terminates the program. It is a function
that we call that never returns. Now when our user (or QA team) types in
silliness or bad file names, we "catch" them and recover gracefully:

.. code-block::

    python search7.py
    Enter the file name: mbox.txt
    There were 1797 subject lines in mbox.txt

    python search7.py
    Enter the file name: na na boo boo
    File cannot be opened: na na boo boo

.. fillintheblank:: file-try-fitb-close
    :practice: T

    The |blank| function terminates or ends the program.

    - :exit: The exit function does not return anything and closes the program.
      :.*: Try again. Which function will close or end a program without returning anything?

Protecting the ``open`` call is a good example of the proper
use of ``try`` and ``except`` in a Python program. We
use the term "Pythonic" when we are doing something the "Python way". We
might say that the above example is the Pythonic way to open a file.

Once you become more skilled in Python, you can engage in repartee with
other Python programmers to decide which of two equivalent solutions to
a problem is "more Pythonic". The goal to be "more Pythonic" captures
the notion that programming is part engineering and part art. We are not
always interested in just making something work, we also want our
solution to be elegant and to be appreciated as elegant by our peers.

.. fillintheblank:: file-try-fitb-python

    The term |blank| describes something done the "Python way".

    - :[Pp]ythonic: A pythonic technique is a technique that works elegantly in Python.
      :.*: Try again.
