// Variables
let formulaireValide = false;
const donnees = {};

// Éléments HTML
const formulaire = document.querySelector("#formulaire-principal");
const champs = formulaire.querySelectorAll("input, textarea,select");
const sections = formulaire.querySelectorAll("section[data-page]");

// - Boutons
const boutonsAvancer = formulaire.querySelectorAll("[data-direction='1']");
const boutonsReculer = formulaire.querySelectorAll("[data-direction='-1']");

// TODO: Voir CSS pour cacher les messages d'erreurs

//Fonctions
function init() {
    formulaire.addEventListener("submit", onSubmit);
    //TODO: Écouteurs événement pour les boutons de navigation

    champs.forEach(function (element) {
        element.addEventListener("change", onChangementChamp);
    });

    // Valider la première section au chargement de la page

    //TODO: Afficher la première section au chargement et cacher les autres
}

function onSubmit(evenement) {
    evenement.preventDefault();

    if (formulaireValide) {
        // formulaire.submit();
        // formulaire.reset();
    }
}

function onChangementChamp(evenement) {
    const declencheur = evenement.currentTarget;
    const type = declencheur.type;
    const name = declencheur.name;
    const value = declencheur.value;
    const checked = declencheur.checked;

    //Gestion des champs exceptions
    if (type == "checkbox") {
        //Activer le champs date
    } else if (name == "couleur-pref") {
        // Validation personnalisée
    }

    const estValide = false;
    // Validation de la section
    // Si le champs est valide
    if (estValide) {
        // Cacher les erreurs au besoin
        // - Modifier le résumé (Voir cours 11)
        // afficherResume(name, value);
    } else {
        // Si le champ est invalide, afficher les erreurs du champs
    }

    // Valider le reste de la section
    // const section = declencheur.closest("section[data-page]");
    // validerSection(section);
}

function validerChamp(champ) {
    // Affiche le message d'erreur du navigateur
    // Donne de la rétroaction en ajoutant ou enlevant une classe CSS invalide
    // Si valide, vérifie la section
    //Retourne si le champ est valide
}

function validerSection(section) {
    //On initialise un tableau vide
    const validations = [];

    //Trouve les champs de la section avec un attribut name

    //On vérifie chacun des champs et sa validité
    let sectionValide = false;

    //Affiche de la retroaction a l'utilisateur
    //On ajoute la classe invalide

    //On retourne un booleen indiquant si la section est valide ou non
}

function validerFormulaire() {
    //On valide chaque section
}

function afficherResumeCheckbox(nomChamp, estCoche) {
    const champResume = sectionResume.querySelector(`[data-name="${nomChamp}"]`);
    // console.log(champResume);
    if (champResume !== null) {
        let texte = estCoche ? "OUI" : "NON";
        champResume.textContent = texte;
    }
}

function afficherResume(nomChamp, valeur) {
    const champResume = sectionResume.querySelector(`[data-name="${nomChamp}"]`);
    // console.log(champResume);
    if (champResume !== null) {
        champResume.textContent = valeur;
    }
}

//=============================================
// AFFICHAGE et NAVIGATION Cours 10
//=============================================

function afficherSection() {
    toutCacher();
    sections[sectionActuelle].classList.remove("invisible");
    //TODO: Désactiver le bouton précédent si on est sur la première section
    //TODO: Désactiver le bouton suivant si on est sur la dernière section
}

function toutCacher() {
    sections.forEach(function (element) {
        element.classList.add("invisible");
    });
}

function avancerSection(evenement) {
    const declencheur = evenement.currentTarget;
    sectionActuelle++;

    if (sectionActuelle < sections.length) {
        afficherSection();
    }
}

//TODO: Fonction pour reculer à la section précédente

// Exécution
init();
