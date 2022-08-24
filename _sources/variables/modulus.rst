Modulus operator
----------------
.. index::
    pair: Modulus; Operator
    single: Divisibility

The *modulus operator* works on integers and yields the
remainder when the first operand is divided by the second. In Python,
the modulus operator is a percent sign ( ``%`` ). The syntax is the same as
for other operators:

.. activecode:: var-ac-7-mod
    :caption: Modulus example

    quotient = 7 // 3
    print(quotient)
    remainder = 7 % 3
    print(remainder)

So 7 divided by 3 is 2 with 1 left over.

The modulus operator turns out to be surprisingly useful. For example,
you can check whether one number is divisible by another: if ``x %
y`` is zero, then ``x`` is divisible by ``y``.


You can also extract the right-most digit or digits from a number. For
example, ``x % 10`` yields the right-most digit of
``x`` (in base 10). Similarly, ``x % 100`` yields the
last two digits.

.. mchoice:: var-mod-mc-18-mod-5
    :practice: T
    :answer_a: 0
    :answer_b: 1
    :answer_c: 2
    :answer_d: 3
    :correct: d
    :feedback_a: This would be correct if it was <code>18 % 2</code>, but what is the remainder of 18 divided by 5?
    :feedback_b: This would be correct if it was <code>18 % 17</code>, since 17 goes into 18 one time and the remainder is 18 - 17 = 1.
    :feedback_c: What is the highest multiple of 5 that is less than or equal to 18? The remainder is 18 - that number.
    :feedback_d: The reminder is 3 since 5 goes into 18 three times (15) and 18 - 15 = 3.

    What is the result of ``18 % 5``?

.. mchoice:: var-mod-mc-2-mod-3
    :practice: T
    :answer_a: 2
    :answer_b: 8
    :answer_c: 1
    :answer_d: 0.66666
    :correct: a
    :feedback_a: The remainder when a smaller number is divided by a larger number is the smaller number.
    :feedback_b: This would be true if it was 2 raised to the 3rd power, but it is modulus.
    :feedback_c: This would be true if it was <code>3 % 2</code>.
    :feedback_d: This would be true if it was floating point division, but it is modulus.

    What is the result of ``2 % 3``?

.. dragndrop:: var-mod-dnd-division
    :practice: T
    :feedback: Try out these expressions in terminal or review the operators and operands section.
    :match_1: 7 / 2|||division
    :match_2: 90 // 4|||floored division
    :match_3: 45 % 6|||remainder

    Match each expression with the type of division the operator performs.


.. fillintheblank:: var-fitb-6-mod
    :practice: T

    What is the result of ``25 % 4``?

    - :1: 25 % 4 has a remainder of 1.
      :6: 6 is the result of 25//4, try using modulus in terminal.
      :6.25: 6.25 is the result of 25/4, try using modulus in terminal.
      :.*: Not quite, try using modulus in terminal.
