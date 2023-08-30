Group Work: Functions with Lists and Loops
----------------------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.


**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Understand how list indexing and slicing works.
* Gain famililarity with built-in fuctions that take lists as well as list methods.
* Recognize a for-each loop.
* Recognize a range.
* Recognize a for loop.
* Recognize a while loop.

*Process Objectives:*

* Predict the output of code with lists (Information Processing)
* Write code using the slice operator (Assessment)
* Write code using built-in functions that take lists
* Predict the outcome of code with lists and loops.
* Modify code with loops.
* Fix code that processes a list with loops.

List Indexing and Slicing
============================

A list holds items in order and you can get the value at an index, just like you can with strings.  You can also 
use negative indices, just like you can with strings.  You can use the slice operator ``[start:end]`` with lists to get a 
new list by copying part of a list, just like you can with strings. The new list will include the item at the start index (inclusive) and
all elements up to the end index - 1.  

.. mchoice:: flal_neg_2_result
    :practice: T
    :answer_a: hi
    :answer_b: 3
    :answer_c: buy
    :answer_d: 4
    :correct: c
    :feedback_a: This would be true if it was returning the item at index 0 or -4.
    :feedback_b: This would be true if it was returning the item at index 1 or -3.
    :feedback_c: This is returning the second to the last item, the one at index -2.
    :feedback_d: This would be true if it was returning the item at index 3 or -1.

    What is the last thing that the following code prints?

    .. code-block:: python

        def list_get(lst):
            print(lst[0])
            print(lst[:2])
            return lst[-2]

        l = ["hi", 3, 'buy', 4]
        print(list_get(l))


Built-in Functions That Work on Lists
========================================

There are several built-in functions in Python that work on lists such as ``max``, ``min``, ``len``, and ``sum``.

.. activecode:: flal_ac_list_func
    :caption: List methods

    Run this code to see what it prints.  You can also step through the code using the "Show CodeLens" button.
    ~~~~
    # function definition
    def list_func(my_list):
        print(max(my_list))
        print(min(my_list))
        print(len(my_list))
        print(sum(my_list))

    # function definition
    def main():
        list_func([1, 2, 3])
        list_func([90, 100])

    # function call
    main()

.. activecode:: flal_ac_sum_first_half
   :autograde: unittest
   :nocodelens:

   Write a function ``sum_first_half`` that takes a list and returns a the sum of just the first half of the items.  
   For example, ``sum_first_half([1,2,3,4])`` should return ``3`` (sum of 1 and 2) and ``first_half([7,8,9])`` should return ``7``.  
   ~~~~
   def sum_first_half(alist):

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(sum_first_half([1,2,3,4]), 3, 'sum_first_half([1,2,3,4])')
           self.assertEqual(sum_first_half([7,8,9]), 7, 'sum_first_half([7,8,9])')
           self.assertEqual(sum_first_half([]), 0, 'sum_first_half([])')
           self.assertEqual(sum_first_half([6]), 0, 'sum_first_half([6])')
           self.assertEqual(sum_first_half([1,2,3,4,5]), 3, 'sum_first_half([1,2,3,4,5])')
           self.assertEqual(sum_first_half([1,2,3,4,5,6]), 6, 'sum_first_half([1,2,3,4,5,6])')

   myTests().main()

List Methods
===============

Lists are objects of the ``list`` class and have methods that operate on list objects using dot notation (name.method()) such as 
``append``, ``pop``, and ``extend``.

.. activecode:: flal_ac_list_methods
    :caption: List methods

    Run this code to see what it prints.  You can also step through the code using the "Show CodeLens" button.
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

.. mchoice:: flal_list_append_pop_predict
    :practice: T
    :answer_a: [5, 7, 3]
    :answer_b: [2, 7, 3]
    :answer_c: [2, 5, 7]
    :answer_d: [2, 5, 3]
    :correct: d
    :feedback_a: This would be true if pop removed the first value that was passed in, but it takes an index and removes the item at that index.
    :feedback_b: This would be true if pop removed the item at index 1, but it removes the item at index 2 and the first item is at index 0.
    :feedback_c: This would be true if pop removed the last item, but it removes the one at index 2.
    :feedback_d: Correct.  This adds 3 at the end and then removes the item at index 2.

    What would the following code print?

    .. code-block:: python

        def list_trans(lst):
            lst.append(3)
            lst.pop(2)
            return lst
        l1 = [2, 5, 7]
        print(list_trans(l1))

.. Note::

   Lists are mutable (changeable).  List methods like ``append`` and ``pop`` change the current list.

You can also ``reverse`` a list or ``sort`` it.

.. activecode:: flal_ac_list_methods2
    :caption: More list methods

    Run this code to see what it prints.  You can also step through the code using the "Show CodeLens" button.
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


