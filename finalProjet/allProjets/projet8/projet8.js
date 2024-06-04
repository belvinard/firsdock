
function genPassword() {
    /*Générer le mot de passe */
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    /*Longeur du lot de passe */
    let passwordLength = 12;
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    /*Afficher le mot de passe */
    document.getElementById("password").value = password;
}

//Copier le mot de passe
function copyPassword() {
  let copyText = document.getElementById("password");

  if(copyText.value == 0){
    alert('Empty box ! Nothing to copy');
  }else{
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
    alert("copied to clipboard")

  }
  
}