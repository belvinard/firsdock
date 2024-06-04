
/*const loader = docuent.querySelector(".loader");

window.addEventListener('load', () => {

    loader.classList.add('fondu-out'); 
}) */

/* ************************ js sidebar and header section starts  ************************  */

let body = document.body;

let infoUser = document.querySelector('.header .flex .info-user');

document.querySelector('#user-btn').onclick = () =>{
   infoUser.classList.toggle('active');
}

window.onscroll = () => {
   infoUser.classList.remove('active');

}

let sideBar = document.querySelector('.sidebar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

/* Lorsqu'on clique sur le nom, le sidebar disparaît et on est en plein écran */
document.querySelector('.nom').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
} 

document.querySelector('.sidebar .close-sidebar').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

// add hovered class to selected button item
let buttonItem = document.querySelectorAll(".navbar a");

function activeLink(){

   buttonItem.forEach(item => {
      item.classList.remove("hovered");
   });
   this.classList.add("hovered");
}

buttonItem.forEach(item => item.addEventListener("click", activeLink)); 


/* *************** Onload differents page in the home page starts  *************** */

let btns = document.querySelectorAll('.navbar a');
let iframe = document.querySelector('iframe');
let home = document.getElementById("home");
iframe.style.display = "none";
//console.log(btns, iframe);

btns.forEach((boton) => {
   boton.addEventListener("click", () => {
      
      if(boton.id === 'homeBtn'){
         iframe.style.display = "none";
         home.style.display = "flex";
      }else{
         iframe.style.display = "block";
         home.style.display = "none";
         iframe.src = boton.id;
      }
   })
});

/*document.querySelector('#iframe').onclick = () =>{
   btns.classList.toggle('active');
} */



/* *************** Onload differents page in the home ends  *************** */


/* ************************ js sidebar and header section ends  ************************  */


/* ******************** js home page container starts ***************** */

let previewContainer = document.querySelector('.grid-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.grid-container .photo').forEach(product =>{
    product.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
          
        });
    };
});


previewBox.forEach(close =>{
   close.querySelector('.fa-times').onclick = () => {
       close.classList.remove('active');
       previewContainer.style.display = 'none';

   };
});

