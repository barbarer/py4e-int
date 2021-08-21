Mixed-Up Code Questions
------------------------

.. parsonsprob:: re_mixed1
    :numbered: left
    :practice: T
    :adaptive:

    Create a class called ``Fruit`` with a ``constructor`` that takes in a parameter ``size``. Next, create a class called ``Orange`` with a 
    ``constructor`` that inherits from the ``Fruit`` constructor and additionally has a parameter ``flavor``. For example, ``Fruit(10).size`` would be ``10``,
    and ``Orange(10, 'sweet').flavor`` would be ``"sweet"``.
    -----
    class Fruit:
    =====
        def __init__(self, size):
    =====
        def init(self, size): #paired
    =====
            self.size = size
    =====
    class Orange(Fruit):
    =====
    class Orange(): #paired
    =====
        def __init__(self, size, flavor):
    =====
            super().__init__(size)
    =====
            self.flavor = flavor

.. activecode:: re_mixed1_ac
    :autograde: unittest

    Write a class called ``Fruit`` with a ``constructor`` that takes in a parameter ``size``. Next, create a class called ``Orange`` with a 
    ``constructor`` that inherits from the ``Fruit`` constructor and additionally has a parameter ``flavor``. For example, ``Fruit(10).size`` would be ``10``,
    and ``Orange(10, 'sweet').flavor`` would be ``"sweet"``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            size = 10
            flavor = 'sweet'
            f = Fruit(10)
            f2 = Orange(10, 'sweet')
            self.assertEqual(f.size, size, "Fruit(10).size")
            self.assertEqual(f2.size, size, "Orange(10, 'sweet').size")
            self.assertEqual(f2.flavor, flavor, "Orange(10, 'sweet').flavor")
        
    myTests().main()

.. parsonsprob:: re_mixed2
    :numbered: left
    :practice: T
    :adaptive:

    Create a class called ``Person`` with a ``constructor`` that takes in parameters ``name`` and ``age``. Next, create a class called ``Student`` with a 
    ``constructor`` that inherits from the ``Person`` constructor and additionally has parameters ``grade`` and ``gpa``. For example, ``Person('Susan', 13).name`` would be ``"Susan"``
    and ``Student('Sally', 16, 11, 3.7).gpa`` would be ``3.7``.
    -----
    class Person:
    =====
        def __init__(self, name, age):
    =====
        def init(self, name, age): #paired
    =====
            self.name = name
    =====
            self.age = age
    =====
    class Student(Person):
    =====
    class Student(): #paired
    =====
        def __init__(self, name, age, grade, gpa):
    =====
        def __init__(name, age, grade, gpa): #paired
    =====
            super().__init__(name, age)
    =====
            super().__init__(age) #paired
            super().__init__(name)
    =====
            self.grade = grade
    =====
            self.gpa = gpa

.. activecode:: re_mixed2_ac
    :autograde: unittest

    Write a class called ``Person`` with a ``constructor`` that takes in parameters ``name`` and ``age``. Next, create a class called ``Student`` with a 
    ``constructor`` that inherits from the ``Person`` constructor and additionally has parameters ``grade`` and ``gpa``. For example, ``Person('Susan', 13).name`` would be ``"Susan"``
    and ``Student('Sally', 16, 11, 3.7).gpa`` would be ``3.7``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            p = Person('Susan', 13)
            s = Student('Sally', 16, 11, 3.7)
            self.assertEqual(p.name, 'Susan', "Person('Susan', 13).name")
            self.assertEqual(p.age, 13, "Person('Susan', 13).age")
            self.assertEqual(s.name, 'Sally', "Student('Sally', 16, 11, 3.7).name")
            self.assertEqual(s.age, 16, "Student('Sally', 16, 11, 3.7).age")
            self.assertEqual(s.grade, 11, "Student('Sally', 16, 11, 3.7).grade")
            self.assertEqual(s.gpa, 3.7, "Student('Sally', 16, 11, 3.7).gpa")

    myTests().main()

.. parsonsprob:: re_mixed3
    :numbered: left
    :practice: T
    :adaptive:

    Create a class called ``Building`` with a ``constructor`` that takes in parameters ``floors``, ``sqft``, and ``num_doors``. Next, create a class called ``House`` with a 
    ``constructor`` that inherits from the ``Building`` constructor and additionally has parameters ``bedrooms``, ``bathrooms``, and ``acres``. For example, ``Building(15, 10000, 70).num_doors`` would be ``70``
    and ``House(3, 2000, 10, 4, 4, 0.5).acres`` would be ``0.5``.
    -----
    class Building:
    =====
        def __init__(self, floors, sqft, num_doors):
    =====
        def __init__(floors, sqft, num_doors):
    =====
            self.floors = floors
    =====
            self.sqft = sqft
    =====
            self.num_doors = num_doors
    =====
    class House(Building):
    =====
    class House: #paired
    =====
        def __init__(self, floors, sqft, num_doors, bedrooms, bathrooms, acres):
    =====
        def __init__(self, floors, sqft, bedrooms, bathrooms, acres): #paired
    =====
            super().__init__(floors, sqft, num_doors)
    =====
            self.bedrooms = bedrooms
    =====
            self.bathrooms = bathrooms
    =====
            self.acres = acres


