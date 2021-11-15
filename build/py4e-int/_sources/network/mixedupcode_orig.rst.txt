Mixed-Up Code Questions Original
-----------------------------------

.. parsonsprob:: mixedupcode_network_1
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``decode`` that takes in a parameter ``link`` and returns a string that contains
    the contents of the ``link`` using urllib. Between each word, there should be a space. Also, a space at the end is okay.
    For example, ``decode('http://data.pr4e.org/romeo.txt')`` should return ``'But soft what light through yonder window breaks It is the east and Juliet is the sun Arise fair sun and kill the envious moon Who is already sick and pale with grief '``.
    -----
    import urllib.request
    =====
    def decode(link):
    =====
        fhand = urllib.request.urlopen(link)
    =====
        string = ''
    =====
        for line in fhand:
    =====
            string += line.decode().replace('\n', ' ')
    =====
            string += line.decode().strip() #paired
    =====
        return string
    =====
        return fhand.decode().strip() #paired


.. activecode:: mixedupcode_network_1_ac
    :practice: T
    :autograde: unittest

    Write a function called ``decode`` that takes in a parameter ``link`` and returns a string that contains
    the contents of the ``link`` using urllib. Between each word, there should be a space. Also, a space at the end is okay.
    For example, ``decode('http://data.pr4e.org/romeo.txt')`` should return ``'But soft what light through yonder window breaks It is the east and Juliet is the sun Arise fair sun and kill the envious moon Who is already sick and pale with grief '``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(decode('http://data.pr4e.org/clown.txt'),'the clown ran after the car and the car ran into the tent and the tent fell down on the clown and the car ', "decode('http://data.pr4e.org/clown.txt')")
            self.assertEqual(decode('http://data.pr4e.org/romeo.txt'),'But soft what light through yonder window breaks It is the east and Juliet is the sun Arise fair sun and kill the envious moon Who is already sick and pale with grief ', "decode('http://data.pr4e.org/romeo.txt')")

    myTests().main()

.. parsonsprob:: mixedupcode_network_2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``write_txt`` that takes in a parameter ``link``, retrieves a file from the ``link`` using urllib,
    and writes the contents of the ``link`` to a file called ``'clown.txt'``. For example, ``write_txt('http://data.pr4e.org/clown.txt')`` should create
    a file called ``'clown.txt'`` that has the string ``'the clown ran after the car and the car ran into the tent and the tent fell down on the clown and the car'``.
    -----
    import urllib.request
    import os
    =====
    def write_txt(link):
    =====
        text = urllib.request.urlopen(link).read()
    =====
        fhand = open(os.path.join(os.path.dirname(__file__), 'clown.txt'), 'wb')
    =====
        fhand = open(os.path.join(os.path.dirname(__file__), 'clown.txt'), 'w') #paired
    =====
        fhand.write(text)
    =====
        fhand.close()

.. activecode:: mixedupcode_network_2_ac
    :practice: T
    :autograde: unittest

    Write a function called ``write_txt`` that takes in a parameter ``link``, retrieves a file from the ``link`` using urllib,
    and writes the contents of the ``link`` to a file called ``'clown.txt'``. For example, ``write_txt('http://data.pr4e.org/clown.txt')`` should create
    a file called ``'clown.txt'`` that has the string ``'the clown ran after the car and the car ran into the tent and the tent fell down on the clown and the car'``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            fhand = open(os.path.join(os.path.dirname(__file__), 'clown.txt'), 'r')
            text = fhand.read().strip()
            self.assertEqual(text, 'the clown ran after the car and the car ran into the tent and the tent fell down on the clown and the car', "write_txt('http://data.pr4e.org/clown.txt')")
            fhand.close()

    myTests().main()

