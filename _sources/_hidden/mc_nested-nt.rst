Practice
=============

.. activecode:: w1-mooc_nested
        :autograde: unittest
        :nocodelens:

        Finish the function ``add_quantity(item_dict, quantities)`` that “zips” quantities onto their corresponding items inside each category, returning a nested dictionary:
            - It takes a dictionary ``item_dict`` and a list ``quantities`` as input, the lengths of ``item_dict`` and ``quantities`` are the same.
            - For dict ``item_dict``, keys are category names (strings), values are lists of unique item names (strings), each list contains at least one item (no empty lists).
            - For list ``quantities``, it contains the quantity for each item in ``item_dict``. Quantities are given in the same order as the items appear in item_dict when iterated in insertion order, category by category, left to right.
            - The total number of quantities equals the total number of items in all categories combined.
            - The function should return a new nested dictionary where the outer dictionary keys are the category names, the inner dictionary keys are the item names, and the inner dictionary values are the quantities.

        .. table::
            :name: nested_quantity_table
            :align: left
            :width: 50

            +--------------------------------------------------------------------------------------+-----------------------------------------------------------------------+
            | Example Input                                                                        | Expected Output                                                       |
            +======================================================================================+=======================================================================+
            |``add_quantity({"Fruits": ["Apples", "Bananas"], "Bakery": ["Bagels"]}, [3, 4, 6])``  | ``{"Fruits": {"Apples": 3, "Bananas": 4}, "Bakery": {"Bagels": 6}}``  |
            +--------------------------------------------------------------------------------------+-----------------------------------------------------------------------+
            |``add_quantity({"Drinks": ["Coffee", "Tea", "Juice"]}, [10, 5, 7])``                  | ``{"Drinks": {"Coffee": 10, "Tea": 5, "Juice": 7}}``                  |
            +--------------------------------------------------------------------------------------+-----------------------------------------------------------------------+
            |``add_quantity({"Dairy": ["Milk"]}, [1])``                                            | ``{"Dairy": {"Milk": 1}}``                                            |
            +--------------------------------------------------------------------------------------+-----------------------------------------------------------------------+

        ~~~~
        def add_quantity(item_dict, quantities):








        ====

        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(add_quantity({"Fruits": ["Apples", "Bananas"], "Bakery": ["Bagels"]}, [3, 4, 6]), {"Fruits": {"Apples": 3, "Bananas": 4}, "Bakery": {"Bagels": 6}})
                self.assertEqual(add_quantity({"Drinks": ["Coffee", "Tea", "Juice"]}, [10, 5, 7]), {"Drinks": {"Coffee": 10, "Tea": 5, "Juice": 7}})
                self.assertEqual(add_quantity({"Bakery": ["Bagel"]}, [12]), {"Bakery": {"Bagel": 12}})
                self.assertEqual(add_quantity({"Drinks": ["Coffee", "Tea"]}, [12, 1]), {"Drinks": {"Coffee": 12, "Tea": 1}})
        myTests().main()



.. activecode:: w2-mooc_nested
        :autograde: unittest
        :nocodelens:
        

        Finish the function ``get_average_score()`` below:
            - It takes one dictionary ``student_information`` representing student data, where keys are student names, and values are dictionaries containing information about the student, including their age and a list of course they took and the grades.
            - You need to calculate the average grades for each student and then store the students whose average grade is higher than or equal to 80 in a dictionary.
            - It returns a dictionary ``average_score`` where keys are student names, and values are the average grades for each student.

        .. table::
            :name: get_average_score_table
            :align: left
            :width: 50

            +------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------+
            | Example Input                                                                                                                                        | Expected Output                |
            +======================================================================================================================================================+================================+
            |``get_average_score({"Alice": {"age": 20, "courses": {"Math": 90}}, "Bob": {"age": 22, "courses": {"Math": 87, "History": 92, "Science": 85}}})``     | ``{"Alice": 90, "Bob": 80}``   |                 
            +------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------+
            |``get_average_score("Bob": {"age": 22, "courses": {"Math": 75, "History": 85}}, "Charlie": { "age": 21, "courses": {"Math": 70, "History": 60}})``    | ``{"Bob": 80}``                |
            +------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------+
            |``get_average_score("Bob": {"age": 22, "courses": {"Math": 92, "History", 86}})``                                                                     | ``{"Bob": 89}``                |
            +------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------+     
        
        ~~~~
        def get_average_score(student_information):
            





        ====

        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(get_average_score({"Alice": {"age": 20, "courses": {"Math": 90}}, "Bob": {"age": 22, "courses": {"Math": 87, "History": 92, "Science": 85}}}), {"Alice": 90, "Bob": 88})
                self.assertEqual(get_average_score({"Bob": {"age": 22, "courses": {"Math": 75, "History": 85}}}), {"Bob": 80})
                self.assertEqual(get_average_score({"Bob": {"age": 22, "courses": {"Math": 75, "History": 85}}, "Charlie": {"age": 21, "courses": {"Math": 70}}}), {"Bob": 80})
                self.assertEqual(get_average_score({"Bob": {"age": 22, "courses": {"Math": 92, "History": 86}}})["Bob"], 89)

        myTests().main()





