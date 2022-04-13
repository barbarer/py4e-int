Mixed-Up Code Questions
------------------------

.. parsonsprob:: re_mixed1
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``greeting_search`` that takes in a list of strings, ``lst``, as a parameter and returns ``True`` if the list
    has "Good Morning!" in it and ``False`` otherwise. For example, ``greeting_search(["Hello!", "Good Morning!", "good morning!"])``
    should return ``True``.
    -----
    import re
    =====
    def greeting_search(lst):
    =====
        for item in lst:
    =====
            if re.search(item, "Good Morning!"):
    =====
            if re.search(lst, "Good Morning!"): #paired
    =====
                return True
    =====
        return False

.. activecode:: re_mixed1_ac
    :autograde: unittest

    Write a function called ``greeting_search`` that takes in a list of strings, ``lst``, as a parameter and returns ``True`` if the list
    has "Good Morning!" in it and ``False`` otherwise. For example, ``greeting_search(["Hello!", "Good Morning!", "good morning!"])``
    should return ``True``.
    ~~~~
    import re

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(greeting_search(['Hello!', 'Good Morning!', 'good morning!']), True, "greeting_search(['Hello!', 'Good Morning!', 'good morning!'])")
            self.assertEqual(greeting_search(['Hello!', 'good morning!']), False, "greeting_search(['Hello!', 'good morning!'])")
            self.assertEqual(greeting_search(['Good Morning!', 'Hello!', 'good morning!']), True, "greeting_search(['Good Morning!', 'Hello!', 'good morning!'])")

    myTests().main()

.. parsonsprob:: re_mixed2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``search_h`` that takes in a list of strings, ``lst``, and uses regular expressions to add all the words
    starting with an "H" or an "h" to a new list and returns that new list. For example, ``search_h(["Hello!", "hello.", "Morning!", "hi"])``
    should return ``['Hello!', 'hello.', 'hi']``.
    -----
    import re
    =====
    def search_h(lst):
    =====
        new_list = []
    =====
        for item in lst:
    =====
            if re.search('^[Hh]', item):
    =====
            if re('^H,h'), item): #paired
    =====
                new_list.append(item)
    =====
        return new_list

.. activecode:: re_mixed2_ac
    :autograde: unittest

    Write a function called ``search_h`` that takes in a list of strings, ``lst``, and uses regular expressions to add all the words
    starting with an "H" or an "h" to a new list and returns that new list. For example, ``search_h(["Hello!", "hello.", "Morning!", "hi"])``
    should return ``['Hello!', 'hello.', 'hi']``.
    ~~~~
    import re

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(search_h(['Hello!', 'hello.', 'Morning!', 'hi']), ['Hello!', 'hello.', 'hi'], "search_h(['Hello!', 'hello.', 'Morning!', 'hi'])")
            self.assertEqual(search_h(['Morning!']), [], "search_h(['Morning!'])")
            self.assertEqual(search_h(['fresh', 'Kahoot']), [], "search_h(['fresh', 'Kahoot'])")

    myTests().main()

.. parsonsprob:: re_mixed3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``search_o`` that takes in a list of strings, ``lst``, and uses regular expressions to add all the words
    that have a lowercase "o" to a new list and returns that new list. For example, ``search_o(['Hello', 'Good Morning!', 'hi'])`` should return
    ``['Hello', 'Good Morning!']``.
    -----
    import re
    =====
    def search_o(lst):
    =====
        new_list = []
    =====
        for item in lst:
    =====
            if re.search('o', item):
    =====
            if re.search('^o', item): #paired
    =====
                new_list.append(item)
    =====
        return new_list

.. activecode:: re_mixed3_ac
    :autograde: unittest

    Write a function called ``search_o`` that takes in a list of strings, ``lst``, and uses regular expressions to add all the words
    that have a lowercase "o" to a new list and returns that new list. For example, ``search_o(['Hello', 'Good Morning!', 'hi'])`` should return
    ``['Hello', 'Good Morning!']``.
    ~~~~
    import re

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(search_o(['Hello', 'Good Morning!', 'hi']), ['Hello', 'Good Morning!'], "search_o(['Hello', 'Good Morning!', 'hi'])")
            self.assertEqual(search_o(['Other', 'open', 'Petroleum']), ['open', 'Petroleum'], "search_o(['Other', 'open', 'Petroleum'])")
            self.assertEqual(search_o(['hi', 'bye']), [], "search_o(['hi', 'bye'])")


    myTests().main()

