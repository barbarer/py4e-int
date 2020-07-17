Looping through nodes
---------------------

\index{ElementTree!findall}
\index{ElementTree!get}

Often the XML has multiple nodes and we need to write a loop to process
all of the nodes. In the following program, we loop through all of the
``user`` nodes:

\VerbatimInput{../code3/xml2.py}

The ``findall`` method retrieves a Python list of subtrees that
represent the ``user`` structures in the XML tree. Then we can
write a ``for`` loop that looks at each of the user nodes, and
prints the ``name`` and ``id`` text elements as well
as the ``x`` attribute from the ``user`` node.

.. code-block::

   User count: 2
   Name Chuck
   Id 001
   Attribute 2
   Name Brent
   Id 009
   Attribute 7


It is important to include all parent level elements in the ``findall``
statement expect for the top level element (e.g., ``users/user``\ ).
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
