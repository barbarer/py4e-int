Mixed-up Code Questions
-----------------------
.. parsonsprob:: listPassword_creator
    :practice: T
    :adaptive:
    :numbered: left

    Write a program that will take the first and last character of each word in the list "words" to create
    a password. For example, if the list "words" contains ["sunshine", "grapes", "magic", "serendipity", 
    "unicorns", "Bubbles", "card", "yellow", "candle"] then the password should be "segsmcsyusBscdywce".
    Watch out for extra code blocks and indentation!
    -----
    def password_maker(words):
    =====
        password = ""
    =====
         for letter in words:
    =====
            first_char = letter[0]
            last_char = letter[-1]
    =====
            password += first_char
            password += last_char
    =====
        return password

.. activecode::  str-listPassword_creator-ac

    Finish the code below to take the first and last character of each word in the "words" list to create
    a password. For example, if the list "words" contains ["sunshine", "grapes", "magic", "serendipity", 
    "unicorns", "Bubbles", "card", "yellow", "candle"] then the password should be "segsmcsyusBscdywce".

    ~~~~
    def password_maker(words):
        password = ""


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(password_maker(["sunshine", "grapes", "magic", "serendipity", "unicorns", "Bubbles", "card", "yellow", "candle"]), "segsmcsyusBscdywce", "Takes the first and last letter of each word and appends them together to a single string")
            self.assertEqual(password_maker(["popcorn", "candy", "soda", "cars", "evergreen"]), "pncysacsen", "Takes first and last character of each word")
            self.assertEqual(password_maker(["hello","hello","hello","hello"]), "hohohoho")

    myTests().main()



.. parsonsprob:: listMixed_rainfall
    :numbered: left
    :adaptive:
    :practice: T

    Let's imagine that you have a list that contains amounts of rainfall for each day, collected by a
    meteorologist. Her rain gathering equipment occasionally makes a mistake and reports a negative
    amount for that day. We have to ignore those. We need to write a program to (a) calculate the total
    rainfall by adding up all the positive integers (and only the positive integers) from the list "rain", 
    (b) count the number of positive integers (we will count with "1.0" so that our average can have a 
    decimal point), and (c) print out the average rainfall at the end. Only print the average if there 
    was some rainfall, otherwise print "No rain". Construct a program that correctly solves the rainfall 
    problem. For example, if the list "rain" contained [0,5,1,0,-1,6,7,-2,0] as the amount of rainfall for
    each day, then the average rainfall should be "2.714285714285714". Watch out for extra code blocks and 
    indentation!
    -----
    def rainfall(rain):
    =====
        sumRain = 0
        count = 0
    =====
        for day in rain:
    =====
        for day in rain #paired
    =====
            if day >= 0:
    =====
                sumRain = sumRain + day
                count = count + 1.0
    =====
        if count > 0:
    =====
            ave = sumRain / count
            print("Average:")
            return str(ave)
    =====
        else:
    =====
        else #paired
    =====
            return "No rain"


.. activecode::  str-listMixed_rainfall-ac

    Let’s imagine that you have a list that contains amounts of rainfall for each day, collected by a
    meteorologist. Her rain gathering equipment occasionally makes a mistake and reports a negative amount
    for that day. We have to ignore those. Finish to code to (a) calculate the total rainfall by adding up
    all the positive integers (and only the positive integers) from the "rain" list, (b) count the number 
    of positive integers (we will count with “1.0” so that our average can have a decimal point), and (c) 
    print out the average rainfall at the end. Only print the average if there was some rainfall, otherwise 
    print “No rain”. For example, if the list "rain" contained [0,5,1,0,-1,6,7,-2,0] as the amount of rainfall 
    for each day, then the average rainfall should be "2.714285714285714".

    ~~~~
    def rainfall(rain):
        sumRain = 0
        count = 0

        for day in rain:
            if day >= 0:
                sumRain =
                count =
        if count > 0:
            ave =
            print("Average: " )
            return str(ave)
        else:
            return "No rain"

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(rainfall([0,5,1,0,-1,6,7,-2,0]), "2.714285714285714", "Calculates the average rainfall from the list rain")
            self.assertEqual(rainfall([0,0,0,0,0]), "0.0", "Calculates the average rainfall from the list rain")
            self.assertEqual(rainfall([1,2,3,4,5,7,8,10]), "5.0", "Calculates the average rainfall from the list rain")

    myTests().main()



