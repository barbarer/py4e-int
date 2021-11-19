Mixed-Up Code Questions
------------------------
.. parsonsprob:: bsoup_mixedupcode_1
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``img_links`` that takes in a parameter ``url`` and returns a list of all urls for all the images on the page.
    Since websites are frequently updated, the returned list of image links may change as image links get added and deleted.
    -----
    import requests
    from bs4 import BeautifulSoup
    =====
    def img_links(url):
        lst = []
    =====
        r = requests.get(url)
    =====
        soup = BeautifulSoup(r.content, 'html.parser')
    =====
        tags = soup.find_all('img')
    =====
        tags = soup.find_all('a') #paired
    =====
        for tag in tags:
    =====
            lst.append(tag.get('src', None))
    =====
            lst.append(tag.get('href', None)) #paired
    =====
        return lst


.. activecode:: bsoup_mixedupcode_1_ac_v2
    :practice: T
    :nocodelens:
    :language: python3
    :autograde: unittest

    Write a function called ``img_links`` that takes in a parameter ``url`` and returns a list of all urls for all the images on the page.
    Since websites are frequently updated, the returned list of image links may change as image links get added and deleted.
    ~~~~


    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):
            list1 = []
            resp = requests.get('https://en.wikipedia.org/wiki/Michigan_Stadium')
            soup = BeautifulSoup(resp.content, 'html.parser')
            tags = soup.find_all('img')
            for tag in tags:
                list1.append(tag.get('src', None))
            self.assertEqual(img_links('https://en.wikipedia.org/wiki/Michigan_Stadium'),list1,"img_links('https://en.wikipedia.org/wiki/Michigan_Stadium')")

    unittest.main()

.. parsonsprob:: bsoup_mixedupcode_2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``shapiro_link`` that takes in a parameter ``url``
    and returns the URL from the University of Michigan wikipedia page that links to the Shapiro Undergraduate Library.
    For example, ``shapiro_link('https://en.wikipedia.org/wiki/University_of_Michigan')`` should return ``"https://en.wikipedia.org/wiki/Shapiro_Undergraduate_Library"``.
    -----
    import requests
    =====
    from bs4 import BeautifulSoup
    =====
    def shapiro_link(url):
    =====
        r = requests.get(url)
    =====
        soup = BeautifulSoup(r.content, 'html.parser')
    =====
        tag = soup.find('a', {'title': 'Shapiro Undergraduate Library'})
    =====
        tag = soup.find_all('a', {'title': 'Shapiro Undergraduate Library'}) #paired
    =====
        return 'https://en.wikipedia.org' + tag.get('href')
    =====
        return 'https://en.wikipedia.org' + tag.text #paired


.. activecode:: bsoup_mixedupcode_2_ac_v2
    :practice: T
    :nocodelens:
    :language: python3
    :autograde: unittest

    Write a function called ``shapiro_link`` that takes in a parameter ``url``
    and returns the URL from the University of Michigan wikipedia page that links to the Shapiro Undergraduate Library.
    For example, ``shapiro_link('https://en.wikipedia.org/wiki/University_of_Michigan')`` should return ``"https://en.wikipedia.org/wiki/Shapiro_Undergraduate_Library"``.
    ~~~~


    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):
            self.assertEqual(shapiro_link('https://en.wikipedia.org/wiki/University_of_Michigan'),"https://en.wikipedia.org/wiki/Shapiro_Undergraduate_Library","shapiro_link('https://en.wikipedia.org/wiki/University_of_Michigan')")

    unittest.main()


.. parsonsprob:: bsoup_mixedupcode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``link_or_none`` that takes in a parameter ``url`` and returns a list of all the links in the ``a tags``
    that are in a ``div tag`` with the class ``column`` and id ``news-items``. If there isn't a link in the ``a tag`` that's in a ``div tag``
    with the class ``column`` and id ``news-items``, have None take its place in the list. Since websites are frequently updated,
    the returned list of links may change as links get added and deleted.
    -----
    from bs4 import BeautifulSoup
    import requests
    =====
    def link_or_none(url):
    =====
        lst = []
    =====
        r = requests.get(url)
    =====
        soup = BeautifulSoup(r.content, 'html.parser')
    =====
        div = soup.find('div', class_='column', id='news-items')
    =====
        div = soup.find('div', class='column', id='news-items') #paired
    =====
        tags = div.find_all('a')
    =====
        tags = div.find('a') #paired
    =====
        for tag in tags:
    =====
            lst.append(tag.get('href', None))
    =====
            lst.append(tag.get(href, None)) #paired
    =====
        return lst

