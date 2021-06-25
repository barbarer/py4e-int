Functions and Conditionals Mixed-Up Code Questions to Write Code
-----------------------------------------------------------------
#.
    .. tabbed:: funct_conditional_muc_to_writecode1

        .. tab:: Question

            .. activecode:: funct_conditional_muc_to_writecode1q
                :practice: T
                :autograde: unittest

                Create a function called get_letter_grade that takes in a parameter percentage and returns a string variable called letter_grade.  
                If the percentage is greater than 100, return "You can't get over 100.". Otherwise, it should return A if the score is greater than or equal to 90, 
                B if greater than or equal to 80, C if greater than or equal to 70, D if greater than or equal to 60, and otherwise E.
                ~~~~
                def get_letter_grade(percentage):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(get_letter_grade(101),"You can't get over 100.","Tested percentage over 100")
                        self.assertEqual(get_letter_grade(100),"A","Tested 100 is an A")
                        self.assertEqual(get_letter_grade(95),"A","Tested 95 is an A")
                        self.assertEqual(get_letter_grade(90),"A","Tested 90 is an A")
                        self.assertEqual(get_letter_grade(89),"B","Tested 89 is a B")
                        self.assertEqual(get_letter_grade(80),"B","Tested 80 is a B")
                        self.assertEqual(get_letter_grade(79),"C","Tested 79 is a C")
                        self.assertEqual(get_letter_grade(70),"C","Tested 70 is a C")
                        self.assertEqual(get_letter_grade(69),"D","Tested 69 is a D")
                        self.assertEqual(get_letter_grade(60),"D","Tested 60 is a D")
                        self.assertEqual(get_letter_grade(59),"E","Tested 59 is an E")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_conditional_muc_to_writecode1a
                :optional:

                def get_letter_grade(percentage):
                    if percentage > 100:
                        return "You can't get over 100."
                    elif percentage <= 100 and percentage >= 90:
                        letter_grade = 'A'
                    elif percentage >= 80:
                        letter_grade = 'B'
                    elif percentage >= 70:
                        letter_grade = 'C'
                    elif percentage >= 60:
                        letter_grade = 'D'
                    else:
                        letter_grade = 'E'
                    return letter_grade


#.
    .. tabbed:: funct_conditional_muc_to_writecode2

        .. tab:: Question

            .. activecode:: funct_conditional_muc_to_writecode2q
                :practice: T
                :autograde: unittest

                Create a function called even_or_odd that takes in a parameter num. If num is odd, return "This is odd.", and if num is even, return "This is even." 
                ~~~~
                def even_or_odd(num):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(even_or_odd(100),"This is even.","Tested 100 is even")
                        self.assertEqual(even_or_odd(58),"This is even.","Tested 58 is even")
                        self.assertEqual(even_or_odd(1002),"This is even.","Tested 1002 is even")
                        self.assertEqual(even_or_odd(199994),"This is even.","Tested 199994 is even")
                        self.assertEqual(even_or_odd(0),"This is even.","Tested 0 is even")
                        self.assertEqual(even_or_odd(6),"This is even.","Tested 6 is even")
                        self.assertEqual(even_or_odd(79),"This is odd.","Tested 79 is odd")
                        self.assertEqual(even_or_odd(-65),"This is odd.","Tested -65 is odd")
                        self.assertEqual(even_or_odd(-43.0),"This is odd.","Tested -43 is odd")

                myTests().main()




#.
    .. tabbed:: funct_conditional_muc_to_writecode3

        .. tab:: Question

            .. activecode:: funct_conditional_muc_to_writecode3q
                :practice: T
                :autograde: unittest

                Create a function called which_quadrant that takes in parameters x and y and returns its corresponding quadrants in increasing order 
                ("Quadrant 1", "Quadrant 2", etc.). Refer to https://en.wikipedia.org/wiki/Quadrant_(plane_geometry) for quadrants on a coordinate 
                plane if needed. If coordinate is on the x or y axis, return "It's not in a quadrant.".
                ~~~~
                def which_quadrant(x, y):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(which_quadrant(0, 0),"It's not in a quadrant.","Tested 0,0 as not in quadrant")
                        self.assertEqual(which_quadrant(0, 15),"It's not in a quadrant.","Tested 0,15 as not in quadrant")
                        self.assertEqual(which_quadrant(-200, 0),"It's not in a quadrant.","Tested -200,0 as not in quadrant")
                        self.assertEqual(which_quadrant(11, 0),"It's not in a quadrant.","Tested 11,0 as not in quadrant")
                        self.assertEqual(which_quadrant(0, 10),"It's not in a quadrant.","Tested 0,10 as not in quadrant")
                        self.assertEqual(which_quadrant(1, 100),"Quadrant 1","Tested 1,100 in quadrant 1")
                        self.assertEqual(which_quadrant(-5, 20),"Quadrant 2","Tested -5,20 in quadrant 2")
                        self.assertEqual(which_quadrant(-100, -85),"Quadrant 3","Tested -100,-85 in quadrant 3")
                        self.assertEqual(which_quadrant(2020.4, -4.5),"Quadrant 4","Tested 2020.4,-4.5 in quadrant 4")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_conditional_muc_to_writecode3a
                :optional:

                def which_quadrant(x, y):
                    if (x > 0) and (y > 0):
                        return "Quadrant 1"
                    elif (x < 0) and (y > 0):
                        return "Quadrant 2"
                    elif (x < 0) and (y < 0):
                        return "Quadrant 3"
                    elif (x > 0) and (y < 0):
                        return "Quadrant 4"
                    else:
                        return "It's not in a quadrant."



