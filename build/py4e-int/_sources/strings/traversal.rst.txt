Traversal through a string with a loop
--------------------------------------
.. index::
    single: Traversal
    pair: Loop; Traversal
    pair: For; Loop
    pair: For; Statement


A lot of computations involve processing a string one character at a
time. Often, they start at the beginning, select each character in turn,
do something to it, and continue until the end. This pattern of
processing is called a *traversal*. One way to write a
traversal is with a ``while`` loop:

.. codelens:: stringWhileLoop
    :showoutput:

    fruit = "fruit"
    index = 0
    while index < len(fruit):
        letter = fruit[index]
        print(letter)
        index = index + 1


This loop traverses the string and displays each letter on a line by
itself. The loop condition is ``index < len(fruit)``, so when
``index`` is equal to the length of the string, the condition
is false, and the body of the loop is not executed. The last character
accessed is the one with the index ``len(fruit)-1``, which is
the last character in the string.

.. tabbed:: str-trav-wc-backwards

        .. tab:: Question

            Write a ``while`` loop that starts at the last character in the string and works its way
            backwards to the first character in the string, printing each letter on a separate line.
            For reference, the CodeLens above shows an example of a word printed letter by letter.

            .. activecode::  str-trav-backwardsq
                :nocodelens:


        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: strBackwardsDisc


Another way to write a traversal is with a ``for`` loop:

.. activecode:: string-forLoop
    :caption: strings with for loops

    fruit = "peach"
    for char in fruit:
        print(char)


Each time through the loop, the next character in the string is assigned
to the variable ``char``. The loop continues until no
characters are left.

.. mchoice:: str-trav-mc-plus2
    :practice: T
    :answer_a: 0
    :answer_b: 1
    :answer_c: 2
    :answer_d: 3
    :correct: b
    :feedback_a: Incorrect! "strawberry" has two consecutive r's, so the way the loop is set up, this answer is impossible. Try again.
    :feedback_b: Correct! idx starts at 1 and continues to the next odd number. There is only one 'r' whose index is an odd number.
    :feedback_c: Incorrect! This would be true if idx started at 0. Try again.
    :feedback_d: Incorrect! This would be true if idx incremented by 1 each loop. Try again.


    How many times is the letter 'r' printed by the following statements?

    .. code-block:: python

      s = "strawberry"
      idx = 1
      while idx < len(s):
          print(s[idx])
          idx = idx + 2

.. mchoice:: str-trav-mc-hello
    :practice: T
    :answer_a: 10
    :answer_b: 11
    :answer_c: 12
    :answer_d: Error, the for statement needs to use the range function.
    :correct: c
    :feedback_a: Incorrect! Iteration by item will print "HELLO" once for each character in the string. Try again.
    :feedback_b: Incorrect! The space is part of the string, so "HELLO" will be printed for it as well. Try again.
    :feedback_c: Correct! There are 12 characters in the string, including the space, and "HELLO" is printed once for each character.
    :feedback_d: Incorrect! The for statement can iterate over a sequence item by item. Try again.


    How many times is the word HELLO printed by the following statements?

    .. code-block:: python

      s = "green grapes"
      for ch in s:
          print("HELLO")

.. mchoice:: str-trav-mc-mod
    :practice: T
    :answer_a: 1
    :answer_b: 2
    :answer_c: 4
    :answer_d: Error, the for statement cannot have an if in its body.
    :correct: b
    :feedback_a: Incorrect! This program only prints the characters at even index positions. Try again.
    :feedback_b: Correct! It will print all the characters at even index positions and the i character appears twice in an even location.
    :feedback_c: Incorrect! The for loop visits each index but the if statement means only some of their values are printed. Try again.
    :feedback_d: Incorrect! for statements can have any kind of statements in their bodies, including if statements. Try again.


    How many times is the letter i printed by the following statements?

    .. code-block:: python

      s = "mississippi"
      for idx in range(len(s)):
          if idx % 2 == 0:
              print(s[idx])
