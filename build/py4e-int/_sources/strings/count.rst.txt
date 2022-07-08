Looping and counting
--------------------
.. index::
    single: Counter
    pair: Looping; Strings
    pair: Looping; Counting
    single: Encapsulation

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
    :answer_a: 0
    :answer_b: 3
    :answer_c: 4
    :answer_d: Nothing, this is an infinite loop
    :correct: b
    :feedback_a: Incorrect! count is initialized to 0, but is then incremented by the for loop. Try again.
    :feedback_b: Correct! The letter t appears 3 times in "peanut butter".
    :feedback_c: Incorrect! The value of count is initially 0, not 1. Try again.
    :feedback_d: Incorrect! This for loop will eventually terminate because string s has a finite number of characters. Try again.

    What is printed by the following:

    .. code-block:: python

      s = "peanut butter"
      count = 0
      for char in s:
          if char == "t":
          	count = count + 1
      print(count)

.. tabbed:: str-count-fix

    .. tab:: Question

        There are four errors in the following code. Fix the function so it takes a string and a
        character as arguments and returns the count of the character within the string.

        .. activecode:: str-count-fixq
            :nocodelens:

            def count(text, aChar):
            	lettercount = 1
                for c in text:
                    if c = aChar:
                        count = count + 1
            return lettercount

            ====
            from unittest.gui import TestCaseGui
            class myTests(TestCaseGui):

                def testOne(self):
                    self.assertEqual(count('banana','a'),3,"Tested 'a' in 'banana'")
                    self.assertEqual(count('pineapple','a'),1,"Tested 'a' in 'pineapple'")
                    self.assertEqual(count('pepperoni pizza','p'),4,"Tested 'p' in 'pepperoni pizza'")
                    self.assertEqual(count('racecar','r'),2,"Tested 'r' in 'racecar'")

            myTests().main()

    .. tab:: Answer

	In line 2, ``lettercount`` should be initialized to 0. In line 4, there should be a ``==``, not a ``=``.
	In line 5, the variable name should be changed to ``lettercount``. In line 6, the return statement should be indented.

        .. activecode:: str-count-fixa
            :nocodelens:

            def count(text, aChar):
                lettercount = 0
                for c in text:
                    if c == aChar:
                        lettercount = lettercount + 1
            	return lettercount

    .. tab:: Discussion

        .. disqus::
            :shortname: interactivepython
            :identifier: strCountDisc
