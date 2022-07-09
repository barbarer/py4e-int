Write Code Questions
---------------------
#.
    .. tabbed:: bsoup_writecode1_v2

        .. tab:: Question

            .. activecode:: bsoup_writecode1q_v2
                :practice: T
                :nocodelens:
                :language: python3
                :autograde: unittest

                Write a function called ``cur_stud_link`` that takes in a parameter ``url``
                and uses BeautifulSoup to return the URL that links to Current Students in the Navigation Bar.
                For example, ``cur_stud_link('https://umich.edu/')`` should return ``"https://umich.edu/current-students/"``.
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                def cur_stud_link(url):

                ====
                import unittest
                import requests
                from bs4 import BeautifulSoup

                def f_cur_stud_link(url):
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')

                    # inspect Current Students to get the details
                    text = soup.find('a', text = "Current Students")
                    info = text.get('href')
                    all_info = "https://umich.edu" + info
                    return all_info

                class myTests(unittest.TestCase):

                    def testOne(self):
                        url = 'https://umich.edu/'
                        self.assertEqual(cur_stud_link(url), f_cur_stud_link(url), f'cur_stud_link({url})')

                unittest.main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode1a_v2
                :optional:
                :language: python3
                :autograde: unittest

                Write a function called ``cur_stud_link`` that takes in a parameter ``url``
                and uses BeautifulSoup to return the URL that links to Current Students in the Navigation Bar.
                For example, ``cur_stud_link('https://umich.edu/')`` should return ``"https://umich.edu/current-students/"``.
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                def cur_stud_link(url):
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')

                    # inspect Current Students to get the details
                    text = soup.find('a', text = "Current Students")
                    info = text.get('href')
                    all_info = "https://umich.edu" + info
                    return all_info

                print(cur_stud_link('https://umich.edu/'))

#.
    .. activecode:: bsoup_writecode2q_v2
        :practice: T
        :nocodelens:
        :language: python3
        :autograde: unittest

        Write a function called ``headings`` that takes in a parameter ``url`` and uses BeautifulSoup to return a list of all heading names (not subheadings) from the
        Contents box (History, Emergence of MOOC providers, Student experience and pedagogy, etc.). For example, ``headings('https://en.wikipedia.org/wiki/Massive_open_online_course')``
        should return a list of headings like: ``['History', 'Emergence of MOOC providers', 'Student experience and pedagogy', 'Information architecture', 'Industry', 'Benefits', 'Challenges and criticisms', 'See also', 'References', 'Further reading', 'External links']``.
        Since we are scraping a live site the actual values may be different.
        ~~~~
        from bs4 import BeautifulSoup
        import requests

        def headings(url):

        ====
        import unittest
        import requests
        from bs4 import BeautifulSoup

        def f_headings(url):
            h_list = []
            r = requests.get(url)
            soup = BeautifulSoup(r.text, 'html.parser')
            hs = soup.find_all('li', class_='toclevel-1')
            for tag in hs:
                a_tag = tag.find('a')
                h = a_tag.find('span', class_='toctext').text
                h_list.append(h)
            return h_list

        class myTests(unittest.TestCase):

            def testOne(self):
                url = 'https://en.wikipedia.org/wiki/Massive_open_online_course'
                self.assertEqual(headings(url),f_headings(url),f"headings({url})")

        unittest.main()

