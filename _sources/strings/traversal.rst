Traversal through a string with a loop
--------------------------------------
.. index::
    single: Traversal
    pair: Loop; Traversal
    pair: For; Loop
    pair: For; Statement


A lot of computations involve processing a string one character at a
time. Often they start at the beginning, select each character in turn,
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
            backwards to the first character in the string, printing each letter on a separate line,
            except backwards. For reference, the codelens above shows an example of a word printed letter by letter.

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
    :answer_a: 1
    :answer_b: 2
    :answer_c: 3
    :correct: a
    :feedback_a: Yes, idx goes through the odd numbers starting at 1. r is at position 2, 7, and 8.
    :feedback_b: r is at positions 2, 7, and 8. idx starts at 1, not 0.
    :feedback_c: There are 3 r characters but idx does not take on the correct index values.


    How many times is the letter r printed by the following statements?

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
    :feedback_a: Iteration by item will process once for each item in the sequence.
    :feedback_b: The blank is part of the sequence.
    :feedback_c: Yes, there are 12 characters, including the blank.
    :feedback_d: The for statement can iterate over a sequence item by item.


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
    :feedback_a: The for loop visits each index but the selection (conditional) only prints some of them.
    :feedback_b: Yes, it will print all the characters at even index positions and the i character appears twice in an even location.
    :feedback_c: i is at positions 1, 4, 7, and 10.
    :feedback_d: The for statement can have any statements in its body, including if as well as for.


    How many times is the letter i printed by the following statements?

    .. code-block:: python

      s = "mississippi"
      for idx in range(len(s)):
          if idx % 2 == 0:
              print(s[idx])
