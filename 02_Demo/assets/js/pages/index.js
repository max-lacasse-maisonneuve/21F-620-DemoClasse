// Révision
// ==== Révision des boucles
// Récupérer tous les éléments avec la classe bouton et afficher chaque élément dans la console à l'aide d'une boucle for et d'une boucle forEach

// ==== Révision des chaines de caractères
let chaine = " Bonjour, je suis une chaine de caracteres   ";
// 1- Créer une fonction qui prend en paramètre une chaine de caractères et qui retourne la chaine de caractères inversée

// 2- Créer une fonction qui prend en paramètre une chaine de caractères et qui retourne la chaine de caractères avec la première lettre de chaque mot en majuscule
function mettrePremiereLettreMajuscule(mot) {
    mot = mot.trim(); //enlève les espaces au début et à la fin
    let tableauMot = mot.split(" "); //transforme la chaine en tableau

    tableauMot.forEach(function (element, index) {
        let premiereLettre = element[0]; //récupère la première lettre
        let enMajuscule = premiereLettre.toUpperCase(); //transforme la première lettre en majuscule
        let restantDuMot = element.slice(1); //récupère le restant du mot
        let nouvelleChaine = enMajuscule + restantDuMot; //concatène la première lettre en majuscule et le reste du mot
        tableauMot[index] = nouvelleChaine;
    });
    let nouveauTableau = tableauMot.join(" ");
    return nouveauTableau;
}

// 3- Créer une fonction qui prend en paramètre une chaine de caractères et qui retourne la chaine de caractères sans les voyelles
function sansVoyelles(chaine) {
    let voyelles = ["a", "e", "i", "o", "u", "y"];
    voyelles.forEach(function (lettre) {
        chaine = chaine.replaceAll(lettre, "");
    });
    return chaine;
}
// 4- Créer une fonction qui prend en paramètre une chaine de caractères et qui remplace les voyelles par un tiret
function replaceVowel(string) {
    let vowel = ["a", "e", "i", "o", "u", "y"];
    newstring = string.toLowerCase();
    for (let i = 0; i < vowel.length; i++) {
        newstring = newstring.replaceAll(`${vowel[i]}`, "-");
    }
    return newstring;
}
// ==== Révision des tableaux
let tableauAnimauxTerrestres = [
    "chien",
    "chat",
    "souris",
    "lapin",
    "cheval",
    "vache",
    "souris",
    "mouton",
    "cochon",
    "souris",
    "poule",
    "canard",
];

let tableauAnimauxMarins = [
    "requin",
    "dauphin",
    "crabe",
    "baleine",
    "méduse",
    "poisson",
    "poulpe",
    "pieuvre",
    "moule",
    "Crabe",
    "esturgeon",
    "étoile de mer",
    "hippocampe",
    "crabe",
];
// Retirer et ajouter un élément au milieu du tableau
// Fusionner les deux tableaux

// 1- Créer une fonction qui prend en paramètre le tableau et qui retourne un tableau avec les éléments commençant par "re" ou "po"
function filtrerAnimaux(tableau) {
    let tableauFinal = [];
    for (i = 0; i < tableau.length; i++) {
        let animal = tableau[i].toLowerCase();
        if (animal.startsWith("re") || animal.startsWith("po")) {
            tableauFinal.push(animal);
        }
    }
    return tableauFinal;
}

// 2- Créer une fonction qui prend en paramètre le tableau et qui retourne un tableau avec les éléments triés par ordre alphabétique incluant les accents
function mettreOrdreAlphabetique(tableau) {
    let clone = [...tableau];
    clone.sort(function (a, b) {
        return a.localeCompare(b);
    });
}
let x = mettreOrdreAlphabetique(tableauAnimauxMarins);
console.log(x);

// 3- Créer une fonction qui prend en paramètre le tableau et qui retourne un tableau sans les doublons
function removeDuplicate(tab) {
    let tabToLowerCase = [...tab];
    for (let i = 0; i < tabToLowerCase.length; i++) {
        tabToLowerCase[i] = tabToLowerCase[i].toLowerCase();
    }
    let newTab = [...new Set(tabToLowerCase)];
    return newTab;
}
// 4-Créer une fonction qui trie les éléments selon la longueur des mots
function filterWordLength(tab) {
    tab.sort(function (a, b) {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            return 0;
        }
    });
    return tab;
}

