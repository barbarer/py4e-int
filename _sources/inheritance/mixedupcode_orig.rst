Mixed-Up Code Questions
------------------------

.. parsonsprob:: inheritance_mixed1_v3
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``Person`` with a ``constructor`` that takes ``first_name`` and ``last_name`` and inititalize those attributes in the current object. Next, create a class called ``Customer`` that inherits from ``Person`` with a constructor that takes ``first_name``, ``last_name``, and ``id``.  Call the constructor in ``Person`` to initialize ``first_name`` and ``last_name`` and then also set the ``id`` attribute in the ``Customer`` object.  For example, ``Person("Barb", "Ericson").last_name == "Ericson"`` and ``Customer("Barb", "Ericson", "a1").id == ``"a1"``.
    -----
    class Person:
    =====
        def __init__(self, first_name, last_name):
    =====
        def init(first_name, last_name): #paired
    =====
            self.first_name = first_name
            self.last_name = last_name
    =====
    class Customer(Person):
    =====
    class Customer extends Person: #paired
    =====
        def __init__(self, first_name, last_name, id):
    =====
        def __init__(first_name, last_name, id): #paired
    =====
            super().__init__(first_name, last_name)
    =====
            super.__init__(first_name, last_name) #paired
    =====
            self.id = id


.. activecode:: inheritance_mixed1_ac_v3
    :autograde: unittest

    Write a class ``Person`` with a ``constructor`` that takes ``first_name`` and ``last_name`` and inititalize those attributes in the current object. Next, create a class called ``Customer`` that inherits from ``Person`` with a constructor that takes ``first_name``, ``last_name``, and ``id``.  Call the constructor in ``Person`` to initialize ``first_name`` and ``last_name`` and then also set the ``id`` attribute in the ``Customer`` object.  For example, ``Person("Barb", "Ericson").last_name == "Ericson"`` and ``Customer("Barb", "Ericson", "a1").id == ``"a1"``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            p = Person("Barb", "Ericson")
            c = Customer("Barb", "Ericson", "a1")
            self.assertEqual(p.first_name, "Barb", 'Person("Barb", "Ericson").first_name')
            self.assertEqual(p.last_name, "Ericson", 'Person("Barb", "Ericson").last_name')
            self.assertEqual(c.first_name, "Barb", 'Customer("Barb", "Ericson", "a1").first_name')
            self.assertEqual(c.last_name, "Ericson", 'Customer("Barb", "Ericson", "a1").last_name')
            self.assertEqual(c.id, "a1", 'Customer("Barb", "Ericson", "a1").id')


    myTests().main()

.. parsonsprob:: inheritance_mixed2_v3
    :numbered: left
    :practice: T
    :adaptive:

    Create a class called ``Person`` with a ``constructor`` that takes ``name`` and ``age``. Next, create a class called ``Student`` that inherits from ``Person``.
    The constructor for ``Student`` takes ``name``, ``age``, and ``gpa``. Have the constructor for the ``Student`` class call the constructor for the ``Person`` class to initialize the ``name`` and ``age`` and then set the value for the ``gpa``.  For example, ``Person('Susan', 13).name`` would be ``"Susan"``
    and ``Student('Sally', 16, 3.7).gpa`` would be ``3.7``.
    -----
    class Person:
    =====
        def __init__(self, name, age):
    =====
        def init(self, name, age): #paired
    =====
            self.name = name
            self.age = age
    =====
    class Student(Person):
    =====
    class Student(): #paired
    =====
        def __init__(self, name, age, gpa):
    =====
        def __init__(name, age, gpa): #paired
    =====
            super().__init__(name, age)
    =====
            super.__init__(name,age) #paired
    =====
            self.gpa = gpa

.. activecode:: inheritance_mixed2_ac_v3
    :autograde: unittest

    Write a class called ``Person`` with a ``constructor`` that takes ``name`` and ``age``. Next, create a class called ``Student`` that inherits from ``Person``.
    The constructor for ``Student`` takes ``name``, ``age``, and ``gpa``. Have the constructor for the ``Student`` class call the constructor for the ``Person`` class to initialize the ``name`` and ``age`` and then set the value for the ``gpa``.  For example, ``Person('Susan', 13).name`` would be ``"Susan"``
    and ``Student('Sally', 16, 3.7).gpa`` would be ``3.7``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            p = Person('Susan', 13)
            s = Student('Sally', 16, 3.7)
            self.assertEqual(p.name, 'Susan', "Person('Susan', 13).name")
            self.assertEqual(p.age, 13, "Person('Susan', 13).age")
            self.assertEqual(s.name, 'Sally', "Student('Sally', 16, 3.7).name")
            self.assertEqual(s.age, 16, "Student('Sally', 16, 3.7).age")
            self.assertEqual(s.gpa, 3.7, "Student('Sally', 16, 3.7).gpa")

    myTests().main()

