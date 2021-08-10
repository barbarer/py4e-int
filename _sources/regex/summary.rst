Summary
-------

While this only scratched the surface of regular expressions, we have
learned a bit about the language of regular expressions. They are search
strings with special characters in them that communicate your wishes to
the regular expression system as to what defines "matching" and what is
extracted from the matched strings. Here are some of those special
characters and character sequences:

``^`` Matches the beginning of the string.

``$`` Matches the end of the string.

``.`` Matches any character (a wildcard).

``\s`` Matches a whitespace character.

``\S`` Matches a non-whitespace character (opposite of \s).

``*`` Applies to the immediately preceding character(s) and indicates to match
zero or more times.

``*?`` Applies to the immediately preceding character(s) and indicates to
match zero or more times in "non-greedy mode".

``+`` Applies to the immediately preceding character(s) and indicates to match
one or more times.

``+?`` Applies to the immediately preceding character(s) and indicates to
match one or more times in "non-greedy mode".

``?`` Applies to the immediately preceding character(s) and indicates to match
zero or one time.

``??`` Applies to the immediately preceding character(s) and indicates to
match zero or one time in "non-greedy mode".

``[aeiou]`` Matches a single character as long as that character is in the
specified set. In this example, it would match "a", "e", "i", "o", or
"u", but no other characters.

``[a-z0-9]`` You can specify ranges of characters using the minus sign. This
example is a single character that must be a lowercase letter or a
digit.

``[^A-Za-z]`` When the first character in the set notation is a caret, it
inverts the logic. This example matches a single character that is
anything *other than* an uppercase or lowercase letter.

``( )`` When parentheses are added to a regular expression, they are ignored
for the purpose of matching, but allow you to extract a particular
subset of the matched string rather than the whole string when using
``findall()``.

``\b`` Matches an empty string, but only at a word boundary.  Must be used in a raw string (r"string") so that it isn't changed to a backspace.

``\B`` Matches an empty string, but only when it is not at the beginning or end of a word.

``\d`` Matches any decimal digit; equivalent to the set [0-9].

``\D`` Matches any non-digit character; equivalent to the set [^0-9].


.. dragndrop:: re-summary-dnd1
    :feedback: Look above for the definitions of these special characters.
    :match_1: ^|||Matches the beginning of the line.
    :match_2: $|||Matches the end of the line.
    :match_3: .|||Matches any character (a wildcard).
    :match_4: \s|||Matches a whitespace character.
    :match_5: \S|||Matches a non-whitespace character.

    Match each character with its regex definition.

.. dragndrop:: re-summary-dnd2
    :feedback: Look above for the definitions of these special characters.
    :match_1: *|||Match the previous character(s) zero or more times (greedy).
    :match_2: *?|||Match the previous character(s) zero or more times in "non-greedy mode".
    :match_3: +|||Match the previous character(s) one or more times (greedy).
    :match_4: +?|||Match the previous character(s) one or more times in "non-greedy mode".
    :match_5: ?|||Match the previous character(s) zero or one time.
    :match_6: ??|||Match the previous character(s) zero or one time in "non-greedy mode".

    Match each character with its regex definition.

.. dragndrop:: re-summary-dnd3
    :feedback: Look above for the definitions of these special characters.
    :match_1: [aeiou]|||Matches a single character as long as that character is in the specified set.
    :match_2: ()|||Used to extract a particular subset of the matched string rather than the whole string when using findall().
    :match_3: \b|||Matches an empty string, but only at the start or end of a word.
    :match_4: \B|||Matches an empty string, but not at the start or end of a word.
    :match_5: \d|||Matches any decimal digit; equivalent to the set [0-9].
    :match_6: \D|||Matches any non-digit character; equivalent to the set [^0-9].

    Match each character with its regex definition.
