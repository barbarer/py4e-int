Looping and counting
--------------------
The following program counts the number of times the letter
"r" appears in a string:

.. codelens:: strCount
   :question: What is the value of count after the line with the red arrow executes?
   :breakline: 5
   :feedback: Use the variables box to look at the current value of count.
   :correct: globals.count

   word = 'raspberry'
   count = 0
   for letter in word:
       if letter == 'r':
           count = count + 1
   print(count)


This program demonstrates another pattern of computation called a
*counter*. The variable ``count`` is initialized
to 0 and then incremented each time an "r" is found. When the
loop exits, ``count`` contains the result: the total number of
r's.

.. mchoice:: str-count-mc-t
   :practice: T
   :answer_a: 1
   :answer_b: 2
   :answer_c: 3
   :answer_d: 4
   :correct: d
   :feedback_a: This is the value count starts at.
   :feedback_b: The letter t appears more than 2 times in "peanut butter".
   :feedback_c: Keep in mind the value count starts at.
   :feedback_d: Correct! Count starts at 1 and then increases 3 times - 1 for each t in "peanut butter".

   What is printed by the following statements:

   .. code-block:: python

      s = "peanut butter"
      count = 1
      for char in s:
          if char is t:
          count += 1
      print(count)

.. tabbed:: str-count-fix

        .. tab:: Question

           There are three errors in the following code. Fix the function so it takes a string and a
           character as arguments and returns the count of the character within the string.

           .. activecode:: str-count-fixq
               :nocodelens:

               def count(text, aChar):
               lettercount = 0
                   for c in text:
                       if c == aChar:
                           lettercount = lettercount + 3
                   return text

               print(count("banana","a"))

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: strCountDisc
