Debugging
---------

When you are reading and writing files, you might run into problems with
whitespace. These errors can be hard to debug because spaces, tabs, and
newlines are normally invisible:

.. activecode:: fileWhiteSpace
    :caption: Printing using tabs and newlines

    s = '1 2\t 3\n 4'
    print(s)

The built-in function ``repr`` can help. It takes any object as
an argument and returns a string representation of the object. For
strings, it represents whitespace characters with backslash sequences:

.. activecode:: fileRepr
    :caption: Printing using repr

    print(repr(s))


This can be helpful for debugging.

One other problem you might run into is that different systems use
different characters to indicate the end of a line. Some systems use a
newline, represented ``\n``. Others use a return character, represented
``\r``. Some use both. If you move files between different systems, these
inconsistencies might cause problems.

For most systems, there are applications to convert from one format to
another. You can find them (and read more about this issue) at
`wikipedia.org/wiki/Newline <wikipedia.org/wiki/Newline>`_. Or, of course,
you could write one yourself.
