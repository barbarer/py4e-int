Mixed-up Code Questions
-----------------------
.. parsonsprob:: listMixed_weather
    :practice: T
    :adaptive:
    :numbered: left

    Write a program that will print out the length of each item in the list as well as
    the first and last characters of the item. Watch out for extra code blocks and indentation!
    -----
    weather = ["sunny", "cloudy", "partially sunny", "rainy", "storming", "windy", "foggy", "snowy", "hailing"]
    =====
    for condition in weather:
    =====
        print("The word is", len(condition), "characters")
    =====
        first_char = condition[0]
        last_char = condition[-1]
    =====
        print("The first character is: " + first_char)
        print("The last character is: " + last_char)

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
        print("Average",ave)
    =====
    else:
    =====
    else #distractor
    =====
        print("No rain")

.. parsonsprob:: listMixed_numbers
    :numbered: left
    :practice: T
    :adaptive:
    :noindent:

    The following program segment should swap the first and last values of the list "numbers" using
    indexing. But, the blocks have been mixed up and include an extra block that isn't needed in the
    solution. Drag the needed blocks from the left and put them in the correct order on the right.
    -----
    numbers = [3, 2, 1, 4]
    =====
    first = numbers[0]
    last = numbers[3]
    =====
    numbers[0] = last
    numbers[-1] = first
    =====
    first = numbers[1]
    last = numbers[4] #distractor

.. parsonsprob:: listMixed_discount
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should iterate through the list of prices and discount them by
    50%. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.
    -----
    price_lst = [21.99, 25.99, 19.99, 10.99, 15.99]
    discounts = []
    =====
    for price in price_lst:
    =====
        new_price = price * .50
    =====
        discounts.append(new_price)
    =====
    for price in discounts: #distractor
    =====
        price.append(price_lst) #distractor

.. parsonsprob:: listMixed_append
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should iterate through the strings in <i>list</i> and append them
    to <i>long_list</i> if the length is greater than 4. But, the blocks have been mixed up and
    include an extra block that isn't needed in the solution.
    -----
    list = ["four", "Michigan", "yellow", "at", "blue"]
    long_list = []
    =====
    for each item in list:
    =====
        if len(item) > 4:
    =====
            long_list.append(item)
    =====
            item.append(long_list) #distractor

.. parsonsprob:: listMixed_months
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should first replace the last item of the list <i>months</i> with
    "November" then append "December" to the end of the list. But, the blocks have been mixed up and
    include extra blocks that aren't needed in the solution.
    -----
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

.. parsonsprob:: ch16ex5muc
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should iterate through the list <i>terms</i> and then add each
    item to the list <i>vocab</i> if it is not already in the list. If the word is already in
    <i>vocab</i>, then the program should add 1 to the variable "counter". But the blocks have been
    mixed up and include extra blocks that aren't needed in the solution.
    -----
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

.. parsonsprob:: listMixed_oldNew
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should reverse the order of the list <i>oldList</i>, by storing
    it in the list <i>soFar</i>. Print the result at the end. The blocks have been mixed up and
    include extra blocks that aren't needed in the solution.
    -----
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
    print(newList)

.. parsonsprob:: listMixed_instructions
    :numbered: left
    :practice: T
    :adaptive:

    The following program segment should first print out the program's instructions. Next it should
    continuously ask the user if it wants to add a word to a list <i>vocabulary</i> and then append it
    to the end the list IF the word is not already in the list. The blocks have been mixed up and
    include extra blocks that aren't needed in the solution.
    -----
    print("Enter a word to add it to the vocabulary list or type in 'quit' to end the program.")
    response = 0
    vocabulary = []
    =====
    while response != "quit":
    =====
    while response == "quit": #distractor
    =====
        response = input("Enter a vocabulary word:")
    =====
        if response not in vocabulary:
    =====
            vocabulary.append(response)

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