.. parsonsprob:: re_mixed4_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``match_word(word, str)`` that returns True if the string ``str`` contains the word ``word``, but not if it is part of another word.  For example, ``match_word('is', "This was bad")`` would return False and ``match_word('is', "This is good")`` would return True.
    -----
    import re
    =====
    import regex #paired
    =====
    def match_word(word, str):
    =====
        if re.search(r"\b" + word + r"\b", str):
    =====
        if re.search("\b" + word + "\b", str): #paired
    =====
            return True
    =====
        else:
    =====
            return False

.. activecode:: re_mixed4_v2_ac
    :autograde: unittest

    Write a function called ``match_word(word, str)`` that returns True if the string ``str`` contains the word ``word``, but not if it is part of another word.  For example, ``match_word('is', "This was bad")`` would return False and ``match_word('is', "This is good")`` would return True.
    ~~~~
    import re


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(match_word('is','This was bad'),False,"match_word('is','This was bad')")
            self.assertEqual(match_word('is','This is good'),True,"match_word('is','This is good')")
            self.assertEqual(match_word('good','This is good'),True,"match_word('good','This is good')")
            self.assertEqual(match_word('go','This is good'),False,"match_word('go','This is good')")
            self.assertEqual(match_word('This','This is good'),True,"match_word('This','This is good')")


    myTests().main()

.. parsonsprob:: re_mixed5_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``test_pattern`` that takes in one string parameter, ``sequence``, and uses regular expressions to see if ``sequence`` has the pattern
    of at least one letter, number, or underscore, at least one space, and at least one letter, number, or underscore again. Return ``"Match!"`` if ``sequence`` matches the pattern, and
    ``"Not a match!"`` otherwise. For example, ``test_pattern('Sincerely1       Molly')`` should return ``"Match!"``.
    -----
    import re
    =====
    def test_pattern(sequence):
    =====
        pattern = "\w+\s+\w+"
    =====
        pattern = "\w+\S+\w+" #paired
    =====
        if re.search(pattern, sequence):
    =====
            return "Match!"
    =====
        else:
    =====
            return "Not a match!"

.. activecode:: re_mixed5_ac
    :autograde: unittest

    Write a function called ``test_pattern`` that takes in one string parameter, ``sequence``, and uses regular expressions to see if ``sequence`` has the pattern
    of at least one letter, number, or underscore, at least one space, and at least one letter, number, or underscore again. Return ``"Match!"`` if ``sequence`` matches the pattern, and
    ``"Not a match!"`` otherwise. For example, ``test_pattern('Sincerely1       Molly')`` should return ``"Match!"``.
    ~~~~
    import re

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(test_pattern('Sincerely       Molly'), 'Match!', "test_pattern('Sincerely       Molly')")
            self.assertEqual(test_pattern('Sincerely1       Molly'), 'Match!', "test_pattern('Sincerely1       Molly')")
            self.assertEqual(test_pattern('Sincerely   Molly'), 'Match!', "test_pattern('Sincerely   Molly')")
            self.assertEqual(test_pattern('1 M'), 'Match!', "test_pattern('1 M')")
            self.assertEqual(test_pattern('1 1'), 'Match!', "test_pattern('1 1')")
            self.assertEqual(test_pattern('S M'), 'Match!', "test_pattern('S M')")
            self.assertEqual(test_pattern('1S 1M'), 'Match!', "test_pattern('1S 1M')")
            self.assertEqual(test_pattern('_ M_9'), 'Match!', "test_pattern('_ M_9')")
            self.assertEqual(test_pattern('SM'), 'Not a match!', "test_pattern('SM')")
            self.assertEqual(test_pattern(' SM '),'Not a match!', "test_pattern(' SM ')")
            self.assertEqual(test_pattern(' SM'), 'Not a match!', "test_pattern(' SM')")
            self.assertEqual(test_pattern('S, M'), 'Not a match!', "test_pattern('S, M')")
            self.assertEqual(test_pattern('SM '), 'Not a match!', "test_pattern('SM ')")


    myTests().main()

.. parsonsprob:: re_mixed6_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``first_price`` that takes in a parameter ``string`` and uses regular expressions to find and return the first price in
    the ``string`` if there is one. A price must have at least one digit after a '$' symbol and can optionally have a period followed by two digits.
    If there isn't a price in the ``string``, return ``'No price'``. For example, ``first_price('We just received $2098.10 for cookies and $209 for brownies.')``
    should return ``"$2098.10"``.
    -----
    import re
    =====
    def first_price(string):
        out = []
    =====
        pattern = '\$\d+(?:\.\d{2})?'
    =====
        pattern = '$\d+(?:\.\d{2})?' #paired
    =====
        out = re.findall(pattern,string)
    =====
        if len(out) > 0:
    =====
            return out[0]
    =====
            return out #paired
    =====
        else:
    =====
            return 'No price'


