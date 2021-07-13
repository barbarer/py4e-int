Functions and Conditionals Mixed-Up Code Questions
---------------------------------------------------

.. parsonsprob:: funct_conditional_muc1
    :adaptive:
    :numbered: left
    :practice: T

    Create a function called ``get_letter_grade`` that takes in a parameter ``percentage`` and returns a string variable called ``letter_grade``.  
    If the ``percentage`` is greater than 100, return ``"You can't get over 100."``. Otherwise, it should return ``A`` if the score is greater than or equal to 90, 
    ``B`` if greater than or equal to 80, ``C`` if greater than or equal to 70, ``D`` if greater than or equal to 60, and otherwise ``E``. 
    For example, ``get_letter_grade(90)`` should return "A".
    -----
    def get_letter_grade(percentage):
    =====
    def get_letter_grade(percentage) #paired
    =====
        if percentage > 100:
    =====
            return "You can't get over 100."
    =====
            return 'You can't get over 100.' #paired
    =====
        elif percentage <= 100 and percentage >= 90:
    =====
            letter_grade = 'A'
    =====
            letter_grade == 'A' #paired
    =====
        elif percentage >= 80:
    =====
            letter_grade = 'B'
    =====
        elif percentage >= 70:
    =====
            letter_grade = 'C'
    =====
        elif percentage >= 60:
    =====
            letter_grade = 'D'
    =====
        else:
            letter_grade = 'E'
    =====
        return letter_grade


.. parsonsprob:: funct_conditional_muc2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``even_or_odd`` that takes in a parameter ``num``. If ``num`` is odd, return ``"This is odd."``, and if ``num`` is even, return ``"This is even." ``.
    For example, ``even_or_odd(-65)`` should return "This is odd.". Note: For this function, ``num`` is solely an integer.
    -----
    def even_or_odd(num):
    =====
    Def even_or_odd(num): #paired
    =====
        if num % 2 == 0:
    =====
        if num % 2 = 1: #paired
    =====
        if num % 2 = 0: #paired
    =====
            return "This is even."
    =====
        else:
    =====
            return "This is odd."


.. parsonsprob:: funct_conditional_muc3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``which_quadrant`` that takes in parameters ``x`` and ``y`` and returns its corresponding quadrants in increasing order 
    ("Quadrant 1", "Quadrant 2", etc.). Refer to https://en.wikipedia.org/wiki/Quadrant_(plane_geometry) for quadrants on a coordinate 
    plane if needed. If coordinate is on the x or y axis, return ``"It's not in a quadrant."``. For example, ``which_quadrant(1, 100)`` 
    should return "Quadrant 1".
    -----
    def which_quadrant(x, y):
    =====
        if (x > 0) and (y > 0):
    =====
        if (x >= 0) and (y >= 0): #paired
    =====
            return "Quadrant 1"
    =====
        elif (x < 0) and (y > 0):
    =====
        elif (x <= 0) and (y >= 0): #paired
    =====
            return "Quadrant 2"
    =====
        elif (x < 0) and (y < 0):
    =====
        elif (x <= 0) and (y <= 0): #paired
    =====
            return "Quadrant 3"
    =====
        elif (x > 0) and (y < 0):
    =====
        elif (x >= 0) and (y <= 0): #paired
    =====
            return "Quadrant 4"
    =====
        else:
    =====
            return "It's not in a quadrant."
    =====
            return 'It's not in a quadrant.' #paired


.. parsonsprob:: funct_conditional_muc4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``which_axis_or_is_origin`` that takes in parameters ``x`` and ``y``. If both coordinates aren't 0, 
    return ``"This coordinate is not on an axis. It's in a quadrant."``. If both coordinates are 0, return ``"This coordinate is the origin."``. 
    Lastly, if the coordinate isn't in a quadrant and isn't the origin, determine if the coordinate is on the x or y axis by returning
    ``"This coordinate is on the (y-axis or x-axis)."``. Refer to https://www.math.net/x-and-y-axis for information on axes if needed. 
    For example, ``which_axis_or_is_origin(500, 0)`` should return "This coordinate is on the x-axis.".
    -----
    def which_axis_or_is_origin(x, y):
    =====
        if (x != 0) and (y != 0):
    =====
        if (x != 0) && (y != 0): #paired
    =====
        if (x != 0) or (y != 0): #paired
    =====
            return "This coordinate is not on an axis. It's in a quadrant."
    =====
        elif (x == 0) and (y == 0):
    =====
            return "This coordinate is the origin."
    =====
        elif x == 0:
    =====
        if x == 0: #paired
    =====
        elif x = 0: #paired
    =====
            return "This coordinate is on the y-axis."
    =====
        else:
    =====
            return "This coordinate is on the x-axis."


.. parsonsprob:: funct_conditional_muc5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``num_to_strings_weekdays_and_weekends`` that takes in a parameter ``num``. If ``num`` is between 1-5 inclusive, 
    create a nested conditional statement that returns ``"This is a weekday, and it's (insert day here)."``, 1 being Monday through 5 being Friday.
    If ``num`` is 6 or 7, create a nested conditional statement that returns ``"It is the weekend, and it's (insert day here)."``, 
    6 being Saturday and 7 being Sunday. If none of the other conditions have been met, return ``"The number does not correspond to a day of the week."``. 
    For example, ``num_to_strings_weekdays_and_weekends(1)`` should return "This is a weekday, and it's Monday.".
    -----
    def num_to_strings_weekdays_and_weekends(num):
    =====
        if (num >= 1) and (num <= 5):
    =====
        if (num > 1) and (num < 5): #paired
    =====
            if num == 1:
    =====
                return "This is a weekday, and it's Monday."
    =====
            elif num == 2:
    =====
                return "This is a weekday, and it's Tuesday."
    =====
            elif num == 3:
    =====
                return "This is a weekday, and it's Wednesday."
    =====
            elif num == 4:
    =====
                return "This is a weekday, and it's Thursday."
    =====
            else:
    =====
                return "This is a weekday, and it's Friday."
    =====
        elif (num > 5) and (num <= 7): 
    =====
        elif num <= 7: #paired
    =====
        elif (num > 5) or (num <= 7): #paired
    =====
        elif (num >= 5) or (num <= 7): #paired
    =====
            if num == 6:
    =====
                return "It is the weekend, and it's Saturday."
    =====
            else:
    =====            
                return "It is the weekend, and it's Sunday."
    =====
        else:
    =====
            return "The number does not correspond to a day of the week."

