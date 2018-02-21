//config de la fonction
function clic() {
    console.log("Click !");

}
//variable recuperant le bouton
var boutonElt = document.getElementById("bouton");

//gestionnaire d'evenement-le entre "" coorespond a un type JS d'evenement
boutonElt.addEventListener("click", clic);

//fonction anonyme
var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", function () {
    console.log("cliquetis");
});

//suppression d'un gestionnaire d'evenement-enleve fonction defnie
boutonElt.removeEventListener("click", clic);

/*
la famille des evenements
dans event on a le type et le target
type defini en JS et target l'element du DOM

 */
//ici on a recuperer le nom du type et le texte de la target
document.getElementById("bouton").addEventListener("click", function (event) {
    console.log("Evenement: "+ event.type + " , texte de la cible: " + event.target.textContent);
});


/*
evenements les plus courants
 */
//appui sur une touche de clavier : keypress - charCode (recupère info du clavier mais en valeur num,
// utilisation méthode pour changer en caract la valeur num ->String.fromCharCode)

document.addEventListener("keypress", function (event){
    //console.log("vous avez appuyez sur la touche : " + event.charCode);
    console.log("vous avez appuyez sur la touche : " + String.fromCharCode(event.charCode));

});

//fonction pour recuperer infosclavier - propriété keyCode
function infosClavier(event){
    console.log("evenement clavier : " + event.type + ", touche: "+ event.keyCode);

}

//ajout gestionnaire evenement avec evenement keydown et keyup
document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);

//clic bouton souris
// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
        case 0: // 0 est le code du bouton gauche
            bouton = "gauche";
            break;
        case 1: // 1 est le code du bouton du milieu
            bouton = "milieu";
            break;
        case 2: // 2 est le code du bouton droit
            bouton = "droit";
            break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris
document.addEventListener("click", infosSouris);

// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);

//fin chargement d'une page-evenement load
/*
window.addEventListener("load", function(){
    console.log("page entièrement chargée");
});
*/
//alert avant fermeture de page-eve. beforeunload

window.addEventListener("beforeunload", function (event) {
    var message = "êtes-vous sûr de vouloir quitter la page ?";
    event.returnValue = message; //demande de confirmation standard
   return  message; //demande de confirmation pour certains navigateurs
});

/*
aller plus loin...propagation des evenements dans le DOM de l'enfant au parent
 */
//gestion du clic sur doc
document.addEventListener("click", function () {
    console.log("gestionnaire doc");
});

//gestion clic sur parapgraphe
document.getElementById("para").addEventListener("click", function (ev) {
    console.log("gestionnaire paragraphe");
});

//gestion du bouton
document.getElementById("propa").addEventListener("click", function (event) {
    console.log("gestion du bouton");
    event.stopPropagation();//arret de la propagation au bouton
});

//modifier le cpmt par defaut - methode preventDefault sur event
// Gestion du clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
    console.log("Continuez plutôt à lire le cours ;)");
    e.preventDefault(); // Annulation de la navigation vers la cible du lien
});
