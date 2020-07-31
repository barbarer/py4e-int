Write Code Exercises
---------------------

.. tabbed:: writecode_question9_1

   .. tab:: Question

      Write a program that reads the words in phrase and
      stores them as keys in the dictionary 'word_dictionary'. It doesn't matter what the values
      are. Then you can use the ``in`` operator as a fast way to
      check whether a string is in the dictionary.

      .. activecode:: writingcode_question9_1
         :practice: T
         :nocodelens:

         phrase = "Writing programs or programming is a very creative and rewarding activity  You can write programs for many reasons ranging from making your living to solving a difficult data analysis problem to having fun to helping someone else solve a problem  This book assumes that {\em everyone} needs to know how to program and that once you know how to program, you will figure out what you want to do with your newfound skills"

         ====
         from unittest.gui import TestCaseGui

         class myTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(len(word_dictionary), 56, "Make sure you are not confusing the key and value components")
                 self.assertEqual(word_dictionary['Writing'], 1, "Checking that 'Writing' appears once in the dictionary")
                 self.assertEqual(word_dictionary['a'], 3, "Making sure the letter 'a' appears three times as a word in the given phrase")

         myTests().main()

   .. tab:: Answer

      .. activecode:: writtencode_question9_1

         phrase = "Writing programs or programming is a very creative and rewarding activity  You can write programs for many reasons ranging from making your living to solving a difficult data analysis problem to having fun to helping someone else solve a problem  This book assumes that {\em everyone} needs to know how to program and that once you know how to program, you will figure out what you want to do with your newfound skills"

         #CREATE AN EMPTY DICTIONARY
         word_dictionary = {}
         #RUN A LOOP TO GO THROUGH EACH WORD TO SEE IF IT IS IN THE DICTIONARY
         for word in phrase.split():
             if word not in word_dictionary.keys():
                 word_dictionary[word] = 0
             word_dictionary[word] += 1
         print(word_dictionary)

.. tabbed:: writecode_question9_2

   .. tab:: Question

      Perform the same task as in question 1, but this time make sure to look at words in lowercase in order to avoid any repetition.

      .. activecode:: writingcode_question9_2
         :practice: T
         :nocodelens:

         phrase = "Writing programs or programming is a very creative and rewarding activity  You can write programs for many reasons ranging from making your living to solving a difficult data analysis problem to having fun to helping someone else solve a problem  This book assumes that {\em everyone} needs to know how to program and that once you know how to program, you will figure out what you want to do with your newfound skills"

         ====
         from unittest.gui import TestCaseGui

         class myTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(len(word_dictionary), 5, "Make sure you are not confusing the key and value components")
                 self.assertEqual(word_dictionary['you'], 4, "Checking the amount of times 'you' appears in the phrase")
                 self.assertEqual(word_dictionary['writing'], 1, "Making sure 'writing' appears just once in the dictionary")

         myTests().main()

   .. tab:: Answer

      .. activecode:: writtencode_question9_2

         phrase = "Writing programs or programming is a very creative and rewarding activity  You can write programs for many reasons ranging from making your living to solving a difficult data analysis problem to having fun to helping someone else solve a problem  This book assumes that {\em everyone} needs to know how to program and that once you know how to program, you will figure out what you want to do with your newfound skills"

         #CREATE AN EMPTY DICTIONARY
         word_dictionary = {}
         #RUN A LOOP TO GO THROUGH EACH WORD TO SEE IF IT IS IN THE DICTIONARY
         for word in phrase.split():
             word = word.lower()
             if word not in word_dictionary.keys():
                 word_dictionary[word] = 0
             word_dictionary[word] += 1
         print(word_dictionary)


.. tabbed:: writecode_question9_3

   .. tab:: Question

      Write a program that categorizes each mail message by which day of the week the commit was done. To do this look for lines that start with "From", then look for the third word and keep a running count of each of the days of the week. At the end of the program print out the contents of the dictionary 'mail_count' (order does not matter).

      .. activecode:: writingcode_question9_3
         :practice: T
         :nocodelens:

         mail = ['From stephen.marquard@uct.ac.za Sat Jan  7', 'From gopal.ramasammycook@gmail.com Thurs Jan  5', 'From louis@media.berkeley.edu Tues Jan  3', 'From antranig@caret.cam.ac.uk Sat Jan  7', 'From david.horwitz@uct.ac.za Wed Jan  4', 'From ray@media.berkeley.edu Mon Jan  2', 'From stephen.marquard@uct.ac.za Mon Jan 2', 'From wagnermr@iupui.edu Fri Jan  6']

         ====
         from unittest.gui import TestCaseGui

         class myTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(mail_count['Mon'], 2, "Make sure you are grabbing the third value from each item in the list in order to sort by the day of the week.")
                 self.assertEqual(mail_count['Sat'], 2, "Checking that there are 2 emails sent on Saturday")
                 self.assertEqual(mail_count['Sun'], 0, "Checking that no emails were sent on Sunday")

         myTests().main()

   .. tab:: Answer

      .. activecode:: writtencode_question9_3

         mail = ['From stephen.marquard@uct.ac.za Sat Jan  7', 'From gopal.ramasammycook@gmail.com Thurs Jan  5', 'From louis@media.berkeley.edu Tues Jan  3', 'From antranig@caret.cam.ac.uk Sat Jan  7', 'From david.horwitz@uct.ac.za Wed Jan  4', 'From ray@media.berkeley.edu Mon Jan  2', 'From stephen.marquard@uct.ac.za Mon Jan 2', 'From wagnermr@iupui.edu Fri Jan  6']

         mail_count = {}
         for email in mail:
             key = email.split()[2]
             if key not in mail_count.keys():
                 mail_count[key] = 0
             mail_count[key] += 1
         print(mail_count)


