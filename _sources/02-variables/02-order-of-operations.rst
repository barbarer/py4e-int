Order of operations
-------------------

.. mchoice:: var-order-mc-print
   :practice: T
   :answer_a: 18
   :answer_b: -2
   :answer_c: 6
   :answer_d: 10
   :correct: b
   :feedback_a: Try running the code in your python interpreter.
   :feedback_b: Correct!
   :feedback_c: Which order will the operators run?
   :feedback_d: Make sure that you are using a negative 2, not positive.

   What is printed from the following codeblock?

   ::

      result = 4 + -2 * 3
      print(result)

.. activecode:: Expression_Order1
  :caption: Example of order of operations

  result = 4 + -2 * 3
  print(result)

When more than one operator appears in an expression, the order of
evaluation depends on the *rules of precedence*. For
mathematical operators, Python follows mathematical convention. The
acronym *PEMDAS* is a useful way to remember the rules:

* Parentheses have the highest precedence and can be
  used to force an expression to evaluate in the order you want. Since
  expressions in parentheses are evaluated first, ``2 *
  (3-1)`` is 4, and ``(1+1)**(5-2)`` is 8. You can
  also use parentheses to make an expression easier to read, as in
  ``(minute * 100) / 60``\ , even if it doesn't change the
  result.

* Exponentiation has the next highest precedence, so
  ``2**1+1`` is 3, not 4, and ``3*1**3`` is 3,
  not 27.

* Multiplication and *D*\ ivision have
  the same precedence, which is higher than *A*\ ddition
  and *S*\ ubtraction, which also have the same
  precedence. So ``2*3-1`` is 5, not 4, and
  ``6+4/2`` is 8, not 5.

* Operators with the same precedence are evaluated from left to right.
  So the expression ``5-3-1`` is 1, not 3, because the
  ``5-3`` happens first and then ``1`` is subtracted
  from 2.

.. mchoice:: var-order-mc-parentheses
   :practice: T
   :answer_a: 18
   :answer_b: -2
   :answer_c: 6
   :answer_d: 10
   :correct: c
   :feedback_a: Try running the code in your python interpreter.
   :feedback_b: Which order will the operators run?
   :feedback_c: Correct!
   :feedback_d: Make sure that you are using a negative 2, not positive.

   What is printed from the following codeblock?

   ::

      result = (4 + -2) * 3
      print(result)

.. activecode:: Expression_Order2
  :caption: Using parentheses with order of operations

  result = (4 + -2) * 3
  print(result)

When in doubt, always put parentheses in your expressions to make sure
the computations are performed in the order you intend.

.. parsonsprob:: var-order-pp-operations
   :practice: T
   :numbered: left
   :adaptive:

   Put these code blocks in the oder that they would run using the order of operations.
   -----
   (6 * 52 + 3)
   3**2
   7 * 5
   33 / 11
   15 + 20
   77 - 8
