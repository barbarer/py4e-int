BeautifulSoup - Updated
-------------------------

There are a number of Python libraries which can help you parse HTML and
extract data from the pages. Each of the libraries has its strengths and
weaknesses and you can pick one based on your needs.

As an example, we will simply parse an HTML page and extract links
using the *BeautifulSoup* library. BeautifulSoup makes it easy to extract
the data you need. You can download and
install the BeautifulSoup code from:

https://pypi.python.org/pypi/beautifulsoup4

Information on installing BeautifulSoup with the Python Package Index tool ``pip``
is available at:

https://packaging.python.org/tutorials/installing-packages/

We will use the ``requests`` library to read the HTML page and then use
``BeautifulSoup`` to extract the ``href`` attributes
from the anchor (``a``) tags. Anchor tags are also known as link tags.

.. activecode:: bs_get_href_1
    :language: python3

    import requests
    from bs4 import BeautifulSoup

    url = "http://www.dr-chuck.com/page1.htm"
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')

    # Retrieve all of the anchor tags
    tags = soup.find_all('a')
    for tag in tags:
        print(tag.get('href', None))


The program reads the HTML page from "http://www.dr-chuck.com/page1.htm",
creates a BeautifulSoup object from that HTML page, gets a list
of all of the 'a' tags.  Then prints the 'href' attribute
for each of the 'a' tags or None if it doesn't have one.

You can use also BeautifulSoup to pull out various parts of each tag:

.. activecode:: bs_get_tag_info
    :language: python3

    import requests
    from bs4 import BeautifulSoup

    url = "http://www.dr-chuck.com/page1.htm"
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')

    # Retrieve all of the anchor tags
    tags = soup.find_all('a')
    for tag in tags:
        # Look at the parts of a tag
        print('TAG:', tag)
        print('URL:', tag.get('href', None))
        print('Contents:', tag.contents[0])
        print('Attrs:', tag.attrs)

``html.parser`` is the HTML parser included in the standard Python 3 library.
Information on other HTML parsers is available at:

http://www.crummy.com/software/BeautifulSoup/bs4/doc/#installing-a-parser

These examples only begin to show the power of BeautifulSoup when it
comes to parsing HTML.
