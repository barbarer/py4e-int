Reading files
-------------
.. index::
    pair: Reading; File
    single: Counter
    pair: File; Open

The examples below use the data from 'mbox-short.txt'.  Click on the button to show the first lines from this file.


.. reveal:: mbox-short-v2
   :showtitle: Show
   :hidetitle: Hide

   .. code-block::

      From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008
      Return-Path: <postmaster@collab.sakaiproject.org>
      Received: from murder (mail.umich.edu [141.211.14.90])
      	 by frankenstein.mail.umich.edu (Cyrus v2.3.8) with LMTPA;
      	 Sat, 05 Jan 2008 09:14:16 -0500
      X-Sieve: CMU Sieve 2.3
      Received: from murder ([unix socket])
      	 by mail.umich.edu (Cyrus v2.2.12) with LMTPA;
      	 Sat, 05 Jan 2008 09:14:16 -0500
      Received: from holes.mr.itd.umich.edu (holes.mr.itd.umich.edu [141.211.14.79])
      	by flawless.mail.umich.edu () with ESMTP id m05EEFR1013674;
      	Sat, 5 Jan 2008 09:14:15 -0500
      Received: FROM paploo.uhi.ac.uk (app1.prod.collab.uhi.ac.uk [194.35.219.184])
      	BY holes.mr.itd.umich.edu ID 477F90B0.2DB2F.12494 ;
      	 5 Jan 2008 09:14:10 -0500
      Received: from paploo.uhi.ac.uk (localhost [127.0.0.1])
      	by paploo.uhi.ac.uk (Postfix) with ESMTP id 5F919BC2F2;
      	Sat,  5 Jan 2008 14:10:05 +0000 (GMT)
      Message-ID: <200801051412.m05ECIaH010327@nakamura.uits.iupui.edu>
      Mime-Version: 1.0
      Content-Transfer-Encoding: 7bit
      Received: from prod.collab.uhi.ac.uk ([194.35.219.182])
                by paploo.uhi.ac.uk (JAMES SMTP Server 2.1.3) with SMTP ID 899
                for <source@collab.sakaiproject.org>;
                Sat, 5 Jan 2008 14:09:50 +0000 (GMT)
      Received: from nakamura.uits.iupui.edu (nakamura.uits.iupui.edu [134.68.220.122])
      	by shmi.uhi.ac.uk (Postfix) with ESMTP id A215243002
      	for <source@collab.sakaiproject.org>; Sat,  5 Jan 2008 14:13:33 +0000 (GMT)
      Received: from nakamura.uits.iupui.edu (localhost [127.0.0.1])
      	by nakamura.uits.iupui.edu (8.12.11.20060308/8.12.11) with ESMTP id m05ECJVp010329
      	for <source@collab.sakaiproject.org>; Sat, 5 Jan 2008 09:12:19 -0500
      Received: (from apache@localhost)
      	by nakamura.uits.iupui.edu (8.12.11.20060308/8.12.11/Submit) id m05ECIaH010327
      	for source@collab.sakaiproject.org; Sat, 5 Jan 2008 09:12:18 -0500
      Date: Sat, 5 Jan 2008 09:12:18 -0500
      X-Authentication-Warning: nakamura.uits.iupui.edu: apache set sender to stephen.marquard@uct.ac.za using -f
      To: source@collab.sakaiproject.org
      From: stephen.marquard@uct.ac.za
      Subject: [sakai] svn commit: r39772 - content/branches/sakai_2-5-x/content-impl/impl/src/java/org/sakaiproject/content/impl
      X-Content-Type-Outer-Envelope: text/plain; charset=UTF-8
      X-Content-Type-Message-Body: text/plain; charset=UTF-8
      Content-Type: text/plain; charset=UTF-8
      X-DSPAM-Result: Innocent
      X-DSPAM-Processed: Sat Jan  5 09:14:16 2008
      X-DSPAM-Confidence: 0.8475
      X-DSPAM-Probability: 0.0000


While the *file handle* object does not contain the actual data in the
file, it is quite easy to construct a ``for`` loop to read
through each line and count the number of lines in a file:


.. activecode:: fileLines
    :caption: Opening and counting the lines in a file
    :datafile: mbox-short.txt

    fhand = open('mbox-short.txt')
    count = 0
    for line in fhand:
        count = count + 1
    print('Line Count:', count)

We can use the file handle object in a ``for`` loop.
Our ``for`` loop simply counts the number of lines in the file
and prints them out. The rough translation of the ``for`` loop
into English is, "for each line in the file represented by the file
handle object, add one to the ``count`` variable."

The reason that the ``open`` function does not read the entire
file is that the file might be quite large with many gigabytes of data.
The ``open`` statement takes the same amount of time regardless
of the size of the file. The ``for`` loop actually causes the
data to be read from the file.

When the file is read using a ``for`` loop in this manner,
Python takes care of splitting the data in the file into separate lines
using the newline character. Python reads each line through the newline
and includes the newline as the last character in the ``line``
variable for each iteration of the ``for`` loop.

Because the ``for`` loop reads the data one line at a time, it
can efficiently read and count the lines in very large files without
running out of main memory to store the data. The above program can
count the lines in any size file using very little memory since each
line is read, counted, and then discarded.

.. fillintheblank:: file-read-fitb-lines

    When using a for loop to read lines, how many lines are read at a time?

    - :([Oo]ne)|1: When using a for loop, the program reads each line individually.
      :.*: Try again.

If you know the file is relatively small compared to the size of your
main memory, you can read the whole file into one string using the
``read`` method on the file handle.

.. activecode:: fileSlice
    :caption: Using the read function with files
    :datafile: mbox-short.txt

    fhand = open('mbox-short.txt')
    inp = fhand.read()
    print(len(inp))
    print(inp[:20])


In this example, the entire contents (all 94,626 characters) of the file
*mbox-short.txt* are read directly into the variable
``inp``. We use string slicing to print out the first 20
characters of the string data stored in ``inp``.

When the file is read in this manner, all the characters including all
of the lines and newline characters are one big string in the variable
``inp``. It is a good idea to store the output of ``read`` as a variable
because each call to ``read`` exhausts the resource:

.. code-block:: python

    >>> fhand = open('mbox-short.txt')
    >>> print(len(fhand.read()))
    94626
    >>> print(len(fhand.read()))
    0


Remember that this form of the ``open`` function should only be used
if the file data will fit comfortably in the main memory of your computer.
If the file is too large to fit in main memory, you should write your
program to read the file in chunks using a ``for`` or ``while`` loop.

.. parsonsprob:: file-read-pp-code
    :practice: T
    :numbered: left
    :adaptive:

    Put the following code in order so that it uses a for each loop to read the file and print out the total number of lines.
    -----
    count = 0
    file_handler = open('textFile.txt')
    =====
    for line in file_handler:
    =====
        count = count + 1
    =====
    print('Line Count:', count)
