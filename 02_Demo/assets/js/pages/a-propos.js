import { init as initNavigation } from "../components/navigation.js";
import { init as initModale, afficherModale } from "../components/modale.js";
import Test from "../classes/Test.js";
import Carrousel from "../classes/Carrousel.js";
import ScrollAnimator from "../classes/ScrollAnimator.js";

function init() {
    initNavigation();

    let carrouselConteneur = document.querySelector("[data-carrousel]");
    let tableauImages = ["assets/img/albums/aftermath.webp", "assets/img/albums/abbey_road.webp"];

    let carrousel = new Carrousel(carrouselConteneur, tableauImages);

    let zone = null;
    let cibles = document.querySelectorAll(".section");
    new ScrollAnimator(zone, cibles);
    // let conteneurHTML = document.querySelector(".test");

    // conteneurHTML.addEventListener("click", () => {
    //     // console.log(this);
    //     // this == event.currentTarget
    // });

    // let obj1 = new Test("Maxime", 45, conteneurHTML);
    // let obj2 = new Test("Caroline", 60, conteneurHTML);
    // let obj3 = new Test("Eddy", 70, conteneurHTML);

    //Utilisation de propriétés
    // elementTestHTML.textContent = obj2.nom;

    //Utilisation de méthodes
    // obj1.afficher();
    // obj2.afficher();

    // console.log(obj1, obj2, obj3);
    // let tableau = [23, 4, 5];

    // tableau.forEach((element) => {});
}
//Dans un contexte de module, this = undefined dans le script principal,
// window dans un script sans type=module
// console.log(this);

init();
