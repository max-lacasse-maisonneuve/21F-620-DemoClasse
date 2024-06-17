// Variables
let courriel = "";
let age = "";
let motDePasse = "";
let motConfirmation = "";

// Sélection HTML
const courrielHTML = document.querySelector(".courriel");
const ageHTML = document.querySelector(".age");
const estMajeurHTML = document.querySelector(".est-majeur");

// Exécution

//Demander le courriel
courriel = prompt("Veuillez saisir un courriel");

// Vérifier si le courriel est valide
if (courriel === "" || courriel === null) {
    alert("Le courriel n'est pas valide, désolé. Rechargez la page pour recommencer");
} else {
    // Demander l'âge
    age = prompt("Quel âge avez-vous?");
    age = parseInt(age);

    // Vérifier si l'âge est valide
    if (age === "" || age === null || isNaN(age) === true) {
        alert("L'age n'est pas valide, désolé. Rechargez la page pour recommencer");
    } else {
        // Demander le mot de passe
        motDePasse = prompt("Veuillez saisir un mot de passe");

        // Vérifier si le mot de passe est valide
        if (motDePasse === "" || motDePasse === null) {
            alert("Le mot de passe n'est pas valide, désolé. Rechargez la page pour recommencer");
        } else {
            // Demander la confirmation du mot de passe
            motConfirmation = prompt("Veuillez saisir le mot de passe de nouveau");

            // Vérifier si le 2e mot de passe est valide et si les deux mots de passe concordent
            if (motDePasse === "" || motDePasse === null || motConfirmation !== motDePasse) {
                alert(
                    "Les mots de passe ne concordent pas ou ne sont pas valides, désolé. Rechargez la page pour recommencer"
                );
            } else {
                // Afficher les informations
                courrielHTML.textContent = courriel;
                ageHTML.textContent = `${age} an(s)`;

                // Vérifier si la personne est majeure
                if (age >= 18) {
                    estMajeurHTML.textContent = "Vous êtes majeur";
                } else {
                    estMajeurHTML.textContent = "Vous êtes mineur";
                }
            }
        }
    }
}
