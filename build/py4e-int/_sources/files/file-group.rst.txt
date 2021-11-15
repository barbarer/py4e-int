Group Work: Reading from Files
----------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. groupsub:: read_files_groupsub
   :limit: 3

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Learn about file path, file name, and file extension.
* Learn several ways to read data from a file.
* Learn how to use try and except.
* Learn how to use ``with open`` for opening a file

*Process Objectives:*

* Identify a file path, name, and extension.
* Modify code that reads from files
* Modify code to handle an exception

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
    :feedback: The path is the list of directories for the file separated by either / or \.

    :click-incorrect:/Users/username/Downloads/:endclick::click-incorrect:Test:endclick::click-correct:.py:endclick:

Reading from Files
===============================

To read from a file, open the file which returns a file object and loop through
the lines in a file.  Close the file when you are done reading from it.

.. datafile:: dogs.txt
    :fromfile: dogs.txt

.. activecode:: file_pogil_read_lines_with_loop
    :caption: Reading lines from a file.
    :datafile: dogs.txt

    Run the code below to see what it prints.
    ~~~~
    # function definition
    def print_contents(file):
        file_obj = open(file)
        print(type(file_obj))
        for line in file_obj:
            print(line)
        file_obj.close()

    print_contents("dogs.txt")

Notice that when you run this code it adds a blank line after each line.
That is because when you read a line from a file the line contains the newline character (``\n``).
When you print a line you add another newline character which prints as a blank line.

.. fillintheblank:: file_remove_newline
    :practice: T

    What string method can you use to remove the newline character from the end of a line?

    - :rstrip|strip: You can use rstrip or strip to remove the newline character.
      :.*: What method removes whitespace from the right side of a string?

Modify the code above to remove the newline from each line after it is read in.

.. fillintheblank:: file_obj_type_fitb
    :practice: T

    What type of thing is ``file_obj`` in the code above?

    - :'?file'?: It is an object of the file class.
      :.*: What is the class name that was printed?

You can also read all the lines from a file at once into a list.  One advantage
to this is that you can immediately close the file after that.

.. activecode:: file_pogil_read_lines_list
    :caption: Reading lines from a file.
    :datafile: dogs.txt

    Run the code below to see what it prints.
    ~~~~
    # function definition
    def print_contents(file):

        # get the contents
        file_obj = open(file, "r")
        lines = file_obj.readlines()
        file_obj.close()

        # process the lines
        for line in lines:
            line = line.rstrip() # remove newline
            print(line)

    print_contents("dogs.txt")

.. fillintheblank:: line_file_close_fitb
    :practice: T

    What method do you use to close a file that you have opened?

    - :close: This will close the file object.
      :.*: Look at the example Python code above.

.. shortanswer:: file_read_all_lines_at_once_sa

   When would it not be best to read all of the lines in a file into a list at once?

You can also just read some of the lines from a file using the ``readline`` method.  This can be handy
if you just want to see what type of data is in a file, but don't need to see the entire file.

.. activecode:: file_pogil_read_x_lines
    :caption: Reading lines from a file.
    :datafile: dogs.txt

    Run the code below to see what it prints.
    ~~~~
    # function definition
    def print_contents(file, num):
        file_obj = open(file)
        for i in range(num):
            line = file_obj.readline()
            line = line.rstrip()
            print(line)
        file_obj.close()

    print_contents("dogs.txt", 2)


Modify the code above to print 4 lines and run it again.

.. shortanswer:: file_read_lines_no_file

   What do you think will happen when you try to run the code below?

.. activecode:: file_pogil_read_lines_wrong_file_name
    :caption: Reading lines from a file.
    :datafile: dogs.txt

    Run the code below to see what it prints.
    ~~~~
    # function definition
    def print_contents(file):

        # get the contents
        file_obj = open(file, "r")
        lines = file_obj.readlines()
        file_obj.close()

        # process the lines
        for line in lines:
            line = line.rstrip() # remove newline
            print(line)

    print_contents("unknown.txt")

.. note::

   If the file that you try to open is not found, you will get an error.

.. activecode:: file_pogil_read_lines_try_and_catch
    :caption: Reading lines from a file.
    :datafile: dogs.txt

    Run the code below to see what it prints.  When it asks for another file name type in 'dogs.txt'.
    ~~~~
    # function definition
    def print_contents(file):

        # try to read from the file
        try:
            # get the contents
            file_obj = open(file, "r")

        # if there is an exception ask for another file name
        except:
            file = input("The specified file doesn't exist.  Enter another name")
            file_obj = open(file, "r")

        # read the lines and close the file
        lines = file_obj.readlines()
        file_obj.close()

        # process the lines
        for line in lines:
            line = line.rstrip() # remove newline
            print(line)

    print_contents("unknown.txt")

You can use ``try`` and ``except`` to handle code that can cause exceptions.


.. fillintheblank:: line_file_open_except_fitb
    :practice: T

    What keyword do you use to specify code to execute if there is an error when the code in the body of the ``try`` executes?

    - :except: The code specified in the body of the except will run if there is an exception when the code in the body fo the try runs.
      :.*: Look at the example Python code above.


You can also use ``with open(file) as name`` which will automatically close the file after the code block ends. It is particularly important to close the file when you write data to a file.

.. activecode:: file_pogil_read_lines_list_with
    :caption: Reading lines from a file.
    :datafile: dogs.txt

    Run the code below to see what it prints.
    ~~~~
    # function definition
    def print_contents(file):

        # this will automatically close the file too
        with open(file) as file_obj:

            # read the lines
            lines = file_obj.readlines()

        # process the lines
        for line in lines:
            line = line.rstrip() # remove newline
            print(line)

    print_contents("dogs.txt")
