Write Code Exercises
---------------------
#.
    .. tabbed:: obj_writecode1

        .. tab:: Question

            .. activecode:: obj_writecode1q
                :nocodelens:

                Complete the following code to create an object 'spot' from the Dog class
                with the instance "Spot" and tricks "spin" and "sit". You can use a print statement to
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

            .. activecode:: obj_writecode1a
                :optional:

                class Dog:
                    name = ''
                    tricks = []

                    def __init__(self, name):
                        self.name = name

                    # Each method needs the parameter "self"
                    def updateTricks(self, trick):
                        self.tricks.append(trick)

                    def __str__(self):
                        return 'Dog(name = ' + self.name +  ', tricks = ' + str(self.tricks) + ')'

                # Create the object spot
                spot = Dog("Spot")
                # Update spot's tricks to include spin and sit
                spot.updateTricks("spin")
                spot.updateTricks("sit")
                # Print the statement
                print(spot)

#.
    .. activecode:: obj_writecode2
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

#.
    .. tabbed:: obj_writecode3

        .. tab:: Question

          .. activecode:: obj_writecode3q
              :nocodelens:

              Correct the errors in the following code. There are  6 errors.
              ~~~~
              Class Book:

                  title = ''
                  author = ''

                  def __init__(title, author):
                      title = title
                      author = author
                      print("Your book is " + title + " by author " + author)

              book = new Book("The Odyssey", "Homer")

        .. tab:: Answer

          .. activecode:: obj_writecode3a
              :optional:

              # class is case sensitive (lowercase)
              class Book:

                  title = ''
                  author = ''

                  # Class methods need to include the self parameter
                  def __init__(self, title, author):
                      # Use the self reference when using these attributes
                      self.title = title
                      self.author = author
                      # Use the self reference to select the correct instance
                      print("Your book is " + self.title + " by author " + self.author)
              # Use correct class name!
              book = Book("The Odyssey", "Homer")

#.
    .. activecode:: obj_writecode4
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

#.
    .. tabbed:: obj_writecode5

        .. tab:: Question

          .. activecode:: obj_writecode5q
              :nocodelens:

              Complete the following code to include a function named 'getTitle' that returns a
              the 'title' and a function named 'getAuthor' that returns the 'author'.
              ~~~~
              class Book:

                  def __init__(self, title, author):
                      self.title = title
                      self.author = author

              book = Book("The Odyssey", "Homer")
              print(book.getTitle())
              print(book.getTitle())


        .. tab:: Answer

          .. activecode:: obj_writecode5a
              :nocodelens:
              :optional:

              class Book:

                  def __init__(self, title, author):
                      self.title = title
                      self.author = author

                  # Create the functions using self to access the attributes
                  def getTitle(self):
                      return self.title

                  def getAuthor(self):
                      return self.author


              book = Book("The Odyssey", "Homer")
              print(book.getTitle())
              print(book.getTitle())

#.
    .. activecode:: obj_writecode6

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

#.
    .. tabbed:: obj_writecode7

      .. tab:: Question

          .. activecode:: obj_writecode7q
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

          .. activecode:: obj_writecode7a
            :nocodelens:
            :optional:

            class Book:

                def __init__(self, title, author):
                    self.title = title
                    self.author = author

                def getTitle(self):
                    return self.title

                def getAuthor(self):
                    return self.author

            # Create Paperback class, using Book class
            class Paperback(Book):

                def __str__(self):
                    return ("Paperback book " + self.title + " was written by " + self.author)

            book = Paperback("The Odyssey", "Homer")
            print(book)

#.
    .. activecode:: obj_writecode8

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
#.
    .. tabbed:: obj_writecode9

        .. tab:: Question

          .. activecode:: obj_writecode9q
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

          .. activecode:: obj_writecode9a
              :nocodelens:
              :optional:

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

              # Create Library class
              class Library:
                  # Create current_books list
                  current_books = []
                  # Set init method
                  def __init__(self, title, author):
                      self.current_books.append(Book(title, author))
                  # Create addBooks method
                  def addBooks(self, title, author):
                      self.current_books.append(Book(title, author))
                  # Create str method
                  def __str__(self):
                      return(str(self.current_books))

              newBook = Library("The Odyssey", "Homer")
              newBook.addBooks("Pride and Prejudice", "Jane Austen")
              print(newBook)

#.
    .. activecode:: obj_writecode10

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