.. activecode:: re_mixed3_ac
    :autograde: unittest

    Write a class called ``Building`` with a ``constructor`` that takes in parameters ``floors``, ``sqft``, and ``num_doors``. Next, create a class called ``House`` with a 
    ``constructor`` that inherits from the ``Building`` constructor and additionally has parameters ``bedrooms``, ``bathrooms``, and ``acres``. For example, ``Building(15, 10000, 70).num_doors`` would be ``70``
    and ``House(3, 2000, 10, 4, 4, 0.5).acres`` would be ``0.5``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            b = Building(15, 10000, 70)
            h = House(3, 2000, 10, 4, 4, 0.5)

            self.assertEqual(b.floors, 15, "Building(15, 10000, 70).floors")
            self.assertEqual(b.sqft, 10000, "Building(15, 10000, 70).sqft")
            self.assertEqual(b.num_doors, 70, "Building(15, 10000, 70).num_doors")

            self.assertEqual(h.floors, 3, "House(3, 2000, 10, 4, 4, 0.5).floors")
            self.assertEqual(h.sqft, 2000, "House(3, 2000, 10, 4, 4, 0.5).sqft")
            self.assertEqual(h.num_doors, 10, "House(3, 2000, 10, 4, 4, 0.5).num_doors")
            self.assertEqual(h.bedrooms, 4, "House(3, 2000, 10, 4, 4, 0.5).bedrooms")
            self.assertEqual(h.bathrooms, 4, "House(3, 2000, 10, 4, 4, 0.5).bathrooms")
            self.assertEqual(h.acres, 0.5, "House(3, 2000, 10, 4, 4, 0.5).acres")


    myTests().main()

.. parsonsprob:: re_mixed4
    :numbered: left
    :practice: T
    :adaptive:

    Create a class called ``Sport`` with a ``constructor`` that takes in parameters ``teamsize`` and ``equipment`` and a ``__str__`` method that returns 
    ``"teamsize: (teamsize), equipment: (equipment)"``. Next, create a class called ``Tennis`` with a ``constructor`` that inherits from the ``Sport`` 
    constructor and additionally has a parameter ``type_court``. For example, ``Sport(20, 'football').__str__()`` would return 
    ``"teamsize: 20, equipment: football"``, and ``Tennis(2, 'racquet', 'clay').type_court`` would be ``'clay'``.
    -----
    class Sport:
    =====
        def __init__(self, teamsize, equipment):
    =====
            self.teamsize = teamsize
    =====
            self.equipment = equipment
    =====
        def __str__(self):
    =====
            return "teamsize: " + str(self.teamsize) + ", equipment: " + str(self.equipment)
    =====  
    class Tennis(Sport):
    =====
        def __init__(self, teamsize, equipment, type_court):
    =====
            super().__init__(teamsize, equipment)
    =====
            self.type_court = type_court

.. activecode:: re_mixed4_ac
    :autograde: unittest

    Write a class called ``Sport`` with a ``constructor`` that takes in parameters ``teamsize`` and ``equipment`` and a ``__str__`` method that returns 
    ``"teamsize: (teamsize), equipment: (equipment)"``. Next, create a class called ``Tennis`` with a ``constructor`` that inherits from the ``Sport`` 
    constructor and additionally has a parameter ``type_court``. For example, ``Sport(20, 'football').__str__()`` would return 
    ``"teamsize: 20, equipment: football"``, and ``Tennis(2, 'racquet', 'clay').type_court`` would be ``'clay'``.
    ~~~~
        

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            s = Sport(20, 'football')
            t = Tennis(2, 'racquet', 'clay')

            self.assertEqual(s.teamsize, 20, "Sport(20, 'football').teamsize")
            self.assertEqual(s.equipment, "football", "Sport(20, 'football').equipment")
            self.assertEqual(s.__str__(), "teamsize: 20, equipment: football", "Sport(20, 'football').__str__()")

            self.assertEqual(t.teamsize, 2, "Tennis(2, 'racquet', 'clay').teamsize")
            self.assertEqual(t.equipment, 'racquet', "Tennis(2, 'racquet', 'clay').equipment")
            self.assertEqual(t.type_court, 'clay', "Tennis(2, 'racquet', 'clay').type_court")

    myTests().main()

