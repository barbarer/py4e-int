Write Code Questions
---------------------
#.
    .. tabbed:: dict_writecode1

        .. tab:: Question

            .. activecode:: dict_writecode1q
                :autograde: unittest

                Write a program that categorizes each mail message by which day of the week
                the commit was done. To do this, look for lines that start with "From". Then,
                look for the third word, and keep a running count of each of the days of the week.
                At the end of the program, print out the contents of the dictionary ``mail_count``
                (order does not matter). For example, ``mail_count['Mon']`` should be ``2``.
                ~~~~
                mail = ['From stephen.marquard@uct.ac.za Sat Jan  7', 'From gopal.ramasammycook@gmail.com Thurs Jan  5', 'From louis@media.berkeley.edu Tues Jan  3', 'From antranig@caret.cam.ac.uk Sat Jan  7', 'From david.horwitz@uct.ac.za Wed Jan  4', 'From ray@media.berkeley.edu Mon Jan  2', 'From stephen.marquard@uct.ac.za Mon Jan 2', 'From wagnermr@iupui.edu Fri Jan  6']

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(mail_count['Mon'], 2, "mail_count['Mon']")
                        self.assertEqual(mail_count['Sat'], 2, "mail_count['Sat']")
                        self.assertEqual(mail_count.get('Sun', 0), 0, "mail_count.get('Sun', 0)")

                myTests().main()

        .. tab:: Answer

            .. activecode:: dict_writecode1a
                :optional:

                Write a program that categorizes each mail message by which day of the week
                the commit was done. To do this, look for lines that start with "From". Then,
                look for the third word, and keep a running count of each of the days of the week.
                At the end of the program, print out the contents of the dictionary ``mail_count``
                (order does not matter). For example, ``mail_count['Mon']`` should be ``2``.
                ~~~~
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
        :autograde: unittest

        Write a program to read through a mail log, build the dictionary ``user_count`` to count how many messages have come from each email address, and print the dictionary. For example, ``user_count['stephen.marquard@uct.ac.za']`` should be ``4``.
        ~~~~
        mail_log = ['From stephen.marquard@uct.ac.za Sat Jan  7', 'From gopal.ramasammycook@gmail.com Thurs Jan  5', 'From stephen.marquard@uct.ac.za Sat Feb  7', 'From louis@media.berkeley.edu Tues Jan  3', 'From stephen.marquard@uct.ac.za Sat Nov  6', 'From antranig@caret.cam.ac.uk Sat Jan  7', 'From david.horwitz@uct.ac.za Wed Jan  4', 'From ray@media.berkeley.edu Mon Jan  2', 'From stephen.marquard@uct.ac.za Mon Jan 2', 'From wagnermr@iupui.edu Fri Jan  6', 'From gopal.ramasammycook@gmail.com Thurs Dec  5', 'From louis@media.berkeley.edu Tues April  1']

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):
            def testOne(self):
                self.assertEqual(len(user_count), 7, "len(user_count)")
                self.assertEqual(user_count['stephen.marquard@uct.ac.za'], 4, "user_count['stephen.marquard@uct.ac.za']")

        myTests().main()

