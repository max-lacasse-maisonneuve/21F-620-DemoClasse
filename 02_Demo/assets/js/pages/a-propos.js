import { init as initNavigation, verifierSiPageActive } from "../components/navigation.js";
import { init as initModale, afficherModale } from "../components/modale.js";

// Séparation des données: modules, classes, import CSS, balise template dans HTML
// Importer la navigation
// Importer le code pour la boite modale
//TODO: Expliquer comment faire une boite modale.
//TODO: Au clic de fermeture, modifier le localStorage
//TODO: Au chargement vérifier le localStorage
//TODO: Expliquer le localStorage dans les outils du navigateur
// TODO: Placer une IIFE (immediatly invoked function execution) dans le code principal

(function () {
    let patate = 1;
    function init() {
        initNavigation();
        initModale();
        // localStorage.clear();

        // let utilisateurChaine = localStorage.getItem("utilisateur");
        // let utilisateur = JSON.parse(utilisateurChaine);

        // localStorage.removeItem("modale-ouverte");

        let modaleDejaOuverte = localStorage.getItem("modale-ouverte");
        if (modaleDejaOuverte != "true") {
            setTimeout(function () {
                afficherModale();
            }, 2000);
        }
    }

    init();
})();

// debugger;
