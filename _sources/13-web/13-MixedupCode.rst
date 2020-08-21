Mixed-Up Code Questions
-------------------------
.. parsonsprob:: web-mixed1
    :practice: T
    :numbered: left
    :adaptive:

    The following program converts a short bit of JSON data to Python. Drag the
    blocks of statements from the left column to the right column and put them in
    the right order. Watch out for an extra piece of code!
    -----
    import json
    =====
    x =  '{ "name":"John", "age":30, "city":"New York"}'
    =====
    y = json.loads(x)
    =====
    y = json.dumps(x) #distractor
    =====
    print(y["age"])

.. parsonsprob:: web-mixed2
    :practice: T
    :numbered: left
    :adaptive:

    The following program converts a Python dictionary to a JSON string that it
    prints, but the code is mixed up. Drag the blocks of statements from the left
    column to the right column and put them in the right order. Watch out for an
    extra piece of code!
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
    =====
    print(y)


.. parsonsprob:: web-mixed3
    :practice: T
    :numbered: left
    :adaptive:

    Put the blocks in order to import the needed module, define the data, read an
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

.. parsonsprob:: web-mixed4
    :practice: T
    :numbered: left
    :adaptive:

    The following program is JSON encoding that is roughly equivalent to the simple
    XML from before. It first includes the name and phone number, then the email
    (which isn't visible). Drag the blocks of statements from the left column to
    the right column and put them in the right order. Watch your indentation!
    -----
    {
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
    }


.. parsonsprob:: web-mixed5
    :practice: T
    :numbered: left
    :adaptive:

    The following program should convert JSON data for Chuck and Brent to Python
    then print the number of entries and their data, but the code is mixed up.
    Drag the blocks of statements from the left column to the right column and put
    them in the right order. Watch out for three extra pieces of code and indentation!
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


.. parsonsprob:: web-mixed6
    :practice: T
    :numbered: left
    :adaptive:

    The following program uses XML to create a note. First the recipient is listed,
    then the sender, heading, and message. Watch out for an extra code block and
    indentation!
    -----
    &#60;note&#62;
    =====
    &#60;note/&#62;
    =====
      &#60;to&#62;Tove&#60;/to&#62;
    =====
      &#60;from&#62;Jani&#60;&#60;/from&#62;
    =====
      &#60;heading&#62;Reminder&#60;/heading&#62;
    =====
      &#60;body&#62;Don't forget me this weekend!&#60;/body&#62;
    =====
    &#60;/note&#62;


.. parsonsprob:: web-mixed7
    :practice: T
    :numbered: left
    :adaptive:

    The following program should open a file, write a line, and close the file, but
    the code is mixed up. Drag the blocks of statements from the left column to the right column
    and put them in the right order. Watch out for extra pieces of code and indentation!
    -----
    The following program uses XML to create a restaurant's menu that lists breakfast
    items, their price, description, and calorie count. These 3 items should be
    listed in the order of: Belgian Waffles, French Toast, Homestyle Breakfast.
    -----
    &#60;breakfast_menu&#62;
    =====
    &#60;food&#62;
      &#60;name&#62;Belgian Waffles&#60;/name&#62;
      &#60;price&#62;$5.95&#60;/price&#62;
      &#60;description&#62;
      Two of our famous Belgian Waffles with plenty of real maple syrup
      &#60;/description&#62;
      &#60;calories&#62;650&#60;/calories&#62;
    &#60;/food&#62;
    =====
    &#60;food&#62;
        &#60;name&#62;French Toast&#60;/name&#62;
        &#60;price&#62;$4.50&#60;/price&#62;
        &#60;description&#62;
        Thick slices made from our homemade sourdough bread
        &#60;/description&#62;
        &#60;calories&#62;600&#60;/calories&#62;
    &#60;/food&#62;
    =====
    &#60;food&#62;
        &#60;name&#62;Homestyle Breakfast&#60;/name&#62;
        &#60;price&#62;$6.95&#60;/price&#62;
        &#60;description&#62;
        Two eggs, bacon or sausage, toast, and our ever-popular hash browns
        &#60;/description&#62;
        &#60;calories&#62;950&#60;/calories&#62;
    &#60;/food&#62;
    =====
    &#60;/breakfast_menu&#62;

.. parsonsprob:: web-mixed8
    :practice: T
    :numbered: left
    :adaptive:

    The following program should uses ElementTree to parse the xml file "country_data.xml".
    After the tree is established and the data is read from a string, print the tags
    and attributes of each child.
    -----
    import xml.etree.ElementTree as ET
    =====
    tree = ET.parse('country_data.xml')
    =====
    root = tree.getroot()
    =====
    root = ET.fromstring(country_data_as_string)
    =====
    for child in root:
    =====
      print child.tag, child.attrib


.. parsonsprob:: web-mixed9
    :practice: T
    :numbered: left
    :adaptive:

    The following program converts Python objects into JSON strings, then prints
    all the values. Drag the blocks of statements from the left column to the right column
    and put them in the right order. Watch out for extra pieces of code and indentation!
    -----
    import json
    python_dict =  {"name": "David", "age": 6, "class":"I"}
    python_list =  ["Red", "Green", "Black"]
    python_str =  "Python Json"
    python_int =  (1234)
    python_float =  (21.34)
    python_T =  (True)
    python_F =  (False)
    python_N =  (None)
    =====
    json_dict = json.dumps(python_dict)
    json_list = json.dumps(python_list)
    json_str = json.dumps(python_str)
    json_num1 = json.dumps(python_int)
    json_num2 = json.dumps(python_float)
    json_t = json.dumps(python_T)
    json_f = json.dumps(python_F)
    json_n = json.dumps(python_N)
    =====
    print("json dict : ", json_dict)
    print("jason list : ", json_list)
    print("json string : ", json_str)
    print("json number1 : ", json_num1)
    print("json number2 : ", json_num2)
    print("json true : ", json_t)
    print("json false : ", json_f)
    print("json null ; ", json_n)


.. parsonsprob:: web-mixed10
    :practice: T
    :numbered: left
    :adaptive:

    The following program converts a python dictionary to JSON, then uses the sort_keys
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
