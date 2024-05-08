
const sum = (valueA, valueB) => {
    return valueA + valueB;
}

const sub = (valueA, valueB) => {
    return valueA - valueB;
}

const mult = (valueA, valueB) => {
    return valueA * valueB;
}

const div = (valueA, valueB) => {
    return valueA / valueB;
}

const restDiv = (valueA, valueB) => {
    return valueA % valueB;
}

const ifPair = (valueA, valueB) => {
    const sums = sum(valueA, valueB)
    if (sums % 2 === 0) {
        alert("A soma dos numeros digitado é par. " + sums)
    } else {
        alert("A soma dos numeros digitado é impar. " + sums)
    }
}

const ifIguals = (valueA, valueB) => {
    if (valueA === valueB) {
        alert("Os numeros digitados são iguais")
    } else {
        alert("Os numeros digitados são diferentes entre si.")
    }
}

const valueA = Number(prompt("Digite o primeiro valor:"))
const valueB = Number(prompt("Digite o segundo valor:"))

alert(`A soma dos valores é ${sum(valueA, valueB)}`)
alert(`A subtração dos valores é ${sub(valueA, valueB)}`)
alert(`A multiplicação dos valores é ${mult(valueA, valueB)}`)
alert(`A divisão dos valores é ${div(valueA, valueB)}`)
alert(`A resto da divisão dos valores é ${restDiv(valueA, valueB)}`)

ifPair(valueA, valueB)
ifIguals(valueA, valueB)
