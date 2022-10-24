Practice Problems - Write Code
-----------------------------------------------------

Please answer
the following problems to the best of your ability without any
outside help. You can stop working on a problem after you worked
on it for about four minutes without solving it.

Problems
==============

.. .. selectquestion:: hparsons_lg_regex_1_practice_write
..    :fromid: hparsons_lg_regex_1_write
..    :points: 10

.. .. selectquestion:: hparsons_lg_regex_2_practice_write
..    :fromid: hparsons_lg_regex_2_write
..    :points: 10

.. .. selectquestion:: hparsons_lg_regex_3_practice_write
..    :fromid: hparsons_lg_regex_3_write
..    :points: 10

.. .. selectquestion:: hparsons_lg_regex_4_practice_write
..    :fromid: hparsons_lg_regex_4_write
..    :points: 10

.. .. selectquestion:: hparsons_lg_regex_5_practice_write
..    :fromid: hparsons_lg_regex_5_write
..    :points: 10

.. .. selectquestion:: hparsons_lg_regex_6_practice_write
..    :fromid: hparsons_lg_regex_6_write
..    :points: 10


.. activecode:: hparsons_lg_regex_1_write
    :practice: T
    :autograde: unittest

    Please write a regex that would match both word "gray" and "grey".
    Replace "YOUR_REGEX" with your answer, but do not remove other symbols
    ~~~~
    import re

    def match_word(word):
        if re.match('^YOUR_REGEX$', word) != None:
            return True
        else:
            return False
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(match_word('gray'), True, 'Should match "gray"')
            self.assertEqual(match_word('grey'), True, 'Should match "grey"')
            self.assertEqual(match_word('gry'), False, 'Should not match "gry"')
    myTests().main()



.. activecode:: hparsons_lg_regex_2_write
    :nocodelens:
    :practice: T
    :autograde: unittest

    Please write a regex that would match a word that starts with an uppercase letter and followed by at least one lowercase letters, like "Apple", "Banana", or "Carrot".
    Replace "YOUR_REGEX" with your answer, but do not remove other symbols.
    ~~~~
    import re

    def match_word(word):
        if re.match('^YOUR_REGEX$', word) != None:
            return True
        else:
            return False
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(match_word('Apple'), True, 'Should match "Apple"')
            self.assertEqual(match_word('Banana'), True, 'Should match "Banana"')
            self.assertEqual(match_word('It'), True, 'Should match "It"')
            self.assertEqual(match_word('FRUIT'), False, 'Should not match "FRUIT"')
            self.assertEqual(match_word('vegetable'), False, 'Should not match "vegetable"')
    myTests().main()



.. activecode:: hparsons_lg_regex_3_write
    :nocodelens:
    :practice: T
    :autograde: unittest

    Please write a regex to capture numbers with 5-7 digits. For example: 48105, 103028, 1234567.
    Replace "YOUR_REGEX" with your answer, but do not remove other symbols.
    ~~~~
    import re

    def match_number(word):
        if re.match('^YOUR_REGEX$', word) != None:
            return True
        else:
            return False
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(match_number('48105'), True, 'Should match "48105"')
            self.assertEqual(match_number('103028'), True, 'Should match "103028"')
            self.assertEqual(match_number('1234567'), True, 'Should match "1234567"')
            self.assertEqual(match_number('123'), False, 'Should not match "123"')
            self.assertEqual(match_number('12345678'), False, 'Should not match "12345678"')
            self.assertEqual(match_number('words'), False, 'Should not match "words"')
    myTests().main()



.. activecode:: hparsons_lg_regex_4_write
    :nocodelens:
    :practice: T
    :autograde: unittest

    Capture words that start with a vowel (a, e, i, o, u), but end with a consonant (any letters that are not a, e, i, o, u).
    For example, it should match "unicorn", "it", and "element".
    Replace "YOUR_REGEX" with your answer, but do not remove other symbols.
    ~~~~
    import re

    def match_word(word):
        if re.match('^YOUR_REGEX$', word) != None:
            return True
        else:
            return False
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(match_word('unicorn'), True, 'Should match "unicorn"')
            self.assertEqual(match_word('it'), True, 'Should match "it"')
            self.assertEqual(match_word('element'), True, 'Should match "element"')
            self.assertEqual(match_word('banana'), False, 'Should not match "banana"')
            self.assertEqual(match_word('apple'), False, 'Should not match "apple"')
            self.assertEqual(match_word('tick'), False, 'Should not match "tick"')
    myTests().main()


.. activecode:: hparsons_lg_regex_5_write
    :nocodelens:
    :practice: T
    :autograde: unittest

    Please write a regex to replace the 'YOUR_REGEX' below to match any price in the form of $3.45 or $23.32 or $400.
    Note that we are using re.findall(), so please make sure your regex would return the full match string.
    ~~~~
    import re

    def find_price(content):
        return re.findall('YOUR_REGEX', content)

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(find_price('The price of the apple is $3.45.'), ['$3.45'], 'The price of the apple is $3.45.')
            self.assertEqual(find_price('I spent $23.32 for the book.'), ['$23.32'], 'I spent $23.32 for the book.')
            self.assertEqual(find_price('The gift cost me $400, and the cake was $40.26.'), ['$400', '$40.26'], 'The gift cost me $400, and the cake was $40.26.')
    myTests().main()


.. activecode:: hparsons_lg_regex_6_write
    :nocodelens:
    :practice: T
    :autograde: unittest

    Please write a regex to capture a URL that only consists of characters, numbers, underscore, and dots.
    For example: www.abc.com, def_ghi.com, a678.cn
    Note that dots(".") should not appear consecutively, and should not appear as the first or last character. The dot must appear at least once.
    Replace "YOUR_REGEX" with your answer, but do not remove other symbols.
    ~~~~
    import re

    def match_URL(content):
        if re.match('^YOUR_REGEX$', content) != None:
            return True
        else:
            return False
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(match_URL('www.abc.com'), True, 'Should match "www.abc.com"')
            self.assertEqual(match_URL('def_ghi.com'), True, 'Should match "def_ghi.com"')
            self.assertEqual(match_URL('a678.cn'), True, 'Should match "a678.cn"')
            self.assertEqual(match_URL('com'), False, 'Should not match "com"')
            self.assertEqual(match_URL('abc*.com'), False, 'Should not match "abc*.com"')
            self.assertEqual(match_URL('abc..com'), False, 'Should not match "abc..com"')
    myTests().main()




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
