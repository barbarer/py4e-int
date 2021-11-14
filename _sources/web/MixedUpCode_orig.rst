Mixed-Up Code Questions
-------------------------
.. parsonsprob:: web-mixed1
    :practice: T
    :numbered: left
    :adaptive:

    Create code to import the json library. Then convert the
    string <code>x</code> to a Python dictionary. Then print the value for the
    <code>"age"</code> key.
    -----
    import json
    =====
    x =  '{ "name":"John", "age":30, "city":"New York"}'
    =====
    y = json.loads(x)
    =====
    y = json(x) #paired
    =====
    print(y["age"])
    =====
    print(y[1]) #paired


.. activecode:: web-mixed1-ac1
    :practice: T
    :nocodelens:
    :language: python3
    
    Write code to import the json library. Create a JSON 'x' with keys ``name``, ``age`` and ``city`` and values "John", 30, "New York", respectively.
    Then read the JSON data, convert to a Python dictionary, and print the value of the key ``age``.
    ~~~~

.. parsonsprob:: web-mixed2
    :practice: T
    :numbered: left
    :adaptive:

    Create code to output a Python dictionary <code>x</code> as a JSON string.
    Watch out for an extra piece of code!
    -----
    import json
    =====
    x = {
    =====
        "name": "John",
        "age": 30,
        "city": "New York"
    =====
    }
    =====
    y = json.loads(x) #distractor
    =====
    y = json.dumps(x)


.. activecode:: web-mixed2-ac2
    :practice: T
    :nocodelens:
    :language: python3
    
    Write code to import the json library, create a Python dictionary and convert it to JSON data.
    The dictionary 'x' should have keys ``name``, ``age``, and ``city`` with values of "John", 30, and "New York", respectively.
    ~~~~

.. parsonsprob:: web-mixed3
    :practice: T
    :numbered: left
    :adaptive:

    Create code to import the needed module, define the data, read an
    XML tree from the data, and print the name and email hide attribute value.
    -----
    import xml.etree.ElementTree as ET
    =====
    data = '''
        &#60;person&#62;
            &#60;name&#62;Chuck&#60;/name&#62;
            &#60;phone type="intl"&#62;
                +1 734 303 4456
            &#60;/phone&#62;
            &#60;email hide="yes" /&#62;
            &#60;/person&#62;'''
    =====
    tree = ET.fromstring(data)
    =====
    print('Name:', tree.find('name').text)
    =====
    print('Attr:', tree.find('email').get('hide'))
    
    
.. activecode:: web-mixed3-ac3
    :practice: T
    :nocodelens:
    :language: python3
    
  	Write code to import the xml library. Given the XML data called ``data``, read the xml tree
    from the data and print the ``name`` and ``email hide`` attribute value.
    -----
    #write import statement below
    
    
 		data = '''
        &#60;person&#62;
            &#60;name&#62;Chuck&#60;/name&#62;
            &#60;phone type="intl"&#62;
                +1 734 303 4456
            &#60;/phone&#62;
            &#60;email hide="yes" /&#62;
            &#60;/person&#62;'''
    
    #insert code here

.. parsonsprob:: web-mixed4
    :practice: T
    :numbered: left
    :adaptive:

    Create code to define a JSON encoding that is roughly equivalent to the simple
    XML from before. It first includes the name and phone number, then the email
    (which isn't visible). Watch your indentation!
    -----
    "{
    =====
        "name" : "Chuck",
        "phone" : {
    =====
            "type" : "intl",
            "number" : "+1 734 303 4456"
    =====
        },
    =====
        "email" : {
    =====
            "hide" : "yes"
    =====
        }
    }"


.. activecode:: web-mixed4-ac4
    :practice: T
    :nocodelens:
    :language: python3
    
    Write the JSON version of the below XML data. It first includes the name and phone number, then the email. 
    ~~~~
    XML_data = '''
        &#60;person&#62;
            &#60;name&#62;Chuck&#60;/name&#62;
            &#60;phone type="intl"&#62;
                +1 734 303 4456
            &#60;/phone&#62;
            &#60;email hide="yes" /&#62;
            &#60;/person&#62;'''
    
    #insert code below
    #json_data =


