Debugging
---------
.. index::
    single: Debugging
    pair: Guardian; Pattern

A skill that you should cultivate as you program is always asking
yourself, "What could go wrong here?" or alternatively, "What crazy
thing might our user do to crash our (seemingly) perfect program?"

For example, look at the program which we used to demonstrate the
``while`` loop in the chapter on iteration:

.. code-block:: python

    while True:
        line = input('> ')
        if line[0] == '#':
            continue
        if line == 'done':
            break
        print(line)
    print('Done!')

Look what happens when the user enters an empty line of input:

.. code-block:: python

    > hello there
    hello there
    > # don't print this
    > print this!
    print this!
    >
    Traceback (most recent call last):
      File "copytildone.py", line 3, in <module>
        if line[0] == '#':
    IndexError: string index out of range

.. fillintheblank:: str-debug-fitb-error

    What kind of error will come from trying to access a nonexistent element or one that is out of range?

    - :[Ii]ndex([Ee]rror)?: Correct! Try to access an index that isn't there causes a index error.
      :.*: Incorrect! Read the error message above for the answer. Try again.


The code works fine until it is presented with an empty line. In that case, there is
no zero-th character, so we get a traceback. There are two solutions to
make line three "safe," even if the line is empty.

One possibility is to simply use the ``startswith`` method,
which returns ``False`` if the string is empty.

.. code-block:: python

   if line.startswith('#'):

.. fillintheblank:: str-debug-fitb-string

    What string method is used to prevent errors?

    - :(\.)?startswith(\(\))?: Correct! The string method startswith can be used as an extra check to prevent errors.
      :.*: Incorrect! Watch your capitalization (methods don't use camelCase). Try again.

Another way is to safely write the ``if`` statement using the
*guardian* pattern and make sure the second logical
expression is evaluated only where there is at least one character in
the string:

.. code-block:: python

   if len(line) > 0 and line[0] == '#':

.. fillintheblank:: str-debug-fitb-safe

    What kind of pattern is used to prevent errors?

    - :[Gg]uardian( [Pp]attern)?: Correct! A guardian pattern can be used as an extra check to prevent errors.
      :.*: Incorrect! Make sure you spelled it correctly. Try again.
