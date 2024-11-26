let winCount = 0;

function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.querySelector('.options-row').style.pointerEvents = 'auto';
}

function play(playerChoice) {
    const choices = ["piedra", "papel", "tijeras"];
    const machineChoice = Math.floor(Math.random() * 3) + 1;

    // Mostrar la imagen de la opción elegida por el jugador
    document.getElementById('chosenImage').src = './images/' + choices[playerChoice - 1] + '.png';
    document.getElementById('chosenImage').classList.remove('hidden');

    // Mostrar la imagen de la opción elegida por la máquina
    document.getElementById('machineImage').src = './images/' + choices[machineChoice - 1] + '.png';
    document.getElementById('machineImage').classList.remove('hidden');

    // Esperar un momento para que las imágenes se muestren antes de la comparación
    setTimeout(() => {
        if (playerChoice === machineChoice) {
            alert('Es un empate');
        } else if ((playerChoice === 1 && machineChoice === 3) || 
                   (playerChoice === 2 && machineChoice === 1) || 
                   (playerChoice === 3 && machineChoice === 2)) {
            winCount++;
            document.getElementById('counterValue').innerText = winCount + '/3';
            alert('¡Has ganado esta partida!');
        } else {
            alert('La máquina ha ganado esta partida');
        }

        if (winCount >= 3) {
            alert('¡Has ganado 3 partidas!');
            // Mostrar botón "Siguiente"
            document.getElementById('nextButton').classList.remove('hidden');
            // Deshabilitar las opciones de juego
            document.querySelector('.options-row').style.pointerEvents = 'none';
        }
    }, 500); // Esperar 500ms para que las imágenes se muestren antes de la comparación
}

function nextPage() {
    window.location.href = "resultados.html";
}