.. parsonsprob:: inheritance_mixed3_v3
    :numbered: left
    :practice: T
    :adaptive:

    Create a class called ``Building`` with a ``constructor`` that inititalizes the attributes ``floors`` and ``sqft``. Next, create a class called ``House`` that inherits from ``Building``. The constructor for ``House`` should take ``floors``, ``sqft``, and ``bedrooms`` and call the construtor in ``Building`` to initialze the ``floors`` and ``sqft`` before setting the attribute ``bedrooms``. For example, ``Building(15, 10000).floors`` would be ``15``
    and ``House(3, 2000, 3).bedrooms`` would be ``3``.
    -----
    class Building:
    =====
        def __init__(self, floors, sqft):
    =====
        def __init__(floors, sqft): #paired
    =====
            self.floors = floors
            self.sqft = sqft
    =====
    class House(Building):
    =====
    class House: #paired
    =====
        def __init__(self, floors, sqft, bedrooms):
    =====
        def __init__(floors, sqft, bedrooms): #paired
    =====
            super().__init__(floors, sqft)
    =====
            super.__init__(floors, sqft) #paired
    =====
            self.bedrooms = bedrooms


.. activecode:: inheritance_mixed3_ac_v3
    :autograde: unittest

    Write a class called ``Building`` with a ``constructor`` that inititalizes the attributes ``floors`` and ``sqft``. Next, create a class called ``House`` that inherits from ``Building``. The constructor for ``House`` should take ``floors``, ``sqft``, and ``bedrooms`` and call the construtor in ``Building`` to initialze the ``floors`` and ``sqft`` before setting the attribute ``bedrooms``. For example, ``Building(15, 10000).floors`` would be ``15``
    and ``House(3, 2000, 3).bedrooms`` would be ``3``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            b = Building(15, 10000)
            h = House(3, 2000, 4)

            self.assertEqual(b.floors, 15, "Building(15, 10000).floors")
            self.assertEqual(b.sqft, 10000, "Building(15, 10000).sqft")
            self.assertEqual(h.floors, 3, "House(3, 2000, 4).floors")
            self.assertEqual(h.sqft, 2000, "House(3, 2000, 4).sqft")
            self.assertEqual(h.bedrooms, 4, "House(3, 2000, 4).bedrooms")


    myTests().main()

.. parsonsprob:: inheritance_mixed4_v3
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``Account`` with an attribute of ``balance`` and methods of ``deposit`` and ``withdraw`` that both take an ``amount``. For example, ``Account(200).withdraw(50)`` should set the balance to ``150`` and ``Account(200).deposit(100)`` should set the balance to ``300``.
    -----
    class Account:
    =====
        def __init__(self, balance):
    =====
            self.balance = balance
    =====
        def deposit(self, amount):
    =====
        def deposit(amount): #paired
    =====
            self.balance += amount
    =====
            balance += amount #paired
    =====
        def withdraw(self, amount):
    =====
        def withdraw(amount): #paired
    =====
            self.balance -= amount
    =====
            balance -= amount #paired


.. activecode:: inheritance_mixed4_ac_v3
    :autograde: unittest

    Write a class ``Account`` with an attribute of ``balance`` and methods of ``deposit`` and ``withdraw`` that both take an ``amount``. For example, ``Account(200).withdraw(50)`` should set the balance to ``150`` and ``Account(200).deposit(100)`` should set the balance to ``300``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            a = Account(200)
            b = Account(200)
            c = Account(50)
            d = Account(50)
            e = Account(-50)
            a.withdraw(50)
            self.assertEqual(a.balance, 150, 'Account(200).withdraw(50)')
            b.deposit(100)
            self.assertEqual(b.balance, 300, 'Account(200).deposit(100)')
            c.withdraw(75)
            self.assertEqual(c.balance, -25, 'Account(50).withdraw(75)')
            d.deposit(50)
            self.assertEqual(d.balance, 100, 'Account(50).deposit(50)')
            e.deposit(50)
            self.assertEqual(e.balance, 0, 'Account(-50).deposit(50)')

    myTests().main()

