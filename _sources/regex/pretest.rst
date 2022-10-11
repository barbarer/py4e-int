Pretest
----------

.. mchoice:: hparsons_lg_regex_pretest_mcq_1

    What does a regex [^abc] mean?

    -   Match a character that is one of ^, a, b, or c.

        -

    -   Match a character that is not one of ^, a, b, or c.

        -

    -   Match a character that is not one of a, b, or c.

        +

    -   Match 3 characters in the sequence of "abc".

        -


.. mchoice:: hparsons_lg_regex_pretest_mcq_2

    What does the pattern '\d' do in regex?

    -   Matches any digit (0, 1, ..., 9).

        +

    -   Matches any date (yyyy-mm-dd).

        -

    -   Matches a dash.

        -

    -   Matches a dot.

        -

.. mchoice:: hparsons_lg_regex_pretest_mcq_3

    Which one of the following patterns should I use to treat "abc" as a group for repeating, but not make re.findall only return the content in the group?


    -   [abc]

        +

    -   (abc)

        -

    -   (?abc)

        -

    -   (?:abc)

        +


.. mchoice:: hparsons_lg_regex_pretest_mcq_4

    What does pattern "\w" mean?

    -   Any lowercase letter

        -

    -   Any lowercase or uppercase letter

        -

    -   Any lowercase or uppercase letter, or underscore

        +

    -   A word consisting of uppercase or lowercase letters

        -


.. mchoice:: hparsons_lg_regex_pretest_mcq_5

    Which of the following pattern would match "A"s separated by individual "B"s in between, for example, "AAABAABAA", "ABAAA"?
    Note that "B" should not appear consecutively, and should not appear as the first or last character. B must appear at least once.

    -   (A+B)+A+

        +

    -   (A+B)*A+

        -

    -   (AB)+A+

        -

    -   (A*B)+A+

        -


.. mchoice:: hparsons_lg_regex_pretest_mcq_6

    Which of the following pattern would match both words "attend" and "attendee"?

    -   attend(ee)?

        +

    -   attend|ee

        -

    -   attend(ee){1,}

        -

    -   attend[ee]

        -

