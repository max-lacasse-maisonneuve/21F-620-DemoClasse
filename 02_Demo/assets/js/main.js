// Variables

const chemin = ["assets", "img", "albums"];
const albums = [
    "Mezzanine",
    "Back in Black",
    "   The Dark Side of the Moon  ",
    "Abbey Road",
    "Kind of Blue",
    "The Wall",
];

// const template = `
// <div class="album" id="">
//     <img src="assets/img/albums/doors_the_doors.webp" alt="" />
// </div>`;

const conteneurAlbumHTML = document.querySelector(".liste-albums");

//Fonction qui est appelée au chargement du fichier
// Créer une fonction qui affiche les albums au chargement de la page
function init() {
    albums.forEach(function (album, index) {
        let albumHTML = ajouterAlbumHTML(album);
        console.log(albumHTML);
    });
}

// Créer une fonction qui formatte le chemin des images
function formatterChemin(tableauChemin) {
    let chemin = "";
    //Joindre les éléments du tableau
    chemin = `${tableauChemin.join("/")}/`; //Join crée une chaine de caractère

    //Retourner une chaine avec la base du chemin
    return chemin;
}

//Créer une fonction qui formatte la source de l'image d'un album
function formatterNomAlbum(nomAlbum) {
    //Récupérer la base des images
    let base = formatterChemin(chemin);

    //Nettoyer les espaces avant ou arrières
    let nomNettoye = nomAlbum.trim();

    //Mettre en minuscule
    nomNettoye = nomNettoye.toLowerCase();
    //Remplacer les espaces par des _

    nomNettoye = nomNettoye.replaceAll(" ", "_");
    //Retourner la source de l'image. Ex: assets/img/albums/doors_the_doors.webp
    let sourceImage = `${base}${nomNettoye}.webp`;

    return sourceImage;
}

// Créer une fonction qui génère le template HTML et l'injecte dans le DOM
function ajouterAlbumHTML(nomAlbum) {
    let sourceImage = formatterNomAlbum(nomAlbum);
    const template = `
        <div class="album" id="">
            <img src="${sourceImage}" alt="Image pour l'album ${nomAlbum}" />
        </div>`;

    conteneurAlbumHTML.insertAdjacentHTML("beforeend", template);

    let elementHTML = conteneurAlbumHTML.lastElementChild;
    elementHTML.addEventListener("click", function () {
        elementHTML.style.border = "2px solid tomato";
    });
    // Au clic d'une div album, afficher le id dans la console et afficher l'attribut alt de l'image dans la console
    return elementHTML;
}

const img = document.querySelector("img");
img.src = "sldf/sdfsdf/sdf.webp"
let src = img.src
// Au clic du bouton, vider le contenu du conteneur, trier et réafficher les albums

//Exécution
init();
