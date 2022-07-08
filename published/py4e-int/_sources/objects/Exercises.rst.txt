Multiple Choice Questions
--------------------------

.. mchoice:: inheritance_mchoice1
    :practice: T
    :answer_a: from party import PartyAnimal
    :answer_b: class CricketFan(PartyAnimal)
    :answer_c: an = PartyAnimal()
    :answer_d: CricketFan = PartyAnimal()
    :correct: b
    :feedback_a: This is a necessary  step to import the PartyAnimal class, but it does not define a class CricketFan that inherits from PartyAnimal
    :feedback_b: Correct! CricketFan inherits from PartyAnimal.
    :feedback_c: This only creates an instance of the PartyAnimal class called an.
    :feedback_d: This would create an instance of the PartyAnimal class called CricketFan.

    In which of the following does the ``CricketFan`` class correctly inherit from the ``PartyAnimal`` class?

.. mchoice:: objects_select_name
  :practice: T
  :answer_a: puppy = Dog("Jamie")
  :answer_b: dog = Dog("Jamie")
  :answer_c: jamie = Dog()
  :answer_d: pupper = new Dog("Jamie")
  :correct: d
  :feedback_a: This uses the constructor function to create an object with arguments.
  :feedback_b: The instance can have a similar name to the class. This uses the constructor function to create an object with arguments.
  :feedback_c: This is correct and does not have arguments.
  :feedback_d: The 'new' is incorrect

  Which of the following does **not** correctly create an object instance?

.. mchoice:: multipleinstances_code_output
  :practice: T
  :answer_a: Sally
  :answer_b: Louise
  :answer_c: Sally Louise
  :answer_d: person1
  :correct: a
  :feedback_a: This prints the value of the name attribute for person1.
  :feedback_b: 'Louise' is the 'name' of person2 but we are calling the person1 instance.
  :feedback_c: It only prints the value of name for one instance.
  :feedback_d: The output is not the name of the instance.

  What does the following code output?
  ::

    class People():

        def __init__(self, name):
          self.name = name

        def namePrint(self):
          print(self.name)

      person1 = People("Sally")
      person2 = People("Louise")
      person1.namePrint()

.. mchoice:: multipleinstances_mchoice1
    :practice: T
    :answer_a: person1 and person2 are two different instances of the People class.
    :answer_b: The __init__ method is used to set initial values for attributes.
    :answer_c: 'self' is not needed in def namePrint(self):
    :answer_d: person2 has a different value for 'name' than person1.
    :correct: c
    :feedback_a: Since two different objects were created, this is correct.
    :feedback_b: __init__ is an optional method in classes that is used to set initial values for objects.
    :feedback_c: 'self' is used to represent the current instance of the class.
    :feedback_d: Since they are two different instances, they cannot access each other and have different initial values too

    Which of the following statements is incorrect about the following code?
    ::

      class People():

        def __init__(self, name):
          self.name = name

        def namePrint(self):
          print(self.name)

      person1 = People("Sally")
      person2 = People("Louise")
      person1.namePrint()

.. mchoice:: objectoriented_subdividing
    :practice: T
    :answer_a: One of the benefits of object-oriented programming is that it can hide complexity.
    :answer_b: A class contains functions as well as the data that is used by those functions.
    :answer_c: Constructor methods are required to initialize an object and destructor methods are required to destroy the
               object when no longer required.
    :answer_d: A powerful feature of object-oriented programming is the ability to create a new class by extending an existing class.
    :correct: c
    :feedback_a: This is true, while using an object, we need to know how to use the object class but
                 not how it works internally.
    :feedback_b: This is true  as an class can contain functions as well as data that is used by those functions.
    :feedback_c: This is false, a constructor is optional can be used to set initial values for an object and python automatically
                 destroys any object if its reference count changes to a zero without needing a destructor.
    :feedback_d: This is true, we can extend a 'parent' class to create a new 'child' class and the new class has access to its functions
                 and can override them if needed.

    Which of the following statements is **not** true about object-oriented programming?


.. mchoice:: objectoriented_keyword
    :practice: T
    :answer_a: class
    :answer_b: object
    :answer_c: Class
    :answer_d: instance
    :correct: a
    :feedback_a: The class keyword defines the data that is in an object of a class and the functions that can be called on an object of the class.
    :feedback_b: An object is created using this template.
    :feedback_c: The keyword is case-sensitive
    :feedback_d: An instance is a single occurrence of an object created when the object is initialized.

    The _________ keyword defines a template indicating the data that will be in an object of the class and the functions that can be called on an object of the class.

.. mchoice:: word_output
    :practice: T
    :answer_a: class
    :answer_b: def
    :answer_c: self
    :answer_d: init
    :correct: c
    :feedback_a: 'class' is a keyword that defines the template for objects of the class.
    :feedback_b: 'def' is used to define a function
    :feedback_c: 'self' is not a keyword, but by convention is used to refer to the current object
    :feedback_d: 'init' is not a keyword, but the __init__ method is created to initialize class variables.

    _________ is not a keyword, but by convention it is used to refer to the current instance (object) of a class.



.. mchoice:: object_oriented_output
    :practice: T
    :answer_a: Grass type pokemon name is Bulbasaur
               Pokemon name is Charizard and type is Fire
    :answer_b: Pokemon name is Bulbasaur and type is Grass
               Pokemon name is Charizard and type is Fire
    :answer_c: Grass type pokemon name is Bulbasaur
               Grass type pokemon name is Charizard
    :answer_d: Error because the extending class has a stringPokemon() function
               which already exists.
    :correct: a
    :feedback_a: A child class can inherit functions from parent class and also override them.
    :feedback_b: The stringPokemon() functions is changed inside the GrassType class.
    :feedback_c: The stringPokemon() functions is only changed for GrassType class but remains unchanged
                 in the original class.
    :feedback_d:  A class inherits functions from another class and override them in any way. Only the
                  constructor class cannot be changed.

    What is the output of the following code?

    ::

      class Pokemon():

          def __init__(self, name, type):
              self.name = name
              self.type = type

          def stringPokemon(self):
              print(f"Pokemon name is {self.name} and type is {self.type}")

      class GrassType(Pokemon):

          # overrides the stringPokemon() function on 'Pokemon' class
          def stringPokemon(self):
              print(f"Grass type pokemon name is {self.name}")

      poke1 = GrassType('Bulbasaur', 'Grass')
      poke1.stringPokemon
      poke1.stringPokemon()
      poke2 = Pokemon('Charizard', 'Fire')
      poke2.stringPokemon
      poke2.stringPokemon()

.. mchoice:: tf_object_oriented
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: The child class does not need access to the all the inner workings in parent class.
    :feedback_b: The child class knows how to use the parent class and its functions but not its
                 data and the inner workings. The "super" command can come in handy here.

    True or False? In order to extend a class, the new class should have access to all the data and inner workings of
    the parent class.

.. mchoice:: objects_correct
    :practice: T
    :answer_a: def __init__(title, author):
    :answer_b: def __init__(self, title, author):
    :answer_c: def __init__():
    :answer_d: __init__(self, title, author):
    :correct: b
    :feedback_a: Unless a class method is static, 'self' is explicitly used to represent current instance.
    :feedback_b: "self" is used to represent an instance of the given class and the parameters will be used to initialize variables.
    :feedback_c: At minimum, the "self" parameter is needed to represent an instance of the given class.
    :feedback_d: The reserved word "def" is necessary to define a method.

    Which of the following is the correct way to define an initializer  method?
