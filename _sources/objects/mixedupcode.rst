Mixed-Up Code Exercises
------------------------

.. parsonsprob:: obj_mixedupcode_1
    :numbered: left
    :practice: T
    :adaptive:

    Construct a block of code that creates a class and defines the __init__ method
    with one parameter, "name". Then define the getName method, which returns the
    name when the method is called. Watch out for indentation and extra pieces of code.
    -----
    class Dog:
    =====
    class Dog #paired
    =====
      def __init__(self, name):
    =====
        self.name = name
    =====
        name = self.name #paired
    =====
        self.age = age #distractor
    =====
      def getName(self):
    =====
        return ("Dog name: " + self.name)

.. parsonsprob:: obj_mixedupcode_2
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named Dog. The __init__ method has parameters of "name" and "age".
    Also create the method updateAge, that increases the age by 1. Then update the age of Lark.
    Watch out for indentation and extra pieces of code.
    -----
    Class Dog: #distractor
    =====
    class Dog:
    =====
      def __init__(name, age): #distractor
    =====
      def __init__(self, name, age):
    =====
        self.name = name
        self.age = age
    =====
        name = self.name
        age = self.age #paired
    =====
      def updateAge(age): #distractor
    =====
      def updateAge(self):
    =====
        self.age += 1
    =====
    lark = Dog("Lark", 10)
    lark.updateAge()

.. parsonsprob:: obj_mixedupcode_3
    :numbered: left
    :practice: T
    :adaptive:

    Construct a block of code to create the class Cat. The __init__ method has
    "name" and "age" as parameters. Then define the "make_sound" method, returning
    the cat's meow and the __str__ method returns a string of the cat's introduction.
    Watch out for indentation and extra pieces of code.
    -----
    class Cat:
    =====
      def __init__(self, name, age):
    =====
        self.name = name
        self.age = age
    =====
      def make_sound(self):
    =====
      def make_sound(sound): #distractor
    =====
        return("Meow")
    =====
      def __str__(self):
    =====
        return("I am a cat. My name is {self.name}. I am {self.age} years old.")

.. parsonsprob:: obj_mixedupcode_4
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named 'Book' that has an __init__ method with the parameters title
    and author. Then create an instance of the 'Book' class named newbook.
    -----
    class Book:
    =====
    Class Book: #paired
    =====
      def __init__(self, title, author):
    =====
        title = self.title #distractor
        author = self.author
    =====
        self.tite = title
        self.author = author
    =====
    newbook = Book("The Odyssey", "Homer")

.. parsonsprob:: obj_mixedupcode_5
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named 'Dog' with the __init__ method taking name as its parameter.
    Then create a method, updateTricks, that adds a new trick to the list and a final string
    method that returns all information for the dog. Print both the tricks and the string for
    "spot" at the end.
    -----
    class Dog:
    =====
    def __init__(self, name):
    =====
        self.name = name
        self.tricks = []
    =====
    def updateTrick(self, trick):
        self.tricks.append(trick)
    =====
    def __str__(self):
        return 'Dog(name = ' + self.name +  ', tricks = ' + str(self.tricks) + ')'
    =====
    spot = Dog('Spot')
    =====
    spot.updateTrick('spin')
    spot.updateTrick('sit')
    =====
    updateTrick('spin')
    updateTrick('sit') #paired
    =====
    print(spot.tricks)
    print(spot)

.. parsonsprob:: obj_mixedupcode_6
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named "Book" that assigns values to the title and author object properties.
    Then, construct a second class named "Bookinfo" that extends the "Book" class and
    contains a method "__str__" that returns the string representation of the class.
    Create an object "iliad" for that book and print the string associated with it.
    -----
    class Book:
    =====
      def __init__(self, title, author):
    =====
        self.title = title
        self.author = author
    =====
    class Bookinfo(Book):
    =====
      def __str__(self):
    =====
        return (self.title + " was written by " + self.author)
    =====
    iliad = Bookinfo("Iliad", "Homer")
    =====
    print(iliad)

