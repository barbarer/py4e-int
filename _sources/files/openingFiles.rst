Opening files
-------------
.. index::
    pair: Function; Open
    pair: File; Open
    single: File Handle


When we want to read or write a file (say on your hard drive), we first
must *open* the file. Opening the file communicates with
your operating system, which knows where the data for each file is
stored. When you open a file, you are asking the operating system to
find the file by name and make sure the file exists. In this example, we
open the file *mbox.txt*, which should be stored in the same
folder that you are in when you start Python. You can download this file
from `www.py4e.com/code3/mbox.txt <http://www.py4e.com/code3/mbox.txt>`_
For learning purposes, we are using the shortened version of this file
``mbox-short.txt`` This file can be found and downloaded from
`www.py4e.com/code3/mbox-short.txt <http://www.py4e.com/code3/mbox-short.txt>`_

Click on the button to show the first lines from this file.


.. reveal:: mbox-short.txt
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


.. activecode:: fileOpen
    :caption: Opening a file
    :datafile: mbox-short.txt

    fhand = open('mbox-short.txt')
    print(fhand)

.. fillintheblank:: file-open-fitb-start

    Complete this line to open the file for reading: fhand = ______('mbox-short.txt')

    - :open: Yes, "open" is used to open a file.
      :.*: Try again.

If the ``open`` is successful, the operating system returns
a *file handle* object. The file handle object is not the actual data
contained in the file, but instead it is a "handle" that we can use to
read the data. You are given a handle if the requested file exists and
you have the proper permissions to read the file.

.. figure:: ../images/handle.svg
    :alt: A File Handle

.. fillintheblank:: file-open-fitb-object
    :practice: T

    A file |blank| is an object that is used to read or modify a file, not the actual data in a file.

    - :[Hh]andle: A file handle is used to read the data of a file.
      :.*: Try again.

If the file does not exist, ``open`` will fail with a traceback
and you will not get a file handle object.

.. code-block:: python

    >>> fhand = open('stuff.txt')
    Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
    FileNotFoundError: [Errno 2] No such file or directory: 'stuff.txt'

Later we will use ``try`` and ``except`` to deal more
gracefully with the situation where we attempt to open a file that does
not exist.

.. mchoice:: file-open-mc-exist
    :practice: T
    :answer_a: the program will close
    :answer_b: nothing
    :answer_c: open will fail
    :answer_d: the program will create a new file
    :correct: c
    :feedback_a: If a file does not exist, the program will not close, but cannot run as expected.
    :feedback_b: Something *will* happen if the file does not exist.
    :feedback_c: If a file does not exist, open will fail and you will get an error.
    :feedback_d: The program will not make a new file on its own if it tries to open a file that does not exist.

    What will happen if you try to open a file that does not exist?
