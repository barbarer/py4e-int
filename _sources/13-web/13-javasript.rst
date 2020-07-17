JavaScript Object Notation - JSON
---------------------------------

\index{JSON}
\index{JavaScript Object Notation}

The JSON format was inspired by the object and array format used in the
JavaScript language. But since Python was invented before JavaScript,
Python's syntax for dictionaries and lists influenced the syntax of
JSON. So the format of JSON is nearly identical to a combination of
Python lists and dictionaries.

Here is a JSON encoding that is roughly equivalent to the simple XML
from above:

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

JSON is quickly becoming the format of choice for nearly all data
exchange between applications because of its relative simplicity
compared to XML.