.. parsonsprob:: re_mixed5
    :numbered: left
    :practice: T
    :adaptive:

    Create a class called ``Animal`` with a ``constructor`` that takes in parameters ``name`` and ``age`` and a ``__str__`` method that returns 
    ``"name: (name), age: (age)"``. Next, create a class called ``Dog`` with a ``constructor`` that inherits from the ``Animal`` 
    ``constructor`` and additionally has parameters ``swim``, which is assigned to ``True`` if the ``Dog`` can swim and ``False`` otherwise, and ``trained``, 
    which is assigned to an integer that rates how trained the ``Dog`` is on a scale from 1 to 10. Additionally, the ``Dog`` class has a ``__str__`` method that 
    inherits from the ``Animal`` ``__str__`` method and returns "name: (name), age: (age), swim: (swim), trained: (trained)". For example, 
    ``Animal('charlie', 4).__str__()`` would return ``"name: charlie, age: 4"``, and ``Dog('coco', 2, True, 7).trained`` would be ``7``.   
    -----
    class Animal:
    =====
        def __init__(self, name, age):
    =====
            self.name = name
    =====
            self.age = age
    =====
        def __str__(self):
    =====
            return "name: " + str(self.name) + ", age: " + str(self.age)
    =====
    class Dog(Animal):
    =====
        def __init__(self, name, age, swim, trained):
    =====
            super().__init__(name, age)
    =====
            self.swim = swim
    =====
            self.trained = trained
    =====
        def __str__(self):
    =====
            return super().__str__() + ", swim: " + str(self.swim) + ", trained: " + str(self.trained)

.. activecode:: re_mixed5_ac
    :autograde: unittest

    Write a class called ``Animal`` with a ``constructor`` that takes in parameters ``name`` and ``age`` and a ``__str__`` method that returns 
    ``"name: (name), age: (age)"``. Next, create a class called ``Dog`` with a ``constructor`` that inherits from the ``Animal`` 
    ``constructor`` and additionally has parameters ``swim``, which is assigned to ``True`` if the ``Dog`` can swim and ``False`` otherwise, and ``trained``, 
    which is assigned to an integer that rates how trained the ``Dog`` is on a scale from 1 to 10. Additionally, the ``Dog`` class has a ``__str__`` method that 
    inherits from the ``Animal`` ``__str__`` method and returns "name: (name), age: (age), swim: (swim), trained: (trained)". For example, 
    ``Animal('charlie', 4).__str__()`` would return ``"name: charlie, age: 4"``, and ``Dog('coco', 2, True, 7).trained`` would be ``7``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):            
            a = Animal('charlie', 4)
            d = Dog('coco', 2, True, 7)

            self.assertEqual(a.name, 'charlie', "Animal('charlie', 4).name")
            self.assertEqual(a.age, 4, "Animal('charlie', 4).age")
            self.assertEqual(a.__str__(), "name: charlie, age: 4", "Animal('charlie', 4).__str__()")

            self.assertEqual(d.name, 'coco', "Dog('coco', 2, True, 7).name")
            self.assertEqual(d.age, 2, "Dog('coco', 2, True, 7).age")
            self.assertEqual(d.swim, True, "Dog('coco', 2, True, 7).swim")
            self.assertEqual(d.trained, 7, "Dog('coco', 2, True, 7).trained")
            self.assertEqual(d.__str__(), "name: coco, age: 2, swim: True, trained: 7", "Dog('coco', 2, True, 7).__str__()")

    myTests().main()

.. parsonsprob:: re_mixed6
    :numbered: left
    :practice: T
    :adaptive:

    Create a class called ``Book`` with a ``constructor`` that takes in parameters ``pages``, ``table_contents``, and ``author``, and a ``__str__`` 
    method that returns ``"pages: (pages), table_contents: (table_contents), author: (author)"``. Next, create a class called ``Encyclopedia`` with 
    a ``constructor`` that inherits from the ``Book`` constructor and additionally has parameters ``volumes`` and ``subject``. For example, 
    ``Book(200, True, 'JK Rowling').__str__()`` would return ``"pages: 200, table_contents: True, author: JK Rowling"``, and 
    ``Encyclopedia(800, True, 'Denis Diderot', 28, 'science').subject`` would be ``'science'``.
    -----
    class Book:
    =====
        def __init__(self, pages, table_contents, author):
    =====
            self.pages = pages
    =====
            self.table_contents = table_contents
    =====
            self.author = author
    =====
        def __str__(self):
    =====
            return "pages: " + str(self.pages) + ", table_contents: " + str(self.table_contents) + ", author: " + str(self.author)
    =====
    class Encyclopedia(Book):
    =====
        def __init__(self, pages, table_contents, author, volumes, subject):
    =====
            super().__init__(pages, table_contents, author)
    =====
            self.volumes = volumes
    =====
            self.subject = subject


