// Instancia de Vue
var app = new Vue({

  // El elemento DOM para montar nuestro modelo de vista.
  el: '#app',

  // Definimos las propiedades y les damos valores inciales
  data: {
  	name: 'segundos',
    count: 0,
    timer: null
  },
  
  // Definimos los métodos que usaremos 
  methods: {
    // El método toogle inicia|detiene el contador
  	toggle: function toggle() {
    		if (this.timer) {
      		clearInterval(this.timer);
        	this.timer = null;
        } else {
        	this.timer = setInterval(function() {
          	app.count += 1;
            }, 1000);
         }
    },
    // El método counterAction lo que hará será setear start o stop como texto del boton
    counterAction: function counterAction() {
    		if (this.timer) {
        	return 'stop';
        } else {
        	return 'start';
        }
    }
  }
});