Mixed-up Code Questions
-----------------------
.. parsonsprob:: listPassword_creator
    :practice: T
    :adaptive:
    :numbered: left

    Write a program that will take the first and last character of each word in a list to create
    a password. Watch out for extra code blocks and indentation!
    -----
    def password_maker():
    =====
    words = ["sunshine", "grapes", "magic", "serendipity", "unicorns", "bubbles", "card", "yellow", "candle"]
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

    Finish the code below to take the first and last character of each word in a list to create
    a password.

    ~~~~
    def password_maker():
        words = ["sunshine", "grapes", "magic", "serendipity", "unicorns", "Bubbles", "card", "yellow", "candle"]
        password = ""

        
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        
        def testOne(self):
            self.assertEqual(password_maker(), "segsmcsyusBscdywce", "Takes the first and last letter of each word and appends them together to a single string")

    myTests().main()



.. parsonsprob:: listMixed_rainfall
    :numbered: left
    :adaptive:
    :practice: T

    Let's imagine that you have a list that contains amounts of rainfall for each day, collected by a
    meteorologist. Her rain gathering equipment occasionally makes a mistake and reports a negative
    amount for that day. We have to ignore those. We need to write a program to (a) calculate the total
    rainfall by adding up all the positive integers (and only the positive integers), (b) count the number
    of positive integers (we will count with "1.0" so that our average can have a decimal point), and (c)
    print out the average rainfall at the end. Only print the average if there was some rainfall, otherwise
    print "No rain". Construct a program that correctly solves the rainfall problem. Watch out for extra
    code blocks and indentation!
    -----
    def rainfall():
    =====
        rain = [0,5,1,0,-1,6,7,-2,0]
        sumRain = 0
        count = 0
    =====
        for day in rain:
    =====
        for day in rain #distractor
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
        else #distractor
    =====
            return "No rain"


.. activecode::  str-listMixed_rainfall-ac

    Let’s imagine that you have a list that contains amounts of rainfall for each day, collected by a 
    meteorologist. Her rain gathering equipment occasionally makes a mistake and reports a negative amount
    for that day. We have to ignore those. Finish to code to (a) calculate the total rainfall by adding up 
    all the positive integers (and only the positive integers), (b) count the number of positive integers 
    (we will count with “1.0” so that our average can have a decimal point), and (c) print out the average 
    rainfall at the end. Only print the average if there was some rainfall, otherwise print “No rain”. 

    ~~~~
    def rainfall():
        rain = [0,5,1,0,-1,6,7,-2,0]
        sumRain = 0
        count = 0
   
        for day in rain:
            if day >= 0:
                sumRain = 
                count = 
        if count > 0:
            ave = 
            print("Average: " + str(ave))
            return str(ave)
        else:
            return "No rain"

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(rainfall(), "2.714285714285714", "Calculates the average rainfall from the list rain")

    myTests().main()



.. parsonsprob:: listMixed_numbers
    :numbered: left
    :practice: T
    :adaptive:
    :noindent:

    The following program segment should swap the first and last values of the list "numbers" using
    indexing. But, the blocks have been mixed up and include an extra block that isn't needed in the
    solution. Drag the needed blocks from the left and put them in the correct order on the right.
    -----
    def mixed():
    numbers = [3, 2, 1, 4]
    =====
    first = numbers[0]
    last = numbers[3]
    =====
    numbers[0] = last
    numbers[-1] = first
    =====
    return numbers


.. activecode::  str-listMixed_numbers-ac

    Finish the code below to swap the first and last values of the list “numbers” using indexing.

    ~~~~
    def mixed():
        numbers = [3, 2, 1, 4]

        first = 
        last =

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(mixed_numbers(), [4,2,1,3], "Swapping first and last element")

    myTests().main()


.. parsonsprob:: listMixed_discount
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should iterate through the list of prices and discount them by
    50%. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.
    -----
    def discount():
    =====
        price_lst = [21.99, 25.99, 19.99, 10.99, 15.99]
        discounts = []
    =====
        for price in price_lst:
    =====
            new_price = round((price * .50), 2)
            discounts.append(new_price)
    =====
        for price in discounts: #distractor
    =====
            price.append(price_lst) #distractor
    =====
        return discounts


.. activecode::  str-listMixed_discount-ac

    Finish the code below to iterate through the list of prices and discount them by 50%.

    ~~~~
    def discount():
        price_lst = [21.99, 25.99, 19.99, 10.99, 15.99]
        discounts = []
  
        for price in price_lst:
            new_price = 

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(discount(), [10.995, 12.995, 9.994999999999999, 5.495, 7.995], "Returns discounted prices of prices in the list")

    myTests().main()


.. parsonsprob:: listMixed_append
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should iterate through the strings in <i>list</i> and append them
    to <i>long_list</i> if the length is greater than 4. But, the blocks have been mixed up and
    include an extra block that isn't needed in the solution.
    -----
    def michigan():
    =====
        list = ["four", "Michigan", "yellow", "at", "blue", "go blue"]
        long_list = []
    =====
        for item in list:
    =====
            if len(item) > 4:
    =====
                long_list.append(item)
    =====
                item.append(long_list) #distractor
    =====
        return long_list


.. activecode::  str-listMixed_append-ac

    Finish the code below to iterate through the strings in <i>list</i> and append them to <i>long_list</i> 
    if the length is greater than 4.

    ~~~~
    def michigan():
        list = ["four", "Michigan", "yellow", "at", "blue", "go blue"]
        long_list = []

        return long_list
        

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(michigan(), ["Michigan", "yellow", "go blue"], "All words longer than 4 characters")

    myTests().main()


