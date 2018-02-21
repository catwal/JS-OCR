
/*
modification d'un element du DOM
*/
//rajouter une li a une ul -innerHTML pour rajouter contenu HTML
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

//tout vider avec innerHTML
//document.getElementById("langages").innerHTML = '';

//rajouter du texte dans du HTML textContent
document.querySelector("h1").textContent += ' de programmation';
document.querySelector("h1").innerText += ' de programmation';

//rajout d'attribut en JS avec setAttribute
document.querySelector("h1").setAttribute("id", "titre");
//attribut ID, href, value peuvent être rajouter en propriété
document.querySelector("h1").id ="titre";

//rajout de classe avec la propriété classList
var titreElts = document.querySelector("h1");
titreElts.classList.remove("debut");
titreElts.classList.add("titre");
console.log(titreElts);

/*
ajout d'un nouvel element dans le DOM
*/
//3 etapes = creation du nouvel elemts
//definition des info de l'element
// insertion dans le DOM
var pythonElts = document.createElement("li");//creation de l'elmts li
pythonElts.id="python";//creation de l'id
pythonElts.textContent="Python"; //creation du texte
document.getElementById("langages").appendChild(pythonElts);//insertion dans le DOM
/*variante d'ajout d'element*/
var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément

/*
insertion d'un noeud avant un autre noeud
*/
var perlElt = document.createElement("li");
perlElt.id="perl";
perlElt.textContent="Perl";
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

/*
choix exacte du nouveau noeud
*/
//insertAdjacentHTML - positionnement selon le texte HTML
document.getElementById("langages").insertAdjacentHTML("afterBegin", '<li id="javascript">Javascript</li>');

/*
beforebegin
afterbegin
beforeend
afterend
 */

/*
remplacement d'un noeud
 */
//replaceChild
var bashElt = document.createElement("li"); // Création d'un élément li
bashElt.id = "bash"; // Définition de son identifiant
bashElt.textContent = "Bash"; // Définition de son contenu textuel
// Remplacement de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

/*
suppression d'un noeud existant
 */
// par removeChild
document.getElementById("langages").removeChild(document.getElementById("python"));


/*
exercice du cours à faire
 */
document.getElementById("contenu").insertAdjacentHTML("afterend", '<p>En voici une <a href ="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complète.</p></a>');