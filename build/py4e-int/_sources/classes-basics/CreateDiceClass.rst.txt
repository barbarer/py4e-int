Creating a Dice Class
--------------------------

Have you played a game where you used dice?  Let's create a ``Die`` class so that if we lose our physical dice we can still play. A die is one of a pair of dice.

.. shortanswer:: class_basics-dice-attributes

   What attributes (data) would an object of the Dice class need to know? What questions should you be able to ask about it?


.. shortanswer:: class_basics-dice-behaviors

   What behaviors (methods) would we expect a dice class to have?

We would expect to be able to roll a die and get the value from the last roll.  When we roll a dice we pick a random number from 1 to 6.
Let's store all the values that were rolled in a list, ``roll_history``. We will add each ``value`` rolled to the end of the ``roll_history`` list and return the ``value`` from the ``roll`` method.

.. activecode:: diceClass

    import random

    class Die:

        def __init__(self):
            """ Initialize the roll history """
            self.roll_history = []

        def __str__(self):
            return f"Last roll: {self.roll_history[-1]}"

        def roll(self):
            value = random.randint(1,6)
            self.roll_history.append(value)
            return value

    def main():
        my_die = Die()
        for i in range(10):
            print(my_die.roll())
