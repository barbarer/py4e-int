Group Work: More HTML
------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* How do you create a hyperlink in a HTML page with an ``<a>`` tag?
* How do you include an image in a HTML page with a ``<img>`` tag?
* What are tag attributes?
* What is the difference between a ``<div>`` and a ``<span>`` tag?
* How to change the look of the displayed HTML elements with Cascading Style Sheets (CSS).

*Process Objectives:*

* Put HTML in order to define tables
* Identify tag attribute names and values
* Match terms to definitions

Table Tags
============

HTML pages can include tables.  Use the ``<table>`` tag.

.. activecode:: html_table_ex
   :language: html
   :nocodelens:

   Click on the "Render" button to see the resulting web page.
   ~~~~
   <!DOCTYPE html>
   <html>
       <head>
           <title>Page with Table</title>
       </head>
       <body>
           <h1>The First Page</h1>
           <table>
               <tr>
                   <th>Country</th>
                   <th>Year</th>
                   <th>Unemployment Rate</th>
               </tr>
               <tr>
                   <td>United Kingdom</td>
                   <td>2017</td>
                   <td>4.33</td>
               </tr>
               <tr>
                   <td>India</td>
                   <td>2017</td>
                   <td>3.52</td>
               </tr>
           </table>
       </body>
   </html>

.. dragndrop:: html_table_tag_def_dnd
    :practice: T
    :feedback: Read the information above and try again.
    :match_1: table|||Used to create a table.
    :match_2: th|||Used to specify a header (optional first row).
    :match_3: tr|||Used to create a row in a table.
    :match_4: td|||Used to identify data in a table.

    Match each tag to its definition.


.. parsonsprob:: html_body_table_unemployment_order
   :adaptive:
   :order: 9, 1, 3, 5, 7, 2, 8, 4, 0, 6
   :numbered: left

   Put the blocks into order to define just the body of simple HTML page with a table. The table has a header row and one row of data. Indent the blocks to show the structure.
   -----
   &#60;body&#62;
   =====
       &#60;table&#62;
   =====
           &#60;tr&#62;
   =====
               &#60;th&#62;Country&#60;/th&#62;
               &#60;th&#62;Year&#60;/th&#62;
               &#60;th&#62;Unemployment Rate&#60;/th&#62;
   =====
           &#60;/tr&#62;
   =====
           &#60;tr&#62;
   =====
               &#60;td&#62;United Kingdom&#60;/td&#62;
               &#60;td&#62;2017&#60;/td&#62;
               &#60;td&#62;4.33&#60;/td&#62;
   =====
           &#60;/tr&#62;
   =====
       &#60;/table&#62;
   =====
   &#60;/body&#62;


.. parsonsprob:: html_body_table_order_two_data
   :adaptive:
   :order: 6, 0, 2, 8, 1, 7, 3, 5, 9, 4
   :numbered: left

   Put the blocks into order to define just the body of simple HTML page with a table. The table has two rows of data.  The first row is data about the United Kingdom and the second is data about India. Indent the blocks to show the structure.
   -----
   &#60;body&#62;
   =====
       &#60;table&#62;
   =====
           &#60;tr&#62;
   =====
               &#60;td&#62;United Kingdom&#60;/td&#62;
               &#60;td&#62;2017&#60;/td&#62;
               &#60;td&#62;4.33&#60;/td&#62;
   =====
           &#60;/tr&#62;
   =====
           &#60;tr&#62;
   =====
               &#60;td&#62;India&#60;/th&#62;
               &#60;td&#62;2017&#60;/th&#62;
               &#60;td&#62;3.52&#60;/th&#62;
   =====
           &#60;/tr&#62;
   =====
       &#60;/table&#62;
   =====
   &#60;/body&#62;


Link Tag
============

Web pages can include hyperlinks to other web pages.  They do this by including
an anchor ``a`` tag which is also known as a **link** tag as shown below.

