Practice Problems - Regular Expressions
-----------------------------------------------------

.. hparsons:: hp-char-set-p1
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Please write a regex that matches both "gray" and "grey".
    ~~~~
    --blocks--
    gr
    [ae]
    y
    a


.. hparsons:: hp-upper-lower-p2
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Please write a regex that matches a word that starts with an uppercase letter followed by at least one lowercase letter, like "Apple", "Banana", or "Carrot".
    ~~~~
    --blocks--
    [A-Z]
    [a-z]
    +
    \w


.. hparsons:: hp-digits-p3
    :language: regex
    :randomize:
    :blockanswer: 0 1

    Please write a regex to capture numbers with 5-7 digits. For example: 48105, 103028, 1234567.
    ~~~~
    --blocks--
    \d
    {5,7}
    {5}


.. hparsons:: hp-vowels-letter-not-vowel-p4
    :language: regex
    :randomize:
    :blockanswer: 0 1 2 3

    Write a regex that captures words that start with a vowel (a, e, i, o, u), can have any number of characters from a-z after the vowel (including zero), and end with a consonant (any letters that are not a, e, i, o, u).
    For example, it should match "unicorn", "it", and "element".
    ~~~~
    --blocks--
    [aeiou]
    [a-z]
    * least
    [^aeiou]
    +

.. hparsons:: hp-url-p5
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Please write a regex to capture a URL that only consists of characters, numbers, underscore, and dots.
    For example: www.abc.com, def_ghi.com, a678.cn
    Note that dots(".") should not appear consecutively, and should not appear as the first or last character. The dot must appear at least once.
    ~~~~
    --blocks--
    (?:\w+\.)
    +
    \w+
    \.
