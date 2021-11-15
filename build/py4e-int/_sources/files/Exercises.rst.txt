Multiple Choice Questions
--------------------------

.. mchoice:: fileEx_read
    :practice: T
    :answer_a: infile = open(myText.txt, “r”)
    :answer_b: infile = open("myText.txt", “r”)
    :answer_c: infile = open("myText.txt", “w”)
    :correct: b
    :feedback_a: Using the file name without quotation marks makes Python think the file name is a variable name here.
    :feedback_b: We provide a string with file name + "r" which means read only.
    :feedback_c: "w" opens the file in writing mode.


    Which of the following commands is used to open a file called ``myText.txt`` in Read-Only mode?

.. mchoice:: fileEx_write
    :practice: T
    :answer_a: outfile = open("myText.txt", "w")
    :answer_b: outfile = open("myText.txt", “r”)
    :answer_c: outfile = open(myText.txt, “w”)
    :correct: a
    :feedback_a: We provide a string with file name + "w" which means write only.
    :feedback_b: "r" opens the file in reading mode.
    :feedback_c: Using the file name without quotation marks makes Python think the file name is a variable name here


    Which of the following commands is used to open a file called ``myText.txt`` in Write-Only mode?

.. mchoice:: fileEx_close
    :practice: T
    :answer_a: "myText".close()
    :answer_b: ref_file.close()
    :answer_c: close(ref_file)
    :answer_d: close("myText")
    :correct: b
    :feedback_a: The title of the file is a string and a string cannot be closed in Python.
    :feedback_b: This closes the file using the variable it has been assigned to.
    :feedback_c: The command close() needs to be called on the file's variable using dot notation.
    :feedback_d: The command close() needs to be called on the file's variable using dot notation.

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
    :feedback_d: The command write() needs to be called on the file's variable, not the string itself.

    Which of the commands below is used to add the following string to the end of a file referenced with the variable ``filevar``?

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

.. mchoice:: fileEx_loop
    :practice: T
    :answer_a: For loop
    :answer_b: While loop
    :correct: a
    :feedback_a: A for loop is typically used to iterate through the lines in a file.
    :feedback_b: A while loop can be used to run through lines in a file, but to iterate through, it is more common to use a for loop.

    What type of loop was used in this chapter to iterate through the lines in a file?

.. mchoice:: fileEx_catch
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Try/except statements are used to prevent an exception from terminating a program.
    :feedback_b: Try/except statements are a catch for programs. What does that mean?

    True or False? Try and except statements are used to catch errors.

.. fillintheblank:: fileEx_r
    :practice: T

    What letter is used to indicate that a file is opening in read only mode?

    - :[Rr]: Adding "r" to the end of a file opening command will open it in reading mode.
      :[Ww]: "w" is used to indicate writing mode.
      :.*: Try again!

.. fillintheblank:: fileEx_w
    :practice: T

    What letter is used to indicate that a file is opening in write only mode?

    - :[Ww]: Adding "w" to the end of a file opening command will open it in writing mode.
      :[Rr]: "r" is used to indicate reading mode.
      :.*: Try again!

.. fillintheblank:: fileEx_line
    :practice: T

    Lines in a file are separated by what character?

    - :([Nn]ewline)|(\\n): A newline (or the symbol \n) is used to separate the lines in a file.
      :.*: Try again!
