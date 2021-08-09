Mixed-Up Code Exercises
------------------------

.. parsonsprob:: obj_mixedupcode_1
    :numbered: left
    :practice: T
    :adaptive:

    Create a ``Dog`` class and define the ``__init__`` method
    that has one parameter, ``name``. Then define the ``getName`` method, which returns the
    ``name`` when the method is called.
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
        def getName(self):
    =====
            return self.name


.. activecode:: obj_mixedupcode_1_ac

    Write a ``Dog`` class and define the ``__init__`` method that has one parameter, ``name``. Then define the
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

    Create a class named ``Dog``. Define the ``__init__`` method, it has two parameters, ``name`` and ``age``.
    Also create the method ``updateAge``, that increases the ``age`` by 1 and returns the age. Then create a variable
    named ``Lark`` with the age ``10`` and update Lark's age.
    -----
    class Dog:
    =====
    Class Dog: #paired
    =====
        def __init__(self, name, age):
    =====
        def __init__(name, age): #paired
    =====
            self.name = name
            self.age = age
    =====
            name = self.name
            age = self.age #paired
    =====
        def updateAge(self):
    =====
        def updateAge(age): #paired
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

    Create the class ``Cat``. Define the ``__init__`` method, it has two parameters,
    ``name`` and ``age``. Next define the the ``__str__`` method to return a string with the cat's information:
    ``"Name: name, Age: age"``. Then define the ``make_sound`` method, which should return
    the string ``"Meow"``.
    -----
    class Cat:
    =====
        def __init__(self, name, age):
    =====
            self.name = name
            self.age = age
    =====
        def __str__(self):
    =====
            return (f"Name: {self.name}, Age: {self.age}")
    =====
        def make_sound(self):
    =====
        def make_sound(sound): #paired
    =====
            return("Meow")

.. activecode:: obj_mixedupcode_3_ac

    Write the class ``Cat``. Define the ``__init__`` method, it has two parameters,
    ``name`` and ``age``. Next define the the ``__str__`` method to return a string with the cat's information:
    ``"Name: name, Age: age"``. Then define the ``make_sound`` method, which should return
    the string ``"Meow"``.

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
            self.assertEqual(self.Lucky.__str__(), "Name: Lucky, Age: 10" ,"self.Lucky.__str__()")
            self.assertEqual(self.Lucky.make_sound(), "Meow", 'self.Lucky.make_sound()')
            self.assertEqual(self.Jack.__str__(), "Name: Jack, Age: 10" ,"self.Jack.__str__()")
            self.assertEqual(self.Jack.make_sound(), "Meow", 'self.Jack.make_sound()')
            self.assertEqual(self.Chip.__str__(), "Name: Chip, Age: 22" ,"self.Chip.__str__()")
            self.assertEqual(self.Tink.__str__(), "Name: Tink, Age: 18" ,"self.Tink.__str__()")
            self.assertEqual(self.Pinky.__str__(), "Name: Pinky. Age: 29" ,"self.Pinky.__str__()")
    myTests().main()


.. parsonsprob:: obj_mixedupcode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a class named ``Book`` that has an ``__init__`` method with the parameters ``title``
    and ``author``. Then create an instance of the ``Book`` class named ``newbook``.
    -----
    class Book:
    =====
    Class Book: #paired
    =====
        def __init__(self, title, author):
    =====
            self.title = title
            self.author = author
    =====
            title = self.title #paired
            author = self.author
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

    Create a class named ``Dog`` with the ``__init__`` method taking ``name`` as its parameter
    and setting ``self.tricks`` to an empty list.  Then create a ``__str__`` method that returns a string
    with ``"Name: name"``.  Then create a method, ``updateTricks``, that adds
    a new trick to the list.
    Create a variable named ``Spot`` and update the tricks for "spin" and "sit".
    Print both the tricks and the string for ``Spot`` at the end.
    -----
    class Dog:
    =====
        def __init__(self, name):
    =====
            self.name = name
            self.tricks = []
    =====
        def __str__(self):
            return f'Name: {self.name}'
    =====
        def updateTrick(self, trick):
            self.tricks.append(trick)
    =====
    spot = Dog('Spot')
    =====
    spot.updateTrick('spin')
    spot.updateTrick('sit')
    =====
    updateTrick('spin')
    updateTrick('sit') #paired


