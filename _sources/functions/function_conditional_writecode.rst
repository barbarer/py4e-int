Functions and Conditionals Write Code Questions
------------------------------------------------

#.

    .. tabbed:: funct_conditional_writecode1

        .. tab:: Question

            .. activecode:: funct_conditional_writecode1q
                :autograde: unittest

                Write a function called ``cropped_photo`` that takes the ``height`` and ``width`` of a photo.
                If the ``height`` and ``width`` are equal, then the function returns ``"Cropped Photo"``. Otherwise,
                it returns ``"The photo needs to be cropped."`` Assume ``height`` and ``width`` are positive. For example,
                ``cropped_photo(23.2, 23.2)`` should return ``"Cropped Photo"``.
                ~~~~
                def cropped_photo(height, width):
                    # write code here

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(cropped_photo(30, 80),"The photo needs to be cropped.","cropped_photo(30, 80)")
                        self.assertEqual(cropped_photo(50, 50),"Cropped Photo","cropped_photo(50, 50)")
                        self.assertEqual(cropped_photo(50.5, 50),"The photo needs to be cropped.","cropped_photo(50.5, 50)")
                        self.assertEqual(cropped_photo(23.2, 23.2),"Cropped Photo","cropped_photo(23.2, 23.2)")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_conditional_writecode1a
                :optional:

                Write a function called ``cropped_photo`` that takes the ``height`` and ``width`` of a photo.
                If the ``height`` and ``width`` are equal, then the function returns ``"Cropped Photo"``. Otherwise,
                it returns ``"The photo needs to be cropped."`` Assume ``height`` and ``width`` are positive. For example,
                ``cropped_photo(23.2, 23.2)`` should return ``"Cropped Photo"``.
                ~~~~
                def cropped_photo(height, width):
                    if height == width:
                        return "Cropped Photo"
                    else:
                        return "The photo needs to be cropped."


#.

    .. activecode:: funct_conditional_writecode2q
        :autograde: unittest

        Write a function called ``bonus`` that takes two parameters, ``years`` and ``quality``.
        If ``years`` is more than 5, then the person gets a bonus.
        The person also gets a bonus if their ``quality`` of work was more than 90.
        They can also get a bonus if they worked for at least 3 ``years`` and had ``quality`` more than 80.
        If the person is eligible for a bonus, return ``"Eligible for Bonus"``. Otherwise, return ``"Ineligible for Bonus"``.
        For example, ``bonus(3, 81)`` should return ``"Eligible for Bonus"``.
        ~~~~
        def bonus(years, quality):
            # write code here

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(bonus(7, 40),"Eligible for Bonus","bonus(7, 40)")
                self.assertEqual(bonus(5, 40),"Ineligible for Bonus","bonus(5, 40)")
                self.assertEqual(bonus(2, 98),"Eligible for Bonus","bonus(2, 98)")
                self.assertEqual(bonus(2, 90),"Ineligible for Bonus","bonus(2, 90)")
                self.assertEqual(bonus(3, 81),"Eligible for Bonus","bonus(3, 81)")
                self.assertEqual(bonus(4, 81),"Eligible for Bonus","bonus(4, 81)")
                self.assertEqual(bonus(3, 67),"Ineligible for Bonus","bonus(3, 67)")
                self.assertEqual(bonus(3, 80),"Ineligible for Bonus","bonus(3, 80)")
                self.assertEqual(bonus(2, 88),"Ineligible for Bonus","bonus(2, 88)")

        myTests().main()

#.

    .. tabbed:: funct_conditional_writecode3

        .. tab:: Question

            .. activecode:: funct_conditional_writecode3q
                :autograde: unittest

                Write a function called ``move_elevator`` that takes two parameters, ``current_floor`` and ``next_floor``. If the elevator moves
                to a floor above, then it should return ``"Up"``. Otherwise, it should return ``"Down"``. Also, if ``next_floor`` is the same as ``current_floor``, it should return 0.
                Assume there are no 0 or negative floors. For example, ``move_elevator(5, 8)`` should return ``"Up"``.
                ~~~~
                def move_elevator(current_floor, next_floor):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(move_elevator(5, 8),"Up","move_elevator(5, 8)")
                        self.assertEqual(move_elevator(2, 2),0,"move_elevator(2, 2)")
                        self.assertEqual(move_elevator(9, 3),"Down","move_elevator(9, 3)")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_conditional_writecode3a
                :optional:

                Write a function called ``move_elevator`` that takes two parameters, ``current_floor`` and ``next_floor``. If the elevator moves
                to a floor above, then it should return ``"Up"``. Otherwise, it should return ``"Down"``. Also, if ``next_floor`` is the same as ``current_floor``, it should return 0.
                Assume there are no 0 or negative floors. For example, ``move_elevator(5, 8)`` should return ``"Up"``.
                ~~~~
                def move_elevator(current_floor, next_floor):
                    if next_floor < current_floor:
                        return "Down"
                    elif next_floor > current_floor:
                        return "Up"
                    else:
                        return 0


