Mixed-Up Code Exercises
------------------------
.. parsonsprob:: mixedupcode_pictures_pp1
	:numbered: left
	:practice: T
	:adaptive:

	Create a function ``removeGreen(img)`` that sets the green in all pixels in image ``img`` to 0.
	-----
	from image import *
	=====
	def removeGreen(img):
	=====
		pixels = img.getPixels()
	=====
		for p in pixels:
	=====
			p.setGreen(0)
	=====
			img.updatePixel(p)
	=====
		win = ImageWin(img.getWidth(), img.getHeight())
	=====
		win = ImageWin(img.getHeight(), img.getWidth()) #paired
	=====
		img.draw(win)


.. activecode:: mixedupcode_pictures_ac1
	:practice: T
	:nocodelens:
	:datafile: kitten.jpg
	:autograde: unittest

	Write a function ``removeGreen(img)`` that sets the green in all pixels in image ``img`` to 0.
	~~~~

	=====

	from unittest.gui import TestCaseGui

	class myTests(TestCaseGui):
	    def testOne(self):
		      img = Image('kitten.jpg')
			    removeGreen(img)
			    pixels = img.getPixels()
			    for p in pixels:
				      self.assertEqual(p, 0, 'Checking that the green in each pixel was set to 0.')
	myTests().main()


.. parsonsprob:: mixedupcode_pictures_pp2
	:numbered: left
	:practice: T
	:adaptive:

	Create a function ``changeColors(img)`` that sets the red in all pixels equal to the blue value in the image ``img``. Then, it sets the green and blue in all pixels to 255.
	-----
	from image import *
	=====
	def changeColors(img):
	=====
		pixels = img.getPixels()
	=====
		pixels = img.Pixels() #paired
	=====
		for p in pixels:
	=====
			b = p.getBlue()
	=====
			p.setRed(b)
			p.setGreen(255)
			p.setBlue(255)
	=====
			img.updatePixel(p)
	=====
		win = ImageWin(img.getWidth(), img.getHeight())
	=====
		win = ImageWin(img.getHeight(), img.getWidth()) #paired
	=====
		img.draw(win)

.. activecode:: mixedupcode_pictures_ac2
	:practice: T
	:nocodelens:
	:datafile: beach.jpg
	:autograde: unittest

	Write a function ``changeColors(img)`` that sets the red in all pixels equal to the blue value in the image ``img``. Then, it sets the green and blue in all pixels to 255.
	~~~~

	=====

	from unittest.gui import TestCaseGui

	class myTests(TestCaseGui):
		def testOne(self):
			img = Image('beach.jpg')
			pixels1 = img.getPixels()
			p = pixels1[-1]
			p2 = pixels[0]
			x1 = p.getBlue()
			x2 = p2.getBlue()

			changeColors(img)
			pixels = img.getPixels()
			p = pixels[-1]
			p2 = pixels[0]
			self.assertEqual(p.getRed(), x1, "Checking that the last pixel's red value was set to the blue value")
			self.assertEqual(p2.getRed(), x2, "Checking that the first pixel's red value was set to the blue value")
			self.assertEqual(p.getBlue(), 255, "Checking that the last blue value was set to 255")
			self.assertEqual(p.getGreen(), 255, "Checking that the last green value was set to 255")
	myTests().main()


.. parsonsprob:: mixedupcode_pictures_pp3
	:numbered: left
	:practice: T
	:adaptive:

	Create a function ``reduceGreen(img)`` that reduces the green in all pixels by 75% in image ``img``.
	-----
	from image import *
	=====
	def reduceGreen(img):
	=====
		pixelList = img.getPixels()
	=====
		pixelList = img.Pixels() #paired
	=====
		for p in pixelList:
	=====
			g = p.getGreen()
	=====
			p.setGreen(g * 0.25)
	=====
			p.setGreen(g * 0.75) #paired
	=====
			img.updatePixel(p)
	=====
		win = ImageWin(img.getWidth(), img.getHeight())
	=====
		img.draw(win)


