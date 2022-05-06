Group Work: HTML Basics
------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* What is HTML?
* What is a tag?
* What are common HTML tags?
* What is the structure of an HTML page?

*Process Objectives:*

* Identify start and end tags
* Fix incorrect HTML
* Put HTML tags in order
* Describe relationships between tags (parent, child, sibling)

HTML stands for Hyper Text Markup Language.  It is used to create web pages.
HTML describes the elements of the webpage such as the title, paragraphs,
images, and links.  For more information on HTML see the tutorial at
https://www.w3schools.com/html/.

HTML uses tags to describe the elements of the document.  Tags are
enclosed in "<" and ">".

.. note::

   HTML is not a programming language.  It is a markup language for describing
   documents.

.. activecode:: html_my_first_page_ac
   :language: html
   :nocodelens:

   Click on the "Render" button to see the resulting web page.
   ~~~~
   <!DOCTYPE html>
   <html>
       <head>
           <title>My First Page</title>
       </head>
       <body>
           <h1>The First Page</h1>
           <p>
               HTML is the language used to create web pages.  Browsers
               know how to read and display HTML.
           </p>
       </body>
   </html>

Try adding a ``h2`` and ``h3`` header to the HTML above after the paragraph.

.. shortanswer:: html-headers-short-answer

   What happens to the text as the header level increases (h1, h2, h3)?

The first tag, ``<!DOCTYPE html>``, indicates that this is an HTML document.
While it is best to include this tag, the page will typically display
fine even if you don't include it.

The ``html`` tag is the root (start) tag for the document.

The ``head`` tag contains meta information about the document such as the ``title``.

The ``body`` tag contains the items that will be displayed.

The ``h1`` tag is for a first-level (most important) header.  There are additional types of headers: ``h2``, ``h3``, etc.

The ``p`` tag indicates a paragraph of text.



.. dragndrop:: html_basic_tag_def_dnd
    :practice: T
    :feedback: Read the information above and try again.
    :match_1: html|||The root (start) tag for a HTML document.
    :match_2: head|||Contains meta data about the document. This information will not be displayed.
    :match_3: body|||Contains all the information that will be displayed in the web page.
    :match_4: title|||The title for this web page.
    :match_5: h2|||A second-level header.
    :match_6: p|||A paragraph.

    Match each tag to its definition.


Start and End Tags
===================

Most HTML elements have start tags and end tags. The page is started with
the start tag  ``<html>`` and ends with the end tag ``</html>``.  Indentation
isn't required, but makes it easier to read the HTML.

.. clickablearea:: html_start_tags_clicka
    :practice: T
    :question: Click on all of the start tags in the HTML below.
    :iscode:
    :feedback: The start tags look like <tag> and have a corresponding end tag </tag>

    :click-correct:&#60html&#62:endclick:
        :click-correct:&#60head&#62:endclick:
            :click-correct:&#60title&#62:endclick::click-incorrect:My First Page:endclick::click-incorrect:&#60/title&#62:endclick:
        :click-incorrect:&#60/head&#62:endclick:
        :click-correct:&#60body&#62:endclick:
            :click-correct:&#60h1&#62:endclick::click-incorrect:The First Page:endclick::click-incorrect:&#60/h1&#62:endclick:
            :click-correct:&#60p&#62:endclick:
                :click-incorrect:HTML is the language used to create web pages.:endclick:
            :click-incorrect:&#60/p&#62:endclick:
        :click-incorrect:&#60/body&#62:endclick:
    :click-incorrect:&#60/html&#62:endclick:

.. clickablearea:: html_end_tags_clicka
    :practice: T
    :question: Click on all of the end tags in the HTML below.
    :iscode:
    :feedback: The start tags look like <tag> and have a corresponding end tag </tag>

    :click-incorrect:&#60html&#62:endclick:
        :click-incorrect:&#60head&#62:endclick:
            :click-incorrect:&#60title&#62:endclick::click-incorrect:My First Page:endclick::click-correct:&#60/title&#62:endclick:
        :click-correct:&#60/head&#62:endclick:
        :click-incorrect:&#60body&#62:endclick:
            :click-incorrect:&#60h1&#62:endclick::click-incorrect:The First Page:endclick::click-correct:&#60/h1&#62:endclick:
            :click-incorrect:&#60p&#62:endclick:
                :click-incorrect:HTML is the language used to create web pages.:endclick:
            :click-correct:&#60/p&#62:endclick:
        :click-correct:&#60/body&#62:endclick:
    :click-correct:&#60/html&#62:endclick:


