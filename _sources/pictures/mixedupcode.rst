Mixed-Up Code Exercises
------------------------
.. parsonsprob:: mixedupcode_pictures1
	:numbered: left
	:practice: T
	:adaptive:

	Arrange the code blocks to set the green in all pixels to 0. Be sure to indent properly and look out for extra code blocks!
	-----
	from image import *
	=====
	img = Image('kitten.jpg')
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

.. parsonsprob:: mixedupcode_pictures2
	:numbered: left
	:practice: T
	:adaptive:

	Arrange the code to set the red in all pixels equal to the blue value. It also should set the green and blue in all pixels to 255. Be sure to indent correctly and be careful for extra code blocks!
	-----
	from image import *
	=====
	img = Image("beach.jpg")
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

.. parsonsprob:: mixedupcode_pictures3
	:numbered: left
	:practice: T
	:adaptive:

	Arrange the code to reduce the green in all pixels by 75%. Be sure to indent correctly and look out for extra code blocks!
	-----
	from image import *
	=====
	img = Image('kitten.jpg')
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

.. parsonsprob:: mixedupcode_pictures4
	:numbered: left
	:practice: T
	:adaptive:

	Arrange the following code blocks to set the red value equal to 1.5x the blue value. Be sure to indent correctly and look out for extra code blocks!
	-----
	from image import *
	=====
	img = Image('kitten.jpg')
	=====
	pixels = img.getPixels()
	=====
	for p in pixels:
	=====
		r = p.getRed() #distractor
	=====
		b = p.getBlue()
	=====
		p.setRed(b * 1.5)
	=====
		r.setRed(b * 1.5) #paired
	=====
		img.updatePxel(p)
	=====
	win = ImageWin(img.getWidth(), img.getHeight())
	=====
	img.draw(win)

.. parsonsprob:: mixedupcode_pictures5
	:numbered: left
	:practice: T
	:adaptive:

	The following program is supposed to decrease the red by 0.6, increase the blue by 0.6, and set the green to 0, but the code blocks are out of order. Drag and drop the blocks to put them in the correct order.
	-----
	from image import *
	=====
	from pixels import * #distractor
	=====
	img = Image("beach.jpg")
	=====
	pixels = img.getPixels()
	=====
	newPixel = Pixel(r, 0, b) #distractor
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
		img.setPixel(newPixel)
	=====
	win = ImageWin(img.getWidth(), img.getHeight())
	=====
	img.draw(win)
	=====
	img.draw() #paired


.. parsonsprob:: mixedupcode_pictures6
	:numbered: left
	:practice: T
	:adaptive:

	The following program should make the picture completely white, but the lines are mixed up. Be sure to indent correctly and watch out for extra code blocks!
	-----
	from image import *
	=====
	from picture import * #distractor
	=====
	img = Image('motorcycle.jpg')
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

.. parsonsprob:: mixedupcode_pictures7
	:numbered: left
	:practice: T
	:adaptive:

	The following program should set the red of every other pixel to 0, but the lines are mixed up. Drag and drop the code blocks into the correct order -- make sure to indent correctly!
	-----
	from image import *
	=====
	img = Image("vangogh.jpg")
	=====
	for x in range(0, img.getWidth(), 2):
	=====
	for x in range(img.getWidth()): #paired
	=====
		for y in range(0, img.getHeight(), 2):
	=====
		for y in range(img.getHeight()):
	=====
			p = img.getPixel(x,y)
	=====
			r = p.getRed() #distractor
	=====
			p.setRed(0)
	=====
			img.updatePixel(p)
	=====
	win = ImageWin(img.getWidth(), img.getHeight())
	img.draw(win)


.. parsonsprob:: mixedupcode_pctures8
	:numbered: left
	:practice: T
	:adaptive:

	The following program should only change the color of the pixels in the bottom left quadrant. The code should set the red to the blue value, the green to the red value, and the blue to the green value. Rearrange the following code blocks to accomplish this. Be sure to indent correctly and watch out for extra code blocks.
	-----
	from image import *
	=====
	img = Image("kitten.jpg")
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

.. parsonsprob:: mixedupcode_pictures9
	:numbered: left
	:practice: T
	:adaptive:

	Arrange the following program so that the right side of the image is copied onto the left side. Be sure to indent correctly!
	-----
	from image import *
	img = Image("motorcycle.jpg")
	=====
	halfway = (int) (img.getWidth() / 2)
	=====
	for x in range(halfway, img.getWidth()):
	=====
	for x in range(halfway): #paired
	=====
		for y in range(img.getHeight()):
	=====
			p = get.Pixel(x, y)
	=====
			img.setPixel(x - halfway, y, p)
	=====
			img.setPixel(halfway + x, y, p) #paired
	=====
	win = ImageWin(img.getWidth(), img.getHeight())
	img.draw(win)

.. parsonsprob:: mixedupcode_pictures10
	:numbered: left
	:practice: T
	:adaptive:

	The following program is intended to copy the pixels from the top quarter of the image to the bottom quarter of the image. Drag and drop the code blocks into the correct order. Be sure to indent properly and be mindful of extra code blocks!
	-----
	from image import *
	=====
	img = Image("vangogh.jpg")
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
