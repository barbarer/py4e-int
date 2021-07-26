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

.. 	qnum::
	:start: 1
	:prefix: csp-11-2-

Understanding Image Representation
====================================================================
 Understanding images requires understanding a set of abstractions:

1. Pictures are made up of little pixels, laid out on an (x,y) grid.
2. Each pixel contains a color.
3. Each color has a red part, a green part, and a blue part.  
4. Each color part is actually a number between 0 and 255.
5. If a pixel has red=0, green=0, and blue=0 then the color is black since this is an absence of any color of light.  
6. If a pixel as red=255, green=255, and blue=255 then the color is white.  Try tilting the bottom of a cd in white light to see the colors in the light. 

.. figure:: Figures/grid.png
    :align: center
    :alt: A grid with horizontal (x) and vertical (y) dimensions 
    :figclass: align-center
    
    Figure: A grid with horizontal (x) and vertical (y) dimensions

There are some excellent CS Unplugged activities for understanding `image and color representation <http://csunplugged.org/image-representation>`_.


.. note::

    Discuss topics in this section with classmates. 

      .. disqus::
          :shortname: cslearn4u
          :identifier: studentcsp_11_2


