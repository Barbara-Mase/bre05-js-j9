
export function setupAlert(buttonId, message) {
    //déclaration de l'élement qu'on va récupérer grace à son id
    let button = document.getElementById(buttonId);
    
    //Déclaration de l'évenèment à surveiller sur l'élément sélectionné plus haut
    button.addEventListener("click", (event) => {
        //évenement déclenché au click (ici une fenêtre d'alerte)
        window.alert(message);
    })
}