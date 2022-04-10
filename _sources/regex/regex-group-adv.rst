Group Work: More Regular Expressions (Regex)
-----------------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Learn about using | as a logical *or*
* Learn about matching groups and non matching groups
* Learn about anchor characters (^, $, and \\b)
* Learn about raw strings
* Learn how to negate a character set

Using a logical "or"
====================================

What if you want to match a month from 1 to 12 in MM/DD/YYYY? You can't use [1-12] since it matches a character at a time. You have to match either a digit from 1 to 9 or a 1 followed by 0, 1, or 2.
To use a logical *or* to match one of two expressions use ``(left|right)``. This will match either the expression on the left or the one on the right.

.. activecode:: regex_logical_or
    :caption: Regular expression logical or

    Run the code below to see what it prints.
    ~~~~
    import re
    str = "The dates were 9/11/2022, 10/15/2022, 11/20/2022, and 12/01/2022"

    # get the dates
    dates = re.findall("([1-9]|1[0-2])/\d{2}/\d{4}", str)
    print(dates)

.. mchoice:: regex_match_0_before_digit_on_month
    :practice: T
    :answer_a: "0([1-9]|1[0-2])/\d{2}/\d{4}"
    :answer_b: "0*([1-9]|1[0-2])/\d{2}/\d{4}"
    :answer_c: "0+([1-9]|1[0-2])/\d{2}/\d{4}"
    :answer_d: "0?([1-9]|1[0-2])/\d{2}/\d{4}"
    :correct: d
    :feedback_a: This would require a 0 before a 1-9
    :feedback_b: This would match 0 to many 0's
    :feedback_c: This would require at least one 0
    :feedback_d: This matches 0 to 1 0's

    Sometimes dates have a leading zero if the month is from 1 to 9.  Which of the following would match that case as well but still match if there isn't a 0?


Specifying What to Extract - Matching Groups
============================================

There are times when you want to return just part of what was matched.

.. activecode:: regex_return_part_match_ac
    :caption: Extracting part of a match

    Run the code below to see what it prints.
    ~~~~
    import re

    str1 = 'From: stephen.marquard@uct.ac.za Sat Jan walk@12  5 09:14:16 2008'

    res1 = re.findall('\S+@\S+', str1)
    print(res1)

    res2 = re.findall('^From: \S+@\S+', str1)
    print(res2)

    res3 = re.findall('^From: (\S+@\S+)', str1)
    print(res3)

.. fillintheblank:: regex_extract_symbols_fitb
    :practice: T

    Which symbols are used to specify the part of the match to return?

    - :\(\): Parenthesis are used to specify the part of the match to return.
      :.*: Look at the code above.  What symbols were used to specify the part to return?

.. note ::

   Parentheses are used to define a capture group - only what is in the parentheses will be returned.


Specifying What to Extract - Non-Matching Groups
===================================================

What if we need the parentheses because we are using a logical *or* but want the whole match to be returned?  We can add a "?:" after the first parenthesis to group items for the logical *or* but return the entire match.

.. activecode:: regex_logical_or_with_non_capture_group
    :caption: Regular with logical or and a non-capture group

    Run the code below to see what it prints.
    ~~~~
    import re
    str = "The dates were 9/11/2022, 10/15/2022, 11/20/2022, and 12/01/2022"

    # get the dates
    dates = re.findall("(?:[1-9]|1[0-2])/\d{2}/\d{4}", str)
    print(dates)

Another approach is to enclose everything in a set of outer parentheses if you have any inner parentheses.

.. activecode:: regex_logical_or_with_outer_paren
    :caption: Regular with logical or and a non-capture group

    Run the code below to see what it prints.
    ~~~~
    import re
    str = "The dates were 9/11/2022, 10/15/2022, 11/20/2022, and 12/01/2022"

    # try the search method
    matches = re.findall("(([1-9]|1[0-2])/\d{2}/\d{4})", str)
    print(matches)

.. mchoice:: regex_get_date_from_match
    :practice: T
    :answer_a: l.append(match)
    :answer_b: l.extend(match)
    :answer_c: l.append(match[0])
    :answer_d: l.extend(match[0])
    :correct: c
    :feedback_a: This would add the tuple not the date
    :feedback_b: Use extend to add two lists together
    :feedback_c: This will add the date to the list (the first element in the tuple)
    :feedback_d: Use extend to add two lists together

    Given the following code which of the following would you use to get the current date and add it to the list?

    .. code-block::

        import re
        str = "The dates were 9/11/2022, 10/15/2022, 11/20/2022, and 12/01/2022"

        # get the dates
        l = []
        matches = re.findall("(([1-9]|1[0-2])/\d{2}/\d{4})", str)
        for match in matches:
            # line to get current date and add to the list