.. activecode:: bsoup_mixedupcode_3_ac_v2
    :practice: T
    :nocodelens:
    :language: python3
    :autograde: unittest

    Write a function called ``link_or_none`` that takes in a parameter ``url`` and returns a list of all the links in the ``a tags``
    that are in a ``div tag`` with the class ``column`` and id ``news-items``. If there isn't a link in the ``a tag`` that's in a ``div tag``
    with the class ``column`` and id ``news-items``, have None take its place in the list. Since websites are frequently updated,
    the returned list of links may change as links get added and deleted.
    ~~~~


    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):
            lst = []
            r = requests.get('https://umich.edu')
            soup = BeautifulSoup(r.content, 'html.parser')
            div = soup.find('div', class_='column', id='news-items')
            tags = div.find_all('a')
            for tag in tags:
                lst.append(tag.get('href', None))
            self.assertEqual(link_or_none('https://umich.edu'),lst,"link_or_none('https://umich.edu')")

    unittest.main()


.. parsonsprob:: bsoup_mixedupcode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``descriptions`` that takes in parameters ``base_url`` and ``endings``
    and returns a dictionary with each ending as keys and their description as values. For this question,
    get a soup from each URL with an ending from ``endings``, get the first ``div tag`` with ``class = 'body wysiwyg-content'``,
    and then extract the text from the first paragraph. That text will be the description for the dictionary value.
    For example, as of 2021, ``descriptions('https://www.si.umich.edu/programs/courses/', ['106', '206', '330'])`` should return
    ``{'106': 'Introduction to programming with a focus on applications in informatics.  Covers the fundamental elements of a modern programming language and how to access data on the internet.  Explores how humans and technology complement one another, including techniques used to coordinate groups of people working together on software development.', '206': 'Students develop their core programming and software development skills, to build competency and literacy in important areas that includes basic data structures, debugging and testing, using distributed code repositories, pattern matching, and programmatic gathering and processing of data. Applications in assignments and labs are oriented around data manipulation.', '330': "Data analysis is crucial to application evaluation, as well as understanding users' information needs.  When the data required are numerous we need an automated way to gather, parse, and summarize the data.  In this course, you will learn to use Python and its modules to accomplish these tasks."}``.
    -----
    from bs4 import BeautifulSoup
    import requests
    =====
    def descriptions(base_url, endings):
    =====
        dictionary = {}
    =====
        for ending in endings:
    =====
            url = base_url + ending
    =====
            resp = requests.get(url)
    =====
            soup = BeautifulSoup(resp.content, 'html.parser')
    =====
            div = soup.find('div', class_='body wysiwyg-content')
    =====
            p = div.find('p')
    =====
            p = div.find('paragraph') #paired
    =====
            info = p.text
    =====
            dictionary[ending] = info
    =====
            dictionary[endings] = info #paired
    =====
        return dictionary


