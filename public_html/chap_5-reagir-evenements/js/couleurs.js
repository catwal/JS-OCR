//definition de la fonction
document.addEventListener("keypress", function (ev) {
    var touche = String.fromCharCode(ev.charCode); //recup caract touche
    touche = touche.toUpperCase(); //indifferent maj ou min
    var couleur = ""; //iniatilisation du switch
  switch (touche) {
      case "B":
          couleur = "white";
          break;
      case "J":
          couleur = "yellow";
          break;
      case "V":
          couleur = "green";
          break;
      case "R":
          couleur = "red";
          break;
      default:
          console.log("touche " + touche + " non-gérée");
  }

  var divs = document.getElementsByTagName("div");
  for (var i = 0; i<divs.length; i++){
      divs[i].style.backgroundColor = couleur;
  }
});