.. parsonsprob:: mixedupcode_network_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``count_words`` that takes in a parameter ``link``, retrieves a file from the ``link`` using urllib, and
    returns a dictionary with words as keys and the number of times they appear in the ``link`` as values. For example, ``count_words('http://data.pr4e.org/romeo.txt')``
    should return ``{'But': 1, 'soft': 1, 'what': 1, 'light': 1, 'through': 1, 'yonder': 1, 'window': 1, 'breaks': 1, 'It': 1, 'is': 3, 'the': 3, 'east': 1, 'and': 3, 'Juliet': 1, 'sun': 2, 'Arise': 1, 'fair': 1, 'kill': 1, 'envious': 1, 'moon': 1, 'Who': 1, 'already': 1, 'sick': 1, 'pale': 1, 'with': 1, 'grief': 1}``.
    -----
    import urllib.request
    =====
    def count_words(link):
    =====
        fhand = urllib.request.urlopen(link)
    =====
        fhand = urllib.request.urlopen(link).read() #paired
    =====
        counts = {}
    =====
        for line in fhand:
    =====
            words = line.decode().split()
    =====
            words = line.decode() #paired
    =====
            words = line.split() #paired
    =====
            for word in words:
    =====
                counts[word] = counts.get(word, 0) + 1
    =====
        return counts

.. activecode:: mixedupcode_network_3_ac
    :practice: T
    :autograde: unittest

    Write a function called ``count_words`` that takes in a parameter ``link``, retrieves a file from the ``link`` using urllib, and
    returns a dictionary with words as keys and the number of times they appear in the ``link`` as values. For example, ``count_words('http://data.pr4e.org/romeo.txt')``
    should return ``{'But': 1, 'soft': 1, 'what': 1, 'light': 1, 'through': 1, 'yonder': 1, 'window': 1, 'breaks': 1, 'It': 1, 'is': 3, 'the': 3, 'east': 1, 'and': 3, 'Juliet': 1, 'sun': 2, 'Arise': 1, 'fair': 1, 'kill': 1, 'envious': 1, 'moon': 1, 'Who': 1, 'already': 1, 'sick': 1, 'pale': 1, 'with': 1, 'grief': 1}``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(count_words('http://data.pr4e.org/romeo.txt'),{'But': 1, 'soft': 1, 'what': 1, 'light': 1, 'through': 1, 'yonder': 1, 'window': 1, 'breaks': 1, 'It': 1, 'is': 3, 'the': 3, 'east': 1, 'and': 3, 'Juliet': 1, 'sun': 2, 'Arise': 1, 'fair': 1, 'kill': 1, 'envious': 1, 'moon': 1, 'Who': 1, 'already': 1, 'sick': 1, 'pale': 1, 'with': 1, 'grief': 1}, "count_words('http://data.pr4e.org/romeo.txt')")
            self.assertEqual(count_words('http://data.pr4e.org/clown.txt'),{'the': 7, 'clown': 2, 'ran': 2, 'after': 1, 'car': 3, 'and': 3, 'into': 1, 'tent': 2, 'fell': 1, 'down': 1, 'on': 1},"count_words('http://data.pr4e.org/clown.txt')")

    myTests().main()

.. parsonsprob:: mixedupcode_network_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``write_jpg`` that takes in a parameter ``img_link``, retrieves a file from the ``img_link`` using urllib,
    and writes the contents of the ``img_link`` to a file called ``'cover.jpg'``. For example, ``write_jpg('http://data.pr4e.org/cover3.jpg')`` should create
    a file called ``'cover.jpg'`` that has an image of the cover for ``"PYTHON FOR EVERYBODY"``.
    -----
    import urllib.request
    import os
    =====
    def write_jpg(img_link):
    =====
        img = urllib.request.urlopen(img_link).read()
    =====
        fhand = open(os.path.join(os.path.dirname(__file__), 'cover.jpg'), 'wb')
    =====
        fhand = open(os.path.join(os.path.dirname(__file__), 'cover.jpg'), 'w') #paired
    =====
        fhand = open(os.path.join(os.path.dirname(__file__), 'cover.jpg'), 'r') #paired
    =====
        fhand.write(img)
    =====
        fhand.close()

.. activecode:: mixedupcode_network_4_ac
    :practice: T
    :autograde: unittest

    Write a function called ``write_jpg`` that takes in a parameter ``img_link``, retrieves a file from the ``img_link`` using urllib,
    and writes the contents of the ``img_link`` to a file called ``'cover.jpg'``. For example, ``write_jpg('http://data.pr4e.org/cover3.jpg')`` should create
    a file called ``'cover.jpg'`` that has an image of the cover for ``"PYTHON FOR EVERYBODY"``.
    ~~~~