.. activecode:: re_mixed6_ac
    :autograde: unittest

    Write a class called ``Book`` with a ``constructor`` that takes in parameters ``pages``, ``table_contents``, and ``author``, and a ``__str__`` 
    method that returns ``"pages: (pages), table_contents: (table_contents), author: (author)"``. Next, create a class called ``Encyclopedia`` with 
    a ``constructor`` that inherits from the ``Book`` constructor and additionally has parameters ``volumes`` and ``subject``. For example, 
    ``Book(200, True, 'JK Rowling').__str__()`` would return ``"pages: 200, table_contents: True, author: JK Rowling"``, and 
    ``Encyclopedia(800, True, 'Denis Diderot', 28, 'science').subject`` would be ``'science'``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            b = Book(200, True, 'JK Rowling')
            e = Encyclopedia(800, True, 'Denis Diderot', 28, 'science')

            self.assertEqual(b.pages, 200, "Book(200, True, 'JK Rowling').pages")
            self.assertEqual(b.table_contents, True, "Book(200, True, 'JK Rowling').table_contents")
            self.assertEqual(b.author, 'JK Rowling', "Book(200, True, 'JK Rowling').author")
            self.assertEqual(b.__str__(), "pages: 200, table_contents: True, author: JK Rowling", "Book(200, True, 'JK Rowling').__str__()")

            self.assertEqual(e.pages, 800, "Encyclopedia(800, True, 'Denis Diderot', 28, 'science').pages")
            self.assertEqual(e.table_contents, True, "Encyclopedia(800, True, 'Denis Diderot', 28, 'science').table_contents")
            self.assertEqual(e.author, 'Denis Diderot', "Encyclopedia(800, True, 'Denis Diderot', 28, 'science').author")
            self.assertEqual(e.volumes, 28, "Encyclopedia(800, True, 'Denis Diderot', 28, 'science').volumes")
            self.assertEqual(e.subject, 'science', "Encyclopedia(800, True, 'Denis Diderot', 28, 'science').subject")


    myTests().main()

.. parsonsprob:: re_mixed7
    :numbered: left
    :practice: T
    :adaptive:

    Create a class called ``Hat`` with a ``constructor`` that takes in parameters ``size``, ``cost``, and ``material``, and a ``__str__`` method that returns 
    ``"size: (size), cost: (cost), material: (material)"``. Next, create a class called ``Fedora`` with a ``constructor`` that inherits from the ``Hat`` 
    ``constructor`` and additionally has a parameter ``basketweave``, which is assigned to ``True`` if the ``Fedora`` is made with a ``basketweave``` and 
    ``False`` otherwise. Additionally, the ``Fedora`` class has a ``__str__`` method that inherits from the ``Hat`` ``__str__`` method and returns 
    ``"size: (size), cost: (cost), material: (material), basketweave: (basketweave)"``. For example, ``Hat('small', 30, 'Cotton').__str__()`` would 
    return ``"size: small, cost: 30, material: Cotton"``, and ``Fedora('large', 50, 'Polyester', True).material`` would be ``'Polyester'``.
    -----
    class Hat:
    =====
        def __init__(self, size, cost, material):
    =====
            self.size = size
    =====
            self.cost = cost
    =====
            self.material = material
    =====
        def __str__(self):
    =====
            return "size: " + str(self.size) + ", cost: " + str(self.cost) + ", material: " + str(self.material)
    =====    
    class Fedora(Hat):
    =====
        def __init__(self, size, cost, material, basketweave):
    =====
            super().__init__(size, cost, material)
    =====
            self.basketweave = basketweave
    =====    
        def __str__(self):
    =====
            return "size: " + str(self.size) + ", cost: " + str(self.cost) + ", material: " + str(self.material) + ", basketweave: " + str(self.basketweave)

.. activecode:: re_mixed7_ac
    :autograde: unittest

    Write a class called ``Hat`` with a ``constructor`` that takes in parameters ``size``, ``cost``, and ``material``, and a ``__str__`` method that returns 
    ``"size: (size), cost: (cost), material: (material)"``. Next, create a class called ``Fedora`` with a ``constructor`` that inherits from the ``Hat`` 
    ``constructor`` and additionally has a parameter ``basketweave``, which is assigned to ``True`` if the ``Fedora`` is made with a ``basketweave``` and 
    ``False`` otherwise. Additionally, the ``Fedora`` class has a ``__str__`` method that inherits from the ``Hat`` ``__str__`` method and returns 
    ``"size: (size), cost: (cost), material: (material), basketweave: (basketweave)"``. For example, ``Hat('small', 30, 'Cotton').__str__()`` would 
    return ``"size: small, cost: 30, material: Cotton"``, and ``Fedora('large', 50, 'Polyester', True).material`` would be ``'Polyester'``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            h = Hat('small', 30, 'Cotton')
            f = Fedora('large', 50, 'Polyester', True)

            self.assertEqual(h.size, 'small', "Hat('small', 30, 'Cotton').size")
            self.assertEqual(h.cost, 30, "Hat('small', 30, 'Cotton').cost")
            self.assertEqual(h.material, 'Cotton', "Hat('small', 30, 'Cotton').material")
            self.assertEqual(h.__str__(), "size: small, cost: 30, material: Cotton", "Hat('small', 30, 'Cotton').__str__()")

            self.assertEqual(f.size, 'large', "Fedora('large', 50, 'Polyester', True).size")
            self.assertEqual(f.cost, 50, "Fedora('large', 50, 'Polyester', True).cost")
            self.assertEqual(f.material, 'Polyester', "Fedora('large', 50, 'Polyester', True).material")
            self.assertEqual(f.basketweave, True, "Fedora('large', 50, 'Polyester', True).basketweave")
            self.assertEqual(f.__str__(), "size: large, cost: 50, material: Polyester, basketweave: True", "Fedora('large', 50, 'Polyester', True).__str__()")

    myTests().main()

