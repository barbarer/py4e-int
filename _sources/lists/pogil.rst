Group Work: Lists
--------------------------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

Many interesting problems involve manipulating sequences of data.  This
activity should help you learn about two types of sequences in Python:
lists and strings. Both lists and strings hold items in order and you can use an index
to get the value at a location.  The index of the first item in each is 0.

**Learning Objectives**

After completing this activity, Students should be able to:

* Define a list
* Identify elements of a list
* Explain the purpose of positive and negative indexes in a list
* Explain how to access individual elements of a list
* Define the following list functions: append(), insert(), remove(), len(), index(), count()
* Explain how to replace an item

**Process Skill Goals**

During the activity, students should make progress toward:

* Writing code that prints a list
* Writing code that edits a list - add, remove, and insert items

.. activecode:: list_methods_digit
    :caption: list methods examples

    Edit the code below to answer the following questions.
    ~~~~
    digits = [1, 2, 0, 5, 4, 3, 6, 9, 8, 7]
    media = ["facebook", "twitter", "instagram", "snapchat"]
    studentData = [['Ethan', 13], ['Ashley', 14], ['Jalen', 12], ['Avery', 13]]
    print(len(digits))

.. mchoice:: listOp_MC_list
    :answer_a: digits
    :answer_b: media
    :answer_c: studentData
    :answer_d: both b and c
    :correct: a
    :feedback_a: Correct! Digits has the most items in its lists.
    :feedback_b: Try Again! Use len() to check the length of each list
    :feedback_c: Try Again! Each list within a list counts as  one item. Use len() to check the length of each list.
    :feedback_d: Try Again! While b and c have the same number of items in their list, it is not the most. Use len() to check the length of each list

    Which of the lists in the code have the most number of items?

.. fillintheblank:: list_len_digit

    What is printed by line 4?

    - :10: Nice job! len(list) returns the number of items in the list
      :.*: Try again!  How many items are in digits at this point?

.. fillintheblank:: index_last_studentData

    What is the index of the last item in studentData at line 3?

    - :3: The last item is at the length of the list minus one.
      :.*: Remember that the first item is at index 0.

.. parsonsprob:: par_ex_group1

   Construct a function that replaces a value in a list with a new specified value and returns the list with the new value.
   -----
   def replaceVal(alist, val, newval):
       idx = alist.index(val)
       alist[index] = newval
       return alist


.. activecode:: listRepeat1
    :caption: Using * to repeat lists.

    Run this code to see what it prints. Feel free to edit!
    ~~~~
    areaCode = [3, 1, 2]
    print(areaCode * 3)

.. mchoice:: listOp_MC_plus312
    :answer_a: 9
    :answer_b: [3, 1, 2, 3, 1, 2, 3, 1, 2]
    :answer_c: [3, 3, 3, 1, 1, 1, 2, 2, 2]
    :answer_d: [27, 3, 6]
    :correct: b
    :feedback_a: Repetition does not multiply the lengths of the lists.  It repeats the items.
    :feedback_b: Yes, the items of the list are repeated 3 times, one after another.
    :feedback_c: Repetition does not repeat each item individually.
    :feedback_d: Repetition does not multiply the individual items.

    What is printed by the following code?

.. fillintheblank:: list_area_code

    What is the index of 3 in the list areaCode?

    - :0: Correct! 3 is at the begininng of the list.
      :.*: Try Again! Use .index() to hel find where the index of 3 is.

.. mchoice:: listOp_MC_plus773
    :answer_a: areaCode.append(7)
    :answer_b: areaCode.append([7])
    :answer_c: areaCode += 7
    :answer_d: areaCode.extend([7])
    :answer_e: areaCode.extend(7)
    :correct: a,d
    :feedback_a: Yes! You can add the item directly to the list using append
    :feedback_b: Try again! You cannot append a list even if it has one element
    :feedback_c: Try Again! You cannot concatenate a list and an integer, only two lists.
    :feedback_d: Yes! You can add a list to the end of another list using extend.
    :feedback_e: Try again!  You cannot extend a list with a number.

     Which of the following lines could you use to add 7 to the list to become [3, 1, 2, 7,]?

.. parsonsprob:: par_ex_group2

   Construct a function that returns the max value from a list. If there are no items in ``alist``return ``None``.
   -----
   def getMax(alist):
   =====
       if len(alist) == 0:
           return None
   =====
       curr = alist[0]
       for item in alist:
   =====
           if item > curr:
   =====
               curr = item
   =====
       return curr

.. activecode:: list_methods_lucky_ac
    :caption: list methods examples

    Run this code to see what it prints. Feel free to edit!
    ~~~~
    bigCities = ["Chicago", "Detroit", "Houston", "New York"]
    print(bigCities)
    for x in bigCities:
        print(x, end = " ")
    print()


.. fillintheblank:: list_print_out

    How many items are in the list ``bigCities``?

    - :4: Yes! there are four items in this list.
      :.*: Try Again! use len() to find the size of the list.

.. mchoice:: listOp_MC_idx
    :answer_a: 2
    :answer_b: 1
    :answer_c: 0
    :answer_d: 3
    :correct: b
    :feedback_a: Try Again! Remember that the index starts at 0 not at 1.
    :feedback_b: Yes, because lists start 0 based index, the solution would be index 1.
    :feedback_c: Try Again! Use index("Detroit") to find the index.
    :feedback_d: Try Again! Use index("Detroit") to find the index.

    What is the index of "Detroit" in the list ``bigCities``?

.. parsonsprob:: par_ex_group5

   Construct a function that returns the average of the values entered into the list.
   -----
   def average():
   =====
       numlist = list()
       while (True):
   =====
           inp = input('Enter a number: ')
   =====
           if inp == 'done': break
   =====
           value = float(inp)
   =====
           numlist.append(value)
   =====
       average = sum(numlist) / len(numlist)
   =====
       print('Average:', average)


.. dragndrop:: list_methods_dnd
    :practice: T
    :feedback: Read the chapter on lists and try again.
    :match_1: count|||Returns the number of times a specified value appears in the list
    :match_2: append|||Adds a value to the end of a list.
    :match_3: len|||Returns the number of items in a list.
    :match_4: remove|||Removes an item from a list.
    :match_5: type|||Returns the class name (type) of the current object.

    Drag each term to its definition

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: lists_intro_groupsub
   :limit: 3
