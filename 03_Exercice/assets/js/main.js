// Variables

// Éléments HTML
const gabarit = document.querySelector("template");
const champNombre = document.querySelector('[type="number"]');
const sectionResume = document.querySelector(".resume");

// Fonctions
/**
 * Fonction appelée au chargement de la page
 */
function initialiser() {
    //On ajoute un écouteur d'événement sur le champ de nombre
    //Lorsque la valeur change, on appelle la fonction changement
    champNombre.addEventListener("change", changement);

    //On crée un nombre d'éléments égal à la valeur du champ au chargement de la page
    for (let i = 0; i < champNombre.value; i++) {
        cloner(i);
    }
}

/**
 * Fonction appelée lorsqu'on change la valeur du champ de nombre
 * On vide la section de résumé
 * On crée un nombre d'éléments égal à la valeur du champ
 */
function changement() {
    const valeur = champNombre.value; //On récupère la valeur du champ
    sectionResume.innerHTML = ""; //On vide la section de résumé

    //On crée un nombre d'éléments égal à la valeur du champ
    for (let i = 0; i < valeur; i++) {
        cloner(i);
    }
}

/**
 * Fonction pour cloner un élément du panier achat
 * Au clic sur le bouton d'une boite, on supprime et on met à jour le nombre de boites dans le champ
 * @param {Number} index
 */
function cloner(index) {
    //On clone le gabarit
    //true permet de cloner les enfants
    let clone = gabarit.content.cloneNode(true);
    sectionResume.append(clone); // On ajoute le clone à la section de résumé

    //On récupère le dernier élément ajouté
    let element = sectionResume.lastElementChild;

    //On ajoute un écouteur d'événement sur le bouton de la boite
    let bouton = element.querySelector(".bouton");
    bouton.addEventListener("click", function () {
        //On supprime l'élément
        element.remove();

        //On met à jour le nombre de boites dans le champ
        let nombreRestant = sectionResume.children.length;
        champNombre.value = nombreRestant;
    });
}
// Exécution
initialiser();