#.
    .. tabbed:: funct_conditional_muc_to_writecode4

        .. tab:: Question

            .. activecode:: funct_conditional_muc_to_writecode4q
                :practice: T
                :autograde: unittest

                Create a function called which_axis_or_is_origin that takes in parameters x and y. If both coordinates aren't 0, 
                return "This coordinate is not on an axis. It's in a quadrant.". If both coordinates are 0, return "This coordinate is the origin.". 
                Lastly, if the coordinate isn't in a quadrant and isn't the origin, determine if the coordinate is on the x or y axis by returning
                "This coordinate is on the (y-axis or x-axis).". Refer to https://www.math.net/x-and-y-axis for information on axes if needed.
                ~~~~
                def which_axis_or_is_origin(x, y):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(which_axis_or_is_origin(-5, 20),"This coordinate is not on an axis. It's in a quadrant.","Tested -5,20 in quadrant")
                        self.assertEqual(which_axis_or_is_origin(5, 20.5),"This coordinate is not on an axis. It's in a quadrant.","Tested 5,20.5 in quadrant")
                        self.assertEqual(which_axis_or_is_origin(-400, -101),"This coordinate is not on an axis. It's in a quadrant.","Tested -400,-101 in quadrant")
                        self.assertEqual(which_axis_or_is_origin(10004, -40.3),"This coordinate is not on an axis. It's in a quadrant.","Tested 10004,-40.3 in quadrant")
                        self.assertEqual(which_axis_or_is_origin(0, 0),"This coordinate is the origin.","Tested 0,0 as origin")
                        self.assertEqual(which_axis_or_is_origin(0, -200),"This coordinate is on the y-axis.","Tested 0,-200 on y-axis")
                        self.assertEqual(which_axis_or_is_origin(500, 0),"This coordinate is on the x-axis.","Tested 500,0 on x-axis")

                myTests().main()



#.
    .. tabbed:: funct_conditional_muc_to_writecode5

        .. tab:: Question

            .. activecode:: funct_conditional_muc_to_writecode5q
                :practice: T
                :autograde: unittest

                Create a function called num_to_strings_weekdays_and_weekends that takes in a parameter num. If num is between 1-5 inclusive, 
                create a nested conditional statement that returns "This is a weekday, and it's (insert day here).", 1 being Monday through 5 being Friday.
                If num is 6 or 7, create a nested conditional statement that returns "It is the weekend, and it's (insert day here).", 
                6 being Saturday and 7 being Sunday. If none of the other conditions have been met, return "The number does not correspond to a day of the week.". 
                ~~~~
                def num_to_strings_weekdays_and_weekends(num):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(num_to_strings_weekdays_and_weekends(-1),"The number does not correspond to a day of the week.","Tested -1 as not a day of the week")
                        self.assertEqual(num_to_strings_weekdays_and_weekends(0),"The number does not correspond to a day of the week.","Tested 0 as not a day of the week")
                        self.assertEqual(num_to_strings_weekdays_and_weekends(1),"This is a weekday, and it's Monday.","Tested 1 as Monday")
                        self.assertEqual(num_to_strings_weekdays_and_weekends(2),"This is a weekday, and it's Tuesday.","Tested 2 as Tuesday")
                        self.assertEqual(num_to_strings_weekdays_and_weekends(3),"This is a weekday, and it's Wednesday.","Tested 3 as Wednesday")
                        self.assertEqual(num_to_strings_weekdays_and_weekends(4),"This is a weekday, and it's Thursday.","Tested 4 as Thursday")
                        self.assertEqual(num_to_strings_weekdays_and_weekends(5),"This is a weekday, and it's Friday.","Tested 5 as Friday")
                        self.assertEqual(num_to_strings_weekdays_and_weekends(6),"It is the weekend, and it's Saturday.","Tested 6 as Saturday")
                        self.assertEqual(num_to_strings_weekdays_and_weekends(7),"It is the weekend, and it's Sunday.","Tested 7 as Sunday")
                        self.assertEqual(num_to_strings_weekdays_and_weekends(8),"The number does not correspond to a day of the week.","Tested 8 as not a day of the week")
                        self.assertEqual(num_to_strings_weekdays_and_weekends(-100),"The number does not correspond to a day of the week.","Tested -100 as not a day of the week")
                        self.assertEqual(num_to_strings_weekdays_and_weekends(1001),"The number does not correspond to a day of the week.","Tested 1001 as not a day of the week")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_conditional_muc_to_writecode5a
                :optional:

                def num_to_strings_weekdays_and_weekends(num):
                    if (num >= 1) and (num <= 5):
                        if num == 1:
                            return "This is a weekday, and it's Monday."
                        elif num == 2:
                            return "This is a weekday, and it's Tuesday."
                        elif num == 3:
                            return "This is a weekday, and it's Wednesday."
                        elif num == 4:
                            return "This is a weekday, and it's Thursday."
                        else:
                            return "This is a weekday, and it's Friday."
                    elif (num > 5) and (num <= 7): 
                        if num == 6:
                            return "It is the weekend, and it's Saturday."
                        else:
                            return "It is the weekend, and it's Sunday."
                    else:
                        return "The number does not correspond to a day of the week."
