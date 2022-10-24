Practice Problems - Mixed-up Code
-----------------------------------------------------

Please answer
the following problems to the best of your ability without any
outside help. You can stop working on a problem after you worked
on it for about four minutes without solving it.

Problems
==============

.. selectquestion:: hparsons_lg_regex_1_practice_parsons
   :fromid: hparsons_lg_regex_1_hparsons
   :points: 10

.. selectquestion:: hparsons_lg_regex_2_practice_parsons
   :fromid: hparsons_lg_regex_2_hparsons
   :points: 10

.. selectquestion:: hparsons_lg_regex_3_practice_parsons
   :fromid: hparsons_lg_regex_3_hparsons
   :points: 10

.. selectquestion:: hparsons_lg_regex_4_practice_parsons
   :fromid: hparsons_lg_regex_4_hparsons
   :points: 10

.. selectquestion:: hparsons_lg_regex_5_practice_parsons
   :fromid: hparsons_lg_regex_5_hparsons
   :points: 10

.. selectquestion:: hparsons_lg_regex_6_practice_parsons
   :fromid: hparsons_lg_regex_6_hparsons
   :points: 10

.. hparsons:: hparsons_lg_regex_1_hparsons
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Please write a regex that would match both word "gray" and "grey".
    ~~~~
    --blocks--
    gr
    [ae]
    y
    a


.. hparsons:: hparsons_lg_regex_2_hparsons
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Please write a regex that would match a word that starts with an uppercase letter and followed by at least one lowercase letters, like "Apple", "Banana", or "Carrot".
    ~~~~
    --blocks--
    [A-Z]
    [a-z]
    +
    \w


.. hparsons:: hparsons_lg_regex_3_hparsons
    :language: regex
    :randomize:
    :blockanswer: 0 1

    Please write a regex to capture numbers with 5-7 digits. For example: 48105, 103028, 1234567.
    ~~~~
    --blocks--
    \d
    {5,7}
    {5}


.. hparsons:: hparsons_lg_regex_4_hparsons
    :language: regex
    :randomize:
    :blockanswer: 0 1 2 3

    Capture words that start with a vowel (a, e, i, o, u), but end with a consonant (any letters that are not a, e, i, o, u).
    For example, it should match "unicorn", "it", and "element".
    ~~~~
    --blocks--
    [aeiou]
    [a-z]
    *
    [^aeiou]
    +


.. hparsons:: hparsons_lg_regex_5_hparsons
    :language: regex
    :randomize:
    :blockanswer: 0 1 2

    Please write a regex to replace the 'YOUR_REGEX' below to match any price in the form of $3.45 or $23.32 or $400.
    Note that we are using re.findall(), so please make sure your regex would return the full match string.

    .. code-block:: python

        def find_price(content):
            return re.findall('YOUR_REGEX', content)

    ~~~~
    --blocks--
    \$\d+
    (?:\.\d\d)
    ?
    (\.\d\d)


.. hparsons:: hparsons_lg_regex_6_hparsons
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



What to do next
============================
.. raw:: html

    <p>Click on the following link to go to the post test: <b><a id="hparsons_lg_session2_posttest"><font size="+2">Post Test</font></a></b></p>

.. raw:: html

    <script type="text/javascript" >

      window.onload = function() {

        a = document.getElementById("hparsons_lg_session2_posttest")
        a.href = "hparsons_lg_session2_posttest.html"
      };

    </script>
