Parsing HTML using regular expressions
--------------------------------------

One simple way to parse HTML is to use regular expressions to repeatedly
search for and extract substrings that match a particular pattern.

Here is a simple web page:

.. code-block:: {.html}

   <h1>The First Page</h1>
   <p>
   If you like, you can switch to the
   <a href="http://www.dr-chuck.com/page2.htm">
   Second Page</a>.
   </p>


We can construct a well-formed regular expression to match and extract
the link values from the above text as follows:

.. code-block::

   href="http[s]?://.+?"


Our regular expression looks for strings that start with
"href=\"http://" or "href=\"https://", followed by one or more characters (\ ``.+?``\ ),
followed by another double quote. The question mark behind the ``[s]?`` indicates
to search for the string "http" followed by zero or one "s". 

The question mark added to the ``.+?`` indicates
that the match is to be done in a "non-greedy" fashion instead of a
"greedy" fashion. A non-greedy match tries to find the
*smallest* possible matching string and a greedy match
tries to find the *largest* possible matching string.

\index{greedy}
\index{non-greedy}

We add parentheses to our regular expression to indicate which part of
our matched string we would like to extract, and produce the following
program:

\index{regex!parentheses}
\index{parentheses!regular expression}

\VerbatimInput{../code3/urlregex.py}

The ``ssl`` library allows this program to access web sites that strictly
enforce HTTPS. The ``read`` method returns HTML source code as a bytes object 
instead of returning an HTTPResponse object. The ``findall`` regular expression
method will give us a list of all of the strings that match our
regular expression, returning only the link text between the double quotes.

When we run the program and input a URL, we get the following output:

.. code-block::

   Enter - https://docs.python.org
   https://docs.python.org/3/index.html
   https://www.python.org/
   https://docs.python.org/3.8/
   https://docs.python.org/3.7/
   https://docs.python.org/3.5/
   https://docs.python.org/2.7/
   https://www.python.org/doc/versions/
   https://www.python.org/dev/peps/
   https://wiki.python.org/moin/BeginnersGuide
   https://wiki.python.org/moin/PythonBooks
   https://www.python.org/doc/av/
   https://www.python.org/
   https://www.python.org/psf/donations/
   http://sphinx.pocoo.org/


Regular expressions work very nicely when your HTML is well formatted
and predictable. But since there are a lot of "broken" HTML pages out
there, a solution only using regular expressions might either miss some
valid links or end up with bad data.

This can be solved by using a robust HTML parsing library.