Functions and Loops Mixed-Up Code Questions
--------------------------------------------

.. parsonsprob:: Functions_Loops_MixedUpCode_1
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called nums_one_to_ten_list that uses a for loop to create and return a list with numbers 1 to 10.
    -----
    def nums_one_to_ten_list():
    =====
    def nums_one_to_ten_list: #distractor
    =====
        one_to_ten_list = []
    =====
        for num in range(1,11):
    =====
        for num in range(10): #paired
    =====
        for num in range(1,10): #paired
    =====
            one_to_ten_list.append(num)
    =====
        return one_to_ten_list

.. parsonsprob:: Functions_Loops_MixedUpCode_2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function count_by_5_to_20_list that uses a for loop to create and return a list with numbers 5, 10, 15, and 20.
    -----
    def count_by_5_to_20_list():
    =====
    def count_by_5_to_20_list: #distractor
    =====
        five_to_twenty_list = []
    =====
        for num in range (5, 21, 5):
    =====
        for num in range (5, 20, 5): #paired
    =====
            five_to_twenty_list.append(num)
    =====
            five_to_twenty_list += num #distractor
    =====
        return five_to_twenty_list

.. parsonsprob:: Functions_Loops_MixedUpCode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called countdown_to_go that initializes a parameter seconds to 3 and 
    counts down to 1 while printing out the numbers and then prints 'Go!'.
    -----
    def countdown_to_go(seconds = 3):
    =====
    def countdown_to_go(): #distractor
    =====
        while seconds > 0:
    =====
        while seconds = 3: #distractor
    =====
            print(seconds)
    =====
            seconds -= 1
    =====
        print('Go!')

.. parsonsprob:: Functions_Loops_MixedUpCode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function add_odds_floor_division_all_else that takes in a parameter num_list. 
    It loops through the num_list, and if the number in num_list is odd, it gets added to result. 
    Otherwise, it gets divided from the result, having the result be the floor value. In the end, the result is returned.
    -----
    def add_odds_floor_division_all_else(num_list):
    =====
    def add_odds_floor_division_all_else(): #distractor
    =====
        result = 0
    =====
        for num in num_list:
    =====
            if num % 2 == 1:
    =====
            if num / 2 == 1: #distractor
    =====
                result += num
    =====
            else:
    =====
                result //= num
    =====
                result /= num #distractor
    =====
        return result

.. parsonsprob:: Functions_Loops_MixedUpCode_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function strings_with_chars_less_than_len_of_list that takes in a list of strings 
    and returns a sorted new list with strings that are shorter in length than the original list.
    -----
    def strings_with_chars_less_than_len_of_list(strings_list):
    =====
    def strings_with_chars_less_than_len_of_list(string_list): #paired
    =====
        new_strings_list = []
    =====
        for string in strings_list:
    =====
            if len(string) < len(strings_list):
    =====
            if string < len(strings_list): #paired
    =====
                new_strings_list.append(string)
    =====
            else:
    =====
                continue
    =====
                break #distractor
    =====
        return sorted(new_strings_list)
    =====
        return new_strings_list.sort() #paired