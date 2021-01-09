Group Work: Functions with Loops
-----------------------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Recognize a for-each loop.
* Recognize a range.
* Recognize a for loop.
* Recognize a while loop.

*Process Objectives:*

* Predict the outcome of code with lists and loops.
* Write code that processes a list with loops.

The For-Each Loop
============================

A for-each loop in Python will loop though a list starting with the item at index 0, then index 1, and so on till the last item in the list.

.. fillintheblank:: funct_ll_fitb_count_odd_first
    :practice: T

    What is the first thing that will be printed by the code below?

    - :1: It will print the number of values that are odd in the first list.
      :.*: Run the code to check.

.. fillintheblank:: funct_ll_fitb_count_odd_last
    :practice: T

    What is the last thing that will be printed by the code below?

    - :0: It will print the number of values that are odd in the last list which is zero.
      :.*: Run the code to check.

.. activecode:: func_ll_ac_count_odd
    :caption: Add tests

    Run this code to see what it prints.
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

.. fillintheblank:: funct_ll_fitb_count_odd_var
    :practice: T

    What is the name of the variable that can be used to refer to the current list item in the for-each loop?

    - :num: The for-each loop uses num to refer to the current list item.
      :.*: What is the first name in the for-each loop?

.. parsonsprob:: func_ll_pp_total_even
   :numbered: left
   :adaptive:
   :practice: T

   Drag the blocks from the left and put them in the correct order on the right to define a function <code>total_even</code> that returns the total of the even numbers in the passed list.
   -----
   def total_even(alist):
   =====
   Def total_even(alist): #paired
   =====
       total = 0
   =====
       for num in alist:
   =====
       for num in alist #paired
   =====
           if num % 2 == 0:
   =====
           if num % 2 == 1: #paired
   =====
               total += num
   =====
       return total
   =====
       Return total #paired
