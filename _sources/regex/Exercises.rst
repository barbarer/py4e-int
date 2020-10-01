Multiple Choice Questions
--------------------------

.. mchoice:: re-exercise1
    :practice: T
    :answer_a: Any line containing the word 'From'
    :answer_b: Any line that starts with 'From'
    :answer_c: Any line that starts with 'From:'
    :answer_d: Any line containing the word 'From:'
    :correct: c
    :feedback_a: The '^' symbol matches strings from the beginning of the line.
    :feedback_b: This will include the colon!
    :feedback_c: Correct! The regex equation will match with any line beginning with 'From:'.
    :feedback_d: The '^' symbol matches strings from the beginning of the line.

    What will the following code print?

    .. code-block:: python

      import re
      hand = open('mbox-short.txt')
      for line in hand:
          line = line.rstrip()
          if re.search('^From:', line):
              print(line)

.. mchoice:: re-exercise2
    :practice: T
    :answer_a: import regex
    :answer_b: import re
    :answer_c: import Regex
    :answer_d: import Re
    :correct: b
    :feedback_a: We shorten regex a little more!
    :feedback_b: This is how to import the regex library.
    :feedback_c: Try shortening regex and using all lowercase. 
    :feedback_d: Close, but Python is case sensitive.

    Which of the following options is the correct way to import the regex library?

.. mchoice:: re-exercise3
    :practice: T
    :multiple_answers:
    :answer_a: [0-9]
    :answer_b: \D
    :answer_c: \d
    :answer_d: \w
    :correct: a, c
    :feedback_a: This is one way to match all digits using regex.
    :feedback_b: \D matches any non-digit character.
    :feedback_c: \d matches any digit.
    :feedback_d: \w matches word characters, not digits.

    Which of these option(s) will match digits in a string? Select all that apply.

.. mchoice:: re-exercise4
    :answer_a: It will cost you $1.00
    :answer_b: From: stephen.marquard@uct.ac.za $
    :answer_c: $2.50 is your change
    :answer_d: You owe three dollars.
    :correct: a, c
    :feedback_a: There is a dollar sign followed by one or more characters.
    :feedback_b: The dollar sign needs to be followed my at least one character.
    :feedback_c: The dollar sign in this line is followed by more than one character.
    :feedback_d: The string needs to include a dollar sign.

    Which of these lines will be matched when the following code is run?

    .. code-block:: python

      import re
      hand = open('mbox-short.txt')
      for line in hand:
          line = line.rstrip()
          if re.search('$.+', line):
              print(line)


.. mchoice:: re-exercise5
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again!
    :feedback_b: The '+' character in regex is greedy, therefore it will match with the entire string and not just one email.

    True or false? The following code will match only the first email(up to the @ sign) in the string?

    .. code-block:: python

      import re
      stri = 'From: stephen.a.smith@espn.com, drake@hotmail.com, frenchMontana@gmail.com'
      stri = stri.rstrip()
      print(re.findall('From:.+@', stri))

.. mchoice:: re-exercise6
    :multiple_answers:
    :answer_a: X-DSPAM-Probability: Accurate
    :answer_b: X-DSPAM-Confidence: 0.8475
    :answer_c: X-Wolverine-Confidence: 1
    :answer_d: X Wolverine-Confidence: 0.53
    :correct: b, c
    :feedback_a: This is missing a digit for the equation to match.
    :feedback_b: This matches the given regex equation.
    :feedback_c: This line matches with the given regex equation.
    :feedback_d: This is missing a dash between 'X' and other letters.

    Which of the following options will the regular expression ^X-.*: [0-9.]+ match with?

.. mchoice:: re-exercise7
    :multiple_answers:
    :practice: T
    :answer_a: 0.8295
    :answer_b: X-DSPAM-Confidence: 0.8475
    :answer_c: 1
    :answer_d: X Wolverine-Confidence: 0.53
    :correct: a, c
    :feedback_a: The parentheses contains what will be printed.
    :feedback_b: What do the parentheses signify?
    :feedback_c: This line matches with the given regex equation.
    :feedback_d: Try again, parentheses contain what will be printed.

    Which of the following options will be printed using the regular expression ^X-.*: ([0-9.]+)?

.. mchoice:: re-exercise8
    :practice: T
    :answer_a: re.findall('\$[0-9\.]+', x)
    :answer_b: re.findall('$[\d.]+', x)
    :answer_c: re.findall('\$[\d.], x')
    :answer_d: re.findall('\$[0-9.]+', x)
    :correct: d
    :feedback_a: Since the period is within brackets, the wildcard use doesn't work.
    :feedback_b: The '$' needs to be escaped with a '\'
    :feedback_c: The string (x) should not be included in the regex string.
    :feedback_d: Another way to do this would be to use the regex equation '\$[\d.]+'.

    Which of the following regex equations will match any price found in the string 'x'?


.. mchoice:: re-exercise9
    :practice: T
    :answer_a: # grep '^Umich' mbox-short.txt
    :answer_b: $ grep '^UMich' mbox-short.txt
    :answer_c: $ grep 'UMich' mbox-short.txt
    :answer_d: # grep 'UMich' mbox-short.txt
    :correct: b
    :feedback_a: grep is case sensitive!
    :feedback_b: This is the proper use of the grep command-line.
    :feedback_c: This is missing a character!
    :feedback_d: Not quite the correct symbol at the start of the line.

    Which of these command lines will match lines in mbox-short.txt starting with 'UMich'?


.. mchoice:: re-exercise10
    :practice: T
    :answer_a: help()
    :answer_b: dir(regex)
    :answer_c: dir(re)
    :answer_d: import re
    :correct: c
    :feedback_a: This will trigger the interactive help system, but not the methods of regex.
    :feedback_b: We shorten regex to something shorter.
    :feedback_c: This will return a list containing all the methods of the regex library.
    :feedback_d: This will import the regular expression module.

    If you are having trouble remembering what methods the regex library contains, which command can you use to find said methods?
