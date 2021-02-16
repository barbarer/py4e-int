Dictionary Practice - Write Code
-----------------------------------------------------

Try to solve the following mixed up code problems. You can use the "Help Me" button
to make the problem easier if you have made at least three attempts to solve the
problem.  After you solve each problem, please answer the poll as well.

.. activecode:: dp_two_list_to_dict
   :autograde: unittest

   Finish the function ``make_dir`` below which takes two lists (``l1`` and ``l2``) of equal length and returns a dictionary where the items in ``l1`` are the keys and the items in ``l2`` are the values.  For example, ``make_dir(['a', 'c'], [5, 0])`` returns ``{'a': 5, 'c': 0}``.
   ~~~~
   def make_dir(l1, l2):

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(make_dir(['a', 'b', 'c'], [0, 3, 2]), {'a': 0, 'b': 3, 'c': 2}, "make_dir(['a', 'b', 'c'], [0, 3, 2])")
           self.assertEqual(make_dir(['a'], [5]), {'a': 5}, "make_dir(['a'], [5])")
           self.assertEqual(make_dir(['a', 'c'], [5, 0]), {'a': 5, 'c': 0}, "make_dir(['a', 'c'], [5, 0])")
           self.assertEqual(make_dir(['gray', 'blue'], [-3, 2]), {'gray': -3, 'blue': 2}, "make_dir(['gray', 'blue'], [-3, 2])")

   myTests().main()


.. activecode:: dp_list_of_tuples_to_dict
   :autograde: unittest

   Finish the function ``make_dir`` below which takes a list of tuples ``tuple_list`` and returns a dictionary where the first item in each tuple is the key and the second is the value. For example, ``make_dir([('gray', -3), ('blue', 2)])`` returns ``{'gray': -3, 'blue': 2}``.
   ~~~~
   def make_dir(tuple_list):

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(make_dir([('a', 0), ('b', 3), ('c', 2)]), {'a': 0, 'b': 3, 'c': 2}, "make_dir([('a', 0), ('b', 3), ('c', 2)])")
           self.assertEqual(make_dir([('a', 5)]), {'a': 5}, "make_dir([('a', 5)])")
           self.assertEqual(make_dir([('gray', -3), ('blue', 2)]), {'gray': -3, 'blue': 2}, "make_dir([('gray', -3), ('blue', 2)])")



   myTests().main()


.. activecode:: dp_get_tuple_from_dict
   :autograde: unittest

   Finish the function ``get_tuple`` below which takes a dictionary ``dict`` and a ``key`` and if the ``key`` is found in the dictionary it returns ``(key, value)`` otherwise it returns ``(key, 'Not Found')``.  For example, ``get_tuple({'a': 0}, 'c')`` returns ``('c', 'Not Found')``, and ``get_tuple({'a': 0}, 'a')`` returns ``('a', 0)``.
   ~~~~
   def get_tuple(dict, key):

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(get_tuple({'a': 0, 'b': 3, 'c': 2}, 'c'), ('c', 2), "get_tuple({'a': 0, 'b': 3, 'c': 2}, 'c')")
           self.assertEqual(get_tuple({'a': 0}, 'c'), ('c', 'Not Found'), "get_tuple({'a': 0}, 'c')")
           self.assertEqual(get_tuple({'a': 0}, 'a'), ('a', 0), "get_tuple({'a': 0}, 'a')")
           self.assertEqual(get_tuple({'a': 0, 'b': 3, 'c': 2}, 'b'), ('b', 3), "get_tuple({'a': 0, 'b': 3, 'c': 2}, 'b')")



   myTests().main()

.. activecode:: dp_greater_dict
   :autograde: unittest

   Finish the function ``greater_dict`` below which takes a dictionary ``d`` and an integer ``cutoff`` and returns a new dictionary that contains only the key-value pairs where the value is greater than or equal to the cutoff.  For example, ``greater_dict({'a': 20, 'b': 10}, 15)`` returns ``{'a': 20}``.
   ~~~~
   def greater_dict(d, cutoff):


   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(greater_dict({'a': 20, 'b': 10}, 15), {'a': 20}, "greater_dict({'a': 20, 'b': 10}, 15)")
           self.assertEqual(greater_dict({'a': 20, 'b': 10}, 30), {}, "greater_dict({'a': 20, 'b': 10}, 30)")
           self.assertEqual(greater_dict({'a': 20, 'b': 10}, 5), {'a': 20, 'b':10}, "greater_dict({'a': 20, 'b': 10}, 5)")
           self.assertEqual(greater_dict({'a': 20, 'b': 10, 'c': 25}, 15), {'a': 20, 'c': 25}, "greater_dict({'a': 20, 'b': 10, 'c': 25}, 15)")

   myTests().main()

.. activecode:: dp_get_counts_dict
   :autograde: unittest

   Finish the ``get_counts`` function below which takes a list of strings ``s_list`` and returns a dictionary that has the number of times each unique string appears in the list.  For example, ``get_counts(['a','b','a'])`` returns ``{'a':2, 'b':1}``.
   ~~~~
   def get_counts(s_list):


   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(get_counts(['a','b','a']), {'a':2, 'b':1}, "get_counts('a','b','a')")
           self.assertEqual(get_counts([]), {}, "get_counts([])")
           self.assertEqual(get_counts(['a','a','a']), {'a':3}, "get_counts('a','a','a')")
           self.assertEqual(get_counts(['b','a','a']), {'b':1, 'a':2}, "get_counts('b','a','a')")


   myTests().main()
