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

Here is a JSON encoding of some data. The outermost JSON structure is a dictionary
and the value for two of the keys (phone and email) are dictionaries as well.

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

Here is the XML equivalent.

.. code-block:: {.xml}

    <person>
      <name>Chuck</name>
      <phone type="intl">
        +1 734 303 4456
      </phone>
      <email hide="yes" />
    </person>


You will notice some differences. First, in XML, we can add attributes
like "intl" to the "phone" tag. In JSON, we simply have key-value pairs in a dictionary.
Also the XML "person" tag is gone, replaced by a set of outer curly
braces.

In general, JSON structures are simpler than XML because JSON has fewer
capabilities than XML. But JSON has the advantage that it maps
*directly* to some combination of dictionaries and lists.
And since nearly all programming languages have something equivalent to
Python's dictionaries and lists, JSON is a very natural format to have
two cooperating programs exchange data.


.. mchoice:: webJSON_MC_diffs_XML
    :practice: T
    :answer_a: XML uses attribute = "value" and JSON uses "attribute" : "value"
    :answer_b: XML supports nested data, but JSON does not
    :answer_c: XML is used to structure data, and JSON is not
    :answer_d: XML is extensible, while JSON is not
    :correct: a, d
    :feedback_a: Correct! XML uses attribute = "value" and JSON uses "attribute" = "value"
    :feedback_b: Incorrect. Both support nested data
    :feedback_c: Incorrect. Both are used to structure data
    :feedback_d: Correct! XML is extensible and JSON is not.

    Which of the following are differences between JSON and XML?

.. mchoice:: webJSON_MC_not_diffs
    :practice: T
    :answer_a: XML can add attributes to tags.
    :answer_b: JSON uses curly braces.
    :answer_c: XML has a simpler structure than JSON.
    :answer_d: JSON has a simpler structure than XML.
    :correct: c
    :feedback_a: XML can add attributes to tags, while JSON uses key-value pairs.
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

List of Dictionaries
=========================

The outermost JSON structure can be a dictionary or a list.  Here is an example
where the outermost JSON structure is a list.  In this case it is a list of dictionaries.

.. code-block:: json

   [{
     "id": 1,
     "first_name": "Jeanette",
     "last_name": "Penddreth",
     "email": "jpenddreth0@census.gov",
     "gender": "Female",
    }, {
     "id": 2,
     "first_name": "Giavani",
     "last_name": "Frediani",
     "email": "gfrediani1@senate.gov",
     "gender": "Non-binary",
   }]

.. mchoice:: webJSON_equivalent_xml

    Which of the following is the correct equivalent XML to the JSON above?

    -   ::

             <students>
                 <student>
                     <id>1</id>
                     <first_name>Jeanette<first_name>
                     <last_name>Penddreth<last_name>
                     <email>jpenddreth0@census.gov<email>
                     <gender>Female<gender>
                 </student>
                 <student>
                     <id>2</id>
                     <first_name>Giavani<first_name>
                     <last_name>Frediani<last_name>
                     <email>gfrediani1@senate.gov<email>
                     <gender>Non-binary<gender>
                 </student>
             </students>

        -    Incorrect - some of the closing tags are not correct

    -   ::

             <student>
                 <id>1</id>
                 <first_name>Jeanette</first_name>
                 <last_name>Penddreth</last_name>
                 <email>jpenddreth0@census.gov</email>
                <gender>Female</gender>
             </student>
             <student>
                 <id>2</id>
                 <first_name>Giavani</first_name>
                 <last_name>Frediani</last_name>
                 <email>gfrediani1@senate.gov</email>
                 <gender>Non-binary</gender>
             </student>

        -    Incorrect.  This is missing a root tag.  XML must have one root tag.

    -   ::

             <students>
                 <student>
                     <id>1</id>
                     <first_name>Jeanette</first_name>
                     <last_name>Penddreth</last_name>
                     <email>jpenddreth0@census.gov</email>
                     <gender>Female</gender>
                 </student>
                 <student>
                     <id>2</id>
                     <first_name>Giavani</first_name>
                     <last_name>Frediani</last_name>
                     <email>gfrediani1@senate.gov</email>
                     <gender>Non-binary</gender>
                 </student>
             </students>

        +    Correct.

    -   ::

             <students>
                 <student>
                     <id>1</id>
                     </first_name>Jeanette<first_name>
                     <last_name>Penddreth</last_name>
                     <email>jpenddreth0@census.gov</email>
                     <gender>Female</gender>
                 <student>
                     <id>2</id>
                     <first_name>Giavani</first_name>
                     <last_name>Frediani</last_name>
                     <email>gfrediani1@senate.gov</email>
                     <gender>Non-binary</gender>
             </students>

        -    Incorrect.  The close tags are missing for student.
