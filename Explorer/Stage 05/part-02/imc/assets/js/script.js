import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { imc, notNumber } from './utils.js'

// Variaveis - Variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//alert-error

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(weight)

    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return;
    }
    AlertError.close()

    const result = imc(weight, height)

    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

inputWeight.oninput = () => AlertError.close;
inputHeight.oninput = () => AlertError.close;