const header = document.getElementById('header');

window.onscroll = function () {
    if (window.scrollY != 0) {
        header.classList.add('act');
    } else {
        header.classList.remove('act');
    }
}