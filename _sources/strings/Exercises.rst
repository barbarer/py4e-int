Multiple Choice Questions
--------------------------
.. mchoice:: str-ex-mc-index
    :practice: T
    :answer_a: yyyyy
    :answer_b: 55555
    :answer_c: y5
    :answer_d: TypeError
    :correct: a
    :feedback_a: Correct! s[1] = y and the index of n is 5, so y * 5 prints 5 y characters.
    :feedback_b: Incorrect! s.index("n") = 5, but it is multiplying something else. Try again.
    :feedback_c: Incorrect! The print statement contains multiplication. Try again.
    :feedback_d: Incorrect! Multiplying a string by an int is allowed. Try again.


    What is printed by the following statements?

    .. code-block:: python

      s = "python rocks"
      print(s[1] * s.index("n"))

.. mchoice:: str-ex-mc-red
    :practice: T
    :answer_a: 1
    :answer_b: 9
    :answer_c: 2
    :answer_d: pos
    :correct: a
    :feedback_a: Correct! The find function returns the index of the first position that contains the given string.
    :feedback_b: Incorrect! The find function returns the index of the FIRST position that contains the given string. Try again.
    :feedback_c: Incorrect! Remember, indices start at 0, not 1. Try again.
    :feedback_d: Incorrect! pos is a variable, so print will print its value. Try again.

    What will be printed when the following executes?

    ::

      str = "His shirt is red"
      pos = str.find("is")
      print(pos)

.. mchoice:: str-ex-mc-end
    :practice: T
    :answer_a: i
    :answer_b: ' '
    :answer_c: is fun
    :answer_d: This is fun
    :correct: a
    :feedback_a: Correct! This will print the character at position 5 in the string, which is i.
    :feedback_b: Incorrect! Remember, indices start at 0. Try again.
    :feedback_c: Incorrect! str[5] equals one specific character of the larger string. Try again.
    :feedback_d: Incorrect! Line 2 permanently changes the value that the variable str is assigned to. Try again.

    What will be printed when the following executes?

    ::

      str = "This is fun"
      str = str[5]
      print(str)

.. mchoice:: str-ex-mc-hey
    :practice: T
    :answer_a: heY
    :answer_b: hey
    :answer_c: HEY
    :answer_d: Hey
    :correct: d
    :feedback_a: Incorrect! Although strings are immutable, s1 gets reassigned to a different value than it begins with. Try again.
    :feedback_b: Incorrect! Strings are immutable, so line 3 just returns a new string and doesn't modify the original. Try again.
    :feedback_c: Incorrect! The capitalize method doesn't capitalize the entire word. Try again.
    :feedback_d: Correct! The capitalize method capitalizes the first letter of the word and lowercases the rest. Then, line 3 returns a new string without modifying the original.

    What is the value of s1 after the following code executes?

    ::

      s1 = "heY"
      s1 = s1.capitalize()
      s1.lower()

.. mchoice:: str-ex-mc-name
    :practice: T
    :answer_a: Mali is Mali
    :answer_b: Mali is 5
    :answer_c: 5 is Mali
    :answer_d: 5 is 5
    :correct: b
    :feedback_a: Incorrect! There are no quotes around the last Mali, so str() will use the value of the variable Mali. Try again.
    :feedback_b: Correct! The first Mali is in quotes, so it will print the string "Mali". The second Mali is not in quotes, so it will print the value of the variable Mali.
    :feedback_c: Incorrect! The first Mali is in quotes and the second is not. Try again.
    :feedback_d: Incorrect! The first Mali is in quotes, so it is a string, not a variable. Try again.

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
    :feedback_a: Incorrect! Indices start at 0, not 1. Try again.
    :feedback_b: Correct! Indices start with 0.
    :feedback_c: Incorrect! s[-3] would count from right to left and return c. Try again.
    :feedback_d: Incorrect! [ ] is the index operator and works with strings. Try again.


    What is printed by the following statements?

    .. code-block:: python

      s = "python rocks"
      print(s[3])

