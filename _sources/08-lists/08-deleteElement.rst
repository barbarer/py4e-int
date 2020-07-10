Deleting elements
-----------------

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
