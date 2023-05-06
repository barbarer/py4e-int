import csv

def get_dict(file):

    d = {}

    # get the file handler
    inFile = open(file)
    csvFile = csv.reader(inFile)

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

travel_d = get_dict("airtravel.csv")
print(travel_d)
total = get_total_for_year(travel_d, "1958")
print(total)