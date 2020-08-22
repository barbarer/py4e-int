JavaScript Object Notation - JSON
---------------------------------
.. index::
    single: JSON
    single: JavaScript Object Notation

The JSON format was inspired by the object and array format used in the
JavaScript language. But since Python was invented before JavaScript,
Python's syntax for dictionaries and lists influenced the syntax of
JSON. So the format of JSON is nearly identical to a combination of
Python lists and dictionaries.

Here is a JSON encoding that is roughly equivalent to the simple XML
from before:

.. code-block:: json

    {
     "name" : "Chuck",
     "phone" : {
       "type" : "intl",
       "number" : "+1 734 303 4456"
      },
      "email" : {
        "hide" : "yes"
      }
    }


You will notice some differences. First, in XML, we can add attributes
like "intl" to the "phone" tag. In JSON, we simply have key-value pairs.
Also the XML "person" tag is gone, replaced by a set of outer curly
braces.

In general, JSON structures are simpler than XML because JSON has fewer
capabilities than XML. But JSON has the advantage that it maps
*directly* to some combination of dictionaries and lists.
And since nearly all programming languages have something equivalent to
Python's dictionaries and lists, JSON is a very natural format to have
two cooperating programs exchange data.

.. mchoice:: webJSON_MC_tf
    :practice: T
    :answer_a: False
    :answer_b: True
    :correct: a
    :feedback_a: JSON actually has less capabilities than XML.
    :feedback_b: Try again!

    True or False? JSON and XML have the same capabilities.

.. mchoice:: webJSON_MC_compare
    :practice: T
    :answer_a: XML can add attributes to tags.
    :answer_b: JSON uses curly braces.
    :answer_c: XML has a simpler structure than JSON.
    :answer_d: JSON has a simpler structure than XML.
    :correct: c
    :feedback_a: XML can add attributes to tags, while JSON only uses key-value pairs.
    :feedback_b: JSON uses curly braces in place of some tags used in XML.
    :feedback_c: XML is actually a more complex than JSON because it has more capabilities.
    :feedback_d: JSON has a simpler structure than XML and fewer capabilities.

    Which of the following is **not** a difference between JSON and XML?

JSON is quickly becoming the format of choice for nearly all data
exchange between applications because of its relative simplicity
compared to XML.

.. mchoice:: webJSON_MC_acro
    :practice: T
    :answer_a: Java Single Object Notation
    :answer_b: JavaScript Object Notation
    :answer_c: JavaScript Server Operation Notation
    :answer_d: Java Sold On Nantucket
    :correct: b
    :feedback_a: JSON uses some Java notations but isn't fully in the acronym.
    :feedback_b: JSON is an acronym for <b>J</b>ava<b>S</b>cript <b>O</b>bject <b>N</b>otation.
    :feedback_c: The "s" in JSON is actually included in the first word!
    :feedback_d: Java (coffee) is sold many places.

    JSON stands for what?
