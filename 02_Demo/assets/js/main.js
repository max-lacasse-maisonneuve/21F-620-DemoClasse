// Variables
let sectionActuelle = 0;
let formulaireValide = false;
const donnees = {};

// Éléments HTML
const formulaire = document.querySelector("#formulaire-principal");
const sectionResume = document.querySelector(".resume");
const champs = document.querySelectorAll("input, textarea, select");

//Fonctions
function init() {
    formulaire.addEventListener("submit", onSubmit);
    champs.forEach(function (champ) {
        champ.addEventListener("change", onChangementChamp);
    });
}

function onSubmit(evenement) {
    evenement.preventDefault();

    if (formulaireValide) {
        // formulaire.submit();
        // formulaire.reset();
    }
}

function onChangementChamp(evenement) {
    //Élément qui déclenche l'événement
    const declencheur = evenement.currentTarget;
    const name = declencheur.name;
    const value = declencheur.value;
    const type = declencheur.type;
    const checked = declencheur.checked;
    // console.log(name, value, checked);
    if (type == "checkbox") {
        afficherResumeCheckbox(name, checked);
    } else {
        afficherResume(name, value);
    }
}

function afficherResumeCheckbox(nomChamp, estCoche) {
    const champResume = sectionResume.querySelector(`[data-name="${nomChamp}"]`);
    // console.log(champResume);
    if (champResume !== null) {
        let texte = estCoche ? "OUI" : "NON";
        champResume.textContent = texte;
    }
}

function afficherResume(nomChamp, valeur) {
    const champResume = sectionResume.querySelector(`[data-name="${nomChamp}"]`);
    // console.log(champResume);
    if (champResume !== null) {
        champResume.textContent = valeur;
    }
}

// Exécution
init();
