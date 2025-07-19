Wrap-Up Check
==============

Please answer the following questions.
::

    # Here is a short answer question. 
    # This is the nested dictionary example you will work with.
    employee_dict = {
            'John': {'age': 28, 'position': 'Designer',
                    'skills': {'soft_skill': 'Creativity', 
                               'technical_skill': 'Figma'}},
            'Alice': {'age': 34, 'position': 'Developer',
                    'skills': {'soft_skill': 'Communication', 
                               'technical_skill': 'Python'}}
        }

    # Fill in the missing two lines below to print each employee’s name 
    # along with their skills using a nested loop.

    __________________

        __________________
        
            print(f"{name}'s {skill_type_key}: {skill_expertise_value}")

.. shortanswer:: posttest-1-mooc_nested

    - Recommended Time: Spend at most 2 minutes - Put "I am not sure" and click "Save" if unsure of the answer.

    For the code piece above, fill in the missing two lines to print each employee's name along with their skills using a nested loop.
    
    Note: Be sure to indent the second line correctly.

.. activecode:: posttest-2-mooc_nested
    :autograde: unittest
    :nocodelens:

    - Recommended Time: Spend at most 5 minutes - Put "# I am not sure" and click "Save&Run" if unsure of the answer.

    Write the function ``happy_hour_specials(menu_items)``:
        - ``menu_items`` is a list of tuples. Each tuple contains ``(name, category, is_today_special, price)``.
        - Return a nested dictionary that only includes the items marked as today's special (``is_today_special`` is ``True``) and where the prices are less than or equal to ``15``. Each outer key is the ``category`` and each value is a dictionary. The inner dictionary keys are ``name``, and the values are ``price``.

        .. table::
            :name: today_specical_table
            :align: left
            :width: 40

            +--------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------+
            | Example Input                                                                                                                                                      | Expected Output                                                            |
            +====================================================================================================================================================================+============================================================================+
            |``happy_hour_specials([("Margherita", "Pizza", True, 15), ("Pepperoni", "Pizza", False, 22), ("Hawaiian", "Pizza", True, 10), ("Caesar", "Salad", True, 10)])``     | ``{"Pizza": {"Margherita": 15, "Hawaiian": 10}, "Salad": {"Caesar": 10}}`` |
            +--------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------+
            |``happy_hour_specials([("Margherita", "Pizza", True, 15), ("Pepperoni", "Pizza", False, 22), ("Olive-Walnut", "Pasta", True, 20), ("Caesar", "Salad", True, 10)])`` | ``{"Pizza": {"Margherita": 15}, "Salad": {"Caesar": 10}}``                 |
            +--------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------+
            |``happy_hour_specials([("Lentil", "Soup", True, 15), ("Salmorejo", "Soup", False, 18), ("Harvest", "Salad", False, 18), ("Fruit", "Salad", True, 8)])``             | ``{"Soup": {"Lentil": 15}, "Salad": {"Fruit": 8}}``                        |
            +--------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------+

    Remember to click 'Save&Run' frequently to save your latest answer.

    ~~~~
    def happy_hour_specials(new_menu_items):
            
        # Click 'Save & Run' frequently to ensure your latest answer is saved. 
        

        pass






    ====

    from unittest.gui import TestCaseGui
    
    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(happy_hour_specials([("Classic", "Burger", True, 12), ("Veggie", "Burger", True, 14), ("Fish", "Burger", True, 16), ("Cheese", "Pizza", False, 20)]), {"Burger": {"Classic": 12, "Veggie": 14}})
            self.assertEqual(happy_hour_specials([("Mango", "Smoothie", True, 8), ("Green", "Smoothie", True, 12), ("Chocolate", "Milkshake", False, 15), ("Vanilla", "Milkshake", False, 18)]), {"Smoothie": {"Mango": 8, "Green": 12}})
            self.assertEqual(happy_hour_specials([("Spaghetti", "Pasta", True, 10), ("Alfredo", "Pasta", True, 12), ("Bolognese", "Pasta", False, 14), ("Seafood", "Pasta", True, 18)]), {"Pasta": {"Spaghetti": 10, "Alfredo": 12}})
            self.assertEqual(happy_hour_specials([("Margherita", "Pizza", True, 15), ("Pepperoni", "Pizza", False, 22), ("Hawaiian", "Pizza", True, 10), ("Caesar", "Salad", True, 10)]), {"Pizza": {"Margherita": 15, "Hawaiian": 10}, "Salad": {"Caesar": 10}})

    myTests().main()



.. activecode:: posttest-3-mooc_nested 
    :autograde: unittest
    :nocodelens:

    - Recommended Time: Spend at most 5 minutes - Put "# I am not sure" and click "Save&Run" if unsure of the answer.


    Finish the function ``top_employee(employee_dict)`` below:
        - The ``employee_dict`` is a nested dictionary. The outermost dictionary has unique employee names as keys and a dictionary as values.
        - Each second-level dictionary has keys of age and performance. The value for the key ``age`` is a number, the value for the key ``performance`` is a dictionary.
        - The ``performance`` dictionary has keys of quarters (``Q1``, ``Q2``, ``Q3``, ``Q4``), and a performance score as the value out of 100.
        - The goal is to return a new dictionary where the keys are the names of top employees (those whose average performance score is above or equal to ``90``), and the values are their average performance scores.

        .. table::
            :name: identify_top_employee_table
            :align: left
            :width: 50

            +-------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------+
            | Example Input                                                                                                                                   | Expected Output                |
            +=================================================================================================================================================+================================+
            |``top_employee({"Alice": {"age": 30, "performance": {"Q4": 95}}, "Bob": {"age": 33, "performance": {"Q1": 93, "Q2": 88, "Q3": 95, "Q4": 88}}})`` | ``{"Alice": 95, "Bob": 91}``   |
            +-------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------+
            |``top_employee({"Charlie": {"age": 31, "performance": {"Q3": 70, "Q4": 60}})``                                                                   | ``{}``                         |
            +-------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------+
            |``top_employee({"Bob": {"age": 33, "performance": {"Q3": 92, "Q4", 92}})``                                                                       | ``{"Bob": 92}``                |
            +-------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------+

    ~~~~
    def top_employee(employee_dict):
        # Click 'Save & Run' frequently to ensure your latest answer is saved. 

        pass
        


    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(top_employee({"Bob": {"age": 22, "performance": {"Q3": 92, "Q4": 90}}})["Bob"], 91)
            self.assertEqual(top_employee({"Mike": {"age": 22, "performance": {"Q3": 60, "Q4": 60}}}), {})
            self.assertEqual(top_employee({"Alice": {"age": 20, "performance": {"Q4": 90}}, "Bob": {"age": 22, "performance": {"Q2": 87, "Q3": 92, "Q4": 60}}}), {"Alice": 90})
            self.assertEqual(top_employee({"Bob": {"age": 22, "performance": {"Q3": 92, "Q4": 92}}}), {"Bob": 92})
            self.assertEqual(top_employee({"Bob": {"age": 22, "performance": {"Q3": 92, "Q4": 92}}, "Charlie": {"age": 21, "performance": {"Q4": 70}}}), {"Bob": 92})

    myTests().main()


What to do next
================
.. raw:: html

    <p>Click on the following link to the final page: <b><a id="thank_you"> <font size="+1">Thank you!</font></a></b></p>

.. raw:: html

    <script type="text/javascript" >

      window.onload = function() {

        a = document.getElementById("thank_you")
        a.href = "mc_thank_you.html"
      };

    </script>