.. tabbed:: writecode_question9_4

   .. tab:: Question

      Write a program to read through a mail log, build a histogram using the dictionary "user_count" to count how many messages have come from each email address, and print the dictionary

      .. activecode:: writingcode_question9_4
         :practice: T
         :nocodelens:

         mail_log = ['From stephen.marquard@uct.ac.za Sat Jan  7', 'From gopal.ramasammycook@gmail.com Thurs Jan  5', 'From stephen.marquard@uct.ac.za Sat Feb  7', 'From louis@media.berkeley.edu Tues Jan  3', 'From stephen.marquard@uct.ac.za Sat Nov  6', 'From antranig@caret.cam.ac.uk Sat Jan  7', 'From david.horwitz@uct.ac.za Wed Jan  4', 'From ray@media.berkeley.edu Mon Jan  2', 'From stephen.marquard@uct.ac.za Mon Jan 2', 'From wagnermr@iupui.edu Fri Jan  6', 'From gopal.ramasammycook@gmail.com Thurs Dec  5', 'From louis@media.berkeley.edu Tues April  1']

         ====
         from unittest.gui import TestCaseGui

         class myTests(TestCaseGui):
             def testOne(self):
                 self.assertEqual(len(user_count), 8, "Make sure you are using the correct index to grab the email address.")
                 self.assertEqual(user_count['stephen.marquard@uct.ac.za'], 4, "Checking that this email address is counted for 4 times")

         myTests().main()

   .. tab:: Answer

      .. activecode:: writtencode_question9_4

         mail_log = ['From stephen.marquard@uct.ac.za Sat Jan  7', 'From gopal.ramasammycook@gmail.com Thurs Jan  5', 'From stephen.marquard@uct.ac.za Sat Feb  7', 'From louis@media.berkeley.edu Tues Jan  3', 'From stephen.marquard@uct.ac.za Sat Nov  6', 'From antranig@caret.cam.ac.uk Sat Jan  7', 'From david.horwitz@uct.ac.za Wed Jan  4', 'From ray@media.berkeley.edu Mon Jan  2', 'From stephen.marquard@uct.ac.za Mon Jan 2', 'From wagnermr@iupui.edu Fri Jan  6', 'From gopal.ramasammycook@gmail.com Thurs Dec  5']

         user_count = {}
         for email in mail_log:
             key = email.split()[1]
             if key not in user_count.keys():
                 user_count[key] = 0
             user_count[key] += 1
         print(user_count)

.. tabbed:: writecode_question9_5

   .. tab:: Question

      Add code to the program below to figure out who has the most messages in the file. After all the data has been read and the dictionary has been created, look through the dictionary using a maximum loop (see Chapter 5: Maximum and minimum loops) to find who has the most messages and print how many messages the person has.

      .. datafile:: mbox-short.txt
         :fromfile: mbox-short.txt
         :hide:

      .. activecode:: writingcode_question9_5
         :practice: T
         :available_files: mbox-short.txt

         with open("mbox-short.txt", "r") as filename:
             message_count = {}

         ====
         from unittest.gui import TestCaseGui

         class myTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(message_count['cwen@iupui.edu'], '5', "Make sure to grab the correct key and value from each entry in the file")
                 self.assertEqual(len(message_count), 11, "Checking that all the emails made it into the dictionary")

         myTests().main()

   .. tab:: Answer

      .. datafile: mbox-short.txt
         :fromfile: mbox-short.txt
         :hide:

      .. activecode:: writtencode_question9_5
         :available_files: mbox-short.txt

         with open("mbox-short.txt", "r") as filename:
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


