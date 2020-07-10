List operations
---------------

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
