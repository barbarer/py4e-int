Group Work: Functions with Tuples and Dictionaries
------------------------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Learn the differences and similarities between strings, lists, tuples, and dictionaries.
* Predict the output of functions with tuples and dictionaries.
* Use .get to prevent key errors in dictionaries.

*Process Objectives:*

* Predict the output of functions with tuples and dictionaries.

Tuples
============================

A tuple is like a list in that holds items in order and those items are separated by commas.  They can be enclosed in ``()``, but don't have to be.

.. fillintheblank:: funct_tup_test_first

    What is the first thing that will be printed when the code below runs?

    - :1: It will print the item at index 0 the first passed tuple.
      :.*: What is the item at index 0 in the first passed tuples?

.. fillintheblank:: funct_tup_test_last

    What is the last thing that will be printed when the code below runs?

    - :4: It will print the length (number of items) in the second passed tuple.
      :.*: How many items are in the second passed tuple?

.. activecode:: func_tup_test_ac
    :caption: Working with tuples

    Run this code to see what it prints.
    ~~~~
    # function definition
    def tuple_test(tup):
        print(tup[0])
        print(type(tup))
        print(tup[-1])
        print(tup[1:])
        print(len(tup))

    # function definition
    def main():
        tuple_test((1, 2, 3))
        tuple_test(('hi', 'bye', -20, 'run'))

    # function call
    main()

.. fillintheblank:: funct_tuple_test_char
    :practice: T

    What characters are used to indicate the start and end of a tuple in the code above?

    - :\(\)|\)\(: Parenthesis are often used to start and end a tuple, but they are not required.
      :.*: Look at the parameter to the function call in the main function.

.. fillintheblank:: funct_tuple_first_index
    :practice: T

    What index is used to get the first item in a tuple?

    - :0: The first item in a list is at index 0.
      :.*: Try again!

.. fillintheblank:: funct_tuple_last_index
    :practice: T

    What negative index is used to get the last item in a tuple?

    - :-1: The last item in a list is at index -1, which is the length of the list - 1.
      :.*: Try again!

Tuples are Immutable
=======================

Unlike lists, tuples are immutable (can not change). This makes them more efficient than lists which can change.

.. shortanswer:: func_tuple_change_sa

   Look at the Python code below.  What do you think will happen when you run the following code?

.. activecode:: func_tuple_change_ac
    :caption: Attempt to change a tuple

    Run this code to see what it prints.
    ~~~~
    # function definition
    def change_tuple(tup):
        print(tup)
        tup[0] = 5

    # function definition
    def main():
        t1 = (3, 6)
        change_tuple(t1)
        print(t1)

    # function call
    main()

.. Note::

   Tuples are immutable (not changeable), so you will get an error if you try to change them.

Some functions that work on lists return an **iterator** (an object that you can loop through the values of) which you can convert to a list of tuples using the ``list`` function.
The ``range`` function also returns an iterator.

.. fillintheblank:: funct_tuple_zip_first_print_fitb

    What is the first thing the code below prints?

    - :"?No"?: It prints the item at index 1 in the first tuple.
      :.*: Try again!

.. activecode:: func_tuple_list_zip_ac
    :caption: Example of using zip to combine lists

    Run this code to see what it prints.
    ~~~~
    l1 = ["Will it be sunny?", "Will I be happy?"]
    l2 = ["No", "Yes"]
    result = zip(l1, l2)
    l3 = list(result)
    print(l3[0][1])
    print(l3)

.. note::

   The ``zip`` function takes two lists and returns an ``iterator``. You can convert this iterator to a list of tuples using the ``list`` function.  Each tuple has an element from list1 and an element from list2 in order.


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

.. dragndrop:: funct_dict_symbol_dnd
    :practice: T
    :feedback: Read this page and try again.
    :match_1: ["a", "b"]||| List
    :match_2: ("a", "b")|||Tuple
    :match_3: "ab"|||String
    :match_4: {"a": 5, "b": 2}|||Dictionary

    Drag the item to its type.

.. mchoice:: funct_which_are_immutable_mc
    :practice: T

    Which of the following types are immutable (don't change)?

    -   Strings

        +   Yes, Strings are immutable.

    -   Lists

        -   No, Lists can change.

    -   Tuples

        +   Yes, Tuples are immutable.

    -   Dictionaries

        -   No, Dictionaries can change.

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: func_tuplesanddict_groupsub
   :limit: 3
