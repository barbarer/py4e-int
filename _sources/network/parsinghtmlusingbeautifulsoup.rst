Parsing HTML using BeautifulSoup
--------------------------------

Even though HTML looks like XML and some pages are carefully
constructed to be XML, most HTML is generally broken in ways that cause
an XML parser to reject the entire page of HTML as improperly formed.

.. note::
    The XML format is described in the next chapter.

There are a number of Python libraries which can help you parse HTML and
extract data from the pages. Each of the libraries has its strengths and
weaknesses and you can pick one based on your needs.

As an example, we will simply parse some HTML input and extract links
using the *BeautifulSoup* library. BeautifulSoup tolerates highly flawed
HTML and still lets you easily extract the data you need. You can download and
install the BeautifulSoup code from:

https://pypi.python.org/pypi/beautifulsoup4

Information on installing BeautifulSoup with the Python Package Index tool ``pip``
is available at:

https://packaging.python.org/tutorials/installing-packages/

We will use ``urllib`` to read the page and then use
``BeautifulSoup`` to extract the ``href`` attributes
from the anchor (``a``) tags.

.. activecode:: urllinks
    :language: python3

    import urllib.request, urllib.parse, urllib.error
    from bs4 import BeautifulSoup
    import ssl

    # Ignore SSL certificate errors
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    url = "https://docs.python.org"
    html = urllib.request.urlopen(url, context=ctx).read()
    soup = BeautifulSoup(html, 'html.parser')

    # Retrieve all of the anchor tags
    tags = soup('a')
    for tag in tags:
        print(tag.get('href', None))


The program prompts for a web address, then opens the web page, reads
the data and passes the data to the BeautifulSoup parser, and then
retrieves all of the anchor tags and prints out the ``href``
attribute for each tag.

This list is much longer because some HTML anchor tags are relative
paths (e.g., tutorial/index.html) or in-page references (e.g., '#')
that do not include "http://" or "https://", which was a
requirement in our regular expression.

You can use also BeautifulSoup to pull out various parts of each tag:

.. activecode:: urllink2
    :language: python3

    from urllib.request import urlopen
    from bs4 import BeautifulSoup
    import ssl

    # Ignore SSL certificate errors
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    url = "http://www.dr-chuck.com/page1.htm"
    html = urlopen(url, context=ctx).read()
    soup = BeautifulSoup(html, "html.parser")

    # Retrieve all of the anchor tags
    tags = soup('a')
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
