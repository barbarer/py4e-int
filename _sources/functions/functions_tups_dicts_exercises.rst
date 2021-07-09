Functions with Tuples and Dictionaries Multiple Choice Questions
-----------------------------------------------------------------

.. mchoice:: functions_tups_dicts_mcqs_q1
    :answer_a: keys() and get()
    :answer_b: values()
    :answer_c: count() and append()
    :answer_d: items()
    :answer_e: index()
    :correct: a, b, d
    :feedback_a: Correct!
    :feedback_b: Correct!
    :feedback_c: Try again! 
    :feedback_d: Correct! 
    :feedback_e: Try again!

    Which of following are python dictionary methods?


.. mchoice:: functions_tups_dicts_mcqs_q2
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

    Which of the following would change ``tup`` from (90, 103, 54, 45) to (5, 45, 54, 90)? (Note: Commas represent line breaks.)

    .. code-block:: python

        def tup_transformation(tup):
            # line(s)


.. mchoice:: functions_tups_dicts_mcqs_q3
    :answer_a: (0, 7, 16, 27, 100, 84, 99, 78, 200, -7)
    :answer_b: (27, 0, 100, 7, 16, 84, 99, 78, 200, -7)
    :answer_c: ((0, 84), (7, 99), (16, 78), (27, 200), (100, -7))
    :answer_d: ((27, 84), (0, 99), (100, 78), (7, 200), (16, -7))
    :answer_e: The function call tup_and_list_transformations((16, 7, 100, 0, 27), (84, 99, 78, 200, -7)) would cause an error because tuples are immutable.
    :correct: d
    :feedback_a: Try again! Be careful not to sort in place of reverse. Also, by using zip, each tuple will have an element from list_tup1 and an element from list_tup2 in order.
    :feedback_b: Try again! By using zip, each tuple will have an element from list_tup1 and an element from list_tup2 in order.
    :feedback_c: Try again! Be careful not to sort in place of reverse.
    :feedback_d: Correct! 
    :feedback_e: Try again! While it's true that tuples are immutable, tuples can be changed into data types that are mutable in order to be changed (e.g., lists). 

    What would the output be if ``tup1`` = (16, 7, 100, 0, 27) and ``tup2`` = (84, 99, 78, 200, -7)?

    .. code-block:: python

        def tup_and_list_transformations(tup1, tup2):
            list_tup1 = list(tup1)
            list_tup2 = list(tup2)
            list_tup1.reverse()
            return tuple(zip(list_tup1, list_tup2))


.. mchoice:: functions_tups_dicts_mcqs_q4
    :answer_a: return dictionary[1]
    :answer_b: return dictionary['one']
    :answer_c: return dictionary.get('one')
    :answer_d: return dictionary.get(8)
    :answer_e: return dictionary.get('ten', 5)
    :correct: b, c, e
    :feedback_a: Try again! Dictionaries are indexed by keys.
    :feedback_b: Correct! Dictionaries are indexed by keys.
    :feedback_c: Correct! The get() method gets the value for the key.
    :feedback_d: Try again! The default value for the get() method is None. Also, the get() method takes in a key and not a value.
    :feedback_e: Correct! If the key is not present in a dictionary, the get() method can be used to set a default value for that key.

    Which of the following return statements do not return a value for the function call ``transform_dict({'one': 8, 'two': 10, 'three': 0})``?

    .. code-block:: python

        def transform_dict(dictionary):
            # return statement goes here


.. mchoice:: functions_tups_dicts_mcqs_q5
    :answer_a: dictionary[tup[0]] = dictionary[tup[1]]
    :answer_b: dictionary(tup[0]) = tup[1]
    :answer_c: dictionary[tup[0]] = tup[1]
    :answer_d: dictionary[tup[1]] = tup[2]
    :answer_e: dictionary[tup[0]] = dictionary.get(tup[1])
    :correct: c
    :feedback_a: Try again! There is no tup[1] value in the dictionary. 
    :feedback_b: Try again! Setting up the key for a dictionary requires square brackets.
    :feedback_c: Correct!
    :feedback_d: Try again! Tuples start indexing from 0.
    :feedback_e: Try again! There is no tup[1] key in the dictionary, and the default value for the get() method is None.

    Which of the following code snippets would finish the function and change ``tup_of_tuples`` = ((1, 'one'), (5, 'five')) to ``dictionary`` = {1: 'one', 5: 'five'}?

    .. code-block:: python

        def tup_of_tuples_to_dict(tup_of_tuples):
            dictionary = {}
            for tup in tup_of_tuples: 
                # insert code snippet here
            return dictionary