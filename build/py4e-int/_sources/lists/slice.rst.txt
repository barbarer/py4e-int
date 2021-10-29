List slices
-----------
.. index::
    pair: Operator; Slice
    pair: Index; Slice
    pair: List; Slice
    pair: List; Copy
    pair: Slice; Copy
    pair: Index; Mutability
    pair: Slice; Update


The slice operator also works on lists:

.. activecode:: listSlice
    :caption: Using the slice operator with lists.

    t = ['a', 'b', 'c', 'd', 'e', 'f']
    print(t[1:3])

    print(t[:4])

    print(t[3:])

If you omit the first index, the slice starts at the beginning. If you
omit the second, the slice goes to the end. So if you omit both, the
slice is a copy of the whole list.

.. code-block:: python

   >>> t[:]
   ['a', 'b', 'c', 'd', 'e', 'f']

.. mchoice:: listSlice_MC_4
    :practice: T
    :answer_a: [ [ ], 3.14, False]
    :answer_b: [ [ ], 3.14]
    :answer_c: [ [56, 57, "dog"], [ ], 3.14, False]
    :correct: a
    :feedback_a: Yes, the slice starts at index 4 and goes up to and including the last item.
    :feedback_b: By leaving out the upper bound on the slice, we go up to and including the last item.
    :feedback_c: Index values start at 0.

    What is printed by the following statements?

    ::

      alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
      print(alist[4:])

.. mchoice:: listSlice_MC_empty
    :answer_a: []
    :answer_b: [3]
    :answer_c: [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
    :correct: c
    :feedback_a: An empty slice like this would not produce an empty list. Think about how the slice indexes.
    :feedback_b: This would be correct if the slice was [:1]
    :feedback_c: Omitting both indexes in a slice will create a copy of the whole list.
    :practice: T

    What is printed by the following statements?

    ::

      alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
      print(alist[:])


Since lists are mutable, it is often useful to make a copy before
performing operations that fold, spindle, or mutilate lists.

A slice operator on the left side of an assignment can update multiple
elements:

.. activecode:: listSliceLeft
    :caption: Updating list elements using the slice operator.

    t = ['a', 'b', 'c', 'd', 'e', 'f']
    t[1:3] = ['x', 'y']
    print(t)

.. mchoice:: listSlice_MC_len
    :answer_a: 2
    :answer_b: 3
    :answer_c: 4
    :answer_d: 5
    :correct: b
    :feedback_a: The list begins with the second item of L and includes everything up to but not including the last item.
    :feedback_b: Yes, there are 3 items in this slice.
    :feedback_c: The list begins with the second item of L and includes everything up to but not including the last item.
    :feedback_d: The list begins with the second item of L and includes everything up to but not including the last item.
    :practice: T

    What is printed by the following statements?

    ::

      L = [0.34, '6', 'SI106', 'Python', -2]
      print(len(L[1:-1]))
