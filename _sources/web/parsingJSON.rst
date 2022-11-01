What is JSON?
----------------
JSON stands for JavaScript Object Notation.  It is a format for sharing data.
You can read a JSON string from a file or from a URL and convert it into a Python dictionary or list.
You can also convert a Python dictionary or list into a JSON string.

Converting a JSON String into a Python Object
===============================================

.. index::
    single: JSON

In the following program, we use the built-in ``json``
library to parse the JSON string and return a Python list of dictionaries.

.. activecode:: web-parse-json-to-python
    :caption: Converting a JSON string to a Python object

    What do you think this code will print?  Run it to see what it actually
    prints.
    ~~~~
    import json

    data = '''
    [
      { "id" : "001",
       "x" : "2",
       "name" : "Chuck"
      } ,
      { "id" : "009",
       "x" : "7",
       "name" : "Brenda"
      }
    ]'''

    info = json.loads(data)
    print('User count:', len(info))

    for item in info:
        print('Name', item['name'])
        print('Id', item['id'])
        print('Attribute', item['x'])

.. fillintheblank:: net_parse_xml_which_method

    Which method of the json library is used to convert a JSON string into a Python object?

    - :loads: The loads method takes a JSON string and returns a list or dictionary.
      :.*: Which method was called in the code above?

Here is another example.  Run the code to see what it does.

.. activecode:: web-parse-json-to-python-dictionary
    :caption: Converting a JSON string to a Python object

    What do you think this code will print?  Run it to see what it actually
    prints.
    ~~~~
    import json
    data = '''{"employees": [{"name": "Lena", "title": "sales person"},
                         {"name": "Paru", "title": "manager"},
                         {"name": "Tyra", "title": "vice president"}]}'''
    d1 = json.loads(data)
    people_list = d1["employees"]
    print(len(people_list))
    for person in people_list:
        print(person.get('name'))

.. fillintheblank:: net_json_what_type_returned_data

    What type of thing (class name) is ``data`` in the code above?

    - :str|string: It is an object of the str (string) class
      :.*: Try again

.. fillintheblank:: net_json_what_type_returned_d1

    What type of thing (class name) is ``d1`` in the code above?

    - :dict|dictionary: It is an object of the dict (dictionary) class.
      :.*: Try again

.. mchoice:: webParsingJSON_MC_construct
    :practice: T
    :answer_a: dictionary and string
    :answer_b: dictionary and list
    :answer_c: string and list
    :correct: b
    :feedback_a: Dictionaries are used in JSON, but strings only contain one element, so they are not as useful.
    :feedback_b: JSON is constructed by nesting dictionaries and lists as needed.
    :feedback_c: Lists are used in JSON, but strings only contain one element, so they are not as useful.

    Once you convert a JSON string to Python what are the two possible types for the Python object?

Converting a Python object into a JSON string
===============================================

You can also convert a Python list or dictionary to a JSON string.

.. activecode:: web-parse-json-to-string
    :caption: Convert Python object to JSON string

    What do you think this code will print?  Run it to see what it actually
    prints.
    ~~~~
    import json
    d_list = [{'Year': 2022, 'First': 'Barb', 'Last': 'Ericson'}, {'Year': 2018, 'First': 'Mark', 'Last': 'Guzdial'}]
    print(json.dumps(d_list))
    d = d_list[0]
    print(json.dumps(d))


.. fillintheblank:: net_parse_json_convert_to_string_fitb

    Which method of the json library is used to convert a Python object to a JSON string?

    - :dumps: The dumps method takes a Python object and returns a JSON string.
      :.*: Which method was called in the code above?