.. activecode:: re_mixed6_ac
    :autograde: unittest

    Write a function called ``first_price`` that takes in a parameter ``string`` and uses regular expressions to find and return the first price in
    the ``string`` if there is one. A price must have at least one digit after a '$' symbol and can optionally have a period followed by two digits.
    If there isn't a price in the ``string``, return ``'No price'``. For example, ``first_price('We just received $2098.10 for cookies and $209 for brownies.')``
    should return ``"$2098.10"``.
    ~~~~
    import re

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(first_price('We just received $10.00 for cookies.'), '$10.00', "first_price('We just received $10.00 for cookies.')")
            self.assertEqual(first_price('We just received $2098.10 for cookies and $209 for brownies.'), '$2098.10', "first_price('We just received $2098.10 for cookies and $209 for brownies.')")
            self.assertEqual(first_price('We just received $5.00 for cookies.'), '$5.00', "first_price('We just received $5.00 for cookies.')")
            self.assertEqual(first_price('$5.35 for cookies'), '$5.35', "first_price('$5.35 for cookies')")
            self.assertEqual(first_price('cookies for $5.05'), '$5.05', "first_price('cookies for $5.05')")
            self.assertEqual(first_price('cookies for $5'), '$5', "first_price('cookies for $5')")
            self.assertEqual(first_price('cookies'), 'No price', "first_price('cookies')")


    myTests().main()

.. parsonsprob:: re_mixed7_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``search_email`` that takes in a string parameter, ``string``, and uses regular expressions to return
    a list with all the emails in the string. The format for the email is at least one letter, number or underscore, the "@" symbol,
    and the email domain (which includes a period). For example, ``search_email('His email is pyth_on@umich.edu and her email is java@css.')`` should return
    ``['pyth_on@umich.edu']``.
    -----
    import re
    =====
    def search_email(string):
    =====
        return re.findall('\w+@\w+\.\w+', string)
    =====
        return re.findall('\S+@S+', string) #paired


.. activecode:: re_mixed7_ac
    :autograde: unittest

    Write a function called ``search_email`` that takes in a string parameter, ``string``, and uses regular expressions to return
    a list with all the emails in the string. The format for the email is at least one letter, number or underscore, the "@" symbol,
    and the email domain (which includes a period). For example, ``search_email('His email is pyth_on@umich.edu and her email is java@css.')`` should return
    ``['pyth_on@umich.edu']``.
    ~~~~
    import re

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(search_email('python@umich.edu'), ['python@umich.edu'], "search_email('python@umich.edu')")
            self.assertEqual(search_email('python@umich.edu, java@umich.edu'), ['python@umich.edu', 'java@umich.edu'], "search_email('python@umich.edu, java@umich.edu')")
            self.assertEqual(search_email('His email is pyth_on@umich.edu and her email is java@css.'),['pyth_on@umich.edu'], "search_email('His email is pyth_on@umich.edu and her email is java@css.')")
            self.assertEqual(search_email('His email is python@umich.edu and her email is jav12a@css.com.'), ['python@umich.edu', 'jav12a@css.com'], "search_email('His email is python@umich.edu and her email is jav12a@css.com.')")
            self.assertEqual(search_email('python'), [], "search_email('python')")

    myTests().main()

.. parsonsprob:: re_mixed8
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``start_from``` that takes in a list of strings, ``lst``, and adds into a new list each item that starts
    with "From:" and is followed by one or more characters and an "@" sign. For example, ``start_from(['From: Kelly@umich.edu','From: Kelly@',': Kelly@'])``
    should return ``['From: Kelly@umich.edu', 'From: Kelly@']``.
    -----
    import re
    =====
    def start_from(lst):
    =====
        new_list = []
    =====
        for item in lst:
    =====
            if re.search('^From:.+@', item):
    =====
            if re.search('^F..m:', item): #paired
    =====
                new_list.append(item)
    =====
        return new_list

.. activecode:: re_mixed8_ac
    :autograde: unittest

    Write a function called ``start_from``` that takes in a list of strings, ``lst``, and adds into a new list each item that starts
    with "From:" and is followed by one or more characters and an "@" sign. For example, ``start_from(['From: Kelly@umich.edu','From: Kelly@',': Kelly@'])``
    should return ``['From: Kelly@umich.edu', 'From: Kelly@']``.
    ~~~~
    import re

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(start_from(['From: Kelly@umich.edu']), ['From: Kelly@umich.edu'], "start_from(['From: Kelly@umich.edu'])")
            self.assertEqual(start_from(['From: Kelly@umich.edu','From: Kelly@',': Kelly@']), ['From: Kelly@umich.edu', 'From: Kelly@'], "start_from(['From: Kelly@umich.edu','From: Kelly@',': Kelly@'])")
            self.assertEqual(start_from(['From: Kelly','From Kelly','rom Kelly']),[], "start_from(['From: Kelly','From Kelly','rom Kelly'])")

    myTests().main()

