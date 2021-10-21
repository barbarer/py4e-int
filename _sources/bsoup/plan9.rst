..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


..  shortname:: Plan9
..  description:: Worked examples plus practice for Plan 9.

.. _plan_9:

Plan 9: Print info
###########################

It's very common to print the information you have just scraped.

Plan 9: Example
====================================

If you want to print info from only one tag, like if you've just used *Plan 4: Get info from a single tag*, then do this:

.. raw:: html

   <pre>Goal: Print the info
   <pre style="background-color:#D6EAF8;">
   <strong># Print the <mark>info</mark></strong>
   print(<mark>info</mark>)</pre></pre>

If you want to print info from multiple tags, like if you've just used *Plan 5: Get info from all tags of a certain type*, then do this:

.. raw:: html

   <pre>Goal: Print the info
   <pre style="background-color:#D6EAF8;">
   <strong># Print the <mark>info</mark></strong>
   print(<mark>collect_info</mark>)</pre></pre>


Plan 9: Exercises
====================================

.. fillintheblank:: plan9_fill_in

   Here is the code to collect all the locations from the Cottage Inn locations page.

   What should fill the slot in Plan 9 below?

   .. code-block:: python

           #Get one webpage
           # Load libraries for web scraping
           from bs4 import BeautifulSoup
           import requests
           # Get a soup from a URL
           url = 'https://cottageinn.com/pick-a-location/'
           r = requests.get(url)
           soup = BeautifulSoup(r.content, 'html.parser')

           #Get info from all tags of a certain type
           # Get all tags of a certain type from the soup
           tags = soup.find_all('h3')
           # Collect info from the tags
           collect_info = []
           for tag in tags:
               # Get info from tag
               info = tag.text
               collect_info.append(info)

           #Print the info
           # Print the info
           print(___________)


   ___________ should be |blank|

   -    :collect_info: Correct.
        :info: Remember that the variable that goes in this plan depends on the plan above.
        :.*: Incorrect.

.. note::

        .. raw:: html

           <a href="example1.html" >Click here to go back to the Cottage Inn example</a>

.. note::

        .. raw:: html

           <a href="example2.html" >Click here to go back to the Faculty Pages example</a>
