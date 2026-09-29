/*
    Cargar comidas en memoria desde el JSON
*/

fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;                   // Asignar el JSON a la variable comidas
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = [];

const container = document.getElementById('comidaContainer');

fetch('./data/comidas.json')
  .then(response => response.json())
  .then(data => {
    comidas = data;

    comidas.forEach(comida => {
      const card = document.createElement('div');

      card.innerHTML = `
        <h2>${comida.nombre}</h2>

        <p><strong>Categoría:</strong> ${comida.categoria}</p>

        <p><strong>Provincia:</strong> ${comida.provincia}</p>

        <p><strong>Ingredientes:</strong></p>

        <ul>
          ${comida.ingredientes
            .map(ingrediente => `<li>${ingrediente}</li>`)
            .join('')}
        </ul>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al cargar las comidas:', error);
  });