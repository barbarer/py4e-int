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

.. code-block:: python

   # Search for lines that start with 'F', follow by 2 characters, followed by 'm:'
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

.. mchoice:: question11_2_1
   :practice: T
   :answer_a: +
   :answer_b: ^
   :answer_c: *
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! The asterisk is used to match zero or more characters.

   Which symbol in regex matches zero or more characters in the search string?

We can further narrow down the lines that we match using a repeated
*wild card* character in the following example:

.. code-block:: python

   # Search for lines that start with From and have an @ sign
   import re
   hand = open('mbox-short.txt')
   for line in hand:
       line = line.rstrip()
       if re.search('^From:.+@', line):
           print(line)

The search string ``^From:.+@`` will successfully match lines that start
with "From:", followed by one or more characters (\ ``.+``\ ), followed by an
at-sign. So this will match the following line:

.. code-block::

   From: stephen.marquard@uct.ac.za


You can think of the ``.+`` wildcard as expanding to match all the
characters between the colon character and the at-sign.

.. code-block::

   From:.+@

.. mchoice:: question11_2_2
   :practice: T
   :answer_a: It will cost you $1.00
   :answer_b: From: stephen.marquard@uct.ac.za $
   :answer_c: $2.50 is your change
   :correct: a, c
   :feedback_a: Correct! There is a dollar sign followed by one or more characters.
   :feedback_b: Try again!
   :feedback_c: Correct. The dollar sign in this line is followed by more than one character.

   Which of these lines will be matched when the following code is run?

   .. code-block:: python

      import re
      hand = open('mbox-short.txt')
      for line in hand:
          line = line.rstrip()
          if re.search('$.+', line):
              print(line)

It is good to think of the plus and asterisk characters as "pushy". For
example, the following string would match the last at-sign in the string
as the ``.+`` pushes outwards, as shown below:

.. code-block::

   From: stephen.marquard@uct.ac.za, csev@umich.edu, and cwen @iupui.edu


It is possible to tell an asterisk or plus sign not to be so "greedy" by
adding another character. See the detailed documentation for information
on turning off the greedy behavior.

.. mchoice:: question11_2_3
   :answer_a: From: stephen.marquard@
   :answer_b: From: stephen.marquard@uct.ac.za, csev@
   :answer_c: From: stephen.marquard@uct.ac.za, csev@umich.edu, and cwen @
   :answer_d: All of the above
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! The + and * characters are pushy, so this will capture the entire statement and not just to the first @ sign.
   :feedback_d: Try again! Remeber the + and * characters in regex are pushy!

   Looking at the code-block above, what parts of it will be matched by the regex equation re.search('From:.+@')
