from typing import Any

# Decodificadores podem ser usados para validacoes
# ex:
# ao entrar no sistema devemos primeiro verificar se o user esta logado e entao liberar ou nao acesso


def meu_decorador(func):
    def wrapper():
        print("antes da funcao")
        func()
        print("depois da funcao")

    return wrapper


@meu_decorador
def minha_funcao():
    print("minha funcao")


minha_funcao()


class MeuDecoradorDeClasse:
    def __init__(self, func) -> None:
        self.func = func

    def __call__(self) -> Any:
        print("Antes da funcão ser chamada.")
        self.func()
        print("Depois da funcao")


@MeuDecoradorDeClasse
def segunda_funcao():
    print("segunda funcao")


segunda_funcao()
