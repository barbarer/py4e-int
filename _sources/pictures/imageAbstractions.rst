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

Understanding Image Representation
====================================================================
 Understanding images requires understanding a set of abstractions:

1. Images are made up of little pixels (objects of the Pixel class), laid out on an (x,y) grid.
2. Each pixel contains a red value, a green value, and a blue value.
3. Each color value is actually a number between 0 and 255.
4. If a pixel has red=0, green=0, and blue=0 then the color is black since this is an absence of any color of light.
5. If a pixel as red=255, green=255, and blue=255 then the color is white.  Try tilting the bottom of a cd in white light to see the colors in the light.

.. figure:: Figures/grid.png
    :align: center
    :alt: A grid with horizontal (x) and vertical (y) dimensions
    :figclass: align-center

    Figure: A grid with horizontal (x) and vertical (y) dimensions

There are some excellent CS Unplugged activities for understanding `image and color representation <http://csunplugged.org/image-representation>`_.


.. mchoice:: Image_where_is_0_0
   :answer_a: Middle of the image in width on the left side
   :answer_b: Top right corner of the image
   :answer_c: Middle of the image in width and height
   :answer_d: Top left corner of the image
   :answer_e: Bottom left corner of the image
   :correct: d
   :feedback_a: y is 0 at the top left corner
   :feedback_b: x is 0 at the left corner
   :feedback_c: y is 0 at the top left corner and x is 0 on the left
   :feedback_d: Correct! x is 0 and y is 0 at the top left corner of the image
   :feedback_e: y is 0 at the top and increases towards the bottom

   Where is x = 0 y = 0 on an image?

.. mchoice:: Image_red_color
     :answer_a: black
     :answer_b: white
     :answer_c: red
     :answer_d: green
     :answer_e: blue
     :correct: c
     :feedback_a: Black is an absence of light (all values are 0).
     :feedback_b: White is when all values are 255.
     :feedback_c: If the green and blue are 0 and the red is 255 this will be red.
     :feedback_d: This would be true if the green was 255 and the other values were 0.
     :feedback_e: This would be true if the blue was 255 and the other values were 0.

     What color would red = 255, green = 0, blue = 0 be?