// ==== Révision des objets
let etudiants = [
    {
        id: 1,
        nom: "Pigeon",
        prenom: "Maxime",
        age: 25,
        resultats: [75, 80, 85, 70, 90],
    },
    {
        id: 2,
        nom: "Lacasse",
        prenom: "Maxime",
        age: 40,
        resultats: [60, 72, 78, 65, 80],
    },
    {
        id: 3,
        nom: "Chartier",
        prenom: "Marc-André",
        age: 22,
        resultats: [67, 72, 96, 76, 80],
    },
    {
        id: 4,
        nom: "Harvey",
        prenom: "Guillaume",
        age: 43,
        resultats: [100, 45, 78, 65, 80],
    },
    {
        id: 5,
        nom: "Pouliot",
        prenom: "Stéphanie",
        age: 35,
        resultats: [96, 84, 76, 65, 100],
    },
    {
        id: 6,

        nom: "Côté-Bouchard",
        prenom: "Simon",
        age: 30,
        resultats: [67, 89, 54, 99, 10],
    },
];
// 1-Créer une fonction qui prend en paramètre un objet étudiant et qui retourne la moyenne des résultats d'un étudiant
function moyenneEtudiant(etudiant) {
    let resultats = etudiant.resultats;
    let moyenne = 0;

    somme = 0;
    for (j = 0; j < resultats.length; j++) {
        let note = resultats[j];
        somme = somme + note;
    }
    moyenne = somme / resultats.length;
    return moyenne;
}
// moyenneEtudiant(etudiants[0]);
// 2-Créer une fonction qui prend en paramètre un tableau d'étudiants et qui retourne les deux plus jeunes étudiants

function trouvDeuxPlusJeunes(tabEtudiants) {
    let clone = [...tabEtudiants];
    clone.sort(function (a, b) {
        if (a.age < b.age) {
            return -1;
        } else {
            return 1;
        }
    });
    let nouveauTableau = [clone[0], clone[1]];
    return nouveauTableau;
}
let jeunes = trouvDeuxPlusJeunes(etudiants);

// 3-Créer une fonction qui trie les étudiants par ordre alphabétique et qui retourne le tableau trié
function sortTab(tab, filtre) {
    let newtab = [...tab];
    newtab.sort(function (a, b) {
        if (a[filtre] < b[filtre]) {
            return -1;
        } else if (a[filtre] > b[filtre]) {
            return 1;
        } else {
            return 0;
        }
    });
    return newtab;
}

// 4-Créer une fonction qui cherche un étudiant par son id et qui retourne l'étudiant trouvé
let id = 2;
function findStudent(tab, idStudent) {
    let noID = "Aucun Id Trouver";
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == idStudent) {
            return tab[i];
        }
    }
    return noID;
}
// ==== Révision des événements
const conteneurHTML = document.querySelector(".grille-étudiant");
const boutonSupprimer = document.querySelector(".supprimer");

function init() {
    afficherEtudiants(etudiants);
    boutonSupprimer.addEventListener("click", function () {
        supprimerDernier(etudiants);
    });
}

// Créer une fonction qui affiche la liste des étudiants dans un conteneur HTML
function afficherEtudiants(tableau) {
    conteneurHTML.innerHTML = "";

    tableau.forEach(function (etudiant) {
        let gabarit = `<div class="etudiant" id="${etudiant.id}">
     <p>Nom: <span class="nom">${etudiant.nom}</span></p>
     <p>Prénom: <span class="prenom">${etudiant.prenom}</span></p>
     <p>Âge: <span class="age">${etudiant.age}</span></p>
    </div>`;

        conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        let elementHTML = conteneurHTML.lastElementChild;

        elementHTML.addEventListener("click", function () {
            afficherDetail(etudiant);
        });
    });
}

// Au clic d'une div étudiant, afficher les résultats et la moyenne de l'étudiant dans la console
function afficherDetail(etudiantInfos) {
    let nomHTML = document.querySelector(".etudiant-nom");
    nomHTML.textContent = etudiantInfos.nom;
    let moyenne = moyenneEtudiant(etudiantInfos);
    console.log(moyenne);
}

// Au clic du bouton, supprimer le dernier étudiant de la liste et afficher la nouvelle liste
function supprimerDernier(tableau) {
    let clone = [...tableau];
    clone.pop();
    afficherEtudiants(clone);
}

// Appeler la fonction pour afficher la liste des étudiants au chargement de la page
init();
