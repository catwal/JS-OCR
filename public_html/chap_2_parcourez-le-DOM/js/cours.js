
//parcourir des elements du Dom selon leur balise
var titresElts = document.getElementsByTagName("h2");
for (var i = 0; i < titresElts.length; i++){
    console.log(titresElts[i]);
}
console.log(titresElts[0]);
console.log(titresElts.length);

//parcourir des elements du Dom selon leur classe
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++){
    console.log(merveillesElts[i]);
}

//recuperer des elements selon leur ID
console.log(document.getElementById("nouvelles"));
console.log(document.getElementById("antiques"));

//pour parcourir des elements CSS
//tous les paragraphes
console.log(document.querySelectorAll("p").length);
//tous les elements de l'id contenu avec du paragraphe
console.log(document.querySelectorAll("#contenu p").length);
//tous les elements ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length);

//tous les elmts fils d'un elmt ID "antiques" ayant classe "exixte"
console.log(document.querySelectorAll("#antiques > .existe").length);

//queryselector seul va afficher le premier element
console.log(document.querySelector("p"));

//innerHTML recupère le HTML
console.log(document.getElementById("contenu").innerHTML);
//innerHTML recupère le HTML
console.log(document.getElementById("antiques").innerHTML);

//textContent affiche le texte, aussi innerText
console.log(document.getElementById("antiques").textContent);
console.log(document.getElementById("antiques").innerText);

//getAttribute pour avoir attribut d'un a
console.log(document.querySelector("a").getAttribute("href"));

//certains attributs sont accessibles comme propriétés: id, href, value
//ID pour 1ere liste
console.log(document.querySelector("ul").id);//get id
console.log(document.querySelector("a").href);//get href

//methode hasAttribute pour verification si un elmt a attribut
if(document.querySelector("a").hasAttribute("href")){
    console.log("Le premier lien possède bien un href")
}else{
    console.log("Le premier lien n'a pas de href actif :(")
}
//classList permet de recuperer les elemts class d'un element sous forme de liste
var classes = document.getElementById("antiques").classList;
console.log(classes.length);//sa longueur
console.log(classes[0]);// affiche le premier element de la classe

//contains - tester la presence d'une classe ds un elmts
if(document.getElementById("antiques").classList.contains("merveilles")){
    console.log("#antiques possède .merveilles")
}else{
    console.log("#antiques ne possède pas .merveilles")
}