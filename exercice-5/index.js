
//importation de la fonction
import {setupAlert} from "./events.js"

window.addEventListener("DOMContentLoaded", () => {
    //appel de la fonction avec l'id du bouton et le message à afficher en paramètres
   setupAlert("alert-btn", "Une fenêtre d'alerte");
});
