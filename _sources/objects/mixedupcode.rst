Mixed-Up Code Exercises
------------------------

.. parsonsprob:: mixedupcode_14_1
    :numbered: left
    :practice: T
    :adaptive:

    Construct a block of code that creates a class named Dog that takes 'name' as an initial value and
    returns it when 'getName' function is called.
    -----
    class Dog:
    =====
     name = ''
    =====
     def __init__(self, name):
    =====
      self.name = name
    =====
     def getName(self):
    =====
      return ("Dog name: " + self.name)

.. parsonsprob:: mixedupcode_14_2
    :numbered: left
    :practice: T 
    :adaptive:

    Construct a class named  Dog that takes 'name' and 'age' as initial values and a function named 'updateAge' that adds the
    age by 1.
    -----
    Class Dog: #distractor
    =====
    class Dog:
    =====
     def __init__(name, age): #distractor
    =====
     def __init__(self, name, age):
    =====
      name = name #distractor
    =====
      self.name = name
    =====
      age = self.age #distractor
    =====
      self.age = age
    =====
     def updateAge(age): #distractor
    =====
     def updateAge(self):
    =====
      self.age += 1
    =====
    lark = Dog("Lark", 10)
    lark.updateAge()

.. parsonsprob:: mixedupcode_14_3
    :numbered: left
    :practice: T
    :adaptive:

    Construct a block of code that create a class named  'Cat'  that  takes 'name' and 'age' as initial value
    and returns cat info when 'info' is classed and returns meow when 'make_sound' function is called.
    -----
    class Cat:
    =====
     def __init__(self, name, age):
    =====
      self.name = name
      self.age = age
    =====
     def info(self):   
    =====
      return(f"I am a cat. My name is {self.name}. I am {self.age} years old.")
    =====
     def make_sound(self):
    =====
      return("Meow")

.. parsonsprob:: mixedupcode_14_4
    :numbered: left
    :practice: T 
    :adaptive:

    Construct a class named 'Book' that takes title and author as initial values. Also create an object of 'Book' class
    named newbook.
    -----
    Class Book: #distractor
    =====
    class Book:
    =====
     def __init__(self, title, author):
    =====
      title = self.title #distractor
    =====
      self.tite = title
    =====
      self.author = author
    =====
    newbook = Book("The Odyssey", "Homer")

.. parsonsprob:: mixedupcode_14_5
    :numbered: left
    :practice: T 
    :adaptive:

    Construct a class named 'Dog' that takes name as the initial value, and has a function called updateTricks to update tricks to a list
    and the getString function to get info of the Dog.
    -----
    class Dog:
    =====
     name = ''
     tricks = []
    =====
     def __init__(name): #distractor
    =====
     def __init__(self.name):
    =====
      name = name #distractor
    =====
      self.name = name
    =====
     def updateTricks(self.trick): #distractor
    =====
     def updateTricks(self, trick):
    =====
      self.tricks.append(trick)
    =====
     def getString(self):
    =====
      return("Name: " + self.name + " Tricks: " + str(self.tricks))
    =====
     dog = new Dog("Fido")  #distractor
    =====
     dog = Dog("Fido")
    =====
     dog.updateTricks("Spin")
     dog.updateTricks("Sit")
    =====
     print(dog.getString)

.. parsonsprob:: mixedupcode_14_6
    :numbered: left
    :practice: T 
    :adaptive:

    Construct a class named "Book" that takes the title and author as initial values. Construct a class named "Bookinfo"
    that extends the "Book" class and contains a function "__str__" that  returns the string representation of the 
    class.
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

.. parsonsprob:: mixedupcode_14_7
    :numbered: left
    :practice: T 
    :adaptive:

    Construct a class named "Dog" that takes  name and age as initial values and a class named "GoldenRetriever"
    which contains a function named "__str__" that returns the string representation of the class.
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

.. parsonsprob:: mixedupcode_14_8
    :numbered: left
    :practice: T 
    :adaptive:

    Construct a class named "Dog"  that takes name and age as initial values and a class named "DogBreed"
    which takes in breed as an initial values and a function named "__str__" that returns teh string 
    representation of the class.
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

.. parsonsprob:: mixedupcode_14_9
    :numbered: left
    :practice: T 
    :adaptive:

    Construct a class named "Book" that contains title, author and format as initial values. Create a class named
    "Library" that extends "Book" and has available as initial value, a function named updateAvailability to update
    availability and a function named "__str__" that returns the string representation of the class.
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


.. parsonsprob:: mixedupcode_14_10
    :numbered: left
    :practice: T 
    :adaptive:

    Construct a class named "Apple" that contains type and color as initial value  and a function named "__repr__" that
    returns the string representation of the "Apple" class. Construct a class named "Farmer" that contains name as initial value
    with a function named updateItems that updates a list called 'items' which is a list of objects of Apple class and a function
    called "__str__" that returns the string representation of the class.
    -----
    class Apple:
    =====
     def __init__(self, type, color):
    =====
      self.type = type
      self.color = color
    =====
     def __repr__(self):
    =====
      return ("Apple type: " + self.type + " color: " + self.color)
    =====
    class Farmer:
    =====
     items = []
    =====
     def __init__(self, name):
      self.name = name
    =====
     def updateItems(self, type, color):
      items.append(Apple(type, color)
    =====
     def __str__(self):
      return("Farmer " + self.name + "has " + str(items)
    =====
    josh = Farmer("Josh")
    =====
    josh.updateItems("Granny Smith", "Green")
    print(josh)



