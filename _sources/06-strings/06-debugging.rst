Debugging
---------
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
    :practice: T

    What kind of error will come from trying to access a nonexistent index?

    - :[Tt]raceback( [Ee]rror)*: Correct! Try to access an index that isn't there causes a traceback error.
      :.*: Try again!


The code works fine until it is presented an empty line. Then there is
no zero-th character, so we get a traceback. There are two solutions to
this to make line three "safe" even if the line is empty.

One possibility is to simply use the ``startswith`` method
which returns ``False`` if the string is empty.

.. code-block:: python

   if line.startswith('#'):

.. fillintheblank:: str-debug-fitb-string
    :practice: T

    What string method is used to prevent errors?

    - :[Ss]tartswith: Correct! The string method startswith can be used as an extra check to prevent errors.
      :.*: Try again!

Another way is to safely write the ``if`` statement using the
*guardian* pattern and make sure the second logical
expression is evaluated only where there is at least one character in
the string.:

.. code-block:: python

   if len(line) > 0 and line[0] == '#':

.. fillintheblank:: str-debug-fitb-safe
    :practice: T

    What kind of pattern is used to prevent errors?

    - :[Gg]aurdian( [Pp]attern)*: Correct! A guardian pattern can be used as an extra check to prevent errors.
      :.*: Try again!
