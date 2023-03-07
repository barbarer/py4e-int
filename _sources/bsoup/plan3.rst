..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


..  shortname:: Plan3
..  description:: Worked examples plus practice for Plan 3.

.. _plan_3:

Plan 3: Get a soup from multiple URLs
#####################################

Plan 3: Example
====================================

Sometimes we want to get information from multiple web pages that have the same layout. For example, all of the UMSI faculty pages have the same general design.

.. image:: _static/barbara-ericson.png
    :scale: 50%
    :align: center
    :alt: Plan 3 outline

.. image:: _static/steve-oney.png
    :scale: 50%
    :align: center
    :alt: Plan 3 outline

We are interested in getting information about mutliple UMSI professors: Dr. Barb Ericson, Dr. Steve Oney, and Dr. Paul Resnick.

Their webpages are:

``https://web.archive.org/web/20230128074139/https://www.si.umich.edu/people/``

``https://web.archive.org/web/20230128074139/https://www.si.umich.edu/people/``

``https://web.archive.org/web/20230128074139/https://www.si.umich.edu/people/``

In this code, we get a **soup** from multiple **UMSI faculty pages**.

.. raw:: html

   <pre>Goal: Get a soup from multiple webpages
   <pre style="background-color:#FDEBD0;">
   <strong># Load libraries for web scraping</strong>
   from bs4 import BeautifulSoup
   import requests
   <strong># Get a soup from <mark style="background-color:#FEF5E7">multiple URLs</mark></strong>
   base_url = <mark style="background-color:#FEF5E7">'https://web.archive.org/web/20230128074139/https://www.si.umich.edu/people/'</mark>
   endings = <mark style="background-color:#FEF5E7">['barbara-ericson', 'steve-oney', 'paul-resnick']</mark>
   for ending in endings:
       url = base_url + ending
       r = requests.get(url)
       soup = BeautifulSoup(r.content, 'html.parser')</pre></pre>


Plan 3: When to use this plan
====================================

Use this plan when you want to scrape the same thing from multiple webpages.

Plan3: How to use this plan
====================================

Look at the webpages you want to scrape and determine which parts they have in common, and which parts are different. The parts that they have in common are the ``base_url``. The parts that are different are the ``endings``.

Plan 3: Exercises
====================================

If you want to also get the link to the most recent news item from Dr Robin Brewer's page, how would you change the code below? Her web page is ``https://web.archive.org/web/20230110174202/https://www.si.umich.edu/people/robin-brewer``.

Change the code and run it to see if you're right!

.. activecode:: plan3_edit_brewer
   :language: python3
   :nocodelens:

   #Get the webpage
   # Load libraries for web scraping
   from bs4 import BeautifulSoup
   import requests
   # Get a soup from multiple URLs
   base_url = 'https://web.archive.org/web/20230128074139/https://www.si.umich.edu/people/'
   endings = ['barbara-ericson', 'steve-oney', 'paul-resnick']
   for ending in endings:
       url = base_url + ending
       r = requests.get(url)
       soup = BeautifulSoup(r.content, 'html.parser')

       #Extract info from the page
       # Get first tag of a certain type from the soup
       tag = soup.find('a', class_='item-teaser--heading-link')
       # Get link from tag
       info = tag.get('href')

       #Do something with the info
       # Print the info
       print(info)


.. note::

        .. raw:: html

           <a href="example2.html" >Click here to go back to the Faculty Pages example</a>
