Group Work: Functions and Lists
---------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.


**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Use positive and negative indices to access elements of a list.
* Identify the purpose of common list methods and common methods that take lists as parameters
* Use the slice operator to copy parts of a list.

*Process Objectives:*

* Predict the output of code with lists (Information Processing)
* Write code using the slice operator (Assessment)

List Indexing
============================

A list holds items in order and you can get the value at an index, just like you can with strings.

.. fillintheblank:: funct_ll_list_check_start_last_line_v2

    What is the last thing that will be printed when the code below runs?

    - :'?hi'?: It will print the first item in the second list.
      :.*: What is the first item in the list in the second call?

.. activecode:: func_ll_ac_list_check_start
    :caption: Accessing list values at indices

    Run this code to see what it prints.
    ~~~~
    # function definition
    def list_check(alist):
        print(alist[0])

    # function definition
    def main():
        list_check([1, 2, 5])
        list_check(['hi', 'bye'])

    # function call
    main()


.. activecode:: func_ll_ac_list_check
    :caption: Accessing list values at indices

    Run this code to see what it prints.
    ~~~~
    # function definition
    def list_check(alist):
        print(alist[1])
        print(len(alist))
        print(alist[-1])

    # function definition
    def main():
        list_check([4, 5, 6])
        list_check(['blue', 'red'])

    # function call
    main()

.. fillintheblank:: funct_ll_list_char
    :practice: T

    What characters are used to indicate the start and end of a list?

    - :\[\]|\]\[: Square brackets are used at the start and end of a list.
      :.*: Look at the parameter to the function call in the code above.

.. fillintheblank:: funct_ll_last_index
    :practice: T

    What negative index is used to get the last item in a list?

    - :-1: The last item in a list is at index -1, which is the length of the list - 1.
      :.*: Try again!

.. mchoice:: list_neg_2_result
    :practice: T
    :answer_a: hi
    :answer_b: 3
    :answer_c: buy
    :answer_d: 4
    :answer_e: Nothing, there will be an error.
    :correct: c
    :feedback_a: This would be true if it was returning the item at index 0 or -4.
    :feedback_b: This would be true if it was returning the item at index 1 or -3.
    :feedback_c: This is returning the second to the last item, the one at index -2.
    :feedback_d: This would be true if it was returning the item at index 3 or -1.
    :feedback_e: This code will run without any errors.

    What will the following code print?

    .. code-block:: python

        def list_get(lst):
            return lst[-2]
        l = ["hi", 3, 'buy', 4]
        print(list_get(l))

.. shortanswer:: list_index_negative_indices

   Describe in your own words how negative indices work.


Built-in Functions That Work on Lists
========================================

There are several built-in functions in Python that work on lists.

.. activecode:: func_ll_ac_list_func
    :caption: List methods

    Run this code to see what it prints.
    ~~~~
    # function definition
    def list_func(my_list):
        print(max(my_list))
        print(min(my_list))
        print(len(my_list))
        print(sum(my_list))
        print(sum(my_list) / len(my_list))

    # function definition
    def main():
        list_func([1, 2, 3])
        list_func([90, 100])

    # function call
    main()

.. activecode:: avg_drop_high_and_low
   :autograde: unittest
   :nocodelens:


   Write a function ``avg_with_drop`` that takes a list, ``num_list`` and returns the average of the values in the list, but it does not include the highest or lowest value in the average. For example, ``avg_with_drop([1,2,3,4])`` should return ``2.5``.
   ~~~~
   def avg_with_drop(num_list):

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(avg_with_drop([1,2,3,4]), 2.5, 'avg_with_drop([1,2,3,4])')
           self.assertEqual(avg_with_drop([2,4,6,8]), 5, 'avg_with_drop([2,4,6,8])')
           self.assertEqual(avg_with_drop([10, 80, 100, 60]), 70, 'avg_with_drop([10, 80, 100, 60])')
           self.assertEqual(avg_with_drop([-10, 80, 120, 60]), 70, 'avg_with_drop([-10, 80, 120, 60])')
           self.assertEqual(avg_with_drop([5, 10, 15, 20]), 12.5, 'avg_with_drop([5, 10, 15, 20])')

   myTests().main()

List Methods
===============

Lists are objects of the ``list`` class and have methods that operate on list objects.

.. activecode:: func_ll_ac_list_methods
    :caption: List methods

    Run this code to see what it prints.
    ~~~~
    # function definition
    def list_methods(alist):
        print(type(alist))
        print(alist)
        alist.append(3)
        print(alist)
        alist.append([2])
        print(alist)
        alist.pop(1)
        print(alist)
        alist.extend([8, 11])
        print(alist)

    # function definition
    def main():
        l1 = [1]
        list_methods(l1)
        print(l1)
        l1 = ['hi', 'bye']
        list_methods(l1)
        print(l1)

    # function call
    main()

.. fillintheblank:: funct_ll_list_type

    What class (type) is a list?

    - :list: A list is of the class ``list``.
      :.*: What is the first thing printed from the code above?


.. mchoice:: funct_list_append_pop_predict
    :practice: T
    :answer_a: [2, 5, 7, 3]
    :answer_b: [5, 7, 3]
    :answer_c: [2, 7, 3]
    :answer_d: [2, 5, 7]
    :answer_e: [2, 5, 3]
    :correct: e
    :feedback_a: This is what the list looks like before the pop executes.
    :feedback_b: This would be true if pop removed the first value that was passed in, but it takes an index and removes the item at that index.
    :feedback_c: This would be true if pop removed the item at index 1, but it removes the item at index 2 and the first item is at index 0.
    :feedback_d: This would be true if pop removed the last item, but it removes the one at index 2.
    :feedback_e: Correct.  This adds 3 at the end and then removes the item at index 2.

    What would the following code print?

    .. code-block:: python

        def list_trans(lst):
            lst.append(3)
            lst.pop(2)
            return lst
        l1 = [2, 5, 7]
        print(list_trans(l1))

.. Note::

   Lists are mutable (changeable).  List methods like append and pop change the current list.

.. activecode:: func_ll_ac_list_methods2
    :caption: More list methods

    Run this code to see what it prints.
    ~~~~
    # function definition
    def list_methods2(alist):
        print(alist)
        alist.reverse()
        print(alist)
        alist.sort()
        print(alist)
        alist.sort(reverse = True)
        print(alist)

    # function definition
    def main():
        l1 = [-2, 50, -20, 30]
        list_methods2(l1)
        print(l1)
        l1 = ['hi', 'bye', 'apple']
        list_methods2(l1)
        print(l1)

    # function call
    main()


.. mchoice:: funct_list_result_of_reverse
    :practice: T
    :answer_a: None
    :answer_b: [2, 5, 7]
    :answer_c: [7, 5, 2]]
    :answer_d: Nothing, there will be an error.
    :correct: a
    :feedback_a: It prints the return value from the reverse method which is None.
    :feedback_b: This would be true if it printed the value of
    :feedback_c: This would be true if pop removed the item at index 1, but it removes the item at index 2 and the first item is at index 0.
    :feedback_d: This would be true if pop removed the last item, but it removes the one at index 2.
    :feedback_e: Correct.  This adds 3 at the end and then removes the item at index 2.

    What is the last thing the following code prints?

    .. code-block:: python

        def list_trans(lst):
            r = lst.reverse()
            print(lst)
            print(r)

        l1 = [2, 5, 7]
        list_trans(l1)