.. code-block:: html

   <a href="https://www.w3schools.com/">Visit W3Schools.com!</a>

The start tag ``<a>`` contains an **attribute** ``href`` and **value** ``"https://www.w3schools.com/"``.
The text of the tag is ``Visit W3Schools.com!`` which is the actual text of the link when it is displayed.
If you click on the link you will be taken to the ``href`` value: ``https://www.w3schools.com/``.
The ``<a>`` tag has a closing ``</a>`` tag.

.. activecode:: html_link_ac
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
           <p> The anchor (link) tag is used to include hyperlinks.  Click on "Visit the beach" to go to that url.
               <a href="https://i.ibb.co/WfcrzVn/beach.jpg">Visit the beach</a>
           </p>
       </body>
   </html>

Image Tag
==================

Web pages can include images using the <img> tag. The image tag has an attribute ``src`` that specifies the URL for the image
and can have an ``alt`` attribute to specify alternative text that describes the image.

.. activecode:: html_image_ac
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
           <p> The img tag is used to include images in web pages.</p>
           <img src="https://i.ibb.co/WfcrzVn/beach.jpg" alt="A picture of a beach">
       </body>
   </html>

.. note ::

   An image tag, ``<img>``, does not have an end tag.  All of the information is in the start tag.

.. dragndrop:: html_other_tags_def_dnd
    :practice: T
    :feedback: Read the information above and try again.
    :match_1: img|||Tag to include an image.
    :match_2: div|||Tag to define a division (section).
    :match_3: a|||Tag to define a hyperlink (link)

    Match each tag to its definition.


.. shortanswer:: html-anchor-vs-img

   List the differences between the ``img`` tag and the ``a`` tag?

Attributes
==============

All HTML tags can have attributes.  Attributes provide additional information about the tag such as the alternative text to use for an image as shown above by the ``alt`` attribute of the ``img`` tag.
Attributes are specified by name and value pairs.  The value should be in quotes.

.. clickablearea:: html_a_tag_attribute_names
    :practice: T
    :question: Click on all of the attribute names in the example HTML below.
    :iscode:
    :feedback: The attribute name is on the left side of the equal sign

    :click-incorrect:&#60html&#62:endclick:
        :click-incorrect:&#60head&#62:endclick:
            :click-incorrect:&#60title&#62:endclick::click-incorrect:My First Page:endclick::click-incorrect:&#60/title&#62:endclick:
        :click-incorrect:&#60/head&#62:endclick:
        :click-incorrect:&#60body&#62:endclick:
            :click-incorrect:&#60h1&#62:endclick::click-incorrect:The First Page:endclick::click-incorrect:&#60/h1&#62:endclick:
            :click-incorrect:&#60p&#62:endclick:
                :click-incorrect:HTML is the language used to create web pages.:endclick:
            :click-incorrect:&#60/p&#62:endclick:
            :click-incorrect:&#60a:endclick: :click-correct:href:endclick::click-incorrect:=:endclick::click-incorrect:"https://www.w3schools.com/"&#62:endclick::click-incorrect:&#60/a&#62:endclick:
            :click-incorrect:&#60img:endclick: :click-correct:src:endclick::click-incorrect:=:endclick::click-incorrect:"https://i.ibb.co/WfcrzVn/beach.jpg":endclick: :click-correct:alt:endclick::click-incorrect:=:endclick::click-incorrect:"A picture of a beach":endclick:&#62
        :click-incorrect:&#60/body&#62:endclick:
    :click-incorrect:&#60/html&#62:endclick:

