new Vue({
    el: "#desafio",
    data:{
       nome: "Agmar",
       idade: 5,
       imagem: 'http://br.web.img3.acsta.net/r_640_360/newsv7/17/08/16/01/55/197726.png',
       
    },

    methods:{
       numeroRandomico: function(event){
           return Math.random(0,1)
       },
       nome: function(){
           return this.nome
       }
    }
})    
