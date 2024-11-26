let winCount = 0; //contador de partidas

function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.querySelector('.options-row').style.pointerEvents = 'auto';
}

function play(playerChoice) {
    const choices = ["piedra", "papel", "tijeras"];
    const machineChoice = Math.floor(Math.random() * 3) + 1;

    // muestra la imagen
    document.getElementById('chosenImage').src = './images/' + choices[playerChoice - 1] + '.png';
    document.getElementById('chosenImage').classList.remove('hidden');

    // muestra la imagen
    document.getElementById('machineImage').src = './images/' + choices[machineChoice - 1] + '.png';
    document.getElementById('machineImage').classList.remove('hidden');

    // llas imágenes se muestran antes comparar
    setTimeout(() => {
        if (playerChoice === machineChoice) {
            alert('Es un empate');
        } else if ((playerChoice === 1 && machineChoice === 3) || 
                   (playerChoice === 2 && machineChoice === 1) || 
                   (playerChoice === 3 && machineChoice === 2)) {
            winCount++;
            document.getElementById('counterValue').innerText = winCount + '/3';
            alert('¡Has ganado esta partid!');
        } else {
            alert('La máquina ha ganado esta partida');
        }

        if (winCount >= 3) {
            alert('¡Has ganado 3 partdas!');
            // mostra botón "Siguiente"
            document.getElementById('nextButton').classList.remove('hidden');
            // oausa las opciones de juego
            document.querySelector('.options-row').style.pointerEvents = 'none';
        }
    }, 500); //espera .5s antes de comparar
}

function nextPage() {
    window.location.href = "resultados.html";
}