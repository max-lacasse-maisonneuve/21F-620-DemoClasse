// Variables
const liensPiedPage = ["  Mentions légales", " Politique de confidentialité   ", " Plan du site   "];

//Sélections HTML
const piedPageHTML = document.querySelector(".listes-liens-secondaires ul");

//Fonction appelée au chargement de la page
function init() {
    liensPiedPage.forEach(function (lien) {
        console.log(lien);
        injecterPiedPage(lien);
    });
}

//Fonction de formattage des liens
function formatterLien(lien) {
    let lienFormatte = lien.trim(); //Nettoie le texte
    lienFormatte = lienFormatte.toLowerCase(); //Met en minuscule

    //Défi 1: Enlève les accents
    lienFormatte = lienFormatte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    lienFormatte = lienFormatte.replaceAll(" ", "-"); //Remplace les espaces par des tirets
    lienFormatte = `${lienFormatte}.html`; //Ajoute l'extension du lien

    return lienFormatte;
}

//Fonction servant à injecter le lien sur la page
function injecterPiedPage(lien) {
    //On formatte le lien
    let lienFormatte = formatterLien(lien);

    //Le gabarit à injecter
    let gabarit = `
        <li>
            <a href="${lienFormatte}"/>${lien}</a>
        </li>`;

    //On ajoute le lien sur la page
    piedPageHTML.insertAdjacentHTML("beforeend", gabarit);

    let lienAjoute = piedPageHTML.lastElementChild;

    //Défi 2: afficher l'attribut href du lien en survol
    lienAjoute.addEventListener("mouseenter", function () {
        let href = lienAjoute.querySelector("a").href;
        console.log(href);
    });
}

init();
