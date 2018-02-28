/*
 Activité 1
 */

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
var spanElt = document.createElement("span");

listeLiens.forEach(function(listeLiens) {

    var lienElt = document.createElement("div");
    lienElt.setAttribute("class", "lien");
    var strongElt = document.createElement("a");

    strongElt.textContent = listeLiens.titre;
    strongElt.style.color = "#428bca";
    strongElt.setAttribute("href", listeLiens.url);
    var urlElt = document.createElement("p");
    urlElt.textContent = listeLiens.url;

    var pElt = document.createElement("p");
    pElt.textContent = "Ajouté par " + listeLiens.auteur;

    lienElt.appendChild(strongElt);
    lienElt.appendChild(urlElt);
    lienElt.appendChild(pElt);
    spanElt.appendChild(lienElt);

});
document.getElementById("contenu").appendChild(spanElt);