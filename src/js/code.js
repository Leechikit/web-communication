let nickEl = document.querySelector('#nick');

window.addEventListener('message', (event) => {
    console.log(event.data);
    let data = event.data;
    let origin = event.origin;
    if (origin = 'http://127.0.0.1:2333' && typeof data == 'string') {
        nickEl.innerHTML = data;
    }
});

document.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName.toLowerCase() == 'a') {
        event.preventDefault();
        let newWinodw = window.open(event.target.href);
        newWinodw.addEventListener('load', () => {
            newWinodw.postMessage('open new window', event.target.href);
        });
    }
});