.. activecode:: obj_mixedupcode_5_ac

    Write a class named ``Dog`` with the ``__init__`` method taking ``name`` as its parameter
    and setting ``self.tricks`` to an empty list.   Then create a ``__str__`` method that returns a string
    with ``"Name: name"``. Then create a method, ``updateTricks``, that adds
    a new trick to the list.
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
            self.assertEqual(self.Spot.__str__(), "Name: Spot" ,"self.Spot.__str__()")
            self.Spot.updateTrick("jump")
            self.assertEqual(self.Spot.tricks, ['jump'], "Testing self.Spot.tricks after add 'jump'")
            self.Spot.updateTrick("sit")
            self.assertEqual(self.Spot.tricks, ['jump', 'sit'], "Testing self.Spot.trick after add 'sit'")

    myTests().main()


.. parsonsprob:: obj_mixedupcode_6
    :numbered: left
    :practice: T
    :adaptive:

    Create a class named ``Book`` with an ``__init__`` method that takes ``title`` and ``author``.
    Then, construct a second class named ``Bookinfo`` that extends the ``Book`` class and
    contains a method ``__str__`` that returns ``"title by author"``.
    Create an object ``iliad`` for the book "Iliad" by Hoover and print the string associated with it.
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
            return f"{self.title} by {self.author}"
    =====
    iliad = Bookinfo("Iliad", "Homer")
    =====
    print(iliad)

.. activecode:: obj_mixedupcode_6_ac

    Write a class named ``Book`` with an ``__init__`` method that takes ``title`` and ``author``.
    Then, construct a second class named ``Bookinfo`` that extends the ``Book`` class and
    contains a method ``__str__`` that returns ``"title by author"``.
    Create an object ``iliad`` for the book "Iliad" by Hoover and print the string associated with it.
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
            self.assertEqual(self.Book1.__str__(), "Oh, the Places You'll Go! by Dr. Suess" ,"self.Book1.__str__()")
            self.assertEqual(self.Book2.__str__(), "The Fault in Our Stars by John Green" ,"self.Book2.__str__()")
            self.assertEqual(self.Book3.__str__(), "The Coldest Winter Ever by Sister Souljah" ,"self.Book3.__str__()")
            self.assertEqual(self.Book4.__str__(), "Midnight by Sister Souljah" ,"self.Book4.__str__()")
            self.assertEqual(self.Book5.__str__(), "If Beale Street Could Talk by James Baldwin" ,"self.Book5.__str__()")

    myTests().main()

.. parsonsprob:: obj_mixedupcode_7
    :numbered: left
    :practice: T
    :adaptive:

    Create a class named ``Dog`` with an ``__init__`` method that takes ``name`` and ``age``.
    Then, create a second class ``GoldenRetriever`` that extends the ``Dog`` class. This class uses the
    ``__str__`` method to return the string representation of the class: "Name: ``name`` Age: ``age`` Breed: Golden Retriever".
    -----
    class Dog:
    =====
        def __init__(self, name, age):
    =====
            self.name = name
            self.age = age
    =====
    class GoldenRetriever(Dog):
    =====
    class GoldenRetriever extends Dog: #paired
    =====
        def __str__(self):
    =====
        def __str__(super): #paired

    =====
            return ("Name: " + self.name  + " Age: " + str(self.age) + " Breed: Golden Retriever")
    =====
            return ("Name: " + super.name  + " Age: " + super.age + " Breed: "  + self.breed) #paired
    =====
    lark = GoldenRetriever("Lark", 10)
    =====
    print(lark)

.. activecode:: obj_mixedupcode_7_ac

    Construct a class named ``Dog`` with an ``__init__`` method that takes ``name`` and ``age``.
    Then, create a second class ``GoldenRetriever`` that extends the ``Dog`` class. This class uses the
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

    Create a class named ``Dog`` with the ``__init__`` method taking ``name`` and ``age`` as its parameters.
    Then create a class named ``DogBreed`` which uses the ``__init`` values ``name`` and ``age`` from the ``Dog`` class
    and assigns a value to ``breed`` in the ``__init__`` method. Also create the ``__str__`` method that returns the string representation
    of the class: "Name: name, Breed: breed".
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
            return ("Name: " + self.name  + " Breed:" + self.breed)
    =====
    lark = DogBreed("Lark", 10, "Golden Retriever")
    =====
    print("lark")

.. activecode:: obj_mixedupcode_8_ac

    Write a class named ``Dog`` with the ``__init__`` method taking ``name`` and ``age`` as its parameters.
    Then create a class named ``DogBreed`` which uses the ``__init`` values ``name`` and ``age`` from the ``Dog`` class
    and assigns a value to ``breed`` in the ``__init__`` method. Also create the ``__str__`` method that returns the string representation
    of the class: "Name: name, Breed: breed".

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
            self.assertEqual(self.Sam.__str__(), "Name: Sam, Breed: Golden Retriever" ,"self.Sam.__str__()")
            self.assertEqual(self.Jack.__str__(), "Name: Jack, Breed: Husky" ,"self.Jack.__str__()")
            self.assertEqual(self.Dom.__str__(), "Name: Dom, Breed: Pitbull" ,"self.Dom.__str__()")
            self.assertEqual(self.Tink.__str__(), "Name: Tink, Breed: Poodle" ,"self.Tink.__str__()")
            self.assertEqual(self.Pinky.__str__(), "Name: Pinky, Breed: American Bulldog" ,"self.Pinky.__str__()")

    myTests().main()

