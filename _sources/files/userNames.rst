Letting the user choose the file name
-------------------------------------
.. index::
    pair: File; Name

We really do not want to have to edit our Python code every time we want
to process a different file. It would be more usable to ask the user to
enter the file name string each time the program runs so they can use
our program on different files without changing the Python code.

This is quite simple to do by reading the file name from the user using
``input`` as follows:

.. code-block:: fileInput

    fname = input('Enter the file name: ')
    fhand = open(fname)
    count = 0
    for line in fhand:
        if line.startswith('Subject:'):
            count = count + 1
    fhand.close()
    print('There were', count, 'subject lines in', fname)

We read the file name from the user and place it in a variable named
``fname`` and open that file. Now we can run the program
repeatedly on different files.

.. code-block::

    python search6.py # seach6.py is the file containing the above script.
    Enter the file name: mbox.txt
    There were 1797 subject lines in mbox.txt

    python search6.py
     Enter the file name: mbox-short.txt
   There were 27 subject lines in mbox-short.txt

.. parsonsprob:: file-user-pp-input-v2
    :adaptive:
    :practice: T
    :numbered: left

    Put the following code in order to open and count the lines of a file from the user.
    Watch out for indentation and extra code blocks!
    -----
    count = 0
    fname = input('Enter the file name: ')
    =====
    fhand = open(fname)
    =====
    for line in fhand:
    =====
    for line in fname: #paired
    =====
        count = count + 1
    =====
    fhand.close()
    print('There were', count, 'lines in', fname)

Before peeking at the next section, take a look at the above program and
ask yourself, "What could go possibly wrong here?" or "What might our
friendly user do that would cause our nice little program to
ungracefully exit with a traceback, making us look not-so-cool in the
eyes of our users?"

.. tabbed:: fileOpenInput

    .. tab:: Question

        There are five errors in the code below.
        Fix the code to ask a user for a file, open "mbox-short.txt", and count the lines that start with
        ``Received:``.

        .. activecode:: fileOpenInputq
            :datafile: mbox-short.txt
            :autograde: unittest

            count = 1
            fname = input('Enter the file name: '
            fhand = open(file)
            for line in fhand:
                if line.endswith('Received:'):
                count = count + 1
            fhand.close()
            print('There were', count, 'lines starting with "Received:" in the file', fname)

            =====
            from unittest.gui import TestCaseGui
            class myTests(TestCaseGui):

                def testOne(self):
                    self.assertEqual(count,243,"Remember to start counting from zero")

            myTests().main()

    .. tab:: Answer

        .. activecode:: fileOpenInputa

            count = 0 # Start counting from zero
            fname = input('Enter the file name: ') # Close parentheses
            fhand = open(fname) # Open the correct file name

            for line in fhand:
                if line.startswith('Received:'):
                # Check at the beginning of the line, not the end
                    count = count + 1 # Correct indentation.
            fhand.close()
            print('There were', count, 'lines starting with "Received:" in the file', fname)
