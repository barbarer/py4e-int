Letting the user choose the file name
-------------------------------------

We really do not want to have to edit our Python code every time we want
to process a different file. It would be more usable to ask the user to
enter the file name string each time the program runs so they can use
our program on different files without changing the Python code.

This is quite simple to do by reading the file name from the user using
``input`` as follows:

\VerbatimInput{../code3/search6.py}
\begin{trinketfiles}
../code3/mbox-short.txt
\end{trinketfiles}

We read the file name from the user and place it in a variable named
``fname`` and open that file. Now we can run the program
repeatedly on different files.

.. code-block::

   python search6.py
   Enter the file name: mbox.txt
   There were 1797 subject lines in mbox.txt

   python search6.py
   Enter the file name: mbox-short.txt
   There were 27 subject lines in mbox-short.txt


Before peeking at the next section, take a look at the above program and
ask yourself, "What could go possibly wrong here?" or "What might our
friendly user do that would cause our nice little program to
ungracefully exit with a traceback, making us look not-so-cool in the
eyes of our users?"
