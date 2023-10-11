Group Work: Regular Expressions (Regex)
----------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Learn about ``search`` and ``findall`` and what they return
* Learn about some common quantifiers (\*, +, ?, {n})
* Learn about character classes (\\d, \\w, \\s, .)
* Learn about character sets ([an]) and ranges ([0-9])
* Learn how to negate a character set using [^0-9]
* Learn how to escape a special character to match it
* Learn about greedy matching and how to make it not greedy
* Learn how to return just part of a match using parentheses

Regex Methods
====================================

Two of the methods that you can use with regular expressions are ``search`` and
``findall``.  Note that you must ``import re`` to use these.

.. activecode:: regex_methods_ex
    :caption: Regular expression methods

    Run the code below to see what it prints.
    ~~~~
    import re
    str = "The rain in Spain"

    # try the search method
    x = re.search("ai", str)
    print(x)

    # show what happens if you check the result
    if x:
       print(True)
    else:
       print(False)

    # try the search method again
    x = re.search("blue", str)

    # show what happens if you check the result
    print(x)
    if x:
       print(True)
    else:
       print(False)

    # try the findall method
    y = re.findall("ai", str)
    print(y)
    y = re.findall("blue", str)
    print(y)

.. fillintheblank:: regex_findall_return_type_fitb
    :practice: T

    What type of thing does ``findall`` return?

    - :list: The findall method returns a list of items that matched
      :.*: What type of thing was last printed?

.. fillintheblank:: regex_search_not_found_return_fitb
    :practice: T

    What does ``search`` return if no match is found?

    - :None: The search method returns None if no match was found
      :none: Remember that this keyword starts with a capital letter
      :.*: What was the second thing printed?

.. fillintheblank:: regex_search_fitb
    :practice: T

    Which method returns information about the first match as an object?

    - :search: The search method returns a MatchObject
      :.*: Look at the code above.

Quantifiers
============================

You can specify how many items to match using quantifiers. They refer to the
item to their left. The quantifiers are ``?``, ``+``, ``*``, ``{n}``, and ``{n,m}``.

.. activecode:: regex_match_chars_ex_v2
    :caption: Matching characters

    Run the code below to see what it prints.
    ~~~~
    import re

    str1 = "ab abc abcc abcccc abbccc aabbcc"
    res1 = re.findall("abc+", str1)
    print(res1)

    str2 = "color colour colouur"
    res2 = re.findall("colou?r", str2)
    print(res2)

    str3 = "b bo boo booo booooo"
    res3 = re.findall("bo*", str3)
    print(res3)

    str4 = "ab abc abcc abcccc abbccc aabbcc"
    res4 = re.findall("abc{2}", str4)
    print(res4)

    str5 = "ab abc abcc abcccc abbccc aabbcc"
    res5 = re.findall("abc{1,3}", str5)
    print(res5)

.. mchoice:: regex_quant_2_mc
    :practice: T
    :answer_a: 0 to many
    :answer_b: 0 to 2
    :answer_c: exactly 2
    :answer_d: 2 or more
    :correct: d
    :feedback_a: No, this would be 'c*'
    :feedback_b: No, this would be just 'c'
    :feedback_c: No, it will match strings that have more than 2 c's in a row.
    :feedback_d: This will match 2 c's but there can be more in the string.

    How many c's must there be in a row for c{2} to match at least part of the string?

.. fillintheblank:: regex_digit_fitb
    :practice: T

    What characters are used to match a digit?

    - :\\d|\[0-9\]: The backslash d is used to match any digit or [0-9] can be used as well.
      :d: You are missing something before the d
      :/d: Try a backslash instead
      :.*: Run the code above

.. dragndrop:: regex_quant_v2_dnd
    :practice: T
    :feedback: Look at the code above.
    :match_1: ?|||Zero to one
    :match_2: *|||Zero to many
    :match_3: +|||One to many
    :match_4: {2}|||Two
    :match_5: {1,3}|||One, two, or three

    Drag each symbol to the number of items it matches.

Character Sets
==================

You can use ``[]`` to specify that you need to match any one item in the ``[]``.

.. activecode:: regex_char_sets
    :caption: Matching character sets

    Run the code below to see what it prints.
    ~~~~
    import re

    str1 = "ben bean been ban bottom"
    res1 = re.findall("b[ea]n", str1)
    print(res1)

.. mchoice:: regex_char_sets_meaning
   :answer_a: Match either an 'e' or 'a' one time
   :answer_b: Match 'ae' one time
   :answer_c: Match either an 'e' or 'a' one to many times
   :answer_d: Match 'ae' one to many times
   :correct: a
   :feedback_a: It will match one of the items listed in []
   :feedback_b: It will match one of the items listed in []
   :feedback_c: This would be true if it was [ae]+
   :feedback_d: This would be true if it was (ae)+

   What does ``[ea]`` mean?


Character Ranges
===================

You can specify a range of items to match.

.. activecode:: regex_char_ranges-digits
    :caption: Matching character sets

    Run the code below to see what it prints.
    ~~~~
    import re

    str1 = "832 3928.23 382.28378 5 92,000 32-928 +32 -32 ABC"
    res1 = re.findall("[0-9.]+", str1)
    print(res1)
    res2 = re.findall("[^0-9.]+", str1)
    print(res2)


