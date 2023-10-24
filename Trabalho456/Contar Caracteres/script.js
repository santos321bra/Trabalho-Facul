// fazer um contador de caracteres com o script.js com base no index.html

const text = document.querySelector('#text');

const button = document.querySelector('#button');

const result = document.querySelector('.result');

button.addEventListener('click', () => {
    
    const textValue = text.value;

    const resultValue = textValue.length;

    result.innerHTML = `O texto tem ${resultValue} caracteres`;


        
})