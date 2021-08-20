Multiple Choice Questions
---------------------------

.. mchoice:: Exercises_bsoup_mc1
   :practice: T
   :answer_a: h1 
   :answer_b: h1, class='sports'
   :answer_c: h1, class_='sports'
   :answer_d: 'h1', class_='sports'
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct! Both the tag and attribute are important. The h1 tag needs to be in quotes, and class has to be followed by an underscore.
   
   Given the below html, how would this tag type be described in web scraping code?

   .. code-block:: python

      <h1 class='sports'>Sports News</h1>


.. mchoice:: Exercises_bsoup_mc2
   :practice: T
   :answer_a: first_item = items[0]
   :answer_b: first_item = items.find(0)
   :answer_c: first_item = items.get(0)
   :answer_d: first_item = items.find[0]
   :answer_e: first_item = soup.items[0]
   :correct: a
   :feedback_a: Correct! Given that soup.find_all(class_='items') returns a list, in order to get the first item, all you need to do is index.
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Try again!
   :feedback_e: Try again!
   
   Which line of code correctly gets the first item in ``items`` and makes the most sense following the below code snippet?

   .. code-block:: python

      soup = BeautifulSoup(response.content, 'html.parser')
      items = soup.find_all(class_='items')


.. mchoice:: Exercises_bsoup_mc3
   :practice: T
   :answer_a: soup = BeautifulSoup(response.text, 'html.parser')
   :answer_b: soup = BeautifulSoup(response.content, 'html.parser')
   :answer_c: soup = BeautifulSoup(response.string, 'html.parser')
   :correct: a, b
   :feedback_a: Correct!
   :feedback_b: Correct! 
   :feedback_c: Try again!

   How does one parse the HTML into a ``BeautifulSoup`` object given a ``response`` object?


.. mchoice:: Exercises_bsoup_mc4
   :practice: T
   :answer_a: soup.p.get('id')
   :answer_b: soup.p.get('id', None)
   :answer_c: soup.p[id]
   :answer_d: soup.p['id']
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! This is the correct way to get the first p tag and get the value for the id in the p tag.
   :feedback_c: Try again!
   :feedback_d: Try again!

   Which of the following gets the value for the ``id`` in the first ``p`` tag?


.. mchoice:: Exercises_bsoup_mc5
   :practice: T
   :answer_a: soup.h1
   :answer_b: soup.header1
   :answer_c: soup.h1[0]
   :answer_d: soup.h1[1]
   :correct: a
   :feedback_a: Correct! The header 1 tag is h1, and this is the correct way to get the first header 1 tag after creating a soup object. 
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Try again!

   How does one get the first header 1 tag after creating a ``soup`` object?


.. mchoice:: Exercises_bsoup_mc6
   :practice: T
   :answer_a: soup.a.attributes
   :answer_b: soup.link.attrs
   :answer_c: soup.a.attrs
   :answer_d: soup.link.attributes
   :correct: c
   :feedback_a: Try again! 
   :feedback_b: Try again!
   :feedback_c: Correct! This is the correct way to get the first link tag (soup.a) and get a dictionary of all attributes and values for that link tag (.attrs).
   :feedback_d: Try again!

   Which of the following gets the first link tag and returns a dictionary of all attributes and values for that link tag?


.. mchoice:: Exercises_bsoup_mc7
   :practice: T
   :answer_a: all_links = soup.find('a')
   :answer_b: all_links = soup.findall('a')
   :answer_c: all_links = soup.findall('link')
   :answer_d: all_links = soup.find_all('a')
   :answer_e: all_links = soup.find_all('link')
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct! This is the correct way to find all link tags. In HTML, link tags are 'a' tags. For Beautiful Soup, find_all requires an underscore.
   :feedback_e: Try again!

   Which of the following finds all link tags?


.. mchoice:: Exercises_bsoup_mc8
   :practice: T
   :answer_a: all_links = soup.find_all('p', class='b-soup')
   :answer_b: all_links = soup.find_all('paragraph', class='b-soup')
   :answer_c: all_links = soup.find_all('p', class_='b-soup')
   :answer_d: all_links = soup.find_all('paragraph', class_='b-soup')
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! This is the correct way to find all paragraph tags. In HTML, paragraph tags are 'p' tags. For Beautiful Soup, to find a class, class requires an underscore (class_).
   :feedback_d: Try again!

   Which of the following finds all paragraph tags with ``class b-soup``?


.. mchoice:: Exercises_bsoup_mc9
   :practice: T
   :answer_a: loop through the elements of the list and do dictionary[link_tag.text] = a.get('href', None)
   :answer_b: loop through the elements of the list and do dictionary[link_tag.text] = a['href']
   :answer_c: loop through the elements of the list and do dictionary[link_tag.text] = link_tag.get('href', None)
   :answer_d: loop through the elements of the list and do dictionary[link_tag.text] = link_tag[href]
   :correct: c
   :feedback_a: Try again! Although the 'a' tag is the link tag, the variable that contains the href attribute is link_tag.
   :feedback_b: Try again! Although the 'a' tag is the link tag, the variable that contains the href attribute is link_tag. Also, using the format tag['attribute_name'] will cause an error if the tag is not there.
   :feedback_c: Correct! This is the correct way to create a dictionary with link_tag text as keys and href as values. Using .get('attribute_name', None) will not cause an error. It will set None as the default value and grab the value if there is one.
   :feedback_d: Try again! The attribute name is missing quotation marks, and using the format tag['attribute_name'] will cause an error if the tag is not there.

   After creating an empty dictionary and getting a list of all link tags, how does one put the ``link_tag`` text as keys and the ``link_tag`` ``href`` attribute as values for the dictionary?


.. mchoice:: Exercises_bsoup_mc10
   :practice: T
   :answer_a: html
   :answer_b: title
   :answer_c: Site
   :answer_d: There is lots of content.
   :correct: a, b
   :feedback_a: Correct! It returns html as it is the name of a tag that contains the letter 't'.
   :feedback_b: Correct! It returns title as it is the name of a tag that contains the letter 't'.
   :feedback_c: Try again! 'Site' is not a tag.
   :feedback_d: Try again! It isn't a tag.

   Given the below html, after importing re, what will be returned after ``for tag in soup.find_all(re.compile("t")): print(tag.name)`` is run?

   .. code-block:: python

      <html>
         <head>
            <title>Site</title>
         </head>
         <body>
            <p>There is lots of content.</p>
         </body>
      </html>
