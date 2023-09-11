

let random = "";
let choixRobot = "";
let choixJoueur="";
let scoreJ = 0;
let scoreR = 0;

let buttonPierre=document.getElementById('pierre');
buttonPierre.addEventListener("click",()=>{
 choisirPierre();
 choisirRobot();
 choixJoueur="pierre"
 result();
});

function choisirPierre(){
	console.log("pierre");
}

let buttonPapier=document.getElementById('papier');
buttonPapier.addEventListener("click",()=>{
 choisirPapier();
 choisirRobot();
 choixJoueur="feuille";
 result();
});

function choisirPapier(){
	console.log("feuille");
}

let buttonCiseaux=document.getElementById('ciseaux');
buttonCiseaux.addEventListener("click",()=>{
 choisirCiseaux();
 choisirRobot();
 choixJoueur="ciseaux";
 result();
});

function choisirCiseaux(){
	console.log("ciseaux");
}

function choisirRobot(){
	random = Math.floor(Math.random()*(3-0))
	if (random ==0){
		console.log("pierre");
		choixRobot="pierre"
	}
	if (random ==1){
		console.log("feuille");
		choixRobot="feuille"
	}
	if (random ==2){
		console.log("ciseaux");
		choixRobot="ciseaux"
	}
}

function result(){
	let statusGame ="";
	if(choixJoueur == "pierre"){
		if(choixRobot == "pierre"){
			console.log("égalité")
			statusGame= " fait une égalité"
		}
		else if(choixRobot == "feuille"){
			console.log("perdu")
			statusGame= "perdu"
			scoreR +=1;
		}
		else if(choixRobot == "ciseaux"){
			console.log("gagné")
			statusGame= "gagné"
			scoreJ +=1;
		}
	}
	else if(choixJoueur == "feuille"){
		if(choixRobot == "pierre"){
			console.log("gagné")
			statusGame= "gagné"
			scoreJ +=1;
		}
		else if(choixRobot == "feuille"){
			console.log("égalité")
			statusGame= " fait une égalité"
		}
		else if(choixRobot == "ciseaux"){
			console.log("perdu")
			statusGame= "perdu"
			scoreR +=1;
		}
	}
	else if(choixJoueur == "ciseaux"){
		if(choixRobot == "pierre"){
			console.log("perdu")
			statusGame= "perdu"
			scoreR +=1;
		}
		else if(choixRobot == "feuille"){
			console.log("gagné")
			statusGame= "gagné"
			scoreJ +=1;
		}
		else if(choixRobot == "ciseaux"){
			console.log("égalité")
			statusGame= "fait une égalité"
		}
	}
	let resultat = document.getElementById("resultat")
	let score = document.getElementById("score");
	resultat.textContent = "Vous avez " + statusGame
	score.textContent= " Score joueur = "+ scoreJ + " VS score robot " + scoreR;
}

