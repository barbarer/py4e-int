Character Matching in Regular Expressions
-----------------------------------------

.. index::
   single: Wild Card
   single: Greedy

There are a number of other special characters that let us build even
more powerful regular expressions. The most commonly used special
character is the period or full stop, which matches any character.


In the following example, the regular expression ``F..m:`` would match any
of the strings "From:", "Fxxm:", "F12m:", or "F!@m:" since the period
characters in the regular expression match any character.

.. activecode:: re_char_ac1
    :datafile: mbox-short.txt

    This code searches for lines that start with 'F', follow by 2 characters, followed by 'm:'
    ~~~~
    import re
    hand = open('mbox-short.txt')
    for line in hand:
        line = line.rstrip()
        if re.search('^F..m:', line):
            print(line)

This is particularly powerful when combined with the ability to indicate
that a character can be repeated any number of times using the ``*`` or
``+`` characters in your regular expression. These special characters mean
that instead of matching a single character in the search string, they
match zero-or-more characters (in the case of the asterisk) or
one-or-more of the characters (in the case of the plus sign).

.. mchoice:: re_char_mc_symbol
    :practice: T
    :answer_a: +
    :answer_b: ^
    :answer_c: *
    :answer_d: .
    :correct: c
    :feedback_a: The plus is used to match more than one character.
    :feedback_b: The carrot is used to match characters at the beginning of a string.
    :feedback_c: Correct! The asterisk is used to match zero or more characters.
    :feedback_d: The period is used to match any character.

    Which symbol in regex matches zero or more characters in the search string?

We can further narrow down the lines that we match using a repeated
*wild card* character in the following example:

.. activecode:: re_char_ac2
    :datafile: mbox-short.txt

    This code searches for lines that start with 'From:' and have an '@' symbol.
    ~~~~
    import re
    hand = open('mbox-short.txt')
    for line in hand:
        line = line.rstrip()
        if re.search('^From:.+@', line):
            print(line)

The search string ``^From:.+@`` will successfully match lines that start
with "From:", followed by one or more characters (``.+``), followed by an
at-sign. So this will match the following line:

.. code-block::

    From: stephen.marquard@uct.ac.za

You can think of the ``.+`` wildcard as expanding to match all the
characters between the colon character and the at-sign.

.. code-block::

    From:.+@

It is good to think of the plus and asterisk characters as "pushy" or "greedy". For
example, the following string would match the last at-sign in the string
as the ``.+`` pushes outwards, as shown below:

.. code-block::

   From: stephen.marquard@uct.ac.za, csev@umich.edu, and cwen @iupui.edu

It is possible to tell an asterisk or plus sign not to be so "greedy" by
adding another character. See the detailed documentation for information
on turning off the greedy behavior.

.. mchoice:: re_char_mc_match
    :practice: T
    :multiple_answers:
    :answer_a: It will cost you $1.00
    :answer_b: From: stephen.marquard@uct.ac.za $
    :answer_c: $2.50 is your change
    :answer_d: Your change is two dollars and fifty cents.
    :correct: a, c
    :feedback_a: Correct! There is a dollar sign followed by one or more characters.
    :feedback_b: The .+ indicates that there need to be characters following the $.
    :feedback_c: Correct. The dollar sign in this line is followed by more than one character.
    :feedback_d: Try again! There needs to be at least a $ in the line.

    Select **all** of the lines that will be printed when the following code is run.
    (&#92;&#92;$ is used to match the character '$')

    .. code-block:: python

        import re
        hand = open('mbox-short-re2.txt')
        for line in hand:
            line = line.rstrip()
            if re.search('\$.+', line):
                print(line)

.. mchoice:: re_char_mc_matchAbove
    :answer_a: From: stephen.marquard@
    :answer_b: From: stephen.marquard@uct.ac.za, csev@
    :answer_c: From: stephen.marquard@uct.ac.za, csev@umich.edu, and cwen @
    :answer_d: From: stephen.marquard@uct.ac.za, csev@umich.edu, and cwen @iupui.edu
    :correct: c
    :feedback_a: '^From:.+@' will match this.
    :feedback_b: Remember the + and * characters in regex are pushy!
    :feedback_c: Correct! The + and * characters are greedy, so this will capture the entire statement and not just to the first @ sign.
    :feedback_d: It stops at the last @

    Looking at the code-block below, what parts of it will be matched by the regex equation ``re.search('From:.+@')``?

    .. code-block:: python

        From: stephen.marquard@uct.ac.za, csev@umich.edu, and cwen @iupui.edu
