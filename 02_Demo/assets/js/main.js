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

const liensPages = [
    {
        url: "index.html",
        texte: "Accueil",
    },
    {
        url: "contact.html",
        texte: "Page contact",
    },
];

//==== Éléments HTML
const listeAlbumsHTML = document.querySelector(".liste-albums");
const artisteSelection = document.querySelector(".artiste-selection");
const boutonTriAsc = document.querySelector(".tri-asc");
const boutonFiltre = document.querySelector(".filtre");

// Fonctions
function init() {
    // debugger;
    afficherListe(albums);

    boutonFiltre.addEventListener("click", function () {
        filtrerParPrixMin(15);
    });

    boutonTriAsc.addEventListener("click", function () {
        trier(albums, "asc");
    });
}

function afficherListe(tableauAlbum) {
    viderListe();

    tableauAlbum.forEach(function (album) {
        let gabarit = `
        <div class="album">
            <h3>${album.artiste}</h3>
        </div>`;

        listeAlbumsHTML.insertAdjacentHTML("beforeend", gabarit);
        let elementAjoute = listeAlbumsHTML.lastElementChild;
        console.dir(listeAlbumsHTML);
        // debugger;
        elementAjoute.addEventListener("click", function () {
            afficherDetail(album);
        });
    });
}

function viderListe() {
    listeAlbumsHTML.innerHTML = "";
}

function afficherDetail(album) {
    artisteSelection.textContent = album.artiste;
}

function trier(tableau, direction) {
    let copie = [...tableau]; //Copie
    if (direction == "asc") {
        copie.sort(function (a, b) {
            if (a.artiste < b.artiste) {
                return -1;
            } else {
                return 1;
            }
        });
    }
    console.log(copie);
    afficherListe(copie);
}

function filtrerParPrixMin(prixMin) {}

function filtrerParArtiste(artiste) {}

//Exécution
init();
