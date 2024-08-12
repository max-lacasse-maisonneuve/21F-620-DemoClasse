// Variables
let formulaireValide = false;
const donnees = {};

// Éléments HTML
const formulaire = document.querySelector("#formulaire-principal");
const champs = formulaire.querySelectorAll("input, textarea,select");
const sections = formulaire.querySelectorAll("section[data-page]");

// TODO: Voir CSS pour cacher les messages d'erreurs

//Fonctions
function init() {
    formulaire.addEventListener("submit", onSubmit);

    champs.forEach(function (element) {
        element.addEventListener("change", onChangementChamp);
    });

    // Valider la première section au chargement de la page
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

// Exécution
init();