.. parsonsprob:: listMixed_numbers
    :numbered: left
    :practice: T
    :adaptive:
    :noindent:

    The following program segment should swap the first and last values of the list "numbers" using
    indexing. But, the blocks have been mixed up and include an extra block that isn't needed in the
    solution. For example, if the list, "numbers" contains [3,2,1,4], then the result should be 
    [4,2,1,3]. Drag the needed blocks from the left and put them in the correct order on the right.
    -----
    def mixed(numbers):
    =====
        first = numbers[0]
        last = numbers[len(numbers)-1]
    =====
        numbers[0] = last
        numbers[-1] = first
    =====
        return numbers


.. activecode::  str-listMixed_numbers-ac

    Finish the code below to swap the first and last values of the list “numbers” using indexing.
    For example, if the list, "numbers" contains [3,2,1,4], then the result should be [4,2,1,3].

    ~~~~
    def mixed(numbers):
        first =
        last =

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(mixed([3,2,1,4]), [4,2,1,3], "Swapping first and last element")
            self.assertEqual(mixed([3,2,1]), [1,2,3], "Swapping first and last element")
            self.assertEqual(mixed([2,4,8,7,6]), [6,4,8,7,2], "Swapping first and last element")

    myTests().main()


.. parsonsprob:: listMixed_discount
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should iterate through the list of prices from price_lst and discount them by
    50%. For example, if the list of prices (price_lst) is [21.99, 25.99, 19.99, 10.99, 15.99], then the discounted 
    price should be [11.00, 13.00, 9.99, 5.50, 8.00]. But, the blocks have been mixed up and include an extra block 
    that isn't needed in the solution. 
    
    -----
    def discount(price_lst):
    =====
        discounts = []
    =====
        for price in price_lst:
    =====
            new_price = round((price * .50), 2)
            discounts.append(new_price)
    =====
        for price in discounts: #paired
    =====
            price.append(price_lst) #paired
    =====
        return discounts


.. activecode::  str-listMixed_discount-ac

    Finish the code below to iterate through the list of prices and discount them by 50%. For example,
    if the list of prices (price_lst) is [21.99, 25.99, 19.99, 10.99, 15.99], then the discounted price
    should be [11.00, 13.00, 9.99, 5.50, 8.00].

    ~~~~
    def discount(price_lst):
        discounts = []

        for price in price_lst:
            new_price =

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(discount([21.99, 25.99, 19.99, 10.99, 15.99]), [11.0, 13.0, 9.99, 5.5, 8.0], "Returns discounted prices of prices in the list")
            self.assertEqual(discount([4.99,3.00,6.99]), [2.5, 1.5, 3.5], "Returns discounted prices of prices in the list")

    myTests().main()


.. parsonsprob:: listMixed_append
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should iterate through the strings in "list" and append them
    to "long_list" if the length is greater than 4. For example, if "list" contains 
    ["four", "Michigan", "yellow", "at", "blue", "go blue"], then "long_list" should be 
    ["Michigan", "yellow", "go blue"]. But, the blocks have been mixed up and include an extra block 
    that isn't needed in the solution. 

    -----
    def michigan(list):
    =====
        long_list = []
    =====
        for item in list:
    =====
            if len(item) > 4:
    =====
                long_list.append(item)
    =====
                item.append(long_list) #paired
    =====
        return long_list


