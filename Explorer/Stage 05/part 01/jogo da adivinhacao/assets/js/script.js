

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 0;
console.log(randomNumber)


let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")

//Fucao callback
function handleTryClick(event) {
    event.preventDefault();  // nao faca o padrao deste evento

    const inputNumber = document.querySelector("#inputNumber");
    xAttempts++

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        document.querySelector(".screen2 h2").innerText = `Voce acertou em ${xAttempts} tentativa.`;
    }

    inputNumber.value = ""
}

// Eventos
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', () => {
    xAttempts = 0

    screen1.classList.remove("hide");
    screen2.classList.add("hide");

})

// document.addEventListener('keydown', function (e) {
//     if (e.key == "Enter") {
//         handleResetClick()
//     }
// })

function handleResetClick() {
    toggleScreen()
    xAttempts = 1;
}

function toggleScreen() {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");
}