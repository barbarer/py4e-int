Function and String Mixed-Up Code Questions
--------------------------------------------

.. parsonsprob:: Function_String_MixedUpCode_1
    :numbered: left
    :practice: T
    :adaptive:

    Reorder the given code to create a function joinStrings() that takes two different strings
    as parameters and joins them together. Print the two strings together as one string.
    Watch out for indentation and extra pieces of code.
    -----
    def joinStrings(string1, string2):
    =====
    def joinStrings(): #paired
    =====
      joined = string1 + string2
    =====
      joined_string = join.("string1" + "string2") #distractor
    =====
      print(joined)
    =====
      print(joined_string) #paired

.. parsonsprob:: Function_String_MixedUpCode_2
    :numbered: left
    :practice: T
    :adaptive:

    Reorder the given code to create a function perimeterRectange, that takes two variable x and y
    and prints the perimeter of the rectangle in the form - "The perimeter of the given rectangle
    with height 10 and width 5 is 30."
    Watch out for indentation and extra pieces of code.
    -----
    def perimeterRectangle(x, y):
    =====
    def perimeterRectangle #paired
    =====
      perimeter = 2 * (x + y)
    =====
      answer = "The perimeter of the given rectangle with height " + str(x) + " and width " + str(y) + " is " + str(perimeter) + " ."
    =====
      answer = "The perimeter of the given rectangle with height " + x + " and width " + y + " is " + perimeter + " ." #paired
    =====
      print(answer)

.. parsonsprob:: Function_String_MixedUpCode_3
    :numbered: left
    :practice: T
    :adaptive:

    Reorder the following code to create a function cube() that takes in a single digit number.
    The function prints out the cube of the number.
    It should print - Cube of 4 is 64.
    Watch out for indentation and extra pieces of code.
    -----
    def cube(n):
    =====
      cube_num = n ** 3
    =====
      cube_num = n * 3 #paired
    =====
      answer = "Cube of " + str(n) + " is " + str(cube_num)
    =====
      return answer #distractor
    =====
      print(answer)

.. parsonsprob:: Function_String_MixedUpCode_4
    :numbered: left
    :practice: T
    :adaptive:

    Reorder the following code to create a function atlas()that takes a country name
    as a parameter and finds the last letter of the country.
    The function prints out the following output.
    "The last letter of this country is e. The next counrty should start with letter e"
    Watch out for indentation and extra pieces of code.
    -----
    def atlas(country_name):
    =====
      last_letter = country_name[-1]
    =====
      last_letter = country_name[:-1] #paired
    =====
      print("The last letter of this country is " + last_letter + " . The next counrty should start with letter " + last_letter)

.. parsonsprob:: Function_String_MixedUpCode_5
    :numbered: left
    :practice: T
    :adaptive:

    Reorder the following code to create a function dateYear() that takes a string in the format MM/DD/YYYY and prints out the year.
    Watch out for indentation and extra pieces of code.
    -----
    def dateYear(date):
    =====
      year = date[6:]
    =====
      year = date[7:10] #paired
    =====
      print(year)

.. parsonsprob:: Function_String_MixedUpCode_6
    :numbered: left
    :practice: T
    :adaptive:

    Reorder the code to create a function capitalize(), that capitalizes the first letter of a string.
    The method takes a string and returns the string with the first letter capitalized.
    For example, america would become America.
    Watch out for indentation and extra pieces of code.
    -----
    def capitalize(string1):
    =====
    Def Capitalize(string1): #paired
    =====
      answer_string = string1[0].upper() + string1[1:]
    =====
      answer_string = string1.upper() + string1[1:] #paired
    =====
      answer1 = string1.upper() #distractor
    =====
      return answer_string

.. parsonsprob:: Function_String_MixedUpCode_7
    :numbered: left
    :practice: T
    :adaptive:

    Reorder th following code to create a function passwordDifficulty(), that makes a password
    more difficult. It takes in a string password and replaces all 's' in the string with '$'.
    It returns the new password.
    Watch out for indentation and extra pieces of code.
    -----
    passwordDifficulty(password):
    =====
      new_password = password.replace('s', '$')
    =====
      new_password = password.remove('s') + '$' #paired
    =====
      return new_password
