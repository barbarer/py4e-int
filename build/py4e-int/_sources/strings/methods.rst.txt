String methods
--------------
.. index::
    pair: String; Method
    pair: Dot; Notation
    pair: Parentheses; Empty
    single: Invocation
    pair: Optional; Argument
    pair: Count; Method


Strings are an example of Python *objects*. An object
contains both data (the actual string itself) and
*methods*, which are effectively functions that are built
into the object and are available to any *instance* of
the object.

Python has a function called ``dir`` which lists all the methods
available for an object. The ``type`` function returns the type
of an object.

.. activecode:: str-methods
    :caption: String methods through Python interpreter

    stuff = 'Hello world'
    print(type(stuff))
    print(dir(stuff))


While the ``dir`` function lists the methods, and you can use
``help`` to get some simple documentation on a method, a better
source of documentation for string methods would be
https://docs.python.org/library/stdtypes.html#string-methods.

.. code-block:: Python

    >>> help(str.capitalize)
    Help on method_descriptor:

    capitalize(...)
        S.capitalize() -> str

        Return a capitalized version of S, i.e. make the first character
        have upper case and the rest lower case.
    >>>

.. mchoice:: str-method-mc-dir
    :practice: T
    :answer_a: dir()
    :answer_b: print()
    :answer_c: type()
    :answer_d: object()
    :correct: a
    :feedback_a: Correct! dir() will list all the methods that can be used with an object.
    :feedback_b: Incorrect! print() prints whatever is within the parentheses. Try again.
    :feedback_c: Incorrect! type() returns the type of the object within its parentheses. Try again.
    :feedback_d: Incorrect! object() returns a new featureless object. Try again.

    What function lists the methods available for an object?

Calling a *method* is similar to calling a function (it
takes arguments and returns a value), but the syntax is different. We call
a method by typing the variable name, adding a period, and then adding the
method call.

For example, the method ``upper`` takes a string and returns a
new string with all uppercase letters. Instead of the function
syntax, ``upper(word)``, it uses the method syntax, ``word.upper()``.

.. activecode:: str-methodUpper
    :caption: Using the method "upper"

    word = 'banana'
    new_word = word.upper()
    print(new_word)


This form of dot notation specifies the name of the method,
``upper``, and the name of the string to apply the method to,
``word``. The empty parentheses indicate that this method takes
no argument.

A method call is called an *invocation*; in this case, we
would say that we are invoking ``upper`` on the
``word``.

For example, there is a string method named ``find`` that
searches for the position of one string within another:

.. activecode:: str-methodFind
    :caption: Using the method "find"

    word = 'banana'
    index = word.find('a')
    print(index)

In this example, we invoke ``find`` on ``word`` and
pass the letter we are looking for as a parameter.

The ``find`` method can find substrings as well as characters:

.. code-block:: python

    >>> word.find('na')
    2


It can also take as a second argument the index where it should start looking:

.. code-block:: python

    >>> word.find('na', 3)
    4


One common task is to remove white space (spaces, tabs, or newlines)
from the beginning and end of a string using the ``strip``
method:

.. activecode:: str-stripMethod
    :caption: Using the method "strip"

    line = '  Here we go  '
    print(line.strip())


Some methods, such as ``startswith``, return boolean values:

.. activecode:: str-startswith
    :caption: Using the method "startswith"

    line = 'Have a nice day'
    print(line.startswith('Have'))
    print(line.startswith('h'))


You will note that ``startswith`` requires case to match, so
sometimes we'll convert a line to lowercase using the ``lower``
method before we do any checking:

.. activecode:: str-methodStartsWith
    :caption: Using the method "startswith" and "lower"

    line = 'Have a nice day'
    line.startswith('h')

    print(line.lower())

    print(line.lower().startswith('h'))


In the last example, the method ``lower`` is called. Then, we
use ``startswith`` to see if the resulting lowercase string
starts with the letter "h". As long as we are careful with the order, we
can make multiple method calls in a single expression.

.. tabbed:: str-method-banana

        .. tab:: Question

           Fix the following function. It should use the string method ``count``
           to count the number of times a double s (ss) appears in a word. There are 3 mistakes to fix.

           .. activecode::  str-method-bananaq
               :nocodelens:

               def countSS(word):
                   counter == count(word, 'ss'):
                   return counter

               ====
               from unittest.gui import TestCaseGui
               class myTests(TestCaseGui):

                   def testOne(self):
                       self.assertEqual(countSS('banana'),0,"Tested countSS on input 'banana'")
                       self.assertEqual(countSS('Mississippi'),2,"Tested countSS on input 'Mississippi'")
                       self.assertEqual(countSS('scissors'),1,"Tested countSS on input 'scissors'")
                       self.assertEqual(countSS('methods'),0,"Tested countSS on input 'methods'")

               myTests().main()

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: strBananaDisc

.. mchoice:: str-method-mc-cheer
    :practice: T
    :answer_a: 0
    :answer_b: 1
    :answer_c: 2
    :answer_d: 3
    :correct: d
    :feedback_a: Incorrect! Both 'e' and 'b' are present in the string. Try again.
    :feedback_b: Incorrect! There is only one 'b', but there are multiple e's as well. Try again.
    :feedback_c: Incorrect! There are two e's, but there is a 'b' as well. Try again.
    :feedback_d: Correct! There are two e's and one b, so added together, this will print "3".


    What is printed by the following statements?

    .. code-block:: python

      s = "let's go blue!"
      print(s.count("e") + s.count("b"))


.. dragndrop:: str-method-dnd-use
    :practice: T
    :feedback: If you need help, try looking online for the effects of these methods.
    :match_1: capitalize()|||Returns a copy of a string with its first character capitalized and the rest lowercased.
    :match_2: count()|||Returns the number of non-overlapping occurrences of a substring in the range [start, end].
    :match_3: endswith()|||Returns True if a string ends with the specified suffix. Otherwise, it returns False.
    :match_4: find()|||Returns the lowest index in a string where a substring is found. An optional parameter restricts the search to a slice of the string.
    :match_5: strip()|||Returns a copy of a string with the leading and trailing whitespace characters removed.
    :match_6: upper()|||Returns a copy of a string with all characters converted to uppercase.

    Match these common string methods with their function. Hint: many of the names of these methods are hints to what they do!
