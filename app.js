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

let menuToggle = document.querySelector("#menu-toggle");
let menu = document.querySelector("#menu");

menuToggle.addEventListener("click", function (event) {
    var menuOpen = menu.classList.contains("active");
    var newMenuOpenStatus = !menuOpen;

    menuToggle.setAttribute("aria-expanded", newMenuOpenStatus);
    menu.classList.toggle("active");
});

menuToggle.addEventListener("click", function (event) {
    let menuOpen = menu.checked;

    if (menuOpen) {
        menu.checked = false;
        menuToggle.setAttribute("aria-expanded", false);
    } else {
        menu.checked = true;
        menuToggle.setAttribute("aria-expanded", true);
    }
});

