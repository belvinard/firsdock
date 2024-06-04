


function openOnglet(evt , name){
  let tabcontent , tablinks;

  /* The getElementsByClassName() method returns a collection of elements with a specified class name(s). */
  tabcontent = document.getElementsByClassName('tabcontent');

  /* Parcourrir tous les éléments ayant pour attribut "tabcontent" */
  for(let i = 0; i < tabcontent.length ; i++){
    tabcontent[i].style.display = 'none';
  }
  
  /* Parcourrir tous les éléments ayant pour attribut "tablinks" */
  tablinks = document.getElementsByClassName('tablinks');
  for(i= 0; i <tablinks.length ; i++){
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(name).style.display ="block" ;
  evt.currentTarget.className += " active";
}