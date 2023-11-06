Write Code Questions
--------------------------------------


Click on the button below to see the contents of books.xml.  It contains
xml tags to define the books in a bookstore.

.. reveal:: book_data
    :showtitle: Show
    :hidetitle: Hide

    .. raw:: html

       <pre id="books.xml">
       &#60;?xml version="1.0" encoding="UTF-8"?&#62;
       &#60;bookstore&#62;

           &#60;book category="cooking"&#62;
               &#60;title lang="en"&#62;Everyday Italian&#60;/title&#62;
               &#60;author&#62;Giada De Laurentiis&#60;/author&#62;
               &#60;year&#62;2005&#60;/year&#62;
               &#60;price&#62;30.00&#60;/price&#62;
           &#60;/book&#62;

           &#60;book category="children"&#62;
               &#60;title lang="en"&#62;Harry Potter&#60;/title&#62;
               &#60;author&#62;J K. Rowling&#60;/author&#62;
               &#60;year&#62;2005&#60;/year&#62;
               &#60;price&#62;29.99&#60;/price&#62;
           &#60;/book&#62;

           &#60;book category="web"&#62;
               &#60;title lang="en"&#62;XQuery Kick Start&#60;/title&#62;
               &#60;author&#62;James McGovern&#60;/author&#62;
               &#60;author&#62;Per Bothner&#60;/author&#62;
               &#60;author&#62;Kurt Cagle&#60;/author&#62;
               &#60;author&#62;James Linn&#60;/author&#62;
               &#60;author&#62;Vaidyanathan Nagarajan&#60;/author&#62;
               &#60;year&#62;2003&#60;/year&#62;
               &#60;price&#62;49.99&#60;/price&#62;
           &#60;/book&#62;

           &#60;book category="web" cover="paperback"&#62;
               &#60;title lang="en"&#62;Learning XML&#60;/title&#62;
               &#60;author&#62;Erik T. Ray&#60;/author&#62;
               &#60;year&#62;2003&#60;/year&#62;
               &#60;price&#62;39.95&#60;/price&#62;
           &#60;/book&#62;

       &#60;/bookstore&#62;

.. datafile:: books.xml
    :fromfile: books.xml
    :hide:

.. activecode:: web_get_book_info_xml
    :language: python3
    :nocodelens:
    :datafile: books.xml

    Fix the errors in the code below so that it reads the data from books.xml
    and finds all of the book data and prints the title for each book and
    then finds all the author names for each book and prints each author name.
    ~~~~
    import xml.etree.ElementTree as ET
    fh = open("books.xml")
    data = fh.read()
    fh.close()
    tree = ET.fromstring(data)
    book_list = tree.find('book')
    for book in book_list:
        print(f'Book title: {book.find(title).text}')
        author_list = book.find('author')
        for author in author_list:
            print(f"Author: {author}")

Click on the button below to see the contents of news.xml.  It contains
xml tags to define news stories.

.. reveal:: news_data
    :showtitle: Show
    :hidetitle: Hide

    .. raw:: html

       <pre id="news.xml">
       &#60;?xml version="1.0" encoding="UTF-8"?&#62;
       &#60;nitf&#62;
           &#60;head&#62;
               &#60;title&#62;Colombia Earthquake&#60;/title&#62;
           &#60;/head&#62;
           &#60;body&#62;
               &#60;headline&#62;
                   &#60;hl1&#62;143 Dead in Colombia Earthquake&#60;/hl1&#62;
               &#60;/headline&#62;
               &#60;byline&#62;
                   &#60;bytag&#62;By Jared Kotler, Associated Press Writer&#60;/bytag&#62;
               &#60;/byline&#62;
               &#60;dateline&#62;
                   &#60;location&#62;Bogota, Colombia&#60;/location&#62;
                   &#60;date&#62;Monday January 25 1999 7:28 ET&#60;/date&#62;
               &#60;/dateline&#62;
           &#60;/body&#62;
       &#60;/nitf&#62;

.. datafile:: news.xml
    :fromfile: news.xml
    :hide:

.. activecode:: web_get_news_info_xml
    :language: python3
    :nocodelens:
    :datafile: news.xml

    Fix the errors in the code below so that it reads the data from news.xml
    and prints the headline and date.
    ~~~~
    import xml.etree.ElementTree as ET
    fh = open("news.xml")
    data = fh.read()
    fh.close()
    tree = ET.fromstring(data)
    head = tree.find('head')
    title = head.find('title')
    print(head)
    body = find(body)
    dateline = body.find('dateline')
    date = dateline.find('date')
    print(date)


Click on the button below to see the contents of weather.xml.  It contains
xml tags to define weather observations.

