//array-base de datos de consolas (provisional)
const consolas = [
  {
    id: "ps1",
    nombre: "PlayStation",
    imagen: "image/consolas/ps1.png",
    fechaSalida: "03/12/1994",
    disponibilidad: "No disponible",
    joystick: "Control Digital de PlayStation / DualShock",
    descripcion: "La consola que marcó el inicio de Sony en los videojuegos. Popularizó los discos compactos y revolucionó el diseño de juegos en 3D, estableciendo franquicias icónicas como Final Fantasy, Metal Gear y Resident Evil."
  },
  {
    id: "ps2",
    nombre: "PlayStation 2",
    imagen: "image/consolas/ps2.jpg",
    fechaSalida: "04/03/2000",
    disponibilidad: "No disponible",
    joystick: "DualShock 2",
    descripcion: "La consola más vendida de todos los tiempos. Con compatibilidad con juegos de PS1 y soporte para DVD, impulsó sagas como God of War, GTA San Andreas y Shadow of the Colossus."
  },
  {
    id: "ps3",
    nombre: "PlayStation 3",
    imagen: "image/consolas/ps3.jpg",
    fechaSalida: "11/11/2006",
    disponibilidad: "No disponible",
    joystick: "Sixaxis / DualShock 3",
    descripcion: "Primera consola de Sony con Blu-ray y gráficos en HD. Introdujo PSN y experiencias online. Destacó con títulos como The Last of Us, Uncharted y Metal Gear Solid 4."
  },
  {
    id: "ps4",
    nombre: "PlayStation 4",
    imagen: "image/consolas/ps4.webp",
    fechaSalida: "15/11/2013",
    disponibilidad: "No disponible",
    joystick: "DualShock 4",
    descripcion: "Consola que fortaleció la era digital, con gráficos potentes y gran enfoque en los juegos exclusivos. Brilló con God of War, Bloodborne, Horizon Zero Dawn y Spider-Man."
  },
  {
    id: "ps5",
    nombre: "PlayStation 5",
    imagen: "image/consolas/ps5.webp",
    fechaSalida: "12/11/2020",
    disponibilidad: "No disponible",
    joystick: "DualSense",
    descripcion: "La consola actual de Sony, con SSD ultra rápido y gráficos de nueva generación. El DualSense innovó con respuesta háptica y gatillos adaptativos. Títulos como Demon's Souls Remake, Ratchet & Clank: Rift Apart y Spider-Man 2 la destacan."
  }
];

const modal = document.getElementById("modal");
const modalContenido = document.getElementById("modal-contenido");
const cerrar = document.querySelector(".cerrar");

  // Función para crear el HTML del modal según la consola
function mostrarInfoConsola(id) {
    const consola = consolas.find(c => c.id === id);
    if (!consola) return;

    modalContenido.innerHTML = `
      <span class="cerrar">&times;</span>
      <img src="${consola.imagen}" alt="${consola.nombre}" class="modal-img">
      <h2>${consola.nombre}</h2>
      <p><strong>Fecha de salida:</strong> ${consola.fechaSalida}</p>
      <p><strong>Disponibilidad:</strong> ${consola.disponibilidad}</p>
      <p><strong>Joystick:</strong> ${consola.joystick}</p>
      <p class="descripcion">${consola.descripcion}</p>
    `;

    // Vuelvo a asignar el evento al nuevo botón cerrar (porque reescribí el contenido)
    const nuevaCerrar = modalContenido.querySelector(".cerrar");
    nuevaCerrar.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.style.display = "flex";
}

  // Asignar evento click a cada tarjeta con id igual al id del array
consolas.forEach(consola => {
    const tarjeta = document.getElementById(consola.id);
    if (tarjeta) {
      tarjeta.addEventListener("click", () => {
        mostrarInfoConsola(consola.id);
      });
    }
});

  // Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
});