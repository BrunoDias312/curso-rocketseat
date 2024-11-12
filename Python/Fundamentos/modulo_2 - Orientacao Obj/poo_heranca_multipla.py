#


class Animal:
    def __init__(self, nome) -> None:
        self.nome = nome

    def emitir_som(self):
        pass


class Mamifero(Animal):
    def Amamentar(self):
        return f"{self.nome} esta amamentando."


class Ave(Animal):
    def voar(self):
        return f"{self.nome} esta voando"


class Morcego(Mamifero, Ave):
    def emitir_som(self):
        return f"Morcego emite som"


morcego = Morcego(nome="Batman")
print(f"nome: {morcego.nome}")
print(f"som do morcego: {morcego.emitir_som()}")
print(morcego.Amamentar())
