eXtensible Markup Language - XML
--------------------------------
.. index::
    single: XML


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


Each pair of opening (e.g., ``<person>``) and closing tags
(e.g., ``<\person>``) represents a *element* or *node* with the same
name as the tag (e.g., ``person``). Each element can have some text,
some attributes (e.g., ``hide``), and other nested elements. If an XML
element is empty (i.e., has no content), then it may be depicted by
a self-closing tag (e.g., ``<email />``).

.. mchoice:: webXML_MC_tags
    :practice: T
    :multiple_answers:
    :answer_a: element
    :answer_b: node
    :answer_c: string
    :answer_d: method
    :correct: a,b
    :feedback_a: A pair of tags in XML can represent an element.
    :feedback_b: A pair of tags in XML can represent a node.
    :feedback_c: A pair of tags in XML does not represent a string outright.
    :feedback_d: A pair of tags in XML does not represent methods.

    In XML, a pair of opening and closing tags (<> and <\\>) represent what? Select all that apply.

Often it is helpful to think of an XML document as a tree structure
where there is a top element (here: ``person``), and other tags (e.g.,
``phone``) are drawn as *children* of their *parent* elements.

.. figure:: ../images/xml-tree.svg
   :alt: A Tree Representation of XML

.. mchoice:: webXML_MC_tf
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: If an XML element is empty, it may be depicted by a self closing tag.
    :feedback_b: Try again!

    True or False? An element in XML that is empty (does not have content) can use self-closing tags.

.. parsonsprob:: webXML_mixedup
    :practice: T
    :numbered: left
    :adaptive:

    Create code to build a restaurant's menu that lists breakfast
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
