
/**
 * Ecriture d'une fonction AJAX generique
 * permet d'eviter de tout reecrir en centralisant le code pour execution
 *
 * execution d'un appel AJAX GET
 * en prenant en param l'url cible et la fonction callback appelée en cas de succès
 *
 */
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
            //appel la fonction callback en lui passant la réponse de la requete
        } else {
            console.error(req.status + " " + req.statusText + " " + url)
        }
    });
    req.addEventListener("error", function() {
        console.error("Erreur de reseau avec l'URL " + url);

    });
    req.send(null);
}
//code de lancement de l'appel AJAX
//faut creer une fonction qui gère le rslt puis appeler ajaxGet
function afficher(reponse) {
    console.log(reponse);
}
ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);



