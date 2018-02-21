//defintion d'une fonction pour nbre clics

function clic(){
    compteurClics++;
    document.getElementById("compteurClics").textContent = compteurClics;
}
var compteurClics = 0;
document.getElementById("clic").addEventListener("click", clic);
document.getElementById("desactiver").addEventListener("click", function(e){
    document.getElementById("clic").removeEventListener("click", clic);
});