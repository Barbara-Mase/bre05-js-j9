export function changeTextColor(elementId, color) {
    //récupère l'id d'un élément que l'on entre dans une variable
    let textColor = document.getElementById(elementId);
    //déclare une nouveau style : ici une couleur
    let newColor = textColor.style.color;
    //application de la couleur sur la variable textColor
    textColor.style.color = color;
}