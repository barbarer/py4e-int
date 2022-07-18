Group Work - Working with Multiple Classes
-----------------------------------------------------------------


It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.


.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Define a parent and child class.
* Predict the output from code with inheritance.
* Describe how a child can override an inherited method.
* Call the parent constructor


Inheritance
======================================================

One class can inherit attributes and behavior from another class. The class that is inherited from
is called the **parent** or **base class**.  The one that is inheriting is called the **child** or **derived class**.

.. fillintheblank:: mult_class_emp_second_output

    What is the last thing that the following code will print?

    - :MA: It prints the initials of the object p2.
      :BE: Not quite. These are the initials of the object p.
      :.*: What does the initials method return?

.. activecode:: mult_class_person_and_employee
    :caption: A Person class and an Employee class

    Run the following code
    ~~~~
    class Person:
        def __init__(self, first, last):
            self.first = first
            self.last = last

        def __str__(self):
            return("name: " + self.first + " " + self.last)

        def initials(self):
            return (self.first[0] + self.last[0])

    class Employee(Person):
        def __init__(self, first, last, id):
            super().__init__(first, last)
            self.id = id

    def main():
        p = Person("Barbara", "Ericson")
        print(p)
        print(p.initials())
        p2 = Employee("Malik", "Abra", 7)
        print(p2)
        print(p2.initials())

    main()

Look at the classes defined above. Then answer the following questions.


.. fillintheblank:: mult_class_emp_num_attrs

    How many attributes does an employee object have?

    - :3|three|Three: Good job!  It inherits two from Person and has an id
      :1|one|One: Not quite.  It has an id, but inherits some as well
      :.*: The attributes are initialized in the __init__ method

.. fillintheblank:: mult_class_emp_initials

    Which class defines the initials method?

    - :Person: Yes, it is defined in the Person class and the Employee class inherits it.
      :Employee: Not quite.  Where is the method defined?
      :.*: Which class is it inside of?

.. fillintheblank:: mult_class_emp_child

    Which class is the child class?

    - :Employee: Yes, Employee is the child class.
      :Person: No, this is the parent class.
      :.*: Which class inherits from another class?

.. dragndrop:: mult_class_first_class_dnd
    :practice: T
    :feedback: Read the chapter on strings and try again
    :match_1: super().__init__(first, last)|||Passes the first and last name to the parent class's __init__ method
    :match_2: class Employee(Person):|||Defines a new class that inherits from the Person class
    :match_3: def __init__(self, first, last):|||Defines an initializer (constructor) method
    :match_4: def __str__(self):|||Defines a method that is called when you print an object of this class

    Drag the code to the description of what it does

.. parsonsprob:: mult_class_car_sports_car_pp_v3
   :numbered: left
   :adaptive:
   :practice: T
   :order: 2, 10, 9, 1, 5, 0, 8, 3, 4, 6, 7

   Drag the blocks from the left and put them in the correct order on the right to define two classes: ``Car`` and ``SportsCar`` that inherits from ``Car``. Add an ``__init__`` method to the ``Car`` class that takes a ``make`` and sets the current object's ``make``.  Add a ``__str__`` method to the ``Car`` class and return a string with the ``make``.  Add an ``__init__`` method to the ``SportsCar`` class that calls the parent class ``__init__`` method.
   -----
   class Car:
   =====
       def __init__(self, make):
   =====
           self.make = make
   =====
       def __str__(self):
   =====
       def __str__(): #paired
   =====
           return "Car with make: " + self.make
   =====
   class SportsCar(Car):
   =====
   class SportsCar extends Car: #paired
   =====
       def __init__(self, make):
   =====
           super().__init__(make)
   =====
           super().__init__(self, make) #paired




Look at the code below and answer the following questions.

.. fillintheblank:: mult_class_greeter_first_line

    What is the first thing that the following code will print?

    - :Good Morning: It prints the default value of the message in Greeter.
      :.*: What does message get set to by default in __init__?


.. fillintheblank:: mult_class_greeter_last_line

    What is the last thing that the following code will print?

    - :Go Away: It prints the value of the message after the Grump is initialized.
      :.*: What does the message get set to in the Grump __init__ method?


.. activecode:: mult_class_greeter_grumpr
    :caption: A Greeter class and a Grump

    Run the following code
    ~~~~
    class Greeter:

        def __init__(self, message = "Good Morning"):
            self.message = message

        def greet(self):
            print(self.message)

    class Grump(Greeter):

        def __init__(self):
            super().__init__("Go Away")

    def main():
        g1 = Greeter()
        g1.greet()
        print(g1)
        g2 = Grump()
        g2.greet()
        print(g2)

    main()


.. mchoice:: mult_class_no_str_method
    :practice: T
    :answer_a: You get an error
    :answer_b: It prints None
    :answer_c: It prints the type of the object (the class name)
    :answer_d: It prints the variable name
    :correct: c
    :feedback_a: It won't cause an error
    :feedback_b: It doesn't print None
    :feedback_c: It prints the type of the object (the class name)
    :feedback_d: It does not print the variable name

    What happens when a class doesn't have a __str__ method and you print an object?

Modify the code above to add a __str__ method to the Greeter class that returns the self.message and run the code again.

Overriding an Inherited Method
======================================================

The child class can override an inherited method.  This means it provides the same method name and parameter list as an inherited method.

.. fillintheblank:: mult_class_student_first_fitb

    What is the first thing that will be printed when the code runs below?

    - :Pizza: It prints returned string from favorite_food on a Student object.
      :.*: What does Student's favorite_food return?

.. fillintheblank:: mult_class_student_last_fitb

    What is the last thing that will be printed when the code runs below?

    - :Sushi: It prints returned string from favorite_food on a GradStudent object.
      :.*: What does GradStudent's favorite_food return?

.. activecode:: mult_class_override_inherited
    :caption: A Student class and a GradStudent class

    Run the following code
    ~~~~
    class Student:

        def __init__(self, name):
            self.name = name

        def favorite_food(self):
            return "Pizza"

    class GradStudent(Student):

        def __init__(self, name):
            super().__init__(name)

        def favorite_food(self):
            return "Sushi"

    def main():
        s1 = Student("Tiara")
        s2 = GradStudent("Carl")
        print(s1.favorite_food())
        print(s2.favorite_food())

    main()

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: mult_classes_groupsub
   :limit: 3
