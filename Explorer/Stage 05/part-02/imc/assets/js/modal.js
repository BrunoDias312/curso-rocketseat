export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open');
    },
    close() {
        Modal.wrapper.classList.remove('open')
        console.log('jds')
    },
}


Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown (event) {
    console.log(event.key);
    if (event.key === "Enter" || event.key == " ") {
        Modal.close()
    }
}