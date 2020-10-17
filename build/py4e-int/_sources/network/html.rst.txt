HTML
----------------------------------------------------

HTML stands for Hyper Text Markup Language.  It is used to create web pages.
HTML describes the elements of the webpage such as the title, paragraphs,
images, and links.

.. note::

   HTML is not a programming language.  It is a markup language for describing
   documents.  It uses tags to describe the elements of the document.  Tags are
   enclosed in "<" and ">".


.. activecode:: html_my_first_page_ex
   :language: html
   :nocodelens:

   <!DOCTYPE html>
   <html>
       <head>
           <title>My First Page</title>
       </head>
       <body>
           <h1>The First Page</h1>
           <p>If you like, you can switch to the
               <a href="http://www.dr-chuck.com/page2.htm">Second Page</a>.
           </p>
       </body>
   </html>

The first tag "<!DOCTYPE html>" indicates that this is an HTML document.

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