#.
    .. tabbed:: bsoup_writecode3_v2

        .. tab:: Question

            .. activecode:: bsoup_writecode3q_v2
                :practice: T
                :nocodelens:
                :language: python3
                :autograde: unittest

                Write a function called ``coursera_dict`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the Coursera enrollees table,
                and returns a dictionary with Country as keys and Percentage as values. For example, ``coursera_dict('https://en.wikipedia.org/wiki/Massive_open_online_course')``
                should return a dictionary like: ``{'United States': '27.7%', 'India': '8.8%', 'Brazil': '5.1%', 'United Kingdom': '4.4%', 'Spain': '4.0%', 'Canada': '3.6%', 'Australia': '2.3%', 'Russia': '2.2%', 'Rest of world': '41.9%'}``.  Since we are scraping a live site the actual values may be different.
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                def coursera_dict(url):

                ====
                import unittest
                from bs4 import BeautifulSoup
                import requests

                def f_coursera_dict(url):
                    coursera_enrollees = {}
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')
                    tag = soup.find('table', class_='wikitable')
                    rows = tag.find_all('tr')
                    for row in rows[1:]:
                        cols = row.find_all("td")
                        key = cols[0].text
                        value = cols[1].text.rstrip()
                        coursera_enrollees[key] = value
                    return coursera_enrollees

                class myTests(unittest.TestCase):

                    def testOne(self):
                        url = 'https://en.wikipedia.org/wiki/Massive_open_online_course'
                        self.assertEqual(coursera_dict(url), f_coursera_dict(url), f'coursera_dict({url})')

                unittest.main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode3a_v2
                :optional:
                :language: python3
                :autograde: unittest

                Write a function called ``coursera_dict`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the Coursera enrollees table,
                and returns a dictionary with Country as keys and Percentage as values. For example, ``coursera_dict('https://en.wikipedia.org/wiki/Massive_open_online_course')``
                should return ``{'United States': '27.7%', 'India': '8.8%', 'Brazil': '5.1%', 'United Kingdom': '4.4%', 'Spain': '4.0%', 'Canada': '3.6%', 'Australia': '2.3%', 'Russia': '2.2%', 'Rest of world': '41.9%'}``.
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                def coursera_dict(url):
                    coursera_enrollees = {}
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')
                    tag = soup.find('table', class_='wikitable')
                    rows = tag.find_all('tr')
                    for row in rows[1:]:
                        cols = row.find_all("td")
                        key = cols[0].text
                        value = cols[1].text.rstrip()
                        coursera_enrollees[key] = value
                    return coursera_enrollees

                print(coursera_dict('https://en.wikipedia.org/wiki/Massive_open_online_course'))

