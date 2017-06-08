// Creamos una instancia de Vue 
var ctryList = new Vue({

    // El elemento DOM para montar nuestro modelo de vista.
    el: "#ctryList",
    // Definimos las propiedades y les damos valores inciales
    data: {
        paises : ["Peru", "Ecuador", "Venezuela", "Brasil", "Argentina"]
    },
    // Definimos las funciones que usaremos
    methods: {
        showName: function showName(pais) {
            alert(pais);
        }
    }
})