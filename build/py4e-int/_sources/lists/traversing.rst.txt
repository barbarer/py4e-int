Traversing a list
-----------------
.. index::
    pair: List; Traversal
    pair: Loop; For
    pair: For; Statement
    single: Looping with indicies
    pair: Index; Looping with
    pair: Item; Update
    single: Nested List


The most common way to traverse the elements of a list is with a
``for`` loop. The syntax is the same as for strings:

.. activecode:: listCheese
    :caption: Using a for loop to traverse a list.

    cheeses = ["Gouda", "Swiss", "Provolone", "Cheddar"]
    for cheese in cheeses:
        print(cheese)


This works well if you only need to read the elements of the list. But
if you want to write or update the elements, you need the indices. A
common way to do that is to combine the functions ``range`` and
``len``:

.. code-block:: python

   for i in range(len(numbers)):
       numbers[i] = numbers[i] * 2

.. mchoice:: listTrav_MC_iterate
    :practice: T
    :answer_a: 8
    :answer_b: 9
    :answer_c: 15
    :answer_d: Error, the for statement needs to use the range function.
    :correct: b
    :feedback_a: Iteration by item will process once for each item in the sequence, even the empty list.
    :feedback_b: Yes, there are nine elements in the list so the for loop will iterate nine times.
    :feedback_c: Iteration by item will process once for each item in the sequence. Each string is viewed as a single item, even if you are able to iterate over a string itself.
    :feedback_d: The for statement can iterate over a sequence item by item.


    How many times will the for loop iterate in the following statements?

    ::

      p = [3, 4, "Me", 3, [], "Why", 0, "Tell", 9.3]
      for ch in p:
          print(ch)

This loop traverses the list and updates each element. ``len``
returns the number of elements in the list. ``range`` returns a
list of indices from 0 to **n-1**, where **n** is the length of the list.
Each time through the loop, ``i`` gets the index of the next
element. The assignment statement in the body uses ``i`` to
read the old value of the element and to assign the new value.

A ``for`` loop over an empty list never executes the body:

.. activecode:: listEmptyLoop
    :caption: Trying to iterate through an empty list.

    empty = []
    for x in empty:
        print('This never happens.')

.. mchoice:: listTrav_MC_empty
    :practice: T
    :answer_a: The loop will run once.
    :answer_b: Nothing will happen.
    :answer_c: It will cause an error.
    :answer_d: The list will add items to traverse.
    :correct: b
    :feedback_a: The loop will not run because the initial conditions are not met. You cannot traverse over nothing.
    :feedback_b: Nothing will happen when traversing through an empty loop because there are no elements to iterate through.
    :feedback_c: It is legal to call this, but nothing will happen. It will not call an error.
    :feedback_d: Python will not add items to the list so it is no longer empty, empty lists are okay.

    What will happen if you attempt to traverse an empty list?

Although a list can contain another list, the nested list still counts
as a single element. Check out the length of this list:

.. activecode:: listNested2
    :caption: Lists within lists only count as one element for the original list.

    bigList = ['spam', 1, ['Brie', 'Roquefort', 'Pol le Veq'], [1, 2, 3]]
    print(len(bigList))

.. mchoice:: listTrav_MC_nested
    :practice: T
    :answer_a: 3
    :answer_b: 1
    :answer_c: 2
    :correct: b
    :feedback_a: Remember that the length of a list is only the elements in the outside list.
    :feedback_b: There is technically only one element in this list, but that element has its own items.
    :feedback_c: Remember that the length of a list is only the elements in the outside list.

    How many items are in ``nestedList``?

    ::

      nestedList = [["First", 2, ["Third"]]]