.. mchoice:: str-ex-mc-add
    :practice: T
    :answer_a: te
    :answer_b: tw
    :answer_c: o
    :answer_d: Error, you cannot use the [ ] operator with the + operator.
    :correct: a
    :feedback_a: Correct! The indexing operator has precedence over concatenation.
    :feedback_b: Incorrect! s[-1] is the last character of the string, so what is s[-5]? Try again.
    :feedback_c: Incorrect! The indexing operator happens before the two strings are concatenated. Try again.
    :feedback_d: Incorrect! [ ] operator returns a string that can be concatenated with another string. Try again.


    What is printed by the following statements?

    .. code-block:: python

      s = "python is awesome"
      print(s[2] + s[-5])

.. mchoice:: str-ex-mc-len
    :practice: T
    :answer_a: 11
    :answer_b: 12
    :answer_c: 1
    :answer_d: Error, missing quotes around s
    :correct: b
    :feedback_a: Incorrect! The space counts as a character. Try again.
    :feedback_b: Correct! len() returns the number of characters in the string, including spaces.
    :feedback_c: Incorrect! s is a variable, not a character. Try again.
    :feedback_d: Incorrect! Because s is the name of a string variable, len() can be used on it. Try again.


    What is printed by the following statements?

    .. code-block:: python

      s = "python rocks"
      print(len(s))


.. mchoice:: str-ex-mc-rose
    :practice: T
    :answer_a: Rose
    :answer_b: Rise
    :answer_c: s
    :answer_d: TypeError
    :correct: d
    :feedback_a: Incorrect! Assignment is not allowed with strings. Try again.
    :feedback_b: Incorrect! Assignment is not allowed with strings. Try again.
    :feedback_c: Incorrect! Assignment is not allowed with strings. Try again.
    :feedback_d: Correct! Strings are immutable, so you cannot change an existing string.

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
    :answer_d: TypeError
    :correct: c
    :feedback_a: Incorrect! Each item is converted to upper case before concatenation. Try again.
    :feedback_b: Incorrect! Pay close attention to the order the characters will be in. Try again.
    :feedback_c: Correct! The order is reversed due to the order of the concatenation.
    :feedback_d: Incorrect! String concatenation is allowed. Try again.

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
    :answer_b:  rock rock rock
    :answer_c: rocksrocksrocks
    :answer_d: TypeError, you cannot use multiplication with slicing.
    :correct: a
    :feedback_a: Correct! s[7:11] = "rock", which is then repeated 3 times.
    :feedback_b: Incorrect! s[7:11] is "rock", not " rock". Try again.
    :feedback_c: Incorrect! Slicing will not include the character at index 11, just the characters up to it. Try again.
    :feedback_d: Incorrect! Multiplying a string by an int is okay. Try again.


    What is printed by the following statements?

    .. code-block:: python

      s = "python rocks"
      print(s[7:11] * 3)


.. mchoice:: str-ex-mc-animal-no-space
    :practice: T
    :answer_a: dogdog
    :answer_b: dog dog
    :answer_c: animal dog
    :answer_d: animaldog
    :correct: d
    :feedback_a: It will print "animal" first.
    :feedback_b: There is no added space.
    :feedback_c: There is no added space.
    :feedback_d: Correct!  It will print the characters in the string followed by the value of the variable animal without any space between.


    What is printed by the following statements?

    .. code-block:: python

      animal = "dog"
      print("animal" + animal)


.. mchoice:: str-ex-mc-animal-with-space-but-in-quotes
    :practice: T
    :answer_a: animal animal
    :answer_b: animalanimal
    :answer_c: animal dog
    :answer_d: animaldog
    :correct: a
    :feedback_a: Since animal is in quotes it will print those exact letters.
    :feedback_b: There is a space in the first string.
    :feedback_c: Notice that the second animal is also in quotes.
    :feedback_d: Notice that the second animal is also in quotes and there is a space after the first string.


    What is printed by the following statements?

    .. code-block:: python

      animal = "dog"
      print("animal " + "animal")
