//insertion du value qui insère la value pour l'ID
var pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "cat";
/**
 * gestion du focus
 * rajout d'un evenement qui donne une information supplémentaire quand on clique dessus
 * 
 */
//affichage d'un message contextuel pour la saisie d'un pseudo
pseudoElt.addEventListener("focus", function (){
	document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";//rajout dans la page
});
//Suppression du message contextuel ---
pseudoElt.addEventListener("blur", function(ev){
	document.getElementById("aidePseudo").textContent = "";
});
//Focus sur la zone de saisie du pseudo
pseudoElt.blur();

/**
 * Les elements d'options
 */
//les checkbox a cocher - affichage de la demande de confirmation d'inscription = evenement type CHANGE reponse true/false
document.getElementById("confirmation").addEventListener("change", function( ev){
	console.log("demande de confirmation: " + ev.target.checked);
});

/**
 * boutons radio
 */
//ev type CHANGE -- affichage du bouton choisie dans console
var radioElts = document.getElementsByName("abonnement");
console.log(radioElts.length);
for (var i = 0; i < radioElts.length;  i++){
	radioElts[i].addEventListener("change", function (ev){
		console.log("Formule d'abonnement choisi: " + ev.target.value);
	});
};

/**
 * Listes deroulantes -- type change = retourne true false
 */
//affichage du code de nationalité choisie
document.getElementById("nationalite").addEventListener("change", function (e){
	console.log("Code de nationalité: " + e.target.value);
});

/**
 * Le formulaire comme element du DOM
 * balise form =  element du DOM avec propriété element
 * element form a une propriété appelée 'elements' qui rassemblent les champs de saisie
 * on recupère tous les types dans formulaires pour recuperer les saisies, pas les Id
 */
//acces aux champs du formulaire
var form = document.querySelector("form");
console.log("Nombre de champs de saisie: " + form.elements.length);//affiche nbre (10)
console.log(form.elements[0].name);// affiche pseudo
console.log(form.elements.mdp.type);//mdp=name, *affichera passeword le type

/**
 * Soumission du formulaire
 * Script pour recuperer toutes les infos de la soumission en cl et ajout du preventDefault pour
 * annuler envoi du formulaire par le bouton submit 
 * evenement de type submit
 */
form.addEventListener("submit", function (e){
	//definition des 3 var pour recuperer valeurs taper avant submit
	var pseudo = form.elements.pseudo.value;//insertion du name pour recuperer value taper
	var pwd = form.elements.mdp.value;
	var courriel = form.elements.courriel.value;
	console.log("Vous avez choisi le pseudo: " + pseudo + " vous avez choisi le mdp: "+ pwd + " vous avez choisi le courrier: " + courriel);
	//pour checkbox faire un if - ex de confirmation avec lequel checked
	if(form.elements.confirmation.checked){
		console.log("vous avez demandé une confirmation d'inscription'");
	}else{
		console.log("vous n'avez pas demandé une confirmation d'inscription''");
	}
//pour bouton radio faire un switch case avec recupération de la value selon value
switch(form.elements.abonnement.value){
	case "abonewspromo":
		console.log("vous êtes abonné a la news et aux promos");
		break;
	case "abonews":
		console.log("vous etes abonné aux news")
		break;
	case "aborien":
		console.log("vous n'etes abonné à rien'");
		break;
	default:
		console.log("Erreur");		
}
//pour liste deroulante, switch avec value selon value
switch (form.elements.nationalite.value){
	case "FR":
		console.log("nationalité FR");
		break;
	case "BE":
		console.log("nationalité BE");
		break;
	case "SUI":
		console.log("nationalité SUI");
		break;
	default:
		console.log("erreur");
}
e.preventDefault();
});
/**
 * Validation des données saisies
 * affichage de message selon la saisie ou le choix de l'utilisateur
 * controle de validité se fait a plusieurs moments: au fur et à mesure; a la fin; lors de la soumission
 */
//validation pendant la saise avec exemple longueur mot de passe -evenement type input
document.getElementById("mdp").addEventListener("input", function (e){
	//recuperation de la valeur du pwd
	var pwd = e.target.value; // valeur saisie par l'user
	//defintition de 2 var si faible-default?
	var longueurMdp = "faible";
	var couleurMsg = "red"; // si mdp faible=>texte en rouge
	//création d'un if
	if(pwd.length >= 8){
		longueurMdp = "suffisante";
		couleurMsg = "green";
	}else if (pwd.length >= 4) {
		longueurMdp = "moyenne";
		couleurMsg = "orange";
	}
	//id dans span pour mdp
	var aideMpElt = document.getElementById("aideMdp");
	aideMpElt.textContent = "Longeur : " + longueurMdp;//Affichage du texte
	aideMpElt.style.color = couleurMsg;//affichage couleur du texte
});
//Validation à la fin de la saisie user -- expressions regulières -- event BLUR avec méthode TEST
// https://regex101.com site pour tester les expressions regulières

document.getElementById(	"courriel").addEventListener("blur", function (e){
	//regex <=> haine caract xxx@yyy.zz
	//instanciation des vars
	   var regexCourriel = /.+@.+\..+/;
	var validiteCourriel = "";
	//instanciation du if
	if(!regexCourriel.test(e.target.value)){
		validiteCourriel = "Adresse non valide";
	}
	document.getElementById("aideCourriel").textContent = validiteCourriel;
});
