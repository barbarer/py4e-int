Write Code Questions
---------------------
#.
  .. tabbed:: list_writeMyList

      .. tab:: Question

          Fix the 5 syntax errors in the code below so that it runs. It should print the length
          of ``myFirstList`` and print the result of ``myFirstList * 3``. Then it should set
          ``mySecondList`` to the concatenation of ``myFirstList`` and a list containing ``321.4``.
          Then it should print the value of ``mySecondList``.

          .. activecode:: list_writeMyListq
              :nocodelens:

              myFirstList = [12,"ape"13]
              print(len(myFirstList)
              print(myfirstList * 3)
              mySecondList = myFirstList + [321.4
              print(mySecondList

#.
  .. tabbed:: list_writeItems

      .. tab:: Question

          Fix 5 syntax errors in the code below so that it runs and prints the contents of ``items``.

          .. activecode::  list_writeItemsq
              :nocodelens:

              def itemLister(items):
                  items[0] = "First item'
                  items[1] = items0]
                  items[2] = items[2] + 1
                 print items

              itemLister([2,4,6 8])

#.
    .. tabbed:: list_writeAvg

        .. tab:: Question

            Complete the code on lines 4 and 5 so that the function returns the average of
             a list of integers.

            .. activecode::  list_writeAvgq
                :nocodelens:

                def gradeAverage(aList):
                    sum = 0
                    for num in aList:

                    average =
                    return average

                aList = [99, 100, 74, 63, 100, 100]
                print(gradeAverage(aList))

#.
  .. tabbed:: list_write23

      .. tab:: Question

          Assign the value of the 23rd element of ``l`` to the variable ``checking``.

          .. activecode:: list_write23q

              l = ("hi", "goodbye", "python", "106", "506", 91, ['all', 'Paul', 'Jackie',
                   "UMSI", 1, "Stephen", 4.5], 109, "chair", "pizza", "wolverine", 2017,
                   3.92, 1817, "account", "readings", "papers", 12, "facebook", "twitter",
                   193.2, "snapchat", "leaders and the best", "social", "1986", 9, 29, "holiday",
                   ["women", "olympics", "gold", "rio", 21, "2016", "men"], "26trombones")

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                 def testOne(self):
                    self.assertEqual(checking, "leaders and the best", "Testing that checking was assigned to the 23rd element.")

              myTests().main()

#.
  .. tabbed:: list_writePlant

      .. tab:: Question

          Using indexing, retrieve the string ‘willow’ from the list and assign that to the variable plant.

          .. activecode:: list_writePlantq

              data = ['bagel', 'cream cheese', 'breakfast', 'grits', 'eggs', 'bacon', [34, 9, 73, []],
                     [['willow', 'birch', 'elm'], 'apple', 'peach', 'cherry']]


              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                 def testOne(self):
                    self.assertEqual(plant, "willow", "Testing that plant was assigned to the willow.")

              myTests().main()

      .. tab:: Answer

          .. activecode:: list_writePlanta
              :optional:

              data = ['bagel', 'cream cheese', 'breakfast', 'grits', 'eggs', 'bacon', [34, 9, 73, []],
                     [['willow', 'birch', 'elm'], 'apple', 'peach', 'cherry']]

              # ACCESS LAST ELEMENT OF DATA
              dataLast = data[-1]

              # ACCESS FIRST ELEMENT IN LIST
              trees = dataLast[0]

              # ACCESS FIRST ELEMENT IN TREES
              plant = trees[0]

#.
  .. tabbed:: list_writeChop

      .. tab:: Question

          Write a function called ``chop`` that takes a list and modifies it, removing the first and last elements.

          .. activecode:: list_writeChopq

              def chop():

              ====
              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(chop([1,2,3,4,5]),[2,3,4],"Tested chop on input [1,2,3,4.5]")
                      self.assertEqual(chop([1,3,5,7,9,10]),[2,3,5,7,9],"Tested chop on input [1,3,5,7,9,10]")
                      self.assertEqual(chop([2,9]),[],"Tested chop on input [2,9]")

              myTests().main()

      .. tab:: Answer

          .. activecode:: list_writeChopa
              :optional:

              def chop(lst):
                  del lst[0]
                  del lst[-1]
                  return(lst)

#.
  .. tabbed:: list_writeMiddle

      .. tab:: Question

          Write a function called ``middle`` that takes a lsit and returns a new list that contains
          all but the first and last elements.

          .. activecode:: list_writeMiddleq

              def middle():

              ====
              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(middle([1,2,3,4,5]),[2,3,4],"Tested middle on input [1,2,3,4.5]")
                      self.assertEqual(middle([1,3,5,7,9,10]),[2,3,5,7,9],"Tested middle on input [1,3,5,7,9,10]")
                      self.assertEqual(middle([2,9]),[],"Tested middle on input [2,9]")

              myTests().main()

#.
  .. tabbed:: list_writeSum

        .. tab:: Question

            Sum all the elements in a list up to but not including the first even number.

            .. activecode:: list_writeSumq

                def sumUntilEven(lst):
                  # your code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(sumUntilEven([1,2,3,4,5]),1,"Tested sumUntilEven on input [1,2,3,4.5]")
                        self.assertEqual(sumUntilEven([1,3,5,7,9]),25,"Tested sumUntilEven on input [1,3,5,7,9]")
                        self.assertEqual(sumUntilEven([2,4,6,7,9]),0,"Tested sumUntilEven on input [2,4,6,7,9]")

                myTests().main()


        .. tab:: Answer

            .. activecode:: list_writeSuma
                :optional:

                import random

                def sum(lst):
                    sum = 0
                    index = 0
                    while index < len(lst) and lst[index] % 2 != 0:
                        sum = sum + lst[index]
                        index = index + 1
                    return sum

                lst = []
                for i in range(100):
                    lst.append(random.randint(0,1000))

#.
  .. tabbed:: list_write5

      .. tab:: Question

          Count how many words in a list have length 5.

          .. activecode:: list_write5q

              def countWords(lst):
                  # your code here

              ====
              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(countWords(["hello", "hi", "good morning", "three", "kitty"]),3,"Tested countWords on input ["hello", "hi", "good morning", "three", "kitty"]")
                      self.assertEqual(countWords(["two", "three", "four", "five", "six", "seven"]),2,"Tested countWords on input ["two", "three", "four", "five", "six", "seven"]")
                      self.assertEqual(countWords(["these", "those", "there"]),3,"Tested countWords on input ["these", "those", "there"]")
                      self.assertEqual(countWords(["the", "an", "a"]),0,"Tested countWords on input ["the", "an", "a"]")


              myTests().main()

#.
  .. tabbed:: list_writeReverse2

    .. tab:: Question

        Write a function called ``reverse`` that returns the reverse of a list.

        .. activecode::  list_writeReverseq
            :nocodelens:

            ====
            from unittest.gui import TestCaseGui

            class myTests(TestCaseGui):

                def testOne(self):
                      self.assertEqual(reverse([1,2,3,4,5]),[5,4,3,2,1],"Tested reverse on input [1,2,3,4.5]")
                      self.assertEqual(reverse([1,3,5,7,9]),[9,7,5,3,1],"Tested reverse on input [1,3,5,7,9]")
                      self.assertEqual(reverse([2,4,6,7,9]),[9,7,6,4,2],"Tested reverse on input [2,4,6,7,9]")


            myTests().main()
