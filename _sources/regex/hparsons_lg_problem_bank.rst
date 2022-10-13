Problem Bank for Practice Problems and Test Problems
-----------------------------------------------------




.. mchoice:: hparsons_lg_regex_test_mcq_1

    What does ``[^abc]`` mean?

    -   Match a character that is one of ^, a, b, or c.

        -

    -   Match a character that is not one of ^, a, b, or c.

        -

    -   Match a character that is not one of a, b, or c.

        +

    -   Match 3 characters in the sequence of "abc".

        -


.. mchoice:: hparsons_lg_regex_test_mcq_2

    What does the pattern ``\d`` match?

    -   Matches any digit (0, 1, ..., 9).

        +

    -   Matches any date (yyyy-mm-dd).

        -

    -   Matches a dash.

        -

    -   Matches a dot.

        -

    -   I don't know.

        -

.. mchoice:: hparsons_lg_regex_test_mcq_3

    Which one of the following patterns should I use to treat "abc" as a group for repeating, but not make re.findall only return the content in the group?


    -   [abc]

        -

    -   (abc)

        -

    -   (?abc)

        -

    -   (?:abc)

        +

    -   I don't know.

        -

.. mchoice:: hparsons_lg_regex_test_mcq_4

    Which of the following best describes what ``\w`` matches?

    -   Any lowercase letter

        - It matches more than this

    -   Any lowercase or uppercase letter

        - It matches more than this

    -   Any lowercase or uppercase letter, or underscore

        - It matches more than this

    -   Any lowercase or uppercase letter, or underscore, or digit from 0-9

        + It matches any lowercase or uppercase letter, or underscore, or digit from 0-9

    -   I don't know.

        - That is okay


.. mchoice:: hparsons_lg_regex_test_mcq_5

    Which of the following patterns would match "A"s separated by individual "B"s in between, for example, "AAABAABAA", "ABAAA"?
    Note that "B" should not appear consecutively, and should not appear as the first or last character. B must appear at least once.

    -   (?:A+B)+A+

        +

    -   (?:A+B)*A+

        -

    -   (?:AB)+A+

        -

    -   (?:A*B)+A+

        -

    -   I don't know.

        -


.. mchoice:: hparsons_lg_regex_test_mcq_6

    Which of the following would match both words "attend" and "attendee"?

    -   attend|ee

        -

    -   attend(ee){1,}

        -

    -   attend(?:ee)?

        +

    -   attend[ee]

        -

    -   I don't know.

        -
