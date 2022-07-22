Knowledge Review
-----------------------------------------------------

1. Tuples
============================

A tuple is like a list in that holds items in order and those items are separated by commas.  They can be enclosed in ``()``, but don't have to be.

2. Tuples are Immutable
=======================

Unlike lists, tuples are immutable (can not change). This makes them more efficient than lists which can change.

3. Dictionaries
============================

A dictionary stores a value for a key.

.. fillintheblank:: funct_dict_num_t_fl
    :practice: T

    What is the first thing the code below prints?

    - :2: It prints the number of t's in the string.
      :3: A 'T' is different from a 't'.
      :.*: Try again!

.. activecode:: func_dict_example_fl
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

There is another way to update the value for a key that works even if the key isn't in the dictionary already.

.. activecode:: func_dict_example_v2_fl
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

What to do next
================

.. raw:: html

    <h4>Click to see an introduction about our system 👉 <b><a href="system-fl-ps.html">System Introduction</a></b></h4>


