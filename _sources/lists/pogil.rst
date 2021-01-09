Group Work: Lists and Strings
--------------------------------------------------------

It is best to use a POGIL approach with the following.

Many interesting problems involve manipulating sequences of data.  This
activity should help you learn about two types of sequences in Python:
lists and strings. Both lists and strings hold items in order and you can use an index
to get the value at a location.  The index of the first item in each is 0.

**Content Learning Objectives**

After completing this activity, Students should be able to:

* Name four list methods, and describe what each does.
* Explain the syntax and meaning of slice operations, with and without indexes.
* Name four string methods and describe what each does.

**Process Skill Goals**

During the activity, students should make progress toward:

* Graining insight about data structures from many examples.

Lists
===========

Lists can hold multiple values in order.  The values inside of square brackets and are separated by
commas.


.. activecode:: list_methods_rolls_ac
    :caption: list methods examples

    Run this code to see what it prints.
    ~~~~
    rolls = [4, 3, 6, 2, 6]
    print(type(rolls))
    print(len(rolls))
    print(rolls[4])
    print(rolls[1])
    print(rolls)
    print(rolls.count(6))
    print(rolls.count(1))
    rolls.append(3)
    print(rolls.append(4))
    print(len(rolls))
    print(rolls)
    print(rolls[len(rolls)])

.. fillintheblank:: list_len_rolls_fitb

    What is printed by line 3?

    - :5: len(list) returns the number of items in the list
      :.*: How many items are in rolls at this point?

.. fillintheblank:: index_last_rolls_fitb

    What is the index of the last item in rolls at line 3?

    - :4: The last item is at the length of the list minus one.
      :.*: Remember that the first item is at index 0.

.. fillintheblank:: list_count_not_found_fitb

    What does the count method return if the value isn't in the list?

    - :0: If there are no items the count is 0
      :.*: How many items are there if there are not any?

.. fillintheblank:: index_append_return_fitb

    What does the append method return?

    - :None: It doesn't return anything which defaults to None in Python
      :.*: What does Python return if the function doesn't have a return keyword?

.. activecode:: list_methods_lucky_ac
    :caption: list methods examples

    Run this code to see what it prints.
    ~~~~
    lucky.append(3)
    lucky = []
    print(type(lucky))
    lucky.append(7)
    lucky.append(3)
    print(lucky)
    lucky.remove(3)
    print(lucky)
    help(lucky.remove)
    help(lucky)

.. dragndrop:: list_methods_dnd
    :practice: T
    :feedback: Read the chapter on lists and try again.
    :match_1: count|||Returns the number of times a specified value appears in the list
    :match_2: append|||Adds a value to the end of a list.
    :match_3: len|||Returns the number of items in a list.
    :match_4: remove|||Removes an item from a list.
    :match_5: type|||Returns the class name (type) of the current object.

    Drag each term to its definition