#.
    .. tabbed:: dict_writecode3

        .. tab:: Question

            .. activecode:: dict_writecode3q
                :autograde: unittest

                Write a program that creates a dictionary ``letter_count`` that keeps track
                of the amount of times each letter appears in the given phrase. Assign the
                number of times "e" appears in the phrase to the variable ``e_counter``. Make
                sure to account for each letter in its lowercase form. For example, ``e_counter`` should be ``10``, and ``letter_count['e']`` should be ``10``.
                ~~~~
                phrase = "Exeggcute evolves into Exeggutor which are two extraordinary Pokemon"

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(len(letter_count), 21, "len(letter_count)")
                        self.assertEqual(e_counter, 10, "e_counter")
                        self.assertEqual(letter_count['e'], 10, "letter_count['e']")

                myTests().main()

        .. tab:: Answer

            .. activecode:: dict_writecode3a
                :optional:

                Write a program that creates a dictionary ``letter_count`` that keeps track
                of the amount of times each letter appears in the given phrase. Assign the
                number of times "e" appears in the phrase to the variable ``e_counter``. Make
                sure to account for each letter in its lowercase form. For example, ``e_counter`` should be ``10``, and ``letter_count['e']`` should be ``10``.
                ~~~~
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
        :autograde: unittest

        Write a program that reads the words in the string ``phrase`` and counts how many times each word appears.
        Store the words as keys in the dictionary ``word_dictionary``, and then use the in operator as a fast way to
        check whether the string is in the dictionary. For example, ``word_dictionary['Writing']`` should be ``1``. (Note: 'Writing' and 'writing' would be counted as two separate words for this question.)
        ~~~~
        phrase = "Writing programs or programming is a very creative and rewarding activity  You can write programs for many reasons ranging from making your living to solving a difficult data analysis problem to having fun to helping someone else solve a problem  This book assumes that {\em everyone} needs to know how to program and that once you know how to program, you will figure out what you want to do with your newfound skills"

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(len(word_dictionary), 56, "len(word_dictionary)")
                self.assertEqual(word_dictionary['Writing'], 1, "word_dictionary['Writing']")
                self.assertEqual(word_dictionary['a'], 3, "word_dictionary['a']")

        myTests().main()

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

            .. activecode:: dict_writecode5q
                :datafile: words.txt
                :autograde: unittest

                Write code that reads in the text from the file words.txt and uses
                the dictionary ``word_count`` to count the amount of times a word appears
                in the file. Watch out for repetition using the .lower() function. For example, ``word_count['and']`` should be ``5``.
                ~~~~

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(len(word_count), 119, "len(word_count)")
                        self.assertEqual(word_count['and'], 5, "word_count['and']")
                        self.assertEqual(word_count['what'], 3, "word_count['what']")

                myTests().main()

        .. tab:: Answer

            .. activecode:: dict_writecode5a
                :datafile: words.txt
                :optional:

                Write code that reads in the text from the file words.txt and uses
                the dictionary ``word_count`` to count the amount of times a word appears
                in the file. Watch out for repetition using the .lower() function. For example, ``word_count['and']`` should be ``5``.
                ~~~~
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
        :autograde: unittest

        Write a program that reads the words in the string ``phrase`` and counts how many times each word appears.
        Store the words as keys in the dictionary ``word_dictionary``, and then use the in operator as a fast way to
        check whether the string is in the dictionary. Make sure to turn all letters in words into lowercase letters in order to avoid any repetition.
        For example, ``word_dictionary.get('Writing', 0)`` should be ``0``, and ``word_dictionary['writing']`` should be ``1``.
        ~~~~
        phrase = "Writing programs or programming is a very creative and rewarding activity  You can write programs for many reasons ranging from making your living to solving a difficult data analysis problem to having fun to helping someone else solve a problem  This book assumes that {\em everyone} needs to know how to program and that once you know how to program, you will figure out what you want to do with your newfound skills"

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(len(word_dictionary), 55, "len(word_dictionary)")
                self.assertEqual(word_dictionary['you'], 4, "word_dictionary['you']")
                self.assertEqual(word_dictionary['writing'], 1, "word_dictionary['writing']")
                self.assertEqual(word_dictionary.get('Writing', 0), 0, "word_dictionary.get('Writing', 0)")

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

            .. activecode:: dict_writecode7q
                :datafile: romeo.txt
                :autograde: unittest

                Write code to read through the lines of the file, break each line into a list of
                words, and then loop through each of the words in the line and count each word using
                the dictionary ``counts``. For example, ``counts['is']`` should be ``3``.
                ~~~~

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(len(counts), 26, "len(counts)")
                        self.assertEqual(counts['is'], 3, "counts['is']")
                        self.assertEqual(counts['arise'], 1, "counts['arise']")

                myTests().main()

        .. tab:: Answer

            .. activecode:: dict_writecode7a
                :datafile: romeo.txt
                :optional:

                Write code to read through the lines of the file, break each line into a list of
                words, and then loop through each of the words in the line and count each word using
                the dictionary ``counts``. For example, ``counts['is']`` should be ``3``.
                ~~~~
                # Open file in "read" mode
                with open("romeo.txt", "r") as filename:
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
        :autograde: unittest

        Write code that adds the key 'two' with a value of 'dos' to the dictionary ``eng2sp``. For example, ``eng2sp['two']`` should be ``'dos'``.
        ~~~~
        eng2sp = {'one':'uno'}

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(eng2sp['two'], 'dos', "eng2sp['two']")

        myTests().main()


The next two questions are associated with the following text file which has an email address followed by the number of messages from that address.

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

            .. activecode:: dict_writecode9q
                :datafile: mbox-short.txt
                :autograde: unittest

                Add code to the program below to figure out who has the most messages in the file. After all the data has been read and the dictionary ``message_count`` has been created, look through the dictionary using a maximum loop (see Chapter 5: Maximum and minimum loops) to find who has the most messages,
                and print how many messages the person has. For example, ``message_count['cwen@iupui.edu']`` should be ``5``.
                ~~~~
                with open("mbox-short.txt", "r") as filename:
                    message_count = {}

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(message_count['cwen@iupui.edu'], '5', "message_count['cwen@iupui.edu']")
                        self.assertEqual(len(message_count), 11, "len(message_count)")

                myTests().main()

        .. tab:: Answer

            .. activecode:: dict_writecode9a
                :available_files: mbox-short.txt
                :optional:

                Add code to the program below to figure out who has the most messages in the file. After all the data has been read and the dictionary ``message_count`` has been created, look through the dictionary using a maximum loop (see Chapter 5: Maximum and minimum loops) to find who has the most messages,
                and print how many messages the person has. For example, ``message_count['cwen@iupui.edu']`` should be ``5``.
                ~~~~
                # Open file in read mode
                with open("mbox-short.txt", "r") as filename:
                    # Create message_count dictionary
                    message_count = {}
                    # Create variable for lines of the file
                    messages = filename.readlines()
                    # Iterate through each message (each line)
                    for message in messages:
                        # Assign the key to the first (0th) element of the message
                        key = message.split()[0]
                        # Assign the value to the second element of the message
                        value = message.split()[1]
                        # Check if key is already in dictionary
                        if key not in message_count.keys():
                            # if not, add key/value pair to dictionary
                            message_count[key] = value
                # Create variable to count emails
                max_emails = 0
                # Iterate through keys in dictionary
                for key in message_count.keys():
                    # Check if key is larger than the max emails
                    if int(message_count[key]) >= max_emails:
                        # If so, reassign max_emails to that key
                        max_emails = int(message_count[key])
                print(max_emails)

#.
    .. activecode:: dict_writecode10
        :available_files: mbox-short.txt
        :autograde: unittest

        Write a program to record in the dictionary ``message_count`` the total number of messages from each domain name (not the whole address, just the part after the @ and before the space). At the end of the program, print out the contents of your dictionary.
        The domains should be the keys of the dictionary, and the counts of the domains should be the values of the dictionary. For example, ``message_count['iupui.edu']`` should be ``8``.
        ~~~~
        with open("mbox-short.txt", "r") as filename:
            message_count = {}

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(message_count['iupui.edu'], '8', "message_count['iupui.edu']")
                self.assertEqual(len(message_count), 6, "len(message_count)")

        myTests().main()
