..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


.. setup for automatic question numbering.

.. 	qnum::
	:start: 1
	:prefix: 11-8-

Chapter 11 Exercises
---------------------

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

.. note::

   Remember that it can take a bit of time to process all the pixels in a picture!  Check for errors below the code if it is taking a long time, but if you don't see any errors just wait.

#.

    .. tabbed:: ch11ex1t

        .. tab:: Question

            Fix 4 syntax errors in the code below so that it correctly sets the red in all pixels to 0.

            .. activecode:: ch11ex1q
                :nocodelens:

                from image import

                # CREATE AN IMAGE FROM A FILE
                img = Image("gal2.jpg"

                # LOOP THROUGH THE PIXELS
                pixelList = img.getPixels()
                for p in pixelList:

                    # SET THE RED TO 0
                    p.setRed()

                    # UPDATE THE IMAGE
                    img.updatePixel()

                # SHOW THE RESULT
                win = ImageWin(img.getWidth(),img.getHeight())
                img.draw(win)

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: teachercsp_ch11ex1q

#.

    .. tabbed:: ch11ex2t

        .. tab:: Question

    	    The code below makes the image have a green-blue tint. Change 1 thing in order to make it have a red tint instead.

            .. activecode::  ch11ex2q
                :nocodelens:

                # USE THE IMAGE LIBRARY
        	from image import *
                # PICK THE IMAGE
        	img = Image("puppy.jpg")
                # LOOP THROUGH THE PIXELS
        	pixelList = img.getPixels()
    	        for p in pixelList:
                    # SET THE COLOR
    		    p.setRed(0)
                    # UPDATE THE PIXEL
    	            img.updatePixel(p)

                # SHOW THE RESULT
        	win = ImageWin(img.getWidth(),img.getHeight())
                img.draw(win)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex2q

#.

    .. tabbed:: ch11ex3t

        .. tab:: Question

           Fix the indention below to correctly set the red to the green, the green to the blue, and the blue to the red.

           .. activecode::  ch11ex3q
                :nocodelens:

                # STEP 1: USE THE IMAGE LIBRARY
                from image import *

                # STEP 2: PICK THE IMAGE
                img = Image("beach.jpg")

                # STEP 3: LOOP THROUGH THE PIXELS
                pixels = img.getPixels()
                for p in pixels:

                # STEP 4: GET THE DATA
                r = p.getRed()
                g = p.getGreen()
                b = p.getBlue()

                # STEP 5: MODIFY THE COLOR
                p.setRed(g)
                p.setGreen(b)
                p.setBlue(r)

                # STEP 6: UPDATE THE IMAGE
                img.updatePixel(p)

                # STEP 7: SHOW THE RESULT
                win = ImageWin(img.getWidth(),img.getHeight())
                img.draw(win)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex3q

#.

    .. tabbed:: ch11ex4t

        .. tab:: Question

    	    Fix the 5 errors in the code, so that the Red pixels get the value of the green, the green get the value of blue, and the blue get the value of the red. (The cat should look purple and gray)

            .. activecode::  ch11ex4q
                :nocodelens:

                # STEP 1: USE THE IMAGE LIBRARY
		from image import *
                # STEP 2: PICK THE IMAGE
                img = Image("kitten")
                # STEP 3: LOOP THROUGH THE PIXELS
                pixels = img.getPixels()
                for p in pixel:
                    # STEP 4: GET THE DATA
                    r = p.getred()
                    b = p.getGreen()
                    g = p.getBlue()
                    # STEP 5: MODIFY THE COLOR
                    p.setRed(g)
                    p.setGreen(b)
                    p.setBlue(r)
                    # STEP 6: UPDATE THE IMAGE
                    img.updatePixel(p)
                # STEP 7: SHOW THE RESULT
                win = ImageWin(img.getWidth(),img.getHeight())
                img.draw(win)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex4q

#.

    .. tabbed:: ch11ex5t

        .. tab:: Question

           Fill in the missing code on lines 9, 12, and 18 below to set the red to half the original value in all pixels in the picture.

           .. activecode::  ch11ex5q
                :nocodelens:

                # STEP 1: USE THE IMAGE LIBRARY
                from image import *

                # STEP 2: PICK THE IMAGE
                img = Image("beach.jpg")

                # STEP 3: LOOP THROUGH THE PIXELS
                pixels = img.getPixels();
                for p

                    # STEP 4: GET THE DATA
                    r = p.

                    # STEP 5: MODIFY THE COLOR
                    p.setRed(r * 0.5);

                    # STEP 6: UPDATE THE IMAGE
                    img.

                # STEP 7: SHOW THE RESULT
                win = ImageWin(img.getWidth(),img.getHeight())
                img.draw(win)


        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: teachercsp_ch11ex5q

#.

    .. tabbed:: ch11ex6t

        .. tab:: Question

            Complete the code in order to set the blue value to an eighth of the green value plus an eighth of the red value.

            .. activecode::  ch11ex6q
                :nocodelens:

                # STEP 1: USE THE IMAGE LIBRARY
		from image import *
                # STEP 2: PICK THE IMAGE
                img = Image("swan.jpg")
                # STEP 3: LOOP THROUGH THE PIXELS
                pixels = img.getPixels()
                for
                    # STEP 4: GET THE DATA
                    b = p.get
                    g = p.get
		            r = p.get
                    # STEP 5: MODIFY THE COLOR
                    p.set
                    # STEP 6: UPDATE THE IMAGE
                    img.updatePixel(p)
                # STEP 7: SHOW THE RESULT
                win = ImageWin(img.getWidth(),img.getHeight())
                img.draw(win)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex6q

#.

    .. tabbed:: ch11ex7t

        .. tab:: Question

           Fix the indention in the code below so that it correctly increases the red in each pixel in the picture by 1.5.

           .. activecode::  ch11ex7q
                :nocodelens:

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
                p.setRed(r * 1.5);

                    # STEP 6: UPDATE THE IMAGE
                    img.updatePixel(p)

                # STEP 7: SHOW THE RESULT
                win = ImageWin(img.getWidth(),img.getHeight())
                img.draw(win)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex7q

#.

    .. tabbed:: ch11ex8t

        .. tab:: Question

            This code is supposed to make the picture completely black; however, it is taking forever when it should only take a few seconds. Fix the code (without adding anything new) so that it runs in a few seconds.

            .. activecode::  ch11ex8q
                :nocodelens:

                # STEP 1: USE THE IMAGE LIBRARY
		        from image import *
                # STEP 2: PICK THE IMAGE
                img = Image("motorcycle.jpg")

                # STEP 3: LOOP THROUGH THE PIXELS
                pixels = img.getPixels()
                for p in pixels:
                    # STEP 4: GET THE DATA
                    r = p.getRed()
                    b = p.getBlue()
                    g = p.getGreen()
                    # STEP 5: MODIFY THE COLOR
                    p.setRed(0)
                    p.setGreen(0)
                    p.setBlue(0)
                    # STEP 6: UPDATE THE IMAGE
                    img.updatePixel(p)
                    # STEP 7: SHOW THE RESULT
                    win = ImageWin(img.getWidth(),img.getHeight())
                    img.draw(win)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex8q

#.

    .. tabbed:: ch11ex9t

        .. tab:: Question

           Fix the code below to correctly set the green and blue values to 0.75 times their current values.

           .. activecode::  ch11ex9q
                :nocodelens:

                # STEP 1: USE THE IMAGE LIBRARY
                from image import *

                # STEP 2: PICK THE IMAGE
                img = Image("beach.jpg")

                # STEP 3: LOOP THROUGH THE PIXELS
                pixels = img.getPixels();
                for p in pixels:

                    p.setGreen(g * 0)
                    p.setBlue(b * 0)
                    g = p.getGreen()
                    b = p.getBlue()

                    # STEP 6: UPDATE THE IMAGE
                    img.updatePixel(p)

                # STEP 7: SHOW THE RESULT
                win = ImageWin(img.getWidth(),img.getHeight())
                img.draw(win)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex9q

#.

    .. tabbed:: ch11ex10t

        .. tab:: Question

    	    The code below sets all the pixels to half their original values with one for loop. Change the code so it uses 2 for loops that utilize the range function (1 for loop should be nested in the other).

            .. activecode::  ch11ex10q
                :nocodelens:

                # STEP 1: USE THE IMAGE LIBRARY
		        from image import *
                # STEP 2: PICK THE IMAGE
                img = Image("baby.jpg")
                # STEP 3: LOOP THROUGH THE PIXELS
                pixels = img.getPixels()
                for p in pixels:
                    # STEP 4: GET THE DATA
                    r = p.getRed()
                    b = p.getBlue()
                    g = p.getGreen()
                    # STEP 5: MODIFY THE COLOR
                    p.setRed(r/2)
                    p.setGreen(g/2)
                    p.setBlue(b/2)
                    # STEP 6: UPDATE THE IMAGE
                    img.updatePixel(p)
                # STEP 7: SHOW THE RESULT
                win = ImageWin(img.getWidth(),img.getHeight())
                img.draw(win)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex10q

#.

    .. tabbed:: ch11ex11t

        .. tab:: Question

           Change the following code to set the red to 0 for all pixels in the left half of the picture.

           .. activecode::  ch11ex11q
                :nocodelens:

                from image import *

                # CREATE AN IMAGE FROM A FILE
                img = Image("gal2.jpg")

                # LOOP THROUGH THE PIXELS
                for x in range(img.getWidth()):
    	            for y in range(img.getHeight()):

    	                # GET THE DATA
    	                p = img.getPixel(x, y)

                        # SET THE RED TO 0
                        p.setRed(0)

                        # UPDATE THE IMAGE
                        img.updatePixel(p)

                # SHOW THE RESULT
                win = ImageWin(img.getWidth(),img.getHeight())
                img.draw(win)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex11q

#.

    .. tabbed:: ch11ex12t

        .. tab:: Question

        	   The code below makes the whole image have a blue-green tint. Change the code so that it makes an only blue tint in the bottom left corner.

            .. activecode::  ch11ex12q
                :nocodelens:

		from image import *
                # CREATE AN IMAGE FROM A FILE
		img = Image("vangogh.jpg")
                # LOOP THROUGH THE PIXELS
        	for x in range(int(img.getWidth())):
        	    for y in range(int(img.getHeight())):
                        # GET THE DATA
        	        p = img.getPixel(x, y)
                        # SET THE PIXEL
        		p.setRed(0)
                        # UPDATE THE PIXEL
        		img.updatePixel(p)
                # SHOW THE RESULT
        	win = ImageWin(img.getWidth(),img.getHeight())
        	img.draw(win)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex12q

#.

    .. tabbed:: ch11ex13t

        .. tab:: Question

           Change the code below to set the red value in the pixels in the bottom half of the picture to 0.

           .. activecode::  ch11ex13q
                :nocodelens:

                from image import *

                # CREATE AN IMAGE FROM A FILE
                img = Image("gal2.jpg")

                # LOOP THROUGH THE PIXELS
                for x in range(img.getWidth()):
    	            for y in range(img.getHeight()):

    	                # GET THE DATA
    	                p = img.getPixel(x, y)

                        # SET THE RED TO 0
                        p.setRed(0)

                        # UPDATE THE IMAGE
                        img.updatePixel(p)

                # SHOW THE RESULT
                win = ImageWin(img.getWidth(),img.getHeight())
                img.draw(win)



        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex13q

#.

    .. tabbed:: ch11ex14t

        .. tab:: Question

    	    The code below makes the whole image seem red. Change it, so that only every 5 pixels get changed, so that it will look like a red grid.

            .. activecode::  ch11ex14q
                :nocodelens:

                from image import *
                # CREATE AN IMAGE FROM A FILE
        		img = Image("guy1.jpg")
                # LOOP THROUGH THE PIXELS
        		for x in range(int(img.getWidth())):
        		    for y in range(img.getHeight()):
                    # GET THE DATA
        		    p = img.getPixel(x, y)
                    # SET THE PIXEL
        		    p.setGreen(0)
        		    p.setBlue(0)
                    # UPDATE THE IMAGE
        		    img.updatePixel(p)
                # SHOW THE RESULT
    		    win = ImageWin(img.getWidth(),img.getHeight())
    		    img.draw(win)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex14q

#.

    .. tabbed:: ch11ex15t

        .. tab:: Question

           Change the following code into a procedure to keep only the green values in all pixels in a picture.

           .. activecode::  ch11ex15q
                :nocodelens:

                # STEP 1: USE THE IMAGE LIBRARY
                from image import *

                # STEP 2: PICK THE IMAGE
                img = Image("beach.jpg")

                # STEP 3: LOOP THROUGH THE PIXELS
                pixels = img.getPixels();
                for p in pixels:

                    # STEP 5: MODIFY THE COLOR
                    p.setRed(0)
                    p.setBlue(0)

                    # STEP 6: UPDATE THE IMAGE
                    img.updatePixel(p)

                # STEP 7: SHOW THE RESULT
                win = ImageWin(img.getWidth(),img.getHeight())
                img.draw(win)


        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex15q

#.

    .. tabbed:: ch11ex16t

        .. tab:: Question

            A grayscale picture is when the red, green, and blue value of a pixel are all equal to the average of the original pixel value. Write the code to turn the left half of an image into gray scale.

            .. activecode::  ch11ex16q
                :nocodelens:


        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex16q

#.

    .. tabbed:: ch11ex17t

        .. tab:: Question

           Define a procedure to negate an image.  See Image_Negate_Quarter from Chapter 11 section 7 for how to create a negative of an image.  Pass the image to the procedure.  Do the import, create the image, call the prodecure, and show the result.

           .. activecode::  ch11ex17q
                :nocodelens:

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex17q

#.

    .. tabbed:: ch11ex18t

        .. tab:: Question

    	   Write code that takes the top half of an image and replicates it in the bottom half.

            .. activecode::  ch11ex18q
                :nocodelens:

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex18q

#.

    .. tabbed:: ch11ex19t

        .. tab:: Question

           Write a procedure to mirror an image from left to right around a vertical line in the middle of the image.  Pass the image to the procedure.  Do the import, create the image, call the prodecure, and show the result.

           .. activecode::  ch11ex19q
               :nocodelens:

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex19q

#.

    .. tabbed:: ch11ex20t

        .. tab:: Question

            Write code that flips the image across a horizontal line.

            .. activecode::  ch11ex20q
                :nocodelens:

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch11ex20q
