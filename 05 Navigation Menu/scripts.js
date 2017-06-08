var demo = new Vue({

    // El elemento DOM para montar nuestro modelo de vista.
    el: '#main',

    // este es el modelo
    // Definimos las propiedades y les damos un valor inicial.
    data: {
        active: 'home'
    },

    // Funciones que se usaran
    methods: {
        makeActive: function(item){
            // Cuando un modelo cambia, la vista se actualiza automaticamente
            this.active = item;
        }
    }
});