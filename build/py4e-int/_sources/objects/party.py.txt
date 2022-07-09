class PartyAnimal:

    def __init__(self, nam):
        self.name = nam
        print(self.name,'constructed')

    def party(self, x) :
        self.x = x
        self.x = self.x + 1
        print(self.name,'party count',self.x)
