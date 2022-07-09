Debugging
---------
.. index::
    single: Debugging
    single: Whitespace
    pair: Repr; Function
    single: String Representation
    single: End of Line Character

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

    s = '1 2\t 3\n 4'
    print(repr(s))


This can be helpful for debugging.

.. fillintheblank:: fileDebugFITBrepr

    The ``repr`` function takes an object as an argument and returns what type of representation of the object?

    - :[Ss]tring: The repr function takes an object as an argument and returns a string representation of the object.
      :.*: Try again.

One other problem you might run into is that different systems use
different characters to indicate the end of a line. Some systems use a
newline, represented ``\n``. Others use a return character, represented
``\r``. Some use both. If you move files between different systems, these
inconsistencies might cause problems.

.. mchoice:: fileDebugMCreturn
    :practice: T
    :multiple_answers:
    :answer_a: \n
    :answer_b: \t
    :answer_c: \r
    :answer_d: \'
    :correct: a,c
    :feedback_a: This is the symbol for a newline.
    :feedback_b: This is the symbol for a tab.
    :feedback_c: This is the symbol for the return character.
    :feedback_d: This is the symbol for the ' character in a string.

    Which of the following symbols create newlines, or returns, in files? Select all that apply.

For most systems, there are applications to convert from one format to
another. You can find them (and read more about this issue) at
`wikipedia.org/wiki/Newline <wikipedia.org/wiki/Newline>`_. Or, of course,
you could write one yourself.
