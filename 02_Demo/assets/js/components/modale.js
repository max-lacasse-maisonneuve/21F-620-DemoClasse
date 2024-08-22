//Variables et sélections HTML
const modale = document.querySelector(".modale-conteneur");
const bouton = document.querySelector(".fermer-modale");

// Fonctions
function init() {
    bouton.addEventListener("click", cacherModale);
    cacherModale();
}

//Fonction accessible à l'extérieur de ce fichier
function afficherModale() {
    modale.classList.remove("invisible");
}

//Fonction accessible à l'extérieur de ce fichier
function cacherModale() {
    modale.classList.add("invisible");
}

// Exécution
init();
