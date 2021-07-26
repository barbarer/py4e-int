Multiple Choice Questions
--------------------------
.. mchoice:: networks_ex1
    :practice: T
    :answer_a: urllib
    :answer_b: bs4
    :answer_c: HTTP
    :answer_d: GET
    :correct: c
    :feedback_a: urlib is a python library that contains several modules with URLs
    :feedback_b: bs4 is a python library pulling out data from HTML files.
    :feedback_c: HTTP is a network protocol that is used to transmit different documents like HTML.
    :feedback_d: GET is a HTTP request method from a specified resource in a server.

    What  protocol can be used to retrieve web pages using python?

.. mchoice:: networks_ex2
    :practice: T
    :answer_a: socket
    :answer_b: port
    :answer_c: http
    :answer_d: protocol
    :correct: a
    :feedback_a: A single socket is a program that can be used to send and receive data in a network.
    :feedback_b: A port represents an endpoint on a computer that can connect to different network nodes.
    :feedback_c: HTTP is a protocol used for transfer data from a web server.
    :feedback_d: protocol is a set of rules that determine how data is transmitted over a network.

    What provides two way communication between two different programs in a network.

.. mchoice:: networks_ex3
    :practice: T
    :answer_a: http
    :answer_b: urllib
    :answer_c: port
    :answer_d: header
    :correct: b
    :feedback_a: http is a protocol and not a python library
    :feedback_b: urllib can be used to send and receive data over HTTP instead of manually doing it using a webbrowser.
    :feedback_c: port is an endpoint for a device to connect with other devices in a network to transmit similar types of data.
    :feedback_d: a header is additional information sent and received along with data.

    What is a python library that can be used to send and receive data over HTTP?

.. mchoice:: networks_ex4
    :practice: T
    :answer_a: scrape
    :answer_b: parse
    :answer_c: BeautifulSoup
    :answer_d: spider
    :correct: d
    :feedback_a: Scrape is the act of extraction of webpages
    :feedback_b: Parse is breaking down scraped webpages to useful data
    :feedback_c: BeautifulSoup is a python library for extracting HTML documents
    :feedback_d: spider retrieves a webpage and then all the webpages linked to it to form a search index.

    What is the process by which search engines retrieve webpages and build a search index called?

.. mchoice:: networks_ex5
    :practice: T
    :answer_a: It sends a request to extract 'romeo.txt' from 'data.pr4e.org'
    :answer_b: It sends the 'romeo.txt' file to 'data.pr4e.org'
    :answer_c: It creates a file named 'romeo.txt'
    :answer_d: It throws an error because a socket cannot use HTTP.
    :correct: a
    :feedback_a: this sends a GET request to the webserver over port 80
    :feedback_b: This does not send a file to the webserver.
    :feedback_c: This does not create a file
    :feedback_d: sockets can be used to connect with different types of servers using different protocols.

    What does the following block of code do?
    ::

        mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        mysock.connect(('data.pr4e.org', 80))
        cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
        mysock.send(cmd)


.. mchoice:: networks_ex6
    :practice: T
    :answer_a: It creates a file named 'romeo.txt' in 'data.pr4e.org'
    :answer_b: It finds the urls linked to 'data.pr4e.org' and prints it.
    :answer_c: It opens a file named 'http://data.pr4e.org/romeo.txt' in local storage
    :answer_d: It prints the contents of 'romeo.txt' after retrieving it from 'data.pr4e.org'
    :correct: d
    :feedback_a: urllib.request cannot create files in a web server.
    :feedback_b: urllib.request is not a spider.
    :feedback_c: urllib.request does not handle files in local storage
    :feedback_d: urllib.request requests the file and then accepts it.

    What does the following block of code do?
    ::

        import urllib.request

        fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
        for line in fhand:
            print(line.decode().strip())

.. mchoice:: networks_ex7
    :practice: T
    :answer_a: It retrieves 'cover3.jpg' and saves it to your computer.
    :answer_b: It displays the image 'cover3.jpg'.
    :answer_c: It retrieves the url to download 'cover3.jpg'
    :correct: a
    :feedback_a: Running the code does not display any output because it saves the file to your computer.
    :feedback_b: It does not output anything on the screen.
    :feedback_c: The urllib retrieves the file and parses it.

    What does the following block of code do?
    ::

        import urllib.request, urllib.parse, urllib.error

        img = urllib.request.urlopen('http://data.pr4e.org/cover3.jpg').read()
        fhand = open('cover3.jpg', 'wb')
        fhand.write(img)
        fhand.close()


.. mchoice:: networks_ex8
    :practice: T
    :answer_a: Exact match to 'http[s]?://.+?'
    :answer_b: 'http://' or 'http[s]://' followed by one or more character
    :answer_c: 'http://' or 'https://' followed by one or more characters.
    :answer_d: 'https://' followed by one or more characters.
    :correct: c
    :feedback_a: The regex uses wildcard characters and is not an exact match case.
    :feedback_b: the square brackets denotes a character class with 0 or 1 's'.
    :feedback_c: the '[s]?' means 0 or 1 s and '.+?' means 1 or more characters
    :feedback_d: the regex also accepts 'http://' because '[s]?' means 'http' followed by 0 or 1 's'

    What does the following regex match?
    ::

        http[s]?://.+?

.. mchoice:: networks_ex9
    :practice: T
    :answer_a: retrieves and displays the webpage
    :answer_b: parses the html content of the "https://www.nytimes.com" webpage.
    :answer_c: downloads the webpage
    :correct: b
    :feedback_a: This does not display the webpage. BeautufulSoup parses webpage retrieved by urllib.rquest
    :feedback_b: This parses all html tags and contents of the webpage.
    :feedback_c: This does not save files to the computer

    What does the following block of code do?
    ::

        url = "https://www.nytimes.com"
        html = urllib.request.urlopen(url, context=ctx).read()
        soup = BeautifulSoup(html, 'html.parser')

.. mchoice:: networks_ex10
    :practice: T
    :answer_a: retrieves and displays the webpage
    :answer_b: downloads the webpage
    :answer_c: prints the images from 'www.nytimes.com'
    :answer_d: prints all the 'img' sources under 'src' from  'www.nytimes.com'
    :correct: d
    :feedback_a: urllib retrieves the webpage but does not display it
    :feedback_b: this does not save files to the computer
    :feedback_c: BeautifulSoup and html.parser cannot display images
    :feedback_d: it prints  out the image sources listed under 'src' of 'img' tags.

    What does the following block of code print?
    ::

        url = "https://www.nytimes.com/"
        html = urllib.request.urlopen(url).read()
        soup = BeautifulSoup(html, 'html.parser')

        tags = soup('img')
        for tag in tags:
            print(tag.get('src', None))