.. activecode::  str-listMixed_append-ac

    Finish the code below to iterate through the strings in "list" and append them to "long_list"
    if the length is greater than 4. For example, if "list" contains ["four", "Michigan", "yellow", 
    "at", "blue", "go blue"], then "long_list" should be ["Michigan", "yellow", "go blue"].

    ~~~~
    def michigan(list):
        long_list = []

        return long_list


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(michigan(["four", "Michigan", "yellow", "at", "blue", "go blue"]), ["Michigan", "yellow", "go blue"], "All words longer than 4 characters")
            self.assertEqual(michigan(["eighteen", "in", "Ann Arbor", "wolverines", "maize", "navy"]), ["eighteen", "Ann Arbor", "wolverines", "maize"], "All words longer than 4 characters")

    myTests().main()


.. parsonsprob:: listMixed_months
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should first replace the last item of the list "months" with
    "November" then append "December" to the end of the list. For example, if "months" consists of
    ["January", "March", "June", "August", "October"], then the returned list should be 
    ["January", "March", "June", "August", "November", "December"]. But, the blocks have been mixed up 
    and include extra blocks that aren't needed in the solution.
    -----
    def mixed_months(months):
    =====
        new_month = "November"
    =====
        months[len(months)-1] = new_month
    =====
        months.append("December")
    =====
        months[5] = new_month #paired
    =====
        months[-1] = "December" #paired
    =====
        return months


.. activecode::  str-listMixed_months-ac

    Finish the code below to replace the last item of the list "months" with “November” then
    append “December” to the end of the list. For example, if "months" consists of
    ["January", "March", "June", "August", "October"], then the returned list should be 
    ["January", "March", "June", "August", "November", "December"].

    ~~~~
    def mixed_months(months):
  
        return months

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(mixed_months(["January", "March", "June", "August", "October"]), ["January", "March", "June", "August", "November", "December"], "Exchanges October for November then adds December")
            self.assertEqual(mixed_months(["February", "April", "July", "September"]), ["February", "April", "July", "November", "December"], "Exchanges October for November then adds December")

    myTests().main()


.. parsonsprob:: ch16ex5muc
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should iterate through the list "terms" and then add each
    item to the list "vocab" if it is not already in the list. If the word is already in
    "vocab", then the program should add 1 to the variable "counter". For example, if "terms" is
    ["accent", "vertigo", "libra", "illusion"] and "vocab" is ["hereditary", "illusion", "vertigo", "velocity", "fallacy"],
    then the returned list should be ["hereditary", "illusion", "vertigo", "velocity", "fallacy", "accent", "libra"].
    But the blocks have been mixed up and include extra blocks that aren't needed in the solution.
    -----
    def vocab_list(terms, vocab):
    =====
        counter = 0
    =====
        for word in terms:
    =====
            if word NOT in vocab:
    =====
                vocab.append(word)
    =====
                word.append(vocab) #paired
    =====
            elif word in vocab:
    =====
                counter += 1
    =====
                counter + 1 #paired
    =====
        return vocab


.. activecode::  str-ch16ex5muc-ac

    Finish the code below to iterate through the list "terms" and then add each item to the
    list "vocab" if it is not already in the list. If the word is already in "vocab",
    then the program should add 1 to the variable “counter”. For example, if "terms" is
    ["accent", "vertigo", "libra", "illusion"] and "vocab" is 
    ["hereditary", "illusion", "vertigo", "velocity", "fallacy"], then the returned list should be 
    ["hereditary", "illusion", "vertigo", "velocity", "fallacy", "accent", "libra"].

    ~~~~
    def vocab_list(terms, vocab):
        counter = 0

        return vocab


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(vocab_list(["accent", "vertigo", "libra", "illusion"], ["hereditary", "illusion", "vertigo", "velocity", "fallacy"]), ["hereditary", "illusion", "vertigo", "velocity", "fallacy", "accent", "libra"], "Tests to see if new words have been added correctly and old words not added")
            self.assertEqual(vocab_list(["gemini", "language", "jelly", "mirage"], ["summer", "mirage", "pasta", "iron", "serenity"]), ["summer", "mirage", "pasta", "iron", "serenity","gemini", "language", "jelly"], "Tests to see if new words have been added correctly and old words not added")

    myTests().main()


