Multiple Choice Questions
---------------------------

.. mchoice:: Exercises_bsoup_mc1
   :practice: T
   :answer_a: It is a python library for working with solely HTML files.
   :answer_b: It is a python library for working with solely XML files.
   :answer_c: It is a python library for working with HTML and XML files.
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! Beautiful Soup is a python library that can be used to navigate, search, and modify HTML or XML files.

   What is Beautiful Soup?


.. mchoice:: Exercises_bsoup_mc2
   :practice: T
   :answer_a: response = responses.get(url)
   :answer_b: response = request.get(url)
   :answer_c: response = response.get(url)
   :answer_d: response = requests.get(url)
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct! This is the correct way to get the URL data into a response object.

   How does one get the URL data into a response object?

   .. code-block:: python

      url = "https://en.wikipedia.org/wiki/Starbucks"


.. mchoice:: Exercises_bsoup_mc3
   :practice: T
   :answer_a: soup = BeautifulSoup(response.text, 'html.parser')
   :answer_b: soup = BeautifulSoup(response.content, 'html.parser')
   :answer_c: soup = BeautifulSoup(response.string, 'html.parser')
   :answer_d: Choices A and B
   :answer_e: Choices A and C
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct! Choices A and B are correct ways to parse the HTML into a Beautiful Soup object given a response object.
   :feedback_e: Try again!

   How does one parse the HTML into a Beautiful Soup object given a response object?


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

   Which of the following gets the value for the id in the first p tag?


.. mchoice:: Exercises_bsoup_mc5
   :practice: T
   :answer_a: soup.h1
   :answer_b: soup.header1
   :answer_c: soup.first_header
   :answer_d: soup.first_h
   :correct: a
   :feedback_a: Correct! The header 1 tag is h1, and this is the correct way to get the first header 1 tag after creating a soup object. 
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Try again!

   How does one get the first header 1 tag after creating a soup object?


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
   :feedback_d: Correct! This is the correct way to find all link tags. In HTML, link tags are a tags. For Beautiful Soup, find_all requires an underscore.
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
   :feedback_c: Correct! This is the correct way to find all paragraph tags. In HTML, paragraph tags are p tags. For Beautiful Soup, to find a class, class requires an underscore (class_).
   :feedback_d: Try again!

   Which of the following finds all paragraph tags with class b-soup?


.. mchoice:: Exercises_bsoup_mc9
   :practice: T
   :answer_a: loop through the elements of the list and do dictionary[link_tag.text] = a.get('href', None)
   :answer_b: loop through the elements of the list and do dictionary[link_tag.text] = a['href']
   :answer_c: loop through the elements of the list and do dictionary[link_tag.text] = link_tag.get('href', None)
   :answer_d: loop through the elements of the list and do dictionary[link_tag.text] = link_tag[href]
   :answer_e: loop through the elements of the list and do dictionary[link_tag.href] = link_tag.get('text', None)
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! This is the correct way to create a dictionary with link tag text as keys and href as values.
   :feedback_d: Try again!
   :feedback_e: Try again!

   After creating an empty dictionary and getting a list of all link tags, how does one put the link tag text as keys and the href as values for the dictionary?


.. mchoice:: Exercises_bsoup_mc10
   :practice: T
   :answer_a: import BeautifulSoup
   :answer_b: from bs4 import BeautifulSoup
   :answer_c: from bs import BeautifulSoup
   :answer_d: import BeautifulSoup as bs
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! This command is the correct syntax for verifying installation of and importing Beautiful Soup.
   :feedback_c: Try again!
   :feedback_d: Try again!

   What command is used to verify the installation of and import of Beautiful Soup?
