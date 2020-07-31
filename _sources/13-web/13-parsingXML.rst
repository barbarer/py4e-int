Parsing XML
-----------

\index{ElementTree}
\index{ElementTree!fromstring}
\index{ElementTree!find}

Here is a simple application that parses some XML and extracts some data
elements from the XML:

\VerbatimInput{../code3/xml1.py}

The triple single quote (\ ``'''``\ ), as well as the triple double quote (\ ``"""``\ ), allow for the creation of strings that span multiple lines.

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
