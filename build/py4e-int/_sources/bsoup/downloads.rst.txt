..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

..  shortname:: Downloads
..  description:: Downloads of all the plans

You can download all the plans here
####################################


Plan 1
====================================

.. activecode:: plan1_download
   :language: python3
   :nocodelens:
   :enabledownload:

   # Get the webpage
   _____________________________________________

   # Extract info from the page
   _____________________________________________
   
   # Do something with the info
   _____________________________________________
   

Plan 2
====================================

.. activecode:: plan2_download
   :language: python3
   :nocodelens:
   :enabledownload:

   # Load libraries for web scraping
   from bs4 import BeautifulSoup
   import requests
   # Get a soup from a URL 
   url = _________________________
   r = requests.get(url)
   soup = BeautifulSoup(r.content, 'html.parser')

Plan 3
====================================

.. activecode:: plan3_download
   :language: python3
   :nocodelens:
   :enabledownload:

   # Load libraries for web scraping
   from bs4 import BeautifulSoup
   import requests
   # Get a soup from multiple URLs 
   base_url = ___________________________________
   endings =  ___________________________________
   for ending in endings:
       url = base_url + ending 
       r = requests.get(url) 
       soup = BeautifulSoup(r.content, 'html.parser')

Plan 4
====================================

.. activecode:: plan4_download
   :language: python3
   :nocodelens:
   :enabledownload:

   # Get first tag of a certain type from the soup
   tag = soup.find(___________)
   # Get info from the tag
   info = tag.________
   

Plan 5
====================================

.. activecode:: plan5_download
   :language: python3
   :nocodelens:
   :enabledownload:

   # Get all tags of a certain type from the soup
   tags = soup.find_all(___________)
   # Collect info from the tags
   collect_info = []
   for tag in tags:
       # Get info from tag
       info = tag.________
       collect_info.append(info)


Plan 6
====================================

.. activecode:: plan6_download
   :language: python3
   :nocodelens:
   :enabledownload:

   # Get first tag of a certain type from the soup
   first_tag = soup.find(___________)
   # Get all tags of a certain type from the first tag
   tags = first_tag.find_all(____________)
   # Collect info from the tags
   collect_info = []
   for tag in tags: 
       # Get info from tag
       info = tag.________
       collect_info.append(info)
   
Plan 9
====================================

.. activecode:: plan9_download
   :language: python3
   :nocodelens:
   :enabledownload:

   # Print info
   print(____________)

Plan 10
====================================

.. activecode:: plan10_download
   :language: python3
   :nocodelens:
   :enabledownload:

   # Load library for json files
   import json
   # Put info into file
   f = open(____________, 'w')
   json.dump(____________, f)
   f.close()
   

