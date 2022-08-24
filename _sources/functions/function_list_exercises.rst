Functions with Lists Multiple Choice Questions
-----------------------------------------------

.. mchoice:: funct_lists_1_v2
    :practice: T
    :answer_a: [-2, 0, 1, 4.2, 5.2]
    :answer_b: [-2, 0, 1, 5.2, 4.2]
    :answer_c: [4.2, -2, 0, 1, 5.2]
    :answer_d: [0, -2, 5.2, 1, 4.2]
    :answer_e: [5.2, 1, 0, -2, 4.2]
    :correct: b
    :feedback_a: Incorrect. This function will sort the list in order from lowest to highest, and then add the sum to the end of the list.
    :feedback_b: Correct! It sorts the list in ascending order and then adds the sum at the end.
    :feedback_c: Incorrect. This function will sort the list in order from lowest to highest, and then add the sum to the end of the list.
    :feedback_d: Incorrect. This function will sort the list in order from lowest to highest, and then add the sum to the end of the list.
    :feedback_e: Incorrect. This function will sort the list in order from lowest to highest, and then add the sum to the end of the list.

    What would ``list_transformation([0, -2, 5.2, 1])`` return?

    .. code-block:: python

        def list_transformation(lst):
            lst.sort()
            sum_of_lst = sum(lst)
            lst.append(sum_of_lst)
            return lst

.. mchoice:: funct_lists_2
    :practice: T
    :answer_a: 0
    :answer_b: 2.5
    :answer_c: 4
    :answer_d: -5
    :answer_e: -4
    :correct: a, e
    :feedback_a: Correct! This will remove the number at index 0.
    :feedback_b: Incorrect! The built-in function, pop, removes the value from a list, lst, at a specified index, num.
    :feedback_c: Incorrect! The built-in function, pop, removes the value from a list, lst, at a specified index, num.
    :feedback_d: Incorrect! The built-in function, pop, removes the value from a list, lst, at a specified index, num.
    :feedback_e: Correct! This will remove the number at index 0.

    Which values of ``num`` would not return an error if ``lst`` were ``[0, 4, -4, 2.5]``?

    .. code-block:: python

        def popping_removal(lst, num):
            lst.pop(num)
            return lst

.. mchoice:: funct_lists_3
    :practice: T
    :answer_a: [0, 200, 5.6, -2, 4, 5, [-2, 4, 5], -2, 4, 5]
    :answer_b: [0, 200, 5.6, -2, 4, 5, 5.6, -2, 4, 5.6, -2, 4]
    :answer_c: [0, 200, 5.6, -2, 4, 5, [5.6, -2, 4], 5.6, -2, 4]
    :answer_d: [0, 200, 5.6, -2, 4, 5, 5.6, -2, 4, [5.6, -2, 4]]
    :answer_e: [0, 200, 5.6, -2, 4, 5, -2, 4, 5, [-2, 4, 5]]
    :correct: c
    :feedback_a: Incorrect! The built-in function append adds a list to the end of a list. The built-in function extend adds the values of a list to the end of a list.
    :feedback_b: Incorrect! The built-in function append adds a list to the end of a list. The built-in function extend adds the values of a list to the end of a list.
    :feedback_c: Correct! If the item you are appending is a list it is added as a list, while extend adds the values in the list.
    :feedback_d: Incorrect! The built-in function append adds a list to the end of a list. The built-in function extend adds the values of a list to the end of a list.
    :feedback_e: Incorrect! The built-in function append adds a list to the end of a list. The built-in function extend adds the values of a list to the end of a list.

    What would the function ``extend_and_append`` output if ``lst`` were ``[0, 200, 5.6, -2, 4, 5]``?

    .. code-block:: python

        def extend_and_append(lst):
            new_list = lst[-4:-1]
            lst.append(new_list)
            lst.extend(new_list)
            return lst

.. mchoice:: funct_lists_4
    :practice: T
    :answer_a: elif len(lst1) = len(lst2):
    :answer_b: elif len(lst1) == len(lst2):
    :answer_c: elif not(len(lst1) > len(lst2)) and not(len(lst1) < len(lst2))
    :answer_d: elif not(len(lst1) > len(lst2)) or not(len(lst1) < len(lst2))
    :answer_e: elif not(len(lst1) is not len(lst2)):
    :correct: b, c, e
    :feedback_a: Incorrect! A single equal sign is the assignment operator.
    :feedback_b: Correct! This checks if they are the same length.
    :feedback_c: Correct! This checks that the length of lst1 is not greater or less than lst2.
    :feedback_d: Incorrect! When an or operator is used with two statements, only one of the statements has to be true in order for the entire statement to pass as true.
    :feedback_e: Correct! This checks if it is not true that the len of lst1 is not the same as the length of lst2.

    Which of the following would correctly replace the else statement?

    .. code-block:: python

        def comparing_lengths(lst1, lst2):
            if len(lst1) > len(lst2):
                return "The length of lst1 is greater than the length of lst1"
            elif len(lst1) < len(lst2):
                return "The length of lst2 is greater than the length of lst1"
            else:
                return "The length of lst1 and the length of lst2 are equal"


.. mchoice:: funct_lists_5
    :practice: T
    :answer_a: lst_reverse = lst.reverse(), return lst
    :answer_b: lst.reverse(), return lst
    :answer_c: lst_reverse = lst.reverse(), return lst_reverse
    :answer_d: return lst.reverse()
    :answer_e: lst_reverse = lst_reverse.reverse(), return lst
    :correct: a, b
    :feedback_a: Correct! Although it properly returns a reversed list, it is unnecessary to assign the reverse method to a variable. Reverse returns None.
    :feedback_b: Correct! This will reverse the list and then return it.  Reverse returns None.
    :feedback_c: Incorrect! The built-in python function, reverse, does not need to be assigned to a new variable.
    :feedback_d: Incorrect! The built-in python function, reverse, has to be used on the list before the list can be returned.
    :feedback_e: Incorrect! This code does not modify lst, the passed in parameter.

    Which of the following line(s) of code would properly return a reversed list? (Note: Commas represent line breaks)

    .. code-block:: python

        def reverse_list(lst):
            # line(s)
