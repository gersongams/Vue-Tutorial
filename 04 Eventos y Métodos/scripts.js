// Instancia de Vue
var primeraApp = new Vue({

  // El elemento DOM para montar nuestro modelo de vista.
  el: '#primeraApp',

  // Definimos las propiedades y les damos valores inciales
  data: {
  	name: 'segundos',
    count: 0,
    timer: null
  },
  
  // Definimos los métodos que usaremos 
  methods: {
  	toggle: function toggle() {
    		if (this.timer) {
      		clearInterval(this.timer);
        	this.timer = null;
        } else {
        	this.timer = setInterval(function() {
          	primeraApp.count += 1;
            }, 1000);
         }
    },
    counterAction: function counterAction() {
    		if (this.timer) {
        	return 'stop';
        } else {
        	return 'start';
        }
    }
  }
});