.. parsonsprob:: re_mixed9_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``grab_domain`` that takes in a list of strings, ``lst``, as a parameter and returns a new list with the domains of the emails, if they exist.
    For example, ``grab_domain(['python@umich.edu','This is Kelly@umich.gov','123','java@css','jav12a@css.com'])`` would return ``['umich.edu', 'umich.gov', 'css.com']``.
    -----
    import re
    =====
    def grab_domain(lst):
    =====
        out = []
    =====
        for str in lst:
    =====
            curr = re.findall('\w+@(\w+\.\w+)', str)
    =====
            curr = re.findall('\w+@(\w+)', str) #paired
    =====
            out.extend(curr)
    =====
            out.append(curr) #paired
    =====
        return out

.. activecode:: re_mixed9_ac
    :autograde: unittest

    Write a function called ``grab_domain`` that takes in a list of strings, ``lst``, as a parameter and returns a new list with the domains of the emails, if they exist.
    For example, ``grab_domain(['python@umich.edu','This is Kelly@umich.gov','123','java@css','jav12a@css.com'])`` would return ``['umich.edu', 'umich.gov', 'css.com']``.
    ~~~~
    import re

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(grab_domain(['python@umich.edu','This is Kelly@umich.gov','123','java@css','jav12a@css.com']), ['umich.edu', 'umich.gov', 'css.com'], "grab_domain(['python@umich.edu','This is Kelly@umich.gov','123','java@css','jav12a@css.com'])")
            self.assertEqual(grab_domain(['123','java@css']), [], "grab_domain(['123','java@css'])")
            self.assertEqual(grab_domain(['123@google.com, be@facebook.com']), ['google.com', 'facebook.com'], "grab_domain(['123@google.com, be@facebook.com'])")

    myTests().main()

.. parsonsprob:: re_mixed10_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``vowels_in_mid`` that takes in one string parameter, ``string``, and returns ``string`` if there is an area in the string
    that contains two to four vowels, and it does not start nor end with a vowel. Otherwise, return ``'Does not exist'``. For example, ``vowels_in_mid('chEEEEEYYEErry')``
    should return ``'chEEEEEYYEErry'``.
    -----
    import re
    =====
    def vowels_in_mid(string):
    =====
        p = "[^AEIOU]+[AEIOU]{2,4}[^AEIOU]+"
    =====
        p = ".+[AEIOU]{2,4}[^AEIOU]+$" #paired
    =====
        if re.search(p, string):
    =====
            return string
    =====
        else:
    =====
            return 'Does not exist'

.. activecode:: re_mixed10_ac
    :autograde: unittest

    Write a function called ``vowels_in_mid`` that takes in one string parameter, ``string``, and returns ``string`` if there is an area in the string
    that contains two to four vowels, and it does not start nor end with a vowel. Otherwise, return ``'Does not exist'``. For example, ``vowels_in_mid('chEEEEEYYEErry')``
    should return ``'chEEEEEYYEErry'``.
    ~~~~
    import re

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(vowels_in_mid('chErry'), 'Does not exist', "vowels_in_mid('chErry')")
            self.assertEqual(vowels_in_mid('chEErry'), 'chEErry', "vowels_in_mid('chEErry')")
            self.assertEqual(vowels_in_mid('chEEErry'), 'chEEErry', "vowels_in_mid('chEEErry')")
            self.assertEqual(vowels_in_mid('chEEEErry'), 'chEEEErry', "vowels_in_mid('chEEEErry')")
            self.assertEqual(vowels_in_mid('chEEEEErry'), 'Does not exist', "vowels_in_mid('chEEEEErry')")
            self.assertEqual(vowels_in_mid('chEEEEEYYEErry'), 'chEEEEEYYEErry', "vowels_in_mid('chEEEEEYYEErry')")

    myTests().main()
