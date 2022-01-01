..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


..  shortname:: Plan5
..  description:: Worked examples plus practice for Plan 5.

.. _plan_5:

Plan 5: Get info from all tags of a certain type
#################################################

To get information from the Cottage Inn locations page, we need to figure out which tags we should get from the soup, and what information we should get from the tags.

A great way to figure this out is to use the "inspect" function on your browser.

.. image:: _static/cottageinn_inspect.gif
    :scale: 90%
    :align: center
    :alt: By inspecting the locations, we see that they are all h3 tags.


We see that we need to get info from all the ``h3`` tags from the webpage. The *text* in those tags has the information we need!

Looking closer at a tag
====================================

Behind every webpage is HTML code. HTML code is made up of *tags*.

Here is the tag that creates the name of one of the Cottage Inn Pizza locations. The tag is surrounded by the blue rectangle. It is an 'h3' tag.

.. image:: _static/cottage_inn_h3_text.png
    :scale: 90%
    :align: center
    :alt: h3 tag example

The name of this tag is 'h3'. In-between the start and end tag (between the ``<h3>`` and ``</h3>`` is the tag's **text**. For this tag, the text is **Ann Arbor Broadway St.**

Plan 5: Example
====================================

Here is how to get **text** from all the **'h3'** tags from webpage:

.. raw:: html

   <pre>Goal: Get info from all tags of a certain type
   <pre style="background-color:#D5F5E3;">
   # Get all tags of <mark>a certain type</mark> from the soup
   tags = soup.find_all(<mark>'h3'</mark>)
   # Collect info from the tags
   collect_info = []
   for tag in tags:
       # Get <mark>info</mark> from tag
       info = tag.<mark>text</mark>
       collect_info.append(info)</pre></pre>



Plan 5: How to use it
====================================

Once you've found the tags you want to get information from, do two things:

1. Find the **tag description** and put it into the first slot.

How do you do that? Here are some examples:

==================================== === ===========================
What you see when you inspect            Tag description in the code
==================================== === ===========================
``<p>``                              ->  ``'p'``
``<h3>``                             ->  ``'h3'``
``<div class="comment">``            ->  ``'div', class_='comment'``
``<span style="X5e72;">``            ->  ``'span', style='X5e72;'``
``<a class="css4z" href="/orders">`` ->  ``'a', class_='css4z'``
==================================== === ===========================

2. Determine if you want to get **text** from a tag, or a **link** from a tag

================= === ========================================
The info you want     What you put in the code
================= === ========================================
The tag's text    ->  ``text``
The tag's link    ->  ``get('href')`` or ``get('href', None)``
================= === ========================================


Plan 5: Exercises
====================================
.. mchoice:: get_text_mc_1
    :random:

    What is the text of the tag below?

    .. image:: _static/dining_h2_text.png
        :align: center
        :alt: h2 tag on dining page

    -   Today's Menu

        +   Correct! This text is between the <h2 class="menuItem"> and </h2>

    -   h2

        -   No, h2 is the tag name

    -   menuTitle

        -   No

    -   class

        -   No


.. mchoice:: get_tag_description_mc_1
    :random:

    What is the tag description of the tag below?

    .. image:: _static/dining_h2_text.png
        :align: center
        :alt: h2 tag on dining page

    -   'h2', class_='menuTitle'

        +   Correct! This is how you would describe the tag type in our web scraping code.

    -   'h2'

        -   That is a part of the tag description, but we can be more specific.

    -   'h2', class='menuTitle'

        -   Very close, but in web scraping code you should use class followed by an underscore

    -   <h2 class="menuTitle">

        -   This is what is actually in the tag, but it's not how we would describe the tag in web scraping code.

.. clickablearea:: plan5_click
    :question: Right now, this code gets the *text* from all 'h3' tags in the webpage. If you wanted to get the *links* from all the 'a', class_='headline' tags in the webpage, which part(s) of the code below would you change?
    :iscode:
    :feedback: Check out "how to use this plan".

    # Get all tags of a certain type from the soup
    :click-incorrect:tags = soup.find_all(:endclick::click-correct:'h3':endclick::click-incorrect:):endclick:

    # Collect info from the tags
    :click-incorrect:collect_info = []:endclick:
    :click-incorrect:for tag in tags::endclick:
        :click-incorrect:# Get info from tag:endclick:
        :click-incorrect:info = tag.:endclick::click-correct:text:endclick:
        :click-incorrect:collect_info.append(info):endclick:


.. fillintheblank:: plan5_fill_v2

   Fill in the plan in order to get the text from all ``<div class="headline">`` tags on a webpage.

   ``# Get all tags of a certain type from the soup``

   ``tags = soup.find_all(`` |blank| ``)``

   ``# Collect info from the tags``

   ``collect_info = []``

   ``for tag in tags:``

       ``# Get info from tag``

       ``info = tag.`` |blank|

       ``collect_info.append(info)``

   -    :['"]div['"],\s?class_\s?=\s?['"]headline['"]: Correct.
        :['"]div['"], class=['"]headline['"]: Very close--but class should be class followed by an underscore
        :div: Good start, but you need more.
        :.*: Incorrect.
   -    :text: Correct.
        :get('href'): Remember that you are trying to get the text.
        :.text: Incorrect, the . is already there.
        :.*: Incorrect.





.. mchoice:: get_text_mc_2
    :random:

    Which tag in the picture below has text?

    .. image:: _static/dining_span_text.png
        :align: center
        :alt: span tag on dining page

    -   'h2'

        -   No, there is no h2 tag in this image.

    -   span, style='font-weight: 400;'

        +   Correct! The text starts with "With its chandeliers and dramatically vaulted ceiling..."

    -   'p'

        -   No, this tag contains the span tag.

    -   'style'

        -   No, style is an attribute


.. note::

        .. raw:: html

           <a href="example1.html" >Click here to go back to the Cottage Inn example</a>