.. activecode:: w3-mooc_nested
        :autograde: unittest
        :nocodelens:


        Finish the function ``get_vegetarian_menu(menu_items):`` below:
            - It takes a list of tuples ``menu_items`` as input, each tuple contains ``(name, category, price, is_vegetarian)``.
            - It returns a new nested dictionary that only contains the items from  ``menu_items`` where ``is_vegetarian`` is ``True``.
                - The outer dictionary keys are ``category`` such as "Soup", "Pizza", "Pasta", "Salad".
                - The inner dictionary keys are ``name`` and values are ``price`` for each vegetarian item of that ``category``.


        .. table::
            :name: get_vegetarian_menu_table
            :align: left
            :width: 40

            +--------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------+
            | Example Input                                                                                                                                                      | Expected Output                                                                           |
            +====================================================================================================================================================================+===========================================================================================+
            |``get_vegetarian_menu([("Margherita", "Pizza", 15, True), ("Pepperoni", "Pizza", 22, False), ("Hawaiian", "Pizza", 10, True), ("Caesar", "Salad", 10, True)])``     | ``{"Pizza": {"Margherita": 15, "Hawaiian": 10}, "Salad": {"Caesar": 10}}``                |
            +--------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------+
            |``get_vegetarian_menu([("Margherita", "Pizza", 15, True), ("Pepperoni", "Pizza", 22, False), ("Olive-Walnut", "Pasta", 20, True), ("Caesar", "Salad", 10, True)])`` | ``{"Pizza": {"Margherita": 15}, "Pasta": {"Olive-Walnut": 20}, "Salad": {"Caesar": 10}}`` |
            +--------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------+
            |``get_vegetarian_menu([("Lentil", "Soup", 15, True), ("Salmorejo", "Soup", 18, True), ("Harvest", "Salad", 18, False), ("Tuna Poke", "Salad", 20, False)])``        | ``{"Soup": {"Lentil": 15, "Salmorejo": 18}``                                              |
            +--------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------+

        ~~~~
        def get_vegetarian_menu(menu_items):








        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(get_vegetarian_menu([("Margherita", "Pizza", 15, True), ("Pepperoni", "Pizza", 22, False), ("Hawaiian", "Pizza", 10, True), ("Caesar", "Salad", 10, True)]), {"Pizza": {"Margherita": 15, "Hawaiian": 10}, "Salad": {"Caesar": 10}})
                self.assertEqual(get_vegetarian_menu([("Lentil", "Soup", 15, True), ("Salmorejo", "Soup", 18, True), ("Harvest", "Salad", 18, False), ("Tuna Poke", "Salad", 20, False)]), {"Soup": {"Lentil": 15, "Salmorejo": 18}})
                self.assertEqual(get_vegetarian_menu([("Margherita", "Pizza", 15, True), ("Pepperoni", "Pizza", 22, False), ("Olive-Walnut", "Pasta", 20, True), ("Caesar", "Salad", 10, True)]), {"Pizza": {"Margherita": 15}, "Pasta": {"Olive-Walnut": 20}, "Salad": {"Caesar": 10}})
                self.assertEqual(get_vegetarian_menu([("Margherita", "Pizza", 15, False)]), {})
                self.assertEqual(get_vegetarian_menu([("Lentils", "Side", 5, True), ("Potatoes", "Side", 5, False), ("Peas", "Side", 5, True)]), {"Side": {"Lentils": 5, "Peas": 5}})
        myTests().main()


.. activecode:: w4-mooc_nested
        :autograde: unittest
        :nocodelens:

        Write a function, ``get_order_totals()``, that takes a list of tuples and returns a nested dictionary with the same information. Each tuple includes 3 values; the first is the person's name, the second is item name, and the third is the quantity.
        Note that there may be more than one tuple for the same person and item - your dictionary should total all the quantities for the same person and item.

        .. table::
            :name: get_order_table
            :align: left
            :width: 40

            +----------------------------------------------------------------------------------------------------+-------------------------------------------------------+
            | Example Input                                                                                      | Expected Output                                       |
            +====================================================================================================+=======================================================+
            |``get_order_totals([('Holden', 'pizza', 1), ('Cristina', 'taco', 2), ('Holden', 'pizza', 1)])``     | ``{'Holden': {'pizza': 2}, 'Cristina': {'taco': 2}}`` |
            +----------------------------------------------------------------------------------------------------+-------------------------------------------------------+
            |``get_order_totals([('Holden', 'pizza', 1), ('Cristina', 'taco', 2)])``                             | ``{'Holden': {'pizza': 1}, 'Cristina': {'taco': 2}}`` |
            +----------------------------------------------------------------------------------------------------+-------------------------------------------------------+

        ~~~~
        def get_order_totals(orders):







        ====

        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(get_order_totals([('Holden', 'pizza', 1), ('Cristina', 'taco', 2), ('Holden', 'pizza', 1)]), {'Holden': {'pizza': 2}, 'Cristina': {'taco': 2}})
                self.assertEqual(get_order_totals([('person1', 'food1', 2), ('person2', 'food2', 2)]), {'person1': {'food1': 2}, 'person2': {'food2': 2}})
                self.assertEqual(get_order_totals([('person1', 'food1', 1)]), {'person1': {'food1': 1}})
                self.assertEqual(get_order_totals([('p1', 'f1', 2), ('p1', 'f1', 3), ('p2', 'f1', 4), ('p1', 'f2', 5), ('p2', 'f2', 2)])['p1']['f1'], 5)

        myTests().main()







What to do next
===============

.. raw:: html

    <p>Click on the following link to take the posttest: <b><a id="posttest"> <font size="+1">Posttest</font></a></b></p>

.. raw:: html

    <script type="text/javascript" >

      window.onload = function() {

        a = document.getElementById("posttest")
        a.href = "mc_posttest.html"
      };

    </script>