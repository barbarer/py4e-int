Parsing HTML and scraping the web
---------------------------------

One of the common uses of the ``urllib`` capability in Python
is to *scrape* the web. Web scraping is when we write a
program that pretends to be a web browser and retrieves pages, then
examines the data in those pages looking for patterns.

As an example, a search engine such as Google will look at the source of
one web page and extract the links to other pages and retrieve those
pages, extracting links, and so on. Using this technique, Google
*spiders* its way through nearly all of the pages on the
web.

Google also uses the frequency of links from pages it finds to a
particular page as one measure of how "important" a page is and how high
the page should appear in its search results.

.. mchoice:: html_parse
    :practice: T
    :answer_a: HTML parsing
    :answer_b: Crawling
    :answer_c: Search engine
    :answer_d: Web scraping
    :correct: d
    :feedback_a: HTML parsing is breaking down scraped data into smaller bits specifically for data mining.
    :feedback_b: Crawling involves going through different websites and inspecting them, before scraping or parsing.
    :feedback_c: Search engines crawl the world wide web and scrape pages.
    :feedback_d: Correct, Scraping involves copying data from the web into a specific storage location.

    _____________ is when we write a
    program that pretends to be a web browser and retrieves pages, then
    examines the data in those pages looking for patterns.
