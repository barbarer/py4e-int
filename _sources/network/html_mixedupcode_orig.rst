Mixed-Up Code Questions
------------------------

.. parsonsprob:: html_mixedupcode_1
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites in the ``p`` tag in the ``body`` tag, also. For example, if the name was "Melody" and
    the description of the favorite activities was "I like to swim.", the tab would show "Melody", "Favorite Activites" would appear as bold on the
    webpage as the first line, and "I like to swim." would be below that as regular font (smaller font size without bold).
    -----
    &#60!DOCTYPE html&#62
    =====
    &#60html&#62
    =====
        &#60head&#62
    =====
            &#60title&#62Melody&#60/title&#62
    =====
            &#60title&#62Melody&#60title&#62 #paired
    =====
        &#60/head&#62
    =====
        &#60body&#62
    =====
            &#60h1&#62Favorite Activites&#60/h1&#62
    =====
            &#60h1&#62Favorite Activites&#60h1&#62 #paired
    =====
            &#60p&#62
    =====
                I like to swim.
    =====
            &#60/p&#62
    =====
        &#60/body&#62
    =====
    &#60/html&#62

.. parsonsprob:: html_mixedupcode_2
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a red-colored description of your favorite activites in the ``p`` tag in the ``body`` tag, also.
    For example, if the name was "Melody" and the description of the favorite activities was "I like to swim.", the tab would
    show "Melody", "Favorite Activites" would appear as bold on the webpage as the first line, and "I like to swim." would be below
    that in red as regular font (smaller font size without bold).
    -----
    &#60!DOCTYPE html&#62
    =====
    &#60html&#62
    =====
        &#60head&#62
    =====
            &#60title&#62Melody&#60/title&#62
    =====
        &#60/head&#62
    =====
        &#60body&#62
    =====
            &#60h1&#62Favorite Activites&#60/h1&#62
    =====
            &#60p style="color:red;"&#62I like to swim.&#60/p&#62
    =====
            &#60p&#62&#60style="color:red;"&#62I like to swim.&#60/style&#62&#60/p&#62 #paired
    =====
            &#60p style = "color: red;"&#62I like to swim.&#60/p&#62 #paired
    =====
        &#60/body&#62
    =====
    &#60/html&#62

.. parsonsprob:: html_mixedupcode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a 25 pixel font-sized description of your favorite activites in the ``p`` tag in the ``body`` tag, also.
    For example, if the name was "Melody" and the description of the favorite activities was "I like to swim.", the tab would
    show "Melody", "Favorite Activites" would appear as bold on the webpage as the first line, and "I like to swim." would be below
    that with a size of 25 pixels.
    -----
    &#60!DOCTYPE html&#62
    =====
    &#60html&#62
    =====
        &#60head&#62
    =====
            &#60title&#62Melody&#60/title&#62
    =====
        &#60/head&#62
    =====
        &#60body&#62
    =====
            &#60h1&#62Favorite Activites&#60/h1&#62
    =====
            &#60p style="font-size:25px;"&#62I like to swim.&#60/p&#62
    =====
            &#60p style="fontsize:25px;"&#62I like to swim.&#60/p&#62 #paired
    =====
            &#60p style="font-size:25 px;"&#62I like to swim.&#60/p&#62 #paired
    =====
        &#60/body&#62
    =====
    &#60/html&#62


.. parsonsprob:: html_mixedupcode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites with the font "Brush Script MT" in the ``p`` tag in the ``body`` tag, also.
    For example, if the name was "Melody" and the description of the favorite activities was "I like to swim.", the tab would
    show "Melody", "Favorite Activites" would appear as bold on the webpage as the first line, and "I like to swim." would be below
    in the font "Brush Script MT" (cursive looking).
    -----
    &#60!DOCTYPE html&#62
    =====
    &#60html&#62
    =====
        &#60head&#62
    =====
            &#60title&#62Melody&#60/title&#62
    =====
        &#60/head&#62
    =====
        &#60body&#62
    =====
            &#60h1&#62Favorite Activites&#60/h1&#62
    =====
            &#60p style="font-family:Brush Script MT;"&#62I like to swim.&#60/p&#62
    =====
            &#60p style="font:Brush Script MT;"&#62I like to swim.&#60/p&#62 #paired
    =====
        &#60/body&#62
    =====
    &#60/html&#62


.. parsonsprob:: html_mixedupcode_5
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites with the activity name blue in the ``p`` tag in the ``body`` tag, also.
    For example, if the name was "Melody" and the description of the favorite activities was "I like to swim.", the tab would
    show "Melody", "Favorite Activites" would appear as bold on the webpage as the first line, and "I like to swim." would be below
    in a regular font with the word "swim" as blue.
    -----
    &#60!DOCTYPE html&#62
    =====
    &#60html&#62
    =====
        &#60head&#62
    =====
            &#60title&#62Melody&#60/title&#62
    =====
        &#60/head&#62
    =====
        &#60body&#62
    =====
            &#60h1&#62Favorite Activites&#60/h1&#62
    =====
            &#60p&#62I like to &#60span style="color:blue;"&#62swim&#60/span&#62.&#60/p&#62
    =====
            &#60p&#62I &#60span style="color:blue;"&#62like to swim&#60/span&#62.&#60/p&#62 #paired
    =====
        &#60/body&#62
    =====
    &#60/html&#62

