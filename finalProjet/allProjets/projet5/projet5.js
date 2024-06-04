

// Définir les variables
let myInput = document.getElementById('password');
let letter = document.getElementById('letter');
let capital = document.getElementById('capital');
let number = document.getElementById('number');
var lenght = document.getElementById('lenght');
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");


/* Cacher et afficher le mot de passe */
eyeicon.onclick = function(){

    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "image/eye-open.png";
        eyeicon.style.display = "block";
    }else{
        password.type = "password";
        eyeicon.src = "image/eye-close.png";
    }

}

password.onclick = function(){
    eyeicon.style.display = "block";
    document.getElementById("message").style.display = "block";
  
}

/* Vérification du mot de passe de l'utilisateur */

//Lorsque l'utilisateur clique sur le champ du mot de passe, afficher la boite message
myInput.onfocus = function(){
    document.getElementById("message").style.display = "block";
    eyeicon.style.display = "block";
}


//Lorsque l'utilisateur commence à taper quelque chose dans le champ de mot de passe 
myInput.onkeyup = function(){

    //Valider les lettres minuscules
    let lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)){
        //Si le mot de passe contient une lettre minuscule, enlever la classe "invalid et ajouter valid"
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else{
        //Si non enlever la classe "valid et ajouter la classe invalid"
        letter.classList.remove('valid');
        letter.classList.add('invalid')
    }


    //Valider les lettres majuscules
    let upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)){
        //Si le mot de passe contient une lettre majuscule, enlever la classe "invalid et ajouter valid"
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    }else{
        //Si non enlever la classe "valid et ajouter la classe invalid"
        capital.classList.remove('valid');
        capital.classList.add('invalid')
    }


    //Valider les lettres nombres
    let numbers = /[0-9]/g;
    if(myInput.value.match(numbers)){
        //Si le mot de passe contient un chiffre, enlever la classe "invalid et ajouter valid"
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else{
        //Si non enlever la classe "valid et ajouter la classe invalid"
        number.classList.remove('valid');
        number.classList.add('invalid')
    }


    //Valider la longueur
    if(myInput.value.length >= 8){
        //Si le mot de passe contient minimum 8 caractères, enlever la classe "invalid et ajouter valid"
        lenght.classList.remove('invalid');
        lenght.classList.add('valid');
    }else{
        //Si non enlever la classe "valid et ajouter la classe invalid"
        lenght.classList.remove('valid');
        lenght.classList.add('invalid')
    }
}


