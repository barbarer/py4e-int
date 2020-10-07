Write Code Questions
----------------------
#.
    .. tabbed:: regex_writecode1

        .. tab:: Question

            Complete the code at the ### to find sequences of one uppercase letter
            followed by lowercase letters.

            .. activecode:: regex_writecode1q

                ### re
                def text_match(text):
                    patterns = '[###]_[###]+'
                    if re.search(###,  text):
                            return('Found a match!')
                    ###:
                            return('Not matched!')

                print(text_match("aab_cbbbc"))
                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(text_match("aab_cbbc"), "Not matched!", "Testing without pattern.")
                        self.assertEqual(text_match("aaA_bbbc"), "Found a match!", "Testing with pattern in middle.")
                        self.assertEqual(text_match("A_abbbc"), "Found a match!", "Testing with pattern at start.")
                MyTests().main()

        .. tab:: Answer

            .. activecode:: regex_writecode1a
                :optional:

                Line 1: import regex
                Line 3: [A-Z] matches uppercase letter characters and [a-z] matches lowercase letter characters
                Line 4: Use the patterns variable to search the text
                Line 6: Include the else statement
                ~~~~
                import re
                def text_match(text):
                    patterns = '[A-Z]_[a-z]+'
                    if re.search(patterns,  text):
                            return('Found a match!')
                    else:
                            return('Not matched!')

                print(text_match("aab_cbbbc"))

#.
    .. activecode:: regex_writecode2

        Complete the code below to check if a string begins with a word (non space characters). If it does,
        return "Found a match!", if not return "Not matched!" Replace the ### with your code.
        ~~~~
        import ###
        def text_match(text):
            patterns = ### Your regex pattern here
            if re.search(###):
                return(###)
            else:
                return(###)
        print(text_match("The quick brown fox jumps over the lazy dog."))
        ====
        from unittest.gui import TestCaseGui

        class MyTests(TestCaseGui):
            def testOne(self):
                self.assertEqual(text_match("The quick brown fox jumps over the lazy dog."), "Found a match!", "Testing a string that starts with a word.")
                self.assertEqual(text_match("   The quick brown fox jumps over the lazy dog."), "Not matched", "Testing a string that does not start with a word.")

        MyTests().main()

#.
    .. tabbed:: regex_writecode3

        .. tab:: Question

            Define the function "match_four" that uses regex to return True if a
            string of numbers starts with 4 and False if it does not.

            .. activecode:: regex_writecode3q

                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(match_four("468653892"), True, "Testing a string that starts with 4.")
                        self.assertEqual(match_four("786328042"), False, "Testing a string that does not start with 4.")
                MyTests().main()

        .. tab:: Answer

            .. activecode:: regex_writecode3a
                :optional:

                First import regex library, then define the match_four function.
                Within the function, create the regex pattern to match '4' and use
                an if statement to check for a match in the string. Return true if
                the match is made, return false if not.
                ~~~~
                import re
                def match_four(string):
                    pattern = "^4.+"
                    if re.search(pattern,  string):
                        return True
                    else:
                        return False

#.
    .. activecode:: regex_writecode4

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
                self.assertEqual(match_cat("caT"), False, "Testing caT.")
                self.assertEqual(match_cat("Cats"), False, "Testing Cats.")
        MyTests().main()
#.
    .. tabbed:: regex_writecode5

        .. tab:: Question

            Define the function match_z to match a word containing the letter z.
            Return "Found a match!" if z is in the string and "Not matched!" if
            there is not a z.

            .. activecode:: regex_writecode5q

                import re
                def match_z(string):

                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(match_z("The quick brown fox jumps over the lazy dog."), "Found a match!", "Testing string with z.")
                        self.assertEqual(match_z("Python rocks!"), "Not matched!", "Testing string without z.")

                MyTests().main()

        .. tab:: Answer

            .. activecode:: regex_writecode5a
                :optional:

                In the function definition, create a regex pattern to find 'z' and
                search the string with that pattern using re.search(). If found,
                return "Found a match!", return "Not matched!" if not.
                ~~~~
                import re
                def match_z(text):
                    patterns = '\w*z.\w*'
                    if re.search(patterns,  text):
                        return 'Found a match!'
                    else:
                        return('Not matched!')

#.
    .. activecode:: regex_writecode6

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
                self.assertEqual(matchMiddle_z("Buzzing bee"), "Found a match!", "Testing string with z in the middle.")
                self.assertEqual(matchMiddle_z("zippers"), "Not matched!", "Testing string with z at the beginning.")
                self.assertEqual(matchMiddle_z("pez"), "Not matched!", "Testing string with z at the end.")

        MyTests().main()

The last four questions are associated with the following text file.

.. reveal:: mbox-short-txt-file1
   :showtitle: Show
   :hidetitle: Hide

   .. code-block::

      gopal.ramasammycook@gmail.com 1
      louis@media.berkeley.edu 3
      cwen@iupui.edu 5
      antranig@caret.cam.ac.uk 1
      rjlowe@iupui.edu 2
      gsilver@umich.edu 3
      david.horwitz@uct.ac.za 4
      wagnermr@iupui.edu 1
      zqian@umich.edu 4
      stephen.marquard@uct.ac.za 2
      ray@media.berkeley.edu 1

#.
    .. tabbed:: regex_writecode7

        .. tab:: Question

            Use a regex equation to match all the emails in mbox-short.txt4. Append all of
            these emails to the list 'email_list'.

            .. datafile:: mbox-short.txt4
                :fromfile: mbox-short.txt
                :hide:

            .. activecode:: regex_writecode7q
                :practice: T
                :available_files: mbox-short.txt

                hand = open('mbox-short.txt4')
                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(email_list, [['gopal.ramasammycook@gmail.com'], ['louis@media.berkeley.edu'], ['cwen@iupui.edu'], ['antranig@caret.cam.ac.uk'], ['rjlowe@iupui.edu'], ['gsilver@umich.edu'], ['david.horwitz@uct.ac.za'], ['wagnermr@iupui.edu'], ['zqian@umich.edu'], ['stephen.marquard@uct.ac.za'], ['ray@media.berkeley.edu']], "Testing that all the emails were matched.")
                MyTests().main()

        .. tab:: Answer

            .. activecode:: regex_writecode7a
                :available_files: mbox-short.txt
                :optional:

                First import regex and create a handle for the file. Then initialize a list to hold the emails.
                Iterate through each line in the file, using rstrip() to remove whitespace and findall()
                with a regex expression to find the emails. Add each email to the list, individually, then
                print the email list after each loop has completed.
                ~~~~
                import re
                hand = open('mbox-short.txt4')
                email_list = []
                for line in hand:
                    line = line.rstrip()
                    x = re.findall('[a-zA-Z0-9]\S+@\S+[a-zA-Z]', line)
                    for email in x:
                        email_list.append(x)
                print(email_list)

#.
    .. activecode:: regex_writecode8
        :available_files: mbox-short.txt

        Using the same datafile, extract the email domains from each email address
        using regex and add them to the list "domains". For the email noname@umich.edu,
        this would locate the string "umich.edu".
        ~~~~
        import re
        hand = open('mbox-short.txt4')
        domains = []

        ====
        from unittest.gui import TestCaseGui

        class MyTests(TestCaseGui):
            def testOne(self):
                self.assertEqual(domains, [['@gmail.com'], ['@media.berkeley.edu'], ['@iupui.edu'], ['@caret.cam.ac.uk'], ['@iupui.edu'], ['@umich.edu'], ['@uct.ac.za'], ['@iupui.edu'], ['@umich.edu'], ['@uct.ac.za'], ['@media.berkeley.edu']], "Testing that all domains were matched.")
        MyTests().main()

#.
    .. tabbed:: regex_writecode9

        .. tab:: Question

            Using the same datafile, extract the number next to each email (the
            amount of emails each person has sent) using a regex equation, and
            calculate the total amount of emails sent. Save this to the variable
            'total_emails'. Use the () character to capture and return the number.

            .. datafile:: mbox-short.txt5
                :fromfile: mbox-short.txt
                :hide:

            .. activecode:: regex_writecode9q
                :practice: T
                :available_files: mbox-short.txt

                hand = open('mbox-short.txt5')
                ====
                from unittest.gui import TestCaseGui

                class MyTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(total_emails, 27, "Testing that the average was calculated properly.")

                MyTests().main()

        .. tab:: Answer

            .. activecode:: regex_writecode9a
                :available_files: mbox-short.txt
                :optional:

                First, import regex, create variable for number of emails, and create a handle to access the file.
                Then, iterate through lines in the file, remove trailing whitespace with rstrip(), and create a
                regex expression to use with findall() to return a list of email matches. Finally, increment the
                total_emails variable for each email in the list and print the variable after each loop has completed.
                ~~~~
                import re
                total_emails = 0
                hand = open('mbox-short.txt5')
                for line in hand:
                    line = line.rstrip()
                    x = re.findall('[a-zA-Z0-9]\S+@\S+[a-zA_Z]\s?(\d)', line)
                    for item in x:
                        total_emails += int(item)
                print(total_emails)

#.
    .. activecode:: regex_writecode10
        :available_files: mbox-short.txt

        Using the same datafile, extract the usernames from each email address
        using regex and add them to the list "usernames". For the email noname@umich.edu,
        this would locate the string "noname".
        ~~~~

        ====
        from unittest.gui import TestCaseGui

        class MyTests(TestCaseGui):
            def testOne(self):
                self.assertEqual(usernames, [['gopal.ramasammycook'], ['louis'], ['cwen'], ['antranig'], ['rjlowe'], ['gsilver'], ['david.horwitz'], ['wagnermr'], ['zqian'], ['stephen.marquard'], ['ray']], "Testing that all usernames were matched.")
        MyTests().main()
