Parsing lines
-------------

Usually when we are reading a file we want to do something to the lines
other than just printing the whole line. Often we want to find the
"interesting lines" and then *parse* the line to find
some interesting *part* of the line. What if we wanted to print out the
day of the week from those lines that start with "From "?

.. code-block::

   From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008


The ``split`` method is very effective when faced with this
kind of problem. We can write a small program that looks for lines where
the line starts with "From ", ``split`` those lines, and then
print out the third word in the line:

.. activecode:: listParsing
    :caption: Parsing a file using lists and split.

    fhand = open('mbox-short.txt')
    for line in fhand:
        line = line.rstrip()
        if not line.startswith('From '): continue
        words = line.split()
        print(words[2])

Later, we will learn increasingly sophisticated techniques for picking
the lines to work on and how we pull those lines apart to find the exact
bit of information we are looking for.
