Write Code Questions
--------------------


.. tabbed:: list_writeMyList

    .. tab:: Question

        .. activecode:: list_writeMyListq
            :autograde: unittest

            Write a function ``add_to_new_list`` that takes in a list of strings, ``lst``, as a parameter and creates a new list with the length
            of ``lst`` and the first element of ``lst`` three times. For example, ``add_to_new_list(["1","2","3"])`` would return ``[3, '111']``.
            ~~~~
            def add_to_new_list(lst):
                # write code here
            =====

            from unittest.gui import TestCaseGui

            class myTests(TestCaseGui):

                def testOne(self):
                    self.assertEqual(add_to_new_list(['1','2','3']), [3, '111'], "add_to_new_list(['1','2','3'])")
                    self.assertEqual(add_to_new_list(['0','0','0','0']), [4, '000'], "add_to_new_list(['0','0','0','0'])")
                    self.assertEqual(add_to_new_list(['10.2','0.0','100','-2']), [4, '10.210.210.2'], "add_to_new_list(['10.2','0.0','100','-2'])")


            myTests().main()


    .. tab:: Answer

        .. activecode:: list_writeMyListA
            :optional:
            :autograde: unittest

            Write a function ``add_to_new_list`` that takes in a list of strings, ``lst``, as a parameter and creates a new list with the length
            of ``lst`` and the first element of ``lst`` three times. For example, ``add_to_new_list(["1","2","3"])`` would return ``[3, '111']``.
            ~~~~
            def add_to_new_list(lst):
                new_list = []
                new_list.append(len(lst))
                new_list.append(lst[0] * 3)
                return new_list

            =====

            from unittest.gui import TestCaseGui

            class myTests(TestCaseGui):

                def testOne(self):
                    self.assertEqual(add_to_new_list(['1','2','3']), [3, '111'], "add_to_new_list(['1','2','3'])")
                    self.assertEqual(add_to_new_list(['0','0','0','0']), [4, '000'], "add_to_new_list(['0','0','0','0'])")
                    self.assertEqual(add_to_new_list(['10.2','0.0','100','-2']), [4, '10.210.210.2'], "add_to_new_list(['10.2','0.0','100','-2'])")


            myTests().main()


.. selectquestion:: lists_writecode2
   :fromid: list_writeItemsq_v2_ac, list_writeItemsq_v2_pp
   :toggle: lock


.. tabbed:: list_writeAvg

   .. tab:: Question

       .. activecode::  list_writeAvgq
           :autograde: unittest

           Write a function ``average`` that takes in a list of integers, ``aList``, as a parameter and returns the average of
           all of the integers, rounded to one decimal place. For example, ``average([99, 100, 74, 63, 100, 100])`` would return ``89.3``.
           ~~~~
           def average(aList):
               # write code here

           =====

           from unittest.gui import TestCaseGui

           class myTests(TestCaseGui):

               def testOne(self):
                   self.assertAlmostEqual(average([99, 100, 74, 63, 100, 100]), 89.3, 1, "average([99, 100, 74, 63, 100, 100])")
                   self.assertAlmostEqual(average([0, 2, -3, 1.2, 2000]), 400.0, 1, "average([0, 2, -3, 1.2, 2000])")
                   self.assertAlmostEqual(average([-2]), -2.0, 1, "average([-2])")


           myTests().main()


   .. tab:: Answer

       .. activecode:: list_writeAvgA
           :optional:
           :autograde: unittest

           Write a function ``average`` that takes in a list of integers, ``aList``, as a parameter and returns the average of
           all of the integers, rounded to one decimal place. For example, ``average([99, 100, 74, 63, 100, 100])`` would return ``89.33``.
           ~~~~
           def average(aList):
               sum = 0
               for num in aList:
                   sum += num
               avg = round(sum / len(aList),2)
               return avg

           =====

           from unittest.gui import TestCaseGui

           class myTests(TestCaseGui):

               def testOne(self):
                   self.assertAlmostEqual(average([99, 100, 74, 63, 100, 100]), 89.3, 1, "average([99, 100, 74, 63, 100, 100])")
                   self.assertAlmostEqual(average([0, 2, -3, 1.2, 2000]), 400.0, 1, "average([0, 2, -3, 1.2, 2000])")
                   self.assertAlmostEqual(average([-2]), -2.0, 1, "average([-2])")


           myTests().main()