.. activecode:: mixedupcode_pictures_ac3
	:practice: T
	:nocodelens:
	:datafile: kitten.jpg
	:autograde: unittest

	Write a function ``reduceGreen(img)`` that reduces the green in all pixels by 75% in image ``img``.
	~~~~

	=====

	from unittest.gui import TestCaseGui

	class myTests(TestCaseGui):
		def testOne(self):
			img = Image('kitten.jpg')
			pixels1 = img.getPixels()
			p = pixels1[-1]
			x1 = p.getGreen() * 0.25

			reduceGreen(img)
			pixels = c.getPixels()
			p = pixels[-1]
			c1 = p.getGreen()
			self.assertEqual(c1, x1, "Checking that the green value in the last pixel was reduced by 75%")
	myTests().main()

.. parsonsprob:: mixedupcode_pictures_pp4
	:numbered: left
	:practice: T
	:adaptive:

	Create a function ``changeRed(img)`` that sets all red values equal to 1.5x the blue value in the image ``img``.
	-----
	from image import *
	=====
	def changeRed(img):
	=====
		pixels = img.getPixels()
	=====
		for p in pixels:
	=====
			r = p.getRed() #paired
	=====
			b = p.getBlue()
	=====
			p.setRed(b * 1.5)
	=====
			r.setRed(b * 1.5) #paired
	=====
			img.updatePixel(p)
	=====
		win = ImageWin(img.getWidth(), img.getHeight())
	=====
		img.draw(win)


.. activecode:: mixedupcode_pictures_ac4
	:practice: T
	:nocodelens:
	:datafile: kitten.jpg
	:autograde: unittest

	Write a function ``changeRed`` that sets all red values equal to 1.5x the blue value in the image ``img``.
	~~~~

	=====

	from unittest.gui import TestCaseGui

	class myTests(TestCaseGui):
		def testOne(self):
			img = Image('kitten.jpg')
			pixels1 = img.getPixels()
			p = pixels1[-1]
			x1 = p.getBlue() * 1.5

			changeRed(img)
			pixels = img.getPixels()
			p = pixels[-1]
			c1 = p.getRed()
			self.assertEqual(c1, x1, "Checking that the red value was set to 1.5x the blue value")
	myTests().main()


.. parsonsprob:: mixedupcode_pictures_pp_5
	:numbered: left
	:practice: T
	:adaptive:

	Create a function ``modifyColors(img)`` that decreases the red to 60% of its original value, increases the blue by 60% of its original value, and sets the green to 0 in the image ``img``.
	-----
	from image import *
	=====
	def modifyColors(img):
	=====
		pixels = img.getPixels()
	=====
		for p in pixels:
	=====
			r = p.getRed()
			b = p.getBlue()
	=====
			p.setRed(r * 0.6)
			p.setBlue(b * 1.6)
			p.setGreen(0)
	=====
			p.setRed(r / 0.6)
			p.setBlue(b * 0.6)
			p.setGreen(0) #paired
	=====
			img.updatePixel(p)
	=====
		win = ImageWin(img.getWidth(), img.getHeight())
	=====
		img.draw(win)
	=====
		img.draw() #paired

.. activecode:: mixedupcode_pictures_ac5
	:practice: T
	:nocodelens:
	:datafile: beach.jpg
	:autograde: unittest

	Write a function ``modifyColors(img)`` that decreases the red to 60% of its original value, increases the blue by 60% of its original value, and sets the green to 0 in the image ``img``.
	~~~~

	=====

	from unittest.gui import TestCaseGui

	class myTests(TestCaseGui):
		def testOne(self):
			img = Image("beach.jpg")
			pixels1 = img.getPixels()
			p = pixels1[1]
			x1 = (p.getRed() * 0.6)
			x2 = (p.getBlue() * 1.6)

			modifyColors(img)
			pixels = img.getPixels()
			p = pixels[1]
			c1 = p.getRed()
			c2 = p.getBlue()
			c3 = p.getGreen()
			self.assertEqual(1.2, x1, "Checking that red value was reduced to 60% of original value")
			self.assertEqual(1.6, x2, "Checking that blue value increased by 60% of original value")
			self.assertEqual(c3, 0, "Checking that green value was set to 0")
	myTests().main()

