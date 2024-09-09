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
}
init();
