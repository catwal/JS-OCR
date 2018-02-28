/*recuperation de l'ensemble des données form*/
var form = document.querySelector("form");
/*action au moment de l'appui bouton*/
form.addEventListener("submit", function(event) {
    var mdp1 = form.elements.mdp1.value;
    var mdp2 = form.elements.mdp2.value;
    var message = "Mots de passe OK";
    //message par defaut selon les if et les else
    var message = "mots de passe Ok";
    if (mdp1 === mdp2) {
        if (mdp1.length >= 6) {
            var regexMdp = /\d+/;
            //test est natif de JS pour tester en booleen les regex
            if (!regexMdp.test(mdp1)) {
                message = "Le mot de passe doit contenir au moins un chiffre";
            }
        } else {
            message = "Le mot de passe doit contenir 6 caractères au minimum";
        }

    } else {
        message = "Les mots de passe saisis sont différents";
    }

    document.getElementById("infoMdp").textContent = message;
    event.preventDefault();
});
//
//document.getElementById("mdp1").addEventListener("input", function(e) {
//    var pwd = e.target.value;
//    var longueurMdp = "";
//    if (pwd.length <= 6) {
//        longueurMdp = "Le mot de passe doit contenir plus de 6 caractères";
//    }
//    var infoMdp = document.getElementById("infoMdp");
//    infoMdp.textContent = longueurMdp;
//});
