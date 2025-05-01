Group Work: Functions with Sets and Dictionaries
------------------------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Explain the difference between a set and a list.
* Explain the difference between a dictionary and a list.
* Predict the output of functions with sets and dictionaries.
* Use .get to prevent key errors in dictionaries.

*Process Objectives:*

* Predict the output of functions with sets and dictionaries.

What is a Set?
============================

A set is like a list in that holds items, but it does not hold items in an particular order.  
You can add an item to a set and remove an item from a set, just like you can do with a list.
You can also check if an item is in a set.

.. activecode:: func_set_add_rem_ac
    :caption: Adding an item and removing an item 

    Run this code to see what it prints.
    ~~~~
    # initialize a set
    s1 = {1, 4, 8}
    print(s1)

    # add an item to a set
    s1.add(3)
    print(s1)

    # remove an item from a set
    s1.remove(8)
    print(s1)

    # check if an item is in a set
    print(1 in s1)
    print(9 in s1)

.. fillintheblank:: funct_tuple_test_char
    :practice: T

    What characters are used to inintialize the values in a set in the code above?

    - :{}|curly braces: Use curly braces to initialize a set with items seperated by commas.
      :.*: What charcaters enclose the set values for s1?  


Sets only Contain Immutable Items
==================================

.. activecode:: func_set_add_type_ac
    :caption: Working with sets

    Run this code to see what happens. Then remove any code that causes and error and run it again.
    ~~~~
    # create an empty set
    s1 = set()

    # add an integer
    s1.add(1)
    print(s1)

    # add a string
    s1.add("hi")
    print(s1)

    # add a tuple
    s1.add((1, 2))
    print(s1)

    # add a list
    s1.add([1, 3, 2])
    print(s1)

.. mchoice:: funct_set_add_types_mc
    :practice: T

    Which of the following types can be added to a set?

    -   Strings

        +   Yes, Strings are immutable.

    -   Lists

        -   No, Lists can change.

    -   Tuples

        +   Yes, Tuples are immutable.

    -   Integers

        +   Yes, Integers are immutable.

.. Note::

   Sets can only store immutable items, even though they are mutable (can change).

Sets Do Not Allow Duplicates
=============================

.. mchoice:: funct_set_add_dup_mc
    :practice: T

    What values will be printed last when the code below is run?    

    -   Nothing will print.  You will get an error since you are trying to add a duplicate item to a set.

        -   No, it will actually ignore the duplicate item.

    -   1, 2, 3 

        +  Yes, it ignores the duplicate item.

    -   1, 2, 3, 1

        -   No, sets do not allow duplicate items.


.. activecode:: func_set_add_dup_ac
    :caption: Working with sets

    Run this code to see what it prints.
    ~~~~
    # create a set
    s1 = {1, 2, 3}
    print(s1)

    # add an integer
    s1.add(1)
    print(s1)

.. Note::

   Sets only store unique items.  If you try to add a duplicate item to a set it will be ignored.  

Adding Mutliple Items to a Set
=================================

.. activecode:: func_set_udpate_ac
    :caption: 

    Run this code to see what it prints.  You will get an error.  Remove the code that causes the error and run it again.
    ~~~~
    # create the sets 
    s1 = {8, 3, 5}
    s2 = {1, 2, 3}
   
    # try to add the sets together 
    s1.add(s2)
    print(s1)
    print(s2)

    # use update to add two sets together
    s1.update(s2)
    print(s1)
    print(s2)

.. Note::

   The set ``add`` method only adds one item to a set.  To add several items use the set ``update`` method.  

Set Methods
==============
You can use the following methods with sets.

* set1.union(other_set) - returns a new set with all the items from each of the sets
* set1.intersection(other_set) - returns a new set with just the items that are in both sets 
* set1.difference(other_set) - returns a new set with the items in the first set that are not in the second set
* set1.issubset(other_set) - returns True if the set is a subset of the other set
* set1.issuperset(other_set) - returns True if the set is a superset of the other set
* set1.semmantic_difference(other_set) - returns a new set with the items that are in either set, but not both.  This is also known as an exclusive or (XOR).

.. activecode:: func_set_union_int_ac
    :caption: Set methods

    Run this code to see what it prints.
    ~~~~
    # define two sets
    s1 = {1, 2, 3}
    s2 = {3, 4, 5}

    print(s1.union(s2))
    print(s1 | s2)

    print(s1.intersection(s2))
    print(s1 & s2)

.. fillintheblank:: funct_set_union_fitb
    :practice: T

    What character can be used to indicate the union of two sets as shown in the code above?

    - :\|: Use a pipe to indicate the union of two sets.
      :.*: Which gives the same output as the union method? 

.. activecode:: func_set_diff_sub_ac
    :caption: Set methods

    Run this code to see what it prints.
    ~~~~
    # define two sets
    s1 = {1, 2, 3}
    s2 = {3, 4, 5}

    print(s1.difference(s2))
    print(s1 - s2)
    print(s2 - s1)

    print(s1.issubset(s2))
    print(s1 <= s2)
    s3 = {1, 3}
    print(s3.issubset(s1))


.. fillintheblank:: funct_set_diff_fitb
    :practice: T

    What character is used to indicate the difference between two sets in the code above?

    - :\-: Use a dash to indicate the difference between two sets.
      :.*: Which gives the same output as the difference method?

