Write Code Questions
---------------------
#.
    .. tabbed:: bsoup_writecode1

        .. tab:: Question

            .. activecode:: bsoup_writecode1q
                :practice: T
                :nocodelens:
                :language: python3

                Create a function called ``cur_stud_link`` that takes in a parameter ``url`` 
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

                Create a function called ``cur_stud_link`` that takes in a parameter ``url`` 
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

        Create a function called ``headings`` that takes in a parameter ``url`` and uses BeautifulSoup to return a list of all heading names (not subheadings) from the 
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

                Create a function called ``coursera_dict`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the Coursera enrollees table, 
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

                Create a function called ``coursera_dict`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the Coursera enrollees table, 
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

        Create a BeautifulSoup object named soup using the url https://en.wikipedia.org/wiki/Python_(programming_language). Using BeautifulSoup, web scrape the Summary of Python 3's built-in types table, and create and print a list called types (which should contain bool, bytearray, etc.).
        ~~~~
        from bs4 import BeautifulSoup
        import requests

        url = "https://en.wikipedia.org/wiki/Python_(programming_language)"

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(types, ['bool', 'bytearray', 'bytes', 'complex', 'dict', 'ellipsis', 'float', 'frozenset', 'int', 'list', 'NoneType', 'NotImplementedType', 'range', 'set', 'str', 'tuple'], "Making sure list is correct.")

        myTests().main()


#.
    .. tabbed:: bsoup_writecode5

        .. tab:: Question

            .. activecode:: bsoup_writecode5q
                :practice: T
                :nocodelens:
                :language: python3

                Create a BeautifulSoup object named soup using the url "https://detroit.eater.com/maps/best-ann-arbor-restaurants". Using BeautifulSoup, web scrape the 12 essential Ann Arbor restaurants' names, and create and print a list called ann_arbor_2019_restaurants_list (which should contain 1. Knight's Steakhouse, 2. The Last Word, etc.).
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                url = "https://detroit.eater.com/maps/best-ann-arbor-restaurants"

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(ann_arbor_2019_restaurants_list, ["1. Knight's Steakhouse", '2. The Last Word', "3. Krazy Jim's Blimpy Burger", '4. Dessous', '5. Spencer', '6. Miss Kim', "7. Zingerman's Delicatessen", '8. Mani Osteria and Bar', '9. Tomukun Noodle Bar', '10. Ricewood', '11. Seoul Street', "12. Ma Lou's Fried Chicken"], "Making sure list is correct.")

                myTests().main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode5a
                :optional:
                :language: python3

                Create a BeautifulSoup object named soup using the url "https://detroit.eater.com/maps/best-ann-arbor-restaurants". Using BeautifulSoup, web scrape the 12 essential Ann Arbor restaurants' names, and create and print a list called ann_arbor_2019_restaurants_list (which should contain 1. Knight's Steakhouse, 2. The Last Word, etc.).
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                url = "https://detroit.eater.com/maps/best-ann-arbor-restaurants"
                r = requests.get(url)
                soup = BeautifulSoup(r.text, 'html.parser')

                ann_arbor_2019_restaurants_list = []

                restaurants = soup.find_all('div', class_ = "c-mapstack__card-hed")

                for restaurant in restaurants:
                    # Be careful not to strip the n off Chicke(n) for 12. Ma Lou's Fried Chicken.
                    ann_arbor_2019_restaurants_list.append(restaurant.text.strip("\n\n\n").rstrip("Copy Link").rstrip("\n\n\n"))

                print(ann_arbor_2019_restaurants_list)

#.
    .. activecode:: bsoup_writecode6q
        :practice: T
        :nocodelens:
        :language: python3

        Create a BeautifulSoup object named soup using the url https://www.si.umich.edu/programs/bachelor-science-information. Using BeautifulSoup, web scrape the section names and subsection names under Programs Bachelor of Science in Information into a bsi_list (which should contain 'How do I apply?', 'Current U-M students', 'Transfer students', 'High school students', 'New transfers', etc.). Make sure extraneous section names aren't included.
        ~~~~
        from bs4 import BeautifulSoup
        import requests
        import re

        url = "https://www.si.umich.edu/programs/bachelor-science-information"

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(bsi_list, ['How do I apply?', 'Current U-M students', 'Transfer students', 'High school students', 'New transfers', 'UMSI Community College Summer Institute', 'Curriculum', 'Career outcomes', 'Internships', 'F-1 visa holders', 'Career development resources', 'Engaged learning', 'Tuition and funding', 'Connect with us', 'Study abroad for undergraduates', 'Exchange student information'], "Making sure list is correct.")

        myTests().main()