.. reveal:: weather_data
    :showtitle: Show
    :hidetitle: Hide

    .. raw:: html

       <pre id="weather.xml">
       &#60;?xml version="1.0" encoding="UTF-8"?&#62;
       &#60;current_observation&#62;

           &#60;location&#62;New York/John F. Kennedy Intl Airport, NY&#60;/location&#62;
           &#60;station_id&#62;KJFK&#60;/station_id&#62;
           &#60;latitude&#62;40.66&#60;/latitude&#62;
           &#60;longitude&#62;-73.78&#60;/longitude&#62;
           &#60;observation_time_rfc822&#62;Mon, 11 Feb 2008 06:51:00 -0500 EST&#60;/observation_time_rfc822&#62;
           &#60;weather&#62;A Few Clouds&#60;/weather&#62;
           &#60;temp_f&#62;11&#60;/temp_f&#62;
           &#60;temp_c&#62;-12&#60;/temp_c&#62;
           &#60;relative_humidity&#62;36&#60;/relative_humidity&#62;
           &#60;wind_dir&#62;West&#60;/wind_dir&#62;
           &#60;wind_degrees&#62;280&#60;/wind_degrees&#62;
           &#60;wind_mph&#62;18.4&#60;/wind_mph&#62;
           &#60;wind_gust_mph&#62;29&#60;/wind_gust_mph&#62;
           &#60;pressure_mb&#62;1023.6&#60;/pressure_mb&#62;
           &#60;pressure_in&#62;30.23&#60;/pressure_in&#62;
           &#60;dewpoint_f&#62;-11&#60;/dewpoint_f&#62;
           &#60;dewpoint_c&#62;-24&#60;/dewpoint_c&#62;
           &#60;windchill_f&#62;-7&#60;/windchill_f&#62;
           &#60;windchill_c&#62;-22&#60;/windchill_c&#62;
           &#60;visibility_mi&#62;10.00&#60;/visibility_mi&#62;

       &#60;/current_observation&#62;

.. datafile:: weather.xml
    :fromfile: weather.xml
    :hide:

.. activecode:: web_get_weather_info_xml
    :language: python3
    :nocodelens:
    :datafile: weather.xml

    Finish the code below so that it reads the data from weather.xml
    into a tree and then prints the location, temp_f, and windchill_f for
    the current_observation.
    ~~~~
    import xml.etree.ElementTree as ET
    fh = open("weather.xml")
    data = fh.read()
    fh.close()
    tree = ET.fromstring(data)

The file ``email.json`` below contains JSON data for people including their first_name, last_name
and email address.

.. reveal:: email_data
    :showtitle: Show
    :hidetitle: Hide

    .. raw:: html

       <pre id="email.json.">
       [{
         "id": 1,
         "first_name": "Jeanette",
         "last_name": "Penddreth",
         "email": "jpenddreth0@census.gov",
         "gender": "Female",
         "ip_address": "26.58.193.2"
       }, {
         "id": 2,
         "first_name": "Giavani",
         "last_name": "Frediani",
         "email": "gfrediani1@senate.gov",
         "gender": "Male",
         "ip_address": "229.179.4.212"
       }, {
         "id": 3,
         "first_name": "Noell",
         "last_name": "Bea",
         "email": "nbea2@imageshack.us",
         "gender": "Female",
         "ip_address": "180.66.162.255"
       }, {
         "id": 4,
         "first_name": "Willard",
         "last_name": "Valek",
         "email": "wvalek3@vk.com",
         "gender": "Male",
         "ip_address": "67.76.188.26"
       }]

.. datafile:: email.json
    :fromfile: email.json
    :hide:

.. activecode:: web_email_json_write
    :language: python3
    :nocodelens:
    :datafile: email.json

    Finish the code below so that it prints the first name, last name and email
    address for each person in the list of dictionaries returned from ``json.loads(data).``
    ~~~~
    import json
    fh = open("email.json")
    data = fh.read()
    fh.close()
    person_list = json.loads(data)

The file ``person.json`` below contains JSON data for a person in a dictionary including their first name,
last name, address, and phone numbers.

.. reveal:: person_data
    :showtitle: Show
    :hidetitle: Hide

    .. raw:: html

       <pre id="person.json.">
       {
         "firstName": "John",
         "lastName": "Smith",
         "isAlive": true,
         "age": 27,
         "address": {
           "streetAddress": "21 2nd Street",
           "city": "New York",
           "state": "NY",
           "postalCode": "10021-3100"
         },
         "phoneNumbers": [
           {
             "type": "home",
             "number": "212 555-1234"
           },
           {
             "type": "office",
             "number": "646 555-4567"
           },
           {
             "type": "mobile",
             "number": "123 456-7890"
           }
         ],
         "children": [],
         "spouse": null
       }

.. datafile:: person.json
    :fromfile: person.json
    :hide:

.. activecode:: web_email_person_write
    :language: python3
    :nocodelens:
    :datafile: person.json

    Finish the code below so that it prints the first name, last name, the
    state the person lives in, and their mobile phone number.
    ~~~~
    import json
