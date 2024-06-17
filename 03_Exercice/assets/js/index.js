// Variables globales
const prenom = "Maxime";
const nom = "Lacasse";

//Sélection HTML
const entete = document.querySelector(".sign-out__username");
const salutation = document.querySelector(".greeting__username");
const carteNom = document.querySelector(".lastname span");

//Exécution du code
entete.textContent = `${prenom} ${nom}`;
salutation.textContent = prenom + " " + nom;
carteNom.textContent = `${nom}`;