.. activecode:: bsoup_mixedupcode_4_ac_v2
    :practice: T
    :nocodelens:
    :language: python3
    :autograde: unittest

    Write a function called ``descriptions`` that takes in parameters ``base_url`` and ``endings``
    and returns a dictionary with each ending as keys and their description as values. For this question,
    get a soup from each URL with an ending from ``endings``, get the first ``div tag`` with ``class = 'body wysiwyg-content'``,
    and then extract the text from the first paragraph. That text will be the description for the dictionary value.
    For example, as of 2021, ``descriptions('https://www.si.umich.edu/programs/courses/', ['106', '206', '330'])`` should return
    ``{'106': 'Introduction to programming with a focus on applications in informatics.  Covers the fundamental elements of a modern programming language and how to access data on the internet.  Explores how humans and technology complement one another, including techniques used to coordinate groups of people working together on software development.', '206': 'Students develop their core programming and software development skills, to build competency and literacy in important areas that includes basic data structures, debugging and testing, using distributed code repositories, pattern matching, and programmatic gathering and processing of data. Applications in assignments and labs are oriented around data manipulation.', '330': "Data analysis is crucial to application evaluation, as well as understanding users' information needs.  When the data required are numerous we need an automated way to gather, parse, and summarize the data.  In this course, you will learn to use Python and its modules to accomplish these tasks."}``.
    ~~~~



    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):
            endings = ['106', '206', '330']
            dictionary = {}
            for ending in endings:
                url = 'https://www.si.umich.edu/programs/courses/' + ending
                resp = requests.get(url)
                soup = BeautifulSoup(resp.content, 'html.parser')
                div = soup.find('div', class_='body wysiwyg-content')
                p = div.find('p')
                info = p.text
                dictionary[ending] = info
            self.assertEqual(descriptions('https://www.si.umich.edu/programs/courses/', ['106', '206', '330']),dictionary,"descriptions('https://www.si.umich.edu/programs/courses/', ['106', '206', '330'])")

    unittest.main()

.. parsonsprob:: bsoup_mixedupcode_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``url_links`` that takes in a parameter ``url`` and returns a list of all url links from the ``url``.
    Since websites are frequently updated, the returned list of links may change as links get added and deleted.
    -----
    import requests
    from bs4 import BeautifulSoup
    =====
    def url_links(url):
    =====
        lst = []
    =====
        r = requests.get(url)
    =====
        soup = BeautifulSoup(r.content, 'html.parser')
    =====
        tags = soup.find_all('a')
    =====
        tags = soup.find('a') #paired
    =====
        for tag in tags:
    =====
            lst.append(tag.get('href', None))
    =====
            lst.append(tag.get('src', None)) #paired
    =====
        return lst

.. activecode:: bsoup_mixedupcode_5_ac_v2
    :practice: T
    :nocodelens:
    :language: python3
    :autograde: unittest

    Write a function called ``url_links`` that takes in a parameter ``url`` and returns a list of all url links from the ``url``.
    Since websites are frequently updated, the returned list of links may change as links get added and deleted.
    ~~~~


    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):
            lst = []
            r = requests.get('https://www.si.umich.edu/programs/student-life-umsi')
            soup = BeautifulSoup(r.content, 'html.parser')
            tags = soup.find_all('a')
            for tag in tags:
                lst.append(tag.get('href', None))
            self.assertEqual(url_links('https://www.si.umich.edu/programs/student-life-umsi'),lst,"url_links('https://www.si.umich.edu/programs/student-life-umsi')")

    unittest.main()


.. parsonsprob:: bsoup_mixedupcode_6
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``bsoup_num_links`` that takes in a parameter ``url`` and returns the number of 'href'
    attributes that start with 'http' using BeautifulSoup. Since websites are frequently updated,
    the returned number may change as links get added and deleted.
    -----
    import requests
    from bs4 import BeautifulSoup
    =====
    def bsoup_num_links(url):
    =====
        list1 = []
    =====
        resp = requests.get(url)
    =====
        soup = BeautifulSoup(resp.content, 'html.parser')
    =====
        tags = soup.find_all(href=True)
    =====
        tags = soup.find_all(href) #paired
    =====
        tags = soup.find_all('href'=True) #paired
    =====
        tags = soup.find_all('href') #paired
    =====
        for tag in tags:
    =====
            if tag.get('href', None).startswith('http'):
    =====
            if tag.startswith('http'): #paired
    =====
                list1.append((tag.get('href', None)))
    =====
        return len(list1)

.. activecode:: bsoup_mixedupcode_6_ac_v2
    :practice: T
    :nocodelens:
    :language: python3
    :autograde: unittest

    Write a function called ``bsoup_num_links`` that takes in a parameter ``url`` and returns the number of 'href'
    attributes that start with 'http' using BeautifulSoup. Since websites are frequently updated,
    the returned number may change as links get added and deleted.
    ~~~~

    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):
            list1 = ['https://www.nytimes.com/', 'https://www.washingtonpost.com/']
            for link in list1:
                list2 = []
                resp = requests.get(link)
                soup = BeautifulSoup(resp.content, 'html.parser')
                tags = soup.find_all(href=True)
                for tag in tags:
                    if tag.get('href', None).startswith('http'):
                        list2.append((tag.get('href', None)))
                length = len(list2)
                self.assertEqual(bsoup_num_links(link),length,"bsoup_num_links(link)")

    unittest.main()

