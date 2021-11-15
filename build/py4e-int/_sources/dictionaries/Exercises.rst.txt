Multiple Choice Questions
---------------------------

.. mchoice:: Exercises_question9_1
    :practice: T
    :answer_a: fruits['grapes']
    :answer_b: fruits['grapes'] = 15
    :answer_c: insert 'grapes' in fruits
    :answer_d: fruits[15] = 'grapes'
    :correct: b
    :feedback_a: Try again! This does not add a value.
    :feedback_b: Correct! This line adds 'grapes' as a key with a value of 15.
    :feedback_c: Try again! This is not correct Python.
    :feedback_d: Try again! This sets the key to 15 and the value to 'grapes'.

    Which line of code correctly adds an item to the ``fruits`` dictionary with a key of 'grapes' and a value of 15?

    .. code-block:: python

        fruits = {'apples': 1, 'bananas': 4, 'pears': 17, 'oranges': 14}

.. mchoice:: Exercises_question9_2
    :practice: T
    :answer_a: ['Janice', 'John']
    :answer_b: ['Janice', 'Emily', 'Eleanor']
    :answer_c: ['John']
    :answer_d: ['Janice', 'Emily', 'John', 'Eleanor']
    :correct: c
    :feedback_a: Try again! This would be true if it was greater than or equal 5.
    :feedback_b: Try again! This only adds items with a value greater than 5.
    :feedback_c: Correct! John is the only key that has a value greater than 5.
    :feedback_d: Try again! This only adds items with a value greater than 5.

    What does the following code print?

    .. code-block:: python

        names = {'Janice': 5, 'Emily': 3, 'John': 7, 'Eleanor': 2}
        list_o_names = []
        for name in names:
            if names[name] > 5:
                list_o_names.append(name)
        print(list_o_names)

.. mchoice:: Exercises_question9_3
    :practice: T
    :answer_a: ['Emily', 'John', 'Erik']
    :answer_b: ['Janice', 'Emily', 'John']
    :answer_c: ['Janice', 'John', 'Erik']
    :answer_d: ['Janice', 'Emily', 'John', 'Eleanor']
    :correct: a
    :feedback_a: Correct! Erik is initialized to 22, and Emily is updated to 13. Therefore, these two entries are added to the list found in the previous question.
    :feedback_b: Try again! Erik is set to 22, so it should be added.
    :feedback_c: Try again! Emily is set to 13, so it should be added.
    :feedback_d: Try again! This will not add Eleanor since the value is 2, and this will not add Janice since the value is 5.

    What does the following code print?

    .. code-block:: python

        names = {'Janice': 5, 'Emily': 3, 'John': 7, 'Eleanor': 2}
        list_o_names = []

        names['Emily'] += 10
        names['Erik'] = 22

        for name in names:
            if names[name] > 5:
                list_o_names.append(name)
        print(list_o_names)

.. mchoice:: Exercises_question9_4
    :practice: T
    :answer_a: 5
    :answer_b: 10
    :answer_c: 9
    :correct: c
    :feedback_a: Try again!
    :feedback_b: Try again!
    :feedback_c: Correct! There are 9 letters in phrase that appear more than two times.

    What is the value of ``counter`` after the code is run?

    .. code-block:: python

        phrase = "Cheese in Philadelphia is extraordinary according to Erik"

        counter = 0
        letters = {}
        for word in phrase.split():
            for letter in word:
                letter = letter.lower()
                if letter not in letters.keys():
                    letters[letter] = 0
                letters[letter] += 1
        for key in letters.keys():
            if letters[key] > 2:
                counter += 1

.. mchoice:: Exercises_question9_5
    :practice: T
    :answer_a: fruits.get(apples)
    :answer_b: fruits.get('apples', 0)
    :answer_c: fruits.get('apple')
    :answer_d: fruits.get(apples, 0)
    :correct: b
    :feedback_a: Try again! The key must be a string in this case.
    :feedback_b: Correct! This correctly grabs the key as a string and also includes a default value in case the key is not present in the dictionary.
    :feedback_c: Try again! This will return None if the key does not exist.
    :feedback_d: Try again! The key must be a string in this case.

    Which line of code correctly gets the value of the key 'apples' if it exists and returns 0 if it does not?

    .. code-block:: python

        fruits = {'bananas': 7, 'apples': 4, 'grapes': 19, 'pears': 4}

