Write Code Questions
--------------------



.. tabbed:: tup_writecode1

    .. tab:: Question

        .. activecode:: tup_writecode1q
            :autograde: unittest

            Write a function called ``tup_creation`` that takes in two integer parameter, ``start`` and ``end``, and returns a tuple with all the values between
            ``start`` (inclusive) and ``end`` (non-inclusive). For example, ``tup_creation(-8,3)`` would return  ``(-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2)`` and ``tup_creation(10,3)`` would
            return ``(10, 9, 8, 7, 6, 5, 4)``.
            ~~~~
            def tup_creation(start, end):
                # write code here

            ====
            from unittest.gui import TestCaseGui

            class MyTests(TestCaseGui):

                def testOne(self):
                    self.assertEqual(tup_creation(-8,3), (-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2), "tup_creation(-8,-3)")
                    self.assertEqual(tup_creation(3,10), (3, 4, 5, 6, 7, 8, 9), "tup_creation(3,10)")
                    self.assertEqual(tup_creation(10,3), (10, 9, 8, 7, 6, 5, 4), "tup_creation(10,3)")
                    self.assertEqual(tup_creation(-2,-1), (-2,), "tup_creation(-2,-1)")
                    self.assertEqual(tup_creation(0,0), (), "tup_creation(0,0)")
                    self.assertEqual(tup_creation(10,10), (), "tup_creation(10,10)")


            MyTests().main()

    .. tab:: Answer

        .. activecode:: tup_writecode1a
            :optional:

            Write a function called ``tup_creation`` that takes in two integer parameter, ``start`` and ``end``, and returns a tuple with all the values between
            ``start`` (inclusive) and ``end`` (non-inclusive). For example, ``tup_creation(-8,3)`` would return  ``(-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2)`` and ``tup_creation(10,3)`` would
            return ``(10, 9, 8, 7, 6, 5, 4)``.
            ~~~~
            def tup_creation(start, end):
                lst = []
                if start > end:
                    for i in range(start,end,-1):
                        lst.append(i)
                else:
                    for i in range(start,end):
                        lst.append(i)
                lst = tuple(lst)
                return lst


.. selectquestion:: tuple_writecode2
   :fromid: tup_writecode2, tup_writecode2_pp
   :toggle: lock



.. tabbed:: tup_writecode3

   .. tab:: Question

       .. activecode:: tup_writecode3q
           :practice: T
           :autograde: unittest

           Write a function called ``find_majors`` that takes in a dictionary as a parameter, ``majors``, that has a major code as the key and
           the name of a major as the value. Return a list of tuples of size two, in which the first element of the tuple is the major code and
           the second element of the tuple is the name of the major. For example,
           ``find_major({3084: 'Computer Science', 3025: 'Electrical Engineering', 3020: 'Computer Engineering', 3027: 'Cybersecurity', 3068: 'Biometric Systems Engineering'})``
           would return ``[(3084, 'Computer Science'), (3025, 'Electrical Engineering'), (3020, 'Computer Engineering'), (3027, 'Cybersecurity'), (3068, 'Biometric Systems Engineering')]``.
           ~~~~
           def find_major(dictionary_val):
               # write code here

           ====
           from unittest.gui import TestCaseGui

           class MyTests(TestCaseGui):
               def testOne(self):
                   self.assertEqual(find_major({3084: 'Computer Science', 3025: 'Electrical Engineering', 3020: 'Computer Engineering', 3027: 'Cybersecurity', 3068: 'Biometric Systems Engineering'}),[(3084,'Computer Science'), (3025, 'Electrical Engineering'),(3020, 'Computer Engineering'), (3027,'Cybersecurity'), (3068,'Biometric Systems Engineering')], "find_major({3084: 'Computer Science', 3025: 'Electrical Engineering', 3020: 'Computer Engineering', 3027: 'Cybersecurity', 3068: 'Biometric Systems Engineering'})")
                   self.assertEqual(find_major({0: 'Business', -1: 'Food Science', -3: 'Women’s Studies'}),[(0, 'Business'), (-1, 'Food Science'), (-3, 'Women’s Studies')], "find_major({0: 'Business', -1: 'Food Science', -3: 'Women’s Studies'})")
                   self.assertEqual(find_major({0: 'Business', 0: 'Food Science', 0:'Women’s Studies'}),[(0, 'Women’s Studies')], "find_major({0: 'Business', 0: 'Food Science', 0:'Women’s Studies'})")
                   self.assertEqual(find_major({0.1: 'Business', 10: 'Food Science', -9: 'Women’s Studies'}),[(0.1, 'Business'), (10, 'Food Science'), (-9, 'Women’s Studies')], "find_major({0.1: 'Business', 10: 'Food Science', -9: 'Women’s Studies'})")


           MyTests().main()

   .. tab:: Answer

       .. activecode:: tup_writecode3a
           :optional:

           Write a function called ``find_majors`` that takes in a dictionary as a parameter, ``majors``, that has a major code as the key and
           the name of a major as the value. Return a list of tuples of size two, in which the first element of the tuple is the major code and
           the second element of the tuple is the name of the major. For example,
           ``find_major({3084: 'Computer Science', 3025: 'Electrical Engineering', 3020: 'Computer Engineering', 3027: 'Cybersecurity', 3068: 'Biometric Systems Engineering'})``
           would return ``[(3084, 'Computer Science'), (3025, 'Electrical Engineering'), (3020, 'Computer Engineering'), (3027, 'Cybersecurity'), (3068, 'Biometric Systems Engineering')]``.
           ~~~~
           def find_major(dictionary_val):
               ls1 = []
               ls2 = []
               for key, val in dictionary_val.items():
                   ls1.append(key)
                   ls2.append(val)
               list_of_tup = list(zip(ls1, ls2))
               return list_of_tup


