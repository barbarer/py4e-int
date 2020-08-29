Write Code Exercises
---------------------

.. tabbed:: writecode_question14_1

   .. tab:: Question

      .. activecode:: writingcode_question14_1
         :nocodelens:

        Complete the following code to create an object names 'spot' from Dog class
        with name "Spot" and tricks "spin" and "sit". You can use a print statement to
        print the string representation of the object.
        ~~~~

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

      .. activecode:: writtencode_question14_1
        
        Complete the following code to create an object names 'spot' from Dog class
        with name "Spot" and tricks "spin" and "sit". You can use a print statement to
        print the string representation of the object.
        ~~~~

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

.. activecode:: writingcode_question14_2
  :nocodelens:

  Complete the following code to include a list named 'attacks' and a function named
  updateAttacks() which updates the 'attacks' list to include the attacks of the pokemon.
  ~~~~

  class Pokemon:
    name = ''
    type = ''

    def __init__(self, name, type):
        self.name = name
        self.type = type

    def stringPokemon(self):
        print("Pokemon name is {} and type is {}".format(self.name, self.type))
        print("Attacks include: " + str(self.attacks))
  
  bulbasaur = Pokemon('Bulbasaur', 'Grass')
  bulbasaur.updateAttacks('Vine Whip')
  bulbasaur.updateAttacks('Tackle')

.. tabbed:: writecode_question14_3
  
  .. tab:: Question

    .. activecode:: writingcode_question14_3
        :nocodelens:

        Correct the errors in the following code. There are  6 errors.
        ~~~~

        Class Book:

            title = ''
            author = ''

            def __init__(title, author):
                title = title
                author = author
                print("You book is " + title + " by author " + author)
        
        book = new Book("The Odyssey", "Homer")

  .. tab:: Answer

    .. activecode:: writtencode_question14_3

        Correct the errors in the following code. There are 6 errors.
        ~~~~

        class Book:

            title = ''
            author = ''

            def __init__(self, title, author):
                self.title = title
                self.author = author
                print("You book is " + self.title + " by author " + self.author)
        
        
        book = Book("The Odyssey", "Homer")

.. activecode:: writingcode_question14_4
  :nocodelens:

  Correct the following code. There are  7 errors.
  ~~~~

  class Dog:
    self.name = ''
    self.tricks = []

    def init(self.name):
      name  = self.name
      print('New dog's name is " + Self.name

    def updateTricks(self.tricks):
        tricks.append = self.tricks
        print("Tricks: " + str(Self.tricks) 
  
  dog = new Dog('Toby')
  Dog.updateTricks('catch')
  Dog.updateTricks('spin')

.. tabbed:: writecode_question14_5
  
  .. tab:: Question

    .. activecode:: writingcode_question14_5
        :nocodelens:

        Complete the following code to include a function named 'getTitle' that returns a
        the 'title' and a function named 'getAuthor' that returns the 'author'
        ~~~~

        class Book:

            def __init__(self, title, author):
                self.title = title
                self.author = author
        
        book = Book("The Odyssey", "Homer")
        print(book.getTitle())
        print(book.getTitle())


  .. tab:: Answer

    .. activecode:: writtencode_question14_5
        :nocodelens:

        Complete the following code to include a function named 'getTitle' that returns a
        the 'title' and a function named 'getAuthor' that returns the 'author'
        ~~~~

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


.. activecode:: writingcode_question14_6

  Complete the following code to include a function named 'getTricks' that returns the 'tricks' 
  list and a function named 'getName' that returns the 'name' when called.
  ~~~~

  class Dog:
    name = ''
    tricks = []

    def __init__(self, name):
      self.name = name
    
    def updateTricks(self, trick):
      self.tricks.append(trick)
  
  dog = Dog('Frito')
  dog.updateTricks('spin')
  dog.updateTricks('sit')
  print('Name: ' + dog.getName())
  print('Tricks: ' + str(dog.getTricks))


.. tabbed:: writecode_question14_7
  
  .. tab:: Question

      .. activecode:: writingcode_question14_7
          :nocodelens:

          Add a new class named Paperback that extends the Book class. Add a function named "__str__" within Paperback 
          that sends a string representation for the Paperback book.
          ~~~~

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

      .. activecode:: writtencode_question14_7
        :nocodelens:

        Add a new class named Paperback that extends the Book class. Add a function named "__str__" within Paperback 
        that sends a string representation for the Paperback book.
        ~~~~

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

.. activecode:: writingcode_question14_8

  Add a new class named WaterType which would extend the Pokemon class. Include a list named 'attacks' in
  the WaterType class and write functions named 'updateAttacks', 'getName' and'getAttacks' class in the WaterType class
  that appends the 'attacks' list, returns the 'name' and returns the 'attacks' list respectively when called.
  ~~~~
  
  class Pokemon:
    name = ''

    def __init__(self, name):
      self.name = name
  
  pokemon = WaterType('Gyrados')
  pokemon.updateAttacks('Twister')
  pokemon.updateAttacks('Whirlpool')
  print("Water type Pokemon name: " + pokemon.getName())
  print("Attacks: " str(pokemon.getAttacks()))

.. tabbed:: writecode_question14_9
    
    .. tab:: Question

      .. activecode:: writingcode_question14_9
          :nocodelens:

          Add a new class named Library that takes 'title' and 'author' as initial values, creates an instance of Book 
          and stores the instance in a list named 'current_books'. Also create a function called 'addBooks' which takes 'title'
          and 'author' as arguments, creates an instance of Book and stores it in 'current_books' when called. Also create '__str__' that 
          returns the string representation of the object that includes the 'current_books' list.
          ~~~~

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
          newBook.addBooks("Pride and Prejudice", "Jane Austen")
          print(newBook)

    .. tab:: Answer 

      .. activecode:: writtencode_question14_9
          :nocodelens:

         Add a new class named Library that takes 'title' and 'author' as initial values, creates an instance of Book 
         and stores the instance in a list named 'current_books'. Also create a function called 'addBooks' which takes 'title'
         and 'author' as arguments, creates an instance of Book and stores it in 'current_books' when called. Also create '__str__' that 
         returns the string representation of the object that includes the 'current_books' list.
         ~~~~
        
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
            
           def addBooks(self, title, author):
              self.current_books.append(Book(title, author))

           def __str__(self):
                return(str(self.current_books))     

        
          
         newBook = Library("The Odyssey", "Homer")
         newBook.addBooks("Pride and Prejudice", "Jane Austen")
         print(newBook)

.. activecode:: writingcode_question14_10

  Add a new class named WaterType that takes 'name' as initial values, creates an instance of Pokemon with type as 'water' by
  default and stores the instance in a list named 'watertypes'. Also create a function called 'addPokemons' which takes 'name'
  as arguments, creates an instance of Pokemon and stores it in 'watertypes' when Also create '__str__' that 
  returns the string representation of the object that includes the 'watertypes' list. 
  ~~~~
    
  class Pokemon:
    name = ''
    type = ''

    def __init__(self,name):
      self.name = name
      self.type = type
    
    def __repr__(self)
      return ( "Pokemon " self.name + " is of type" + self.type)

  newWater = WaterType("Magikarp")
  newWater.addPokemons("Krabby")
  print(newWater)