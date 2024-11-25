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