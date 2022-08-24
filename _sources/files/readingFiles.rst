Reading files
-------------
.. index::
    pair: Reading; File
    single: Counter
    pair: File; Open

While the *file handle* object does not contain the actual data in the
file, it is quite easy to construct a ``for`` loop to read
through and count each of the lines in a file:

.. activecode:: fileLines
    :caption: Opening and counting the lines in a file
    :datafile: mbox-short.txt

    fhand = open('mbox-short.txt')
    count = 0
    for line in fhand:
        count = count + 1
    print('Line Count:', count)

We can use the file handle object in a ``for`` loop.
Our ``for`` loop simply counts the number of lines in the file
and prints them out. The rough translation of the ``for`` loop
into English is, "for each line in the file represented by the file
handle object, add one to the ``count`` variable."

The reason that the ``open`` function does not read the entire
file is that the file might be quite large with many gigabytes of data.
The ``open`` statement takes the same amount of time regardless
of the size of the file. The ``for`` loop actually causes the
data to be read from the file.

When the file is read using a ``for`` loop in this manner,
Python takes care of splitting the data in the file into separate lines
using the newline character. Python reads each line through the newline
and includes the newline as the last character in the ``line``
variable for each iteration of the ``for`` loop.

Because the ``for`` loop reads the data one line at a time, it
can efficiently read and count the lines in very large files without
running out of main memory to store the data. The above program can
count the lines in any size file using very little memory since each
line is read, counted, and then discarded.

.. fillintheblank:: file-read-fitb-lines

    When using a for loop to read lines, how many lines are read at a time?

    - :([Oo]ne)|1: When using a for loop, the program reads each line individually.
      :.*: Try again.

If you know the file is relatively small compared to the size of your
main memory, you can read the whole file into one string using the
``read`` method on the file handle.

.. activecode:: fileSlice
    :caption: Using the read function with files
    :datafile: mbox-short.txt

    fhand = open('mbox-short.txt')
    inp = fhand.read()
    print(len(inp))
    print(inp[:20])


In this example, the entire contents (all 94,626 characters) of the file
*mbox-short.txt* are read directly into the variable
``inp``. We use string slicing to print out the first 20
characters of the string data stored in ``inp``.

When the file is read in this manner, all the characters including all
of the lines and newline characters are one big string in the variable
``inp``. It is a good idea to store the output of ``read`` as a variable
because each call to ``read`` exhausts the resource:

.. code-block:: python

    >>> fhand = open('mbox-short.txt')
    >>> print(len(fhand.read()))
    94626
    >>> print(len(fhand.read()))
    0


Remember that this form of the ``open`` function should only be used
if the file data will fit comfortably in the main memory of your computer.
If the file is too large to fit in main memory, you should write your
program to read the file in chunks using a ``for`` or ``while`` loop.

.. parsonsprob:: file-read-pp-code
    :practice: T
    :numbered: left
    :adaptive:

    Put the following code in order so that it uses a for each loop to read the file and print out the total number of lines.
    -----
    count = 0
    file_handler = open('textFile.txt')
    =====
    for line in file_handler:
    =====
        count = count + 1
    =====
    print('Line Count:', count)
