Converting a JSON String into a Python Object
--------------------------------------------------
.. index::
    single: JSON

We construct JSON by nesting dictionaries and lists as
needed. In the example below, we represent a list of users where each user is
a set of key-value pairs (i.e., a dictionary). So we have a list of
dictionaries.

In the following program, we use the built-in ``json``
library to parse the JSON and read through the data.

.. activecode:: web-parse-json-to-python
    :caption: Converting a JSON string to a Python object

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

Here is the same example in XML.

.. activecode:: net_parse_users_second_time_ac1
    :language: python3

    Run this code to see what it prints.
    ~~~~
    import xml.etree.ElementTree as ET

    input = '''
    <stuff>
      <users>
        <user x="2">
          <id>001</id>
          <name>Chuck</name>
        </user>
        <user x="7">
          <id>009</id>
          <name>Brent</name>
        </user>
      </users>
    </stuff>'''

    stuff = ET.fromstring(input)
    lst = stuff.findall('users/user')
    print('User count:', len(lst))

    for item in lst:
        print('Name', item.find('name').text)
        print('Id', item.find('id').text)
        print('Attribute', item.get('x'))

Compare the JSON and XML examples above. The JSON has less
detail, so we must know in advance that we are getting a list and that
the list is of users and each user is a set of key-value pairs. JSON
is more succinct (an advantage) but also is less self-describing (a
disadvantage).

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

If you compare the code to extract data from the parsed JSON and XML you
will see that what we get from ``json.loads()`` is a Python
list which we traverse with a ``for`` loop, and each item
within that list is a Python dictionary. Once the JSON has been parsed,
we can use the Python index operator to extract the various bits of data
for each user. We don't have to use the JSON library to dig through the
parsed JSON, since the returned data is simply native Python structures.

In general, there is an industry trend away from XML and towards JSON
for web services. Because the JSON is simpler and more directly maps to
native data structures we already have in programming languages, the
parsing and data extraction code is usually simpler and more direct when
using JSON. But XML is more self-descriptive than JSON and so there are
some applications where XML retains an advantage. For example, most word
processors store documents internally using XML rather than JSON.

.. mchoice:: webParsingJSON_MC_tf
    :practice: T
    :answer_a: XML is more self-descriptive than JSON
    :answer_b: An XML representation requires more characters than an equivalent JSON one
    :answer_c: You need to use a library to process a JSON object
    :answer_d: JSON is being used more for transmitting data than XML.
    :correct: c
    :feedback_a: Incorrect.  XML is more self-descriptive than JSON
    :feedback_b: Incorrect. An XML representation requires more characters than an equivalent JSON one
    :feedback_c: Correct.  A JSON object is either a list or dictionary in Python so you don't need a special library to process it.
    :feedback_d: Incorrect. JSON is being used more for transmitting data than XML.

    Which of the following is False?

Converting a Python object into a JSON string
===============================================

You can also convert a Python list or dictionary to a JSON string.

.. activecode:: web-parse-json-to-string
    :caption: Convert Python object to JSON string

    import json
    d_list = [{'Year': 2022, 'First': 'Barb', 'Last': 'Ericson'}, {'Year': 2018, 'First': 'Mark', 'Last': 'Guzdial'}]
    print(json.dumps(d_list))
    d = d_list[0]
    print(json.dumps(d))


.. fillintheblank:: net_parse_json_convert_to_string_fitb

    Which method of the json library is used to convert a Python object to a JSON string?

    - :dumps: The dumps method takes a Python object and returns a JSON string.
      :.*: Which method was called in the code above?
