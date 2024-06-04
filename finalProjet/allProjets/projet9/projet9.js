

let error = document.querySelector('.errorMessage');
let longLinks = document.querySelector('.longLinks');
let short = document.querySelector('.result');


function shortLinkFunct(){
    
    // Vérification input
    if(!longLinks.value == ""){
        //vider l'erreur
        error.innerHTML = "";
        //connecction API
        let url1 = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longLinks.value)}`; //lien API en description
        fetch(url1)
        .then((response) => response.text())
        .then((data) => (short.innerHTML = data));

        //Afficher le resultat
        short.style.display = "block";

        if(short.innerHTML.length == 0){
            short.innerHTML = "Lien non valide";
        }
    }else{
        //error
        error.innerHTML = "Veuillez remplir ce champ !";

        short.style.display = "none";
    }
}