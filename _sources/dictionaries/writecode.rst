Write Code Questions
---------------------
#.
    .. tabbed:: dict_writecode1

        .. tab:: Question

            Write a program that categorizes each mail message by which day of the week
             the commit was done. To do this look for lines that start with "From", then
             look for the third word and keep a running count of each of the days of the week.
             At the end of the program print out the contents of the dictionary 'mail_count'
             (order does not matter).

            .. activecode:: dict_writecode1q
                :practice: T
                :nocodelens:

                mail = ['From stephen.marquard@uct.ac.za Sat Jan  7', 'From gopal.ramasammycook@gmail.com Thurs Jan  5', 'From louis@media.berkeley.edu Tues Jan  3', 'From antranig@caret.cam.ac.uk Sat Jan  7', 'From david.horwitz@uct.ac.za Wed Jan  4', 'From ray@media.berkeley.edu Mon Jan  2', 'From stephen.marquard@uct.ac.za Mon Jan 2', 'From wagnermr@iupui.edu Fri Jan  6']

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(mail_count['Mon'], 2, "Making sure only two emails are associated with Monday.")
                        self.assertEqual(mail_count['Sat'], 2, "Checking that there are 2 emails sent on Saturday.")
                        self.assertEqual(mail_count.get('Sun', 0), 0, "Checking that no emails were sent on Sunday.")

                myTests().main()

        .. tab:: Answer

            .. activecode:: dict_writecode1a
                :optional:

                # mail list was given
                mail = ['From stephen.marquard@uct.ac.za Sat Jan  7', 'From gopal.ramasammycook@gmail.com Thurs Jan  5', 'From louis@media.berkeley.edu Tues Jan  3', 'From antranig@caret.cam.ac.uk Sat Jan  7', 'From david.horwitz@uct.ac.za Wed Jan  4', 'From ray@media.berkeley.edu Mon Jan  2', 'From stephen.marquard@uct.ac.za Mon Jan 2', 'From wagnermr@iupui.edu Fri Jan  6']

                # Create dictionary for the emails
                mail_count = {}

                # Iterate through each email in the list
                for email in mail:
                    # Separate pieces of each email setting key to the day (third element)
                    key = email.split()[2]
                    # Add key to dictionary if not included
                    if key not in mail_count.keys():
                        mail_count[key] = 0
                    # Update key
                    mail_count[key] += 1
                # Print final count
                print(mail_count)

#.
    .. activecode:: dict_writecode2
        :practice: T
        :nocodelens:

        Write a program to read through a mail log, build a histogram using the dictionary "user_count" to count how many messages have come from each email address, and print the dictionary.
        ~~~~

        mail_log = ['From stephen.marquard@uct.ac.za Sat Jan  7', 'From gopal.ramasammycook@gmail.com Thurs Jan  5', 'From stephen.marquard@uct.ac.za Sat Feb  7', 'From louis@media.berkeley.edu Tues Jan  3', 'From stephen.marquard@uct.ac.za Sat Nov  6', 'From antranig@caret.cam.ac.uk Sat Jan  7', 'From david.horwitz@uct.ac.za Wed Jan  4', 'From ray@media.berkeley.edu Mon Jan  2', 'From stephen.marquard@uct.ac.za Mon Jan 2', 'From wagnermr@iupui.edu Fri Jan  6', 'From gopal.ramasammycook@gmail.com Thurs Dec  5', 'From louis@media.berkeley.edu Tues April  1']

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):
            def testOne(self):
                self.assertEqual(len(user_count), 7, "Making sure the amount of messages sent is correct.")
                self.assertEqual(user_count['stephen.marquard@uct.ac.za'], 4, "Checking that this email address is counted for 4 times.")

        myTests().main()

#.
    .. tabbed:: dict_writecode3

        .. tab:: Question

            Write a program that creates a dictionary letter_count that keeps track
            of the amount of times each letter appears in the given phrase. Assign the
            number of times "e" appears in the phrase to the variable "e_counter". Make
            sure to account for each letter in its lowercase form.

            .. activecode:: dict_writecode3q
                :practice: T
                :nocodelens:

                phrase = "Exeggcute evolves into Exeggutor which are two extraordinary Pokemon"

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(len(letter_count), 21, "Making sure all 21 letters were accounted for.")
                        self.assertEqual(e_counter, 10, "Making sure there are 10 e's accounted for.")

                myTests().main()

        .. tab:: Answer

            .. activecode:: dict_writecode3a
                :optional:

                # phrase string is given
                phrase = "Exeggcute evolves into Exeggutor which are two extraordinary Pokemon"

                # Create dictionary for letters and their counts
                letter_count = {}

                # Iterate through words in string
                for word in phrase.split():
                    # Iterate through each letter
                    for letter in word:
                        # Put each letter into lowercase
                        letter = letter.lower()
                        # Add letter as key to dictionary, if not included
                        if letter not in letter_count.keys():
                            letter_count[letter] = 0
                        # Update letter
                        letter_count[letter] += 1
                # Create e_counter to see how many are in the phrase
                e_counter = letter_count['e']

