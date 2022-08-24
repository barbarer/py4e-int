..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. |audiobutton| image:: Figures/start-audio-tour.png
    :height: 20px
    :align: top
    :alt: audio tour button


Changing Step 5: Increasing and decreasing color values
========================================================

First example: Let's change STEP 5, so that we decrease the red by 50%.

.. activecode:: Image_Decrease_Red
    :tour_1: "Important Lines Tour"; 2: timg5-line2; 5: timg5-line5; 8-9: timg5-line8-9; 12: timg5-line12; 15: timg5-line15; 18: timg5-line18; 21-22: timg5-line21-22;
    :nocodelens:
    :datafile: beach.jpg

    # STEP 1: USE THE IMAGE LIBRARY
    from image import *

    # STEP 2: PICK THE IMAGE
    img = Image("beach.jpg")

    # STEP 3: LOOP THROUGH THE PIXELS
    pixels = img.getPixels();
    for p in pixels:

    	# STEP 4: GET THE DATA
        r = p.getRed()

        # STEP 5: MODIFY THE COLOR
        p.setRed(r * 0.5);

        # STEP 6: UPDATE THE IMAGE
        img.updatePixel(p)

    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)

Try the program above on some of the other images, like "arch.jpg" or "puppy.jpg", by changing the name of the image file on line 5.  What effect does it always have?  Is this what you expected when we decrease the red?

We can *increase* the red in a similar way. Let's change STEP 5, so that we increase the red by 150%.

.. activecode:: Image_Increase_Red
    :tour_1: "Important Lines Tour"; 2: timg5-line2; 5: timg5-line5; 8-9: timg5-line8-9; 12: timg5-line12; 15: timg6-line15; 18: timg5-line18; 21-22: timg5-line21-22;
    :nocodelens:
    :datafile: beach.jpg

    # STEP 1: USE THE IMAGE LIBRARY
    from image import *

    # STEP 2: PICK THE IMAGE
    img = Image("beach.jpg")

    # STEP 3: LOOP THROUGH THE PIXELS
    pixels = img.getPixels()
    for p in pixels:

    	# STEP 4: GET THE DATA
        r = p.getRed()

        # STEP 5: MODIFY THE COLOR
        p.setRed(r * 1.5)

        # STEP 6: UPDATE THE IMAGE
        img.updatePixel(p)

    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)

Try the program above on some of the other images by changing the name of the image file on line 5.   What effect does it always have? Is this what you expected when you increase the red?  What happens if you increase two colors at the same time?

.. parsonsprob:: Image_Decrease_GB
   :numbered: left
   :adaptive:

   Another way to get a similar effect to increasing the red, is to decrease the green and blue.  Figure out how to do that in the program above and then use that information to drag the code blocks below from the left to the right in the correct order with the correct indention.
   -----
   from image import *
   =====
   img = Image("puppy.jpg")
   =====
   pixels = img.getPixels()
   =====
   for p in pixels:
   =====
       g = p.getGreen()
       b = p.getBlue()
   =====
       p.setGreen(g * 0.75)
       p.setBlue(b * 0.75)
   =====
       img.updatePixel(p)
   =====
   win = ImageWin(img.getWidth(),img.getHeight())
   img.draw(win)

.. tabbed:: image_4_1_WSt

        .. tab:: Question

           Decrease the red by .5 and increase the blue and green by .5 in puppy.jpg.

           .. activecode::  image_4_1_WSq
               :nocodelens:

        .. tab:: Answer

          .. activecode::  image_4_1_WSa
              :nocodelens:
              :datafile: puppy.jpg

              # STEP 1: USE THE IMAGE LIBRARY
              from image import *

              # STEP 2: PICK THE IMAGE
              img = Image("puppy.jpg")

              # STEP 3: LOOP THROUGH THE PIXELS
              pixels = img.getPixels()
              for p in pixels:

                  # STEP 4: GET THE DATA
                  r = p.getRed()
                  g = p.getGreen()
                  b = p.getBlue()

                  # STEP 5: MODIFY THE COLOR
                  p.setRed(r * .5)
                  p.setGreen(g * 1.5)
                  p.setBlue(b * 1.5)

                  # STEP 6: UPDATE THE IMAGE
                  img.updatePixel(p)

              # STEP 7: SHOW THE RESULT
              win = ImageWin(img.getWidth(),img.getHeight())
              img.draw(win)
