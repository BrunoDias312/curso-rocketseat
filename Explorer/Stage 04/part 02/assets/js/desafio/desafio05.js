let result = Number(prompt("advinhe o numero que estou pensando? Esta entre 0 e 10"))
const randomNumber  = Math.ceil(Math.random() * 10)// Pra gerar number aleatorios
// ceil para arredondar o numero
const match = Number(result) == randomNumber;

console.log(result, randomNumber, match)

let xAttempts = 1;

while(result != randomNumber) {
    result = prompt("erro, tente novamente: ")
    xAttempts++;
}

alert("parabens, acertou em " + xAttempts + " tentativas,s o numero que pensei foi " + randomNumber)