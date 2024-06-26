// Sélectionner plusieurs éléments HTML
const elements = document.querySelectorAll(".album");
elements[0].style.display = "none";

console.log(elements);
// Boucle for, forEach
const tableau = ["asjhddashd", 234234, true, 35434];
let premierElement = tableau[0];
let dernierElement = tableau[tableau.length - 1];

// for (let i = 0; i > tableau.length; i++) {
//     const elementTableau = tableau[i];
//     console.log(elementTableau);
// }

tableau.forEach(function (element, index) {
    console.log(element, index);
});

// Ajouter un élément au tableau
tableau.push("Allo"); //Ajoute à la fin -> à Prévilégier en terme de performance
tableau.unshift("Allo mais au début");

// Supprimer un élément du tableau
const dernier = tableau.pop();
const premier = tableau.shift();
console.log(tableau, dernier, premier);

// Modifier un élément du tableau
tableau[2] = "Autre chose";

// Afficher un élément du tableau
let element = tableau[0];

// Trouver un élément dans le tableau
let indexElementTrouve;
for (let i = 0; i < tableau.length; i++) {
    let elementActuel = tableau[i];
    if (elementActuel == "asjhddashd") {
        indexElementTrouve = i;
        break; //Arrête la boucle for
    }
}

console.log(indexElementTrouve);

let tableauAnimaux = ["chat", "lapin", "aligator", "chien", "Castor"];
let tableauNotes = [0, 100, 10, 134, 1, 34, 200, 5, 50];
tableauAnimaux.sort();
tableauNotes.sort(function (nombreA, nombreB) {
    if (nombreA < nombreB) {
        return -1;
    } else if (nombreA > nombreB) {
        return 1;
    } else {
        return 0;
    }
});
console.log(tableauNotes);

// Trier le tableau
// Copier un tableau
let copieTableau = [...tableauNotes];
//==================
const nomsAlbums = ["Rumours", "Back in Black", "The Dark Side of the Moon", "Nevermind", "The Doors", "Mezzanine"];
const prix = [15, 30, 15, 40, 18, 15];

// 1. Créer une fonction qui retourne le prix d'un album. La fonction prend en paramètre un tableau de noms d'album et un tableau de prix et un index.
function trouvePrix(tableauNoms, tableauPrix, nom) {
    //Trouver le nom et trouver le prix associé
    let indexNom;

    for (let i = 0; i < tableauNoms.length; i++) {
        let elementActuel = tableauNoms[i];

        if (elementActuel === nom) {
            indexNom = i;
            break;
        }
    }

    const prix = tableauPrix[indexNom];
    return prix;
}

const prixAlbum = trouvePrix(nomsAlbums, prix, "Nevermind");
console.log(prixAlbum);

// 2. Créer une fonction qui prend en paramètre un tableau de noms d'album et qui retourne un nouveau tableau trié par ordre décroissan
function trierDecroissant(tableauNoms) {
    let cloneTableau = [...tableauNoms];
    cloneTableau.sort(function (elementA, elementB) {
        // return elementA > elementB;
        if (elementA > elementB) {
            return -1;
        } else {
            return 1;
        }
    });
    return cloneTableau;
}
let nouveauTab = trierDecroissant(nomsAlbums);
console.log(nomsAlbums, nouveauTab);

// 3. Créer une fonction qui prend en paramètre un tableau de prix et qui retourne un nouveau tableau sans les doublons

// 4. Créer une fonction qui prend en paramètre un tableau de prix et qui retourne le prix moyen
function trouverPrixMoyen(tableauPrix) {
    let somme = 0;
    //Pour chaque élément du tableau -> forEac
    tableauPrix.forEach(function (prix) {
        //// on ajoute à la somme l'élément
        somme += prix;
    });
    // console.log(somme);
    // calculer moyenne = somme / quantité d'éléments
    const moyenne = somme / tableauPrix.length;
    //Return moyenne
    return moyenne;
}
const prixMoyen = trouverPrixMoyen(prix);
// console.log(prixMoyen);

// 5. Créer une fonction qui retourne un nouveau tableau avec les noms des albums qui ont un prix supérieur à 20
//===================

// Techniques de débogage
// opérateur type of
