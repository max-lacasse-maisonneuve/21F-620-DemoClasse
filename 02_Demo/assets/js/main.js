// // const navigation = document.querySelector("#nav-principale");
// const navigation = document.getElementById("nav-principale");

// const li = navigation.querySelector("li");

// const enfantsNavigation = navigation.children;

// const premierEnfantNavListe = enfantsNavigation[1].firstElementChild;
// let navListe = enfantsNavigation[1];
// // console.log(navListe);

// for (let i = 0; i < navListe.children.length; i++) {
//     console.log(navListe.children[i]);
// }
// const mix = document.querySelectorAll("[href],h1,section");

// const button = document.querySelector('[type="button"]');
// console.log(button);
// const parentBouton = button.closest("main");
// console.log(parentBouton);

//Méthode 1
// let gabarit1 = `<div>allo</div>`;
// document.querySelector(".panier-achat").insertAdjacentHTML("beforeend", gabarit);
// let element = document.querySelector(".panier-achat").lastElementChild;
// element.addEventListener("click", function () {
//     console.log("click");
// });

//Méthode 2
// let gabarit = document.querySelector("template");
// let clone = gabarit.content.cloneNode(true);
// clone.querySelector("h1").textContent = "Nouveau texte";
// document.querySelector(".panier-achat").append(clone);

// clone.addEventListener("click", function () {
//     console.log("click");
// });

//Méthode 3 = Dernier recours
// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// h1.textContent = "nouveau texte";
// div.append(h1);
// document.querySelector(".panier-achat").append(div);

// document.querySelector(".panier-achat").lastElementChild.remove();

//Sélectionner avec attribut, id,classe
//Sélectionner avec ID

// Modifier la classe d'un élément, classList
// Modifier les attributs d'un élément. Href, src, alt, id.
// Attribut dataset

//=================================================================
//Fonction pour cloner un élément du panier achat
//Au double-clic, ajouter l'élément au panier achat
//Sélectionner l'élément et supprimer au survol

//==== Éléments HTML
const panierAchat = document.querySelector(".panier-achat");
const gabarit = document.querySelector("template");
const button = document.getElementById("bouton-ajout");

//=== Fonctions
function initialiser() {
    button.addEventListener("click", clonerElement);
    let boutonInput = document.querySelector("input");
    boutonInput.value = "Nouveau texte";
}

function clonerElement() {
    let clone = gabarit.content.cloneNode(true);
    panierAchat.append(clone);
    let element = panierAchat.lastElementChild;

    element.addEventListener("mouseenter", function () {
        // element.remove();
        element.classList.add("selection");
    });

    element.addEventListener("mouseleave", function () {
        element.classList.remove("selection");
    });
}

initialiser();