.. parsonsprob:: mixedupcode_pictures_pp6
	:numbered: left
	:practice: T
	:adaptive:

	Create a function ``imageToWhite(img)`` that makes the image ``img`` completely white.
	-----
	from image import *
	=====
	from picture import * #paired
	=====
	def imageToWhite(img):
	=====
		pixels = img.getPixels()
		for p in pixels:
	=====
			p.setRed(255)
			p.setGreen(255)
			p.setBlue(255)
	=====
			p.setRed(0)
			p.setGreen(0)
			p.setBlue(0) #paired
	=====
			img.updatePixel(p)
	=====
		win = ImageWin(img.getWidth(), img.getHeight())
		img.draw(win)



.. activecode:: mixedupcode_pictures_ac6
	:practice: T
	:nocodelens:
	:datafile: motorcycle.jpg
	:autograde: unittest

	Write a function ``imageToWhite(img)`` that makes the image ``img`` completely white.
	~~~~

	=====

	from unittest.gui import TestCaseGui

	class myTests(TestCaseGui):
		def testOne(self):
			img = Image("motorcycle.jpg")

			imageToWhite(img)
			pixels = img.getPixels()
			for p in pixels:
			    r = p.getRed()
			    b = p.getBlue()
			    g = p.getGreen()
			    self.assertEqual(r, 255, "Checking that the red value was set to 255")
			    self.assertEqual(b, 255, "Checking that the blue value was set to 255")
			    self.assertEqual(g, 255, "Checking that the green value was set to 255")
	myTests().main()


.. parsonsprob:: mixedupcode_pictures_pp_7
	:numbered: left
	:practice: T
	:adaptive:

	Create a function ``alternatingRed(img)`` that sets the red of every other pixel to 0 in the image ``img``.
	-----
	from image import *
	=====
	def alternatingRed(img):
	=====
		for x in range(0, img.getWidth(), 2):
	=====
		for x in range(img.getWidth()): #paired
	=====
			for y in range(0, img.getHeight(), 2):
	=====
			for y in range(img.getHeight()): #paired
	=====
				p = img.getPixel(x,y)
	=====
				p.setRed(0)
	=====
				img.updatePixel(p)
	=====
		win = ImageWin(img.getWidth(), img.getHeight())
		img.draw(win)



.. activecode:: mixedupcode_pictures_ac7
	:practice: T
	:nocodelens:
	:datafile: vangogh.jpg
	:autograde: unittest

	Write a function ``alternatingRed(img)`` that sets the red of every other pixel to 0 in the image ``img``.
	~~~~

	=====

	from unittest.gui import TestCaseGui

	class myTests(TestCaseGui):
		def testOne(self):
			img = Image("vangogh.jpg")
			pixels_orig = img.getPixels()
			r_orig1 = img.getPixel(100,100).getRed()
			r_orig2 = img.getPixel(101,100).getRed()


			alternatingRed(img)
			r1 = img.getPixel(100,100).getRed()
			r2 = img.getPixel(101,100).getRed()
			self.assertEqual(r1, 0, "Checking that the values of the even elements have changed to zero")
			self.assertNotEqual(r_orig1, r1, "Checking that the values of the even elements have changed")
			self.assertEqual(r2, 40, "Checking that the values of the odd elements have stayed the same")

	myTests().main()


.. parsonsprob:: mixedupcode_pictures_pp8
	:numbered: left
	:practice: T
	:adaptive:

	Create a function ``changeQuadrantColors(img)`` that only changes the color of the pixels in the bottom left quadrant of the image ``img``.
	The code should set the red value to the original blue value, the green value to the original red value, and the blue value to the original green value.
	-----
	from image import *
	=====
	def changeQuadrantColors(img):
	=====
		halfWidth = (int) (img.getWidth() / 2)
		halfHeight = (int) (img.getHeight() / 2)
	=====
		for x in range(halfWidth):
	=====
			for y in range(halfHeight, img.getHeight()):
	=====
			for y in range(halfHeight): #paired
	=====
				p = img.getPixel(x, y)
	=====
				r = p.getRed()
				g = p.getGreen()
				b = p.getBlue()
	=====
				newPixel = Pixel(b, r, g)
	=====
				img.setPixel(x, y, newPixel)
	=====
		win = ImageWin(img.getWidth(), img.getHeight())
		img.draw(win)


