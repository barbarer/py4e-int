String methods
--------------

Strings are an example of Python *objects*. An object
contains both data (the actual string itself) and
*methods*, which are effectively functions that are built
into the object and are available to any *instance* of
the object.

Python has a function called ``dir`` which lists the methods
available for an object. The ``type`` function shows the type
of an object and the ``dir`` function shows the available
methods.

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

Calling a *method* is similar to calling a function (it
takes arguments and returns a value) but the syntax is different. We call
a method by appending the method name to the variable name using the
period as a delimiter.

For example, the method ``upper`` takes a string and returns a
new string with all uppercase letters:

Instead of the function syntax ``upper(word)``, it uses the
method syntax ``word.upper()``.

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


It can take as a second argument the index where it should start:

.. code-block:: python

   >>> word.find('na', 3)
   4


One common task is to remove white space (spaces, tabs, or newlines)
from the beginning and end of a string using the ``strip``
method:

.. activecode:: str-stripMethod
   :caption: Using the method "strip"

   line = '  Here we go  '
   line.strip()


Some methods such as *startswith* return boolean values.

.. activecode:: str-startswith
   :caption: Using the method "startswith"

   line = 'Have a nice day'
   line.startswith('Have')
   line.startswith('h')


You will note that ``startswith`` requires case to match, so
sometimes we take a line and map it all to lowercase before we do any
checking using the ``lower`` method.

.. activecode:: str-methodStartsWith
   :caption: Using the method "startswith" and "lower"

   line = 'Have a nice day'
   line.startswith('h')

   print(line.lower())
   line.lower().startswith('h')


In the last example, the method ``lower`` is called and then we
use ``startswith`` to see if the resulting lowercase string
starts with the letter "h". As long as we are careful with the order, we
can make multiple method calls in a single expression.

.. mchoice:: str-method-mc-cheer
   :practice: T
   :answer_a: 0
   :answer_b: 2
   :answer_c: 3
   :correct: c
   :feedback_a: There are definitely e and b characters.
   :feedback_b: There are 2 e characters but what about b?
   :feedback_c: Yes, add the number of e characters and the number of b characters.


   What is printed by the following statements?

   .. code-block:: python

      s = "let's go blue!"
      print(s.count("e") + s.count("b"))

.. mchoice:: str-method-mc-dir
   :practice: T
   :answer_a: dir
   :answer_b: print
   :answer_c: list
   :correct: a
   :feedback_a: Correct! dir() will list all the methods that can be used with an object.
   :feedback_b: Try again! The function print() prints whatever is within the parentheses.
   :feedback_c: Try again. list is actually a mutable sequence type,

   What function lists the methods available for an object?


.. tabbed:: str-method-banana

        .. tab:: Question

           Use the string method ``count`` to count the number of times the letter "a" occurs in "banana".

           .. activecode::  str-method-bananaq
               :nocodelens:


        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: strBananaDisc

.. dragndrop:: str-method-dnd-use
    :practice: T
    :feedback: Many of the names of these methods are hints to what they do!
    :match_1: capitalize|||Return a copy of the string with its first character capitalized and the rest lowercased.
    :match_2: count|||Return the number of non-overlapping occurrences of substring sub in the range [start, end].
    :match_3: endswith|||Return True if the string ends with the specified suffix, otherwise return False.
    :match_4: find|||Return the lowest index in the string where substring sub is found within the slice s[start:end].
    :match_5: strip|||Return a copy of the string with the leading and trailing characters removed.
    :match_6: upper|||Return a copy of the string with all the cased character converted to uppercase.

    Match these common string methods with their function.
