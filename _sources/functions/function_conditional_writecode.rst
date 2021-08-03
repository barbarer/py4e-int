Functions and Conditionals Write Code Questions
------------------------------------------------

#.

    .. tabbed:: funct_conditional_writecode1

        .. tab:: Question

            .. activecode:: funct_conditional_writecode1q
                :practice: T
                :autograde: unittest

                Create a function ``cropped_photo`` that takes the ``height`` and ``width`` of a photo.
                If the ``height`` and ``width`` are equal then the function returns ``Cropped Photo``, otherwise
                it returns ``The photo needs to be cropped.``
                ~~~~
                def cropped_photo(height, width):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(cropped_photo(30, 80),"The photo needs to be cropped.","Tested cropped_photo with two different positive numbers.")
                        self.assertEqual(cropped_photo(50, 50),"Cropped Photo","Tested cropped_photo with same positive numbers")
                        self.assertEqual(cropped_photo(-10, 0),"The photo needs to be cropped.","Tested cropped_photo with negative different numbers.")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_conditional_writecode1a
                :optional:

                def cropped_photo(height, width):
                    if height == width :
                        return "Cropped Photo"
                    else:
                        return "The photo needs to be cropped."


#.

    .. activecode:: funct_conditional_writecode2q
        :practice: T
        :autograde: unittest

        Create a function ``bonus`` that returns whether an employee receives a bonus or not.
        The function takes two parameters, ``years`` and ``quality``.
        If ``years`` is more than ``5``, then the person gets a bonus.
        The person also gets a bonus if their quality of work was more than ``90``.
        They can also get a bonus if they worked for at least ``3`` years and had quality more than ``80``.
        If the person is eligible for a bonus, return ``Eligible for Bonus``, otherwise return ``Ineligible for Bonus``
        ~~~~
        def bonus(years, quality):
            # write code here

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(bonus(7, 40),"Eligible for Bonus","Tested bonus on condition 1")
                self.assertEqual(bonus(2, 98),"Eligible for Bonus","Tested bonus on condition 2")
                self.assertEqual(bonus(4, 81),"Eligible for Bonus","Tested bonus on condition 3")
                self.assertEqual(bonus(3, 67),"Ineligible for Bonus","Tested bonus on condition 4")
                self.assertEqual(bonus(2, 88),"Ineligible for Bonus","Tested bonus on condition 4")

        myTests().main()

#.

    .. tabbed:: funct_conditional_writecode3

        .. tab:: Question

            .. activecode:: funct_conditional_writecode3q
                :practice: T
                :autograde: unittest

                Create a function ``move_elevator`` to move an elevator from one floor to another.
                The function takes two parameters ``current_floor`` and ``next_floor``. If the elevator moves
                to a floor above, then it should return ``Up``. Otherwise, it should return ``Down``.
                Also, if the ``next_floor`` is negative, or if it is the same as ``current_floor``, it should
                return 0.
                ~~~~
                def move_elevator(current_floor, next_floor):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(move_elevator(5, 8),"Up","Checks when elevator moves up.")
                        self.assertEqual(move_elevator(2, 2),0,"Checks when current and next floor are same.")
                        self.assertEqual(move_elevator(9, 3),"Down","Checks when elevator moves down.")
                        self.assertEqual(move_elevator(3, -2),0,"Checks when illegal value of next floor is given.")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_conditional_writecode3a
                :optional:

                def move_elevator(current_floor, next_floor):
                    if next_floor < 0:
                        return 0
                    elif  next_floor < current_floor:
                        return "Down"
                    elif next_floor > current_floor:
                        return "Up"
                    else:
                        return 0


#.

    .. activecode:: funct_conditional_writecode4q
        :practice: T
        :autograde: unittest

        Create a function ``lunch_break`` that determines how long a lunch break will be based on
        the student's class standing. The function takes a parameter ``class_standing``.
        If a person is a ``Freshman``, they will have a ``40`` minutes break.
        A ``Sophomore`` will have ``30`` minutes, a ``Junior`` will have 20 minutes and a ``Senior`` will have ``15`` minutes.
        If it is none of these then they should have 0 minutes of lunch break.
        ~~~~
        def lunch_break(class_standing):
            # write code here

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(lunch_break("Freshman"),40,"Tested lunch_break on Freshman")
                self.assertEqual(lunch_break("Sophomore"),30,"Tested lunch_break on Sophomore")
                self.assertEqual(lunch_break("Senior"),15,"Tested lunch_break on Senior")
                self.assertEqual(lunch_break("Junior"),20,"Tested lunch_break on Junior")
                self.assertEqual(lunch_break("Alumni"),0,"Tested lunch_break on Alumni")

        myTests().main()

#.

    .. tabbed:: funct_conditional_writecode5

        .. tab:: Question

            .. activecode:: funct_conditional_writecode5q
                :practice: T
                :autograde: unittest

                Create a function ``pay_rent``. The function takes in one parameter,
                ``units`` that is the units of area of a property. If the property is less than ``200`` units, pay ``$100``.
                If it is less than ``500`` units pay ``$200``. If it is more than ``500`` units then
                pay ``$200`` + ``0.1`` for every extra unit. Return the rent value.
                ~~~~
                def pay_rent(units):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(pay_rent(175), "$100","Tested pay_rent for condition 1")
                        self.assertEqual(pay_rent(475), "$200","Tested pay_rent for condition 2")
                        self.assertEqual(pay_rent(730), "$223","Tested pay_rent for condition 3")
                        self.assertEqual(pay_rent(1000), "$600","Tested pay_rent for condition 3)

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_conditional_writecode5a
                :optional:

#.

    .. activecode:: funct_conditional_writecode6q
        :practice: T
        :autograde: unittest

        Create a function ``play_weather`` that takes the string ``weather`` as a parameter and
        returns if one should play or not. If the weather is ``sunny`` or ``cloudy`` then the function
        should return ``The person should play``. Otherwise if the weather is ``rainy``, ``windy`` or ``snowy``,
        then the function should return ``The person should not play``. If the ``weather`` is ``storm``, then the
        function should return ``It is not safe to go outside``.
        ~~~~
        def play_weather(weather):
            # write code here

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(play_weather("sunny"), "The person should play", "Tested for condition 1")
                self.assertEqual(play_weather("cloudy"), "The person should play", "Tested for condition 1")
                self.assertEqual(play_weather("windy"), "The person should not play", "Tested for condition 2")
                self.assertEqual(play_weather("snowy"), "The person should not play", "Tested for condition 2")
                self.assertEqual(play_weather("storm"), "It is not safe to go outside", "Tested for condition 3")

        myTests().main()