.. parsonsprob:: re_mixed8
    :numbered: left
    :practice: T
    :adaptive:

    Create a class called ``Vehicle`` with a ``constructor`` that takes in parameters ``mph``, ``color``, and ``weight``. Next, create a class called ``Car`` with a 
    ``constructor`` that inherits from the ``Vehicle`` constructor and additionally has a parameter ``electric``. Lastly, create a class called ``ElectricCar`` with a 
    ``constructor`` that inherits from the ``Car`` constructor and additionally has a parameter ``cost``. For example, ``Vehicle(3.5, 'grey', 2000).weight`` would be ``2000``, 
    ``Car(40, 'blue', 4000, False).electric`` would be ``False``, and ``ElectricCar(40, 'red', 3000, True, 30000).cost`` would be ``30000``.
    -----
    class Vehicle:
    =====
        def __init__(self, mph, color, weight):
    =====
        def init(self, mph, color, weight): #paired
    =====
            self.mph = mph
    =====
            self.color = color
    =====
            self.weight = weight
    =====
    class Car(Vehicle):
    =====    
        def __init__(self, mph, color, weight, electric):
    =====
            super().__init__(mph, color, weight)
    =====
            self.electric = electric
    =====   
    class ElectricCar(Car):
    =====
    class ElectricCar(Vehicle): #paired
    =====
        def __init__(self, mph, color, weight, electric, cost):
    =====
            super().__init__(mph, color, weight, electric)
    =====
            super().__init__(mph, color, weight, electric, cost) #paired
    =====
            self.cost = cost

.. activecode:: re_mixed8_ac
    :autograde: unittest

    Write a class called ``Vehicle`` with a ``constructor`` that takes in parameters ``mph``, ``color``, and ``weight``. Next, create a class called ``Car`` with a 
    ``constructor`` that inherits from the ``Vehicle`` constructor and additionally has a parameter ``electric``. Lastly, create a class called ``ElectricCar`` with a 
    ``constructor`` that inherits from the ``Car`` constructor and additionally has a parameter ``cost``. For example, ``Vehicle(3.5, 'grey', 2000).weight`` would be ``2000``, 
    ``Car(40, 'blue', 4000, False).electric`` would be ``False``, and ``ElectricCar(40, 'red', 3000, True, 30000).cost`` would be ``30000``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            v = Vehicle(3.5, 'grey', 2000)
            c = Car(40, 'blue', 4000, False)
            e = ElectricCar(40, 'red', 3000, True, 30000)

            self.assertEqual(v.mph, 3.5, "Vehicle(3.5, 'grey', 2000).mph")
            self.assertEqual(v.color, 'grey', "Vehicle(3.5, 'grey', 2000).color")
            self.assertEqual(v.weight, 2000, "Vehicle(3.5, 'grey', 2000).weight")
            
            self.assertEqual(c.mph, 40, "Car(40, 'blue', 4000, False).mph")
            self.assertEqual(c.color, 'blue', "Car(40, 'blue', 4000, False).color")
            self.assertEqual(c.weight, 4000, "Car(40, 'blue', 4000, False).weight")
            self.assertEqual(c.electric, False, "Car(40, 'blue', 4000, False).electric")

            self.assertEqual(e.mph, 40, "ElectricCar(40, 'red', 3000, True, 30000).mph")
            self.assertEqual(e.color, 'red', "ElectricCar(40, 'red', 3000, True, 30000).color")
            self.assertEqual(e.weight, 3000, "ElectricCar(40, 'red', 3000, True, 30000).weight")
            self.assertEqual(e.electric, True, "ElectricCar(40, 'red', 3000, True, 30000).electric")
            self.assertEqual(e.cost, 30000, "ElectricCar(40, 'red', 3000, True, 30000).cost")

    myTests().main()

