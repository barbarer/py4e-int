Multiple Choice Questions
--------------------------

.. mchoice:: Exercises_question11_1
   :practice: T
   :answer_a: Any line containing the word 'From'
   :answer_b: Any line that starts with 'From'
   :answer_c: Any line that starts with 'From:'
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! The regex equation will match with any line beginning with 'From:'.

   What will the following code print?

   .. code-block:: python

      import re
      hand = open('mbox-short.txt')
      for line in hand:
          line = line.rstrip()
          if re.search('^From:', line):
              print(line)

.. mchoice:: Exercises_question11_2
   :practice: T
   :answer_a: import regex
   :answer_b: import re
   :answer_c: import Regex
   :answer_d: import Re
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! This is how to import the regex library.
   :feedback_c: Try again!
   :feedback_d: Try again!

   Which of the following options is the correct way to import the regex library?

.. mchoice:: Exercises_question11_3
   :practice: T
   :answer_a: [0-9]
   :answer_b: \D
   :answer_c: \d
   :answer_d: \w
   :correct: a, c
   :feedback_a: Correct! This is one way to match all digits using regex.
   :feedback_b: Try again!
   :feedback_c: Correct! \d matches any digit.
   :feedback_d: Try again!

   Which of these option(s) will match digits in a string?

.. mchoice:: Exercises_question11_4
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


.. mchoice:: Exercises_question11_5
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! The '+' character in regex is greedy, therefore it will match with the entire string and not just one email.

   True or false, the following code will match only the first email(up to the @ sign) in the string?

   .. code-block:: python

      import re
      stri = 'From: stephen.a.smith@espn.com, drake@hotmail.com, frenchMontana@gmail.com'
      stri = stri.rstrip()
      print(re.findall('From:.+@', stri))

.. mchoice:: Exercises_question11_6
   :answer_a: X-DSPAM-Probability: Accurate
   :answer_b: X-DSPAM-Confidence: 0.8475
   :answer_c: X-Wolverine-Confidence: 1
   :answer_d: X Wolverine-Confidence: 0.53
   :correct: b, c
   :feedback_a: Try again!
   :feedback_b: Correct! This matches the given regex equation.
   :feedback_c: Correct! This line matches with the given regex equation.
   :feedback_d: Try again!

   Which of the following options will the regular expression ^X-.*: [0-9.]+ match with?

.. mchoice:: Exercises_question11_7
   :practice: T
   :answer_a: 0.8295
   :answer_b: X-DSPAM-Confidence: 0.8475
   :answer_c: 1
   :answer_d: X Wolverine-Confidence: 0.53
   :correct: a, c
   :feedback_a: Correct! The parentheses contains what will be printed.
   :feedback_b: Try again!
   :feedback_c: Correct! This line matches with the given regex equation.
   :feedback_d: Try again!

   Which of the following options will be printed using the regular expression ^X-.*: ([0-9.]+)?

.. mchoice:: Exercises_question11_8
   :practice: T
   :answer_a: re.findall('\$[0-9\.]+', x)
   :answer_b: re.findall('$[\d.]+', x)
   :answer_c: re.findall('\$[\d.], x')
   :answer_d: re.findall('\$[0-9.]+', x)
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct! Another way to do this would be to use the regex equation '\$[\d.]+'.

   Which of the following regex equations will match any price found in the string 'x'?


.. mchoice:: Exercises_question11_9
   :practice: T
   :answer_a: # grep '^Umich' mbox-short.txt
   :answer_b: $ grep '^UMich' mbox-short.txt
   :answer_c: $ grep 'UMich' mbox-short.txt
   :answer_d: # grep 'UMich' mbox-short.txt
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! This is the proper use of the grep command-line.
   :feedback_c: Try again!
   :feedback_d: Try again!

   Which of these command lines will match lines in mbox-short.txt starting with 'UMich'?


.. mchoice:: Exercises_question11_10
   :practice: T
   :answer_a: help()
   :answer_b: dir(regex)
   :answer_c: dir(re)
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! This will return a list containing all the methods of the regex library.

   If you are having trouble remembering what methods the regex library contains, which command can you use to find said methods?
