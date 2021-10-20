..  shortname:: Writing
..  description:: Writing activity.


Code writing activity part 1
:::::::::::::::::::::::::::::

On this page, you will complete an activity to write code that:

**Scrapes all the comments on the Rate My Professor page for Prof. Ericson and Prof. Oney and prints them**

Here is |ericson_link|.

Here is |oney_link|.

.. |ericson_link| raw:: html

   <a href="https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2454833" target="_blank">the link to Prof. Ericson's Rate My Professor page</a>

.. |oney_link| raw:: html

   <a href="https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2239751" target="_blank">the link to Prof. Oney's Rate My Professor page</a>

You can see that both the pages have the same layout.

.. image:: _static/rate_my_prof_ericson.png
    :scale: 50%
    :align: center
    :alt: Prof. Ericson's Rate My Professor page

.. image:: _static/rate_my_prof_oney.png
    :scale: 50%
    :align: center
    :alt: Prof. Ericson's Rate My Professor page

The comments all have the same tag name, which is ``'div'`` tag with ``class='Comments__StyledComments-dzzyvm-0 dvnRbr'``. Here's what it looks like when you inspect Prof. Ericson's page:

.. image:: _static/rate_my_prof_tags.png
    :scale: 65%
    :align: center
    :alt: Inspecting the tags on the Rate My Professor page

.. sidebar:: Links to plans

    |plan_2|

    |plan_3|

    |plan_4|

    |plan_5|

    |plan_9|

    .. |plan_2| raw:: html

        <a href="plan2.html" target="_blank">Plan 2: Get a soup from a URL</a>

    .. |plan_3| raw:: html

        <a href="plan3.html" target="_blank">Plan 3: Get a soup from multiple URLs</a>

    .. |plan_4| raw:: html

        <a href="plan4.html" target="_blank">Plan 4: Get info from a single tag</a>

    .. |plan_5| raw:: html

        <a href="plan5.html" target="_blank">Plan 5: Get info from all tags of a certain type</a>

    .. |plan_9| raw:: html

        <a href="plan9.html" target="_blank">Plan 9: Print info</a>


.. parsonsprob:: write_code_order_plans_goals

   Choose which of the following plans you will use, and put them in the correct order.

   -----
   Plan #3: Get a soup from multiple webpages
   =====
   Plan #2: Get a soup from a webpage#paired
   =====
   Plan #5: Get info from all tags of a certain type
   =====
   Plan #4: Get info from a single tag#paired
   =====
   Plan #6: Get info from all tags of a certain type, within another tag#paired
   =====
   Plan #9: Print info
   =====
   Plan #10: Store info in a json file#paired

.. reveal:: write_code_cl_reveal_1
        :showtitle: After you've done the activity, click here.
        :hidetitle: Hide question.

        .. poll:: write_code_cl_1
           :option_1: Very, very low mental effort
           :option_2: Very low mental effort
           :option_3: Low mental effort
           :option_4: Rather low mental effort
           :option_5: Neither low nor high mental effort
           :option_6: Rather high mental effort
           :option_7: High mental effort
           :option_8: Very high mental effort
           :option_9: Very, very high mental effort
           :results: instructor

           In solving the preceding problem I invested:
