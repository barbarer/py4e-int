Catching exceptions using try and except
----------------------------------------

Earlier we saw a code segment where we used the ``input`` and
``int`` functions to read and parse an integer number entered
by the user. We also saw how treacherous doing this could be:

.. code-block:: python

   >>> prompt = "What is the air velocity of an unladen swallow?\n"
   >>> speed = input(prompt)
   What is the air velocity of an unladen swallow?
   What do you mean, an African or a European swallow?
   >>> int(speed)
   ValueError: invalid literal for int() with base 10:
   >>>


When we are executing these statements in the Python interpreter, we get
a new prompt from the interpreter, think "oops", and move on to our next
statement.

However if you place this code in a Python script and this error occurs,
your script immediately stops in its tracks with a traceback. It does
not execute the following statement.

Here is a sample program to convert a Fahrenheit temperature to a
Celsius temperature:

\VerbatimInput{../code3/fahren.py}

If we execute this code and give it invalid input, it simply fails with
an unfriendly error message:

.. code-block::

   python fahren.py
   Enter Fahrenheit Temperature:72
   22.22222222222222


.. code-block::

   python fahren.py
   Enter Fahrenheit Temperature:fred
   Traceback (most recent call last):
     File "fahren.py", line 2, in <module>
       fahr = float(inp)
   ValueError: could not convert string to float: 'fred'


There is a conditional execution structure built into Python to handle
these types of expected and unexpected errors called "try / except". The
idea of ``try`` and ``except`` is that you know that
some sequence of instruction(s) may have a problem and you want to add
some statements to be executed if an error occurs. These extra
statements (the except block) are ignored if there is no error.

You can think of the ``try`` and ``except`` feature in
Python as an "insurance policy" on a sequence of statements.

We can rewrite our temperature converter as follows:

\VerbatimInput{../code3/fahren2.py}

Python starts by executing the sequence of statements in the
``try`` block. If all goes well, it skips the
``except`` block and proceeds. If an exception occurs in the
``try`` block, Python jumps out of the ``try`` block
and executes the sequence of statements in the ``except``
block.

.. code-block::

   python fahren2.py
   Enter Fahrenheit Temperature:72
   22.22222222222222


.. code-block::

   python fahren2.py
   Enter Fahrenheit Temperature:fred
   Please enter a number


Handling an exception with a ``try`` statement is called
*catching* an exception. In this example, the
``except`` clause prints an error message. In general, catching
an exception gives you a chance to fix the problem, or try again, or at
least end the program gracefully.
