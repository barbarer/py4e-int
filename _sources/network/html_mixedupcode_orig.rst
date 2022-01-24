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
    <!DOCTYPE html>
    =====
    <html>
    =====
        <head>
    =====
            <title>Melody</title>
    =====
            <title>Melody<title> #paired
    =====
        </head>
    =====
        <body>
    =====
            <h1>Favorite Activites</h1>
    =====
            <h1>Favorite Activites<h1> #paired
    =====
            <p>
    =====
                I like to swim.
    =====
            </p>
    =====
        </body>
    =====
    </html>

.. activecode:: html_mixedupcode_1_ac

    Write an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites in the ``p`` tag in the ``body`` tag, also. For example, if the name was "Melody" and
    the description of the favorite activities was "I like to swim.", the tab would show "Melody", "Favorite Activites" would appear as bold on the
    webpage as the first line, and "I like to swim." would be below that as regular font (smaller font size without bold).
    ~~~~


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
    <!DOCTYPE html>
    =====
    <html>
    =====
        <head>
    =====
            <title>Melody</title>
    =====
        </head>
    =====
        <body>
    =====
            <h1>Favorite Activites</h1>
    =====
            <p style="color:red;">I like to swim.</p>
    =====
            <p><style="color:red;">I like to swim.</style></p> #paired
    =====
            <p style = "color: red;">I like to swim.</p> #paired
    =====
        </body>
    =====
    </html>

.. activecode:: html_mixedupcode_2_ac

    Write an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a red-colored description of your favorite activites in the ``p`` tag in the ``body`` tag, also.
    For example, if the name was "Melody" and the description of the favorite activities was "I like to swim.", the tab would
    show "Melody", "Favorite Activites" would appear as bold on the webpage as the first line, and "I like to swim." would be below
    that in red as regular font (smaller font size without bold).
    ~~~~


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
    <!DOCTYPE html>
    =====
    <html>
    =====
        <head>
    =====
            <title>Melody</title>
    =====
        </head>
    =====
        <body>
    =====
            <h1>Favorite Activites</h1>
    =====
            <p style="font-size:25px;">I like to swim.</p>
    =====
            <p style="fontsize:25px;">I like to swim.</p> #paired
    =====
            <p style="font-size:25 px;">I like to swim.</p> #paired
    =====
        </body>
    =====
    </html>

.. activecode:: html_mixedupcode_3_ac

    Write an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a 25 pixel font-sized description of your favorite activites in the ``p`` tag in the ``body`` tag, also.
    For example, if the name was "Melody" and the description of the favorite activities was "I like to swim.", the tab would
    show "Melody", "Favorite Activites" would appear as bold on the webpage as the first line, and "I like to swim." would be below
    that with a size of 25 pixels.
    ~~~~


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
    <!DOCTYPE html>
    =====
    <html>
    =====
        <head>
    =====
            <title>Melody</title>
    =====
        </head>
    =====
        <body>
    =====
            <h1>Favorite Activites</h1>
    =====
            <p style="font-family:Brush Script MT;">I like to swim.</p>
    =====
            <p style="font:Brush Script MT;">I like to swim.</p> #paired
    =====
        </body>
    =====
    </html>

.. activecode:: html_mixedupcode_4_ac

    Write an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites with the font "Brush Script MT" in the ``p`` tag in the ``body`` tag, also.
    For example, if the name was "Melody" and the description of the favorite activities was "I like to swim.", the tab would
    show "Melody", "Favorite Activites" would appear as bold on the webpage as the first line, and "I like to swim." would be below
    in the font "Brush Script MT" (cursive looking).
    ~~~~


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
    <!DOCTYPE html>
    =====
    <html>
    =====
        <head>
    =====
            <title>Melody</title>
    =====
        </head>
    =====
        <body>
    =====
            <h1>Favorite Activites</h1>
    =====
            <p>I like to <span style="color:blue;">swim</span>.</p>
    =====
            <p>I <span style="color:blue;">like to swim</span>.</p> #paired
    =====
        </body>
    =====
    </html>

.. activecode:: html_mixedupcode_5_ac

    Write an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites with the activity name blue in the ``p`` tag in the ``body`` tag, also.
    For example, if the name was "Melody" and the description of the favorite activities was "I like to swim.", the tab would
    show "Melody", "Favorite Activites" would appear as bold on the webpage as the first line, and "I like to swim." would be below
    in a regular font with the word "swim" as blue.
    ~~~~


.. parsonsprob:: html_mixedupcode_6
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a ``div`` tag with a purple background color and the description of your favorite activites
    in multiple ``p`` tags in the ``div`` tag in the ``body`` tag. For example, if the name was "Melody" and the description of the favorite activities
    was "I like to swim." in one ``p`` tag and "I like to eat." in a second ``p`` tag, the tab would show "Melody", "Favorite Activites" would appear as
    bold on the webpage as the first line, and "I like to swim." and "I like to eat." would be below in regular font with a purple background.
    -----
    <!DOCTYPE html>
    =====
    <html>
    =====
        <head>
    =====
            <title>Melody</title>
    =====
            <title>Melody<title> #paired
    =====
        </head>
    =====
        <body>
    =====
            <h1>Favorite Activites</h1>
    =====
            <h1>Favorite Activites<h1> #paired
    =====
            <div style="background-color:purple">
    =====
                <p>I like to swim.</p>
    =====
                <p>I like to swim.<p> #paired
    =====
                <p>I like to eat.</p>
    =====
                <p>I like to eat.<p> #paired
    =====
            </div>
    =====
        </div>
    =====
        </body>
    =====
    </html>

