String operations
-----------------
.. index::
    pair: String; Operator
    single: String Operations
    single: Concatenation

The ``+`` operator works with strings, but it is not addition
in the mathematical sense. Instead it performs
*concatenation*, which means joining the strings by
linking them end to end. For example:

.. activecode:: var-ac-8-strings
    :caption: Concatenating strings

    first = 10
    second = 15
    print(first+second)
    first = '100'
    second = '150'
    print(first + second)

.. mchoice:: var-string-mc-fruit
    :practice: T
    :answer_a: print(berries + ", " + fruit + ", " + stoneFruit)
    :answer_b: print(fruits + " " + berries + " " + stonefruit)
    :answer_c: print(fruit + ", " + berries + ", " + stoneFruit)
    :answer_d: print(fruit + berries + stoneFruit)
    :correct: c
    :feedback_a: Are they in the correct order?
    :feedback_b: Make sure you are using the right variable names.
    :feedback_c: This will print Apples, Oranges, Blueberries, Strawberries, Raspberries, Peaches, Plums
    :feedback_d: Don't forget the commas and spaces!

    Which of the following correctly prints "Apples, Oranges, Blueberries, Strawberries, Raspberries, Peaches, Plums" from the codeblock below?

    ::

      fruit = "Apples, Oranges"
      berries = "Blueberries, Strawberries, Raspberries"
      stoneFruit = "Peaches, Plums"

The ``*`` operator also works with strings by multiplying the content
of a string by an integer. For example:

.. activecode:: var-ac-9-mult
    :caption: Multiplying strings

    first = 'Test '
    second = 3
    print(first * second)

.. mchoice:: var-string-mc-cheer
    :practice: T
    :answer_a: Let's go Blue !!
    :answer_b: Let's go Blue!!
    :answer_c: Let's go Blue! Let's go Blue!
    :answer_d: Lets go Blue ! Let's go Blue !
    :correct: b
    :feedback_a: Is there an extra space in the expression?
    :feedback_b: This will print Let's go Blue!! Only excl is multiplied by 2.
    :feedback_c: Think about the order of operations.
    :feedback_d: Think about the order of operations.

    What is printed by the following statements?

    ::

      cheer = "Let's go Blue"
      excl = "!"
      print(cheer+excl*2)

.. mchoice:: var-string-mc-false
    :practice: T
    :answer_a: You can combine strings using + (concatenation).
    :answer_b: Concatenating strings automatically adds a space between the strings.
    :answer_c: You can use * to multiply a string by an integer.
    :answer_d: The operands + and * follow the order of operations when applied to strings.
    :correct: b
    :feedback_a: You can combine strings using "+". Which of the options is not true?
    :feedback_b: Concatenating joins the strings beginning to end without adding additional spaces.
    :feedback_c: You can use "*" to multiply a string by an integer.
    :feedback_d: The operands "+" and "*" follow the order of operations when applied to strings.

    Which of the following is **not** true about string operations?
