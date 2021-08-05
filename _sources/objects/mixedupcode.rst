Mixed-Up Code Exercises
------------------------

.. parsonsprob:: obj_mixedupcode_1
    :numbered: left
    :practice: T
    :adaptive:

    Construct a block of code that creates a ``Dog`` class and defines the ``__init__`` method
    with one parameter, ``name``. Then define the ``getName`` method, which returns the
    ``name`` when the method is called. Watch out for indentation and extra pieces of code.
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
        return (self.name)


.. activecode:: obj_mixedupcode_1_ac

    Write code to create a ``Dog`` class and define the ``__init__`` method that has one parameter, ``name``. Then define the 
    ``getName`` method, which returns the ``name`` when the method is called. 
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Bill = Dog("Bill")
            self.Dot = Dog("Dot")
            self.Spot = Dog("Spot")
            self.Lovey = Dog("Lovey")
            self.Brownie = Dog("Brownie")

        def testOne(self):
            self.assertEqual(self.Bill.getName(), "Bill" ,"self.Bill.getName()")
            self.assertEqual(self.Dot.getName(), "Dot" ,"self.Dot.getName()")
            self.assertEqual(self.Spot.getName(), "Spot" ,"self.Spot.getName()")
            self.assertEqual(self.Lovey.getName(), "Lovey" ,"self.Lovey.getName()")
            self.assertEqual(self.Brownie.getName(), "Brownie" ,"self.Brownie.getName()")

    myTests().main()       

.. parsonsprob:: obj_mixedupcode_2
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named ``Dog``. The ``__init__`` method that has two parameters, ``name`` and ``age``.
    Also create the method ``updateAge``, that increases the ``age`` by 1 and returns age. Then update the age of Lark.
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
        return self.age
    =====
    lark = Dog("Lark", 10)
    lark.updateAge()

.. activecode:: obj_mixedupcode_2_ac

    Write a class named ``Dog``. Define the ``__init__`` method, it has two parameters, ``name`` and ``age``.
    Also create the method ``updateAge``, that increases the ``age`` by 1 and returns the age. Then create a variable 
    named ``Lark`` with the age ``10`` and update Lark's age. 
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Lark = Dog("Lark", 10)
            self.Bill = Dog("Bill", 10)
            self.Tom = Dog("Tom", 22)
            self.James = Dog("James", 18)
            self.Terry = Dog("Terry", 29)
            self.Tina = Dog("Tina", 17)

        def testOne(self):
            self.assertEqual(self.Lark.updateAge(), 11 ,"self.Lark.updateAge()")
            self.assertEqual(self.Bill.updateAge(), 11 ,"self.Bill.updateAge()")
            self.assertEqual(self.Tom.updateAge(), 23 ,"self.Tom.updateAge()")
            self.assertEqual(self.James.updateAge(), 19 ,"self.James.updateAge()")
            self.assertEqual(self.Terry.updateAge(), 30 ,"self.Terry.updateAge()")
            self.assertEqual(self.Tina.updateAge(), 18 ,"self.Tina.updateAge()")

    myTests().main()       


.. parsonsprob:: obj_mixedupcode_3
    :numbered: left
    :practice: T
    :adaptive:

    Construct a block of code to create the class ``Cat``. The ``__init__`` method has
    ``name`` and ``age`` as parameters. Then define the ``make_sound`` method, returning
    the cat's meow and the ``__str__`` method returns a string of the cat's introduction.
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
        return ("I am a cat. My name is {}. I am {} years old.".format(self.name, self.age))

.. activecode:: obj_mixedupcode_3_ac

    Write code to create the class ``Cat``. Define the ``__init__`` method, it has two parameters,
    ``name`` and ``age``. Then define the ``make_sound`` method, which should return
    the string "Meow" and the ``__str__`` method should return returns a string of the cat's introduction: 
    "I am a cat. My name is ``name``. I am ``age`` years old.".
    
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Lucky = Cat("Lucky", 10)
            self.Jack = Cat("Jack", 10)
            self.Chip = Cat("Chip", 22)
            self.Tink = Cat("Tink", 18)
            self.Pinky = Cat("Pinky", 29)
            

        def testOne(self):
            self.assertEqual(self.Lucky.__str__(), "I am a cat. My name is Lucky. I am 10 years old." ,"self.Lucky.__str__()")
            self.assertEqual(self.Jack.__str__(), "I am a cat. My name is Jack. I am 10 years old." ,"self.Jack.__str__()")
            self.assertEqual(self.Chip.__str__(), "I am a cat. My name is Chip. I am 22 years old." ,"self.Chip.__str__()")
            self.assertEqual(self.Tink.__str__(), "I am a cat. My name is Tink. I am 18 years old." ,"self.Tink.__str__()")
            self.assertEqual(self.Pinky.__str__(), "I am a cat. My name is Pinky. I am 29 years old." ,"self.Pinky.__str__()")
    myTests().main()      


