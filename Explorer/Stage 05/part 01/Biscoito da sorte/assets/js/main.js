import { phrases } from './phrases.js';

let actionImage = document.querySelector("#cookie");
let screenOne = document.querySelector(".screen1");
let screenTwo = document.querySelector(".screen2");
let closeButton = document.querySelector("#closeButton")

let title = document.querySelector('.area-text h2')
let content = document.querySelector('.area-text p')
let author = document.querySelector('.area-text span')

let random;

function openCookie() {
    screenOne.classList.add('hidden');
    screenTwo.classList.remove('hidden');

    // random
    random = Math.round(Math.random() * 10);

    title.innerText = `${phrases[random].title}`
    content.innerText = `${phrases[random].phrase}`
    author.innerText = `${phrases[random].author}`
}

function closeCookie() {
    screenOne.classList.remove('hidden')
    screenTwo.classList.add('hidden')
}

actionImage.addEventListener('click', () => openCookie())
closeButton.addEventListener('click', () => closeCookie())

