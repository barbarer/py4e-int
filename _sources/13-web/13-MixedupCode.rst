Mixed-Up Code Questions INCOMPLETE
---------------------------
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

    The following program should parse some XML and extracts some data elements, but
    the code is mixed up. Drag the blocks of statements from the left column to the right column
    and put them in the right order. Watch out for indentation!
    -----
    import xml.etree.ElementTree as ET
    =====
    data = '''
    =====
    <person>
    ====
      <name>Chuck</name>
      <phone type="intl">
        +1 734 303 4456
    =====
      </phone>
    =====
      <email hide="yes" />
    =====
    </person>'''
    =====
    tree = ET.fromstring(data)
    =====
    print('Name:', tree.find('name').text)
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

    The following program should open a file, write a line, and close the file, but
    the code is mixed up. Drag the blocks of statements from the left column to the right column
    and put them in the right order. Watch out for extra pieces of code and indentation!
    -----


.. parsonsprob:: web-mixed7
    :practice: T
    :numbered: left
    :adaptive:

    The following program should open a file, write a line, and close the file, but
    the code is mixed up. Drag the blocks of statements from the left column to the right column
    and put them in the right order. Watch out for extra pieces of code and indentation!
    -----


.. parsonsprob:: web-mixed8
    :practice: T
    :numbered: left
    :adaptive:

    The following program should open a file, write a line, and close the file, but
    the code is mixed up. Drag the blocks of statements from the left column to the right column
    and put them in the right order. Watch out for extra pieces of code and indentation!
    -----

.. parsonsprob:: web-mixed9
    :practice: T
    :numbered: left
    :adaptive:

    The following program should open a file, write a line, and close the file, but
    the code is mixed up. Drag the blocks of statements from the left column to the right column
    and put them in the right order. Watch out for extra pieces of code and indentation!
    -----


.. parsonsprob:: web-mixed10
    :practice: T
    :numbered: left
    :adaptive:

    The following program should open a file, write a line, and close the file, but
    the code is mixed up. Drag the blocks of statements from the left column to the right column
    and put them in the right order. Watch out for extra pieces of code and indentation!
    -----
