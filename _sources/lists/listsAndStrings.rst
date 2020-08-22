Lists and strings
-----------------
.. index::
    single: List
    single: String
    single: Sequence
    pair: List; Function
    pair: Split; Function
    pair: Optional; Argument
    single: Delimiter
    pair: Join; Method
    single: Concatenation
    pair: Empty; String

A string is a sequence of characters and a list is a sequence of values,
but a list of characters is not the same as a string. To convert from a
string to a list of characters, you can use ``list``:

.. activecode:: listString
    :caption: Converting a string to a list.

    s = 'spam'
    t = list(s)
    print(t)


Because ``list`` is the name of a built-in function, you should
avoid using it as a variable name. I also avoid the letter
"l" because it looks too much like the number "1".
So that's why I use "t".

The ``list`` function breaks a string into individual letters.
If you want to break a string into words, you can use the
``split`` method:

.. activecode:: listSplit
    :caption: Using split to separate a list.

    s = 'pining for the fjords'
    t = s.split()
    print(t)

    print(t[2])

Once you have used ``split`` to break the string into a list of
words, you can use the index operator (square bracket) to look at a
particular word in the list.

You can call ``split`` with an optional argument called a
*delimiter* that specifies which characters to use as
word boundaries. The following example uses a hyphen as a delimiter:

.. activecode:: listSplitDelimiter
    :caption: Using split with a delimiter to separate a list.

    s = 'spam-spam-spam'
    delimiter = '-'
    print(s.split(delimiter))

.. mchoice:: listString_MC_poe
    :practice: T
    :answer_a: Poe
    :answer_b: EdgarAllanPoe
    :answer_c: EAP
    :answer_d: William Shakespeare
    :correct: c
    :feedback_a: Three characters but not the right ones.  namelist is the list of names.
    :feedback_b: Too many characters in this case.  There should be a single letter from each name.
    :feedback_c: Yes, split creates a list of the three names.  The for loop iterates through the names and creates a string from the first characters.
    :feedback_d: That does not make any sense.

    What is printed by the following statements?

    ::

      myname = "Edgar Allan Poe"
      namelist = myname.split()
      init = ""
      for aname in namelist:
          init = init + aname[0]
      print(init)

``join`` is the inverse of ``split``. It takes a list
of strings and concatenates the elements. ``join`` is a string
method, so you have to invoke it on the delimiter and pass the list as a
parameter:

.. activecode:: listJoin
    :caption: Using join to concatenate list elements.

    t = ['pining', 'for', 'the', 'fjords']
    delimiter = ' '
    print(delimiter.join(t))

In this case the delimiter is a space character, so ``join``
puts a space between words. To concatenate strings without spaces, you
can use the empty string, "", as a delimiter.

.. mchoice:: listString_MC_join
    :practice: T
    :answer_a: HannahGraceOliviaRuth
    :answer_b: Hannah Grace Olivia Ruth
    :answer_c: Hannah, Grace, Olivia, Ruth
    :answer_d: We would get an error
    :correct: a
    :feedback_a: Because the delimiter is an empty string (not a space) the list would join without spaces.
    :feedback_b: The delimiter is an empty string, not a space.
    :feedback_c: The delimiter is an empty string, it does not add spaces and commas automatically.
    :feedback_d: This will print without causing an error. 

    What would print when the following code executes?

    ::

      mylist = ['Hannah', 'Grace', 'Olivia', 'Ruth']
      delimiter = ''
      print(delimiter.join(mylist))

.. mchoice:: listString_MC_split
    :practice: T
    :answer_a: Smith
    :answer_b: girl
    :answer_c: 65 Elm Street
    :answer_d: eat
    :answer_e: We would get an error
    :correct: c
    :feedback_a: That's pieces[1].
    :feedback_b: That's pieces[2]
    :feedback_c: The address is at position 3 in the resulting list.
    :feedback_d: That's pieces[4]
    :feedback_e: Why would this cause an error?  We can use indices to get the element at an index in a list.

    What would print when the following code executes?

    ::

      input = "Pat,Smith,girl,65 Elm Street,eat"
      pieces = input.split(",")
      print(pieces[3])
