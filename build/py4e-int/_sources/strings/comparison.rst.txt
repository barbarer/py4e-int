String comparison
-----------------
.. index::
    pair: String; Comparison


The comparison operators work on strings. To see if two strings are
equal:

.. activecode:: strComparison
    :caption: Comparing strings

    word = 'banana'

    if word == 'banana':
        print('All right, bananas.')


Other comparison operations are useful for putting words in alphabetical
order:

.. codelens:: strComparisonCodelens

    word = "Pineapple"
    if word < 'banana':
        print('Your word, ' + word + ', comes before banana.')
    elif word > 'banana':
        print('Your word, ' + word + ', comes after banana.')
    else:
        print('All right, bananas.')


Python does not handle uppercase and lowercase letters the same way that
people do. All uppercase letters come before all lowercase letters, so
"Pineapple" is less than "banana", even though "pineapple" is greater than "banana".

A common way to address this problem is to convert strings to a standard
format, such as all lowercase, before performing the comparison.

.. mchoice:: str-comp-mc-dog1
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Correct! 'a' comes before 's'
    :feedback_b: Incorrect! Letters earlier in the alphabet are treated as less than letters later in the alphabet. Try again.

    Evaluate the following comparison:

    .. code-block:: python

      "dog" < "shark"



.. mchoice:: str-comp-mc-dog2
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Incorrect! Strings are compared character by character. Try again.
    :feedback_b: Correct! Both strings match until the 'g', but Dog is shorter than Doghouse so it comes first in the dictionary.

    Evaluate the following comparison:

    .. code-block:: python

      "Dog" > "Doghouse"



.. mchoice:: str-comp-mc-dog3
    :practice: T
    :answer_a: True
    :answer_b: False
    :answer_c: They are the same word
    :correct: b
    :feedback_a: Incorrect! Remember, uppercase letters come before lowercase letters. Try again.
    :feedback_b: Correct! In Python, uppercase letters are less than lowercase letters.
    :feedback_c: Incorrect! Python is case sensitive, meaning that uppercase characters and lowercase characters are treated as different. Try again.

    Evaluate the following comparison:

    .. code-block:: python

      "dog" < "Dog"

