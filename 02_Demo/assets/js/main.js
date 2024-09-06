// Variables
let sectionActuelle = 0;
let estValide = false;

// Éléments HTML
// - Formulaire
const formulaire = document.querySelector("form");

// - Sections
const sections = formulaire.querySelectorAll("section");

// - Boutons
const boutonsAvancer = formulaire.querySelectorAll("[data-direction='1']");
const boutonsReculer = formulaire.querySelectorAll("[data-direction='-1']");

//Fonctions
function init() {
    boutonsAvancer.forEach(function (bouton) {
        bouton.addEventListener("click", avancerSection);
    });

    formulaire.addEventListener("submit", onSubmit);
    toutCacher();
    afficherSection();
}

function onSubmit(evenement) {
    evenement.preventDefault();

    // console.log("submit", evenement);
    //TODO: Valider le formulaire

    if (estValide == true) {
        formulaire.submit();
    }
}

//Désactiver le bouton précédent si on est sur la première section
//Désactiver le bouton suivant si on est sur la dernière section
function afficherSection() {
    toutCacher();
    sections[sectionActuelle].classList.remove("invisible");
}

function test(paramTest, evenement) {
    const declencheur = evenement.currentTarget;
    declencheur.classList.add("invisible");
    console.log(declencheur);
    console.log(paramTest);
}

function toutCacher() {
    sections.forEach(function (element) {
        element.classList.add("invisible");
    });
}

function avancerSection(evenement) {
    const declencheur = evenement.currentTarget;
    sectionActuelle++;
    // if(sectionActuelle >= sections.length){
    //     return;
    // }

    if (sectionActuelle < sections.length) {
        afficherSection();
    }
}

function reculerSection() {}

// Exécution
init();
