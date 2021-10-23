Write Code Questions
---------------------
#.
    .. tabbed:: bsoup_writecode1

        .. tab:: Question

            .. activecode:: bsoup_writecode1q
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
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(cur_stud_link('https://umich.edu/'), "https://umich.edu/current-students/", "cur_stud_link('https://umich.edu/')")

                myTests().main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode1a
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
    .. activecode:: bsoup_writecode2q
        :practice: T
        :nocodelens:
        :language: python3
        :autograde: unittest

        Write a function called ``headings`` that takes in a parameter ``url`` and uses BeautifulSoup to return a list of all heading names (not subheadings) from the
        Contents box (History, Emergence of MOOC providers, Student experience and pedagogy, etc.). For example, ``headings('https://en.wikipedia.org/wiki/Massive_open_online_course')``
        should return ``['History', 'Emergence of MOOC providers', 'Student experience and pedagogy', 'Information architecture', 'Industry', 'Benefits', 'Challenges and criticisms', 'See also', 'References', 'Sources', 'Further reading']``.
        ~~~~
        from bs4 import BeautifulSoup
        import requests

        def headings(url):

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(headings('https://en.wikipedia.org/wiki/Massive_open_online_course'), ['History', 'Emergence of MOOC providers', 'Student experience and pedagogy', 'Information architecture', 'Industry', 'Benefits', 'Challenges and criticisms', 'See also', 'References', 'Sources', 'Further reading'], "headings('https://en.wikipedia.org/wiki/Massive_open_online_course')")

        myTests().main()


#.
    .. tabbed:: bsoup_writecode3

        .. tab:: Question

            .. activecode:: bsoup_writecode3q
                :practice: T
                :nocodelens:
                :language: python3
                :autograde: unittest

                Write a function called ``coursera_dict`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the Coursera enrollees table,
                and returns a dictionary with Country as keys and Percentage as values. For example, ``coursera_dict('https://en.wikipedia.org/wiki/Massive_open_online_course')``
                should return ``{'United States': '27.7%', 'India': '8.8%', 'Brazil': '5.1%', 'United Kingdom': '4.4%', 'Spain': '4.0%', 'Canada': '3.6%', 'Australia': '2.3%', 'Russia': '2.2%', 'Rest of world': '41.9%'}``.
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                def coursera_dict(url):

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(coursera_dict('https://en.wikipedia.org/wiki/Massive_open_online_course'), {'United States': '27.7%', 'India': '8.8%', 'Brazil': '5.1%', 'United Kingdom': '4.4%', 'Spain': '4.0%', 'Canada': '3.6%', 'Australia': '2.3%', 'Russia': '2.2%', 'Rest of world': '41.9%'}, "coursera_dict('https://en.wikipedia.org/wiki/Massive_open_online_course')")

                myTests().main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode3a
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
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')

                    coursera_enrollees = {}

                    table = soup.find('table', class_ = 'wikitable')
                    rows = table.find_all('tr')

                    # The first tr (table row) tag with th (table heading) tags, index 0, doesn't have td tags, so it'd return an empty list. That's why we do rows[1:].
                    for row in rows[1:]:
                        both_columns = row.find_all("td")
                        key = both_columns[0].text
                        # Remember to strip the newlines from the percentages
                        value = both_columns[1].text.rstrip("\n")
                        coursera_enrollees[key] = value

                    return coursera_enrollees

                print(coursera_dict('https://en.wikipedia.org/wiki/Massive_open_online_course'))

#.
    .. activecode:: bsoup_writecode4q
        :practice: T
        :nocodelens:
        :language: python3
        :autograde: unittest

        Write a function called ``types`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the Summary of Python 3's built-in types table,
        and returns a list of the types. For example, ``types('https://en.wikipedia.org/wiki/Python_(programming_language)')``
        should return ``['bool', 'bytearray', 'bytes', 'complex', 'dict', 'ellipsis', 'float', 'frozenset', 'int', 'list', 'NoneType', 'NotImplementedType', 'range', 'set', 'str', 'tuple']``.
        ~~~~
        from bs4 import BeautifulSoup
        import requests

        def types(url):

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(types('https://en.wikipedia.org/wiki/Python_(programming_language)'), ['bool', 'bytearray', 'bytes', 'complex', 'dict', 'ellipsis', 'float', 'frozenset', 'int', 'list', 'NoneType', 'NotImplementedType', 'range', 'set', 'str', 'tuple'], "types('https://en.wikipedia.org/wiki/Python_(programming_language)')")

        myTests().main()


