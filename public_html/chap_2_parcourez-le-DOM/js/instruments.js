/*
 Exercice : attributs et classes
*/

// Affiche des informations sur les liens
function infosLiens(){
    var liensElts = document.getElementsByTagName("a");
    var nbreLiens = liensElts.length;
    console.log(nbreLiens);
if(nbreLiens <= 5){
    console.log(liensElts[0].getAttribute("href"));
    console.log(liensElts[nbreLiens - 1].getAttribute("href"));
}
}
//sortie js de la fonction
infosLiens();


// Affiche si un élément possède une classe
function possede (id,classe){
    var instrument =document.getElementById(id);
    if (instrument !== null){
        console.log(instrument.classList.contains(classe));
    }else{
        console.log("aucun ID " + id);
    }
}
//sortie JS
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher false}*/