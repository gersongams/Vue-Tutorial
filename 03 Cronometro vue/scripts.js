// Instancia de Vue
var primeraApp = new Vue({

  // El elemento DOM para montar nuestro modelo de vista.
  el: '#primeraApp',
  // Definimos las propiedades y les damos valores inciales
  data: {
  	secs: 'segundos',
    count: 0
  }
});

// Función que actualiza el contador
setInterval(function() {
  primeraApp.count += 1;
}, 1000);