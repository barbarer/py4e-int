Mixed-Up Code Exercises
------------------------

.. parsonsprob:: Classes_Basic_Mixed_Up_10_1
    :numbered: left
    :practice: T
    :adaptive:

    Construct a block of code that creates a class called 'Person'and defines the __init__ method
    with one parameter, "name". Then define the personName method, which returns the
    name when the method is called. Watch out for indentation and extra pieces of code.
    -----
    class Person:
    =====
    class Person #paired
    =====
      def __init__(self, name):
    =====
        self.name = name
    =====
        name = self.name #paired
    =====
        self.age = age #distractor
    =====
      def personName(self):
    =====
        return ("Dog name: " + self.name)

.. parsonsprob:: Classes_Basic_Mixed_Up_10_2
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named Person. The __init__ method has parameters of "name", "age" and "gender".
    Also create the method updateAge, that increases the age by 1. Then update the age of James.
    Watch out for indentation and extra pieces of code.
    -----
    class Person:
    =====
    Class Person: #paired
    =====
      def __init__(name, age): #distractor
    =====
      def __init__(self, name, age, gender):
    =====
        self.name = name
        self.age = age
        self.gender = gender
    =====
        name = self.name
        age = self.age #paired
    =====
      def updateAge(self):
    =====
      def updateAge(age): #paired
    =====
        self.age += 1
    =====
    James = Person("James", 28)
    James.updateAge()

.. parsonsprob:: Classes_Basic_Mixed_Up_10_3
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
      def make_sound(sound): #paired
    =====
        return("Meow")
    =====
      def __str__(self):
    =====
        return("I am a cat. My name is {self.name}. I am {self.age} years old.")

.. parsonsprob:: Classes_Basic_Mixed_Up_10_4
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named 'Book' that has an __init__ method with the parameters "title"
    and "author". Then create an instance of the 'Book' class named newbook.
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

.. parsonsprob:: Classes_Basic_Mixed_Up_10_5
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named 'Dog' with the __init__ method taking name as its parameter.
    Then create a method, updateTricks, that adds a new trick to the list and a final string
    method that returns all information for the dog. Print both the tricks and the string for
    "sparky" at the end.
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
    sparky = Dog('Sparky')
    =====
    sparky.updateTrick('spin')
    sparky.updateTrick('sit')
    =====
    updateTrick('spin')
    updateTrick('sit') #paired
    =====
    print(sparky.tricks)
    print(sparky)

.. parsonsprob:: Classes_Basic_Mixed_Up_10_6
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named "Book" that assigns values to the "title", "author" and "info" object properties.
    Then, add in the method "__str__" that returns the string representation of the class.
    Create an object "Iliad" for that book and print the string associated with it.
    -----
    class Book:
    =====
      def __init__(self, title, author, info):
    =====
        self.title = title
        self.author = author
        self.info = info
    =====
      def __str__(self):
    =====
        return (self.title + " was written by " + self.author + " and is " + self.info)
    =====
    iliad = Book("Iliad", "Homer", "An ancient Greek Poem")
    =====
    print(iliad)

.. parsonsprob:: Classes_Basic_Mixed_Up_10_7
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named "Dog" assigns the "name", "age" and "breed" values. Then, create a the method "__str__"
    to return the string representation of the class. Finally add a method "isGoldenRetriever" to check whether the dog is
    a Golden Retriever.
    -----
    class Dog:
    =====
     def __init__(self, name, age, breed):
    =====
      self.name = name
      self.age = age
      self.breed = breed
    =====
     def __str__(species): #distractor
    =====
     def __str__(self):
    =====
      return ("Name: " + self.name  + " Age: " + self.age + " Breed: "  + self.breed)
    =====
      return ("Name: " + name  + " Age: " + age + " Breed: Golden Retriever") #distractor
    =====
     def isGoldenRetriever(self):
    =====
      return self.species == "Golden Retriever"
    =====
    Barry = Dog("Barry", 6, "Poodle")
    =====
    print(Barry)

.. parsonsprob:: Classes_Basic_Mixed_Up_10_8
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named "Book" that assigns "title", "author" and "availability" format as initial values.
    Add a method named updateAvailability that updates availability of the book, and a method named "__str__"
    that returns the string representation of the class.
    -----
    class Book:
    =====
     def __init__(self, title, author, availability):
    =====
      self.tite = title
      self.author = author
      self.availability = availability
    =====
      self.book = Book(title, author, format) #distractor
    =====
     def updateAvailability(self, availability)
    =====
      self.availability = availability
    =====
     def __str__(self):
    =====
      return ("Author: " + self.author + " Title: " + self.title + " Available: " + self.available)
    =====
    iliad = Library("Iliad", "Homer", "Yes")
    =====
    iliad.updateAvailability("No")
    print(iliad)


.. parsonsprob:: Classes_Basic_Mixed_Up_10_9
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named "Apple" that assigns kind, color and total available as initial values
    and a method named "__str__" that returns the string representation of the
    "Apple" class. Write a method named "updateTotal" that updates the total available apples.
    -----
    class Apple:
    =====
      def __init__(self, kind, color, total):
    =====
        self.kind = kind
        self.color = color
        self.total = total
    =====
      def __str__(self):
    =====
        return ("Apple type: " + self.kind + " color: " + self.color + " total:" self.total)
    =====
      def updateTotal(self, total):
        self.total = total
    =====
    Red_Apple = Apple("Gala", "Red", 48)
    =====
    Red_Apple.updateTotal(32)
    print(Red_Apple)

.. parsonsprob:: Classes_Basic_Mixed_Up_10_10
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named "Vehicle" that assigns "type", "color", "price" and "sold" as initial values
    and a method named "__str__" that returns the string representation of the class.
    Construct a method updatePrice that changes the price of the vehicle. Add another method
    isSold if the vehicle is sold to a person.
    -----
    class Vehicle:
    =====
      def __init__(self, type, color, price, sold):
    =====
        self.type = type
        self.color = color
        self.price = price
        self.sold = sold
    =====
      def __str__(self):
    =====
        return ("Vehicle type: " + self.type + " color: " + self.color + " price: " + self.price)
    =====
      def updatePrice(self, price):
        self.price = price
    =====
      def isSold(self, sold):
        self.sold = sold
    =====
    BMW = Vehicle("Car", "Black", "$40000", "No")
    =====
    BMW.updatePrice("$35000")
    BMW.isSold("Yes")
    print(BMW)