.. parsonsprob:: obj_mixedupcode_4
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named ``Book`` that has an ``__init__`` method with the parameters ``title``
    and ``author``. Then create an instance of the ``Book`` class named ``newbook``.
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

.. activecode:: obj_mixedupcode_4_ac

    Write a class named ``Book`` that has an ``__init__`` method with two parameters, title
    and author. Then create an instance of the ``Book`` class named ``newbook``.
    
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.newbook = Book("The Odyssey", "Homer")
            self.newbook2 = Book("The Fault in Our Stars", "John Green")
            

        def testOne(self):
            self.assertEqual(self.newbook.title, "The Odyssey", "Testing title")
            self.assertEqual(self.newbook.author, "Homer", "Testing author")
            self.assertEqual(self.newbook2.title, "The Fault in Our Stars", "Testing title")
            self.assertEqual(self.newbook2.author, "John Green", "Testing author")            
          
    myTests().main()      

.. parsonsprob:: obj_mixedupcode_5
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named ``Dog`` with the ``__init__`` method taking ``name`` as its parameter.
    Then create a method, ``updateTricks``, that adds a new trick to the list. Then create a ``__str__``
    method that returns all information for the dog. Create a variable named ``Spot`` and update the tricks for spin and sit.
    Print both the tricks and the string for "spot" at the end.
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
    

.. activecode:: obj_mixedupcode_5_ac

    Construct a class named ``Dog`` with the ``__init__`` method taking ``name`` as its parameter
    and setting ``self.tricks`` to an empty list. Then create a method, ``updateTricks``, that adds 
    a new trick to the list. Then create a ``__str__`` method that returns all information for the dog.
    Create a variable named ``Spot`` and update the tricks for "spin" and "sit".
    Print both the tricks and the string for ``Spot`` at the end.
    
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Spot = Dog("Spot")
            self.Jack = Dog("Jack")
            self.Chip = Dog("Chip")
            self.Tink = Dog("Tink")
            self.Pinky = Dog("Pinky")
            

        def testOne(self):
            self.assertEqual(self.Spot.__str__(), "Dog(name = Spot, tricks = [])" ,"self.Spot.__str__()")
            self.Spot.updateTrick("jump")
            self.assertEqual(self.Spot.tricks, ['jump'])
            self.Spot.updateTrick("sit")
            self.assertEqual(self.Spot.tricks, ['jump', 'sit'])
            
    myTests().main()      


.. parsonsprob:: obj_mixedupcode_6
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named ``Book`` with the ``__init__`` method taking ``title`` and ``author`` as its parameters.
    Then, construct a second class named ``Bookinfo`` that extends the ``Book`` class and
    contains a method ``__str__`` that returns the string representation of the class.
    Create an object ``iliad`` for the book Iliad by Hoover and print the string associated with it.
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

.. activecode:: obj_mixedupcode_6_ac

    Construct a class named ``Book`` with the ``__init__`` method taking ``title`` and ``author`` as its parameters.
    Then, construct a second class named ``Bookinfo`` that extends the ``Book`` class and
    contains a method ``__str__`` that returns the string representation of the class.
    Create an object ``iliad`` for the book Iliad by Hoover and print the string associated with it.
    
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Book1 = Bookinfo("Oh, the Places You'll Go!", "Dr. Suess")
            self.Book2 = Bookinfo("The Fault in Our Stars", "John Green")
            self.Book3 = Bookinfo("The Coldest Winter Ever", "Sister Souljah")
            self.Book4 = Bookinfo("Midnight", "Sister Souljah")
            self.Book5 = Bookinfo("If Beale Street Could Talk", "James Baldwin")
            

        def testOne(self):
            self.assertEqual(self.Book1.__str__(), "Oh, the Places You'll Go! was written by Dr. Suess" ,"self.Book1.__str__()")
            self.assertEqual(self.Book2.__str__(), "The Fault in Our Stars was written by John Green" ,"self.Book2.__str__()")
            self.assertEqual(self.Book3.__str__(), "The Coldest Winter Ever was written by Sister Souljah" ,"self.Book3.__str__()")
            self.assertEqual(self.Book4.__str__(), "Midnight was written by Sister Souljah" ,"self.Book4.__str__()")
            self.assertEqual(self.Book5.__str__(), "If Beale Street Could Talk was written by James Baldwin" ,"self.Book5.__str__()")
            
    myTests().main()      