.. dragndrop:: func_ll_dnd_func_methods
    :practice: T
    :feedback: Read the chapter on functions and try again.
    :match_1: pop(index)|||Removes the value at the specified index.
    :match_2: append(item)|||Adds the items (value or list) to the end of the current list.
    :match_3: extend(list)|||Adds all the contents of the passed list to the end of the current list.
    :match_4: sort()|||Sort the contents of the list in ascending order.
    :match_5: reverse()|||Reverse the contents of the list.

    Drag each built-in function name to what it does.

Using the Slice Operator
============================

You can use the slice operator[n:m] with lists to get a new list just like you can with strings.


.. activecode:: func_ll_ac_list_slice
    :caption: Add tests

    Run this code to see what it prints.
    ~~~~
    # function definition
    def list_slice(num_list):
        a = num_list[:]
        print(a)
        b = num_list[:2]
        print(b)
        c = num_list[2:]
        print(c)

    # function definition
    def main():
        l1 = [-2, 50, -20, 30]
        list_slice(l1)
        print(l1)
        l1 = ['hi', 'bye', 'apple', 'dog']
        list_slice(l1)
        print(l1)

    # function call
    main()


.. fillintheblank:: funct_ll_fitb_slice_def_first
    :practice: T

    In ``[:2]`` what is the start index?

    - :0: If the start index isn't specified it is 0.
      :.*: Run the code above to check.

.. note::

   The slice operator always returns a new object.  It doesn't change the current object (list or string).


.. mchoice:: funct_list_neg_slice
    :practice: T
    :answer_a: [2, 3, 4, 5]
    :answer_b: [2, 3, 4]
    :answer_c: [3, 4, 5]
    :answer_d: [3, 4]
    :answer_e: Nothing, there will be an error.
    :correct: d
    :feedback_a: It returns items starting from the 3rd from the right and ending before the last.
    :feedback_b: It returns items starting from the 3rd from the right and ending before the last.
    :feedback_c: It returns items starting from the 3rd from the right and ending before the last.
    :feedback_d: It returns items starting from the 3rd from the right and ending before the last.
    :feedback_e: The code will run withtout an error.

    What does the following code print?

    .. code-block:: python

        alist = [1, 2, 3, 4, 5]
        l2 = alist[-3: -1]
        print(l2)

.. activecode:: fuct_ac_list_first_half
   :autograde: unittest
   :nocodelens:


   Write a function ``first_half`` that takes a list and returns a new list (use the slice operator) with just the items from the first half of the original list.  For example, first_half([1,2,3,4]) would return [1, 2] and first_half([7,8,9]) should return [7].
   ~~~~
   def first_half(alist):

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(first_half([1,2,3,4]), [1,2], 'first_half([1,2,3,4])')
           self.assertEqual(first_half([7,8,9]), [7], 'first_half([7,8,9])')
           self.assertEqual(first_half([]), [], 'first_half([])')
           self.assertEqual(first_half([6]), [], 'first_half([6])')
           self.assertEqual(first_half([1,2,3,4,5]), [1,2], 'first_half([1,2,3,4,5])')
           self.assertEqual(first_half([1,2,3,4,5,6]), [1,2,3], 'first_half([1,2,3,4,5,6])')

   myTests().main()

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: func_list_groupsub
   :limit: 4
