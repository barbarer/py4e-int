Catching exceptions using try and except
----------------------------------------
.. index::
    single: Traceback
    single: Fahrenheit
    single: Celsius
    single: Temperature Conversion
    single: Try
    single: Except

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

.. activecode:: cndtnlTemp
    :caption: Temperature converter

    inp = input('Enter Fahrenheit Temperature: ')
    fahr = float(inp)
    cel = (fahr - 32.0) * 5.0 / 9.0
    print(cel)

Example:

.. code-block::

    Enter Fahrenheit Temperature:72
    22.22222222222222


If we execute this code and give it invalid input, it simply fails with
an unfriendly error message:

.. code-block::

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

.. fillintheblank:: cndtnl-try-fitb-equivalent

    The ``try / except`` feature is more or less a(n) _______ for your code.

    - :[Ii]nsurance [Pp]olicy: Try / except acts as an insurance policy to catch expected
                              or unexpected errors in your code.
      :.*: Check the previous paragraph for some help!

We can rewrite our temperature converter as follows:

.. activecode:: cndtnlTempTry
    :caption: Temperature converter using try/except

    inp = input('Enter Fahrenheit Temperature:')
    try:
        fahr = float(inp)
        cel = (fahr - 32.0) * 5.0 / 9.0
        print(cel)
    except:
        print('Please enter a number')

Python starts by executing the sequence of statements in the
``try`` block. If all goes well, it skips the
``except`` block and proceeds. If an exception occurs in the
``try`` block, Python jumps out of the ``try`` block
and executes the sequence of statements in the ``except``
block.

Example:

.. code-block::

    Enter Fahrenheit Temperature:72
    22.22222222222222

If we execute this code and give it invalid input, it executes the statements in the ``except`` block:

.. code-block::

    Enter Fahrenheit Temperature:fred
    Please enter a number


Handling an exception with a ``try`` statement is called
*catching* an exception. In this example, the
``except`` clause prints an error message. In general, catching
an exception gives you a chance to fix the problem, or try again, or at
least end the program gracefully.

.. fillintheblank:: cndtnl-try-fitb-meaning
    :practice: T

    The ``try/except`` feature is used to catch ________.

    - :[Ee]xception: When using try/except you are trying to catch an exception and give the computer a different way to handle it.
      :.*: Try again. 

.. parsonsprob:: cndtnl-try-pp-temp
    :practice: T
    :adaptive:
    :numbered: left

    The following program should get a temperature in Fahrenheit from the user, then print out the
    temperature in Celsius. If the input is not a number, it should ask the user to enter a
    number again. Be sure to indent correctly!
    -----
    inp = input('Enter Fahrenheit Temperature:')
    =====
    try:
    =====
        fahr = float(inp)
    =====
        fahr = int(inp) #paired
    =====
        cel = (fahr - 32.0) * 5.0 / 9.0
    =====
        print(cel)
    =====
    except:
    =====
        print('Please enter a number')
