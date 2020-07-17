eXtensible Markup Language - XML
--------------------------------

XML looks very similar to HTML, but XML is more structured than HTML.
Here is a sample of an XML document:

.. code-block:: {.xml}

   <person>
     <name>Chuck</name>
     <phone type="intl">
       +1 734 303 4456
     </phone>
     <email hide="yes" />
   </person>


Each pair of opening (e.g., ``<person>``\ ) and closing tags
(e.g., ``<\person>``\ ) represents a *element* or *node* with the same
name as the tag (e.g., ``person``\ ). Each element can have some text,
some attributes (e.g., ``hide``\ ), and other nested elements. If an XML
element is empty (i.e., has no content), then it may be depicted by
a self-closing tag (e.g., ``<email />``\ ).

Often it is helpful to think of an XML document as a tree structure
where there is a top element (here: ``person``\ ), and other tags (e.g.,
``phone``\ ) are drawn as *children* of their *parent* elements.

.. image:: height=2.0in@../images/xml-tree
   :target: height=2.0in@../images/xml-tree
   :alt: A Tree Representation of XML
