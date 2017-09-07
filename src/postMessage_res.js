import './html/postMessage_res.html';

let messageEl = document.querySelector('#message');

window.addEventListener('message', (event) => {
    let oldWindow = event.source;
    let data = event.data;
    let origin = event.origin;
    if (origin = 'http://127.0.0.1:2333' && typeof data == 'string') {
        messageEl.innerHTML = data;
        oldWindow.postMessage('i got it', oldWindow.location.href);
    }
});