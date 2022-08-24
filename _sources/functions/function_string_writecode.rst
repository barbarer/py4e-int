Functions and Strings Write Code Questions
-------------------------------------------
#.
    .. tabbed:: funct-strings-writecode1

        .. tab:: Question

            .. activecode:: funct-strings-writecode1q
                :autograde: unittest

                Write a function called ``start_a`` that takes in ``string`` as a parameter and
                returns ``True`` if the ``string`` starts with a lowercase a and ``False`` otherwise. For example,
                ``start_a('apple')`` should return ``True``.
                ~~~~

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(start_a('apple'),True,"start_a('apple')")
                        self.assertEqual(start_a('cba'),False,"start_a('cba')")
                        self.assertEqual(start_a('Apple'),False,"start_a('Apple')")
                        self.assertEqual(start_a('basketball'),False,"start_a('basketball')")
                        self.assertEqual(start_a('1abc'),False,"start_a('1abc')")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct-strings-writecode1a
                :optional:

                Write a function called ``start_a`` that takes in ``string`` as a parameter and
                returns ``True`` if the ``string`` starts with a lowercase a and ``False`` otherwise. For example,
                ``start_a('apple')`` should return ``True``.
                ~~~~
                def start_a(string):
                    return string.startswith('a')


#.
    .. activecode:: funct-strings-writecode2
        :autograde: unittest

        Write a function called ``square_length`` that takes in ``area`` as a parameter and
        returns ``"A square with an area of (area) square feet has a side length of (side length) feet."``. The side length is
        the square root of the area.  Use ``math.sqrt(area)`` to get the square root of ``area``.
        For example, ``square_length(36)`` should return ``"A square with an area of 36 square feet has a side length of 6.0 feet."``.
        ~~~~
        import math

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(square_length(36),"A square with an area of 36 square feet has a side length of 6.0 feet.","square_length(36)")
                self.assertEqual(square_length(101),"A square with an area of 101 square feet has a side length of 10.04987562112089 feet.","square_length(101)")
                self.assertEqual(square_length(0),"A square with an area of 0 square feet has a side length of 0.0 feet.","square_length(0)")

        myTests().main()

#.
    .. tabbed:: funct-strings-writecode3

        .. tab:: Question

            .. activecode:: funct-strings-writecode3q
                :autograde: unittest

                Write a function called ``use_semicolon`` that takes in ``sentence1`` and ``sentence2`` as parameters and
                returns both sentences joined by a semicolon with the correct grammar. This means that ``sentence1`` shouldn't have a terminal punctuation mark,
                there should be a space after the semicolon, and ``sentence2`` should start with a lowercase letter.
                For example, ``use_semicolon('The sun is bright.', "Let's go outside.")`` should return ``"The sun is bright; let's go outside."``.
                (Note: Assume both ``sentence1`` and ``sentence2`` are simple and complete sentences with proper grammar.)
                ~~~~

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(use_semicolon('The sun is bright.', "Let's go outside."),"The sun is bright; let's go outside.","use_semicolon('The sun is bright.', 'Let's go outside.')")
                        self.assertEqual(use_semicolon('Mary runs fast!', "It's amazing!"),"Mary runs fast; it's amazing!","use_semicolon('Mary runs fast!', 'It's amazing!')")
                        self.assertEqual(use_semicolon('Dinner was great.', "How was yours?"),"Dinner was great; how was yours?","use_semicolon('Dinner was great.', 'How was yours?')")

                myTests().main()

        .. tab:: Answer

            .. activecode:: funct-strings-writecode3a
                :optional:

                Write a function called ``use_semicolon`` that takes in ``sentence1`` and ``sentence2`` as parameters and
                returns both sentences joined by a semicolon with the correct grammar. This means that ``sentence1`` shouldn't have a terminal punctuation mark,
                there should be a space after the semicolon, and ``sentence2`` should start with a lowercase letter.
                For example, ``use_semicolon('The sun is bright.', "Let's go outside.")`` should return ``"The sun is bright; let's go outside."``.
                (Note: Assume both ``sentence1`` and ``sentence2`` are simple and complete sentences with proper grammar.)
                ~~~~
                def use_semicolon(sentence1, sentence2):
                    return sentence1[:-1] + '; ' + sentence2[0].lower() + sentence2[1:]


#.
    .. activecode:: funct-strings-writecode4
        :autograde: unittest


        Write a function called ``change`` that takes in ``string`` as a parameter and
        returns a new string with the first two characters uppercased, the last two characters lowercased,
        and the remaining characters in the middle moved to the front of the string with the first letter capitalized.
        For example, ``change('hello')`` should return ``"LHElo"``, and ``change('pumpkin')`` should return ``"MpkPUin"``.
        (Note: Don't worry about accounting for strings that are 4 characters or less.)
        ~~~~

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(change('hello'),"LHElo","change('hello')")
                self.assertEqual(change('pumpkin'),"MpkPUin","change('pumpkin')")
                self.assertEqual(change('october_november'),"Tober_novembOCer","change('october_november')")
                self.assertEqual(change('hellos'),"LlHEos","change('hellos')")
                self.assertEqual(change('OCTOBER!'),"TobeOCr!","change('OCTOBER!')")

        myTests().main()



#.
    .. tabbed:: funct-strings-writecode5

        .. tab:: Question

            .. activecode:: funct-strings-writecode5q
                :autograde: unittest

                Write a function called ``first_a_gone`` that takes in ``string`` as a parameter and
                returns a new string without the first lowercase 'a'. For example, ``first_a_gone('australia')`` should return ``"ustralia"``.
                (Note: Don't worry about accounting for strings that don't have a lowercase 'a'.)
                ~~~~

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(first_a_gone('australia'),"ustralia","first_a_gone('australia')")
                        self.assertEqual(first_a_gone('Australia'),"Austrlia","first_a_gone('Australia')")
                        self.assertEqual(first_a_gone('praying'),"prying","first_a_gone('praying')")
                        self.assertEqual(first_a_gone('apple'),"pple","first_a_gone('apple')")
                        self.assertEqual(first_a_gone('passing'),"pssing","first_a_gone('passing')")
                        self.assertEqual(first_a_gone('passing'),"pssing","first_a_gone('passing')")
                        self.assertEqual(first_a_gone('bazaar'),"bzaar","first_a_gone('bazaar')")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct-strings-writecode5a
                :optional:

                Write a function called ``first_a_gone`` that takes in ``string`` as a parameter and
                returns a new string without the first lowercase 'a'. For example, ``first_a_gone('australia')`` should return ``"ustralia"``.
                (Note: Don't worry about accounting for strings that don't have a lowercase 'a'.)
                ~~~~
                def first_a_gone(string):
                    capture_a = string.find('a')
                    return string[:capture_a] + string[capture_a + 1:]
