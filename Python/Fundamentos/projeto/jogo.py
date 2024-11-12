import random

# personagem: classe mae
# heroi: controlado pelo user
# inimigi: adversario do user


class Personagem:
    def __init__(self, nome, vida, nivel) -> None:
        self.__nome = nome
        self.__vida = vida
        self.__nivel = nivel

    def get_nome(self):
        return self.__nome

    def get_vida(self):
        return self.__vida

    def get_nivel(self):
        return self.__nivel

    def exibir_detalhes(self):
        return f"Nome: {self.get_nome()}.\nVida: {self.get_vida()}.\nNivel: {self.get_nivel()}."

    def receber_ataque(self, dano):
        self.__vida -= dano
        if self.__vida < 0:
            self.__vida = 0

    def ataque(self, alvo):
        dano = random.randint(self.get_nivel() * 2, self.get_nivel() * 4)
        alvo.receber_ataque(dano)
        print(f"{self.get_nome()} atacou {alvo.get_nome()} e causou {dano} de dano")


class Heroi(Personagem):
    def __init__(self, nome, vida, nivel, habilidade) -> None:
        super().__init__(nome, vida, nivel)
        self.__habilidade = habilidade

    def get_habilidade(self):
        return self.__habilidade

    def exibir_detalhes(self):
        return f"{super().exibir_detalhes()}\nHabilidade: {self.get_habilidade()}"

    def ataque_especial(self, alvo):
        dano = random.randint(self.get_nivel() * 5, self.get_nivel() * 8)
        alvo.receber_ataque(dano)
        print(
            f"{self.get_nome()} usou a habilidade especial {self.get_habilidade()} em {alvo.get_nome()} e causou {dano} de dano!"
        )


class Inimigo(Personagem):
    def __init__(self, nome, vida, nivel, tipo) -> None:
        super().__init__(nome, vida, nivel)
        self.__tipo = tipo

    def get_tipo(self):
        return self.__tipo

    def exibir_detalhes(self):
        return f"{super().exibir_detalhes()}\nTipo: {self.get_tipo()}"


class Jogo:
    """Classe orquestadora do jogo"""

    def __init__(self) -> None:
        self.heroi = Heroi(nome="Heroi", vida=100, nivel=10, habilidade="Visao")
        self.inimigo = Inimigo(nome="Morcego", vida=100, nivel=3, tipo="Voador")

    def iniciar_batalha(self):
        """Fazer a gestão da batalha em turnos"""
        print("Iniciando batalha")
        while self.heroi.get_vida() > 0 and self.inimigo.get_vida():
            print("\nDetalhes do personagem:")
            print(f"\nDetalhes do Heroi: {self.heroi.exibir_detalhes()}")
            print(f"\nDetalhes do Inimigo: {self.inimigo.exibir_detalhes()}")

            input("pressione Enter para atacar...")
            escolha = input("Escolha:\n 1 - Ataque Normal.\n 2 - Ataque Especial\n")

            if escolha == "1":
                self.heroi.ataque(self.inimigo)
            elif escolha == "2":
                self.heroi.ataque_especial(self.inimigo)
            else:
                print("Opção errada. Escolha novamente")

            if self.inimigo.get_vida() > 0:
                # inimigo ataca heroi
                self.inimigo.ataque(self.heroi)

        if self.heroi.get_vida() > 0:
            print(f"Parabens, voce venceu!")
        else:
            print(f"Voce perdeu")


# instancia do jogo
jogo = Jogo()
jogo.iniciar_batalha()
