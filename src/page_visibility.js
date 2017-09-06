import './html/page_visibility.html';

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = 'come back please~';
    } else {
        document.title = 'here';
    }
    console.log('document.hidden：' + document.hidden);
    console.log('document.visibilityState：' + document.visibilityState);
})