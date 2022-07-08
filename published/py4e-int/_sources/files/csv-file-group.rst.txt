Group Work: Reading from CSV Files
----------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Process data in csv files using rstrip, strip, and split.
* Read csv data into a nested dictionary.
* Total data using a dictionary
* Sort data from a dictionary

*Process Objectives:*

* Modify code that reads from csv files
* Fix code that reads from a csv file

Comma-Separated Values (CSV) Files
====================================

One way that we exchange data is by storing it in comma-separated value (CSV) files.  These files have values separated by a symbol, which is often a comma. Each row in the file contains the same type of data.

Look at the data in the file below.  It has a date in day-month-year followed by the opening value, high, low, and closing value.

.. datafile:: stocks1.txt
    :fromfile: stocks.txt

.. fillintheblank:: csv_file_stocks_max_close_fitb
    :practice: T

    What is the highest closing value in the file above?  The closing value is the last value on each line.

    - :11497.12: This is the highest value at the close.
      :.*: Look at the last value on each line and find the highest value.

We can write Python code to read the data and find the date with the highest value at the close.

.. activecode:: csv_file_stocks_find_date_with_highest_close_ac
    :datafile: stocks1.txt

    Run the code below to find the date with the highest value at the close.
    ~~~~
    # get the lines from the file
    with open("stocks1.txt") as inFile:
        lines = inFile.readlines()

    # init max_close and max_date
    max_close = 0
    max_date = ""

    # for each line in the file
    for line in lines:

        # remove the new line and split at commas
        values = line.rstrip().split(',')

        # get the values
        date = values[0]
        close = float(values[4])

        # if the current close is greater then save it and the date
        if close > max_close:
            max_close = close
            max_date = date

    print(f"Max close {max_close} on {max_date}")


.. note ::

   Remember to remove the end of line character and convert the string values to integers or floating point numbers before comparing them or using them in calculations.

What if you want to find several things from the data? You wouldn't want to read the data from the file in every function.  You could read all the data into a nested dictionary and then pass the dictionary to every function. A nested dictionary is a dictionary that has dictionaries for the values.  In this case we can use the date as the key for the outer dictionary and use "open", "high", "low" and "close"
as the keys for each inner dictionary.

.. fillintheblank:: csv_file_stocks_min_close_fitb
    :practice: T

    What is the lowest closing value in the stocks.txt file above?

    - :2258.39: This is the lowest value at the close.
      :.*: Look at the last value on each line and find the lowest value.

.. activecode:: csv_file_stocks_read_into_dictionary_ac
    :datafile: stocks1.txt

    Run the code below to find the date with the highest value at the close and the date with the lowest value at the close.
    ~~~~
    def get_dict(file):
        """ return a nested dictionary from the file """

        # get the lines from the file
        with open("stocks1.txt") as inFile:
            lines = inFile.readlines()

        # initialize the date dictionary
        date_d = {}

        # for each line in the file
        for line in lines:

            # remove the new line and split at commas
            values = line.rstrip().split(',')

            # get all the values from the line and create the inner dictionary
            values_d = {}
            date = values[0]
            op = float(values[1])
            values_d["open"] = op
            high = float(values[2])
            values_d["high"] = high
            low = float(values[3])
            values_d["low"] = low
            close = float(values[4])
            values_d["close"] = close

            # set the value in the outer dictionary for this date to the inner dictionary
            date_d[date] = values_d

        return date_d

    def get_date_min_close(date_d):
        """return the lowest close and the date of that lowest close from the nested dictionary"""
        min_date = ""
        min_close = 100000 #should be larger than any expected value

        # loop through the dates
        for date, values_d in date_d.items():
            close = values_d["close"]
            if close < min_close:
                min_close = close
                min_date = date
        return (min_close, min_date)

    def get_date_max_close(date_d):
        """ return the highest close and the date of the highest close from the nested dictionary """
        max_date = ""
        max_close = 0

        # loop through the dates
        for date, values_d in date_d.items():
            close = values_d["close"]
            if close > max_close:
                max_close = close
                max_date = date
        return (max_close, max_date)

    def get_max_close_for_year(date_d, year):
        max_date = ""
        max_close = 0
        for date, values_d in date_d.items():
            values = date.split("-")
            curr_year = int(values[2])
            curr_close = values_d["close"]
            if curr_year == year and curr_close > max_close:
                max_close = curr_close
                max_date = date
        return (max_close, max_date)


    date_d = get_dict("stocks.txt")
    max_close, max_date = get_date_max_close(date_d)
    print(f"Max close {max_close} on {max_date}")
    min_close, min_date = get_date_min_close(date_d)
    print(f"Min close {min_close} on {min_date}")

