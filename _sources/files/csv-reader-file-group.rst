Group Work: Using a CSV reader/writer
----------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Use csv.reader to read a file with columns that may contain commas
* Use csv.writer to write a csv file

*Process Objectives:*

* Modify code that uses a csv.reader
* Fix code that uses a csv.reader

CSV Reader
====================================

Many people need to read and process CSV files. There is a module that makes this process easier.

Look at the data in the file below.

.. datafile:: stocks2.txt
    :fromfile: stocks.txt

We can write Python code to read the data using a csv reader and find the date with the highest value at the close.

.. activecode:: csv_reader_file_stocks_find_date_with_highest_close_ac
    :language: python3
    :datafile: stocks2.txt

    Run the code below to find the date with the highest value at the close.
    ~~~~
    import csv

    # get the lines from the file
    inFile = open("stocks2.txt")
    csv_file = csv.reader(inFile)

    # init max_close and max_date
    max_close = 0
    max_date = ""

    # for each row in the file
    for row in csv_file:

        # get the values
        date = row[0]
        close = float(row[4])

        # if the current close is greater then save it and the date
        if close > max_close:
            max_close = close
            max_date = date

    inFile.close()
    print(f"Max close {max_close} on {max_date}")

.. mchoice:: csv_reader_type_of_row
    :practice: T
    :answer_a: string
    :answer_b: list
    :answer_c: dictionary
    :answer_d: integer
    :correct: b
    :feedback_a: It is not a string when you use a csv reader
    :feedback_b: The csv reader returns each row as a list of string values
    :feedback_c: It is not a dictionary
    :feedback_d: It is not an integer

    What type of thing is ``row`` in the code above?

.. mchoice:: csv_reader_steps_mcq
    :practice: T
    :answer_a: import csv
    :answer_b: convert the file handle object to a csv reader object
    :answer_c: split the data at commas
    :answer_d: close the file handle object
    :correct: a, b
    :feedback_a: To use a csv reader you must import csv
    :feedback_b: To use a csv reader you must convert the file handle object to a csv reader object
    :feedback_c: Incorrect, the csv reader will split at commas (or the specified delimeter) automatically
    :feedback_d: You should close the file handle object whenever you open it but it won't give you an error if you don't

    Which of these must you do to use a csv reader to read a csv file?


Reading Comma-Separated Values (CSV) Files with a Header Row
===============================================================

Here is another sample example CSV file.  It contains the number of passengers (in thousands) for transatlantic air travel for each month for the years 1958 to 1960.  The first row is a header that explains the data. The data is from https://people.sc.fsu.edu/~jburkardt/data/csv/csv.html.

.. datafile:: airtravel1.csv
    :fromfile: airtravel.csv

We can read the data from the file and store it in a nested dictionary. In this case the outer dictionary will use the month as the key and the inner dictionary will use the years as the keys.  It will use the data from the header row for the year keys.

.. activecode:: csv_reader_airtravel_get_toal_for_year_ac
    :language: python3
    :datafile: airtravel1.csv

    Run the code below.  It is supposed to print the nested dictionary and then the total number of passengers (in thousands) for 1958, but there are errors.  Fix the errors so that all tests pass.
    ~~~~
    import csv

    def get_dict(file):

        d = {}

        # get the file handler
        inFile = open(file)
        csvFile = csv.Reader(inFile)

        # read the header row
        headers = next(csvFile)

        # read the rest of the lines from the file handler
        for row in inFile:

            if len(row) == 4:
                month = row[0]
                data_1 = int(row[1])
                data_2 = int(row[2])
                data_3 = int(row[3])

                year_d = {}
                year_d[headers[1]] = data_1
                year_d[headers[2]] = data_2
                year_d[headers[3]] = data_3
                d[month] = year_d

        inFile.close()
        return d

    def get_total_for_year(travel_d, year):
        total = 0
        for key in travel_d:
            data_d = travel_d[key]
            total += data_d[year]
        return total

    travel_d = get_dict("airtravel1.csv")
    print(travel_d)
    total = get_total_for_year(travel_d, "1958")
    print(total)

    =====

    import unittest

    class myTests(unittest.TestCase):

       def testOne(self):
          travel_d = get_dict("airtravel1.csv")
          self.assertEqual(get_total_for_year(travel_d, "1958"), 4572, 'get_total_for_year(travel_d, "1958")')
          self.assertEqual(get_total_for_year(travel_d, "1959"), 5140, 'get_total_for_year(travel_d, "1959")')
          self.assertEqual(get_total_for_year(travel_d, "1960"), 5714, 'get_total_for_year(travel_d, "1960")')

    unittest.main()

.. fillintheblank:: csv_reader_read_one_row
    :practice: T

    What function can you use to read just one row from a csv reader?

    - :next\(?\)?: Use the function ``next`` to read a single row
      :.*: Look at the code above. How do we read the header row?