Boundary or Anchor Characters
===================================================

.. activecode:: regex_bound_caret
    :caption: Using a caret

    Run the code below to see what it prints.
    ~~~~
    import re
    str = "From: aadarsh, From: carl, From: zihan"
    str2 = "A list: From: aadarsh, From: carl, From: zihan"

    # find matches
    matches = re.findall("^From: \w+",str)
    print(matches)

    # find matches
    matches = re.findall("^From: \w+",str2)
    print(matches)

.. mchoice:: regex_match_caret_mc
    :practice: T
    :answer_a: Return the first match that it finds.
    :answer_b: Return a match if it is at the beginning of the string.
    :answer_c: Return a match if it is at the end of the string.
    :answer_d: Return a match if it is a whole word, not just part of a word.
    :correct: b
    :feedback_a: It does not do this.
    :feedback_b: Correct.  It returns a match only if it is at the beginning of a string.
    :feedback_c: It does not do this, however any anchor character does.
    :feedback_d: It does not do this.

    What does the '^' do?

.. activecode:: regex_bound_dollar
    :caption: Using a dollar sign

    Run the code below to see what it prints.
    ~~~~
    import re
    str = "$32.99 42.29 24.42"

    # find matches
    matches = re.findall("\d+\.\d{2}$",str)
    print(matches)

.. mchoice:: regex_match_dollar_mc
    :practice: T
    :answer_a: Return the first match that it finds.
    :answer_b: Return a match if it is at the beginning of the string.
    :answer_c: Return a match if it is at the end of the string.
    :answer_d: Return a match if it is a whole word, not just part of a word.
    :correct: c
    :feedback_a: It does not do this.
    :feedback_b: It does not do this, but the '^' does.
    :feedback_c: Correct!  It matches only at the end of the string.
    :feedback_d: It does not do this.

    What does the '$' do?

.. note ::

   Since '$' is an anchor character if you want to match a '$' use '\\$'.

.. activecode:: regex_word_boundary
    :caption: Using a word boundary

    Run the code below to see what it prints.
    ~~~~
    import re
    str = "The rain in Spain falls on the plain."

    # find matches
    matches = re.findall(r"\bin\b",str)
    print(matches)

.. mchoice:: regex_match_slach_b_mc
    :practice: T
    :answer_a: Return the first match that it finds.
    :answer_b: Return a match if it is at the beginning of the string.
    :answer_c: Return a match if it is at the end of the string.
    :answer_d: Return a match if it is a whole word, not just part of a word.
    :correct: d
    :feedback_a: It does not do this.
    :feedback_b: It does not do this, but the '^' does.
    :feedback_c: It does not do this, but the '$' does.
    :feedback_d: Correct! It matches if it is a whole word, not just part of a word.

    What does the '\\b' do?

.. note::

   Since '\\b' usually represents a backspace in a Python string you must use 'r' before the string to treat it as a raw string. You only need to add the r in front of the string if the expression has a '\\b' in it.

Negating a Character Set
============================

You can negate a character set using the '^' after the '['.

.. activecode:: regex_negate_char_set
    :caption: Negating a character set

    Run the code below to see what it prints.
    ~~~~
    import re

    def passwordChecker(str):

        # find matches
        result = re.search('[^a-zA-Z0-9]',str)
        if result:
            return False
        else:
            return True

    print(passwordChecker('Yhmah!23'))
    print(passwordChecker('123456'))
    print(passwordChecker('password'))
    print(passwordChecker('{hi}'))


.. mchoice:: regex_password_checker_mc
    :practice: T
    :answer_a: If the string has only uppercase and lowercase alphabetic characters.
    :answer_b: If the string has only uppercase and lowercase alphabetic characters or numeric digits.
    :answer_c: If the string has only numeric digits.
    :answer_d: If the string has only uppercase and lowercase alphabetic characters, numeric digits, or special characters like '!{}[]'.
    :correct: b
    :feedback_a: It also allows digits.
    :feedback_b: Correct!  It returns true if the string only has alphabetic characters or numeric digits.
    :feedback_c: It also allows alpabetic characters.
    :feedback_d: It does not do this.

    Which of the following best describes when ``passwordChecker`` returns true?


.. dragndrop:: regex_match_adv_symbols
    :practice: T
    :feedback: Look at the code above.
    :match_1: $|||Match only at the end of the string
    :match_2: ^|||Match only at the beginning of the string
    :match_3: \b|||Match if a whole word (not part of a word)
    :match_4: [^]|||Match the opposite of the character set

    Drag each symbol to what it matches.


If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share answers.

.. groupsub:: regex_adv_groupsub
   :limit: 3
