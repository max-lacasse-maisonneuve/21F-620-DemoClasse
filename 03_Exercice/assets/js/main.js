// Variables

// Éléments HTML
const infosBubble = document.querySelector(".infos-bubble");
const boiteInfo = document.querySelector(".infos");

// Fonctions
function initialiser() {
    boiteInfo.classList.add("invisible");
    infosBubble.addEventListener("mouseenter", function () {
        afficherInfos(true);
    });

    infosBubble.addEventListener("mouseleave", function () {
        afficherInfos(false);
    });
}

function afficherInfos(estVisible) {
    if (estVisible == true) {
        boiteInfo.classList.remove("invisible");
    } else {
        boiteInfo.classList.add("invisible");
    }

    //Une autre solution pourrait être d'utiliser toggle
    // boiteInfo.classList.toggle("invisible", estVisible == false);
}

// Exécution
initialiser();
