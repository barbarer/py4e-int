Write Code Questions
---------------------
#.
    .. tabbed:: bsoup_writecode1

        .. tab:: Question

            Create a BeautifulSoup object named soup using the url https://umich.edu/. Using BeautifulSoup, print the URL that links to Current Students in the Navigation Bar.

            .. activecode:: bsoup_writecode1q
                :practice: T
                :nocodelens:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://umich.edu/"

        .. tab:: Answer

            .. activecode:: bsoup_writecode1a
                :optional:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://umich.edu/"
                r = requests.get(url)
                soup = BeautifulSoup(r.text, 'html.parser')

                # inspect Current Students to get the details
                text = soup.find('a', text = "Current Students")
                info = text.get('href')
                all_info = "https://umich.edu" + info
                print(all_info)

#.
    .. tabbed:: bsoup_writecode2

        .. tab:: Question

            Create a BeautifulSoup object named soup using the url https://en.wikipedia.org/wiki/Massive_open_online_course. Using BeautifulSoup, web scrape all heading names (not subheadings) from the Contents box (History, Emergence of MOOC providers, Student experience and pedagogy, etc.) into a heading_list.

            .. activecode:: bsoup_writecode2q
                :practice: T
                :nocodelens:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://en.wikipedia.org/wiki/Massive_open_online_course"

        .. tab:: Answer

            .. activecode:: bsoup_writecode2a
                :optional:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://en.wikipedia.org/wiki/Massive_open_online_course"
                r = requests.get(url)
                soup = BeautifulSoup(r.text, 'html.parser')

                a_tags = []
                heading_list = []

                # inspect the Contents box
                headings = soup.find_all('li', class_ = 'toclevel-1')
                for tag in headings: 
                    a_tag = tag.find('a')
                    a_tags.append(a_tag)
                for tag in a_tags:
                    heading = tag.find(class_ = 'toctext').text
                    heading_list.append(heading)

                print(heading_list)

#.
    .. tabbed:: bsoup_writecode3

        .. tab:: Question

            Create a BeautifulSoup object named soup using the url https://en.wikipedia.org/wiki/Massive_open_online_course. Using BeautifulSoup, web scrape the Coursera enrollees table, and create and print a dictionary called coursera_enrollees with Country as keys and Percentage as values.

            .. activecode:: bsoup_writecode3q
                :practice: T
                :nocodelens:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://en.wikipedia.org/wiki/Massive_open_online_course"

        .. tab:: Answer

            .. activecode:: bsoup_writecode3a
                :optional:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://en.wikipedia.org/wiki/Massive_open_online_course"
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

                print(coursera_enrollees)

#.
    .. tabbed:: bsoup_writecode4

        .. tab:: Question

            Create a BeautifulSoup object named soup using the url https://en.wikipedia.org/wiki/Python_(programming_language). Using BeautifulSoup, web scrape the Summary of Python 3's built-in types table, and create and print a list called types (which should contain bool, bytearray, etc.).

            .. activecode:: bsoup_writecode4q
                :practice: T
                :nocodelens:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://en.wikipedia.org/wiki/Python_(programming_language)"

        .. tab:: Answer

            .. activecode:: bsoup_writecode4a
                :optional:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://en.wikipedia.org/wiki/Python_(programming_language)"
                r = requests.get(url)
                soup = BeautifulSoup(r.text, 'html.parser')

                types = []

                table = soup.find('table', class_ = 'wikitable')
                rows = table.find_all('tr')
                                
                # The first tr (table row) tag with th (table heading) tags, index 0, doesn't have td tags, so it'd return an empty list. That's why we do rows[1:].
                for row in rows[1:]:
                    all_columns = row.find_all("td")
                    python_type = all_columns[0]
                    # Have to find the code tags or else the superscript a will be included for some of the types (e.g., look at ellipsis in the table). 
                    one_type = python_type.find('code').text.rstrip("\n")
                    types.append(one_type)

                print(types)

