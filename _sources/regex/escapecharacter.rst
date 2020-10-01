Escape Character
----------------

Since we use special characters in regular expressions to match the
beginning or end of a line or specify wild cards, we need a way to
indicate that these characters are "normal" and we want to match the
actual character such as a dollar sign or caret.

We can indicate that we want to simply match a character by prefixing
that character with a backslash. For example, we can find money amounts
with the following regular expression.

.. activecode:: re-escape-ac1

    import re
    x = 'We just received $10.00 for cookies.'
    y = re.findall('\$[0-9.]+',x)
    print(y)


Since we prefix the dollar sign with a backslash, it actually matches
the dollar sign in the input string instead of matching the "end of
line", and the rest of the regular expression matches one or more digits
or the period character.

.. note::
    Inside square brackets, characters are not "special". So when we say ``[0-9.]``\ ,
    it really means digits or a period. Outside of square brackets, a period is the "wild-card"
    character and matches any character. Inside square brackets, the period is a period.

.. activecode:: re-escape-ac2
    :nocodelens:
    :practice: T

    Change the regex equation so that it matches with the math equation in the given string 'x'.
    ~~~~
    import re
    x = 'We learned in school today that 5 + 6 is 11!'
    y = re.findall('[0-9]+ [\D]', x)
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(y, ['5 + 6'], "Testing that the regex equation matches correctly.")

    MyTests().main()

.. mchoice:: re-escape-mc-period
    :practice: T
    :answer_a: .
    :answer_b: /.
    :answer_c: \.
    :answer_d: |.
    :correct: c
    :feedback_a: This will trigger the wild-card function.
    :feedback_b: This will not work.
    :feedback_c: This is the correct usage of the backslash.
    :feedback_d: Try again! In regex, | is used to match the expression on the left or the expression on the right

    How do we match a period (and not a wild-card) in a string using regex?
