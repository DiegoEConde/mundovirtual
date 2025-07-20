/*
//Array con todos los paises de habla hispana para futura carga en el select

const paisesHispanohablantes = [
  { codigo: "AR", nombre: "Argentina" },
  { codigo: "BO", nombre: "Bolivia" },
  { codigo: "CL", nombre: "Chile" },
  { codigo: "CO", nombre: "Colombia" },
  { codigo: "CR", nombre: "Costa Rica" },
  { codigo: "CU", nombre: "Cuba" },
  { codigo: "DO", nombre: "República Dominicana" },
  { codigo: "EC", nombre: "Ecuador" },
  { codigo: "SV", nombre: "El Salvador" },
  { codigo: "ES", nombre: "España" },
  { codigo: "GT", nombre: "Guatemala" },
  { codigo: "HN", nombre: "Honduras" },
  { codigo: "MX", nombre: "México" },
  { codigo: "NI", nombre: "Nicaragua" },
  { codigo: "PA", nombre: "Panamá" },
  { codigo: "PY", nombre: "Paraguay" },
  { codigo: "PE", nombre: "Perú" },
  { codigo: "PR", nombre: "Puerto Rico" },
  { codigo: "UY", nombre: "Uruguay" },
  { codigo: "VE", nombre: "Venezuela" },
  { codigo: "GE", nombre: "Guinea Ecuatorial" }
];

//Base de codigo dinamico para cargarlo en el select

const select = document.getElementById("pais");
select.innerHTML = `<option value="">-- Selecciona país --</option>`;

paises.forEach(pais => {
  const op = document.createElement("option");
  op.value = pais.codigo;
  op.textContent = pais.nombre;
  select.appendChild(op);
});
*/
