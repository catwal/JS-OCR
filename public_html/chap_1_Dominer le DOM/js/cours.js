/*la variable document <=> à l'élement de balise html*/

var h = document.head;
console.log(h);

var b = document.body;
console.log(b);

/*la propriété noteType avec
 * ELEMENT_NODE et TEXT_NODE*/
if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}
if (document.body.nodeType === document.TEXT_NODE) {
    console.log("Body est un noeud textuel");
} else {
    console.log("Body est un noeud élément");
}
//Le childNodes - collection ordonnée regroupant tous ses noeuds enfants sous la forme d'objets DOM - on est dans un tableau
console.log(document.body.childNodes[0]);//affiche texte car il y a des espaces et des retours
console.log(document.body.childNodes[1]);//affiche h1

//affichage de tous les noeuds body
for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}
//acceder au parent d'un noeud avec parentNode
var h1 = document.body.childNodes[1];
console.log(h1.parentNode);//affiche le noeud body
