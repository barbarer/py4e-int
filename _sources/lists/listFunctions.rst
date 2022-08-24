Lists and functions
-------------------
.. index::
    pair: Built-in; Function
    pair: List; Function

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

.. mchoice:: listFunct_MC_sum
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: The max and len functions can work on any list with types that can be compared.
    :feedback_b: The max and len functions can work on any list with types that can be compared, but the sum function can only work on lists made of numbers.

    True or False? The max, sum, and len functions can work on any list.

We could rewrite an earlier program that computed the average of a list
of numbers entered by the user using a list.

First, the program to compute an average without a list:

.. activecode:: averageNoList
    :caption: Computing an average without a list.

    total = 0
    count = 0
    while (True):
        inp = input('Enter a number or type done to quit: ')
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

.. mchoice:: listFunct_MC_avg
    :practice: T
    :multiple_answers:
    :answer_a: sum
    :answer_b: avg
    :answer_c: append
    :answer_d: len
    :answer_e: max
    :correct: a, d
    :feedback_a: The sum function is used to add up all the values in a list to get the numerator of the average.
    :feedback_b: Unfortuantely, avg is not a function in Python.
    :feedback_c: append is a list method. It may be used to add elements to a list that are then averaged together, but not to compute the average itself.
    :feedback_d: The len function is used to count the elements in a list to get the denominator of the average.
    :feedback_e: The max function is not used in averaging. It returns the largest element in a list.

    Which of the following built-in functions can be used on lists to compute the average of the list?
    Select all that apply.

.. mchoice:: listFunct_MC_len
    :practice: T
    :answer_a: 7
    :answer_b: 8
    :answer_c: 9
    :answer_d: 3
    :correct: a
    :feedback_a: Yes, there are 7 items in this list even though two of them happen to also be lists.
    :feedback_b: len returns the number of top level items in the list.  It does not count items in sublists.
    :feedback_c: len returns the number of top level items in the list.  It does not count items in sublists.
    :feedback_d: len returns the number of top level items in the list, not the number of brackets.

    What is printed by the following statements?


    ::

      alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
      print(len(alist))
