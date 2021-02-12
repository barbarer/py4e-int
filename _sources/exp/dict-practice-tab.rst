Dictionary Practice - Parsons Problems
-----------------------------------------------------

Try to solve the following problems.  You can choose to solve either the mixed-up code problem or the write code problem or even both, however you will earn a maximum of 5 points.

#.
    .. tabbed:: outer_tab_two_list_to_dict

       .. tab:: Mixed Up Code

          .. parsonsprob:: dp_tab_two_list_to_dict_pp
             :numbered: left
             :adaptive:

             Put the blocks in order to define the function ``make_dir`` that takes two lists (``l1`` and ``l2``) of equal length and returns a dictionary where the items in ``l1`` are the keys and the items in ``l2`` are the values. For example, ``make_dir([‘a’, ‘c’], [5, 0])`` returns ``{‘a’: 5, ‘c’: 0}``.

             -----
             def make_dir(l1, l2):
             =====
                 d = {}
             =====
                 d = [] #paired
             =====
                 for i in range(len(l1)):
             =====
                 for i in range(l1): #paired
             =====
                     val1 = l1[i]
                     val2 = l2[i]
             =====
                     d[val1] = val2
             =====
                     d[val1] = d[val2] #paired
             =====
                 return d

       .. tab:: Write code

          .. activecode:: dp_tab_two_list_to_dict
             :autograde: unittest

             Finish the function below which takes two lists (l1 and l2) of equal length and returns a dictionary where the items in l1 are the keys and the items in l2 are the values.  For example, make_dir(['a', 'c'], [5, 0]) returns {'a': 5, 'c': 0}.
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

#.
    .. tabbed:: outer_tab_list_of_tuples_to_dict

       .. tab:: Mixed Up Code

          .. parsonsprob:: dp_tab_list_of_tuples_to_dict_pp
             :numbered: left
             :adaptive:

             Put the blocks in order to define the function ``make_dir`` which takes a list of tuples (``tuple_list``) and returns a dictionary where the first item in each tuple is the key and the second is the value. For example, ``make_dir([(‘gray’, -3), (‘blue’, 2)])`` returns ``{‘gray’: -3, ‘blue’: 2}``.
             -----
             def make_dir(tuple_list):
             =====
                 d = {}
             =====
                 d = [] #paired
             =====
                 for tuple in tuple_list:
             =====
                 for tuple in range(tuple_list): #paired
             =====
                     d[tuple[0]] = tuple[1]
             =====
                     d[tuple[0]] = d[tuple[1]] #paired
             =====
                 return d

       .. tab:: Write code

          .. activecode:: dp_tab_list_of_tuples_to_dict
             :autograde: unittest

             Finish the function below which takes a list of tuples and returns a dictionary where the first item in each tuple is the key and the second is the value. For example, make_dir([('gray', -3), ('blue', 2)]) returns {'gray': -3, 'blue': 2}.
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

#.
    .. tabbed:: outer_tab_get_tuple_from_dict

       .. tab:: Mixed Up Code

          .. parsonsprob:: dp_tab_get_tuple_from_dict_pp
             :numbered: left
             :adaptive:

             Put the blocks in order to define the function ``get_tuple`` which takes a dictionary ``dict`` and a ``key`` and if the ``key`` is found in the dictionary it returns ``(key, value)`` otherwise it returns ``(key, ‘Not Found’)``. For example, ``get_tuple({‘a’: 0}, ‘c’)`` returns ``(‘c’, ‘Not Found’)``, and ``get_tuple({‘a’: 0}, ‘a’)`` returns ``(‘a’, 0)``
             -----
             def get_tuple(dict, key):
             =====
             def get_tuple(dict, key) #paired
             =====
                 value = dict.get(key,'Not Found')
             =====
                 value = dict[key] #paired
             =====
                 return (key, value)
             =====
                 return {key, value} #paired

       .. tab:: Write code

          .. activecode:: dp_tab_list_of_tuples_to_dict
             :autograde: unittest

             Finish the function below which takes a list of tuples and returns a dictionary where the first item in each tuple is the key and the second is the value. For example, make_dir([('gray', -3), ('blue', 2)]) returns {'gray': -3, 'blue': 2}.
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

#.
    .. tabbed:: outer_tab_greater_dict

       .. tab:: Mixed Up Code

          .. parsonsprob:: dp_tab_greater_dict_pp
             :numbered: left
             :adaptive:

             Put the blocks in order to define the function ``greater_dictionary`` which takes a dictionary ``d`` and an integer ``cutoff`` and returns a dictionary
             that contains only the key-value pairs where the value is greater than
             or equal to the cutoff.   For example, ``greater_dict({‘a’: 20, ‘b’: 10}, 15)`` returns ``{‘a’: 20}``.
             -----
             def greater_dictionary(d, cutoff):
             =====
             def greater_dictionary(self, d, cutoff): #paired
             =====
                 result = {}
             =====
                 result = () #paired
             =====

                 for key in d:
             =====
                 for key in range(d): #paired
             =====
                     if d[key] >= cutoff:
             =====
                         result[key] = d[key]
             =====
                         d[key] = result[key] #paired
             =====
                 return result

       .. tab:: Write code

          .. activecode:: dp_tab_greater_dict
             :autograde: unittest

             Finish the function below which takes a dictionary d and an integer cutoff and returns a new dictionary that contains only the key-value pairs where the value is greater than or equal to the cutoff.  For example, greater_dict({'a': 20, 'b': 10}, 15) returns {'a': 20}.
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


#.
    .. tabbed:: outer_tab_get_counts_dict

       .. tab:: Mixed Up Code

          .. parsonsprob:: dp_tab_get_counts_dict_pp
             :numbered: left
             :adaptive:

             Put the blocks in order to define the function get_counts which takes a list of strings and returns a dictionary that has the number of times each unique string appears in the list. For example, get_counts([‘a’,’b’,’a’]) returns {‘a’:2, ‘b’:1}.
             -----
             def get_counts(s_list):
             =====
             def get_counts(self, s_list): #paired
             =====
                 d = dict()
             =====
                 d = new dict() #paired
             =====
                 for s in s_list:
             =====
                     d[s] = d.get(s,0) + 1
             =====
                     d[s] = d[s] + 1 #paired
             =====
                 return d

       .. tab:: Write code

          .. activecode:: dp_tab_get_counts_dict
             :autograde: unittest

             Finish the function below which takes a list of strings and returns a dictionary that has the number of times each unique string appears in the list.  For example, get_counts(['a','b','a']) returns {'a':2, 'b':1}.
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
