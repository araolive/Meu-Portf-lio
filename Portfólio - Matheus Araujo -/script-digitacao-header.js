// script.js
const phrases = ["Full Stack Developer", "Soluções Inovadoras"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
const typedTextElement = document.getElementById('typed-text');

function typeLetter() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (currentLetterIndex < currentPhrase.length) {
        typedTextElement.textContent += currentPhrase.charAt(currentLetterIndex);
        currentLetterIndex++;
        setTimeout(typeLetter, 5); // Intervalo entre cada letra (em ms)
    } else {
        setTimeout(eraseText, 1000); // Espera antes de apagar (em ms)
    }
}

function eraseText() {
    if (currentLetterIndex > 0) {
        typedTextElement.textContent = typedTextElement.textContent.slice(0, -1);
        currentLetterIndex--;
        setTimeout(eraseText, 50); // Intervalo entre apagar cada letra (em ms)
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typeLetter, 500); // Espera antes de começar a digitar a próxima frase (em ms)
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    typeLetter();
});