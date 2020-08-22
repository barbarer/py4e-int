Mixed-Up Code Questions
------------------------

.. parsonsprob:: mixedupcode_question11_1
   :numbered: left
   :practice: T
   :adaptive:

   The following code should use regular expressions to find and print the phrase
   "Good morning!" from the list "greetings", if it is included in the list.
   The blocks have been mixed up, and include two extra blocks that are not correct.
   Watch out for the extra blocks and indentation!
   -----
   import re
   =====
   greetings = ["Hello!", "hello.", "Good Morning!", "good morning!", "Good morning!", "hi"]
   =====
   for item in greetings:
   =====
    if re.search('Good morning!', item):
   =====
    if re('Good Morning!', item): #distractor
   =====
     print(item)
   =====
     print(greetings) #distractor

.. parsonsprob:: mixedupcode_question11_2
   :numbered: left
   :practice: T
   :adaptive:

   The following code should use regular expressions to print each item in the list
   "greetings", if it starts with an "H" or an "h". The blocks have been mixed
   up, and include two extra blocks that are not correct. Watch out for the extra
   blocks and indentation!
   -----
   import re
   =====
   greetings = ["Hello!", "hello.", "Good Morning!", "good morning!", "Good morning!", "hi"]
   =====
   for item in greetings:
   =====
    if re.search('^[Hh]', item):
   =====
    if re('[Hh]', item): #distractor
   =====
    if re('^H,h'), item): #distractor
   =====
     print(item)

.. parsonsprob:: mixedupcode_question11_3
    :numbered: left
    :practice: T
    :adaptive:

    The following code should use regular expressions to print each item in the list
    "greetings", if it includes an "o". The blocks have been mixed up, and include
    two extra blocks that are not correct. Watch out for the extra blocks and indentation!
    -----
    import re
    =====
    greetings = ["Hello!", "hello.", "Good Morning!", "good morning!", "Good morning!", "hi"]
    =====
    for item in greetings:
    =====
        if re.search('o', item):
    =====
        if re('0', item): #distractor
    =====
        if re('^o', item): #distractor
    =====
            print(item)


.. parsonsprob:: mixedupcode_question11_4
    :numbered: left
    :practice: T
    :adaptive:

    The following code should use create a regular expression pattern for the word "Puppy"
    and test it on the sequence. If they are the same, it should print "Match!", if not it
    should print "Not a match!". The blocks have been mixed up, and include two extra blocks
    that are not correct. Watch out for the extra blocks and indentation!
    -----
    import regEx #distractor
    =====
    import re
    =====
    pattern = r"Puppy"
    sequence = "Puppies"
    =====
    if re.match(pattern, sequence):
    =====
    if re.match(sequence, pattern): #distractor
    =====
        print("Match!")
    =====
    else:
    =====
        print("Not a match!")

.. parsonsprob:: mixedupcode_question11_5
    :numbered: left
    :practice: T
    :adaptive:

    The following code should use create a regular expression pattern that can match
    the following phrases: <br>
    "Sincerely, Molly" <br>"Sincerely, &nbsp; Molly" <br>"Sincerely,<br>Molly" <br> and
    test it on the sequence. If they are the same, it should print "Match!", if not it
    should print "Not a match!". The blocks have been mixed up, and include two extra
    blocks that are not correct. Watch out for the extra blocks and indentation!
    -----
    import re
    =====
    pattern = r"Sincerely,\Molly"
    =====
    pattern = r"Sincerely, *Molly" #distractor
    =====
    pattern = r"Sincerely, .* Molly" #distractor
    =====
    sequence = "Sincerely,       Molly"
    =====
    if re.match(pattern, sequence):
    =====
        print("Match!")
    =====
    else:
    =====
        print("Not a match!")

.. parsonsprob:: mixedupcode_question11_6
    :numbered: left
    :practice: T
    :adaptive:

    The following code should create a new string "y" from the price included
    in the string "x". The blocks have been mixed up, and include two extra
    blocks that are not correct.
    -----
    import re
    =====
    x = 'We just received $10.00 for cookies.'
    =====
    y = re.findall('\$[0-9.]+',x)
    =====
    y = re.find('\$[0-9]+',x) #distractor
    =====
    y = re.findall('$[0-9]+',x) #distractor

.. parsonsprob:: mixedupcode_question11_7
    :numbered: left
    :practice: T
    :adaptive:

    The following code should read all the lines in a file, remove whitespace, and
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
        if len(x) > 0:
    =====
            print(x)

.. parsonsprob:: mixedupcode_question11_8
    :numbered: left
    :practice: T
    :adaptive:

    The following code should read all the lines in a file, remove whitespace, and
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

.. parsonsprob:: mixedupcode_question11_9
    :numbered: left
    :practice: T
    :adaptive:

    The following code should read all the lines in a file, remove whitespace, and
    use regular expressions to search for lines that start with 'Details: rev='
    followed by numbers and '.'. Then print the number of occurrences if it is greater
    than zero. The blocks have been mixed up, and include two extra blocks that are not correct.
    -----
    import re
    =====
    hand = open('mbox-short.txt')
    =====
    for line in hand:
    =====
        line = line.rstrip()
    =====
        x = re.findall('^Details:.*rev=([0-9.]+)', line)
    =====
        x = re.findall('^X\S*: ([0-9.]+)', line) #distractor
    =====
        if len(x) > 0:
    =====
        if len(x) < 0: #distractor
    =====
            print(x)

.. parsonsprob:: mixedupcode_question11_10
    :numbered: left
    :practice: T
    :adaptive:

    The following code should search for lines that start with 'X' followed by any
    non whitespace characters and ':' followed by a space and any number (that can be a float)
    then print the number if it is greater than zero. The blocks have been mixed up, and include
    two extra blocks that are not correct. Watch out for the extra blocks and indentation!
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
        x = re.findall('^X\S*: ([0-9.]+)', line)
    =====
        if len(x) > 0:
    =====
        if len(hand) > 0: #distractor
    =====
            print(x)
