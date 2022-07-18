The ``in`` operator
-----------------------
.. index::
    pair: In; Operator
    pair: Boolean; Operator

The word ``in`` is a boolean operator that takes two strings
and returns ``True`` if the first appears as a substring in the
second:

.. activecode:: strIn
    :caption: Using in with strings.

    print('a' in 'banana')
    print('seed' in 'banana')

.. mchoice:: str-in-mc-tf
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Correct! in is a boolean operator that takes two strings and returns True if the first is part of the second.
    :feedback_b: Incorrect! in is a boolean operator. Try again.

    True or False? The word ``in`` is a boolean operator.

.. mchoice:: str-in-mc-lime
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Correct! This returns True because there is a string 'i' within the string 'lime'.
    :feedback_b: Incorrect! There is an 'i' in lime, so this will return True. Try again.

    True or False? The following code returns True.

    ::

      'i' in 'lime'

.. mchoice:: str-in-mc-hat
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Correct! This returns True because there is a string 'hat' within the string 'chatter'.
    :feedback_b: Incorrect! The string 'chatter' contains the substring 'hat'. Try again.

    True or false? The following code returns True.

    ::

      'hat' in 'chatter'