.. parsonsprob:: obj_mixedupcode_9
    :numbered: left
    :practice: T
    :adaptive:

    Create a class named ``Book`` that assigns the ``title`` and ``author`` in the ``__init__`` function.
    Create a class named ``Library`` that extends ``Book`` and sets the availability, ``avail``, of the book to True in the ``__init__`` function.
    Then create a method named ``updateAvail`` that updates the ``avail`` of the book to the opposite. Finally, create a method named ``__str__``
    that returns the string representation of the object: ``"Title: " title, Avail: avail"``.
    Then create an instance of the book ``iliad`` that is
    titled "Iliad" by Homer, it is initially available (True), but use ``updateAvail`` to change it to not available (False).
    -----
    class Book:
    =====
        def __init__(self, title, author):
    =====
            self.tite = title
            self.author = author
    =====
    class Library(Book):
    =====
        def __init__(self, title, author, avail):
    =====
        def __init__(Book(title, author), avail): #paired
    =====
            Book.__init__(title, author)
    =====
            self.book = Book(title, author) #paired
    =====
            self.avail = avail
    =====
        def updateAvail(self, avail)
    =====
            self.avail = avail
    =====
        def __str__(self):
    =====
            return (f" Title: {self.title}, Avail: {self.avail}")
    =====
    iliad = Library("Iliad", "Homer", "Yes")
    =====
    iliad.updateAvail("No")
    print(iliad)

.. activecode:: obj_mixedupcode_9_ac

    Write a class named ``Book`` that assigns the ``title`` and ``author`` in the ``__init__`` function.
    Write a class named ``Library`` that extends ``Book`` and sets the availability, ``avail``, of the book to True in the ``__init__`` function.
    Then create a method named ``updateAvail`` that updates the ``avail`` of the book to the opposite. Finally, create a method named ``__str__``
    that returns the string representation of the object: ``"Title: " title, Avail: avail"``.
    Then create an instance of the book ``iliad`` that is
    titled "Iliad" by Homer, it is initially available (True), but use ``updateAvail`` to change it to not available (False).
    ~~~~

    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def setUp(self):
            self.Book1 = Library("Oh, the Places You'll Go!", "Dr. Suess")
            self.Book2 = Library("The Fault in Our Stars", "John Green")
            self.Book3 = Library("The Coldest Winter Ever", "Sister Souljah")
            self.Book4 = Library("Midnight", "Sister Souljah")
            self.Book5 = Library("If Beale Street Could Talk", "James Baldwin")


        def testOne(self):
            self.assertEqual(self.Book1.__str__(), "Title: Oh, the Places You'll Go!, Avail: True","self.Book1.__str__()")
            self.assertEqual(self.Book2.__str__(), "Title: The Fault in Our Stars, Avail: True" ,"self.Book2.__str__()")
            self.assertEqual(self.Book3.__str__(), "Title: The Coldest Winter Ever, Avail: True" ,"self.Book3.__str__()")
            self.assertEqual(self.Book4.__str__(), "Title: Midnight, Avail: False","self.Book4.__str__()")
            self.assertEqual(self.Book5.__str__(), "Title: If Beale Street Could Talk, Avail: True" ,"self.Book5.__str__()")

    myTests().main()


.. parsonsprob:: obj_mixedupcode_10
    :numbered: left
    :practice: T
    :adaptive:

    Create a class named ``Apple`` that assigns ``kind`` and ``color`` as initial values in the ``__init__`` function.
    and a method named ``__repr__`` that returns the string representation of the ``Apple`` class: "Apple type: " + ``kind`` + " color: " + ``color``.
    Create a class named ``Farmer`` that assigns ``name`` to the ``__init__`` function and ``item`` to an empty list within the ``__init__`` function.
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

    Write a class named ``Apple`` that assigns ``kind`` and ``color`` as initial values in the ``__init__`` function.
    and a method named ``__repr__`` that returns the string representation of the ``Apple`` class: "Apple type: " + ``kind`` + " color: " + ``color``.
    Write a class named ``Farmer`` that assigns ``name`` to the ``__init__`` function and ``item`` to an empty list within the ``__init__`` function.
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
