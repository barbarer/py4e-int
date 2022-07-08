Strings are immutable
---------------------
.. index::
    single: Mutability
    single: Immutability
    pair: String; Immutable
    single: TypeError
    single: Object
    pair: Item; Assignment
    single: Concatenation

It is tempting to use the operator on the left side of an assignment,
with the intention of changing a character in a string. For example:

.. activecode:: str-immutable
    :caption: Strings are immutable

    greeting = 'Hello, world!'
    greeting[0] = 'J'

The ``greeting`` string is an example of an **object** and the character
you tried to assign is an example of an **item**. For now, think of an object as a
special virtual construction. Objects have special properties. Strings, for example,
are objects that hold a sequence of characters. An item is one of the values in a sequence.

The reason for the error is that strings are **immutable**,
which means that you can't modify an existing string. The best you can do is
create a new string that is a variation on the original:

.. activecode:: str-newString
    :caption: Creating a new string from another

    greeting = 'Hello, world!'
    new_greeting = 'J' + greeting[1:]
    print(new_greeting)

This example concatenates a new first letter onto a slice of
``greeting``. It has no effect on the original string.

Or, you can reassign an existing variable to a completely new string:

.. activecode:: str-redefineString
    :caption: Completely reassigning a variable

    greeting = 'Hello, world!'
    greeting = 'Hola, mundo!'
    print(greeting)

This example assigns the ``greeting`` variable to represent a new string object.
The old string object is deleted in the process.

.. mchoice:: str-imm-mc-xyz
    :practice: T
    :answer_a: xyz
    :answer_b: xyxyz
    :answer_c: xy xy z
    :answer_d: There is an error
    :correct: b
    :feedback_a: Incorrect! Think about the values of s1 and s2 before line 3, then use those to determine the value of s1 in line 3. Try again.
    :feedback_b: Correct! The right side of the assignment statement is evaluated, then s1 is redefined to be equal to that, so s1 becomes xyxyz.
    :feedback_c: Incorrect! No spaces are added during concatenation. Try again.
    :feedback_d: Incorrect! The right side of the assignment statement is evaluated, then s1 is redefined to be equal to that. Try again.

    Given the following code segment, what is the value of the string s1 after the code is executed?

    ::

      s1 = 'xy'
      s2 = s1
      s1 = s1 + s2 + 'z'

.. mchoice:: str-imm-mc-ball
    :practice: T
    :answer_a: Ball
    :answer_b: Call
    :answer_c: C
    :answer_d: Nothing, there is an error
    :correct: d
    :feedback_a: Incorrect! Assignment is not allowed with strings. Try again.
    :feedback_b: Incorrect! Assignment is not allowed with strings. Try again.
    :feedback_c: Incorrect! Assignment is not allowed with strings. Try again.
    :feedback_d: Correct! Strings are immutable.

    What is printed by the following statements:

    .. code-block:: python

      s = "Ball"
      s[0] = "C"
      print(s)

.. fillintheblank:: str-imm-fitb-def
    :practice: T

    You cannot change an existing string because it is ________.

    - :[Ii]mmutable: Correct! Strings are immutable, meaning you cannot change the object itself once it has been defined.
      :.*: Incorrect! Check your spelling. Try again.
