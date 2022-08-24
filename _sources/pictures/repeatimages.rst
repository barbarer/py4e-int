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


Using Repetition with Images
============================================

*Learning Objectives:*

- Use ``for`` loops and nested ``for`` loops to repeat actions on pixels in an image.
- Understand the pattern (the steps) used in modifying all the pixels in an image.
- Describe how multiple classes (Image and Pixel) interact.

..  index::
    single: images
    pair: statements; for

.. index::
   single: pixel
   single: picture
   single: image
   single: color

Images (pictures) on a computer are broken up into little bits called **pixels**, for *picture* (pix) *elements* (els).  These are laid out on a grid, from left to right (horizontal or **x** dimension) and top to bottom (vertical or **y** dimension).

.. figure:: Figures/grid.png
    :align: center
    :alt: A grid with horizontal (x) and vertical (y) dimensions
    :figclass: align-center

    Figure: A grid with horizontal (x) and vertical (y) dimensions

Pixels are quite small.  Even the small image below has 180 columns and 240 rows of pixels.  Each pixel has a color associated with it: an amount of redness, an amount of greenness, and an amount of blueness.
Let's remove the red from this picture.  Now, there are lot of lines in the program below, but fortunately, you can ignore most of them. The Audio Tour explains the important lines.  Press |audiobutton| to hear the audio tour explanation.  When you run this program it may take several minutes to show the changed image.

.. figure:: Figures/arch.jpg
    :align: center
    :alt: A picture of an arch
    :figclass: align-center

    Figure: A picture of an arch 

.. activecode:: Image_Remove_Red
    :tour_1: "Important Lines Tour"; 1: timg3-line1; 4: timg3-line4; 7-8: timg3-line7-8; 11: timg3-line11; 14: timg3-line14; 17-18: timg3-line17-18;
    :nocodelens:
    :datafile: arch.jpg

    from image import *

    # CREATE AN IMAGE FROM A FILE
    img = Image("arch.jpg")

    # LOOP THROUGH THE PIXELS
    pixelList = img.getPixels()
    for p in pixelList:

        # SET THE RED TO 0
        p.setRed(0)

        # UPDATE THE IMAGE
        img.updatePixel(p)

    # SHOW THE RESULT
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)

The program above can take several minutes to execute on the ``arch.jpg`` picture.  But we're not stuck using just the arch image.  You can
change the file name in the program above to the URL for any small photo that is on the internet.

.. mchoice:: Image_set_all_to_0_mcq
   :answer_a: You still see the picture, but it is all in shades of gray.
   :answer_b: The picture is all white.
   :answer_c: The picture is all black.
   :correct: c
   :feedback_a: Not if you set all the color values to 0.
   :feedback_b: Did you try it?  This would be true if you set all the values to 255 instead of 0.
   :feedback_c: Black is the absence of light so setting all colors to 0 results in an all black image since there is no light.

   What happens when you set all the colors to 0?  Try adding ``p.setBlue(0)`` and ``p.setGreen(0)`` to the program above after the ``p.setRed(0)`` and run it to check.

.. mchoice:: Image_save_only_green
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: It shows all the green values from none to lots so it looks like a greenish version of a grayscale image.
   :feedback_b: Did you try it?

   What happens when you keep only the original green color?   Will you still be able to see the arch?

.. mchoice:: Image_negate
   :answer_a: It is all black.
   :answer_b: Shows as a grayscale image.
   :answer_c: Shows as a negative of the original image.
   :answer_d: It is all white.
   :correct: c
   :feedback_a: No, this would happen if you set every value to 0.
   :feedback_b: Did you try it?
   :feedback_c: It is a negative of the original image.
   :feedback_d: No, this would happen if you set every value to 255.

   What happens if set every color value to 255 minus the original value?