.. parsonsprob:: mixedupcode_network_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``num_chars`` that takes in a parameter ``link``, retrieves a file from the ``link`` using urllib, and
    returns the number of characters in ``link`` in the format ``"(num) characters"``. For example, ``num_chars('http://data.pr4e.org/romeo-full.txt')``
    should return ``"8864 characters"``.
    -----
    import urllib.request
    =====
    def num_chars(link):
    =====
        txt = urllib.request.urlopen(link)
    =====
        num = len(txt.read())
    =====
        num = len(txt.decode()) #paired
    =====
        num = len(txt) #paired
    =====
        return str(num) + ' characters'
    =====
        return num + ' characters' #paired

.. activecode:: mixedupcode_network_5_ac
    :practice: T
    :autograde: unittest

    Write a function called ``num_chars`` that takes in a parameter ``link``, retrieves a file from the ``link`` using urllib, and
    returns the number of characters in ``link`` in the format ``"(num) characters"``. For example, ``num_chars('http://data.pr4e.org/romeo-full.txt')``
    should return ``"8864 characters"``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(num_chars('http://data.pr4e.org/romeo-full.txt'),"8864 characters", "num_chars('http://data.pr4e.org/romeo-full.txt')")
            self.assertEqual(num_chars('http://data.pr4e.org/clown.txt'),"106 characters","num_chars('http://data.pr4e.org/clown.txt')")

    myTests().main()

.. parsonsprob:: mixedupcode_network_6
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``contents`` that takes in a parameter ``link``, retrieves a file from the ``link`` using sockets, and returns as a string
    the contents of the ``link`` (specifically 10000 characters). For example, ``contents('http://data.pr4e.org/clown.txt')`` should return
    ``"HTTP/1.1 200 OK\nDate: Thu, 12 Aug 2021 01:24:15 GMT\nServer: Apache/2.4.18 (Ubuntu)\nLast-Modified: Sat, 13 May 2017 11:22:22 GMT\nETag: '6a-54f6609240717'\nAccept-Ranges: bytes\nContent-Length: 106\nCache-Control: max-age=0, no-cache, no-store, must-revalidate\nPragma: no-cache\nExpires: Wed, 11 Jan 1984 05:00:00 GMT\nConnection: close\nContent-Type: text/plain\n\nthe clown ran after the car and the car ran into the tent and the tent fell down on the clown and the car\n"``.
    -----
    import socket
    =====
    def contents(link):
    =====
        mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    =====
        mysock.connect(('data.pr4e.org', 80))
    =====
        cmd = 'GET ' + link + ' HTTP/1.0\r\n\r\n'
    =====
        cmd = 'GET ' + link + ' HTTP/1.0\r\n\r\n'.encode() #paired
    =====
        cmd = cmd.encode()
    =====
        mysock.send(cmd)
    =====
        data = mysock.recv(10000)
    =====
        data = mysock.recv() #paired
    =====
        return data.decode()
    =====
        return data #paired
    =====
        mysock.close()

