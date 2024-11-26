var tasks = [
  {
    description: 'Reto 1',
    isCompleted: false
  },
  {
    description: 'Reto 2',
    isCompleted: false
  },
  {
    description: 'Reto 3',
    isCompleted: false
  },
  {
    description: 'Correo obtenido',
    isCompleted: false
  }
]

function tareaTerminada(index) {
  tasks[index].isCompleted = !tasks[index].isCompleted;
}
function eliminarTarea(index) {
  tasks.splice(index, 1);
}
//////////////////////////////////// RETO 1 funcion que te redirecciona
function navigate() {
  window.location.href = "./reto_1.html";
}
////////////////////////////////// RETO 1
// Inicializar variables
let clicks = 0; let timeLeft = 10; let timerInterval;
// Función para iniciar el temporizador 
function startTimer() {
  document.getElementById('startButton').style.display = 'none'; // Ocultar botón "Comenzar" 
  timerInterval = setInterval(function () {
    timeLeft--;
    document.getElementById('timer').innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById('result').innerText = `Total de clics: ${clicks}`;
      document.getElementById('clickCircle').style.pointerEvents = 'none';
      document.getElementById('nextButton').style.display = 'block'; // Mostrar botón "Siguiente"
    }
  }, 1000);
} // Contar los clics en el círculo
document.getElementById('clickCircle').addEventListener('click', function () {
  clicks++; this.innerText = clicks;
}); // Iniciar la secuencia al hacer clic en el botón "Comenzar" 
document.getElementById('startButton').addEventListener('click', startTimer); // Redirigir a la siguiente página al hacer clic en el botón "Siguiente"
document.getElementById('nextButton').addEventListener('click', function () {
  window.location.href = "reto_2.html"; // Cambia la URL a la página de destino 
});