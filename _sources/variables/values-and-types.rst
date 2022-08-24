Values and types
----------------
.. index::
    single: Value
    single: Type
    single: String
    single: Quotation Mark
    pair: Class; Str
    pair: Class; Int
    pair: Class; Float
    single: Semantic Error
    single: Error Message



A *value* is one of the basic things a program works
with, like a letter or a number. You can print values in Python.  See what happens
when you run the following code.

.. activecode:: var-ac-1-vars2
    :nocodelens:
    :caption: Printing values in Python

    print(17)
    print('Hello World!')

These values belong to different *types*: 17
is an integer, and "Hello World!" is a *string*, so
called because it contains a "string" of letters. You can identify strings because
they are enclosed in quotation marks.

If you are not sure what type a value has, use the type function to find out.

.. activecode:: var-ac-2-var-types
    :nocodelens:
    :caption: Printing types in Python

    print(type('Hello, World!'))
    print(type(17))
    print(type(3.2))

Not surprisingly, strings belong to the type ``str`` and
integers belong to the type ``int``. Less obviously, numbers
with a decimal point belong to a type called ``float``, because
these numbers are represented in a format called *floating
point*.

What about values like "17" and "3.2"? They look like numbers, but
they are in quotation marks like strings.

.. mchoice:: var-value-mc-string
    :practice: T
    :answer_a: float
    :answer_b: integer (int)
    :answer_c: string (str)
    :answer_d: boolean (bool)
    :correct: c
    :feedback_a: "3.2" has a decimal but "17" does not, is there an option that would include both values?
    :feedback_b: What do the quotation marks mean?
    :feedback_c: Quotation marks imply that the value is a string.
    :feedback_d: A boolean value represents either *True* or *False*.

    The values "17" and "3.2" are what type?

They're strings. We can check this using the active codeblock below.

.. activecode:: var-ac-2-num-strs
    :nocodelens:
    :caption: Printing strings of numbers in Python

    print(type('17'))
    print(type('3.2'))

When you type a large integer, you might be tempted to use commas
between groups of three digits, as in 1,000,000. This is
not a legal integer in Python, but it is legal:

.. activecode:: var-ac-3-num-commas
    :nocodelens:
    :caption: Printing integers with commas in Python

    print(1,000,000)

Well, that's probably not what you expected! Python interprets
1,000,000 as a comma-separated sequence of integers, which
it prints with spaces between.

This is the first example we have seen of a semantic error: the code
runs without producing an error message, but it doesn't do the "right"
thing.

.. mchoice:: var-value-mc-int
    :practice: T
    :answer_a: print("1,000,000")
    :answer_b: print(1000000)
    :answer_c: print(1,000,000)
    :answer_d: print 1000000
    :correct: b
    :feedback_a: We are trying to print an integer, what do the quotation marks do?
    :feedback_b: To print an integer don't use commas or quotations.
    :feedback_c: See the example above, commas in between the digits produce spaces.
    :feedback_d: Remember to use parentheses to print!

    How would you print the *integer* ``1,000,000``?


.. dragndrop:: var-value-dnd-type
    :practice: T
    :feedback: Try using type(x) in terminal or your python interpreter.
    :match_1: "Hello, World!"|||string (str)
    :match_2: 17|||integer (int)
    :match_3: 3.2|||float
    :match_4: a|||character (char)
    :match_5: True|||boolean (bool)

    Drag and drop the values to match each with its type.
