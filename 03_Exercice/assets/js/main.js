const artistes = ["Pink Floyd", "The Beatles", "The Rolling Stones", "The Who", "The Doors"];

//====Variables
const albumsHTML = document.querySelectorAll(".album__artiste"); //Contient les paragraphes à modifier
const boutonHTML = document.querySelector(".filtre");

//====Fonctions
/**
 * Fonction appelée au chargement de la page.
 */
function initialiser() {
    afficherAlbums(artistes, albumsHTML);

    //Au clic, on trie la liste des albums et on réaffiche
    boutonHTML.addEventListener("click", trier);
}

/**
 * Fonction qui trie un tableau d'artiste et réaffiche les éléments triés.
 */
function trier() {
    const copieTableau = [...artistes];

    copieTableau.sort();
    afficherAlbums(copieTableau, albumsHTML);
}

/**
 * Fonction qui modifie le nom de chaque élément HTML
 * @param {Array} tableauAlbums
 * @param {NodeList} elementsHTML
 */
function afficherAlbums(tableauAlbums, elementsHTML) {
    for (let i = 0; i < tableauAlbums.length; i++) {
        let nomAlbum = tableauAlbums[i];
        let albumHTML = elementsHTML[i];
        modifierNom(albumHTML, nomAlbum);
    }
}

/**
 * Fonction qui modifie le texte d'un élément
 * @param {elementHTML} elementHTML
 * @param {String} texteAModifier
 */
function modifierNom(elementHTML, texteAModifier) {
    elementHTML.textContent = texteAModifier;
}

// Exécution
initialiser();