.. activecode:: csv_reader_airtravel_get_max_month_ac
    :language: python3
    :datafile: airtravel1.csv

    Fix the code below to work correctly.  It should print the month with the highest number of passengers in 1958.
    ~~~~
    def get_dict(file):

        d = {}

        # get the file handler
        inFile = open(file)
        csvFile = csv.reader()

        # skip the header
        headers = next(inFile)

        # read the rest of the lines from the file handler
        for row in csvFile:

            if len(values) == 4:
                month = values[0]
                data_1 = int(row[1])
                data_2 = int(row[2])
                data_3 = int(row[3])

                year_d = {}
                year_d[headers[0]] = data_1
                year_d[header[2]] = data_2
                year_d[header[3]] = data_3
                d[month] = year_d

        inFile.close()
        return d

    def get_max_month(travel_d, year):
        d = {}
        for month in travel_d:
            month_d = travel_d[month]
            d[month] = month_d[year]
        tup_list = sorted(d.items(), key = lambda t: t[0], reverse = True)
        return tup_list[0]

    travel_d = get_dict("airtravel1.csv")
    print(travel_d)
    month, amount = get_max_month(travel_d, "1958")
    print(month, amount)

    =====

    import unittest

    class myTests(unittest.TestCase):

       def testOne(self):
          travel_d = get_dict("airtravel1.csv")
          self.assertEqual(get_max_month(travel_d, "1958")[0], "AUG", 'get_max_month(travel_d, "1958")[0]')
          self.assertEqual(get_max_month(travel_d, "1959")[0], "AUG", 'get_max_month(travel_d, "1959")[0]')
          self.assertEqual(get_max_month(travel_d, "1960")[0], "JUL", 'get_max_month(travel_d, "1960")[0]')

    unittest.main()


Writing a Comma-Separated Values (CSV) File with CSV Writer
===============================================================

Here is another sample example CSV file.  It contains the Oscar winners for Best Actress from 1928 to 2016.  It has a header row to explain the data in each column.

.. datafile:: oscar_age_actress1.csv
    :fromfile: oscar_age_actress.csv

We can read the data from the file and store it in a list of dictionaires where the keys in the dictionary are 'year', 'age', 'name', and 'movie'.

.. activecode:: csv_reader_oscar_actress_age_dictionary
    :language: python3
    :datafile: oscar_age_actress1.csv

    Run the code below.  It should read all the data into a list of dictionaries.  Then it should create a new dictionary where the key is the age and the value is the number of actresses who won at that age. It should sort the items in the dictionary by the number of winners descending and return the top five tuples. Then it will write the data to a csv file using a csv writer.
    ~~~~
    import csv

    def get_list(file):

        l = []

        # get the file handler
        inFile = open(file)
        csv_file = csv.reader(inFile,quotechar='"', delimiter=',',
                              quoting=csv.QUOTE_MINIMAL, skipinitialspace=True)

        # read the header
        headers = next(csfFile)

        # read the rest of the lines from the file handler
        for row in csvFile:

            d = {}

            if len(values) == 5:
                year = row[1].strip()
                d["year"] = year
                age = row[2].strip()
                d["age"] = age
                name = row[3]
                d["name"] = name.strip('" ')
                movie = row[4]
                d["movie"] = movie.strip('" ')
                l.append(d)

        inFile.close()
        return l

    def get_top_five_by_age(l):
        age_d = {}
        for d in l:
            age = d["age"]
            age_d[age] = age_d.get(age,0) + 1
        out = sorted(age_d.items(), key = lambda t: t[1], reverse = True)
        return out[0:5]

    def write_top_five(file_name,tuple_list):
        outFile = open("file_name", "w")
        csvOut = csv.writer(outFile)
        for tuple in tuple_list:
            csvOut.write(tuple)

    dict_list = get_list('oscar_age_actress1.csv')
    print(dict_list[0])
    age_list = get_top_five_by_age(dict_list)
    print(age_list)
    write_top_five("top_five.csv", age_list)

    =====

    import unittest

    class myTests(unittest.TestCase):

       def testOne(self):
          l = get_list('oscar_age_actress1.csv')
          self.assertEqual(get_top_five_by_age(l)[0][0], '29', 'get_top_five_by_age(l)[0][0]')
          self.assertEqual(get_top_five_by_age(l)[0][1], 8, 'get_top_five_by_age(l)[0][1]')
          self.assertEqual(get_top_five_by_age(l)[1][0], '26', 'get_top_five_by_age(l)[1][0]')
          self.assertEqual(get_top_five_by_age(l)[1][1], 6, 'get_top_five_by_age(l)[1][1]')
          self.assertEqual(get_top_five_by_age(l)[2][0], '33', 'get_top_five_by_age(l)[2][0]')
          self.assertEqual(get_top_five_by_age(l)[2][1], 6, 'get_top_five_by_age(l)[2][1]')
          self.assertEqual(get_top_five_by_age(l)[3][0], '35', 'get_top_five_by_age(l)[3][0]')
          self.assertEqual(get_top_five_by_age(l)[3][1], 5, 'get_top_five_by_age(l)[3][1]')
          self.assertEqual(get_top_five_by_age(l)[4][0], '41', 'get_top_five_by_age(l)[4][0]')
          self.assertEqual(get_top_five_by_age(l)[4][1], 5, 'get_top_five_by_age(l)[4][1]')


    unittest.main()

.. mchoice:: csv_reader_what_can_be_spec
    :practice: T
    :answer_a: delimeter
    :answer_b: quote character
    :answer_c: if initial space should be skipped
    :answer_d: the number of columns
    :correct: a,b,c
    :feedback_a: It is not a string when you use a csv reader
    :feedback_b: The csv reader returns each row as a list of values
    :feedback_c: It is not a dictionary
    :feedback_d: The number of columns is determined by the delimiter and quote character

    What type of things can be specified when you create the csv reader?

.. mchoice:: csv_write_diff_with_file_writer
    :practice: T
    :answer_a: You can write all the rows at once
    :answer_b: It automatically adds a new line
    :answer_c: You write out a list of values
    :answer_d: It automatically converts numbers to strings to write each line
    :correct: b,c,d
    :feedback_a: No, you still write out each line one at a time
    :feedback_b: Yes, it automatically adds a new line
    :feedback_c: Yes, you write out a list of values rather than a string
    :feedback_d: Yes, it automatically converts values to strings

    How is a csv writer different from a file writer?

You can read more about the CSV module at https://docs.python.org/3/library/csv.html.

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: csv_reader_group_sub
   :limit: 3
