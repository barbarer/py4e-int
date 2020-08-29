Looping through nodes
---------------------
.. index::
    single: ElementTree
    pair: ElementTree; Findall

Often the XML has multiple nodes and we need to write a loop to process
all of the nodes. In the following program, we loop through all of the
``user`` nodes:

.. code-block::

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

.. mchoice:: webLoop_MC_tf
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again.
    :feedback_b: Loops <b>can</b> be used in XML, they are used to loop through nodes.

    True or False? Loops cannot be used in XML.

The ``findall`` method retrieves a Python list of subtrees that
represent the ``user`` structures in the XML tree. Then we can
write a ``for`` loop that looks at each of the user nodes, and
prints the ``name`` and ``id`` text elements as well
as the ``x`` attribute from the ``user`` node.

.. parsonsprob:: webLoop_pp
    :adaptive:

    Put the following blocks in order to use a loop to process nodes in an XML program, like the one seen above.
    -----
    Use findall to retrieve subtrees representing user structures in the XML tree.
    =====
    Use a for loop to look at each user node.
    =====
    Print the name and id from the loop.
    =====
    Print the x attribute from the user node.

.. code-block::

    User count: 2
    Name Chuck
    Id 001
    Attribute 2
    Name Brent
    Id 009
    Attribute 7


It is important to include all parent level elements in the ``findall``
statement expect for the top level element (e.g., ``users/user``).
Otherwise, Python will not find any desired nodes.

.. code-block:: python

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

.. code-block::

    User count: 2
    User count: 0

.. fillintheblank:: webLoop_fill
    :practice: T

    In order for Python to find the desired nodes, it is important to include all ______
    level elements in the ``findall`` statement expect for the top level element.

    - :[Pp]arent: It is important to include all parent level elements. These are the outside elements that contain the other elements.
      :.*: Not the children but the _______. 
