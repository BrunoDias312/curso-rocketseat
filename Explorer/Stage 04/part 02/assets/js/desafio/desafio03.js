
/*
    se o aluno nao passou no bimestre, motiva o aluno a dar seu melhor na prova
      de recuperação.
    Em ambos os casas, mostre uma mensagem com o nome do aluno e a nota;s
*/

let student = prompt("Qual o nome do aluno? ")
let n1 = Number(prompt('nota aluno: '))
let n2 = Number(prompt('nota aluno: '))
let n3 = Number(prompt('nota aluno: '))

// fazer a media

let average = (n1 + n2 + n3) / 3;
average = average.toFixed(2)

let result = average >= 6;

if (result) {
    alert("aluno passou e sua media foi de " + average + ' pontos.')
} else {
    alert("aluno não passou e sua media foi de " + average + ' pontos.')
}