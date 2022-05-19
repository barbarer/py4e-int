eXtensible Markup Language - XML
--------------------------------
.. index::
    single: XML


XML is a mark-up language.  HTML is also a mark-up language.
XML looks very similar to HTML, but it is different from XML.

Some of the differences between XML and HTML are:

* XML is used to store and transport data, not to create web pages like HTML.
* XML tags are not predefined, but HTML tags are.
* XML can be extended (you can add new tags). You can not add new tags to HTML.

For more information on XML see https://www.w3schools.com/xml/default.asp.

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
    :answer_b: string
    :answer_c: node
    :answer_d: method
    :correct: a,c
    :feedback_a: A pair of tags in XML can represent an element.
    :feedback_b: A pair of tags in XML does not represent a string.
    :feedback_c: A pair of tags in XML can represent a node.
    :feedback_d: A pair of tags in XML does not represent methods.

    In XML, a pair of opening and closing tags (<> and <\\>) represent what? Select all that apply.

Often it is helpful to think of an XML document as a tree structure
where there is a top/root element (here: ``person``), and other tags (e.g.,
``phone``) are drawn as *children* of their *parent* elements.

.. figure:: ../images/xmlTree-fixed.png
   :alt: A Tree Representation of XML

.. mchoice:: webXML_email_sibling_tag
    :practice: T
    :answer_a: person
    :answer_b: name
    :answer_c: phone
    :answer_d: hide
    :correct: b, c
    :feedback_a: The person tag is the parent tag of the email tag.
    :feedback_b: The name tag is a sibling of the email tag.
    :feedback_c: The phone tag is a sibling of the email tag.
    :feedback_d: The hide is an attribute name of the email tag.

    What are the sibling tags of the email tag?

.. clickablearea:: xml_person_self_closing_tags_clicka
    :practice: T
    :question: Click on all of the self-closing tags in the XML below.
    :iscode:
    :feedback: The self-closing tags look like <tag />

    :click-incorrect:&#60;person&#62;:endclick:
      :click-incorrect:&#60;name&#62;:endclick:Chuck:click-incorrect:&#60;/name&#62;:endclick:
      :click-incorrect:&#60;phone type="intl"&#62;:endclick:
        +1 734 303 4456
      :click-incorrect:&#60;/phone&#62;:endclick:
      :click-correct:&#60;email hide="yes" /&#62;:endclick:
    :click-incorrect:&#60;/person&#62;:endclick:

.. clickablearea:: xml_food_tag_text_clicka
    :practice: T
    :question: Click on all of the text in the XML tags below.
    :iscode:
    :feedback: The text is between the start tag <tag> and end tag </tag>

    :click-incorrect:&#60;food&#62;:endclick:
        :click-incorrect:&#60;name&#62;:endclick::click-correct:French Toast:endclick::click-incorrect:&#60;/name&#62;:endclick:
        :click-incorrect:&#60;price&#62;:endclick::click-correct:$4.50:endclick::click-incorrect:&#60;/price&#62;:endclick:
        :click-incorrect:&#60;description&#62;:endclick:
        :click-correct:Thick slices made from our homemade sourdough bread:endclick:
        :click-incorrect:&#60;/description&#62;:endclick:
        :click-incorrect:&#60;calories&#62;:endclick::click-correct:600:endclick::click-incorrect:&#60;/calories&#62;:endclick:
    :click-incorrect:&#60;/food&#62;:endclick:

.. clickablearea:: xml_person_attributes_clicka
    :practice: T
    :question: Click on all of the attribute names in the XML below.
    :iscode:
    :feedback: Attributes look like name="value" and are defined in the open tags.

    :click-incorrect:&#60;person&#62;:endclick:
      :click-incorrect:&#60;name&#62;:endclick:Chuck:click-incorrect:&#60;/name&#62;:endclick:
      :click-incorrect:&#60;phone:endclick: :click-correct:type:endclick:=:click-incorrect:"intl":endclick:&#62;:endclick:
        +1 734 303 4456
      :click-incorrect:&#60;/phone&#62;:endclick:
      :click-incorrect:&#60;email :endclick::click-correct:hide:endclick:=:click-incorrect:"yes":endclick: /&#62;:endclick:
    :click-incorrect:&#60;/person&#62;:endclick:


Properly Formatted XML
========================

Solve the next couple of problems and think about what are the rules for properly formatted XML.

.. parsonsprob:: xml_note_pp
   :adaptive:
   :numbered: left

   Put the blocks into order to define just the body of simple XML document that defines a note. A note has a date, subject, and a body in that order. Indent the blocks to show the structure (parent and child).
   -----
   &#60;note&#62;
   =====
       &#60;date&#62;05/16/2022&#60;/date&#62;
   =====
       &#60;subject&#62;After work&#60;/subject&#62;
   =====
       &#60;subject&#62;After work&#60;/Subject&#62; #paired
   =====
       &#60;body&#62;Pick up milk.&#60;/body&#62;
   =====
       &#60;/body&#62;Pick up milk.&#60;body&#62; #paired
   =====
   &#60;/note&#62;
   =====
   &#60;note\&#62; #paired


