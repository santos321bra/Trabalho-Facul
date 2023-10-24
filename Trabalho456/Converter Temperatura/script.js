
const celsius = document.querySelector('#temp');

const option = document.querySelector('#option');

const button = document.querySelector('#button');

const result = document.querySelector('.result');

button.addEventListener('click', () => {
    
    const temp = Number(celsius.value);

    const optionValue = option.value;

    if (optionValue === 'celsius') {
        result.innerHTML = `${temp}°C = ${temp * 1.8 + 32}°F`;
    } else {
        
        result.innerHTML = `${temp}°F = ${(temp - 32) / 1.8}°C`;


    }
    }
)