.. mchoice:: Exercises_question9_6
    :practice: T
    :answer_a: 10
    :answer_b: 4
    :answer_c: 6
    :answer_d: 2
    :correct: c
    :feedback_a: Try again!
    :feedback_b: Try again!
    :feedback_c: Correct! The get() method grabs the value 2 and then 4 gets added to it to get 6.
    :feedback_d: Try again! This would be true if it just printed the value for the key 'o'. However, 4 is added to it.

    What value is printed when this code runs?

    .. code-block:: python

        word = 'brontosaurus'
        diction = {}
        for letter in word:
            if letter not in diction.keys():
                diction[letter] = 0
            diction[letter] += 1
        print(diction.get('o', 0) + 4)


.. mchoice:: Exercises_question9_7_v2
    :practice: T
    :answer_a: jan, chuck, annie
    :answer_b: chuck, annie, jan
    :answer_c: annie, chuck, jan
    :answer_d: jan, annie, chuck
    :correct: c
    :feedback_a: The order is their order in the dictionary.
    :feedback_b: The order is their order in the dictionary.
    :feedback_c: Correct! The order is their order in the dictionary.
    :feedback_d: The order is their order in the dictionary.

    What order do the keys print in after the following code is run?

    .. code-block:: python

        counts = {'annie' : 42, 'chuck' : 1, 'jan' : 100}
        for key in counts:
            print(key)

.. mchoice:: Exercises_question9_8_v2
    :practice: T
    :answer_a: jan, chuck, annie
    :answer_b: chuck, annie, jan
    :answer_c: annie, chuck, jan
    :answer_d: jan, annie, chuck
    :correct: a
    :feedback_a: Correct! This will sort by the keys in descending order.
    :feedback_b: This will sort by the keys in descending order.
    :feedback_c: This will sort by the keys in descending order.
    :feedback_d: This will sort by the keys in descending order.

    What order do the keys print in after the following code is run?

    .. code-block:: python

        counts = {'annie' : 42, 'chuck' : 1, 'jan' : 100}
        items = counts.items()
        out = sorted(items, reverse = True)
        for item in out:
            print(item[0])

.. mchoice:: Exercises_question9_9_v2
    :practice: T
    :answer_a: jan, chuck, annie
    :answer_b: chuck, annie, jan
    :answer_c: annie, chuck, jan
    :answer_d: jan, annie, chuck
    :correct: b
    :feedback_a: This will sort by the values in ascending order.
    :feedback_b: Correct! This will sort by the values in ascending order.
    :feedback_c: This will sort by the values in ascending order.
    :feedback_d: This will sort by the values in ascending order.

    What order do the keys print in after the following code is run?

    .. code-block:: python

        counts = {'annie' : 42, 'chuck' : 1, 'jan' : 100}
        items = counts.items()
        out = sorted(items, key = lambda t: t[1])
        for item in out:
            print(item[0])

.. mchoice:: Exercises_question9_10_v2
    :practice: T
    :answer_a: jan, chuck, annie
    :answer_b: chuck, annie, jan
    :answer_c: annie, chuck, jan
    :answer_d: jan, annie, chuck
    :correct: c
    :feedback_a: This will print the keys in their current order since sorted returns a new list.
    :feedback_b: This will print the keys in their current order since sorted returns a new list.
    :feedback_c: Correct! This will print the keys in their current order since sorted returns a new list.
    :feedback_d: This will print the keys in their current order since sorted returns a new list.

    What order do the keys print in after the following code is run?

    .. code-block:: python

        counts = {'annie' : 42, 'chuck' : 1, 'jan' : 100}
        items = counts.items()
        sorted(items, key = lambda t: t[1])
        for item in items:
            print(item[0])
