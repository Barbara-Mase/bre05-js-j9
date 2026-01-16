// vos imports ici
//importation de la fonction depuis dom-utils.js
import { changeTextColor } from "./dom-utils.js";

window.addEventListener("DOMContentLoaded", () => {
    //appel de la variable : on applique le rouge sur le paragraphe avec l'id text-to-color
   changeTextColor("text-to-color", "red");
});
