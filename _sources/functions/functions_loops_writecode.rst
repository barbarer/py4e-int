Functions and Loops Write Code Questions
----------------------------------------
#.
    .. tabbed:: funct_loops_writecode1

        .. tab:: Question

            .. activecode:: funct_loops_writecode1q
                :autograde: unittest

                Write a function called ``list_starts_with_a`` that takes in ``lst`` as a parameter and returns a
                new list with the words from ``lst`` that start with "a". For example, ``list_starts_with_a(["alphabet", "apple", "banana", "coding", "amazing"])``
                would return ``["alphabet", "apple", "amazing"]``.
                ~~~~
                def list_starts_with_a(lst):
                    # write code here

                print(list_starts_with_a(["alphabet", "apple", "banana", "coding", "amazing"]))

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(list_starts_with_a(['alphabet', 'apple', 'banana', 'coding', 'amazing']),['alphabet', 'apple', 'amazing'],"list_starts_with_a(['alphabet', 'apple', 'banana', 'coding', 'amazing'])")
                        self.assertEqual(list_starts_with_a(['alphabet', 'apple', 'amazing']),['alphabet', 'apple', 'amazing'],"list_starts_with_a(['alphabet', 'apple', 'amazing'])")
                        self.assertEqual(list_starts_with_a(['banana', 'coding']),[],"list_starts_with_a(['banana', 'coding'])")
                        self.assertEqual(list_starts_with_a([]),[],"list_starts_with_a([])")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_loops_writecode1a
                :optional:

                Write a function called ``list_starts_with_a`` that takes in ``lst`` as a parameter and returns a
                new list with the words from ``lst`` that start with "a". For example, ``list_starts_with_a(["alphabet", "apple", "banana", "coding", "amazing"])``
                would return ``["alphabet", "apple", "amazing"]``.
                ~~~~
                def list_starts_with_a(lst):
                    list_a = []
                    for word in lst:
                        if word.startswith('a'):
                            list_a.append(word)
                    return list_a

                print(list_starts_with_a(["alphabet", "apple", "banana", "coding", "amazing"]))

#.
    .. activecode:: funct_loops_writecode2q
        :autograde: unittest

        Write a function called ``sentence_without_vowels`` that takes in ``string`` as a parameter and returns a new
        string that consists of only characters that are not vowels. For example, ``sentence_without_vowels('apple')`` would return ``"ppl"``.
        ~~~~
        def sentence_without_vowels(string):
            # write code here

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(sentence_without_vowels('apple'),"ppl","sentence_without_vowels('apple')")
                self.assertEqual(sentence_without_vowels('soup'),"sp","sentence_without_vowels('soup')")
                self.assertEqual(sentence_without_vowels('coding'),"cdng","sentence_without_vowels('coding')")
                self.assertEqual(sentence_without_vowels('Hi!'),"H!","sentence_without_vowels('Hi!')")
                self.assertEqual(sentence_without_vowels(' ')," ","sentence_without_vowels(' ')")

        myTests().main()


#.
    .. tabbed:: funct_loops_writecode3

        .. tab:: Question

            .. activecode:: funct_loops_writecode3q
                :autograde: unittest

                Write a function called ``draw_square`` that takes in ``num`` as a parameter and returns a
                string that consists of a square made of "*" with the dimensions ``num`` times ``num``. Note:
                ignore values that are less than or equal to zero. For example, ``draw_square(4)`` would return
                ``"****\n****\n****\n****"``.
                ~~~~
                def draw_square(num):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(draw_square(4),"****\n****\n****\n****","draw_square(4)")
                        self.assertEqual(draw_square(1),"*","draw_square(1)")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_loops_writecode3a
                :optional:

                Write a function called ``draw_square`` that takes in ``num`` as a parameter and returns a
                string that consists of a square made of "*" with the dimensions ``num`` times ``num``. Note:
                ignore values that are less than or equal to zero. For example, ``draw_square(4)`` would return
                ``"****\n****\n****\n****"``.
                ~~~~
                def draw_square(num):
                    string1 = ""
                    for i in range(num):
                        if i < (num - 1):
                            string1 += "*" * num + "\n"
                        else:
                            string1 += "*" * num
                    return string1

                print(draw_square(4))


#.
    .. activecode:: funct_loops_writecode4q
        :autograde: unittest

        Write a function called ``check_prime_num`` that takes in ``num`` as a parameter and returns ``True`` if ``num`` is a prime number
        and ``False`` otherwise. For the purposes of this question, there is no need to test for values of ``num`` that are less than two.
        For example, ``check_prime_num(5)`` should return ``True``.
        ~~~~
        def check_prime_num(num):
            # write code here

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(check_prime_num(4),False,"check_prime_num(4)")
                self.assertEqual(check_prime_num(5),True,"check_prime_num(5)")
                self.assertEqual(check_prime_num(100),False,"check_prime_num(100)")
                self.assertEqual(check_prime_num(89),True,"check_prime_num(89)")


        myTests().main()


#.
   .. tabbed:: funct_loops_writecode5

        .. tab:: Question

            .. activecode:: funct_loops_writecode5q
                :autograde: unittest

                Write a function called ``factorial`` that takes in ``num`` as a parameter and returns the factorial value.
                Ignore checking numbers that are less than 1. For example, ``factorial(5)`` would return ``120``.
                ~~~~
                def factorial(num):
                    # write code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(factorial(5), 120, "factorial(5)")
                        self.assertEqual(factorial(1), 1, "factorial(1)")
                        self.assertEqual(factorial(4), 24, "factorial(4)")
                        self.assertEqual(factorial(12), 479001600, "factorial(12)")

                myTests().main()


        .. tab:: Answer

            .. activecode:: funct_loops_writecode5a
                :optional:

                Write a function called ``factorial`` that takes in ``num`` as a parameter and returns the factorial value.
                Ignore checking numbers that are less than 1. For example, ``factorial(5)`` would return ``120``.
                ~~~~
                def factorial(num):
                    total = num
                    while num > 1:
                        num -= 1
                        total *= num
                    return total
