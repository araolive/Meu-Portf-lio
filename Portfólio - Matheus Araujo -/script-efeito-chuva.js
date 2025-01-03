// script.js
const rainContainer = document.getElementById('rain-container');
const numberOfDrops = 50; // Número de gotas de chuva

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    
    // Posiciona a gota de chuva aleatoriamente ao longo da largura da tela
    raindrop.style.left = `${Math.random() * 100}vw`;
    
    // Define uma duração de animação aleatória para cada gota de chuva
    raindrop.style.animationDuration = `${0.5 + Math.random() * 4.5}s`;
    
    // Adiciona a gota de chuva ao contêiner
    rainContainer.appendChild(raindrop);
    
    // Remove a gota de chuva após a animação terminar para evitar acúmulo no DOM
    raindrop.addEventListener('animationend', () => {
        raindrop.remove();
    });
}

// Cria várias gotas de chuva
for (let i = 0; i < numberOfDrops; i++) {
    setTimeout(createRaindrop, i * 300); // Ajusta o tempo de criação para que as gotas não sejam criadas todas de uma vez
}

// Adiciona novas gotas de chuva continuamente
setInterval(() => {
    for (let i = 0; i < numberOfDrops / 5; i++) { // Ajusta a quantidade e a frequência conforme necessário
        createRaindrop();
    }
}, 500);