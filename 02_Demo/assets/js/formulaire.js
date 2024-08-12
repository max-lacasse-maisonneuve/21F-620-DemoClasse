// Variables
let formulaireValide = false;

// Éléments HTML
const formulaire = document.querySelector("#formulaire-principal");
const champs = formulaire.querySelectorAll("input, textarea,select");
const sections = formulaire.querySelectorAll("section[data-page]");
const sectionResume = formulaire.querySelector(".resume");

// - Boutons
const boutonsAvancer = formulaire.querySelectorAll("[data-direction='1']");
const boutonsReculer = formulaire.querySelectorAll("[data-direction='-1']");

// TODO: Voir CSS pour cacher les messages d'erreurs

// Fonctions
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

    //Gestion des champs avec exceptions
    if (type == "checkbox") {
        //Activer le champs date
    } else if (name == "couleur-pref") {
        // Validation personnalisée
    }

    const estValide = false;
    // Validation du champ

    if (estValide) {
        // Cacher les erreurs au besoin
        // Modifier le résumé (Voir cours 11)
        // Récupérer la section parent
        // On vérifie la section et on active le bouton suivant au besoin
    }
}

//=============================================
// VALIDATION - Cours 12
//=============================================

function validerChamp(champ) {
    // Affiche le message d'erreur du navigateur
    // Donne de la rétroaction en ajoutant ou enlevant une classe CSS invalide
    //
    // Retourne booleen si le champ est valide
}

function validerSection(section) {
    // On initialise un tableau vide
    const validations = [];

    // Trouve les champs de la section avec un attribut name

    // On vérifie chacun des champs et sa validité

    // On active ou non la navigation vers la section suivante
    // On ajoute la classe invalide à la section
}

function validerFormulaire() {
    // On valide chaque section
    // On retourne un booleen
}

//=============================================
// AFFICHAGE DE LA SECTION RESUME - Cours 11
//=============================================

function afficherResume(nomChamp, valeur) {
    const champResume = sectionResume.querySelector(`[data-name="${nomChamp}"]`);
    // console.log(champResume);
    if (champResume !== null) {
        champResume.textContent = valeur;
    }
}

//=============================================
// AFFICHAGE DES SECTIONS et NAVIGATION - Cours 10
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

//TODO: Créer une fonction pour reculer à la section précédente

// Exécution
init();