.. parsonsprob:: inheritance_mixed5_v3
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``Animal`` with an attribute of ``name`` and a method ``make_noise`` that returns ``"Noise"``.  Then create a ``Dog`` class that inherits from ``Animal``.  Have the constructor in ``Dog`` call the constructor in ``Animal`` to initialze the ``name``. In ``Dog`` also override the ``make_noise`` method inherited from ``Animal`` to return ``"Bark"``.   For example, ``Animal("Diana").make_noise()`` returns ``"Noise"`` and ``Dog("Percy").make_noise()`` returns ``"Bark"``.
    -----
    class Animal:
    =====
    def class Animal: #paired
    =====
        def __init__(self, name):
    =====
            self.name = name
    =====
        def make_noise(self):
    =====
        def make_noise(): #paired
    =====
            return "Noise"
    =====
    class Dog(Animal):
    =====
    class Dog: #paired
    =====
        def __init__(self, name):
    =====
            super().__init__(name)
    =====
        def make_noise(self):
    =====
        def make_noise(): #paired
    =====
            return "Bark"


.. activecode:: inheritance_mixed5_ac_v3
    :autograde: unittest

    Write a class ``Animal`` with an attribute of ``name`` and a method ``make_noise`` that returns ``"Noise"``.  Then create a ``Dog`` class that inherits from ``Animal``.  Have the constructor in ``Dog`` call the constructor in ``Animal`` to initialze the ``name``. In ``Dog`` also override the ``make_noise`` method inherited from ``Animal`` to return ``"Bark"``.   For example, ``Animal("Diana").make_noise()`` returns ``"Noise"`` and ``Dog("Percy").make_noise()`` returns ``"Bark"``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            a = Animal('Diana')
            d = Dog('Percy')
            self.assertEqual(a.make_noise(),"Noise", 'Animal("Diana").make_noise()')
            self.assertEqual(a.name,"Diana", 'Animal("Diana").name')
            self.assertEqual(d.make_noise(),"Bark", 'Dog("Percy").make_noise()')
            self.assertEqual(d.name,"Percy", 'Dog("Percy").name')



    myTests().main()

.. parsonsprob:: inheritance_mixed6_v3
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``Animal`` with an attribute of ``name`` and a method ``make_noise`` that returns ``"Noise"``.  Then create a ``Cat`` class that inherits from ``Animal``.  Have the constructor in ``Cat`` call the constructor in ``Animal`` to initialze the ``name``. In ``Cat`` also override the ``make_noise`` method inherited from ``Animal`` to return ``"Meow"``.   For example, ``Animal("Spike").make_noise()`` returns ``"Noise"`` and ``Cat("Diana").make_noise()`` returns ``"Meow"``.
    -----
    class Animal:
    =====
    def class Animal: #paired
    =====
        def __init__(self, name):
    =====
            self.name = name
    =====
        def make_noise(self):
    =====
        def make_noise(): #paired
    =====
            return "Noise"
    =====
    class Cat(Animal):
    =====
    class Cat: #paired
    =====
        def __init__(self, name):
    =====
            super().__init__(name)
    =====
        def make_noise(self):
    =====
        def make_noise(): #paired
    =====
            return "Meow"


.. activecode:: inheritance_mixed6_ac_v3
    :autograde: unittest

    Write a class ``Animal`` with an attribute of ``name`` and a method ``make_noise`` that returns ``"Noise"``.  Then create a ``Cat`` class that inherits from ``Animal``.  Have the constructor in ``Cat`` call the constructor in ``Animal`` to initialze the ``name``. In ``Cat`` also override the ``make_noise`` method inherited from ``Animal`` to return ``"Meow"``.   For example, ``Animal("Spike").make_noise()`` returns ``"Noise"`` and ``Cat("Diana").make_noise()`` returns ``"Meow"``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            a = Animal('Spike')
            c = Cat('Diana')
            self.assertEqual(a.make_noise(),"Noise", 'Animal("Spike").make_noise()')
            self.assertEqual(a.name,"Spike", 'Animal("Spike").name')
            self.assertEqual(c.make_noise(),"Meow", 'Cat("Diana").make_noise()')
            self.assertEqual(c.name,"Diana", 'Cat("Diana").name')

    myTests().main()

.. parsonsprob:: inheritance_mixed7_v3
    :numbered: left
    :practice: T
    :adaptive:

    Given a class ``Point`` that has attributes of ``x`` and ``y`` and a method ``distance_to(self, other)`` that returns the distance between the current point (self) and the other point, create a ``MyCircle`` class that has a constructor that takes two attibutes ``p1`` and ``p2`` both objects of the class ``Point``.  Also create a ``radius`` method that returns the radius of the circle (half the distance between the two points that define circle).
    -----
    class MyCircle:
    =====
    class MyCircle(Point): #paired
    =====
        def __init__(self, p1, p2):
    =====
        def __init__(p1, p2): #paired
    =====
            self.p1 = p1
            self.p2 = p2
    =====
        def radius(self):
    =====
        def radius(): #paired
    =====
            return self.p1.distance_to(self.p2) / 2
    =====
            return p1.distance_to(p2) / 2 #paired


