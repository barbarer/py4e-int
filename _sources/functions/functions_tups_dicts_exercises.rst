Functions with Tuples and Dictionaries Multiple Choice Questions
-----------------------------------------------------------------

.. mchoice:: functions_tups_dicts_mcqs_q1
    :practice: T
    :answer_a: keys() and get()
    :answer_b: values()
    :answer_c: count() and append()
    :answer_d: items()
    :answer_e: index()
    :correct: a, b, d
    :feedback_a: Correct! Both keys() and get() are dictionary methods.
    :feedback_b: Correct, values() is a dictionary method.
    :feedback_c: Try again! These are list methods.
    :feedback_d: Correct, items() is a dictionary method.
    :feedback_e: Try again!

    Which of following are python dictionary methods?


.. mchoice:: functions_tups_dicts_mcqs_q2
    :practice: T
    :answer_a: tup.append(5), tup.pop(1), return sorted(tup)
    :answer_b: tup.append(5), tup.pop(2), return sorted(tup)
    :answer_c: tup.append(5), tup.pop(1), tup.reverse(), return tup
    :answer_d: tup.append(5), tup.pop(1), return tup.reverse()
    :answer_e: (90, 103, 54, 45) can't be changed to (5, 45, 54, 90).
    :correct: e
    :feedback_a: Try again! Tuples are immutable.
    :feedback_b: Try again! Tuples are immutable.
    :feedback_c: Try again! Tuples are immutable.
    :feedback_d: Try again! Tuples are immutable.
    :feedback_e: Correct! Tuples are immutable, so (90, 103, 54, 45) can't be changed to (5, 45, 54, 90).

    Which of the following would change ``tup_transformation(90, 103, 54, 45)`` into ``tup_transformation(5, 45, 54, 90)``? (Note: Commas represent line breaks.)

    .. code-block:: python

        def tup_transformation(tup):
            # line(s)


.. mchoice:: functions_tups_dicts_mcqs_q3
    :practice: T
    :answer_a: (0, 7, 16, 27, 100, 84, 99, 78, 200, -7)
    :answer_b: (27, 0, 100, 7, 16, 84, 99, 78, 200, -7)
    :answer_c: ((0, 84), (7, 99), (16, 78), (27, 200), (100, -7))
    :answer_d: ((27, 84), (0, 99), (100, 78), (7, 200), (16, -7))
    :answer_e: The function call tup_and_list_transform((16, 7, 100, 0, 27), (84, 99, 78, 200, -7)) would cause an error because tuples are immutable.
    :correct: d
    :feedback_a: Try again! Be careful not to sort in place of reverse. Also, by using zip, each tuple will have an element from list_tup1 and an element from list_tup2 in order.
    :feedback_b: Try again! By using zip, each tuple will have an element from list_tup1 and an element from list_tup2 in order.
    :feedback_c: Try again! Be careful not to sort in place of reverse.
    :feedback_d: Correct! This converts the tuples to lists and reverses list_tup1 and zips list_tup1 and list_tup2 together.
    :feedback_e: Try again! While it's true that tuples are immutable, tuples can be changed into data types that are mutable in order to be changed (e.g., lists).

    What would the output when ``tup_and_list_transform((16, 7, 100, 0, 27),(84, 99, 78, 200, -7))`` is called?

    .. code-block:: python

        def tup_and_list_transform(tup1, tup2):
            list_tup1 = list(tup1)
            list_tup2 = list(tup2)
            list_tup1.reverse()
            return tuple(zip(list_tup1, list_tup2))


.. mchoice:: functions_tups_dicts_mcqs_q4
    :practice: T
    :answer_a: return dictionary[1]
    :answer_b: return dictionary['one']
    :answer_c: return dictionary.get('one')
    :answer_d: return dictionary.get(8)
    :answer_e: return dictionary.get('ten', 5)
    :correct: a
    :feedback_a: Correct! This will cause a key error since 1 is not a key.
    :feedback_b: This will return 8.
    :feedback_c: This will return 8.
    :feedback_d: This will return None which is the default value to return from get if the key isn't found.
    :feedback_e: This will return 5 since 'ten' is not a key.

    Which of the following return statements will *not* return a value for the function call ``transform_dict({'one': 8, 'two': 10, 'three': 0})``?

    .. code-block:: python

        def transform_dict(dictionary):
            # return statement goes here


.. mchoice:: functions_tups_dicts_mcqs_q5
    :practice: T
    :answer_a: dictionary[tup[0]] = dictionary[tup[1]]
    :answer_b: dictionary(tup[0]) = tup[1]
    :answer_c: dictionary[tup[0]] = tup[1]
    :answer_d: dictionary[tup[1]] = tup[0]
    :answer_e: dictionary[tup[0]] = dictionary.get(tup[1])
    :correct: c
    :feedback_a: Try again! There is no tup[1] value in the dictionary.
    :feedback_b: Try again! Setting up the key for a dictionary requires square brackets.
    :feedback_c: Correct! This will set the key to the first item in the tuple and the value to the second item.
    :feedback_d: Try again! This would set the key to the 2nd item and the value to the first.
    :feedback_e: Try again! There is no tup[1] key in the dictionary, and the default value for the get() method is None.

    Which of the following code snippets would cause ``tup_of_tuples_to_dict((1, 'one'), (5, 'five'))`` to return ``{1: 'one', 5: 'five'}``?

    .. code-block:: python

        def tup_of_tuples_to_dict(tup_of_tuples):
            dictionary = {}
            for tup in tup_of_tuples:
                # insert code snippet here
            return dictionary


.. mchoice:: functions_tups_dicts_mcqs_q6
    :practice: T
    :answer_a: {3:4, 5:8, 4:9}
    :answer_b: {3:4, 5:8, 4:4}
    :answer_c: {3:4, 5:4, 4:3}
    :answer_d: There will be an error
    :correct: b
    :feedback_a: This would be true if the key 3 wasn't in the dictionary, but it is.
    :feedback_b: It sets the value for key 4 to the value of key 3.
    :feedback_c: This would be true if get set the value to the first item rather than the second.  The first item is the key to look for.
    :feedback_d: This code will run without any errors.

    What are the contents of ``d`` after this code executes?

    .. code-block:: python

        d = {3:4}
        d[5] = d.get(4, 8)
        d[4] = d.get(3, 9)