.. parsonsprob:: listMixed_months
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should first replace the last item of the list <i>months</i> with
    "November" then append "December" to the end of the list. But, the blocks have been mixed up and
    include extra blocks that aren't needed in the solution.
    -----
    def mixed_months():
    =====
        months = ["January", "March", "June", "August", "October"]
        new_month = "November"
    =====
        months[4] = new_month
    =====
        months.append("December")
    =====
        months[5] = new_month #distractor
    =====
        months[-1] = "December" #distractor
    =====
        return months


.. activecode::  str-listMixed_months-ac

    Finish the code below to replace the last item of the list <i>months</i> with “November” then 
    append “December” to the end of the list

    ~~~~
    def mixed_months():
        months = ["January", "March", "June", "August", "October"]

        return months

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(mixed_months(), ["January", "March", "June", "August", "November", "December"], "Exchanges October for November then adds December")

    myTests().main()


.. parsonsprob:: ch16ex5muc
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should iterate through the list <i>terms</i> and then add each
    item to the list <i>vocab</i> if it is not already in the list. If the word is already in
    <i>vocab</i>, then the program should add 1 to the variable "counter". But the blocks have been
    mixed up and include extra blocks that aren't needed in the solution.
    -----
    def vocab_list():
    =====
        terms = ["accent", "vertigo", "libra", "illusion"]
        vocab = ["hereditary", "illusion", "vertigo", "velocity", "fallacy"]
        counter = 0
    =====
        for word in terms:
    =====
            if word NOT in vocab:
    =====
                vocab.append(word)
    =====
                word.append(vocab) #distractor
    =====
            elif word in vocab:
    =====
                counter += 1
    =====
                counter + 1 #distractor
    =====
        return vocab


.. activecode::  str-ch16ex5muc-ac

    Finish the code below to iterate through the list <i>terms</i> and then add each item to the 
    list <i>vocab</i> if it is not already in the list. If the word is already in <i>vocab</i>, 
    then the program should add 1 to the variable “counter”.

    ~~~~
    def vocab_list():
        terms = ["accent", "vertigo", "libra", "illusion"]
        vocab = ["hereditary", "illusion", "vertigo", "velocity", "fallacy"]
        counter = 0

        return vocab
    

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(vocab_list(), ["hereditary", "illusion", "vertigo", "velocity", "fallacy", "accent", "libra"], "Tests to see if new words have been added correctly and old words not added")

    myTests().main()


.. parsonsprob:: listMixed_oldNew
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should reverse the order of the list <i>oldList</i>, by storing
    it in the list <i>newList</i>. Print the result at the end. The blocks have been mixed up and
    include extra blocks that aren't needed in the solution.
    -----
    def reverse():
    =====
        oldList= [“this”, “is”, “a”, “list”]
        newList=[]
    =====
        for x in range(0, len(oldList)):
    =====
        for x in range(0, list(oldList)): #distractor
    =====
            newList = oldList[x] + newList
    =====
            newList = x[oldList] + newList #distractor
    =====
        return newList


.. activecode::  str-listMixed_oldNew-ac

    Finish the code below to reverse the order of the list <i>oldList</i>, by storing it in the 
    list <i>newList</i>. Print the result at the end.

    ~~~~
    def reverse():
        oldList= ['this', 'is', 'a', 'list']
        newList=[]
  
        return newList

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(reverse(), ["list", "a", "is", "this"], "Checks if the oldListhas been reversed properly")

    myTests().main()


.. parsonsprob:: listMixed_instructions
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should first print out the program's instructions. Next it should
    continuously have the user add a word to a new list <i>vocabulary</i> if they choose and then append it
    to the end the list IF the word is not already in the original list. The blocks have been mixed up and
    include extra blocks that aren't needed in the solution.
    -----
    def instructions(response):
    =====
        wordList = ["hello", "day", "1982", "green", "water"]
        vocabulary = []
    =====
        while response != "quit":
    =====
        while response == "quit": #distractor
    =====
            if response not in wordList:
    =====
                vocabulary.append(response)
    =====
        return vocabulary


.. activecode::  str-listMixed_instructions-ac

    Finish the code below to first print out the program's instructions. Next it should
    continuously have the user add a word to a new list <i>vocabulary</i> if they choose and then append it
    to the end the list IF the word is not already in the original list. 

    ~~~~
    def instructions(response):
        wordList = ["hello", "day", "1982", "green", "water"]
        vocabulary = []


        return vocabulary

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(instructions("hello"), "[""]", "Hello is already a word in the wordList, so vocabulary should be empty")
            self.assertEqual(instructions("maple"), "["maple"]"), "Checks if maple is added correctly")


    myTests().main()


.. parsonsprob:: listMixed_Odd
    :practice: T
    :adaptive:
    :numbered: left

    The following program should create a definition countOdd that takes in a list as its argument and
    returns how many odd numbers are in the list. Watch out for extra code blocks and indentation!
    -----
    def countOdd(lst):
    =====
    def countOdd() #distractor
    =====
    odd = 0
    =====
    odd = 1 #distractor
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
    return countOdd #distractor


.. activecode::  str-listMixed_Odd-ac

    Finish the code below to create a definition countOdd that takes in a list as its argument 
    and returns how many odd numbers are in the list.

    ~~~~
    def countOdd(lst):
        odd = 0
            

        return odd


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(countOdd([7,3,2,4,0]),2, "Out of 5 numbers counts the number of odds))
            self.assertEqual(countOdd([5,3,2,6,78,31,2,3]), 4, "Out of 8 numbers, counts the number of odds")


    myTests().main()