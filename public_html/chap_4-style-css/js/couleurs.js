var couleurText = prompt("choissisez une couleur de texte: ");
var couleurFond = prompt("choissisez une couleur de fond: ");
var divsElts =document.getElementsByTagName("div");
for(var i =0; i<divsElts.length; i++){
    divsElts[i].style.color = couleurText;
    divsElts[i].style.backgroundColor = couleurFond;
}
