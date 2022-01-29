document.addEventListener('DOMContentLoaded', init, false);

function init() {

    /// VARIAVEIS GLOBAIS
    
    // VARIAVEIS INPUTS

    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let num3 = document.getElementById('num3');
    let num4 = document.getElementById('num4');
    let num5 = document.getElementById('num5');
    let es1 = document.getElementById('es1');
    let es2 = document.getElementById('es2');

    // BUTTOES

    let submitBtn = document.getElementById('submitBtn');

    let userKey = document.querySelector('section.userKey');

    // EVENTOS

    submitBtn.addEventListener('click', submit, false);

    // FUNCOES 

    function submit(e) {
        keyIntoHtml();
        e.preventDefault();
        
    }   

    
    function keyIntoHtml(){
        userKey.innerHTML = `<h3>A tua chave:</h3>
                            <p>
                            ${num1.value}
                            ${num2.value}
                            ${num3.value}
                            ${num4.value}
                            ${num5.value}
                            ${es1.value}
                            ${es2.value}
                            </p>                 
        `;
    }
}