.. selectquestion:: lists_writecode4
   :fromid: list_write23_ac, list_write23_pp
   :toggle: lock


.. tabbed:: list_capitalize

   .. tab:: Question

       .. activecode:: list_capitalize_q
           :autograde: unittest

           Write a function ``capitalize`` that takes in a list of lists of strings, ``lst``, and makes the first letter of each element capitalized and adds
           it to a new list and returns that new list. For example, ``capitalize([["hi"],["hello", "hey"]])`` would return ``['Hi', 'Hello', 'Hey']``.
           ~~~~
           def capitalize(lst):
               # write code here


           =====

           from unittest.gui import TestCaseGui

           class myTests(TestCaseGui):

               def testOne(self):
                   self.assertEqual(capitalize([['hi'],['hello', 'hey']]), ['Hi', 'Hello', 'Hey'], "capitalize([['hi'],['hello', 'hey']])")
                   self.assertEqual(capitalize([['HI'],['HELLO', 'HEY']]), ['Hi', 'Hello', 'Hey'], "capitalize([['HI'],['HELLO', 'HEY']])")
                   self.assertEqual(capitalize([['go', 'blue'],['python', 'IS', 'The', 'Best']]), ['Go', 'Blue', 'Python', 'Is', 'The', 'Best'], "capitalize([['go', 'blue'],['python', 'IS', 'The', 'Best']])")

           myTests().main()

   .. tab:: Answer

       .. activecode:: list_capitalize_a
           :optional:
           :autograde: unittest

           Write a function ``capitalize`` that takes in a list of lists of strings, ``lst``, and makes the first letter of each element capitalized and adds
           it to a new list and returns that new list. For example, ``capitalize([["hi"],["hello", "hey"]])`` would return ``['Hi', 'Hello', 'Hey']``.
           ~~~~
           def capitalize(lst):
               new_list = []
               for i in lst:
                   for j in i:
                       new_list.append(j.capitalize())
               return new_list

           =====

           from unittest.gui import TestCaseGui

           class myTests(TestCaseGui):

               def testOne(self):
                   self.assertEqual(capitalize([['hi'],['hello', 'hey']]), ['Hi', 'Hello', 'Hey'], "capitalize([['hi'],['hello', 'hey']])")
                   self.assertEqual(capitalize([['HI'],['HELLO', 'HEY']]), ['Hi', 'Hello', 'Hey'], "capitalize([['HI'],['HELLO', 'HEY']])")
                   self.assertEqual(capitalize([['go', 'blue'],['python', 'IS', 'The', 'Best']]), ['Go', 'Blue', 'Python', 'Is', 'The', 'Best'], "capitalize([['go', 'blue'],['python', 'IS', 'The', 'Best']])")

           myTests().main()




.. selectquestion:: lists_writecode6
  :fromid: list_write5_ac, list_write5_pp
  :toggle: lock


