/// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return [];
    }
}
//cree et renvoi un element HTML -option
function creerEltOption(texte, valeur) {
    var elt = document.createElement("option");
    elt.textContent = texte;
    elt.value = valeur;
    return elt;
}

//cree et renvoi un element HTML -li
function creerEltLi(texte) {
    var elt = document.createElement("li");
    elt.textContent = texte;
    return elt;
}

//gestion de la liste deroulante
//defintion
var maisonElt = document.querySelector("select");
//rajout ds la liste deroulante
maisons.forEach(function(maison) {
    maisonElt.appendChild(creerEltOption(maison.nom, maison.code));
});

//fonction pour creer le changement selon le choix de maison
maisonElt.addEventListener("change", function(event) {
    //la valeur est le code de maison
    var persos = getPersonnages(event.target.value);
    var persosElt = document.getElementById("persos");
    //vidage de la liste
    persosElt.innerHTML = "";


    persos.forEach(function(perso) {
        persosElt.appendChild(creerEltLi(perso));
    })
})
