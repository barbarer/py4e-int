Write Code Questions
---------------------

.. parsonsprob:: bsoup_writecode1q_mu
  :numbered: left
  :practice: T
  :adaptive:

  Create a function called ``cur_stud_link`` that takes in a parameter ``url``
  and uses BeautifulSoup to return the URL that links to Current Students in the Navigation Bar.
  For example, ``cur_stud_link('https://umich.edu/')`` should return ``"https://umich.edu/current-students/"``.
  -----
  import requests
  from bs4 import BeautifulSoup
  =====
  def cur_stud_link(url):
  =====
      r = requests.get(url)
  =====
      soup = BeautifulSoup(r.text, 'html.parser')
  =====
      text = soup.find('a', text = "Current Students")
  =====
      text = soup.find_all('a', text = "Current Students")  #paired
  =====
      info = text.get('href')
  =====
      info = text.get(href) #paired
  =====
      all_info = "https://umich.edu" + info
  =====
      return all_info


.. parsonsprob:: bsoup_writecode2qv2_mu
  :numbered: left
  :practice: T
  :adaptive:

  Create a function called ``headings`` that takes in a parameter ``url`` and uses BeautifulSoup to return a list of all heading names (not subheadings) from the
  Contents box (History, Emergence of MOOC providers, Student experience and pedagogy, etc.). For example, ``headings('https://en.wikipedia.org/wiki/Massive_open_online_course')``
  should return ``['History', 'Emergence of MOOC providers', 'Student experience and pedagogy', 'Information architecture', 'Industry', 'Benefits', 'Challenges and criticisms', 'See also', 'References', 'Further reading', 'External links']``.
  -----
  import requests
  from bs4 import BeautifulSoup
  =====
  def headings(url):
      h_list = []
  =====
      r = requests.get(url)
  =====
      soup = BeautifulSoup(r.text, 'html.parser')
  =====
      hs = soup.find_all('li', class_='toclevel-1')
  =====
      hs = soup.find('li', class_='toclevel-1') #paired
  =====
      for tag in hs:
  =====
          a_tag = tag.find('a')
  =====
          h = a_tag.find('span', class_='toctext').text
  =====
          h = a_tag.find('span', class='toctext').text #paired
  =====
          h_list.append(h)
  =====
      return h_list


.. parsonsprob:: bsoup_writecode3q_mu
  :numbered: left
  :practice: T
  :adaptive:

  Create a function called ``coursera_dict`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the Coursera enrollees table,
  and returns a dictionary with Country as keys and Percentage as values. For example, ``coursera_dict('https://en.wikipedia.org/wiki/Massive_open_online_course')``
  should return ``{'United States': '27.7%', 'India': '8.8%', 'Brazil': '5.1%', 'United Kingdom': '4.4%', 'Spain': '4.0%', 'Canada': '3.6%', 'Australia': '2.3%', 'Russia': '2.2%', 'Rest of world': '41.9%'}``.
  -----
  from bs4 import BeautifulSoup
  import requests
  =====
  def coursera_dict(url):
      coursera_enrollees = {}
  =====
      r = requests.get(url)
  =====
      soup = BeautifulSoup(r.text, 'html.parser')
  =====
      tag = soup.find('table', class_='wikitable')
  =====
      tag = soup.find_all('table', class_='wikitable') #paired
  =====
      rows = tag.find_all('tr')
  =====
      rows = table.find_all('td') #paired
  =====
      for row in rows[1:]:
  =====
          both_columns = row.find_all("td")
  =====
          key = both_columns[0].text
          value = both_columns[1].text.rstrip("\n")
  =====
          coursera_enrollees[key] = value
  =====
      return coursera_enrollees


.. parsonsprob:: bsoup_writecode4q_mu
  :numbered: left
  :practice: T
  :adaptive:

  Create a function called ``types`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the Summary of Python 3's built-in types table,
  and returns a list of the types. For example, ``types('https://en.wikipedia.org/wiki/Python_(programming_language)')``
  should return ``['bool', 'bytearray', 'bytes', 'complex', 'dict', 'ellipsis', 'float', 'frozenset', 'int', 'list', 'NoneType', 'NotImplementedType', 'range', 'set', 'str', 'tuple']``.
  -----
  import requests
  from bs4 import BeautifulSoup
  =====
  def types(url):
      types = []
  =====
      r = requests.get(url)
  =====
      soup = BeautifulSoup(r.text, 'html.parser')
  =====
      table = soup.find('table', class_ = 'wikitable')
  =====
      table = soup.find(table, class_ = 'wikitable') #paired
  =====
      rows = table.find_all('tr')
  =====
      for row in rows[1:]:
  =====
      for row in rows: #paired
  =====
          all_columns = row.find_all("td")
  =====
          p_type = all_columns[0]
  =====
          code = p_type.find('code')
          one_type = code.text.rstrip("\n")
  =====
          types.append(one_type)
  =====
      return types

