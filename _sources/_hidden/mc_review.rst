Nested Dictionaries
====================

1️⃣ What is a nested dictionary?
+++++++++++++++++++++++++++++++++++++++++
A nested dictionary is a dictionary that contains other dictionaries as its values. This allows for the organization of data in a hierarchical structure, where each key can map to another dictionary, enabling complex data representations.
For example, consider the following nested dictionary:

::

    # Example of a nested dictionary
    person = {
        "name": "Alice",
        "age": 30,
        "address": {
            "street": "123 Main St",
            "city": "Somecity",
            "state": "Somestate",
            "country": "Somecountry"
        },
    }

In this example, the `person` dictionary contains the keys `name`, `age`, and `address`. The value for the `address` key is another dictionary that contains keys `street`, `city`, `state`, and `country`. 
This structure allows for easy access to nested data.

2️⃣ How to access values in a nested dictionary?
+++++++++++++++++++++++++++++++++++++++++++++++++++
To access values in a nested dictionary, you can use multiple keys in sequence, i.e. `dict["outer_key"]["inner_key"]`.
For example, to access the `city` value from the `address` dictionary in the `person` example above, you would do:

.. activecode:: review-2-mooc_nested
    
    Accessing a value in a nested dictionary
    ~~~~
    person = {
        "name": "Alice",
        "age": 30,
        "address": {
            "street": "123 Main St",
            "city": "Somecity",
            "state": "Somestate",
            "country": "Somecountry"
            },
        }

    # To access values in a nested dictionary, you can use multiple keys in sequence. 
    # To access the "city" value from the "address" dictionary in the "person" example above, you would use:

    city = person["address"]["city"]
    print(city)  # Output: Somecity



3️⃣ How to loop through the outer items of a nested dictionary?
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
To loop through the outer items (key-value pairs) of a nested dictionary, you can use a `for` loop with the `.items()` method. This method returns a list of a dictionary’s key-value tuple pairs.
For example, to loop through the outer items of the `person` dictionary, you would do:

.. activecode:: review-3-mooc_nested

    Looping through the outer items of a nested dictionary
    ~~~~
    person = {
        "name": "Alice",
        "age": 30,
        "address": {
            "street": "123 Main St",
            "city": "Somecity",
            "state": "Somestate",
            "country": "Somecountry"
            },
        }

    # To loop through the outer items (key-value pairs) of a nested dictionary, 
    # you can use a for loop with the .items() method. 
    # This method returns a list of a dictionary’s key-value tuple pairs.
    # To loop through the outer items of the "person" dictionary, you would do:

    for outer_key, outer_value in person.items():
        # This will print each key and its corresponding value in the person dictionary, 
        # including the nested dictionary under the "address" key.
        print(f"{outer_key}: {outer_value}")


4️⃣ How to loop through the inner items of a nested dictionary?
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
To loop through the inner items of a nested dictionary, you can access the inner dictionary using its key and then use a `for` loop with the `.items()` method on that inner dictionary.
For example, to loop through the inner items of the `address` dictionary in the `person` example, you would do:

.. activecode:: review-4-mooc_nested

    Looping through the inner items of a nested dictionary
    ~~~~
    person = {
        "name": "Alice",
        "age": 30,
        "address": {
            "street": "123 Main St",
            "city": "Somecity",
            "state": "Somestate",
            "country": "Somecountry"
            },
        }

    # To loop through the inner items of a nested dictionary, 
    # you can access the inner dictionary using its key and then use a for loop with the .items() method on that inner dictionary.
    # To loop through the inner items of the "address" dictionary in the "person" example, you would do:
    
    for inner_key, inner_value in person["address"].items():
        # This will print each key and its corresponding value in the "address" dictionary, 
        # allowing you to access all the inner items.
        print(f"{inner_key}: {inner_value}")




5️⃣ How to add a new key-value pair to a nested dictionary?
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
To add a new key-value pair to a nested dictionary, you can specify the outer key and then assign a new key-value pair to the inner dictionary.
For example, to add a new key `zip_code` to the `address` dictionary in the `person` example, you would do:

.. activecode:: review-5-mooc_nested

    Adding a new key-value pair to a nested dictionary
    ~~~~
    person = {
        "name": "Alice",
        "age": 30,
        "address": {
            "street": "123 Main St",
            "city": "Somecity",
            "state": "Somestate",
            "country": "Somecountry"
            },
        }

    # To add a new key-value pair to a nested dictionary, 
    # you can specify the outer key and then assign a new key-value pair to the inner dictionary.
    # For example, to add a new key "zip_code" to the "address" dictionary in the "person" example, you would do:
    
    person["address"]["zip_code"] = "12345"

    print(person["address"]["zip_code"])  # Output: 12345

6️⃣ How to create an empty dictionary for a new category and add items later?
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
To create an empty dictionary for a new category in a nested dictionary, you can simply assign an empty dictionary to the outer key. Then, you can add items to this inner dictionary later.
For example, if you want to create a new category `hobbies` in the `person` dictionary and add items later, you would do:

.. activecode:: review-6-mooc_nested

    Creating an empty dictionary for a new category and adding items later
    ~~~~
    person = {
        "name": "Alice",
        "age": 30,
        "address": {
            "street": "123 Main St",
            "city": "Somecity",
            "state": "Somestate",
            "country": "Somecountry"
            },
        }

    # To create an empty dictionary for a new category in a nested dictionary, 
    # you can simply assign an empty dictionary to the outer key. 
    # Then, you can add items to this inner dictionary later.
    
    person["hobbies"] = {}  # Create an empty dictionary for the new category "hobbies".


    # Now you can add items to the "hobbies" category later. For example, you can add hobbies using a loop.

    hobby_list = [("reading", "Fiction"), ("exercise", "Running")]
    for hobby, detail in hobby_list:
        person["hobbies"][hobby] = detail  # Add each hobby with its type to the "hobbies" dictionary

    print(person["hobbies"])  # Output: {'reading': 'Fiction', 'exercise': 'Running'}


What to do next
===================

.. raw:: html

    <p>Click on the following link to finish the introduction: <b><a id="intro"> <font size="+1">Introduction</font></a></b></p>

.. raw:: html

    <script type="text/javascript" >

      window.onload = function() {

        a = document.getElementById("intro")
        a.href = "mc_intro.html"
      };

    </script>