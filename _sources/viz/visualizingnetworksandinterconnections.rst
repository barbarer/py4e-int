Visualizing networks and interconnections
-----------------------------------------

In this application, we will perform some of the functions of a search
engine. We will first spider a small subset of the web and run a
simplified version of the Google page rank algorithm to determine which
pages are most highly connected, and then visualize the page rank and
connectivity of our small corner of the web. We will use the D3
JavaScript visualization library http://d3js.org/ to produce the
visualization output.

You can download and extract this application from:

`www.py4e.com/code3/pagerank.zip <http://www.py4e.com/code3/pagerank.zip>`_

.. image:: ../images/pagerank.png
   :align: center
   :scale: 70%
   :alt: A Page Ranking

The first program (*spider.py*) program crawls a web site
and pulls a series of pages into the database
(*spider.sqlite*), recording the links between pages. You
can restart the process at any time by removing the
*spider.sqlite* file and rerunning
*spider.py*.

.. code-block::

   Enter web url or enter: http://www.dr-chuck.com/
   ['http://www.dr-chuck.com']
   How many pages:2
   1 http://www.dr-chuck.com/ 12
   2 http://www.dr-chuck.com/csev-blog/ 57
   How many pages:


In this sample run, we told it to crawl a website and retrieve two
pages. If you restart the program and tell it to crawl more pages, it
will not re-crawl any pages already in the database. Upon restart it
goes to a random non-crawled page and starts there. So each successive
run of *spider.py* is additive.

.. code-block::

   Enter web url or enter: http://www.dr-chuck.com/
   ['http://www.dr-chuck.com']
   How many pages:3
   3 http://www.dr-chuck.com/csev-blog 57
   4 http://www.dr-chuck.com/dr-chuck/resume/speaking.htm 1
   5 http://www.dr-chuck.com/dr-chuck/resume/index.htm 13
   How many pages:


You can have multiple starting points in the same database—within the
program, these are called "webs". The spider chooses randomly amongst
all non-visited links across all the webs as the next page to spider.

If you want to dump the contents of the *spider.sqlite*
file, you can run *spdump.py* as follows:

.. code-block::

   (5, None, 1.0, 3, 'http://www.dr-chuck.com/csev-blog')
   (3, None, 1.0, 4, 'http://www.dr-chuck.com/dr-chuck/resume/speaking.htm')
   (1, None, 1.0, 2, 'http://www.dr-chuck.com/csev-blog/')
   (1, None, 1.0, 5, 'http://www.dr-chuck.com/dr-chuck/resume/index.htm')
   4 rows.


This shows the number of incoming links, the old page rank, the new page
rank, the id of the page, and the url of the page. The
*spdump.py* program only shows pages that have at least
one incoming link to them.

Once you have a few pages in the database, you can run page rank on the
pages using the *sprank.py* program. You simply tell it
how many page rank iterations to run.

.. code-block::

   How many iterations:2
   1 0.546848992536
   2 0.226714939664
   [(1, 0.559), (2, 0.659), (3, 0.985), (4, 2.135), (5, 0.659)]


You can dump the database again to see that page rank has been updated:

.. code-block::

   (5, 1.0, 0.985, 3, 'http://www.dr-chuck.com/csev-blog')
   (3, 1.0, 2.135, 4, 'http://www.dr-chuck.com/dr-chuck/resume/speaking.htm')
   (1, 1.0, 0.659, 2, 'http://www.dr-chuck.com/csev-blog/')
   (1, 1.0, 0.659, 5, 'http://www.dr-chuck.com/dr-chuck/resume/index.htm')
   4 rows.


You can run *sprank.py* as many times as you like and it
will simply refine the page rank each time you run it. You can even run
*sprank.py* a few times and then go spider a few more
pages sith *spider.py* and then run
*sprank.py* to reconverge the page rank values. A search
engine usually runs both the crawling and ranking programs all the time.

If you want to restart the page rank calculations without respidering
the web pages, you can use *spreset.py* and then restart
*sprank.py*.

.. code-block::

   How many iterations:50
   1 0.546848992536
   2 0.226714939664
   3 0.0659516187242
   4 0.0244199333
   5 0.0102096489546
   6 0.00610244329379
   ...
   42 0.000109076928206
   43 9.91987599002e-05
   44 9.02151706798e-05
   45 8.20451504471e-05
   46 7.46150183837e-05
   47 6.7857770908e-05
   48 6.17124694224e-05
   49 5.61236959327e-05
   50 5.10410499467e-05
   [(512, 0.0296), (1, 12.79), (2, 28.93), (3, 6.808), (4, 13.46)]


For each iteration of the page rank algorithm it prints the average
change in page rank per page. The network initially is quite unbalanced
and so the individual page rank values change wildly between iterations.
But in a few short iterations, the page rank converges. You should run
*sprank.py* long enough that the page rank values
converge.

If you want to visualize the current top pages in terms of page rank,
run *spjson.py* to read the database and write the data
for the most highly linked pages in JSON format to be viewed in a web
browser.

.. code-block::

   Creating JSON output on spider.json...
   How many nodes? 30
   Open force.html in a browser to view the visualization


You can view this data by opening the file *force.html*
in your web browser. This shows an automatic layout of the nodes and
links. You can click and drag any node and you can also double-click on
a node to find the URL that is represented by the node.

If you rerun the other utilities, rerun *spjson.py* and
press refresh in the browser to get the new data from
*spider.json*.
