import csv
import os
import datetime as dt

def correct(answer):
    pos = answer.find("correct")
    return pos >= 0

def addAnswer(userDict, user, timestamp, answer):
    answerDict = {}
    userDict[user] = answerDict
    answerDict["timestamp"] = timestamp
    answerDict["correct"] = correct(answer)


# function to gather the data on the mchoice questions
def mchoice_worker(inFileName, outFileName):

    # open the output file for writing
    dir = os.path.dirname(__file__)
    out_path = os.path.join(dir, outFileName)
    in_path= os.path.join(dir, inFileName)
    outFile = open(out_path, "w")

    # open the input and output files as csv files
    with open(in_path) as csv_file:
        csv_reader = csv.reader(csv_file)
        csv_writer = csv.writer(outFile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

        # create an empty problem dictionary
        probDict = dict()

        # loop through the rows
        for cols in csv_reader:

            # get the event
            event = cols[4]

            # if event is mChoice
            if event == "mChoice":

                # get the divid, user, timestamp, and answer
                div = cols[7]
                user = cols[3]
                timestamp = cols[2]
                answer = cols[6]

                # if no dictionary for this problem create one and add this user and answer
                if div not in probDict:
                    userDict = {}
                    probDict[div] = userDict
                else:
                    userDict = probDict[div]

                # if user in dictionary
                if user in userDict:
                    continue
                else:
                    addAnswer(userDict, user, timestamp, answer)

        # for each multiple choice question total the number of correct responses
        for prob in probDict:

            total_correct = 0

            # loop through the users
            user_dict = probDict[prob]
            for user in user_dict:

                answerDict = user_dict[user]
                if answerDict["correct"] == True:
                    total_correct += 1

            # write out the problem id and percent who got it correct
            total_attempted = len(user_dict)
            percent_correct = total_correct / total_attempted 
            csv_writer.writerow([prob, total_correct, total_attempted, percent_correct])

    outFile.close()
    
    return len(probDict)

num = mchoice_worker("mChoiceSmall.csv", "mchoiceResults.csv")
print(f"The number of unique questions is {num}")

import unittest
class myTests(unittest.TestCase):
    
    def setUp(self):
        dir = os.path.dirname(__file__)
        inFile = open(os.path.join(dir, "mchoiceResults.csv"))
        csv_in = csv.reader(inFile)
        self.datad = {}
        for cols in csv_in:
            self.datad[cols[0]] = (int(cols[1]), int(cols[2]), float(cols[3]))

    def testLen(self):
        self.assertEqual(len(self.datad), 3, "num unique problems")
        
    def testData(self):
        self.assertEqual(self.datad["q2_2_1"][0], 7, "num attempted for q2_2_1")
        self.assertEqual(self.datad["q2_2_1"][1], 7, "num correct for q2_2_1")
        self.assertAlmostEqual(self.datad["q2_2_1"][2], 100, 2, "percent for q2_2_1")
        self.assertEqual(self.datad["q2_2_2"][0], 4, "num attempted for q2_2_2")
        self.assertEqual(self.datad["q2_2_2"][1], 7, "num correct for q2_2_2")
        self.assertAlmostEqual(self.datad["q2_2_2"][2], 57.14, 2, "percent for q2_2_2")

unittest.main(verbosity=3)