#.
    .. tabbed:: bsoup_writecode5

        .. tab:: Question

            .. activecode:: bsoup_writecode5q
                :practice: T
                :nocodelens:
                :language: python3
                :autograde: unittest

                Write a function called ``restaurants_list`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the 12 essential Ann Arbor restaurants' names,
                and returns a list of the 12 best Ann Arbor restaurants in 2019. For example, ``restaurants_list('https://detroit.eater.com/maps/best-ann-arbor-restaurants')``
                should return ``["1. Knight's Steakhouse", '2. The Last Word', "3. Krazy Jim's Blimpy Burger", '4. Blue Llama Jazz Club', '5. Spencer', '6. Miss Kim', "7. Zingerman's Delicatessen", '8. Tomukun Noodle Bar', '9. Seoul Street', '10. Ricewood', '11. Bellflower', "12. Ma Lou's Fried Chicken"]``.
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                def restaurants_list(url):

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(restaurants_list('https://detroit.eater.com/maps/best-ann-arbor-restaurants'), ["1. Knight's Steakhouse", '2. The Last Word', "3. Krazy Jim's Blimpy Burger", '4. Blue Llama Jazz Club', '5. Spencer', '6. Miss Kim', "7. Zingerman's Delicatessen", '8. Tomukun Noodle Bar', '9. Seoul Street', '10. Ricewood', '11. Bellflower', "12. Ma Lou's Fried Chicken"], "restaurants_list('https://detroit.eater.com/maps/best-ann-arbor-restaurants')")

                myTests().main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode5a
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
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')

                    ann_arbor_2019_restaurants_list = []

                    restaurants = soup.find_all('div', class_ = "c-mapstack__card-hed")

                    for restaurant in restaurants:
                        # Be careful not to strip the n off Chicke(n) for 12. Ma Lou's Fried Chicken.
                        ann_arbor_2019_restaurants_list.append(restaurant.text.strip("\n\n\n").rstrip("Copy Link").rstrip("\n\n\n"))

                    return ann_arbor_2019_restaurants_list

                print(restaurants_list('https://detroit.eater.com/maps/best-ann-arbor-restaurants'))

#.
    .. activecode:: bsoup_writecode6q
        :practice: T
        :nocodelens:
        :language: python3
        :autograde: unittest

        Write a function called ``bsi_list`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the section names and subsection names under Programs Bachelor of Science in Information,
        and returns a list of the section names and subsection names under Programs Bachelor of Science in Information. For example, ``bsi_list('https://www.si.umich.edu/programs/bachelor-science-information')``
        should return ``['How do I apply?', 'Current U-M students', 'Transfer students', 'High school students', 'New transfers', 'UMSI Community College Summer Institute', 'Curriculum', 'Career outcomes', 'Internships', 'F-1 visa holders', 'Career development resources', 'Engaged learning', 'Tuition and funding', 'Connect with us', 'Study abroad for undergraduates', 'Exchange student information']``.
        ~~~~
        from bs4 import BeautifulSoup
        import requests
        import re

        def bsi_list(url):

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(bsi_list('https://www.si.umich.edu/programs/bachelor-science-information'), ['How do I apply?', 'Current U-M students', 'Transfer students', 'High school students', 'New transfers', 'UMSI Community College Summer Institute', 'Curriculum', 'Career outcomes', 'Internships', 'F-1 visa holders', 'Career development resources', 'Engaged learning', 'Tuition and funding', 'Connect with us', 'Study abroad for undergraduates', 'Exchange student information'], "bsi_list('https://www.si.umich.edu/programs/bachelor-science-information')")

        myTests().main()


