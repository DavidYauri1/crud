<template>
    <div>
      <button @click="openModal">Abrir Modal</button>
  
      <div class="modal" v-if="showModal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <h2>Modal Title</h2>
          <p>Contenido del modal...</p>
          <button @click="closeModal">Cerrar Modal</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      }
    }
  };
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  </style>
  