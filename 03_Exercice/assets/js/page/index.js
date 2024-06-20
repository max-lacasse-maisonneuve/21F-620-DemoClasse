const album1 = document.querySelector(".liste-albums .album:nth-child(1)");
const album2 = document.querySelector(".liste-albums .album:nth-child(2)");
const album3 = document.querySelector(".liste-albums .album:nth-child(3)");

function init() {
    album1.addEventListener("click", function () {
        mettreEnSurbrillance(album1);
    });

    album2.addEventListener("click", function () {
        mettreEnSurbrillance(album2);
    });

    album3.addEventListener("click", function () {
        mettreEnSurbrillance(album3);
    });

    album1.addEventListener("dblclick", function () {
        cacher(album1);
    });

    album2.addEventListener("dblclick", function () {
        cacher(album2);
    });

    album3.addEventListener("dblclick", function () {
        cacher(album3);
    });
}

function mettreEnSurbrillance(elementHTML) {
    elementHTML.style.border = "2px solid tomato";
}

function cacher(elementHTML) {
    elementHTML.style.display = "none";
}
// EXECUTION
init();
