import { getCookie, removeCookie } from './cookie.js';
let nickEl = document.querySelector('#nick');
let logoutEl = document.querySelector('#logout');
let cookieName = getCookie('uname');
let newWindowArr = [];

cookieName && (nickEl.innerHTML = cookieName);

window.addEventListener('message', (event) => {
    let data = event.data;
    let origin = event.origin;
    if (origin = 'http://127.0.0.1:2333' && typeof data == 'string' && data == 'login') {
        nickEl.innerHTML = getCookie('uname');
        newWindowArr.forEach((item) => {
            item.window.postMessage('login', item.link);
        });
    }
});

document.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName.toLowerCase() == 'a' && event.target.getAttribute('target') == '_blank') {
        event.preventDefault();
        let newWinodw = window.open(event.target.href);
        newWindowArr.push({
            window: newWinodw,
            link: event.target.href
        });
        newWinodw.addEventListener('load', () => {
            newWinodw.postMessage('open new window', event.target.href);
        });
    }
});

logoutEl && logoutEl.addEventListener('click', (event) => {
    event.preventDefault();
    removeCookie('uname');
    nickEl.innerHTML = '用户名';
})

// window.addEventListener('focus', (event) => {
//     let cookieName = getCookie('uname');
//     cookieName && (nickEl.innerHTML = cookieName);
// })