.. activecode:: inheritance_mixed7_ac_v3
    :autograde: unittest

    Given a class ``Point`` defined below that has attributes of ``x`` and ``y`` and a method ``distance_to(self, other)`` that returns the distance between the current point (self) and the other point, write a ``MyCircle`` class that that has a constructor that takes two attibutes ``p1`` and ``p2`` both objects of the class ``Point``.  Also create a ``radius`` method that returns the radius of the circle (half the distance between the two points that define circle).
    ~~~~
    class Point:
        def __init__(self, x, y):
            self.x = x
            self.y = y
        def distance_to(self, other):
            return (((self.x - other.x) ** 2) + ((self.y - other.y) ** 2)) ** 0.5

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            p1 = Point(5,5)
            p2 = Point(5, 10)
            p3 = Point(5, 15)
            c = MyCircle(p1, p2)
            c2 = MyCircle(p1, p3)

            self.assertEqual(c.p1, p1, "test of MyCircle p1 for first circle")
            self.assertEqual(c.p2, p2, "test of MyCircle p2 for first circle")
            self.assertEqual(c.radius(), p1.distance_to(p2) /  2, "test of MyCircle radius for first circle")
            self.assertEqual(c2.p2, p3, "test of MyCircle p2 for second circle")
            self.assertEqual(c2.radius(), p1.distance_to(p3) /  2, "test of MyCircle radius for second circle")

    myTests().main()

.. parsonsprob:: inheritance_mixed8_v3
    :numbered: left
    :practice: T
    :adaptive:

    Given a class ``Item`` with an attributes of ``name`` and ``price``, create an ``Order`` class that has an attribute ``item_list`` that is intitialized to the empty list in the constructor.  Then add an ``add_item`` method that takes an ``item`` and appends it to the ``item_list`` attribute.   Then create a ``get_total`` method that returns the total price for all the items in ``item_list`` attribute.
    -----
    class Order:
    =====
    class Order(Item): #paired
    =====
        def __init__(self):
    =====
            self.item_list = []
    =====
            self.item_list = () #paired
    =====
        def add_item(self, item):
    =====
            self.item_list.appand(item)
    =====
            item_list.appand(item) #paired
    =====
        def get_total(self):
    =====
            total = 0
    =====
            for item in self.item_list:
    =====
            for item in item_list: #paired
    =====
                total += item.price
    =====
            return total




.. activecode:: inheritance_mixed8_ac_v3
    :autograde: unittest

    Given a class ``Item`` define below with attributes of ``name`` and ``price``, write an ``Order`` class that has an attribute ``item_list`` that is intitialized to the empty list in the constructor.  Then add an ``add_item`` method that takes an ``item`` and appends it to the ``item_list`` attribute.   Then create a ``get_total`` method that returns the total price for all the items in ``item_list`` attribute.
    ~~~~
    class Item:
        def __init__(self, name, price):
            self.name = name
            self.price = price


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            i1 = Item('hamburger', 6.99)
            i2 = Item('fries', 2.99)
            i3 = Item('drink', 1.99)
            i4 = Item("dessert", 1.99)
            o1 = Order()
            o1.add_item(i1)
            o1.add_item(i2)
            o1.add_item(i3)
            self.assertEqual(o1.get_total(), 11.97, 'get_total on order 1')
            o1.add_item(i4)
            self.assertEqual(o1.get_total(), 13.96, 'get total on order 2')
            o2 = Order()
            o2.add_item(i1)
            o2.add_item(i4)
            self.assertEqual(o2.get_total(), 8.98, 'get_total on order 3')
            o2.add_item(i2)
            self.assertEqual(o2.get_total(), 11.97, 'get_total on order 4')
            o2.add_item(i3)
            self.assertEqual(o2.get_total(), 13.96, 'get_total on order 5')



    myTests().main()


