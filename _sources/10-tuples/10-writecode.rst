Write Code Questions
---------------------

.. activecode:: writingcode_question10_1
   :practice: T
   :nocodelens:

   Create a tuple named tup1 that has three elements: 'a', 'b', and 'c'.
   ~~~~

   ====
   from unittest.gui import TestCaseGui

   class MyTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(tup1, ('a', 'b', 'c'), "Checking to make sure the tuple has the correct elements.")

   MyTests().main()

.. activecode:: writingcode_question10_2
   :practice: T
   :nocodelens:

   Provided is a list of tuples. Create another list called t_check that contains the third element of every tuple.
   ~~~~

   lst_tups = [('Articuno', 'Moltres', 'Zapdos'), ('Beedrill', 'Metapod', 'Charizard', 'Venasaur', 'Squirtle'), ('Oddish', 'Poliwag', 'Diglett', 'Bellsprout'), ('Ponyta', "Farfetch'd", 'Tauros', 'Dragonite'), ('Hoothoot', 'Chikorita', 'Lanturn', 'Flaaffy', 'Teddiursa', 'Phanpy'), ('Loudred', 'Volbeat', 'Seviper', 'Wailord', 'Sealeo')]

   ====
   from unittest.gui import TestCaseGui

   class MyTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(t_check, ['Zapdos', 'Charizard', 'Diglett', 'Tauros', 'Lanturn', 'Seviper'], "Checking that the correct entries made it into t_check.")
           self.assertEqual(len(t_check), 6, "Making sure no entries were added or missed.")

   MyTests().main()


.. tabbed:: writecode_question10_3

   .. tab:: Question

      The dictionary 'majors' contains major codes as keys and major names as the value. Write a function named find_major() that takes one parameter, a major code. If the major code exists in 'majors', your function should return a tuple where the first value is the major code and the second is the name of the major. If the major code doesn't exist, return a tuple where the first value is None and the second is a string containing 'Error'. Print the name of the major with code 3084.

      .. activecode:: writingcode_question10_3
         :practice: T
         :nocodelens:

         majors = {3084: 'Computer Science', 3025: 'Electrical Engineering', 3020: 'Computer Engineering', 3027: 'Cybersecurity', 3068: 'Biometric Systems Engineering'}

         ====
         from unittest.gui import TestCaseGui

         class MyTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(find_major(3084),(3084, 'Computer Science'), "Checking that 'Computer Science' is associated with 3084.")
                 self.assertEqual(find_major(0), (None, 'Error'), "Making sure that major code 0 returns Error.")

         MyTests().main()

   .. tab:: Answer

      .. activecode:: writtencode_question10_3
         :nocodelens:

         majors = {3084: 'Computer Science', 3025: 'Electrical Engineering', 3020: 'Computer Engineering', 3027: 'Cybersecurity', 3068: 'Biometric Systems Engineering'}

         def find_major(major_code):
             if major_code in majors.keys():
                 return (major_code, majors[major_code])
             else:
                 return (None, 'Error')

         print(find_major(3084))



.. tabbed:: writecode_question10_4

   .. tab:: Question

      If you remember, the .items() dictionary method produces a sequence of tuples. Keeping this in mind, we have provided you a dictionary called 'pokemon'. For every key-value pair, append the key to the list 'p_names', and append the value to the list 'p_number'. Do not use the .keys() or .values() method.

      .. activecode:: writingcode_question10_4
         :nocodelens:
         :practice: T

         pokemon = {'Rattata': 19, 'Machop': 66, 'Seel': 86, 'Volbeat': 86, 'Solrock': 126}

         ====
         from unittest.gui import TestCaseGui

         class MyTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(p_names, ['Rattata', 'Machop', 'Seel', 'Volbeat', 'Solrock'], "Testing that p_name has the correct values.")
                 self.assertEqual(p_number, [19, 66, 86, 86, 126], "Testing that p_number has the correct values.")

         MyTests().main()

   .. tab:: Answer

      .. activecode:: writtencode_question10_4
         :nocodelens:

         pokemon = {'Rattata': 19, 'Machop': 66, 'Seel': 86, 'Volbeat': 86, 'Solrock': 126}

         p_names = []
         p_number = []
         for key, val in pokemon.items():
             p_names.append(key)
             p_number.append(val)