.. activecode:: mixedupcode_pictures_ac8
	:practice: T
	:nocodelens:
	:datafile: kitten.jpg
	:autograde: unittest

	Write a function ``changeQuadrantColors(img)`` that only changes the color of the pixels in the bottom left quadrant of the image ``img``.
	The code should set the red value to the original blue value, the green value to the original red value, and the blue value to the original green value.
	~~~~

	=====

	from unittest.gui import TestCaseGui

	class myTests(TestCaseGui):
		def testOne(self):
			img = Image("kitten.jpg")
			pixel_orig = img.getPixel(0,75)
			r_orig = pixel_orig.getRed()
			b_orig = pixel_orig.getBlue()
			g_orig = pixel_orig.getGreen()


			changeQuadrantColors(img)
			pixel_new = img.getPixel(0,75)
			r_new = pixel_new.getRed()
			b_new = pixel_new.getBlue()
			g_new = pixel_new.getGreen()
			self.assertEqual(r_new, b_orig, "Checking that the red values are set to original blue values")
			self.assertEqual(g_new, r_orig, "Checking that the green values are set to original red values")
			self.assertEqual(b_new, g_orig, "Checking that the blue values are set to original green values")
	myTests().main()

.. parsonsprob:: mixedupcode_pictures_pp9
	:numbered: left
	:practice: T
	:adaptive:

	Create a function ``copyRightSide(img)`` that copies the right side of the image onto the left side in the image ``img``.
	-----
	from image import *
	=====
	def copyRightSide(img):
	=====
		halfway = (int) (img.getWidth() / 2)
	=====
		for x in range(halfway, img.getWidth()):
	=====
		for x in range(halfway): #paired
	=====
			for y in range(img.getHeight()):
	=====
				p = img.getPixel(x, y)
	=====
				img.setPixel(x - halfway, y, p)
	=====
				img.setPixel(halfway + x, y, p) #paired
	=====
		win = ImageWin(img.getWidth(), img.getHeight())
		img.draw(win)



.. activecode:: mixedupcode_pictures_ac9
	:practice: T
	:nocodelens:
	:datafile: motorcycle.jpg
	:autograde: unittest

	Write a function ``copyRightSide(img)`` that copies the right side of the image onto the left side in the image ``img``.
	~~~~

	=====

	from unittest.gui import TestCaseGui

	class myTests(TestCaseGui):
		def testOne(self):
			img = Image("motorcycle.jpg")
			pixel_right = img.getPixel(195,50)

			copyRightSide(img)
			pixel_new = img.getPixel(97,50)
			self.assertEqual(list(pixel_right), list(pixel_new), "Checking that the right side of the image is copied onto the left side")
	myTests().main()

.. parsonsprob:: mixedupcode_pictures_pp10
	:numbered: left
	:practice: T
	:adaptive:

	Create a function ``copyTopQuarter(img)`` that copies the pixels from the top quarter of the y-axis to the bottom quarter of the y-axis in the image ``img``.
	-----
	from image import *
	=====
	def copyTopQuarter(img):
	=====
		quarterHeight = (int) (img.getHeight() / 4)
	=====
		for x in range(img.getWidth()):
	=====
			for y in range(quarterHeight):
	=====
				p = img.getPixel(x, y)
	=====
				img.setPixel(x, quarterHeight * 3 + y, p)
	=====
		win = ImageWin(img.getWidth(), img.getHeight())
		img.draw(win)


.. activecode:: mixedupcode_pictures_ac10
	:practice: T
	:nocodelens:
	:datafile: vangogh.jpg
	:autograde: unittest

	Write a function ``copyTopQuarter(img)`` that copies the pixels from the top quarter of the y-axis to the bottom quarter of the y-axis in the image ``img``.
	~~~~

	=====

	from unittest.gui import TestCaseGui

	class myTests(TestCaseGui):
		def testOne(self):
			img = Image("vangogh.jpg")
			pixels1 = img.getPixel(0,0)
			pixels2 = img.getPixel(50, 50)
			pixels3 = img.getPixel(0,111)


			copyTopQuarter(img)
			pixels_new1 = img.getPixel(0,111)
			pixels_new2 = img.getPixel(50,50)
			self.assertEqual(list(pixels1), list(pixels_new1), "Check that the top quarter is copied to bottom quarter")
			self.assertEqual(list(pixels2), list(pixels_new2), "Checking that the pixels not in the bottom quarter stayed the same")
	myTests().main()
