// Define un filtro personalizado llamado "currency".
Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});

var demo = new Vue({
    el: '#main',
    data: {
        // Define las propiedades del modelo. La vista hará un loop
        // atraves del array services. y generará un elemento li
        // por cada uno de estos items.
        services: [
            {
                name: 'Web Development',
                price: 300,
                active:true 
            },{
                name: 'Design',
                price: 400,
                active:false
            },{
                name: 'Integration',
                price: 250,
                active:false
            },{
                name: 'Training',
                price: 220,
                active:false
            }
        ]
    },
    methods: {
        toggleActive: function(s){
            s.active = !s.active;
        },
        total: function(){

            var total = 0;

            this.services.forEach(function(s){
                if (s.active){
                    total+= s.price;
                }
            });

           return total;
        }
    }
});