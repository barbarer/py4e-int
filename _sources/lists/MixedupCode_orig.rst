Mixed-up Code Questions
-----------------------

.. parsonsprob:: list_MUC_password_creator
    :practice: T
    :adaptive:
    :numbered: left

    Create a function ``password_maker(word_list)`` that takes a list of words, ``word_list`` and returns a string with the first and last character of
    each word in a list. For example, ``password_maker("show", "me", "the", "money")`` would return ``swmetemy``.
    -----
    def password_maker(word_list):
    =====
        password = ""
    =====
        for word in word_list:
    =====
            first_char = word[0]
    =====
            last_char = word[-1]
    =====
            password += first_char
    =====
            password += last_char
    =====
        return password
    =====
        return word_list #paired

.. activecode::  list_MUC_password_creator_ac
    :practice: T
    :autograde: unittest

    Write a function ``password_maker(word_list)`` that takes a a list of words, ``word_list`` and returns a string with the first and last character of each
    word in a list. For example, ``password_maker(["show", "me", "the", "money"])`` would return ``swmetemy``.

    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):

            self.assertEqual(password_maker(["show", "me", "the", "money"]), "swmetemy", 'password_maker("show", "me", "the", "money")')
            self.assertEqual(password_maker(["Bye", "Now"]), "BeNw", 'password_maker(["Bye", "Now"])')
            self.assertEqual(password_maker(["Beautiful"]), "Bl", 'password_maker(["Beautiful"])')
            self.assertEqual(password_maker(["You", "complete", "me"]), "Yuceme", 'password_maker(["You", "complete", "me"])')

    myTests().main()


.. parsonsprob:: list_MUC_rainfall_v2
    :numbered: left
    :adaptive:
    :practice: T


    Create a function ``avg_rainfall(day_list)`` that takes a list with the amount of rain for each day.
    There are some problems with the equipment, so ignore days that have a negative number for the amount of rain. Calculate the average rainfall as the sum of the non-negative values divided by the number of non-negative values. If at least one day has a non-negative rainfall return ``Average: (average)`` and otherwise return ``No rain``.  For example,  ``avg_rainfall([30,-2, 0])`` should return ``Average: 15`` and ``avg_rainfall([-3, -2])`` should return ``No rain``.
    -----
    def avg_rainfall(day_list):
    =====
        sum = 0
        count = 0
    =====
        for day in day_list:
    =====
            if day >= 0:
    =====
            if day > 0: #paired
    =====
                sum = sum + day
                count = count + 1
    =====
        if count > 0:
    =====
            avg = sum / count
    =====
            return "Average: " + str(avg)
    =====
            return "Average: " + avg #paired
    =====
        else:
    =====
            return "No rain"



.. activecode::  list_MUC_rainfall_v2_ac
    :practice: T
    :autograde: unittest

    Write a function ``avg_rainfall(day_list)`` that takes a list with the amount of rain for each day.
    There are some problems with the equipment, so ignore days that have a negative number for the amount of rain. Calculate the average rainfall as the sum of the non-negative values divided by the number of non-negative values. If at least one day has a non-negative rainfall return ``Average: (average)`` and otherwise return ``No rain``.  For example,  ``avg_rainfall([30,-2, 0])`` should return ``Average: 15`` and ``avg_rainfall([-3, -2])`` should return ``No rain``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(avg_rainfall([30, -2, 0]), "Average: 15.0", "rainfall([30, -2, 0])")
            self.assertEqual(avg_rainfall([-2, -3]), "No rain", "rainfall([-2, -3])")
            self.assertEqual(avg_rainfall([4, 0, -3, 20]), "Average: 8.0", "avg_rainfall([4, 0, -3, 20])")
            self.assertEqual(avg_rainfall([20, 4]), "Average: 12.0", "rainfall([20, 4])")

    myTests().main()

