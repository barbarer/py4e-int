Group Work: Reading from Files
----------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Learn several ways to read data from a file.
* Learn how to use try and except.
* Learn how to use ``with open`` for opening a file
* Learn how to write data to a file.
* Use a dictionary to track counts of items.

*Process Objectives:*

* Modify code that reads from files
* Modify code to handle an exception
* Fix code that reads from a file

Reading from Files
===============================

To read from a file, open the file which returns a file object and loop through
the lines in a file.  Remember to close the file when you are done reading from it!

.. reveal:: dogs.txt
   :showtitle: Show
   :hidetitle: Hide

   .. code-block::

      Labrador Retriever
      German Shepherd
      Golden Retriever
      Beagle
      Bulldog
      Yorkshire Terrier
      Boxer
      Poodle
      Rottweiler
      Dachshunds

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

    What type of thing is ``file_obj`` in the code above?

    - :'?file'?: It is an object of the file class.
      :.*: What is the class name that was printed?

You can also read all the lines from a file at once into a list.  One advantage
to this is that you can immediately close the file after that.  This makes it easier to remember to close the file.

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

.. note::

   You can use either ``open(file,"r")`` or just ``open(file)`` to read from a file.

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

You can use ``try`` and ``except`` to handle code that can cause exceptions. Put the code that can cause the exception in the ``try`` block.


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

.. note::

   When you use ``with open(file) as name:`` the file is closed automatically when you leave the block (indented area).

.. parsonsprob:: file_char_count_with_open
    :numbered: left
    :adaptive:
    :order: 6, 5, 3, 4, 1, 7, 0, 2
    :practice: T

    Create a function, ``num_chars(filename)``, that returns the number of total characters (including new lines) in the file with the passed file name.  Initialize a count then open the file and loop through all of the lines in the file and add the length of each line to the count.  Close the file.  Then return the count.  There are extra blocks that are not needed in the solution.
    -----
    def num_chars(filename):
    =====
        count = 0
    =====
        with open(filename) as file:
    =====
        while open(filename) as file: #distractor
    =====
            for line in file:
    =====
                count += len(line)
    =====
        file.close() #distractor
    =====
        return count

.. parsonsprob:: file_char_count_open
    :numbered: left
    :adaptive:
    :order: 7, 1, 3, 0, 5, 4, 2, 6
    :practice: T

    Create a function, ``num_chars(filename)``, that returns the number of total characters (including new lines) in the file with the passed file name.  Initialize a count then open the file and loop through all of the lines in the file and add the length of each line to the count.  Close the file.  Then return the count.  There is an extra block that is not needed in the solution.
    -----
    def num_chars(filename):
    =====
        count = 0
    =====
        file = open(filename):
    =====
        file = with open(filename): #distractor
    =====
        for line in file:
    =====
            count += len(line)
    =====
        file.close()
    =====
        return count


.. fillintheblank:: file_pogil_line_count_type_returned

    What type of thing is returned from the function below?

    - :dictionary: It will return a dictionary with the counts of the number of lines in the file that start with a character.
      :.*: What type of thing is b_dict?


.. activecode:: file_pogil_dict_count
    :caption: Using a dictionary to count items
    :datafile: dogs.txt

    Run the code below to see what it prints.
    ~~~~
    # function definition
    def count_first(file):
        b_dict = {}
        file_obj = open(file)
        for line in file_obj:
            first_letter = line[0]
            b_dict[first_letter] = b_dict.get(first_letter, 0) + 1
        file_obj.close()
        return b_dict

    print(count_first("dogs.txt"))

.. note ::

   Notice how the code above handles the case when the key isn't yet in the dictionary.  The ``get(key, alternative)`` method on a dictionary will return the value for the key if it is in the dictionary, otherwise it return return the alternative.


If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: read_files_groupsub
   :limit: 3
