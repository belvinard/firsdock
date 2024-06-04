

"use strict" //J'utilise la methode "use strict" pour lever davantages les éventuelles erreurs

//Déclaration des variables
var addTask = document.getElementById("addTask"); 
var listContener = document.getElementById("list-contener");
var inputBox = document.getElementById("input-box");


//J'ajoute un évènement de type "click" au bouton "Add" avec le gestionnaire dévènement addEventListener
addTask.addEventListener('click', task);

function task(){
  //Si l'input est vide
  if(inputBox.value === ''){
    alert("You must write something");
  }else{
    //Si l'input n'est pas vide, créer un paragraphe
    var para = document.createElement('p');

  }
  //Insérer ce paragraphe dans notre input
  para.innerHTML = inputBox.value;

  //Styliser le paragraphe
  para.classList.add('stylePara');

  //Insérer le paragraphe dans l'lément list-contener
  listContener.appendChild(para);
  
  //Vider l'input quand le paragraphe est ajouté
  inputBox.value = '';

  //Barré le paragraphe quand on clique dessus
  para.addEventListener('click', function(){
    para.classList.add('para_clicked');
  })

  //Supprimer la tache quand on double clique sur la tâche
    para.addEventListener('dblclick', function(){
        listContener.removeChild(para);
    }) 
} 