.. parsonsprob:: re_mixed9
    :numbered: left
    :practice: T
    :adaptive:

    Create a class called ``SchoolSupplies`` with a ``constructor`` that takes in parameters ``size``, ``cost``, and ``material``, and a ``__str__`` method 
    that returns ``"size: (size), cost: (cost), material: (material)"``. Next, create a class called ``WritingUtensils`` with a ``constructor`` that inherits 
    from the ``SchoolSupplies`` constructor and additionally has a parameter ``count``, and a ``__str__`` method that returns ``"size: (size), cost: (cost), 
    material: (material), count: (count)"``. Lastly, create a class called ``Pencil`` with a ``constructor`` that inherits from the ``WritingUtensils`` 
    constructor and additionally has parameters ``mechanical`` and ``lead``. If a ``Pencil`` is ``mechanical``, it will have a float ``lead`` size. Otherwise, ``lead`` will be ``None``. 
    Additionally, the ``Pencil`` class should have a ``__str__`` method that returns ``"size: (size), cost: (cost), material: (material), count: (count), 
    mechanical: (mechanical), lead: (lead)"``. For example, ``WritingUtensils('medium', 20, 'wood', 12).__str__()`` should return ``"size: medium, cost: 20, material: 
    wood, count: 12"`` and ``Pencil('large', 30, 'wood', 24, True, 0.7).mechanical`` would be ``True``.
    -----
    class SchoolSupplies:
    =====
        def __init__(self, size, cost, material):
    =====
            self.size = size
    =====
            self.cost = cost
    =====
            self.material = material
    =====    
        def __str__(self):
    =====
            return "size: " + str(self.size) + ", cost: " + str(self.cost) + ", material: " + str(self.material)
    =====
    class WritingUtensils(SchoolSupplies):
    =====
        def __init__(self, size, cost, material, count):
    =====
            super().__init__(size, cost, material)
    =====
            self.count = count
    ===== 
        def __str__(self):
    =====
            return "size: " + str(self.size) + ", cost: " + str(self.cost) + ", material: " + str(self.material) + ", count: " + str(self.count)
    =====
    class Pencil(WritingUtensils):
    =====
        def __init__(self, size, cost, material, count, mechanical, lead):
    =====
            super().__init__(size, cost, material, count)
    =====
            self.mechanical = mechanical
    =====
            if self.mechanical == True:
    =====
                self.lead = lead
    =====
            else:
    =====
                self.lead = None
    =====   
        def __str__(self):
    =====
            return "size: " + str(self.size) + ", cost: " + str(self.cost) + ", material: " + str(self.material) + ", count: " + str(self.count) + ", mechanical: " + str(self.mechanical) + ", lead: " + str(self.lead)

