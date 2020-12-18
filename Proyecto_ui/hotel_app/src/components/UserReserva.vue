<template>
<div id="UserReserva">
<h5 v-if="busqueda">Id de la reserva: <input type="text" placeholder="Id reserva" v-model="Id_reserva" ></h5>
<button v-on:click="consulta" v-if="busqueda"> Consultar Id reserva </button>
<h5 v-if="resultado">Id Reserva: {{username}}</h5>
<h5 v-if="resultado">Autor : <span> 	{{nombre}}  </span> </h5>
<h5 v-if="resultado">fecha reserva : <span> 	{{fecha_reserva}}  </span> </h5>
<h5 v-if="resultado">hotel : <span> 	{{hotel}}  </span> </h5>
<h5 v-if="resultado">valor : <span> 	{{valor}}  </span> </h5>
<h5 v-if="resultado">destino: <span> 	{{destino}}  </span></h5>
<h5 v-if="resultado">tipo de habitacion : <span> 	{{tipo_habitacion}}  </span> </h5>
<h5 v-if="resultado">fecha de entrada : <span> 	{{fecha_in}}  </span> </h5>
<h5 v-if="resultado">fecha de salida : <span> 	{{fecha_out}}  </span> </h5>
<h5 v-if="resultado">estado : <span> 	{{estado}}  </span> </h5>
<button v-on:click="regresar" v-if="resultado"> volver </button>
</div>
</template>
<script>
import axios from 'axios'; 
export default {
        name: 'UserReserva', 
        data: function (){
            return {
                username: "2", 
                nombre: 2,
                resultado: false,
                busqueda: true
            }
    },
      methods: {
    consulta(){
        this.busqueda=!this.busqueda
        this.resultado=!this.resultado
      this.username=this.Id_reserva 
    let self = this

    axios.get("http://127.0.0.1:8000/user/reserva/" + this.username)
        .then((result) => {
            self.nombre = result.data.nombre
            self.fecha_reserva = result.data.fecha_reserva
            self.hotel = result.data.hotel
            self.valor = result.data.valor
            self.destino = result.data.destino
            self.fecha_in = result.data.fecha_in
            self.fecha_out = result.data.fecha_out
            self.estado = result.data.estado
            self.tipo_habitacion = result.data.tipo_habitacion
        })
        .catch((error) => { 
            alert("ERROR Servidor");
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
    #UserReserva{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column; 
        justify-content: center; 
        align-items: center;
    }
    #UserReserva h5{ 
        font-size: 15px; 
        color: #283747;
    }

    #UserReserva span{ 
        color: rgb(80, 80, 87); 
        font-weight: bold;
    }
     #UserReserva button{ 
  color: #E5E7E9; 
  background:#69b2e4;
  border: 1px solid #E5E7E9;
  border-radius: 5px; 
  padding: 10px 20px;
}

 #UserReserva button:hover{ 
  color: #69b2e4; 
  background: #E5E7E9; 
  border: 1px solid #E5E7E9;
}
</style>


