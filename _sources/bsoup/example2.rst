..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

..  shortname:: Plan1
..  description:: Worked examples plus practice for Plan 1.


Get news links from faculty webpages
#####################################

Let's say that you want to get the link to the first news article on your favorite umsi faculty's webpages.

.. image:: _static/faculty_pages.gif
    :scale: 70%
    :align: center
    :alt: News articles on faculty pages


But clicking through to gather all those links would be a pain. Fortunately, we can do that task with BeautifulSoup!

Run the code below to see what it collects.

.. activecode:: prof_homepages_example
   :language: python3
   :nocodelens:

   #Get the webpages
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
       # Get info from tag
       info = tag.get('href')

       #Do something with the info
       # Print the info
       print(info)

This code is made up of three plans. Click on each of the plans below to learn more about it.

.. raw:: html

   <pre><strong>Plan 3: Get a soup from multiple URLs</strong>
   <a href="plan3.html"><pre style="background-color:#FDEBD0;">
   # Load libraries for web scraping
   from bs4 import BeautifulSoup
   import requests
   # Get a soup from multiple URLs
   base_url = 'https://web.archive.org/web/20230128074139/https://www.si.umich.edu/people/'
   endings = ['barbara-ericson', 'steve-oney', 'paul-resnick']
   for ending in endings:
       url = base_url + ending
       r = requests.get(url)
       soup = BeautifulSoup(r.content, 'html.parser')</pre></a></pre>
       <pre><strong>Plan 4: Get info from a single tag</strong><a href="plan4.html"><pre style="background-color:#A9DFBF;">
       # Get first tag of a certain type from the soup
       tag = soup.find('a', class_='item-teaser--heading-link')
       # Get info from tag
       info = tag.get('href')</pre></a></pre>
       <pre><strong>Plan 9: Print info</strong><a href="plan9.html"><pre style="background-color:#D6EAF8;">
       # Print the info
       print(info)</pre></a></pre>
