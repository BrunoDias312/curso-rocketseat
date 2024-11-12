class Animal:
    def __init__(self, nome):
        self.nome = nome

    def andar(self):
        print(f"O animal {self.nome} andou")

    def emitir_som(self):
        pass


class Cachorro(Animal):
    def emitir_som(self):
        return "Au Au"


class Gato(Animal):
    def emitir_som(self):
        return "miau miau"


# exemplo de polimorfismo
dog = Cachorro(nome="Rex")
gato = Gato(nome="Poliana")

animais = [dog, gato]

for animal in animais:
    print(f"{animal.nome}, faz {animal.emitir_som()}")


## exemplo de encapsulamento
class ContaBancaria:
    def __init__(self, saldo) -> None:
        self.__saldo = saldo  # atributo prinvado usando o __ antes da variaveis

    def depositar(self, valor):
        if valor > 0:
            self.__saldo += valor

    def sacar(self, valor):
        if valor > 0 and valor <= self.__saldo:
            self.__saldo -= valor
        else:
            print("Valor solicitado indisponivel")

    def consultar_saldo(self):
        return self.__saldo


conta = ContaBancaria(saldo=1000)

print(f"saldo: {conta.consultar_saldo()}")

conta.depositar(200)
print(f"saldo: {conta.consultar_saldo()}")
conta.sacar(100)
print(f"saldo: {conta.consultar_saldo()}")
conta.depositar(-200)
print(f"saldo: {conta.consultar_saldo()}")
