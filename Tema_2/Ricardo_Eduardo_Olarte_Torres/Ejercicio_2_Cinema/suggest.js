let salaCine = setup(5);

const cantidadReserva = 4;

const suggest = (reserva) => {
  if (reserva > salaCine.length) {
    return "Set vacío";
  }

  let filaEncontrada = false;
  let asientosEncontrados = [];

  salaCine.reverse().map((fila) => {
    let sillasEncontradas = fila
      .reverse()
      .filter((silla) => silla.estado == false);
    if (sillasEncontradas.length >= reserva && !filaEncontrada) {
      let sillas = sillasEncontradas.slice(reserva - 1, 1);

      sillas.map((sillaEncontrada) => {
        asientosEncontrados.push(sillaEncontrada.id);
        filaEncontrada = true;
      });
      return;
    }
    //console.log(sillasEncontradas);
    /*{
        if (reserva > 0 && !butaca.estado) {
          butaca.estado = true;
          reserva--;
        }
      });
    } else {
      return "Set vacío";
    }*/
  });

  if (!filaEncontrada) {
    return "Set vacío";
  }

  return salaCine;
};

//suggest(cantidadReserva);

console.log(suggest(cantidadReserva));

// Función para inicializar la matriz de butacas
function setup(N = 10) {
  let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
  let butacas = [];

  for (let i = 0; i < N; i++) {
    // Nueva fila
    let fila = [];
    for (let j = 0; j < N; j++) {
      // Nuevo asiento
      fila.push({
        id: idContador++,
        estado: false, // Estado inicial libre
      });
    }
    butacas.push(fila);
  }
  return butacas;
}