#.

    .. activecode:: funct_conditional_writecode4q
        :autograde: unittest

        Write a function called ``lunch_break`` that takes a parameter ``class_standing`` and determines how long a lunch break will be based on
        the student's class standing. If a person is a 'Freshman', return ``40``. If a person is a 'Sophomore', return ``30``.
        If a person is a 'Junior', return ``20``. If a person is a 'Senior', return ``15``. If a person is none of these, return ``0``.
        For example, ``lunch_break('Alumni')`` should return ``0``.
        ~~~~
        def lunch_break(class_standing):
            # write code here

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(lunch_break('Freshman'),40,"lunch_break('Freshman')")
                self.assertEqual(lunch_break('Sophomore'),30,"lunch_break('Sophomore')")
                self.assertEqual(lunch_break('Junior'),20,"lunch_break('Junior')")
                self.assertEqual(lunch_break('Senior'),15,"lunch_break('Senior')")
                self.assertEqual(lunch_break('Alumni'),0,"lunch_break('Alumni')")

        myTests().main()

#.

    .. tabbed:: funct_conditional_writecode5

        .. tab:: Question

            .. activecode:: funct_conditional_writecode5q
                :autograde: unittest

                Write a function called ``pay_rent`` that takes in one parameter,
                ``units``. If ``units`` is less than 200, return ``"$100"``.
                If ``units`` is less than 500 and greater than or equal to 200, return ``"$200"``. Otherwise, return ``"$300"``.
                For example, ``pay_rent(175)`` should return ``"$100"``.
                ~~~~
                def pay_rent(units):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(pay_rent(175), "$100","pay_rent(175)")
                        self.assertEqual(pay_rent(199), "$100","pay_rent(199)")
                        self.assertEqual(pay_rent(200), "$200","pay_rent(200)")
                        self.assertEqual(pay_rent(201), "$200","pay_rent(201)")
                        self.assertEqual(pay_rent(373), "$200","pay_rent(373)")
                        self.assertEqual(pay_rent(499), "$200","pay_rent(499)")
                        self.assertEqual(pay_rent(500), "$300","pay_rent(500)")
                        self.assertEqual(pay_rent(501), "$300","pay_rent(501)")
                        self.assertEqual(pay_rent(1007), "$300","pay_rent(1007)")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_conditional_writecode5a
                :optional:

                Write a function called ``pay_rent`` that takes in one parameter,
                ``units``. If ``units`` is less than 200, return ``"$100"``.
                If ``units`` is less than 500 and greater than or equal to 200, return ``"$200"``. Otherwise, return ``"$300"``.
                For example, ``pay_rent(175)`` should return ``"$100"``.
                ~~~~
                def pay_rent(units):
                    if units < 200:
                        return "$100"
                    elif units < 500:
                        return "$200"
                    else:
                        return "$300"


#.

    .. activecode:: funct_conditional_writecode6q
        :autograde: unittest

        Write a function called ``play_weather`` that takes the string ``weather`` as a parameter and
        returns if one should play or not. If the ``weather`` is 'sunny' or 'cloudy', then the function
        should return ``"The person should play"``. If the ``weather`` is 'rainy', 'windy' or 'snowy',
        then the function should return ``"The person should not play"``. If the ``weather`` is none of these, the
        function should return ``"It is not safe to go outside"``. For example, ``play_weather('sunny')`` should return ``"The person should play"``.
        ~~~~
        def play_weather(weather):
            # write code here

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(play_weather('sunny'), "The person should play", "play_weather('sunny')")
                self.assertEqual(play_weather('cloudy'), "The person should play", "play_weather('cloudy')")
                self.assertEqual(play_weather('rainy'), "The person should not play", "play_weather('rainy')")
                self.assertEqual(play_weather('windy'), "The person should not play", "play_weather('windy')")
                self.assertEqual(play_weather('snowy'), "The person should not play", "play_weather('snowy')")
                self.assertEqual(play_weather('stormy'), "It is not safe to go outside", "play_weather('stormy')")

        myTests().main()