.. activecode:: re_mixed9_ac
    :autograde: unittest

    Write a class called ``SchoolSupplies`` with a ``constructor`` that takes in parameters ``size``, ``cost``, and ``material``, and a ``__str__`` method 
    that returns ``"size: (size), cost: (cost), material: (material)"``. Next, create a class called ``WritingUtensils`` with a ``constructor`` that inherits 
    from the ``SchoolSupplies`` constructor and additionally has a parameter ``count``, and a ``__str__`` method that returns ``"size: (size), cost: (cost), 
    material: (material), count: (count)"``. Lastly, create a class called ``Pencil`` with a ``constructor`` that inherits from the ``WritingUtensils`` 
    constructor and additionally has parameters ``mechanical`` and ``lead``. If a ``Pencil`` is ``mechanical``, it will have a float ``lead`` size. Otherwise, ``lead`` will be ``None``. 
    Additionally, the ``Pencil`` class should have a ``__str__`` method that returns ``"size: (size), cost: (cost), material: (material), count: (count), 
    mechanical: (mechanical), lead: (lead)"``. For example, ``WritingUtensils('medium', 20, 'wood', 12).__str__()`` should return ``"size: medium, cost: 20, material: 
    wood, count: 12"`` and ``Pencil('large', 30, 'wood', 24, True, 0.7).mechanical`` would be ``True``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            s = SchoolSupplies('small', 10, 'plastic')
            w = WritingUtensils('medium', 20, 'wood', 12)
            p1 = Pencil('large', 30, 'wood', 24, True, 0.7)
            p2 = Pencil('large', 30, 'wood', 24, False, 0.5)

            self.assertEqual(s.size, 'small', "SchoolSupplies('small', 10, 'plastic').size")
            self.assertEqual(s.cost, 10, "SchoolSupplies('small', 10, 'plastic').cost")
            self.assertEqual(s.material, 'plastic', "SchoolSupplies('small', 10, 'plastic').material")
            self.assertEqual(s.__str__(), "size: small, cost: 10, material: plastic", "SchoolSupplies('small', 10, 'plastic').__str__()")

            self.assertEqual(w.size, 'medium', "WritingUtensils('medium', 20, 'wood', 12).size")
            self.assertEqual(w.cost, 20, "WritingUtensils('medium', 20, 'wood', 12).cost")
            self.assertEqual(w.material, 'wood', "WritingUtensils('medium', 20, 'wood', 12).material")
            self.assertEqual(w.count, 12, "WritingUtensils('medium', 20, 'wood', 12).count")
            self.assertEqual(w.__str__(), "size: medium, cost: 20, material: wood, count: 12", "WritingUtensils('medium', 20, 'wood', 12).__str__()")

            self.assertEqual(p1.size, 'large', "Pencil('large', 30, 'wood', 24, True, 0.7).size")
            self.assertEqual(p1.cost, 30, "Pencil('large', 30, 'wood', 24, True, 0.7).cost")
            self.assertEqual(p1.material, 'wood', "Pencil('large', 30, 'wood', 24, True, 0.7).material")
            self.assertEqual(p1.count, 24, "Pencil('large', 30, 'wood', 24, True, 0.7).count")
            self.assertEqual(p1.mechanical, True, "Pencil('large', 30, 'wood', 24, True, 0.7).mechanical")
            self.assertEqual(p1.lead, 0.7, "Pencil('large', 30, 'wood', 24, True, 0.7).lead")
            self.assertEqual(p1.__str__(), "size: large, cost: 30, material: wood, count: 24, mechanical: True, lead: 0.7", "Pencil('large', 30, 'wood', 24, True, 0.7).__str__()")

            self.assertEqual(p2.size, 'large', "Pencil('large', 30, 'wood', 24, False, 0.5).size")
            self.assertEqual(p2.cost, 30, "Pencil('large', 30, 'wood', 24, False, 0.5).cost")
            self.assertEqual(p2.material, 'wood', "Pencil('large', 30, 'wood', 24, False, 0.5).material")
            self.assertEqual(p2.count, 24, "Pencil('large', 30, 'wood', 24, False, 0.5).count")
            self.assertEqual(p2.mechanical, False, "Pencil('large', 30, 'wood', 24, False, 0.5).mechancial")
            self.assertEqual(p2.lead, None, "Pencil('large', 30, 'wood', 24, False, 0.5).lead")
            self.assertEqual(p2.__str__(), "size: large, cost: 30, material: wood, count: 24, mechanical: False, lead: None", "Pencil('large', 30, 'wood', 24, False, 0.5).__str__()")

    myTests().main()

.. parsonsprob:: re_mixed10
    :numbered: left
    :practice: T
    :adaptive:

    Create a class called ``FederalCourts`` with a ``constructor`` that takes in parameters ``size`` and ``location``, a ``__str__`` method 
    that returns ``"size: (size), location: (location)"``, and a method called ``judgment`` that takes in a string parameter ``decision``. 
    If ``decision`` is ``'guilty'``, return ``'Conviction needed'``. If ``decision`` is ``'not guilty'``, return ``'Conviction not needed'``. 
    Otherwise, return ``'Inconclusive'``. Next, create a class called ``SupremeCourt`` with a ``constructor`` that inherits 
    from the ``FederalCourts`` constructor and additionally has a parameter ``leaning_party``, and a ``__str__`` method that returns ``"size: (size), location: (location), leaning_party: (leaning_party)"``. 
    Lastly, create a class called ``CourtsOfAppeals`` with a ``constructor`` that inherits from the ``FederalCourts`` 
    constructor and additionally has a parameter ``divisions``. Additionally, the ``CourtsOfAppeals`` class should have a ``__str__`` method that returns 
    ``"size: (size), location: (location), divisions: (divisions)"``. For example, ``FederalCourts(94, 'New York').__str__()`` should return ``"size: 94, location: New York"``,  
    ``CourtsOfAppeals(179, 'Pennsylvania', 23).divisions`` would be ``23``, and ``FederalCourts(94, 'New York').judgment('Not Guilty')`` would be ``"Conviction not needed"``.
    -----
    class FederalCourts:
    =====
        def __init__(self, size, location):
    =====
            self.size = size
    =====
            self.location = location
    =====    
        def __str__(self):
    =====
            return "size: " + str(self.size) + ", location: " + str(self.location)
    =====    
        def judgment(self, decision):
    =====
            if decision.lower() == 'guilty':
    =====
            if decision == 'Guilty'.lower(): #paired
    =====
                return 'Conviction needed'
    =====
            elif decision.lower() == 'not guilty':
    =====
            elif decision == 'Not Guilty'.lower(): #paired
    =====
                return 'Conviction not needed'
    =====
            else:
    =====
                return 'Inconclusive'
    =====
    class SupremeCourt(FederalCourts):
    =====
        def __init__(self, size, location, leaning_party):
    =====
            super().__init__(size, location)
    =====
            self.leaning_party = leaning_party
    =====    
        def __str__(self):
    =====
            return "size: " + str(self.size) + ", location: " + str(self.location) + ", leaning_party: " + str(self.leaning_party) 
    =====
    class CourtsOfAppeals(FederalCourts):
    =====
        def __init__(self, size, location, divisions):
    =====
            super().__init__(size, location)
    =====
            self.divisions = divisions
    =====    
        def __str__(self):
    =====
            return "size: " + str(self.size) + ", location: " + str(self.location) + ", divisions: " + str(self.divisions)

