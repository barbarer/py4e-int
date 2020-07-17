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
    :answer_a: false
    :answer_b: true
    :correct: b
    :feedback_a: In is a boolean operator.
    :feedback_b: In is a boolean operator that takes two strings and returns true if the first is part of the second.

    True or false? The word ``in`` is a boolean operator.

.. mchoice:: str-in-mc-lime
    :practice: T
    :answer_a: true
    :answer_b: false
    :correct: a
    :feedback_a: This returns True because there is a string 'i' in the string 'lime'.
    :feedback_b: 'i' is in lime, so this will return True.

    True or false? The following code returns True.

    ::

      'i' in 'lime'

.. mchoice:: str-in-mc-hat
    :practice: T
    :answer_a: false
    :answer_b: true
    :correct: b
    :feedback_a: 'hat' is in chatter, so this will return true
    :feedback_b: This returns True because there is a string 'hat' in the string 'chatter'.

    True or false? The following code returns True.

    ::

      'hat' in 'chatter'
