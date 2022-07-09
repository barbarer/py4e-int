Multiple Choice Questions
--------------------------

.. mchoice:: fileEx_read_v2
    :practice: T
    :answer_a: infile = open("myText.txt", “w”)
    :answer_b: infile = open("myText.txt", r)
    :answer_c: infile = open("myText.txt", “read”)
    :answer_d: infile = open("myText.txt")
    :correct: d
    :feedback_a: This will open in write-only mode.
    :feedback_b: The r must be in quotes.
    :feedback_c: Use "r" for read-only mode.
    :feedback_d: The default is read if no mode is specified

    Which of the following can be used to open a file called ``myText.txt`` in read-only mode?

.. mchoice:: fileEx_write_v2
    :practice: T
    :answer_a: outfile = open("myText.txt", w)
    :answer_b: outfile = open("myText.txt", “write”)
    :answer_c: outfile = open("myText.txt", “w”)
    :answer_d: outfile = open("myText.txt")
    :correct: c
    :feedback_a: The w must be in quotes.
    :feedback_b: Use "w" for write-only mode.
    :feedback_c: This will open the file in write-only mode.
    :feedback_d: This would open the file in read-only mode.

    Which of the following can be used to open a file called ``myText.txt`` in write-only mode?

.. mchoice:: fileEx_close_v2
    :practice: T
    :answer_a: close()
    :answer_b: ref_file.close()
    :answer_c: close(ref_file)
    :answer_d: close("myText")
    :correct: b
    :feedback_a: You must call this method on the file object.
    :feedback_b: This closes the file using the variable it has been assigned to.
    :feedback_c: The command close() needs to be called on the file object using dot notation.
    :feedback_d: The command close() needs to be called on the file object using dot notation.

    Which command below closes the already open file ``myText.txt`` if the following code has already been written?

    ::

        ref_file = open("myText.txt", "r")

.. mchoice:: fileEx_writeLine
    :practice: T
    :answer_a: filevar.append(somestring)
    :answer_b: filevar.write("somestring")
    :answer_c: filevar.write(somestring)
    :answer_d: somestring.write()
    :correct: c
    :feedback_a: Append is a command used for lists, not files.
    :feedback_b: somestring is a variable and does not need quotation marks around it.
    :feedback_c: Using dot notation, we can call the write command with the string variable inside the parentheses.
    :feedback_d: The command write() needs to be called on the file object, not the string itself.

    Which of the commands below is used to add the following string to the end of a file object ``filevar``?

    ::

        somestring = "my Sentence"

.. mchoice:: fileEx_printNames
    :practice: T
    :answer_a: I
    :answer_b: II
    :answer_c: III
    :answer_d: None of the above.
    :correct: b
    :feedback_a: Append is a command used for lists, not files.
    :feedback_b: somestring is a variable and does not need quotation marks around it.
    :feedback_c: Using dot notation, we can call the write command with the string variable inside the parentheses.

    The contents of ``names.txt`` is listed here:

    ::

        Moana
        Cinderella
        Tiana

    Which of the following code blocks will print all of the names in ``names.txt``?

    ``I``

    ::

        names = open("names.txt", "r")
        for line in names:
            print(names)

    ``II``

    ::

        names = open("names.txt", "r")
        for line in names:
            print(line)

    ``III``

    ::

        names = open("names.txt", "r")
        for line in names:
            print("line")

.. mchoice:: fileEx_catch_v2
    :practice: T
    :answer_a: catch
    :answer_b: except
    :answer_c: exception
    :answer_d: error
    :correct: b
    :feedback_a: This is used in other languages, but not in Python
    :feedback_b: Use except to execute code when an error occurs.
    :feedback_c: Close, but it is shorter.
    :feedback_d: Try again.

    What keyword do you use to specify code to execute if there is an error when the body of the ``try`` executes?

.. mchoice:: fileEx_how_many_errors
    :practice: T
    :answer_a: 1
    :answer_b: 2
    :answer_c: 3
    :answer_d: 4
    :correct: d
    :feedback_a: Try again
    :feedback_b: Try again
    :feedback_c: Try again
    :feedback_d: The first line is missing a ":", the third shouldn't have file_obj in quotes, the fourth should use line rather than line_obj, and the close is missing.

    How many errors are in the code below?  It should open the file in read-only mode, read each line and print each line and then close the file.

    ::

        def print_contents(file)
            file_obj = open(file)
            for line in "file_obj":
                print(line_obj)
