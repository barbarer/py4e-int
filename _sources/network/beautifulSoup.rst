BeautifulSoup with Requests
----------------------------

BeautifulSoup makes it easy to extract
the data you need from an HTML or XML page.

We will use the ``requests`` library to get a response object from a URL,
create a ``BeautifulSoup`` object from the HTML in the response, then
print the first paragraph from the New York Times site.

.. activecode:: bs_get_href_1
    :language: python3

    This will find and print the first paragraph from the New York Times site.
    ~~~~
    import requests
    from bs4 import BeautifulSoup

    # get the response from the URL
    url = "https://nytimes.com"
    resp = requests.get(url)

    # create the soup object
    soup = BeautifulSoup(resp.content, 'html.parser')

    # Print the first paragraph in the soup
    print(soup.p)


We can also print all of the URLs on that page.
Again, we will use the ``requests`` library to get a response object from a URL,
create a ``BeautifulSoup`` object from the HTML in the response, get a list of all of the
anchor (``a``) tags, then loop through the tags and
extract the ``href`` attribute. Anchor tags are also known as link tags.

.. activecode:: bs_get_href_1
    :language: python3

    This will find all of the 'a' tags and print the href for each of them.
    ~~~~
    import requests
    from bs4 import BeautifulSoup

    url = "https://nytimes.com"
    resp = requests.get(url)
    soup = BeautifulSoup(resp.content, 'html.parser')

    # Retrieve all of the anchor tags
    tags = soup.find_all('a')
    for tag in tags:
        print(tag.get('href', None))


The program reads the HTML page from "http://www.dr-chuck.com/page1.htm",
creates a BeautifulSoup object from the content of that HTML page, gets a list of the
'a' tags. It then loops through the list of 'a' tags and prints the 'href' attribute
for it or 'None' if there isn't an 'href' attribute.

You can use also BeautifulSoup to pull out various parts of each tag:

.. activecode:: bs_get_tag_info
    :language: python3

    This will find the first 'a' tag and print the information for it.
    ~~~~
    import requests
    from bs4 import BeautifulSoup

    url = "http://www.dr-chuck.com/page1.htm"
    resp = requests.get(url)
    soup = BeautifulSoup(resp.content, 'html.parser')

    # Retrieve all of the anchor tags
    tags = soup.find_all('a')
    for tag in tags:
        # Look at the parts of a tag
        print('TAG:', tag)
        print('URL:', tag.get('href', None))
        print('Contents:', tag.contents[0])
        print('Attrs:', tag.attrs)

The ``html.parser`` is the HTML parser that is included in the standard Python 3 library.
Information on other HTML parsers is available at:

http://www.crummy.com/software/BeautifulSoup/bs4/doc/#installing-a-parser

How to Find Tags
==================

.. note::

   Use ``find`` to get the first tag that meets some criteria and ``find_all``
   to get a list of all tags that meet some criteria.

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

You can use this information to find a parent tag such as the "div" tag that
contains the "li" (list item)
for each "a" tag for the mini nagivation bar in the New York Times webpage.
You can then use ``find`` to
find the "div" tag with the "css-1d8a290" class and then get all the
"a" tags that are in the "div" tag.

.. note::

   You must use class_ when looking for a tag with a particular class.

.. activecode:: bs_get_mini_nav_href
    :language: python3

    This will print the "href" for all the links in the mini nav header for the
    New York Times page.
    ~~~~
    import requests
    from bs4 import BeautifulSoup

    url = "https://www.nytimes.com/"
    resp = requests.get(url)
    soup = BeautifulSoup(resp.content, 'html.parser')
    div = soup.find("div", class_="css-1d8a290")
    tags = div.find_all('a')
    for tag in tags:
        print(tag.get('href', None))