.. parsonsprob:: xml_message_pp
   :adaptive:
   :numbered: left

   Put the blocks into order to define just the body of simple XML document that stores information for a message: to, from, time, subject, and body in that order.  Indent the blocks to show the structure (parent and child).
   -----
   &#60;message&#62;
   =====
       &#60;to&#62;Jamal&#60;/to&#62;
   =====
       &#60;To&#62;Jamal&#60;/to&#62; #paired
   =====
       &#60;from&#62;Ali&#60;/from&#62;
   =====
       &#60;time region="EST"&#62;09:00:03&#60;/time&#62;
   =====
       &#60;time region=EST&#62;09:00:03&#60;/time&#62; #paired
   =====
       &#60;subject&#62;Meeting today?&#60;/subject&#62;
   =====
       &#60;subject&#62;Meeting today? #paired
   =====
       &#60;body&#62;Meet today at 2:00pm?&#60;/body&#62;
   =====
   &#60;/message&#62;

.. mchoice:: webXML_proper_format
    :practice: T
    :answer_a: There must be a root tag
    :answer_b: The case of tags doesn't matter
    :answer_c: All elements must be closed
    :answer_d: Attribute values must be in quotes
    :correct: a, c, d
    :feedback_a: Correct!  There must be a root tag.
    :feedback_b: Incorrect. Case matters.
    :feedback_c: Correct! All elements must be closed.
    :feedback_d: Correct! Attribute values must be in quotes.

    Select all of the following that are true about XML.

.. clickablearea:: xml_book_end_tags_clicka
    :practice: T
    :question: Click on all of the end tags in the XML below.
    :iscode:
    :feedback: The end tags look like </tag> and have a corresponding start tag <tag>

    :click-incorrect:&#60;bookstore&#62;:endclick:
        :click-incorrect:&#60;book&#62;category="cooking"&#62;:endclick:
            :click-incorrect:&#60;title lang="en"&#62;:endclick:Everyday Italian:click-correct:&#60;/title&#62;:endclick:
            :click-incorrect:&#60;author&#62;:endclick:Giada De Laurentiis:click-correct:&#60;/author&#62;:endclick:
            :click-incorrect:&#60;year&#62;:endclick:2005:click-correct:&#60;/year&#62;:endclick:
            :click-incorrect:&#60;price&#62;:endclick:30.00:click-correct:&#60;/price&#62;:endclick:
        :click-correct:&#60;/book&#62;:endclick:

        :click-incorrect:&#60;book category="children"&#62;:endclick:
            :click-incorrect:&#60;title lang="en"&#62;:endclick:Harry Potter:click-correct:&#60;/title&#62;:endclick:
            :click-incorrect:&#60;author&#62;:endclick:J. K. Rowling:click-correct:&#60;/author&#62;:endclick:
            :click-incorrect:&#60;year&#62;:endclick:2005:click-correct:&#60;/year&#62;:endclick:
            :click-incorrect:&#60;price&#62;:endclick:29.99:click-correct:&#60;/price&#62;:endclick:
        :click-correct:&#60;/book&#62;:endclick:
    :click-correct:&#60;/bookstore&#62;:endclick:


.. mchoice:: webXML_child_tag_bookstore
    :practice: T
    :answer_a: title
    :answer_b: author
    :answer_c: year
    :answer_d: book
    :correct: d
    :feedback_a: The title tag is a grandchild of the bookstore tag.  It is the child of the book tag.
    :feedback_b: The author tag is a grandchild of the bookstore tag.  It is the child of the book tag.
    :feedback_c: The year tag is a grandchild of the bookstore tag.  It is the child of the book tag.
    :feedback_d: Correct!  The book tag is a child tag of the bookstore tag.

    Select the child tag of the bookstore tag.

.. mchoice:: webXML_bookstore_attr_names
    :practice: T
    :answer_a: category
    :answer_b: children
    :answer_c: lang
    :answer_d: en
    :correct: b,d
    :feedback_a: No, category is the attribute name.
    :feedback_b: Correct, "children" is a value of the category attribute.
    :feedback_c: No, lang is the attribute name.
    :feedback_d: Correct, "en" is a value for the lang attribute.

    Select all of the attribute values in the example XML for a bookstore.

.. mchoice:: webXML_MC_tf
    :answer_a: An element in XML that is empty (does not have content) can use self-closing tags.
    :answer_b: Nodes in XML can have parent and children nodes.
    :answer_c: XML has predefined (standard) tags.
    :answer_d: XML has opening and closing tags like HTML.
    :answer_e: XML is the standard language for describing web pages.
    :correct: a,b,d
    :feedback_a: Correct! An element in XML that is empty (does not have content) can use self-closing tags.
    :feedback_b: Correct! Nodes in XML can have parent and children nodes.
    :feedback_c: Incorrect.  HTML has predefined (standard) tags but XML does not.
    :feedback_d: Correct! XML does have opening and closing tags like HTML.
    :feedback_e: Incorrect.  HTML is the standard language for describing web pages.  XML is used to describe data.

    Select all of the following that are true.