#.
    .. activecode:: dict_writecode4
        :practice: T
        :nocodelens:

        Write a program that reads the words in the string 'phrase' and counts how many times each word appears.
        Store the words as keys in the dictionary 'word_dictionary', then use the ``in`` operator as a fast way to
        check whether the string is in the dictionary.
        ~~~~

        phrase = "Writing programs or programming is a very creative and rewarding activity  You can write programs for many reasons ranging from making your living to solving a difficult data analysis problem to having fun to helping someone else solve a problem  This book assumes that {\em everyone} needs to know how to program and that once you know how to program, you will figure out what you want to do with your newfound skills"

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(len(word_dictionary), 56, "Checking that all the words made it into the list.")
                self.assertEqual(word_dictionary['Writing'], 1, "Checking that 'Writing' appears once in the dictionary.")
                self.assertEqual(word_dictionary['a'], 3, "Making sure the letter 'a' appears three times as a word in the given phrase.")

        myTests().main()

Here is the words.txt file for Question 5.

.. reveal:: words-txt-file
   :showtitle: Show
   :hidetitle: Hide

   .. code-block::

      Writing programs or programming is a very creative
      and rewarding activity  You can write programs for
      many reasons ranging from making your living to solving
      a difficult data analysis problem to having fun to helping
      someone else solve a problem  This book assumes that
      {\em everyone} needs to know how to program and that once
      you know how to program, you will figure out what you want
      to do with your newfound skills

      We are surrounded in our daily lives with computers ranging
      from laptops to cell phones  We can think of these computers
      as our personal assistants who can take care of many things
      on our behalf  The hardware in our current-day computers
      is essentially built to continuously ask us the question
      What would you like me to do next

      Our computers are fast and have vasts amounts of memory and
      could be very helpful to us if we only knew the language to
      speak to explain to the computer what we would like it to
      do next If we knew this language we could tell the
      computer to do tasks on our behalf that were reptitive
      Interestingly, the kinds of things computers can do best
      are often the kinds of things that we humans find boring
      and mind-numbing

#.
    .. tabbed:: dict_writecode5

        .. tab:: Question

            Write code that reads in the text from the file words.txt, and uses the dictionary 'word_count' to count the amount of times a word appears in the file. Watch out for repetition using the .lower() function.

            .. datafile:: words.txt
                :fromfile: words.txt
                :hide:

            .. activecode:: dict_writecode5q
                :practice: T
                :available_files: words.txt

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(len(word_count), 119, "Making sure all the words were accounted for.")
                        self.assertEqual(word_count['and'], 5, "Checking if 'and' is counted for 5 times.")
                        self.assertEqual(word_count['what'], 3, "Checking if 'what' appears 3 times.")

                myTests().main()

        .. tab:: Answer

            .. datafile: words.txt
                :fromfile: words.txt
                :hide:

            .. activecode:: dict_writecode5a
                :optional:
                :available_files: words.txt

                # Open the file in "read" mode
                with open("words.txt", "r") as filename:
                    # Create dictionary to count words
                    word_count = {}
                    # Separate lines and iterate through them
                    lines = filename.readlines()
                    for line in lines:
                        # Iterate through each word
                        for word in line.split():
                            # Set each word to lowercase
                            word = word.lower()
                            # Add word to dictionary if not included
                            if word not in word_count.keys():
                                word_count[word] = 0
                            # Update word
                            word_count[word] += 1
                # Print final count
                print(word_count)

#.
    .. activecode:: dict_writecode6
        :nocodelens:

        Perform the same task as in question 4, but this time make sure to look at words in
        lowercase in order to avoid any repetition.
        ~~~~

        phrase = "Writing programs or programming is a very creative and rewarding activity  You can write programs for many reasons ranging from making your living to solving a difficult data analysis problem to having fun to helping someone else solve a problem  This book assumes that {\em everyone} needs to know how to program and that once you know how to program, you will figure out what you want to do with your newfound skills"

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(len(word_dictionary), 55, "Checking that all the terms were accounted for in the new list.")
                self.assertEqual(word_dictionary['you'], 4, "Checking the amount of times 'you' appears in the phrase.")
                self.assertEqual(word_dictionary['writing'], 1, "Making sure 'writing' appears just once in the dictionary.")
                self.assertEqual(word_dictionary.get('Writing', 0), 0, "Checking to make sure 'Writing' is no longer in the dictionary.")

        myTests().main()