#.
    .. activecode:: bsoup_writecode4q_v2
        :practice: T
        :nocodelens:
        :language: python3
        :autograde: unittest

        Write a function called ``types`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the Summary of Python 3's built-in types table,
        and returns a list of the types. For example, ``types('https://en.wikipedia.org/wiki/Python_(programming_language)')``
        should return a list of string like: ``['bool', 'bytearray', 'bytes', 'complex', 'dict', 'types.EllipsisType', 'float', 'frozenset', 'int', 'list', 'types.NoneType', 'types.NotImplementedType', 'range', 'set', 'str', 'tuple']``.  Since we are scraping a live site the actual values may be different.
        ~~~~
        from bs4 import BeautifulSoup
        import requests

        def types(url):

        ====
        import unittest
        from bs4 import BeautifulSoup
        import requests

        def f_types(url):
            types = []
            r = requests.get(url)
            soup = BeautifulSoup(r.text, 'html.parser')
            table = soup.find('table', class_ = 'wikitable')
            rows = table.find_all('tr')
            for row in rows[1:]:
                all_columns = row.find_all("td")
                p_type = all_columns[0]
                code = p_type.find('code')
                one_type = code.text.rstrip()
                types.append(one_type)
            return types

        class myTests(unittest.TestCase):

            def testOne(self):
                url = 'https://en.wikipedia.org/wiki/Python_(programming_language)'
                self.assertEqual(types(url), f_types(url), f'types({url})')

        unittest.main()


#.
    .. tabbed:: bsoup_writecode5_v2

        .. tab:: Question

            .. activecode:: bsoup_writecode5q_v2
                :practice: T
                :nocodelens:
                :language: python3
                :autograde: unittest

                Write a function called ``restaurants_list`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the 12 essential Ann Arbor restaurants,
                and returns a list of the 12 best Ann Arbor restaurants. For example, ``restaurants_list('https://detroit.eater.com/maps/best-ann-arbor-restaurants')``
                should return a list of restaurants like: ``['1. Salt Springs Brewery', "2. Knight's Steakhouse", '3. The Last Word', "4. Krazy Jim's Blimpy Burger", '5. Blue Llama Jazz Club', '6. Spencer', '7. Miss Kim', "8. Zingerman's Delicatessen", '9. Tomukun Noodle Bar', '10. Ricewood', '11. Bellflower', "12. Ma Lou's Fried Chicken"]``.  Since we are scraping a live site the actual values may be different.
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                def restaurants_list(url):

                ====
                import unittest
                from bs4 import BeautifulSoup
                import requests

                def f_restaurants_list(url):
                    r_list = []
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')
                    rest_list = soup.find_all('div', class_ = "c-mapstack__card-hed")
                    for rest in rest_list:
                        r_list.append(rest.text.strip().rstrip("Copy Link").rstrip())
                    return r_list

                class myTests(unittest.TestCase):

                    def testOne(self):
                        url = 'https://detroit.eater.com/maps/best-ann-arbor-restaurants'
                        self.assertEqual(restaurants_list(url), f_restaurants_list(url), f"restaurants_list({url})")

                unittest.main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode5a_v2
                :optional:
                :language: python3
                :autograde: unittest

                Write a function called ``restaurants_list`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the 12 essential Ann Arbor restaurants' names,
                and returns a list of the 12 best Ann Arbor restaurants in 2019. For example, ``restaurants_list('https://detroit.eater.com/maps/best-ann-arbor-restaurants')``
                should return ``["1. Knight's Steakhouse", '2. The Last Word', "3. Krazy Jim's Blimpy Burger", '4. Blue Llama Jazz Club', '5. Spencer', '6. Miss Kim', "7. Zingerman's Delicatessen", '8. Tomukun Noodle Bar', '9. Seoul Street', '10. Ricewood', '11. Bellflower', "12. Ma Lou's Fried Chicken"]``.
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                def restaurants_list(url):
                    r_list = []
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')
                    rest_list = soup.find_all('div', class_ = "c-mapstack__card-hed")
                    for rest in rest_list:
                        r_list.append(rest.text.strip().rstrip("Copy Link").rstrip())
                    return r_list

                print(restaurants_list('https://detroit.eater.com/maps/best-ann-arbor-restaurants'))

#.
    .. activecode:: bsoup_writecode6q_v2
        :practice: T
        :nocodelens:
        :language: python3
        :autograde: unittest

        Write a function called ``bsi_list`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the section names and subsection names under Programs Bachelor of Science in Information,
        and returns a list of the section names and subsection names under Programs Bachelor of Science in Information. For example, ``bsi_list('https://www.si.umich.edu/programs/bachelor-science-information')``
        should return a list like: ``['How do I apply?', 'Current U-M students', 'Transfer students', 'High school students', 'New transfers', 'Curriculum', 'Career outcomes', 'Internships', 'Career development resources', 'Engaged learning', 'Tuition and funding', 'Connect with us', "Accelerated Master's Degree Program", 'Study abroad for undergraduates', 'Exchange student information']``.
        Since we are scraping a live site the actual values may be different.
        ~~~~
        from bs4 import BeautifulSoup
        import requests
        import re

        def bsi_list(url):

        ====
        import unittest
        import requests
        from bs4 import BeautifulSoup

        def f_bsi_list(url):
            list1 = []
            r = requests.get(url)
            soup = BeautifulSoup(r.text, 'html.parser')
            sections = soup.find_all('a', href = re.compile("/programs/bachelor-science-information/"))
            for section in sections[:-2]:
                list1.append(section.text.strip())
            return list1

        class myTests(unittest.TestCase):

            def testOne(self):
                url = 'https://www.si.umich.edu/programs/bachelor-science-information'
                self.assertEqual(bsi_list(url),f_bsi_list(url),f'bsi_list({url}),'

        unittest.main()


#.
    .. tabbed:: bsoup_writecode7

        .. tab:: Question

            .. activecode:: bsoup_writecode7q_v2
                :practice: T
                :nocodelens:
                :language: python3
                :autograde: unittest

                Write a function called ``bsi_dict`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape and create a list of the section names and subsection names under Programs Bachelor of Science in Information,
                and returns a dictionary that contains the names as keys and their full urls as values. For example, ``bsi_dict('https://www.si.umich.edu/programs/bachelor-science-information')``
                should return a dictionary like: ``{'How do I apply?': 'https://www.si.umich.edu//programs/bachelor-science-information/how-do-i-apply', 'Current U-M students': 'https://www.si.umich.edu//programs/bachelor-science-information/how-do-i-apply/cross-campus-transfer', 'Transfer students': 'https://www.si.umich.edu//programs/bachelor-science-information/how-do-i-apply/new-transfer-students-bsi', 'High school students': 'https://www.si.umich.edu//programs/bachelor-science-information/how-do-i-apply/preferred-admissions', ... 'Exchange student information': 'https://www.si.umich.edu//programs/bachelor-science-information/exchange-student-information'}``.
                Since we are scraping a live site the actual values may be different.
                ~~~~
                from bs4 import BeautifulSoup
                import requests
                import re

                def bsi_dict(url):

                ====
                import unittest
                import requests
                import re

                def f_bsi_dict(url):
                    bsi_dict = {}
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')
                    sections = soup.find_all('a', href = re.compile("/programs/bachelor-science-information/"))

                    for section in sections[:-2]:
                        key = section.text.strip()
                        value = "https://www.si.umich.edu/" + section.get('href')
                        bsi_dict[key] = value

                    return bsi_dict

                class myTests(unittest.TestCase):

                    def testOne(self):
                        url = 'https://www.si.umich.edu/programs/bachelor-science-information'
                        self.assertEqual(bsi_dict(url),f_bsi_dict(url), f'bsi_dict({url})')

                unittest.main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode7a_v2
                :optional:
                :language: python3
                :autograde: unittest

                Write a function called ``bsi_dict`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape and create a list of the section names and subsection names under Programs Bachelor of Science in Information,
                and returns a dictionary that contains the names as keys and their full urls as values. For example, ``bsi_dict('https://www.si.umich.edu/programs/bachelor-science-information')``
                should return a dictionary like: ``{'How do I apply?': 'https://www.si.umich.edu//programs/bachelor-science-information/how-do-i-apply', 'Current U-M students': 'https://www.si.umich.edu//programs/bachelor-science-information/how-do-i-apply/cross-campus-transfer', 'Transfer students': 'https://www.si.umich.edu//programs/bachelor-science-information/how-do-i-apply/new-transfer-students-bsi', 'High school students': 'https://www.si.umich.edu//programs/bachelor-science-information/how-do-i-apply/preferred-admissions', ... 'Exchange student information': 'https://www.si.umich.edu//programs/bachelor-science-information/exchange-student-information'}``.
                Since we are scraping a live site the actual values may be different.
                ~~~~
                from bs4 import BeautifulSoup
                import requests
                import re

                def bsi_dict(url):
                    bsi_dict = {}
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')
                    sections = soup.find_all('a', href = re.compile("/programs/bachelor-science-information/"))

                    for section in sections[:-2]:
                        key = section.text.strip()
                        value = "https://www.si.umich.edu/" + section.get('href')
                        bsi_dict[key] = value

                    return bsi_dict

                print(bsi_dict('https://www.si.umich.edu/programs/bachelor-science-information'))

#.
    .. activecode:: bsoup_writecode8q_v2
        :practice: T
        :nocodelens:
        :language: python3
        :autograde: unittest

        Write a function called ``envelope_address`` that takes in a parameter ``url`` and uses BeautifulSoup to web scrape and return the address text in the footer as a list. For example, ``envelope_address('https://www.si.umich.edu/programs/bachelor-science-information')``
        should return a list like: ``['School of Information', 'University of Michigan', '105 S State St.', 'Ann Arbor, MI 48109-1285']``.  Since we are scraping a live site the actual values may be different.
        ~~~~
        from bs4 import BeautifulSoup
        import requests

        def envelope_address(url):

        ====
        import unittest
        import requests
        from bs4 import BeautifulSoup

        def f_envelope_address(url):
            r = requests.get(url)
            soup = BeautifulSoup(r.text, 'html.parser')
            address = soup.find('div', class_ = 'footer--address').text
            add_list = address.strip().split("\n")
            out_list = []
            for add_line in add_list:
                out_list.append(add_line.strip())
            return out_list

        class myTests(unittest.TestCase):

            def testOne(self):
                url = 'https://www.si.umich.edu/programs/bachelor-science-information'
                self.assertEqual(envelope_address(url), f_envelope_address(url), f'envelope_address({url})')

        unittest.main()


#.
    .. tabbed:: bsoup_writecode9_v2

        .. tab:: Question

            .. activecode:: bsoup_writecode9q_v2
                :practice: T
                :nocodelens:
                :language: python3
                :autograde: unittest

                Write a function called ``name_email`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the names and email addresses,
                and returns a dictionary with the names as keys and the email addresses as values. Use the string replace method while web scraping to get rid of ""\n \n". For example, ``name_email('https://www.si.umich.edu/people/directory/faculty/e')``
                should return ``{'Paul Edwards': 'pne@umich.edu', 'Ron Eglash': 'eglash@umich.edu', 'Nicole Ellison': 'enicole@umich.edu', 'Barbara Ericson': 'barbarer@umich.edu'}``.
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                ====
                def f_name_email(url):
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')

                    names_list = []
                    emails_list = []
                    name_email_dict = {}

                    names = soup.find_all(class_="research-person-profile__name")
                    emails = soup.find_all("a", target="_blank")

                    for name in names:
                        profile_name = name.text.strip().replace('\n \n ', '')
                        names_list.append(profile_name)

                    for email in emails:
                        profile_email = email.get("href")
                        profile_email = profile_email.replace('mailto:', '')
                        emails_list.append(profile_email)

                    for i in range(len(names_list)):
                        name_email_dict[names_list[i]] = emails_list[i]

                    return name_email_dict

                import unittest

                class myTests(unittest.TestCase):

                    def testOne(self):
                        url = 'https://www.si.umich.edu/people/directory/faculty/e'
                        self.assertEqual(name_email(url), f_name_email(url), "test of name_email")

                unittest.main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode9a_v2
                :optional:
                :language: python3
                :autograde: unittest

                Write a function called ``name_email`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the names and email addresses,
                and returns a dictionary with the names as keys and the email addresses as values. Use the string replace method while web scraping. For example, ``name_email('https://www.si.umich.edu/people/directory/faculty/e')``
                should return ``{'Paul Edwards': 'pne@umich.edu', 'Ron Eglash': 'eglash@umich.edu', 'Nicole Ellison': 'enicole@umich.edu', 'Barbara Ericson': 'barbarer@umich.edu'}``.
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                def name_email(url):
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')

                    names_list = []
                    emails_list = []
                    name_email_dict = {}

                    names = soup.find_all(class_="research-person-profile__name")
                    emails = soup.find_all("a", target="_blank")

                    for name in names:
                        profile_name = name.text.strip().replace('\n \n ', '')
                        names_list.append(profile_name)

                    for email in emails:
                        profile_email = email.get("href")
                        profile_email = profile_email.replace('mailto:', '')
                        emails_list.append(profile_email)

                    for i in range(len(names_list)):
                        name_email_dict[names_list[i]] = emails_list[i]

                    return name_email_dict

                print(name_email('https://www.si.umich.edu/people/directory/faculty/e'))

#.
    .. activecode:: bsoup_writecode10q_v2
        :practice: T
        :nocodelens:
        :language: python3
        :autograde: unittest

        Write a function called ``program_email`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the program names under Email Addresses
        and Admissions (BSI program, MSI program, etc.) and their associated email addresses, and returns a dictionary with the program names as keys and the email addresses as values.
        For example, ``program_email('https://www.si.umich.edu/about-umsi/contact-us')`` should return something like ``{'BSI program': 'umsi.undergrad@umich.edu', 'MSI program': 'umsi.admissions@umich.edu', 'MHI program': 'hi.admissions@umich.edu', 'MADS program': 'umsi.mads@umich.edu', 'Doctoral program': 'umsi.phd.admissions@umich.edu'}``.
        ~~~~
        from bs4 import BeautifulSoup
        import requests


        def program_email(url):
        ====

        def f_program_email(url):
            program_email_dict = {}
            r = requests.get(url)
            soup = BeautifulSoup(r.text, 'html.parser')
            programs_section = soup.find("ul", dir="ltr")
            programs = programs_section.find_all("li")
            for program in programs:
                split_name_email = program.text.split(":")
                program_name = split_name_email[0]
                program_email = split_name_email[1].replace("\xa0", "")
                program_email_dict[program_name] = program_email

            return program_email_dict


        import unittest

        class myTests(unittest.TestCase):

            def testOne(self):
                url = 'https://www.si.umich.edu/about-umsi/contact-us'
                self.assertEqual(program_email(url), f_program_email(url), 'test of program_email')

        unittest.main()