.. activecode:: mixedupcode_network_6_ac
    :practice: T
    :autograde: unittest

    Write a function called ``contents`` that takes in a parameter ``link``, retrieves a file from the ``link`` using sockets, and returns as a string
    the contents of the ``link`` (specifically 10000 characters). For example, ``contents('http://data.pr4e.org/clown.txt')`` should return
    ``"HTTP/1.1 200 OK\nDate: Thu, 12 Aug 2021 01:24:15 GMT\nServer: Apache/2.4.18 (Ubuntu)\nLast-Modified: Sat, 13 May 2017 11:22:22 GMT\nETag: '6a-54f6609240717'\nAccept-Ranges: bytes\nContent-Length: 106\nCache-Control: max-age=0, no-cache, no-store, must-revalidate\nPragma: no-cache\nExpires: Wed, 11 Jan 1984 05:00:00 GMT\nConnection: close\nContent-Type: text/plain\n\nthe clown ran after the car and the car ran into the tent and the tent fell down on the clown and the car\n"``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(contents('http://data.pr4e.org/romeo.txt'),"HTTP/1.1 200 OK\nDate: Thu, 12 Aug 2021 01:24:14 GMT\nServer: Apache/2.4.18 (Ubuntu)\nLast-Modified: Sat, 13 May 2017 11:22:22 GMT\nETag: 'a7-54f6609245537'\nAccept-Ranges: bytes\nContent-Length: 167\nCache-Control: max-age=0, no-cache, no-store, must-revalidate\nPragma: no-cache\nExpires: Wed, 11 Jan 1984 05:00:00 GMT\nConnection: close\nContent-Type: text/plain\nBut soft what light through yonder window breaks\nIt is the east and Juliet is the sun\nArise fair sun and kill the envious moon\nWho is already sick and pale with grief\n", "contents('http://data.pr4e.org/romeo.txt')")
            self.assertEqual(contents('http://data.pr4e.org/clown.txt'),"HTTP/1.1 200 OK\nDate: Thu, 12 Aug 2021 01:24:15 GMT\nServer: Apache/2.4.18 (Ubuntu)\nLast-Modified: Sat, 13 May 2017 11:22:22 GMT\nETag: '6a-54f6609240717'\nAccept-Ranges: bytes\nContent-Length: 106\nCache-Control: max-age=0, no-cache, no-store, must-revalidate\nPragma: no-cache\nExpires: Wed, 11 Jan 1984 05:00:00 GMT\nConnection: close\nContent-Type: text/plain\n\nthe clown ran after the car and the car ran into the tent and the tent fell down on the clown and the car\n","contents('http://data.pr4e.org/clown.txt')")

    myTests().main()

.. parsonsprob:: mixedupcode_network_7
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``reg_num_links`` that takes in a parameter ``url`` and returns the number of 'href'
    attributes that start with 'http' using regular expressions. Since websites are frequently updated,
    the returned number may change as links get added and deleted.
    -----
    import urllib.request
    import re
    =====
    def reg_num_links(url):
    =====
        html = urllib.request.urlopen(url).read()
    =====
        html = urllib.request.urlopen(url) #paired
    =====
        links = re.findall(b'href="(http[s]?://.*?)"', html)
    =====
        links = re.findall(b'href="(http.*)"', html) #paired
    =====
        return len(links)

.. activecode:: mixedupcode_network_7_ac
    :practice: T
    :autograde: unittest

    Write a function called ``reg_num_links`` that takes in a parameter ``url`` and returns the number of 'href'
    attributes that start with 'http' using regular expressions. Since websites are frequently updated,
    the returned number may change as links get added and deleted.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            list1 = ['https://www.nytimes.com/', 'https://www.washingtonpost.com/']
            for link in list1:
                html = urllib.request.urlopen(link).read()
                links = re.findall(b'href="(http[s]?://.*?)"', html)
                length = len(links)
                self.assertEqual(reg_num_links(link),length,"reg_num_links(link)")

    myTests().main()

.. parsonsprob:: mixedupcode_network_8
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

.. activecode:: mixedupcode_network_8_ac
    :practice: T
    :autograde: unittest

    Write a function called ``bsoup_num_links`` that takes in a parameter ``url`` and returns the number of 'href'
    attributes that start with 'http' using BeautifulSoup. Since websites are frequently updated,
    the returned number may change as links get added and deleted.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

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

    myTests().main()

.. parsonsprob:: mixedupcode_network_9
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

.. activecode:: mixedupcode_network_9_ac
    :practice: T
    :autograde: unittest

    Write a function called ``img_links`` that takes in a parameter ``url`` and returns a list that contains all image links
    using BeautifulSoup. Since websites are frequently updated, the returned list of image links may change as image links get added and deleted.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

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

    myTests().main()

.. parsonsprob:: mixedupcode_network_10
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


.. activecode:: mixedupcode_network_10_ac
    :practice: T
    :autograde: unittest

    Write a function called ``span_attrs`` that takes in a parameter ``url`` and returns a list of dictionaries using BeautifulSoup.
    Each dictionary is equivalent to each span tag. The keys of the dictionary are the attributes of the span tag,
    and the values of the dictionary are the values of the attributes. Since websites are frequently updated,
    the returned list of dictionaries may change as span tags, attributes, and values get added, deleted, or modified.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

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

    myTests().main()