.. parsonsprob:: obj_mixedupcode_7
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named ``Dog`` with the ``__init__`` method taking ``name`` and ``age`` as its parameters. 
    Then, create a second class ``GoldenRetriever`` that extends the ``Dog`` class. This method uses the 
    ``__str__`` method to return the string representation of the class: "Name: ``name`` Age: ``age`` Breed: Golden Retriever".
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
        return ("Name: " + self.name  + " Age: " + str(self.age) + " Breed: Golden Retriever")
    =====
    lark = GoldenRetriever("Lark", 10)
    =====
    print(lark)

.. activecode:: obj_mixedupcode_7_ac

    Construct a class named ``Dog`` with the ``__init__`` method taking ``name`` and ``age`` as its parameters. 
    Then, create a second class ``GoldenRetriever`` that extends the ``Dog`` class. This method uses the 
    ``__str__`` method to return the string representation of the class: "Name: ``name`` Age: ``age`` Breed: Golden Retriever".
    
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Sam = GoldenRetriever("Sam", 10)
            self.Jack = GoldenRetriever("Jack", 2)
            self.Dom = GoldenRetriever("Dom", 6)
            self.Tink = GoldenRetriever("Tink", 7)
            self.Pinky = GoldenRetriever("Pinky", 9)
            

        def testOne(self):
            self.assertEqual(self.Sam.__str__(), "Name: Sam Age: 10 Breed: Golden Retriever" ,"self.Sam.__str__()")
            self.assertEqual(self.Jack.__str__(), "Name: Jack Age: 2 Breed: Golden Retriever" ,"self.Jack.__str__()")
            self.assertEqual(self.Dom.__str__(), "Name: Dom Age: 6 Breed: Golden Retriever" ,"self.Dom.__str__()")
            self.assertEqual(self.Tink.__str__(), "Name: Tink Age: 7 Breed: Golden Retriever" ,"self.Tink.__str__()")
            self.assertEqual(self.Pinky.__str__(), "Name: Pinky Age: 9 Breed: Golden Retriever" ,"self.Pinky.__str__()")
            
    myTests().main()      

.. parsonsprob:: obj_mixedupcode_8
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named ``Dog`` with the ``__init__`` method taking ``name`` and ``age`` as its parameters. 
    Then create a class named ``DogBreed`` which uses the ``__init`` values ``name`` and ``age`` from the ``Dog`` class
    and assigns a value to ``breed`` in the ``__init__`` method. Also create the ``__str__`` method that returns the string representation
    of the class: "Name: " + ``name`` + " Age: " + ``age`` + " Breed:" + ``breed``" Create an object of the DogBreed class at the end.
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

.. activecode:: obj_mixedupcode_8_ac

    Construct a class named ``Dog`` with the ``__init__`` method taking ``name`` and ``age`` as its parameters. 
    Then create a class named ``DogBreed`` which uses the ``__init`` values ``name`` and ``age`` from the ``Dog`` class
    and assigns a value to ``breed`` in the ``__init__`` method. Also create the ``__str__`` method that returns the string representation
    of the class: "Name: " + ``name`` + " Age: " + ``age`` + " Breed:" + ``breed``". 
    
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Sam = DogBreed("Sam", 10, "Golden Retriever")
            self.Jack = DogBreed("Jack", 2, "Husky")
            self.Dom = DogBreed("Dom", 6, "Pitbull")
            self.Tink = DogBreed("Tink", 7, "Poodle")
            self.Pinky = DogBreed("Pinky", 9, "American Bulldog")
            

        def testOne(self):
            self.assertEqual(self.Sam.__str__(), "Name: Sam Age: 10 Breed: Golden Retriever" ,"self.Sam.__str__()")
            self.assertEqual(self.Jack.__str__(), "Name: Jack Age: 2 Breed: Husky" ,"self.Jack.__str__()")
            self.assertEqual(self.Dom.__str__(), "Name: Dom Age: 6 Breed: Pitbull" ,"self.Dom.__str__()")
            self.assertEqual(self.Tink.__str__(), "Name: Tink Age: 7 Breed: Poodle" ,"self.Tink.__str__()")
            self.assertEqual(self.Pinky.__str__(), "Name: Pinky Age: 9 Breed: American Bulldog" ,"self.Pinky.__str__()")
            
    myTests().main()      

.. parsonsprob:: obj_mixedupcode_9
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named ``Book`` that assigns title, author and format as initial values in the ``__init__`` function.
    Create a class named ``Library`` that extends ``Book`` and assigns the availability of the book as an initial value in the ``__init__`` function.
    Then create a method named updateAvailability that updates the availability of the book. Finally, create a method named ``__str__``
    that returns the string representation of the class: "Author: " + ``author`` + " Title: " + ``title`` + " Format: " + ``format`` + " Availability: " + ``availability``".
    Then create an instance of the book ``iliad`` that is titled Iliad by Homer, it is initially available, but use ``updateAvailability`` to change it to not available. 
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
      def __init__(Book(title, author, format), availability): #distractor
    =====
      def __init__(self, title, author, format, availability):
    =====
        self.book = Book(title, author, format) #distractor
    =====
        Book.__init__(title, author, format)
    =====
        self.format = format
        self.availability = availability
    =====
      def updateAvailability(self, availability)
    =====
        self.availability = availability
    =====
      def __str__(self):
    =====
        return ("Author: " + self.author + " Title: " + self.title + " Format: " + self.format + " Availability: " + self.availability)
    =====
    iliad = Library("Iliad", "Homer", "Paperback" , "Yes")
    =====
    iliad.updateAvailability("No")
    print(iliad)

