Mixed-Up Code Questions
-------------------------
.. parsonsprob:: web-mixed1
    :practice: T
    :numbered: left
    :adaptive:

    Put the code blocks in order to import the json library.  Then convert the
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

.. parsonsprob:: web-mixed2
    :practice: T
    :numbered: left
    :adaptive:

    Put the blocks in order to output a Python dictionary <code>x</code> as a
    JSON string.  Watch out for an extra piece of code!
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

    Put the blocks in order to define a JSON encoding that is roughly equivalent to the simple
    XML from before. It first includes the name and phone number, then the email
    (which isn't visible). Drag the blocks of statements from the left column to
    the right column and put them in the right order. Watch your indentation!
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


.. parsonsprob:: web-mixed5
    :practice: T
    :numbered: left
    :adaptive:

    Put the blocks in order to convert JSON data for Chuck and Brent to Python
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

    Put the blocks in order to define the XML for a note. First the recipient is listed,
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


.. parsonsprob:: web-mixed7
    :practice: T
    :numbered: left
    :adaptive:

    Put the blocks in order to create a restaurant's menu that lists breakfast
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

.. parsonsprob:: web-mixed8_new
    :practice: T
    :numbered: left
    :adaptive:

    Put the blocks in order to convert a python dictionary to JSON, then use the sort_keys
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