#.
    .. tabbed:: bsoup_writecode5

        .. tab:: Question

            Create a BeautifulSoup object named soup using the url "https://detroit.eater.com/maps/best-ann-arbor-restaurants". Using BeautifulSoup, web scrape the 12 essential Ann Arbor restaurants' names, and create and print a list called ann_arbor_2019_restaurants_list (which should contain 1. Knight's Steakhouse, 2. The Last Word, etc.).

            .. activecode:: bsoup_writecode5q
                :practice: T
                :nocodelens:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://detroit.eater.com/maps/best-ann-arbor-restaurants"

        .. tab:: Answer

            .. activecode:: bsoup_writecode5a
                :optional:
                :language: python3

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
    .. tabbed:: bsoup_writecode6

        .. tab:: Question

            Create a BeautifulSoup object named soup using the url https://www.si.umich.edu/programs/bachelor-science-information. Using BeautifulSoup, web scrape the section names and subsection names under Programs Bachelor of Science in Information into a bsi_list (which should contain 'How do I apply?', 'Current U-M students', 'Transfer students', 'High school students', 'New transfers', etc.). Make sure extraneous section names aren't included.

            .. activecode:: bsoup_writecode6q
                :practice: T
                :nocodelens:
                :language: python3

                from bs4 import BeautifulSoup
                import requests
                import re

                url = "https://www.si.umich.edu/programs/bachelor-science-information"

        .. tab:: Answer

            .. activecode:: bsoup_writecode6a
                :optional:
                :language: python3

                from bs4 import BeautifulSoup
                import requests
                import re

                url = "https://www.si.umich.edu/programs/bachelor-science-information"
                r = requests.get(url)
                soup = BeautifulSoup(r.text, 'html.parser')

                bsi_list = []

                sections = soup.find_all('a', href = re.compile("/programs/bachelor-science-information/"))

                for section in sections[:-2]:
                    bsi_list.append(section.text.strip("\n").strip())

                print(bsi_list)

#.
    .. tabbed:: bsoup_writecode7

        .. tab:: Question

            Like the previous question, create a BeautifulSoup object named soup using the url https://www.si.umich.edu/programs/bachelor-science-information. Using BeautifulSoup, web scrape the section names and subsection names under Programs Bachelor of Science in Information into a bsi_list (which should contain 'How do I apply?', 'Current U-M students', 'Transfer students', 'High school students', 'New transfers', etc.). Make sure extraneous section names aren't included. In addition, create a href_list that contains the full urls of all sections in the bsi_list. Then, create a bsi_dict that contains the bsi_list elements as keys in the bsi_dict and has their full urls (from the href_list) as values. 

            .. activecode:: bsoup_writecode7q
                :practice: T
                :nocodelens:
                :language: python3

                from bs4 import BeautifulSoup
                import requests
                import re

                url = "https://www.si.umich.edu/programs/bachelor-science-information"

        .. tab:: Answer

            .. activecode:: bsoup_writecode7a
                :optional:
                :language: python3

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
    .. tabbed:: bsoup_writecode8

        .. tab:: Question

            Create a BeautifulSoup object named soup using the url https://www.si.umich.edu/programs/bachelor-science-information. Using BeautifulSoup, web scrape the address text in the footer and strip newlines.

            .. activecode:: bsoup_writecode8q
                :practice: T
                :nocodelens:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://www.si.umich.edu/programs/bachelor-science-information"

        .. tab:: Answer

            .. activecode:: bsoup_writecode8a
                :optional:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://www.si.umich.edu/programs/bachelor-science-information"
                r = requests.get(url)
                soup = BeautifulSoup(r.text, 'html.parser')

                envelope_address = soup.find('div', class_ = 'footer--address').text.strip("\n")

                print(envelope_address)

#.
    .. tabbed:: bsoup_writecode9

        .. tab:: Question

            Create a BeautifulSoup object named soup using the url https://www.si.umich.edu/people/directory/faculty/e. Using BeautifulSoup, web scrape the names and email addresses. Create a name_email_dict with the names as keys and the email addresses as values. Use the string replace method while web scraping.

            .. activecode:: bsoup_writecode9q
                :practice: T
                :nocodelens:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://www.si.umich.edu/people/directory/faculty/e"

        .. tab:: Answer

            .. activecode:: bsoup_writecode9a
                :optional:
                :language: python3

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
    .. tabbed:: bsoup_writecode10

        .. tab:: Question

            Create a BeautifulSoup object named soup using the url https://www.si.umich.edu/about-umsi/contact-us. Using BeautifulSoup, web scrape the 5 program names under Email Addresses and Admissions (BSI program, MSI program, etc.) and their associated email addresses. Create a program_email_dict with the program names as keys and the email addresses as values. 

            .. activecode:: bsoup_writecode10q
                :practice: T
                :nocodelens:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://www.si.umich.edu/about-umsi/contact-us"

        .. tab:: Answer

            .. activecode:: bsoup_writecode10a
                :optional:
                :language: python3

                from bs4 import BeautifulSoup
                import requests

                url = "https://www.si.umich.edu/about-umsi/contact-us"
                r = requests.get(url)
                soup = BeautifulSoup(r.text, 'html.parser')

                program_email_dict = {}

                programs_section = soup.find("ul", dir="ltr")
                programs = programs_section.find_all("li")

                for program in programs:
                    split_name_email = program.text.split(":")
                    program_name = split_name_email[0]
                    program_email = split_name_email[1].replace("\xa0", "")
                    program_email_dict[program_name] = program_email

                print(program_email_dict)