.. parsonsprob:: bsoup_mixedupcode_7
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``img_links`` that takes in a parameter ``url`` and returns a list that contains all image links
    using BeautifulSoup. Since websites are frequently updated, the returned list of image links may change as image links get added and deleted.
    -----
    import requests
    from bs4 import BeautifulSoup
    =====
    def img_links(url):
    =====
        list1 = []
    =====
        resp = requests.get(url)
    =====
        soup = BeautifulSoup(resp.content, 'html.parser')
    =====
        tags = soup.find_all('img')
    =====
        tags = soup.findall('img') #paired
    =====
        for tag in tags:
    =====
            list1.append(tag.get('src', None))
    =====
            list1.append(tag) #paired
    =====
        return list1

.. activecode:: bsoup_mixedupcode_7_ac_v2
    :practice: T
    :nocodelens:
    :language: python3
    :autograde: unittest

    Write a function called ``img_links`` that takes in a parameter ``url`` and returns a list that contains all image links
    using BeautifulSoup. Since websites are frequently updated, the returned list of image links may change as image links get added and deleted.
    ~~~~

    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):
            lst = ['https://www.nytimes.com/', 'https://canvas.it.umich.edu/']
            for link in lst:
                list1 = []
                resp = requests.get(link)
                soup = BeautifulSoup(resp.content, 'html.parser')
                tags = soup.find_all('img')
                for tag in tags:
                    list1.append(tag.get('src', None))
                self.assertEqual(img_links(link),list1,"img_links(link)")

    unittest.main()

.. parsonsprob:: bsoup_mixedupcode_8
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``span_attrs`` that takes in a parameter ``url`` and returns a list of dictionaries using BeautifulSoup.
    Each dictionary is equivalent to each span tag. The keys of the dictionary are the attributes of the span tag,
    and the values of the dictionary are the values of the attributes. Since websites are frequently updated,
    the returned list of dictionaries may change as span tags, attributes, and values get added, deleted, or modified.
    -----
    import requests
    from bs4 import BeautifulSoup
    =====
    def span_attrs(url):
    =====
        list1 = []
    =====
        resp = requests.get(url)
    =====
        soup = BeautifulSoup(resp.content, "html.parser")
    =====
        tags = soup.find_all('span')
    =====
        tags = soup.find_all(span) #paired
    =====
        for tag in tags:
    =====
            list1.append(tag.attrs)
    =====
            list1.append(tag.attributes) #paired
    =====
            list1.append({tag.attrs: tag.values}) #paired
    =====
            list1.append({tag.attrs(): tag.values()}) #paired
    =====
            list1.append({tag.attributes: tag.values}) #paired
    =====
            list1.append({tag.attributes(): tag.values()}) #paired
    =====
        return list1


.. activecode:: bsoup_mixedupcode_8_ac_v2
    :practice: T
    :nocodelens:
    :language: python3
    :autograde: unittest

    Write a function called ``span_attrs`` that takes in a parameter ``url`` and returns a list of dictionaries using BeautifulSoup.
    Each dictionary is equivalent to each span tag. The keys of the dictionary are the attributes of the span tag,
    and the values of the dictionary are the values of the attributes. Since websites are frequently updated,
    the returned list of dictionaries may change as span tags, attributes, and values get added, deleted, or modified.
    ~~~~

    ====
    import unittest

    class myTests(unittest.TestCase):

        def testOne(self):
            lst = ['https://www.nytimes.com/', 'https://www.w3schools.com/TAGS/default.ASP']
            for link in lst:
                list1 = []
                resp = requests.get(link)
                soup = BeautifulSoup(resp.content, "html.parser")
                tags = soup.find_all('span')
                for tag in tags:
                    list1.append(tag.attrs)
                self.assertEqual(span_attrs(link),list1,"span_attrs(link)")

    unittest.main()