#.
    .. tabbed:: bsoup_writecode7

        .. tab:: Question

            .. activecode:: bsoup_writecode7q
                :practice: T
                :nocodelens:
                :language: python3
                :autograde: unittest

                Write a function called ``bsi_dict`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape and create a list of the section names and subsection names under Programs Bachelor of Science in Information,
                and creates another list that contains the full urls of the named sections and subsections. Then, return a dictionary that contains the names as keys and their full urls as values. For example, ``bsi_dict('https://www.si.umich.edu/programs/bachelor-science-information')``
                should return ``{'How do I apply?': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply', 'Current U-M students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/cross-campus-transfer', 'Transfer students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/new-transfer-students-bsi', 'High school students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/preferred-admissions', 'New transfers': 'https://www.si.umich.edu/programs/bachelor-science-information/new-transfers', 'UMSI Community College Summer Institute': 'https://www.si.umich.edu/programs/bachelor-science-information/new-transfers/umsi-community-college-summer-institute', 'Curriculum': 'https://www.si.umich.edu/programs/bachelor-science-information/curriculum', 'Career outcomes': 'https://www.si.umich.edu/programs/bachelor-science-information/career-outcomes', 'Internships': 'https://www.si.umich.edu/programs/bachelor-science-information/internships', 'F-1 visa holders': 'https://www.si.umich.edu/programs/bachelor-science-information/internships/f-1-visa-holders', 'Career development resources': 'https://www.si.umich.edu/programs/bachelor-science-information/career-development-resources', 'Engaged learning': 'https://www.si.umich.edu/programs/bachelor-science-information/engaged-learning', 'Tuition and funding': 'https://www.si.umich.edu/programs/bachelor-science-information/tuition-and-funding', 'Connect with us': 'https://www.si.umich.edu/programs/bachelor-science-information/connect-us', 'Study abroad for undergraduates': 'https://www.si.umich.edu/programs/bachelor-science-information/study-abroad-undergraduates', 'Exchange student information': 'https://www.si.umich.edu/programs/bachelor-science-information/exchange-student-information'}``.
                ~~~~
                from bs4 import BeautifulSoup
                import requests
                import re

                def bsi_dict(url):

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(bsi_dict('https://www.si.umich.edu/programs/bachelor-science-information'), {'How do I apply?': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply', 'Current U-M students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/cross-campus-transfer', 'Transfer students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/new-transfer-students-bsi', 'High school students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/preferred-admissions', 'New transfers': 'https://www.si.umich.edu/programs/bachelor-science-information/new-transfers', 'UMSI Community College Summer Institute': 'https://www.si.umich.edu/programs/bachelor-science-information/new-transfers/umsi-community-college-summer-institute', 'Curriculum': 'https://www.si.umich.edu/programs/bachelor-science-information/curriculum', 'Career outcomes': 'https://www.si.umich.edu/programs/bachelor-science-information/career-outcomes', 'Internships': 'https://www.si.umich.edu/programs/bachelor-science-information/internships', 'F-1 visa holders': 'https://www.si.umich.edu/programs/bachelor-science-information/internships/f-1-visa-holders', 'Career development resources': 'https://www.si.umich.edu/programs/bachelor-science-information/career-development-resources', 'Engaged learning': 'https://www.si.umich.edu/programs/bachelor-science-information/engaged-learning', 'Tuition and funding': 'https://www.si.umich.edu/programs/bachelor-science-information/tuition-and-funding', 'Connect with us': 'https://www.si.umich.edu/programs/bachelor-science-information/connect-us', 'Study abroad for undergraduates': 'https://www.si.umich.edu/programs/bachelor-science-information/study-abroad-undergraduates', 'Exchange student information': 'https://www.si.umich.edu/programs/bachelor-science-information/exchange-student-information'}, "bsi_dict('https://www.si.umich.edu/programs/bachelor-science-information')")

                myTests().main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode7a
                :optional:
                :language: python3
                :autograde: unittest

                Write a function called ``bsi_dict`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape and create a list of the section names and subsection names under Programs Bachelor of Science in Information,
                and creates another list that contains the full urls of the named sections and subsections. Then, return a dictionary that contains the names as keys and their full urls as values. For example, ``bsi_dict('https://www.si.umich.edu/programs/bachelor-science-information')``
                should return ``{'How do I apply?': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply', 'Current U-M students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/cross-campus-transfer', 'Transfer students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/new-transfer-students-bsi', 'High school students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/preferred-admissions', 'New transfers': 'https://www.si.umich.edu/programs/bachelor-science-information/new-transfers', 'UMSI Community College Summer Institute': 'https://www.si.umich.edu/programs/bachelor-science-information/new-transfers/umsi-community-college-summer-institute', 'Curriculum': 'https://www.si.umich.edu/programs/bachelor-science-information/curriculum', 'Career outcomes': 'https://www.si.umich.edu/programs/bachelor-science-information/career-outcomes', 'Internships': 'https://www.si.umich.edu/programs/bachelor-science-information/internships', 'F-1 visa holders': 'https://www.si.umich.edu/programs/bachelor-science-information/internships/f-1-visa-holders', 'Career development resources': 'https://www.si.umich.edu/programs/bachelor-science-information/career-development-resources', 'Engaged learning': 'https://www.si.umich.edu/programs/bachelor-science-information/engaged-learning', 'Tuition and funding': 'https://www.si.umich.edu/programs/bachelor-science-information/tuition-and-funding', 'Connect with us': 'https://www.si.umich.edu/programs/bachelor-science-information/connect-us', 'Study abroad for undergraduates': 'https://www.si.umich.edu/programs/bachelor-science-information/study-abroad-undergraduates', 'Exchange student information': 'https://www.si.umich.edu/programs/bachelor-science-information/exchange-student-information'}``.
                ~~~~
                from bs4 import BeautifulSoup
                import requests
                import re

                def bsi_dict(url):
                    r = requests.get(url)
                    soup = BeautifulSoup(r.text, 'html.parser')

                    bsi_list = []
                    href_list = []
                    bsi_dict = {}

                    sections = soup.find_all('a', href = re.compile("/programs/bachelor-science-information/"))

                    for section in sections[:-2]:
                        bsi_list.append(section.text.strip("\n").strip())
                        url_end = section.get('href')
                        full_url = "https://www.si.umich.edu" + url_end
                        href_list.append(full_url)

                    for i in range(len(bsi_list)):
                        bsi_dict[bsi_list[i]] = href_list[i]

                    return bsi_dict

                print(bsi_dict('https://www.si.umich.edu/programs/bachelor-science-information'))

#.
    .. activecode:: bsoup_writecode8q
        :practice: T
        :nocodelens:
        :language: python3
        :autograde: unittest

        Write a function called ``envelope_address`` that takes in a parameter ``url`` and uses BeautifulSoup to web scrape and return the address text in the footer with the newlines stripped. For example, ``envelope_address('https://www.si.umich.edu/programs/bachelor-science-information')``
        should return first line: ``'School of Information'``, second line: ``'University of Michigan'``, third line: ``'105 S State St.'``, and last line: ``'Ann Arbor, MI 48109-1285'``.
        ~~~~
        from bs4 import BeautifulSoup
        import requests

        def envelope_address(url):

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                r = requests.get('https://www.si.umich.edu/programs/bachelor-science-information')
                soup = BeautifulSoup(r.text, 'html.parser')
                address = soup.find('div', class_ = 'footer--address').text.strip("\n")
                self.assertEqual(envelope_address('https://www.si.umich.edu/programs/bachelor-science-information'), address, "envelope_address('https://www.si.umich.edu/programs/bachelor-science-information')")

        myTests().main()


#.
    .. tabbed:: bsoup_writecode9

        .. tab:: Question

            .. activecode:: bsoup_writecode9q
                :practice: T
                :nocodelens:
                :language: python3
                :autograde: unittest

                Write a function called ``name_email`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the names and email addresses,
                and returns a dictionary with the names as keys and the email addresses as values. Use the string replace method while web scraping. For example, ``name_email('https://www.si.umich.edu/people/directory/faculty/e')``
                should return ``{'Paul Edwards': 'pne@umich.edu', 'Ron Eglash': 'eglash@umich.edu', 'Nicole Ellison': 'enicole@umich.edu', 'Barbara Ericson': 'barbarer@umich.edu'}``.
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                def name_email(url):

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(name_email('https://www.si.umich.edu/people/directory/faculty/e'), {'Paul Edwards': 'pne@umich.edu', 'Ron Eglash': 'eglash@umich.edu', 'Nicole Ellison': 'enicole@umich.edu', 'Barbara Ericson': 'barbarer@umich.edu'}, "name_email('https://www.si.umich.edu/people/directory/faculty/e')")

                myTests().main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode9a
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
    .. activecode:: bsoup_writecode10q
        :practice: T
        :nocodelens:
        :language: python3
        :autograde: unittest

        Write a function called ``program_email`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the 5 program names under Email Addresses
        and Admissions (BSI program, MSI program, etc.) and their associated email addresses, and returns a dictionary with the program names as keys and the email addresses as values.
        For example, ``program_email('https://www.si.umich.edu/about-umsi/contact-us')`` should return ``{'BSI program': 'umsi.undergrad@umich.edu', 'MSI program': 'umsi.admissions@umich.edu', 'MHI program': 'hi.admissions@umich.edu', 'MADS program': 'umsi.mads@umich.edu', 'Doctoral program': 'umsi.phd.admissions@umich.edu'}``.
        ~~~~
        from bs4 import BeautifulSoup
        import requests

        def program_email(url):

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(program_email('https://www.si.umich.edu/about-umsi/contact-us'), {'BSI program': 'umsi.undergrad@umich.edu', 'MSI program': 'umsi.admissions@umich.edu', 'MHI program': 'hi.admissions@umich.edu', 'MADS program': 'umsi.mads@umich.edu', 'Doctoral program': 'umsi.phd.admissions@umich.edu'}, "program_email('https://www.si.umich.edu/about-umsi/contact-us')")

        myTests().main()
