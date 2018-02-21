document.getElementById("mdp1").addEventListener("input", function (e){
	var pwd = e.target.value;
	var longueurMdp = "";
	if(pwd.length <= 6){
		longueurMdp = "Le mot de passe doit contenir plus de 6 caractères";
	}
	var infoMdp = document.getElementById("infoMdp");
	infoMdp.textContent = longueurMdp;
})
