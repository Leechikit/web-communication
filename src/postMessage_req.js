import './html/postMessage_req.html';

let newWindow = null;
let buttonEl = document.querySelector('#button');
let inputEl = document.querySelector('#input');
let cpLock = false;
const responseUrl = 'http://127.0.0.1:2333/html/postMessage_res.html';

buttonEl.addEventListener('click', () => {
    newWindow = window.open(responseUrl, 'new window', 'height=400,width=400,left=200,top=200');
});

inputEl.addEventListener('compositionstart', () => {
    cpLock = true;
});

inputEl.addEventListener('compositionend', () => {
    cpLock = false;
});

inputEl.addEventListener('keyup', (event) => {
    if (!cpLock) {
        let target = event.target;
        newWindow.postMessage(target.value, responseUrl);
    }
});
