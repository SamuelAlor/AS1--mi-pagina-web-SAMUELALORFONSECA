document.addEventListener('DOMContentLoaded', function () {
  // Interacción sencilla: dar un número de fila para atender al cliente
  let numeroTurno = 0;

  const boton = document.getElementById('btnTurno');
  const salida = document.getElementById('salidaTurno');

  if (boton && salida) {
    boton.addEventListener('click', function () {
      numeroTurno = numeroTurno + 1;
      salida.textContent = 'Tu número de turno es: ' + numeroTurno + '. En breve te atenderemos.';
    });
  }

  // Botón volver arriba
  const btn = document.querySelector('.back-to-top');
  if (btn) {
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
