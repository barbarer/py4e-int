Deleting elements
-----------------
.. index::
    pair: Element; Deletion
    pair: Method; Pop
    pair: Del; Operator
    pair: Remove; Method
    pair: None; Special Value

There are several ways to delete elements from a list. If you know the
index of the element you want, you can use ``pop``:

.. activecode:: listPop
    :caption: Using pop to remove an element from a list.

    t = ['a', 'b', 'c']
    x = t.pop(1)
    print(t)

    print(x)

``pop`` modifies the list and returns the element that was
removed. If you don't provide an index, it deletes and returns the last
element.

.. mchoice:: listDel_MC_pop
    :practice: T
    :answer_a: [4, 8, 6]
    :answer_b: [2, 6, 5]
    :answer_c: [4, 2, 6]
    :correct: c
    :feedback_a: pop(2) removes the item at index 2, not the 2 itself.
    :feedback_b: pop() removes the last item, not the first.
    :feedback_c: Yes, first the 8 was removed, then the last item, which was 5.

    What is printed by the following statements?

    ::

      alist = [4, 2, 8, 6, 5]
      temp = alist.pop(2)
      temp = alist.pop()
      print(alist)



.. mchoice:: listDel_MC_pop2
    :practice: T
    :answer_a: [2, 8, 6, 5]
    :answer_b: [4, 2, 8, 6, 5]
    :answer_c: 4
    :answer_d: None
    :correct: c
    :feedback_a: alist is now the value that was returned from pop(0).
    :feedback_b: pop(0) changes the list by removing the first item.
    :feedback_c: Yes, first the 4 was removed from the list, then returned and assigned to alist.  The list is lost.
    :feedback_d: pop(0) returns the first item in the list so alist has now been changed.

    What is printed by the following statements?

    ::

      alist = [4, 2, 8, 6, 5]
      alist = alist.pop(0)
      print(alist)

If you don't need the removed value, you can use the ``del``
operator:

.. activecode:: listDel
    :caption: Removing a list value using del.

    t = ['a', 'b', 'c']
    del t[1]
    print(t)

If you know the element you want to remove (but not the index), you can
use ``remove``:

.. activecode:: listRemove
    :caption: Getting rid of a list element using remove.

    t = ['a', 'b', 'c']
    t.remove('b')
    print(t)

The return value from ``remove`` is ``None``.

To remove more than one element, you can use ``del`` with a
slice index:

.. activecode:: listDelSlice
    :caption: Using del with a slice to remove multiple list elements.

    t = ['a', 'b', 'c', 'd', 'e', 'f']
    del t[1:5]
    print(t)

As usual, the slice selects all the elements up to, but not including,
the second index.

.. mchoice:: listDel_MC_del
    :practice: T
    :answer_a: ['a', 'b', 'c', 'd', 'e', 'f']
    :answer_b: ['a', 'f']
    :answer_c: ['f']
    :answer_d: ['b', 'c', 'd', 'e']
    :correct: b
    :feedback_a: The del method removes part of the list, so it will be shorter.
    :feedback_b: 'a' is the 0th element of the list and 'f' is the 5th element of the list, so these are the values that remain after deleting [1:5].
    :feedback_c: Remember that lists start at 0, not 1, and that a slice stops before the second element - not after.
    :feedback_d: These are the values that will be deleted with the slice [1:5]

    What is the value of alist after the following code executes?

    ::

      alist = ['a', 'b', 'c', 'd', 'e', 'f']
      del alist[1:5]
      print(alist)

.. dragndrop:: listDel_dnd
    :practice: T
    :feedback: How does each operator and method work?
    :match_1: del|||Gets rid of an element.
    :match_2: pop|||Modifies a list and returns the removed element.
    :match_3: del with a slice|||Gets rid of more than one element.
    :match_4: remove|||Gets rid of an element without using the index.

    Match each deletion method with its function.