.. parsonsprob:: inheritance_mixed9_v3
    :numbered: left
    :practice: T
    :adaptive:

    Given a class ``Account`` with an attribute ``balance`` and methods of ``deposit`` and ``withdraw``, create a ``SavingsAccount`` class that inherits from ``Account``.  Create a constructor that takes ``balance`` and ``interest``.  In the ``SavingsAccount`` constructor call the ``Account`` constructor to intitialze the ``balance`` and then initialize the ``interest``.   Then create a ``pay_interest`` method that adds the interest to the balance (divide the interest rate by 100 and multiply it by the balance to determine the amount to add).
    -----
    class SavingsAccount(Account):
    =====
    class SavingsAccount: #paired
    =====
        def __init__(self, balance, interest):
    =====
        def __init__(balance, interest): #paired
    =====
            super().__init__(balance)
    =====
            super.__init__(balance) #paired
    =====
            self.interest = interest
    =====
        def pay_interest(self):
    =====
        def pay_interest(): #paired
    =====
            amount = self.interest / 100
    =====
            self.balance += amount * self.balance
    =====
            self.balance += self.amount * self.balance #paired



.. activecode:: inheritance_mixed9_ac_v3
    :autograde: unittest

    Given a class ``Account`` with an attribute ``balance`` and methods of ``deposit`` and ``withdraw``, create a ``SavingsAccount`` class hat inherits from ``Account``.  Write a constructor that takes ``balance`` and ``interest``.  In the ``SavingsAccount`` constructor call the ``Account`` constructor to intitialze the ``balance`` and then initialize the ``interest``.   Then create a ``pay_interest`` method that adds the interest to the balance (divide the interest rate by 100 and multiply it by the balance to determine the amount to add).
    ~~~~
    class Account:
        def __init__(self, balance):
            self.balance = balance
        def deposit(self, amount):
            self.balance += amount
        def withdraw(self, amount):
            self.balance -= amount



    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            s = SavingsAccount(200, 1.5)
            s.withdraw(50)
            self.assertEqual(s.balance, 150, "test of withdraw")
            s.deposit(75)
            self.assertEqual(s.balance, 225, "test of deposit")
            s.pay_interest()
            self.assertAlmostEqual(s.balance, 228.375, 3, "test of pay_interest")




    myTests().main()

.. parsonsprob:: inheritance_mixed10_v3
    :numbered: left
    :practice: T
    :adaptive:

    Given a class ``Treasure`` that has attributes of ``name`` and ``points``, create a class ``Room`` that has attributes of ``name`` and ``treasures``.  Initialize ``treasures`` to the empty list in the constructor.  Create a ``add_treasure`` method in ``Room`` that adds a passed ``Treasure`` object to ``treasures``.  Next create a ``get_points`` method in ``Room`` that returns the total of all of the points for the ``Treasure`` in ``treasures``.
    -----
    class Room:
    =====
    class Room (Treasure): #paired
    =====
        def __init__(self, name):
    =====
            self.name = name
            self.treasures = []
    =====
        def add_treasure(self, treasure):
    =====
            self.treasures.append(treasure)
    =====
            treasures.append(treasure) #paired
    =====
        def get_points(self):
    =====
            total = 0
    =====
            for treasure in self.treasures:
    =====
            for treasure in treasures: #paired
    =====
                total += treasure.points
    =====
            return total







.. activecode:: inheritance_mixed10_ac_v3
    :autograde: unittest

    Given a class ``Treasure`` below that has attributes of ``name`` and ``points``, create a class ``Room`` that has attributes of ``name`` and ``treasures``.  Initialize ``treasures`` to the empty list in the constructor.  Create a ``add_treasure`` method in ``Room`` that adds a passed ``Treasure`` object to ``treasures``.  Next create a ``get_points`` method in ``Room`` that returns the total of all of the points for the ``Treasure`` in ``treasures``.
    ~~~~
    class Treasure:
        def __init__(self, name, points):
            self.name = name
            self.points = points



    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            t1 = Treasure("Ring", 100)
            t2 = Treasure("Lamp", 300)
            t3 = Treasure("Necklace", 200)
            t4 = Treasure("Shoes", 150)
            r1 = Room("Kitchen")
            r1.add_treasure(t1)
            r1.add_treasure(t2)
            self.assertEqual(r1.get_points(), 400, "test of get_points on room 1")
            r2 = Room("Billards")
            r2.add_treasure(t3)
            r2.add_treasure(t4)
            self.assertEqual(r2.get_points(), 350, "test of get_points on room 2")
            r3 = Room("Living Room")
            r3.add_treasure(t1)
            self.assertEqual(r3.get_points(), 100, "test of get_points on room 3")
            r4 = Room("Pantry")
            r4.add_treasure(t2)
            self.assertEqual(r4.get_points(), 300, "test of get_points on room 4")




    myTests().main()
