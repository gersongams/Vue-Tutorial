// Instancia de Vue
var primeraApp = new Vue({
  el: '#primeraApp',
  data: {
  	name: 'segundos',
    count: 0,
    timer: null
  },
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