List slices
-----------

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


Since lists are mutable, it is often useful to make a copy before
performing operations that fold, spindle, or mutilate lists.

A slice operator on the left side of an assignment can update multiple
elements:

.. activecode:: listSliceLeft
    :caption: Updating list elements using the slice operator.

    t = ['a', 'b', 'c', 'd', 'e', 'f']
    t[1:3] = ['x', 'y']
    
