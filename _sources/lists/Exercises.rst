Multiple Choice Questions
--------------------------
.. mchoice:: listEx_MC1
    :practice: T
    :answer_a: [ [ ], 3.14, False]
    :answer_b: ["cat", [56, 57, "dog"]]
    :answer_c: [ [56, 57, "dog"], [ ], 3.14, False]
    :answer_d: [27, "cat"]
    :correct: b
    :feedback_a: Incorrect! This slice starts at index 4 and goes up to and includes the last item.
    :feedback_b: Correct! The word "cat" is at index 2 and [56, 57, "dog"] is what you get when index 4 is exclusive.
    :feedback_c: Incorrect! Remember that index values start at 0!
    :feedback_d: Incorrect! This slice starts at index 4 and goes up to and includes the last item.

    What is returned by the following function?

    .. code-block:: python

      def slice_exercise():
          alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
          print(alist[2:4])

.. mchoice:: listEx_MC2
    :practice: T
    :answer_a: 4
    :answer_b: 5
    :answer_c: False
    :answer_d: 3.14
    :correct: b
    :feedback_a: Incorrect! The built in function, len, returns the actual number of items in the list, not the maximum index value.
    :feedback_b: Correct! There are 5 items in this list.
    :feedback_c: Incorrect! The built in function, len, returns the actual number of items in the list.
    :feedback_d: Incorrect! The built in function, len, returns the actual number of items in the list.

    What is returned by the following function?

    .. code-block:: python

      def len_of_list():
          alist = [3, 67, "cat", 3.14, False]
          return len(alist)

.. mchoice:: listEx_MC3
    :practice: T
    :answer_a: Error, you cannot use the upper method on a list.
    :answer_b: 2
    :answer_c: CAT
    :answer_d: FALSE
    :correct: c
    :feedback_a: Incorrect! alist[2] is the string cat so the upper method is legal
    :feedback_b: Incorrect! 2 is the index.  We want the item at that index.
    :feedback_c: Correct! The string cat is upper cased to become CAT.
    :feedback_d: Incorrect! False is at the maximum index, not the second index.

    What is returned by the following function?

    .. code-block:: python

      def indexing_and_upper():
          alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
          return alist[2].upper()


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

    What is returned by the following function?

    .. code-block:: python

      def list_within_list():
          alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
          return alist[2][0]

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

    What is returned by the following function?

    .. code-block:: python

      def list_transformation():
          alist = [4, 2, 8, 6, 5]
          blist = [alist] * 2
          alist[3] = 999
          return blist

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

    What is returned by the following function?

    .. code-block:: python

      def list_transformation():
          alist = [4, 2, 8, 6, 5]
          blist = [ ]
          for item in alist:
              blist.append(item+5)
          return blist


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

        def find_sum():
            nums = [4, 5, 2, 93, 3, 5]
            s = 0
            for n in nums:
                s = s + 1
            return s

    II.

    .. sourcecode:: python

        def find_sum():
            nums = [4, 5, 2, 93, 3, 5]
            s = 0
            for n in nums:
                s = n + n
            return s

    III.

    .. sourcecode:: python

        def find_sum():
            nums = [4, 5, 2, 93, 3, 5]
            s = 0
            for n in nums:
                s = s + n
            return s

.. mchoice:: listEx_MC10
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

        def num_of_strings():
            lst = ['plan', 'answer', 5, 9.29, 'order, items', [4]]
            s = 0
            for n in lst:
                s = s + n
            return s

    2.

    .. sourcecode:: python

        def num_of_strings():
            lst = ['plan', 'answer', 5, 9.29, 'order, items', [4]]
            for item in lst:
                s = 0
                if isinstance(item, str):
                    s = s + 1
            return s

    3.

    .. sourcecode:: python

        def num_of_strings():
            lst = ['plan', 'answer', 5, 9.29, 'order, items', [4]]
            s = ""
            for n in lst:
                s = s + n
            return s

    4.

    .. sourcecode:: python
    
        def num_of_strings():
            lst = ['plan', 'answer', 5, 9.29, 'order, items', [4]]
            s = 0
            for item in lst:
                if isinstance(item, str):
                    s = s + 1


.. mchoice:: listEx_MC11
    :practice: T
    :answer_a: [3, 0, 2, 0, 0]
    :answer_b: [3, 0, 2]
    :answer_c: [3, 2]
    :answer_d: [3, 2, 0]
    :correct: d
    :feedback_a: The list is modified by the pop.
    :feedback_b: It will pop 0's except for the last one.
    :feedback_c: This would be true if it didn't always increment the index.
    :feedback_d: Since it always increments the index it will miss the last zero.

    What will the following code print?

    ::

        def mystery(num_list):
            index = 0
            while index < len(num_list):
                num = num_list[index]
                if num == 0:
                    num_list.pop(index)
                index += 1

        list1 = [3, 0, 2, 0, 0]
        mystery(list1)
        print(list1)

.. mchoice:: listEx_MC12
    :practice: T
    :answer_a: 1
    :answer_b: 9
    :answer_c: 15
    :answer_d: None
    :correct: a
    :feedback_a: It adds 1 to the sum and then returns.
    :feedback_b: This would be true if it didn't return until after the loop finished
    :feedback_c: This would be true if it didn't return until after the loop finished and the range incremented by 1 rather than 2
    :feedback_d: This would be true if there wasn't a return statement

    What will the following code print?

    ::

        def mystery(num_list):
            sum = 0
            for i in range(0, len(num_list), 2):
                num = num_list[i]
                sum += num
                return sum

        list1 = [1, 2, 3, 4, 5]
        print(mystery(list1))

.. mchoice:: listEx_MC13
    :practice: T
    :answer_a: True
    :answer_b: False
    :answer_c: None
    :answer_d: It will not compile
    :correct: a
    :feedback_a: It returns true after checking the first num.
    :feedback_b: This would be true if the first number in the list was negative.
    :feedback_c: This would be true if there wasn't a return statement.
    :feedback_d: This would be true if there was a syntax error.

    What will the following code print?

    ::

        def mystery(num_list):
            for num in num_list:
                if num < 0:
                    return False
                else:
                    return True

        print(mystery([3, -1, 2]))


.. mchoice:: listEx_MC14
    :practice: T
    :answer_a: [10, 15, 20]
    :answer_b: [20, 15]
    :answer_c: [15, 20]
    :answer_d: [20, 15, 10]
    :correct: c
    :feedback_a: It only adds numbers that are greater than 10
    :feedback_b: This would be true if append added at the front, but it adds at the end
    :feedback_c: It adds all numbers greater than 10 in order.
    :feedback_d: This would be true if append added at the front, but it adds at the end and it won't add the 10

    What will the following code print?

    ::

        def mystery(num_list):
            out = []
            for num in num_list:
                if num > 10:
                    out.append(num)
            return out


        print(mystery([5, 10, 15, 20]))


.. mchoice:: listEx_MC15
    :practice: T
    :answer_a: [5, 10, 15, 20]
    :answer_b: [20, 15, 10, 5]
    :answer_c: [5, 10, 15]
    :answer_d: [20, 15, 10]
    :correct: d
    :feedback_a: It adds the numbers in reverse order
    :feedback_b: This would be true if the end for range was less than 0
    :feedback_c: It adds the numbers in reverse order
    :feedback_d: It adds the numbers in reverse order, but stops before the item at index 0.

    What will the following code print?

    ::

        def mystery(num_list):
            out = []
            for i in range(len(num_list) - 1,0,-1):
                num = num_list[i]
                    out.append(num)
            return out


        print(mystery([5, 10, 15, 20]))
