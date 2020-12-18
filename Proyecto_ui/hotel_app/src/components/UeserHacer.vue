<template>
<div id="HacerReserva">
<h4 v-if="busqueda">Nombre: <input type="text" placeholder="Nombre" v-model="nombre" ></h4>
<h4 v-if="busqueda">Destino: <input type="text" placeholder="Destino" v-model="destino" ></h4>
<h4 v-if="busqueda">Hotel: <input type="text" placeholder="Hotel" v-model="hotel" ></h4>
<h4 v-if="busqueda">Tipo de habitacion: <input type="text" placeholder="Tipo de habitacion" v-model="tipo_habitacion" ></h4>
<h4 v-if="busqueda">Valor: <input type="text" placeholder="valor" v-model="valor" ></h4>
<h4 v-if="busqueda">Fecha inicio: <input type="text" placeholder="fecha" v-model="fecha_in" ></h4>
<h4 v-if="busqueda">Fecha salida: <input type="text" placeholder="fecha" v-model="fecha_out" ></h4>
<button v-on:click="consulta" v-if="busqueda"> Hacer reserva </button>
<h5 v-if="resultado">{{nombre}}, tu reserva se a creado exitosamente</h5>
<h5 v-if="resultado">estado : <span> 	Activa  </span> </h5>
<button v-on:click="regresar" v-if="resultado"> volver </button>
</div>
</template>
<script>
import axios from 'axios'; 
export default {
        name: 'HacerReserva', 
        data: function (){
            return {
                username: "", 
                nombre: "",
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
    username: this.nombre,
    destino: this.destino,
    hotel: this.hotel,
    tipo_habitacion: this.tipo_habitacion,
    valor: this.valor,
    fecha_in: this.fecha_in,
    fecha_out: this.fecha_out,
  };
console.log(this.post)
    axios.put("http://127.0.0.1:8000/user/reserva/make/", post)
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