.. parsonsprob:: bsoup_writecode5q_mu
  :numbered: left
  :practice: T
  :adaptive:

  Create a function called ``restaurants_list`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the 12 essential Ann Arbor restaurants' names,
  and returns a list of the 12 best Ann Arbor restaurants in 2019. For example, ``restaurants_list('https://detroit.eater.com/maps/best-ann-arbor-restaurants')``
  should return ``["1. Knight's Steakhouse", '2. The Last Word', "3. Krazy Jim's Blimpy Burger", '4. Blue Llama Jazz Club', '5. Spencer', '6. Miss Kim', "7. Zingerman's Delicatessen", '8. Tomukun Noodle Bar', '9. Seoul Street', '10. Ricewood', '11. Bellflower', "12. Ma Lou's Fried Chicken"]``.
  -----
  from bs4 import BeautifulSoup
  import requests
  =====
  def restaurants_list(url):
      r_list = []
  =====
      r = requests.get(url)
  =====
      soup = BeautifulSoup(r.text, 'html.parser')
  =====
      soup = BeautifulSoup(r.text, 'xml') #paired
  =====
      rest_list = soup.find_all('div', class_ = "c-mapstack__card-hed")
  =====
      rest_list = soup.find_all('div', class = "c-mapstack__card-hed") #paired
  =====
      for rest in rest_list:
  =====
          r_list.append(rest.text.strip().rstrip("Copy Link").rstrip())
  =====
      return r_list


.. parsonsprob:: bsoup_writecode6q_mu
  :numbered: left
  :practice: T
  :adaptive:

  Create a function called ``bsi_list`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the section names and subsection names under Programs Bachelor of Science in Information,
  and returns a list of the section names and subsection names under Programs Bachelor of Science in Information. For example, ``bsi_list('https://www.si.umich.edu/programs/bachelor-science-information')``
  should return ``['How do I apply?', 'Current U-M students', 'Transfer students', 'High school students', 'New transfers', 'UMSI Community College Summer Institute', 'Curriculum', 'Career outcomes', 'Internships', 'F-1 visa holders', 'Career development resources', 'Engaged learning', 'Tuition and funding', 'Connect with us', 'Study abroad for undergraduates', 'Exchange student information']``.
  -----
  import requests
  from bs4 import BeautifulSoup
  =====
  def bsi_list(url):
      list1 = []
  =====
      r = requests.get(url)
  =====
      soup = BeautifulSoup(r.text, 'html.parser')
  =====
      sections = soup.find_all('a', href = re.compile("/programs/bachelor-science-information/"))
  =====
      for section in sections[:-2]:
  =====
          list1.append(section.text.strip("\n").strip())
  =====
          list1.append(section.strip("\n").strip()) #paired
  =====
      return list1


