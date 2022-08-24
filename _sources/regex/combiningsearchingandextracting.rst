Combining Searching and Extracting
----------------------------------

If we want to find numbers on lines that start with the string "X-" such
as:

.. code-block::

   X-DSPAM-Confidence: 0.8475
   X-DSPAM-Probability: 0.0000


we don't just want any floating-point numbers from any lines. We only
want to extract numbers from lines that have the above syntax.

We can construct the following regular expression to select the lines:

.. code-block::

   ^X-.*: [0-9.]+

.. mchoice:: re-combo-mc-match
    :practice: T
    :multiple_answers:
    :answer_a: X-DSPAM-Probability: Accurate
    :answer_b: X-DSPAM-Confidence: 0.8475
    :answer_c: X-Wolverine-Confidence: 1
    :answer_d: X Wolverine-Confidence: 0.53
    :correct: b, c
    :feedback_a: This regex equation will not match "Accurate" at the end, it is looking for numbers.
    :feedback_b: This matches the given regex equation.
    :feedback_c: This line matches with the given regex equation.
    :feedback_d: This equation will not match the "-" after the X.

    Which of the following options will the regular expression ``^X-.*: [0-9.]+`` match with? Select all that apply.

Translating this, we are saying, we want lines that start with ``X-``\ ,
followed by zero or more characters (\ ``.*``\ ), followed by a colon (\ ``:``\ )
and then a space. After the space we are looking for one or more
characters that are either a digit (0-9) or a period ``[0-9.]+``. Note
that inside the square brackets, the period matches an actual period
(i.e., it is not a wildcard between the square brackets).

This is a very tight expression that will pretty much match only the
lines we are interested in as follows:

.. activecode:: re_combo_ac1
    :datafile: mbox-short.txt
    :nocodelens:

    Search for lines that start with 'X', followed by any non-whitespace characters
    and ':', followed by a space and any number, where the number can include a decimal
    ~~~~
    import re
    hand = open('mbox-short.txt')
    for line in hand:
        line = line.rstrip()
        if re.search('^X\S*: [0-9.]+', line):
            print(line)

When we run the program, we see the data nicely filtered to show only
the lines we are looking for.

But now we have to solve the problem of extracting the numbers. While it
would be simple enough to use ``split``\ , we can use another
feature of regular expressions to both search and parse the line at the
same time.


Parentheses are another special character in regular expressions. When
you add parentheses to a regular expression, they are ignored when
matching the string. But when you are using ``findall()``\ ,
parentheses indicate that while you want the whole expression to match,
you only are interested in extracting a portion of the substring that
matches the regular expression.


So we make the following change to our program:

.. activecode:: re_combo_ac2
    :datafile: mbox-short.txt
    :nocodelens:

    Search for lines that start with 'X', followed by any non-whitespace characters
    and ':', followed by a space and any number. The number can contain a decimal
    ~~~~
    import re
    s = ['X-DSPAM-Confidence: 0.8475', 'X-DSPAM-Probability: 0.0000', 'X-DSPAM-Confidence: 0.6178', 'X-DSPAM-Probability: 0.0000']
    for item in s:
        x = re.findall('^X\S*: ([0-9.]+)', item)
        if len(x) > 0:
            print(x)

Instead of calling ``search()``\ , we add parentheses around the
part of the regular expression that represents the floating-point number
to indicate we only want ``findall()`` to give us back the
floating-point number portion of the matching string.

The numbers in the output are still in a list and need to be converted from strings to
floating point, but we have used the power of regular expressions to
both search and extract the information we found interesting.

As another example of this technique, if you look at the file there are
a number of lines of the form:

.. code-block::

   Details: http://source.sakaiproject.org/viewsvn/?view=rev&rev=39772


If we wanted to extract all of the revision numbers (the integer number
at the end of these lines) using the same technique as above, we could
write the following program:

.. activecode:: re_combo_ac3
    :datafile: mbox-short.txt
    :nocodelens:

    Search for lines that start with 'Details: rev=' followed by numbers
    and '.' Then print the number if it is greater than zero
    ~~~~
    import re
    hand = open('mbox-short.txt')
    for line in hand:
        line = line.rstrip()
        x = re.findall('^Details:.*rev=([0-9.]+)', line)
        if len(x) > 0:
            print(x)

Translating our regular expression, we are looking for lines that start
with ``Details:``\ , followed by any number of characters (\ ``.*``\ ), followed
by ``rev=``\ , and then by one or more digits. We want to find lines that
match the entire expression but we only want to extract the integer
number at the end of the line, so we surround ``[0-9]+`` with parentheses.

Remember that the ``[0-9]+`` is "greedy" and it tries to make as large a
string of digits as possible before extracting those digits. This
"greedy" behavior is why we get all five digits for each number. The
regular expression library expands in both directions until it
encounters a non-digit, or the beginning or the end of a line.

.. mchoice:: re-combo-mc-a
    :practice: T
    :multiple_answers:
    :answer_a: 'aa'
    :answer_b: 'aaaaaa'
    :answer_c: 'aaaaa'
    :answer_d: 'a+'
    :correct: a,b,c
    :feedback_a: + is greedy so it will match as many 'a's as it can.
    :feedback_b: + is greedy in regex and will obtain the most 'a's as possible.
    :feedback_c: + is greedy so it will match as many 'a's as it can.
    :feedback_d: findall would only return the 'a'

    Which of these strings would be returned by re.findall('a+', string)? Select all that apply.


Now we can use regular expressions to redo an exercise from earlier in
the book where we were interested in the time of day of each mail
message. We looked for lines of the form:

.. code-block::

   From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008


and wanted to extract the hour of the day for each line. Previously we
did this with two calls to ``split``. First the line was split
into words and then we pulled out the fifth word and split it again on
the colon character to pull out the two characters we were interested
in.

While this worked, it actually results in pretty brittle code that is
assuming the lines are nicely formatted. If you were to add enough error
checking (or a big try/except block) to insure that your program never
failed when presented with incorrectly formatted lines, the code would
balloon to 10-15 lines of code that was pretty hard to read.

We can do this in a far simpler way with the following regular
expression:

.. code-block::

   ^From .* [0-9][0-9]:


The translation of this regular expression is that we are looking for
lines that start with ``From`` (note the space), followed by any number
of characters (\ ``.*``\ ), followed by a space, followed by two digits
``[0-9][0-9]``\ , followed by a colon character. This is the definition of
the kinds of lines we are looking for.

In order to pull out only the hour using ``findall()``\ , we add
parentheses around the two digits as follows:

.. code-block::

   ^From .* ([0-9][0-9]):


This results in the following program:

.. activecode:: re_combo_ac4
    :datafile: mbox-short.txt
    :nocodelens:

    Search for lines that start with From and a character followed by a two
    digit number between 00 and 99, followed by ':'
    ~~~~
    import re
    hand = open('mbox-short.txt')
    for line in hand:
        line = line.rstrip()
        x = re.findall('^From .* ([0-9][0-9]):', line)
        if len(x) > 0:
            print(x)

.. dragndrop:: re-combo-dnd
    :practice: T
    :feedback: Look above for references.
    :match_1: ^|||Matches with the beginning of the line.
    :match_2: .|||Matches any character (a wildcard).
    :match_3: \S|||Matches a non-whitespace character.
    :match_4: *|||Match the previous character(s) zero or more times (greedy).
    :match_5: +|||Match the previous character(s) one or more times (greedy).
    :match_6: ()|||Allow you to extract a particular subset of the matched string rather than the whole string.

     Match the following symbols with their function in a regular expression equation.
