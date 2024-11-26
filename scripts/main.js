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
// variables
let clicks = 0; 
let timeLeft = 10; 
let timerInterval;
// Función para el temporizador 
function startTimer() {
  document.getElementById('startButton').style.display = 'none'; 
  // oculta botón "Comenzar" 
  timerInterval = setInterval(function () {
    timeLeft--;
    document.getElementById('timer').innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById('result').innerText = `Total de clicks: ${clicks}`;
      document.getElementById('clickCircle').style.pointerEvents = 'none';
      document.getElementById('nextButton').style.display = 'block'; // muestra botón "Siguiente"
    }
  }, 1000);
} // cuenta los clics
document.getElementById('clickCircle').addEventListener('click', function () {
  clicks++; this.innerText = clicks;
}); // inicia el juego al hacer clic en "Comenzar" 
document.getElementById('startButton').addEventListener('click', startTimer); 
// redirige a la siguiente página
document.getElementById('nextButton').addEventListener('click', function () {
  window.location.href = "reto_2.html";  
});