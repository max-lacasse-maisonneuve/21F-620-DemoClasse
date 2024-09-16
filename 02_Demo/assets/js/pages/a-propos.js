import { init as initNavigation } from "../components/navigation.js";
import { init as initModale, afficherModale } from "../components/modale.js";
import Test from "../classes/Test.js";
import Carrousel from "../classes/Carrousel.js";
import ScrollAnimator from "../classes/ScrollAnimator.js";
let compteur = 0;
let header = document.querySelector("header");

function init() {
    initNavigation();

    let body = document.body;

    let navigation = document.querySelector("nav");
    let logo = navigation.querySelector("img");

    //permet d'enlever l'animation
    logo.addEventListener("animationend", function () {
        logo.classList.remove("anime");
    });

    logo.addEventListener("click", function () {
        logo.classList.add("anime");
    });
    // body.addEventListener("click", onClicElement);
    // header.addEventListener("dblclick", onClicElement);
    // navigation.addEventListener("click", onClicElement);
    // logo.addEventListener("click", onClicElement);

    // body.addEventListener("click", onClicElement, true);
    // header.addEventListener("click", onClicElement, true);
    // navigation.addEventListener("click", onClicElement, true);
    // logo.addEventListener("click", onClicElement, true);

    let carrouselConteneur = document.querySelector("[data-carrousel]");
    let tableauImages = ["assets/img/albums/aftermath.webp", "assets/img/albums/abbey_road.webp"];

    let carrousel = new Carrousel(carrouselConteneur, tableauImages);

    let zone = null;
    let cibles = document.querySelectorAll(".section");
    new ScrollAnimator(zone, cibles);

    // document.addEventListener("keydown", function (event) {
    //     console.log(event);
    // });
}

// function onClicElement(event) {
//     // let currentTarget = event.currentTarget; //L'élément attaché au AddEventListener
//     let target = event.target; //Le VRAI déclencheur
//     // console.log("clic", currentTarget, target);

//     let paragraphe = target.closest("p");
//     if (paragraphe !== null) {
//         compteur++;
//         if (compteur >= 5) {
//             header.removeEventListener("dblclick", onClicElement);
//         }
//         console.log("clic ", compteur);
//     }
// }

init();
