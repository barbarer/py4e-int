Exercises
---------

**Exercise 1: Write a program to read through a file and print the
contents of the file (line by line) all in upper case. Executing the
program will look as follows:**

.. code-block::

   python shout.py
   Enter a file name: mbox-short.txt
   FROM STEPHEN.MARQUARD@UCT.AC.ZA SAT JAN  5 09:14:16 2008
   RETURN-PATH: <POSTMASTER@COLLAB.SAKAIPROJECT.ORG>
   RECEIVED: FROM MURDER (MAIL.UMICH.EDU [141.211.14.90])
        BY FRANKENSTEIN.MAIL.UMICH.EDU (CYRUS V2.3.8) WITH LMTPA;
        SAT, 05 JAN 2008 09:14:16 -0500


**You can download the file from** `www.py4e.com/code3/mbox-short.txt <http://www.py4e.com/code3/mbox-short.txt>`_

**Exercise 2: Write a program to prompt for a file name, and then read
through the file and look for lines of the form:**

.. code-block::

   X-DSPAM-Confidence: 0.8475


**When you encounter a line that starts with "X-DSPAM-Confidence:" pull
apart the line to extract the floating-point number on the line. Count
these lines and then compute the total of the spam confidence values
from these lines. When you reach the end of the file, print out the
average spam confidence.**

.. code-block::

   Enter the file name: mbox.txt
   Average spam confidence: 0.894128046745

   Enter the file name: mbox-short.txt
   Average spam confidence: 0.750718518519


**Test your file on the *mbox.txt* and *mbox-short.txt* files.**

**Exercise 3: Sometimes when programmers get bored or want to have a bit
of fun, they add a harmless *Easter Egg* to their program
Modify the program that prompts the user for the file name so that it
prints a funny message when the user types in the exact file name "na na
boo boo". The program should behave normally for all other files which
exist and don't exist. Here is a sample execution of the program:**

.. code-block::

   python egg.py
   Enter the file name: mbox.txt
   There were 1797 subject lines in mbox.txt

   python egg.py
   Enter the file name: missing.tyxt
   File cannot be opened: missing.tyxt

   python egg.py
   Enter the file name: na na boo boo
   NA NA BOO BOO TO YOU - You have been punk'd!


**We are not encouraging you to put Easter Eggs in your programs; this is
just an exercise.**
