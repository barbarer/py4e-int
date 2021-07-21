Mixed-Up Code Exercises
------------------------
.. parsonsprob:: mixedupcode_bs4_stadium
	:numbered: left
	:practice: T
	:adaptive:

	Put the code in order to retrieve all url links for images from the Michigan Stadium Wikipedia page using BeautifulSoup and print them.
	-----
	import requests
	from bs4 import BeautifulSoup
	=====
	url = 'https://en.wikipedia.org/wiki/Michigan_Stadium'
	=====
	r = requests.get(url)
	soup = BeautifulSoup(r.content, 'html.parser')
	=====
	tags = soup.find_all('img')
	=====
	tags = soup.find_all('a') #paired
	=====
	for tag in tags:
	=====
	    print(tag.get('src', None))
	=====
		  print(tag.get('href', None)) #paired

.. parsonsprob:: mixedupcode_bs4_shapiro
	:numbered: left
	:practice: T
	:adaptive:

	Get the URL from the University of Michigan wikipedia page that links to the Shapiro Undergraduate Library and print it.
	-----
	import requests
	from bs4 import BeautifulSoup
	=====
	url = 'https://en.wikipedia.org/wiki/University_of_Michigan'
	=====
	r = requests.get(url)
	=====
	soup = BeautifulSoup(r.content, 'html.parser')
	=====
	tag = soup.find('a', {'title': 'Shapiro Undergraduate Library'})
	=====
	tag = soup.find_all('a', {'title': 'Shapiro Undergraduate Library'}) #paired
	=====
	print('https://en.wikipedia.org' + tag.get('href'))
	=====
	print('https://en.wikipedia.org' + tag.text) #paired

.. parsonsprob:: mixedupcode_bs4_umich
	:numbered: left
	:practice: T
	:adaptive:

	Use Beautiful Soup to find all of the "a" tags in the div tag with the "column" class and "news-items" id. Then, print the link associated with each "a" tag or "None" if there isn't one.
	-----
	from bs4 import BeautifulSoup
	import requests
	=====
	url = 'https://umich.edu'
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
      print(tag.get('href', None))
	=====
      print(tag.get(href, None)) #paired

.. parsonsprob:: mixedupcode_bs4_courses
    :numbered: left
    :practice: T
    :adaptive:

    We want to find a description of 3 SI courses by getting a soup from multiple URLs, extracting information from each div tag with class = 'body wysiwyg-content' and then printing the text. Put the code blocks in order.
    -----
    from bs4 import BeautifulSoup
	  import requests
	  =====
    base_url = 'https://www.si.umich.edu/programs/courses/'
	  endings = ['106', '206', '330']
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
    	  info = p.text
    =====
    	  print(info)

.. parsonsprob:: mixedupcode_bs4_umsi_v2
    :numbered: left
    :practice: T
    :adaptive:

    Use BeautifulSoup to retrieve all url links from 'https://www.si.umich.edu/programs/student-life-umsi' and print them.
    -----
    import requests
    from bs4 import BeautifulSoup
    =====
    url = 'https://www.si.umich.edu/programs/student-life-umsi'
    =====
    r = requests.get(url)
	  soup = BeautifulSoup(r.content, 'html.parser')
    =====
    tags = soup.find_all('a')
    =====
    tags = soup.find('a) #paired
    =====
    for tag in tags:
    =====
        print(tag.get('href', None))
    =====
        print(tag.get('src', None)) #paired
