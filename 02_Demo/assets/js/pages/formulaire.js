import { init as initNavigation, verifierSiPageActive } from "../components/navigation.js";
// Solution à venir au cours 15
initNavigation();

let form = document.querySelector("form");

form.addEventListener("change", onChange);

document.addEventListener("scroll", function (event) {
    console.log(event);
});

function onChange(event) {
    let target = event.target;
    let champAvecName = target.closest("[name]");

    if (champAvecName != null) {
        console.log(champAvecName);
    }
}
