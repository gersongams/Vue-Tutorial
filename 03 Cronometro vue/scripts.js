// Instancia de Vue
var primeraApp = new Vue({
  el: '#primeraApp',
  data: {
  	name: 'segundos',
    count: 0
  }
});

// Función que actualiza el contador
setInterval(function() {
  primeraApp.count += 1;
}, 1000);