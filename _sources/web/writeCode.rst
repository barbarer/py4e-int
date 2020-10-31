Write Code Questions
--------------------------------------
.. reveal:: book_data
    :showtitle: Show
    :hidetitle: Hide

    .. raw:: html

       <pre id="books.xml">
       <?xml version="1.0" encoding="UTF-8"?>
       <bookstore>

           <book category="cooking">
               <title lang="en">Everyday Italian</title>
               <author>Giada De Laurentiis</author>
               <year>2005</year>
               <price>30.00</price>
           </book>

           <book category="children">
               <title lang="en">Harry Potter</title>
               <author>J K. Rowling</author>
               <year>2005</year>
               <price>29.99</price>
           </book>

           <book category="web">
               <title lang="en">XQuery Kick Start</title>
               <author>James McGovern</author>
               <author>Per Bothner</author>
               <author>Kurt Cagle</author>
               <author>James Linn</author>
               <author>Vaidyanathan Nagarajan</author>
               <year>2003</year>
               <price>49.99</price>
           </book>

           <book category="web" cover="paperback">
               <title lang="en">Learning XML</title>
               <author>Erik T. Ray</author>
               <year>2003</year>
               <price>39.95</price>
           </book>

       </bookstore>

.. datafile:: books.xml
    :fromfile: books.xml
    :hide:

.. activecode:: web_get_book_info_xml
    :language: python3
    :nocodelens:
    :datafile: books.xml

    Fix the errors in the code below so that it reads the data from books.xml
    and finds all of the book data and prints the title for each book and
    then finds all the author names for each book and prints each author name.
    ~~~~
    import xml.etree.ElementTree as ET
    import os
    path = os.path.dirname(os.path.abspath(__file__)) + os.sep
    fh = open(path + "books.xml")
    data = fh.read()
    fh.close()
    tree = ET.fromstring(data)
    book_list = tree.find('book')
    for book in book_list:
        print(f'Book title: {book.find(title).text}')
        author_list = book.find('author')
        for author in author_list:
            print(f"Author: {author}")

.. datafile:: news.xml
   :fromfile: news.xml
   :hide:

.. datafile:: weather.xml
   :fromfile: weather.xml
   :hide:

.. datafile:: email.json
   :fromfile: email.json

.. datafile:: person.json
   :fromfile: person.json

.. datafile:: person2.json
   :fromfile: person2.json
