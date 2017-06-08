// Creamos una instancia de Vue 
var demo = new Vue({

    // El elemento DOM para montar nuestro modelo de vista.
    el: '#main',

    // Definimos las propiedades y les damos valores inciales
    data: {
        show_tooltip: false,
        text_content: 'Edit me.'
    },

    // Funciones que usaremos
    methods: {
        hideTooltip: function(){
            // cuando el modelo cambie la vista cambiará automaticamente
            this.show_tooltip = false;
        },
        toggleTooltip: function(){
            this.show_tooltip = !this.show_tooltip;
        }
    }
})