# @classmethod
# @staticmethod


class MinhaClasse:
    valor = 10  # Atributo de classe

    def __init__(self, nome):
        self.nome = nome  # Atributo da instância

    # Requer uma instancia para ser chamada
    def metodo_instancia(self):
        return f"Método de instancia chamado para {self.nome}"

    @classmethod
    def metodo_classe(cls):
        return f"Metodo de classe chamado de valor {cls.valor}"

    @staticmethod
    def metodo_estatico():
        return "metodo estatico"


obj = MinhaClasse(nome="Classe exemplo")
print(obj.metodo_instancia())
print(MinhaClasse.valor)

# usando o classmethod nao precisamos de instancia para usar metodo de classe
# mas tem que utilizer o cls no metodo de classe para o python saber que é um metodo
# de classe
print(MinhaClasse.metodo_classe())
print(MinhaClasse.metodo_estatico())


class Carro:
    def __init__(self, marca, modelo, ano) -> None:
        self.marca = marca
        self.modelo = modelo
        self.ano = ano

    @classmethod
    def criar_carro(cls, configurancao):
        marca, modelo, ano = configurancao.split(",")
        return cls(marca, modelo, int(ano))


configuracao = "Toyota, Corolla, 2022"
carro1 = Carro.criar_carro(configurancao=configuracao)
print(f" marca: {carro1.marca}\n modelo: {carro1.modelo}\n ano: {carro1.ano}")


# sem precisar de instancia da classe
class Matematica:
    @staticmethod
    def somar(a, b):
        return a + b


print(Matematica.somar(10, 10))
