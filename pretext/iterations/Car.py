import unittest
class Car:
    def __init__(self, make, model, color):
        self.make = make
        self.model = model
        self.color = color

    def set_model(self, model):
        self.model = model


class TestCar(unittest.TestCase):
    def setUp(self):
        self.c = Car("Ford", "Volt", "Blue")
    def test_set_model(self):
        self.assertEqual(self.c.model, "Volt")
        self.c.setModel("Focus")
        self.assertEqual(self.c.model, "Focus")
        
unittest.main()