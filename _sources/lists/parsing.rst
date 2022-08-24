Parsing lines
-------------
.. index::
    pair: List; Parsing

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
    :available_files: mboxShort.txt

    fhand = open('mboxShort.txt')
    for line in fhand:
        line = line.rstrip()
        if not line.startswith('From '): continue
        words = line.split()
        print(words[2])

    # Continue is used here to skip the rest of the line if it doesn't start with "From "

Later, we will learn increasingly sophisticated techniques for picking
the lines to work on and how we pull those lines apart to find the exact
bit of information we are looking for.

.. fillintheblank:: listPars_fill1
    :practice: T

    When reading lines from a file, what list method can be used to select or print parts of a line?

    - :[Ss]plit(\(\))*: The split method can be used to separate interesting parts of a line.
      :.*: Try again.

.. parsonsprob:: listPars_PP_file
    :practice: T
    :adaptive:
    :numbered: left

    The following code should open a file and read through the lines, splitting them when a line starts
    with "Hello", then printing the second word in the line. Watch out for extra pieces of code and
    indentation.
    -----
    fhand = open('myFile.txt')
    =====
    for line in fhand:
    =====
    for line in myFile: #distractor
    =====
        line = line.rstrip() #remove trailing whitespace
    =====
        if not line.startswith('From '): continue #distractor
    =====
        if not line.startswith('Hello'): continue
    =====
        words = line.split()
    =====
        print(words[1])
    =====
        print(words[2]) #distractor
