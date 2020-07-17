Multiple Choice Questions
--------------------------
.. mchoice:: listEx_MC1
    :practice: T
    :answer_a: [ [ ], 3.14, False]
    :answer_b: ["cat", [56, 57, "dog"]]
    :answer_c: [ [56, 57, "dog"], [ ], 3.14, False]
    :correct: b
    :feedback_a: No, this slice starts at index 4 and goes up to and including the last item.
    :feedback_b: "cat" is at index 2 and [56, 57, "dog"] is what you get when index 4 is exclusive.
    :feedback_c: Remember that index values start at 0!

    What is printed by the following statements?

    ::

      alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
      print(alist[2:4])

.. mchoice:: listEx_MC2
    :practice: T
    :answer_a: 4
    :answer_b: 5
    :correct: b
    :feedback_a: len returns the actual number of items in the list, not the maximum index value.
    :feedback_b: Yes, there are 5 items in this list.

    What is printed by the following statements?

    .. code-block:: python

      alist = [3, 67, "cat", 3.14, False]
      print(len(alist))

.. mchoice:: listEx_MC3
    :practice: T
    :answer_a: Error, you cannot use the upper method on a list.
    :answer_b: 2
    :answer_c: CAT
    :correct: c
    :feedback_a: alist[2] is the string cat so the upper method is legal
    :feedback_b: 2 is the index.  We want the item at that index.
    :feedback_c: Yes, the string cat is upper cased to become CAT.

    What is printed by the following statements?

    ::

      alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
      print(alist[2].upper())


.. mchoice:: listEx_MC4
    :practice: T
    :answer_a: 56
    :answer_b: c
    :answer_c: cat
    :answer_d: Error, you cannot have two index values unless you are using slicing.
    :correct: b
    :feedback_a: Indexes start with 0, not 1.
    :feedback_b: Yes, the first character of the string at index 2 is c
    :feedback_c: cat is the item at index 2 but then we index into it further.
    :feedback_d: Using more than one index is fine.  You read it from left to right.

    What is printed by the following statements?

    ::

      alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
      print(alist[2][0])

.. mchoice:: listEx_MC5
    :practice: T
    :answer_a: [4, 2, 8, 999, 5, 4, 2, 8, 999, 5]
    :answer_b: [[4, 2, 8, 999, 5], [4, 2, 8, 999, 5]]
    :answer_c: [4, 2, 8, 6, 5]
    :answer_d: [[4, 2, 8, 999, 5], [4, 2, 8, 6, 5]]
    :correct: b
    :feedback_a: [alist] * 2 creates a list containing alist repeated 2 times
    :feedback_b: Yes, blist contains two references, both to alist.
    :feedback_c: print(blist)
    :feedback_d: blist contains two references, both to alist so changes to alist appear both times.

    What is printed by the following statements?

    ::

      alist = [4, 2, 8, 6, 5]
      blist = [alist] * 2
      alist[3] = 999
      print(blist)

.. mchoice:: listEx_MC6
    :practice: T
    :answer_a: [4, 2, 8, 6, 5]
    :answer_b: [4, 2, 8, 6, 5, 5]
    :answer_c: [9, 7, 13, 11, 10]
    :answer_d: Error, you cannot concatenate inside an append.
    :correct: c
    :feedback_a: 5 is added to each item before the append is performed.
    :feedback_b: There are too many items in this list.  Only 5 append operations are performed.
    :feedback_c: Yes, the for loop processes each item of the list.  5 is added before it is appended to blist.
    :feedback_d: 5 is added to each item before the append is performed.

    What is printed by the following statements?

    ::

      alist = [4, 2, 8, 6, 5]
      blist = [ ]
      for item in alist:
          blist.append(item+5)
      print(blist)


.. mchoice:: listEx_MC7
   :answer_a: .pop()
   :answer_b: .insert()
   :answer_c: .count()
   :answer_d: .index()
   :feedback_a: pop removes and returns items (default is to remove and return the last item in the list)
   :feedback_b: insert will add an item at whatever position is specified.
   :feedback_c: count returns the number of times something occurs in a list
   :feedback_d: Yes, index will return the position of the first occurrence of an item.
   :correct: d
   :practice: T

   Which method would you use to figure out the position of an item in a list?

.. mchoice:: listEx_MC8
   :answer_a: .insert()
   :answer_b: .pop()
   :answer_c: .append()
   :answer_d: .remove()
   :feedback_a: While you can use insert, it is not the best method to use because you need to specify that you want to stick the new item at the end.
   :feedback_b: pop removes an item from a list
   :feedback_c: Yes, though you can use insert to do the same thing, you don't need to provide the position.
   :feedback_d: remove gets rid of the first occurrence of any item that it is told. It does not add an item.
   :correct: c
   :practice: T

   Which method is best to use when adding an item to the end of a list?

.. mchoice:: listEx_MC9
    :answer_a: I.
    :answer_b: II.
    :answer_c: III.
    :answer_d: none of the above would be appropriate for the problem.
    :correct: c
    :feedback_a: This pattern will only count how many items are in the list, not provide the total accumulated value.
    :feedback_b: This would reset the value of s each time the for loop iterated, and so by the end s would be assigned the value of the last item in the list plus the last item in the list.
    :feedback_c: Yes, this will solve the problem.
    :feedback_d: One of the patterns above is a correct way to solve the problem.
    :practice: T

    Given that we want to accumulate the total sum of a list of numbers, which of the following accumulator patterns would be appropriate?

    I.

    .. sourcecode:: python

        nums = [4, 5, 2, 93, 3, 5]
        s = 0
        for n in nums:
            s = s + 1

    II.

    .. sourcecode:: python

        nums = [4, 5, 2, 93, 3, 5]
        s = 0
        for n in nums:
            s = n + n

    III.

    .. sourcecode:: python

        nums = [4, 5, 2, 93, 3, 5]
        s = 0
        for n in nums:
            s = s + n

.. mchoice:: assess_question5_2_1_2
    :answer_a: 1.
    :answer_b: 2.
    :answer_c: 3.
    :answer_d: 4.
    :answer_e: none of the above would be appropriate for the problem.
    :correct: d
    :feedback_a: How does this solution know that the element of lst is a string and that s should be updated?
    :feedback_b: What happens to s each time the for loop iterates?
    :feedback_c: Reread the prompt again, what do we want to accumulate?
    :feedback_d: Yes, this will solve the problem.
    :feedback_e: One of the patterns above is a correct way to solve the problem.
    :practice: T

    Given that we want to accumulate the total number of strings in the list, which of the following accumulator patterns would be appropriate?

    1.

    .. sourcecode:: python

        lst = ['plan', 'answer', 5, 9.29, 'order, items', [4]]
        s = 0
        for n in lst:
            s = s + n

    2.

    .. sourcecode:: python

        lst = ['plan', 'answer', 5, 9.29, 'order, items', [4]]
        for item in lst:
            s = 0
            if type(item) == type("string"):
                s = s + 1

    3.

    .. sourcecode:: python

        lst = ['plan', 'answer', 5, 9.29, 'order, items', [4]]
        s = ""
        for n in lst:
            s = s + n

    4.

    .. sourcecode:: python

        lst = ['plan', 'answer', 5, 9.29, 'order, items', [4]]
        s = 0
        for item in lst:
            if type(item) == type("string"):
                s = s + 1
