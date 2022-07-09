Using Web Services
:::::::::::::::::::::::::::::::::::::::::::

Once it became easy to retrieve documents and parse documents over HTTP
using programs, it did not take long to develop an approach where we
started producing documents that were specifically designed to be
consumed by other programs (i.e., not HTML to be displayed in a
browser).

There are two common formats that we use when exchanging data across the
web. eXtensible Markup Language (XML) has been in use for a very
long time and is best suited for exchanging document-style data. When
programs just want to exchange dictionaries, lists, or other internal
information with each other, they use JavaScript Object Notation (JSON)
(see `www.json.org <http://www.json.org>`_\ ). We will look at both formats.

.. toctree::
    :caption: Using Web Services
    :maxdepth: 3

    xml.rst
    parsingXML.rst
    loopingNodes.rst
    JSON.rst
    parsingJSON.rst
    applicationProg.rst
    securityAPI.rst
    glossary.rst
    Exercises.rst
    MixedupCode.rst
    writeCode.rst
    google.rst
    twitter.rst
