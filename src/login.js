import './html/login.html';
import './sass/index.scss';
import { setCookie } from './js/cookie.js';

let buttonEl = document.querySelector('#button');
let inputEl = document.querySelector('#input');
let oldWindow = null;

buttonEl.addEventListener('click', () => {
    if (inputEl.value && oldWindow) {
        setCookie('uname', inputEl.value);
        oldWindow.postMessage('login', oldWindow.location.href);
    }
});

window.addEventListener('message', (event) => {
    let data = event.data;
    let origin = event.origin;
    if (origin = 'http://127.0.0.1:2333' && typeof data == 'string') {
        oldWindow = event.source;
    }
});