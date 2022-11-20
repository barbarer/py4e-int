Searching through a file
------------------------
.. index::
    pair: Filter; Pattern
    pair: Search; File

When you are searching through data in a file, it is a very common
pattern to read through a file, ignoring most of the lines and only
processing lines which meet a particular condition. We can combine the
pattern for reading a file with string methods to build simple search
mechanisms.

For example, if we wanted to read a file and only print out lines which
started with the prefix "From:", we could use the string method
*startswith* to select only those lines with the desired
prefix:

.. activecode:: fileFrom
    :caption: Printing lines starting with "From:"
    :datafile: mbox-short.txt

    fhand = open('mbox-short.txt')
    for line in fhand:
        if line.startswith('From:'):
            print(line)
    fhand.close()


The output looks great since the only lines we are seeing are those
which start with "From:", but why are we seeing the extra blank lines?
This is due to that invisible *newline* character. Each
of the lines ends with a newline, so the ``print`` statement
prints the string in the variable *line* which includes a
newline and then ``print`` adds *another* newline, resulting in
the double spacing effect we see.

We could use line slicing to print all but the last character, but a
simpler approach is to use the *rstrip* method which
strips whitespace from the right side of a string as follows:

.. activecode:: filerstrip
    :caption: Using rstrip with lines in a file
    :datafile: mbox-short.txt

    fhand = open('mbox-short.txt')
    for line in fhand:
        line = line.rstrip()
        if line.startswith('From:'):
            print(line)
    fhand.close()

.. mchoice:: file-search-mc-rstrip
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again.
    :feedback_b: rstrip only removes whitespace from the right side of a string, strip removes whitespace from the left and right side of a string.

    True or False? The ``rstrip`` method removes all whitespace from a string.

As your file processing programs get more complicated, you may want to
structure your search loops using ``continue``. The basic idea
of the search loop is that you are looking for "interesting" lines and
effectively skipping "uninteresting" lines. And then when we find an
interesting line, we do something with that line.

We can structure the loop to follow the pattern of skipping
uninteresting lines as follows:

.. activecode:: fileInteresting
    :caption: Skipping uninteresting lines in a file
    :datafile: mbox-short.txt

    fhand = open('mbox-short.txt')
    for line in fhand:
        line = line.rstrip()
        # Skip 'uninteresting lines'
        if not line.startswith('From:'):
            continue
            # Process our 'interesting' line
        print(line)
    fhand.close()

The output of the program is the same. In English, the uninteresting
lines are those which do not start with "From:", which we skip using
``continue``. For the "interesting" lines (i.e., those that
start with "From:") we perform the processing on those lines.

We can use the ``find`` string method to simulate a text editor
search that finds lines where the search string is anywhere in the line.
Since ``find`` looks for an occurrence of a string within
another string and either returns the position of the string or -1 if
the string was not found, we can write the following loop to show lines
which contain the string "@uct.ac.za" (i.e., they come from the
University of Cape Town in South Africa):

.. activecode:: fileFind
    :caption: Finding and printing specific lines from a file
    :datafile: mbox-short.txt

    fhand = open('mbox-short.txt')
    for line in fhand:
        line = line.rstrip()
        if line.find('@uct.ac.za') == -1:
            continue
        print(line)
    fhand.close()


.. mchoice:: file-search-mc-find
    :practice: T
    :answer_a: The value was at the end of the string.
    :answer_b: The value was the last element of a string.
    :answer_c: The value was the at the beginning of the string.
    :answer_d: The value was not found in the string.
    :correct: d
    :feedback_a: -1 is the last index for a slice, but find only returns positive numbers for the index of a value.
    :feedback_b: -1 is the last index for a slice, but find only returns positive numbers for the index of a value.
    :feedback_c: -1 is the last index for a slice, but find only returns positive numbers for the index of a value.
    :feedback_d: If find returns -1, the value is not in the string.

    When using the string method ``find``, what does a return of ``-1`` mean?
