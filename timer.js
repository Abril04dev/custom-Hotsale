// Fecha de inicio del Hotsale
const startDate = new Date('2024-05-15T00:00:00');

function actualizarTimer() {
  // Obtener la fecha y hora actual
  const now = new Date();

  // Calcular la diferencia entre la fecha de inicio y la fecha actual
  const diff = startDate - now;

  if (diff <= 0) {
    // Si el evento ya comenzó, mostrar un mensaje
    document.getElementById('timer').innerHTML = 'El Hotsale ha comenzado.';
  } else {
    // Calcular días, horas, minutos y segundos restantes
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Mostrar el tiempo restante
    
    document.getElementById('day').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;
  }
}
setInterval(actualizarTimer, 1000);
actualizarTimer();