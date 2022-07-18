Peer Instruction: Booleans Multiple Choice Questions
----------------------------------------------------

.. mchoice:: dz-lecture-08_Booleans_04_1
   :author: Dan Zingaro
   :practice: T
   :answer_a: Only (7>2)
   :answer_b: Only (9<2)
   :answer_c: Only (8>3)
   :answer_d: (7>2) and (8>3)
   :answer_e: All the code is evaluated
   :correct: a
   :feedback_a: Correct! Python evaluates from left to right. If the first part of an expression containing 'or' is True, the truth of the statement is know.
   :feedback_b: Incorrect! Python evaluates from left to right.
   :feedback_c: Incorrect! Python evaluates from left to right.
   :feedback_d: Incorrect! Python evaluates from left to right.
   :feedback_e: Incorrect! The (7 > 2) is joined by an or so since (7 > 2) is true, evaluation stops.

   In the following expression, which parts are evaluated?

   .. code-block:: python

      (7 > 2) or ( (9 < 2) and (8 > 3) )


.. mchoice:: dz-lecture-08_Booleans_04_2
   :author: Dan Zingaro
   :practice: T
   :answer_a: Only (7>2)
   :answer_b: Only (9<2)
   :answer_c: Only (8>3)
   :answer_d: (7>2) and (8>3)
   :answer_e: All the code is evaluated
   :correct: e
   :feedback_a: Incorrect! Python evaluates from left to right and must evaluate both sides of an expression when they are joined by "and".
   :feedback_b: Incorrect! Python evaluates from left to right and must evaluate both sides of an expression when they are joined by "and".
   :feedback_c: Incorrect! Python evaluates from left to right and must evaluate both sides of an expression when they are joined by "and".
   :feedback_d: Incorrect! Python evaluates from left to right.  The ((7 > 2) and (9 < 2)) will be evaluated first.
   :feedback_e: Correct! The truth of this expression is not established until all parts have been evaluated.

   In the following expression, which parts are evaluated?

   .. code-block:: python

      ( (7 > 2) and (9 < 2) ) or (8 > 3)
