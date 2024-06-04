
const buttonCodeBar = document.getElementById('buttonCodebBar');
const text = document.getElementById('text');
const box = document.getElementById('box');
const pdfBox = document.getElementById('pdfBox');

buttonCodeBar.onclick = function(){
    if(text.value.length > 0){
        if(text.value.length < 50){
            //generer le code-barres
            box.innerHTML = "<svg id='barcode'></svg>";
            JsBarcode("#barcode", text.value);
            box.style.border = '1px solid #999';
            // Créer un bouton de télécharger le code bar
            pdfBox.innerHTML = "<button onclick='genererPDF()'>Download the barcode</button>"
            //Styliser la boite du bouton pdf
            pdfBox.style.marginTop = "10px";
            pdfBox.style.display = "flex";


        }else{
            box.style.border = "0";
            box.innerHTML = "<p class='error'>The text is too long !</p>";
            pdfBox.style.display = "none"
        }

    }else{
        box.style.border = "0";
        box.innerHTML = "<p class='error'>Fill in the field !</p>";
        pdfBox.style.display = "none"
    }
}

//generer le pdf
function genererPDF(){
    
    var opt = {
        margin:       1,
        filename:     `${text.value}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a6', orientation: 'l' }
        };
    
        // New Promise-based usage:
        html2pdf().set(opt).from(box).save();
    
        /* Old monolithic-style usage:
        html2pdf(box, opt); */
    
}

