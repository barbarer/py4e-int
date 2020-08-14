Lists and functions
-------------------

There are a number of built-in functions that can be used on lists that
allow you to quickly look through a list without writing your own loops:

.. activecode:: listBuiltIn
    :caption: Built-in functions with lists.

    nums = [3, 41, 12, 9, 74, 15]
    print(len(nums))

    print(max(nums))

    print(min(nums))

    print(sum(nums))

    print(sum(nums)/len(nums))


The ``sum()`` function only works when the list elements are
numbers. The other functions (``max()``, ``len()``,
etc.) work with lists of strings and other types that can be comparable.

We could rewrite an earlier program that computed the average of a list
of numbers entered by the user using a list.

First, the program to compute an average without a list:

.. activecode:: averageNoList
    :caption: Computing an average without a list.

    total = 0
    count = 0
    while (True):
        inp = input('Enter a number: ')
        if inp == 'done': break
        value = float(inp)
        total = total + value
        count = count + 1

    average = total / count
    print('Average:', average)


In this program, we have ``count`` and ``total``
variables to keep the number and running total of the user's numbers as
we repeatedly prompt the user for a number.

We could simply remember each number as the user entered it and use
built-in functions to compute the sum and count at the end.

.. activecode:: averageList
    :caption: Using built in list functions to find averages.

    numlist = list()
    while (True):
        inp = input('Enter a number: ')
        if inp == 'done': break
        value = float(inp)
        numlist.append(value)

    average = sum(numlist) / len(numlist)
    print('Average:', average)

We make an empty list before the loop starts, and then each time we have
a number, we append it to the list. At the end of the program, we simply
compute the sum of the numbers in the list and divide it by the count of
the numbers in the list to come up with the average.