.. parsonsprob:: web-mixed5
    :practice: T
    :numbered: left
    :adaptive:

    Create code to convert JSON data for Chuck and Brent to Python
    then print the number of entries and their data.
    Watch out for three extra pieces of code and indentation!
    -----
    import json
    =====
    data = '''
    =====
    data = " #distractor
    =====
    [
    =====
        { "id" : "001",
           "x" : "2",
           "name" : "Chuck"
        } ,
    =====
        { "id" : "009",
          "x" : "7",
          "name" : "Brent"
        }
    =====
    ]'''
    =====
    ]" #distractor
    =====
    info = json.loads(data)
    =====
    info = json.dumps(data) #distractor
    =====
    print('User count:', len(info))
    =====
    for item in info:
        print('Name', item['name'])
        print('Id', item['id'])
        print('Attribute', item['x'])
        
        
.. activecode:: web-mixed5-ac5
    :practice: T
    :nocodelens:
    :language: python3
    
    Write code to import the json library. Create a JSON 'data' with keys ``id``, ``x`` and ``name`` and 
    two sets of values "001", "2", "Chuck", and "009", "7", "Brent", respectively. Then read the JSON data, 
    convert to a Python dictionary, and print print the number of entries and date for each entry.
    ~~~~
    #write import statement below    
    #insert code here        


.. parsonsprob:: web-mixed6
    :practice: T
    :numbered: left
    :adaptive:

    Create code to define the XML for a ``note``. First the recipient is listed,
    then the sender, heading, and message. There is an extra block that isn't
    needed in a correct solution.
    -----
    &#60;note&#62;
    =====
    &#60;note/&#62; #distractor
    =====
        &#60;to&#62;Tove&#60;/to&#62;
    =====
        &#60;from&#62;Jani&#60;/from&#62;
    =====
        &#60;heading&#62;Reminder&#60;/heading&#62;
    =====
        &#60;body&#62;Don't forget me this weekend!&#60;/body&#62;
    =====
    &#60;/note&#62;


.. activecode:: web-mixed6-ac6
    :practice: T
    :nocodelens:
    :language: python3
    
    Write an XML for a ``note``. First the recipient ``to`` is listed as ``Tove``, then the sender ``from`` as ``Jani``,
    heading ``heading`` as ``Reminder``, and message ``body`` as ``Don't forget me this weekend!``.
    ~~~~

.. parsonsprob:: web-mixed8
    :practice: T
    :numbered: left
    :adaptive:

    Create code to convert a python dictionary to JSON, then use the sort_keys
    parameter to specify if the result should be sorted or not. Watch your indentation
    and make sure closing brackets/braces are in the right order!
    -----
    import json
    =====
    x = {
    =====
        "name": "John",
        "age": 30,
        "married": True,
        "divorced": False,
        "children": ("Ann","Billy"),
        "pets": None,
    =====
        "cars": [
            {"model": "BMW 230", "mpg": 27.5},
            {"model": "Ford Edge", "mpg": 24.1}
    =====
        ]
    =====
    }
    =====
    print(json.dumps(x, indent=4, sort_keys=True))
    
    
.. activecode:: web-mixed8-ac8
    :practice: T
    :nocodelens:
    :language: python3
    
    Write code to convert the given Python dictionary 'x' to JSON.
    Use the sort_keys parameter to specify if the result should be sorted or not, and set the indent parameter equal to 4, then print the JSON.
    ~~~~
       x = {
        "name": "John",
        "age": 30,
        "married": True,
        "divorced": False,
        "children": ("Ann","Billy"),
        "pets": None,
        "cars": [
            {"model": "BMW 230", "mpg": 27.5},
            {"model": "Ford Edge", "mpg": 24.1}]}
            
    	#insert code here
