window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.burger-menu')
    let hamburger = document.querySelector('.hamburger')

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('burger-menu--active');
        hamburger.classList.toggle('is-active');
    });
})

function checkHeader() {
    let scrollPosition = 0
    scrollPosition = window.pageYOffset

    if (scrollPosition > 0) {
        document.querySelector('header').classList.add('box-shadow')
    } else {
        document.querySelector('header').classList.remove('box-shadow')
    }
}

window.onload = checkHeader
window.onscroll = _.debounce(checkHeader, 0)