Below is the romeo3.txt file used in Question 7.

.. reveal:: romeo3-txt-file
   :showtitle: Show
   :hidetitle: Hide

   .. code-block::

      But soft what light through yonder window breaks
      It is the east and Juliet is the sun
      Arise fair sun and kill the envious moon
      Who is already sick and pale with grief

#.
    .. tabbed:: dict_writecode7

        .. tab:: Question

            Write code to read through the lines of the file, break each line into a list of
            words, and then loop through each of the words in the line and count each word using
            the dictionary "counts".

            .. datafile:: romeo3.txt
                :fromfile: romeo.txt
                :hide:

            .. activecode:: dict_writecode7q
                :practice: T
                :available_files: romeo.txt

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(len(counts), 26, "Making sure all 26 words made it into the dictionary.")
                        self.assertEqual(counts['is'], 3, "Checking 'is' was only counted for three times.")
                        self.assertEqual(counts['arise'], 1, "Checking to make sure 'arise' appears once in the dictionary.")

                myTests().main()

        .. tab:: Answer

            .. datafile: romeo.txt
                :fromfile: romeo.txt
                :hide:

            .. activecode:: dict_writecode7a
                :available_files: romeo.txt
                :optional:

                # Open file in "read" mode
                with open("romeo3.txt", "r") as filename:
                    # Separate and read lines
                    lines = filename.readlines()
                    # Create count dictionary
                    counts = {}
                    # Iterate through lines
                    for line in lines:
                        # Iterate through words in each line
                        for word in line.split():
                            # Set each word to lowercase
                            word = word.lower()
                            # Add word to dictionary if not included
                            if word not in counts.keys():
                                counts[word] = 0
                            # Update word
                            counts[word] += 1

#.
    .. activecode:: dict_writecode8
        :practice: T
        :nocodelens:

        Write code that adds the key 'two' with a value of 'dos' to the dictionary eng2sp.
        ~~~~

        eng2sp = {'one':'uno'}

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(eng2sp['two'], 'dos', "Making sure the correct value is associated with the key 'two'.")

        myTests().main()


The next two questions are associated with the following text file.

.. reveal:: mbox-short-txt-file
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
    .. tabbed:: dict_writecode9

        .. tab:: Question

            Add code to the program below to figure out who has the most messages in the file. After all the data has been read and the dictionary has been created, look through the dictionary using a maximum loop (see Chapter 5: Maximum and minimum loops) to find who has the most messages and print how many messages the person has.

            .. datafile:: mbox-short.txt3
                :fromfile: mbox-short.txt
                :hide:

            .. activecode:: dict_writecode9q
                :practice: T
                :available_files: mbox-short.txt

                with open("mbox-short.txt3", "r") as filename:
                    message_count = {}

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(message_count['cwen@iupui.edu'], '5', "Making sure 5 emails were sent from this email address.")
                        self.assertEqual(len(message_count), 11, "Checking that all the emails made it into the dictionary.")

                myTests().main()

        .. tab:: Answer
        
            .. activecode:: dict_writecode9a
                :available_files: mbox-short.txt
                :optional:

                with open("mbox-short.txt3", "r") as filename:
                    message_count = {}
                    messages = filename.readlines()
                    for message in messages:
                    key = message.split()[0]
                    value = message.split()[1]
                    if key not in message_count.keys():
                        message_count[key] = value

                max_emails = 0
                for key in message_count.keys():
                    if int(message_count[key]) >= max_emails:
                        max_emails = int(message_count[key])
                print(max_emails)

.. datafile:: mbox-short.txt2
   :fromfile: mbox-short.txt
   :hide:

#.
    .. activecode:: dict_writecode10
        :practice: T
        :available_files: mbox-short.txt

        Write this program to record the domain name (instead of the address) where the message was sent from instead of who the mail came from (i.e., the whole email address). At the end of the program, print out the contents of your dictionary.
        ~~~~

        with open("mbox-short.txt2", "r") as filename:
            message_count = {}

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(message_count['iupui.edu'], '5', "Making sure 'iupui.edu' sent 5 emails.")
                self.assertEqual(len(message_count), 6, "Checking that all the emails made it into the dictionary.")

        myTests().main()