.. clickablearea:: html_a_tag_attribute_values
    :practice: T
    :question: Click on all of the attribute values in the example HTML below.
    :iscode:
    :feedback: The attribute name is on the left side of the equal sign

    :click-incorrect:&#60html&#62:endclick:
        :click-incorrect:&#60head&#62:endclick:
            :click-incorrect:&#60title&#62:endclick::click-incorrect:My First Page:endclick::click-incorrect:&#60/title&#62:endclick:
        :click-incorrect:&#60/head&#62:endclick:
        :click-incorrect:&#60body&#62:endclick:
            :click-incorrect:&#60h1&#62:endclick::click-incorrect:The First Page:endclick::click-incorrect:&#60/h1&#62:endclick:
            :click-incorrect:&#60p&#62:endclick:
                :click-incorrect:HTML is the language used to create web pages.:endclick:
            :click-incorrect:&#60/p&#62:endclick:
            :click-incorrect:&#60a:endclick: :click-incorrect:href:endclick::click-incorrect:=:endclick::click-correct:"https://www.w3schools.com/"&#62:endclick::click-incorrect:&#60/a&#62:endclick:
            :click-incorrect:&#60img:endclick: :click-incorrect:src:endclick::click-incorrect:=:endclick::click-correct:"https://i.ibb.co/WfcrzVn/beach.jpg":endclick: :click-incorrect:alt:endclick::click-incorrect:=:endclick::click-correct:"A picture of a beach":endclick:&#62
        :click-incorrect:&#60/body&#62:endclick:
    :click-incorrect:&#60/html&#62:endclick:

Div and Span tags
======================

The ``div`` tag is used to contain other HTML tags (elements).  It is often used to divide the HTML page into sections. The ``span`` tag is used for inline grouping or styling.
You can use Cascading Style Sheets (CSS) to change the look of each HTML tag (element).  You can add the CSS directly in the ``head`` section using the ``style`` tag, but the recommended approach is to use external CSS.

.. activecode:: html_div_with_css_ac
   :language: html
   :nocodelens:

   Render the HTML below.
   ~~~~
   <!DOCTYPE html>
   <html>
       <head>
           <title>My First Page</title>
           <style>
               div {
                   background-color: #EAF0F6;
                   color: #33475B;
                   border: 3px solid #00A4BD;
                   padding: 5px;
               }
               span {
                    background-color: #F6FF33;
               }
           </style>
       </head>
       <body>
           <div> A div is a division or section in HTML.  It is a container for other HTML elements.
               <p> First paragraph </p>
               <p> Second <span>paragraph</span> with a span in it.</p>
               <p> Third paragraph</p>
           </div>
       </body>
   </html>

.. dragndrop:: html_span_div_css
    :practice: T
    :feedback: Read the information above and try again.
    :match_1: span|||Tag to define an inline style or order.
    :match_2: div|||Tag to define a block or section in an HTML page.
    :match_3: CSS|||Is used to define styles to change how HTML elements are displayed.

    Match each term to its definition.

Using CSS Classes
====================

You can define one or more classes in CSS and then use them to change the display of the HTML elements.

.. activecode:: html_div_with_css_classes_ac
   :language: html
   :nocodelens:

   Render the HTML below.
   ~~~~
   <html>
       <head>
           <style>
                p.warning {
                    color: red;
                }

                p.large {
                    font-size: 150%;
                }
          </style>
      </head>
     <body>

         <h1>Demo using CSS classes</h1>
         <p>This is a normal paragraph</p>
         <p class="warning">This paragraph will be red.</p>
         <p class="warning large">This paragraph will be red and in a larger font-size.</p>

     </body>
   </html>

Change the class ``warning`` to use an orange color instead and render the HTML again.

.. mchoice:: html_true_items
    :practice: T
    :answer_a: The root (start) of the elements in an HTML page is the html tag
    :answer_b: All start tags must have an end tag
    :answer_c: All HTML tags can have attributes
    :answer_d: You must start the HTML page with &#60;!DOCTYPE html&#62;
    :correct: a, c
    :feedback_a: The root is the html tag
    :feedback_b: Some start tags do not have an end tag like &#60;img&#62;
    :feedback_c: All HTML tags can have attributes
    :feedback_d: You do not have to start an HTML page with &#60;!DOCTYPE html&#62; but should

    Which of the follow are true?

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: html_more_groupsub
   :limit: 3