.. parsonsprob:: list_MUC_mix_items
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``mix`` that takes a list ``list1`` and returns a new list with the first and last items from the original list swapped.  For example, ``mix([3, 2, 1, 4]``
    should return ``[4, 2, 1, 3]``.
    -----
    def mix(list1):
    =====
        first = list1[0]
        last = list1[-1]
    =====
        out = [last]
    =====
        out.extend(list1[1:-1])
    =====
        out.extend(list1[1:-2]) #paired
    =====
        out.append(first)
    =====
        out.extend(first) #paired
    =====
        return out


.. activecode:: list_MUC_mix_items_ac
    :practice: T
    :autograde: unittest

    Write a function ``mix`` that takes a list ``list1`` and returns a new list with the first and last items from the original list swapped.  For example, ``mix([3, 2, 1, 4])``
    should return ``[4, 2, 1, 3]``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(mix([3, 2, 1, 4]), [4, 2, 1, 3], "mix([3, 2, 1, 4])")
            self.assertEqual(mix(['a', 'b', 'c']), ['c', 'b', 'a'], "mix(['a', 'b', 'c'])")
            self.assertEqual(mix(['a', 'b']), ['b', 'a'], "mix(['a', 'b'])")
            self.assertEqual(mix([2, 2, 1, 1]), [1, 2, 1, 2], "mix([2, 2, 1, 1])")


    myTests().main()


.. parsonsprob:: list_MUC_discount
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``discount(price_list)`` that takes a list of prices and returns a new list with the original price reduced by half.
    Limit each price to two digits after the decimal by rounding to the closest value.  Hint, you can use the ``round`` function to do this.
    -----
    def discount(price_list):
    =====
        discounts = []
    =====
        for price in price_list:
    =====
            new_price = round(price / 2, 2)
    =====
            new_price = price / 2 #paired
    =====
            discounts.append(new_price)
    =====
            discounts.extend(new_price) #paired
    =====
        return discounts


.. activecode::  list_MUC_discount_ac
    :practice: T
    :autograde: unittest

    Write a function ``discount(price_list)`` that takes a list of prices and returns a new list with the original price reduced by half.
    Limit each price to two digits after the decimal by rounding to the closest value.  Hint, you can use the ``round`` function to do this.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(discount([20.00, 15.60, 22.99]), [10.00, 7.80, 11.50], "discount([20.00, 15.60, 22.99])")
            self.assertEqual(discount([14.50]), [7.25], "discount([14.50])")
            self.assertEqual(discount([12.22]), [6.11], "discount([12.22])")
            self.assertEqual(discount([12.31]), [6.16], "discount([12.31])")

    myTests().main()

.. parsonsprob:: list_MUC_append_if_a
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``filter_a(word_list)`` that takes a list of words, ``word_list`` and returns a new list with only the words in ``word_list`` that start with the letter ``a``.
    For example, ``filter_a(['a', 'bye', 'above'])`` should return ``['a', 'above']``.
    -----
    def filter_a(word_list):
    =====
        res = []
    =====
        for word in word_list:
    =====
            if word[0] == 'a':
    =====
            if word[0] = 'a': #paired
    =====
                res.append(word)
    =====
                word_list.append(res) #paired
    =====
        return res


.. activecode::  list_MUC_append_if_a_ac
    :practice: T
    :autograde: unittest

    Write a function ``filter_a(word_list)`` that takes a list of words, ``word_list`` and returns a new list with only the words in ``word_list`` that start with the letter ``a``.
    For example, ``filter_a(['a', 'bye', 'above'])`` should return ``['a', 'above']``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(filter_a(['a', 'bye', 'above']), ['a', 'above'], "filter_a(['a', 'bye', 'above'])")
            self.assertEqual(filter_a(['bye']), [], "filter_a(['bye'])")
            self.assertEqual(filter_a(['bye', 'a', 'around']), ['a', 'around'], "filter_a(['bye', 'a', 'around'])")
            self.assertEqual(filter_a(['bye', 'above']), ['above'], "filter_a(['bye', 'above'])")



    myTests().main()

.. parsonsprob:: list_MUC_add_vocab
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``vocab_list`` that takes two lists: ``terms`` and ``vocab``. It should loop through the list of terms and add each item to
    ``vocab`` if it is not already in that list. It should return the list ``vocab``.
    -----
    def vocab_list(terms, vocab):
    =====
        for word in terms:
    =====
        if response not in wordList:
    =====
        if response in wordList: #paired
    =====
            vocabulary.append(response)
    =====
            if word not in vocab:
    =====
            if word !in vocab: #paired
    =====
                vocab.append(word)
    =====
                word.append(vocab) #paired
    =====
        return vocab


.. activecode::  list_MUC_add_vocab_ac
    :practice: T
    :autograde: unittest

    Write a function ``vocab_list`` that takes two lists: ``terms`` and ``vocab``. It should loop through the list of terms and add each item to
    ``vocab`` if it is not already in that list. It should return the list ``vocab``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):

            self.assertEqual(vocab_list(['hi', 'bye'], ['hi', 'bye']), ['hi', 'bye'], "vocab_list(['hi', 'bye'], ['hi', 'bye'])")
            self.assertEqual(vocab_list(['hi', 'bye', 'run'], ['hi', 'bye']), ['hi', 'bye', 'run'], "vocab_list(['hi', 'bye', 'run'], ['hi', 'bye'])")
            self.assertEqual(vocab_list(['hi', 'bye'], []), ['hi', 'bye'], "vocab_list(['hi', 'bye'], [])")
            self.assertEqual(vocab_list(['an', 'anniversary'], ['anniversary']), ['anniversary', 'an'] , "vocab_list(['an', 'anniversary'], ['anniversary'])")


    myTests().main()
