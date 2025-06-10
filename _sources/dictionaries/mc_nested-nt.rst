Practice
=============

.. raw:: html

    <script>

        function triggerSaveClicks(callback) {
                console.log("Triggering all Save and Save & Run clicks...");

                let saveButtons = document.querySelectorAll('button');
                let saveCount = 0;

                saveButtons.forEach(button => {
                    if (button.innerText.includes('Save') || button.innerText.includes('Save & Run')) {
                        console.log(`Clicking button: ${button.innerText}`);
                        button.click();  // Simulate button click
                        saveCount++;
                    }
                });

                // Ensure logging is complete before proceeding
                setTimeout(() => {
                    console.log(`Triggered ${saveCount} Save clicks. Proceeding...`);
                    if (callback) callback();
                }, 1000);  // Wait 1 second for logging to process
        

        document.addEventListener("DOMContentLoaded", function() {
            let introLink = document.getElementById('posttest');  // Change ID if needed
            if (introLink) {
                introLink.addEventListener("click", function(event) {
                    event.preventDefault(); // Stop immediate navigation

                    console.log("User clicked the posttest link. Saving first...");

                    // Trigger Save clicks, then navigate
                    triggerSaveClicks(() => {
                        window.location.href = introLink.href;  // Navigate after saving
                    });
                });
            }
        });

    </script>

.. activecode:: w1-mooc_nested
        :autograde: unittest
        :nocodelens:

        Finish the function ``table_reservation(reservation_dict, guest_num)`` below:
            - It takes a nested dictionary ``reservation_dict`` representing a restaurant's current reservation situation for a day and a specific number of guests ``guest_num`` as input.
            - ``reservation_dict`` is a nested dictionary with outer keys as time slots in a day (e.g., breakfast, lunch, dinner), and values as a list of dictionaries where the inner keys are unique researvation IDs and the values are the number of guests for that reservation.
            - Your goal is to count and return the number of reservations in ``reservation_dict`` with the same guest number as the input ``guest_num``.

        .. table::
            :name: nested_merge_course_table
            :align: left
            :width: 50

            +----------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
            | Example Input                                                                                                                                                        | Expected Output  |
            +======================================================================================================================================================================+==================+
            |``table_reservation({"breakfast": [{"G01": 3}, {"G02": 4}], "lunch": [{"G03": 2}, {"G04": 4}], "happy_hour": [{"G05": 6}], "dinner": [{"G06": 2}, {"G07": 8}]}, 4)``  | ``2``            |
            +----------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
            |``table_reservation({"brunch": [{"G01": 2}], "lunch": [{"G02": 2}, {"G03": 4}], "happy_hour": [{"G04": 2}], "dinner": [{"G05": 2}, {"G06": 8}]}, 2)``                 | ``4``            |
            +----------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
            |``table_reservation({"breakfast": [{"G01": 1}], "lunch": [{"G02": 2}, {"G03": 4}], "happy_hour": [{"G04": 6}], "dinner": [{"G05": 2}, {"G06": 8}]}, 6)``              | ``1``            |
            +----------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+

        ~~~~
        def table_reservation(reservation_dict, guest_num):








        ====

        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(table_reservation({"breakfast": [{"G01": 3}, {"G02": 4}], "lunch": [{"G03": 2}, {"G04": 4}], "happy_hour": [{"G05": 6}], "dinner": [{"G06": 2}, {"G07": 8}]}, 4), 2)
                self.assertEqual(table_reservation({"breakfast": [{"G01": 2}, {"G02": 4}], "lunch": [{"G03": 2}, {"G04": 2}], "happy_hour": [{"G05": 6}], "dinner": [{"G06": 2}, {"G07": 8}]}, 2), 4)
                self.assertEqual(table_reservation({"breakfast": [{"G01": 2}, {"G02": 4}], "lunch": [{"G03": 2}, {"G04": 2}], "happy_hour": [{"G05": 6}], "dinner": [{"G06": 2}, {"G07": 8}]}, 10), 0)
                self.assertEqual(table_reservation({"breakfast": [{"G01": 1}, {"G02": 4}]}, 1), 1)
                self.assertEqual(table_reservation({"lunch": [{"G01": 1}, {"G02": 4}], "happy_hour": [{"G01": 1}, {"G02": 4}]}, 1), 2)
                self.assertEqual(table_reservation({"breakfast": [{"G02": 4}]}, 9), 0)
        myTests().main()



.. activecode:: w2-mooc_nested
        :autograde: unittest
        :nocodelens:
        

        Finish the function ``get_average_score()`` below:
            - It takes one dictionary ``student_information`` representing student data, where keys are student names, and values are dictionaries containing information about the student, including their age and a list of course they took and the grades.
            - You need to calculate the average grades for each student and then store the students whose average grade is higher than or equal to 80 in a dictionary.
            - It returns a dictionary ``average_score`` where keys are student names, and values are the average grades for each student.

        .. table::
            :name: item_quantity_table
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
        def get_average_score(dict_category_item, lst_quantity):
            





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
        a.href = "posttest.html"
      };

    </script>