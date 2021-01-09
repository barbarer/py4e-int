Group Work: Functions and Lists
---------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Learn how to access items in a list with positive and negative indices.
* Recognize built-in functions that work on lists (len, max, min, sum).
* Recognize list methods (append, pop, extend, sort, reverse, index).
* Learn how to use the slice operator to copy parts of a list.

*Process Objectives:*

* Predict the outcome of code with lists

Lists
============================

A list holds items in order and you can get the value at an index.

.. fillintheblank:: funct_ll_list_check_first_line

    What is the first thing that will be printed when the code below runs?

    - :1: It will print the item at index 0 in alist.
      :.*: What is the item at index 0 in the passed list?

.. fillintheblank:: funct_ll_list_check_last_line

    What is the last thing that will be printed when the code below runs?

    - :'?bye'?: It will print the item at the end of the list in the second call to the function.
      :.*: What is the last item in the list in the second call?

.. activecode:: func_ll_ac_list_check
    :caption: Accessing list values at indices

    Run this code to see what it prints.
    ~~~~
    # function definition
    def list_check(alist):
        print(alist[0])
        print(alist[1])
        print(len(alist))
        print(alist[-1])

    # function definition
    def main():
        list_check([1, 2, 5])
        list_check(['hi', 'bye'])

    # function call
    main()

.. fillintheblank:: funct_ll_list_char
    :practice: T

    What characters are used to indicate the start and end of a list?

    - :\[\]|\]\[: Square brackets are used at the start and end of a list.
      :.*: Look at the parameter to the function call in the code above.

.. fillintheblank:: funct_ll_first_index
    :practice: T

    What index is used to get the first item in a list?

    - :0: The first item in a list is at index 0.
      :.*: Try again!

.. fillintheblank:: funct_ll_last_index
    :practice: T

    What negative index is used to get the last item in a list?

    - :-1: The last item in a list is at index -1, which is the length of the list - 1.
      :.*: Try again!

Built-in Functions That Work on Lists
========================================

There are several built-in functions in Python that work on lists.

.. fillintheblank:: funct_ll_list_func_first

    What is the first value that will be printed when the code below runs?

    - :1: It will print the minimum value in the first list.
      :.*: What is the minimum value in the first list that is passed to the function?

.. fillintheblank:: funct_ll_list_func_last

    What is the last value that will be printed when the code below runs?

    - :95\.0: It will print the average of the values in the last list that is passed to the function.
      :95: This will print a floating point (will have a decimal and at least one digit after the decimal) result not an integer result.
      :.*: What is the average of the items in the last list that is passed to the function?

.. activecode:: func_ll_ac_list_func
    :caption: List methods

    Run this code to see what it prints.
    ~~~~
    # function definition
    def list_func(my_list):
        print(min(my_list))
        print(max(my_list))
        print(len(my_list))
        print(sum(my_list))
        print(sum(my_list) / len(my_list))

    # function definition
    def main():
        list_func([1, 2, 3])
        list_func([90, 100])

    # function call
    main()

.. dragndrop:: func_ll_dnd_funct
    :practice: T
    :feedback: Read the chapter on functions and try again.
    :match_1: len|||Returns the length of an object (the number of items in the list).
    :match_2: sum|||Returns the total of the values in the list.
    :match_3: min|||Returns the minimum value in the list.
    :match_4: max|||Returns the maximum value in the list.

    Drag each built-in function name to what it does.

List Methods
===============

Lists are objects of the ``list`` class and have methods that operate on list objects.

.. fillintheblank:: funct_ll_list_methods_first

    What is the second thing that will be printed when the code below runs?

    - :\[1\]: It will print the contents of the passed list
      :.*: What does alist equal at the start of the function the first time the function is called?

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

.. mchoice:: funct_mc_list_immutable
   :practice: T

   Are lists mutable (changeable)?

   -   Yes

       +   List methods change the current list.

   -   No

       -   Strings are immutable, but lists are not.

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

.. dragndrop:: func_ll_dnd_func_methods
    :practice: T
    :feedback: Read the chapter on functions and try again.
    :match_1: pop|||Removes the value at the specified index.
    :match_2: append|||Adds the value or list at the end of the current list.
    :match_3: extend|||Adds the contents of the passed list to the end of the current list.
    :match_4: sort|||Sort the contents of the list in ascending order.
    :match_5: reverse|||Reverse the contents of the list.

    Drag each built-in function name to what it does.

Using the Slice Operator
============================

You can use the slice operator[n:m] with lists to make a copy of the list with all items
from n to m - 1.

.. fillintheblank:: funct_ll_fitb_slice_first
    :practice: T

    How many items will be in the first list that is printed below?

    - :4: It will print the result of copying the first list which has 4 items.
      :.*: Run the code to check.

.. fillintheblank:: funct_ll_fitb_slice_last
    :practice: T

    How many items will be in the last list that is printed below?

    - :4: The slice operator does not change the original list.  It makes a new list.
      :.*: Run the code to check.

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