.. activecode:: obj_mixedupcode_9_ac

    Construct a class named ``Book`` that assigns title, author and format as initial values in the ``__init__`` function.
    Create a class named ``Library`` that extends ``Book`` and assigns the availability of the book as an initial value in the ``__init__`` function.
    Then create a method named updateAvailability that updates the availability of the book. Finally, create a method named ``__str__``
    that returns the string representation of the class: "Author: " + ``author`` + " Title: " + ``title`` + " Format: " + ``format`` + " Availability: " + ``availability``".
    Then create an instance of the book ``iliad`` that is titled Iliad by Homer, it is initially available, but use ``updateAvailability`` to change it to not available. 
    
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Book1 = Library("Oh, the Places You'll Go!", "Dr. Suess", "Paperback", "Available")
            self.Book2 = Library("The Fault in Our Stars", "John Green", "Paperback", "Not Available")
            self.Book3 = Library("The Coldest Winter Ever", "Sister Souljah", "Paperback", "Available")
            self.Book4 = Library("Midnight", "Sister Souljah", "Paperback", "Not Available")
            self.Book5 = Library("If Beale Street Could Talk", "James Baldwin", "Paperback", "Available")
            

        def testOne(self):
            self.assertEqual(self.Book1.__str__(), "Author: Dr. Suess Title: Oh, the Places You'll Go! Format: Paperback Availability: Available","self.Book1.__str__()")
            self.assertEqual(self.Book2.__str__(), "Author: John Green Title: The Fault in Our Stars Format: Paperback Availability: Not Available" ,"self.Book2.__str__()")
            self.assertEqual(self.Book3.__str__(), "Author: Sister Souljah Title: The Coldest Winter Ever Format: Paperback Availability: Available" ,"self.Book3.__str__()")
            self.assertEqual(self.Book4.__str__(), "Author: Sister Souljah Title: Midnight Format: Paperback Availability: Not Available","self.Book4.__str__()")
            self.assertEqual(self.Book5.__str__(), "Author: James Baldwin Title: If Beale Street Could Talk Format: Paperback Availability: Available" ,"self.Book5.__str__()")
            
    myTests().main()      


.. parsonsprob:: obj_mixedupcode_10
    :numbered: left
    :practice: T
    :adaptive:

    Construct a class named ``Apple`` that assigns ``kind`` and ``color`` as initial values in the ``__init__`` function. 
    and a method named ``__repr__`` that returns the string representation of the ``Apple`` class: "Apple type: " + ``kind`` + " color: " + ``color``. 
    Construct a class named ``Farmer`` that assigns ``name`` to the ``__init__`` function and ``item`` to an empty list within the ``__init__`` function. 
    Also create a method named ``updateItems`` that adds each item to a list called ``items``. Finally, create a method called ``__str__`` that
    returns the string representation of the class: "Farmer " + ``name`` + " has " + str(``items``). 
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

.. activecode:: obj_mixedupcode_10_ac

    Construct a class named ``Apple`` that assigns ``kind`` and ``color`` as initial values in the ``__init__`` function. 
    and a method named ``__repr__`` that returns the string representation of the ``Apple`` class: "Apple type: " + ``kind`` + " color: " + ``color``. 
    Construct a class named ``Farmer`` that assigns ``name`` to the ``__init__`` function and ``item`` to an empty list within the ``__init__`` function. 
    Also create a method named ``updateItems`` that adds each item to a list called ``items``. Finally, create a method called ``__str__`` that
    returns the string representation of the class: "Farmer " + ``name`` + " has " + str(``items``). 
    
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Apple1 = Apple("Granny Smith", "Green")
            self.Apple2 = Apple("Fuji", "Red")
            self.Apple3 = Apple("Honey Crisp", "Red")
            

        def testOne(self):
            self.assertEqual(self.Apple1.__repr__(), "Apple type: Granny Smith color: Green", "self.Apple1.__repr__()")
            self.assertEqual(self.Apple2.__repr__(), "Apple type: Fuji color: Red", "self.Apple3.__repr__()")
            self.assertEqual(self.Apple3.__repr__(), "Apple type: Honey Crisp color: Red", "self.Apple3.__repr__()")
            
    myTests().main()      
