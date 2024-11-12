# classe
class Pessoa:
    def __init__(self, nome, idade) -> None:
        self.nome = nome
        self.idade = idade

    def saudacao(self):
        return f"Olá eu sou {self.nome} e tenho {self.idade} anos."


# Objetos
pessoa1 = Pessoa("Bruno", 23)

print(pessoa1.nome, pessoa1.idade)

message1 = pessoa1.saudacao()
print(message1)


pessoa2 = Pessoa("Leandro", 26)
print(pessoa2.saudacao())
