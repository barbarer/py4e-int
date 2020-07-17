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

The "object" in this case is the string and the "item" is the character
you tried to assign. For now, an *object* is the same
thing as a value, but we will refine that definition later. An
*item* is one of the values in a sequence.

The reason for the error is that strings are *immutable*,
which means you can't change an existing string. The best you can do is
create a new string that is a variation on the original:

.. activecode:: str-newString
    :caption: Creating a new string from another

    greeting = 'Hello, world!'
    new_greeting = 'J' + greeting[1:]
    print(new_greeting)


This example concatenates a new first letter onto a slice of
``greeting``. It has no effect on the original string.

.. mchoice:: str-imm-mc-xyz
   :practice: T
   :answer_a: xyz
   :answer_b: xyxyz
   :answer_c: xy xy z
   :answer_d: xy z
   :answer_e: z
   :correct: b
   :feedback_a: s1 will equal "xy" plus another "xy" then z at the end.
   :feedback_b: s1 contains the original value, plus itself, plus "z"
   :feedback_c: No spaces are added during concatenation.
   :feedback_d: No spaces are added during concatenation, and an additional "xy" should be
                included at the beginning.
   :feedback_e: s1 was set to "xy" initially, so the final answer will be "xyxyz"

   Given the following code segment, what is the value of the string s1 after these are executed?

   ::

     s1 = "xy"
     s2 = s1
     s1 = s1 + s2 + "z"

.. mchoice:: str-imm-mc-ball
   :practice: T
   :answer_a: Ball
   :answer_b: Call
   :answer_c: Error
   :correct: c
   :feedback_a: Assignment is not allowed with strings.
   :feedback_b: Assignment is not allowed with strings.
   :feedback_c: Yes, strings are immutable.

   What is printed by the following statements:

   .. code-block:: python

      s = "Ball"
      s[0] = "C"
      print(s)

.. fillintheblank:: str-imm-fitb-def
    :practice: T

    You cannot change an existing string because it is ________.

    - :[Ii]mmutable: Correct! Strings are immutable, meaning you cannot change the object itself once it has been defined.
      :.*: Try again!
