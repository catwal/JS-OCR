/**
 *
 * @type XMLHttpRequest
 * creation d'une requete synchrone
 */
// Création d'une requête HTTP
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false);
// Envoi de la requête
req.send(null);
// Affiche la réponse reçue pour la requête
console.log(req.responseText);
/**
 * creation d'une requete asynchrone avec creation d'un evenement
 */
var req = new XMLHttpRequest();
//requete asynchrone quand 3eme parametre vaut true
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
// Gestion de l'événement indiquant la fin de la requêten--evenement de type "load"
req.addEventListener("load", function() {
    // Affiche la réponse reçue pour la requête
    console.log(req.responseText);
});
req.send(null);
/**
 * gestion des erreurs
 */
var req = new XMLHttpRequest();
req.open("GET", "http://localhost/javascript-web-srv/data/langage.txt");
////faute dans l'adresse avec localhost declenche l'evenement error
////faute dans le nom du fichier indique numero
//première fction anonyme pour recuperer infos
req.addEventListener("load", function() {
    //retour de la reponse dans le status
    if (req.status >= 200 && req.status < 400) { //reussite de traitement de la requete
        console.log(req.responseText);
    } else {
        //affichage des infos d'erreurs de requete
        console.error(req.status + " " + req.statusText);
    }
});
//evenement type error pour recuperer erreur reseau
req.addEventListener("error", function() {
    //requete n'a pas reussi a atteindre le serveur
    console.log("erreur réseau");
});
req.send(null);


/**
 * gestion du format JSON par JS
 * JSON.parse = transforme chaine carac JSON en JS objet
 * JSON.stringify = transfome JS objet en chaine carac JSON
 * gere variable et tableau de données entier
 */
var avion = [
    {
        marque: "airbus",
        couleur: "Rouge",
        num: "A380",
    },
    {
        marque: "airbus",
        couleur: "Bleu",
        num: "A320",
    }
];
console.log(avion);


//transformation de l'objet JS en chaine de caract JSON
var texteAvion = JSON.stringify(avion);
console.log(texteAvion);
//transformation de la chaine de carac JSON en objet JS
console.log(JSON.parse(texteAvion));

//appel d'AJAX via fichier ajax.js
ajaxGet("http://localhost/javascript-web-srv/data/films.json", function(reponse) {
    var films = JSON.parse(reponse);
    films.forEach(function(film) {
        console.log(film.titre);
    });
});

