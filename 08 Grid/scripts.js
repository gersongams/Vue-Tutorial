var demo = new Vue({
    el: '#main',
    data: {
        // The layout mode, possible values are "grid" or "list".
        layout: 'grid',

        articles: [
            {
                "url": "https://es.wikipedia.org/wiki/Machu_Picchu",
                "city": "Cuzco",
                "image": "https://goo.gl/3QvPCq",
                "thumbnail_image": "https://goo.gl/76VY9N",
                "title": "Machu Picchu"
            }, {
                "url": "https://es.wikipedia.org/wiki/Valle_del_Colca",
                "city": "Arequipa",
                "image": "https://goo.gl/IPNhJR",
                "thumbnail_image": "https://goo.gl/76VY9N",
                "title": "Valle del Colca"
            }, {
                "url": "https://es.wikipedia.org/wiki/Reserva_nacional_de_Paracas",
                "city": "Ica",
                "image": "https://goo.gl/5pNL7s",
                "thumbnail_image": "https://goo.gl/76VY9N",
                "title": "Reserva Nacional de Paracas"
            }, {
                "url": "https://es.wikipedia.org/wiki/Huascar%C3%A1n",
                "city": "Ancash",
                "image": "https://goo.gl/Xpu6Eh",
                "thumbnail_image": "https://goo.gl/76VY9N",
                "title": "Nevado Huascaran"
            }, {
                "url": "https://es.wikipedia.org/wiki/Ku%C3%A9lap",
                "city": "Amazonas",
                "image": "https://goo.gl/d3Rg8p",
                "thumbnail_image": "https://goo.gl/76VY9N",
                "title": "Ku\u00e9lap"
            }, {
                "url": "https://es.wikipedia.org/wiki/Titicaca",
                "city": "Puno",
                "image": "https://goo.gl/TozOGd",
                "thumbnail_image": "https://goo.gl/76VY9N",
                "title": "Lago Titicaca"
            }
        ]
    }
});