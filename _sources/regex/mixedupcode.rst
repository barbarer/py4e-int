Mixed-Up Code Questions
------------------------

.. parsonsprob:: re-mixed1
   :numbered: left
   :practice: T
   :adaptive:

   The following code should use a regular expression to find and print the phrase
   ``Good morning!`` in the list ``greetings``, if it is included in the list.
   -----
   import re
   =====
   greetings = ["Hello!", "Good Morning!", "good morning!"]
   =====
   for item in greetings:
   =====
       if re.search('Good morning!', item):
   =====
       if re('Good Morning!', item): #paired
   =====
           print(item)
   =====
           print(greetings) #paired

.. parsonsprob:: re-mixed2
   :numbered: left
   :practice: T
   :adaptive:

   The following code should use regular expressions to print each item in the list
   ``greetings``, if it starts with an ``H`` or an ``h``.
   -----
   import re
   =====
   greetings = ["Hello!", "hello.", "Morning!", "hi"]
   =====
   for item in greetings:
   =====
       if re.search('^[Hh]', item):
   =====
       if re('^H,h'), item): #paired
   =====
           print(item)

.. parsonsprob:: re-mixed3
    :numbered: left
    :practice: T
    :adaptive:

    The following code should use regular expressions to print each item in the list
    ``greetings``, if it includes an ``o``.
    -----
    import re
    =====
    greetings = ["Hello!", "Good Morning!", "hi"]
    =====
    for item in greetings:
    =====
        if re.search('o', item):
    =====
        if re('^o', item): #paired
    =====
            print(item)


.. parsonsprob:: re-mixed4
    :numbered: left
    :practice: T
    :adaptive:

    The following code should use create a regular expression pattern for the word ``Puppy``
    and test it on the sequence. If they are the same, it should print ``Match!``, if not it
    should print ``Not a match!``.
    -----
    import re
    =====
    import regEx #paired
    =====
    pattern = "Puppy"
    sequence = "Puppies"
    =====
    if re.match(pattern, sequence):
    =====
    if re.match(sequence, pattern): #paired
    =====
        print("Match!")
    =====
    else:
    =====
        print("Not a match!")

.. parsonsprob:: re-mixed5
    :numbered: left
    :practice: T
    :adaptive:

    The following code should use create a regular expression pattern that can match
    ``Sincerely, Molly`` where there is at least one space after the comma, but there can be many spaces.
    Test it on the sequence. If they are the same, it should print ``Match!``, if not it
    should print ``Not a match!``.
    -----
    import re
    sequence = "Sincerely,       Molly"
    =====
    pattern = r"Sincerely,\s+Molly"
    =====
    pattern = r"Sincerely,\s*Molly" #paired
    =====
    if re.match(pattern, sequence):
    =====
        print("Match!")
    =====
    else:
    =====
        print("Not a match!")

.. parsonsprob:: re-mixed6
    :numbered: left
    :practice: T
    :adaptive:

    The following code should create a new string ``y`` from the first price found
    in the string ``x``. A price must have at least one digit after a '$' and can optionally have a period followed by two digits.
    -----
    import re
    =====
    x = 'We just received $10.00 for cookies.'
    =====
    y = re.findall('\$\d+(?:\.\d{2})?',x)[0]
    =====
    y = re.findall('\$\d*(?:\.\d{2})?',x)[0] #paired

.. parsonsprob:: re-mixed7
    :numbered: left
    :practice: T
    :adaptive:

    The following code should read all the lines in a file, remove whitespace from the end of the line, and
    use regular expressions to find and print out anything that looks like an email
    address. The blocks have been mixed up, and include two extra blocks that are not correct.
    -----
    import re
    =====
    hand = open('mbox-short.txt')
    =====
    for line in hand:
    =====
        line = line.rstrip()
    =====
        x = re.findall('\S+@\S+', line)
    =====
        x = re.find('\S+@\S', line) #distractor
    =====
        x = re.findall('[A-Z]+@.*', line) #distractor
    =====
        for item in x:
    =====
            print(item)

.. parsonsprob:: re-mixed8
    :numbered: left
    :practice: T
    :adaptive:

    The following code should read all the lines in a file, remove whitespace from the right side of the line, and
    use regular expressions to find and print out anything lines that start with “From:”,
    followed by one or more characters, followed by an at-sign. The blocks have been
    mixed up, and include two extra blocks that are not correct.
    -----
    import re
    =====
    hand = open('mbox-short.txt')
    =====
    for line in hand:
    =====
        line = line.rstrip()
    =====
        if re.search('^From:.+@', line):
    =====
        if re.search('^F..m:', line): #distractor
    =====
            print(line)
    =====
            print(hand) #distractor

.. parsonsprob:: re-mixed9
    :numbered: left
    :practice: T
    :adaptive:

    The following code should read all the lines in a file, remove whitespace from the right side of the line, and
    use regular expressions to search for lines that start with 'Details: rev='
    followed by numbers and '.'. Then print the number of occurrences of that pattern in each line.
    -----
    import re
    =====
    hand = open('mbox-short.txt')
    =====
    for line in hand:
    =====
        line = line.rstrip()
    =====
        x = re.findall('^Details:.*rev=([0-9]+\.)', line)
    =====
        x = re.findall('^X\S*: ([0-9]+\.)', line) #distractor
    =====
        print(len(x))
    =====
        print(x) #distractor

.. parsonsprob:: re-mixed10
    :numbered: left
    :practice: T
    :adaptive:

    The following code should search for lines that start with 'X' followed by at least one
    non whitespace character then ':' followed by one space and at least one digit
    then print the number of items found on each line.
    -----
    import re
    =====
    hand = open('mbox-short.txt')
    =====
    for line in hand:
    =====
    for line in 'mbox-short.txt' #distractor
    =====
        line = line.rstrip()
    =====
        x = re.findall('^X\S+: [0-9]+', line)
    =====
        print(len(x))
