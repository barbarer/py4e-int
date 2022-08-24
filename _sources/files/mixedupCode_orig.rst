Mixed-up Code Questions
------------------------

.. parsonsprob:: file_write_line_pp
    :numbered: left
    :adaptive:
    :practice: T

    Create a function ``write_line(file, output)`` that writes the contents of the string ``output`` to ``file``.  Be sure to add a newline character ``"\n"`` when you write ``output`` to the file.
    -----
    def write_line(file, output):
    =====
        fout = open(file, 'w')
    =====
        fout = open(file, 'r') #paired
    =====
        fout.write(output + "\n")
    =====
        fout.write(output) #paired
    =====
        fout.close()
    =====
        fout.close #paired


.. activecode:: file_write_line_ac
    :practice: T
    :autograde: unittest

    Write a function ``write_line(file, output)`` that writes the contents of the string ``output`` to ``file``.  Be sure to add a newline character ``"\n"`` when you write ``output`` to the file. Also make sure that you close the file after writing to it.
    ~~~~
    def write_line(file, output):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            m = 'Python rocks!'
            write_line('temp.txt', m)
            fin = open('temp.txt')
            line = fin.readline()
            self.assertEqual(line.rstrip(), m, "Testing write_line with rstrip")
            self.assertEqual(line, m + "\n", "Testing that write_line writes the end of line character"
    myTests().main()


.. parsonsprob:: file_read_n_lines_pp
    :numbered: left
    :adaptive:
    :practice: T

    Create a function ``read_n_lines(file, n)`` that reads the first ``n`` lines from ``file`` and returns them in a list. Be sure to remove the end of line character from each line before you add it to the list and close the file after you have read the lines.
    -----
    def read_n_lines(file, n):
    =====
        out = []
        f = open(file)
    =====
        for i in range(n):
    =====
        for i in range(n+1): #paired
    =====
            line = f.readline()
    =====
            out.append(line.rstrip())
    =====
            out.append(line) #paired
    =====
        f.close()
    =====
        return out


.. activecode:: file_read_n_lines_ac
    :practice: T
    :autograde: unittest
    :datafile: dogs.txt

    Write a function ``read_n_lines(file, n)`` that reads the first ``n`` lines from ``file`` and returns them in a list. Be sure to remove the end of line character from each line before you add it to the list and close the file after you have read the lines
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(read_n_lines("dogs.txt", 3), ["Labrador Retriever", "German Shepherd", "Golden Retriever"], 'read_n_lines(["dogs.txt"], 3)')
            self.assertEqual(read_n_lines("dogs.txt", 2), ["Labrador Retriever", "German Shepherd"], 'read_n_lines(["dogs.txt"], 2)')
    myTests().main()

.. parsonsprob:: file_count_words_pp
    :numbered: left
    :adaptive:
    :practice: T

    Create a function ``count_words(file)`` that returns the number of words in the passed file. First create a variable ``num`` and initialize it.  Then open the
    file. Loop reading a line from the file. Break the line at spaces and add the length of the resulting list to ``num``. After you have read all the lines, close the file and return ``num``.
    -----
    def count_words(file):
    =====
        num = 0
    =====
        file_obj = open(file, "r")
    =====
        for line in file_obj:
    =====
        for line in "file_obj": #paired
    =====
            words = line.split(" ")
    =====
            words = line.break(" ") #paired
    =====
            num = num + len(words)
    =====
            num = num + words #paired
    =====
        file_obj.close()
    =====
        return(num)

.. activecode:: file_count_words_ac
    :practice: T
    :autograde: unittest
    :datafile: dogs.txt

    Write a function ``count_words(file)`` that returns the number of words in the passed file. First create a variable ``num`` and initialize it.  Then open the
    file. Loop reading a line from the file. Split the line at spaces and add the length of the resulting list to ``num``. After you have read all the lines, close the file and return ``num``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(count_words("dogs.txt"), 14, 'count_words("dogs.txt")')
            self.assertEqual(count_words("emotion_words.txt"), 48, 'count_words("emotion_words.txt")')

    myTests().main()

.. parsonsprob:: file_count_lines_starting_with_pp
    :numbered: left
    :adaptive:
    :practice: T

    Create a function ``count_starting_with(file, str)`` that returns the number of lines in the passed ``file`` that start with the characters in ``str``.  Be sure to close the file.
    -----
    def count_starting_with(file, str):
    =====
        num = 0
    =====
        file_obj = open(file)
    =====
        for line in file_obj:
    =====
            if line.startswith(str):
    =====
            if line.startsWith(str): #paired
    =====
                num += 1
    =====
        file_obj.close()
    =====
        file.close() #paired
    =====
        return(num)

.. activecode:: file_count_lines_starting_with_ac
    :practice: T
    :autograde: unittest
    :datafile: dogs.txt

    Create a function ``count_starting_with(file, str)`` that returns the number of lines in the passed ``file`` that start with the characters in ``str``.  Be sure to close the file.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(count_starting_with("dogs.txt" ,"B"), 3, 'count_starting_with("dogs.txt" ,"B")')
            self.assertEqual(count_starting_with("dogs.txt" ,"G"), 2, 'count_starting_with("dogs.txt" ,"G")')
            self.assertEqual(count_starting_with("dogs.txt" ,"P"), 1, 'count_starting_with("dogs.txt" ,"P")')
            self.assertEqual(count_starting_with("emotion_words.txt", "A"), 1, 'count_starting_with("emotion_words.txt", "A")')
            self.assertEqual(count_starting_with("emotion_words.txt", "S"), 2, 'count_starting_with("emotion_words.txt", "S")')

    myTests().main()

.. parsonsprob:: file_write_squares_pp
    :adaptive:
    :practice: T
    :numbered: left

    Create a function ``write_squares(file)`` which writes the squares of 1 (inclusive) to 10 (inclusive) with each one on a single line to ``file``.
    -----
    def write_squares(file)
    =====
        outfile = open(file, "w")
    =====
        for number in range(1, 11):
    =====
        for number in range(1, 10): #paired
    =====
            square = number * number
    =====
            square = number * 2 #paired
    =====
            outfile.write(str(square) + "\n")
    =====
            outfile.write(str(square)) #paired
    =====
        outfile.close()
    =====
        close(outfile) #paired

.. activecode:: file_write_squares_ac
    :practice: T
    :autograde: unittest

    Create a function ``write_squares(file)`` which writes the squares of 1 (inclusive) to 10 (inclusive) with each one on a single line to ``file``.
    ~~~~
    def write_squares(file):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            write_squares('squares.txt')
            fin = open('squares.txt')
            str = ""
            for line in fin:
                str = str + line.rstrip() + ", "

            self.assertEqual(str, "1, 4, 9, 16, 25, 36, 49, 64, 81, 100, ", "testing write_squares form 1 to 10")
    myTests().main()
