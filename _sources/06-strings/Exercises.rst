Multiple Choice Questions
--------------------------
.. mchoice:: str-ex-mc-index
    :practice: T
    :answer_a: yyyyy
    :answer_b: 55555
    :answer_c: n
    :answer_d: Error, you cannot combine all those things together.
    :correct: a
    :feedback_a: Yes, s[1] is y and the index of n is 5, so 5 y characters.  It is important to realize that the index method has precedence over the repetition operator.  Repetition is done last.
    :feedback_b: Close.  5 is not repeated, it is the number of times to repeat.
    :feedback_c: This expression uses the index of n
    :feedback_d: This is fine, the repetition operator used the result of indexing and the index method.


    What is printed by the following statements?

    .. code-block:: python

      s = "python rocks"
      print(s[1] * s.index("n"))

.. mchoice:: str-ex-mc-red
    :practice: T
    :answer_a: 1
    :answer_b: 9
    :answer_c: 10
    :correct: a
    :feedback_a: The find function returns the index of the first position that contains the given string.
    :feedback_b: This would be true if it was pos = str.find(" is").
    :feedback_c: This would be true if it was pos = str.find(" is") and the first position was 1, but it is 0.

    What will be printed when the following executes?

    ::

      str = "His shirt is red"
      pos = str.find("is")
      print(pos)

.. mchoice:: str-ex-mc-end
    :practice: T
    :answer_a: i
    :answer_b: s
    :answer_c: is the end
    :correct: a
    :feedback_a: This will print the character at position 5 in the string which is i.  Remember that the first character is at position 0.
    :feedback_b: This would be true if the first character was at position 1 instead of 0.
    :feedback_c: This would be true if it returned from the given position to the end of the string, but that isn't what it does.

    What will be printed when the following executes?

    ::

      str = "This is the end"
      str = str[5]
      print(str)

.. mchoice:: str-ex-mc-hey
    :practice: T
    :answer_a: Hey
    :answer_b: hey
    :answer_c: HEY
    :correct: c
    :feedback_a: This would be correct if we had asked what the value of s3 was. What is the value of s1?
    :feedback_b: This would be true if we asked what the value of s2 was after the code executes.  What is the value of s1?
    :feedback_c: Strings are immutable, meaning they don't change.  Any function that changes a string returns a new string.  So s1 never changes unless you set it to a different string.

    What is the value of s1 after the following code executes?

    ::

      s1 = "HEY"
      s2 = s1.lower()
      s3 = s2.capitalize()

.. mchoice:: str-ex-mc-name
    :practice: T
    :answer_a: Mali is Mali
    :answer_b: Mali is 5
    :answer_c: 5 is Mali
    :answer_d: 5 is 5
    :correct: b
    :feedback_a: There are no double quotes around the last Mali so it will use the value of the variable Mali.
    :feedback_b: The first Mali is in double quotes so it will print the string Mali and the second Mali is not in double quotes so it will print the value of the variable Mali.
    :feedback_c: The first Mali is in double quotes and the second is not.
    :feedback_d: The first Mali is in double quotes so it is a string and the characters in the string will be printed.

    What would the following code print?

    ::

      Mali = 5
      print("Mali" + " is " + str(Mali))

.. mchoice:: str-ex-mc-print
    :practice: T
    :answer_a: t
    :answer_b: h
    :answer_c: c
    :answer_d: Error, you cannot use the [ ] operator with a string.
    :correct: b
    :feedback_a: Index locations do not start with 1, they start with 0.
    :feedback_b: Yes, index locations start with 0.
    :feedback_c: s[-3] would return c, counting from right to left.
    :feedback_d: [ ] is the index operator


    What is printed by the following statements?

    .. code-block:: python

      s = "python rocks"
      print(s[3])

.. mchoice:: str-ex-mc-add
    :practice: T
    :answer_a: tr
    :answer_b: ps
    :answer_c: nn
    :answer_d: Error, you cannot use the [ ] operator with the + operator.
    :correct: a
    :feedback_a: Yes, indexing operator has precedence over concatenation.
    :feedback_b: p is at location 0, not 2.
    :feedback_c: n is at location 5, not 2.
    :feedback_d: [ ] operator returns a string that can be concatenated with another string.


    What is printed by the following statements?

    .. code-block:: python

      s = "python rocks"
      print(s[2] + s[-5])

.. mchoice:: str-ex-mc-len
    :practice: T
    :answer_a: 11
    :answer_b: 12
    :correct: b
    :feedback_a: The blank counts as a character.
    :feedback_b: Yes, there are 12 characters in the string.


    What is printed by the following statements?

    .. code-block:: python

      s = "python rocks"
      print(len(s))


.. mchoice:: str-ex-mc-rose
    :practice: T
    :answer_a: Rose
    :answer_b: Rise
    :answer_c: Error
    :correct: c
    :feedback_a: Assignment is not allowed with strings.
    :feedback_b: Assignment is not allowed with strings.
    :feedback_c: Yes, strings are immutable.

    What is printed by the following statements:

    .. code-block:: python

      s = "Rose"
      s[1] = "i"
      print(s)


.. mchoice:: str-ex-mc-ball
    :practice: T
    :answer_a: Ball
    :answer_b: BALL
    :answer_c: LLAB
    :correct: c
    :feedback_a: Each item is converted to upper case before concatenation.
    :feedback_b: Each character is converted to upper case but the order is wrong.
    :feedback_c: Yes, the order is reversed due to the order of the concatenation.

    What is printed by the following statements:

    .. code-block:: python

      s = "ball"
      r = ""
      for item in s:
          r = item.upper() + r
      print(r)

.. mchoice:: str-ex-mc-rock
    :practice: T
    :answer_a: rockrockrock
    :answer_b: rock rock rock
    :answer_c: rocksrocksrocks
    :answer_d: Error, you cannot use repetition with slicing.
    :correct: a
    :feedback_a: Yes, rock starts at 7 and goes through 10.  Repeat it 3 times.
    :feedback_b: Repetition does not add a space.
    :feedback_c: Slicing will not include the character at index 11.  Just up to it (10 in this case).
    :feedback_d: The slice will happen first, then the repetition.  So it is ok.


    What is printed by the following statements?

    .. code-block:: python

      s = "python rocks"
      print(s[7:11] * 3)