.. parsonsprob:: listMixed_oldNew
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should reverse the order of the list "oldList", by storing
    it in the list "newList". Print the result at the end. For example, if "oldList" 
    ["this", "is", "a", "list"], the "newList" should print ["list", "a", "is", "this"].
    The blocks have been mixed up and include extra blocks that aren't needed in the solution.
    -----
    def reverse(oldList):
    =====
        newList=[]
    =====
        for x in range(0, len(oldList)):
    =====
        for x in range(0, list(oldList)): #paired
    =====
            newList.insert(0,oldList[x])
    =====
            newList = x[oldList] + newList #paired
    =====
        return newList


.. activecode::  str-listMixed_oldNew-ac

    Finish the code below to reverse the order of the list "oldList", by storing it in the
    it in the list "newList". Print the result at the end. For example, if "oldList" 
    list "newList". Print the result at the end. 

    ~~~~
    def reverse(oldList):
        newList=[]

        return newList

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(reverse(["this", "is", "a", "list"]), ["list", "a", "is", "this"], "Checks if the oldListhas been reversed properly")
            self.assertEqual(reverse(["this", "is", "a", "practice", "for", "lists"]), ["lists", "for", "practice", "a", "is", "this"], "Checks if the oldListhas been reversed properly")

    myTests().main()


.. parsonsprob:: listMixed_instructions
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should have the user add a word to a new list ``vocabulary`` If the word
    is not already in the original list. For example, if "response" is "hello", the program should not add 
    "hello" to "vocabulary" and return nothing. If "response" is "maple", the program should add "maple" to 
    "vocabulary" and return ["maple"] only. The blocks have been mixed up and include extra blocks that aren't
    needed in the solution.
    -----
    def instructions(response):
    =====
        wordList = ["hello", "day", "1982", "green", "water"]
    =====
        vocabulary = []
    =====
        if response in wordList: #paired
    =====
        if response not in wordList:
    =====
            vocabulary.append(response)
    =====
            response.append(vocabulary) #paired
    =====
        return vocabulary


.. activecode::  str-listMixed_instructions-ac

    Finish the code below to have the user add a word to a new list ``vocabulary`` If the word
    is not already in the original list. For example, if "response" is "hello", the program should not add 
    "hello" to "vocabulary" and return nothing. If "response" is "maple", the program should add "maple" to 
    "vocabulary" and return ["maple"] only.

    ~~~~
    def instructions(response):
        wordList = ["hello", "day", "1982", "green", "water"]
        vocabulary = []


        return vocabulary

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(instructions("hello"), [], "Hello is already a word in the wordList, so vocabulary should be empty")
            self.assertEqual(instructions("maple"), ['maple'], "Checks if maple is added correctly")

    myTests().main()


.. parsonsprob:: listMixed_Odd
    :practice: T
    :adaptive:
    :numbered: left

    The following program should create a definition countOdd that takes in a list as its argument and
    returns how many odd numbers are in the list. For example, if "lst" is [7,3,2,4,0], then the returned
    result should be "2". Watch out for extra code blocks and indentation!
    -----
    def countOdd(lst):
    =====
    def countOdd() #paired
    =====
        odd = 0
    =====
        odd = 1 #paired
    =====
        for e in lst:
    =====
            if e % 2 != 0:
    =====
            if e % 2 == 0: #paired
    =====
                odd = odd + 1
    =====
        return odd
    =====
        return countOdd #paired


.. activecode::  str-listMixed_Odd-ac

    Finish the code below to create a definition countOdd that takes in a list as its argument
    and returns how many odd numbers are in the list. For example, if "lst" is [7,3,2,4,0], 
    then the returned result should be "2".

    ~~~~
    def countOdd(lst):
        odd =


        return odd


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(countOdd([7,3,2,4,0]),2, "Out of 5 numbers counts the number of odds")
            self.assertEqual(countOdd([5,3,2,6,78,31,2,3]), 4, "Out of 8 numbers, counts the number of odds")
            self.assertEqual(countOdd([2,4]), 0, "Out of 2 numbers, counts the number of odds")


    myTests().main()
