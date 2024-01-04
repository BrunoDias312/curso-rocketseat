import state from './state.js'
import * as timer from './timer.js'

export function toggleRunning () {
    console.log('toggleRunning');
    // state.isRunning = !state.isRunning
    state.isRunning = document.documentElement.classList.toggle('running'); // fazer isso nao apenas economiza codigo
    //como tambem ele retorna true e false dependendo do que aconteceu, se ele tirou ou colocou o running.
    timer.countdown()
}

export function reset() {
    console.log('reset');
    state.isRunning = false;
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function set() {
    console.log('set');
}

export function stop() {
    console.log('stop');
}

export function toggleMusic() {
    console.log('toggleMusic');
    state.isMute = document.documentElement.classList.toggle('music-on')
}