.. dragndrop:: csv_file_dnd_string_and_conversion_functions_dnd
    :feedback: What do each of these do?
    :match_1: str.rstrip()|||Returns a new string without trailing white space (including new lines).
    :match_2: float(value)|||Returns a floating point value from a string.
    :match_3: str.split(",")|||Returns a list of items created by splitting the string at commas.
    :match_4: str.strip()|||Returns a new string without leading or trailing white space.
    :match_5: int(value)|||Returns an integer value from a string.

.. mchoice:: csv_file_strip_with_params_mcq
    :practice: T
    :answer_a: 1958
    :answer_b:  "1958
    :answer_c: 1958"
    :answer_d: "1958"
    :correct: b
    :feedback_a: This would be correct if it was strip('" ') since this would remove all spaces and double quotes.
    :feedback_b: Correct!  Since the string starts with a space and you didn't remove the space too using strip('" ') it won't remove the " before the string.
    :feedback_c: This would be true if the string was '"1958" ' (space at the end) rather than ' "1958"' (space at the beginning).
    :feedback_d: This would be true if it was strip() (removes leading and trailing spaces).

    What is output from the following code?

    ::

        print(' "1958"'.strip('"'))

.. parsonsprob:: csv_file_stocks_max_close_for_year_pp
    :numbered: left
    :adaptive:
    :practice: T
    :order: 9, 6, 2, 1, 10, 0, 4, 5, 8, 7, 3

    Create a function, ``get_max_close(date_d, year)``, that takes a nested dictionary ``d`` with the stock data and a two digit ``year`` and returns a tuple with the max close value and date of that max value for the given year.
    -----
    def get_max_close(d, year):
    =====
        max_date = ""
        max = 0
    =====
        max_date = ""
        max = 100000 #paired
    =====
        for date, v_d in d.items():
    =====
            values = date.split("-")
    =====
            values = date.split(",") #paired
    =====
            y = int(values[2])
            c = v_d["close"]
    =====
            if y == year and c > max:
    =====
            if y == year or c > max: #paired
    =====
                max = c
                max_date = date
    =====
        return (max, max_date)



Comma-Separated Values (CSV) Files with a Header Row
=======================================================

Here is another sample example CSV file.  It contains the number of passengers (in thousands) for transatlantic air travel for each month for the years 1958 to 1960.  The first row is a header that explains the data. The data is from https://people.sc.fsu.edu/~jburkardt/data/csv/csv.html.

.. datafile:: airtravel.csv
    :fromfile: airtravel.csv

We can read the data from the file and store it in a nested dictionary. In this case the outer dictionary will use the month as the key and the inner dictionary will use the years as the keys.  It will use the data from the header row for the year keys.

.. activecode:: csv_file_airtravel_get_toal_for_year_ac
    :datafile: airtravel.csv

    Run the code below.  It is supposed to print the nested dictionary and then the total number of passengers (in thousands) for 1958, but there are errors.  Fix the errors so that all tests pass.
    ~~~~
    def get_dict(file):

        d = {}

        # get the file handler
        inFile = open(file)

        # read the header row
        header = inFile.readline()
        header_values = header.split(",")
        header_1 = header_values[1]
        header_2 = header_values[2]
        header_3 = header_values[3]

        # read the rest of the lines from the file handler
        for line in inFile:
            #print(line)
            values = line.split(",")
            if len(values) == 4:
                month = values[0]
                data_1 = values[1]
                data_2 = values[2]
                data_3 = values[3]

                year_d = {}
                year_d[header_1] = data_1
                year_d[header_2] = data_2
                year_d[header_3] = data_3
                d[month] = year_d

        inFile.close()
        return d

    def get_total_for_year(travel_d, year):
        total = 0
        for key in travel_d:
            data_d = travel_d[key]
            total += data_d[year]
        return total

    travel_d = get_dict("airtravel.csv")
    print(travel_d)
    total = get_total_for_year(travel_d, "1958")
    print(total)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

       def testOne(self):
          travel_d = get_dict("airtravel.csv")
          self.assertEqual(get_total_for_year(travel_d, "1958"), 4572, 'get_total_for_year(travel_d, "1958")')
          self.assertEqual(get_total_for_year(travel_d, "1959"), 5140, 'get_total_for_year(travel_d, "1959")')
          self.assertEqual(get_total_for_year(travel_d, "1960"), 5714, 'get_total_for_year(travel_d, "1960")')

    myTests().main()


