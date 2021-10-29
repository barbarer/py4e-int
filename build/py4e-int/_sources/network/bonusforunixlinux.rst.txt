Bonus section for Unix / Linux users
------------------------------------

If you have a Linux, Unix, or Macintosh computer, you probably have
commands built in to your operating system that retrieves both plain
text and binary files using the HTTP or File Transfer (FTP) protocols.
One of these commands is ``curl``\ :

.. code-block:: {.bash}

   $ curl -O http://www.py4e.com/cover.jpg

The command ``curl`` is short for "copy URL" and so the two
examples listed earlier to retrieve binary files with ``urllib``
are cleverly named ``curl1.py`` and ``curl2.py`` on
`www.py4e.com/code3 <http://www.py4e.com/code3>`_ as
they implement similar functionality to the ``curl`` command.
There is also a ``curl3.py`` sample program that does this task
a little more effectively, in case you actually want to use this pattern
in a program you are writing.

A second command that functions very similarly is ``wget``\ :

.. code-block:: {.bash}

   $ wget http://www.py4e.com/cover.jpg

Both of these commands make retrieving webpages and remote files a
simple task.

.. fillintheblank:: network_bonus_fitb
    :practice: T

    The |blank| command is short for "copy URL" and |blank| command is short for "World Wide Web get."
    Both commands are used on Linux computers to retrieve plain text and binary files.

    -    :curl: Correct. curl is short for copy URL.
         :.*: Try combining the words it is short for and using all lowercase.
    -    :wget: Correct. wget is short for web get.
         :.*: Try combining the words it is short for and using all lowercase. 