.. activecode:: html_mixedupcode_6_ac

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a ``div`` tag with a purple background color and the description of your favorite activites
    in multiple ``p`` tags in the ``div`` tag in the ``body`` tag. For example, if the name was "Melody" and the description of the favorite activities
    was "I like to swim." in one ``p`` tag and "I like to eat." in a second ``p`` tag, the tab would show "Melody", "Favorite Activites" would appear as
    bold on the webpage as the first line, and "I like to swim." and "I like to eat." would be below in regular font with a purple background.
    ~~~~


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
    <!DOCTYPE html>
    =====
    <html>
    =====
        <head>
    =====
            <title>Melody</title>
    =====
        </head>
    =====
        <body>
    =====
            <h1>Favorite Activites</h1>
    =====
            <p>I like to swim.</p>
    =====
            <a href="https://www.healthline.com/health/benefits-of-swimming">Here are some benefits of swimming!</a>
    =====
            <a href="https://www.healthline.com/health/benefits-of-swimming" Here are some benefits of swimming!></a> #paired
    =====
        </body>
    =====
    </html>

.. activecode:: html_mixedupcode_7_ac

    Write an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, a description of your favorite activites in the ``p`` tag in the ``body`` tag, and a description with a link to a related
    article in the ``a`` tag in the ``body`` tag. For example, if the name was "Melody", the description of the favorite activities
    was "I like to swim.", the description of the link was "Here are some benefits of swimming!", and the link was
    "https://www.healthline.com/health/benefits-of-swimming", the tab would show "Melody", "Favorite Activites" would appear as bold on the webpage
    as the first line, "I like to swim." would be below in a regular font, and "Here are some benefits of swimming!" would appear below that
    with it being linked to "https://www.healthline.com/health/benefits-of-swimming".
    ~~~~


.. parsonsprob:: html_mixedupcode_8
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites in the ``p`` tag in the ``body`` tag, also. For example, if the name was "Melody" and
    the description of the favorite activities was "I like to swim.", the tab would show "Melody", "Favorite Activites" would appear as bold on the
    webpage as the first line, and "I like to swim." would be below that as regular font (smaller font size without bold).
    -----
    <!DOCTYPE html>
    =====
    <html>
    =====
        <head>
    =====
            <title>Melody</title>
    =====
            <title>Melody<title> #paired
    =====
        </head>
    =====
        <body>
    =====
            <h1>Favorite Activites</h1>
    =====
            <h1>Favorite Activites<h1> #paired
    =====
            <p>
    =====
                I like to swim.
    =====
            </p>
    =====
        </body>
    =====
    </html>

.. activecode:: html_mixedupcode_8_ac

    Write an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites in the ``p`` tag in the ``body`` tag, also. For example, if the name was "Melody" and
    the description of the favorite activities was "I like to swim.", the tab would show "Melody", "Favorite Activites" would appear as bold on the
    webpage as the first line, and "I like to swim." would be below that as regular font (smaller font size without bold).
    ~~~~


.. parsonsprob:: html_mixedupcode_9
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites in the ``p`` tag in the ``body`` tag, also. For example, if the name was "Melody" and
    the description of the favorite activities was "I like to swim.", the tab would show "Melody", "Favorite Activites" would appear as bold on the
    webpage as the first line, and "I like to swim." would be below that as regular font (smaller font size without bold).
    -----
    <!DOCTYPE html>
    =====
    <html>
    =====
        <head>
    =====
            <title>Melody</title>
    =====
            <title>Melody<title> #paired
    =====
        </head>
    =====
        <body>
    =====
            <h1>Favorite Activites</h1>
    =====
            <h1>Favorite Activites<h1> #paired
    =====
            <p>
    =====
                I like to swim.
    =====
            </p>
    =====
        </body>
    =====
    </html>

.. activecode:: html_mixedupcode_9_ac

    Write an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites in the ``p`` tag in the ``body`` tag, also. For example, if the name was "Melody" and
    the description of the favorite activities was "I like to swim.", the tab would show "Melody", "Favorite Activites" would appear as bold on the
    webpage as the first line, and "I like to swim." would be below that as regular font (smaller font size without bold).
    ~~~~


.. parsonsprob:: html_mixedupcode_10
    :numbered: left
    :practice: T
    :adaptive:

    Create an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites in the ``p`` tag in the ``body`` tag, also. For example, if the name was "Melody" and
    the description of the favorite activities was "I like to swim.", the tab would show "Melody", "Favorite Activites" would appear as bold on the
    webpage as the first line, and "I like to swim." would be below that as regular font (smaller font size without bold).
    -----
    <!DOCTYPE html>
    =====
    <html>
    =====
        <head>
    =====
            <title>Melody</title>
    =====
            <title>Melody<title> #paired
    =====
        </head>
    =====
        <body>
    =====
            <h1>Favorite Activites</h1>
    =====
            <h1>Favorite Activites<h1> #paired
    =====
            <p>
    =====
                I like to swim.
    =====
            </p>
    =====
        </body>
    =====
    </html>

.. activecode:: html_mixedupcode_10_ac

    Write an HTML page with your name as the ``title`` tag in the ``head`` tag, "Favorite Activities" as the ``h1`` tag in
    the ``body`` tag, and a description of your favorite activites in the ``p`` tag in the ``body`` tag, also. For example, if the name was "Melody" and
    the description of the favorite activities was "I like to swim.", the tab would show "Melody", "Favorite Activites" would appear as bold on the
    webpage as the first line, and "I like to swim." would be below that as regular font (smaller font size without bold).
    ~~~~
