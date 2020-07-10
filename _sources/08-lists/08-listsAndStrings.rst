Lists and strings
-----------------

A string is a sequence of characters and a list is a sequence of values,
but a list of characters is not the same as a string. To convert from a
string to a list of characters, you can use ``list``:

.. activecode:: listString
    :caption: Converting a string to a list.

    s = 'spam'
    t = list(s)
    print(t)


Because ``list`` is the name of a built-in function, you should
avoid using it as a variable name. I also avoid the letter
"l" because it looks too much like the number "1".
So that's why I use "t".

The ``list`` function breaks a string into individual letters.
If you want to break a string into words, you can use the
``split`` method:

.. activecode:: listSplit
    :caption: Using split to separate a list.

    s = 'pining for the fjords'
    t = s.split()
    print(t)

    print(t[2])

Once you have used ``split`` to break the string into a list of
words, you can use the index operator (square bracket) to look at a
particular word in the list.

You can call ``split`` with an optional argument called a
*delimiter* that specifies which characters to use as
word boundaries. The following example uses a hyphen as a delimiter:

.. activecode:: listSplitDelimiter
    :caption: Using split with a delimiter to separate a list.

    s = 'spam-spam-spam'
    delimiter = '-'
    s.split(delimiter)

``join`` is the inverse of ``split``. It takes a list
of strings and concatenates the elements. ``join`` is a string
method, so you have to invoke it on the delimiter and pass the list as a
parameter:

.. activecode:: listJoin
    :caption: Using join to concatenate list elements.

    t = ['pining', 'for', 'the', 'fjords']
    delimiter = ' '
    delimiter.join(t)

In this case the delimiter is a space character, so ``join``
puts a space between words. To concatenate strings without spaces, you
can use the empty string, "", as a delimiter.
