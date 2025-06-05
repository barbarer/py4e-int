.. parsonsprob:: p1-mooc_nested
    :numbered: left
    :adaptive:
    :practice: T

    Finish the function ``table_reservation(reservation_dict, guest_num)`` below:
        - It takes a nested dictionary ``reservation_dict`` representing a restaurant's current reservation situation for a day and a specific number of guests ``guest_num`` as input.
        - ``reservation_dict`` is a nested dictionary with outer keys as time slots in a day (e.g., breakfast, lunch, dinner), and values as a list of dictionaries where the inner keys are unique researvation IDs and the values are the number of guests for that reservation.
        - Your goal is to count and return the number of reservations in ``reservation_dict`` with the same guest number as the input ``guest_num``.
    -----
    def table_reservation(reservation_dict, guest_num):
    =====
    count = 0
    =====
    for time_slot, reservations in reservation_dict.items():
    =====
        for reservation in reservations:
    =====
            for reservation_id, guests in reservation.items():
    =====
                if guests == guest_num:
    =====
                    count += 1
    =====
    return count


.. parsonsprob:: p2-mooc_nested
    :numbered: left
    :adaptive:
    :practice: T

    Finish the function ``get_average_score(student_information)`` below:
        - It takes a dictionary ``student_information`` representing student data, where the keys are student names, and the values are dictionaries containing information about the student, including their age and a list of courses they took and the grade for each course.
        - You then need to calculate the average grade for each student.
        - Return a dictionary that stores the students whose average grade is higher than or equal to ``80`` in a dictionary. The keys are student names and the values are their average grade.    -----
    -----
    def get_average_score(student_information):
    =====
        average = {}
    =====
        for name in student_information:
    =====
            total = 0
            count = 0
    =====
            for course in student_information[name]["courses"]:
    =====
                total += student_information[name]["courses"][course]
                count += 1
    =====
            if total/count >= 80:
    =====
                average[name] = total/count
    =====
        return average


.. parsonsprob:: p3-mooc_nested
    :numbered: left
    :adaptive:
    :practice: T

    Finish the function ``get_vegetarian_menu(menu_items):`` below:
    - It takes a list of tuples ``menu_items`` as input, each tuple contains ``(name, category, price, is_vegetarian)``.
    - It returns a new nested dictionary that only contains the items from  ``menu_items`` where ``is_vegetarian`` is ``True``.
        - The outer dictionary keys are ``category`` such as "Soup", "Pizza", "Pasta", "Salad".
        - The inner dictionary keys are ``name`` and values are ``price`` for each vegetarian item of that ``category``.
    -----
    def get_vegetarian_menu(menu_items):
    =====
        menu = {}
    =====
        for name, category, price, is_vegetarian in menu_items:
    =====
            if is_vegetarian:
    =====
                if category not in menu:
    =====
                    menu[category] = {} 
    =====
                menu[category][name] = price
    =====
        return menu


.. parsonsprob:: p4-mooc_nested
    :numbered: left
    :adaptive:
    :practice: T

    Finish the function ``get_vegetarian_menu(menu_items):`` below:
    - It takes a list of tuples ``menu_items`` as input, each tuple contains ``(name, category, price, is_vegetarian)``.
    - It returns a new nested dictionary that only contains the items from  ``menu_items`` where ``is_vegetarian`` is ``True``.
        - The outer dictionary keys are ``category`` such as "Soup", "Pizza", "Pasta", "Salad".
        - The inner dictionary keys are ``name`` and values are ``price`` for each vegetarian item of that ``category``.
    -----
    def get_order_totals(orders):
    =====
        order_totals = {}
    =====
        for person, item, quantity in orders:
    =====
            if person in order_totals:
    =====
                if item in order_totals[person]:
    =====
                    order_totals[person][item] += quantity
    =====
                else:
    =====
                    order_totals[person][item] = quantity
    =====
            else:
    =====
                order_totals[person] = {item: quantity}
    =====
        return order_totals