.. selectquestion:: tuple_writecode4
   :fromid: tup_writecode4, tup_writecode4_pp
   :toggle: lock


.. tabbed:: tup_writecode5

   .. tab:: Question

       .. activecode:: tup_writecode5q
           :autograde: unittest
           :practice: T

           Write a function called ``dict_transform`` that takes in one dictionary parameter, ``dict``, which returns a tuple of tuples. The inner tuple should
           have the first element as the key of the ``dict`` and the second element should have the value of the ``dict``. Do not use the ``keys()`` or ``values()``
           methods. For example, ``dict_transform({'Rattata': 19, 'Machop': 66, 'Seel': 86, 'Volbeat': 86, 'Solrock': 126})`` should return ``(('Rattata', 19), ('Machop', 66), ('Seel', 86), ('Volbeat', 86), ('Solrock', 126))``.
           ~~~~
           def dict_transform(dict):
               # write code here

           ====
           from unittest.gui import TestCaseGui

           class MyTests(TestCaseGui):
               def testOne(self):
                   self.assertEqual(dict_transform({'Rattata': 19, 'Machop': 66, 'Seel': 86, 'Volbeat': 86, 'Solrock': 126}), (('Rattata', 19), ('Machop', 66), ('Seel', 86), ('Volbeat', 86), ('Solrock', 126)), "dict_transform({'Rattata': 19, 'Machop': 66, 'Seel': 86, 'Volbeat': 86, 'Solrock': 126})")
                   self.assertEqual(dict_transform({0: 'Business', -1: 'Food Science', -3: 'Women’s Studies'}), ((0, 'Business'), (-1, 'Food Science'), (-3, 'Women’s Studies')), "dict_transform({0: 'Business', -1: 'Food Science', -3: 'Women’s Studies'})")
                   self.assertEqual(dict_transform({0: 'Business', 0: 'Food Science', 0:'Women’s Studies'}), ((0, 'Women’s Studies'),), "dict_transform({0: 'Business', 0: 'Food Science', 0:'Women’s Studies'})")
                   self.assertEqual(dict_transform({0.1: 'Business', 10: 'Food Science', -9: 'Women’s Studies'}),((0.1, 'Business'), (10, 'Food Science'), (-9, 'Women’s Studies')), "dict_transform({0.1: 'Business', 10: 'Food Science', -9: 'Women’s Studies'})")

           MyTests().main()

   .. tab:: Answer

       .. activecode:: tup_writecode5a
           :optional:

           Write a function called ``dict_transform`` that takes in one dictionary parameter, ``dict``, which returns a tuple of tuples. The inner tuple should
           have the first element as the key of the ``dict`` and the second element should have the value of the ``dict``. Do not use the ``keys()`` or ``values()``
           methods. For example, ``dict_transform({'Rattata': 19, 'Machop': 66, 'Seel': 86, 'Volbeat': 86, 'Solrock': 126})`` should return ``(('Rattata', 19), ('Machop', 66), ('Seel', 86), ('Volbeat', 86), ('Solrock', 126))``.
           ~~~~
           def dict_transform(dict):
               lst_keys = []
               lst_vals = []
               for key, val in dict.items():
                   lst_keys.append(key)
                   lst_vals.append(val)
               zipped_tup= tuple(zip(lst_keys, lst_vals))
               return zipped_tup


