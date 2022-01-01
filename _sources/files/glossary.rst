Summary
--------

You can open files for reading or writing which returns a file object, close a file object, and read from file objects.  The file object is **iterable** which means that you can loop though all the lines in a file using a for each loop.

=============  ================================     =============================================================================
Method         Example                              Description
=============  ================================     =============================================================================
open           file_obj = open(filename)             Opens the file named filename for reading and returns a file object
open           file_obj = open(filename, "r")        Opens the file named filename for reading and returns a file object
open           file_obj = open(filename, 'w')        Opens the file named filename for writing and returns a file object
close          file_obj.close()                      Closes an open file (most crucial when writing to a file)
read           data = file_obj.read()                Reads all data from a file object and returns it as a string
readline       line = file_obj.readline()            Returns a line from a file object as a string
readlines      lines = file_obj.readlines()          Returns a list of lines from a file object
write          file_obj.write(line)                  Writes the line to the file object
=============  ================================     =============================================================================

When reading from files you may need to change the current directory to the one with the file to read from.  These are some of the useful terminal commands for navigating the directory structure.

=============  ================================     =============================================================================
Mac            Windows                              Description
=============  ================================     =============================================================================
cd             cd                                   Change directory - takes you to the root directory
cd dir         cd dir                               Will change the current directory to the specified directory
cd ..          cd..                                 Change directory up one level (move to the parent directory)
pwd            chdir                                Print working directory (pwd) or show the current directory
ls             dir                                  List the contents of the current directory
=============  ================================     =============================================================================

When working with git and GitHub these are some of the useful commands.

==============================================     =============================================================================
Command                                            Description
==============================================     =============================================================================
git clone URL                                      Download a copy of the repo at the given URL to the current directory
git add file                                       Add the specified file to the list of files to be committed
git status                                         What files have been added and/or changed
git commit -m "message"                            Package changes into a commit on your local computer
git push                                           Push commits to your GitHub account
git pull                                           Download changes from GitHub to your local repo
==============================================     =============================================================================


Glossary
--------

.. glossary::
    Catch
      To prevent an exception from terminating a program using the ``try`` and ``except`` statements.

    Newline
      A special character, '\n', used in files and strings to indicate the end of a line.

    File Object or File Handle Object
      Object that knows how to read from or write to a file.

    Pythonic
      A technique that works elegantly in Python. "Using try and except is the *Pythonic*
      way to recover from missing files".

    Quality Assurance
      A person or team focused on insuring the overall quality of a software product. QA is often
      involved in testing a product and identifying problems before the product is released.

    Text File
      A sequence of characters stored in permanent storage like a hard drive.

.. dragndrop:: file-glossary
    :feedback: What do these terms mean?
    :match_1: catch|||To prevent an exception from terminating a program using the ``try`` and ``except`` statements.
    :match_2: newline|||A special character used in files and strings to indicate the end of a line.
    :match_3: pythonic|||A technique that works elegantly in Python.
    :match_4: quality assurance|||A person or team focused on insuring the overall quality of a software product.
    :match_5: text file|||A sequence of characters stored in permanent storage like a hard drive.
