List operations
---------------
.. index::
    pair: List; Operations
    pair: List; Concatenation
    pair: List; Repetition


The ``+`` operator concatenates lists:

.. activecode:: listConcat
    :caption: Using + to concatenate lists.

    a = [1, 2, 3]
    b = [4, 5, 6]
    c = a + b
    print(c)

Similarly, the ``*`` operator repeats a list a given number of times:

.. activecode:: listRepeat
    :caption: Using * to repeat lists.

    print([0] * 4)
    print([1, 2, 3] * 3)

The first example repeats four times. The second example repeats the
list three times.

.. mchoice:: listOp_MC_plus
    :practice: T
    :answer_a: [4, 2, 8, 6, 5, 999]
    :answer_b: Error, you cannot concatenate a list with an integer.
    :answer_c: [[4, 2, 8, 6, 5], 999]
    :answer_d: [4, 2, 8, 6, 5]
    :correct: b
    :feedback_a: You cannot concatenate a list with an integer.
    :feedback_b: Yes, in order to perform concatenation you would need to write alist+[999].  You must have two lists.
    :feedback_c: You cannot concatenate a list with an integer. This would cause an error, not create a new list.
    :feedback_d: This will cause an error, but alist will remain unchanged.

    What is printed by the following statements?

    ::

      alist = [4, 2, 8, 6, 5]
      alist = alist + 999
      print(alist)

.. mchoice:: listOp_MC_AplusB
    :practice: T
    :answer_a: 6
    :answer_b: [1, 2, 3, 4, 5, 6]
    :answer_c: [1, 3, 5, 2, 4, 6]
    :answer_d: [3, 7, 11]
    :correct: c
    :feedback_a: Concatenation does not add the lengths of the lists.
    :feedback_b: Concatenation does not reorder the items.
    :feedback_c: Yes, a new list with all the items of the first list followed by all those from the second.
    :feedback_d: Concatenation does not add the individual items.

    What is printed by the following statements?

    ::

      alist = [1, 3, 5]
      blist = [2, 4, 6]
      print(alist + blist)



.. mchoice:: listOp_MC_rep3
    :practice: T
    :answer_a: 9
    :answer_b: [1, 1, 1, 3, 3, 3, 5, 5, 5]
    :answer_c: [1, 3, 5, 1, 3, 5, 1, 3, 5]
    :answer_d: [3, 9, 15]
    :correct: c
    :feedback_a: Repetition does not multiply the lengths of the lists.  It repeats the items.
    :feedback_b: Repetition does not repeat each item individually.
    :feedback_c: Yes, the items of the list are repeated 3 times, one after another.
    :feedback_d: Repetition does not multiply the individual items.

    What is printed by the following statements?

    ::

      alist = [1, 3, 5]
      print(alist * 3)
