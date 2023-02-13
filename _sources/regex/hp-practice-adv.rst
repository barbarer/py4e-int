Practice Problems - Advanced Regular Expressions
-----------------------------------------------------

.. hparsons:: hpa-day-p1
    :language: regex
    :randomize:
    :blockanswer: 0 1 2 3 4 5 6 7 8

    Create a regex that finds dates in the format MM/DD/YY or MM/DD/YYYY and returns
    just the year part.
    ~~~~
    --blocks--
    \d{2}
    /
    \d{2}
    /
    (
    \d{2}
    |
    \d{4}
    )

.. hparsons:: hpa-phone-p2
    :language: regex
    :randomize:
    :blockanswer: 0 1 2 3 4 5 6

    Create a regex that finds phone numbers like 333-232-3403 or (333) 232 3403.
    ~~~~
    --blocks--
    \(?
    \d{3}
    \)?
    [-\s]
    \d{3}
    [-\s]
    \d{4}
    (?
    )?
    (-|/s)

.. hparsons:: hpa-start-str-p3
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Create a regex that returns only the first alphabetic word (upper and lower case) at the start of the string.
    ~~~~
    --blocks--
    ^
    [a-zA-Z]
    +
    $
    \w
    *

.. hparsons:: hpa-price-p4
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Replace 'YOUR_REGEX' below with a regex that matches any price in the form of $3.45 or $23.32 or $400.

    .. code-block:: python

        def find_price(content):
            return re.findall('YOUR_REGEX', content)

    ~~~~
    --blocks--
    \$\d+
    (?:\.\d\d)
    ?
    (\.\d\d)
    *


.. hparsons:: hpa-url-p5
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Create a regex below that captures a URL that only consists of characters, numbers, underscore, and dots.
    For example: www.abc.com, def_ghi.com, a678.cn
    Note that dots(".") should not appear consecutively, and should not appear as the first or last character. The dot must appear at least once.
    ~~~~
    --blocks--
    (?:\w+\.)
    +
    \w+
    \.
    *

.. hparsons:: hpa-vowels-letter-not-vowel-p6
    :language: regex
    :randomize:
    :blockanswer: 0 1 2 3

    Construct a regex that captures words that start with a vowel (a, e, i, o, u), can have any number of characters from a-z after the vowel (including zero), and end with a consonant (any letters that are not a, e, i, o, u).
    For example, it should match "unicorn", "it", and "element".
    ~~~~
    --blocks--
    [aeiou]
    [a-z]
    *
    [^aeiou]
    +
    [!aeiou]