.. tabbed:: writecode_question9_6

   .. tab:: Question

      Write this program to record the domain name (instead of the address) where the message was sent from instead of who the mail came from (i.e., the whole email address). At the end of the program, print out the contents of your dictionary.

      .. datafile:: mbox-short.txt2
         :fromfile: mbox-short.txt
         :hide:

      .. activecode:: writingcode_question9_6
         :practice: T
         :available_files: mbox-short.txt

         with open("mbox-short.txt", "r") as filename:
             message_count = {}

         ====
         from unittest.gui import TestCaseGui

         class myTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(message_count['iupui.edu'], '5', "Make sure to grab the correct key and value from each entry in the file")
                 self.assertEqual(len(message_count), 6, "Checking that all the emails made it into the dictionary")

         myTests().main()

   .. tab:: Answer

      .. datafile: mbox-short.txt
         :fromfile: mbox-short.txt
         :hide:

      .. activecode:: writtencode_question9_6
         :available_files: mbox-short.txt

         with open("mbox-short.txt", "r") as filename:
             message_count = {}
             messages = filename.readlines()
             for message in messages:
                 email = message.split()[0]
                 key = email.split("@")[1]
                 value = message.split()[1]
                 if key not in message_count.keys():
                     message_count[key] = value
         print(message_count)


.. tabbed:: writecode_question9_7

   .. tab:: Question

      Write a program that creates a dictionary letter_count that keeps track of the amount of times each letter appears in the given phrase. Assign the number of times "e" appears in the phrase to the variable "e_counter". Make sure to account for each letter in its lowercase form.

      .. activecode:: writingcode_question9_7
         :practice: T
         :nocodelens:

         phrase = "Exeggcute evolves into Exeggutor which are two extraordinary Pokemon"

         ====
         from unittest.gui import TestCaseGui

         class myTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(len(letter_count), 21, "Make sure each letter is lowercase before adding it to the dictionary!")
                 self.assertEqual(e_counter, 10, "Making sure there are 10 e's accounted for")

         myTests().main()

   .. tab:: Answer

      .. activecode:: writtencode_question9_7

         phrase = "Exeggcute evolves into Exeggutor which are two extraordinary Pokemon"

         letter_count = {}
         for word in phrase.split():
             for letter in word:
                 letter = letter.lower()
                 if letter not in letter_count.keys():
                     letter_count[letter] = 0
                 letter_count[letter] += 1
         e_counter = letter_count['e']



.. tabbed:: writecode_question9_8

   .. tab:: Question

      Write code that adds the key 'two' with a value of 'dos' to the dictionary eng2sp.

      .. activecode:: writingcode_question9_8
         :practice: T
         :nocodelens:

         eng2sp = {'one':'uno'}

         ====
         from unittest.gui import TestCaseGui

         class myTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(eng2sp['two'], 'dos', "Make sure you are not confusing the key and value components")

         myTests().main()

   .. tab:: Answer

      .. activecode:: writtencode_question9_8

         eng2sp = {'one':'uno'}

         eng2sp['two'] = 'dos'



.. tabbed:: writecode_question9_9

   .. tab:: Question

      Write code that reads in the text from the file words.txt, and uses the dictionary 'word_count' to count the amount of times a word appears in the file. Watch out for repetition using the .lower() function.

      .. datafile:: words.txt
         :fromfile: words.txt
         :hide:

      .. activecode:: writingcode_question9_9
         :practice: T
         :available_files: words.txt

         ====
         from unittest.gui import TestCaseGui

         class myTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(len(word_count), 119, "Make sure that words that are capitalized are counted as lowercase before adding them to the dictionary")
                 self.assertEqual(word_count['and'], 5, "Checking if 'and' is counted for 5 times")
                 self.assertEqual(word_count['what'], 3, "Checking if 'what' appears 3 times")

         myTests().main()

   .. tab:: Answer

      .. datafile: words.txt
         :fromfile: words.txt
         :hide:

      .. activecode:: writtencode_question9_9
         :available_files: words.txt

         with open("words.txt", "r") as filename:
             word_count = {}
             lines = filename.readlines()
             for line in lines:
                 for word in line.split():
                     word = word.lower()
                     if word not in word_count.keys():
                         word_count[word] = 0
                     word_count[word] += 1
         print(word_count)


.. tabbed:: writecode_question9_10

   .. tab:: Question

      Write code to read through the lines of the file, break each line into a list of words, and then loop through each of the words in the line and count each word using the dictionary "counts".

      .. datafile:: romeo3.txt
         :fromfile: romeo.txt
         :hide:

      .. activecode:: writingcode_question9_10
         :practice: T
         :available_files: romeo.txt

         ====
         from unittest.gui import TestCaseGui

         class myTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(len(counts), 26, "Make sure to count words with capital letters as lowercase")
                 self.assertEqual(counts['is'], 3, "Checking 'is' was only counted for three times")
                 self.assertEqual(counts['arise'], 1, "Check to make sure 'arise' appears once in the dictionary")

         myTests().main()

   .. tab:: Answer

      .. datafile: romeo.txt
         :fromfile: romeo.txt
         :hide:

      .. activecode:: writtencode_question9_10
         :available_files: romeo.txt

         with open("romeo3.txt", "r") as filename:
             lines = filename.readlines()
             counts = {}
             for line in lines:
                 for word in line.split():
                     word = word.lower()
                     if word not in counts.keys():
                         counts[word] = 0
                     counts[word] += 1
