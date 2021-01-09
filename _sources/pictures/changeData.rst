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
	:prefix: csp-11-6-
	
Changing Step 3: Changing which data we use
============================================

Below is a selection of images that you can use in the programs in this section.
	
.. raw:: html

   <table>
   <tr><td>beach.jpg</td><td>baby.jpg</td><td>vangogh.jpg</td><td>swan.jpg</td></tr>
   <tr><td><img src="../_static/beach.jpg" id="beach.jpg"></td><td><img src="../_static/baby.jpg" id="baby.jpg"></td><td><img src="../_static/vangogh.jpg" id="vangogh.jpg"></td><td><img src="../_static/swan.jpg" id="swan.jpg"></td></tr>
   </table>
   <table>
   <tr><td>puppy.jpg</td><td>kitten.jpg</td><td>girl.jpg</td><td>motorcycle.jpg</td></tr>
   <tr><td><img src="../_static/puppy.jpg" id="puppy.jpg"></td><td><img src="../_static/kitten.jpg" id="kitten.jpg"></td><td><img src="../_static/girl.jpg" id="girl.jpg"></td><td><img src="../_static/motorcycle.jpg" id="motorcycle.jpg"></td></tr>
   </table>
   <table>
   <tr><td>gal1.jpg</td><td>guy1.jpg</td><td>gal2.jpg</td></tr>
   <tr><td><img src="../_static/gal1.jpg" id="gal1.jpg"></td><td><img src="../_static/guy1.jpg" id="guy1.jpg"></td><td><img src="../_static/gal2.jpg" id="gal2.jpg"></td></tr>
   </table>


We can also change which part of the picture we read and manipulate.  When we are changing several colors at once we can create a new pixel with the desired color using ``Pixl(red,green,blue)`` as shown below on line 20.

.. activecode:: Image_Negate_Quarter
    :tour_1: "Important Lines Tour"; 1-2: imgR2-line1-2; 4-5: imgR2-line4-5; 8: imgR6-line8; 9: imgR6-line9; 10: imgR6-line10; 11: imgR6-line11; 13-17: imgR6-line13-17; 19-20: imgR6-line19-20; 22-23: imgR6-line22-23; 25-27: imgR6-line25-27;
    :nocodelens:

    # STEP 1: USE THE IMAGE LIBRARY 
    from image import *
    
    # STEP 2: PICK THE IMAGE
    img = Image("vangogh.jpg")

    # STEP 3: SELECT THE DATA
    halfWidth = (int) (img.getWidth() / 2)
    halfHeight = (int) (img.getHeight() / 2)
    for x in range(halfWidth):
    	for y in range(halfHeight):

            # STEP 4: GET THE DATA
            p = img.getPixel(x, y)
            r = p.getRed()
            g = p.getGreen()
            b = p.getBlue()
            
            # STEP 5: CREATE THE COLOR
            newPixel = Pixel(255-r, 255-g, 255-b)
            
            # STEP 6: CHANGE THE PIXEL
            img.setPixel(x, y, newPixel)
            
    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)

What happens if we skip every other x and y as we manipulate the colors?  Maybe make the green 255 and the blue 0? 

.. activecode:: Image_Every_Other
    :tour_1: "Important Lines Tour"; 1-2: imgR2-line1-2; 4-5: imgR2-line4-5; 8: imgR7-line8; 9: imgR7-line9;  11-13: imgR7-line11-13; 15-16: imgR7-line15-16; 18-19: imgR7-line18-19; 21-23: imgR7-line21-23; 25-27: 
    :nocodelens:

    # STEP 1: USE THE IMAGE LIBRARY 
    from image import *
    
    # STEP 2: PICK THE IMAGE
    img = Image("vangogh.jpg")

    # STEP 3: SELECT THE DATA
    for x in range(0,img.getWidth(),2):
    	for y in range(0,img.getHeight(),2):
        
            # STEP 4: GET THE DATA
            p = img.getPixel(x, y)
            r = p.getRed()
            
            # STEP 5: CREATE THE COLOR
            newPixel = Pixel(r, 255, 0)
            
            # STEP 6: CHANGE THE PIXEL
            img.setPixel(x, y, newPixel)
            
    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)

Let's try side-to-side copying.


.. activecode:: Image_Copy_Left
    :tour_1: "Important Lines Tour"; 1-2: imgR2-line1-2; 4-5: imgR2-line4-5; 8: imgR8-line8; 9: imgR8-line9; 10: imgR8-line10; 12-16: imgR8-line12-16; 18-19: imgR8-line18-19; 21-22: imgR8-line21-22; 24-26: imgR8-line24-26;
    :nocodelens:

    # STEP 1: USE THE IMAGE LIBRARY 
    from image import *
    
    # STEP 2: PICK THE IMAGE
    img = Image("vangogh.jpg")

    # STEP 3: SELECT THE DATA
    halfway = (int) (img.getWidth() / 2)
    for x in range(halfway):
        for y in range(img.getHeight()):
        
            # STEP 4: GET THE DATA
            p = img.getPixel(x, y)
            r = p.getRed()
            g = p.getGreen()
            b = p.getBlue()
            
            # STEP 5: CREATE THE COLOR
            newPixel = Pixel(r, g, b)
            
            # STEP 6: CHANGE THE PIXEL
            img.setPixel(halfway + x, y, newPixel)
            
    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)

.. mchoice:: 11_6_1_Image_Mirror_Q1
   :answer_a: img.setPixel(halfway - x, y, newPixel) 
   :answer_b: img.setPixel(x - halfway, y, newPixel) 
   :answer_c: img.setPixel(img.getWidth() - 1 - x, y, newPixel) 
   :answer_d: img.setPixel(x - img.getWidth(), y, newPixel) 
   :correct: c
   :feedback_a: It does mirror, but only the left half
   :feedback_b: This creates two copies of the left half
   :feedback_c: Yes, it looks like the woman is kissing herself
   :feedback_d: No, no effect.
   
   Try it: How would you mirror the image from left-to-right around a vertical line in the middle of the picture?  Try changing line 22 to these.  If you get it right it will look like the women is nose to nose with herself.

.. figure:: Figures/ImageCopy.png
    :width: 150px
    :align: center
    :alt: 
    :figclass: align-center

.. tabbed:: 11_6_1_WSt

        .. tab:: Question

           Copy the pixels in the top left quadrant to the the bottom right quadrant. Look at the picture above for the expected result.
           
           .. activecode::  11_6_1_WSq
               :nocodelens:

        .. tab:: Answer
            
          .. activecode::  11_6_1_WSa
              :nocodelens:

              # USE THE IMAGE LIBRARY
              from image import *

              # PICK THE IMAGE
              img = Image("vangogh.jpg")

              # SELECT THE DATA
              halfwayWidth = (int) (img.getWidth() / 2)
              halfwayHeight = (int) (img.getHeight() / 2)
              for x in range(halfwayWidth):
                  for y in range(halfwayHeight):

                      # GET THE DATA
                      p = img.getPixel(x, y)
                      r = p.getRed()
                      g = p.getGreen()
                      b = p.getBlue()

                      # CREATE THE COLOR
                      newPixel = Pixel(r, g, b)

                      # CHANGE THE PIXEL
                      img.setPixel(halfwayWidth + x, halfwayHeight + y, newPixel)

              # SHOW THE RESULT
              win = ImageWin(img.getWidth(),img.getHeight())
              img.draw(win)
  
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: studentcsp_11_6_1_WSq

.. note::

    Discuss topics in this section with classmates. 

      .. disqus::
          :shortname: cslearn4u
          :identifier: studentcsp_11_6