.. parsonsprob:: obj_mixedupcode_7
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named "Dog" assigns the name and age values. Then, create a second class
    "GoldenRetriever" that extends the Dog class. This method uses the "__str__" method
    to return the string representation of the class.
    -----
    class Dog:
    =====
     def __init__(self, name, age):
    =====
      self.name = name
      self.age = age
    =====
    class GoldenRetriever extends Dog: #distractor
    =====
    class GoldenRetriever(Dog):
    =====
      def __str__(super): #distractor
    =====
      def __str__(self):
    =====
        return ("Name: " + super.name  + " Age: " + super.age + " Breed: "  + self.breed) #distractor
    =====
        return ("Name: " + self.name  + " Age: " + self.age + " Breed: Golden Retriever")
    =====
    lark = GoldenRetriever("Lark", 10)
    =====
    print(lark)

.. parsonsprob:: obj_mixedupcode_8
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named "Dog" that assigns the name and age values. Then create a
    class named "DogBreed" which uses the name and age values from "Dog" and assigns a
    value to breed in the __init__ method. The __str__ method returns the string representation
    of the class. Create an object of the DogBreed class at the end.
    -----
    class Dog:
    =====
      def __init__(self, name, age):
    =====
        self.name = name
        self.age = age
    =====
    class DogBreed(Dog):
    =====
      def __init__(self, name ,age, breed):
    =====
        Dog.__init__(name, age)
    =====
        self.breed = breed
    =====
     def __str__(self):
    =====
      return ("Name: " + self.name  + " Age: " + self.age + " Breed:" + self.breed)
    =====
    lark = DogBreed("Lark", 10, "Golden Retriever")
    =====
    print("lark")

.. parsonsprob:: obj_mixedupcode_9
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named "Book" that assigns title, author and format as initial values.
    Create a class named "Library" that extends "Book" and assigns available as initial value,
    a method named updateAvailability that updates availability of the book, and a method named "__str__"
    that returns the string representation of the class.
    -----
    class Book:
    =====
     def __init__(self, title, author, format):
    =====
        self.tite = title
        self.author = author
        self.format = format
    =====
    class Library(Book):
    =====
      def __init__(Book(title, author, format), available): #distractor
    =====
      def __init__(self, title, author, format, available):
    =====
        self.book = Book(title, author, format) #distractor
    =====
        Book.__init__(title, author, format)
    =====
        self.format = format
        self.available = available
    =====
      def updateAvailability(self, available)
    =====
        self.available = available
    =====
      def __str__(self):
    =====
        return ("Author: " + self.author + " Title: " + self.title + " Format: " + self.format + "Available: " + self.available)
    =====
    iliad = Library("Iliad", "Homer", "Paperback" , "Yes")
    =====
    iliad.updateAvailability("No")
    print(iliad)


.. parsonsprob:: obj_mixedupcode_10
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named "Apple" that assigns kind and color as initial values
    and a method named "__repr__" that returns the string representation of the
    "Apple" class. Construct a class named "Farmer" that assigns name as the initial value
    with a method named "updateItems". updateItems adds each item to a list called "items",
    which is a list of objects of Apple class. Finally, create a method called "__str__" that
    returns the string representation of the class.
    -----
    class Apple:
    =====
      def __init__(self, kind, color):
    =====
        self.kind = kind
        self.color = color
    =====
      def __repr__(self):
    =====
        return ("Apple type: " + self.kind + " color: " + self.color)
    =====
    class Farmer:
    =====
      def __init__(self, name):
        self.name = name
        self.items = []
    =====
      def updateItems(self, kind, color):
        self.items.append(Apple(kind, color))
    =====
      def __str__(self):
        return("Farmer " + self.name + " has " + str(self.items))
    =====
    josh = Farmer("Josh")
    =====
    josh.updateItems("Granny Smith", "Green")
    print(josh)
