BeautifulSoup with Requests
----------------------------

BeautifulSoup makes it easy to extract
the data you need from an HTML or XML page.

We will use the ``requests`` library to get a response object from a URL,
create a ``BeautifulSoup`` object from the HTML content in the response, then
print the first paragraph from the site.

.. activecode:: bs_get_print_first_para
    :language: python3

    This will find and print the first paragraph from the Michigan Daily site.
    ~~~~
    import requests
    from bs4 import BeautifulSoup

    # get the response from the URL
    url = "https://www.michigandaily.com/"
    resp = requests.get(url)

    # create the soup object
    soup = BeautifulSoup(resp.content, 'html.parser')

    # Print the first paragraph tag in the soup
    print(soup.find('p'))

The ``html.parser`` is the HTML parser that is included in the standard Python 3 library.
Information on other HTML parsers is available at:

http://www.crummy.com/software/BeautifulSoup/bs4/doc/#installing-a-parser

.. parsonsprob:: bs_print_first_paragraph_pp
   :numbered: left
   :adaptive:

   Put the following blocks in order to print the second paragraph from the Michigan Daily website.  Use the find_all method on
   BeautifulSoup to get a list of all of the paragraphs.
   -----
   import requests
   from bs4 import BeautifulSoup
   =====
   import requests
   import bs #paired: Use from bs4 import BeautifulSoup
   =====
   # get the response from the URL
   url = "https://www.michigandaily.com/"
   resp = requests.get(url)
   =====
   # create the soup object
   soup = BeautifulSoup(resp.content, 'html.parser')
   =====
   # create the soup object
   soup = BeautifulSoup(resp, 'html.parser') #paired: need to use resp.content
   =====
   p_list = soup.find_all('p')
   =====
   p_list = soup.find_all(p) #paired: the tag must be a string
   =====
   print(p_list[1])
   =====
   print(p_list[2]) #paired: the second item is at index 1

Getting text from a tag
=========================
Some tags have text like a paragraph tag or a span tag.  You can use ``tagName.text`` to get the text.
You can also find a tag with a particular class.

.. activecode:: bs_get_text_with_class
    :language: python3

    This will print the text for the site description paragraph.
    ~~~~
    import requests
    from bs4 import BeautifulSoup

    # create the soup object from the HTML
    url = "https://www.michigandaily.com/"
    resp = requests.get(url)
    soup = BeautifulSoup(resp.content, 'html.parser')

    # get the headline with the class and print its text
    tag = soup.find("p", class_="site-description")
    print(tag.text)

.. note ::

   When you specify a class you must use ``class_`` as the keyword.  This is becuase class is already
   used to define a new class in Python.

.. parsonsprob:: bs_get_tag_text_with_class_pp
   :numbered: left
   :adaptive:

   Put the following blocks in order to print the text for span which
   is a child of the h3 tag with a class of css-1pjbq1w.
   -----
   import requests
   from bs4 import BeautifulSoup
   =====
   url = "https://www.nytimes.com/"
   =====
   resp = requests.get(url)
   =====
   resp = requests.get('url') #paired: don't put quotes around url - it is a variable
   =====
   soup = BeautifulSoup(resp.content, 'html.parser')
   =====
   tag = soup.find("h3", class_="css-1pjbq1w")
   =====
   tag = soup.find(h3, class_="css-1pjbq1w") #paired: need quotes around h3.
   =====
   tag = tag.find('span')
   =====
   tag = soup.find('span') #paired: use tag.find
   =====
   print(tag.text)


Getting data from tags with attributes
===========================================
Some tags have attribute and value pairs like the link (anchor) tag.  You can
get the value for an attribute of the tag.

.. activecode:: bs_get_all_a_tags_and_print_hrefs
    :language: python3

    This will find all of the link tags in the New York Times site and print the href for each of them.
    ~~~~
    import requests
    from bs4 import BeautifulSoup

    # get the soup object
    url = "https://nytimes.com"
    resp = requests.get(url)
    soup = BeautifulSoup(resp.content, 'html.parser')

    # print the href in each link (anchor) tag
    tags = soup.find_all('a')
    for tag in tags:
        print(tag.get('href', None))

.. parsonsprob:: bs_print_get_all_href_pp
   :numbered: left
   :adaptive:

   Put the following blocks in order to find all the link tags and print the href for each one for the Michgian Daily.
   -----
   import requests
   from bs4 import BeautifulSoup
   =====
   url = "https://nytimes.com"
   =====
   resp = requests.get(url)
   =====
   resp = requests.find(url) #paired: use get
   =====
   soup = BeautifulSoup(resp.content, 'html.parser')
   =====
   soup = BeautifulSoup(resp, 'html.parser') #paired: must use .content
   =====
   tags = soup.find_all('a')
   =====
   tags = soup.find_all('link') #paired: use a for link (anchor)
   =====
   for tag in tags:
   =====
       print(tag.get('href', None))
   =====
       print(tag.get('ref', None)) #paired: use href

How to Find Tags Inside of Tags
===================================

Sometimes the tags that you want to find don't have a particular class that
makes it easy to find them.  Then you can find a parent tag with a particular
class and then use that tag to look for the tag you want.

.. note::

   You can use 'find_all' to get a list of all tags of a type and then loop through
   those tags and get the first tag of a type.

You will typically first inspect a webpage to determine how to find what you are
looking for in the page.  You can do that with the developer tools in the
Chrome browser.  Click on the three dots on the top right of the page and then
"More Tools" and then "Developer Tools".  You you can also just right-click
on what you are interested in viewing on a webpage, and then click on "Inspect".

.. figure:: ../images/inspect.png
   :alt: Inspecting part of a webpage in the Chrome browser.

You will see the HTML source for the thing you inspected.

.. figure:: ../images/divAndOl.png
   :alt: Inspecting part of a webpage in the Chrome browser.

You can use this information to find a parent tag such as the "li" tag that contains the "a" tag
in the nagivation bar in the Michigan Daily webpage.
Use *find_all* to get all the "li" tags and then loop through those tags and use *find* to get the
first "a" tag in each "li" tag.

.. activecode:: bs_get_mini_nav_href
    :language: python3

    This will print the first "href" inside each list item (li) with a class of "menu-item".
    ~~~~
    import requests
    from bs4 import BeautifulSoup

    # get the soup object
    url = "https://www.michigandaily.com/"
    resp = requests.get(url)
    soup = BeautifulSoup(resp.content, 'html.parser')

    # get all the li tags and find the first link (a) tag and print the href
    li_list = soup.find_all("li", class_="menu-item")
    for li in li_list:
        a_tag = li.find('a')
        print(a_tag.get("href",None))

.. parsonsprob:: bs_find_all_and_find
   :numbered: left
   :adaptive:

   Put the following blocks in order to print the href for the first 'a' tag
   in each h2 tag with a class of "entry-title"
   -----
   import requests
   from bs4 import BeautifulSoup
   =====
   url = "https://www.michigandaily.com/"
   =====
   resp = requests.get(url)
   =====
   soup = BeautifulSoup(resp.content, 'html.parser')
   =====
   li_list = soup.find_all("h2", class_="entry-title")
   =====
   li_list = soup.find_all("h2", class="entry-title") #paired: must use class_
   =====
   for li in li_list:
   =====
   for li in tags: #paired: use li_list
   =====
       a_tag = li.find('a')
   =====
       a_tag = li.find('link') #paired: use a (anchor)
   =====
       print(a_tag.get("href",None))
