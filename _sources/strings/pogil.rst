Group Work - Strings
--------------------------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

Many interesting problems involve manipulating sequences of data.
You've learned about strings before, but this activity
provides a more in-depth look at what they can do.

**Content Learning Objectives**

*After completing this activity, students should be able to:*

* Explain the syntax and meaning of slice operations, with and without indexes.
* Name four methods that strings provide, and describe what each method does.

**Process Skill Goals:**

*During the activity, students should make progress toward:*

* Gaining insight about data structures from many examples (Information Processing).

Indexing and Slicing
============================

A string is a sequence of characters in single quotes(') or double
quotes ("). Depending on the application, we can treat a string as
a single value (e.g., ``sentence``), or we can access individual
characters using square brackets (e.g., ``sentence[0]``). We can also
use **slice notation** (e.g., ``sentece[4:8]``) to refer to a range of
characters. In fact, all types of sequences (including ``list``
and ``tuple``) support indexing and slicing.

.. activecode:: strings_ac_pogil_output_indexingandslicing
    :caption: Exploring string indexing and slicing

    Run this code to see what it prints. Its output will help you answer the questions below.
    ~~~~
    sentence = 'I_am_smart' # This line prints nothing
    print(type(sentence))
    print(len(sentence))
    print(sentence[5])
    print(sentence[9])
    print(sentence[:5])
    print(sentence[5:])
    print(sentence[5:10])
    triplet = sentence[2:5] # This line prints nothing
    print(triplet)
    print(sentence[-5])
    print(sentence[-10])
    print(sentence[:-5])
    print(sentence[-5:])
    triplet = sentence[-4:-1] # This line prints nothing
    print(triplet)

.. mchoice:: strings_MC_pogil_positiveindex
    :answer_a: 0, 9
    :answer_b: 0, 10
    :answer_c: 1, 9
    :answer_d: 1, 10
    :correct: a
    :feedback_a: Correct! Indices begin at 0 and increment by 1 for each following character.
    :feedback_b: Incorrect! There are 10 characters in the string, and the first character is index 0, so what is the index of the last character? Try again.
    :feedback_c: Incorrect! Indices begin at 0. Try again.
    :feedback_d: Incorrect! Indices begin at 0. Try again.

    What is the *positive* index of the first character in the ``sentence`` string? What about the last?

.. mchoice:: strings_MC_pogil_negativeindex
    :answer_a: -9, 0
    :answer_b: -9, -1
    :answer_c: -10, 0
    :answer_d: -10, -1
    :correct: d
    :feedback_a: Incorrect! 0 is the index of the first character in the string, not the last. Try again.
    :feedback_b: Incorrect! There are 10 characters in the string, so if the last one has an index of -1, what is the negative index of the first? Try again.
    :feedback_c: Incorrect! 0 is the index of the first character in the string, not the last. Try again.
    :feedback_d: Correct! Negative indices start at the length of the string times -1. Then, they increment by 1 for each following character.

    What is the *negative* index of the first character in the ``sentence`` string? What about the last?

.. mchoice:: strings_MC_pogil_posandneg
    :answer_a: a, r
    :answer_b: a, a
    :answer_c: _, r
    :answer_d: _, a
    :correct: a
    :feedback_a: Correct! 'a' is the third character in the string (so its index is 2) and 'r' is the second-to-last character in the string.
    :feedback_b: Incorrect! "sentence[-2]" is the second-to-last character in the string. Try again.
    :feedback_c: Incorrect! "sentence[2]" is the third character in the string. Try again.
    :feedback_d: Incorrect! "sentence[2]" is the third character in the string and "sentence[-2]" is the second-to-last character in the string. Try again.

    What is ``sentence[2]``? What about ``sentence[-2]``?

Let's take a look at how the ``:`` operator works for slicing
a string. Consider the example ``sentence[m:n]``. The value at
``m`` is the first character in the slice. It is the same value
as ``sentence[m]``. However, the value at ``n`` is not the same
value as ``sentence[n]``. ``n`` is the index *after* the last
character included in the slice.

You can also reference only a single number when creating a
slice. The slice ``[m:]`` means "from the index ``m`` to the
end." The slice ``[:n]`` means "from the beginning to the index
just before ``n``" (i.e., the first ``n`` characters).

.. fillintheblank:: strings_fitb_pogil_smarpos

    Write a Python expression that slices "smar" from ``sentence`` using only *positive* indexes. Reminder: ``sentence`` = "I_am_smart".

    - :sentence\[5:9\]: Correct! This slice starts at 's', which is index 5, and stops after including 'r' at index 8, which is one index before 9.
      :sentence\[5:8\]: Incorrect! The second number in the slice is the index after the index of the last character you want to include. Try again.
      :.*: Incorrect! Write your answer in the form "sentence[m:n]". Try again.

.. fillintheblank:: strings_fitb_pogil_smarneg

    Write a Python expression that slices "smar" from ``sentence`` using only *negative* indexes. Reminder: ``sentence`` = "I_am_smart".

    - :sentence\[-5:-1\]: Correct! This slice starts at 's', which is index -5, and stops after including 'r' at index -2, which is one index before -1.
      :sentence\[-5:0\]: Incorrect! Remember, the last character in the string has the index -1. Try again.
      :.*: Incorrect! Write your answer in the form "sentence[-m:-n]". Try again.


Common String Methods
============================

Strings have **methods** (built-in functions) that can be called
using dot notation. See https://docs.python.org/3/library/stdtypes.html#string-methods
for a list of Python string methods.

.. activecode:: strings_ac_pogil_output_methods
    :caption: Exploring various string methods

    Run this code to see what it prints. Its output will help you answer the questions below.
    ~~~~
    dna = 'CTGACGACCT' # This line prints nothing
    print(dna.lower())
    print(dna)
    lowercase = dna.lower() # This line prints nothing
    print(lowercase)
    dnalist = list(dna) # This line prints nothing
    print(dnalist)
    print(type(dna))
    dna = dna.split('A') # This line prints nothing
    print(dna)
    print(type(dna))
    # dna.replace('C', 'g')
    # The line above would cause an error with the text:
    # AttributeError: 'list' object has no attribute 'replace'
    print(dna[0])
    print(type(dna[0]))
    print(dna[0].replace('C', 'g'))
    print(dna)

.. mchoice:: strings_MC_pogil_lower
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Incorrect! Take a closer look at the code above. Try again.
    :feedback_b: Correct! When line 3 of the code above prints(dna), it is still capitalized, even though in the previous line, "lower" was called on dna.

    True or false: the ``lower`` method changes the contents of the string it is called on.

.. mchoice:: strings_MC_pogil_replace
    :practice: T
    :answer_a: Finds and replaces the first instance of a substring in a larger string with a different string, changing the original string.
    :answer_b: Finds and replaces the first instance of a substring in a larger string with a different string, returning a changed version of the string but without changing the original string.
    :answer_c: Finds and replaces every instance of a substring in a larger string with a different string, changing the original string.
    :answer_d: Finds and replaces every instance of a substring in a larger string with a different string, returning a changed version of the string but without changing the original string.
    :correct: d
    :feedback_a: Incorrect! Strings are "immutable", which means that their value is unchanged by methods. Try again.
    :feedback_b: Incorrect! replace() replaces all occurrences of the substring, not just the first one. Try again.
    :feedback_c: Incorrect! Strings are "immutable", which means that their value is unchanged by methods. Try again.
    :feedback_d: Correct! replace() replaces all occurrences of the substring, not just the first one. However, it doesn't change the original string.

    What does the ``replace`` method do? Assume it is called with two arguments.

You may have noticed that it isn't possible to call the
``replace`` method on ``dna``, but calling it on ``dna[0]``
is okay. This is because the "list" data type does not
include a replace method. However, strings allow you to
"find and replace" any text. Keep in mind, however, that
string variables don't change after applying a method.
For this reason, strings are referred to as **immutable**
(i.e., the value never changes).

.. mchoice:: strings_MC_pogil_capitalize
    :practice: T
    :answer_a: name.capitalize()
    :answer_b: name = name.capitalize()
    :answer_c: name = name.capitalize(name)
    :answer_d: capitalize(name)
    :correct: b
    :feedback_a: Incorrect! Because strings are immutable, the value of "name" would remain unchanged. Try again.
    :feedback_b: Correct! Because strings are immutable, the value of "name" must be changed to equal the string returned by "name.capitalize()".
    :feedback_c: Incorrect! The "capitalize" method has no parameters, just like the "lower" method. Try again.
    :feedback_d: Incorrect! "capitalize" is a method, so it must be called using dot notation. Try again.

    The ``capitalize`` method capitalizes the first character of a string. If I wanted to capitalize the first letter of the string ``name = "robby"``, *and change the value of* ``name``, what line of code would I write?

.. mchoice:: strings_MC_pogil_capitalizesubstr
    :practice: T
    :answer_a: nofirst = name[1:].capitalize()
    :answer_b: nofirst = name[1:4].capitalize()
    :answer_c: nofirst = name.capitalize()[1:]
    :answer_d: nofirst = name[1:].capitalize
    :correct: a
    :feedback_a: Correct! This creates the slice "obby" and then capitalizes the first letter of it.
    :feedback_b: Incorrect! This would make "nofirst" = "Obb", not "Obby". Try again.
    :feedback_c: Incorrect! This would make "nofirst" = "obby" because "capitalize" was called before the slice. Try again.
    :feedback_d: Incorrect! This would cause a SyntaxError, as "capitalize" needs to be called with parentheses. Try again.

    If I wanted to create a new string, ``nofirst``, whose value equals "Obby", what line of code would I write? Reminder: ``name = "robby"``.

.. mchoice:: strings_MC_pogil_replacesubstr
    :practice: T
    :answer_a: nofirst = replace(nofirst[-2:0], nofirst[0:2])
    :answer_b: nofirst = nofirst.replace(nofirst[2:], nofirst[-2:])
    :answer_c: nofirst = nofirst.replace(nofirst[:2], nofirst[-2:])
    :answer_d: nofirst = nofirst.replace(nofirst[-2:], nofirst[:2])
    :correct: d
    :feedback_a: Incorrect! "replace" is a string method, so it must be called with dot notation. Try again.
    :feedback_b: Incorrect! This wouldn't change the string at all because it would replace the last two characters with themselves. Try again.
    :feedback_c: Incorrect! This would replace "Ob" with "by, making "nofirst" = "byby". Try again.
    :feedback_d: Correct! This replaces all instances of "by" in "nofirst" with "Ob".

    The string ``nofirst`` now equals "Obby". What line of code would I write if I wanted to change its value to "ObOb"?

.. dragndrop:: strings_dnd_pogil_methods
    :practice: T
    :feedback: Keep trying! Run the code block above if you need more help.
    :match_1: split|||Returns a list of substrings which were separated by a specific character/string.
    :match_2: lower|||Returns a new string with all letters changed to lowercase.
    :match_3: replace|||Returns a new string with all occurences of a specific substring substituted with another string.
    :match_4: capitalize|||Returns a new string with the first letter changed to uppercase.

    Match each string method to a description of what it does.

.. parsonsprob:: strings_parsons_pogil_methods
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The code blocks below have been mixed up! Rearrange them so that the program prints "Georgington". Watch out - there are three code blocks that are unused in the solution!
    -----
    president = "george washington"
    =====
    president = president[:5] + president[-6:]
    =====
    president = president[:5] + [-6:] #distractor
    =====
    president = president[:4] + president[-5:] #distractor
    =====
    print(president = president.capitalize()) #distractor
    =====
    print(president.capitalize())

There are dozens of other string methods not shown in this
section of the ebook. Read Python's online documentation at
https://docs.python.org/3/library/stdtypes.html#string-methods
to learn about more! They can be *very* helpful.

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: strings_groupsub
   :limit: 3
