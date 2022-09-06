Group Work: Functions with Loops
-----------------------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Recognize a for-each loop.
* Recognize a range.
* Recognize a for loop.
* Recognize a while loop.

*Process Objectives:*

* Predict the outcome of code with lists and loops.
* Modify code with loops.
* Fix code that processes a list with loops.

The For-Each Loop
============================

A for-each loop in Python will loop though the items in a list starting with the item at index 0, then index 1, and so on till the last item in the list.

.. fillintheblank:: funct_ll_fitb_count_odd_first

    What is the first thing that will be printed by the code below?

    - :1: It will print the number of values that are odd in the first list, which is one.
      :.*: Run the code to check.

.. fillintheblank:: funct_ll_fitb_count_odd_last

    What is the last thing that will be printed by the code below?

    - :0: It will print the number of values that are odd in the last list which is zero.
      :.*: Run the code to check.

.. activecode:: func_ll_ac_count_odd
    :caption: Count odd numbers

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

    What is the name of the variable that can be used to refer to the current list item in the for-each loop?

    - :num: The for-each loop uses num to refer to the current list item.
      :.*: What is the first name in the for-each loop?

.. parsonsprob:: func_ll_pp_total_even
   :numbered: left
   :adaptive:
   :order: 2, 5, 6, 1, 0, 7, 4, 3, 8, 9
   :practice: T

   Drag the blocks from the left and put them in the correct order on the right to define a function ``total_even`` that returns the total of the even numbers in the passed list.
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

Range and For
============================

How do you loop just a set number of times?  You can use
the built-in ``range`` function to do this.

.. fillintheblank:: funct_ll_fitb_print_to_first

    What is first value that that following code prints?

    - :0: The code prints from 0 to the passed end.
      :.*: Run the code and see.

.. fillintheblank:: funct_ll_fitb_print_to_last

    What is last value that that following code prints?

    - :2: The code prints from 0 to the passed end (exclusive).  The end is 3 which means the last value is 2.
      :.*: What is the parameter in the second call to count_to?

.. activecode:: func_ll_ac_count_to
    :caption: Range example with end

    Run this code to see what it prints.
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

.. fillintheblank:: funct_ll_fitb_print_from_to_first

    What is first value that that following code prints?

    - :1: The code prints from start (inclusive) to the passed end (exclusive) and the start is one.
      :.*: Run the code and see.

.. fillintheblank:: funct_ll_fitb_print_from_to_last

    What is last value that that following code prints?

    - :9: The code prints from start (inclusive) to the passed end (exclusive) so it ends with 9.
      :.*: Run the code and see.


.. activecode:: func_ll_ac_print_from_to
    :caption: Range example with start and end

    Run this code to see what it prints.
    ~~~~
    # function definition
    def print_from_to(start, end):
        for x in range(start, end):
            print(x)

    # function definition
    def main():
        print_from_to(1,5)
        print()
        print_from_to(5,10)

    # function call
    main()

.. note::

   The function range(start, end) will return a range object (an iterator) that allows you to loop from start (inclusive) to end (exclusive).

.. fillintheblank:: funct_ll_fitb_print_from_to_by_first

    What is first value that that following code prints?

    - :10: The code prints from start (inclusive) to the passed end (exclusive) and the start is ten.
      :.*: Run the code and see.

.. fillintheblank:: funct_ll_fitb_print_from_to_by_last

    What is last value that that following code prints?

    - :9: The code prints from start (inclusive) which is 1 to the passed end (exclusive) which is 10 and changes by 2 each time so the end is 9.
      :.*: Run the code and see.

.. activecode:: func_ll_ac_print_from_to_by
    :caption: Range example with start, end, and by

    Run this code to see what it prints.
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

.. parsonsprob:: func_ll_pp_total_at_odd_indices
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

.. activecode:: func_ll_ac_inifite
    :caption: Example infinite loop

    Try running the code below.
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

.. fillintheblank:: funct_ll_fitb_while_break

    What keyword is used to stop the loop in the above code?

    - :break: The break keyword will stop the enclosing loop.
      :.*: How does the code stop above?

What do you think would happen if you deleted lines 6 and 7 in the above code?

.. note ::

   A loop that never ends is called an infinite loop.  A while loop should have some way to end.  If you have an infinite loop you may need to refresh the page to stop it.

.. activecode:: func_ll_ac_while
    :caption: While Example

    Run this code to see what it prints.
    ~~~~
    import random
    def check_value(target, actual):
        if target == actual:
            return("Correct")
        elif (actual < target):
            return("Too Low")
        else:
            return("Too High")

    # function definition
    def main():
        # pick a random number
        target = random.randint(1,10)

        # get the user's guess
        num = int(input("Enter a number from 1 to 10 (inclusive)"))

        # get the result
        result = check_value(target, num)

        # loop while the guess is not correct
        while result != "Correct":

            # Tell the result and get a new number
            num = int(input(result + ".  Enter a number from 1 to 10"))

            # get the result
            result = check_value(target, num)

        # Tell the user the number
        print("You guessed it!  It was", target)

    # function call
    main()

Modify the code above to keep a count of the number of guesses and print the number of guesses it took to guess the correct value.

.. activecode:: func_ll_ac_blastoff
    :caption: Fixing a while loop

    Fix the code below to print from start (inclusive) to 0 and then "Blastoff"
    ~~~~
    def countdown(start):
        value = start
        while value > 0:
            print(value)
        print(Blastoff)

    def main():
        countdown(5)

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: func_loop_groupsub
   :limit: 4
