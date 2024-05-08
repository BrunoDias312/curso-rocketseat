



/*
    capturar 2 numeros e fazer as operações matematicas
    de soma, subtração, multiplicação, divisao e resto da divisao.
    e para cada operacao, mostrar um alerta com o resultado.
*/

let fisrtNumber = parseInt(prompt('Digite o primeiro numero'))
let secondNumber = prompt('Digite o segundo numero')

secondNumber = Number(secondNumber)

const sum     = fisrtNumber + secondNumber;
const sub     = fisrtNumber - secondNumber;
const mult    = fisrtNumber * secondNumber;
const div     = fisrtNumber / secondNumber;
const restDiv = fisrtNumber % secondNumber;

alert('soma ' + sum)
alert('subtração ' + sub)
alert('mult ' + mult)
alert('divisao ' + div)
alert('Resto da divisao ' + restDiv)