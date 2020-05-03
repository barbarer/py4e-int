
Variables, expressions, and statements
======================================

Values and types
----------------

\index{value}
\index{type}
\index{string}

A *value* is one of the basic things a program works
with, like a letter or a number. You can print values in Python.  See what happens when you run the following code.

.. activecode:: 02-ac-1-vars2

   print(17)
   print('Hello World!')

These values belong to different *types*\ : 17
is an integer, and "Hello World!" is a *string*\ , so
called because it contains a "string" of letters. You can identify strings because they are enclosed in quotation
marks.

If you are not sure what type a value has, use the type function to find out.

.. activecode:: 02-ac-2-var-types

   type('Hello, World!')
   type(17)
   type(3.2)

Not surprisingly, strings belong to the type ``str`` and
integers belong to the type ``int``. Less obviously, numbers
with a decimal point belong to a type called ``float``\ , because
these numbers are represented in a format called *floating
point*.

\index{type}
\index{string type}
\index{class!str}
\index{int type}
\index{class!int}
\index{float type}
\index{class!float}


What about values like "17" and "3.2"? They look like numbers, but
they are in quotation marks like strings.

\index{quotation mark}

.. activecode:: 02-ac-2-num-strs

   type('17')
   type('3.2')

They're strings.

When you type a large integer, you might be tempted to use commas
between groups of three digits, as in 1,000,000. This is
not a legal integer in Python, but it is legal:

.. activecode:: 02-ac-3-num-commas

   print(1,000,000)

Well, that's probably not what you expected! Python interprets
1,000,000 as a comma-separated sequence of integers, which
it prints with spaces between.

\index{semantic error}
\index{error!semantic}
\index{error message}

This is the first example we have seen of a semantic error: the code
runs without producing an error message, but it doesn't do the "right"
thing.
