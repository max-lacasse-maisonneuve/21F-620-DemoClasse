// Fonctions
// - nom
// Parametres
// Retour

// ===== VARIABLES GLOBALES ET ELEMENTS HTML
let prenom = "Maxime";
// Ajouter un écouteur au clic sur les deux autres albums
const album1 = document.querySelector(".album");
const album2 = document.querySelector(".liste-albums .album:nth-child(2)");
const album3 = document.querySelector(".liste-albums .album:nth-child(3)");

// ====== FONCTIONS
//Cette fonction est appelée une fois au chargement de la page
function init() {
    afficherNom("Maxime", "Lacasse");

    album1.addEventListener("click", function () {
        mettreEnSurbrillance(album1);
    });

    album2.addEventListener("click", function () {
        mettreEnSurbrillance(album2);
    });

    album3.addEventListener("click", function () {
        mettreEnSurbrillance(album3);
    });
}
/**
 * Cette fonction calcule la somme entre plusieurs nombres
 * @param {Number} nombre1
 * @param {Number} nombre2
 * @param {Number} nombreOptionnel1
 * @param {Number} nombreOptionnel2
 * @returns {Number} La somme
 */
function calculerSomme(nombre1 = 10, nombre2 = 10, nombreOptionnel1 = 1, nombreOptionnel2 = 12) {
    const somme = nombre1 + nombre2;

    return somme;
}

// Créer une fonction qui formatte un prénom et un nom dans la même chaine
function formaterNom(prenom, nom) {
    // const nomFormat = prenom + " " + nom;
    const nomFormat = `${prenom} ${nom}`;

    return nomFormat;
}

// Créer une fonction qui affiche le nom formatté dans le header
function afficherNom(prenom, nom) {
    let nomComplet = formaterNom(prenom, nom);

    const titre = document.querySelector(".titre_nom-complet");
    titre.textContent = nomComplet;
}

function mettreEnSurbrillance(elementHTML) {
    elementHTML.style.border = "2px solid tomato";
}

// EXECUTION
init();

let resultat = calculerSomme(10, 1, 1); //resultat vaut 6
resultat = calculerSomme(resultat, 56);
resultat = calculerSomme(resultat, 4777);