.. activecode:: func_set_super_exor_ac
    :caption: Set methods

    Run this code to see what it prints.
    ~~~~
    # define two sets
    s1 = {1, 2, 3}
    s2 = {3, 4, 5}
    s3 = {1, 3}

    print(s1.issuperset(s3))
    print(s1 >= s3)

    print(s1.symmetric_difference(s2))
    print(s1 ^ s2)

.. fillintheblank:: funct_exor_fitb
    :practice: T

    What character is used to find the symmetric difference (exlusive or) between two sets in the code above?

    - :\^: Use a ^ to indicate the symmetric difference between two sets (exclusive or)
      :.*: Which gives the same output as the symmetric_difference method?

.. dragndrop:: funct_set_methods_dnd
    :practice: T
    :feedback: Read this page and try again.
    :match_1: &||| intersection
    :match_2: <=||| issubset
    :match_3: >=||| issuperset
    :match_4: -||| difference
    :match_5: ^||| symmetric_difference
 
    Drag each symbol to the method it is equivalent to.


Creating Sets
================

You can innitialize a set with a string, list, or tuple. The set will only contain the unique items.

.. activecode:: func_set_create_ac
    :caption: Creating sets

    Run this code to see what it prints.
    ~~~~
    # create a set from a string
    s1 = set("hello")
    print(s1)

    # create a set from a list
    s2 = set([1, 2, 3, 2, 5])
    print(s2)

    # create a set from a tuple
    s3 = set((6, 6, 9))
    print(s3)

Sorting Sets
===============
.. activecode:: func_set_sort_ac
    :caption: Sorting a set and converting a set to  a list

    Run this code to see what it prints.
    ~~~~
    # initialize a set
    s1 = {3, 2, 1}
    print(s1)
    l1 = list(s1)
    print(l1)
    print(sorted(s1))

    # initalize another set
    s2 = {"way", "back", "home"}
    print(s2)
    print(sorted(s2))
    print(s2)

.. Note::

   The function sorted(set) will return a new sorted list in ascending order. 

.. parsonsprob:: func_set_unique_characters_pp
   :numbered: left
   :adaptive:
   :practice: T

   Drag the blocks from the left and put them in the correct order on the right to define a function ``total_even`` that returns the total of the even numbers in the passed list.
   -----
   def unique_characters(strings):
   =====
       # Init an empty set 
       unique_chars = set()
   =====
       # Loop through the strings
       for string in strings:
   =====
           # Add the chars in string 
           unique_chars.update(string)
   =====
           # Add the chars in string 
           unique_chars.add(string) #paired
   =====
       # Convert to a sorted list
       sorted_chars = sorted(unique_chars) 
   =====
       # Convert to a sorted list
       sorted_chars = sort(unique_chars) #paired
   =====
       # return the sorted list 
       return sorted_chars
 

Dictionaries
============================

A dictionary stores a value for a key.

.. fillintheblank:: funct_dict_num_t

    What is the first thing the code below prints?

    - :2: It prints the number of t's in the string.
      :3: A 'T' is different from a 't'.
      :.*: Try again!

.. activecode:: func_dict_example
    :caption: Example with a dictionary

    Run this code to see what it prints.
    ~~~~
    # function definition
    def count_chars(str):
        letter_dict = dict()
        for char in str:
            if char in letter_dict:
                letter_dict[char] = letter_dict[char] + 1
            else:
                letter_dict[char] = 1
        return letter_dict

    d1 = count_chars("This is a test")
    print(d1['t'])
    d1 = count_chars("Run, run as fast as you can")
    print(d1['a'])
    print(d1)
    print(type(d1))

.. shortanswer:: func_dict_key_error_sa

   Look at the Python code below.  What do you think will happen when you run the following code?


.. activecode:: func_dict_with_key_error
    :caption: Example with a dictionary

    Run this code to see what it prints.
    ~~~~
    d = {}
    d['north'] = "Michigan"
    d['south'] = "Kentucky"
    print(d['east'])

There is another way to update the value for a key that works even if the key isn't in the dictionary already.

.. activecode:: func_dict_example_v2
    :caption: Example with a dictionary

    Run this code to see what it prints.
    ~~~~
    # function definition
    def count_chars(str):
        letter_dict = dict()
        for char in str:

            # use .get to stop key errors but if not there
            # use 0 and then add 1 to the returned value
            letter_dict[char] = letter_dict.get(char,0) + 1

        return letter_dict

    d1 = count_chars("This is a test")
    print(d1['t'])
    d1 = count_chars("Run, run as fast as you can")
    print(d1['a'])
    print(d1)

.. note::

   The better way to increment a count at a key is to use
   ``dict[key] = dict.get(key,0) + 1``.  This will avoid a key error if the key isn't in the dictionary and the code is shorter.

.. dragndrop:: funct_set_dict_dnd
    :practice: T
    :feedback: Read this page and try again.
    :match_1: ["a", "b"]||| List
    :match_2: ("a", "b")|||Tuple
    :match_3: "ab"|||String
    :match_4: {1, 2, 3}||| Set
    :match_5: {"a": 5, "b": 2}|||Dictionary

    Drag each object to its type.

.. mchoice:: funct_set_dict_which_are_immutable_mc
    :practice: T

    Which of the following types are immutable (don't change)?

    -   Strings

        +   Yes, Strings are immutable.

    -   Lists

        -   No, Lists can change.

    -   Tuples

        +   Yes, Tuples are immutable.

    -   Sets

        -   No, sets can change.

    -   Dictionaries

        -   No, Dictionaries can change.

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: func_tuplesanddict_groupsub
   :limit: 3
