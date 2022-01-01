Group Work: File Basics
----------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Learn about file path, file name, and file extension.
* Learn how to use terminal commands to navigate a file system.
* Learn to use the terminal window to execute Python code.


*Process Objectives:*

* Identify a file path, name, and extension.
* Use terminal commands to navigate to a desired directory / folder

File Paths, Names, and Extensions
====================================

A file is saved data in secondary storage on a computer. This type of storage persists
even if you turn off power to the computer.

A file has a **path**, a **name**, and an **extension**.
You have probably downloaded a file to your computer (such as ``TurtleEx1.py``).

On a Apple computer you
can find this file in the ``Downloads`` folder.  The path to that file is
``/Users/username/Downloads/``.  It is the list of parent directories/folders.  On a Windows computer the path would
typically be ``C:\users\your name\downloads\``.  One of the things you need
to be aware of when you read and write files is the path to the file.

The file name
is what you have actually called the file. In this case it would be ``TurtleEx1``.

The file extension is typically three to four characters following a ``.`` after the name.
In this case the extension is ``py`` which means that it is a file with Python code in it.
The ``txt`` extension is used for a plain text file.

.. clickablearea:: file_ca_path
    :practice: T
    :question: Click on the path for the file shown below.
    :iscode:
    :feedback: The path is the list of directories for the file separated by either / or \.

    :click-correct:/Users/username/Downloads/:endclick::click-incorrect:Test:endclick::click-incorrect:.py:endclick:

.. clickablearea:: file_ca_name
    :practice: T
    :question: Click on the just the file name for the file shown below.
    :iscode:
    :feedback: The path is the list of directories for the file separated by either / or \.

    :click-incorrect:/Users/username/Downloads/:endclick::click-correct:Test:endclick::click-incorrect:.py:endclick:

.. clickablearea:: file_ca_extension
    :practice: T
    :question: Click on the just the extension for the file shown below.
    :iscode:
    :feedback: The path is the list of directories for the file separated bpicy either / or \.

    :click-incorrect:/Users/username/Downloads/:endclick::click-incorrect:Test:endclick::click-correct:.py:endclick:

Using Terminal Commands to Navigate a File System
=======================================================

Your computer has a top level directory or folder.  This is called the **root** of the file system.  Every directory/folder can hold other directories/folders. This type of structure is called a **tree**.

You can open a terminal window on your computer and run Python by typing python in the terminal window.

If you want to read from a file you will need to be in the same directory as the file.  How can you do that in the terminal window?  You can use terminal commands to change directories.






If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: file_baics_groupsub
   :limit: 3
