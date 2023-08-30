
let students = [
    {
        name: "Alexandre",
        noteOne: 10,
        noteTwo: 4
    },
    {
        name: "Diego",
        noteOne: 4,
        noteTwo: 6
    },
    {
        name: "Guilherme",
        noteOne: 6,
        noteTwo: 5
    },
    {
        name: "Antonieta",
        noteOne: 5,
        noteTwo: 8
    },
    {
        name: "Rafaela",
        noteOne: 1,
        noteTwo: 9
    },
]

const average = (notas) => {
    console.log(typeof(notas))
    for (let nota of notas) {
        let mediaAluno = nota.noteOne + nota.noteTwo / 2;
        mediaAluno >= 7 ? alert(`A média do aluno ${nota.name} é de ${mediaAluno}\nparabens voce passou`) :
            alert(`A média do aluno ${nota.name} é de ${mediaAluno}\nNão foi desta vez`);
    }
}

average(students)