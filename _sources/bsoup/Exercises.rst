Multiple Choice Questions
---------------------------

.. mchoice:: Exercises_bsoup_mc1
   :practice: T
   :answer_a: h1
   :answer_b: h1, class='sports'
   :answer_c: h1, class_='sports'
   :answer_d: 'h1', class_='sports'
   :correct: d
   :feedback_a: Try again! Each tag must be in quotes and this answer does not mention the class attribute.
   :feedback_b: Try again! Each tag must be in quotes and the class has to be followed by an underscore.
   :feedback_c: Try again! Each tag must be in quotes.
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
   :feedback_b: Try again! Since soup.find_all(class_='items') returns a list, we cannot use find() as it is a string method that returns the first instance of a specified value in a string.
   :feedback_c: Try again! Since soup.find_all(class_='items') returns a list, we cannot use get() as it is a dictionary method used to return the value of an item with specified key.
   :feedback_d: Try again! Since soup.find_all(class_='items') returns a list, we cannot use find() as it is a string method that returns the first instance of a specified value in a string.
   :feedback_e: Try again! We already called the soup object to get items so all we need to do is index to the first item.

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
   :feedback_a: Correct! It is the correct way to parse content in UniCode.
   :feedback_b: Correct! It is the correct way to parse content in bytes.
   :feedback_c: Try again! .string returns None if there is more than one tag inside of the ``response`` object.

   How does one parse the HTML into a ``BeautifulSoup`` object given a ``response`` object?


.. mchoice:: Exercises_bsoup_mc4
   :practice: T
   :answer_a: soup.p.get('id')
   :answer_b: soup.p.get('id', None)
   :answer_c: soup.p[id]
   :answer_d: soup.p['id']
   :correct: b
   :feedback_a: Try again! If there is no tag 'id', this line will return an error.
   :feedback_b: Correct! This is the correct way to get the first p tag and get the value for the id in the p tag.
   :feedback_c: Try again! The correct way to find a tag is to use the get method().
   :feedback_d: Try again! The correct way to find a tag is to use the get method().

   Which of the following is the best way to get the value for the ``id`` in the first ``p`` tag?


.. mchoice:: Exercises_bsoup_mc5
   :practice: T
   :answer_a: soup.h1
   :answer_b: soup.header1
   :answer_c: soup.h1[0]
   :answer_d: soup.h1[1]
   :correct: a
   :feedback_a: Correct! The header 1 tag is h1, and this is the correct way to get the first header 1 tag after creating a soup object.
   :feedback_b: Try again! There is no tag called header1.
   :feedback_c: Try again! h1 is a tag and index 0 will not give the correct output.
   :feedback_d: Try again! h1 is a tag and index 1 will not give the correct output.

   How does one get the first header 1 tag after creating a ``soup`` object?


.. mchoice:: Exercises_bsoup_mc6
   :practice: T
   :answer_a: soup.a.attributes
   :answer_b: soup.link.attrs
   :answer_c: soup.a.attrs
   :answer_d: soup.link.attributes
   :correct: c
   :feedback_a: Try again! Attributes is not the correct way to get a dictionary of all attributes and values for a tag.
   :feedback_b: Try again! There is no tag 'link', instead we use tag 'a' to find links.
   :feedback_c: Correct! This is the correct way to get the first link tag (soup.a) and get a dictionary of all attributes and values for that link tag (.attrs).
   :feedback_d: Try again! There is no tag 'link', instead we use tag 'a' to find links. Attributes is not the correct way to get a dictionary of all attributes and values for a tag.

   Which of the following gets the first link tag and returns a dictionary of all attributes and values for that link tag?


.. mchoice:: Exercises_bsoup_mc7
   :practice: T
   :answer_a: all_links = soup.find('a')
   :answer_b: all_links = soup.findall('a')
   :answer_c: all_links = soup.findall('link')
   :answer_d: all_links = soup.find_all('a')
   :answer_e: all_links = soup.find_all('link')
   :correct: d
   :feedback_a: Try again! This will only find the first link.
   :feedback_b: Try again! For Beautiful Soup, find_all requires an underscore.
   :feedback_c: Try again! For Beautiful Soup, find_all requires an underscore. There is no tag called 'link'.
   :feedback_d: Correct! This is the correct way to find all link tags. In HTML, link tags are 'a' tags. For Beautiful Soup, find_all requires an underscore.
   :feedback_e: Try again! There is no tag called 'link', instead we use tag 'a' to get links.

   Which of the following finds all link tags?


.. mchoice:: Exercises_bsoup_mc8
   :practice: T
   :answer_a: all_links = soup.find_all('p', class='b-soup')
   :answer_b: all_links = soup.find_all('paragraph', class='b-soup')
   :answer_c: all_links = soup.find_all('p', class_='b-soup')
   :answer_d: all_links = soup.find_all('paragraph', class_='b-soup')
   :correct: c
   :feedback_a: Try again! To find a class in Beautiful Soup, it requires an underscore (class_).
   :feedback_b: Try again! There is no tag called 'paragraph', instead we use tag 'p' to find paragraphs. Also, to find a class in Beautiful Soup, it requires an underscore (class_).
   :feedback_c: Correct! This is the correct way to find all paragraph tags. In HTML, paragraph tags are 'p' tags. For Beautiful Soup, to find a class, class requires an underscore (class_).
   :feedback_d: Try again! There is no tag called 'paragraph', instead we use tag 'p' to find paragraphs.

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
   :feedback_d: Try again! This isn't a tag. This is the content inside a 'p' tag.

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


.. mchoice:: Exercises_bsoup_mc11
    :practice: T
    :answer_a: retrieves and displays the webpage
    :answer_b: parses the html content of the "https://www.nytimes.com" webpage.
    :answer_c: downloads the webpage
    :correct: b
    :feedback_a: Try Again! This does not display the webpage. BeautufulSoup parses webpage retrieved by urllib.rquest.
    :feedback_b: Correct! This parses all html tags and contents of the webpage.
    :feedback_c: Try Again! This does not save files to the computer.

    What does the following block of code do?
    ::

        url = "https://www.nytimes.com"
        html = urllib.request.urlopen(url, context=ctx).read()
        soup = BeautifulSoup(html, 'html.parser')

.. mchoice:: Exercises_bsoup_mc12
    :practice: T
    :answer_a: retrieves and displays the webpage
    :answer_b: downloads the webpage
    :answer_c: prints the images from 'www.nytimes.com'
    :answer_d: prints all the 'img' sources under 'src' from  'www.nytimes.com'
    :correct: d
    :feedback_a: Try Again! Urllib retrieves the webpage but does not display it.
    :feedback_b: Try Again! This does not save files to the computer.
    :feedback_c: Try Again! BeautifulSoup and html.parser cannot display images
    :feedback_d: Correct! It prints  out the image sources listed under 'src' of 'img' tags.

    What does the following block of code print?
    ::

        url = "https://www.nytimes.com/"
        html = urllib.request.urlopen(url).read()
        soup = BeautifulSoup(html, 'html.parser')

        tags = soup('img')
        for tag in tags:
            print(tag.get('src', None))
