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
	:prefix: csp-11-5-

Changing Step 6: Changing where we put the colors
===================================================

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
   
We have been getting a list of all of the pixels from an image using ``img.getPixels()`` and then looping through all the pixels using ``for p in pixels:``.  This processed all the pixels in the first row, then all the pixels in the second row, and so on until it processed all the pixels in the image.

.. figure:: Figures/rowOrder.png
    :align: center
    :figclass: align-center
    
    Figure 1: The order that pixels are processed if you use ``img.getPixels()``

We can also loop through all the x and y values in the image and then use the current (x,y) location to get the pixel from the image.  This approach uses two ``for`` loops with one inside of the other.  This is called a **nested loop**. See step 3 below for the nested loop.  Also, notice that we now need to get the pixel at the (x,y) location in step 4 as well. 

Since the outer loop changes the  x (the column) and the inner loop changes the y (the row), we will be processing all the pixels in the first column, then all the pixels in the second column, and so on until we process all the pixels in the image.  The order doesn't matter if we are just setting the red to zero at every pixel as shown below. 

.. figure:: Figures/colOrder.png
    :align: center
    :figclass: align-center
    
    Figure 2: The order that pixels are processed if you use a nested loop with x changing in the outer loop and y changing in the inner loop.

.. activecode:: Nested_Loop_Clear_Red
    :tour_1: "Important Lines Tour"; 2: nli1-line2; 5: nli1-line5; 8: nli1-line8; 9: nli1-line9; 12: nli1-line12; 15: nli1-line15; 18: nli1-line18; 21-22: nli1-line21-22; 
    :nocodelens:

    # STEP 1: USE THE IMAGE LIBRARY 
    from image import *
    
    # STEP 2: PICK THE IMAGE
    img = Image("vangogh.jpg")

    # STEP 3: LOOP THROUGH THE PIXELS
    for x in range(img.getWidth()):
    	for y in range(img.getHeight()):
        
            # STEP 4: GET THE DATA
            p = img.getPixel(x, y)
            
            # STEP 5: MODIFY THE COLOR
            p.setRed(0)
                        
            # STEP 6: MODIFY THE IMAGE
            img.updatePixel(p)
                    
    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)

We don't always have to modify the pixel color.  Sometimes we can just change the color at a different (x,y) location than the current pixel. This time we will skip step 5 (changing the color) and change step 6 to get the pixel at (x,y) and copy the color from that pixel to the pixel at location (y,x).  So this will copy the color from (0,2) to (2,0).  Later it will also copy the color from (2,0) to (0,2), since this loops through all the pixels in the image, but that will just copy back the original color. 

.. activecode:: Image_Location_Change
    :tour_1: "Important Lines Tour"; 2: nli2-line2; 5: nli2-line5; 8-9: nli2-line8-9; 12: nli2-line12; 15: nli2-line15; 18-19: nli2-line18-19;
    :nocodelens:

    # STEP 1: USE THE IMAGE LIBRARY 
    from image import *
    
    # STEP 2: PICK THE IMAGE
    img = Image("vangogh.jpg")

    # STEP 3: LOOP THROUGH THE PIXELS
    last = min(img.getWidth(), img.getHeight())
    for x in range(last):
    	for y in range(last):
        
            # STEP 4: GET THE DATA
            p = img.getPixel(x, y)
            
            # STEP 6: MODIFY THE IMAGE
            img.setPixel(y, x, p)
                    
    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)
    
Try the program above on some of the other images as well by changing the file name on line 5. Does it always have the same effect?

.. mchoice:: 11_5_1_Image_YX_Q1
   :answer_a: We rotated the image 90 degrees to the left and flipped it over.
   :answer_b: We mirrored the image around a diagonal line from the top left to the bottom right.
   :answer_c: We flipped the image horizontally.
   :answer_d: No change.
   :correct: b
   :feedback_a: This would be true if we created a new image and set the values in the new image from the old pixel values.
   :feedback_b: This is true since we copy the pixel colors from the current image to the new location.
   :feedback_c: The pixels would be copied to the same row.
   :feedback_d: Compare this image to the original vangogh.jpg image.
   
   What happened when we copied the pixel color from (x,y) to (y,x)?

This one does a little math with the x and y.

.. activecode:: 11_5_2_Image_Flip_Both
    :tour_1: "Important Lines Tour"; 8-9: nli3-line8-9; 12: nli3-line12; 15: nli3-line15;
    :nocodelens:

    # STEP 1: USE THE IMAGE LIBRARY 
    from image import *
    
    # STEP 2: PICK THE IMAGE
    img = Image("vangogh.jpg")

    # STEP 3: SELECT THE DATA
    for x in range(img.getWidth()):
    	for y in range(img.getHeight()):
    	
    	    # STEP 4: GET THE DATA
            p = img.getPixel(x, y)
            
            # STEP 6: CHANGE THE IMAGE
            img.setPixel(img.getWidth() - 1 - x, 
                         img.getHeight() - 1 - y, 
                         p)
            
    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)
    
Try the program above on some of the other images as well by changing the file name on line 5.   Which picture looks the best after you run the program?

.. note::

    Discuss topics in this section with classmates. 

      .. disqus::
          :shortname: cslearn4u
          :identifier: studentcsp_11_5
