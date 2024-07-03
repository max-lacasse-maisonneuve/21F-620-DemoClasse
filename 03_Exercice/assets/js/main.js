const albums = [
    {
        id: 1,
        artiste: "The Beatles",
        album: "Abbey Road",
        prix: 20,
        annee: 1969,
        genre: "rock",
        enStock: true,
        src: "assets/img/albums/abbey_road.webp",
    },
    {
        id: 2,
        artiste: "Nirvana",
        album: "Nevermind",
        prix: 100,
        annee: 1991,
        genre: "rock",
        enStock: true,
        src: "assets/img/albums/nevermind.webp",
    },
    {
        id: 3,
        artiste: "Pink Floyd",
        album: "The Dark Side of the Moon",
        prix: 30,
        annee: 1973,
        genre: "rock",
        enStock: true,
        src: "assets/img/albums/the_dark_side_of_the_moon.webp",
    },
    {
        id: 4,
        artiste: "The Rolling Stones",
        album: "Aftermath",
        prix: 10,
        annee: 1966,
        genre: "rock",
        enStock: true,
        src: "assets/img/albums/aftermath.webp",
    },
    {
        id: 5,
        artiste: "The Doors",
        album: "The Doors",
        prix: 5,
        annee: 1967,
        genre: "rock",
        enStock: false,
        src: "assets/img/albums/the_doors.webp",
    },
    {
        id: 6,
        artiste: "Janis Joplin",
        album: "Pearl",
        prix: 20,
        annee: 1971,
        genre: "rock",
        enStock: false,
        src: "assets/img/albums/pearl.webp",
    },
    {
        id: 7,
        artiste: "Massive Attack",
        album: "Mezzanine",
        prix: 15,
        annee: 1998,
        genre: "rock",
        enStock: false,
        src: "assets/img/albums/mezzanine.webp",
    },
];

let index = 0;

// Sélection HTML
const imagePrincipale = document.querySelector(".img-conteneur img");
const boutonReculer = document.querySelector(".btn-precedent");
const boutonAvancer = document.querySelector(".btn-suivant");

/**
 * Fonction appelée au chargement de la page
 */
function init() {
    //On place un écouteur d'événement sur chaque bouton
    boutonAvancer.addEventListener("click", avancer);
    boutonReculer.addEventListener("click", reculer);

    //Défi supplémentaire - Afficher un album aléatoire au chargement
    index = Math.floor(Math.random() * albums.length);

    //On affiche l'album au chargement de la page.
    afficherImage(index);
}

/**
 * Fonction qui récupère un album et qui modifie la source de l'image
 * @param {Number} index La position de l'album dans la liste
 */
function afficherImage(index) {
    const album = albums[index];
    imagePrincipale.src = album.src;
}

/**
 * Fonction appelée lors du clic du bouton avancer
 */
function avancer() {
    index++;
    if (index >= albums.length) {
        index = 0;
    }

    afficherImage(index);
}

/**
 * Fonction appelée lors du clic du bouton reculer
 */
function reculer() {
    index--;
    if (index <= 0) {
        index = albums.length - 1;
    }

    afficherImage(index);
}

//Exécution
init();
