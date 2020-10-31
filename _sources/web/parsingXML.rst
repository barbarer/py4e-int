Parsing XML
-----------
.. index::
    single: Element Tree

Here is a simple application that parses some XML and extracts some data
elements from the XML:

.. activecode:: net_parse_person_ac1
    :language: python3

    What do you think this code will print?  Run it to see what it actually
    prints.
    ~~~~
    import xml.etree.ElementTree as ET

    data = '''
    <person>
      <name>Chuck</name>
      <phone type="intl">
        +1 734 303 4456
      </phone>
      <email hide="yes" />
    </person>'''

    tree = ET.fromstring(data)
    print('Name:', tree.find('name').text)
    print('Attr:', tree.find('email').get('hide'))

The triple single quote (``'''``), as well as the triple double quote (``"""``),
allow for the creation of strings that span multiple lines.

.. mchoice:: webParseXML_MC_string
    :practice: T
    :multiple_answers:
    :answer_a: '''
    :answer_b: ''
    :answer_c: ###
    :answer_d: ""
    :answer_e: """
    :correct: a,e
    :feedback_a: The triple single quote can be used to create strings that span multiple lines.
    :feedback_b: A pair of single quotes creates a string in Python, but not a multi-line string in XML.
    :feedback_c: Hashtags are used to create comments in Python, the syntax for XML is a bit different.
    :feedback_d: A pair of double quotes creates a string in Python, but not a multi-line string in XML.
    :feedback_e: The triple double quote can be used to create strings that span multiple lines.

    Which of the following are used in XML to create multi-line strings? Select all that apply.

Calling ``fromstring`` converts the string representation of
the XML into a "tree" of XML elements. When the XML is in a tree,
we have a series of methods we can call to extract portions
of data from the XML string.  The ``find`` function searches
through the XML tree and retrieves the element that matches
the specified tag.

.. code-block::

    Name: Chuck
    Attr: yes


Using an XML parser such as ``ElementTree`` has the advantage
that while the XML in this example is quite simple, it turns out there
are many rules regarding valid XML, and using ``ElementTree``
allows us to extract data from XML without worrying about the rules of
XML syntax.

.. fillintheblank:: webParseXML_fill1

    ElementTree is an XML _________.

    - :[Pp]arser: ElementTree is a parser that reads through XML and makes it meaningful for the computer.
      :.*: Try reading the previous paragraph again.
