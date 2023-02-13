Practice Problems - Regular Expressions
-----------------------------------------------------

.. hparsons:: hp-optional_cats
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Construct a regex that matches both ``cat`` and ``cats``.
    ~~~~
    --blocks--
    cat
    s
    ?
    *

.. hparsons:: hp-one-to-many-digits
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Construct a regex that matches ``abc`` followed by zero to many digits (0-9).
    ~~~~
    --blocks--
    abc
    \d
    *
    /d
    +

.. hparsons:: hp-char-set-gray-grey
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Construct a regex that matches both ``gray`` and ``grey``.
    ~~~~
    --blocks--
    gr
    [ae]
    y
    {ae}

.. hparsons:: hp-char-set-br-any-char-3
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Construct a regex that matches ``br`` followed by any single character except for a new line and then a ``3``.
    ~~~~
    --blocks--
    br
    .
    3
    *
    \3

.. hparsons:: hp-char-t-dot-forward
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Construct a regex that matches ``t.forward``.
    ~~~~
    --blocks--
    t
    \.
    forward
    .

.. hparsons:: hp-upper-lower-word
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Construct a regex that matches a word that starts with an uppercase letter followed by at least one lowercase letter, like "Apple", "Banana", or "Carrot".
    ~~~~
    --blocks--
    [A-Z]
    [a-z]
    +
    \w
    *

.. hparsons:: hp-eight-word-chars
    :language: regex
    :randomize:
    :blockanswer: 0 1 

    Construct a regex that matches eight word characters (letter, digit, or underscore).
    ~~~~
    --blocks--
    \w
    {8}
    (8)
    \W

.. hparsons:: hp-alpha-one-plus-space-digits-two-to-four
    :language: regex
    :randomize:
    :blockanswer: 0 1 2 3 4 

    Construct a regex that matches one or more lowercase letters (a-z) followed by a space character and then two to four digits.
    ~~~~
    --blocks--
    [a-z]
    +
    \s
    \d
    {2,4}
    *
    \D 
    {2:4}

.. hparsons:: hp-digits-5-7
    :language: regex
    :randomize:
    :blockanswer: 0 1

    Construct a regex to capture numbers with 5-7 digits. For example: 48105, 103028, 1234567.
    ~~~~
    --blocks--
    \d
    {5,7}
    /d
    {5:7}


.. hparsons:: hp-match-two-digits-period-letters
    :language: regex
    :randomize:
    :blockanswer: 0 1 2 3 4

    Construct a regex that captures strings that have two digits followed by a period and then four letters from a to z.
    ~~~~
    --blocks--
    \d
    {2}
    \.
    [a-z]
    {4}
    .
    [2]
    \w
    [4]
