<template>
   <div class="container d-flex flex-column justify-content-between min-vh-100 py-4">
    <div class="table-container">
      <button class="btn btn-danger" @click="modal=!modal">Add Cliente</button>
      <table class="table">
        <thead>
          <tr>
            <th>CLient Name</th>
            <th>DBO</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Payments</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in items " :key="index">
            <th>{{ item.name }}</th>
            <th>{{ item.dbo }}</th>
            <th>{{ item.phone }}</th> 
            <th>{{ item.email }}</th>
            <th>{{ item.address }}</th>
            <th>{{ item.Payments }}</th>
            <th>{{ item.Amount }}</th>
            <td>
            <button class="btn btn-danger" @click="deleteCliente(item.id)">
              <i class="bi bi-trash"></i> Eliminar
            </button>
            <button class="btn btn-primary"  @click="modalEdit=!modalEdit">
              <i class="bi bi-pencil"></i> Editar
            </button>
          </td>
          </tr>
        </tbody>
      </table>
      <template>
  <!-- Resto de tu código -->

  <!-- Modal -->
  <Modal :show.sync="modal" @reloadClient="obtenerDatosDeAPI"></Modal>  
</template>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ejemplo from '@/components/ejemplo.vue';
import Modal from './Modal.vue';
import ModalEdit from './ModalEdit.vue'
export default {
  components:{
      ejemplo,
      Modal,
      ModalEdit
      
  },
  data() {
    return {
      items: [],
      modal:false
    };
  },

   mounted() {
  this.obtenerDatosDeAPI();
},
  methods: {
    async obtenerDatosDeAPI() {

      axios.get('http://127.0.0.1:8000/api/clients')
      .then(response => {
        console.log(response);
        this.items = response.data;
      })
      .catch(error => {
        console.error(error.res.messa);
      });
  },
    deleteCliente(id){
      axios.delete('http://127.0.0.1:8000/api/clients/'+id)
        .then(response => {
           console.log(response);
           this.items = this.items.filter(item => item.id != id )
        }) 
    },
    miShowMessage(a){
      alert(a)
    }
  },
  computed:{
    totalDeTotales(){
      let miTotal = 0
      this.items.map( el => {
        //console.log();
        miTotal += parseInt(el.Amount)
      })

      return miTotal
    }
  }
};
</script>



