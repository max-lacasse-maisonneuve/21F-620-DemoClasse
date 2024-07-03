const utilisateur = {
    nom: "Maxime Lacasse",
    courriel: "mlacassegermain@cmaisonneuve.qc.ca",
    estConnecte: true,
};

let nomUtilisateur = utilisateur.nom;
utilisateur.nom = "Patate";

// Window

// console.dir(window);

// Document
// console.dir(document);

// HTMLElement

// Math
// let perimetre = 2 * Math.PI * 45;
// let tableau = [3, 3545, 4545, 35453, 464646];
// let nombreAleatoire = Math.floor(Math.random() * tableau.length);
// console.log(tableau[nombreAleatoire]);
// Date

// Variables
const objetTest = {
    artiste: "Massive Attack",
    album: "Mezzanine",
    prix: 15,
    annee: 1998,
    genre: "rock",
    enStock: false,
    src: "assets/img/albums/mezzanine.webp",
};

const albums = [
    {
        id: 1,
        artiste: "The Beatles",
        album: "Abbey Road",
        prix: 20,
        annee: 1969,
        genre: "rock",
        enStock: true,
    },
    {
        id: 2,
        artiste: "Nirvana",
        album: "Nevermind",
        prix: 100,
        annee: 1991,
        genre: "rock",
        enStock: true,
    },
    {
        id: 3,
        artiste: "Pink Floyd",
        album: "The Dark Side of the Moon",
        prix: 30,
        annee: 1973,
        genre: "rock",
        enStock: true,
    },
    {
        id: 4,
        artiste: "The Rolling Stones",
        album: "Aftermath",
        prix: 10,
        annee: 1966,
        genre: "rock",
        enStock: true,
    },
    {
        id: 5,
        artiste: "The Doors",
        album: "The Doors",
        prix: 5,
        annee: 1967,
        genre: "rock",
        enStock: false,
    },
    {
        id: 6,
        artiste: "Janis Joplin",
        album: "Pearl",
        prix: 20,
        annee: 1971,
        genre: "rock",
        enStock: false,
    },
    {
        id: 7,
        artiste: "Massive Attack",
        album: "Mezzanine",
        prix: 15,
        annee: 1998,
        genre: "rock",
        enStock: false,
    },
    {
        id: 8,
        artiste: "The Beatles",
        album: "Sgt. Pepper's Lonely Hearts Club Band",
        prix: 25,
        annee: 1967,
        genre: "rock",
        enStock: true,
    },
    {
        id: 9,
        artiste: "Massive Attack",
        album: "Blue Lines",
        prix: 15,
        annee: 1991,
        genre: "rock",
        enStock: false,
    },
];
// let albumAleatoire = Math.floor(Math.random() * albums.length);
// console.log(albums[albumAleatoire]);
// let troisiemeAlbum = albums[2];
// let prixTroisiemeAlbum = troisiemeAlbum["prix"];

// let tabCles = Object.keys(troisiemeAlbum);
// let tabValeurs = Object.values(troisiemeAlbum);
// for (let i = 0; i < tabCles.length; i++) {
//     let cle = tabCles[i];
//     let valeur = troisiemeAlbum[cle];
//     // console.log(valeur);
// }

// troisiemeAlbum.patate = true;
// troisiemeAlbum.prix = 1000000;

// delete troisiemeAlbum.patate;
// Accéder à une propriété avec la notation pointée
// Accéder à la propriété  avec la notation par crochet
// Afficher les propriétés de l'objet dans la console
// Boucler sur les clés et les valeurs d'un objet

// Modifier et supprimer les propriétés d'un objet
// Objet prédéfinis Window, Document, Math, ElementHTML,

//=== Live Share
// Créer une fonction qui retourne un album au hasard
function pigeAlbumAleatoire(tableauAlbums) {
    let album;

    // Trouver position aleatoire dans le tableau
    let index = Math.floor(Math.random() * tableauAlbums.length);
    // Retrouver l'élément
    album = tableauAlbums[index];
    // Retourner l'élément
    return album;
}

// let albumTest = pigeAlbumAleatoire(albums);
// console.log(albumTest);

// Créer une fonction qui cherche et retourne un album par nom d'album
function rechercherParNom(nomAlbum, tableauAlbums) {
    let albumTrouve;
    // Chercher dans le tableau
    for (let i = 0; i < tableauAlbums.length; i++) {
        const element = tableauAlbums[i];

        if (element.album == nomAlbum) {
            albumTrouve = element;
            break;
        }
    }
    // Si le nom concorde, on retourne l'album
    return albumTrouve;
}

// let albumTest = rechercherParNom("Patate", albums);
// console.log(albumTest);
// Créer une fonction qui filtre les albums en stock
// function filtreEnStock(tableauAlbums, estEnStock) {
//     let copie = [...tableauAlbums];
//     // let albumsTrouves = [];

//     tableauAlbums.forEach(function (album, index) {
//         if (album.stock == estEnStock) {
//             copie.splice(index, 1);
//         }
//     });
//     return copie;
// }

function filtreEnStock(tableauAlbums, estEnStock) {
    let albumsTrouves = [];

    tableauAlbums.forEach(function (album, index) {
        if (album.enStock == estEnStock) {
            albumsTrouves.push(album);
        }
    });
    return albumsTrouves;
}
const tabTest = filtreEnStock(albums, false);

// Créer une fonction qui cherche et retourne tous les albums d'un artiste

// Créer une fonction qui trie les albums par prix croissant
function trierParPrix(tableauAlbums,) {
    const copie = [...tableauAlbums];

    copie.sort(function (albumA, albumB) {
        if (albumA.prix < albumB.prix) {
            return -1;
        } else if (albumA.prix > albumB.prix) {
            return 1;
        } else {
            return 0;
        }
    });

    return copie;
}
let tabTrie = trierParPrix(albums);
console.log(albums, tabTrie);
