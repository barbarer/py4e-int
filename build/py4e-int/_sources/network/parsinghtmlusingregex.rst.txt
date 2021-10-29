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

.. mchoice:: network_regex_tf
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again. ? is not greedy.
    :feedback_b: Correct! ? is not greedy because it only selects one or zero of the preceding character.

    True or False? In regex, ``?`` is a greedy character, meaning it will select as many characters as it can.

We add parentheses to our regular expression to indicate which part of
our matched string we would like to extract, and produce the following
program:

.. activecode:: urlregex
    :language: python3

    # Search for link values within URL input
    import urllib.request, urllib.parse, urllib.error
    import re
    import ssl

    # Ignore SSL certificate errors
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    url = "https://docs.python.org"
    html = urllib.request.urlopen(url, context=ctx).read()
    links = re.findall(b'href="(http[s]?://.*?)"', html)
    for link in links:
        print(link.decode())

The ``ssl`` library allows this program to access web sites that strictly
enforce HTTPS. The ``read`` method returns HTML source code as a bytes object
instead of returning an HTTPResponse object. The ``findall`` regular expression
method will give us a list of all of the strings that match our
regular expression, returning only the link text between the double quotes.

Regular expressions work very nicely when your HTML is well formatted
and predictable. But since there are a lot of "broken" HTML pages out
there, a solution only using regular expressions might either miss some
valid links or end up with bad data.

This can be solved by using a robust HTML parsing library.

.. mchoice:: network_regex_tf2
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again.
    :feedback_b: Correct! regex only finds exact matches, so there is a lot of room for error.

    True or False? Using regex with HTML will always select the necessary HTML pages.