.. tabbed:: list_writeChop

    .. tab:: Question

        .. activecode:: list_writeChopq
            :autograde: unittest

            Write a function ``chop`` that takes a list, ``lst``, and modifies it, removing the first and last elements.
            For example, ``chop([1,2,3,4,5]`` should return ``[2,3,4]``.
            ~~~~
            def chop(lst):
                # write code here


            =====

            from unittest.gui import TestCaseGui

            class myTests(TestCaseGui):

                def testOne(self):
                    self.assertEqual(chop([1,2,3,4,5]),[2,3,4],"chop([1,2,3,4,5])")
                    self.assertEqual(chop([1,3,5,7,9,10]),[3,5,7,9],"chop([1,3,5,7,9,10])")
                    self.assertEqual(chop([2,9]),[],"chop([2,9])")

            myTests().main()

    .. tab:: Answer

        .. activecode:: list_writeChopa
            :optional:
            :autograde: unittest

            Write a function ``chop`` that takes a list, ``lst``, and modifies it, removing the first and last elements.
            For example, ``chop([1,2,3,4,5]`` should return ``[2,3,4]``.
            ~~~~
            def chop(lst):
                lst.pop(0)
                lst.pop(-1)
                return(lst)

            =====

            from unittest.gui import TestCaseGui

            class myTests(TestCaseGui):

                def testOne(self):
                    self.assertEqual(chop([1,2,3,4,5]),[2,3,4],"chop([1,2,3,4,5])")
                    self.assertEqual(chop([1,3,5,7,9,10]),[3,5,7,9],"chop([1,3,5,7,9,10])")
                    self.assertEqual(chop([2,9]),[],"chop([2,9])")

            myTests().main()


.. selectquestion:: lists_writecode8
  :fromid: list_writeReverse_ac, list_writeReverse_pp
  :toggle: lock


.. tabbed:: list_writeSum

    .. tab:: Question

        .. activecode:: list_writeSumq
            :autograde: unittest

            Write a function ``sumUntilEven`` that takes in one parameter, ``lst``, and returns the sum of all the
            elements in the ``lst`` up to but not including the first even number. For example, ``sumUntilEven([1,2,3,4,5]``
            should return ``1`` and ``sumUntilEven([1,3,5,7,9]`` should return ``25``.
            ~~~~
            def sumUntilEven(lst):
                # write code here

            ====
            from unittest.gui import TestCaseGui

            class myTests(TestCaseGui):

                def testOne(self):
                    self.assertEqual(sumUntilEven([1,2,3,4,5]),1,"sumUntilEven([1,2,3,4,5])")
                    self.assertEqual(sumUntilEven([1,3,5,7,9]),25,"sumUntilEven([1,3,5,7,9])")
                    self.assertEqual(sumUntilEven([2,4,6,7,9]),0,"sumUntilEven([2,4,6,7,9])")

            myTests().main()


    .. tab:: Answer

        .. activecode:: list_writeSuma
            :optional:
            :autograde: unittest

            Write a function called ``sumUntilEven`` that takes in one parameter, ``lst``, and returns the sum of all the
            elements in the ``lst`` up to but not including the first even number. For example, ``sumUntilEven([1,2,3,4,5]``
            should return ``1`` and ``sumUntilEven([1,3,5,7,9]`` should return ``25``.
            ~~~~
            def sumUntilEven(lst):
                total = 0
                element = 0
                while element < len(lst) and lst[element] % 2 != 0:
                    total = total + lst[element]
                    element += 1
                return total

            ====
            from unittest.gui import TestCaseGui

            class myTests(TestCaseGui):

                def testOne(self):
                    self.assertEqual(sumUntilEven([1,2,3,4,5]),1,"sumUntilEven([1,2,3,4,5])")
                    self.assertEqual(sumUntilEven([1,3,5,7,9]),25,"sumUntilEven([1,3,5,7,9])")
                    self.assertEqual(sumUntilEven([2,4,6,7,9]),0,"sumUntilEven([2,4,6,7,9])")

            myTests().main()




.. selectquestion:: lists_writecode10
  :fromid: list_sortByLen_ac, list_sortByLen_pp
  :toggle: lock


.. activecode::  list_loop_two_lists
    :autograde: unittest

    Write a function ``combine(names, ages)`` that takes in two lists, ``names`` and ``ages`` and returns a list of strings in the format ``"Name: name, age: age"``.  For example,
    ``combine(["Claire", "Jennifer"],[23, 19])`` would return ``["Name: Claire, age: 23", "Name: Jennfier, age: 19"]``.
    ~~~~
    def combine(names, ages):

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
              self.assertEqual(combine(["Mark", "Mary", "Sue"], [59, 60, 61]), ["Name: Mark, age: 59", "Name: Mary, age: 60", "Name: Sue, age: 61"], 'combine(["Mark", "Mary", "Sue"])')
              self.assertEqual(combine(["Iman"], [28]), ["Name: Iman, age: 28"], 'combine(["Iman"], [28])')
              self.assertEqual(combine(["Pedro", "Mez"], [24, 26]), ["Name: Pedro, age: 24", "Name: Mez, age: 26"], 'combine(["Pedro", "Mez"], [24, 26])')
              self.assertEqual(combine(["Claire", "Jennifer"], [23, 19]), ["Name: Claire, age: 23", "Name: Jennifer, age: 19"], 'combine(["Claire", "Jennifer"], [23, 19])')


    myTests().main()
