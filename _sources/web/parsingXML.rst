Parsing XML
-----------
.. index::
    single: Element Tree

Look at the code below and predict what will be printed.

.. fillintheblank:: xml_parse_last_printed

    What is the last thing (last line of text) that will be printed when the code below runs?

    - :['"]?Attr\:\s*['"]?yes['"]?: It prints "Attr " plus the value of the hide attribute in the email tag.
      :['"]?yes['"]?: Something will be printed before the value. Look at the print statement again.
      :.*: What is the value of the hide attribute?

Here is a simple application that parses some XML and extracts some data
elements from the XML:

.. activecode:: xml_parse_person_ac1
    :language: python3

    Run this to see what it prints.
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
    print('Name: ', tree.find('name').text)
    print('Attr: ', tree.find('email').get('hide'))

The triple single quote (``'''``), as well as the triple double quote (``"""``),
allow for the creation of strings in Python that span multiple lines.

Calling ``fromstring`` converts the string representation of
the XML into a "tree" of XML elements. When the XML is in a tree,
we have a series of methods we can call to extract portions
of data from the XML string.  The ``find`` function searches
through the XML tree and retrieves the element that matches
the specified tag. The ``get`` gets the value of the attribute in that tag.

Using an XML parser such as ``ElementTree`` has the advantage
that while the XML in this example is quite simple, it turns out there
are many rules regarding valid XML, and using ``ElementTree``
allows us to extract data from XML without worrying about the rules of
XML syntax.

Using ``get`` to get the value of an attribute
==================================================

Why do we use ``get`` to get the value of an attribute?

Look at the code below and predict what will be printed.

.. fillintheblank:: xml_parse_last_printed_when_no_attr

    What is the last thing (last line of text) that will be printed when the code below runs?

    - :['"]?Attr: None['"]?: The default is to print None if there is no attribute with that name when you use ``.get('name')``.
      :['"]?None['"]?: Something will be printed before the value. Look at the print statement again.
      :.*: What is the default value when there is no attribute with that name?

.. activecode:: xml_parse_person_wihtout_attr_ac1
    :language: python3

    Run this to see what it prints.
    ~~~~
    import xml.etree.ElementTree as ET

    data = '''
    <person>
      <name>Chuck</name>
      <phone type="intl">
        +1 734 303 4456
      </phone>
      <email>csev@umich.edu</email>
    </person>'''

    tree = ET.fromstring(data)
    print('Name:', tree.find('name').text)
    print('Attr:', tree.find('email').get('hide'))

.. note ::

   Just like with dictionaries we can use ``get`` to get the value of an attribute and if the attribute isn't there the default is to return ``None``.

Getting Data from the First Element of a Type in XML
========================================================

You can use ``find`` to get the first element of the XML of a specified type.
You can the use ``find`` on that element to get children tags of that element.

.. activecode:: xml_parse_book_data
    :language: python3

    Run the code to see what this prints.
    ~~~~
    import xml.etree.ElementTree as ET

    data = '''
        <bookstore>
            <book category="cooking">
                <title lang="en">Everyday Italian</title>
                <author>Giada De Laurentiis</author>
                <year calendar="Gregorian">2005</year>
                <price>30.00</price>
            </book>

            <book category="CHILDREN">
                <title lang="en">Harry Potter</title>
                <author>J K. Rowling</author>
                <year>2005</year>
                <price>29.99</price>
            </book>
    </bookstore>
    '''

    tree = ET.fromstring(data)
    book = tree.find('book')
    print('Author:', book.find('author').text)
    print('Lang:',book.find('title').get('lang'))

What do you think would happen if we looked for the first 'author' in ``tree`` rather than in ``book``?  Modify the code to see what happens.

Fixing Errors in XML
======================

If your XML has errors, what do you think will happen?

.. activecode:: xml_parse_fix_book_data
    :language: python3

    The following XML has errors.  Try to run the code first to see what happens and then fix the XML so that the code runs correctly.
    ~~~~
    import xml.etree.ElementTree as ET

    data = '''
        <bookstore>
            <book category="mystery">
                <title lang="en">The Personal Librarian
                <author>Giada Marie Benedict<author>
                <year calendar=Gregorian>2021</year>
                <price>19.85</price>
            <book\>
        </bookstore>
    '''

    tree = ET.fromstring(data)
    book = tree.find('book')
    print('Author:', book.find('author').text)
    print('Title:', book.find('title').text)
    print('Lang:',book.find('title').get('lang'))

.. activecode:: xml_parse_fix_note_data
    :language: python3

    The following XML has errors.  Try to run the code first to see what happens and then fix the XML so that the code runs correctly.
    ~~~~
    import xml.etree.ElementTree as ET

    data = '''
        <messages>
            <note id="p501">
                <time region="EST">11:00am</time>
                Tove</to>
                <from>Jani</from>
                <heading>Reminder</heading>
                </body>Don't forget me this weekend!</body>
            </note>

            <note id="p502">
                <time region=EST>1:00pm</time>
                <to>Jani</to>
                <from>Tove
                <heading>Re: Reminder</heading>
                <body>I will not!<body>
            </note>
        </messages>
    '''

    tree = ET.fromstring(data)
    note = tree.find('note')
    print('to:', note.find('to').text)
    print('body:', note.find('body').text)
    print('time region:',note.find('time').get('region'))

Write Code to Process XML
======================================

.. activecode:: xml_parse_write_code_book_data_ac
    :language: python3

    Write code to print the book title, category, author, and year.
    ~~~~
    import xml.etree.ElementTree as ET

    data = '''
        <bookstore>
            <book category="Cultural Heritage Fiction">
                <title lang="en">The Turner House</title>
                <author>Angela Flournoy</author>
                <year>2016</year>
            </book>
        </bookstore>
    '''

.. activecode:: xml_parse_write_code_note_data_ac
    :language: python3

    Write code to print the note's to, from, body, and time (with region).
    ~~~~
    import xml.etree.ElementTree as ET


    data = '''
        <messages>
            <note id="p501">
                <time region="EST">11:00am</time>
                <to>Zihan</to>
                <from>Xinyin</from>
                <heading>Reminder</heading>
                </body>Don't forget the talk!</body>
            </note>
    '''
