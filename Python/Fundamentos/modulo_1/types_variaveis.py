# Inteiro
numero_inteiro = 3
print("Inteiro: ", numero_inteiro)

# Numero real - ponto flutuante
numero_real = 3.0
print("Real com ponto flutuante: ", numero_real)

# type
print("tipo de variavel: ", type(numero_inteiro))

# soma +
soma = 1 + 1
print(soma)

# multiplicacao *
multiplicacao = 2 * 2
print("2 * 2 = ", multiplicacao)

# divisao /
divisao = 5 / 2
print("5 / 2 =", divisao)

# divisao interia //
divisao_inteira = 5 // 2
print("5 / 2 =", divisao_inteira)

# converter de float para int e int par float
print("Valor em inteiro", int(divisao))
print("valor para float", float(soma))


# modulo %
modulo = 5 % 2
print("Modulo", modulo)


####

# Declaracao de variaveis string

nome_completo = "Bruno Dias"
nome_completo_aspas = """Bruno \
Dias
"""
nome_completo_quebra = "Bruno \
    Dias"

nome = "Bruno"
sobrenome = "Dias"


# Formatação
print("nome:", nome)  # coloca-se automaticamente espaco depois dos 2 postos ":"
print("nome:" + nome_completo)
print(nome, sobrenome)
print(nome + sobrenome)
print("%s %s" % (nome, sobrenome))
print(f"Nome complento: {nome}, {sobrenome}")
print("Nome complento: {} {}".format(nome, sobrenome))
