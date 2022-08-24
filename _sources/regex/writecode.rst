Write Code Questions
----------------------

Some of the questions use the data file mbox

#.
    .. tabbed:: regex_writecode1

        .. tab:: Question

            .. activecode:: regex_writecode1q
                :autograde: unittest

                Modify the ### to find sequences with one uppercase letter
                followed by an underscore followed by one or more lowercase letters.
                ~~~~
                ### re
                def text_match(text):
                    pattern = '[###]_[###]+'
                    if re.search(###,  text):
                            return('Found a match!')
                    ###:
                            return('Not matched!')

                print(text_match("aab_cbbbc"))
                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(text_match("aab_cbbc"), "Not matched!", 'text_match("aab_cbbc")')
                        self.assertEqual(text_match("aaA_bbbc"), "Found a match!", 'text_match("aaA_bbbc")')
                        self.assertEqual(text_match("A_abbbc"), "Found a match!", 'text_match("A_abbbc")')
                        self.assertEqual(text_match("word_A"), "Not matched!", 'text_match("word_A")')
                        self.assertEqual(text_match("myZ_oo"), "Found a match!", 'text_match("myZ_oo")')
                MyTests().main()

        .. tab:: Answer

            .. activecode:: regex_writecode1a
                :optional:
                :autograde: unittest

                Modify the ### to find sequences with one uppercase letter
                followed by an underscore followed by one or more lowercase letters.
                ~~~~
                # Line 1: import re
                # Line 3: [A-Z] matches uppercase letter characters and [a-z] matches lowercase letter characters
                # Line 4: Use the pattern variable to search the text
                # Line 6: Include the else statement
                import re
                def text_match(text):
                    pattern = '[A-Z]_[a-z]+'
                    if re.search(pattern,  text):
                            return('Found a match!')
                    else:
                            return('Not matched!')

                print(text_match("aab_cbbbc"))
                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(text_match("aab_cbbc"), "Not matched!", 'text_match("aab_cbbc")')
                        self.assertEqual(text_match("aaA_bbbc"), "Found a match!", 'text_match("aaA_bbbc")')
                        self.assertEqual(text_match("A_abbbc"), "Found a match!", 'text_match("A_abbbc")')
                        self.assertEqual(text_match("word_A"), "Not matched!", 'text_match("word_A")')
                        self.assertEqual(text_match("myZ_oo"), "Found a match!", 'text_match("myZ_oo")')
                MyTests().main()

#.
    .. activecode:: regex_writecode2
        :autograde: unittest

        Complete the code below to check if a string begins with a word character. If it does,
        return "Found a match!", if not return "Not matched!" Replace the ### with your code.
        ~~~~
        import ###
        def text_match(text):
            pattern = ###    # Your regex pattern here
            if re.search(###):
                return(###)
            else:
                return(###)
        print(text_match("The quick brown fox jumps over the lazy dog."))
        ====
        from unittest.gui import TestCaseGui

        class MyTests(TestCaseGui):
            def testOne(self):
                self.assertEqual(text_match("The quick fox jumps."), "Found a match!", 'text_match("The quick fox jumps.")')
                self.assertEqual(text_match("   The quick fox jumps."), "Not matched!", 'text_match("   The quick fox jumps.")')
                self.assertEqual(text_match("+ years ago"), "Not matched!", 'text_match("+ years ago")')
                self.assertEqual(text_match("Nine years ago"), "Found a match!", 'text_match("Nine years ago")')
                self.assertEqual(text_match("#run"), "Not matched!", 'text_match("#run")')


        MyTests().main()

#.
    .. tabbed:: regex_writecode3

        .. tab:: Question

            .. activecode:: regex_writecode3q
                :autograde: unittest

                Define the function "match_four" that takes a string and uses regex to return True if the
                string starts with 4 followed by zero to many other digits and False if it does not.
                ~~~~
                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(match_four("468653892"), True, 'match_four("468653892")')
                        self.assertEqual(match_four("648653892"), False, 'match_four("648653892")')
                        self.assertEqual(match_four("41"), True, 'match_four("41")')
                        self.assertEqual(match_four("4"), True, 'match_four("4")')
                        self.assertEqual(match_four("786328042"), False, 'match_four("786328042")')
                MyTests().main()

        .. tab:: Answer

            .. activecode:: regex_writecode3a
                :optional:
                :autograde: unittest


                Define the function "match_four" that takes a string and uses regex to return True if the
                string starts with 4 followed by zero to many other digits and False if it does not.
                ~~~~
                # First import the regex library (re), then define the match_four function.
                # Within the function, create the regex pattern to match if the string starts with '4'
                # Use an if statement to check for a match in the string.
                # Return true if the match is made, return false if not.
                import re
                def match_four(string):
                    pattern = "^4\d*"
                    if re.search(pattern,  string):
                        return True
                    else:
                        return False
                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(match_four("468653892"), True, 'match_four("468653892")')
                        self.assertEqual(match_four("648653892"), False, 'match_four("648653892")')
                        self.assertEqual(match_four("41"), True, 'match_four("41")')
                        self.assertEqual(match_four("4"), True, 'match_four("4")')
                        self.assertEqual(match_four("786328042"), False, 'match_four("786328042")')
                MyTests().main()

#.
    .. activecode:: regex_writecode4
        :autograde: unittest

        Define the function "match_cat" that uses regex to return True if a
        string matches cat, Cat, CAT, cAt, etc and False if it does not.
        ~~~~

        ====
        from unittest.gui import TestCaseGui

        class MyTests(TestCaseGui):
            def testOne(self):
                self.assertEqual(match_cat("cAt"), True, "Testing cAt.")
                self.assertEqual(match_cat("cat"), True, "Testing cat.")
                self.assertEqual(match_cat("Cat"), True, "Testing Cat.")
                self.assertEqual(match_cat("CAT"), True, "Testing CAT.")
                self.assertEqual(match_cat("dog"), False, "Testing dog.")
                self.assertEqual(match_cat("caT"), True, "Testing caT.")
                self.assertEqual(match_cat("Cats"), True, "Testing Cats.")
        MyTests().main()
#.
    .. tabbed:: regex_writecode5

        .. tab:: Question

            .. activecode:: regex_writecode5q
                :autograde: unittest

                Define the function ``match_z`` to match a word containing a lowercase letter ``z``.
                Return ``"Found a match!"`` if ``z`` is in the string and ``"Not matched!"`` if
                there is not a ``z``.
                ~~~~
                import re
                def match_z(string):

                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(match_z("The lazy dog."), "Found a match!", 'match_z("The lazy dog.")')
                        self.assertEqual(match_z("Python rocks!"), "Not matched!", 'match_z("Python rocks!")')
                        self.assertEqual(match_z("Zippers"), "Not matched!", 'match_z("Zippers")')
                        self.assertEqual(match_z("pez"), "Found a match!", 'match_z("pez")')
                        self.assertEqual(match_z("abc"), "Not matched!", 'match_z("abc")')

                MyTests().main()

        .. tab:: Answer

            .. activecode:: regex_writecode5a
                :optional:
                :autograde: unittest

                Define the function ``match_z`` to match a word containing a lowercase letter ``z``.
                Return ``"Found a match!"`` if ``z`` is in the string and ``"Not matched!"`` if
                there is not a ``z``.
                ~~~~
                # In the function definition, create a regex pattern to find 'z'
                # Search the string with that pattern using re.search()
                # If found, return "Found a match!"
                # Otherwise, return "Not matched!"
                import re
                def match_z(text):
                    patterns = '\w*z\w*'
                    if re.search(patterns,  text):
                        return 'Found a match!'
                    else:
                        return('Not matched!')
                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(match_z("The lazy dog."), "Found a match!", 'match_z("The lazy dog.")')
                        self.assertEqual(match_z("Python rocks!"), "Not matched!", 'match_z("Python rocks!")')
                        self.assertEqual(match_z("Zippers"), "Not matched!", 'match_z("Zippers")')
                        self.assertEqual(match_z("pez"), "Found a match!", 'match_z("pez")')
                        self.assertEqual(match_z("abc"), "Not matched!", 'match_z("abc")')

                MyTests().main()

#.
    .. activecode:: regex_writecode6
        :autograde: unittest

        Define the function matchMiddle_z to match a word containing the letter z,
        but not at the beginning or end of a word. Return "Found a match!" if z is
        in the string and "Not matched!" if there is not a z.
        ~~~~
        import re
        def matchMiddle_z(string):

        ====
        from unittest.gui import TestCaseGui

        class MyTests(TestCaseGui):
            def testOne(self):
                self.assertEqual(matchMiddle_z("Buzzing bee"), "Found a match!", 'matchMiddle_z("Buzzing bee")')
                self.assertEqual(matchMiddle_z("zippers"), "Not matched!", 'matchMiddle_z("zippers")')
                self.assertEqual(matchMiddle_z("pez"), "Not matched!", 'matchMiddle_z("pez")')
                self.assertEqual(matchMiddle_z("abc"), "Not matched!", 'matchMiddle_z("abc")')
                self.assertEqual(matchMiddle_z("buzz"), "Found a match!", 'matchMiddle_z("buzz")')

        MyTests().main()

#.
    .. tabbed:: regex_writecode7

        .. tab:: Question

            .. activecode:: regex_writecode7q
                :practice: T
                :datafile: mbox-short.txt
                :autograde: unittest

                Finish the code below to find all of the emails in "mbox-short.txt" and add them to a list and return the list.  An email starts with an alphanumeric character followed by one or more non white space characters and then "@" followed by one or more non white space characters with one alphabetic character at the end.
                ~~~~
                import re
                hand = open('mbox-short.txt')
                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(email_list, [['gopal.ramasammycook@gmail.com'], ['louis@media.berkeley.edu'], ['cwen@iupui.edu'], ['antranig@caret.cam.ac.uk'], ['rjlowe@iupui.edu'], ['gsilver@umich.edu'], ['david.horwitz@uct.ac.za'], ['wagnermr@iupui.edu'], ['zqian@umich.edu'], ['stephen.marquard@uct.ac.za'], ['ray@media.berkeley.edu']], "Testing that all the emails were matched.")
                MyTests().main()

        .. tab:: Answer

            .. activecode:: regex_writecode7a
                :datafile: mbox-short.txt
                :optional:
                :autograde: unittest

                Finish the code below to find all of the emails in "mbox-short.txt" and add them to a list and return the list.  An email starts with an alphanumeric character followed by one or more non white space characters and then "@" followed by one or more non white space characters with one alphabetic character at the end.
                ~~~~
                # First import regex (re) and create a handle for the file.
                # Initialize a list to hold the emails.
                # Iterate through each line in the file, using rstrip() to remove whitespace and findall() with a regex expression to find the emails.
                # Add each email to the list, individually
                # Print the email list after each loop has completed.
                import re
                hand = open('mbox-short.txt')
                email_list = []
                for line in hand:
                    line = line.rstrip()
                    x = re.findall('[a-zA-Z0-9]\S+@\S+[a-zA-Z]', line)
                    for email in x:
                        email_list.append(x)
                print(email_list)
                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(email_list, [['gopal.ramasammycook@gmail.com'], ['louis@media.berkeley.edu'], ['cwen@iupui.edu'], ['antranig@caret.cam.ac.uk'], ['rjlowe@iupui.edu'], ['gsilver@umich.edu'], ['david.horwitz@uct.ac.za'], ['wagnermr@iupui.edu'], ['zqian@umich.edu'], ['stephen.marquard@uct.ac.za'], ['ray@media.berkeley.edu']], "Testing that all the emails were matched.")
                MyTests().main()

#.
    .. activecode:: regex_writecode8
        :datafile: mbox-short.txt
        :autograde: unittest

        Using "mbox-short.txt", extract the email domains from each email address
        using regex and add them to the list "domains". For the email noname@umich.edu,
        this would locate the string "umich.edu".
        ~~~~
        import re
        hand = open('mbox-short.txt')
        domains = []

        ====
        from unittest.gui import TestCaseGui

        class MyTests(TestCaseGui):
            def testOne(self):
                self.assertEqual(domains, ['@gmail.com', '@media.berkeley.edu', '@iupui.edu', '@caret.cam.ac.uk', '@iupui.edu', '@umich.edu', '@uct.ac.za', '@iupui.edu', '@umich.edu', '@uct.ac.za', '@media.berkeley.edu'], "Testing that all domains were matched.")
        MyTests().main()

#.
    .. tabbed:: regex_writecode9

        .. tab:: Question

            .. activecode:: regex_writecode9q
                :practice: T
                :datafile: mbox-short.txt
                :autograde: unittest

                Using "mbox-short.txt", extract the number next to each email (the
                amount of emails each person has sent) using a regex equation, and
                calculate the total amount of emails sent. Save this to the variable
                'total_emails'. Use the () character to capture and return the number.
                ~~~~
                hand = open('mbox-short.txt')
                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(total_emails, 27, "Testing that the average was calculated properly.")

                MyTests().main()

        .. tab:: Answer

            .. activecode:: regex_writecode9a
                :datafile: mbox-short.txt
                :optional:
                :autograde: unittest

                Using "mbox-short.txt", extract the number next to each email (the
                amount of emails each person has sent) using a regex equation, and
                calculate the total amount of emails sent. Save this to the variable
                'total_emails'. Use the () character to capture and return the number.
                ~~~~
                # Import regex (re), create a variable for the total number of emails, and create a handle to access the file.
                # Iterate through lines in the file, remove trailing whitespace with rstrip(), and create a regex expression to use with findall() to return a list of email matches.
                # Finally, increment the total_emails variable for each email in the list
                # Print the variable after each loop has completed.
                import re
                total_emails = 0
                hand = open('mbox-short.txt')
                for line in hand:
                    line = line.rstrip()
                    x = re.findall('[a-zA-Z0-9]\S+@\S+[a-zA_Z]\s?(\d)', line)
                    for item in x:
                        total_emails += int(item)
                print(total_emails)
                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(total_emails, 27, "Testing that the average was calculated properly.")

                MyTests().main()


#.
    .. activecode:: regex_writecode10
        :datafile: mbox-short.txt
        :autograde: unittest

        Using "mbox-short.txt", extract the usernames from each email address
        using regex and add them to the list "usernames". For the email noname@umich.edu,
        this would locate the string "noname".
        ~~~~

        ====
        from unittest.gui import TestCaseGui

        class MyTests(TestCaseGui):
            def testOne(self):
                self.assertEqual(usernames, ['gopal.ramasammycook', 'louis', 'cwen', 'antranig', 'rjlowe', 'gsilver', 'david.horwitz', 'wagnermr', 'zqian', 'stephen.marquard', 'ray'], "Testing that all usernames were matched.")
        MyTests().main()