.. mchoice:: flal_list_result_of_reverse
    :practice: T
    :answer_a: None
    :answer_b: [2, 5, 7]
    :answer_c: [7, 5, 2]
    :answer_d: Nothing, there will be an error.
    :correct: a
    :feedback_a: It prints the return value from the reverse method which is None.
    :feedback_b: This would be true if it printed the value of lst before it reversed it.
    :feedback_c: This would be true if it printed the value of lst after it revsersed it. 
    :feedback_d: This would be true if there wasn't a reverse method.

    What is the last thing that the following code prints?

    .. code-block:: python

        def list_trans(lst):
            r = lst.reverse()
            print(lst)
            print(r)

        l1 = [2, 5, 7]
        list_trans(l1)

The For-Each Loop
============================

A for-each loop in Python will loop though the items in a list starting with the item at index 0, then index 1, and so on till the last item in the list.

.. fillintheblank:: flal_fitb_count_odd_last

    What is the first thing that will be printed by the code below?

    - :1|one: It will print the number of values that are odd in the first list which is 1.
      :.*: Run the code to check.

.. activecode:: flal_ll_ac_count_odd
    :caption: Count odd numbers

    Run this code to see what it prints.  You can also step through the code using the "Show CodeLens" button.
    ~~~~
    # function definition
    def count_odd(num_list):
        count = 0
        for num in num_list:
            if num % 2 == 1:
                count += 1
        return count

    # function definition
    def main():
        list1 = [2, 8, 9]
        print(count_odd(list1))
        list1 = [1, 3, 5]
        print(count_odd(list1))
        list1 = [0]
        print(count_odd(list1))

    # function call
    main()

Range and For
============================

How do you loop just a set number of times?  You can use
the built-in ``range`` function to do this.

.. fillintheblank:: flal_fitb_print_to_last

    What is the last value that the following code prints?

    - :2|two: The code prints from 0 to the passed end (exclusive).  The end is 3 which means the last value is 2.
      :.*: What is the parameter in the second call to count_to?

.. activecode:: flal_ac_count_to
    :caption: Range example with end

    Run this code to see what it prints.  You can also step through the code using the "Show CodeLens" button.
    ~~~~
    # function definition
    def print_to(end):
        for x in range(end):
            print(x)

    # function definition
    def main():
        print_to(5)
        print()
        print_to(3)

    # function call
    main()

.. note::

   The ``range(end)`` function will produce values from 0 to end - 1.

.. fillintheblank:: flal_fitb_print_from_to_by_last

    What is last value that the following code prints?

    - :9|nine: The code prints from start (inclusive) which is 1 to the passed end (exclusive) which is 10 and changes by 2 each time so the end is 9.
      :.*: Run the code and see.

.. activecode:: flal_ac_print_from_to_by
    :caption: Range example with start, end, and by

    Run this code to see what it prints.  You can also step through the code using the "Show CodeLens" button.
    ~~~~
    # function definition
    def print_from_to_by(start, end, by):
        for x in range(start, end, by):
            print(x)

    # function definition
    def main():
        print_from_to_by(10,0,-1)
        print()
        print_from_to_by(1,10,2)

    # function call
    main()

.. parsonsprob:: flal_pp_total_at_odd_indices
   :numbered: left
   :adaptive:
   :order: 7, 3, 4, 1, 0, 6, 5, 2
   :practice: T

   Drag the blocks from the left and put them in the correct order on the right to define a function ``total_at_odd_indices`` that returns the total of the numbers at odd indices in the passed list.
   -----
   def total_at_odd_indices(alist):
   =====
   def total_at_odd_indices(alist) #paired
   =====
        total = 0
   =====
        for i in range(1,len(alist),2):
   =====
        for i in range(1,len(alist)): #paired
   =====
            total += alist[i]
   =====
            total += i #paired
   =====
        return total

While Loops
===============

A while loop repeats while a Boolean expression is True.

.. activecode:: flal_ac_inifite
    :caption: Example infinite loop

    Try running the code below.  You can also step through the code using the "Show CodeLens" button.
    ~~~~
    def example():
        count = 0
        while (True):
            print("This is the song that never ends", count)
            count += 1
            if (count > 100):
                break

    def main():
        example()

    main()

.. fillintheblank:: flal_fitb_while_break

    What keyword is used to stop the loop in the above code?

    - :break: The break keyword will stop the enclosing loop.
      :.*: How does the code stop above?

.. note ::

   A loop that never ends is called an infinite loop.  A while loop should have some way to end.  If you have an infinite loop you may need to refresh the page to stop it.


If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: flal_list_groupsub
   :limit: 4
