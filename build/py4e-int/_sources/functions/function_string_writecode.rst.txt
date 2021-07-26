Function and String Write Code Questions
-----------------------------------------
#.
    .. tabbed:: funct-strings-writecode1

        .. tab:: Question

            .. activecode:: funct-strings-writecode1q
                :practice: T
                :autograde: unittest

                Create a function called ``starts_with_lowercase_a`` that takes in ``string`` as a parameter and
                returns ``True`` if the ``string`` starts with a lowercase a and ``False`` otherwise. For example,
                ``starts_with_lowercase_a('apple')`` should return ``True``.
                ~~~~

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(starts_with_lowercase_a('apple'),True,"Tested starts_with_lowercase_a('apple')")
                        self.assertEqual(starts_with_lowercase_a('cba'),False,"Tested starts_with_lowercase_a('cba')")
                        self.assertEqual(starts_with_lowercase_a('Apple'),False,"Tested starts_with_lowercase_a('Apple')")
                        self.assertEqual(starts_with_lowercase_a('basketball'),False,"Tested starts_with_lowercase_a('basketball')")
                        self.assertEqual(starts_with_lowercase_a('1abc'),False,"Tested starts_with_lowercase_a('1abc')")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct-strings-writecode1a
                :optional:

                def starts_with_lowercase_a(string):
                    return string.startswith('a')

                print(starts_with_lowercase_a('apple'))


#.
    .. activecode:: funct-strings-writecode2
        :practice: T
        :autograde: unittest

        Create a function called ``side_length_square`` that takes in ``area`` as a parameter and
        returns ``A square with an area of (area) square feet has a side length of (side length) feet.``. The side length is
        the square root of the area.  Use ``math.sqrt(num)`` to get the square root of ``num``.
        For example, ``side_length_square(36)`` should return ``A square with an area of 36 square feet has a side length of 6.0 feet.``.
        ~~~~
        import math

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(side_length_square(36),"A square with an area of 36 square feet has a side length of 6.0 feet.","Tested side_length_square(36)")
                self.assertEqual(side_length_square(101),"A square with an area of 101 square feet has a side length of 10.04987562112089 feet.","Tested side_length_square(101)")
                self.assertEqual(side_length_square(0),"A square with an area of 0 square feet has a side length of 0.0 feet.","Tested side_length_square(0)")

        myTests().main()

#.
    .. tabbed:: funct-strings-writecode3

        .. tab:: Question

            .. activecode:: funct-strings-writecode3q
                :practice: T
                :autograde: unittest

                Create a function called ``join_sentences_with_semicolon`` that takes in ``sentence1`` and ``sentence2`` as parameters and
                returns both sentences joined by a semicolon with the correct grammar. This means that ``sentence1`` shouldn't have a terminal punctuation mark,
                there should be a space after the semicolon, and ``sentence2`` should start with a lowercase letter.
                For example, ``join_sentences_with_semicolon('The sun is bright.', "Let's go outside.")`` should return ``"The sun is bright; let's go outside."``.
                (Note: Assume both ``sentence1`` and ``sentence2`` are simple and complete sentences with proper grammar.)
                ~~~~

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(join_sentences_with_semicolon('The sun is bright.', "Let's go outside."),"The sun is bright; let's go outside.","Tested join_sentences_with_semicolon('The sun is bright.', 'Let's go outside.')")
                        self.assertEqual(join_sentences_with_semicolon('Mary runs fast!', "It's amazing!"),"Mary runs fast; it's amazing!","Tested join_sentences_with_semicolon('Mary runs fast!', 'It's amazing!')")
                        self.assertEqual(join_sentences_with_semicolon('Dinner was great.', "How was yours?"),"Dinner was great; how was yours?","Tested join_sentences_with_semicolon('Dinner was great.', 'How was yours?')")

                myTests().main()

        .. tab:: Answer

            .. activecode:: funct-strings-writecode3a
                :optional:

                def join_sentences_with_semicolon(sentence1, sentence2):
                    return sentence1[:-1] + '; ' + sentence2[0].lower() + sentence2[1:]

                print(join_sentences_with_semicolon('The sun is bright.', "Let's go outside."))

#.
    .. activecode:: funct-strings-writecode4
        :practice: T
        :autograde: unittest


        Create a function called ``scramble_and_change`` that takes in ``string`` as a parameter and
        returns a new string with the first two characters uppercased, the last two characters lowercased,
        and the remaining characters in the middle moved to the front of the string with the first letter capitalized.
        For example, ``scramble_and_change('hello')`` should return ``"LHElo"``, and ``scramble_and_change('pumpkin')`` should return ``"MpkPUin"``.
        (Note: Don't worry about accounting for strings that are 4 characters or less.)
        ~~~~

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(scramble_and_change('hello'),"LHElo","Tested scramble_and_change('hello')")
                self.assertEqual(scramble_and_change('pumpkin'),"MpkPUin","Tested scramble_and_change('pumpkin')")
                self.assertEqual(scramble_and_change('october_november'),"Tober_novembOCer","Tested scramble_and_change('october_november')")
                self.assertEqual(scramble_and_change('hellos'),"LlHEos","Tested scramble_and_change('hellos')")
                self.assertEqual(scramble_and_change('OCTOBER!'),"TobeOCr!","Tested scramble_and_change('OCTOBER!')")

        myTests().main()



#.
    .. tabbed:: funct-strings-writecode5

        .. tab:: Question

            .. activecode:: funct-strings-writecode5q
                :practice: T
                :autograde: unittest

                Create a function called ``find_and_remove_first_a`` that takes in ``string`` as a parameter and
                returns a new string without the first 'a'. For example, ``find_and_remove_first_a('australia')`` should return ``"ustralia"``.
                (Note: Don't worry about accounting for strings that don't have an 'a'.)
                ~~~~

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(find_and_remove_first_a('australia'),"ustralia","Tests find_and_remove_first_a('australia')")
                        self.assertEqual(find_and_remove_first_a('praying'),"prying","Tests find_and_remove_first_a('praying')")
                        self.assertEqual(find_and_remove_first_a('apple'),"pple","Tests find_and_remove_first_a('apple')")
                        self.assertEqual(find_and_remove_first_a('passing'),"pssing","Tests find_and_remove_first_a('passing')")
                        self.assertEqual(find_and_remove_first_a('passing'),"pssing","Tests find_and_remove_first_a('passing')")
                        self.assertEqual(find_and_remove_first_a('bazaar'),"bzaar","Tests find_and_remove_first_a('bazaar')")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct-strings-writecode5a
                :optional:

                def find_and_remove_first_a(string):
                    capture_a = string.find('a')
                    return string[:capture_a] + string[capture_a + 1:]

                print(find_and_remove_first_a('australia'))
