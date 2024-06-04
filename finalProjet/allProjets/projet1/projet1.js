 

/* On initialise les variables h, mn, s et ms
 * pour mémoriser l'heure courante */
let hr = min = sec = ms = "0" + 0;
let startTimer;  /* pour stocker setIntervall et l'effacer avec clearInterval*/

/* Accéder à nos boutons à partir de son sélecteur CSS associé */
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

//On utilise la méthode addEventListener pour gérer des évènements
startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);

 
/* créer une fonction pour démarrer le chronomètre : fonction start( ) */   
function startStopwatch() {
      
    // La propriété classList renvoie les noms de classe CSS de nos bouton.
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    /* Ici, on utilise la méthode setInterval() pour créer notre chronomètre qui va 
     *s’incrémenter toutes les 100 millisecondes. */
    
    startTimer = setInterval(()=>{
        // On utilise un système de if pour ajouter une seconde au chronomètre tous les 10 dixièmes de secondes 
        
        /* j'utilise l'opérateur tenaire javascript pour formater l'apparence des millisecondes et ajouter 0 aux millisecondes si elles sont inférieures à 10 */
        ms++
        ms = ms < 10 ? "0" + ms : ms;

        /* vérifier si les millisecondes sont égales à 100 et ajoutez un +1 aux secondes, et réglez les millisecondes à 0 */
        if(ms == 100){
            /* j'utilise l'opérateur tenaire javascript pour formater l'apparence des secondes et ajouter 0 aux secondes si elles sont inférieures à 10 */
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }

        /* vérifier si les secondes sont égales à 60 et ajoutez un +1 aux minutes, et réglez les secondes à 0 */
        if(sec == 60){
            /* j'utilise l'opérateur tenaire javascript pour formater l'apparence des minutes et ajouter 0 aux minutes si elles sont inférieures à 10 */
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }

        /* vérifier si les minutes sont égales à 60 et ajoutez un +1 aux heures, et réglez les minutes à 0 */
        if(min == 60){
            /* j'utilise l'opérateur tenaire javascript pour formater l'apparence des heures et ajouter 0 aux heures si elles sont inférieures à 10 */
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }
        
        putValue();
    },10); //1000ms = 1s
}


function stopStopwatch() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
}

function resetStopwatch() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    putValue();
} 

function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
}
    

