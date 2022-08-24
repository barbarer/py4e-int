Functions and Conditionals Multiple Choice Questions
-----------------------------------------------------

.. mchoice:: functions_conditionals_mcqs_q1
    :practice: T
    :answer_a: if (x = y):
    :answer_b: if (x == y):
    :answer_c: if !(x is not y):
    :answer_d: if x = y:
    :answer_e: if x == y:
    :correct: b, e
    :feedback_a: Try again! An if statement shouldn't contain an assignment operator.
    :feedback_b: Correct!
    :feedback_c: Try again! The not operator (!) can't be used in python.
    :feedback_d: Try again! An if statement shouldn't contain an assignment operator.
    :feedback_e: Correct!

    Which of following uses the correct syntax for a python if statement?


.. mchoice:: functions_conditionals_mcqs_q2
    :practice: T
    :answer_a: z >= 5**4 > y
    :answer_b: 5**4 > y and (5**4 < z or 5**4 == z)
    :answer_c: 5**4 > y and <= z
    :answer_d: 5**4 > y and 5**4 < z or 5**4 == z
    :answer_e: 5**4 > y and z >= 5**4
    :correct: a, b, e
    :feedback_a: Correct! Note that compound statements are allowed in python.
    :feedback_b: Correct! Note that the and operator comes before the or operator in operator precedence.
    :feedback_c: Try again! Nothing is being compared to z.
    :feedback_d: Try again! The and operator comes before the or operator in operator precedence.
    :feedback_e: Correct! Note that z >= 5**4 is the same as 5**4 <= z.

    Which of the following tests if ``5 exponentiated to the 4th power`` is greater than ``y`` and less than or equal to ``z``?


.. mchoice:: functions_conditionals_mcqs_q3
    :practice: T
    :answer_a: if days / 365 == 16 or 16 < days / 365:
    :answer_b: if (days / 365 = 16) or (16 < days / 365):
    :answer_c: if days / 365 >= 16:
    :answer_d: if 365 / days >= 16:
    :answer_e: if (days / 365 == 16) and (days / 365 > 16):
    :correct: a, c
    :feedback_a: Correct! Note that (16 < days / 365) is the same as (days / 365 > 16).
    :feedback_b: Try again! The assignment operator (=) should not be in the if statement.
    :feedback_c: Correct!
    :feedback_d: Try again! To convert days to age, you divide days by 365.
    :feedback_e: Try again! One's age can't be 16 and greater than 16.

    Which of the following statements completes the function and returns ``True`` if one's age is greater than or equal to 16?

    .. code-block:: python

        def days_to_age(days):
            # what line goes here?
                return True
            else:
                return False


.. mchoice:: functions_conditionals_mcqs_q4
    :practice: T
    :answer_a: (((10 > y) or (x + y == 10)) and (x is not y))
    :answer_b: (10 > (y or x) + y == (10 and x) is not y)
    :answer_c: (10 > y or x + y == 10 and x is not y)
    :answer_d: ((10 > y) or (((x + y) == 10) and (x is not y)))
    :answer_e: (((10 > y) or ((x + y) == 10)) and (x is not y))
    :correct: d
    :feedback_a: Try again! The precedence of the operators is incorrect.
    :feedback_b: Try again! The precedence of the operators is incorrect.
    :feedback_c: Try again! The precedence of the operators is incorrect.
    :feedback_d: Correct! Parentheses should be added in the following order: (x + y), (x is not y), (10 > y), ((x + y) == 10), (((x + y) == 10) and (x is not y)), ((10 > y) or (((x + y) == 10) and (x is not y))).
    :feedback_e: Try again! The precedence of the operators is incorrect.

    Which of the following properly expresses the precedence of operators (using parentheses) in the following expression: 10 > y or x + y == 10 and x is not y? Might be best to try on paper first.


.. mchoice:: functions_conditionals_mcqs_q5
    :practice: T
    :answer_a: LETTERS DON'T MATCH. Done. oo Done. i Done.
    :answer_b: EEN. Done. OO Done. ins Done.
    :answer_c: Letters don't match. Done. OO Done. ins Done.
    :answer_d: Letters don't match. OO ins Done.
    :answer_e: RE OO in Done.
    :correct: c
    :feedback_a: Try again! LETTERS DON'T MATCH shouldn't be all uppercase, oo should be all uppercase, and i is missing characters.
    :feedback_b: Try again! EEN is incorrect.
    :feedback_c: Correct!
    :feedback_d: Try again! "Done." is missing twice.
    :feedback_e: Try again! RE is incorrect, "Done." is missing twice, and in is missing a character.

    What would be the outputs for ``transform_string('green')``, ``transform_string('door')``, and ``transform_string('mountains')`` in order? (Note: Ignore whitespaces.)

    .. code-block:: python

        def transform_string(word):
            if len(word) <= 5:
                new_letters = word[1:3].upper()
                if new_letters[0] == new_letters[1]:
                    print(new_letters)
                else:
                    print("Letters don't match.")
            else:
                new_chars = word[-3:]
                print(new_chars)
            print('Done.')
