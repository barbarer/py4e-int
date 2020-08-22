Parsing HTML using BeautifulSoup
--------------------------------

\index{BeautifulSoup}

Even though HTML looks like XML^[The XML format is described in the next chapter.]
and some pages are carefully
constructed to be XML, most HTML is generally broken in ways that cause
an XML parser to reject the entire page of HTML as improperly formed.

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
from the anchor (\ ``a``\ ) tags.

\index{BeautifulSoup}
\index{HTML}
\index{parsing!HTML}

\VerbatimInput{../code3/urllinks.py}

The program prompts for a web address, then opens the web page, reads
the data and passes the data to the BeautifulSoup parser, and then
retrieves all of the anchor tags and prints out the ``href``
attribute for each tag.

When the program runs, it produces the following output:

.. code-block::

   Enter - https://docs.python.org
   genindex.html
   py-modindex.html
   https://www.python.org/
   #
   whatsnew/3.6.html
   whatsnew/index.html
   tutorial/index.html
   library/index.html
   reference/index.html
   using/index.html
   howto/index.html
   installing/index.html
   distributing/index.html
   extending/index.html
   c-api/index.html
   faq/index.html
   py-modindex.html
   genindex.html
   glossary.html
   search.html
   contents.html
   bugs.html
   about.html
   license.html
   copyright.html
   download.html
   https://docs.python.org/3.8/
   https://docs.python.org/3.7/
   https://docs.python.org/3.5/
   https://docs.python.org/2.7/
   https://www.python.org/doc/versions/
   https://www.python.org/dev/peps/
   https://wiki.python.org/moin/BeginnersGuide
   https://wiki.python.org/moin/PythonBooks
   https://www.python.org/doc/av/
   genindex.html
   py-modindex.html
   https://www.python.org/
   #
   copyright.html
   https://www.python.org/psf/donations/
   bugs.html
   http://sphinx.pocoo.org/


This list is much longer because some HTML anchor tags are relative
paths (e.g., tutorial/index.html) or in-page references (e.g., '#')
that do not include "http://" or "https://", which was a
requirement in our regular expression.

You can use also BeautifulSoup to pull out various parts of each tag:

\VerbatimInput{../code3/urllink2.py}

.. code-block::

   python urllink2.py
   Enter - http://www.dr-chuck.com/page1.htm
   TAG: <a href="http://www.dr-chuck.com/page2.htm">
   Second Page</a>
   URL: http://www.dr-chuck.com/page2.htm
   Content: ['\nSecond Page']
   Attrs: [('href', 'http://www.dr-chuck.com/page2.htm')]


``html.parser`` is the HTML parser included in the standard Python 3 library.
Information on other HTML parsers is available at:

http://www.crummy.com/software/BeautifulSoup/bs4/doc/#installing-a-parser

These examples only begin to show the power of BeautifulSoup when it
comes to parsing HTML.