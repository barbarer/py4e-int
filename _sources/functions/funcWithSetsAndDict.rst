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

Sets
============================

A set is like a list in that holds items, but it does not hold items in an particular order.  
You can add items to a set and remove items from a set, just like you can do with a list. 

.. activecode:: func_set_add_rem_ac
    :caption: Adding and removing items from a set

    Run this code to see what it prints.
    ~~~~
    # function definition
    s1 = {1, 2, 3}
    print(s1)
    s1.add(4)
    print(s1)
    s1.remove(2)
    print(s1)

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
    # function definition
    s1 = set()
    s1.add(1)
    print(s1)
    s1.add("hi")
    print(s1)
    s1.add((1, 2))
    print(s1)
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

    What values will be printed last from the code below?

    -   Nothing will print.  You will get an error since you are trying to add a duplicate item to a set.

        -   No, it will actually ignore the duplicate item.

    -   1, 2, 3 

        +  Yes, it ignores the duplicate item.

    -   1, 2, 3, 3 

        -   No, sets do not allow duplicate items.


.. activecode:: func_set_add_dup_ac
    :caption: Working with sets

    Run this code to see what it prints.
    ~~~~
    # function definition
    s1 = {1, 2, 3}
    print(s1)
    s1.add(1)
    print(s1)

.. Note::

   Sets only store unique items.  If you try to add a duplicate item to a set it will be ignored.  

Set Methods
==============
You can use the following methods with sets.

* union(other_set) - returns a new set with the all the items in each set
* intersection(other_set) - returns a new set with just the items in both sets
* difference(other_set) - returns a new set with the items in the first set that are not in the second set
* issubset(other_set) - returns True if the set is a subset of the other set
* isdisjoint(other_set) - returns True if the two sets have no items in common


.. activecode:: func_set_union_int_ac
    :caption: Set methods

    Run this code to see what it prints.
    ~~~~
    # function definition
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
    # function definition
    s1 = {1, 2, 3}
    s2 = {3, 4, 5}
    print(s1.difference(s2))
    print(s1 - s2)
    print(s1.issubset(s2))
    print(s1 <= s2)

.. fillintheblank:: funct_set_diff_fitb
    :practice: T

    What character is used to indicate the difference between two sets in the code above?
    - :\-: Use a dash to indicate the difference between two sets.
      :.*: Which gives the same output as the difference method?

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

    Drag each item to its type.

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
