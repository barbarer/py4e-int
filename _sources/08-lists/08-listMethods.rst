List methods
------------

Python provides methods that operate on lists. For example,
``append`` adds a new element to the end of a list:

.. activecode:: listAppend
    :caption: Using the list method append.

    t = ['a', 'b', 'c']
    t.append('d')
    print(t)

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

Most list methods are void; they modify the list and return
``None``. If you accidentally write ``t = t.sort()``,
you will be disappointed with the result.
