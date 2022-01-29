document.addEventListener('DOMContentLoaded', init, false);

function init() {

    /// VARIAVEIS GLOBAIS
    let userKey = document.querySelector('section.userKey');
    let randomKey = document.querySelector('section.randomKey');
    let result = document.querySelector('section.result');

    // VARIAVEIS INPUTS
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let num3 = document.getElementById('num3');
    let num4 = document.getElementById('num4');
    let num5 = document.getElementById('num5');
    let es1 = document.getElementById('es1');
    let es2 = document.getElementById('es2');

    // VARIAVEIS NUMEROS RANDOM
    let r1; let r2; let r3; let r4; let r5; let e1; let e2;
    
    // BUTOES
    let submitBtn = document.getElementById('submitBtn');

    // EVENTOS
    submitBtn.addEventListener('click', submit, false);

    // FUNCOES 
    randomNumber();
    console.log('====CHAVE EUROMILHOES====')
    console.log('Numeros:',r1,r2,r3,r4,r5);
    console.log('Estrelas:',e1,e2);
    console.log('=========================')

    function submit(e) {
        userKeyIntoHtml();
        randomNumberIntoHtml();

        if (r1 == num1.value, r2 == num2.value, r3 == num3.value,r4 == num4.value, r5 == num5.value, e1 == es1.value, e2 == es2.value) {
            sameKey();
        } else {
            wrongKey();
        }

        e.preventDefault();
    }   

    function sameKey() {
        result.innerHTML = `<h1>MUITOS PARABENS!!</h1>`;
        userKey.classList.add('green');
        result.classList.add('green');
    }

    function wrongKey() {
        result.innerHTML = `<h1>Fica para a proxima</h1>`;
        userKey.classList.add('red');
        result.classList.add('red');
    }

    function randomNumberIntoHtml() {
        randomKey.innerHTML = `<h3>Numeros:</h3>
                            <p>
                            ${r1}
                            ${r2}
                            ${r3}
                            ${r4}
                            ${r5}
                            ${e1}
                            ${e2}
                            </p>                 
        `;

    }

    function randomNumber(){
        r1 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        r2 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        r3 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        r4 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        r5 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        e1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        e2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    }

    function userKeyIntoHtml(){
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