.. fillintheblank:: csv_file_air_travel_most_month_1958_fitb
    :practice: T

    Which month had the most passengers travelling by air in 1958?  Enter the three letter code from the file for the month.

    - :AUG: August 1958 had the highest number of passengers.
      :.*: Look at the values for 1958 in the file.  What is the highest number?

.. activecode:: csv_file_airtravel_get_max_month_ac
    :datafile: airtravel.csv

    Fix the code below to work correctly.  It should print the month with the highest number of passengers in 1958.
    ~~~~
    def get_dict(file):

        d = {}

        # get the file handler
        inFile = open(file)

        # skip the header
        header = inFile.readline()
        #print(header)
        header_values = header.split(",")
        header_1 = header_values[1]
        header_2 = header_values[2]
        header_3 = header_values[3]

        # read the rest of the lines from the file handler
        for line in inFile:
            values = line.rstrip().split(",")
            if len(values) == 4:
                month = values[0]
                data_1 = int(values[1])
                data_2 = int(values[2])
                data_3 = int(values[3])

                year_d = {}
                year_d[header_1] = data_1
                year_d[header_2] = data_2
                year_d[header_3] = data_3
                d[month] = year_d

        inFile.close()
        return d

    def get_max_month(travel_d, year):
        d = {}
        for month in travel_d:
            month_d = travel_d[month]
            d[month] = month_d[year]
        tup_list = sorted(d.items(), key = lambda t: t[1], reverse = True)
        return tup_list[0]

    travel_d = get_dict("airtravel.csv")
    print(travel_d)
    month, amount = get_max_month(travel_d, "1958")
    print(month, amount)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

       def testOne(self):
          travel_d = get_dict("airtravel.csv")
          self.assertEqual(get_max_month(travel_d, "1958")[0], "AUG", 'get_max_month(travel_d, "1958")[0]')
          self.assertEqual(get_max_month(travel_d, "1959")[0], "AUG", 'get_max_month(travel_d, "1959")[0]')
          self.assertEqual(get_max_month(travel_d, "1960")[0], "JUL", 'get_max_month(travel_d, "1960")[0]')

    myTests().main()

Here is another sample example CSV file.  It contains the Oscar winners for Best Actress from 1928 to 2016.  It has a header row to explain the data in each column.

.. datafile:: oscar_age_actress.csv
    :fromfile: oscar_age_actress.csv

We can read the data from the file and store it in a list of dictionaires where the keys in the dictionary are 'year', 'age', 'name', and 'movie'.

.. activecode:: csv_file_oscar_actress_age_dictionary
    :datafile: oscar_age_actress.csv

    Run the code below.  It should read all the data into a list of dictionaries.  Then it should create a new dictionary where the key is the age and the value is the number of actresses who won at that age. It should sort the items in the dictionary by the number of winners descending and return the top five tuples. However, some of the movie titles have commas in them.  Fix the code to handle this problem and pass the unit tests.
    ~~~~
    def get_list(file):

        l = []

        # get the file handler
        inFile = open(file)

        # read the header row and discard
        header = inFile.readline()

        # read the rest of the lines from the file handler
        for line in inFile:
            values = line.rstrip().split(",")
            d = {}
            if len(values) > 5:
                 print("line has extra commas")
                 print(line)
                 exit()
            elif len(values) == 5:
                year = values[1].strip()
                d["year"] = year
                age = values[2].strip()
                d["age"] = age
                name = values[3]
                d["name"] = name.strip('" ')
                movie = values[4]
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

    dict_list = get_list('oscar_age_actress.csv')
    print(dict_list[0])
    age_d = get_top_five_by_age(dict_list)
    print(age_d)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

       def testOne(self):
          l = get_list('oscar_age_actress.csv')
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


    myTests().main()

Change the code above to read from the file for the best actor.  Are the results different?

.. datafile:: oscar_age_actor.csv
    :fromfile: oscar_age_actor.csv


If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: csv_file_group_sub
   :limit: 3