.. activecode:: writingcode_question10_5
   :practice: T
   :nocodelens:

   Write code to interchange the values of tuple 't'.
   ~~~~
   t = ("LeBron", "James")

   ====
   from unittest.gui import TestCaseGui

   class MyTests(TestCaseGui)

       def testOne(self):
           self.assertEqual(t, ("James, LeBron"), "Testing that the tuple's values are properly interchanged.")

   MyTests().main()


.. tabbed:: writecode_question10_6

   .. tab:: Question

      Write code to print list_of_tuples where the last value of each tuple is 100. Assign this new list of tuples to the variable 'updated_list'.

      .. activecode:: writingcode_question10_6
         :practice: T
         :nocodelens:

         list_of_tuples = [(10, 20, 40), (40, 50, 60), (70, 80, 90)]

         ====
         from unittest.gui import TestCaseGui

         class MyTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(updated_list, [(10, 20, 100), (40, 50, 100), (70, 80, 100)], "Testing to make sure the last value of each tuple is 100.")

         MyTests().main()

   .. tab:: Answer

      .. activecode:: writtencode_question10_6
         :nocodelens:

         list_of_tuples = [(10, 20, 40), (40, 50, 60), (70, 80, 90)]

         updated_list = [tup[:-1] + (100,) for tup in list_of_tuples]

.. activecode:: writingcode_question10_7
   :practice: T
   :nocodelens:

   Create a tuple called my_data that contains one element, the integer 99.
   ~~~~

   ====
   from unittest.gui import TestCaseGui

   class MyTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(my_data, (99,), "Testing that the tuple has one element, 99.")

   MyTests().main()


.. activecode:: writingcode_question10_8
   :practice: T
   :nocodelens:

   Define a function called 'info' with the following required parameters: name, age, birth_year, year_in_college, and hometown. The function should return a tuple that contains all the inputted information.
   ~~~~

   ====
   from unittest.gui import TestCaseGui

   class MyTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(info('Troy', 24, 1996, 'Sophomore', 'Ann Arbor'), ('Troy', 24, 1996, 'Sophomore', 'Ann Arbor'), "Testing that the function correctly outputs the tuple.")

   MyTests().main()

.. tabbed:: writecode_question10_9

   .. tab:: Question

      Write a function list_link that accepts two lists and returns a dictionary with the first list as the key and the second list as the value. For example, list_link(['what', 'do', 'you', 'do'], [1,2,3,4]) should return {'what': 1, 'do': 4, 'you': 3}.

      .. activecode:: writingcode_question10_9
         :practice: T
         :nocodelens:

         #write your code here
         print(list_link(['what', 'do', 'you', 'do'], [1,2,3,4]))

         ====
         from unittest.gui import TestCaseGui

         class MyTests(TestCaseGui):

             def testOne(self):
                 self.assertEqual(list_link(['what', 'do', 'you', 'do'], [1,2,3,4]), {'what': 1, 'do': 4, 'you': 3}, "Testing that the function was properly defined.")

         MyTests().main()

   .. tab:: Answer

      .. activecode:: writtencode_question10_9
        :nocodelens:

        def list_link(list1, list2):
            diction = {}
            counter = 0
            if len(list1) == len(list2):
                for i in list1:
                    diction[i] = list2[counter]
                    counter += 1
            return diction
        print(list_link(['what', 'do', 'you', 'do'], [1,2,3,4]))


.. activecode:: writingcode_question10_10
   :nocodelens:
   :practice: T

   Create a function tuplize that accepts two inputs and returns them in a tuple. The first input and then the second.
   ~~~~

   ====
   from unittest.gui import TestCaseGui

   class MyTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(tuplize('Stephen', 'Curry'), ('Stephen', 'Curry'), "Testing that the function creates the correct tuple.")

   MyTests().main()
