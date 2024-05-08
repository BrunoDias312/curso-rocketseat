
// Capture 10 items para compor a lista de um supermecado. 

// Apos capturar os 10 items, imprima-os, separando por virgula.

let items = [];

for (let item = 1; item <= 10; item++) {
    let itemName = prompt("Digite o item " + item)
    items[item] = itemName
}

alert(items)
