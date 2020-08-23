setTimeout(function () {
    document.getElementById("rev").play();
    rev.volume = 0.1;
}, 0)

setTimeout(function () {
    document.getElementById("honk").play();
    honk.volume = 0.2;
}, 2500)

const menuButton = document.querySelector('.menuButton');
let menuOpen = false;
menuButton.addEventListener('click', () => {
    if (!menuOpen) {
        menuButton.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menuOpen = false;
    }
})