.. parsonsprob:: bsoup_writecode7q_mu
  :numbered: left
  :practice: T
  :adaptive:

  Create a function called ``bsi_dict`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape and create a list of the section names and subsection names under Programs Bachelor of Science in Information,
  and creates another list that contains the full urls of the named sections and subsections. Then, return a dictionary that contains the names as keys and their full urls as values. For example, ``bsi_dict('https://www.si.umich.edu/programs/bachelor-science-information')``
  should return ``{'How do I apply?': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply', 'Current U-M students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/cross-campus-transfer', 'Transfer students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/new-transfer-students-bsi', 'High school students': 'https://www.si.umich.edu/programs/bachelor-science-information/how-do-i-apply/preferred-admissions', 'New transfers': 'https://www.si.umich.edu/programs/bachelor-science-information/new-transfers', 'UMSI Community College Summer Institute': 'https://www.si.umich.edu/programs/bachelor-science-information/new-transfers/umsi-community-college-summer-institute', 'Curriculum': 'https://www.si.umich.edu/programs/bachelor-science-information/curriculum', 'Career outcomes': 'https://www.si.umich.edu/programs/bachelor-science-information/career-outcomes', 'Internships': 'https://www.si.umich.edu/programs/bachelor-science-information/internships', 'F-1 visa holders': 'https://www.si.umich.edu/programs/bachelor-science-information/internships/f-1-visa-holders', 'Career development resources': 'https://www.si.umich.edu/programs/bachelor-science-information/career-development-resources', 'Engaged learning': 'https://www.si.umich.edu/programs/bachelor-science-information/engaged-learning', 'Tuition and funding': 'https://www.si.umich.edu/programs/bachelor-science-information/tuition-and-funding', 'Connect with us': 'https://www.si.umich.edu/programs/bachelor-science-information/connect-us', 'Study abroad for undergraduates': 'https://www.si.umich.edu/programs/bachelor-science-information/study-abroad-undergraduates', 'Exchange student information': 'https://www.si.umich.edu/programs/bachelor-science-information/exchange-student-information'}``.
  -----
  from bs4 import BeautifulSoup
  import requests
  import re
  =====
  def bsi_dict(url):
      bsi_dict = {}
  =====
      r = requests.get(url)
      soup = BeautifulSoup(r.text, 'html.parser')
  =====
      r = requests.get(url)
      soup = BeautifulSoup(r.string, 'html.parser') #paired
  =====
      sections = soup.find_all('a', href = re.compile("/programs/bachelor-science-information/"))
  =====
      sections = soup.find_all('link', href = re.compile("/programs/bachelor-science-information/")) #paired
  =====
      for section in sections[:-2]:
  =====
          key = section.text.strip()
          value = section.get('href')
  =====
          bsi_dict[bsi_list[key] = value
  =====
      return bsi_dict


.. parsonsprob:: bsoup_writecode8q_mu
  :numbered: left
  :practice: T
  :adaptive:

  Create a function called ``envelope_address`` that takes in a parameter ``url`` and uses BeautifulSoup to web scrape and return the address text in the footer as a list. For example, ``envelope_address('https://www.si.umich.edu/programs/bachelor-science-information')``
  should return a list like: ``['School of Information', 'University of Michigan', '105 S State St.', 'Ann Arbor, MI 48109-1285']``.
  -----
  import requests
  from bs4 import BeautifulSoup
  =====
  def envelope_address(url):
      out_list = []
  =====
      r = requests.get(url)
  =====
      soup = BeautifulSoup(r.text, 'html.parser')
  =====
      address = soup.find('div', class_ = 'footer--address').text.strip()
  =====
      address = soup.find('div', class = 'footer--address').text.strip() #paired
  =====
      add_list = address.split("\n")
  =====
      add_list = address.split() #paired
  =====
      for add_line in add_list:
  =====
          out_list.append(add_line.strip())
  =====
          add_list.append(add_line.strip()) #paired
  =====
      return out_list


.. parsonsprob:: bsoup_writecode9q_mu
  :numbered: left
  :practice: T
  :adaptive:

  Create a function called ``name_email`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the names and email addresses,
  and returns a dictionary with the names as keys and the email addresses as values. Use the string replace method while web scraping. For example, ``name_email('https://www.si.umich.edu/people/directory/faculty/e')``
  should return ``{'Paul Edwards': 'pne@umich.edu', 'Ron Eglash': 'eglash@umich.edu', 'Nicole Ellison': 'enicole@umich.edu', 'Barbara Ericson': 'barbarer@umich.edu'}``.
  -----
  from bs4 import BeautifulSoup
  import requests
  =====
  import re #paired
  =====
  def name_email(url):
      names_list = []
      emails_list = []
      name_email_dict = {}
  =====
      r = requests.get(url)
      soup = BeautifulSoup(r.text, 'html.parser')
  =====
      r = requests.get(url)
      soup = BeautifulSoup(r.string, 'html.parser') #paired
  =====
      names = soup.find_all(class_="research-person-profile__name")
  =====
      names = soup.find_all(class="research-person-profile__name") #paired
  =====
      emails = soup.find_all("a", target="_blank")
  =====
      emails = soup.find_all("link", target="_blank") #paired
  =====
      for name in names:
  =====
          profile_name = name.text.strip().replace('\n \n ', '')
          names_list.append(profile_name)
  =====
      for email in emails:
  =====
          profile_email = email.get("href")
          profile_email = profile_email.replace('mailto:', '')
          emails_list.append(profile_email)
  =====
      for i in range(len(names_list)):
          name_email_dict[names_list[i]] = emails_list[i]
  =====
      return name_email_dict


.. parsonsprob:: bsoup_writecode10q_v2_mu
  :numbered: left
  :practice: T
  :adaptive:

  Create a function called ``program_email`` that takes in a parameter ``url``, uses BeautifulSoup to web scrape the program names under Email Addresses
  and Admissions (BSI program, MSI program, etc.) and their associated email addresses, and returns a dictionary with the program names as keys and the email addresses as values.
  For example, ``program_email('https://www.si.umich.edu/about-umsi/contact-us')`` should return something like ``{'BSI program': 'umsi.undergrad@umich.edu', 'MSI program': 'umsi.admissions@umich.edu', 'MHI program': 'hi.admissions@umich.edu', 'MADS program': 'umsi.mads@umich.edu', 'Doctoral program': 'umsi.phd.admissions@umich.edu'}``.
  -----
  import requests
  from bs4 import BeautifulSoup
  =====
  def program_email(url):
      program_email_dict = {}
  =====
      r = requests.get(url)
  =====
      soup = BeautifulSoup(r.text, 'html.parser')
  =====
      programs_section = soup.find("ul", dir="ltr")
  =====
      programs = programs_section.find_all("li")
  =====
      programs = programs_section.find("li") #paired
  =====
      for program in programs:
  =====
          split_name_email = program.text.split(":")
  =====
          program_name = split_name_email[0]
  =====
          program_email = split_name_email[1].replace("\xa0", "")
  =====
          program_email = split_name_email[0].replace("\xa0", "") #paired
  =====
          program_email_dict[program_name] = program_email
  =====
      return program_email_dict
