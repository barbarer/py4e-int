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
    *
    [^aeiou]
    +

.. hparsons:: hp-match-period-p5
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Write a regex that captures strings that have two digits followed by a period and then four letters from a to z.
    ~~~~
    --blocks--
    \d{2}
    \.
    [a-z]{4}
    .
    \d[2]
    \w{4}
