List methods
------------
.. Index::
    pair: List; Method
    pair: Method; Append
    pair: Extend; Method
    pair: Sort; Method
    pair: Void; Method
    pair: None; Special Value

Python provides methods that operate on lists. For example,
``append`` adds a new element to the end of a list:

.. activecode:: listAppend
    :caption: Using the list method append.

    t = ['a', 'b', 'c']
    t.append('d')
    print(t)

.. mchoice:: listMethod_MC_append
    :practice: T
    :answer_a: [4, 2, 8, 6, 5, False, True]
    :answer_b: [4, 2, 8, 6, 5, True, False]
    :answer_c: [True, False, 4, 2, 8, 6, 5]
    :correct: b
    :feedback_a: True was added first, then False was added last.
    :feedback_b: Yes, each item is added to the end of the list.
    :feedback_c: append adds at the end, not the beginning.

    What is printed by the following statements?

    ::

      alist = [4, 2, 8, 6, 5]
      alist.append(True)
      alist.append(False)
      print(alist)

``extend`` takes a list as an argument and appends all of the
elements:

.. activecode:: listExtend
    :caption: Using the list method extend.

    t1 = ['a', 'b', 'c']
    t2 = ['d', 'e']
    t1.extend(t2)
    print(t1)

This example leaves ``t2`` unmodified.

``sort`` arranges the elements of the list from low to high:

.. activecode:: listSort
    :caption: Using the list method sort.

    t = ['d', 'c', 'e', 'b', 'a']
    t.sort()
    print(t)

.. mchoice:: listMethod_MC_sort
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: While this may be true if the values are letter characters, sort can be used on lists with different elements, too.
    :feedback_b: The sort method puts elements in order of low to high, this can be true for letters, numbers, or whatever the elements of the list are. 

    True or False? The sort method alphabetizes lists.

Most list methods are void; they modify the list and return
``None``. If you accidentally write ``t = t.sort()``,
you will be disappointed with the result.

.. fillintheblank:: listMethod_fill1
    :practice: T

    Most list methods are _______.

    - :[Vv]oid: Most list methods are void meaning they don't return anything.
      :.*: Try again! (Remember that functions are either fruitful or void)