.. activecode:: html_fix_page_ac
   :language: html
   :nocodelens:

   Fix the errors in the HTML below so that every start tag has an end tag and every end tag has a start tag.
   ~~~~
   <!DOCTYPE html>

       <head>
           My First Page</title>

              The First Page</h1>
           <p>
               HTML is the language used to create web pages.  Browsers
               know how to read and display HTML.
           </p>
       </body>
   </html>


List Tags
=======================

You can include both ordered (numbered) and unordered (bulleted) lists in HTML.

.. activecode:: html_lists_ac
   :language: html
   :nocodelens:

   Render the HTML below.
   ~~~~
   <!DOCTYPE html>
   <html>
       <head>
           <title>My First Page</title>
       </head>
       <body>
           <h2> Ordered List</h2>
           <ol>
               <li>First Item</li>
               <li>Second Item</li>
           </ol>

           <h2>Unordered List</h2>
           <ul>
               <li>First Item</li>
               <li>Second Item</li>
           </ul>
       </body>
   </html>


.. dragndrop:: html_list_tag_def_dnd
    :practice: T
    :feedback: Read the information above and try again.
    :match_3: ul|||Tag to define an unordered list.
    :match_4: ol|||Tag to define an ordered list.
    :match_5: li|||Tag to define a list item.

    Match each tag to its definition.


Tag Relationships: Parent, Child, Sibling
==============================================

The HTML tag has
two children tags: ``<head>`` and ``<body>``.  The head contains meta information
about the page including the page title.  The body contains the elements
that are displayed in the page such as the headers and paragraphs.

.. parsonsprob:: html_pp_my_first_page_v2
   :adaptive:
   :order: 8, 5, 3, 0, 6, 2, 7, 4, 1
   :numbered: left

   Put the blocks into order to define a simple HTML page. Indent the blocks to show the structure.
   -----
   &#60!DOCTYPE html&#62
   =====
   &#60html&#62
   =====
       &#60head&#62
   =====
           &#60title&#62A Page&#60/title&#62
   =====
       &#60/head&#62
   =====
       &#60body&#62
   =====
           &#60p&#62A paragraph.&#60/p&#62
   =====
       &#60/body&#62
   =====
   &#60/html&#62

.. parsonsprob:: html_pp_my_second_page
   :adaptive:
   :order: 8, 5, 3, 0, 6, 2, 7, 4, 1
   :numbered: left

   Put the blocks into order to define a simple HTML page with a header and a paragraph in that order. Indent the blocks to show the structure.
   -----
   &#60html&#62
   =====
       &#60head&#62
   =====
           &#60title&#62A Page&#60/title&#62
   =====
       &#60/head&#62
   =====
       &#60body&#62
   =====
           &#60h1&#62A header.&#60/h1&#62
   =====
           &#60p&#62A paragraph.&#60/p&#62
   =====
       &#60/body&#62
   =====
   &#60/html&#62

In an HTML page the *root* element is the "html" tag. A *root* is the start of a structure.  This type of structure
is called a tree. The ``html`` tag has two *children*
elements: the ``head`` and ``body`` tags. These tags are called *sibling* tags since they share the same parent tag.
The *parent* for the ``head`` and ``body`` tags is
the ``html`` tag.  The ``body`` tag is the parent of the ``h1`` and ``p`` tags.

.. figure:: ../images/html-tree.png
   :alt: A Tree Representation of an HTML page

.. mchoice:: html_parent_a

    Which tag is the parent of the ``a`` (hyperlink) tag in the above structure?

    -   h1

        -   No, the parent is connected in the tree structure.

    -   p

        +   Yes, the parent is the paragraph (p) tag.

    -   body

        -   No, the body is the parent of the p tag.

    -   html

        -   No, the html tag is the parent of the body tag


.. mchoice:: html_parent_title

    Which tag is the parent of the ``title`` tag in the above structure?

    -   h1

        -   No, the title is not connected to the h1 tag.

    -   body

        -   No, the title is not connected to the body tag.

    -   head

        +   Yes, the parent tag is the head tag.

    -   html

        -   No, the html tag is the parent of the head tag.

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: html_basics_groupsub
   :limit: 3
