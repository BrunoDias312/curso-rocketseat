//variaveis
let itens = [];
let road = true

const insertItems = () => {
    itens.push(prompt('Nome do Item'));
    return alert("Item cadastrado com sucesso!!!")
}

const listItems = () => {
    if (itens.length === 0) {
        alert("Não existem itens cadastrados")
    } else {
        const fullList = itens.join(', ')
        alert(`O items cadastrados são ${fullList}`)
    }
}

while (road) {
    let option = prompt(` Olá user! Digite o numero da opcao desejada
    \n1 - Cadastrar um item na lista
    \n2 - Mostrar itens cadastrados
    \n3 - Sair do programa
`);
    switch (Number(option)) {
        case 1:
            insertItems()
            break;
        case 2:
            listItems()
            break;
        case 3:
            road = false
            break;
        default:
            alert("valor invalido")
    }
}


