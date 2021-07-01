Order of operations
-------------------
.. index::
    single: Order of Operations
    single: Rules of Precedence
    single: PEMDAS
    pair: Parentheses; Overriding Precedence

.. activecode:: Expression_Order1
    :caption: Example of order of operations

    result = 4 + -2 * 3
    print(result)

When more than one operator appears in an expression, the order of
evaluation depends on the *rules of precedence*. For
mathematical operators, Python follows mathematical convention. The
acronym *PEMDAS* is a useful way to remember the rules:

* **P**\ arentheses have the highest precedence and can be
  used to force an expression to evaluate in the order you want. Since
  expressions in parentheses are evaluated first, ``2 *
  (3-1)`` is 4, and ``(1+1)**(5-2)`` is 8. You can
  also use parentheses to make an expression easier to read, as in
  ``(minute * 100) / 60``, even if it doesn't change the
  result.

* **E**\ xponentiation has the next highest precedence, so
  ``2**1+1`` is 3, not 4, and ``3*1**3`` is 3,
  not 27.

* **M**\ ultiplication and **D**\ ivision have
  the same precedence, which is higher than **A**\ ddition
  and **S**\ ubtraction, which also have the same
  precedence. So ``2*3-1`` is 5, not 4, and
  ``6+4/2`` is 8, not 5.

* Operators with the same precedence are evaluated from left to right.
  So the expression ``5-3-1`` is 1, not 3, because the
  ``5-3`` happens first and then ``1`` is subtracted
  from 2.

.. mchoice:: var-order-mc-print
    :practice: T
    :answer_a: 18
    :answer_b: -2
    :answer_c: 6
    :answer_d: 10
    :correct: b
    :feedback_a: Try running the code in your python interpreter.
    :feedback_b: 4 + -2 * 3 is -2. First -2 is multiplied by 3 then 4 is added.
    :feedback_c: Which order will the operators run?
    :feedback_d: Make sure that you are using a negative 2, not positive.

    What is printed from the following codeblock?

    ::

      result = 4 + -2 * 3
      print(result)

.. mchoice:: var-order-mc-parentheses
    :practice: T
    :answer_a: 18
    :answer_b: -2
    :answer_c: 6
    :answer_d: 10
    :correct: c
    :feedback_a: Try running the code in your python interpreter.
    :feedback_b: Which order will the operators run?
    :feedback_c: With parentheses, (4 + -2) * 3 is 6.
    :feedback_d: Make sure that you are using a negative 2, not positive.

    What is printed from the following codeblock?

    ::

      result = (4 + -2) * 3
      print(result)

Try running the code below as is, then add parentheses around ``4 + -2`` to see how the order of operations changes.

.. activecode:: Expression_Order
    :nocodelens:
    :caption: Using the order of operations with expressions

    result = 4 + -2 * 3
    print(result)

When in doubt, always put parentheses in your expressions to make sure
the computations are performed in the order you intend.

.. parsonsprob:: var-order-pp-operations_v2
    :practice: T
    :numbered: left
    :adaptive:

    Put these code blocks in the oder that they would run using the order of operations.
    -----
    (6 * 52 + 3)
    =====
    3**2
    =====
    33 / 11
    =====
    15 + 20