.. mchoice:: regex_char_range_digits
   :answer_a: Match any digit or period one or more times.  Special characters like '.' just match themselves in [].
   :answer_b: Match any digit or anything that isn't a new line one or more times
   :answer_c: Match any digit or period zero to many times
   :answer_d: Match any digit or anything that isn't a new line zero to many times
   :correct: a
   :feedback_a: Items in the [] match themselves and are not treated as special characters other than '-'
   :feedback_b: The period in a [] just means match a period
   :feedback_c: The + outside of the [] means match one or more
   :feedback_d: The period in a [] just means match a period and the + means match one or more times

   What does ``[0-9.]+`` mean?


.. mchoice:: regex_neg_char_range_digits
   :answer_a: Match anything other than 0-9 and a period zero to one times
   :answer_b: Match anything other than 0-9 and a period one to many times
   :answer_c: Match ^ or 0-9 or a period zero to one times
   :answer_d: Match ^ or 0-9 or a period one to many times
   :correct: b
   :feedback_a: The + means one to many times
   :feedback_b: Correct!
   :feedback_c: The ^ negates the items
   :feedback_d: The ^ negates the items

   What does ``[^0-9.]+`` mean?

Character Classes
============================

.. activecode:: regex_char_classes_v2
    :caption: Matching character classes

    Run the code below to see what it prints.
    ~~~~
    import re

    str1 = "mat met m3t m!t m t mitten"
    res1 = re.findall("m.t", str1)
    print(res1)

    str2 = "barbarer5@umich.edu uche@umich.edu lucy@umich.edu"
    res2 = re.findall("\w+@\w+", str2)
    print(res2)

    str3 = "mat met m3t m!t mitten"
    res3 = re.findall("\sm.t\s", str3)
    print(res3)

    str4 = "0013 23 093 000029 320 888"
    res4 = re.findall("0*\d\d", str4)
    print(res4)



.. dragndrop:: regex_char_classes_dnd
    :practice: T
    :feedback: Look at the code above.
    :match_1: .|||Any single character other than a newline
    :match_2: \d|||A digit (0-9)
    :match_3: \w|||A word character which is alphanumeric plus underscore
    :match_4: \s|||A whitespace character (including space, tab, and newline)

    Drag each item to what it matches


.. activecode:: regex_char_classes_uppercase
    :caption: Matching character classes

    Run the code below to see what it prints.
    ~~~~
    import re

    str1 = 'From: stephen.marquard@uct.ac.za Sat Jan walk@12  5 09:14:16 2008'
    res1 = re.findall('\S+@\S+', str1)
    print(res1)

    str2 = "What?  Come here, 24601!"
    res2 = re.findall("\W+", str2)
    print(res2)

    res3 = re.findall("\D+", str2)
    print(res3)


.. dragndrop:: regex_char_classes2_dnd
    :practice: T
    :feedback: Look at the code above.
    :match_1: \W|||Any non-word character (not alphanumeric or underscore)
    :match_2: \S|||Any non-whitespace character (not space, tab, or newline)
    :match_3: \D|||Any non-digit character (not 0-9).

    Drag each item to what it matches


Escaping Special Characters
===============================

If you want to match something that is normally a special character in regex
you must escape it by adding a `\\` in front of it.

.. activecode:: regex_escape_char
    :caption: Matching special characters

    Run the code below to see what it prints.
    ~~~~
    import re

    str1 = "me. you? us. them. when!"
    res1 = re.findall("\w+\.", str1)
    print(res1)

    res2 = re.findall("\w+\?", str1)
    print(res2)

    str3 = "a + b and c + d"
    res3 = re.findall("\w \+ \w", str3)
    print(res3)


.. mchoice:: regex_num_matches_escape_v2_mc
    :practice: T
    :answer_a: 1
    :answer_b: 2
    :answer_c: 3
    :answer_d: 4
    :correct: c
    :feedback_a: It will match three digits followed by a period and then 2 digits
    :feedback_b: It will match three digits followed by a period and then 2 digits
    :feedback_c: It will match three digits followed by a period and then 2 digits
    :feedback_d: It will match three digits followed by a period and then 2 digits

    How many items will be in the list that the following code prints?

    .. code-block::

        import re
        str = "302.33 64.52 204.24 532.2 1.23 323.320"
        res = re.findall("\d{3}\.\d{2}",str)
        print(res)


Greedy and Non-Greedy Matching
===============================

Matching is usually greedy.

.. activecode:: regex_greedy_vs_not
    :caption: Greedy and not matching examples

    Run the code below to see what it prints.
    ~~~~
    import re

    str1 = 'From: Using the : character'
    res1 = re.findall('F.+:', str1)
    print(res1)

    res2 = re.findall('F.+?:', str1)
    print(res2)


.. fillintheblank:: regex_not_greedy_char
    :practice: T

    What character can you add after a quantifier like '+' or '*' to make it not greedy?

    - :\?: Adding the ? will make it not greedy
      :.*: Look at the code above.

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share answers.

.. groupsub:: regex_groupsub
   :limit: 3
