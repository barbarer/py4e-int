Lists are mutable
-----------------

The syntax for accessing the elements of a list is the same as for
accessing the characters of a string: the bracket operator. The
expression inside the brackets specifies the index. Remember that the
indices start at 0:

.. code-block:: python

   >>> print(cheeses[0])
   Cheddar


Unlike strings, lists are mutable because you can change the order of
items in a list or reassign an item in a list. When the bracket operator
appears on the left side of an assignment, it identifies the element of
the list that will be assigned.

.. codelens:: listReassign
    :caption: Changing an item in a list.

    numbers = [17, 123]
    numbers[1] = 5
    print(numbers)


The one-th element of ``numbers``, which used to be 123, is
now 5.

You can think of a list as a relationship between indices and elements.
This relationship is called a *mapping*; each index "maps
to" one of the elements.

List indices work the same way as string indices:


*
  Any integer expression can be used as an index.

*
  If you try to read or write an element that does not exist, you get
  an ``IndexError``.

* If an index has a negative value, it counts backward from the end of
  the list.

The ``in`` operator also works on lists.

.. activecode:: listIn
    :caption: Using in with lists.

    cheeses = ['Cheddar', 'Edam', 'Gouda']
    print('Edam' in cheeses)
    print('Brie' in cheeses)

.. mchoice:: listMut_MC_alist
    :practice: T
    :answer_a: [4, 2, True, 8, 6, 5]
    :answer_b: [4, 2, True, 6, 5]
    :answer_c: Error, it is illegal to assign
    :correct: b
    :feedback_a: Item assignment does not insert the new item into the list.
    :feedback_b: Yes, the value True is placed in the list at index 2.  It replaces 8.
    :feedback_c: Item assignment is allowed with lists.  Lists are mutable.

    What is printed by the following statements?

    .. code-block:: python

      alist = [4, 2, 8, 6, 5]
      alist[2] = True
      print(alist)

.. mchoice:: listMut_MC_index
    :practice: T
    :answer_a: [3, 2, 1]
    :answer_b: [2, 0, 2]
    :answer_c: [2, 2, 2]
    :answer_d: [2, 2, 1]
    :correct: c
    :feedback_a: That is the original contents of <code>values</code>, but the contents are changed.
    :feedback_b: When you set <code>values[0]</code> to <code>values[1]</code> it makes a copy of the value and doesn't zero it out.
    :feedback_c: The value at index 0 is set to a copy of the value at index 1 and the value at index 2 is incremented.
    :feedback_d: Notice that we do change the value at index 2.  It is incremented by 1.

    What would the following code print?

    ::

      values = [3, 2, 1]
      values[0] = values[1]
      values[2] = values[2] + 1
      print(values)

.. mchoice:: listMut_MC_items
    :answer_a: items[0]
    :answer_b: items[1]
    :answer_c: items[2]
    :answer_d: items[3]
    :correct: d
    :feedback_a: Originally, <code>items[0]</code> was 2, but then we set it to the string: <code>"First item"</code>
    :feedback_b: We set <code>items[1]</code> to be the same as <code>items[0]</code>: <code>"First item"</code>
    :feedback_c: We incremented <code>items[2]</code> in line 4.
    :feedback_d: The value at <code>items[3]</code> doesn't change.  It still equals 8.

    Of the four items in the list named ``items``, which one is not changed in the following code?

    ::

      items = [2,4,6,8]
      items[0] = "First item"
      items[1] = items[0]
      items[2] = items[2] + 1
      print(items)
