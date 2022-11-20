Writing files
-------------
.. index::
    pair: File; Writing
    single: Newline
    pair: Method; close

To write a file, you have to open it with mode "w" as a second
parameter:

.. code-block:: python

    >>> fout = open('output.txt', 'w')
    >>> print(fout)
    <_io.TextIOWrapper name='output.txt' mode='w' encoding='cp1252'>


If the file already exists, opening it in write mode clears out the old
data and starts fresh, so be careful! If the file doesn't exist, a new
one is created.

The ``write`` method of the file handle object puts data into
the file, returning the number of characters written. The default write
mode is text for writing (and reading) strings.

.. code-block:: python

    >>> line1 = "This here's the wattle,\n"
    >>> fout.write(line1)
    24


Again, the file object keeps track of where it is, so if you call
``write`` again, it adds the new data to the end.

.. mchoice:: fileWriteMC
    :practice: T
    :answer_a: read
    :answer_b: write
    :answer_c: close
    :answer_d: tell
    :correct: b
    :feedback_a: The read method returns the file content.
    :feedback_b: The write method writes the specified string to the file.
    :feedback_c: The close method closes the file.
    :feedback_d: The tell method returns the current file position.

    Which of the following methods will put data into a file?

We must make sure to manage the ends of lines as we write to the file by
explicitly inserting the newline character when we want to end a line.
The ``print`` statement automatically appends a newline, but
the ``write`` method does not add the newline automatically.

.. code-block:: python

    >>> line2 = 'the emblem of our land.\n'
    >>> fout.write(line2)
    24


When you are done writing, you have to close the file to make sure that
the last bit of data is physically written to the disk so it will not be
lost if the power goes off.

.. code-block:: python

    >>> fout.close()


We should close the files which we open for read as well, but we can be a
little sloppy if we are only opening a few files since Python makes sure
that all open files are closed when the program ends. When we are
writing files, we want to explicitly close the files so as to leave
nothing to chance.

.. parsonsprob:: fileWritePP
    :practice: T
    :adaptive:
    :numbered: left

    Put the following pieces of code in order so a file is opened for writing,
    two lines are defined, two lines are
    written to the file, and the file is closed. Watch out for extra code blocks.
    -----
    fout = open("myfile.txt", "w")
    =====
    fout = open("myfile.txt", "r") #paired
    =====
    line1 = "this is the first line \n"
    line2 = "this is the second line"
    =====
    fout.write(line1)
    =====
    fout(write(line1)) #distractor
    =====
    fout.write(line2)
    =====
    fout.write(second) #paired
    =====
    fout.close()

.. clickablearea:: fileWriteCA
    :practice: T
    :question: Click the errors in this code block. It should open a file, write a line, and close the file.
    :iscode:
    :feedback: Keep in mind names and syntax!

    :click-incorrect:fout:endclick: = open(:click-incorrect:'output.txt':endclick:, :click-correct:'r':endclick:)
    :click-incorrect:line1:endclick: = :click-incorrect:"This here's the wattle,\n":endclick:
    :click-correct:file:endclick::click-incorrect:.write:endclick:(:click-correct:line2:endclick:)
    :click-incorrect:fout.close:endclick::click-correct:[]:endclick:
