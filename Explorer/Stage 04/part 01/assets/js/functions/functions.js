


// function createPhrases() {
//     console.log('ola mundo')
// }

// createPhrases()


// const sum = function(a, b) {
//    console.log(a + b)
// }


// sum(1, 2)

// let subject;

// function createThink(subject) {
//     return subject;
// }

// console.log(createThink(subject))



// // texto

// let phrase = 'Eu quero viver la vida'
// let myArray = phrase.split(' ')

// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore)

// // para verificar se tem

// console.log(phrase.includes('vida')) // se existe -> true -- se nao existe --> false

// let myArray2 = new Array('a', 'b', 'v');
// console.log(myArray2)

// let word = "manipulação"
// console.log(Array.from(word))

let techs = [ "html", "css", "js"]

// adicionar no final
techs.push("node")

// adicionar no começo do array
techs.unshift("sql")

// remover do fim
techs.pop()

// remover do comeco
techs.shift()

// Pegar somente alguns elementos do array
console.log(techs.slice(1, 2)) //inicio / fim que dos itens que vai reteirar por posicao de inicio e fim.

// encontrar a posicao de um elemento no array 
let index = techs.indexOf('css')
console.log(index)