.. activecode:: re_mixed10_ac
    :autograde: unittest

    Write a class called ``FederalCourts`` with a ``constructor`` that takes in parameters ``size`` and ``location``, a ``__str__`` method 
    that returns ``"size: (size), location: (location)"``, and a method called ``judgment`` that takes in a string parameter ``decision``. 
    If ``decision`` is ``'guilty'``, return ``'Conviction needed'``. If ``decision`` is ``'not guilty'``, return ``'Conviction not needed'``. 
    Otherwise, return ``'Inconclusive'``. Next, create a class called ``SupremeCourt`` with a ``constructor`` that inherits 
    from the ``FederalCourts`` constructor and additionally has a parameter ``leaning_party``, and a ``__str__`` method that returns ``"size: (size), location: (location), leaning_party: (leaning_party)"``. 
    Lastly, create a class called ``CourtsOfAppeals`` with a ``constructor`` that inherits from the ``FederalCourts`` 
    constructor and additionally has a parameter ``divisions``. Additionally, the ``CourtsOfAppeals`` class should have a ``__str__`` method that returns 
    ``"size: (size), location: (location), divisions: (divisions)"``. For example, ``FederalCourts(94, 'New York').__str__()`` should return ``"size: 94, location: New York"``,  
    ``CourtsOfAppeals(179, 'Pennsylvania', 23).divisions`` would be ``23``, and ``FederalCourts(94, 'New York').judgment('Not Guilty')`` would be ``"Conviction not needed"``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            fc = FederalCourts(94, 'New York')
            sc = SupremeCourt(9, 'Washington DC', 'Republican')
            coa = CourtsOfAppeals(179, 'Pennsylvania', 23)

            self.assertEqual(fc.size, 94, "FederalCourts(94, 'New York').size")
            self.assertEqual(fc.location, 'New York', "FederalCourts(94, 'New York').location")
            self.assertEqual(fc.__str__(), "size: 94, location: New York", "FederalCourts(94, 'New York').__str__()")
            self.assertEqual(fc.judgment('Guilty'), 'Conviction needed', "FederalCourts(94, 'New York').judgment('Guilty')")
            self.assertEqual(fc.judgment('Not Guilty'), "Conviction not needed", "FederalCourts(94, 'New York').judgment('Not Guilty')")
            self.assertEqual(fc.judgment('DO NOT KNOW'), "Inconclusive", "FederalCourts(94, 'New York').judgment('DO NOT KNOW')")

            self.assertEqual(sc.size, 9, "SupremeCourt(9, 'Washington DC', 'Republican').size")
            self.assertEqual(sc.location, 'Washington DC', "SupremeCourt(9, 'Washington DC', 'Republican').location")
            self.assertEqual(sc.leaning_party, 'Republican', "SupremeCourt(9, 'Washington DC', 'Republican').leaning_party")
            self.assertEqual(sc.__str__(), "size: 9, location: Washington DC, leaning_party: Republican", "SupremeCourt(9, 'Washington DC', 'Republican').__str__()")

            self.assertEqual(coa.size, 179, "CourtsOfAppeals(179, 'Pennsylvania', 23).size")
            self.assertEqual(coa.location, 'Pennsylvania', "CourtsOfAppeals(179, 'Pennsylvania', 23).location")
            self.assertEqual(coa.divisions, 23, "CourtsOfAppeals(179, 'Pennsylvania', 23).divisions")
            self.assertEqual(coa.__str__(), "size: 179, location: Pennsylvania, divisions: 23", "CourtsOfAppeals(179, 'Pennsylvania', 23).__str__()")

    myTests().main()
