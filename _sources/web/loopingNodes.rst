Looping through nodes
---------------------
.. index::
    single: ElementTree
    pair: ElementTree; Findall

Often the XML has multiple nodes and we need to write a loop to process
all of the nodes. In the following program, we loop through all of the
``user`` nodes:

.. activecode:: net_parse_users_ac1
    :language: python3

    What do you think this code will print?  Run it to see what it actually
    prints.
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

The ``findall`` method retrieves a Python list of subtrees that
represent the ``user`` structures in the XML tree. Then we can
write a ``for`` loop that looks at each of the user nodes, and
prints the ``name`` and ``id`` text elements as well
as the ``x`` attribute from the ``user`` node.

.. parsonsprob:: webLoop_pp
    :adaptive:
    :numbered: left
    :practice: T

    Put the following blocks in order to use a loop to process nodes in an XML program, like the one seen above.
    -----
    Use findall to retrieve subtrees representing user structures in the XML tree.
    =====
    Use a for each loop to loop through the user nodes
    =====
        Print the name and id from the user node
    =====
        Print the x attribute from the user node using get

It is important to include all parent level elements in the ``findall``
statement except for the top level element (e.g., ``users/user``).
Otherwise, Python will not find any desired nodes.

.. activecode:: net_parse_users_ac2
    :language: python3

    What do you think this code will print?  Run it to see what it actually
    prints.
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

    lst2 = stuff.findall('user')
    print('User count:', len(lst2))

``lst`` stores all ``user`` elements that are nested within their ``users``
parent. ``lst2`` looks for ``user`` elements that are not nested within
the top level ``stuff`` element where there are none.

.. fillintheblank:: webLoop_fill
    :practice: T
    :casei:

    In order for Python to find the desired nodes, it is important to include all ______
    level elements in the ``findall`` statement expect for the top level element.

    - :parent: It is important to include all parent level elements. These are the outside elements that contain the other elements.
      :.*: Not the children but the _______.