.. parsonsprob:: html_mixedupcode_6_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a ``div`` tag with a purple background color and the description of your favorite activites
    in multiple ``p`` tags in the ``div`` tag in the ``body`` tag. For example, if the name was "Melody" and the description of the favorite activities
    was "I like to swim." in one ``p`` tag and "I like to eat." in a second ``p`` tag, the tab would show "Melody", "Favorite Activites" would appear as
    bold on the webpage as the first line, and "I like to swim." and "I like to eat." would be below in regular font with a purple background.
    -----
    &#60!DOCTYPE html&#62
    =====
    &#60html&#62
    =====
        &#60head&#62
    =====
            &#60title&#62Melody&#60/title&#62
    =====
            &#60title&#62Melody&#60title&#62 #paired
    =====
        &#60/head&#62
    =====
        &#60body&#62
    =====
            &#60h1&#62Favorite Activites&#60/h1&#62
    =====
            &#60h1&#62Favorite Activites&#60h1&#62 #paired
    =====
            &#60div style="background-color:purple"&#62
    =====
                &#60p&#62I like to swim.&#60/p&#62
    =====
                &#60p&#62I like to swim.&#60p&#62 #paired
    =====
                &#60p&#62I like to eat.&#60/p&#62
    =====
                &#60p&#62I like to eat.&#60p&#62 #paired
    =====
            &#60/div&#62
    =====
        &#60/body&#62
    =====
    &#60/html&#62


.. parsonsprob:: html_mixedupcode_7
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, a description of your favorite activites in the ``p`` tag in the ``body`` tag, and a description with a link to a related
    article in the ``a`` tag in the ``body`` tag. For example, if the name was "Melody", the description of the favorite activities
    was "I like to swim.", the description of the link was "Here are some benefits of swimming!", and the link was
    "https://www.healthline.com/health/benefits-of-swimming", the tab would show "Melody", "Favorite Activites" would appear as bold on the webpage
    as the first line, "I like to swim." would be below in a regular font, and "Here are some benefits of swimming!" would appear below that
    with it being linked to "https://www.healthline.com/health/benefits-of-swimming".
    -----
    &#60!DOCTYPE html&#62
    =====
    &#60html&#62
    =====
        &#60head&#62
    =====
            &#60title&#62Melody&#60/title&#62
    =====
        &#60/head&#62
    =====
        &#60body&#62
    =====
            &#60h1&#62Favorite Activites&#60/h1&#62
    =====
            &#60p&#62I like to swim.&#60/p&#62
    =====
            &#60a href="https://www.healthline.com/health/benefits-of-swimming"&#62Here are some benefits of swimming!&#60/a&#62
    =====
            &#60a href="https://www.healthline.com/health/benefits-of-swimming" Here are some benefits of swimming!&#62&#60/a&#62 #paired
    =====
        &#60/body&#62
    =====
    &#60/html&#62


.. parsonsprob:: html_mixedupcode_8
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites in the ``p`` tag in the ``body`` tag, also. For example, if the name was "Melody" and
    the description of the favorite activities was "I like to swim.", the tab would show "Melody", "Favorite Activites" would appear as bold on the
    webpage as the first line, and "I like to swim." would be below that as regular font (smaller font size without bold).
    -----
    &#60!DOCTYPE html&#62
    =====
    &#60html&#62
    =====
        &#60head&#62
    =====
            &#60title&#62Melody&#60/title&#62
    =====
            &#60title&#62Melody&#60title&#62 #paired
    =====
        &#60/head&#62
    =====
        &#60body&#62
    =====
            &#60h1&#62Favorite Activites&#60/h1&#62
    =====
            &#60h1&#62Favorite Activites&#60h1&#62 #paired
    =====
            &#60p&#62
    =====
                I like to swim.
    =====
            &#60/p&#62
    =====
        &#60/body&#62
    =====
    &#60/html&#62

.. parsonsprob:: html_mixedupcode_9
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites in the ``p`` tag in the ``body`` tag, also. For example, if the name was "Melody" and
    the description of the favorite activities was "I like to swim.", the tab would show "Melody", "Favorite Activites" would appear as bold on the
    webpage as the first line, and "I like to swim." would be below that as regular font (smaller font size without bold).
    -----
    &#60!DOCTYPE html&#62
    =====
    &#60html&#62
    =====
        &#60head&#62
    =====
            &#60title&#62Melody&#60/title&#62
    =====
            &#60title&#62Melody&#60title&#62 #paired
    =====
        &#60/head&#62
    =====
        &#60body&#62
    =====
            &#60h1&#62Favorite Activites&#60/h1&#62
    =====
            &#60h1&#62Favorite Activites&#60h1&#62 #paired
    =====
            &#60p&#62
    =====
                I like to swim.
    =====
            &#60/p&#62
    =====
        &#60/body&#62
    =====
    &#60/html&#62


.. parsonsprob:: html_mixedupcode_10
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites in the ``p`` tag in the ``body`` tag, also. For example, if the name was "Melody" and
    the description of the favorite activities was "I like to swim.", the tab would show "Melody", "Favorite Activites" would appear as bold on the
    webpage as the first line, and "I like to swim." would be below that as regular font (smaller font size without bold).
    -----
    &#60!DOCTYPE html&#62
    =====
    &#60html&#62
    =====
        &#60head&#62
    =====
            &#60title&#62Melody&#60/title&#62
    =====
            &#60title&#62Melody&#60title&#62 #paired
    =====
        &#60/head&#62
    =====
        &#60body&#62
    =====
            &#60h1&#62Favorite Activites&#60/h1&#62
    =====
            &#60h1&#62Favorite Activites&#60h1&#62 #paired
    =====
            &#60p&#62
    =====
                I like to swim.
    =====
            &#60/p&#62
    =====
        &#60/body&#62
    =====
    &#60/html&#62