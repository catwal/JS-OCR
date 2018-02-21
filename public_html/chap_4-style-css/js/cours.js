/*
ajout de propriétés CSS style sur du paragraphe
 */

var pElt =document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";
pElt.style.fontFamily="Arial";
pElt.style.backgroundColor = "black";

/*
acceder au style dans du html
 */
var paragrapheElts = document.getElementsByTagName("p");
console.log(paragrapheElts[0].style.color);//rouge
console.log(paragrapheElts[1].style.color);//vert
console.log(paragrapheElts[2].style.color);//rein car pas ds css

/*
acceder au style dans du css
 */
var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle);//affiche italic
console.log(stylePara.color);//affiche valeurs RGB


