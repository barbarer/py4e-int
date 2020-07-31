Write Code Exercises
---------------------

.. tabbed:: writecode_question14_1

   .. tab:: Question

      Complete the following code to create an object names 'spot' from Dog class
      with name "Spot" and tricks "spin" and "sit". You can use a print statement to
      print the string representation of the object.
      
      .. activecode:: writingcode_question14_1
         :nocodelens:

        class Dog:
            name = ''
            tricks = []

            def __init__(self, name):
                self.name = name
            
            def updateTricks(trick)
                self.tricks.append(trick)

            def __str__(self):
                return 'Dog(name = ' + self.name +  ', tricks = ' + str(self.tricks) + ')'

   .. tab:: Answer

      
      Complete the following code to create an object names 'spot' from Dog class
      with name "Spot" and tricks "spin" and "sit". You can use a print statement to
      print the string representation of the object.

      .. activecode:: writtencode_question14_1
        
        class Dog:
            name = ''
            tricks = []

            def __init__(self, name):
                self.name = name
            
            def updateTricks(self, trick):
                self.tricks.append(trick)

            def __str__(self):
                return 'Dog(name = ' + self.name +  ', tricks = ' + str(self.tricks) + ')'

        spot = Dog("Spot")
        spot.updateTricks("spin")
        spot.updateTricks("sit")
        print(spot)

.. tabbed:: writecode_question14_2
  
  .. tab:: Question
    
    Correct the errors in the following code.

    .. activecode:: writingcode_question14_2
        :nocodelens:

        Class Book:

            title = ''
            author = ''

            def __init__(title, author):
                title = title
                author = author
                print("You book is " + title + " by author " + author)
        
        book = new Book("The Odyssey", "Homer")

  .. tab:: Answer

    Correct the errors in the following code.

    .. activecode:: writtencode_question14_2

        class Book:
            def __init__(self, title, author):
                self.title = title
                self.author = author
                print("You book is " + self.title + " by author " + self.author)
        
        
        book = Book("The Odyssey", "Homer")



.. tabbed:: writecode_question14_3
  
  .. tab:: Question
    
    Complete the following code to include a function named 'getTitle' that returns a
    the 'title' and a function named 'getAuthor' that returns the 'author'

    .. activecode:: writingcode_question14_3
        :nocodelens:

        class Book:

            def __init__(self, title, author):
                self.title = title
                self.author = author
        
        book = Book("The Odyssey", "Homer")
        print(book.getTitle())
        print(book.getTitle())

        ====
         from unittest.gui import TestCaseGui

         class myTests(TestCaseGui):

             def testOne(self):
                 book1 = Book(The Odyssey", "Homer")
                 self.assertEqual(book1.getTitle()), "The Odyssey", "Your getTitle() function is not working correctly. Have you used 'self'?")
                 self.assertEqual(book1.getAuthor()), "Homer", "Your getAuthor() function is not working correctly. Have you used 'self'?")

         myTests().main()

  .. tab:: Answer

    Complete the following code to include a function named 'getTitle' that returns a
    the 'title' and a function named 'getAuthor' that returns the 'author'

    .. activecode:: writtencode_question14_3
        :nocodelens:

        class Book:

            def __init__(self, title, author):
                self.title = title
                self.author = author

            def getTitle(self):
                return self.title
            
            def getAuthor(self):
                return self.author

        
        book = Book("The Odyssey", "Homer")
        print(book.getTitle())
        print(book.getTitle())

.. tabbed:: writecode_question14_4
  
  .. tab:: Question

      Add a new class named Paperback that extends the Book class. Add a function named "__str__" within Paperback 
      that sends a string representation for the Paperback book.
    
      .. activecode:: writingcode_question14_4
          :nocodelens:

          class Book:

            def __init__(self, title, author):
                self.title = title
                self.author = author

            def getTitle(self):
                return self.title
            
            def getAuthor(self):
                return self.author

          book = Paperback("The Odyssey", "Homer")
          print(book)

  .. tab:: Answer

      Add a new class named Paperback that extends the Book class. Add a function named "__str__" within Paperback 
      that sends a string representation for the Paperback book.

      .. activecode:: writtencode_question14_4
        :nocodelens:

        class Book:

            def __init__(self, title, author):
                self.title = title
                self.author = author

            def getTitle(self):
                return self.title
            
            def getAuthor(self):
                return self.author
        
        class Paperback(Book):

            def __str__(self):
                return ("Paperback book " + self.title + " was written by " + self.author)
        
        book = Paperback("The Odyssey", "Homer")
        print(book)


.. tabbed:: writecode_question14_5
    
    .. tab:: Question

      Add a new class named Library that takes 'title' and 'author' as initial values, creates an instance of Book 
      and stores the instance in a list named 'current_books'. Also create '__str__' that returns the string representation
      of the object including 'current_books' list.
    
      .. activecode:: writingcode_question14_5
          :nocodelens:

          class Book:

            def __init__(self, title, author):
                self.title = title
                self.author = author

            def getTitle(self):
                return self.title
            
            def getAuthor(self):
                return self.author

            def __repr__(self):
                return (self.title + " was written by " + self.author)
          
          newBook = Library("The Odyssey", "Homer")
          print(newBook)

    .. tab:: Answer 

      .. activecode:: writtencode_question14_5
          :nocodelens:
        
         class Book:

            def __init__(self, title, author):
                self.title = title
                self.author = author

            def getTitle(self):
                return self.title
            
            def getAuthor(self):
                return self.author

            def __repr__(self):
                return ( self.title + " was written by " + self.author)


         class Library:

           current_books = []

           def __init__(self, title, author):
               self.current_books.append(Book(title, author))

           def __str__(self):
                return(str(self.current_books))     

        
          
         newBook = Library("The Odyssey", "Homer")
         print(newBook)

