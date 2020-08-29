Write Code Questions
----------------------


These first two questions are associated with the following text file.

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


.. tabbed:: writcecode_question11_1

   .. tab:: Question

      Use a regex equation to match all the emails in mbox-short.txt4. Append all of these emails to the list 'email_list'.

      .. datafile:: mbox-short.txt4
         :fromfile: mbox-short.txt
         :hide:

      .. activecode:: writingcode_question11_1
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

      .. activecode:: writtencode_question11_1
         :available_files: mbox-short.txt

         import re
         hand = open('mbox-short.txt4')
         email_list = []
         for line in hand:
             line = line.rstrip()
             x = re.findall('[a-zA-Z0-9]\S+@\S+[a-zA-Z]', line)
             email_list.append(x)

.. tabbed:: writecode_question11_2

   .. tab:: Question

      Using the same datafile, extract the number next to each email (the amount of emails each person has sent) using a regex equation, and calculate the total amount of emails sent. Save this to the variable 'total_emails'. Use the () character to capture and return the number.

      .. datafile:: mbox-short.txt5
         :fromfile: mbox-short.txt
         :hide:

      .. activecode:: writingcode_question11_2
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

      .. activecode:: writtencode_question11_2
         :available_files: mbox-short.txt

         import re

         total_emails = 0
         hand = open('mbox-short.txt5')
         for line in hand:
             line = line.rstrip()
             x = re.findall('[a-zA-Z0-9]\S+@\S+[a-zA_Z]\s?(\d)', line)
             for item in x:
                 total_emails += int(item)