.. selectquestion:: tuple_writecode6
  :fromid: tup_writecode6, tup_writecode6_pp
  :toggle: lock


.. tabbed:: tup_writecode7

    .. tab:: Question

        .. activecode:: tup_writecode7q_v2
            :practice: T
            :autograde: unittest

            Write the function ``mod_tuples`` which takes a list of tuples, ``tup_list`` and returns a copy where the
            last element in each tuple is modified to be 100. For example, ``mod_tuples([(3,4), (20, -3, 2)])`` returns
            [(3,100), (20, -3, 100)].
            ~~~~
            def mod_tuples(tup_list):
                # write code here

            ====
            from unittest.gui import TestCaseGui

            class MyTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(mod_tuples([(3, 4), (20, -3, 2)]),[(3, 100), (20, -3, 100)], "mod_tuples([(3, 4), (20, -3, 2)]")
                    self.assertEqual(mod_tuples([(3, ), (20, -3, 2)]),[(100, ), (20, -3, 100)], "mod_tuples([(3, ), (20, -3, 2)]")
                    self.assertEqual(mod_tuples([(3, 4), (-3, )]),[(3, 100), (100,)], "mod_tuples([(3, 4), (-3, )]),[(3, 100), (100,)]")
                    self.assertEqual(mod_tuples([(20, )]),[(100, )], "mod_tuples([(20, )])")
                    self.assertEqual(mod_tuples([(20, 1, 80, 2 )]),[(20, 1, 80, 100)], "mod_tuples([(20, 1, 80, 2 )])")

            MyTests().main()

    .. tab:: Answer

        .. activecode:: tup_writecode7a
            :optional:

            Write the function ``mod_tuples`` which takes a list of tuples, ``tup_list`` and returns a copy where the
            last element in each tuple is modified to be 100. For example, ``mod_tuples([(3,4), (20, -3, 2)])`` returns
            [(3,100), (20, -3, 100)].
            ~~~~
            def mod_tuples(tup_list):
                # Access the last element of each list (-1) and replace with 100 in each element of the tuple
                updated_list = [tup[:-1] + (100,) for tup in tup_list]
                # return the updated list
                return updated_list


.. selectquestion:: tuple_writecode8
  :fromid: tup_writecode8, tup_writecode8_pp
  :toggle: lock


.. tabbed:: tup_writecode9

    .. tab:: Question

        .. activecode:: tup_writecode9q
            :practice: T
            :autograde: unittest

            Write a function ``list_link`` that accepts two lists, ``lst1`` and ``lst2`` and returns a dictionary
            with the first list as the key and the second list as the value. For example,
            ``list_link(['what', 'do', 'you', 'do'], [1,2,3,4])`` should return ``{'what': 1, 'do': 4, 'you': 3}``.
            ~~~~
            def list_link(lst1, lst2):
                #write your code here

            ====
            from unittest.gui import TestCaseGui

            class MyTests(TestCaseGui):
                def testOne(self):
                    self.assertEqual(list_link(['what', 'do', 'you', 'do'], [1,2,3,4]), {'what': 1, 'do': 4, 'you': 3}, "Testing that the function was properly defined.")
                    self.assertEqual(list_link(['I', 'love', 'coding'], [2,0,-8]), {'I': 2, 'love': 0, 'coding': -8}, "Testing that the function was properly defined.")

            MyTests().main()

    .. tab:: Answer

        .. activecode:: tup_writecode9a
            :optional:

            Write a function ``list_link`` that accepts two lists, ``lst1`` and ``lst2`` and returns a dictionary
            with the first list as the key and the second list as the value. For example,
            ``list_link(['what', 'do', 'you', 'do'], [1,2,3,4])`` should return ``{'what': 1, 'do': 4, 'you': 3}``.
            ~~~~
            # Define function with 2 lists as arguments
            def list_link(lst1, lst2):
                # Create dictionary
                diction = {}
                # Create counter variable to count iterations
                counter = 0
                # Create condition for when lists are the same length
                if len(lst1) == len(lst2):
                    # iterate through item in list1
                    for i in lst1:
                        # Add that item to dictionary with its place in list2
                        diction[i] = lst2[counter]
                        # Increment counter
                        counter += 1
                # Return the dictionary
                return diction


.. selectquestion:: tuple_writecode10
  :fromid: tup_writecode10, tup_writecode10_pp
  :toggle: lock
