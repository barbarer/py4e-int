Parsing JSON
------------
.. index::
    single: JSON

We construct our JSON by nesting dictionaries and lists as
needed. In this example, we represent a list of users where each user is
a set of key-value pairs (i.e., a dictionary). So we have a list of
dictionaries.

.. mchoice:: webParsingJSON_MC_construct
    :practice: T
    :answer_a: dictionaries and strings
    :answer_b: dictionaries and lists
    :answer_c: strings and lists
    :correct: b
    :feedback_a: Dictionaries are used in JSON, but strings only contain one element, so they are not as useful.
    :feedback_b: JSON is constructed by nesting dictionaries and lists as needed.
    :feedback_c: Lists are used in JSON, but strings only contain one element, so they are not as useful.

    JSON is constructed nesting which pair of variable types?

In the following program, we use the built-in ``json``
library to parse the JSON and read through the data. Compare this
closely to the equivalent XML data and code on the previous page. The JSON has less
detail, so we must know in advance that we are getting a list and that
the list is of users and each user is a set of key-value pairs. The JSON
is more succinct (an advantage) but also is less self-describing (a
disadvantage).

.. activecode:: webParsingJSON
    :caption: Parsing JSON

    import json

    data = '''
    [
      { "id" : "001",
       "x" : "2",
       "name" : "Chuck"
      } ,
      { "id" : "009",
       "x" : "7",
       "name" : "Brent"
      }
    ]'''

    info = json.loads(data)
    print('User count:', len(info))

    for item in info:
        print('Name', item['name'])
        print('Id', item['id'])
        print('Attribute', item['x'])

If you compare the code to extract data from the parsed JSON and XML you
will see that what we get from ``json.loads()`` is a Python
list which we traverse with a ``for`` loop, and each item
within that list is a Python dictionary. Once the JSON has been parsed,
we can use the Python index operator to extract the various bits of data
for each user. We don't have to use the JSON library to dig through the
parsed JSON, since the returned data is simply native Python structures.

.. fillintheblank:: webParsingJSON_fill

    Which Python operator is used to extract pieces of data from each user?

    - :[Ii]ndex: The index operator is used to grab bits of data for each user once the JSON has been parsed.
      :.*: Try again.

The output of this program is exactly the same as the XML version from earlier.

.. code-block::

    User count: 2
    Name Chuck
    Id 001
    Attribute 2
    Name Brent
    Id 009
    Attribute 7

In general, there is an industry trend away from XML and towards JSON
for web services. Because the JSON is simpler and more directly maps to
native data structures we already have in programming languages, the
parsing and data extraction code is usually simpler and more direct when
using JSON. But XML is more self-descriptive than JSON and so there are
some applications where XML retains an advantage. For example, most word
processors store documents internally using XML rather than JSON.

.. mchoice:: webParsingJSON_MC_tf
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again!
    :feedback_b: XML is more self-descriptive than JSON, but JSON is simpler and more directly maps to native data structures.

    True or False? JSON is more self-descriptive than XML.
