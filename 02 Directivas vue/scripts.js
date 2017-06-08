var ctryList = new Vue({
    el: "#ctryList",
    data: {
        paises : ["Peru", "Ecuador", "Venezuela", "Brasil", "Argentina"]
    },
    methods: {
        showName: function showName(pais) {
            alert(pais);
        }
    }
})