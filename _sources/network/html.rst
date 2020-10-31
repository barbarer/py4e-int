HTML
--------

HTML stands for Hyper Text Markup Language.  It is used to create web pages.
HTML describes the elements of the webpage such as the title, paragraphs,
images, and links.  For more information on HTML see the tutorial at
https://www.w3schools.com/html/.

.. note::

   HTML is not a programming language.  It is a markup language for describing
   documents.  It uses tags to describe the elements of the document.  Tags are
   enclosed in "<" and ">".


.. activecode:: html_my_first_page_ac
   :language: html
   :nocodelens:

   Click on the "Render" button to see the resulting web page.  Once it is
   displayed you can click on the link to go to another web page.
   ~~~~
   <!DOCTYPE html>
   <html>
       <head>
           <title>My First Page</title>
       </head>
       <body>
           <h1>The First Page</h1>
               <p>
               Welcome!
               <a href="http://www.dr-chuck.com/page2.htm">Second Page</a>.
               </p>
       </body>
   </html>

The first tag, "<!DOCTYPE html>", indicates that this is an HTML document.
While it is best to include this tag, the page will typically display
fine even if you don't include it.

Most HTML elements have start tags and end tags. The page is started with
the start tag  "<html>" and ends with the end tag "</html>".  Indentation
isn't required, but can make it easier to read the HTML.

The HTML tag has
two children tags: "<head>" and "<body>".  The head contains Information
about the page including the page title.  The body contains the elements
that are displayed in the page.

This body has a header "<h1>", a
paragraph "<p>" which has an anchor (link) tag "<a>" in it.  The anchor tag
has an "href" attribute which is the URL of the link.  It also includes the
text of the link.  When
you click on the link text it will take you to that URL. A URL is a Uniform
Resource Locator which an address for content on the web.

.. parsonsprob:: html_pp_my_first_page
   :adaptive:
   :numbered: left

   Put the blocks into order to define a simple HTML page. Indent the blocks to show the structure.
   -----
   &#60!DOCTYPE html&#62
   =====
   &#60html&#62
   =====
       &#60head&#62
   =====
           &#60title&#62My First Page&#60/title&#62
   =====
       &#60/head&#62
   =====
       &#60body&#62
   =====
           &#60p&#62This paragraph will be displayed by the browser.&#60/p&#62
   =====
       &#60/body&#62
   =====
   &#60/html&#62

HTML Structure
===============

In an HTML page the *root* element is the "html" tag. A *root* is the start of a structure.  This type of structure
is called a tree. The "html" tag has two *children*
elements: the "head" and "body" tags. These tags are called *sibling* tags since they share the same parent tag.
The *parent* for the "head" and "body" tags is
the "html" tag.  The "body" tag is the parent of the "h1" and "p" tags.

.. figure:: ../images/html-tree.png
   :alt: A Tree Representation of an HTML page

.. mchoice:: html_parent_a

    Which tag is the parent of the "a" tag in the above structure?

    -   h1

        -   No, the parent is connected in the tree structure.

    -   p

        +   Yes, the parent is the paragraph (p) tag.

    -   body

        -   No, the body is the parent of the p tag.

    -   html

        -   No, the html tag is the parent of the body tag


.. mchoice:: html_parent_title

    Which tag is the parent of the "title" tag in the above structure?

    -   h1

        -   No, the title is not connected to the h1 tag.

    -   body

        -   No, the title is not connected to the body tag.

    -   head

        +   Yes, the parent tag is the head tag.

    -   html

        -   No, the html tag is the parent of the head tag.
