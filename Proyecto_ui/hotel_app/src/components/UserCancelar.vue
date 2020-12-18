<template>
<div id="HacerReserva">
<h5 v-if="busqueda">Id de la reserva: <input type="text" placeholder="Id reserva" v-model="Id_reserva" ></h5>
<button v-on:click="consulta" v-if="busqueda"> cancelar reserva </button>
<h5 v-if="resultado">Id Reserva: {{Id_reserva}}</h5>
<h5 v-if="resultado">estado : <span> 	Cancelada  </span> </h5>
<button v-on:click="regresar" v-if="resultado"> volver </button>
</div>
</template>
<script>
import axios from 'axios'; 
export default {
        name: 'HacerReserva', 
        data: function (){
            return {
                username: "2", 
                nombre: 0,
                resultado: false,
                busqueda: true
            }
    },
      methods: {
    consulta(){
        this.busqueda=!this.busqueda
        this.resultado=!this.resultado
      this.username=this.Id_reserva 
    let post = {
    id_reserva: this.Id_reserva,
  };
console.log(this.post)
    axios.put("http://127.0.0.1:8000/user/reserva/cancel/", post)
    .then((result)=>{
        console.log(result.data);
        })
    .catch((error) => {
                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });  
     
    },
    regresar(){
        this.busqueda=!this.busqueda
        this.resultado=!this.resultado
    }
  },

}
</script>
<style>
    #HacerReserva{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column; 
        justify-content: center; 
        align-items: center;
    }
    #HacerReserva h5{ 
        font-size: 15px; 
        color: #283747;
    }

    #HacerReserva span{ 
        color: rgb(80, 80, 87); 
        font-weight: bold;
    }
     #HacerReserva button{ 
  color: #E5E7E9; 
  background:#69b2e4;
  border: 1px solid #E5E7E9;
  border-radius: 5px; 
  padding: 10px 20px;
}

 #HacerReserva button:hover{ 
  color: #69b2e4; 
  background: #E5E7E9; 
  border: 1px solid #E5E7E9;
}
</style>