#.
    .. tabbed:: bsoup_writecode7

        .. tab:: Question

            .. activecode:: bsoup_writecode7q
                :practice: T
                :nocodelens:
                :language: python3

                Like the previous question, create a BeautifulSoup object named soup using the url https://www.si.umich.edu/programs/bachelor-science-information. Using BeautifulSoup, web scrape the section names and subsection names under Programs Bachelor of Science in Information into a bsi_list (which should contain 'How do I apply?', 'Current U-M students', 'Transfer students', 'High school students', 'New transfers', etc.). Make sure extraneous section names aren't included. In addition, create a href_list that contains the full urls of all sections in the bsi_list. Then, create a bsi_dict that contains the bsi_list elements as keys in the bsi_dict and has their full urls (from the href_list) as values. 
                ~~~~
                from bs4 import BeautifulSoup
                import requests
                import re

                url = "https://www.si.umich.edu/programs/bachelor-science-information"

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(bsi_dict, {'How do I apply?': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply', 'Current U-M students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/cross-campus-transfer', 'Transfer students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/new-transfer-students-bsi', 'High school students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/preferred-admissions', 'New transfers': 'https://www.si.umich.edu/programs/bachelor-science-information/new-transfers', 'UMSI Community College Summer Institute': 'https://www.si.umich.edu/programs/bachelor-science-information/new-transfers/umsi-community-college-summer-institute', 'Curriculum': 'https://www.si.umich.edu/programs/bachelor-science-information/curriculum', 'Career outcomes': 'https://www.si.umich.edu/programs/bachelor-science-information/career-outcomes', 'Internships': 'https://www.si.umich.edu/programs/bachelor-science-information/internships', 'F-1 visa holders': 'https://www.si.umich.edu/programs/bachelor-science-information/internships/f-1-visa-holders', 'Career development resources': 'https://www.si.umich.edu/programs/bachelor-science-information/career-development-resources', 'Engaged learning': 'https://www.si.umich.edu/programs/bachelor-science-information/engaged-learning', 'Tuition and funding': 'https://www.si.umich.edu/programs/bachelor-science-information/tuition-and-funding', 'Connect with us': 'https://www.si.umich.edu/programs/bachelor-science-information/connect-us', 'Study abroad for undergraduates': 'https://www.si.umich.edu/programs/bachelor-science-information/study-abroad-undergraduates', 'Exchange student information': 'https://www.si.umich.edu/programs/bachelor-science-information/exchange-student-information'}, "Making sure dictionary is correct.")

                myTests().main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode7a
                :optional:
                :language: python3

                Like the previous question, create a BeautifulSoup object named soup using the url https://www.si.umich.edu/programs/bachelor-science-information. Using BeautifulSoup, web scrape the section names and subsection names under Programs Bachelor of Science in Information into a bsi_list (which should contain 'How do I apply?', 'Current U-M students', 'Transfer students', 'High school students', 'New transfers', etc.). Make sure extraneous section names aren't included. In addition, create a href_list that contains the full urls of all sections in the bsi_list. Then, create a bsi_dict that contains the bsi_list elements as keys in the bsi_dict and has their full urls (from the href_list) as values. 
                ~~~~
                from bs4 import BeautifulSoup
                import requests
                import re

                url = "https://www.si.umich.edu/programs/bachelor-science-information"
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

                print(bsi_dict)

#.
    .. activecode:: bsoup_writecode8q
        :practice: T
        :nocodelens:
        :language: python3
        
        Create a BeautifulSoup object named soup using the url https://www.si.umich.edu/programs/bachelor-science-information. Using BeautifulSoup, web scrape the address text in the footer and strip newlines.
        ~~~~
        from bs4 import BeautifulSoup
        import requests

        url = "https://www.si.umich.edu/programs/bachelor-science-information"

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(envelope_address, 
                    School of Information
                    University of Michigan
                    105 S State St.
                    Ann Arbor, MI 48109-1285, "Making sure address is correct.")

        myTests().main()       
                

#.
    .. tabbed:: bsoup_writecode9

        .. tab:: Question

            .. activecode:: bsoup_writecode9q
                :practice: T
                :nocodelens:
                :language: python3

                Create a BeautifulSoup object named soup using the url https://www.si.umich.edu/people/directory/faculty/e. Using BeautifulSoup, web scrape the names and email addresses. Create a name_email_dict with the names as keys and the email addresses as values. Use the string replace method while web scraping. Sample Output: {'Paul Edwards': 'pne@umich.edu', 'Ron Eglash':...}
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                url = "https://www.si.umich.edu/people/directory/faculty/e"

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(name_email_dict, {'Paul Edwards': 'pne@umich.edu', 'Ron Eglash': 'eglash@umich.edu', 'Nicole Ellison': 'enicole@umich.edu', 'Barbara Ericson': 'barbarer@umich.edu'}, "Making sure dictionary is correct.")

                myTests().main()

        .. tab:: Answer

            .. activecode:: bsoup_writecode9a
                :optional:
                :language: python3

                Create a BeautifulSoup object named soup using the url https://www.si.umich.edu/people/directory/faculty/e. Using BeautifulSoup, web scrape the names and email addresses. Create a name_email_dict with the names as keys and the email addresses as values. Use the string replace method while web scraping. Sample Output: {'Paul Edwards': 'pne@umich.edu', 'Ron Eglash':...}
                ~~~~
                from bs4 import BeautifulSoup
                import requests

                url = "https://www.si.umich.edu/people/directory/faculty/e"
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

                print(name_email_dict)

#.
    .. activecode:: bsoup_writecode10q
        :practice: T
        :nocodelens:
        :language: python3

        Create a BeautifulSoup object named soup using the url https://www.si.umich.edu/about-umsi/contact-us. Using BeautifulSoup, web scrape the 5 program names under Email Addresses and Admissions (BSI program, MSI program, etc.) and their associated email addresses. Create a program_email_dict with the program names as keys and the email addresses as values. 
        ~~~~
        from bs4 import BeautifulSoup
        import requests

        url = "https://www.si.umich.edu/about-umsi/contact-us"

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(program_email_dict, {'BSI program': 'umsi.undergrad@umich.edu', 'MSI program': 'umsi.admissions@umich.edu', 'MHI program': 'hi.inquiries@umich.edu', 'MADS program': 'umsi.mads@umich.edu', 'Doctoral program': 'umsi.phd.admissions@umich.edu'}, "Making sure dictionary is correct.")

        myTests().main()