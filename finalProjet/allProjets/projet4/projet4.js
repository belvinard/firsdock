
const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisteur');
const contenantResultat = document.getElementById('resultat');

const choixPossible = document.querySelectorAll('button');

let choixUtilisateur;
let resultat;
let choixOrdinateur;

//Evenement 'click sur les buuttons'
choixPossible.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
    //récupération de l'ID du bouton cliqué
    choixUtilisateur = e.target.id;
    //On ajoute l'image qui correspond au choix
    contenantChoixUtilisateur.innerHTML = `<img src="image/${choixUtilisateur}.png">`;
    genererChoixOrdinateur();
    verification();

}))


    //Function pour générer le choix de l'ordinateur
    function genererChoixOrdinateur(){
        random = Math.floor(Math.random() * 3) + 1 //Générer des nombres compris entre 1 et 3
        if(random === 1){//Si random = à 1
            choixOrdinateur = "stone";
            
        }
        if(random === 2){//Si random = à 2
            choixOrdinateur = "paper";
            
        }
        if(random === 3){//Si random = à 3
            choixOrdinateur = "scissors";
            
        }
         //On ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML = `<img src="image/${choixOrdinateur}.png">`;

    }

    //Fonction pour vérifier si le joueur à gagner ou pas
    function verification(){
        if(choixUtilisateur == choixOrdinateur){
            resultat = "Equality";
        }
        
        //Les cas où le joueur perd
        if(choixUtilisateur == "stone" && choixOrdinateur == "paper"){
            resultat = "Lost !";
        }

        if(choixUtilisateur == "paper" && choixOrdinateur == "scissors"){
            resultat = "Lost !";
        }

        if(choixUtilisateur == "scissors" && choixOrdinateur == "stone"){
            resultat = "Lost !";
        }

        //Les cas où le joueur gagne
        if(choixUtilisateur == "stone" && choixOrdinateur == "scissors"){
            resultat = "Won !";
        }

        if(choixUtilisateur == "scissors" && choixOrdinateur == "paper"){
            resultat = "Won !";
        }

        if(choixUtilisateur == "paper" && choixOrdinateur == "stone"){
            resultat = "Won !";
        }

        contenantResultat.innerHTML = resultat;

    }

