import './html/login.html';
import './sass/index.scss';

let buttonEl = document.querySelector('#button');
let inputEl = document.querySelector('#input');
let oldWindow = null;

buttonEl.addEventListener('click', () => {
    if (inputEl.value && oldWindow) {
        oldWindow.postMessage(inputEl.value, oldWindow.location.href);
    }
});

window.addEventListener('message', (event) => {
    let data = event.data;
    let origin = event.origin;
    if (origin = 'http://127.0.0.1:2333' && typeof data == 'string') {
        oldWindow = event.source;
    }
});